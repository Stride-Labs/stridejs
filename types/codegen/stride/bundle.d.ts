import * as _123 from "./airdrop/airdrop";
import * as _124 from "./airdrop/genesis";
import * as _125 from "./airdrop/query";
import * as _126 from "./airdrop/tx";
import * as _127 from "./auction/auction";
import * as _128 from "./auction/genesis";
import * as _129 from "./auction/query";
import * as _130 from "./auction/tx";
import * as _131 from "./autopilot/genesis";
import * as _132 from "./autopilot/params";
import * as _133 from "./autopilot/query";
import * as _134 from "./claim/claim";
import * as _135 from "./claim/genesis";
import * as _136 from "./claim/params";
import * as _137 from "./claim/query";
import * as _138 from "./claim/tx";
import * as _139 from "./epochs/genesis";
import * as _140 from "./epochs/query";
import * as _141 from "./icacallbacks/callback_data";
import * as _142 from "./icacallbacks/genesis";
import * as _143 from "./icacallbacks/packet";
import * as _144 from "./icacallbacks/params";
import * as _145 from "./icacallbacks/query";
import * as _147 from "./icaoracle/callbacks";
import * as _148 from "./icaoracle/contract";
import * as _149 from "./icaoracle/genesis";
import * as _150 from "./icaoracle/icaoracle";
import * as _151 from "./icaoracle/query";
import * as _152 from "./icaoracle/tx";
import * as _153 from "./icqoracle/genesis";
import * as _154 from "./icqoracle/icqoracle";
import * as _155 from "./icqoracle/query";
import * as _156 from "./icqoracle/tx";
import * as _157 from "./interchainquery/v1/genesis";
import * as _158 from "./interchainquery/v1/messages";
import * as _159 from "./interchainquery/v1/query";
import * as _160 from "./mint/v1beta1/genesis";
import * as _161 from "./mint/v1beta1/mint";
import * as _162 from "./mint/v1beta1/query";
import * as _163 from "./records/callbacks";
import * as _164 from "./records/genesis";
import * as _165 from "./records/params";
import * as _166 from "./records/query";
import * as _167 from "./records/records";
import * as _168 from "./stakedym/genesis";
import * as _169 from "./stakedym/query";
import * as _170 from "./stakedym/stakedym";
import * as _171 from "./stakedym/tx";
import * as _172 from "./stakeibc/address_unbonding";
import * as _173 from "./stakeibc/callbacks";
import * as _174 from "./stakeibc/epoch_tracker";
import * as _175 from "./stakeibc/genesis";
import * as _176 from "./stakeibc/gov";
import * as _177 from "./stakeibc/host_zone";
import * as _178 from "./stakeibc/ica_account";
import * as _179 from "./stakeibc/packet";
import * as _180 from "./stakeibc/params";
import * as _181 from "./stakeibc/query";
import * as _182 from "./stakeibc/trade_route";
import * as _183 from "./stakeibc/tx";
import * as _184 from "./stakeibc/validator";
import * as _185 from "./staketia/genesis";
import * as _186 from "./staketia/query";
import * as _187 from "./staketia/staketia";
import * as _188 from "./staketia/tx";
import * as _189 from "./strdburner/genesis";
import * as _190 from "./strdburner/query";
import * as _192 from "./vesting/vesting";
import * as _292 from "./airdrop/query.rpc.Query";
import * as _293 from "./auction/query.rpc.Query";
import * as _294 from "./autopilot/query.rpc.Query";
import * as _295 from "./claim/query.rpc.Query";
import * as _296 from "./epochs/query.rpc.Query";
import * as _297 from "./icacallbacks/query.rpc.Query";
import * as _298 from "./icaoracle/query.rpc.Query";
import * as _299 from "./icqoracle/query.rpc.Query";
import * as _300 from "./mint/v1beta1/query.rpc.Query";
import * as _301 from "./records/query.rpc.Query";
import * as _302 from "./stakedym/query.rpc.Query";
import * as _303 from "./stakeibc/query.rpc.Query";
import * as _304 from "./staketia/query.rpc.Query";
import * as _305 from "./strdburner/query.rpc.Query";
import * as _306 from "./airdrop/tx.rpc.msg";
import * as _307 from "./auction/tx.rpc.msg";
import * as _308 from "./claim/tx.rpc.msg";
import * as _309 from "./icaoracle/tx.rpc.msg";
import * as _310 from "./icqoracle/tx.rpc.msg";
import * as _311 from "./interchainquery/v1/messages.rpc.msg";
import * as _312 from "./stakedym/tx.rpc.msg";
import * as _313 from "./stakeibc/tx.rpc.msg";
import * as _314 from "./staketia/tx.rpc.msg";
export declare namespace stride {
    const airdrop: {
        MsgClientImpl: typeof _306.MsgClientImpl;
        QueryClientImpl: typeof _292.QueryClientImpl;
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
    const auction: {
        MsgClientImpl: typeof _307.MsgClientImpl;
        QueryClientImpl: typeof _293.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            auction(request: _129.QueryAuctionRequest): Promise<_129.QueryAuctionResponse>;
            auctions(request?: _129.QueryAuctionsRequest): Promise<_129.QueryAuctionsResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                placeBid(value: _130.MsgPlaceBid): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createAuction(value: _130.MsgCreateAuction): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateAuction(value: _130.MsgUpdateAuction): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                placeBid(value: _130.MsgPlaceBid): {
                    typeUrl: string;
                    value: _130.MsgPlaceBid;
                };
                createAuction(value: _130.MsgCreateAuction): {
                    typeUrl: string;
                    value: _130.MsgCreateAuction;
                };
                updateAuction(value: _130.MsgUpdateAuction): {
                    typeUrl: string;
                    value: _130.MsgUpdateAuction;
                };
            };
            fromPartial: {
                placeBid(value: _130.MsgPlaceBid): {
                    typeUrl: string;
                    value: _130.MsgPlaceBid;
                };
                createAuction(value: _130.MsgCreateAuction): {
                    typeUrl: string;
                    value: _130.MsgCreateAuction;
                };
                updateAuction(value: _130.MsgUpdateAuction): {
                    typeUrl: string;
                    value: _130.MsgUpdateAuction;
                };
            };
        };
        AminoConverter: {
            "/stride.auction.MsgPlaceBid": {
                aminoType: string;
                toAmino: (message: _130.MsgPlaceBid) => _130.MsgPlaceBidAmino;
                fromAmino: (object: _130.MsgPlaceBidAmino) => _130.MsgPlaceBid;
            };
            "/stride.auction.MsgCreateAuction": {
                aminoType: string;
                toAmino: (message: _130.MsgCreateAuction) => _130.MsgCreateAuctionAmino;
                fromAmino: (object: _130.MsgCreateAuctionAmino) => _130.MsgCreateAuction;
            };
            "/stride.auction.MsgUpdateAuction": {
                aminoType: string;
                toAmino: (message: _130.MsgUpdateAuction) => _130.MsgUpdateAuctionAmino;
                fromAmino: (object: _130.MsgUpdateAuctionAmino) => _130.MsgUpdateAuction;
            };
        };
        MsgPlaceBid: {
            typeUrl: string;
            encode(message: _130.MsgPlaceBid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.MsgPlaceBid;
            fromPartial(object: Partial<_130.MsgPlaceBid>): _130.MsgPlaceBid;
            fromAmino(object: _130.MsgPlaceBidAmino): _130.MsgPlaceBid;
            toAmino(message: _130.MsgPlaceBid): _130.MsgPlaceBidAmino;
            fromAminoMsg(object: _130.MsgPlaceBidAminoMsg): _130.MsgPlaceBid;
            toAminoMsg(message: _130.MsgPlaceBid): _130.MsgPlaceBidAminoMsg;
            fromProtoMsg(message: _130.MsgPlaceBidProtoMsg): _130.MsgPlaceBid;
            toProto(message: _130.MsgPlaceBid): Uint8Array;
            toProtoMsg(message: _130.MsgPlaceBid): _130.MsgPlaceBidProtoMsg;
        };
        MsgPlaceBidResponse: {
            typeUrl: string;
            encode(_: _130.MsgPlaceBidResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.MsgPlaceBidResponse;
            fromPartial(_: Partial<_130.MsgPlaceBidResponse>): _130.MsgPlaceBidResponse;
            fromAmino(_: _130.MsgPlaceBidResponseAmino): _130.MsgPlaceBidResponse;
            toAmino(_: _130.MsgPlaceBidResponse): _130.MsgPlaceBidResponseAmino;
            fromAminoMsg(object: _130.MsgPlaceBidResponseAminoMsg): _130.MsgPlaceBidResponse;
            fromProtoMsg(message: _130.MsgPlaceBidResponseProtoMsg): _130.MsgPlaceBidResponse;
            toProto(message: _130.MsgPlaceBidResponse): Uint8Array;
            toProtoMsg(message: _130.MsgPlaceBidResponse): _130.MsgPlaceBidResponseProtoMsg;
        };
        MsgCreateAuction: {
            typeUrl: string;
            encode(message: _130.MsgCreateAuction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.MsgCreateAuction;
            fromPartial(object: Partial<_130.MsgCreateAuction>): _130.MsgCreateAuction;
            fromAmino(object: _130.MsgCreateAuctionAmino): _130.MsgCreateAuction;
            toAmino(message: _130.MsgCreateAuction): _130.MsgCreateAuctionAmino;
            fromAminoMsg(object: _130.MsgCreateAuctionAminoMsg): _130.MsgCreateAuction;
            toAminoMsg(message: _130.MsgCreateAuction): _130.MsgCreateAuctionAminoMsg;
            fromProtoMsg(message: _130.MsgCreateAuctionProtoMsg): _130.MsgCreateAuction;
            toProto(message: _130.MsgCreateAuction): Uint8Array;
            toProtoMsg(message: _130.MsgCreateAuction): _130.MsgCreateAuctionProtoMsg;
        };
        MsgCreateAuctionResponse: {
            typeUrl: string;
            encode(_: _130.MsgCreateAuctionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.MsgCreateAuctionResponse;
            fromPartial(_: Partial<_130.MsgCreateAuctionResponse>): _130.MsgCreateAuctionResponse;
            fromAmino(_: _130.MsgCreateAuctionResponseAmino): _130.MsgCreateAuctionResponse;
            toAmino(_: _130.MsgCreateAuctionResponse): _130.MsgCreateAuctionResponseAmino;
            fromAminoMsg(object: _130.MsgCreateAuctionResponseAminoMsg): _130.MsgCreateAuctionResponse;
            fromProtoMsg(message: _130.MsgCreateAuctionResponseProtoMsg): _130.MsgCreateAuctionResponse;
            toProto(message: _130.MsgCreateAuctionResponse): Uint8Array;
            toProtoMsg(message: _130.MsgCreateAuctionResponse): _130.MsgCreateAuctionResponseProtoMsg;
        };
        MsgUpdateAuction: {
            typeUrl: string;
            encode(message: _130.MsgUpdateAuction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.MsgUpdateAuction;
            fromPartial(object: Partial<_130.MsgUpdateAuction>): _130.MsgUpdateAuction;
            fromAmino(object: _130.MsgUpdateAuctionAmino): _130.MsgUpdateAuction;
            toAmino(message: _130.MsgUpdateAuction): _130.MsgUpdateAuctionAmino;
            fromAminoMsg(object: _130.MsgUpdateAuctionAminoMsg): _130.MsgUpdateAuction;
            toAminoMsg(message: _130.MsgUpdateAuction): _130.MsgUpdateAuctionAminoMsg;
            fromProtoMsg(message: _130.MsgUpdateAuctionProtoMsg): _130.MsgUpdateAuction;
            toProto(message: _130.MsgUpdateAuction): Uint8Array;
            toProtoMsg(message: _130.MsgUpdateAuction): _130.MsgUpdateAuctionProtoMsg;
        };
        MsgUpdateAuctionResponse: {
            typeUrl: string;
            encode(_: _130.MsgUpdateAuctionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.MsgUpdateAuctionResponse;
            fromPartial(_: Partial<_130.MsgUpdateAuctionResponse>): _130.MsgUpdateAuctionResponse;
            fromAmino(_: _130.MsgUpdateAuctionResponseAmino): _130.MsgUpdateAuctionResponse;
            toAmino(_: _130.MsgUpdateAuctionResponse): _130.MsgUpdateAuctionResponseAmino;
            fromAminoMsg(object: _130.MsgUpdateAuctionResponseAminoMsg): _130.MsgUpdateAuctionResponse;
            fromProtoMsg(message: _130.MsgUpdateAuctionResponseProtoMsg): _130.MsgUpdateAuctionResponse;
            toProto(message: _130.MsgUpdateAuctionResponse): Uint8Array;
            toProtoMsg(message: _130.MsgUpdateAuctionResponse): _130.MsgUpdateAuctionResponseProtoMsg;
        };
        QueryAuctionRequest: {
            typeUrl: string;
            encode(message: _129.QueryAuctionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.QueryAuctionRequest;
            fromPartial(object: Partial<_129.QueryAuctionRequest>): _129.QueryAuctionRequest;
            fromAmino(object: _129.QueryAuctionRequestAmino): _129.QueryAuctionRequest;
            toAmino(message: _129.QueryAuctionRequest): _129.QueryAuctionRequestAmino;
            fromAminoMsg(object: _129.QueryAuctionRequestAminoMsg): _129.QueryAuctionRequest;
            fromProtoMsg(message: _129.QueryAuctionRequestProtoMsg): _129.QueryAuctionRequest;
            toProto(message: _129.QueryAuctionRequest): Uint8Array;
            toProtoMsg(message: _129.QueryAuctionRequest): _129.QueryAuctionRequestProtoMsg;
        };
        QueryAuctionResponse: {
            typeUrl: string;
            encode(message: _129.QueryAuctionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.QueryAuctionResponse;
            fromPartial(object: Partial<_129.QueryAuctionResponse>): _129.QueryAuctionResponse;
            fromAmino(object: _129.QueryAuctionResponseAmino): _129.QueryAuctionResponse;
            toAmino(message: _129.QueryAuctionResponse): _129.QueryAuctionResponseAmino;
            fromAminoMsg(object: _129.QueryAuctionResponseAminoMsg): _129.QueryAuctionResponse;
            fromProtoMsg(message: _129.QueryAuctionResponseProtoMsg): _129.QueryAuctionResponse;
            toProto(message: _129.QueryAuctionResponse): Uint8Array;
            toProtoMsg(message: _129.QueryAuctionResponse): _129.QueryAuctionResponseProtoMsg;
        };
        QueryAuctionsRequest: {
            typeUrl: string;
            encode(message: _129.QueryAuctionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.QueryAuctionsRequest;
            fromPartial(object: Partial<_129.QueryAuctionsRequest>): _129.QueryAuctionsRequest;
            fromAmino(object: _129.QueryAuctionsRequestAmino): _129.QueryAuctionsRequest;
            toAmino(message: _129.QueryAuctionsRequest): _129.QueryAuctionsRequestAmino;
            fromAminoMsg(object: _129.QueryAuctionsRequestAminoMsg): _129.QueryAuctionsRequest;
            fromProtoMsg(message: _129.QueryAuctionsRequestProtoMsg): _129.QueryAuctionsRequest;
            toProto(message: _129.QueryAuctionsRequest): Uint8Array;
            toProtoMsg(message: _129.QueryAuctionsRequest): _129.QueryAuctionsRequestProtoMsg;
        };
        QueryAuctionsResponse: {
            typeUrl: string;
            encode(message: _129.QueryAuctionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.QueryAuctionsResponse;
            fromPartial(object: Partial<_129.QueryAuctionsResponse>): _129.QueryAuctionsResponse;
            fromAmino(object: _129.QueryAuctionsResponseAmino): _129.QueryAuctionsResponse;
            toAmino(message: _129.QueryAuctionsResponse): _129.QueryAuctionsResponseAmino;
            fromAminoMsg(object: _129.QueryAuctionsResponseAminoMsg): _129.QueryAuctionsResponse;
            fromProtoMsg(message: _129.QueryAuctionsResponseProtoMsg): _129.QueryAuctionsResponse;
            toProto(message: _129.QueryAuctionsResponse): Uint8Array;
            toProtoMsg(message: _129.QueryAuctionsResponse): _129.QueryAuctionsResponseProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _128.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _128.GenesisState;
            fromPartial(object: Partial<_128.GenesisState>): _128.GenesisState;
            fromAmino(object: _128.GenesisStateAmino): _128.GenesisState;
            toAmino(message: _128.GenesisState): _128.GenesisStateAmino;
            fromAminoMsg(object: _128.GenesisStateAminoMsg): _128.GenesisState;
            fromProtoMsg(message: _128.GenesisStateProtoMsg): _128.GenesisState;
            toProto(message: _128.GenesisState): Uint8Array;
            toProtoMsg(message: _128.GenesisState): _128.GenesisStateProtoMsg;
        };
        auctionTypeFromJSON(object: any): _127.AuctionType;
        auctionTypeToJSON(object: _127.AuctionType): string;
        AuctionType: typeof _127.AuctionType;
        AuctionTypeSDKType: typeof _127.AuctionType;
        AuctionTypeAmino: typeof _127.AuctionType;
        Params: {
            typeUrl: string;
            encode(_: _127.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.Params;
            fromPartial(_: Partial<_127.Params>): _127.Params;
            fromAmino(_: _127.ParamsAmino): _127.Params;
            toAmino(_: _127.Params): _127.ParamsAmino;
            fromAminoMsg(object: _127.ParamsAminoMsg): _127.Params;
            fromProtoMsg(message: _127.ParamsProtoMsg): _127.Params;
            toProto(message: _127.Params): Uint8Array;
            toProtoMsg(message: _127.Params): _127.ParamsProtoMsg;
        };
        Auction: {
            typeUrl: string;
            encode(message: _127.Auction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.Auction;
            fromPartial(object: Partial<_127.Auction>): _127.Auction;
            fromAmino(object: _127.AuctionAmino): _127.Auction;
            toAmino(message: _127.Auction): _127.AuctionAmino;
            fromAminoMsg(object: _127.AuctionAminoMsg): _127.Auction;
            fromProtoMsg(message: _127.AuctionProtoMsg): _127.Auction;
            toProto(message: _127.Auction): Uint8Array;
            toProtoMsg(message: _127.Auction): _127.AuctionProtoMsg;
        };
    };
    const autopilot: {
        QueryClientImpl: typeof _294.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _133.QueryParamsRequest): Promise<_133.QueryParamsResponse>;
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
    };
    const claim: {
        MsgClientImpl: typeof _308.MsgClientImpl;
        QueryClientImpl: typeof _295.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            distributorAccountBalance(request: _137.QueryDistributorAccountBalanceRequest): Promise<_137.QueryDistributorAccountBalanceResponse>;
            params(request?: _137.QueryParamsRequest): Promise<_137.QueryParamsResponse>;
            claimRecord(request: _137.QueryClaimRecordRequest): Promise<_137.QueryClaimRecordResponse>;
            claimableForAction(request: _137.QueryClaimableForActionRequest): Promise<_137.QueryClaimableForActionResponse>;
            totalClaimable(request: _137.QueryTotalClaimableRequest): Promise<_137.QueryTotalClaimableResponse>;
            userVestings(request: _137.QueryUserVestingsRequest): Promise<_137.QueryUserVestingsResponse>;
            claimStatus(request: _137.QueryClaimStatusRequest): Promise<_137.QueryClaimStatusResponse>;
            claimMetadata(request?: _137.QueryClaimMetadataRequest): Promise<_137.QueryClaimMetadataResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                setAirdropAllocations(value: _138.MsgSetAirdropAllocations): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                claimFreeAmount(value: _138.MsgClaimFreeAmount): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createAirdrop(value: _138.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteAirdrop(value: _138.MsgDeleteAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                setAirdropAllocations(value: _138.MsgSetAirdropAllocations): {
                    typeUrl: string;
                    value: _138.MsgSetAirdropAllocations;
                };
                claimFreeAmount(value: _138.MsgClaimFreeAmount): {
                    typeUrl: string;
                    value: _138.MsgClaimFreeAmount;
                };
                createAirdrop(value: _138.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _138.MsgCreateAirdrop;
                };
                deleteAirdrop(value: _138.MsgDeleteAirdrop): {
                    typeUrl: string;
                    value: _138.MsgDeleteAirdrop;
                };
            };
            fromPartial: {
                setAirdropAllocations(value: _138.MsgSetAirdropAllocations): {
                    typeUrl: string;
                    value: _138.MsgSetAirdropAllocations;
                };
                claimFreeAmount(value: _138.MsgClaimFreeAmount): {
                    typeUrl: string;
                    value: _138.MsgClaimFreeAmount;
                };
                createAirdrop(value: _138.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _138.MsgCreateAirdrop;
                };
                deleteAirdrop(value: _138.MsgDeleteAirdrop): {
                    typeUrl: string;
                    value: _138.MsgDeleteAirdrop;
                };
            };
        };
        AminoConverter: {
            "/stride.claim.MsgSetAirdropAllocations": {
                aminoType: string;
                toAmino: (message: _138.MsgSetAirdropAllocations) => _138.MsgSetAirdropAllocationsAmino;
                fromAmino: (object: _138.MsgSetAirdropAllocationsAmino) => _138.MsgSetAirdropAllocations;
            };
            "/stride.claim.MsgClaimFreeAmount": {
                aminoType: string;
                toAmino: (message: _138.MsgClaimFreeAmount) => _138.MsgClaimFreeAmountAmino;
                fromAmino: (object: _138.MsgClaimFreeAmountAmino) => _138.MsgClaimFreeAmount;
            };
            "/stride.claim.MsgCreateAirdrop": {
                aminoType: string;
                toAmino: (message: _138.MsgCreateAirdrop) => _138.MsgCreateAirdropAmino;
                fromAmino: (object: _138.MsgCreateAirdropAmino) => _138.MsgCreateAirdrop;
            };
            "/stride.claim.MsgDeleteAirdrop": {
                aminoType: string;
                toAmino: (message: _138.MsgDeleteAirdrop) => _138.MsgDeleteAirdropAmino;
                fromAmino: (object: _138.MsgDeleteAirdropAmino) => _138.MsgDeleteAirdrop;
            };
        };
        MsgSetAirdropAllocations: {
            typeUrl: string;
            encode(message: _138.MsgSetAirdropAllocations, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgSetAirdropAllocations;
            fromPartial(object: Partial<_138.MsgSetAirdropAllocations>): _138.MsgSetAirdropAllocations;
            fromAmino(object: _138.MsgSetAirdropAllocationsAmino): _138.MsgSetAirdropAllocations;
            toAmino(message: _138.MsgSetAirdropAllocations): _138.MsgSetAirdropAllocationsAmino;
            fromAminoMsg(object: _138.MsgSetAirdropAllocationsAminoMsg): _138.MsgSetAirdropAllocations;
            fromProtoMsg(message: _138.MsgSetAirdropAllocationsProtoMsg): _138.MsgSetAirdropAllocations;
            toProto(message: _138.MsgSetAirdropAllocations): Uint8Array;
            toProtoMsg(message: _138.MsgSetAirdropAllocations): _138.MsgSetAirdropAllocationsProtoMsg;
        };
        MsgSetAirdropAllocationsResponse: {
            typeUrl: string;
            encode(_: _138.MsgSetAirdropAllocationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgSetAirdropAllocationsResponse;
            fromPartial(_: Partial<_138.MsgSetAirdropAllocationsResponse>): _138.MsgSetAirdropAllocationsResponse;
            fromAmino(_: _138.MsgSetAirdropAllocationsResponseAmino): _138.MsgSetAirdropAllocationsResponse;
            toAmino(_: _138.MsgSetAirdropAllocationsResponse): _138.MsgSetAirdropAllocationsResponseAmino;
            fromAminoMsg(object: _138.MsgSetAirdropAllocationsResponseAminoMsg): _138.MsgSetAirdropAllocationsResponse;
            fromProtoMsg(message: _138.MsgSetAirdropAllocationsResponseProtoMsg): _138.MsgSetAirdropAllocationsResponse;
            toProto(message: _138.MsgSetAirdropAllocationsResponse): Uint8Array;
            toProtoMsg(message: _138.MsgSetAirdropAllocationsResponse): _138.MsgSetAirdropAllocationsResponseProtoMsg;
        };
        MsgClaimFreeAmount: {
            typeUrl: string;
            encode(message: _138.MsgClaimFreeAmount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgClaimFreeAmount;
            fromPartial(object: Partial<_138.MsgClaimFreeAmount>): _138.MsgClaimFreeAmount;
            fromAmino(object: _138.MsgClaimFreeAmountAmino): _138.MsgClaimFreeAmount;
            toAmino(message: _138.MsgClaimFreeAmount): _138.MsgClaimFreeAmountAmino;
            fromAminoMsg(object: _138.MsgClaimFreeAmountAminoMsg): _138.MsgClaimFreeAmount;
            toAminoMsg(message: _138.MsgClaimFreeAmount): _138.MsgClaimFreeAmountAminoMsg;
            fromProtoMsg(message: _138.MsgClaimFreeAmountProtoMsg): _138.MsgClaimFreeAmount;
            toProto(message: _138.MsgClaimFreeAmount): Uint8Array;
            toProtoMsg(message: _138.MsgClaimFreeAmount): _138.MsgClaimFreeAmountProtoMsg;
        };
        MsgClaimFreeAmountResponse: {
            typeUrl: string;
            encode(message: _138.MsgClaimFreeAmountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgClaimFreeAmountResponse;
            fromPartial(object: Partial<_138.MsgClaimFreeAmountResponse>): _138.MsgClaimFreeAmountResponse;
            fromAmino(object: _138.MsgClaimFreeAmountResponseAmino): _138.MsgClaimFreeAmountResponse;
            toAmino(message: _138.MsgClaimFreeAmountResponse): _138.MsgClaimFreeAmountResponseAmino;
            fromAminoMsg(object: _138.MsgClaimFreeAmountResponseAminoMsg): _138.MsgClaimFreeAmountResponse;
            fromProtoMsg(message: _138.MsgClaimFreeAmountResponseProtoMsg): _138.MsgClaimFreeAmountResponse;
            toProto(message: _138.MsgClaimFreeAmountResponse): Uint8Array;
            toProtoMsg(message: _138.MsgClaimFreeAmountResponse): _138.MsgClaimFreeAmountResponseProtoMsg;
        };
        MsgCreateAirdrop: {
            typeUrl: string;
            encode(message: _138.MsgCreateAirdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgCreateAirdrop;
            fromPartial(object: Partial<_138.MsgCreateAirdrop>): _138.MsgCreateAirdrop;
            fromAmino(object: _138.MsgCreateAirdropAmino): _138.MsgCreateAirdrop;
            toAmino(message: _138.MsgCreateAirdrop): _138.MsgCreateAirdropAmino;
            fromAminoMsg(object: _138.MsgCreateAirdropAminoMsg): _138.MsgCreateAirdrop;
            fromProtoMsg(message: _138.MsgCreateAirdropProtoMsg): _138.MsgCreateAirdrop;
            toProto(message: _138.MsgCreateAirdrop): Uint8Array;
            toProtoMsg(message: _138.MsgCreateAirdrop): _138.MsgCreateAirdropProtoMsg;
        };
        MsgCreateAirdropResponse: {
            typeUrl: string;
            encode(_: _138.MsgCreateAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgCreateAirdropResponse;
            fromPartial(_: Partial<_138.MsgCreateAirdropResponse>): _138.MsgCreateAirdropResponse;
            fromAmino(_: _138.MsgCreateAirdropResponseAmino): _138.MsgCreateAirdropResponse;
            toAmino(_: _138.MsgCreateAirdropResponse): _138.MsgCreateAirdropResponseAmino;
            fromAminoMsg(object: _138.MsgCreateAirdropResponseAminoMsg): _138.MsgCreateAirdropResponse;
            fromProtoMsg(message: _138.MsgCreateAirdropResponseProtoMsg): _138.MsgCreateAirdropResponse;
            toProto(message: _138.MsgCreateAirdropResponse): Uint8Array;
            toProtoMsg(message: _138.MsgCreateAirdropResponse): _138.MsgCreateAirdropResponseProtoMsg;
        };
        MsgDeleteAirdrop: {
            typeUrl: string;
            encode(message: _138.MsgDeleteAirdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgDeleteAirdrop;
            fromPartial(object: Partial<_138.MsgDeleteAirdrop>): _138.MsgDeleteAirdrop;
            fromAmino(object: _138.MsgDeleteAirdropAmino): _138.MsgDeleteAirdrop;
            toAmino(message: _138.MsgDeleteAirdrop): _138.MsgDeleteAirdropAmino;
            fromAminoMsg(object: _138.MsgDeleteAirdropAminoMsg): _138.MsgDeleteAirdrop;
            fromProtoMsg(message: _138.MsgDeleteAirdropProtoMsg): _138.MsgDeleteAirdrop;
            toProto(message: _138.MsgDeleteAirdrop): Uint8Array;
            toProtoMsg(message: _138.MsgDeleteAirdrop): _138.MsgDeleteAirdropProtoMsg;
        };
        MsgDeleteAirdropResponse: {
            typeUrl: string;
            encode(_: _138.MsgDeleteAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgDeleteAirdropResponse;
            fromPartial(_: Partial<_138.MsgDeleteAirdropResponse>): _138.MsgDeleteAirdropResponse;
            fromAmino(_: _138.MsgDeleteAirdropResponseAmino): _138.MsgDeleteAirdropResponse;
            toAmino(_: _138.MsgDeleteAirdropResponse): _138.MsgDeleteAirdropResponseAmino;
            fromAminoMsg(object: _138.MsgDeleteAirdropResponseAminoMsg): _138.MsgDeleteAirdropResponse;
            fromProtoMsg(message: _138.MsgDeleteAirdropResponseProtoMsg): _138.MsgDeleteAirdropResponse;
            toProto(message: _138.MsgDeleteAirdropResponse): Uint8Array;
            toProtoMsg(message: _138.MsgDeleteAirdropResponse): _138.MsgDeleteAirdropResponseProtoMsg;
        };
        ClaimStatus: {
            typeUrl: string;
            encode(message: _137.ClaimStatus, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.ClaimStatus;
            fromPartial(object: Partial<_137.ClaimStatus>): _137.ClaimStatus;
            fromAmino(object: _137.ClaimStatusAmino): _137.ClaimStatus;
            toAmino(message: _137.ClaimStatus): _137.ClaimStatusAmino;
            fromAminoMsg(object: _137.ClaimStatusAminoMsg): _137.ClaimStatus;
            fromProtoMsg(message: _137.ClaimStatusProtoMsg): _137.ClaimStatus;
            toProto(message: _137.ClaimStatus): Uint8Array;
            toProtoMsg(message: _137.ClaimStatus): _137.ClaimStatusProtoMsg;
        };
        QueryClaimStatusRequest: {
            typeUrl: string;
            encode(message: _137.QueryClaimStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryClaimStatusRequest;
            fromPartial(object: Partial<_137.QueryClaimStatusRequest>): _137.QueryClaimStatusRequest;
            fromAmino(object: _137.QueryClaimStatusRequestAmino): _137.QueryClaimStatusRequest;
            toAmino(message: _137.QueryClaimStatusRequest): _137.QueryClaimStatusRequestAmino;
            fromAminoMsg(object: _137.QueryClaimStatusRequestAminoMsg): _137.QueryClaimStatusRequest;
            fromProtoMsg(message: _137.QueryClaimStatusRequestProtoMsg): _137.QueryClaimStatusRequest;
            toProto(message: _137.QueryClaimStatusRequest): Uint8Array;
            toProtoMsg(message: _137.QueryClaimStatusRequest): _137.QueryClaimStatusRequestProtoMsg;
        };
        QueryClaimStatusResponse: {
            typeUrl: string;
            encode(message: _137.QueryClaimStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryClaimStatusResponse;
            fromPartial(object: Partial<_137.QueryClaimStatusResponse>): _137.QueryClaimStatusResponse;
            fromAmino(object: _137.QueryClaimStatusResponseAmino): _137.QueryClaimStatusResponse;
            toAmino(message: _137.QueryClaimStatusResponse): _137.QueryClaimStatusResponseAmino;
            fromAminoMsg(object: _137.QueryClaimStatusResponseAminoMsg): _137.QueryClaimStatusResponse;
            fromProtoMsg(message: _137.QueryClaimStatusResponseProtoMsg): _137.QueryClaimStatusResponse;
            toProto(message: _137.QueryClaimStatusResponse): Uint8Array;
            toProtoMsg(message: _137.QueryClaimStatusResponse): _137.QueryClaimStatusResponseProtoMsg;
        };
        ClaimMetadata: {
            typeUrl: string;
            encode(message: _137.ClaimMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.ClaimMetadata;
            fromPartial(object: Partial<_137.ClaimMetadata>): _137.ClaimMetadata;
            fromAmino(object: _137.ClaimMetadataAmino): _137.ClaimMetadata;
            toAmino(message: _137.ClaimMetadata): _137.ClaimMetadataAmino;
            fromAminoMsg(object: _137.ClaimMetadataAminoMsg): _137.ClaimMetadata;
            fromProtoMsg(message: _137.ClaimMetadataProtoMsg): _137.ClaimMetadata;
            toProto(message: _137.ClaimMetadata): Uint8Array;
            toProtoMsg(message: _137.ClaimMetadata): _137.ClaimMetadataProtoMsg;
        };
        QueryClaimMetadataRequest: {
            typeUrl: string;
            encode(_: _137.QueryClaimMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryClaimMetadataRequest;
            fromPartial(_: Partial<_137.QueryClaimMetadataRequest>): _137.QueryClaimMetadataRequest;
            fromAmino(_: _137.QueryClaimMetadataRequestAmino): _137.QueryClaimMetadataRequest;
            toAmino(_: _137.QueryClaimMetadataRequest): _137.QueryClaimMetadataRequestAmino;
            fromAminoMsg(object: _137.QueryClaimMetadataRequestAminoMsg): _137.QueryClaimMetadataRequest;
            fromProtoMsg(message: _137.QueryClaimMetadataRequestProtoMsg): _137.QueryClaimMetadataRequest;
            toProto(message: _137.QueryClaimMetadataRequest): Uint8Array;
            toProtoMsg(message: _137.QueryClaimMetadataRequest): _137.QueryClaimMetadataRequestProtoMsg;
        };
        QueryClaimMetadataResponse: {
            typeUrl: string;
            encode(message: _137.QueryClaimMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryClaimMetadataResponse;
            fromPartial(object: Partial<_137.QueryClaimMetadataResponse>): _137.QueryClaimMetadataResponse;
            fromAmino(object: _137.QueryClaimMetadataResponseAmino): _137.QueryClaimMetadataResponse;
            toAmino(message: _137.QueryClaimMetadataResponse): _137.QueryClaimMetadataResponseAmino;
            fromAminoMsg(object: _137.QueryClaimMetadataResponseAminoMsg): _137.QueryClaimMetadataResponse;
            fromProtoMsg(message: _137.QueryClaimMetadataResponseProtoMsg): _137.QueryClaimMetadataResponse;
            toProto(message: _137.QueryClaimMetadataResponse): Uint8Array;
            toProtoMsg(message: _137.QueryClaimMetadataResponse): _137.QueryClaimMetadataResponseProtoMsg;
        };
        QueryDistributorAccountBalanceRequest: {
            typeUrl: string;
            encode(message: _137.QueryDistributorAccountBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryDistributorAccountBalanceRequest;
            fromPartial(object: Partial<_137.QueryDistributorAccountBalanceRequest>): _137.QueryDistributorAccountBalanceRequest;
            fromAmino(object: _137.QueryDistributorAccountBalanceRequestAmino): _137.QueryDistributorAccountBalanceRequest;
            toAmino(message: _137.QueryDistributorAccountBalanceRequest): _137.QueryDistributorAccountBalanceRequestAmino;
            fromAminoMsg(object: _137.QueryDistributorAccountBalanceRequestAminoMsg): _137.QueryDistributorAccountBalanceRequest;
            fromProtoMsg(message: _137.QueryDistributorAccountBalanceRequestProtoMsg): _137.QueryDistributorAccountBalanceRequest;
            toProto(message: _137.QueryDistributorAccountBalanceRequest): Uint8Array;
            toProtoMsg(message: _137.QueryDistributorAccountBalanceRequest): _137.QueryDistributorAccountBalanceRequestProtoMsg;
        };
        QueryDistributorAccountBalanceResponse: {
            typeUrl: string;
            encode(message: _137.QueryDistributorAccountBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryDistributorAccountBalanceResponse;
            fromPartial(object: Partial<_137.QueryDistributorAccountBalanceResponse>): _137.QueryDistributorAccountBalanceResponse;
            fromAmino(object: _137.QueryDistributorAccountBalanceResponseAmino): _137.QueryDistributorAccountBalanceResponse;
            toAmino(message: _137.QueryDistributorAccountBalanceResponse): _137.QueryDistributorAccountBalanceResponseAmino;
            fromAminoMsg(object: _137.QueryDistributorAccountBalanceResponseAminoMsg): _137.QueryDistributorAccountBalanceResponse;
            fromProtoMsg(message: _137.QueryDistributorAccountBalanceResponseProtoMsg): _137.QueryDistributorAccountBalanceResponse;
            toProto(message: _137.QueryDistributorAccountBalanceResponse): Uint8Array;
            toProtoMsg(message: _137.QueryDistributorAccountBalanceResponse): _137.QueryDistributorAccountBalanceResponseProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _137.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryParamsRequest;
            fromPartial(_: Partial<_137.QueryParamsRequest>): _137.QueryParamsRequest;
            fromAmino(_: _137.QueryParamsRequestAmino): _137.QueryParamsRequest;
            toAmino(_: _137.QueryParamsRequest): _137.QueryParamsRequestAmino;
            fromAminoMsg(object: _137.QueryParamsRequestAminoMsg): _137.QueryParamsRequest;
            fromProtoMsg(message: _137.QueryParamsRequestProtoMsg): _137.QueryParamsRequest;
            toProto(message: _137.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _137.QueryParamsRequest): _137.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _137.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryParamsResponse;
            fromPartial(object: Partial<_137.QueryParamsResponse>): _137.QueryParamsResponse;
            fromAmino(object: _137.QueryParamsResponseAmino): _137.QueryParamsResponse;
            toAmino(message: _137.QueryParamsResponse): _137.QueryParamsResponseAmino;
            fromAminoMsg(object: _137.QueryParamsResponseAminoMsg): _137.QueryParamsResponse;
            fromProtoMsg(message: _137.QueryParamsResponseProtoMsg): _137.QueryParamsResponse;
            toProto(message: _137.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _137.QueryParamsResponse): _137.QueryParamsResponseProtoMsg;
        };
        QueryClaimRecordRequest: {
            typeUrl: string;
            encode(message: _137.QueryClaimRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryClaimRecordRequest;
            fromPartial(object: Partial<_137.QueryClaimRecordRequest>): _137.QueryClaimRecordRequest;
            fromAmino(object: _137.QueryClaimRecordRequestAmino): _137.QueryClaimRecordRequest;
            toAmino(message: _137.QueryClaimRecordRequest): _137.QueryClaimRecordRequestAmino;
            fromAminoMsg(object: _137.QueryClaimRecordRequestAminoMsg): _137.QueryClaimRecordRequest;
            fromProtoMsg(message: _137.QueryClaimRecordRequestProtoMsg): _137.QueryClaimRecordRequest;
            toProto(message: _137.QueryClaimRecordRequest): Uint8Array;
            toProtoMsg(message: _137.QueryClaimRecordRequest): _137.QueryClaimRecordRequestProtoMsg;
        };
        QueryClaimRecordResponse: {
            typeUrl: string;
            encode(message: _137.QueryClaimRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryClaimRecordResponse;
            fromPartial(object: Partial<_137.QueryClaimRecordResponse>): _137.QueryClaimRecordResponse;
            fromAmino(object: _137.QueryClaimRecordResponseAmino): _137.QueryClaimRecordResponse;
            toAmino(message: _137.QueryClaimRecordResponse): _137.QueryClaimRecordResponseAmino;
            fromAminoMsg(object: _137.QueryClaimRecordResponseAminoMsg): _137.QueryClaimRecordResponse;
            fromProtoMsg(message: _137.QueryClaimRecordResponseProtoMsg): _137.QueryClaimRecordResponse;
            toProto(message: _137.QueryClaimRecordResponse): Uint8Array;
            toProtoMsg(message: _137.QueryClaimRecordResponse): _137.QueryClaimRecordResponseProtoMsg;
        };
        QueryClaimableForActionRequest: {
            typeUrl: string;
            encode(message: _137.QueryClaimableForActionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryClaimableForActionRequest;
            fromPartial(object: Partial<_137.QueryClaimableForActionRequest>): _137.QueryClaimableForActionRequest;
            fromAmino(object: _137.QueryClaimableForActionRequestAmino): _137.QueryClaimableForActionRequest;
            toAmino(message: _137.QueryClaimableForActionRequest): _137.QueryClaimableForActionRequestAmino;
            fromAminoMsg(object: _137.QueryClaimableForActionRequestAminoMsg): _137.QueryClaimableForActionRequest;
            fromProtoMsg(message: _137.QueryClaimableForActionRequestProtoMsg): _137.QueryClaimableForActionRequest;
            toProto(message: _137.QueryClaimableForActionRequest): Uint8Array;
            toProtoMsg(message: _137.QueryClaimableForActionRequest): _137.QueryClaimableForActionRequestProtoMsg;
        };
        QueryClaimableForActionResponse: {
            typeUrl: string;
            encode(message: _137.QueryClaimableForActionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryClaimableForActionResponse;
            fromPartial(object: Partial<_137.QueryClaimableForActionResponse>): _137.QueryClaimableForActionResponse;
            fromAmino(object: _137.QueryClaimableForActionResponseAmino): _137.QueryClaimableForActionResponse;
            toAmino(message: _137.QueryClaimableForActionResponse): _137.QueryClaimableForActionResponseAmino;
            fromAminoMsg(object: _137.QueryClaimableForActionResponseAminoMsg): _137.QueryClaimableForActionResponse;
            fromProtoMsg(message: _137.QueryClaimableForActionResponseProtoMsg): _137.QueryClaimableForActionResponse;
            toProto(message: _137.QueryClaimableForActionResponse): Uint8Array;
            toProtoMsg(message: _137.QueryClaimableForActionResponse): _137.QueryClaimableForActionResponseProtoMsg;
        };
        QueryTotalClaimableRequest: {
            typeUrl: string;
            encode(message: _137.QueryTotalClaimableRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryTotalClaimableRequest;
            fromPartial(object: Partial<_137.QueryTotalClaimableRequest>): _137.QueryTotalClaimableRequest;
            fromAmino(object: _137.QueryTotalClaimableRequestAmino): _137.QueryTotalClaimableRequest;
            toAmino(message: _137.QueryTotalClaimableRequest): _137.QueryTotalClaimableRequestAmino;
            fromAminoMsg(object: _137.QueryTotalClaimableRequestAminoMsg): _137.QueryTotalClaimableRequest;
            fromProtoMsg(message: _137.QueryTotalClaimableRequestProtoMsg): _137.QueryTotalClaimableRequest;
            toProto(message: _137.QueryTotalClaimableRequest): Uint8Array;
            toProtoMsg(message: _137.QueryTotalClaimableRequest): _137.QueryTotalClaimableRequestProtoMsg;
        };
        QueryTotalClaimableResponse: {
            typeUrl: string;
            encode(message: _137.QueryTotalClaimableResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryTotalClaimableResponse;
            fromPartial(object: Partial<_137.QueryTotalClaimableResponse>): _137.QueryTotalClaimableResponse;
            fromAmino(object: _137.QueryTotalClaimableResponseAmino): _137.QueryTotalClaimableResponse;
            toAmino(message: _137.QueryTotalClaimableResponse): _137.QueryTotalClaimableResponseAmino;
            fromAminoMsg(object: _137.QueryTotalClaimableResponseAminoMsg): _137.QueryTotalClaimableResponse;
            fromProtoMsg(message: _137.QueryTotalClaimableResponseProtoMsg): _137.QueryTotalClaimableResponse;
            toProto(message: _137.QueryTotalClaimableResponse): Uint8Array;
            toProtoMsg(message: _137.QueryTotalClaimableResponse): _137.QueryTotalClaimableResponseProtoMsg;
        };
        QueryUserVestingsRequest: {
            typeUrl: string;
            encode(message: _137.QueryUserVestingsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryUserVestingsRequest;
            fromPartial(object: Partial<_137.QueryUserVestingsRequest>): _137.QueryUserVestingsRequest;
            fromAmino(object: _137.QueryUserVestingsRequestAmino): _137.QueryUserVestingsRequest;
            toAmino(message: _137.QueryUserVestingsRequest): _137.QueryUserVestingsRequestAmino;
            fromAminoMsg(object: _137.QueryUserVestingsRequestAminoMsg): _137.QueryUserVestingsRequest;
            fromProtoMsg(message: _137.QueryUserVestingsRequestProtoMsg): _137.QueryUserVestingsRequest;
            toProto(message: _137.QueryUserVestingsRequest): Uint8Array;
            toProtoMsg(message: _137.QueryUserVestingsRequest): _137.QueryUserVestingsRequestProtoMsg;
        };
        QueryUserVestingsResponse: {
            typeUrl: string;
            encode(message: _137.QueryUserVestingsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryUserVestingsResponse;
            fromPartial(object: Partial<_137.QueryUserVestingsResponse>): _137.QueryUserVestingsResponse;
            fromAmino(object: _137.QueryUserVestingsResponseAmino): _137.QueryUserVestingsResponse;
            toAmino(message: _137.QueryUserVestingsResponse): _137.QueryUserVestingsResponseAmino;
            fromAminoMsg(object: _137.QueryUserVestingsResponseAminoMsg): _137.QueryUserVestingsResponse;
            fromProtoMsg(message: _137.QueryUserVestingsResponseProtoMsg): _137.QueryUserVestingsResponse;
            toProto(message: _137.QueryUserVestingsResponse): Uint8Array;
            toProtoMsg(message: _137.QueryUserVestingsResponse): _137.QueryUserVestingsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _136.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.Params;
            fromPartial(object: Partial<_136.Params>): _136.Params;
            fromAmino(object: _136.ParamsAmino): _136.Params;
            toAmino(message: _136.Params): _136.ParamsAmino;
            fromAminoMsg(object: _136.ParamsAminoMsg): _136.Params;
            fromProtoMsg(message: _136.ParamsProtoMsg): _136.Params;
            toProto(message: _136.Params): Uint8Array;
            toProtoMsg(message: _136.Params): _136.ParamsProtoMsg;
        };
        Airdrop: {
            typeUrl: string;
            encode(message: _136.Airdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.Airdrop;
            fromPartial(object: Partial<_136.Airdrop>): _136.Airdrop;
            fromAmino(object: _136.AirdropAmino): _136.Airdrop;
            toAmino(message: _136.Airdrop): _136.AirdropAmino;
            fromAminoMsg(object: _136.AirdropAminoMsg): _136.Airdrop;
            fromProtoMsg(message: _136.AirdropProtoMsg): _136.Airdrop;
            toProto(message: _136.Airdrop): Uint8Array;
            toProtoMsg(message: _136.Airdrop): _136.AirdropProtoMsg;
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
        actionFromJSON(object: any): _134.Action;
        actionToJSON(object: _134.Action): string;
        Action: typeof _134.Action;
        ActionSDKType: typeof _134.Action;
        ActionAmino: typeof _134.Action;
        ClaimRecord: {
            typeUrl: string;
            encode(message: _134.ClaimRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.ClaimRecord;
            fromPartial(object: Partial<_134.ClaimRecord>): _134.ClaimRecord;
            fromAmino(object: _134.ClaimRecordAmino): _134.ClaimRecord;
            toAmino(message: _134.ClaimRecord): _134.ClaimRecordAmino;
            fromAminoMsg(object: _134.ClaimRecordAminoMsg): _134.ClaimRecord;
            fromProtoMsg(message: _134.ClaimRecordProtoMsg): _134.ClaimRecord;
            toProto(message: _134.ClaimRecord): Uint8Array;
            toProtoMsg(message: _134.ClaimRecord): _134.ClaimRecordProtoMsg;
        };
    };
    const epochs: {
        QueryClientImpl: typeof _296.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            epochInfos(request?: _140.QueryEpochsInfoRequest): Promise<_140.QueryEpochsInfoResponse>;
            currentEpoch(request: _140.QueryCurrentEpochRequest): Promise<_140.QueryCurrentEpochResponse>;
            epochInfo(request: _140.QueryEpochInfoRequest): Promise<_140.QueryEpochInfoResponse>;
        };
        QueryEpochsInfoRequest: {
            typeUrl: string;
            encode(message: _140.QueryEpochsInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.QueryEpochsInfoRequest;
            fromPartial(object: Partial<_140.QueryEpochsInfoRequest>): _140.QueryEpochsInfoRequest;
            fromAmino(object: _140.QueryEpochsInfoRequestAmino): _140.QueryEpochsInfoRequest;
            toAmino(message: _140.QueryEpochsInfoRequest): _140.QueryEpochsInfoRequestAmino;
            fromAminoMsg(object: _140.QueryEpochsInfoRequestAminoMsg): _140.QueryEpochsInfoRequest;
            fromProtoMsg(message: _140.QueryEpochsInfoRequestProtoMsg): _140.QueryEpochsInfoRequest;
            toProto(message: _140.QueryEpochsInfoRequest): Uint8Array;
            toProtoMsg(message: _140.QueryEpochsInfoRequest): _140.QueryEpochsInfoRequestProtoMsg;
        };
        QueryEpochsInfoResponse: {
            typeUrl: string;
            encode(message: _140.QueryEpochsInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.QueryEpochsInfoResponse;
            fromPartial(object: Partial<_140.QueryEpochsInfoResponse>): _140.QueryEpochsInfoResponse;
            fromAmino(object: _140.QueryEpochsInfoResponseAmino): _140.QueryEpochsInfoResponse;
            toAmino(message: _140.QueryEpochsInfoResponse): _140.QueryEpochsInfoResponseAmino;
            fromAminoMsg(object: _140.QueryEpochsInfoResponseAminoMsg): _140.QueryEpochsInfoResponse;
            fromProtoMsg(message: _140.QueryEpochsInfoResponseProtoMsg): _140.QueryEpochsInfoResponse;
            toProto(message: _140.QueryEpochsInfoResponse): Uint8Array;
            toProtoMsg(message: _140.QueryEpochsInfoResponse): _140.QueryEpochsInfoResponseProtoMsg;
        };
        QueryCurrentEpochRequest: {
            typeUrl: string;
            encode(message: _140.QueryCurrentEpochRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.QueryCurrentEpochRequest;
            fromPartial(object: Partial<_140.QueryCurrentEpochRequest>): _140.QueryCurrentEpochRequest;
            fromAmino(object: _140.QueryCurrentEpochRequestAmino): _140.QueryCurrentEpochRequest;
            toAmino(message: _140.QueryCurrentEpochRequest): _140.QueryCurrentEpochRequestAmino;
            fromAminoMsg(object: _140.QueryCurrentEpochRequestAminoMsg): _140.QueryCurrentEpochRequest;
            fromProtoMsg(message: _140.QueryCurrentEpochRequestProtoMsg): _140.QueryCurrentEpochRequest;
            toProto(message: _140.QueryCurrentEpochRequest): Uint8Array;
            toProtoMsg(message: _140.QueryCurrentEpochRequest): _140.QueryCurrentEpochRequestProtoMsg;
        };
        QueryCurrentEpochResponse: {
            typeUrl: string;
            encode(message: _140.QueryCurrentEpochResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.QueryCurrentEpochResponse;
            fromPartial(object: Partial<_140.QueryCurrentEpochResponse>): _140.QueryCurrentEpochResponse;
            fromAmino(object: _140.QueryCurrentEpochResponseAmino): _140.QueryCurrentEpochResponse;
            toAmino(message: _140.QueryCurrentEpochResponse): _140.QueryCurrentEpochResponseAmino;
            fromAminoMsg(object: _140.QueryCurrentEpochResponseAminoMsg): _140.QueryCurrentEpochResponse;
            fromProtoMsg(message: _140.QueryCurrentEpochResponseProtoMsg): _140.QueryCurrentEpochResponse;
            toProto(message: _140.QueryCurrentEpochResponse): Uint8Array;
            toProtoMsg(message: _140.QueryCurrentEpochResponse): _140.QueryCurrentEpochResponseProtoMsg;
        };
        QueryEpochInfoRequest: {
            typeUrl: string;
            encode(message: _140.QueryEpochInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.QueryEpochInfoRequest;
            fromPartial(object: Partial<_140.QueryEpochInfoRequest>): _140.QueryEpochInfoRequest;
            fromAmino(object: _140.QueryEpochInfoRequestAmino): _140.QueryEpochInfoRequest;
            toAmino(message: _140.QueryEpochInfoRequest): _140.QueryEpochInfoRequestAmino;
            fromAminoMsg(object: _140.QueryEpochInfoRequestAminoMsg): _140.QueryEpochInfoRequest;
            fromProtoMsg(message: _140.QueryEpochInfoRequestProtoMsg): _140.QueryEpochInfoRequest;
            toProto(message: _140.QueryEpochInfoRequest): Uint8Array;
            toProtoMsg(message: _140.QueryEpochInfoRequest): _140.QueryEpochInfoRequestProtoMsg;
        };
        QueryEpochInfoResponse: {
            typeUrl: string;
            encode(message: _140.QueryEpochInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.QueryEpochInfoResponse;
            fromPartial(object: Partial<_140.QueryEpochInfoResponse>): _140.QueryEpochInfoResponse;
            fromAmino(object: _140.QueryEpochInfoResponseAmino): _140.QueryEpochInfoResponse;
            toAmino(message: _140.QueryEpochInfoResponse): _140.QueryEpochInfoResponseAmino;
            fromAminoMsg(object: _140.QueryEpochInfoResponseAminoMsg): _140.QueryEpochInfoResponse;
            fromProtoMsg(message: _140.QueryEpochInfoResponseProtoMsg): _140.QueryEpochInfoResponse;
            toProto(message: _140.QueryEpochInfoResponse): Uint8Array;
            toProtoMsg(message: _140.QueryEpochInfoResponse): _140.QueryEpochInfoResponseProtoMsg;
        };
        EpochInfo: {
            typeUrl: string;
            encode(message: _139.EpochInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.EpochInfo;
            fromPartial(object: Partial<_139.EpochInfo>): _139.EpochInfo;
            fromAmino(object: _139.EpochInfoAmino): _139.EpochInfo;
            toAmino(message: _139.EpochInfo): _139.EpochInfoAmino;
            fromAminoMsg(object: _139.EpochInfoAminoMsg): _139.EpochInfo;
            fromProtoMsg(message: _139.EpochInfoProtoMsg): _139.EpochInfo;
            toProto(message: _139.EpochInfo): Uint8Array;
            toProtoMsg(message: _139.EpochInfo): _139.EpochInfoProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _139.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.GenesisState;
            fromPartial(object: Partial<_139.GenesisState>): _139.GenesisState;
            fromAmino(object: _139.GenesisStateAmino): _139.GenesisState;
            toAmino(message: _139.GenesisState): _139.GenesisStateAmino;
            fromAminoMsg(object: _139.GenesisStateAminoMsg): _139.GenesisState;
            fromProtoMsg(message: _139.GenesisStateProtoMsg): _139.GenesisState;
            toProto(message: _139.GenesisState): Uint8Array;
            toProtoMsg(message: _139.GenesisState): _139.GenesisStateProtoMsg;
        };
    };
    const icacallbacks: {
        QueryClientImpl: typeof _297.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _145.QueryParamsRequest): Promise<_145.QueryParamsResponse>;
            callbackData(request: _145.QueryGetCallbackDataRequest): Promise<_145.QueryGetCallbackDataResponse>;
            callbackDataAll(request?: _145.QueryAllCallbackDataRequest): Promise<_145.QueryAllCallbackDataResponse>;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _145.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.QueryParamsRequest;
            fromPartial(_: Partial<_145.QueryParamsRequest>): _145.QueryParamsRequest;
            fromAmino(_: _145.QueryParamsRequestAmino): _145.QueryParamsRequest;
            toAmino(_: _145.QueryParamsRequest): _145.QueryParamsRequestAmino;
            fromAminoMsg(object: _145.QueryParamsRequestAminoMsg): _145.QueryParamsRequest;
            fromProtoMsg(message: _145.QueryParamsRequestProtoMsg): _145.QueryParamsRequest;
            toProto(message: _145.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _145.QueryParamsRequest): _145.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _145.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.QueryParamsResponse;
            fromPartial(object: Partial<_145.QueryParamsResponse>): _145.QueryParamsResponse;
            fromAmino(object: _145.QueryParamsResponseAmino): _145.QueryParamsResponse;
            toAmino(message: _145.QueryParamsResponse): _145.QueryParamsResponseAmino;
            fromAminoMsg(object: _145.QueryParamsResponseAminoMsg): _145.QueryParamsResponse;
            fromProtoMsg(message: _145.QueryParamsResponseProtoMsg): _145.QueryParamsResponse;
            toProto(message: _145.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _145.QueryParamsResponse): _145.QueryParamsResponseProtoMsg;
        };
        QueryGetCallbackDataRequest: {
            typeUrl: string;
            encode(message: _145.QueryGetCallbackDataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.QueryGetCallbackDataRequest;
            fromPartial(object: Partial<_145.QueryGetCallbackDataRequest>): _145.QueryGetCallbackDataRequest;
            fromAmino(object: _145.QueryGetCallbackDataRequestAmino): _145.QueryGetCallbackDataRequest;
            toAmino(message: _145.QueryGetCallbackDataRequest): _145.QueryGetCallbackDataRequestAmino;
            fromAminoMsg(object: _145.QueryGetCallbackDataRequestAminoMsg): _145.QueryGetCallbackDataRequest;
            fromProtoMsg(message: _145.QueryGetCallbackDataRequestProtoMsg): _145.QueryGetCallbackDataRequest;
            toProto(message: _145.QueryGetCallbackDataRequest): Uint8Array;
            toProtoMsg(message: _145.QueryGetCallbackDataRequest): _145.QueryGetCallbackDataRequestProtoMsg;
        };
        QueryGetCallbackDataResponse: {
            typeUrl: string;
            encode(message: _145.QueryGetCallbackDataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.QueryGetCallbackDataResponse;
            fromPartial(object: Partial<_145.QueryGetCallbackDataResponse>): _145.QueryGetCallbackDataResponse;
            fromAmino(object: _145.QueryGetCallbackDataResponseAmino): _145.QueryGetCallbackDataResponse;
            toAmino(message: _145.QueryGetCallbackDataResponse): _145.QueryGetCallbackDataResponseAmino;
            fromAminoMsg(object: _145.QueryGetCallbackDataResponseAminoMsg): _145.QueryGetCallbackDataResponse;
            fromProtoMsg(message: _145.QueryGetCallbackDataResponseProtoMsg): _145.QueryGetCallbackDataResponse;
            toProto(message: _145.QueryGetCallbackDataResponse): Uint8Array;
            toProtoMsg(message: _145.QueryGetCallbackDataResponse): _145.QueryGetCallbackDataResponseProtoMsg;
        };
        QueryAllCallbackDataRequest: {
            typeUrl: string;
            encode(message: _145.QueryAllCallbackDataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.QueryAllCallbackDataRequest;
            fromPartial(object: Partial<_145.QueryAllCallbackDataRequest>): _145.QueryAllCallbackDataRequest;
            fromAmino(object: _145.QueryAllCallbackDataRequestAmino): _145.QueryAllCallbackDataRequest;
            toAmino(message: _145.QueryAllCallbackDataRequest): _145.QueryAllCallbackDataRequestAmino;
            fromAminoMsg(object: _145.QueryAllCallbackDataRequestAminoMsg): _145.QueryAllCallbackDataRequest;
            fromProtoMsg(message: _145.QueryAllCallbackDataRequestProtoMsg): _145.QueryAllCallbackDataRequest;
            toProto(message: _145.QueryAllCallbackDataRequest): Uint8Array;
            toProtoMsg(message: _145.QueryAllCallbackDataRequest): _145.QueryAllCallbackDataRequestProtoMsg;
        };
        QueryAllCallbackDataResponse: {
            typeUrl: string;
            encode(message: _145.QueryAllCallbackDataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.QueryAllCallbackDataResponse;
            fromPartial(object: Partial<_145.QueryAllCallbackDataResponse>): _145.QueryAllCallbackDataResponse;
            fromAmino(object: _145.QueryAllCallbackDataResponseAmino): _145.QueryAllCallbackDataResponse;
            toAmino(message: _145.QueryAllCallbackDataResponse): _145.QueryAllCallbackDataResponseAmino;
            fromAminoMsg(object: _145.QueryAllCallbackDataResponseAminoMsg): _145.QueryAllCallbackDataResponse;
            fromProtoMsg(message: _145.QueryAllCallbackDataResponseProtoMsg): _145.QueryAllCallbackDataResponse;
            toProto(message: _145.QueryAllCallbackDataResponse): Uint8Array;
            toProtoMsg(message: _145.QueryAllCallbackDataResponse): _145.QueryAllCallbackDataResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _144.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.Params;
            fromPartial(_: Partial<_144.Params>): _144.Params;
            fromAmino(_: _144.ParamsAmino): _144.Params;
            toAmino(_: _144.Params): _144.ParamsAmino;
            fromAminoMsg(object: _144.ParamsAminoMsg): _144.Params;
            fromProtoMsg(message: _144.ParamsProtoMsg): _144.Params;
            toProto(message: _144.Params): Uint8Array;
            toProtoMsg(message: _144.Params): _144.ParamsProtoMsg;
        };
        IcacallbacksPacketData: {
            typeUrl: string;
            encode(message: _143.IcacallbacksPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.IcacallbacksPacketData;
            fromPartial(object: Partial<_143.IcacallbacksPacketData>): _143.IcacallbacksPacketData;
            fromAmino(object: _143.IcacallbacksPacketDataAmino): _143.IcacallbacksPacketData;
            toAmino(message: _143.IcacallbacksPacketData): _143.IcacallbacksPacketDataAmino;
            fromAminoMsg(object: _143.IcacallbacksPacketDataAminoMsg): _143.IcacallbacksPacketData;
            fromProtoMsg(message: _143.IcacallbacksPacketDataProtoMsg): _143.IcacallbacksPacketData;
            toProto(message: _143.IcacallbacksPacketData): Uint8Array;
            toProtoMsg(message: _143.IcacallbacksPacketData): _143.IcacallbacksPacketDataProtoMsg;
        };
        NoData: {
            typeUrl: string;
            encode(_: _143.NoData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.NoData;
            fromPartial(_: Partial<_143.NoData>): _143.NoData;
            fromAmino(_: _143.NoDataAmino): _143.NoData;
            toAmino(_: _143.NoData): _143.NoDataAmino;
            fromAminoMsg(object: _143.NoDataAminoMsg): _143.NoData;
            fromProtoMsg(message: _143.NoDataProtoMsg): _143.NoData;
            toProto(message: _143.NoData): Uint8Array;
            toProtoMsg(message: _143.NoData): _143.NoDataProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _142.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.GenesisState;
            fromPartial(object: Partial<_142.GenesisState>): _142.GenesisState;
            fromAmino(object: _142.GenesisStateAmino): _142.GenesisState;
            toAmino(message: _142.GenesisState): _142.GenesisStateAmino;
            fromAminoMsg(object: _142.GenesisStateAminoMsg): _142.GenesisState;
            fromProtoMsg(message: _142.GenesisStateProtoMsg): _142.GenesisState;
            toProto(message: _142.GenesisState): Uint8Array;
            toProtoMsg(message: _142.GenesisState): _142.GenesisStateProtoMsg;
        };
        CallbackData: {
            typeUrl: string;
            encode(message: _141.CallbackData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.CallbackData;
            fromPartial(object: Partial<_141.CallbackData>): _141.CallbackData;
            fromAmino(object: _141.CallbackDataAmino): _141.CallbackData;
            toAmino(message: _141.CallbackData): _141.CallbackDataAmino;
            fromAminoMsg(object: _141.CallbackDataAminoMsg): _141.CallbackData;
            fromProtoMsg(message: _141.CallbackDataProtoMsg): _141.CallbackData;
            toProto(message: _141.CallbackData): Uint8Array;
            toProtoMsg(message: _141.CallbackData): _141.CallbackDataProtoMsg;
        };
    };
    const icaoracle: {
        MsgClientImpl: typeof _309.MsgClientImpl;
        QueryClientImpl: typeof _298.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            oracle(request: _151.QueryOracleRequest): Promise<_151.QueryOracleResponse>;
            allOracles(request?: _151.QueryAllOraclesRequest): Promise<_151.QueryAllOraclesResponse>;
            activeOracles(request: _151.QueryActiveOraclesRequest): Promise<_151.QueryActiveOraclesResponse>;
            metrics(request: _151.QueryMetricsRequest): Promise<_151.QueryMetricsResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                addOracle(value: _152.MsgAddOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                instantiateOracle(value: _152.MsgInstantiateOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                restoreOracleICA(value: _152.MsgRestoreOracleICA): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                toggleOracle(value: _152.MsgToggleOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                removeOracle(value: _152.MsgRemoveOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                addOracle(value: _152.MsgAddOracle): {
                    typeUrl: string;
                    value: _152.MsgAddOracle;
                };
                instantiateOracle(value: _152.MsgInstantiateOracle): {
                    typeUrl: string;
                    value: _152.MsgInstantiateOracle;
                };
                restoreOracleICA(value: _152.MsgRestoreOracleICA): {
                    typeUrl: string;
                    value: _152.MsgRestoreOracleICA;
                };
                toggleOracle(value: _152.MsgToggleOracle): {
                    typeUrl: string;
                    value: _152.MsgToggleOracle;
                };
                removeOracle(value: _152.MsgRemoveOracle): {
                    typeUrl: string;
                    value: _152.MsgRemoveOracle;
                };
            };
            fromPartial: {
                addOracle(value: _152.MsgAddOracle): {
                    typeUrl: string;
                    value: _152.MsgAddOracle;
                };
                instantiateOracle(value: _152.MsgInstantiateOracle): {
                    typeUrl: string;
                    value: _152.MsgInstantiateOracle;
                };
                restoreOracleICA(value: _152.MsgRestoreOracleICA): {
                    typeUrl: string;
                    value: _152.MsgRestoreOracleICA;
                };
                toggleOracle(value: _152.MsgToggleOracle): {
                    typeUrl: string;
                    value: _152.MsgToggleOracle;
                };
                removeOracle(value: _152.MsgRemoveOracle): {
                    typeUrl: string;
                    value: _152.MsgRemoveOracle;
                };
            };
        };
        AminoConverter: {
            "/stride.icaoracle.MsgAddOracle": {
                aminoType: string;
                toAmino: (message: _152.MsgAddOracle) => _152.MsgAddOracleAmino;
                fromAmino: (object: _152.MsgAddOracleAmino) => _152.MsgAddOracle;
            };
            "/stride.icaoracle.MsgInstantiateOracle": {
                aminoType: string;
                toAmino: (message: _152.MsgInstantiateOracle) => _152.MsgInstantiateOracleAmino;
                fromAmino: (object: _152.MsgInstantiateOracleAmino) => _152.MsgInstantiateOracle;
            };
            "/stride.icaoracle.MsgRestoreOracleICA": {
                aminoType: string;
                toAmino: (message: _152.MsgRestoreOracleICA) => _152.MsgRestoreOracleICAAmino;
                fromAmino: (object: _152.MsgRestoreOracleICAAmino) => _152.MsgRestoreOracleICA;
            };
            "/stride.icaoracle.MsgToggleOracle": {
                aminoType: string;
                toAmino: (message: _152.MsgToggleOracle) => _152.MsgToggleOracleAmino;
                fromAmino: (object: _152.MsgToggleOracleAmino) => _152.MsgToggleOracle;
            };
            "/stride.icaoracle.MsgRemoveOracle": {
                aminoType: string;
                toAmino: (message: _152.MsgRemoveOracle) => _152.MsgRemoveOracleAmino;
                fromAmino: (object: _152.MsgRemoveOracleAmino) => _152.MsgRemoveOracle;
            };
        };
        MsgAddOracle: {
            typeUrl: string;
            encode(message: _152.MsgAddOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.MsgAddOracle;
            fromPartial(object: Partial<_152.MsgAddOracle>): _152.MsgAddOracle;
            fromAmino(object: _152.MsgAddOracleAmino): _152.MsgAddOracle;
            toAmino(message: _152.MsgAddOracle): _152.MsgAddOracleAmino;
            fromAminoMsg(object: _152.MsgAddOracleAminoMsg): _152.MsgAddOracle;
            toAminoMsg(message: _152.MsgAddOracle): _152.MsgAddOracleAminoMsg;
            fromProtoMsg(message: _152.MsgAddOracleProtoMsg): _152.MsgAddOracle;
            toProto(message: _152.MsgAddOracle): Uint8Array;
            toProtoMsg(message: _152.MsgAddOracle): _152.MsgAddOracleProtoMsg;
        };
        MsgAddOracleResponse: {
            typeUrl: string;
            encode(_: _152.MsgAddOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.MsgAddOracleResponse;
            fromPartial(_: Partial<_152.MsgAddOracleResponse>): _152.MsgAddOracleResponse;
            fromAmino(_: _152.MsgAddOracleResponseAmino): _152.MsgAddOracleResponse;
            toAmino(_: _152.MsgAddOracleResponse): _152.MsgAddOracleResponseAmino;
            fromAminoMsg(object: _152.MsgAddOracleResponseAminoMsg): _152.MsgAddOracleResponse;
            fromProtoMsg(message: _152.MsgAddOracleResponseProtoMsg): _152.MsgAddOracleResponse;
            toProto(message: _152.MsgAddOracleResponse): Uint8Array;
            toProtoMsg(message: _152.MsgAddOracleResponse): _152.MsgAddOracleResponseProtoMsg;
        };
        MsgInstantiateOracle: {
            typeUrl: string;
            encode(message: _152.MsgInstantiateOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.MsgInstantiateOracle;
            fromPartial(object: Partial<_152.MsgInstantiateOracle>): _152.MsgInstantiateOracle;
            fromAmino(object: _152.MsgInstantiateOracleAmino): _152.MsgInstantiateOracle;
            toAmino(message: _152.MsgInstantiateOracle): _152.MsgInstantiateOracleAmino;
            fromAminoMsg(object: _152.MsgInstantiateOracleAminoMsg): _152.MsgInstantiateOracle;
            toAminoMsg(message: _152.MsgInstantiateOracle): _152.MsgInstantiateOracleAminoMsg;
            fromProtoMsg(message: _152.MsgInstantiateOracleProtoMsg): _152.MsgInstantiateOracle;
            toProto(message: _152.MsgInstantiateOracle): Uint8Array;
            toProtoMsg(message: _152.MsgInstantiateOracle): _152.MsgInstantiateOracleProtoMsg;
        };
        MsgInstantiateOracleResponse: {
            typeUrl: string;
            encode(_: _152.MsgInstantiateOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.MsgInstantiateOracleResponse;
            fromPartial(_: Partial<_152.MsgInstantiateOracleResponse>): _152.MsgInstantiateOracleResponse;
            fromAmino(_: _152.MsgInstantiateOracleResponseAmino): _152.MsgInstantiateOracleResponse;
            toAmino(_: _152.MsgInstantiateOracleResponse): _152.MsgInstantiateOracleResponseAmino;
            fromAminoMsg(object: _152.MsgInstantiateOracleResponseAminoMsg): _152.MsgInstantiateOracleResponse;
            fromProtoMsg(message: _152.MsgInstantiateOracleResponseProtoMsg): _152.MsgInstantiateOracleResponse;
            toProto(message: _152.MsgInstantiateOracleResponse): Uint8Array;
            toProtoMsg(message: _152.MsgInstantiateOracleResponse): _152.MsgInstantiateOracleResponseProtoMsg;
        };
        MsgRestoreOracleICA: {
            typeUrl: string;
            encode(message: _152.MsgRestoreOracleICA, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.MsgRestoreOracleICA;
            fromPartial(object: Partial<_152.MsgRestoreOracleICA>): _152.MsgRestoreOracleICA;
            fromAmino(object: _152.MsgRestoreOracleICAAmino): _152.MsgRestoreOracleICA;
            toAmino(message: _152.MsgRestoreOracleICA): _152.MsgRestoreOracleICAAmino;
            fromAminoMsg(object: _152.MsgRestoreOracleICAAminoMsg): _152.MsgRestoreOracleICA;
            toAminoMsg(message: _152.MsgRestoreOracleICA): _152.MsgRestoreOracleICAAminoMsg;
            fromProtoMsg(message: _152.MsgRestoreOracleICAProtoMsg): _152.MsgRestoreOracleICA;
            toProto(message: _152.MsgRestoreOracleICA): Uint8Array;
            toProtoMsg(message: _152.MsgRestoreOracleICA): _152.MsgRestoreOracleICAProtoMsg;
        };
        MsgRestoreOracleICAResponse: {
            typeUrl: string;
            encode(_: _152.MsgRestoreOracleICAResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.MsgRestoreOracleICAResponse;
            fromPartial(_: Partial<_152.MsgRestoreOracleICAResponse>): _152.MsgRestoreOracleICAResponse;
            fromAmino(_: _152.MsgRestoreOracleICAResponseAmino): _152.MsgRestoreOracleICAResponse;
            toAmino(_: _152.MsgRestoreOracleICAResponse): _152.MsgRestoreOracleICAResponseAmino;
            fromAminoMsg(object: _152.MsgRestoreOracleICAResponseAminoMsg): _152.MsgRestoreOracleICAResponse;
            fromProtoMsg(message: _152.MsgRestoreOracleICAResponseProtoMsg): _152.MsgRestoreOracleICAResponse;
            toProto(message: _152.MsgRestoreOracleICAResponse): Uint8Array;
            toProtoMsg(message: _152.MsgRestoreOracleICAResponse): _152.MsgRestoreOracleICAResponseProtoMsg;
        };
        MsgToggleOracle: {
            typeUrl: string;
            encode(message: _152.MsgToggleOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.MsgToggleOracle;
            fromPartial(object: Partial<_152.MsgToggleOracle>): _152.MsgToggleOracle;
            fromAmino(object: _152.MsgToggleOracleAmino): _152.MsgToggleOracle;
            toAmino(message: _152.MsgToggleOracle): _152.MsgToggleOracleAmino;
            fromAminoMsg(object: _152.MsgToggleOracleAminoMsg): _152.MsgToggleOracle;
            toAminoMsg(message: _152.MsgToggleOracle): _152.MsgToggleOracleAminoMsg;
            fromProtoMsg(message: _152.MsgToggleOracleProtoMsg): _152.MsgToggleOracle;
            toProto(message: _152.MsgToggleOracle): Uint8Array;
            toProtoMsg(message: _152.MsgToggleOracle): _152.MsgToggleOracleProtoMsg;
        };
        MsgToggleOracleResponse: {
            typeUrl: string;
            encode(_: _152.MsgToggleOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.MsgToggleOracleResponse;
            fromPartial(_: Partial<_152.MsgToggleOracleResponse>): _152.MsgToggleOracleResponse;
            fromAmino(_: _152.MsgToggleOracleResponseAmino): _152.MsgToggleOracleResponse;
            toAmino(_: _152.MsgToggleOracleResponse): _152.MsgToggleOracleResponseAmino;
            fromAminoMsg(object: _152.MsgToggleOracleResponseAminoMsg): _152.MsgToggleOracleResponse;
            fromProtoMsg(message: _152.MsgToggleOracleResponseProtoMsg): _152.MsgToggleOracleResponse;
            toProto(message: _152.MsgToggleOracleResponse): Uint8Array;
            toProtoMsg(message: _152.MsgToggleOracleResponse): _152.MsgToggleOracleResponseProtoMsg;
        };
        MsgRemoveOracle: {
            typeUrl: string;
            encode(message: _152.MsgRemoveOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.MsgRemoveOracle;
            fromPartial(object: Partial<_152.MsgRemoveOracle>): _152.MsgRemoveOracle;
            fromAmino(object: _152.MsgRemoveOracleAmino): _152.MsgRemoveOracle;
            toAmino(message: _152.MsgRemoveOracle): _152.MsgRemoveOracleAmino;
            fromAminoMsg(object: _152.MsgRemoveOracleAminoMsg): _152.MsgRemoveOracle;
            toAminoMsg(message: _152.MsgRemoveOracle): _152.MsgRemoveOracleAminoMsg;
            fromProtoMsg(message: _152.MsgRemoveOracleProtoMsg): _152.MsgRemoveOracle;
            toProto(message: _152.MsgRemoveOracle): Uint8Array;
            toProtoMsg(message: _152.MsgRemoveOracle): _152.MsgRemoveOracleProtoMsg;
        };
        MsgRemoveOracleResponse: {
            typeUrl: string;
            encode(_: _152.MsgRemoveOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.MsgRemoveOracleResponse;
            fromPartial(_: Partial<_152.MsgRemoveOracleResponse>): _152.MsgRemoveOracleResponse;
            fromAmino(_: _152.MsgRemoveOracleResponseAmino): _152.MsgRemoveOracleResponse;
            toAmino(_: _152.MsgRemoveOracleResponse): _152.MsgRemoveOracleResponseAmino;
            fromAminoMsg(object: _152.MsgRemoveOracleResponseAminoMsg): _152.MsgRemoveOracleResponse;
            fromProtoMsg(message: _152.MsgRemoveOracleResponseProtoMsg): _152.MsgRemoveOracleResponse;
            toProto(message: _152.MsgRemoveOracleResponse): Uint8Array;
            toProtoMsg(message: _152.MsgRemoveOracleResponse): _152.MsgRemoveOracleResponseProtoMsg;
        };
        QueryOracleRequest: {
            typeUrl: string;
            encode(message: _151.QueryOracleRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.QueryOracleRequest;
            fromPartial(object: Partial<_151.QueryOracleRequest>): _151.QueryOracleRequest;
            fromAmino(object: _151.QueryOracleRequestAmino): _151.QueryOracleRequest;
            toAmino(message: _151.QueryOracleRequest): _151.QueryOracleRequestAmino;
            fromAminoMsg(object: _151.QueryOracleRequestAminoMsg): _151.QueryOracleRequest;
            fromProtoMsg(message: _151.QueryOracleRequestProtoMsg): _151.QueryOracleRequest;
            toProto(message: _151.QueryOracleRequest): Uint8Array;
            toProtoMsg(message: _151.QueryOracleRequest): _151.QueryOracleRequestProtoMsg;
        };
        QueryOracleResponse: {
            typeUrl: string;
            encode(message: _151.QueryOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.QueryOracleResponse;
            fromPartial(object: Partial<_151.QueryOracleResponse>): _151.QueryOracleResponse;
            fromAmino(object: _151.QueryOracleResponseAmino): _151.QueryOracleResponse;
            toAmino(message: _151.QueryOracleResponse): _151.QueryOracleResponseAmino;
            fromAminoMsg(object: _151.QueryOracleResponseAminoMsg): _151.QueryOracleResponse;
            fromProtoMsg(message: _151.QueryOracleResponseProtoMsg): _151.QueryOracleResponse;
            toProto(message: _151.QueryOracleResponse): Uint8Array;
            toProtoMsg(message: _151.QueryOracleResponse): _151.QueryOracleResponseProtoMsg;
        };
        QueryAllOraclesRequest: {
            typeUrl: string;
            encode(_: _151.QueryAllOraclesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.QueryAllOraclesRequest;
            fromPartial(_: Partial<_151.QueryAllOraclesRequest>): _151.QueryAllOraclesRequest;
            fromAmino(_: _151.QueryAllOraclesRequestAmino): _151.QueryAllOraclesRequest;
            toAmino(_: _151.QueryAllOraclesRequest): _151.QueryAllOraclesRequestAmino;
            fromAminoMsg(object: _151.QueryAllOraclesRequestAminoMsg): _151.QueryAllOraclesRequest;
            fromProtoMsg(message: _151.QueryAllOraclesRequestProtoMsg): _151.QueryAllOraclesRequest;
            toProto(message: _151.QueryAllOraclesRequest): Uint8Array;
            toProtoMsg(message: _151.QueryAllOraclesRequest): _151.QueryAllOraclesRequestProtoMsg;
        };
        QueryAllOraclesResponse: {
            typeUrl: string;
            encode(message: _151.QueryAllOraclesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.QueryAllOraclesResponse;
            fromPartial(object: Partial<_151.QueryAllOraclesResponse>): _151.QueryAllOraclesResponse;
            fromAmino(object: _151.QueryAllOraclesResponseAmino): _151.QueryAllOraclesResponse;
            toAmino(message: _151.QueryAllOraclesResponse): _151.QueryAllOraclesResponseAmino;
            fromAminoMsg(object: _151.QueryAllOraclesResponseAminoMsg): _151.QueryAllOraclesResponse;
            fromProtoMsg(message: _151.QueryAllOraclesResponseProtoMsg): _151.QueryAllOraclesResponse;
            toProto(message: _151.QueryAllOraclesResponse): Uint8Array;
            toProtoMsg(message: _151.QueryAllOraclesResponse): _151.QueryAllOraclesResponseProtoMsg;
        };
        QueryActiveOraclesRequest: {
            typeUrl: string;
            encode(message: _151.QueryActiveOraclesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.QueryActiveOraclesRequest;
            fromPartial(object: Partial<_151.QueryActiveOraclesRequest>): _151.QueryActiveOraclesRequest;
            fromAmino(object: _151.QueryActiveOraclesRequestAmino): _151.QueryActiveOraclesRequest;
            toAmino(message: _151.QueryActiveOraclesRequest): _151.QueryActiveOraclesRequestAmino;
            fromAminoMsg(object: _151.QueryActiveOraclesRequestAminoMsg): _151.QueryActiveOraclesRequest;
            fromProtoMsg(message: _151.QueryActiveOraclesRequestProtoMsg): _151.QueryActiveOraclesRequest;
            toProto(message: _151.QueryActiveOraclesRequest): Uint8Array;
            toProtoMsg(message: _151.QueryActiveOraclesRequest): _151.QueryActiveOraclesRequestProtoMsg;
        };
        QueryActiveOraclesResponse: {
            typeUrl: string;
            encode(message: _151.QueryActiveOraclesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.QueryActiveOraclesResponse;
            fromPartial(object: Partial<_151.QueryActiveOraclesResponse>): _151.QueryActiveOraclesResponse;
            fromAmino(object: _151.QueryActiveOraclesResponseAmino): _151.QueryActiveOraclesResponse;
            toAmino(message: _151.QueryActiveOraclesResponse): _151.QueryActiveOraclesResponseAmino;
            fromAminoMsg(object: _151.QueryActiveOraclesResponseAminoMsg): _151.QueryActiveOraclesResponse;
            fromProtoMsg(message: _151.QueryActiveOraclesResponseProtoMsg): _151.QueryActiveOraclesResponse;
            toProto(message: _151.QueryActiveOraclesResponse): Uint8Array;
            toProtoMsg(message: _151.QueryActiveOraclesResponse): _151.QueryActiveOraclesResponseProtoMsg;
        };
        QueryMetricsRequest: {
            typeUrl: string;
            encode(message: _151.QueryMetricsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.QueryMetricsRequest;
            fromPartial(object: Partial<_151.QueryMetricsRequest>): _151.QueryMetricsRequest;
            fromAmino(object: _151.QueryMetricsRequestAmino): _151.QueryMetricsRequest;
            toAmino(message: _151.QueryMetricsRequest): _151.QueryMetricsRequestAmino;
            fromAminoMsg(object: _151.QueryMetricsRequestAminoMsg): _151.QueryMetricsRequest;
            fromProtoMsg(message: _151.QueryMetricsRequestProtoMsg): _151.QueryMetricsRequest;
            toProto(message: _151.QueryMetricsRequest): Uint8Array;
            toProtoMsg(message: _151.QueryMetricsRequest): _151.QueryMetricsRequestProtoMsg;
        };
        QueryMetricsResponse: {
            typeUrl: string;
            encode(message: _151.QueryMetricsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.QueryMetricsResponse;
            fromPartial(object: Partial<_151.QueryMetricsResponse>): _151.QueryMetricsResponse;
            fromAmino(object: _151.QueryMetricsResponseAmino): _151.QueryMetricsResponse;
            toAmino(message: _151.QueryMetricsResponse): _151.QueryMetricsResponseAmino;
            fromAminoMsg(object: _151.QueryMetricsResponseAminoMsg): _151.QueryMetricsResponse;
            fromProtoMsg(message: _151.QueryMetricsResponseProtoMsg): _151.QueryMetricsResponse;
            toProto(message: _151.QueryMetricsResponse): Uint8Array;
            toProtoMsg(message: _151.QueryMetricsResponse): _151.QueryMetricsResponseProtoMsg;
        };
        metricStatusFromJSON(object: any): _150.MetricStatus;
        metricStatusToJSON(object: _150.MetricStatus): string;
        MetricStatus: typeof _150.MetricStatus;
        MetricStatusSDKType: typeof _150.MetricStatus;
        MetricStatusAmino: typeof _150.MetricStatus;
        Oracle: {
            typeUrl: string;
            encode(message: _150.Oracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.Oracle;
            fromPartial(object: Partial<_150.Oracle>): _150.Oracle;
            fromAmino(object: _150.OracleAmino): _150.Oracle;
            toAmino(message: _150.Oracle): _150.OracleAmino;
            fromAminoMsg(object: _150.OracleAminoMsg): _150.Oracle;
            fromProtoMsg(message: _150.OracleProtoMsg): _150.Oracle;
            toProto(message: _150.Oracle): Uint8Array;
            toProtoMsg(message: _150.Oracle): _150.OracleProtoMsg;
        };
        Metric: {
            typeUrl: string;
            encode(message: _150.Metric, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.Metric;
            fromPartial(object: Partial<_150.Metric>): _150.Metric;
            fromAmino(object: _150.MetricAmino): _150.Metric;
            toAmino(message: _150.Metric): _150.MetricAmino;
            fromAminoMsg(object: _150.MetricAminoMsg): _150.Metric;
            fromProtoMsg(message: _150.MetricProtoMsg): _150.Metric;
            toProto(message: _150.Metric): Uint8Array;
            toProtoMsg(message: _150.Metric): _150.MetricProtoMsg;
        };
        RedemptionRateAttributes: {
            typeUrl: string;
            encode(message: _150.RedemptionRateAttributes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.RedemptionRateAttributes;
            fromPartial(object: Partial<_150.RedemptionRateAttributes>): _150.RedemptionRateAttributes;
            fromAmino(object: _150.RedemptionRateAttributesAmino): _150.RedemptionRateAttributes;
            toAmino(message: _150.RedemptionRateAttributes): _150.RedemptionRateAttributesAmino;
            fromAminoMsg(object: _150.RedemptionRateAttributesAminoMsg): _150.RedemptionRateAttributes;
            fromProtoMsg(message: _150.RedemptionRateAttributesProtoMsg): _150.RedemptionRateAttributes;
            toProto(message: _150.RedemptionRateAttributes): Uint8Array;
            toProtoMsg(message: _150.RedemptionRateAttributes): _150.RedemptionRateAttributesProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _149.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.Params;
            fromPartial(_: Partial<_149.Params>): _149.Params;
            fromAmino(_: _149.ParamsAmino): _149.Params;
            toAmino(_: _149.Params): _149.ParamsAmino;
            fromAminoMsg(object: _149.ParamsAminoMsg): _149.Params;
            fromProtoMsg(message: _149.ParamsProtoMsg): _149.Params;
            toProto(message: _149.Params): Uint8Array;
            toProtoMsg(message: _149.Params): _149.ParamsProtoMsg;
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
        MsgInstantiateOracleContract: {
            typeUrl: string;
            encode(message: _148.MsgInstantiateOracleContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.MsgInstantiateOracleContract;
            fromPartial(object: Partial<_148.MsgInstantiateOracleContract>): _148.MsgInstantiateOracleContract;
            fromAmino(object: _148.MsgInstantiateOracleContractAmino): _148.MsgInstantiateOracleContract;
            toAmino(message: _148.MsgInstantiateOracleContract): _148.MsgInstantiateOracleContractAmino;
            fromAminoMsg(object: _148.MsgInstantiateOracleContractAminoMsg): _148.MsgInstantiateOracleContract;
            fromProtoMsg(message: _148.MsgInstantiateOracleContractProtoMsg): _148.MsgInstantiateOracleContract;
            toProto(message: _148.MsgInstantiateOracleContract): Uint8Array;
            toProtoMsg(message: _148.MsgInstantiateOracleContract): _148.MsgInstantiateOracleContractProtoMsg;
        };
        MsgExecuteContractPostMetric: {
            typeUrl: string;
            encode(message: _148.MsgExecuteContractPostMetric, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.MsgExecuteContractPostMetric;
            fromPartial(object: Partial<_148.MsgExecuteContractPostMetric>): _148.MsgExecuteContractPostMetric;
            fromAmino(object: _148.MsgExecuteContractPostMetricAmino): _148.MsgExecuteContractPostMetric;
            toAmino(message: _148.MsgExecuteContractPostMetric): _148.MsgExecuteContractPostMetricAmino;
            fromAminoMsg(object: _148.MsgExecuteContractPostMetricAminoMsg): _148.MsgExecuteContractPostMetric;
            fromProtoMsg(message: _148.MsgExecuteContractPostMetricProtoMsg): _148.MsgExecuteContractPostMetric;
            toProto(message: _148.MsgExecuteContractPostMetric): Uint8Array;
            toProtoMsg(message: _148.MsgExecuteContractPostMetric): _148.MsgExecuteContractPostMetricProtoMsg;
        };
        MsgPostMetric: {
            typeUrl: string;
            encode(message: _148.MsgPostMetric, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.MsgPostMetric;
            fromPartial(object: Partial<_148.MsgPostMetric>): _148.MsgPostMetric;
            fromAmino(object: _148.MsgPostMetricAmino): _148.MsgPostMetric;
            toAmino(message: _148.MsgPostMetric): _148.MsgPostMetricAmino;
            fromAminoMsg(object: _148.MsgPostMetricAminoMsg): _148.MsgPostMetric;
            fromProtoMsg(message: _148.MsgPostMetricProtoMsg): _148.MsgPostMetric;
            toProto(message: _148.MsgPostMetric): Uint8Array;
            toProtoMsg(message: _148.MsgPostMetric): _148.MsgPostMetricProtoMsg;
        };
        InstantiateOracleCallback: {
            typeUrl: string;
            encode(message: _147.InstantiateOracleCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.InstantiateOracleCallback;
            fromPartial(object: Partial<_147.InstantiateOracleCallback>): _147.InstantiateOracleCallback;
            fromAmino(object: _147.InstantiateOracleCallbackAmino): _147.InstantiateOracleCallback;
            toAmino(message: _147.InstantiateOracleCallback): _147.InstantiateOracleCallbackAmino;
            fromAminoMsg(object: _147.InstantiateOracleCallbackAminoMsg): _147.InstantiateOracleCallback;
            fromProtoMsg(message: _147.InstantiateOracleCallbackProtoMsg): _147.InstantiateOracleCallback;
            toProto(message: _147.InstantiateOracleCallback): Uint8Array;
            toProtoMsg(message: _147.InstantiateOracleCallback): _147.InstantiateOracleCallbackProtoMsg;
        };
        UpdateOracleCallback: {
            typeUrl: string;
            encode(message: _147.UpdateOracleCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.UpdateOracleCallback;
            fromPartial(object: Partial<_147.UpdateOracleCallback>): _147.UpdateOracleCallback;
            fromAmino(object: _147.UpdateOracleCallbackAmino): _147.UpdateOracleCallback;
            toAmino(message: _147.UpdateOracleCallback): _147.UpdateOracleCallbackAmino;
            fromAminoMsg(object: _147.UpdateOracleCallbackAminoMsg): _147.UpdateOracleCallback;
            fromProtoMsg(message: _147.UpdateOracleCallbackProtoMsg): _147.UpdateOracleCallback;
            toProto(message: _147.UpdateOracleCallback): Uint8Array;
            toProtoMsg(message: _147.UpdateOracleCallback): _147.UpdateOracleCallbackProtoMsg;
        };
    };
    const icqoracle: {
        MsgClientImpl: typeof _310.MsgClientImpl;
        QueryClientImpl: typeof _299.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            tokenPrice(request: _155.QueryTokenPriceRequest): Promise<_155.QueryTokenPriceResponse>;
            tokenPrices(request?: _155.QueryTokenPricesRequest): Promise<_155.QueryTokenPricesResponse>;
            params(request?: _155.QueryParamsRequest): Promise<_155.QueryParamsResponse>;
            tokenPriceForQuoteDenom(request: _155.QueryTokenPriceForQuoteDenomRequest): Promise<_155.QueryTokenPriceForQuoteDenomResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                registerTokenPriceQuery(value: _156.MsgRegisterTokenPriceQuery): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                removeTokenPriceQuery(value: _156.MsgRemoveTokenPriceQuery): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                registerTokenPriceQuery(value: _156.MsgRegisterTokenPriceQuery): {
                    typeUrl: string;
                    value: _156.MsgRegisterTokenPriceQuery;
                };
                removeTokenPriceQuery(value: _156.MsgRemoveTokenPriceQuery): {
                    typeUrl: string;
                    value: _156.MsgRemoveTokenPriceQuery;
                };
            };
            fromPartial: {
                registerTokenPriceQuery(value: _156.MsgRegisterTokenPriceQuery): {
                    typeUrl: string;
                    value: _156.MsgRegisterTokenPriceQuery;
                };
                removeTokenPriceQuery(value: _156.MsgRemoveTokenPriceQuery): {
                    typeUrl: string;
                    value: _156.MsgRemoveTokenPriceQuery;
                };
            };
        };
        AminoConverter: {
            "/stride.icqoracle.MsgRegisterTokenPriceQuery": {
                aminoType: string;
                toAmino: (message: _156.MsgRegisterTokenPriceQuery) => _156.MsgRegisterTokenPriceQueryAmino;
                fromAmino: (object: _156.MsgRegisterTokenPriceQueryAmino) => _156.MsgRegisterTokenPriceQuery;
            };
            "/stride.icqoracle.MsgRemoveTokenPriceQuery": {
                aminoType: string;
                toAmino: (message: _156.MsgRemoveTokenPriceQuery) => _156.MsgRemoveTokenPriceQueryAmino;
                fromAmino: (object: _156.MsgRemoveTokenPriceQueryAmino) => _156.MsgRemoveTokenPriceQuery;
            };
        };
        MsgRegisterTokenPriceQuery: {
            typeUrl: string;
            encode(message: _156.MsgRegisterTokenPriceQuery, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _156.MsgRegisterTokenPriceQuery;
            fromPartial(object: Partial<_156.MsgRegisterTokenPriceQuery>): _156.MsgRegisterTokenPriceQuery;
            fromAmino(object: _156.MsgRegisterTokenPriceQueryAmino): _156.MsgRegisterTokenPriceQuery;
            toAmino(message: _156.MsgRegisterTokenPriceQuery): _156.MsgRegisterTokenPriceQueryAmino;
            fromAminoMsg(object: _156.MsgRegisterTokenPriceQueryAminoMsg): _156.MsgRegisterTokenPriceQuery;
            toAminoMsg(message: _156.MsgRegisterTokenPriceQuery): _156.MsgRegisterTokenPriceQueryAminoMsg;
            fromProtoMsg(message: _156.MsgRegisterTokenPriceQueryProtoMsg): _156.MsgRegisterTokenPriceQuery;
            toProto(message: _156.MsgRegisterTokenPriceQuery): Uint8Array;
            toProtoMsg(message: _156.MsgRegisterTokenPriceQuery): _156.MsgRegisterTokenPriceQueryProtoMsg;
        };
        MsgRegisterTokenPriceQueryResponse: {
            typeUrl: string;
            encode(_: _156.MsgRegisterTokenPriceQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _156.MsgRegisterTokenPriceQueryResponse;
            fromPartial(_: Partial<_156.MsgRegisterTokenPriceQueryResponse>): _156.MsgRegisterTokenPriceQueryResponse;
            fromAmino(_: _156.MsgRegisterTokenPriceQueryResponseAmino): _156.MsgRegisterTokenPriceQueryResponse;
            toAmino(_: _156.MsgRegisterTokenPriceQueryResponse): _156.MsgRegisterTokenPriceQueryResponseAmino;
            fromAminoMsg(object: _156.MsgRegisterTokenPriceQueryResponseAminoMsg): _156.MsgRegisterTokenPriceQueryResponse;
            fromProtoMsg(message: _156.MsgRegisterTokenPriceQueryResponseProtoMsg): _156.MsgRegisterTokenPriceQueryResponse;
            toProto(message: _156.MsgRegisterTokenPriceQueryResponse): Uint8Array;
            toProtoMsg(message: _156.MsgRegisterTokenPriceQueryResponse): _156.MsgRegisterTokenPriceQueryResponseProtoMsg;
        };
        MsgRemoveTokenPriceQuery: {
            typeUrl: string;
            encode(message: _156.MsgRemoveTokenPriceQuery, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _156.MsgRemoveTokenPriceQuery;
            fromPartial(object: Partial<_156.MsgRemoveTokenPriceQuery>): _156.MsgRemoveTokenPriceQuery;
            fromAmino(object: _156.MsgRemoveTokenPriceQueryAmino): _156.MsgRemoveTokenPriceQuery;
            toAmino(message: _156.MsgRemoveTokenPriceQuery): _156.MsgRemoveTokenPriceQueryAmino;
            fromAminoMsg(object: _156.MsgRemoveTokenPriceQueryAminoMsg): _156.MsgRemoveTokenPriceQuery;
            toAminoMsg(message: _156.MsgRemoveTokenPriceQuery): _156.MsgRemoveTokenPriceQueryAminoMsg;
            fromProtoMsg(message: _156.MsgRemoveTokenPriceQueryProtoMsg): _156.MsgRemoveTokenPriceQuery;
            toProto(message: _156.MsgRemoveTokenPriceQuery): Uint8Array;
            toProtoMsg(message: _156.MsgRemoveTokenPriceQuery): _156.MsgRemoveTokenPriceQueryProtoMsg;
        };
        MsgRemoveTokenPriceQueryResponse: {
            typeUrl: string;
            encode(_: _156.MsgRemoveTokenPriceQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _156.MsgRemoveTokenPriceQueryResponse;
            fromPartial(_: Partial<_156.MsgRemoveTokenPriceQueryResponse>): _156.MsgRemoveTokenPriceQueryResponse;
            fromAmino(_: _156.MsgRemoveTokenPriceQueryResponseAmino): _156.MsgRemoveTokenPriceQueryResponse;
            toAmino(_: _156.MsgRemoveTokenPriceQueryResponse): _156.MsgRemoveTokenPriceQueryResponseAmino;
            fromAminoMsg(object: _156.MsgRemoveTokenPriceQueryResponseAminoMsg): _156.MsgRemoveTokenPriceQueryResponse;
            fromProtoMsg(message: _156.MsgRemoveTokenPriceQueryResponseProtoMsg): _156.MsgRemoveTokenPriceQueryResponse;
            toProto(message: _156.MsgRemoveTokenPriceQueryResponse): Uint8Array;
            toProtoMsg(message: _156.MsgRemoveTokenPriceQueryResponse): _156.MsgRemoveTokenPriceQueryResponseProtoMsg;
        };
        QueryTokenPriceRequest: {
            typeUrl: string;
            encode(message: _155.QueryTokenPriceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.QueryTokenPriceRequest;
            fromPartial(object: Partial<_155.QueryTokenPriceRequest>): _155.QueryTokenPriceRequest;
            fromAmino(object: _155.QueryTokenPriceRequestAmino): _155.QueryTokenPriceRequest;
            toAmino(message: _155.QueryTokenPriceRequest): _155.QueryTokenPriceRequestAmino;
            fromAminoMsg(object: _155.QueryTokenPriceRequestAminoMsg): _155.QueryTokenPriceRequest;
            fromProtoMsg(message: _155.QueryTokenPriceRequestProtoMsg): _155.QueryTokenPriceRequest;
            toProto(message: _155.QueryTokenPriceRequest): Uint8Array;
            toProtoMsg(message: _155.QueryTokenPriceRequest): _155.QueryTokenPriceRequestProtoMsg;
        };
        QueryTokenPriceResponse: {
            typeUrl: string;
            encode(message: _155.QueryTokenPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.QueryTokenPriceResponse;
            fromPartial(object: Partial<_155.QueryTokenPriceResponse>): _155.QueryTokenPriceResponse;
            fromAmino(object: _155.QueryTokenPriceResponseAmino): _155.QueryTokenPriceResponse;
            toAmino(message: _155.QueryTokenPriceResponse): _155.QueryTokenPriceResponseAmino;
            fromAminoMsg(object: _155.QueryTokenPriceResponseAminoMsg): _155.QueryTokenPriceResponse;
            fromProtoMsg(message: _155.QueryTokenPriceResponseProtoMsg): _155.QueryTokenPriceResponse;
            toProto(message: _155.QueryTokenPriceResponse): Uint8Array;
            toProtoMsg(message: _155.QueryTokenPriceResponse): _155.QueryTokenPriceResponseProtoMsg;
        };
        QueryTokenPricesRequest: {
            typeUrl: string;
            encode(message: _155.QueryTokenPricesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.QueryTokenPricesRequest;
            fromPartial(object: Partial<_155.QueryTokenPricesRequest>): _155.QueryTokenPricesRequest;
            fromAmino(object: _155.QueryTokenPricesRequestAmino): _155.QueryTokenPricesRequest;
            toAmino(message: _155.QueryTokenPricesRequest): _155.QueryTokenPricesRequestAmino;
            fromAminoMsg(object: _155.QueryTokenPricesRequestAminoMsg): _155.QueryTokenPricesRequest;
            fromProtoMsg(message: _155.QueryTokenPricesRequestProtoMsg): _155.QueryTokenPricesRequest;
            toProto(message: _155.QueryTokenPricesRequest): Uint8Array;
            toProtoMsg(message: _155.QueryTokenPricesRequest): _155.QueryTokenPricesRequestProtoMsg;
        };
        QueryTokenPricesResponse: {
            typeUrl: string;
            encode(message: _155.QueryTokenPricesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.QueryTokenPricesResponse;
            fromPartial(object: Partial<_155.QueryTokenPricesResponse>): _155.QueryTokenPricesResponse;
            fromAmino(object: _155.QueryTokenPricesResponseAmino): _155.QueryTokenPricesResponse;
            toAmino(message: _155.QueryTokenPricesResponse): _155.QueryTokenPricesResponseAmino;
            fromAminoMsg(object: _155.QueryTokenPricesResponseAminoMsg): _155.QueryTokenPricesResponse;
            fromProtoMsg(message: _155.QueryTokenPricesResponseProtoMsg): _155.QueryTokenPricesResponse;
            toProto(message: _155.QueryTokenPricesResponse): Uint8Array;
            toProtoMsg(message: _155.QueryTokenPricesResponse): _155.QueryTokenPricesResponseProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _155.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.QueryParamsRequest;
            fromPartial(_: Partial<_155.QueryParamsRequest>): _155.QueryParamsRequest;
            fromAmino(_: _155.QueryParamsRequestAmino): _155.QueryParamsRequest;
            toAmino(_: _155.QueryParamsRequest): _155.QueryParamsRequestAmino;
            fromAminoMsg(object: _155.QueryParamsRequestAminoMsg): _155.QueryParamsRequest;
            fromProtoMsg(message: _155.QueryParamsRequestProtoMsg): _155.QueryParamsRequest;
            toProto(message: _155.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _155.QueryParamsRequest): _155.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _155.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.QueryParamsResponse;
            fromPartial(object: Partial<_155.QueryParamsResponse>): _155.QueryParamsResponse;
            fromAmino(object: _155.QueryParamsResponseAmino): _155.QueryParamsResponse;
            toAmino(message: _155.QueryParamsResponse): _155.QueryParamsResponseAmino;
            fromAminoMsg(object: _155.QueryParamsResponseAminoMsg): _155.QueryParamsResponse;
            fromProtoMsg(message: _155.QueryParamsResponseProtoMsg): _155.QueryParamsResponse;
            toProto(message: _155.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _155.QueryParamsResponse): _155.QueryParamsResponseProtoMsg;
        };
        QueryTokenPriceForQuoteDenomRequest: {
            typeUrl: string;
            encode(message: _155.QueryTokenPriceForQuoteDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.QueryTokenPriceForQuoteDenomRequest;
            fromPartial(object: Partial<_155.QueryTokenPriceForQuoteDenomRequest>): _155.QueryTokenPriceForQuoteDenomRequest;
            fromAmino(object: _155.QueryTokenPriceForQuoteDenomRequestAmino): _155.QueryTokenPriceForQuoteDenomRequest;
            toAmino(message: _155.QueryTokenPriceForQuoteDenomRequest): _155.QueryTokenPriceForQuoteDenomRequestAmino;
            fromAminoMsg(object: _155.QueryTokenPriceForQuoteDenomRequestAminoMsg): _155.QueryTokenPriceForQuoteDenomRequest;
            fromProtoMsg(message: _155.QueryTokenPriceForQuoteDenomRequestProtoMsg): _155.QueryTokenPriceForQuoteDenomRequest;
            toProto(message: _155.QueryTokenPriceForQuoteDenomRequest): Uint8Array;
            toProtoMsg(message: _155.QueryTokenPriceForQuoteDenomRequest): _155.QueryTokenPriceForQuoteDenomRequestProtoMsg;
        };
        QueryTokenPriceForQuoteDenomResponse: {
            typeUrl: string;
            encode(message: _155.QueryTokenPriceForQuoteDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.QueryTokenPriceForQuoteDenomResponse;
            fromPartial(object: Partial<_155.QueryTokenPriceForQuoteDenomResponse>): _155.QueryTokenPriceForQuoteDenomResponse;
            fromAmino(object: _155.QueryTokenPriceForQuoteDenomResponseAmino): _155.QueryTokenPriceForQuoteDenomResponse;
            toAmino(message: _155.QueryTokenPriceForQuoteDenomResponse): _155.QueryTokenPriceForQuoteDenomResponseAmino;
            fromAminoMsg(object: _155.QueryTokenPriceForQuoteDenomResponseAminoMsg): _155.QueryTokenPriceForQuoteDenomResponse;
            fromProtoMsg(message: _155.QueryTokenPriceForQuoteDenomResponseProtoMsg): _155.QueryTokenPriceForQuoteDenomResponse;
            toProto(message: _155.QueryTokenPriceForQuoteDenomResponse): Uint8Array;
            toProtoMsg(message: _155.QueryTokenPriceForQuoteDenomResponse): _155.QueryTokenPriceForQuoteDenomResponseProtoMsg;
        };
        TokenPrice: {
            typeUrl: string;
            encode(message: _154.TokenPrice, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.TokenPrice;
            fromPartial(object: Partial<_154.TokenPrice>): _154.TokenPrice;
            fromAmino(object: _154.TokenPriceAmino): _154.TokenPrice;
            toAmino(message: _154.TokenPrice): _154.TokenPriceAmino;
            fromAminoMsg(object: _154.TokenPriceAminoMsg): _154.TokenPrice;
            fromProtoMsg(message: _154.TokenPriceProtoMsg): _154.TokenPrice;
            toProto(message: _154.TokenPrice): Uint8Array;
            toProtoMsg(message: _154.TokenPrice): _154.TokenPriceProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _154.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.Params;
            fromPartial(object: Partial<_154.Params>): _154.Params;
            fromAmino(object: _154.ParamsAmino): _154.Params;
            toAmino(message: _154.Params): _154.ParamsAmino;
            fromAminoMsg(object: _154.ParamsAminoMsg): _154.Params;
            fromProtoMsg(message: _154.ParamsProtoMsg): _154.Params;
            toProto(message: _154.Params): Uint8Array;
            toProtoMsg(message: _154.Params): _154.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _153.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.GenesisState;
            fromPartial(object: Partial<_153.GenesisState>): _153.GenesisState;
            fromAmino(object: _153.GenesisStateAmino): _153.GenesisState;
            toAmino(message: _153.GenesisState): _153.GenesisStateAmino;
            fromAminoMsg(object: _153.GenesisStateAminoMsg): _153.GenesisState;
            fromProtoMsg(message: _153.GenesisStateProtoMsg): _153.GenesisState;
            toProto(message: _153.GenesisState): Uint8Array;
            toProtoMsg(message: _153.GenesisState): _153.GenesisStateProtoMsg;
        };
    };
    namespace interchainquery {
        const v1: {
            MsgClientImpl: typeof _311.MsgClientImpl;
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitQueryResponse(value: _158.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitQueryResponse(value: _158.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: _158.MsgSubmitQueryResponse;
                    };
                };
                fromPartial: {
                    submitQueryResponse(value: _158.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: _158.MsgSubmitQueryResponse;
                    };
                };
            };
            AminoConverter: {
                "/stride.interchainquery.v1.MsgSubmitQueryResponse": {
                    aminoType: string;
                    toAmino: (message: _158.MsgSubmitQueryResponse) => _158.MsgSubmitQueryResponseAmino;
                    fromAmino: (object: _158.MsgSubmitQueryResponseAmino) => _158.MsgSubmitQueryResponse;
                };
            };
            QueryPendingQueriesRequest: {
                typeUrl: string;
                encode(_: _159.QueryPendingQueriesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryPendingQueriesRequest;
                fromPartial(_: Partial<_159.QueryPendingQueriesRequest>): _159.QueryPendingQueriesRequest;
                fromAmino(_: _159.QueryPendingQueriesRequestAmino): _159.QueryPendingQueriesRequest;
                toAmino(_: _159.QueryPendingQueriesRequest): _159.QueryPendingQueriesRequestAmino;
                fromAminoMsg(object: _159.QueryPendingQueriesRequestAminoMsg): _159.QueryPendingQueriesRequest;
                fromProtoMsg(message: _159.QueryPendingQueriesRequestProtoMsg): _159.QueryPendingQueriesRequest;
                toProto(message: _159.QueryPendingQueriesRequest): Uint8Array;
                toProtoMsg(message: _159.QueryPendingQueriesRequest): _159.QueryPendingQueriesRequestProtoMsg;
            };
            QueryPendingQueriesResponse: {
                typeUrl: string;
                encode(message: _159.QueryPendingQueriesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryPendingQueriesResponse;
                fromPartial(object: Partial<_159.QueryPendingQueriesResponse>): _159.QueryPendingQueriesResponse;
                fromAmino(object: _159.QueryPendingQueriesResponseAmino): _159.QueryPendingQueriesResponse;
                toAmino(message: _159.QueryPendingQueriesResponse): _159.QueryPendingQueriesResponseAmino;
                fromAminoMsg(object: _159.QueryPendingQueriesResponseAminoMsg): _159.QueryPendingQueriesResponse;
                fromProtoMsg(message: _159.QueryPendingQueriesResponseProtoMsg): _159.QueryPendingQueriesResponse;
                toProto(message: _159.QueryPendingQueriesResponse): Uint8Array;
                toProtoMsg(message: _159.QueryPendingQueriesResponse): _159.QueryPendingQueriesResponseProtoMsg;
            };
            MsgSubmitQueryResponse: {
                typeUrl: string;
                encode(message: _158.MsgSubmitQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.MsgSubmitQueryResponse;
                fromPartial(object: Partial<_158.MsgSubmitQueryResponse>): _158.MsgSubmitQueryResponse;
                fromAmino(object: _158.MsgSubmitQueryResponseAmino): _158.MsgSubmitQueryResponse;
                toAmino(message: _158.MsgSubmitQueryResponse): _158.MsgSubmitQueryResponseAmino;
                fromAminoMsg(object: _158.MsgSubmitQueryResponseAminoMsg): _158.MsgSubmitQueryResponse;
                fromProtoMsg(message: _158.MsgSubmitQueryResponseProtoMsg): _158.MsgSubmitQueryResponse;
                toProto(message: _158.MsgSubmitQueryResponse): Uint8Array;
                toProtoMsg(message: _158.MsgSubmitQueryResponse): _158.MsgSubmitQueryResponseProtoMsg;
            };
            MsgSubmitQueryResponseResponse: {
                typeUrl: string;
                encode(_: _158.MsgSubmitQueryResponseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.MsgSubmitQueryResponseResponse;
                fromPartial(_: Partial<_158.MsgSubmitQueryResponseResponse>): _158.MsgSubmitQueryResponseResponse;
                fromAmino(_: _158.MsgSubmitQueryResponseResponseAmino): _158.MsgSubmitQueryResponseResponse;
                toAmino(_: _158.MsgSubmitQueryResponseResponse): _158.MsgSubmitQueryResponseResponseAmino;
                fromAminoMsg(object: _158.MsgSubmitQueryResponseResponseAminoMsg): _158.MsgSubmitQueryResponseResponse;
                fromProtoMsg(message: _158.MsgSubmitQueryResponseResponseProtoMsg): _158.MsgSubmitQueryResponseResponse;
                toProto(message: _158.MsgSubmitQueryResponseResponse): Uint8Array;
                toProtoMsg(message: _158.MsgSubmitQueryResponseResponse): _158.MsgSubmitQueryResponseResponseProtoMsg;
            };
            timeoutPolicyFromJSON(object: any): _157.TimeoutPolicy;
            timeoutPolicyToJSON(object: _157.TimeoutPolicy): string;
            TimeoutPolicy: typeof _157.TimeoutPolicy;
            TimeoutPolicySDKType: typeof _157.TimeoutPolicy;
            TimeoutPolicyAmino: typeof _157.TimeoutPolicy;
            Query: {
                typeUrl: string;
                encode(message: _157.Query, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _157.Query;
                fromPartial(object: Partial<_157.Query>): _157.Query;
                fromAmino(object: _157.QueryAmino): _157.Query;
                toAmino(message: _157.Query): _157.QueryAmino;
                fromAminoMsg(object: _157.QueryAminoMsg): _157.Query;
                fromProtoMsg(message: _157.QueryProtoMsg): _157.Query;
                toProto(message: _157.Query): Uint8Array;
                toProtoMsg(message: _157.Query): _157.QueryProtoMsg;
            };
            DataPoint: {
                typeUrl: string;
                encode(message: _157.DataPoint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _157.DataPoint;
                fromPartial(object: Partial<_157.DataPoint>): _157.DataPoint;
                fromAmino(object: _157.DataPointAmino): _157.DataPoint;
                toAmino(message: _157.DataPoint): _157.DataPointAmino;
                fromAminoMsg(object: _157.DataPointAminoMsg): _157.DataPoint;
                fromProtoMsg(message: _157.DataPointProtoMsg): _157.DataPoint;
                toProto(message: _157.DataPoint): Uint8Array;
                toProtoMsg(message: _157.DataPoint): _157.DataPointProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _157.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _157.GenesisState;
                fromPartial(object: Partial<_157.GenesisState>): _157.GenesisState;
                fromAmino(object: _157.GenesisStateAmino): _157.GenesisState;
                toAmino(message: _157.GenesisState): _157.GenesisStateAmino;
                fromAminoMsg(object: _157.GenesisStateAminoMsg): _157.GenesisState;
                fromProtoMsg(message: _157.GenesisStateProtoMsg): _157.GenesisState;
                toProto(message: _157.GenesisState): Uint8Array;
                toProtoMsg(message: _157.GenesisState): _157.GenesisStateProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _300.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _162.QueryParamsRequest): Promise<_162.QueryParamsResponse>;
                epochProvisions(request?: _162.QueryEpochProvisionsRequest): Promise<_162.QueryEpochProvisionsResponse>;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _162.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.QueryParamsRequest;
                fromPartial(_: Partial<_162.QueryParamsRequest>): _162.QueryParamsRequest;
                fromAmino(_: _162.QueryParamsRequestAmino): _162.QueryParamsRequest;
                toAmino(_: _162.QueryParamsRequest): _162.QueryParamsRequestAmino;
                fromAminoMsg(object: _162.QueryParamsRequestAminoMsg): _162.QueryParamsRequest;
                fromProtoMsg(message: _162.QueryParamsRequestProtoMsg): _162.QueryParamsRequest;
                toProto(message: _162.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _162.QueryParamsRequest): _162.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _162.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.QueryParamsResponse;
                fromPartial(object: Partial<_162.QueryParamsResponse>): _162.QueryParamsResponse;
                fromAmino(object: _162.QueryParamsResponseAmino): _162.QueryParamsResponse;
                toAmino(message: _162.QueryParamsResponse): _162.QueryParamsResponseAmino;
                fromAminoMsg(object: _162.QueryParamsResponseAminoMsg): _162.QueryParamsResponse;
                fromProtoMsg(message: _162.QueryParamsResponseProtoMsg): _162.QueryParamsResponse;
                toProto(message: _162.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _162.QueryParamsResponse): _162.QueryParamsResponseProtoMsg;
            };
            QueryEpochProvisionsRequest: {
                typeUrl: string;
                encode(_: _162.QueryEpochProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.QueryEpochProvisionsRequest;
                fromPartial(_: Partial<_162.QueryEpochProvisionsRequest>): _162.QueryEpochProvisionsRequest;
                fromAmino(_: _162.QueryEpochProvisionsRequestAmino): _162.QueryEpochProvisionsRequest;
                toAmino(_: _162.QueryEpochProvisionsRequest): _162.QueryEpochProvisionsRequestAmino;
                fromAminoMsg(object: _162.QueryEpochProvisionsRequestAminoMsg): _162.QueryEpochProvisionsRequest;
                fromProtoMsg(message: _162.QueryEpochProvisionsRequestProtoMsg): _162.QueryEpochProvisionsRequest;
                toProto(message: _162.QueryEpochProvisionsRequest): Uint8Array;
                toProtoMsg(message: _162.QueryEpochProvisionsRequest): _162.QueryEpochProvisionsRequestProtoMsg;
            };
            QueryEpochProvisionsResponse: {
                typeUrl: string;
                encode(message: _162.QueryEpochProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.QueryEpochProvisionsResponse;
                fromPartial(object: Partial<_162.QueryEpochProvisionsResponse>): _162.QueryEpochProvisionsResponse;
                fromAmino(object: _162.QueryEpochProvisionsResponseAmino): _162.QueryEpochProvisionsResponse;
                toAmino(message: _162.QueryEpochProvisionsResponse): _162.QueryEpochProvisionsResponseAmino;
                fromAminoMsg(object: _162.QueryEpochProvisionsResponseAminoMsg): _162.QueryEpochProvisionsResponse;
                fromProtoMsg(message: _162.QueryEpochProvisionsResponseProtoMsg): _162.QueryEpochProvisionsResponse;
                toProto(message: _162.QueryEpochProvisionsResponse): Uint8Array;
                toProtoMsg(message: _162.QueryEpochProvisionsResponse): _162.QueryEpochProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _161.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.Minter;
                fromPartial(object: Partial<_161.Minter>): _161.Minter;
                fromAmino(object: _161.MinterAmino): _161.Minter;
                toAmino(message: _161.Minter): _161.MinterAmino;
                fromAminoMsg(object: _161.MinterAminoMsg): _161.Minter;
                fromProtoMsg(message: _161.MinterProtoMsg): _161.Minter;
                toProto(message: _161.Minter): Uint8Array;
                toProtoMsg(message: _161.Minter): _161.MinterProtoMsg;
            };
            DistributionProportions: {
                typeUrl: string;
                encode(message: _161.DistributionProportions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.DistributionProportions;
                fromPartial(object: Partial<_161.DistributionProportions>): _161.DistributionProportions;
                fromAmino(object: _161.DistributionProportionsAmino): _161.DistributionProportions;
                toAmino(message: _161.DistributionProportions): _161.DistributionProportionsAmino;
                fromAminoMsg(object: _161.DistributionProportionsAminoMsg): _161.DistributionProportions;
                fromProtoMsg(message: _161.DistributionProportionsProtoMsg): _161.DistributionProportions;
                toProto(message: _161.DistributionProportions): Uint8Array;
                toProtoMsg(message: _161.DistributionProportions): _161.DistributionProportionsProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _161.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.Params;
                fromPartial(object: Partial<_161.Params>): _161.Params;
                fromAmino(object: _161.ParamsAmino): _161.Params;
                toAmino(message: _161.Params): _161.ParamsAmino;
                fromAminoMsg(object: _161.ParamsAminoMsg): _161.Params;
                fromProtoMsg(message: _161.ParamsProtoMsg): _161.Params;
                toProto(message: _161.Params): Uint8Array;
                toProtoMsg(message: _161.Params): _161.ParamsProtoMsg;
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
    }
    const records: {
        QueryClientImpl: typeof _301.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _166.QueryParamsRequest): Promise<_166.QueryParamsResponse>;
            userRedemptionRecord(request: _166.QueryGetUserRedemptionRecordRequest): Promise<_166.QueryGetUserRedemptionRecordResponse>;
            userRedemptionRecordAll(request?: _166.QueryAllUserRedemptionRecordRequest): Promise<_166.QueryAllUserRedemptionRecordResponse>;
            userRedemptionRecordForUser(request: _166.QueryAllUserRedemptionRecordForUserRequest): Promise<_166.QueryAllUserRedemptionRecordForUserResponse>;
            epochUnbondingRecord(request: _166.QueryGetEpochUnbondingRecordRequest): Promise<_166.QueryGetEpochUnbondingRecordResponse>;
            epochUnbondingRecordAll(request?: _166.QueryAllEpochUnbondingRecordRequest): Promise<_166.QueryAllEpochUnbondingRecordResponse>;
            depositRecord(request: _166.QueryGetDepositRecordRequest): Promise<_166.QueryGetDepositRecordResponse>;
            depositRecordAll(request?: _166.QueryAllDepositRecordRequest): Promise<_166.QueryAllDepositRecordResponse>;
            depositRecordByHost(request: _166.QueryDepositRecordByHostRequest): Promise<_166.QueryDepositRecordByHostResponse>;
            lSMDeposit(request: _166.QueryLSMDepositRequest): Promise<_166.QueryLSMDepositResponse>;
            lSMDeposits(request: _166.QueryLSMDepositsRequest): Promise<_166.QueryLSMDepositsResponse>;
        };
        depositRecord_StatusFromJSON(object: any): _167.DepositRecord_Status;
        depositRecord_StatusToJSON(object: _167.DepositRecord_Status): string;
        depositRecord_SourceFromJSON(object: any): _167.DepositRecord_Source;
        depositRecord_SourceToJSON(object: _167.DepositRecord_Source): string;
        hostZoneUnbonding_StatusFromJSON(object: any): _167.HostZoneUnbonding_Status;
        hostZoneUnbonding_StatusToJSON(object: _167.HostZoneUnbonding_Status): string;
        lSMTokenDeposit_StatusFromJSON(object: any): _167.LSMTokenDeposit_Status;
        lSMTokenDeposit_StatusToJSON(object: _167.LSMTokenDeposit_Status): string;
        DepositRecord_Status: typeof _167.DepositRecord_Status;
        DepositRecord_StatusSDKType: typeof _167.DepositRecord_Status;
        DepositRecord_StatusAmino: typeof _167.DepositRecord_Status;
        DepositRecord_Source: typeof _167.DepositRecord_Source;
        DepositRecord_SourceSDKType: typeof _167.DepositRecord_Source;
        DepositRecord_SourceAmino: typeof _167.DepositRecord_Source;
        HostZoneUnbonding_Status: typeof _167.HostZoneUnbonding_Status;
        HostZoneUnbonding_StatusSDKType: typeof _167.HostZoneUnbonding_Status;
        HostZoneUnbonding_StatusAmino: typeof _167.HostZoneUnbonding_Status;
        LSMTokenDeposit_Status: typeof _167.LSMTokenDeposit_Status;
        LSMTokenDeposit_StatusSDKType: typeof _167.LSMTokenDeposit_Status;
        LSMTokenDeposit_StatusAmino: typeof _167.LSMTokenDeposit_Status;
        UserRedemptionRecord: {
            typeUrl: string;
            encode(message: _167.UserRedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.UserRedemptionRecord;
            fromPartial(object: Partial<_167.UserRedemptionRecord>): _167.UserRedemptionRecord;
            fromAmino(object: _167.UserRedemptionRecordAmino): _167.UserRedemptionRecord;
            toAmino(message: _167.UserRedemptionRecord): _167.UserRedemptionRecordAmino;
            fromAminoMsg(object: _167.UserRedemptionRecordAminoMsg): _167.UserRedemptionRecord;
            fromProtoMsg(message: _167.UserRedemptionRecordProtoMsg): _167.UserRedemptionRecord;
            toProto(message: _167.UserRedemptionRecord): Uint8Array;
            toProtoMsg(message: _167.UserRedemptionRecord): _167.UserRedemptionRecordProtoMsg;
        };
        DepositRecord: {
            typeUrl: string;
            encode(message: _167.DepositRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.DepositRecord;
            fromPartial(object: Partial<_167.DepositRecord>): _167.DepositRecord;
            fromAmino(object: _167.DepositRecordAmino): _167.DepositRecord;
            toAmino(message: _167.DepositRecord): _167.DepositRecordAmino;
            fromAminoMsg(object: _167.DepositRecordAminoMsg): _167.DepositRecord;
            fromProtoMsg(message: _167.DepositRecordProtoMsg): _167.DepositRecord;
            toProto(message: _167.DepositRecord): Uint8Array;
            toProtoMsg(message: _167.DepositRecord): _167.DepositRecordProtoMsg;
        };
        HostZoneUnbonding: {
            typeUrl: string;
            encode(message: _167.HostZoneUnbonding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.HostZoneUnbonding;
            fromPartial(object: Partial<_167.HostZoneUnbonding>): _167.HostZoneUnbonding;
            fromAmino(object: _167.HostZoneUnbondingAmino): _167.HostZoneUnbonding;
            toAmino(message: _167.HostZoneUnbonding): _167.HostZoneUnbondingAmino;
            fromAminoMsg(object: _167.HostZoneUnbondingAminoMsg): _167.HostZoneUnbonding;
            fromProtoMsg(message: _167.HostZoneUnbondingProtoMsg): _167.HostZoneUnbonding;
            toProto(message: _167.HostZoneUnbonding): Uint8Array;
            toProtoMsg(message: _167.HostZoneUnbonding): _167.HostZoneUnbondingProtoMsg;
        };
        EpochUnbondingRecord: {
            typeUrl: string;
            encode(message: _167.EpochUnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.EpochUnbondingRecord;
            fromPartial(object: Partial<_167.EpochUnbondingRecord>): _167.EpochUnbondingRecord;
            fromAmino(object: _167.EpochUnbondingRecordAmino): _167.EpochUnbondingRecord;
            toAmino(message: _167.EpochUnbondingRecord): _167.EpochUnbondingRecordAmino;
            fromAminoMsg(object: _167.EpochUnbondingRecordAminoMsg): _167.EpochUnbondingRecord;
            fromProtoMsg(message: _167.EpochUnbondingRecordProtoMsg): _167.EpochUnbondingRecord;
            toProto(message: _167.EpochUnbondingRecord): Uint8Array;
            toProtoMsg(message: _167.EpochUnbondingRecord): _167.EpochUnbondingRecordProtoMsg;
        };
        LSMTokenDeposit: {
            typeUrl: string;
            encode(message: _167.LSMTokenDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.LSMTokenDeposit;
            fromPartial(object: Partial<_167.LSMTokenDeposit>): _167.LSMTokenDeposit;
            fromAmino(object: _167.LSMTokenDepositAmino): _167.LSMTokenDeposit;
            toAmino(message: _167.LSMTokenDeposit): _167.LSMTokenDepositAmino;
            fromAminoMsg(object: _167.LSMTokenDepositAminoMsg): _167.LSMTokenDeposit;
            fromProtoMsg(message: _167.LSMTokenDepositProtoMsg): _167.LSMTokenDeposit;
            toProto(message: _167.LSMTokenDeposit): Uint8Array;
            toProtoMsg(message: _167.LSMTokenDeposit): _167.LSMTokenDepositProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _166.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryParamsRequest;
            fromPartial(_: Partial<_166.QueryParamsRequest>): _166.QueryParamsRequest;
            fromAmino(_: _166.QueryParamsRequestAmino): _166.QueryParamsRequest;
            toAmino(_: _166.QueryParamsRequest): _166.QueryParamsRequestAmino;
            fromAminoMsg(object: _166.QueryParamsRequestAminoMsg): _166.QueryParamsRequest;
            fromProtoMsg(message: _166.QueryParamsRequestProtoMsg): _166.QueryParamsRequest;
            toProto(message: _166.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _166.QueryParamsRequest): _166.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _166.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryParamsResponse;
            fromPartial(object: Partial<_166.QueryParamsResponse>): _166.QueryParamsResponse;
            fromAmino(object: _166.QueryParamsResponseAmino): _166.QueryParamsResponse;
            toAmino(message: _166.QueryParamsResponse): _166.QueryParamsResponseAmino;
            fromAminoMsg(object: _166.QueryParamsResponseAminoMsg): _166.QueryParamsResponse;
            fromProtoMsg(message: _166.QueryParamsResponseProtoMsg): _166.QueryParamsResponse;
            toProto(message: _166.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _166.QueryParamsResponse): _166.QueryParamsResponseProtoMsg;
        };
        QueryGetDepositRecordRequest: {
            typeUrl: string;
            encode(message: _166.QueryGetDepositRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryGetDepositRecordRequest;
            fromPartial(object: Partial<_166.QueryGetDepositRecordRequest>): _166.QueryGetDepositRecordRequest;
            fromAmino(object: _166.QueryGetDepositRecordRequestAmino): _166.QueryGetDepositRecordRequest;
            toAmino(message: _166.QueryGetDepositRecordRequest): _166.QueryGetDepositRecordRequestAmino;
            fromAminoMsg(object: _166.QueryGetDepositRecordRequestAminoMsg): _166.QueryGetDepositRecordRequest;
            fromProtoMsg(message: _166.QueryGetDepositRecordRequestProtoMsg): _166.QueryGetDepositRecordRequest;
            toProto(message: _166.QueryGetDepositRecordRequest): Uint8Array;
            toProtoMsg(message: _166.QueryGetDepositRecordRequest): _166.QueryGetDepositRecordRequestProtoMsg;
        };
        QueryGetDepositRecordResponse: {
            typeUrl: string;
            encode(message: _166.QueryGetDepositRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryGetDepositRecordResponse;
            fromPartial(object: Partial<_166.QueryGetDepositRecordResponse>): _166.QueryGetDepositRecordResponse;
            fromAmino(object: _166.QueryGetDepositRecordResponseAmino): _166.QueryGetDepositRecordResponse;
            toAmino(message: _166.QueryGetDepositRecordResponse): _166.QueryGetDepositRecordResponseAmino;
            fromAminoMsg(object: _166.QueryGetDepositRecordResponseAminoMsg): _166.QueryGetDepositRecordResponse;
            fromProtoMsg(message: _166.QueryGetDepositRecordResponseProtoMsg): _166.QueryGetDepositRecordResponse;
            toProto(message: _166.QueryGetDepositRecordResponse): Uint8Array;
            toProtoMsg(message: _166.QueryGetDepositRecordResponse): _166.QueryGetDepositRecordResponseProtoMsg;
        };
        QueryAllDepositRecordRequest: {
            typeUrl: string;
            encode(message: _166.QueryAllDepositRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryAllDepositRecordRequest;
            fromPartial(object: Partial<_166.QueryAllDepositRecordRequest>): _166.QueryAllDepositRecordRequest;
            fromAmino(object: _166.QueryAllDepositRecordRequestAmino): _166.QueryAllDepositRecordRequest;
            toAmino(message: _166.QueryAllDepositRecordRequest): _166.QueryAllDepositRecordRequestAmino;
            fromAminoMsg(object: _166.QueryAllDepositRecordRequestAminoMsg): _166.QueryAllDepositRecordRequest;
            fromProtoMsg(message: _166.QueryAllDepositRecordRequestProtoMsg): _166.QueryAllDepositRecordRequest;
            toProto(message: _166.QueryAllDepositRecordRequest): Uint8Array;
            toProtoMsg(message: _166.QueryAllDepositRecordRequest): _166.QueryAllDepositRecordRequestProtoMsg;
        };
        QueryAllDepositRecordResponse: {
            typeUrl: string;
            encode(message: _166.QueryAllDepositRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryAllDepositRecordResponse;
            fromPartial(object: Partial<_166.QueryAllDepositRecordResponse>): _166.QueryAllDepositRecordResponse;
            fromAmino(object: _166.QueryAllDepositRecordResponseAmino): _166.QueryAllDepositRecordResponse;
            toAmino(message: _166.QueryAllDepositRecordResponse): _166.QueryAllDepositRecordResponseAmino;
            fromAminoMsg(object: _166.QueryAllDepositRecordResponseAminoMsg): _166.QueryAllDepositRecordResponse;
            fromProtoMsg(message: _166.QueryAllDepositRecordResponseProtoMsg): _166.QueryAllDepositRecordResponse;
            toProto(message: _166.QueryAllDepositRecordResponse): Uint8Array;
            toProtoMsg(message: _166.QueryAllDepositRecordResponse): _166.QueryAllDepositRecordResponseProtoMsg;
        };
        QueryDepositRecordByHostRequest: {
            typeUrl: string;
            encode(message: _166.QueryDepositRecordByHostRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryDepositRecordByHostRequest;
            fromPartial(object: Partial<_166.QueryDepositRecordByHostRequest>): _166.QueryDepositRecordByHostRequest;
            fromAmino(object: _166.QueryDepositRecordByHostRequestAmino): _166.QueryDepositRecordByHostRequest;
            toAmino(message: _166.QueryDepositRecordByHostRequest): _166.QueryDepositRecordByHostRequestAmino;
            fromAminoMsg(object: _166.QueryDepositRecordByHostRequestAminoMsg): _166.QueryDepositRecordByHostRequest;
            fromProtoMsg(message: _166.QueryDepositRecordByHostRequestProtoMsg): _166.QueryDepositRecordByHostRequest;
            toProto(message: _166.QueryDepositRecordByHostRequest): Uint8Array;
            toProtoMsg(message: _166.QueryDepositRecordByHostRequest): _166.QueryDepositRecordByHostRequestProtoMsg;
        };
        QueryDepositRecordByHostResponse: {
            typeUrl: string;
            encode(message: _166.QueryDepositRecordByHostResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryDepositRecordByHostResponse;
            fromPartial(object: Partial<_166.QueryDepositRecordByHostResponse>): _166.QueryDepositRecordByHostResponse;
            fromAmino(object: _166.QueryDepositRecordByHostResponseAmino): _166.QueryDepositRecordByHostResponse;
            toAmino(message: _166.QueryDepositRecordByHostResponse): _166.QueryDepositRecordByHostResponseAmino;
            fromAminoMsg(object: _166.QueryDepositRecordByHostResponseAminoMsg): _166.QueryDepositRecordByHostResponse;
            fromProtoMsg(message: _166.QueryDepositRecordByHostResponseProtoMsg): _166.QueryDepositRecordByHostResponse;
            toProto(message: _166.QueryDepositRecordByHostResponse): Uint8Array;
            toProtoMsg(message: _166.QueryDepositRecordByHostResponse): _166.QueryDepositRecordByHostResponseProtoMsg;
        };
        QueryGetUserRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _166.QueryGetUserRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryGetUserRedemptionRecordRequest;
            fromPartial(object: Partial<_166.QueryGetUserRedemptionRecordRequest>): _166.QueryGetUserRedemptionRecordRequest;
            fromAmino(object: _166.QueryGetUserRedemptionRecordRequestAmino): _166.QueryGetUserRedemptionRecordRequest;
            toAmino(message: _166.QueryGetUserRedemptionRecordRequest): _166.QueryGetUserRedemptionRecordRequestAmino;
            fromAminoMsg(object: _166.QueryGetUserRedemptionRecordRequestAminoMsg): _166.QueryGetUserRedemptionRecordRequest;
            fromProtoMsg(message: _166.QueryGetUserRedemptionRecordRequestProtoMsg): _166.QueryGetUserRedemptionRecordRequest;
            toProto(message: _166.QueryGetUserRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _166.QueryGetUserRedemptionRecordRequest): _166.QueryGetUserRedemptionRecordRequestProtoMsg;
        };
        QueryGetUserRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _166.QueryGetUserRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryGetUserRedemptionRecordResponse;
            fromPartial(object: Partial<_166.QueryGetUserRedemptionRecordResponse>): _166.QueryGetUserRedemptionRecordResponse;
            fromAmino(object: _166.QueryGetUserRedemptionRecordResponseAmino): _166.QueryGetUserRedemptionRecordResponse;
            toAmino(message: _166.QueryGetUserRedemptionRecordResponse): _166.QueryGetUserRedemptionRecordResponseAmino;
            fromAminoMsg(object: _166.QueryGetUserRedemptionRecordResponseAminoMsg): _166.QueryGetUserRedemptionRecordResponse;
            fromProtoMsg(message: _166.QueryGetUserRedemptionRecordResponseProtoMsg): _166.QueryGetUserRedemptionRecordResponse;
            toProto(message: _166.QueryGetUserRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _166.QueryGetUserRedemptionRecordResponse): _166.QueryGetUserRedemptionRecordResponseProtoMsg;
        };
        QueryAllUserRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _166.QueryAllUserRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryAllUserRedemptionRecordRequest;
            fromPartial(object: Partial<_166.QueryAllUserRedemptionRecordRequest>): _166.QueryAllUserRedemptionRecordRequest;
            fromAmino(object: _166.QueryAllUserRedemptionRecordRequestAmino): _166.QueryAllUserRedemptionRecordRequest;
            toAmino(message: _166.QueryAllUserRedemptionRecordRequest): _166.QueryAllUserRedemptionRecordRequestAmino;
            fromAminoMsg(object: _166.QueryAllUserRedemptionRecordRequestAminoMsg): _166.QueryAllUserRedemptionRecordRequest;
            fromProtoMsg(message: _166.QueryAllUserRedemptionRecordRequestProtoMsg): _166.QueryAllUserRedemptionRecordRequest;
            toProto(message: _166.QueryAllUserRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _166.QueryAllUserRedemptionRecordRequest): _166.QueryAllUserRedemptionRecordRequestProtoMsg;
        };
        QueryAllUserRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _166.QueryAllUserRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryAllUserRedemptionRecordResponse;
            fromPartial(object: Partial<_166.QueryAllUserRedemptionRecordResponse>): _166.QueryAllUserRedemptionRecordResponse;
            fromAmino(object: _166.QueryAllUserRedemptionRecordResponseAmino): _166.QueryAllUserRedemptionRecordResponse;
            toAmino(message: _166.QueryAllUserRedemptionRecordResponse): _166.QueryAllUserRedemptionRecordResponseAmino;
            fromAminoMsg(object: _166.QueryAllUserRedemptionRecordResponseAminoMsg): _166.QueryAllUserRedemptionRecordResponse;
            fromProtoMsg(message: _166.QueryAllUserRedemptionRecordResponseProtoMsg): _166.QueryAllUserRedemptionRecordResponse;
            toProto(message: _166.QueryAllUserRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _166.QueryAllUserRedemptionRecordResponse): _166.QueryAllUserRedemptionRecordResponseProtoMsg;
        };
        QueryAllUserRedemptionRecordForUserRequest: {
            typeUrl: string;
            encode(message: _166.QueryAllUserRedemptionRecordForUserRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryAllUserRedemptionRecordForUserRequest;
            fromPartial(object: Partial<_166.QueryAllUserRedemptionRecordForUserRequest>): _166.QueryAllUserRedemptionRecordForUserRequest;
            fromAmino(object: _166.QueryAllUserRedemptionRecordForUserRequestAmino): _166.QueryAllUserRedemptionRecordForUserRequest;
            toAmino(message: _166.QueryAllUserRedemptionRecordForUserRequest): _166.QueryAllUserRedemptionRecordForUserRequestAmino;
            fromAminoMsg(object: _166.QueryAllUserRedemptionRecordForUserRequestAminoMsg): _166.QueryAllUserRedemptionRecordForUserRequest;
            fromProtoMsg(message: _166.QueryAllUserRedemptionRecordForUserRequestProtoMsg): _166.QueryAllUserRedemptionRecordForUserRequest;
            toProto(message: _166.QueryAllUserRedemptionRecordForUserRequest): Uint8Array;
            toProtoMsg(message: _166.QueryAllUserRedemptionRecordForUserRequest): _166.QueryAllUserRedemptionRecordForUserRequestProtoMsg;
        };
        QueryAllUserRedemptionRecordForUserResponse: {
            typeUrl: string;
            encode(message: _166.QueryAllUserRedemptionRecordForUserResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryAllUserRedemptionRecordForUserResponse;
            fromPartial(object: Partial<_166.QueryAllUserRedemptionRecordForUserResponse>): _166.QueryAllUserRedemptionRecordForUserResponse;
            fromAmino(object: _166.QueryAllUserRedemptionRecordForUserResponseAmino): _166.QueryAllUserRedemptionRecordForUserResponse;
            toAmino(message: _166.QueryAllUserRedemptionRecordForUserResponse): _166.QueryAllUserRedemptionRecordForUserResponseAmino;
            fromAminoMsg(object: _166.QueryAllUserRedemptionRecordForUserResponseAminoMsg): _166.QueryAllUserRedemptionRecordForUserResponse;
            fromProtoMsg(message: _166.QueryAllUserRedemptionRecordForUserResponseProtoMsg): _166.QueryAllUserRedemptionRecordForUserResponse;
            toProto(message: _166.QueryAllUserRedemptionRecordForUserResponse): Uint8Array;
            toProtoMsg(message: _166.QueryAllUserRedemptionRecordForUserResponse): _166.QueryAllUserRedemptionRecordForUserResponseProtoMsg;
        };
        QueryGetEpochUnbondingRecordRequest: {
            typeUrl: string;
            encode(message: _166.QueryGetEpochUnbondingRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryGetEpochUnbondingRecordRequest;
            fromPartial(object: Partial<_166.QueryGetEpochUnbondingRecordRequest>): _166.QueryGetEpochUnbondingRecordRequest;
            fromAmino(object: _166.QueryGetEpochUnbondingRecordRequestAmino): _166.QueryGetEpochUnbondingRecordRequest;
            toAmino(message: _166.QueryGetEpochUnbondingRecordRequest): _166.QueryGetEpochUnbondingRecordRequestAmino;
            fromAminoMsg(object: _166.QueryGetEpochUnbondingRecordRequestAminoMsg): _166.QueryGetEpochUnbondingRecordRequest;
            fromProtoMsg(message: _166.QueryGetEpochUnbondingRecordRequestProtoMsg): _166.QueryGetEpochUnbondingRecordRequest;
            toProto(message: _166.QueryGetEpochUnbondingRecordRequest): Uint8Array;
            toProtoMsg(message: _166.QueryGetEpochUnbondingRecordRequest): _166.QueryGetEpochUnbondingRecordRequestProtoMsg;
        };
        QueryGetEpochUnbondingRecordResponse: {
            typeUrl: string;
            encode(message: _166.QueryGetEpochUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryGetEpochUnbondingRecordResponse;
            fromPartial(object: Partial<_166.QueryGetEpochUnbondingRecordResponse>): _166.QueryGetEpochUnbondingRecordResponse;
            fromAmino(object: _166.QueryGetEpochUnbondingRecordResponseAmino): _166.QueryGetEpochUnbondingRecordResponse;
            toAmino(message: _166.QueryGetEpochUnbondingRecordResponse): _166.QueryGetEpochUnbondingRecordResponseAmino;
            fromAminoMsg(object: _166.QueryGetEpochUnbondingRecordResponseAminoMsg): _166.QueryGetEpochUnbondingRecordResponse;
            fromProtoMsg(message: _166.QueryGetEpochUnbondingRecordResponseProtoMsg): _166.QueryGetEpochUnbondingRecordResponse;
            toProto(message: _166.QueryGetEpochUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _166.QueryGetEpochUnbondingRecordResponse): _166.QueryGetEpochUnbondingRecordResponseProtoMsg;
        };
        QueryAllEpochUnbondingRecordRequest: {
            typeUrl: string;
            encode(message: _166.QueryAllEpochUnbondingRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryAllEpochUnbondingRecordRequest;
            fromPartial(object: Partial<_166.QueryAllEpochUnbondingRecordRequest>): _166.QueryAllEpochUnbondingRecordRequest;
            fromAmino(object: _166.QueryAllEpochUnbondingRecordRequestAmino): _166.QueryAllEpochUnbondingRecordRequest;
            toAmino(message: _166.QueryAllEpochUnbondingRecordRequest): _166.QueryAllEpochUnbondingRecordRequestAmino;
            fromAminoMsg(object: _166.QueryAllEpochUnbondingRecordRequestAminoMsg): _166.QueryAllEpochUnbondingRecordRequest;
            fromProtoMsg(message: _166.QueryAllEpochUnbondingRecordRequestProtoMsg): _166.QueryAllEpochUnbondingRecordRequest;
            toProto(message: _166.QueryAllEpochUnbondingRecordRequest): Uint8Array;
            toProtoMsg(message: _166.QueryAllEpochUnbondingRecordRequest): _166.QueryAllEpochUnbondingRecordRequestProtoMsg;
        };
        QueryAllEpochUnbondingRecordResponse: {
            typeUrl: string;
            encode(message: _166.QueryAllEpochUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryAllEpochUnbondingRecordResponse;
            fromPartial(object: Partial<_166.QueryAllEpochUnbondingRecordResponse>): _166.QueryAllEpochUnbondingRecordResponse;
            fromAmino(object: _166.QueryAllEpochUnbondingRecordResponseAmino): _166.QueryAllEpochUnbondingRecordResponse;
            toAmino(message: _166.QueryAllEpochUnbondingRecordResponse): _166.QueryAllEpochUnbondingRecordResponseAmino;
            fromAminoMsg(object: _166.QueryAllEpochUnbondingRecordResponseAminoMsg): _166.QueryAllEpochUnbondingRecordResponse;
            fromProtoMsg(message: _166.QueryAllEpochUnbondingRecordResponseProtoMsg): _166.QueryAllEpochUnbondingRecordResponse;
            toProto(message: _166.QueryAllEpochUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _166.QueryAllEpochUnbondingRecordResponse): _166.QueryAllEpochUnbondingRecordResponseProtoMsg;
        };
        QueryLSMDepositRequest: {
            typeUrl: string;
            encode(message: _166.QueryLSMDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryLSMDepositRequest;
            fromPartial(object: Partial<_166.QueryLSMDepositRequest>): _166.QueryLSMDepositRequest;
            fromAmino(object: _166.QueryLSMDepositRequestAmino): _166.QueryLSMDepositRequest;
            toAmino(message: _166.QueryLSMDepositRequest): _166.QueryLSMDepositRequestAmino;
            fromAminoMsg(object: _166.QueryLSMDepositRequestAminoMsg): _166.QueryLSMDepositRequest;
            fromProtoMsg(message: _166.QueryLSMDepositRequestProtoMsg): _166.QueryLSMDepositRequest;
            toProto(message: _166.QueryLSMDepositRequest): Uint8Array;
            toProtoMsg(message: _166.QueryLSMDepositRequest): _166.QueryLSMDepositRequestProtoMsg;
        };
        QueryLSMDepositResponse: {
            typeUrl: string;
            encode(message: _166.QueryLSMDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryLSMDepositResponse;
            fromPartial(object: Partial<_166.QueryLSMDepositResponse>): _166.QueryLSMDepositResponse;
            fromAmino(object: _166.QueryLSMDepositResponseAmino): _166.QueryLSMDepositResponse;
            toAmino(message: _166.QueryLSMDepositResponse): _166.QueryLSMDepositResponseAmino;
            fromAminoMsg(object: _166.QueryLSMDepositResponseAminoMsg): _166.QueryLSMDepositResponse;
            fromProtoMsg(message: _166.QueryLSMDepositResponseProtoMsg): _166.QueryLSMDepositResponse;
            toProto(message: _166.QueryLSMDepositResponse): Uint8Array;
            toProtoMsg(message: _166.QueryLSMDepositResponse): _166.QueryLSMDepositResponseProtoMsg;
        };
        QueryLSMDepositsRequest: {
            typeUrl: string;
            encode(message: _166.QueryLSMDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryLSMDepositsRequest;
            fromPartial(object: Partial<_166.QueryLSMDepositsRequest>): _166.QueryLSMDepositsRequest;
            fromAmino(object: _166.QueryLSMDepositsRequestAmino): _166.QueryLSMDepositsRequest;
            toAmino(message: _166.QueryLSMDepositsRequest): _166.QueryLSMDepositsRequestAmino;
            fromAminoMsg(object: _166.QueryLSMDepositsRequestAminoMsg): _166.QueryLSMDepositsRequest;
            fromProtoMsg(message: _166.QueryLSMDepositsRequestProtoMsg): _166.QueryLSMDepositsRequest;
            toProto(message: _166.QueryLSMDepositsRequest): Uint8Array;
            toProtoMsg(message: _166.QueryLSMDepositsRequest): _166.QueryLSMDepositsRequestProtoMsg;
        };
        QueryLSMDepositsResponse: {
            typeUrl: string;
            encode(message: _166.QueryLSMDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryLSMDepositsResponse;
            fromPartial(object: Partial<_166.QueryLSMDepositsResponse>): _166.QueryLSMDepositsResponse;
            fromAmino(object: _166.QueryLSMDepositsResponseAmino): _166.QueryLSMDepositsResponse;
            toAmino(message: _166.QueryLSMDepositsResponse): _166.QueryLSMDepositsResponseAmino;
            fromAminoMsg(object: _166.QueryLSMDepositsResponseAminoMsg): _166.QueryLSMDepositsResponse;
            fromProtoMsg(message: _166.QueryLSMDepositsResponseProtoMsg): _166.QueryLSMDepositsResponse;
            toProto(message: _166.QueryLSMDepositsResponse): Uint8Array;
            toProtoMsg(message: _166.QueryLSMDepositsResponse): _166.QueryLSMDepositsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _165.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.Params;
            fromPartial(_: Partial<_165.Params>): _165.Params;
            fromAmino(_: _165.ParamsAmino): _165.Params;
            toAmino(_: _165.Params): _165.ParamsAmino;
            fromAminoMsg(object: _165.ParamsAminoMsg): _165.Params;
            fromProtoMsg(message: _165.ParamsProtoMsg): _165.Params;
            toProto(message: _165.Params): Uint8Array;
            toProtoMsg(message: _165.Params): _165.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _164.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.GenesisState;
            fromPartial(object: Partial<_164.GenesisState>): _164.GenesisState;
            fromAmino(object: _164.GenesisStateAmino): _164.GenesisState;
            toAmino(message: _164.GenesisState): _164.GenesisStateAmino;
            fromAminoMsg(object: _164.GenesisStateAminoMsg): _164.GenesisState;
            fromProtoMsg(message: _164.GenesisStateProtoMsg): _164.GenesisState;
            toProto(message: _164.GenesisState): Uint8Array;
            toProtoMsg(message: _164.GenesisState): _164.GenesisStateProtoMsg;
        };
        TransferCallback: {
            typeUrl: string;
            encode(message: _163.TransferCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.TransferCallback;
            fromPartial(object: Partial<_163.TransferCallback>): _163.TransferCallback;
            fromAmino(object: _163.TransferCallbackAmino): _163.TransferCallback;
            toAmino(message: _163.TransferCallback): _163.TransferCallbackAmino;
            fromAminoMsg(object: _163.TransferCallbackAminoMsg): _163.TransferCallback;
            fromProtoMsg(message: _163.TransferCallbackProtoMsg): _163.TransferCallback;
            toProto(message: _163.TransferCallback): Uint8Array;
            toProtoMsg(message: _163.TransferCallback): _163.TransferCallbackProtoMsg;
        };
        TransferLSMTokenCallback: {
            typeUrl: string;
            encode(message: _163.TransferLSMTokenCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.TransferLSMTokenCallback;
            fromPartial(object: Partial<_163.TransferLSMTokenCallback>): _163.TransferLSMTokenCallback;
            fromAmino(object: _163.TransferLSMTokenCallbackAmino): _163.TransferLSMTokenCallback;
            toAmino(message: _163.TransferLSMTokenCallback): _163.TransferLSMTokenCallbackAmino;
            fromAminoMsg(object: _163.TransferLSMTokenCallbackAminoMsg): _163.TransferLSMTokenCallback;
            fromProtoMsg(message: _163.TransferLSMTokenCallbackProtoMsg): _163.TransferLSMTokenCallback;
            toProto(message: _163.TransferLSMTokenCallback): Uint8Array;
            toProtoMsg(message: _163.TransferLSMTokenCallback): _163.TransferLSMTokenCallbackProtoMsg;
        };
    };
    const stakedym: {
        MsgClientImpl: typeof _312.MsgClientImpl;
        QueryClientImpl: typeof _302.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            hostZone(request?: _169.QueryHostZoneRequest): Promise<_169.QueryHostZoneResponse>;
            delegationRecords(request: _169.QueryDelegationRecordsRequest): Promise<_169.QueryDelegationRecordsResponse>;
            unbondingRecords(request: _169.QueryUnbondingRecordsRequest): Promise<_169.QueryUnbondingRecordsResponse>;
            redemptionRecord(request: _169.QueryRedemptionRecordRequest): Promise<_169.QueryRedemptionRecordResponse>;
            redemptionRecords(request: _169.QueryRedemptionRecordsRequest): Promise<_169.QueryRedemptionRecordsResponse>;
            slashRecords(request?: _169.QuerySlashRecordsRequest): Promise<_169.QuerySlashRecordsResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                liquidStake(value: _171.MsgLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                redeemStake(value: _171.MsgRedeemStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmDelegation(value: _171.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmUndelegation(value: _171.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmUnbondedTokenSweep(value: _171.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                adjustDelegatedBalance(value: _171.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateInnerRedemptionRateBounds(value: _171.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                resumeHostZone(value: _171.MsgResumeHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                refreshRedemptionRate(value: _171.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteDelegationRecord(value: _171.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteUnbondingRecord(value: _171.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteRedemptionRecord(value: _171.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setOperatorAddress(value: _171.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                liquidStake(value: _171.MsgLiquidStake): {
                    typeUrl: string;
                    value: _171.MsgLiquidStake;
                };
                redeemStake(value: _171.MsgRedeemStake): {
                    typeUrl: string;
                    value: _171.MsgRedeemStake;
                };
                confirmDelegation(value: _171.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: _171.MsgConfirmDelegation;
                };
                confirmUndelegation(value: _171.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: _171.MsgConfirmUndelegation;
                };
                confirmUnbondedTokenSweep(value: _171.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: _171.MsgConfirmUnbondedTokenSweep;
                };
                adjustDelegatedBalance(value: _171.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: _171.MsgAdjustDelegatedBalance;
                };
                updateInnerRedemptionRateBounds(value: _171.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _171.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _171.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _171.MsgResumeHostZone;
                };
                refreshRedemptionRate(value: _171.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: _171.MsgRefreshRedemptionRate;
                };
                overwriteDelegationRecord(value: _171.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: _171.MsgOverwriteDelegationRecord;
                };
                overwriteUnbondingRecord(value: _171.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: _171.MsgOverwriteUnbondingRecord;
                };
                overwriteRedemptionRecord(value: _171.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: _171.MsgOverwriteRedemptionRecord;
                };
                setOperatorAddress(value: _171.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: _171.MsgSetOperatorAddress;
                };
            };
            fromPartial: {
                liquidStake(value: _171.MsgLiquidStake): {
                    typeUrl: string;
                    value: _171.MsgLiquidStake;
                };
                redeemStake(value: _171.MsgRedeemStake): {
                    typeUrl: string;
                    value: _171.MsgRedeemStake;
                };
                confirmDelegation(value: _171.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: _171.MsgConfirmDelegation;
                };
                confirmUndelegation(value: _171.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: _171.MsgConfirmUndelegation;
                };
                confirmUnbondedTokenSweep(value: _171.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: _171.MsgConfirmUnbondedTokenSweep;
                };
                adjustDelegatedBalance(value: _171.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: _171.MsgAdjustDelegatedBalance;
                };
                updateInnerRedemptionRateBounds(value: _171.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _171.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _171.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _171.MsgResumeHostZone;
                };
                refreshRedemptionRate(value: _171.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: _171.MsgRefreshRedemptionRate;
                };
                overwriteDelegationRecord(value: _171.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: _171.MsgOverwriteDelegationRecord;
                };
                overwriteUnbondingRecord(value: _171.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: _171.MsgOverwriteUnbondingRecord;
                };
                overwriteRedemptionRecord(value: _171.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: _171.MsgOverwriteRedemptionRecord;
                };
                setOperatorAddress(value: _171.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: _171.MsgSetOperatorAddress;
                };
            };
        };
        AminoConverter: {
            "/stride.stakedym.MsgLiquidStake": {
                aminoType: string;
                toAmino: (message: _171.MsgLiquidStake) => _171.MsgLiquidStakeAmino;
                fromAmino: (object: _171.MsgLiquidStakeAmino) => _171.MsgLiquidStake;
            };
            "/stride.stakedym.MsgRedeemStake": {
                aminoType: string;
                toAmino: (message: _171.MsgRedeemStake) => _171.MsgRedeemStakeAmino;
                fromAmino: (object: _171.MsgRedeemStakeAmino) => _171.MsgRedeemStake;
            };
            "/stride.stakedym.MsgConfirmDelegation": {
                aminoType: string;
                toAmino: (message: _171.MsgConfirmDelegation) => _171.MsgConfirmDelegationAmino;
                fromAmino: (object: _171.MsgConfirmDelegationAmino) => _171.MsgConfirmDelegation;
            };
            "/stride.stakedym.MsgConfirmUndelegation": {
                aminoType: string;
                toAmino: (message: _171.MsgConfirmUndelegation) => _171.MsgConfirmUndelegationAmino;
                fromAmino: (object: _171.MsgConfirmUndelegationAmino) => _171.MsgConfirmUndelegation;
            };
            "/stride.stakedym.MsgConfirmUnbondedTokenSweep": {
                aminoType: string;
                toAmino: (message: _171.MsgConfirmUnbondedTokenSweep) => _171.MsgConfirmUnbondedTokenSweepAmino;
                fromAmino: (object: _171.MsgConfirmUnbondedTokenSweepAmino) => _171.MsgConfirmUnbondedTokenSweep;
            };
            "/stride.stakedym.MsgAdjustDelegatedBalance": {
                aminoType: string;
                toAmino: (message: _171.MsgAdjustDelegatedBalance) => _171.MsgAdjustDelegatedBalanceAmino;
                fromAmino: (object: _171.MsgAdjustDelegatedBalanceAmino) => _171.MsgAdjustDelegatedBalance;
            };
            "/stride.stakedym.MsgUpdateInnerRedemptionRateBounds": {
                aminoType: string;
                toAmino: (message: _171.MsgUpdateInnerRedemptionRateBounds) => _171.MsgUpdateInnerRedemptionRateBoundsAmino;
                fromAmino: (object: _171.MsgUpdateInnerRedemptionRateBoundsAmino) => _171.MsgUpdateInnerRedemptionRateBounds;
            };
            "/stride.stakedym.MsgResumeHostZone": {
                aminoType: string;
                toAmino: (message: _171.MsgResumeHostZone) => _171.MsgResumeHostZoneAmino;
                fromAmino: (object: _171.MsgResumeHostZoneAmino) => _171.MsgResumeHostZone;
            };
            "/stride.stakedym.MsgRefreshRedemptionRate": {
                aminoType: string;
                toAmino: (message: _171.MsgRefreshRedemptionRate) => _171.MsgRefreshRedemptionRateAmino;
                fromAmino: (object: _171.MsgRefreshRedemptionRateAmino) => _171.MsgRefreshRedemptionRate;
            };
            "/stride.stakedym.MsgOverwriteDelegationRecord": {
                aminoType: string;
                toAmino: (message: _171.MsgOverwriteDelegationRecord) => _171.MsgOverwriteDelegationRecordAmino;
                fromAmino: (object: _171.MsgOverwriteDelegationRecordAmino) => _171.MsgOverwriteDelegationRecord;
            };
            "/stride.stakedym.MsgOverwriteUnbondingRecord": {
                aminoType: string;
                toAmino: (message: _171.MsgOverwriteUnbondingRecord) => _171.MsgOverwriteUnbondingRecordAmino;
                fromAmino: (object: _171.MsgOverwriteUnbondingRecordAmino) => _171.MsgOverwriteUnbondingRecord;
            };
            "/stride.stakedym.MsgOverwriteRedemptionRecord": {
                aminoType: string;
                toAmino: (message: _171.MsgOverwriteRedemptionRecord) => _171.MsgOverwriteRedemptionRecordAmino;
                fromAmino: (object: _171.MsgOverwriteRedemptionRecordAmino) => _171.MsgOverwriteRedemptionRecord;
            };
            "/stride.stakedym.MsgSetOperatorAddress": {
                aminoType: string;
                toAmino: (message: _171.MsgSetOperatorAddress) => _171.MsgSetOperatorAddressAmino;
                fromAmino: (object: _171.MsgSetOperatorAddressAmino) => _171.MsgSetOperatorAddress;
            };
        };
        overwritableRecordTypeFromJSON(object: any): _171.OverwritableRecordType;
        overwritableRecordTypeToJSON(object: _171.OverwritableRecordType): string;
        OverwritableRecordType: typeof _171.OverwritableRecordType;
        OverwritableRecordTypeSDKType: typeof _171.OverwritableRecordType;
        OverwritableRecordTypeAmino: typeof _171.OverwritableRecordType;
        MsgLiquidStake: {
            typeUrl: string;
            encode(message: _171.MsgLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MsgLiquidStake;
            fromPartial(object: Partial<_171.MsgLiquidStake>): _171.MsgLiquidStake;
            fromAmino(object: _171.MsgLiquidStakeAmino): _171.MsgLiquidStake;
            toAmino(message: _171.MsgLiquidStake): _171.MsgLiquidStakeAmino;
            fromAminoMsg(object: _171.MsgLiquidStakeAminoMsg): _171.MsgLiquidStake;
            toAminoMsg(message: _171.MsgLiquidStake): _171.MsgLiquidStakeAminoMsg;
            fromProtoMsg(message: _171.MsgLiquidStakeProtoMsg): _171.MsgLiquidStake;
            toProto(message: _171.MsgLiquidStake): Uint8Array;
            toProtoMsg(message: _171.MsgLiquidStake): _171.MsgLiquidStakeProtoMsg;
        };
        MsgLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _171.MsgLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MsgLiquidStakeResponse;
            fromPartial(object: Partial<_171.MsgLiquidStakeResponse>): _171.MsgLiquidStakeResponse;
            fromAmino(object: _171.MsgLiquidStakeResponseAmino): _171.MsgLiquidStakeResponse;
            toAmino(message: _171.MsgLiquidStakeResponse): _171.MsgLiquidStakeResponseAmino;
            fromAminoMsg(object: _171.MsgLiquidStakeResponseAminoMsg): _171.MsgLiquidStakeResponse;
            fromProtoMsg(message: _171.MsgLiquidStakeResponseProtoMsg): _171.MsgLiquidStakeResponse;
            toProto(message: _171.MsgLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _171.MsgLiquidStakeResponse): _171.MsgLiquidStakeResponseProtoMsg;
        };
        MsgRedeemStake: {
            typeUrl: string;
            encode(message: _171.MsgRedeemStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MsgRedeemStake;
            fromPartial(object: Partial<_171.MsgRedeemStake>): _171.MsgRedeemStake;
            fromAmino(object: _171.MsgRedeemStakeAmino): _171.MsgRedeemStake;
            toAmino(message: _171.MsgRedeemStake): _171.MsgRedeemStakeAmino;
            fromAminoMsg(object: _171.MsgRedeemStakeAminoMsg): _171.MsgRedeemStake;
            toAminoMsg(message: _171.MsgRedeemStake): _171.MsgRedeemStakeAminoMsg;
            fromProtoMsg(message: _171.MsgRedeemStakeProtoMsg): _171.MsgRedeemStake;
            toProto(message: _171.MsgRedeemStake): Uint8Array;
            toProtoMsg(message: _171.MsgRedeemStake): _171.MsgRedeemStakeProtoMsg;
        };
        MsgRedeemStakeResponse: {
            typeUrl: string;
            encode(message: _171.MsgRedeemStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MsgRedeemStakeResponse;
            fromPartial(object: Partial<_171.MsgRedeemStakeResponse>): _171.MsgRedeemStakeResponse;
            fromAmino(object: _171.MsgRedeemStakeResponseAmino): _171.MsgRedeemStakeResponse;
            toAmino(message: _171.MsgRedeemStakeResponse): _171.MsgRedeemStakeResponseAmino;
            fromAminoMsg(object: _171.MsgRedeemStakeResponseAminoMsg): _171.MsgRedeemStakeResponse;
            fromProtoMsg(message: _171.MsgRedeemStakeResponseProtoMsg): _171.MsgRedeemStakeResponse;
            toProto(message: _171.MsgRedeemStakeResponse): Uint8Array;
            toProtoMsg(message: _171.MsgRedeemStakeResponse): _171.MsgRedeemStakeResponseProtoMsg;
        };
        MsgConfirmDelegation: {
            typeUrl: string;
            encode(message: _171.MsgConfirmDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MsgConfirmDelegation;
            fromPartial(object: Partial<_171.MsgConfirmDelegation>): _171.MsgConfirmDelegation;
            fromAmino(object: _171.MsgConfirmDelegationAmino): _171.MsgConfirmDelegation;
            toAmino(message: _171.MsgConfirmDelegation): _171.MsgConfirmDelegationAmino;
            fromAminoMsg(object: _171.MsgConfirmDelegationAminoMsg): _171.MsgConfirmDelegation;
            toAminoMsg(message: _171.MsgConfirmDelegation): _171.MsgConfirmDelegationAminoMsg;
            fromProtoMsg(message: _171.MsgConfirmDelegationProtoMsg): _171.MsgConfirmDelegation;
            toProto(message: _171.MsgConfirmDelegation): Uint8Array;
            toProtoMsg(message: _171.MsgConfirmDelegation): _171.MsgConfirmDelegationProtoMsg;
        };
        MsgConfirmDelegationResponse: {
            typeUrl: string;
            encode(_: _171.MsgConfirmDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MsgConfirmDelegationResponse;
            fromPartial(_: Partial<_171.MsgConfirmDelegationResponse>): _171.MsgConfirmDelegationResponse;
            fromAmino(_: _171.MsgConfirmDelegationResponseAmino): _171.MsgConfirmDelegationResponse;
            toAmino(_: _171.MsgConfirmDelegationResponse): _171.MsgConfirmDelegationResponseAmino;
            fromAminoMsg(object: _171.MsgConfirmDelegationResponseAminoMsg): _171.MsgConfirmDelegationResponse;
            fromProtoMsg(message: _171.MsgConfirmDelegationResponseProtoMsg): _171.MsgConfirmDelegationResponse;
            toProto(message: _171.MsgConfirmDelegationResponse): Uint8Array;
            toProtoMsg(message: _171.MsgConfirmDelegationResponse): _171.MsgConfirmDelegationResponseProtoMsg;
        };
        MsgConfirmUndelegation: {
            typeUrl: string;
            encode(message: _171.MsgConfirmUndelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MsgConfirmUndelegation;
            fromPartial(object: Partial<_171.MsgConfirmUndelegation>): _171.MsgConfirmUndelegation;
            fromAmino(object: _171.MsgConfirmUndelegationAmino): _171.MsgConfirmUndelegation;
            toAmino(message: _171.MsgConfirmUndelegation): _171.MsgConfirmUndelegationAmino;
            fromAminoMsg(object: _171.MsgConfirmUndelegationAminoMsg): _171.MsgConfirmUndelegation;
            toAminoMsg(message: _171.MsgConfirmUndelegation): _171.MsgConfirmUndelegationAminoMsg;
            fromProtoMsg(message: _171.MsgConfirmUndelegationProtoMsg): _171.MsgConfirmUndelegation;
            toProto(message: _171.MsgConfirmUndelegation): Uint8Array;
            toProtoMsg(message: _171.MsgConfirmUndelegation): _171.MsgConfirmUndelegationProtoMsg;
        };
        MsgConfirmUndelegationResponse: {
            typeUrl: string;
            encode(_: _171.MsgConfirmUndelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MsgConfirmUndelegationResponse;
            fromPartial(_: Partial<_171.MsgConfirmUndelegationResponse>): _171.MsgConfirmUndelegationResponse;
            fromAmino(_: _171.MsgConfirmUndelegationResponseAmino): _171.MsgConfirmUndelegationResponse;
            toAmino(_: _171.MsgConfirmUndelegationResponse): _171.MsgConfirmUndelegationResponseAmino;
            fromAminoMsg(object: _171.MsgConfirmUndelegationResponseAminoMsg): _171.MsgConfirmUndelegationResponse;
            fromProtoMsg(message: _171.MsgConfirmUndelegationResponseProtoMsg): _171.MsgConfirmUndelegationResponse;
            toProto(message: _171.MsgConfirmUndelegationResponse): Uint8Array;
            toProtoMsg(message: _171.MsgConfirmUndelegationResponse): _171.MsgConfirmUndelegationResponseProtoMsg;
        };
        MsgConfirmUnbondedTokenSweep: {
            typeUrl: string;
            encode(message: _171.MsgConfirmUnbondedTokenSweep, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MsgConfirmUnbondedTokenSweep;
            fromPartial(object: Partial<_171.MsgConfirmUnbondedTokenSweep>): _171.MsgConfirmUnbondedTokenSweep;
            fromAmino(object: _171.MsgConfirmUnbondedTokenSweepAmino): _171.MsgConfirmUnbondedTokenSweep;
            toAmino(message: _171.MsgConfirmUnbondedTokenSweep): _171.MsgConfirmUnbondedTokenSweepAmino;
            fromAminoMsg(object: _171.MsgConfirmUnbondedTokenSweepAminoMsg): _171.MsgConfirmUnbondedTokenSweep;
            toAminoMsg(message: _171.MsgConfirmUnbondedTokenSweep): _171.MsgConfirmUnbondedTokenSweepAminoMsg;
            fromProtoMsg(message: _171.MsgConfirmUnbondedTokenSweepProtoMsg): _171.MsgConfirmUnbondedTokenSweep;
            toProto(message: _171.MsgConfirmUnbondedTokenSweep): Uint8Array;
            toProtoMsg(message: _171.MsgConfirmUnbondedTokenSweep): _171.MsgConfirmUnbondedTokenSweepProtoMsg;
        };
        MsgConfirmUnbondedTokenSweepResponse: {
            typeUrl: string;
            encode(_: _171.MsgConfirmUnbondedTokenSweepResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MsgConfirmUnbondedTokenSweepResponse;
            fromPartial(_: Partial<_171.MsgConfirmUnbondedTokenSweepResponse>): _171.MsgConfirmUnbondedTokenSweepResponse;
            fromAmino(_: _171.MsgConfirmUnbondedTokenSweepResponseAmino): _171.MsgConfirmUnbondedTokenSweepResponse;
            toAmino(_: _171.MsgConfirmUnbondedTokenSweepResponse): _171.MsgConfirmUnbondedTokenSweepResponseAmino;
            fromAminoMsg(object: _171.MsgConfirmUnbondedTokenSweepResponseAminoMsg): _171.MsgConfirmUnbondedTokenSweepResponse;
            fromProtoMsg(message: _171.MsgConfirmUnbondedTokenSweepResponseProtoMsg): _171.MsgConfirmUnbondedTokenSweepResponse;
            toProto(message: _171.MsgConfirmUnbondedTokenSweepResponse): Uint8Array;
            toProtoMsg(message: _171.MsgConfirmUnbondedTokenSweepResponse): _171.MsgConfirmUnbondedTokenSweepResponseProtoMsg;
        };
        MsgAdjustDelegatedBalance: {
            typeUrl: string;
            encode(message: _171.MsgAdjustDelegatedBalance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MsgAdjustDelegatedBalance;
            fromPartial(object: Partial<_171.MsgAdjustDelegatedBalance>): _171.MsgAdjustDelegatedBalance;
            fromAmino(object: _171.MsgAdjustDelegatedBalanceAmino): _171.MsgAdjustDelegatedBalance;
            toAmino(message: _171.MsgAdjustDelegatedBalance): _171.MsgAdjustDelegatedBalanceAmino;
            fromAminoMsg(object: _171.MsgAdjustDelegatedBalanceAminoMsg): _171.MsgAdjustDelegatedBalance;
            toAminoMsg(message: _171.MsgAdjustDelegatedBalance): _171.MsgAdjustDelegatedBalanceAminoMsg;
            fromProtoMsg(message: _171.MsgAdjustDelegatedBalanceProtoMsg): _171.MsgAdjustDelegatedBalance;
            toProto(message: _171.MsgAdjustDelegatedBalance): Uint8Array;
            toProtoMsg(message: _171.MsgAdjustDelegatedBalance): _171.MsgAdjustDelegatedBalanceProtoMsg;
        };
        MsgAdjustDelegatedBalanceResponse: {
            typeUrl: string;
            encode(_: _171.MsgAdjustDelegatedBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MsgAdjustDelegatedBalanceResponse;
            fromPartial(_: Partial<_171.MsgAdjustDelegatedBalanceResponse>): _171.MsgAdjustDelegatedBalanceResponse;
            fromAmino(_: _171.MsgAdjustDelegatedBalanceResponseAmino): _171.MsgAdjustDelegatedBalanceResponse;
            toAmino(_: _171.MsgAdjustDelegatedBalanceResponse): _171.MsgAdjustDelegatedBalanceResponseAmino;
            fromAminoMsg(object: _171.MsgAdjustDelegatedBalanceResponseAminoMsg): _171.MsgAdjustDelegatedBalanceResponse;
            fromProtoMsg(message: _171.MsgAdjustDelegatedBalanceResponseProtoMsg): _171.MsgAdjustDelegatedBalanceResponse;
            toProto(message: _171.MsgAdjustDelegatedBalanceResponse): Uint8Array;
            toProtoMsg(message: _171.MsgAdjustDelegatedBalanceResponse): _171.MsgAdjustDelegatedBalanceResponseProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBounds: {
            typeUrl: string;
            encode(message: _171.MsgUpdateInnerRedemptionRateBounds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MsgUpdateInnerRedemptionRateBounds;
            fromPartial(object: Partial<_171.MsgUpdateInnerRedemptionRateBounds>): _171.MsgUpdateInnerRedemptionRateBounds;
            fromAmino(object: _171.MsgUpdateInnerRedemptionRateBoundsAmino): _171.MsgUpdateInnerRedemptionRateBounds;
            toAmino(message: _171.MsgUpdateInnerRedemptionRateBounds): _171.MsgUpdateInnerRedemptionRateBoundsAmino;
            fromAminoMsg(object: _171.MsgUpdateInnerRedemptionRateBoundsAminoMsg): _171.MsgUpdateInnerRedemptionRateBounds;
            toAminoMsg(message: _171.MsgUpdateInnerRedemptionRateBounds): _171.MsgUpdateInnerRedemptionRateBoundsAminoMsg;
            fromProtoMsg(message: _171.MsgUpdateInnerRedemptionRateBoundsProtoMsg): _171.MsgUpdateInnerRedemptionRateBounds;
            toProto(message: _171.MsgUpdateInnerRedemptionRateBounds): Uint8Array;
            toProtoMsg(message: _171.MsgUpdateInnerRedemptionRateBounds): _171.MsgUpdateInnerRedemptionRateBoundsProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBoundsResponse: {
            typeUrl: string;
            encode(_: _171.MsgUpdateInnerRedemptionRateBoundsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromPartial(_: Partial<_171.MsgUpdateInnerRedemptionRateBoundsResponse>): _171.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromAmino(_: _171.MsgUpdateInnerRedemptionRateBoundsResponseAmino): _171.MsgUpdateInnerRedemptionRateBoundsResponse;
            toAmino(_: _171.MsgUpdateInnerRedemptionRateBoundsResponse): _171.MsgUpdateInnerRedemptionRateBoundsResponseAmino;
            fromAminoMsg(object: _171.MsgUpdateInnerRedemptionRateBoundsResponseAminoMsg): _171.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromProtoMsg(message: _171.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg): _171.MsgUpdateInnerRedemptionRateBoundsResponse;
            toProto(message: _171.MsgUpdateInnerRedemptionRateBoundsResponse): Uint8Array;
            toProtoMsg(message: _171.MsgUpdateInnerRedemptionRateBoundsResponse): _171.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg;
        };
        MsgResumeHostZone: {
            typeUrl: string;
            encode(message: _171.MsgResumeHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MsgResumeHostZone;
            fromPartial(object: Partial<_171.MsgResumeHostZone>): _171.MsgResumeHostZone;
            fromAmino(object: _171.MsgResumeHostZoneAmino): _171.MsgResumeHostZone;
            toAmino(message: _171.MsgResumeHostZone): _171.MsgResumeHostZoneAmino;
            fromAminoMsg(object: _171.MsgResumeHostZoneAminoMsg): _171.MsgResumeHostZone;
            toAminoMsg(message: _171.MsgResumeHostZone): _171.MsgResumeHostZoneAminoMsg;
            fromProtoMsg(message: _171.MsgResumeHostZoneProtoMsg): _171.MsgResumeHostZone;
            toProto(message: _171.MsgResumeHostZone): Uint8Array;
            toProtoMsg(message: _171.MsgResumeHostZone): _171.MsgResumeHostZoneProtoMsg;
        };
        MsgResumeHostZoneResponse: {
            typeUrl: string;
            encode(_: _171.MsgResumeHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MsgResumeHostZoneResponse;
            fromPartial(_: Partial<_171.MsgResumeHostZoneResponse>): _171.MsgResumeHostZoneResponse;
            fromAmino(_: _171.MsgResumeHostZoneResponseAmino): _171.MsgResumeHostZoneResponse;
            toAmino(_: _171.MsgResumeHostZoneResponse): _171.MsgResumeHostZoneResponseAmino;
            fromAminoMsg(object: _171.MsgResumeHostZoneResponseAminoMsg): _171.MsgResumeHostZoneResponse;
            fromProtoMsg(message: _171.MsgResumeHostZoneResponseProtoMsg): _171.MsgResumeHostZoneResponse;
            toProto(message: _171.MsgResumeHostZoneResponse): Uint8Array;
            toProtoMsg(message: _171.MsgResumeHostZoneResponse): _171.MsgResumeHostZoneResponseProtoMsg;
        };
        MsgRefreshRedemptionRate: {
            typeUrl: string;
            encode(message: _171.MsgRefreshRedemptionRate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MsgRefreshRedemptionRate;
            fromPartial(object: Partial<_171.MsgRefreshRedemptionRate>): _171.MsgRefreshRedemptionRate;
            fromAmino(object: _171.MsgRefreshRedemptionRateAmino): _171.MsgRefreshRedemptionRate;
            toAmino(message: _171.MsgRefreshRedemptionRate): _171.MsgRefreshRedemptionRateAmino;
            fromAminoMsg(object: _171.MsgRefreshRedemptionRateAminoMsg): _171.MsgRefreshRedemptionRate;
            toAminoMsg(message: _171.MsgRefreshRedemptionRate): _171.MsgRefreshRedemptionRateAminoMsg;
            fromProtoMsg(message: _171.MsgRefreshRedemptionRateProtoMsg): _171.MsgRefreshRedemptionRate;
            toProto(message: _171.MsgRefreshRedemptionRate): Uint8Array;
            toProtoMsg(message: _171.MsgRefreshRedemptionRate): _171.MsgRefreshRedemptionRateProtoMsg;
        };
        MsgRefreshRedemptionRateResponse: {
            typeUrl: string;
            encode(_: _171.MsgRefreshRedemptionRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MsgRefreshRedemptionRateResponse;
            fromPartial(_: Partial<_171.MsgRefreshRedemptionRateResponse>): _171.MsgRefreshRedemptionRateResponse;
            fromAmino(_: _171.MsgRefreshRedemptionRateResponseAmino): _171.MsgRefreshRedemptionRateResponse;
            toAmino(_: _171.MsgRefreshRedemptionRateResponse): _171.MsgRefreshRedemptionRateResponseAmino;
            fromAminoMsg(object: _171.MsgRefreshRedemptionRateResponseAminoMsg): _171.MsgRefreshRedemptionRateResponse;
            fromProtoMsg(message: _171.MsgRefreshRedemptionRateResponseProtoMsg): _171.MsgRefreshRedemptionRateResponse;
            toProto(message: _171.MsgRefreshRedemptionRateResponse): Uint8Array;
            toProtoMsg(message: _171.MsgRefreshRedemptionRateResponse): _171.MsgRefreshRedemptionRateResponseProtoMsg;
        };
        MsgOverwriteDelegationRecord: {
            typeUrl: string;
            encode(message: _171.MsgOverwriteDelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MsgOverwriteDelegationRecord;
            fromPartial(object: Partial<_171.MsgOverwriteDelegationRecord>): _171.MsgOverwriteDelegationRecord;
            fromAmino(object: _171.MsgOverwriteDelegationRecordAmino): _171.MsgOverwriteDelegationRecord;
            toAmino(message: _171.MsgOverwriteDelegationRecord): _171.MsgOverwriteDelegationRecordAmino;
            fromAminoMsg(object: _171.MsgOverwriteDelegationRecordAminoMsg): _171.MsgOverwriteDelegationRecord;
            toAminoMsg(message: _171.MsgOverwriteDelegationRecord): _171.MsgOverwriteDelegationRecordAminoMsg;
            fromProtoMsg(message: _171.MsgOverwriteDelegationRecordProtoMsg): _171.MsgOverwriteDelegationRecord;
            toProto(message: _171.MsgOverwriteDelegationRecord): Uint8Array;
            toProtoMsg(message: _171.MsgOverwriteDelegationRecord): _171.MsgOverwriteDelegationRecordProtoMsg;
        };
        MsgOverwriteDelegationRecordResponse: {
            typeUrl: string;
            encode(_: _171.MsgOverwriteDelegationRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MsgOverwriteDelegationRecordResponse;
            fromPartial(_: Partial<_171.MsgOverwriteDelegationRecordResponse>): _171.MsgOverwriteDelegationRecordResponse;
            fromAmino(_: _171.MsgOverwriteDelegationRecordResponseAmino): _171.MsgOverwriteDelegationRecordResponse;
            toAmino(_: _171.MsgOverwriteDelegationRecordResponse): _171.MsgOverwriteDelegationRecordResponseAmino;
            fromAminoMsg(object: _171.MsgOverwriteDelegationRecordResponseAminoMsg): _171.MsgOverwriteDelegationRecordResponse;
            fromProtoMsg(message: _171.MsgOverwriteDelegationRecordResponseProtoMsg): _171.MsgOverwriteDelegationRecordResponse;
            toProto(message: _171.MsgOverwriteDelegationRecordResponse): Uint8Array;
            toProtoMsg(message: _171.MsgOverwriteDelegationRecordResponse): _171.MsgOverwriteDelegationRecordResponseProtoMsg;
        };
        MsgOverwriteUnbondingRecord: {
            typeUrl: string;
            encode(message: _171.MsgOverwriteUnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MsgOverwriteUnbondingRecord;
            fromPartial(object: Partial<_171.MsgOverwriteUnbondingRecord>): _171.MsgOverwriteUnbondingRecord;
            fromAmino(object: _171.MsgOverwriteUnbondingRecordAmino): _171.MsgOverwriteUnbondingRecord;
            toAmino(message: _171.MsgOverwriteUnbondingRecord): _171.MsgOverwriteUnbondingRecordAmino;
            fromAminoMsg(object: _171.MsgOverwriteUnbondingRecordAminoMsg): _171.MsgOverwriteUnbondingRecord;
            toAminoMsg(message: _171.MsgOverwriteUnbondingRecord): _171.MsgOverwriteUnbondingRecordAminoMsg;
            fromProtoMsg(message: _171.MsgOverwriteUnbondingRecordProtoMsg): _171.MsgOverwriteUnbondingRecord;
            toProto(message: _171.MsgOverwriteUnbondingRecord): Uint8Array;
            toProtoMsg(message: _171.MsgOverwriteUnbondingRecord): _171.MsgOverwriteUnbondingRecordProtoMsg;
        };
        MsgOverwriteUnbondingRecordResponse: {
            typeUrl: string;
            encode(_: _171.MsgOverwriteUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MsgOverwriteUnbondingRecordResponse;
            fromPartial(_: Partial<_171.MsgOverwriteUnbondingRecordResponse>): _171.MsgOverwriteUnbondingRecordResponse;
            fromAmino(_: _171.MsgOverwriteUnbondingRecordResponseAmino): _171.MsgOverwriteUnbondingRecordResponse;
            toAmino(_: _171.MsgOverwriteUnbondingRecordResponse): _171.MsgOverwriteUnbondingRecordResponseAmino;
            fromAminoMsg(object: _171.MsgOverwriteUnbondingRecordResponseAminoMsg): _171.MsgOverwriteUnbondingRecordResponse;
            fromProtoMsg(message: _171.MsgOverwriteUnbondingRecordResponseProtoMsg): _171.MsgOverwriteUnbondingRecordResponse;
            toProto(message: _171.MsgOverwriteUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _171.MsgOverwriteUnbondingRecordResponse): _171.MsgOverwriteUnbondingRecordResponseProtoMsg;
        };
        MsgOverwriteRedemptionRecord: {
            typeUrl: string;
            encode(message: _171.MsgOverwriteRedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MsgOverwriteRedemptionRecord;
            fromPartial(object: Partial<_171.MsgOverwriteRedemptionRecord>): _171.MsgOverwriteRedemptionRecord;
            fromAmino(object: _171.MsgOverwriteRedemptionRecordAmino): _171.MsgOverwriteRedemptionRecord;
            toAmino(message: _171.MsgOverwriteRedemptionRecord): _171.MsgOverwriteRedemptionRecordAmino;
            fromAminoMsg(object: _171.MsgOverwriteRedemptionRecordAminoMsg): _171.MsgOverwriteRedemptionRecord;
            toAminoMsg(message: _171.MsgOverwriteRedemptionRecord): _171.MsgOverwriteRedemptionRecordAminoMsg;
            fromProtoMsg(message: _171.MsgOverwriteRedemptionRecordProtoMsg): _171.MsgOverwriteRedemptionRecord;
            toProto(message: _171.MsgOverwriteRedemptionRecord): Uint8Array;
            toProtoMsg(message: _171.MsgOverwriteRedemptionRecord): _171.MsgOverwriteRedemptionRecordProtoMsg;
        };
        MsgOverwriteRedemptionRecordResponse: {
            typeUrl: string;
            encode(_: _171.MsgOverwriteRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MsgOverwriteRedemptionRecordResponse;
            fromPartial(_: Partial<_171.MsgOverwriteRedemptionRecordResponse>): _171.MsgOverwriteRedemptionRecordResponse;
            fromAmino(_: _171.MsgOverwriteRedemptionRecordResponseAmino): _171.MsgOverwriteRedemptionRecordResponse;
            toAmino(_: _171.MsgOverwriteRedemptionRecordResponse): _171.MsgOverwriteRedemptionRecordResponseAmino;
            fromAminoMsg(object: _171.MsgOverwriteRedemptionRecordResponseAminoMsg): _171.MsgOverwriteRedemptionRecordResponse;
            fromProtoMsg(message: _171.MsgOverwriteRedemptionRecordResponseProtoMsg): _171.MsgOverwriteRedemptionRecordResponse;
            toProto(message: _171.MsgOverwriteRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _171.MsgOverwriteRedemptionRecordResponse): _171.MsgOverwriteRedemptionRecordResponseProtoMsg;
        };
        MsgSetOperatorAddress: {
            typeUrl: string;
            encode(message: _171.MsgSetOperatorAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MsgSetOperatorAddress;
            fromPartial(object: Partial<_171.MsgSetOperatorAddress>): _171.MsgSetOperatorAddress;
            fromAmino(object: _171.MsgSetOperatorAddressAmino): _171.MsgSetOperatorAddress;
            toAmino(message: _171.MsgSetOperatorAddress): _171.MsgSetOperatorAddressAmino;
            fromAminoMsg(object: _171.MsgSetOperatorAddressAminoMsg): _171.MsgSetOperatorAddress;
            toAminoMsg(message: _171.MsgSetOperatorAddress): _171.MsgSetOperatorAddressAminoMsg;
            fromProtoMsg(message: _171.MsgSetOperatorAddressProtoMsg): _171.MsgSetOperatorAddress;
            toProto(message: _171.MsgSetOperatorAddress): Uint8Array;
            toProtoMsg(message: _171.MsgSetOperatorAddress): _171.MsgSetOperatorAddressProtoMsg;
        };
        MsgSetOperatorAddressResponse: {
            typeUrl: string;
            encode(_: _171.MsgSetOperatorAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MsgSetOperatorAddressResponse;
            fromPartial(_: Partial<_171.MsgSetOperatorAddressResponse>): _171.MsgSetOperatorAddressResponse;
            fromAmino(_: _171.MsgSetOperatorAddressResponseAmino): _171.MsgSetOperatorAddressResponse;
            toAmino(_: _171.MsgSetOperatorAddressResponse): _171.MsgSetOperatorAddressResponseAmino;
            fromAminoMsg(object: _171.MsgSetOperatorAddressResponseAminoMsg): _171.MsgSetOperatorAddressResponse;
            fromProtoMsg(message: _171.MsgSetOperatorAddressResponseProtoMsg): _171.MsgSetOperatorAddressResponse;
            toProto(message: _171.MsgSetOperatorAddressResponse): Uint8Array;
            toProtoMsg(message: _171.MsgSetOperatorAddressResponse): _171.MsgSetOperatorAddressResponseProtoMsg;
        };
        delegationRecordStatusFromJSON(object: any): _170.DelegationRecordStatus;
        delegationRecordStatusToJSON(object: _170.DelegationRecordStatus): string;
        unbondingRecordStatusFromJSON(object: any): _170.UnbondingRecordStatus;
        unbondingRecordStatusToJSON(object: _170.UnbondingRecordStatus): string;
        DelegationRecordStatus: typeof _170.DelegationRecordStatus;
        DelegationRecordStatusSDKType: typeof _170.DelegationRecordStatus;
        DelegationRecordStatusAmino: typeof _170.DelegationRecordStatus;
        UnbondingRecordStatus: typeof _170.UnbondingRecordStatus;
        UnbondingRecordStatusSDKType: typeof _170.UnbondingRecordStatus;
        UnbondingRecordStatusAmino: typeof _170.UnbondingRecordStatus;
        HostZone: {
            typeUrl: string;
            encode(message: _170.HostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.HostZone;
            fromPartial(object: Partial<_170.HostZone>): _170.HostZone;
            fromAmino(object: _170.HostZoneAmino): _170.HostZone;
            toAmino(message: _170.HostZone): _170.HostZoneAmino;
            fromAminoMsg(object: _170.HostZoneAminoMsg): _170.HostZone;
            fromProtoMsg(message: _170.HostZoneProtoMsg): _170.HostZone;
            toProto(message: _170.HostZone): Uint8Array;
            toProtoMsg(message: _170.HostZone): _170.HostZoneProtoMsg;
        };
        DelegationRecord: {
            typeUrl: string;
            encode(message: _170.DelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.DelegationRecord;
            fromPartial(object: Partial<_170.DelegationRecord>): _170.DelegationRecord;
            fromAmino(object: _170.DelegationRecordAmino): _170.DelegationRecord;
            toAmino(message: _170.DelegationRecord): _170.DelegationRecordAmino;
            fromAminoMsg(object: _170.DelegationRecordAminoMsg): _170.DelegationRecord;
            fromProtoMsg(message: _170.DelegationRecordProtoMsg): _170.DelegationRecord;
            toProto(message: _170.DelegationRecord): Uint8Array;
            toProtoMsg(message: _170.DelegationRecord): _170.DelegationRecordProtoMsg;
        };
        UnbondingRecord: {
            typeUrl: string;
            encode(message: _170.UnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.UnbondingRecord;
            fromPartial(object: Partial<_170.UnbondingRecord>): _170.UnbondingRecord;
            fromAmino(object: _170.UnbondingRecordAmino): _170.UnbondingRecord;
            toAmino(message: _170.UnbondingRecord): _170.UnbondingRecordAmino;
            fromAminoMsg(object: _170.UnbondingRecordAminoMsg): _170.UnbondingRecord;
            fromProtoMsg(message: _170.UnbondingRecordProtoMsg): _170.UnbondingRecord;
            toProto(message: _170.UnbondingRecord): Uint8Array;
            toProtoMsg(message: _170.UnbondingRecord): _170.UnbondingRecordProtoMsg;
        };
        RedemptionRecord: {
            typeUrl: string;
            encode(message: _170.RedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.RedemptionRecord;
            fromPartial(object: Partial<_170.RedemptionRecord>): _170.RedemptionRecord;
            fromAmino(object: _170.RedemptionRecordAmino): _170.RedemptionRecord;
            toAmino(message: _170.RedemptionRecord): _170.RedemptionRecordAmino;
            fromAminoMsg(object: _170.RedemptionRecordAminoMsg): _170.RedemptionRecord;
            fromProtoMsg(message: _170.RedemptionRecordProtoMsg): _170.RedemptionRecord;
            toProto(message: _170.RedemptionRecord): Uint8Array;
            toProtoMsg(message: _170.RedemptionRecord): _170.RedemptionRecordProtoMsg;
        };
        SlashRecord: {
            typeUrl: string;
            encode(message: _170.SlashRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.SlashRecord;
            fromPartial(object: Partial<_170.SlashRecord>): _170.SlashRecord;
            fromAmino(object: _170.SlashRecordAmino): _170.SlashRecord;
            toAmino(message: _170.SlashRecord): _170.SlashRecordAmino;
            fromAminoMsg(object: _170.SlashRecordAminoMsg): _170.SlashRecord;
            fromProtoMsg(message: _170.SlashRecordProtoMsg): _170.SlashRecord;
            toProto(message: _170.SlashRecord): Uint8Array;
            toProtoMsg(message: _170.SlashRecord): _170.SlashRecordProtoMsg;
        };
        QueryHostZoneRequest: {
            typeUrl: string;
            encode(_: _169.QueryHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.QueryHostZoneRequest;
            fromPartial(_: Partial<_169.QueryHostZoneRequest>): _169.QueryHostZoneRequest;
            fromAmino(_: _169.QueryHostZoneRequestAmino): _169.QueryHostZoneRequest;
            toAmino(_: _169.QueryHostZoneRequest): _169.QueryHostZoneRequestAmino;
            fromAminoMsg(object: _169.QueryHostZoneRequestAminoMsg): _169.QueryHostZoneRequest;
            fromProtoMsg(message: _169.QueryHostZoneRequestProtoMsg): _169.QueryHostZoneRequest;
            toProto(message: _169.QueryHostZoneRequest): Uint8Array;
            toProtoMsg(message: _169.QueryHostZoneRequest): _169.QueryHostZoneRequestProtoMsg;
        };
        QueryHostZoneResponse: {
            typeUrl: string;
            encode(message: _169.QueryHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.QueryHostZoneResponse;
            fromPartial(object: Partial<_169.QueryHostZoneResponse>): _169.QueryHostZoneResponse;
            fromAmino(object: _169.QueryHostZoneResponseAmino): _169.QueryHostZoneResponse;
            toAmino(message: _169.QueryHostZoneResponse): _169.QueryHostZoneResponseAmino;
            fromAminoMsg(object: _169.QueryHostZoneResponseAminoMsg): _169.QueryHostZoneResponse;
            fromProtoMsg(message: _169.QueryHostZoneResponseProtoMsg): _169.QueryHostZoneResponse;
            toProto(message: _169.QueryHostZoneResponse): Uint8Array;
            toProtoMsg(message: _169.QueryHostZoneResponse): _169.QueryHostZoneResponseProtoMsg;
        };
        QueryDelegationRecordsRequest: {
            typeUrl: string;
            encode(message: _169.QueryDelegationRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.QueryDelegationRecordsRequest;
            fromPartial(object: Partial<_169.QueryDelegationRecordsRequest>): _169.QueryDelegationRecordsRequest;
            fromAmino(object: _169.QueryDelegationRecordsRequestAmino): _169.QueryDelegationRecordsRequest;
            toAmino(message: _169.QueryDelegationRecordsRequest): _169.QueryDelegationRecordsRequestAmino;
            fromAminoMsg(object: _169.QueryDelegationRecordsRequestAminoMsg): _169.QueryDelegationRecordsRequest;
            fromProtoMsg(message: _169.QueryDelegationRecordsRequestProtoMsg): _169.QueryDelegationRecordsRequest;
            toProto(message: _169.QueryDelegationRecordsRequest): Uint8Array;
            toProtoMsg(message: _169.QueryDelegationRecordsRequest): _169.QueryDelegationRecordsRequestProtoMsg;
        };
        QueryDelegationRecordsResponse: {
            typeUrl: string;
            encode(message: _169.QueryDelegationRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.QueryDelegationRecordsResponse;
            fromPartial(object: Partial<_169.QueryDelegationRecordsResponse>): _169.QueryDelegationRecordsResponse;
            fromAmino(object: _169.QueryDelegationRecordsResponseAmino): _169.QueryDelegationRecordsResponse;
            toAmino(message: _169.QueryDelegationRecordsResponse): _169.QueryDelegationRecordsResponseAmino;
            fromAminoMsg(object: _169.QueryDelegationRecordsResponseAminoMsg): _169.QueryDelegationRecordsResponse;
            fromProtoMsg(message: _169.QueryDelegationRecordsResponseProtoMsg): _169.QueryDelegationRecordsResponse;
            toProto(message: _169.QueryDelegationRecordsResponse): Uint8Array;
            toProtoMsg(message: _169.QueryDelegationRecordsResponse): _169.QueryDelegationRecordsResponseProtoMsg;
        };
        QueryUnbondingRecordsRequest: {
            typeUrl: string;
            encode(message: _169.QueryUnbondingRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.QueryUnbondingRecordsRequest;
            fromPartial(object: Partial<_169.QueryUnbondingRecordsRequest>): _169.QueryUnbondingRecordsRequest;
            fromAmino(object: _169.QueryUnbondingRecordsRequestAmino): _169.QueryUnbondingRecordsRequest;
            toAmino(message: _169.QueryUnbondingRecordsRequest): _169.QueryUnbondingRecordsRequestAmino;
            fromAminoMsg(object: _169.QueryUnbondingRecordsRequestAminoMsg): _169.QueryUnbondingRecordsRequest;
            fromProtoMsg(message: _169.QueryUnbondingRecordsRequestProtoMsg): _169.QueryUnbondingRecordsRequest;
            toProto(message: _169.QueryUnbondingRecordsRequest): Uint8Array;
            toProtoMsg(message: _169.QueryUnbondingRecordsRequest): _169.QueryUnbondingRecordsRequestProtoMsg;
        };
        QueryUnbondingRecordsResponse: {
            typeUrl: string;
            encode(message: _169.QueryUnbondingRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.QueryUnbondingRecordsResponse;
            fromPartial(object: Partial<_169.QueryUnbondingRecordsResponse>): _169.QueryUnbondingRecordsResponse;
            fromAmino(object: _169.QueryUnbondingRecordsResponseAmino): _169.QueryUnbondingRecordsResponse;
            toAmino(message: _169.QueryUnbondingRecordsResponse): _169.QueryUnbondingRecordsResponseAmino;
            fromAminoMsg(object: _169.QueryUnbondingRecordsResponseAminoMsg): _169.QueryUnbondingRecordsResponse;
            fromProtoMsg(message: _169.QueryUnbondingRecordsResponseProtoMsg): _169.QueryUnbondingRecordsResponse;
            toProto(message: _169.QueryUnbondingRecordsResponse): Uint8Array;
            toProtoMsg(message: _169.QueryUnbondingRecordsResponse): _169.QueryUnbondingRecordsResponseProtoMsg;
        };
        QueryRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _169.QueryRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.QueryRedemptionRecordRequest;
            fromPartial(object: Partial<_169.QueryRedemptionRecordRequest>): _169.QueryRedemptionRecordRequest;
            fromAmino(object: _169.QueryRedemptionRecordRequestAmino): _169.QueryRedemptionRecordRequest;
            toAmino(message: _169.QueryRedemptionRecordRequest): _169.QueryRedemptionRecordRequestAmino;
            fromAminoMsg(object: _169.QueryRedemptionRecordRequestAminoMsg): _169.QueryRedemptionRecordRequest;
            fromProtoMsg(message: _169.QueryRedemptionRecordRequestProtoMsg): _169.QueryRedemptionRecordRequest;
            toProto(message: _169.QueryRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _169.QueryRedemptionRecordRequest): _169.QueryRedemptionRecordRequestProtoMsg;
        };
        QueryRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _169.QueryRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.QueryRedemptionRecordResponse;
            fromPartial(object: Partial<_169.QueryRedemptionRecordResponse>): _169.QueryRedemptionRecordResponse;
            fromAmino(object: _169.QueryRedemptionRecordResponseAmino): _169.QueryRedemptionRecordResponse;
            toAmino(message: _169.QueryRedemptionRecordResponse): _169.QueryRedemptionRecordResponseAmino;
            fromAminoMsg(object: _169.QueryRedemptionRecordResponseAminoMsg): _169.QueryRedemptionRecordResponse;
            fromProtoMsg(message: _169.QueryRedemptionRecordResponseProtoMsg): _169.QueryRedemptionRecordResponse;
            toProto(message: _169.QueryRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _169.QueryRedemptionRecordResponse): _169.QueryRedemptionRecordResponseProtoMsg;
        };
        QueryRedemptionRecordsRequest: {
            typeUrl: string;
            encode(message: _169.QueryRedemptionRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.QueryRedemptionRecordsRequest;
            fromPartial(object: Partial<_169.QueryRedemptionRecordsRequest>): _169.QueryRedemptionRecordsRequest;
            fromAmino(object: _169.QueryRedemptionRecordsRequestAmino): _169.QueryRedemptionRecordsRequest;
            toAmino(message: _169.QueryRedemptionRecordsRequest): _169.QueryRedemptionRecordsRequestAmino;
            fromAminoMsg(object: _169.QueryRedemptionRecordsRequestAminoMsg): _169.QueryRedemptionRecordsRequest;
            fromProtoMsg(message: _169.QueryRedemptionRecordsRequestProtoMsg): _169.QueryRedemptionRecordsRequest;
            toProto(message: _169.QueryRedemptionRecordsRequest): Uint8Array;
            toProtoMsg(message: _169.QueryRedemptionRecordsRequest): _169.QueryRedemptionRecordsRequestProtoMsg;
        };
        QueryRedemptionRecordsResponse: {
            typeUrl: string;
            encode(message: _169.QueryRedemptionRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.QueryRedemptionRecordsResponse;
            fromPartial(object: Partial<_169.QueryRedemptionRecordsResponse>): _169.QueryRedemptionRecordsResponse;
            fromAmino(object: _169.QueryRedemptionRecordsResponseAmino): _169.QueryRedemptionRecordsResponse;
            toAmino(message: _169.QueryRedemptionRecordsResponse): _169.QueryRedemptionRecordsResponseAmino;
            fromAminoMsg(object: _169.QueryRedemptionRecordsResponseAminoMsg): _169.QueryRedemptionRecordsResponse;
            fromProtoMsg(message: _169.QueryRedemptionRecordsResponseProtoMsg): _169.QueryRedemptionRecordsResponse;
            toProto(message: _169.QueryRedemptionRecordsResponse): Uint8Array;
            toProtoMsg(message: _169.QueryRedemptionRecordsResponse): _169.QueryRedemptionRecordsResponseProtoMsg;
        };
        QuerySlashRecordsRequest: {
            typeUrl: string;
            encode(_: _169.QuerySlashRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.QuerySlashRecordsRequest;
            fromPartial(_: Partial<_169.QuerySlashRecordsRequest>): _169.QuerySlashRecordsRequest;
            fromAmino(_: _169.QuerySlashRecordsRequestAmino): _169.QuerySlashRecordsRequest;
            toAmino(_: _169.QuerySlashRecordsRequest): _169.QuerySlashRecordsRequestAmino;
            fromAminoMsg(object: _169.QuerySlashRecordsRequestAminoMsg): _169.QuerySlashRecordsRequest;
            fromProtoMsg(message: _169.QuerySlashRecordsRequestProtoMsg): _169.QuerySlashRecordsRequest;
            toProto(message: _169.QuerySlashRecordsRequest): Uint8Array;
            toProtoMsg(message: _169.QuerySlashRecordsRequest): _169.QuerySlashRecordsRequestProtoMsg;
        };
        QuerySlashRecordsResponse: {
            typeUrl: string;
            encode(message: _169.QuerySlashRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.QuerySlashRecordsResponse;
            fromPartial(object: Partial<_169.QuerySlashRecordsResponse>): _169.QuerySlashRecordsResponse;
            fromAmino(object: _169.QuerySlashRecordsResponseAmino): _169.QuerySlashRecordsResponse;
            toAmino(message: _169.QuerySlashRecordsResponse): _169.QuerySlashRecordsResponseAmino;
            fromAminoMsg(object: _169.QuerySlashRecordsResponseAminoMsg): _169.QuerySlashRecordsResponse;
            fromProtoMsg(message: _169.QuerySlashRecordsResponseProtoMsg): _169.QuerySlashRecordsResponse;
            toProto(message: _169.QuerySlashRecordsResponse): Uint8Array;
            toProtoMsg(message: _169.QuerySlashRecordsResponse): _169.QuerySlashRecordsResponseProtoMsg;
        };
        RedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _169.RedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.RedemptionRecordResponse;
            fromPartial(object: Partial<_169.RedemptionRecordResponse>): _169.RedemptionRecordResponse;
            fromAmino(object: _169.RedemptionRecordResponseAmino): _169.RedemptionRecordResponse;
            toAmino(message: _169.RedemptionRecordResponse): _169.RedemptionRecordResponseAmino;
            fromAminoMsg(object: _169.RedemptionRecordResponseAminoMsg): _169.RedemptionRecordResponse;
            fromProtoMsg(message: _169.RedemptionRecordResponseProtoMsg): _169.RedemptionRecordResponse;
            toProto(message: _169.RedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _169.RedemptionRecordResponse): _169.RedemptionRecordResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _168.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.Params;
            fromPartial(_: Partial<_168.Params>): _168.Params;
            fromAmino(_: _168.ParamsAmino): _168.Params;
            toAmino(_: _168.Params): _168.ParamsAmino;
            fromAminoMsg(object: _168.ParamsAminoMsg): _168.Params;
            fromProtoMsg(message: _168.ParamsProtoMsg): _168.Params;
            toProto(message: _168.Params): Uint8Array;
            toProtoMsg(message: _168.Params): _168.ParamsProtoMsg;
        };
        TransferInProgressRecordIds: {
            typeUrl: string;
            encode(message: _168.TransferInProgressRecordIds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.TransferInProgressRecordIds;
            fromPartial(object: Partial<_168.TransferInProgressRecordIds>): _168.TransferInProgressRecordIds;
            fromAmino(object: _168.TransferInProgressRecordIdsAmino): _168.TransferInProgressRecordIds;
            toAmino(message: _168.TransferInProgressRecordIds): _168.TransferInProgressRecordIdsAmino;
            fromAminoMsg(object: _168.TransferInProgressRecordIdsAminoMsg): _168.TransferInProgressRecordIds;
            fromProtoMsg(message: _168.TransferInProgressRecordIdsProtoMsg): _168.TransferInProgressRecordIds;
            toProto(message: _168.TransferInProgressRecordIds): Uint8Array;
            toProtoMsg(message: _168.TransferInProgressRecordIds): _168.TransferInProgressRecordIdsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _168.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.GenesisState;
            fromPartial(object: Partial<_168.GenesisState>): _168.GenesisState;
            fromAmino(object: _168.GenesisStateAmino): _168.GenesisState;
            toAmino(message: _168.GenesisState): _168.GenesisStateAmino;
            fromAminoMsg(object: _168.GenesisStateAminoMsg): _168.GenesisState;
            fromProtoMsg(message: _168.GenesisStateProtoMsg): _168.GenesisState;
            toProto(message: _168.GenesisState): Uint8Array;
            toProtoMsg(message: _168.GenesisState): _168.GenesisStateProtoMsg;
        };
    };
    const stakeibc: {
        MsgClientImpl: typeof _313.MsgClientImpl;
        QueryClientImpl: typeof _303.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _181.QueryParamsRequest): Promise<_181.QueryParamsResponse>;
            validators(request: _181.QueryGetValidatorsRequest): Promise<_181.QueryGetValidatorsResponse>;
            hostZone(request: _181.QueryGetHostZoneRequest): Promise<_181.QueryGetHostZoneResponse>;
            hostZoneAll(request?: _181.QueryAllHostZoneRequest): Promise<_181.QueryAllHostZoneResponse>;
            moduleAddress(request: _181.QueryModuleAddressRequest): Promise<_181.QueryModuleAddressResponse>;
            interchainAccountFromAddress(request: _181.QueryInterchainAccountFromAddressRequest): Promise<_181.QueryInterchainAccountFromAddressResponse>;
            epochTracker(request: _181.QueryGetEpochTrackerRequest): Promise<_181.QueryGetEpochTrackerResponse>;
            epochTrackerAll(request?: _181.QueryAllEpochTrackerRequest): Promise<_181.QueryAllEpochTrackerResponse>;
            nextPacketSequence(request: _181.QueryGetNextPacketSequenceRequest): Promise<_181.QueryGetNextPacketSequenceResponse>;
            addressUnbondings(request: _181.QueryAddressUnbondings): Promise<_181.QueryAddressUnbondingsResponse>;
            allTradeRoutes(request?: _181.QueryAllTradeRoutes): Promise<_181.QueryAllTradeRoutesResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                liquidStake(value: _183.MsgLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                lSMLiquidStake(value: _183.MsgLSMLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                redeemStake(value: _183.MsgRedeemStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                registerHostZone(value: _183.MsgRegisterHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                claimUndelegatedTokens(value: _183.MsgClaimUndelegatedTokens): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                rebalanceValidators(value: _183.MsgRebalanceValidators): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addValidators(value: _183.MsgAddValidators): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                changeValidatorWeight(value: _183.MsgChangeValidatorWeights): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteValidator(value: _183.MsgDeleteValidator): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                restoreInterchainAccount(value: _183.MsgRestoreInterchainAccount): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                closeDelegationChannel(value: _183.MsgCloseDelegationChannel): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateValidatorSharesExchRate(value: _183.MsgUpdateValidatorSharesExchRate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                calibrateDelegation(value: _183.MsgCalibrateDelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                clearBalance(value: _183.MsgClearBalance): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateInnerRedemptionRateBounds(value: _183.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                resumeHostZone(value: _183.MsgResumeHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createTradeRoute(value: _183.MsgCreateTradeRoute): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteTradeRoute(value: _183.MsgDeleteTradeRoute): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateTradeRoute(value: _183.MsgUpdateTradeRoute): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setCommunityPoolRebate(value: _183.MsgSetCommunityPoolRebate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                toggleTradeController(value: _183.MsgToggleTradeController): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateHostZoneParams(value: _183.MsgUpdateHostZoneParams): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                liquidStake(value: _183.MsgLiquidStake): {
                    typeUrl: string;
                    value: _183.MsgLiquidStake;
                };
                lSMLiquidStake(value: _183.MsgLSMLiquidStake): {
                    typeUrl: string;
                    value: _183.MsgLSMLiquidStake;
                };
                redeemStake(value: _183.MsgRedeemStake): {
                    typeUrl: string;
                    value: _183.MsgRedeemStake;
                };
                registerHostZone(value: _183.MsgRegisterHostZone): {
                    typeUrl: string;
                    value: _183.MsgRegisterHostZone;
                };
                claimUndelegatedTokens(value: _183.MsgClaimUndelegatedTokens): {
                    typeUrl: string;
                    value: _183.MsgClaimUndelegatedTokens;
                };
                rebalanceValidators(value: _183.MsgRebalanceValidators): {
                    typeUrl: string;
                    value: _183.MsgRebalanceValidators;
                };
                addValidators(value: _183.MsgAddValidators): {
                    typeUrl: string;
                    value: _183.MsgAddValidators;
                };
                changeValidatorWeight(value: _183.MsgChangeValidatorWeights): {
                    typeUrl: string;
                    value: _183.MsgChangeValidatorWeights;
                };
                deleteValidator(value: _183.MsgDeleteValidator): {
                    typeUrl: string;
                    value: _183.MsgDeleteValidator;
                };
                restoreInterchainAccount(value: _183.MsgRestoreInterchainAccount): {
                    typeUrl: string;
                    value: _183.MsgRestoreInterchainAccount;
                };
                closeDelegationChannel(value: _183.MsgCloseDelegationChannel): {
                    typeUrl: string;
                    value: _183.MsgCloseDelegationChannel;
                };
                updateValidatorSharesExchRate(value: _183.MsgUpdateValidatorSharesExchRate): {
                    typeUrl: string;
                    value: _183.MsgUpdateValidatorSharesExchRate;
                };
                calibrateDelegation(value: _183.MsgCalibrateDelegation): {
                    typeUrl: string;
                    value: _183.MsgCalibrateDelegation;
                };
                clearBalance(value: _183.MsgClearBalance): {
                    typeUrl: string;
                    value: _183.MsgClearBalance;
                };
                updateInnerRedemptionRateBounds(value: _183.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _183.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _183.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _183.MsgResumeHostZone;
                };
                createTradeRoute(value: _183.MsgCreateTradeRoute): {
                    typeUrl: string;
                    value: _183.MsgCreateTradeRoute;
                };
                deleteTradeRoute(value: _183.MsgDeleteTradeRoute): {
                    typeUrl: string;
                    value: _183.MsgDeleteTradeRoute;
                };
                updateTradeRoute(value: _183.MsgUpdateTradeRoute): {
                    typeUrl: string;
                    value: _183.MsgUpdateTradeRoute;
                };
                setCommunityPoolRebate(value: _183.MsgSetCommunityPoolRebate): {
                    typeUrl: string;
                    value: _183.MsgSetCommunityPoolRebate;
                };
                toggleTradeController(value: _183.MsgToggleTradeController): {
                    typeUrl: string;
                    value: _183.MsgToggleTradeController;
                };
                updateHostZoneParams(value: _183.MsgUpdateHostZoneParams): {
                    typeUrl: string;
                    value: _183.MsgUpdateHostZoneParams;
                };
            };
            fromPartial: {
                liquidStake(value: _183.MsgLiquidStake): {
                    typeUrl: string;
                    value: _183.MsgLiquidStake;
                };
                lSMLiquidStake(value: _183.MsgLSMLiquidStake): {
                    typeUrl: string;
                    value: _183.MsgLSMLiquidStake;
                };
                redeemStake(value: _183.MsgRedeemStake): {
                    typeUrl: string;
                    value: _183.MsgRedeemStake;
                };
                registerHostZone(value: _183.MsgRegisterHostZone): {
                    typeUrl: string;
                    value: _183.MsgRegisterHostZone;
                };
                claimUndelegatedTokens(value: _183.MsgClaimUndelegatedTokens): {
                    typeUrl: string;
                    value: _183.MsgClaimUndelegatedTokens;
                };
                rebalanceValidators(value: _183.MsgRebalanceValidators): {
                    typeUrl: string;
                    value: _183.MsgRebalanceValidators;
                };
                addValidators(value: _183.MsgAddValidators): {
                    typeUrl: string;
                    value: _183.MsgAddValidators;
                };
                changeValidatorWeight(value: _183.MsgChangeValidatorWeights): {
                    typeUrl: string;
                    value: _183.MsgChangeValidatorWeights;
                };
                deleteValidator(value: _183.MsgDeleteValidator): {
                    typeUrl: string;
                    value: _183.MsgDeleteValidator;
                };
                restoreInterchainAccount(value: _183.MsgRestoreInterchainAccount): {
                    typeUrl: string;
                    value: _183.MsgRestoreInterchainAccount;
                };
                closeDelegationChannel(value: _183.MsgCloseDelegationChannel): {
                    typeUrl: string;
                    value: _183.MsgCloseDelegationChannel;
                };
                updateValidatorSharesExchRate(value: _183.MsgUpdateValidatorSharesExchRate): {
                    typeUrl: string;
                    value: _183.MsgUpdateValidatorSharesExchRate;
                };
                calibrateDelegation(value: _183.MsgCalibrateDelegation): {
                    typeUrl: string;
                    value: _183.MsgCalibrateDelegation;
                };
                clearBalance(value: _183.MsgClearBalance): {
                    typeUrl: string;
                    value: _183.MsgClearBalance;
                };
                updateInnerRedemptionRateBounds(value: _183.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _183.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _183.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _183.MsgResumeHostZone;
                };
                createTradeRoute(value: _183.MsgCreateTradeRoute): {
                    typeUrl: string;
                    value: _183.MsgCreateTradeRoute;
                };
                deleteTradeRoute(value: _183.MsgDeleteTradeRoute): {
                    typeUrl: string;
                    value: _183.MsgDeleteTradeRoute;
                };
                updateTradeRoute(value: _183.MsgUpdateTradeRoute): {
                    typeUrl: string;
                    value: _183.MsgUpdateTradeRoute;
                };
                setCommunityPoolRebate(value: _183.MsgSetCommunityPoolRebate): {
                    typeUrl: string;
                    value: _183.MsgSetCommunityPoolRebate;
                };
                toggleTradeController(value: _183.MsgToggleTradeController): {
                    typeUrl: string;
                    value: _183.MsgToggleTradeController;
                };
                updateHostZoneParams(value: _183.MsgUpdateHostZoneParams): {
                    typeUrl: string;
                    value: _183.MsgUpdateHostZoneParams;
                };
            };
        };
        AminoConverter: {
            "/stride.stakeibc.MsgLiquidStake": {
                aminoType: string;
                toAmino: (message: _183.MsgLiquidStake) => _183.MsgLiquidStakeAmino;
                fromAmino: (object: _183.MsgLiquidStakeAmino) => _183.MsgLiquidStake;
            };
            "/stride.stakeibc.MsgLSMLiquidStake": {
                aminoType: string;
                toAmino: (message: _183.MsgLSMLiquidStake) => _183.MsgLSMLiquidStakeAmino;
                fromAmino: (object: _183.MsgLSMLiquidStakeAmino) => _183.MsgLSMLiquidStake;
            };
            "/stride.stakeibc.MsgRedeemStake": {
                aminoType: string;
                toAmino: (message: _183.MsgRedeemStake) => _183.MsgRedeemStakeAmino;
                fromAmino: (object: _183.MsgRedeemStakeAmino) => _183.MsgRedeemStake;
            };
            "/stride.stakeibc.MsgRegisterHostZone": {
                aminoType: string;
                toAmino: (message: _183.MsgRegisterHostZone) => _183.MsgRegisterHostZoneAmino;
                fromAmino: (object: _183.MsgRegisterHostZoneAmino) => _183.MsgRegisterHostZone;
            };
            "/stride.stakeibc.MsgClaimUndelegatedTokens": {
                aminoType: string;
                toAmino: (message: _183.MsgClaimUndelegatedTokens) => _183.MsgClaimUndelegatedTokensAmino;
                fromAmino: (object: _183.MsgClaimUndelegatedTokensAmino) => _183.MsgClaimUndelegatedTokens;
            };
            "/stride.stakeibc.MsgRebalanceValidators": {
                aminoType: string;
                toAmino: (message: _183.MsgRebalanceValidators) => _183.MsgRebalanceValidatorsAmino;
                fromAmino: (object: _183.MsgRebalanceValidatorsAmino) => _183.MsgRebalanceValidators;
            };
            "/stride.stakeibc.MsgAddValidators": {
                aminoType: string;
                toAmino: (message: _183.MsgAddValidators) => _183.MsgAddValidatorsAmino;
                fromAmino: (object: _183.MsgAddValidatorsAmino) => _183.MsgAddValidators;
            };
            "/stride.stakeibc.MsgChangeValidatorWeights": {
                aminoType: string;
                toAmino: (message: _183.MsgChangeValidatorWeights) => _183.MsgChangeValidatorWeightsAmino;
                fromAmino: (object: _183.MsgChangeValidatorWeightsAmino) => _183.MsgChangeValidatorWeights;
            };
            "/stride.stakeibc.MsgDeleteValidator": {
                aminoType: string;
                toAmino: (message: _183.MsgDeleteValidator) => _183.MsgDeleteValidatorAmino;
                fromAmino: (object: _183.MsgDeleteValidatorAmino) => _183.MsgDeleteValidator;
            };
            "/stride.stakeibc.MsgRestoreInterchainAccount": {
                aminoType: string;
                toAmino: (message: _183.MsgRestoreInterchainAccount) => _183.MsgRestoreInterchainAccountAmino;
                fromAmino: (object: _183.MsgRestoreInterchainAccountAmino) => _183.MsgRestoreInterchainAccount;
            };
            "/stride.stakeibc.MsgCloseDelegationChannel": {
                aminoType: string;
                toAmino: (message: _183.MsgCloseDelegationChannel) => _183.MsgCloseDelegationChannelAmino;
                fromAmino: (object: _183.MsgCloseDelegationChannelAmino) => _183.MsgCloseDelegationChannel;
            };
            "/stride.stakeibc.MsgUpdateValidatorSharesExchRate": {
                aminoType: string;
                toAmino: (message: _183.MsgUpdateValidatorSharesExchRate) => _183.MsgUpdateValidatorSharesExchRateAmino;
                fromAmino: (object: _183.MsgUpdateValidatorSharesExchRateAmino) => _183.MsgUpdateValidatorSharesExchRate;
            };
            "/stride.stakeibc.MsgCalibrateDelegation": {
                aminoType: string;
                toAmino: (message: _183.MsgCalibrateDelegation) => _183.MsgCalibrateDelegationAmino;
                fromAmino: (object: _183.MsgCalibrateDelegationAmino) => _183.MsgCalibrateDelegation;
            };
            "/stride.stakeibc.MsgClearBalance": {
                aminoType: string;
                toAmino: (message: _183.MsgClearBalance) => _183.MsgClearBalanceAmino;
                fromAmino: (object: _183.MsgClearBalanceAmino) => _183.MsgClearBalance;
            };
            "/stride.stakeibc.MsgUpdateInnerRedemptionRateBounds": {
                aminoType: string;
                toAmino: (message: _183.MsgUpdateInnerRedemptionRateBounds) => _183.MsgUpdateInnerRedemptionRateBoundsAmino;
                fromAmino: (object: _183.MsgUpdateInnerRedemptionRateBoundsAmino) => _183.MsgUpdateInnerRedemptionRateBounds;
            };
            "/stride.stakeibc.MsgResumeHostZone": {
                aminoType: string;
                toAmino: (message: _183.MsgResumeHostZone) => _183.MsgResumeHostZoneAmino;
                fromAmino: (object: _183.MsgResumeHostZoneAmino) => _183.MsgResumeHostZone;
            };
            "/stride.stakeibc.MsgCreateTradeRoute": {
                aminoType: string;
                toAmino: (message: _183.MsgCreateTradeRoute) => _183.MsgCreateTradeRouteAmino;
                fromAmino: (object: _183.MsgCreateTradeRouteAmino) => _183.MsgCreateTradeRoute;
            };
            "/stride.stakeibc.MsgDeleteTradeRoute": {
                aminoType: string;
                toAmino: (message: _183.MsgDeleteTradeRoute) => _183.MsgDeleteTradeRouteAmino;
                fromAmino: (object: _183.MsgDeleteTradeRouteAmino) => _183.MsgDeleteTradeRoute;
            };
            "/stride.stakeibc.MsgUpdateTradeRoute": {
                aminoType: string;
                toAmino: (message: _183.MsgUpdateTradeRoute) => _183.MsgUpdateTradeRouteAmino;
                fromAmino: (object: _183.MsgUpdateTradeRouteAmino) => _183.MsgUpdateTradeRoute;
            };
            "/stride.stakeibc.MsgSetCommunityPoolRebate": {
                aminoType: string;
                toAmino: (message: _183.MsgSetCommunityPoolRebate) => _183.MsgSetCommunityPoolRebateAmino;
                fromAmino: (object: _183.MsgSetCommunityPoolRebateAmino) => _183.MsgSetCommunityPoolRebate;
            };
            "/stride.stakeibc.MsgToggleTradeController": {
                aminoType: string;
                toAmino: (message: _183.MsgToggleTradeController) => _183.MsgToggleTradeControllerAmino;
                fromAmino: (object: _183.MsgToggleTradeControllerAmino) => _183.MsgToggleTradeController;
            };
            "/stride.stakeibc.MsgUpdateHostZoneParams": {
                aminoType: string;
                toAmino: (message: _183.MsgUpdateHostZoneParams) => _183.MsgUpdateHostZoneParamsAmino;
                fromAmino: (object: _183.MsgUpdateHostZoneParamsAmino) => _183.MsgUpdateHostZoneParams;
            };
        };
        Validator: {
            typeUrl: string;
            encode(message: _184.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _184.Validator;
            fromPartial(object: Partial<_184.Validator>): _184.Validator;
            fromAmino(object: _184.ValidatorAmino): _184.Validator;
            toAmino(message: _184.Validator): _184.ValidatorAmino;
            fromAminoMsg(object: _184.ValidatorAminoMsg): _184.Validator;
            fromProtoMsg(message: _184.ValidatorProtoMsg): _184.Validator;
            toProto(message: _184.Validator): Uint8Array;
            toProtoMsg(message: _184.Validator): _184.ValidatorProtoMsg;
        };
        authzPermissionChangeFromJSON(object: any): _183.AuthzPermissionChange;
        authzPermissionChangeToJSON(object: _183.AuthzPermissionChange): string;
        AuthzPermissionChange: typeof _183.AuthzPermissionChange;
        AuthzPermissionChangeSDKType: typeof _183.AuthzPermissionChange;
        AuthzPermissionChangeAmino: typeof _183.AuthzPermissionChange;
        MsgUpdateInnerRedemptionRateBounds: {
            typeUrl: string;
            encode(message: _183.MsgUpdateInnerRedemptionRateBounds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgUpdateInnerRedemptionRateBounds;
            fromPartial(object: Partial<_183.MsgUpdateInnerRedemptionRateBounds>): _183.MsgUpdateInnerRedemptionRateBounds;
            fromAmino(object: _183.MsgUpdateInnerRedemptionRateBoundsAmino): _183.MsgUpdateInnerRedemptionRateBounds;
            toAmino(message: _183.MsgUpdateInnerRedemptionRateBounds): _183.MsgUpdateInnerRedemptionRateBoundsAmino;
            fromAminoMsg(object: _183.MsgUpdateInnerRedemptionRateBoundsAminoMsg): _183.MsgUpdateInnerRedemptionRateBounds;
            fromProtoMsg(message: _183.MsgUpdateInnerRedemptionRateBoundsProtoMsg): _183.MsgUpdateInnerRedemptionRateBounds;
            toProto(message: _183.MsgUpdateInnerRedemptionRateBounds): Uint8Array;
            toProtoMsg(message: _183.MsgUpdateInnerRedemptionRateBounds): _183.MsgUpdateInnerRedemptionRateBoundsProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBoundsResponse: {
            typeUrl: string;
            encode(_: _183.MsgUpdateInnerRedemptionRateBoundsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromPartial(_: Partial<_183.MsgUpdateInnerRedemptionRateBoundsResponse>): _183.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromAmino(_: _183.MsgUpdateInnerRedemptionRateBoundsResponseAmino): _183.MsgUpdateInnerRedemptionRateBoundsResponse;
            toAmino(_: _183.MsgUpdateInnerRedemptionRateBoundsResponse): _183.MsgUpdateInnerRedemptionRateBoundsResponseAmino;
            fromAminoMsg(object: _183.MsgUpdateInnerRedemptionRateBoundsResponseAminoMsg): _183.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromProtoMsg(message: _183.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg): _183.MsgUpdateInnerRedemptionRateBoundsResponse;
            toProto(message: _183.MsgUpdateInnerRedemptionRateBoundsResponse): Uint8Array;
            toProtoMsg(message: _183.MsgUpdateInnerRedemptionRateBoundsResponse): _183.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg;
        };
        MsgLiquidStake: {
            typeUrl: string;
            encode(message: _183.MsgLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgLiquidStake;
            fromPartial(object: Partial<_183.MsgLiquidStake>): _183.MsgLiquidStake;
            fromAmino(object: _183.MsgLiquidStakeAmino): _183.MsgLiquidStake;
            toAmino(message: _183.MsgLiquidStake): _183.MsgLiquidStakeAmino;
            fromAminoMsg(object: _183.MsgLiquidStakeAminoMsg): _183.MsgLiquidStake;
            toAminoMsg(message: _183.MsgLiquidStake): _183.MsgLiquidStakeAminoMsg;
            fromProtoMsg(message: _183.MsgLiquidStakeProtoMsg): _183.MsgLiquidStake;
            toProto(message: _183.MsgLiquidStake): Uint8Array;
            toProtoMsg(message: _183.MsgLiquidStake): _183.MsgLiquidStakeProtoMsg;
        };
        MsgLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _183.MsgLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgLiquidStakeResponse;
            fromPartial(object: Partial<_183.MsgLiquidStakeResponse>): _183.MsgLiquidStakeResponse;
            fromAmino(object: _183.MsgLiquidStakeResponseAmino): _183.MsgLiquidStakeResponse;
            toAmino(message: _183.MsgLiquidStakeResponse): _183.MsgLiquidStakeResponseAmino;
            fromAminoMsg(object: _183.MsgLiquidStakeResponseAminoMsg): _183.MsgLiquidStakeResponse;
            fromProtoMsg(message: _183.MsgLiquidStakeResponseProtoMsg): _183.MsgLiquidStakeResponse;
            toProto(message: _183.MsgLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _183.MsgLiquidStakeResponse): _183.MsgLiquidStakeResponseProtoMsg;
        };
        MsgLSMLiquidStake: {
            typeUrl: string;
            encode(message: _183.MsgLSMLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgLSMLiquidStake;
            fromPartial(object: Partial<_183.MsgLSMLiquidStake>): _183.MsgLSMLiquidStake;
            fromAmino(object: _183.MsgLSMLiquidStakeAmino): _183.MsgLSMLiquidStake;
            toAmino(message: _183.MsgLSMLiquidStake): _183.MsgLSMLiquidStakeAmino;
            fromAminoMsg(object: _183.MsgLSMLiquidStakeAminoMsg): _183.MsgLSMLiquidStake;
            toAminoMsg(message: _183.MsgLSMLiquidStake): _183.MsgLSMLiquidStakeAminoMsg;
            fromProtoMsg(message: _183.MsgLSMLiquidStakeProtoMsg): _183.MsgLSMLiquidStake;
            toProto(message: _183.MsgLSMLiquidStake): Uint8Array;
            toProtoMsg(message: _183.MsgLSMLiquidStake): _183.MsgLSMLiquidStakeProtoMsg;
        };
        MsgLSMLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _183.MsgLSMLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgLSMLiquidStakeResponse;
            fromPartial(object: Partial<_183.MsgLSMLiquidStakeResponse>): _183.MsgLSMLiquidStakeResponse;
            fromAmino(object: _183.MsgLSMLiquidStakeResponseAmino): _183.MsgLSMLiquidStakeResponse;
            toAmino(message: _183.MsgLSMLiquidStakeResponse): _183.MsgLSMLiquidStakeResponseAmino;
            fromAminoMsg(object: _183.MsgLSMLiquidStakeResponseAminoMsg): _183.MsgLSMLiquidStakeResponse;
            fromProtoMsg(message: _183.MsgLSMLiquidStakeResponseProtoMsg): _183.MsgLSMLiquidStakeResponse;
            toProto(message: _183.MsgLSMLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _183.MsgLSMLiquidStakeResponse): _183.MsgLSMLiquidStakeResponseProtoMsg;
        };
        MsgClearBalance: {
            typeUrl: string;
            encode(message: _183.MsgClearBalance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgClearBalance;
            fromPartial(object: Partial<_183.MsgClearBalance>): _183.MsgClearBalance;
            fromAmino(object: _183.MsgClearBalanceAmino): _183.MsgClearBalance;
            toAmino(message: _183.MsgClearBalance): _183.MsgClearBalanceAmino;
            fromAminoMsg(object: _183.MsgClearBalanceAminoMsg): _183.MsgClearBalance;
            toAminoMsg(message: _183.MsgClearBalance): _183.MsgClearBalanceAminoMsg;
            fromProtoMsg(message: _183.MsgClearBalanceProtoMsg): _183.MsgClearBalance;
            toProto(message: _183.MsgClearBalance): Uint8Array;
            toProtoMsg(message: _183.MsgClearBalance): _183.MsgClearBalanceProtoMsg;
        };
        MsgClearBalanceResponse: {
            typeUrl: string;
            encode(_: _183.MsgClearBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgClearBalanceResponse;
            fromPartial(_: Partial<_183.MsgClearBalanceResponse>): _183.MsgClearBalanceResponse;
            fromAmino(_: _183.MsgClearBalanceResponseAmino): _183.MsgClearBalanceResponse;
            toAmino(_: _183.MsgClearBalanceResponse): _183.MsgClearBalanceResponseAmino;
            fromAminoMsg(object: _183.MsgClearBalanceResponseAminoMsg): _183.MsgClearBalanceResponse;
            fromProtoMsg(message: _183.MsgClearBalanceResponseProtoMsg): _183.MsgClearBalanceResponse;
            toProto(message: _183.MsgClearBalanceResponse): Uint8Array;
            toProtoMsg(message: _183.MsgClearBalanceResponse): _183.MsgClearBalanceResponseProtoMsg;
        };
        MsgRedeemStake: {
            typeUrl: string;
            encode(message: _183.MsgRedeemStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgRedeemStake;
            fromPartial(object: Partial<_183.MsgRedeemStake>): _183.MsgRedeemStake;
            fromAmino(object: _183.MsgRedeemStakeAmino): _183.MsgRedeemStake;
            toAmino(message: _183.MsgRedeemStake): _183.MsgRedeemStakeAmino;
            fromAminoMsg(object: _183.MsgRedeemStakeAminoMsg): _183.MsgRedeemStake;
            toAminoMsg(message: _183.MsgRedeemStake): _183.MsgRedeemStakeAminoMsg;
            fromProtoMsg(message: _183.MsgRedeemStakeProtoMsg): _183.MsgRedeemStake;
            toProto(message: _183.MsgRedeemStake): Uint8Array;
            toProtoMsg(message: _183.MsgRedeemStake): _183.MsgRedeemStakeProtoMsg;
        };
        MsgRedeemStakeResponse: {
            typeUrl: string;
            encode(_: _183.MsgRedeemStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgRedeemStakeResponse;
            fromPartial(_: Partial<_183.MsgRedeemStakeResponse>): _183.MsgRedeemStakeResponse;
            fromAmino(_: _183.MsgRedeemStakeResponseAmino): _183.MsgRedeemStakeResponse;
            toAmino(_: _183.MsgRedeemStakeResponse): _183.MsgRedeemStakeResponseAmino;
            fromAminoMsg(object: _183.MsgRedeemStakeResponseAminoMsg): _183.MsgRedeemStakeResponse;
            fromProtoMsg(message: _183.MsgRedeemStakeResponseProtoMsg): _183.MsgRedeemStakeResponse;
            toProto(message: _183.MsgRedeemStakeResponse): Uint8Array;
            toProtoMsg(message: _183.MsgRedeemStakeResponse): _183.MsgRedeemStakeResponseProtoMsg;
        };
        MsgRegisterHostZone: {
            typeUrl: string;
            encode(message: _183.MsgRegisterHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgRegisterHostZone;
            fromPartial(object: Partial<_183.MsgRegisterHostZone>): _183.MsgRegisterHostZone;
            fromAmino(object: _183.MsgRegisterHostZoneAmino): _183.MsgRegisterHostZone;
            toAmino(message: _183.MsgRegisterHostZone): _183.MsgRegisterHostZoneAmino;
            fromAminoMsg(object: _183.MsgRegisterHostZoneAminoMsg): _183.MsgRegisterHostZone;
            toAminoMsg(message: _183.MsgRegisterHostZone): _183.MsgRegisterHostZoneAminoMsg;
            fromProtoMsg(message: _183.MsgRegisterHostZoneProtoMsg): _183.MsgRegisterHostZone;
            toProto(message: _183.MsgRegisterHostZone): Uint8Array;
            toProtoMsg(message: _183.MsgRegisterHostZone): _183.MsgRegisterHostZoneProtoMsg;
        };
        MsgRegisterHostZoneResponse: {
            typeUrl: string;
            encode(_: _183.MsgRegisterHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgRegisterHostZoneResponse;
            fromPartial(_: Partial<_183.MsgRegisterHostZoneResponse>): _183.MsgRegisterHostZoneResponse;
            fromAmino(_: _183.MsgRegisterHostZoneResponseAmino): _183.MsgRegisterHostZoneResponse;
            toAmino(_: _183.MsgRegisterHostZoneResponse): _183.MsgRegisterHostZoneResponseAmino;
            fromAminoMsg(object: _183.MsgRegisterHostZoneResponseAminoMsg): _183.MsgRegisterHostZoneResponse;
            fromProtoMsg(message: _183.MsgRegisterHostZoneResponseProtoMsg): _183.MsgRegisterHostZoneResponse;
            toProto(message: _183.MsgRegisterHostZoneResponse): Uint8Array;
            toProtoMsg(message: _183.MsgRegisterHostZoneResponse): _183.MsgRegisterHostZoneResponseProtoMsg;
        };
        MsgClaimUndelegatedTokens: {
            typeUrl: string;
            encode(message: _183.MsgClaimUndelegatedTokens, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgClaimUndelegatedTokens;
            fromPartial(object: Partial<_183.MsgClaimUndelegatedTokens>): _183.MsgClaimUndelegatedTokens;
            fromAmino(object: _183.MsgClaimUndelegatedTokensAmino): _183.MsgClaimUndelegatedTokens;
            toAmino(message: _183.MsgClaimUndelegatedTokens): _183.MsgClaimUndelegatedTokensAmino;
            fromAminoMsg(object: _183.MsgClaimUndelegatedTokensAminoMsg): _183.MsgClaimUndelegatedTokens;
            toAminoMsg(message: _183.MsgClaimUndelegatedTokens): _183.MsgClaimUndelegatedTokensAminoMsg;
            fromProtoMsg(message: _183.MsgClaimUndelegatedTokensProtoMsg): _183.MsgClaimUndelegatedTokens;
            toProto(message: _183.MsgClaimUndelegatedTokens): Uint8Array;
            toProtoMsg(message: _183.MsgClaimUndelegatedTokens): _183.MsgClaimUndelegatedTokensProtoMsg;
        };
        MsgClaimUndelegatedTokensResponse: {
            typeUrl: string;
            encode(_: _183.MsgClaimUndelegatedTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgClaimUndelegatedTokensResponse;
            fromPartial(_: Partial<_183.MsgClaimUndelegatedTokensResponse>): _183.MsgClaimUndelegatedTokensResponse;
            fromAmino(_: _183.MsgClaimUndelegatedTokensResponseAmino): _183.MsgClaimUndelegatedTokensResponse;
            toAmino(_: _183.MsgClaimUndelegatedTokensResponse): _183.MsgClaimUndelegatedTokensResponseAmino;
            fromAminoMsg(object: _183.MsgClaimUndelegatedTokensResponseAminoMsg): _183.MsgClaimUndelegatedTokensResponse;
            fromProtoMsg(message: _183.MsgClaimUndelegatedTokensResponseProtoMsg): _183.MsgClaimUndelegatedTokensResponse;
            toProto(message: _183.MsgClaimUndelegatedTokensResponse): Uint8Array;
            toProtoMsg(message: _183.MsgClaimUndelegatedTokensResponse): _183.MsgClaimUndelegatedTokensResponseProtoMsg;
        };
        MsgRebalanceValidators: {
            typeUrl: string;
            encode(message: _183.MsgRebalanceValidators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgRebalanceValidators;
            fromPartial(object: Partial<_183.MsgRebalanceValidators>): _183.MsgRebalanceValidators;
            fromAmino(object: _183.MsgRebalanceValidatorsAmino): _183.MsgRebalanceValidators;
            toAmino(message: _183.MsgRebalanceValidators): _183.MsgRebalanceValidatorsAmino;
            fromAminoMsg(object: _183.MsgRebalanceValidatorsAminoMsg): _183.MsgRebalanceValidators;
            toAminoMsg(message: _183.MsgRebalanceValidators): _183.MsgRebalanceValidatorsAminoMsg;
            fromProtoMsg(message: _183.MsgRebalanceValidatorsProtoMsg): _183.MsgRebalanceValidators;
            toProto(message: _183.MsgRebalanceValidators): Uint8Array;
            toProtoMsg(message: _183.MsgRebalanceValidators): _183.MsgRebalanceValidatorsProtoMsg;
        };
        MsgRebalanceValidatorsResponse: {
            typeUrl: string;
            encode(_: _183.MsgRebalanceValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgRebalanceValidatorsResponse;
            fromPartial(_: Partial<_183.MsgRebalanceValidatorsResponse>): _183.MsgRebalanceValidatorsResponse;
            fromAmino(_: _183.MsgRebalanceValidatorsResponseAmino): _183.MsgRebalanceValidatorsResponse;
            toAmino(_: _183.MsgRebalanceValidatorsResponse): _183.MsgRebalanceValidatorsResponseAmino;
            fromAminoMsg(object: _183.MsgRebalanceValidatorsResponseAminoMsg): _183.MsgRebalanceValidatorsResponse;
            fromProtoMsg(message: _183.MsgRebalanceValidatorsResponseProtoMsg): _183.MsgRebalanceValidatorsResponse;
            toProto(message: _183.MsgRebalanceValidatorsResponse): Uint8Array;
            toProtoMsg(message: _183.MsgRebalanceValidatorsResponse): _183.MsgRebalanceValidatorsResponseProtoMsg;
        };
        MsgAddValidators: {
            typeUrl: string;
            encode(message: _183.MsgAddValidators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgAddValidators;
            fromPartial(object: Partial<_183.MsgAddValidators>): _183.MsgAddValidators;
            fromAmino(object: _183.MsgAddValidatorsAmino): _183.MsgAddValidators;
            toAmino(message: _183.MsgAddValidators): _183.MsgAddValidatorsAmino;
            fromAminoMsg(object: _183.MsgAddValidatorsAminoMsg): _183.MsgAddValidators;
            fromProtoMsg(message: _183.MsgAddValidatorsProtoMsg): _183.MsgAddValidators;
            toProto(message: _183.MsgAddValidators): Uint8Array;
            toProtoMsg(message: _183.MsgAddValidators): _183.MsgAddValidatorsProtoMsg;
        };
        MsgAddValidatorsResponse: {
            typeUrl: string;
            encode(_: _183.MsgAddValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgAddValidatorsResponse;
            fromPartial(_: Partial<_183.MsgAddValidatorsResponse>): _183.MsgAddValidatorsResponse;
            fromAmino(_: _183.MsgAddValidatorsResponseAmino): _183.MsgAddValidatorsResponse;
            toAmino(_: _183.MsgAddValidatorsResponse): _183.MsgAddValidatorsResponseAmino;
            fromAminoMsg(object: _183.MsgAddValidatorsResponseAminoMsg): _183.MsgAddValidatorsResponse;
            fromProtoMsg(message: _183.MsgAddValidatorsResponseProtoMsg): _183.MsgAddValidatorsResponse;
            toProto(message: _183.MsgAddValidatorsResponse): Uint8Array;
            toProtoMsg(message: _183.MsgAddValidatorsResponse): _183.MsgAddValidatorsResponseProtoMsg;
        };
        ValidatorWeight: {
            typeUrl: string;
            encode(message: _183.ValidatorWeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.ValidatorWeight;
            fromPartial(object: Partial<_183.ValidatorWeight>): _183.ValidatorWeight;
            fromAmino(object: _183.ValidatorWeightAmino): _183.ValidatorWeight;
            toAmino(message: _183.ValidatorWeight): _183.ValidatorWeightAmino;
            fromAminoMsg(object: _183.ValidatorWeightAminoMsg): _183.ValidatorWeight;
            fromProtoMsg(message: _183.ValidatorWeightProtoMsg): _183.ValidatorWeight;
            toProto(message: _183.ValidatorWeight): Uint8Array;
            toProtoMsg(message: _183.ValidatorWeight): _183.ValidatorWeightProtoMsg;
        };
        MsgChangeValidatorWeights: {
            typeUrl: string;
            encode(message: _183.MsgChangeValidatorWeights, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgChangeValidatorWeights;
            fromPartial(object: Partial<_183.MsgChangeValidatorWeights>): _183.MsgChangeValidatorWeights;
            fromAmino(object: _183.MsgChangeValidatorWeightsAmino): _183.MsgChangeValidatorWeights;
            toAmino(message: _183.MsgChangeValidatorWeights): _183.MsgChangeValidatorWeightsAmino;
            fromAminoMsg(object: _183.MsgChangeValidatorWeightsAminoMsg): _183.MsgChangeValidatorWeights;
            fromProtoMsg(message: _183.MsgChangeValidatorWeightsProtoMsg): _183.MsgChangeValidatorWeights;
            toProto(message: _183.MsgChangeValidatorWeights): Uint8Array;
            toProtoMsg(message: _183.MsgChangeValidatorWeights): _183.MsgChangeValidatorWeightsProtoMsg;
        };
        MsgChangeValidatorWeightsResponse: {
            typeUrl: string;
            encode(_: _183.MsgChangeValidatorWeightsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgChangeValidatorWeightsResponse;
            fromPartial(_: Partial<_183.MsgChangeValidatorWeightsResponse>): _183.MsgChangeValidatorWeightsResponse;
            fromAmino(_: _183.MsgChangeValidatorWeightsResponseAmino): _183.MsgChangeValidatorWeightsResponse;
            toAmino(_: _183.MsgChangeValidatorWeightsResponse): _183.MsgChangeValidatorWeightsResponseAmino;
            fromAminoMsg(object: _183.MsgChangeValidatorWeightsResponseAminoMsg): _183.MsgChangeValidatorWeightsResponse;
            fromProtoMsg(message: _183.MsgChangeValidatorWeightsResponseProtoMsg): _183.MsgChangeValidatorWeightsResponse;
            toProto(message: _183.MsgChangeValidatorWeightsResponse): Uint8Array;
            toProtoMsg(message: _183.MsgChangeValidatorWeightsResponse): _183.MsgChangeValidatorWeightsResponseProtoMsg;
        };
        MsgDeleteValidator: {
            typeUrl: string;
            encode(message: _183.MsgDeleteValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgDeleteValidator;
            fromPartial(object: Partial<_183.MsgDeleteValidator>): _183.MsgDeleteValidator;
            fromAmino(object: _183.MsgDeleteValidatorAmino): _183.MsgDeleteValidator;
            toAmino(message: _183.MsgDeleteValidator): _183.MsgDeleteValidatorAmino;
            fromAminoMsg(object: _183.MsgDeleteValidatorAminoMsg): _183.MsgDeleteValidator;
            toAminoMsg(message: _183.MsgDeleteValidator): _183.MsgDeleteValidatorAminoMsg;
            fromProtoMsg(message: _183.MsgDeleteValidatorProtoMsg): _183.MsgDeleteValidator;
            toProto(message: _183.MsgDeleteValidator): Uint8Array;
            toProtoMsg(message: _183.MsgDeleteValidator): _183.MsgDeleteValidatorProtoMsg;
        };
        MsgDeleteValidatorResponse: {
            typeUrl: string;
            encode(_: _183.MsgDeleteValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgDeleteValidatorResponse;
            fromPartial(_: Partial<_183.MsgDeleteValidatorResponse>): _183.MsgDeleteValidatorResponse;
            fromAmino(_: _183.MsgDeleteValidatorResponseAmino): _183.MsgDeleteValidatorResponse;
            toAmino(_: _183.MsgDeleteValidatorResponse): _183.MsgDeleteValidatorResponseAmino;
            fromAminoMsg(object: _183.MsgDeleteValidatorResponseAminoMsg): _183.MsgDeleteValidatorResponse;
            fromProtoMsg(message: _183.MsgDeleteValidatorResponseProtoMsg): _183.MsgDeleteValidatorResponse;
            toProto(message: _183.MsgDeleteValidatorResponse): Uint8Array;
            toProtoMsg(message: _183.MsgDeleteValidatorResponse): _183.MsgDeleteValidatorResponseProtoMsg;
        };
        MsgRestoreInterchainAccount: {
            typeUrl: string;
            encode(message: _183.MsgRestoreInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgRestoreInterchainAccount;
            fromPartial(object: Partial<_183.MsgRestoreInterchainAccount>): _183.MsgRestoreInterchainAccount;
            fromAmino(object: _183.MsgRestoreInterchainAccountAmino): _183.MsgRestoreInterchainAccount;
            toAmino(message: _183.MsgRestoreInterchainAccount): _183.MsgRestoreInterchainAccountAmino;
            fromAminoMsg(object: _183.MsgRestoreInterchainAccountAminoMsg): _183.MsgRestoreInterchainAccount;
            toAminoMsg(message: _183.MsgRestoreInterchainAccount): _183.MsgRestoreInterchainAccountAminoMsg;
            fromProtoMsg(message: _183.MsgRestoreInterchainAccountProtoMsg): _183.MsgRestoreInterchainAccount;
            toProto(message: _183.MsgRestoreInterchainAccount): Uint8Array;
            toProtoMsg(message: _183.MsgRestoreInterchainAccount): _183.MsgRestoreInterchainAccountProtoMsg;
        };
        MsgRestoreInterchainAccountResponse: {
            typeUrl: string;
            encode(_: _183.MsgRestoreInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgRestoreInterchainAccountResponse;
            fromPartial(_: Partial<_183.MsgRestoreInterchainAccountResponse>): _183.MsgRestoreInterchainAccountResponse;
            fromAmino(_: _183.MsgRestoreInterchainAccountResponseAmino): _183.MsgRestoreInterchainAccountResponse;
            toAmino(_: _183.MsgRestoreInterchainAccountResponse): _183.MsgRestoreInterchainAccountResponseAmino;
            fromAminoMsg(object: _183.MsgRestoreInterchainAccountResponseAminoMsg): _183.MsgRestoreInterchainAccountResponse;
            fromProtoMsg(message: _183.MsgRestoreInterchainAccountResponseProtoMsg): _183.MsgRestoreInterchainAccountResponse;
            toProto(message: _183.MsgRestoreInterchainAccountResponse): Uint8Array;
            toProtoMsg(message: _183.MsgRestoreInterchainAccountResponse): _183.MsgRestoreInterchainAccountResponseProtoMsg;
        };
        MsgCloseDelegationChannel: {
            typeUrl: string;
            encode(message: _183.MsgCloseDelegationChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgCloseDelegationChannel;
            fromPartial(object: Partial<_183.MsgCloseDelegationChannel>): _183.MsgCloseDelegationChannel;
            fromAmino(object: _183.MsgCloseDelegationChannelAmino): _183.MsgCloseDelegationChannel;
            toAmino(message: _183.MsgCloseDelegationChannel): _183.MsgCloseDelegationChannelAmino;
            fromAminoMsg(object: _183.MsgCloseDelegationChannelAminoMsg): _183.MsgCloseDelegationChannel;
            fromProtoMsg(message: _183.MsgCloseDelegationChannelProtoMsg): _183.MsgCloseDelegationChannel;
            toProto(message: _183.MsgCloseDelegationChannel): Uint8Array;
            toProtoMsg(message: _183.MsgCloseDelegationChannel): _183.MsgCloseDelegationChannelProtoMsg;
        };
        MsgCloseDelegationChannelResponse: {
            typeUrl: string;
            encode(_: _183.MsgCloseDelegationChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgCloseDelegationChannelResponse;
            fromPartial(_: Partial<_183.MsgCloseDelegationChannelResponse>): _183.MsgCloseDelegationChannelResponse;
            fromAmino(_: _183.MsgCloseDelegationChannelResponseAmino): _183.MsgCloseDelegationChannelResponse;
            toAmino(_: _183.MsgCloseDelegationChannelResponse): _183.MsgCloseDelegationChannelResponseAmino;
            fromAminoMsg(object: _183.MsgCloseDelegationChannelResponseAminoMsg): _183.MsgCloseDelegationChannelResponse;
            fromProtoMsg(message: _183.MsgCloseDelegationChannelResponseProtoMsg): _183.MsgCloseDelegationChannelResponse;
            toProto(message: _183.MsgCloseDelegationChannelResponse): Uint8Array;
            toProtoMsg(message: _183.MsgCloseDelegationChannelResponse): _183.MsgCloseDelegationChannelResponseProtoMsg;
        };
        MsgUpdateValidatorSharesExchRate: {
            typeUrl: string;
            encode(message: _183.MsgUpdateValidatorSharesExchRate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgUpdateValidatorSharesExchRate;
            fromPartial(object: Partial<_183.MsgUpdateValidatorSharesExchRate>): _183.MsgUpdateValidatorSharesExchRate;
            fromAmino(object: _183.MsgUpdateValidatorSharesExchRateAmino): _183.MsgUpdateValidatorSharesExchRate;
            toAmino(message: _183.MsgUpdateValidatorSharesExchRate): _183.MsgUpdateValidatorSharesExchRateAmino;
            fromAminoMsg(object: _183.MsgUpdateValidatorSharesExchRateAminoMsg): _183.MsgUpdateValidatorSharesExchRate;
            toAminoMsg(message: _183.MsgUpdateValidatorSharesExchRate): _183.MsgUpdateValidatorSharesExchRateAminoMsg;
            fromProtoMsg(message: _183.MsgUpdateValidatorSharesExchRateProtoMsg): _183.MsgUpdateValidatorSharesExchRate;
            toProto(message: _183.MsgUpdateValidatorSharesExchRate): Uint8Array;
            toProtoMsg(message: _183.MsgUpdateValidatorSharesExchRate): _183.MsgUpdateValidatorSharesExchRateProtoMsg;
        };
        MsgUpdateValidatorSharesExchRateResponse: {
            typeUrl: string;
            encode(_: _183.MsgUpdateValidatorSharesExchRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgUpdateValidatorSharesExchRateResponse;
            fromPartial(_: Partial<_183.MsgUpdateValidatorSharesExchRateResponse>): _183.MsgUpdateValidatorSharesExchRateResponse;
            fromAmino(_: _183.MsgUpdateValidatorSharesExchRateResponseAmino): _183.MsgUpdateValidatorSharesExchRateResponse;
            toAmino(_: _183.MsgUpdateValidatorSharesExchRateResponse): _183.MsgUpdateValidatorSharesExchRateResponseAmino;
            fromAminoMsg(object: _183.MsgUpdateValidatorSharesExchRateResponseAminoMsg): _183.MsgUpdateValidatorSharesExchRateResponse;
            fromProtoMsg(message: _183.MsgUpdateValidatorSharesExchRateResponseProtoMsg): _183.MsgUpdateValidatorSharesExchRateResponse;
            toProto(message: _183.MsgUpdateValidatorSharesExchRateResponse): Uint8Array;
            toProtoMsg(message: _183.MsgUpdateValidatorSharesExchRateResponse): _183.MsgUpdateValidatorSharesExchRateResponseProtoMsg;
        };
        MsgCalibrateDelegation: {
            typeUrl: string;
            encode(message: _183.MsgCalibrateDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgCalibrateDelegation;
            fromPartial(object: Partial<_183.MsgCalibrateDelegation>): _183.MsgCalibrateDelegation;
            fromAmino(object: _183.MsgCalibrateDelegationAmino): _183.MsgCalibrateDelegation;
            toAmino(message: _183.MsgCalibrateDelegation): _183.MsgCalibrateDelegationAmino;
            fromAminoMsg(object: _183.MsgCalibrateDelegationAminoMsg): _183.MsgCalibrateDelegation;
            fromProtoMsg(message: _183.MsgCalibrateDelegationProtoMsg): _183.MsgCalibrateDelegation;
            toProto(message: _183.MsgCalibrateDelegation): Uint8Array;
            toProtoMsg(message: _183.MsgCalibrateDelegation): _183.MsgCalibrateDelegationProtoMsg;
        };
        MsgCalibrateDelegationResponse: {
            typeUrl: string;
            encode(_: _183.MsgCalibrateDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgCalibrateDelegationResponse;
            fromPartial(_: Partial<_183.MsgCalibrateDelegationResponse>): _183.MsgCalibrateDelegationResponse;
            fromAmino(_: _183.MsgCalibrateDelegationResponseAmino): _183.MsgCalibrateDelegationResponse;
            toAmino(_: _183.MsgCalibrateDelegationResponse): _183.MsgCalibrateDelegationResponseAmino;
            fromAminoMsg(object: _183.MsgCalibrateDelegationResponseAminoMsg): _183.MsgCalibrateDelegationResponse;
            fromProtoMsg(message: _183.MsgCalibrateDelegationResponseProtoMsg): _183.MsgCalibrateDelegationResponse;
            toProto(message: _183.MsgCalibrateDelegationResponse): Uint8Array;
            toProtoMsg(message: _183.MsgCalibrateDelegationResponse): _183.MsgCalibrateDelegationResponseProtoMsg;
        };
        MsgResumeHostZone: {
            typeUrl: string;
            encode(message: _183.MsgResumeHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgResumeHostZone;
            fromPartial(object: Partial<_183.MsgResumeHostZone>): _183.MsgResumeHostZone;
            fromAmino(object: _183.MsgResumeHostZoneAmino): _183.MsgResumeHostZone;
            toAmino(message: _183.MsgResumeHostZone): _183.MsgResumeHostZoneAmino;
            fromAminoMsg(object: _183.MsgResumeHostZoneAminoMsg): _183.MsgResumeHostZone;
            fromProtoMsg(message: _183.MsgResumeHostZoneProtoMsg): _183.MsgResumeHostZone;
            toProto(message: _183.MsgResumeHostZone): Uint8Array;
            toProtoMsg(message: _183.MsgResumeHostZone): _183.MsgResumeHostZoneProtoMsg;
        };
        MsgResumeHostZoneResponse: {
            typeUrl: string;
            encode(_: _183.MsgResumeHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgResumeHostZoneResponse;
            fromPartial(_: Partial<_183.MsgResumeHostZoneResponse>): _183.MsgResumeHostZoneResponse;
            fromAmino(_: _183.MsgResumeHostZoneResponseAmino): _183.MsgResumeHostZoneResponse;
            toAmino(_: _183.MsgResumeHostZoneResponse): _183.MsgResumeHostZoneResponseAmino;
            fromAminoMsg(object: _183.MsgResumeHostZoneResponseAminoMsg): _183.MsgResumeHostZoneResponse;
            fromProtoMsg(message: _183.MsgResumeHostZoneResponseProtoMsg): _183.MsgResumeHostZoneResponse;
            toProto(message: _183.MsgResumeHostZoneResponse): Uint8Array;
            toProtoMsg(message: _183.MsgResumeHostZoneResponse): _183.MsgResumeHostZoneResponseProtoMsg;
        };
        MsgCreateTradeRoute: {
            typeUrl: string;
            encode(message: _183.MsgCreateTradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgCreateTradeRoute;
            fromPartial(object: Partial<_183.MsgCreateTradeRoute>): _183.MsgCreateTradeRoute;
            fromAmino(object: _183.MsgCreateTradeRouteAmino): _183.MsgCreateTradeRoute;
            toAmino(message: _183.MsgCreateTradeRoute): _183.MsgCreateTradeRouteAmino;
            fromAminoMsg(object: _183.MsgCreateTradeRouteAminoMsg): _183.MsgCreateTradeRoute;
            toAminoMsg(message: _183.MsgCreateTradeRoute): _183.MsgCreateTradeRouteAminoMsg;
            fromProtoMsg(message: _183.MsgCreateTradeRouteProtoMsg): _183.MsgCreateTradeRoute;
            toProto(message: _183.MsgCreateTradeRoute): Uint8Array;
            toProtoMsg(message: _183.MsgCreateTradeRoute): _183.MsgCreateTradeRouteProtoMsg;
        };
        MsgCreateTradeRouteResponse: {
            typeUrl: string;
            encode(_: _183.MsgCreateTradeRouteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgCreateTradeRouteResponse;
            fromPartial(_: Partial<_183.MsgCreateTradeRouteResponse>): _183.MsgCreateTradeRouteResponse;
            fromAmino(_: _183.MsgCreateTradeRouteResponseAmino): _183.MsgCreateTradeRouteResponse;
            toAmino(_: _183.MsgCreateTradeRouteResponse): _183.MsgCreateTradeRouteResponseAmino;
            fromAminoMsg(object: _183.MsgCreateTradeRouteResponseAminoMsg): _183.MsgCreateTradeRouteResponse;
            fromProtoMsg(message: _183.MsgCreateTradeRouteResponseProtoMsg): _183.MsgCreateTradeRouteResponse;
            toProto(message: _183.MsgCreateTradeRouteResponse): Uint8Array;
            toProtoMsg(message: _183.MsgCreateTradeRouteResponse): _183.MsgCreateTradeRouteResponseProtoMsg;
        };
        MsgDeleteTradeRoute: {
            typeUrl: string;
            encode(message: _183.MsgDeleteTradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgDeleteTradeRoute;
            fromPartial(object: Partial<_183.MsgDeleteTradeRoute>): _183.MsgDeleteTradeRoute;
            fromAmino(object: _183.MsgDeleteTradeRouteAmino): _183.MsgDeleteTradeRoute;
            toAmino(message: _183.MsgDeleteTradeRoute): _183.MsgDeleteTradeRouteAmino;
            fromAminoMsg(object: _183.MsgDeleteTradeRouteAminoMsg): _183.MsgDeleteTradeRoute;
            toAminoMsg(message: _183.MsgDeleteTradeRoute): _183.MsgDeleteTradeRouteAminoMsg;
            fromProtoMsg(message: _183.MsgDeleteTradeRouteProtoMsg): _183.MsgDeleteTradeRoute;
            toProto(message: _183.MsgDeleteTradeRoute): Uint8Array;
            toProtoMsg(message: _183.MsgDeleteTradeRoute): _183.MsgDeleteTradeRouteProtoMsg;
        };
        MsgDeleteTradeRouteResponse: {
            typeUrl: string;
            encode(_: _183.MsgDeleteTradeRouteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgDeleteTradeRouteResponse;
            fromPartial(_: Partial<_183.MsgDeleteTradeRouteResponse>): _183.MsgDeleteTradeRouteResponse;
            fromAmino(_: _183.MsgDeleteTradeRouteResponseAmino): _183.MsgDeleteTradeRouteResponse;
            toAmino(_: _183.MsgDeleteTradeRouteResponse): _183.MsgDeleteTradeRouteResponseAmino;
            fromAminoMsg(object: _183.MsgDeleteTradeRouteResponseAminoMsg): _183.MsgDeleteTradeRouteResponse;
            fromProtoMsg(message: _183.MsgDeleteTradeRouteResponseProtoMsg): _183.MsgDeleteTradeRouteResponse;
            toProto(message: _183.MsgDeleteTradeRouteResponse): Uint8Array;
            toProtoMsg(message: _183.MsgDeleteTradeRouteResponse): _183.MsgDeleteTradeRouteResponseProtoMsg;
        };
        MsgUpdateTradeRoute: {
            typeUrl: string;
            encode(message: _183.MsgUpdateTradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgUpdateTradeRoute;
            fromPartial(object: Partial<_183.MsgUpdateTradeRoute>): _183.MsgUpdateTradeRoute;
            fromAmino(object: _183.MsgUpdateTradeRouteAmino): _183.MsgUpdateTradeRoute;
            toAmino(message: _183.MsgUpdateTradeRoute): _183.MsgUpdateTradeRouteAmino;
            fromAminoMsg(object: _183.MsgUpdateTradeRouteAminoMsg): _183.MsgUpdateTradeRoute;
            toAminoMsg(message: _183.MsgUpdateTradeRoute): _183.MsgUpdateTradeRouteAminoMsg;
            fromProtoMsg(message: _183.MsgUpdateTradeRouteProtoMsg): _183.MsgUpdateTradeRoute;
            toProto(message: _183.MsgUpdateTradeRoute): Uint8Array;
            toProtoMsg(message: _183.MsgUpdateTradeRoute): _183.MsgUpdateTradeRouteProtoMsg;
        };
        MsgUpdateTradeRouteResponse: {
            typeUrl: string;
            encode(_: _183.MsgUpdateTradeRouteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgUpdateTradeRouteResponse;
            fromPartial(_: Partial<_183.MsgUpdateTradeRouteResponse>): _183.MsgUpdateTradeRouteResponse;
            fromAmino(_: _183.MsgUpdateTradeRouteResponseAmino): _183.MsgUpdateTradeRouteResponse;
            toAmino(_: _183.MsgUpdateTradeRouteResponse): _183.MsgUpdateTradeRouteResponseAmino;
            fromAminoMsg(object: _183.MsgUpdateTradeRouteResponseAminoMsg): _183.MsgUpdateTradeRouteResponse;
            fromProtoMsg(message: _183.MsgUpdateTradeRouteResponseProtoMsg): _183.MsgUpdateTradeRouteResponse;
            toProto(message: _183.MsgUpdateTradeRouteResponse): Uint8Array;
            toProtoMsg(message: _183.MsgUpdateTradeRouteResponse): _183.MsgUpdateTradeRouteResponseProtoMsg;
        };
        MsgSetCommunityPoolRebate: {
            typeUrl: string;
            encode(message: _183.MsgSetCommunityPoolRebate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgSetCommunityPoolRebate;
            fromPartial(object: Partial<_183.MsgSetCommunityPoolRebate>): _183.MsgSetCommunityPoolRebate;
            fromAmino(object: _183.MsgSetCommunityPoolRebateAmino): _183.MsgSetCommunityPoolRebate;
            toAmino(message: _183.MsgSetCommunityPoolRebate): _183.MsgSetCommunityPoolRebateAmino;
            fromAminoMsg(object: _183.MsgSetCommunityPoolRebateAminoMsg): _183.MsgSetCommunityPoolRebate;
            toAminoMsg(message: _183.MsgSetCommunityPoolRebate): _183.MsgSetCommunityPoolRebateAminoMsg;
            fromProtoMsg(message: _183.MsgSetCommunityPoolRebateProtoMsg): _183.MsgSetCommunityPoolRebate;
            toProto(message: _183.MsgSetCommunityPoolRebate): Uint8Array;
            toProtoMsg(message: _183.MsgSetCommunityPoolRebate): _183.MsgSetCommunityPoolRebateProtoMsg;
        };
        MsgSetCommunityPoolRebateResponse: {
            typeUrl: string;
            encode(_: _183.MsgSetCommunityPoolRebateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgSetCommunityPoolRebateResponse;
            fromPartial(_: Partial<_183.MsgSetCommunityPoolRebateResponse>): _183.MsgSetCommunityPoolRebateResponse;
            fromAmino(_: _183.MsgSetCommunityPoolRebateResponseAmino): _183.MsgSetCommunityPoolRebateResponse;
            toAmino(_: _183.MsgSetCommunityPoolRebateResponse): _183.MsgSetCommunityPoolRebateResponseAmino;
            fromAminoMsg(object: _183.MsgSetCommunityPoolRebateResponseAminoMsg): _183.MsgSetCommunityPoolRebateResponse;
            fromProtoMsg(message: _183.MsgSetCommunityPoolRebateResponseProtoMsg): _183.MsgSetCommunityPoolRebateResponse;
            toProto(message: _183.MsgSetCommunityPoolRebateResponse): Uint8Array;
            toProtoMsg(message: _183.MsgSetCommunityPoolRebateResponse): _183.MsgSetCommunityPoolRebateResponseProtoMsg;
        };
        MsgToggleTradeController: {
            typeUrl: string;
            encode(message: _183.MsgToggleTradeController, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgToggleTradeController;
            fromPartial(object: Partial<_183.MsgToggleTradeController>): _183.MsgToggleTradeController;
            fromAmino(object: _183.MsgToggleTradeControllerAmino): _183.MsgToggleTradeController;
            toAmino(message: _183.MsgToggleTradeController): _183.MsgToggleTradeControllerAmino;
            fromAminoMsg(object: _183.MsgToggleTradeControllerAminoMsg): _183.MsgToggleTradeController;
            toAminoMsg(message: _183.MsgToggleTradeController): _183.MsgToggleTradeControllerAminoMsg;
            fromProtoMsg(message: _183.MsgToggleTradeControllerProtoMsg): _183.MsgToggleTradeController;
            toProto(message: _183.MsgToggleTradeController): Uint8Array;
            toProtoMsg(message: _183.MsgToggleTradeController): _183.MsgToggleTradeControllerProtoMsg;
        };
        MsgToggleTradeControllerResponse: {
            typeUrl: string;
            encode(_: _183.MsgToggleTradeControllerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgToggleTradeControllerResponse;
            fromPartial(_: Partial<_183.MsgToggleTradeControllerResponse>): _183.MsgToggleTradeControllerResponse;
            fromAmino(_: _183.MsgToggleTradeControllerResponseAmino): _183.MsgToggleTradeControllerResponse;
            toAmino(_: _183.MsgToggleTradeControllerResponse): _183.MsgToggleTradeControllerResponseAmino;
            fromAminoMsg(object: _183.MsgToggleTradeControllerResponseAminoMsg): _183.MsgToggleTradeControllerResponse;
            fromProtoMsg(message: _183.MsgToggleTradeControllerResponseProtoMsg): _183.MsgToggleTradeControllerResponse;
            toProto(message: _183.MsgToggleTradeControllerResponse): Uint8Array;
            toProtoMsg(message: _183.MsgToggleTradeControllerResponse): _183.MsgToggleTradeControllerResponseProtoMsg;
        };
        MsgUpdateHostZoneParams: {
            typeUrl: string;
            encode(message: _183.MsgUpdateHostZoneParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgUpdateHostZoneParams;
            fromPartial(object: Partial<_183.MsgUpdateHostZoneParams>): _183.MsgUpdateHostZoneParams;
            fromAmino(object: _183.MsgUpdateHostZoneParamsAmino): _183.MsgUpdateHostZoneParams;
            toAmino(message: _183.MsgUpdateHostZoneParams): _183.MsgUpdateHostZoneParamsAmino;
            fromAminoMsg(object: _183.MsgUpdateHostZoneParamsAminoMsg): _183.MsgUpdateHostZoneParams;
            toAminoMsg(message: _183.MsgUpdateHostZoneParams): _183.MsgUpdateHostZoneParamsAminoMsg;
            fromProtoMsg(message: _183.MsgUpdateHostZoneParamsProtoMsg): _183.MsgUpdateHostZoneParams;
            toProto(message: _183.MsgUpdateHostZoneParams): Uint8Array;
            toProtoMsg(message: _183.MsgUpdateHostZoneParams): _183.MsgUpdateHostZoneParamsProtoMsg;
        };
        MsgUpdateHostZoneParamsResponse: {
            typeUrl: string;
            encode(_: _183.MsgUpdateHostZoneParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgUpdateHostZoneParamsResponse;
            fromPartial(_: Partial<_183.MsgUpdateHostZoneParamsResponse>): _183.MsgUpdateHostZoneParamsResponse;
            fromAmino(_: _183.MsgUpdateHostZoneParamsResponseAmino): _183.MsgUpdateHostZoneParamsResponse;
            toAmino(_: _183.MsgUpdateHostZoneParamsResponse): _183.MsgUpdateHostZoneParamsResponseAmino;
            fromAminoMsg(object: _183.MsgUpdateHostZoneParamsResponseAminoMsg): _183.MsgUpdateHostZoneParamsResponse;
            fromProtoMsg(message: _183.MsgUpdateHostZoneParamsResponseProtoMsg): _183.MsgUpdateHostZoneParamsResponse;
            toProto(message: _183.MsgUpdateHostZoneParamsResponse): Uint8Array;
            toProtoMsg(message: _183.MsgUpdateHostZoneParamsResponse): _183.MsgUpdateHostZoneParamsResponseProtoMsg;
        };
        TradeConfig: {
            typeUrl: string;
            encode(message: _182.TradeConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.TradeConfig;
            fromPartial(object: Partial<_182.TradeConfig>): _182.TradeConfig;
            fromAmino(object: _182.TradeConfigAmino): _182.TradeConfig;
            toAmino(message: _182.TradeConfig): _182.TradeConfigAmino;
            fromAminoMsg(object: _182.TradeConfigAminoMsg): _182.TradeConfig;
            fromProtoMsg(message: _182.TradeConfigProtoMsg): _182.TradeConfig;
            toProto(message: _182.TradeConfig): Uint8Array;
            toProtoMsg(message: _182.TradeConfig): _182.TradeConfigProtoMsg;
        };
        TradeRoute: {
            typeUrl: string;
            encode(message: _182.TradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.TradeRoute;
            fromPartial(object: Partial<_182.TradeRoute>): _182.TradeRoute;
            fromAmino(object: _182.TradeRouteAmino): _182.TradeRoute;
            toAmino(message: _182.TradeRoute): _182.TradeRouteAmino;
            fromAminoMsg(object: _182.TradeRouteAminoMsg): _182.TradeRoute;
            fromProtoMsg(message: _182.TradeRouteProtoMsg): _182.TradeRoute;
            toProto(message: _182.TradeRoute): Uint8Array;
            toProtoMsg(message: _182.TradeRoute): _182.TradeRouteProtoMsg;
        };
        QueryInterchainAccountFromAddressRequest: {
            typeUrl: string;
            encode(message: _181.QueryInterchainAccountFromAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.QueryInterchainAccountFromAddressRequest;
            fromPartial(object: Partial<_181.QueryInterchainAccountFromAddressRequest>): _181.QueryInterchainAccountFromAddressRequest;
            fromAmino(object: _181.QueryInterchainAccountFromAddressRequestAmino): _181.QueryInterchainAccountFromAddressRequest;
            toAmino(message: _181.QueryInterchainAccountFromAddressRequest): _181.QueryInterchainAccountFromAddressRequestAmino;
            fromAminoMsg(object: _181.QueryInterchainAccountFromAddressRequestAminoMsg): _181.QueryInterchainAccountFromAddressRequest;
            fromProtoMsg(message: _181.QueryInterchainAccountFromAddressRequestProtoMsg): _181.QueryInterchainAccountFromAddressRequest;
            toProto(message: _181.QueryInterchainAccountFromAddressRequest): Uint8Array;
            toProtoMsg(message: _181.QueryInterchainAccountFromAddressRequest): _181.QueryInterchainAccountFromAddressRequestProtoMsg;
        };
        QueryInterchainAccountFromAddressResponse: {
            typeUrl: string;
            encode(message: _181.QueryInterchainAccountFromAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.QueryInterchainAccountFromAddressResponse;
            fromPartial(object: Partial<_181.QueryInterchainAccountFromAddressResponse>): _181.QueryInterchainAccountFromAddressResponse;
            fromAmino(object: _181.QueryInterchainAccountFromAddressResponseAmino): _181.QueryInterchainAccountFromAddressResponse;
            toAmino(message: _181.QueryInterchainAccountFromAddressResponse): _181.QueryInterchainAccountFromAddressResponseAmino;
            fromAminoMsg(object: _181.QueryInterchainAccountFromAddressResponseAminoMsg): _181.QueryInterchainAccountFromAddressResponse;
            fromProtoMsg(message: _181.QueryInterchainAccountFromAddressResponseProtoMsg): _181.QueryInterchainAccountFromAddressResponse;
            toProto(message: _181.QueryInterchainAccountFromAddressResponse): Uint8Array;
            toProtoMsg(message: _181.QueryInterchainAccountFromAddressResponse): _181.QueryInterchainAccountFromAddressResponseProtoMsg;
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
        QueryGetValidatorsRequest: {
            typeUrl: string;
            encode(message: _181.QueryGetValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.QueryGetValidatorsRequest;
            fromPartial(object: Partial<_181.QueryGetValidatorsRequest>): _181.QueryGetValidatorsRequest;
            fromAmino(object: _181.QueryGetValidatorsRequestAmino): _181.QueryGetValidatorsRequest;
            toAmino(message: _181.QueryGetValidatorsRequest): _181.QueryGetValidatorsRequestAmino;
            fromAminoMsg(object: _181.QueryGetValidatorsRequestAminoMsg): _181.QueryGetValidatorsRequest;
            fromProtoMsg(message: _181.QueryGetValidatorsRequestProtoMsg): _181.QueryGetValidatorsRequest;
            toProto(message: _181.QueryGetValidatorsRequest): Uint8Array;
            toProtoMsg(message: _181.QueryGetValidatorsRequest): _181.QueryGetValidatorsRequestProtoMsg;
        };
        QueryGetValidatorsResponse: {
            typeUrl: string;
            encode(message: _181.QueryGetValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.QueryGetValidatorsResponse;
            fromPartial(object: Partial<_181.QueryGetValidatorsResponse>): _181.QueryGetValidatorsResponse;
            fromAmino(object: _181.QueryGetValidatorsResponseAmino): _181.QueryGetValidatorsResponse;
            toAmino(message: _181.QueryGetValidatorsResponse): _181.QueryGetValidatorsResponseAmino;
            fromAminoMsg(object: _181.QueryGetValidatorsResponseAminoMsg): _181.QueryGetValidatorsResponse;
            fromProtoMsg(message: _181.QueryGetValidatorsResponseProtoMsg): _181.QueryGetValidatorsResponse;
            toProto(message: _181.QueryGetValidatorsResponse): Uint8Array;
            toProtoMsg(message: _181.QueryGetValidatorsResponse): _181.QueryGetValidatorsResponseProtoMsg;
        };
        QueryGetHostZoneRequest: {
            typeUrl: string;
            encode(message: _181.QueryGetHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.QueryGetHostZoneRequest;
            fromPartial(object: Partial<_181.QueryGetHostZoneRequest>): _181.QueryGetHostZoneRequest;
            fromAmino(object: _181.QueryGetHostZoneRequestAmino): _181.QueryGetHostZoneRequest;
            toAmino(message: _181.QueryGetHostZoneRequest): _181.QueryGetHostZoneRequestAmino;
            fromAminoMsg(object: _181.QueryGetHostZoneRequestAminoMsg): _181.QueryGetHostZoneRequest;
            fromProtoMsg(message: _181.QueryGetHostZoneRequestProtoMsg): _181.QueryGetHostZoneRequest;
            toProto(message: _181.QueryGetHostZoneRequest): Uint8Array;
            toProtoMsg(message: _181.QueryGetHostZoneRequest): _181.QueryGetHostZoneRequestProtoMsg;
        };
        QueryGetHostZoneResponse: {
            typeUrl: string;
            encode(message: _181.QueryGetHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.QueryGetHostZoneResponse;
            fromPartial(object: Partial<_181.QueryGetHostZoneResponse>): _181.QueryGetHostZoneResponse;
            fromAmino(object: _181.QueryGetHostZoneResponseAmino): _181.QueryGetHostZoneResponse;
            toAmino(message: _181.QueryGetHostZoneResponse): _181.QueryGetHostZoneResponseAmino;
            fromAminoMsg(object: _181.QueryGetHostZoneResponseAminoMsg): _181.QueryGetHostZoneResponse;
            fromProtoMsg(message: _181.QueryGetHostZoneResponseProtoMsg): _181.QueryGetHostZoneResponse;
            toProto(message: _181.QueryGetHostZoneResponse): Uint8Array;
            toProtoMsg(message: _181.QueryGetHostZoneResponse): _181.QueryGetHostZoneResponseProtoMsg;
        };
        QueryAllHostZoneRequest: {
            typeUrl: string;
            encode(message: _181.QueryAllHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.QueryAllHostZoneRequest;
            fromPartial(object: Partial<_181.QueryAllHostZoneRequest>): _181.QueryAllHostZoneRequest;
            fromAmino(object: _181.QueryAllHostZoneRequestAmino): _181.QueryAllHostZoneRequest;
            toAmino(message: _181.QueryAllHostZoneRequest): _181.QueryAllHostZoneRequestAmino;
            fromAminoMsg(object: _181.QueryAllHostZoneRequestAminoMsg): _181.QueryAllHostZoneRequest;
            fromProtoMsg(message: _181.QueryAllHostZoneRequestProtoMsg): _181.QueryAllHostZoneRequest;
            toProto(message: _181.QueryAllHostZoneRequest): Uint8Array;
            toProtoMsg(message: _181.QueryAllHostZoneRequest): _181.QueryAllHostZoneRequestProtoMsg;
        };
        QueryAllHostZoneResponse: {
            typeUrl: string;
            encode(message: _181.QueryAllHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.QueryAllHostZoneResponse;
            fromPartial(object: Partial<_181.QueryAllHostZoneResponse>): _181.QueryAllHostZoneResponse;
            fromAmino(object: _181.QueryAllHostZoneResponseAmino): _181.QueryAllHostZoneResponse;
            toAmino(message: _181.QueryAllHostZoneResponse): _181.QueryAllHostZoneResponseAmino;
            fromAminoMsg(object: _181.QueryAllHostZoneResponseAminoMsg): _181.QueryAllHostZoneResponse;
            fromProtoMsg(message: _181.QueryAllHostZoneResponseProtoMsg): _181.QueryAllHostZoneResponse;
            toProto(message: _181.QueryAllHostZoneResponse): Uint8Array;
            toProtoMsg(message: _181.QueryAllHostZoneResponse): _181.QueryAllHostZoneResponseProtoMsg;
        };
        QueryModuleAddressRequest: {
            typeUrl: string;
            encode(message: _181.QueryModuleAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.QueryModuleAddressRequest;
            fromPartial(object: Partial<_181.QueryModuleAddressRequest>): _181.QueryModuleAddressRequest;
            fromAmino(object: _181.QueryModuleAddressRequestAmino): _181.QueryModuleAddressRequest;
            toAmino(message: _181.QueryModuleAddressRequest): _181.QueryModuleAddressRequestAmino;
            fromAminoMsg(object: _181.QueryModuleAddressRequestAminoMsg): _181.QueryModuleAddressRequest;
            fromProtoMsg(message: _181.QueryModuleAddressRequestProtoMsg): _181.QueryModuleAddressRequest;
            toProto(message: _181.QueryModuleAddressRequest): Uint8Array;
            toProtoMsg(message: _181.QueryModuleAddressRequest): _181.QueryModuleAddressRequestProtoMsg;
        };
        QueryModuleAddressResponse: {
            typeUrl: string;
            encode(message: _181.QueryModuleAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.QueryModuleAddressResponse;
            fromPartial(object: Partial<_181.QueryModuleAddressResponse>): _181.QueryModuleAddressResponse;
            fromAmino(object: _181.QueryModuleAddressResponseAmino): _181.QueryModuleAddressResponse;
            toAmino(message: _181.QueryModuleAddressResponse): _181.QueryModuleAddressResponseAmino;
            fromAminoMsg(object: _181.QueryModuleAddressResponseAminoMsg): _181.QueryModuleAddressResponse;
            fromProtoMsg(message: _181.QueryModuleAddressResponseProtoMsg): _181.QueryModuleAddressResponse;
            toProto(message: _181.QueryModuleAddressResponse): Uint8Array;
            toProtoMsg(message: _181.QueryModuleAddressResponse): _181.QueryModuleAddressResponseProtoMsg;
        };
        QueryGetEpochTrackerRequest: {
            typeUrl: string;
            encode(message: _181.QueryGetEpochTrackerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.QueryGetEpochTrackerRequest;
            fromPartial(object: Partial<_181.QueryGetEpochTrackerRequest>): _181.QueryGetEpochTrackerRequest;
            fromAmino(object: _181.QueryGetEpochTrackerRequestAmino): _181.QueryGetEpochTrackerRequest;
            toAmino(message: _181.QueryGetEpochTrackerRequest): _181.QueryGetEpochTrackerRequestAmino;
            fromAminoMsg(object: _181.QueryGetEpochTrackerRequestAminoMsg): _181.QueryGetEpochTrackerRequest;
            fromProtoMsg(message: _181.QueryGetEpochTrackerRequestProtoMsg): _181.QueryGetEpochTrackerRequest;
            toProto(message: _181.QueryGetEpochTrackerRequest): Uint8Array;
            toProtoMsg(message: _181.QueryGetEpochTrackerRequest): _181.QueryGetEpochTrackerRequestProtoMsg;
        };
        QueryGetEpochTrackerResponse: {
            typeUrl: string;
            encode(message: _181.QueryGetEpochTrackerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.QueryGetEpochTrackerResponse;
            fromPartial(object: Partial<_181.QueryGetEpochTrackerResponse>): _181.QueryGetEpochTrackerResponse;
            fromAmino(object: _181.QueryGetEpochTrackerResponseAmino): _181.QueryGetEpochTrackerResponse;
            toAmino(message: _181.QueryGetEpochTrackerResponse): _181.QueryGetEpochTrackerResponseAmino;
            fromAminoMsg(object: _181.QueryGetEpochTrackerResponseAminoMsg): _181.QueryGetEpochTrackerResponse;
            fromProtoMsg(message: _181.QueryGetEpochTrackerResponseProtoMsg): _181.QueryGetEpochTrackerResponse;
            toProto(message: _181.QueryGetEpochTrackerResponse): Uint8Array;
            toProtoMsg(message: _181.QueryGetEpochTrackerResponse): _181.QueryGetEpochTrackerResponseProtoMsg;
        };
        QueryAllEpochTrackerRequest: {
            typeUrl: string;
            encode(_: _181.QueryAllEpochTrackerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.QueryAllEpochTrackerRequest;
            fromPartial(_: Partial<_181.QueryAllEpochTrackerRequest>): _181.QueryAllEpochTrackerRequest;
            fromAmino(_: _181.QueryAllEpochTrackerRequestAmino): _181.QueryAllEpochTrackerRequest;
            toAmino(_: _181.QueryAllEpochTrackerRequest): _181.QueryAllEpochTrackerRequestAmino;
            fromAminoMsg(object: _181.QueryAllEpochTrackerRequestAminoMsg): _181.QueryAllEpochTrackerRequest;
            fromProtoMsg(message: _181.QueryAllEpochTrackerRequestProtoMsg): _181.QueryAllEpochTrackerRequest;
            toProto(message: _181.QueryAllEpochTrackerRequest): Uint8Array;
            toProtoMsg(message: _181.QueryAllEpochTrackerRequest): _181.QueryAllEpochTrackerRequestProtoMsg;
        };
        QueryAllEpochTrackerResponse: {
            typeUrl: string;
            encode(message: _181.QueryAllEpochTrackerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.QueryAllEpochTrackerResponse;
            fromPartial(object: Partial<_181.QueryAllEpochTrackerResponse>): _181.QueryAllEpochTrackerResponse;
            fromAmino(object: _181.QueryAllEpochTrackerResponseAmino): _181.QueryAllEpochTrackerResponse;
            toAmino(message: _181.QueryAllEpochTrackerResponse): _181.QueryAllEpochTrackerResponseAmino;
            fromAminoMsg(object: _181.QueryAllEpochTrackerResponseAminoMsg): _181.QueryAllEpochTrackerResponse;
            fromProtoMsg(message: _181.QueryAllEpochTrackerResponseProtoMsg): _181.QueryAllEpochTrackerResponse;
            toProto(message: _181.QueryAllEpochTrackerResponse): Uint8Array;
            toProtoMsg(message: _181.QueryAllEpochTrackerResponse): _181.QueryAllEpochTrackerResponseProtoMsg;
        };
        QueryGetNextPacketSequenceRequest: {
            typeUrl: string;
            encode(message: _181.QueryGetNextPacketSequenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.QueryGetNextPacketSequenceRequest;
            fromPartial(object: Partial<_181.QueryGetNextPacketSequenceRequest>): _181.QueryGetNextPacketSequenceRequest;
            fromAmino(object: _181.QueryGetNextPacketSequenceRequestAmino): _181.QueryGetNextPacketSequenceRequest;
            toAmino(message: _181.QueryGetNextPacketSequenceRequest): _181.QueryGetNextPacketSequenceRequestAmino;
            fromAminoMsg(object: _181.QueryGetNextPacketSequenceRequestAminoMsg): _181.QueryGetNextPacketSequenceRequest;
            fromProtoMsg(message: _181.QueryGetNextPacketSequenceRequestProtoMsg): _181.QueryGetNextPacketSequenceRequest;
            toProto(message: _181.QueryGetNextPacketSequenceRequest): Uint8Array;
            toProtoMsg(message: _181.QueryGetNextPacketSequenceRequest): _181.QueryGetNextPacketSequenceRequestProtoMsg;
        };
        QueryGetNextPacketSequenceResponse: {
            typeUrl: string;
            encode(message: _181.QueryGetNextPacketSequenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.QueryGetNextPacketSequenceResponse;
            fromPartial(object: Partial<_181.QueryGetNextPacketSequenceResponse>): _181.QueryGetNextPacketSequenceResponse;
            fromAmino(object: _181.QueryGetNextPacketSequenceResponseAmino): _181.QueryGetNextPacketSequenceResponse;
            toAmino(message: _181.QueryGetNextPacketSequenceResponse): _181.QueryGetNextPacketSequenceResponseAmino;
            fromAminoMsg(object: _181.QueryGetNextPacketSequenceResponseAminoMsg): _181.QueryGetNextPacketSequenceResponse;
            fromProtoMsg(message: _181.QueryGetNextPacketSequenceResponseProtoMsg): _181.QueryGetNextPacketSequenceResponse;
            toProto(message: _181.QueryGetNextPacketSequenceResponse): Uint8Array;
            toProtoMsg(message: _181.QueryGetNextPacketSequenceResponse): _181.QueryGetNextPacketSequenceResponseProtoMsg;
        };
        QueryAddressUnbondings: {
            typeUrl: string;
            encode(message: _181.QueryAddressUnbondings, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.QueryAddressUnbondings;
            fromPartial(object: Partial<_181.QueryAddressUnbondings>): _181.QueryAddressUnbondings;
            fromAmino(object: _181.QueryAddressUnbondingsAmino): _181.QueryAddressUnbondings;
            toAmino(message: _181.QueryAddressUnbondings): _181.QueryAddressUnbondingsAmino;
            fromAminoMsg(object: _181.QueryAddressUnbondingsAminoMsg): _181.QueryAddressUnbondings;
            fromProtoMsg(message: _181.QueryAddressUnbondingsProtoMsg): _181.QueryAddressUnbondings;
            toProto(message: _181.QueryAddressUnbondings): Uint8Array;
            toProtoMsg(message: _181.QueryAddressUnbondings): _181.QueryAddressUnbondingsProtoMsg;
        };
        QueryAddressUnbondingsResponse: {
            typeUrl: string;
            encode(message: _181.QueryAddressUnbondingsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.QueryAddressUnbondingsResponse;
            fromPartial(object: Partial<_181.QueryAddressUnbondingsResponse>): _181.QueryAddressUnbondingsResponse;
            fromAmino(object: _181.QueryAddressUnbondingsResponseAmino): _181.QueryAddressUnbondingsResponse;
            toAmino(message: _181.QueryAddressUnbondingsResponse): _181.QueryAddressUnbondingsResponseAmino;
            fromAminoMsg(object: _181.QueryAddressUnbondingsResponseAminoMsg): _181.QueryAddressUnbondingsResponse;
            fromProtoMsg(message: _181.QueryAddressUnbondingsResponseProtoMsg): _181.QueryAddressUnbondingsResponse;
            toProto(message: _181.QueryAddressUnbondingsResponse): Uint8Array;
            toProtoMsg(message: _181.QueryAddressUnbondingsResponse): _181.QueryAddressUnbondingsResponseProtoMsg;
        };
        QueryAllTradeRoutes: {
            typeUrl: string;
            encode(_: _181.QueryAllTradeRoutes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.QueryAllTradeRoutes;
            fromPartial(_: Partial<_181.QueryAllTradeRoutes>): _181.QueryAllTradeRoutes;
            fromAmino(_: _181.QueryAllTradeRoutesAmino): _181.QueryAllTradeRoutes;
            toAmino(_: _181.QueryAllTradeRoutes): _181.QueryAllTradeRoutesAmino;
            fromAminoMsg(object: _181.QueryAllTradeRoutesAminoMsg): _181.QueryAllTradeRoutes;
            fromProtoMsg(message: _181.QueryAllTradeRoutesProtoMsg): _181.QueryAllTradeRoutes;
            toProto(message: _181.QueryAllTradeRoutes): Uint8Array;
            toProtoMsg(message: _181.QueryAllTradeRoutes): _181.QueryAllTradeRoutesProtoMsg;
        };
        QueryAllTradeRoutesResponse: {
            typeUrl: string;
            encode(message: _181.QueryAllTradeRoutesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.QueryAllTradeRoutesResponse;
            fromPartial(object: Partial<_181.QueryAllTradeRoutesResponse>): _181.QueryAllTradeRoutesResponse;
            fromAmino(object: _181.QueryAllTradeRoutesResponseAmino): _181.QueryAllTradeRoutesResponse;
            toAmino(message: _181.QueryAllTradeRoutesResponse): _181.QueryAllTradeRoutesResponseAmino;
            fromAminoMsg(object: _181.QueryAllTradeRoutesResponseAminoMsg): _181.QueryAllTradeRoutesResponse;
            fromProtoMsg(message: _181.QueryAllTradeRoutesResponseProtoMsg): _181.QueryAllTradeRoutesResponse;
            toProto(message: _181.QueryAllTradeRoutesResponse): Uint8Array;
            toProtoMsg(message: _181.QueryAllTradeRoutesResponse): _181.QueryAllTradeRoutesResponseProtoMsg;
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
        StakeibcPacketData: {
            typeUrl: string;
            encode(message: _179.StakeibcPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.StakeibcPacketData;
            fromPartial(object: Partial<_179.StakeibcPacketData>): _179.StakeibcPacketData;
            fromAmino(object: _179.StakeibcPacketDataAmino): _179.StakeibcPacketData;
            toAmino(message: _179.StakeibcPacketData): _179.StakeibcPacketDataAmino;
            fromAminoMsg(object: _179.StakeibcPacketDataAminoMsg): _179.StakeibcPacketData;
            fromProtoMsg(message: _179.StakeibcPacketDataProtoMsg): _179.StakeibcPacketData;
            toProto(message: _179.StakeibcPacketData): Uint8Array;
            toProtoMsg(message: _179.StakeibcPacketData): _179.StakeibcPacketDataProtoMsg;
        };
        NoData: {
            typeUrl: string;
            encode(_: _179.NoData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.NoData;
            fromPartial(_: Partial<_179.NoData>): _179.NoData;
            fromAmino(_: _179.NoDataAmino): _179.NoData;
            toAmino(_: _179.NoData): _179.NoDataAmino;
            fromAminoMsg(object: _179.NoDataAminoMsg): _179.NoData;
            fromProtoMsg(message: _179.NoDataProtoMsg): _179.NoData;
            toProto(message: _179.NoData): Uint8Array;
            toProtoMsg(message: _179.NoData): _179.NoDataProtoMsg;
        };
        iCAAccountTypeFromJSON(object: any): _178.ICAAccountType;
        iCAAccountTypeToJSON(object: _178.ICAAccountType): string;
        ICAAccountType: typeof _178.ICAAccountType;
        ICAAccountTypeSDKType: typeof _178.ICAAccountType;
        ICAAccountTypeAmino: typeof _178.ICAAccountType;
        ICAAccount: {
            typeUrl: string;
            encode(message: _178.ICAAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.ICAAccount;
            fromPartial(object: Partial<_178.ICAAccount>): _178.ICAAccount;
            fromAmino(object: _178.ICAAccountAmino): _178.ICAAccount;
            toAmino(message: _178.ICAAccount): _178.ICAAccountAmino;
            fromAminoMsg(object: _178.ICAAccountAminoMsg): _178.ICAAccount;
            fromProtoMsg(message: _178.ICAAccountProtoMsg): _178.ICAAccount;
            toProto(message: _178.ICAAccount): Uint8Array;
            toProtoMsg(message: _178.ICAAccount): _178.ICAAccountProtoMsg;
        };
        CommunityPoolRebate: {
            typeUrl: string;
            encode(message: _177.CommunityPoolRebate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.CommunityPoolRebate;
            fromPartial(object: Partial<_177.CommunityPoolRebate>): _177.CommunityPoolRebate;
            fromAmino(object: _177.CommunityPoolRebateAmino): _177.CommunityPoolRebate;
            toAmino(message: _177.CommunityPoolRebate): _177.CommunityPoolRebateAmino;
            fromAminoMsg(object: _177.CommunityPoolRebateAminoMsg): _177.CommunityPoolRebate;
            fromProtoMsg(message: _177.CommunityPoolRebateProtoMsg): _177.CommunityPoolRebate;
            toProto(message: _177.CommunityPoolRebate): Uint8Array;
            toProtoMsg(message: _177.CommunityPoolRebate): _177.CommunityPoolRebateProtoMsg;
        };
        HostZone: {
            typeUrl: string;
            encode(message: _177.HostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.HostZone;
            fromPartial(object: Partial<_177.HostZone>): _177.HostZone;
            fromAmino(object: _177.HostZoneAmino): _177.HostZone;
            toAmino(message: _177.HostZone): _177.HostZoneAmino;
            fromAminoMsg(object: _177.HostZoneAminoMsg): _177.HostZone;
            fromProtoMsg(message: _177.HostZoneProtoMsg): _177.HostZone;
            toProto(message: _177.HostZone): Uint8Array;
            toProtoMsg(message: _177.HostZone): _177.HostZoneProtoMsg;
        };
        AddValidatorsProposal: {
            typeUrl: string;
            encode(message: _176.AddValidatorsProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.AddValidatorsProposal;
            fromPartial(object: Partial<_176.AddValidatorsProposal>): _176.AddValidatorsProposal;
            fromAmino(object: _176.AddValidatorsProposalAmino): _176.AddValidatorsProposal;
            toAmino(message: _176.AddValidatorsProposal): _176.AddValidatorsProposalAmino;
            fromAminoMsg(object: _176.AddValidatorsProposalAminoMsg): _176.AddValidatorsProposal;
            fromProtoMsg(message: _176.AddValidatorsProposalProtoMsg): _176.AddValidatorsProposal;
            toProto(message: _176.AddValidatorsProposal): Uint8Array;
            toProtoMsg(message: _176.AddValidatorsProposal): _176.AddValidatorsProposalProtoMsg;
        };
        ToggleLSMProposal: {
            typeUrl: string;
            encode(message: _176.ToggleLSMProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.ToggleLSMProposal;
            fromPartial(object: Partial<_176.ToggleLSMProposal>): _176.ToggleLSMProposal;
            fromAmino(object: _176.ToggleLSMProposalAmino): _176.ToggleLSMProposal;
            toAmino(message: _176.ToggleLSMProposal): _176.ToggleLSMProposalAmino;
            fromAminoMsg(object: _176.ToggleLSMProposalAminoMsg): _176.ToggleLSMProposal;
            fromProtoMsg(message: _176.ToggleLSMProposalProtoMsg): _176.ToggleLSMProposal;
            toProto(message: _176.ToggleLSMProposal): Uint8Array;
            toProtoMsg(message: _176.ToggleLSMProposal): _176.ToggleLSMProposalProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _175.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.GenesisState;
            fromPartial(object: Partial<_175.GenesisState>): _175.GenesisState;
            fromAmino(object: _175.GenesisStateAmino): _175.GenesisState;
            toAmino(message: _175.GenesisState): _175.GenesisStateAmino;
            fromAminoMsg(object: _175.GenesisStateAminoMsg): _175.GenesisState;
            fromProtoMsg(message: _175.GenesisStateProtoMsg): _175.GenesisState;
            toProto(message: _175.GenesisState): Uint8Array;
            toProtoMsg(message: _175.GenesisState): _175.GenesisStateProtoMsg;
        };
        EpochTracker: {
            typeUrl: string;
            encode(message: _174.EpochTracker, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.EpochTracker;
            fromPartial(object: Partial<_174.EpochTracker>): _174.EpochTracker;
            fromAmino(object: _174.EpochTrackerAmino): _174.EpochTracker;
            toAmino(message: _174.EpochTracker): _174.EpochTrackerAmino;
            fromAminoMsg(object: _174.EpochTrackerAminoMsg): _174.EpochTracker;
            fromProtoMsg(message: _174.EpochTrackerProtoMsg): _174.EpochTracker;
            toProto(message: _174.EpochTracker): Uint8Array;
            toProtoMsg(message: _174.EpochTracker): _174.EpochTrackerProtoMsg;
        };
        SplitDelegation: {
            typeUrl: string;
            encode(message: _173.SplitDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.SplitDelegation;
            fromPartial(object: Partial<_173.SplitDelegation>): _173.SplitDelegation;
            fromAmino(object: _173.SplitDelegationAmino): _173.SplitDelegation;
            toAmino(message: _173.SplitDelegation): _173.SplitDelegationAmino;
            fromAminoMsg(object: _173.SplitDelegationAminoMsg): _173.SplitDelegation;
            fromProtoMsg(message: _173.SplitDelegationProtoMsg): _173.SplitDelegation;
            toProto(message: _173.SplitDelegation): Uint8Array;
            toProtoMsg(message: _173.SplitDelegation): _173.SplitDelegationProtoMsg;
        };
        SplitUndelegation: {
            typeUrl: string;
            encode(message: _173.SplitUndelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.SplitUndelegation;
            fromPartial(object: Partial<_173.SplitUndelegation>): _173.SplitUndelegation;
            fromAmino(object: _173.SplitUndelegationAmino): _173.SplitUndelegation;
            toAmino(message: _173.SplitUndelegation): _173.SplitUndelegationAmino;
            fromAminoMsg(object: _173.SplitUndelegationAminoMsg): _173.SplitUndelegation;
            fromProtoMsg(message: _173.SplitUndelegationProtoMsg): _173.SplitUndelegation;
            toProto(message: _173.SplitUndelegation): Uint8Array;
            toProtoMsg(message: _173.SplitUndelegation): _173.SplitUndelegationProtoMsg;
        };
        DelegateCallback: {
            typeUrl: string;
            encode(message: _173.DelegateCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.DelegateCallback;
            fromPartial(object: Partial<_173.DelegateCallback>): _173.DelegateCallback;
            fromAmino(object: _173.DelegateCallbackAmino): _173.DelegateCallback;
            toAmino(message: _173.DelegateCallback): _173.DelegateCallbackAmino;
            fromAminoMsg(object: _173.DelegateCallbackAminoMsg): _173.DelegateCallback;
            fromProtoMsg(message: _173.DelegateCallbackProtoMsg): _173.DelegateCallback;
            toProto(message: _173.DelegateCallback): Uint8Array;
            toProtoMsg(message: _173.DelegateCallback): _173.DelegateCallbackProtoMsg;
        };
        ClaimCallback: {
            typeUrl: string;
            encode(message: _173.ClaimCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.ClaimCallback;
            fromPartial(object: Partial<_173.ClaimCallback>): _173.ClaimCallback;
            fromAmino(object: _173.ClaimCallbackAmino): _173.ClaimCallback;
            toAmino(message: _173.ClaimCallback): _173.ClaimCallbackAmino;
            fromAminoMsg(object: _173.ClaimCallbackAminoMsg): _173.ClaimCallback;
            fromProtoMsg(message: _173.ClaimCallbackProtoMsg): _173.ClaimCallback;
            toProto(message: _173.ClaimCallback): Uint8Array;
            toProtoMsg(message: _173.ClaimCallback): _173.ClaimCallbackProtoMsg;
        };
        ReinvestCallback: {
            typeUrl: string;
            encode(message: _173.ReinvestCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.ReinvestCallback;
            fromPartial(object: Partial<_173.ReinvestCallback>): _173.ReinvestCallback;
            fromAmino(object: _173.ReinvestCallbackAmino): _173.ReinvestCallback;
            toAmino(message: _173.ReinvestCallback): _173.ReinvestCallbackAmino;
            fromAminoMsg(object: _173.ReinvestCallbackAminoMsg): _173.ReinvestCallback;
            fromProtoMsg(message: _173.ReinvestCallbackProtoMsg): _173.ReinvestCallback;
            toProto(message: _173.ReinvestCallback): Uint8Array;
            toProtoMsg(message: _173.ReinvestCallback): _173.ReinvestCallbackProtoMsg;
        };
        UndelegateCallback: {
            typeUrl: string;
            encode(message: _173.UndelegateCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.UndelegateCallback;
            fromPartial(object: Partial<_173.UndelegateCallback>): _173.UndelegateCallback;
            fromAmino(object: _173.UndelegateCallbackAmino): _173.UndelegateCallback;
            toAmino(message: _173.UndelegateCallback): _173.UndelegateCallbackAmino;
            fromAminoMsg(object: _173.UndelegateCallbackAminoMsg): _173.UndelegateCallback;
            fromProtoMsg(message: _173.UndelegateCallbackProtoMsg): _173.UndelegateCallback;
            toProto(message: _173.UndelegateCallback): Uint8Array;
            toProtoMsg(message: _173.UndelegateCallback): _173.UndelegateCallbackProtoMsg;
        };
        RedemptionCallback: {
            typeUrl: string;
            encode(message: _173.RedemptionCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.RedemptionCallback;
            fromPartial(object: Partial<_173.RedemptionCallback>): _173.RedemptionCallback;
            fromAmino(object: _173.RedemptionCallbackAmino): _173.RedemptionCallback;
            toAmino(message: _173.RedemptionCallback): _173.RedemptionCallbackAmino;
            fromAminoMsg(object: _173.RedemptionCallbackAminoMsg): _173.RedemptionCallback;
            fromProtoMsg(message: _173.RedemptionCallbackProtoMsg): _173.RedemptionCallback;
            toProto(message: _173.RedemptionCallback): Uint8Array;
            toProtoMsg(message: _173.RedemptionCallback): _173.RedemptionCallbackProtoMsg;
        };
        Rebalancing: {
            typeUrl: string;
            encode(message: _173.Rebalancing, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.Rebalancing;
            fromPartial(object: Partial<_173.Rebalancing>): _173.Rebalancing;
            fromAmino(object: _173.RebalancingAmino): _173.Rebalancing;
            toAmino(message: _173.Rebalancing): _173.RebalancingAmino;
            fromAminoMsg(object: _173.RebalancingAminoMsg): _173.Rebalancing;
            fromProtoMsg(message: _173.RebalancingProtoMsg): _173.Rebalancing;
            toProto(message: _173.Rebalancing): Uint8Array;
            toProtoMsg(message: _173.Rebalancing): _173.RebalancingProtoMsg;
        };
        RebalanceCallback: {
            typeUrl: string;
            encode(message: _173.RebalanceCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.RebalanceCallback;
            fromPartial(object: Partial<_173.RebalanceCallback>): _173.RebalanceCallback;
            fromAmino(object: _173.RebalanceCallbackAmino): _173.RebalanceCallback;
            toAmino(message: _173.RebalanceCallback): _173.RebalanceCallbackAmino;
            fromAminoMsg(object: _173.RebalanceCallbackAminoMsg): _173.RebalanceCallback;
            fromProtoMsg(message: _173.RebalanceCallbackProtoMsg): _173.RebalanceCallback;
            toProto(message: _173.RebalanceCallback): Uint8Array;
            toProtoMsg(message: _173.RebalanceCallback): _173.RebalanceCallbackProtoMsg;
        };
        DetokenizeSharesCallback: {
            typeUrl: string;
            encode(message: _173.DetokenizeSharesCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.DetokenizeSharesCallback;
            fromPartial(object: Partial<_173.DetokenizeSharesCallback>): _173.DetokenizeSharesCallback;
            fromAmino(object: _173.DetokenizeSharesCallbackAmino): _173.DetokenizeSharesCallback;
            toAmino(message: _173.DetokenizeSharesCallback): _173.DetokenizeSharesCallbackAmino;
            fromAminoMsg(object: _173.DetokenizeSharesCallbackAminoMsg): _173.DetokenizeSharesCallback;
            fromProtoMsg(message: _173.DetokenizeSharesCallbackProtoMsg): _173.DetokenizeSharesCallback;
            toProto(message: _173.DetokenizeSharesCallback): Uint8Array;
            toProtoMsg(message: _173.DetokenizeSharesCallback): _173.DetokenizeSharesCallbackProtoMsg;
        };
        LSMLiquidStake: {
            typeUrl: string;
            encode(message: _173.LSMLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.LSMLiquidStake;
            fromPartial(object: Partial<_173.LSMLiquidStake>): _173.LSMLiquidStake;
            fromAmino(object: _173.LSMLiquidStakeAmino): _173.LSMLiquidStake;
            toAmino(message: _173.LSMLiquidStake): _173.LSMLiquidStakeAmino;
            fromAminoMsg(object: _173.LSMLiquidStakeAminoMsg): _173.LSMLiquidStake;
            fromProtoMsg(message: _173.LSMLiquidStakeProtoMsg): _173.LSMLiquidStake;
            toProto(message: _173.LSMLiquidStake): Uint8Array;
            toProtoMsg(message: _173.LSMLiquidStake): _173.LSMLiquidStakeProtoMsg;
        };
        ValidatorSharesToTokensQueryCallback: {
            typeUrl: string;
            encode(message: _173.ValidatorSharesToTokensQueryCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.ValidatorSharesToTokensQueryCallback;
            fromPartial(object: Partial<_173.ValidatorSharesToTokensQueryCallback>): _173.ValidatorSharesToTokensQueryCallback;
            fromAmino(object: _173.ValidatorSharesToTokensQueryCallbackAmino): _173.ValidatorSharesToTokensQueryCallback;
            toAmino(message: _173.ValidatorSharesToTokensQueryCallback): _173.ValidatorSharesToTokensQueryCallbackAmino;
            fromAminoMsg(object: _173.ValidatorSharesToTokensQueryCallbackAminoMsg): _173.ValidatorSharesToTokensQueryCallback;
            fromProtoMsg(message: _173.ValidatorSharesToTokensQueryCallbackProtoMsg): _173.ValidatorSharesToTokensQueryCallback;
            toProto(message: _173.ValidatorSharesToTokensQueryCallback): Uint8Array;
            toProtoMsg(message: _173.ValidatorSharesToTokensQueryCallback): _173.ValidatorSharesToTokensQueryCallbackProtoMsg;
        };
        DelegatorSharesQueryCallback: {
            typeUrl: string;
            encode(message: _173.DelegatorSharesQueryCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.DelegatorSharesQueryCallback;
            fromPartial(object: Partial<_173.DelegatorSharesQueryCallback>): _173.DelegatorSharesQueryCallback;
            fromAmino(object: _173.DelegatorSharesQueryCallbackAmino): _173.DelegatorSharesQueryCallback;
            toAmino(message: _173.DelegatorSharesQueryCallback): _173.DelegatorSharesQueryCallbackAmino;
            fromAminoMsg(object: _173.DelegatorSharesQueryCallbackAminoMsg): _173.DelegatorSharesQueryCallback;
            fromProtoMsg(message: _173.DelegatorSharesQueryCallbackProtoMsg): _173.DelegatorSharesQueryCallback;
            toProto(message: _173.DelegatorSharesQueryCallback): Uint8Array;
            toProtoMsg(message: _173.DelegatorSharesQueryCallback): _173.DelegatorSharesQueryCallbackProtoMsg;
        };
        CommunityPoolBalanceQueryCallback: {
            typeUrl: string;
            encode(message: _173.CommunityPoolBalanceQueryCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.CommunityPoolBalanceQueryCallback;
            fromPartial(object: Partial<_173.CommunityPoolBalanceQueryCallback>): _173.CommunityPoolBalanceQueryCallback;
            fromAmino(object: _173.CommunityPoolBalanceQueryCallbackAmino): _173.CommunityPoolBalanceQueryCallback;
            toAmino(message: _173.CommunityPoolBalanceQueryCallback): _173.CommunityPoolBalanceQueryCallbackAmino;
            fromAminoMsg(object: _173.CommunityPoolBalanceQueryCallbackAminoMsg): _173.CommunityPoolBalanceQueryCallback;
            fromProtoMsg(message: _173.CommunityPoolBalanceQueryCallbackProtoMsg): _173.CommunityPoolBalanceQueryCallback;
            toProto(message: _173.CommunityPoolBalanceQueryCallback): Uint8Array;
            toProtoMsg(message: _173.CommunityPoolBalanceQueryCallback): _173.CommunityPoolBalanceQueryCallbackProtoMsg;
        };
        TradeRouteCallback: {
            typeUrl: string;
            encode(message: _173.TradeRouteCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.TradeRouteCallback;
            fromPartial(object: Partial<_173.TradeRouteCallback>): _173.TradeRouteCallback;
            fromAmino(object: _173.TradeRouteCallbackAmino): _173.TradeRouteCallback;
            toAmino(message: _173.TradeRouteCallback): _173.TradeRouteCallbackAmino;
            fromAminoMsg(object: _173.TradeRouteCallbackAminoMsg): _173.TradeRouteCallback;
            fromProtoMsg(message: _173.TradeRouteCallbackProtoMsg): _173.TradeRouteCallback;
            toProto(message: _173.TradeRouteCallback): Uint8Array;
            toProtoMsg(message: _173.TradeRouteCallback): _173.TradeRouteCallbackProtoMsg;
        };
        AddressUnbonding: {
            typeUrl: string;
            encode(message: _172.AddressUnbonding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.AddressUnbonding;
            fromPartial(object: Partial<_172.AddressUnbonding>): _172.AddressUnbonding;
            fromAmino(object: _172.AddressUnbondingAmino): _172.AddressUnbonding;
            toAmino(message: _172.AddressUnbonding): _172.AddressUnbondingAmino;
            fromAminoMsg(object: _172.AddressUnbondingAminoMsg): _172.AddressUnbonding;
            fromProtoMsg(message: _172.AddressUnbondingProtoMsg): _172.AddressUnbonding;
            toProto(message: _172.AddressUnbonding): Uint8Array;
            toProtoMsg(message: _172.AddressUnbonding): _172.AddressUnbondingProtoMsg;
        };
    };
    const staketia: {
        MsgClientImpl: typeof _314.MsgClientImpl;
        QueryClientImpl: typeof _304.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            hostZone(request?: _186.QueryHostZoneRequest): Promise<_186.QueryHostZoneResponse>;
            delegationRecords(request: _186.QueryDelegationRecordsRequest): Promise<_186.QueryDelegationRecordsResponse>;
            unbondingRecords(request: _186.QueryUnbondingRecordsRequest): Promise<_186.QueryUnbondingRecordsResponse>;
            redemptionRecord(request: _186.QueryRedemptionRecordRequest): Promise<_186.QueryRedemptionRecordResponse>;
            redemptionRecords(request: _186.QueryRedemptionRecordsRequest): Promise<_186.QueryRedemptionRecordsResponse>;
            slashRecords(request?: _186.QuerySlashRecordsRequest): Promise<_186.QuerySlashRecordsResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                liquidStake(value: _188.MsgLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                redeemStake(value: _188.MsgRedeemStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmDelegation(value: _188.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmUndelegation(value: _188.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmUnbondedTokenSweep(value: _188.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                adjustDelegatedBalance(value: _188.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateInnerRedemptionRateBounds(value: _188.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                resumeHostZone(value: _188.MsgResumeHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                refreshRedemptionRate(value: _188.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteDelegationRecord(value: _188.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteUnbondingRecord(value: _188.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteRedemptionRecord(value: _188.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setOperatorAddress(value: _188.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                liquidStake(value: _188.MsgLiquidStake): {
                    typeUrl: string;
                    value: _188.MsgLiquidStake;
                };
                redeemStake(value: _188.MsgRedeemStake): {
                    typeUrl: string;
                    value: _188.MsgRedeemStake;
                };
                confirmDelegation(value: _188.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: _188.MsgConfirmDelegation;
                };
                confirmUndelegation(value: _188.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: _188.MsgConfirmUndelegation;
                };
                confirmUnbondedTokenSweep(value: _188.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: _188.MsgConfirmUnbondedTokenSweep;
                };
                adjustDelegatedBalance(value: _188.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: _188.MsgAdjustDelegatedBalance;
                };
                updateInnerRedemptionRateBounds(value: _188.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _188.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _188.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _188.MsgResumeHostZone;
                };
                refreshRedemptionRate(value: _188.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: _188.MsgRefreshRedemptionRate;
                };
                overwriteDelegationRecord(value: _188.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: _188.MsgOverwriteDelegationRecord;
                };
                overwriteUnbondingRecord(value: _188.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: _188.MsgOverwriteUnbondingRecord;
                };
                overwriteRedemptionRecord(value: _188.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: _188.MsgOverwriteRedemptionRecord;
                };
                setOperatorAddress(value: _188.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: _188.MsgSetOperatorAddress;
                };
            };
            fromPartial: {
                liquidStake(value: _188.MsgLiquidStake): {
                    typeUrl: string;
                    value: _188.MsgLiquidStake;
                };
                redeemStake(value: _188.MsgRedeemStake): {
                    typeUrl: string;
                    value: _188.MsgRedeemStake;
                };
                confirmDelegation(value: _188.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: _188.MsgConfirmDelegation;
                };
                confirmUndelegation(value: _188.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: _188.MsgConfirmUndelegation;
                };
                confirmUnbondedTokenSweep(value: _188.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: _188.MsgConfirmUnbondedTokenSweep;
                };
                adjustDelegatedBalance(value: _188.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: _188.MsgAdjustDelegatedBalance;
                };
                updateInnerRedemptionRateBounds(value: _188.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _188.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _188.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _188.MsgResumeHostZone;
                };
                refreshRedemptionRate(value: _188.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: _188.MsgRefreshRedemptionRate;
                };
                overwriteDelegationRecord(value: _188.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: _188.MsgOverwriteDelegationRecord;
                };
                overwriteUnbondingRecord(value: _188.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: _188.MsgOverwriteUnbondingRecord;
                };
                overwriteRedemptionRecord(value: _188.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: _188.MsgOverwriteRedemptionRecord;
                };
                setOperatorAddress(value: _188.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: _188.MsgSetOperatorAddress;
                };
            };
        };
        AminoConverter: {
            "/stride.staketia.MsgLiquidStake": {
                aminoType: string;
                toAmino: (message: _188.MsgLiquidStake) => _188.MsgLiquidStakeAmino;
                fromAmino: (object: _188.MsgLiquidStakeAmino) => _188.MsgLiquidStake;
            };
            "/stride.staketia.MsgRedeemStake": {
                aminoType: string;
                toAmino: (message: _188.MsgRedeemStake) => _188.MsgRedeemStakeAmino;
                fromAmino: (object: _188.MsgRedeemStakeAmino) => _188.MsgRedeemStake;
            };
            "/stride.staketia.MsgConfirmDelegation": {
                aminoType: string;
                toAmino: (message: _188.MsgConfirmDelegation) => _188.MsgConfirmDelegationAmino;
                fromAmino: (object: _188.MsgConfirmDelegationAmino) => _188.MsgConfirmDelegation;
            };
            "/stride.staketia.MsgConfirmUndelegation": {
                aminoType: string;
                toAmino: (message: _188.MsgConfirmUndelegation) => _188.MsgConfirmUndelegationAmino;
                fromAmino: (object: _188.MsgConfirmUndelegationAmino) => _188.MsgConfirmUndelegation;
            };
            "/stride.staketia.MsgConfirmUnbondedTokenSweep": {
                aminoType: string;
                toAmino: (message: _188.MsgConfirmUnbondedTokenSweep) => _188.MsgConfirmUnbondedTokenSweepAmino;
                fromAmino: (object: _188.MsgConfirmUnbondedTokenSweepAmino) => _188.MsgConfirmUnbondedTokenSweep;
            };
            "/stride.staketia.MsgAdjustDelegatedBalance": {
                aminoType: string;
                toAmino: (message: _188.MsgAdjustDelegatedBalance) => _188.MsgAdjustDelegatedBalanceAmino;
                fromAmino: (object: _188.MsgAdjustDelegatedBalanceAmino) => _188.MsgAdjustDelegatedBalance;
            };
            "/stride.staketia.MsgUpdateInnerRedemptionRateBounds": {
                aminoType: string;
                toAmino: (message: _188.MsgUpdateInnerRedemptionRateBounds) => _188.MsgUpdateInnerRedemptionRateBoundsAmino;
                fromAmino: (object: _188.MsgUpdateInnerRedemptionRateBoundsAmino) => _188.MsgUpdateInnerRedemptionRateBounds;
            };
            "/stride.staketia.MsgResumeHostZone": {
                aminoType: string;
                toAmino: (message: _188.MsgResumeHostZone) => _188.MsgResumeHostZoneAmino;
                fromAmino: (object: _188.MsgResumeHostZoneAmino) => _188.MsgResumeHostZone;
            };
            "/stride.staketia.MsgRefreshRedemptionRate": {
                aminoType: string;
                toAmino: (message: _188.MsgRefreshRedemptionRate) => _188.MsgRefreshRedemptionRateAmino;
                fromAmino: (object: _188.MsgRefreshRedemptionRateAmino) => _188.MsgRefreshRedemptionRate;
            };
            "/stride.staketia.MsgOverwriteDelegationRecord": {
                aminoType: string;
                toAmino: (message: _188.MsgOverwriteDelegationRecord) => _188.MsgOverwriteDelegationRecordAmino;
                fromAmino: (object: _188.MsgOverwriteDelegationRecordAmino) => _188.MsgOverwriteDelegationRecord;
            };
            "/stride.staketia.MsgOverwriteUnbondingRecord": {
                aminoType: string;
                toAmino: (message: _188.MsgOverwriteUnbondingRecord) => _188.MsgOverwriteUnbondingRecordAmino;
                fromAmino: (object: _188.MsgOverwriteUnbondingRecordAmino) => _188.MsgOverwriteUnbondingRecord;
            };
            "/stride.staketia.MsgOverwriteRedemptionRecord": {
                aminoType: string;
                toAmino: (message: _188.MsgOverwriteRedemptionRecord) => _188.MsgOverwriteRedemptionRecordAmino;
                fromAmino: (object: _188.MsgOverwriteRedemptionRecordAmino) => _188.MsgOverwriteRedemptionRecord;
            };
            "/stride.staketia.MsgSetOperatorAddress": {
                aminoType: string;
                toAmino: (message: _188.MsgSetOperatorAddress) => _188.MsgSetOperatorAddressAmino;
                fromAmino: (object: _188.MsgSetOperatorAddressAmino) => _188.MsgSetOperatorAddress;
            };
        };
        overwritableRecordTypeFromJSON(object: any): _188.OverwritableRecordType;
        overwritableRecordTypeToJSON(object: _188.OverwritableRecordType): string;
        OverwritableRecordType: typeof _188.OverwritableRecordType;
        OverwritableRecordTypeSDKType: typeof _188.OverwritableRecordType;
        OverwritableRecordTypeAmino: typeof _188.OverwritableRecordType;
        MsgLiquidStake: {
            typeUrl: string;
            encode(message: _188.MsgLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.MsgLiquidStake;
            fromPartial(object: Partial<_188.MsgLiquidStake>): _188.MsgLiquidStake;
            fromAmino(object: _188.MsgLiquidStakeAmino): _188.MsgLiquidStake;
            toAmino(message: _188.MsgLiquidStake): _188.MsgLiquidStakeAmino;
            fromAminoMsg(object: _188.MsgLiquidStakeAminoMsg): _188.MsgLiquidStake;
            toAminoMsg(message: _188.MsgLiquidStake): _188.MsgLiquidStakeAminoMsg;
            fromProtoMsg(message: _188.MsgLiquidStakeProtoMsg): _188.MsgLiquidStake;
            toProto(message: _188.MsgLiquidStake): Uint8Array;
            toProtoMsg(message: _188.MsgLiquidStake): _188.MsgLiquidStakeProtoMsg;
        };
        MsgLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _188.MsgLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.MsgLiquidStakeResponse;
            fromPartial(object: Partial<_188.MsgLiquidStakeResponse>): _188.MsgLiquidStakeResponse;
            fromAmino(object: _188.MsgLiquidStakeResponseAmino): _188.MsgLiquidStakeResponse;
            toAmino(message: _188.MsgLiquidStakeResponse): _188.MsgLiquidStakeResponseAmino;
            fromAminoMsg(object: _188.MsgLiquidStakeResponseAminoMsg): _188.MsgLiquidStakeResponse;
            fromProtoMsg(message: _188.MsgLiquidStakeResponseProtoMsg): _188.MsgLiquidStakeResponse;
            toProto(message: _188.MsgLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _188.MsgLiquidStakeResponse): _188.MsgLiquidStakeResponseProtoMsg;
        };
        MsgRedeemStake: {
            typeUrl: string;
            encode(message: _188.MsgRedeemStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.MsgRedeemStake;
            fromPartial(object: Partial<_188.MsgRedeemStake>): _188.MsgRedeemStake;
            fromAmino(object: _188.MsgRedeemStakeAmino): _188.MsgRedeemStake;
            toAmino(message: _188.MsgRedeemStake): _188.MsgRedeemStakeAmino;
            fromAminoMsg(object: _188.MsgRedeemStakeAminoMsg): _188.MsgRedeemStake;
            toAminoMsg(message: _188.MsgRedeemStake): _188.MsgRedeemStakeAminoMsg;
            fromProtoMsg(message: _188.MsgRedeemStakeProtoMsg): _188.MsgRedeemStake;
            toProto(message: _188.MsgRedeemStake): Uint8Array;
            toProtoMsg(message: _188.MsgRedeemStake): _188.MsgRedeemStakeProtoMsg;
        };
        MsgRedeemStakeResponse: {
            typeUrl: string;
            encode(message: _188.MsgRedeemStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.MsgRedeemStakeResponse;
            fromPartial(object: Partial<_188.MsgRedeemStakeResponse>): _188.MsgRedeemStakeResponse;
            fromAmino(object: _188.MsgRedeemStakeResponseAmino): _188.MsgRedeemStakeResponse;
            toAmino(message: _188.MsgRedeemStakeResponse): _188.MsgRedeemStakeResponseAmino;
            fromAminoMsg(object: _188.MsgRedeemStakeResponseAminoMsg): _188.MsgRedeemStakeResponse;
            fromProtoMsg(message: _188.MsgRedeemStakeResponseProtoMsg): _188.MsgRedeemStakeResponse;
            toProto(message: _188.MsgRedeemStakeResponse): Uint8Array;
            toProtoMsg(message: _188.MsgRedeemStakeResponse): _188.MsgRedeemStakeResponseProtoMsg;
        };
        MsgConfirmDelegation: {
            typeUrl: string;
            encode(message: _188.MsgConfirmDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.MsgConfirmDelegation;
            fromPartial(object: Partial<_188.MsgConfirmDelegation>): _188.MsgConfirmDelegation;
            fromAmino(object: _188.MsgConfirmDelegationAmino): _188.MsgConfirmDelegation;
            toAmino(message: _188.MsgConfirmDelegation): _188.MsgConfirmDelegationAmino;
            fromAminoMsg(object: _188.MsgConfirmDelegationAminoMsg): _188.MsgConfirmDelegation;
            toAminoMsg(message: _188.MsgConfirmDelegation): _188.MsgConfirmDelegationAminoMsg;
            fromProtoMsg(message: _188.MsgConfirmDelegationProtoMsg): _188.MsgConfirmDelegation;
            toProto(message: _188.MsgConfirmDelegation): Uint8Array;
            toProtoMsg(message: _188.MsgConfirmDelegation): _188.MsgConfirmDelegationProtoMsg;
        };
        MsgConfirmDelegationResponse: {
            typeUrl: string;
            encode(_: _188.MsgConfirmDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.MsgConfirmDelegationResponse;
            fromPartial(_: Partial<_188.MsgConfirmDelegationResponse>): _188.MsgConfirmDelegationResponse;
            fromAmino(_: _188.MsgConfirmDelegationResponseAmino): _188.MsgConfirmDelegationResponse;
            toAmino(_: _188.MsgConfirmDelegationResponse): _188.MsgConfirmDelegationResponseAmino;
            fromAminoMsg(object: _188.MsgConfirmDelegationResponseAminoMsg): _188.MsgConfirmDelegationResponse;
            fromProtoMsg(message: _188.MsgConfirmDelegationResponseProtoMsg): _188.MsgConfirmDelegationResponse;
            toProto(message: _188.MsgConfirmDelegationResponse): Uint8Array;
            toProtoMsg(message: _188.MsgConfirmDelegationResponse): _188.MsgConfirmDelegationResponseProtoMsg;
        };
        MsgConfirmUndelegation: {
            typeUrl: string;
            encode(message: _188.MsgConfirmUndelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.MsgConfirmUndelegation;
            fromPartial(object: Partial<_188.MsgConfirmUndelegation>): _188.MsgConfirmUndelegation;
            fromAmino(object: _188.MsgConfirmUndelegationAmino): _188.MsgConfirmUndelegation;
            toAmino(message: _188.MsgConfirmUndelegation): _188.MsgConfirmUndelegationAmino;
            fromAminoMsg(object: _188.MsgConfirmUndelegationAminoMsg): _188.MsgConfirmUndelegation;
            toAminoMsg(message: _188.MsgConfirmUndelegation): _188.MsgConfirmUndelegationAminoMsg;
            fromProtoMsg(message: _188.MsgConfirmUndelegationProtoMsg): _188.MsgConfirmUndelegation;
            toProto(message: _188.MsgConfirmUndelegation): Uint8Array;
            toProtoMsg(message: _188.MsgConfirmUndelegation): _188.MsgConfirmUndelegationProtoMsg;
        };
        MsgConfirmUndelegationResponse: {
            typeUrl: string;
            encode(_: _188.MsgConfirmUndelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.MsgConfirmUndelegationResponse;
            fromPartial(_: Partial<_188.MsgConfirmUndelegationResponse>): _188.MsgConfirmUndelegationResponse;
            fromAmino(_: _188.MsgConfirmUndelegationResponseAmino): _188.MsgConfirmUndelegationResponse;
            toAmino(_: _188.MsgConfirmUndelegationResponse): _188.MsgConfirmUndelegationResponseAmino;
            fromAminoMsg(object: _188.MsgConfirmUndelegationResponseAminoMsg): _188.MsgConfirmUndelegationResponse;
            fromProtoMsg(message: _188.MsgConfirmUndelegationResponseProtoMsg): _188.MsgConfirmUndelegationResponse;
            toProto(message: _188.MsgConfirmUndelegationResponse): Uint8Array;
            toProtoMsg(message: _188.MsgConfirmUndelegationResponse): _188.MsgConfirmUndelegationResponseProtoMsg;
        };
        MsgConfirmUnbondedTokenSweep: {
            typeUrl: string;
            encode(message: _188.MsgConfirmUnbondedTokenSweep, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.MsgConfirmUnbondedTokenSweep;
            fromPartial(object: Partial<_188.MsgConfirmUnbondedTokenSweep>): _188.MsgConfirmUnbondedTokenSweep;
            fromAmino(object: _188.MsgConfirmUnbondedTokenSweepAmino): _188.MsgConfirmUnbondedTokenSweep;
            toAmino(message: _188.MsgConfirmUnbondedTokenSweep): _188.MsgConfirmUnbondedTokenSweepAmino;
            fromAminoMsg(object: _188.MsgConfirmUnbondedTokenSweepAminoMsg): _188.MsgConfirmUnbondedTokenSweep;
            toAminoMsg(message: _188.MsgConfirmUnbondedTokenSweep): _188.MsgConfirmUnbondedTokenSweepAminoMsg;
            fromProtoMsg(message: _188.MsgConfirmUnbondedTokenSweepProtoMsg): _188.MsgConfirmUnbondedTokenSweep;
            toProto(message: _188.MsgConfirmUnbondedTokenSweep): Uint8Array;
            toProtoMsg(message: _188.MsgConfirmUnbondedTokenSweep): _188.MsgConfirmUnbondedTokenSweepProtoMsg;
        };
        MsgConfirmUnbondedTokenSweepResponse: {
            typeUrl: string;
            encode(_: _188.MsgConfirmUnbondedTokenSweepResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.MsgConfirmUnbondedTokenSweepResponse;
            fromPartial(_: Partial<_188.MsgConfirmUnbondedTokenSweepResponse>): _188.MsgConfirmUnbondedTokenSweepResponse;
            fromAmino(_: _188.MsgConfirmUnbondedTokenSweepResponseAmino): _188.MsgConfirmUnbondedTokenSweepResponse;
            toAmino(_: _188.MsgConfirmUnbondedTokenSweepResponse): _188.MsgConfirmUnbondedTokenSweepResponseAmino;
            fromAminoMsg(object: _188.MsgConfirmUnbondedTokenSweepResponseAminoMsg): _188.MsgConfirmUnbondedTokenSweepResponse;
            fromProtoMsg(message: _188.MsgConfirmUnbondedTokenSweepResponseProtoMsg): _188.MsgConfirmUnbondedTokenSweepResponse;
            toProto(message: _188.MsgConfirmUnbondedTokenSweepResponse): Uint8Array;
            toProtoMsg(message: _188.MsgConfirmUnbondedTokenSweepResponse): _188.MsgConfirmUnbondedTokenSweepResponseProtoMsg;
        };
        MsgAdjustDelegatedBalance: {
            typeUrl: string;
            encode(message: _188.MsgAdjustDelegatedBalance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.MsgAdjustDelegatedBalance;
            fromPartial(object: Partial<_188.MsgAdjustDelegatedBalance>): _188.MsgAdjustDelegatedBalance;
            fromAmino(object: _188.MsgAdjustDelegatedBalanceAmino): _188.MsgAdjustDelegatedBalance;
            toAmino(message: _188.MsgAdjustDelegatedBalance): _188.MsgAdjustDelegatedBalanceAmino;
            fromAminoMsg(object: _188.MsgAdjustDelegatedBalanceAminoMsg): _188.MsgAdjustDelegatedBalance;
            toAminoMsg(message: _188.MsgAdjustDelegatedBalance): _188.MsgAdjustDelegatedBalanceAminoMsg;
            fromProtoMsg(message: _188.MsgAdjustDelegatedBalanceProtoMsg): _188.MsgAdjustDelegatedBalance;
            toProto(message: _188.MsgAdjustDelegatedBalance): Uint8Array;
            toProtoMsg(message: _188.MsgAdjustDelegatedBalance): _188.MsgAdjustDelegatedBalanceProtoMsg;
        };
        MsgAdjustDelegatedBalanceResponse: {
            typeUrl: string;
            encode(_: _188.MsgAdjustDelegatedBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.MsgAdjustDelegatedBalanceResponse;
            fromPartial(_: Partial<_188.MsgAdjustDelegatedBalanceResponse>): _188.MsgAdjustDelegatedBalanceResponse;
            fromAmino(_: _188.MsgAdjustDelegatedBalanceResponseAmino): _188.MsgAdjustDelegatedBalanceResponse;
            toAmino(_: _188.MsgAdjustDelegatedBalanceResponse): _188.MsgAdjustDelegatedBalanceResponseAmino;
            fromAminoMsg(object: _188.MsgAdjustDelegatedBalanceResponseAminoMsg): _188.MsgAdjustDelegatedBalanceResponse;
            fromProtoMsg(message: _188.MsgAdjustDelegatedBalanceResponseProtoMsg): _188.MsgAdjustDelegatedBalanceResponse;
            toProto(message: _188.MsgAdjustDelegatedBalanceResponse): Uint8Array;
            toProtoMsg(message: _188.MsgAdjustDelegatedBalanceResponse): _188.MsgAdjustDelegatedBalanceResponseProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBounds: {
            typeUrl: string;
            encode(message: _188.MsgUpdateInnerRedemptionRateBounds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.MsgUpdateInnerRedemptionRateBounds;
            fromPartial(object: Partial<_188.MsgUpdateInnerRedemptionRateBounds>): _188.MsgUpdateInnerRedemptionRateBounds;
            fromAmino(object: _188.MsgUpdateInnerRedemptionRateBoundsAmino): _188.MsgUpdateInnerRedemptionRateBounds;
            toAmino(message: _188.MsgUpdateInnerRedemptionRateBounds): _188.MsgUpdateInnerRedemptionRateBoundsAmino;
            fromAminoMsg(object: _188.MsgUpdateInnerRedemptionRateBoundsAminoMsg): _188.MsgUpdateInnerRedemptionRateBounds;
            toAminoMsg(message: _188.MsgUpdateInnerRedemptionRateBounds): _188.MsgUpdateInnerRedemptionRateBoundsAminoMsg;
            fromProtoMsg(message: _188.MsgUpdateInnerRedemptionRateBoundsProtoMsg): _188.MsgUpdateInnerRedemptionRateBounds;
            toProto(message: _188.MsgUpdateInnerRedemptionRateBounds): Uint8Array;
            toProtoMsg(message: _188.MsgUpdateInnerRedemptionRateBounds): _188.MsgUpdateInnerRedemptionRateBoundsProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBoundsResponse: {
            typeUrl: string;
            encode(_: _188.MsgUpdateInnerRedemptionRateBoundsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromPartial(_: Partial<_188.MsgUpdateInnerRedemptionRateBoundsResponse>): _188.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromAmino(_: _188.MsgUpdateInnerRedemptionRateBoundsResponseAmino): _188.MsgUpdateInnerRedemptionRateBoundsResponse;
            toAmino(_: _188.MsgUpdateInnerRedemptionRateBoundsResponse): _188.MsgUpdateInnerRedemptionRateBoundsResponseAmino;
            fromAminoMsg(object: _188.MsgUpdateInnerRedemptionRateBoundsResponseAminoMsg): _188.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromProtoMsg(message: _188.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg): _188.MsgUpdateInnerRedemptionRateBoundsResponse;
            toProto(message: _188.MsgUpdateInnerRedemptionRateBoundsResponse): Uint8Array;
            toProtoMsg(message: _188.MsgUpdateInnerRedemptionRateBoundsResponse): _188.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg;
        };
        MsgResumeHostZone: {
            typeUrl: string;
            encode(message: _188.MsgResumeHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.MsgResumeHostZone;
            fromPartial(object: Partial<_188.MsgResumeHostZone>): _188.MsgResumeHostZone;
            fromAmino(object: _188.MsgResumeHostZoneAmino): _188.MsgResumeHostZone;
            toAmino(message: _188.MsgResumeHostZone): _188.MsgResumeHostZoneAmino;
            fromAminoMsg(object: _188.MsgResumeHostZoneAminoMsg): _188.MsgResumeHostZone;
            toAminoMsg(message: _188.MsgResumeHostZone): _188.MsgResumeHostZoneAminoMsg;
            fromProtoMsg(message: _188.MsgResumeHostZoneProtoMsg): _188.MsgResumeHostZone;
            toProto(message: _188.MsgResumeHostZone): Uint8Array;
            toProtoMsg(message: _188.MsgResumeHostZone): _188.MsgResumeHostZoneProtoMsg;
        };
        MsgResumeHostZoneResponse: {
            typeUrl: string;
            encode(_: _188.MsgResumeHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.MsgResumeHostZoneResponse;
            fromPartial(_: Partial<_188.MsgResumeHostZoneResponse>): _188.MsgResumeHostZoneResponse;
            fromAmino(_: _188.MsgResumeHostZoneResponseAmino): _188.MsgResumeHostZoneResponse;
            toAmino(_: _188.MsgResumeHostZoneResponse): _188.MsgResumeHostZoneResponseAmino;
            fromAminoMsg(object: _188.MsgResumeHostZoneResponseAminoMsg): _188.MsgResumeHostZoneResponse;
            fromProtoMsg(message: _188.MsgResumeHostZoneResponseProtoMsg): _188.MsgResumeHostZoneResponse;
            toProto(message: _188.MsgResumeHostZoneResponse): Uint8Array;
            toProtoMsg(message: _188.MsgResumeHostZoneResponse): _188.MsgResumeHostZoneResponseProtoMsg;
        };
        MsgRefreshRedemptionRate: {
            typeUrl: string;
            encode(message: _188.MsgRefreshRedemptionRate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.MsgRefreshRedemptionRate;
            fromPartial(object: Partial<_188.MsgRefreshRedemptionRate>): _188.MsgRefreshRedemptionRate;
            fromAmino(object: _188.MsgRefreshRedemptionRateAmino): _188.MsgRefreshRedemptionRate;
            toAmino(message: _188.MsgRefreshRedemptionRate): _188.MsgRefreshRedemptionRateAmino;
            fromAminoMsg(object: _188.MsgRefreshRedemptionRateAminoMsg): _188.MsgRefreshRedemptionRate;
            toAminoMsg(message: _188.MsgRefreshRedemptionRate): _188.MsgRefreshRedemptionRateAminoMsg;
            fromProtoMsg(message: _188.MsgRefreshRedemptionRateProtoMsg): _188.MsgRefreshRedemptionRate;
            toProto(message: _188.MsgRefreshRedemptionRate): Uint8Array;
            toProtoMsg(message: _188.MsgRefreshRedemptionRate): _188.MsgRefreshRedemptionRateProtoMsg;
        };
        MsgRefreshRedemptionRateResponse: {
            typeUrl: string;
            encode(_: _188.MsgRefreshRedemptionRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.MsgRefreshRedemptionRateResponse;
            fromPartial(_: Partial<_188.MsgRefreshRedemptionRateResponse>): _188.MsgRefreshRedemptionRateResponse;
            fromAmino(_: _188.MsgRefreshRedemptionRateResponseAmino): _188.MsgRefreshRedemptionRateResponse;
            toAmino(_: _188.MsgRefreshRedemptionRateResponse): _188.MsgRefreshRedemptionRateResponseAmino;
            fromAminoMsg(object: _188.MsgRefreshRedemptionRateResponseAminoMsg): _188.MsgRefreshRedemptionRateResponse;
            fromProtoMsg(message: _188.MsgRefreshRedemptionRateResponseProtoMsg): _188.MsgRefreshRedemptionRateResponse;
            toProto(message: _188.MsgRefreshRedemptionRateResponse): Uint8Array;
            toProtoMsg(message: _188.MsgRefreshRedemptionRateResponse): _188.MsgRefreshRedemptionRateResponseProtoMsg;
        };
        MsgOverwriteDelegationRecord: {
            typeUrl: string;
            encode(message: _188.MsgOverwriteDelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.MsgOverwriteDelegationRecord;
            fromPartial(object: Partial<_188.MsgOverwriteDelegationRecord>): _188.MsgOverwriteDelegationRecord;
            fromAmino(object: _188.MsgOverwriteDelegationRecordAmino): _188.MsgOverwriteDelegationRecord;
            toAmino(message: _188.MsgOverwriteDelegationRecord): _188.MsgOverwriteDelegationRecordAmino;
            fromAminoMsg(object: _188.MsgOverwriteDelegationRecordAminoMsg): _188.MsgOverwriteDelegationRecord;
            toAminoMsg(message: _188.MsgOverwriteDelegationRecord): _188.MsgOverwriteDelegationRecordAminoMsg;
            fromProtoMsg(message: _188.MsgOverwriteDelegationRecordProtoMsg): _188.MsgOverwriteDelegationRecord;
            toProto(message: _188.MsgOverwriteDelegationRecord): Uint8Array;
            toProtoMsg(message: _188.MsgOverwriteDelegationRecord): _188.MsgOverwriteDelegationRecordProtoMsg;
        };
        MsgOverwriteDelegationRecordResponse: {
            typeUrl: string;
            encode(_: _188.MsgOverwriteDelegationRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.MsgOverwriteDelegationRecordResponse;
            fromPartial(_: Partial<_188.MsgOverwriteDelegationRecordResponse>): _188.MsgOverwriteDelegationRecordResponse;
            fromAmino(_: _188.MsgOverwriteDelegationRecordResponseAmino): _188.MsgOverwriteDelegationRecordResponse;
            toAmino(_: _188.MsgOverwriteDelegationRecordResponse): _188.MsgOverwriteDelegationRecordResponseAmino;
            fromAminoMsg(object: _188.MsgOverwriteDelegationRecordResponseAminoMsg): _188.MsgOverwriteDelegationRecordResponse;
            fromProtoMsg(message: _188.MsgOverwriteDelegationRecordResponseProtoMsg): _188.MsgOverwriteDelegationRecordResponse;
            toProto(message: _188.MsgOverwriteDelegationRecordResponse): Uint8Array;
            toProtoMsg(message: _188.MsgOverwriteDelegationRecordResponse): _188.MsgOverwriteDelegationRecordResponseProtoMsg;
        };
        MsgOverwriteUnbondingRecord: {
            typeUrl: string;
            encode(message: _188.MsgOverwriteUnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.MsgOverwriteUnbondingRecord;
            fromPartial(object: Partial<_188.MsgOverwriteUnbondingRecord>): _188.MsgOverwriteUnbondingRecord;
            fromAmino(object: _188.MsgOverwriteUnbondingRecordAmino): _188.MsgOverwriteUnbondingRecord;
            toAmino(message: _188.MsgOverwriteUnbondingRecord): _188.MsgOverwriteUnbondingRecordAmino;
            fromAminoMsg(object: _188.MsgOverwriteUnbondingRecordAminoMsg): _188.MsgOverwriteUnbondingRecord;
            toAminoMsg(message: _188.MsgOverwriteUnbondingRecord): _188.MsgOverwriteUnbondingRecordAminoMsg;
            fromProtoMsg(message: _188.MsgOverwriteUnbondingRecordProtoMsg): _188.MsgOverwriteUnbondingRecord;
            toProto(message: _188.MsgOverwriteUnbondingRecord): Uint8Array;
            toProtoMsg(message: _188.MsgOverwriteUnbondingRecord): _188.MsgOverwriteUnbondingRecordProtoMsg;
        };
        MsgOverwriteUnbondingRecordResponse: {
            typeUrl: string;
            encode(_: _188.MsgOverwriteUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.MsgOverwriteUnbondingRecordResponse;
            fromPartial(_: Partial<_188.MsgOverwriteUnbondingRecordResponse>): _188.MsgOverwriteUnbondingRecordResponse;
            fromAmino(_: _188.MsgOverwriteUnbondingRecordResponseAmino): _188.MsgOverwriteUnbondingRecordResponse;
            toAmino(_: _188.MsgOverwriteUnbondingRecordResponse): _188.MsgOverwriteUnbondingRecordResponseAmino;
            fromAminoMsg(object: _188.MsgOverwriteUnbondingRecordResponseAminoMsg): _188.MsgOverwriteUnbondingRecordResponse;
            fromProtoMsg(message: _188.MsgOverwriteUnbondingRecordResponseProtoMsg): _188.MsgOverwriteUnbondingRecordResponse;
            toProto(message: _188.MsgOverwriteUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _188.MsgOverwriteUnbondingRecordResponse): _188.MsgOverwriteUnbondingRecordResponseProtoMsg;
        };
        MsgOverwriteRedemptionRecord: {
            typeUrl: string;
            encode(message: _188.MsgOverwriteRedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.MsgOverwriteRedemptionRecord;
            fromPartial(object: Partial<_188.MsgOverwriteRedemptionRecord>): _188.MsgOverwriteRedemptionRecord;
            fromAmino(object: _188.MsgOverwriteRedemptionRecordAmino): _188.MsgOverwriteRedemptionRecord;
            toAmino(message: _188.MsgOverwriteRedemptionRecord): _188.MsgOverwriteRedemptionRecordAmino;
            fromAminoMsg(object: _188.MsgOverwriteRedemptionRecordAminoMsg): _188.MsgOverwriteRedemptionRecord;
            toAminoMsg(message: _188.MsgOverwriteRedemptionRecord): _188.MsgOverwriteRedemptionRecordAminoMsg;
            fromProtoMsg(message: _188.MsgOverwriteRedemptionRecordProtoMsg): _188.MsgOverwriteRedemptionRecord;
            toProto(message: _188.MsgOverwriteRedemptionRecord): Uint8Array;
            toProtoMsg(message: _188.MsgOverwriteRedemptionRecord): _188.MsgOverwriteRedemptionRecordProtoMsg;
        };
        MsgOverwriteRedemptionRecordResponse: {
            typeUrl: string;
            encode(_: _188.MsgOverwriteRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.MsgOverwriteRedemptionRecordResponse;
            fromPartial(_: Partial<_188.MsgOverwriteRedemptionRecordResponse>): _188.MsgOverwriteRedemptionRecordResponse;
            fromAmino(_: _188.MsgOverwriteRedemptionRecordResponseAmino): _188.MsgOverwriteRedemptionRecordResponse;
            toAmino(_: _188.MsgOverwriteRedemptionRecordResponse): _188.MsgOverwriteRedemptionRecordResponseAmino;
            fromAminoMsg(object: _188.MsgOverwriteRedemptionRecordResponseAminoMsg): _188.MsgOverwriteRedemptionRecordResponse;
            fromProtoMsg(message: _188.MsgOverwriteRedemptionRecordResponseProtoMsg): _188.MsgOverwriteRedemptionRecordResponse;
            toProto(message: _188.MsgOverwriteRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _188.MsgOverwriteRedemptionRecordResponse): _188.MsgOverwriteRedemptionRecordResponseProtoMsg;
        };
        MsgSetOperatorAddress: {
            typeUrl: string;
            encode(message: _188.MsgSetOperatorAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.MsgSetOperatorAddress;
            fromPartial(object: Partial<_188.MsgSetOperatorAddress>): _188.MsgSetOperatorAddress;
            fromAmino(object: _188.MsgSetOperatorAddressAmino): _188.MsgSetOperatorAddress;
            toAmino(message: _188.MsgSetOperatorAddress): _188.MsgSetOperatorAddressAmino;
            fromAminoMsg(object: _188.MsgSetOperatorAddressAminoMsg): _188.MsgSetOperatorAddress;
            toAminoMsg(message: _188.MsgSetOperatorAddress): _188.MsgSetOperatorAddressAminoMsg;
            fromProtoMsg(message: _188.MsgSetOperatorAddressProtoMsg): _188.MsgSetOperatorAddress;
            toProto(message: _188.MsgSetOperatorAddress): Uint8Array;
            toProtoMsg(message: _188.MsgSetOperatorAddress): _188.MsgSetOperatorAddressProtoMsg;
        };
        MsgSetOperatorAddressResponse: {
            typeUrl: string;
            encode(_: _188.MsgSetOperatorAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.MsgSetOperatorAddressResponse;
            fromPartial(_: Partial<_188.MsgSetOperatorAddressResponse>): _188.MsgSetOperatorAddressResponse;
            fromAmino(_: _188.MsgSetOperatorAddressResponseAmino): _188.MsgSetOperatorAddressResponse;
            toAmino(_: _188.MsgSetOperatorAddressResponse): _188.MsgSetOperatorAddressResponseAmino;
            fromAminoMsg(object: _188.MsgSetOperatorAddressResponseAminoMsg): _188.MsgSetOperatorAddressResponse;
            fromProtoMsg(message: _188.MsgSetOperatorAddressResponseProtoMsg): _188.MsgSetOperatorAddressResponse;
            toProto(message: _188.MsgSetOperatorAddressResponse): Uint8Array;
            toProtoMsg(message: _188.MsgSetOperatorAddressResponse): _188.MsgSetOperatorAddressResponseProtoMsg;
        };
        delegationRecordStatusFromJSON(object: any): _187.DelegationRecordStatus;
        delegationRecordStatusToJSON(object: _187.DelegationRecordStatus): string;
        unbondingRecordStatusFromJSON(object: any): _187.UnbondingRecordStatus;
        unbondingRecordStatusToJSON(object: _187.UnbondingRecordStatus): string;
        DelegationRecordStatus: typeof _187.DelegationRecordStatus;
        DelegationRecordStatusSDKType: typeof _187.DelegationRecordStatus;
        DelegationRecordStatusAmino: typeof _187.DelegationRecordStatus;
        UnbondingRecordStatus: typeof _187.UnbondingRecordStatus;
        UnbondingRecordStatusSDKType: typeof _187.UnbondingRecordStatus;
        UnbondingRecordStatusAmino: typeof _187.UnbondingRecordStatus;
        HostZone: {
            typeUrl: string;
            encode(message: _187.HostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.HostZone;
            fromPartial(object: Partial<_187.HostZone>): _187.HostZone;
            fromAmino(object: _187.HostZoneAmino): _187.HostZone;
            toAmino(message: _187.HostZone): _187.HostZoneAmino;
            fromAminoMsg(object: _187.HostZoneAminoMsg): _187.HostZone;
            fromProtoMsg(message: _187.HostZoneProtoMsg): _187.HostZone;
            toProto(message: _187.HostZone): Uint8Array;
            toProtoMsg(message: _187.HostZone): _187.HostZoneProtoMsg;
        };
        DelegationRecord: {
            typeUrl: string;
            encode(message: _187.DelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.DelegationRecord;
            fromPartial(object: Partial<_187.DelegationRecord>): _187.DelegationRecord;
            fromAmino(object: _187.DelegationRecordAmino): _187.DelegationRecord;
            toAmino(message: _187.DelegationRecord): _187.DelegationRecordAmino;
            fromAminoMsg(object: _187.DelegationRecordAminoMsg): _187.DelegationRecord;
            fromProtoMsg(message: _187.DelegationRecordProtoMsg): _187.DelegationRecord;
            toProto(message: _187.DelegationRecord): Uint8Array;
            toProtoMsg(message: _187.DelegationRecord): _187.DelegationRecordProtoMsg;
        };
        UnbondingRecord: {
            typeUrl: string;
            encode(message: _187.UnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.UnbondingRecord;
            fromPartial(object: Partial<_187.UnbondingRecord>): _187.UnbondingRecord;
            fromAmino(object: _187.UnbondingRecordAmino): _187.UnbondingRecord;
            toAmino(message: _187.UnbondingRecord): _187.UnbondingRecordAmino;
            fromAminoMsg(object: _187.UnbondingRecordAminoMsg): _187.UnbondingRecord;
            fromProtoMsg(message: _187.UnbondingRecordProtoMsg): _187.UnbondingRecord;
            toProto(message: _187.UnbondingRecord): Uint8Array;
            toProtoMsg(message: _187.UnbondingRecord): _187.UnbondingRecordProtoMsg;
        };
        RedemptionRecord: {
            typeUrl: string;
            encode(message: _187.RedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.RedemptionRecord;
            fromPartial(object: Partial<_187.RedemptionRecord>): _187.RedemptionRecord;
            fromAmino(object: _187.RedemptionRecordAmino): _187.RedemptionRecord;
            toAmino(message: _187.RedemptionRecord): _187.RedemptionRecordAmino;
            fromAminoMsg(object: _187.RedemptionRecordAminoMsg): _187.RedemptionRecord;
            fromProtoMsg(message: _187.RedemptionRecordProtoMsg): _187.RedemptionRecord;
            toProto(message: _187.RedemptionRecord): Uint8Array;
            toProtoMsg(message: _187.RedemptionRecord): _187.RedemptionRecordProtoMsg;
        };
        SlashRecord: {
            typeUrl: string;
            encode(message: _187.SlashRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.SlashRecord;
            fromPartial(object: Partial<_187.SlashRecord>): _187.SlashRecord;
            fromAmino(object: _187.SlashRecordAmino): _187.SlashRecord;
            toAmino(message: _187.SlashRecord): _187.SlashRecordAmino;
            fromAminoMsg(object: _187.SlashRecordAminoMsg): _187.SlashRecord;
            fromProtoMsg(message: _187.SlashRecordProtoMsg): _187.SlashRecord;
            toProto(message: _187.SlashRecord): Uint8Array;
            toProtoMsg(message: _187.SlashRecord): _187.SlashRecordProtoMsg;
        };
        QueryHostZoneRequest: {
            typeUrl: string;
            encode(_: _186.QueryHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.QueryHostZoneRequest;
            fromPartial(_: Partial<_186.QueryHostZoneRequest>): _186.QueryHostZoneRequest;
            fromAmino(_: _186.QueryHostZoneRequestAmino): _186.QueryHostZoneRequest;
            toAmino(_: _186.QueryHostZoneRequest): _186.QueryHostZoneRequestAmino;
            fromAminoMsg(object: _186.QueryHostZoneRequestAminoMsg): _186.QueryHostZoneRequest;
            fromProtoMsg(message: _186.QueryHostZoneRequestProtoMsg): _186.QueryHostZoneRequest;
            toProto(message: _186.QueryHostZoneRequest): Uint8Array;
            toProtoMsg(message: _186.QueryHostZoneRequest): _186.QueryHostZoneRequestProtoMsg;
        };
        QueryHostZoneResponse: {
            typeUrl: string;
            encode(message: _186.QueryHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.QueryHostZoneResponse;
            fromPartial(object: Partial<_186.QueryHostZoneResponse>): _186.QueryHostZoneResponse;
            fromAmino(object: _186.QueryHostZoneResponseAmino): _186.QueryHostZoneResponse;
            toAmino(message: _186.QueryHostZoneResponse): _186.QueryHostZoneResponseAmino;
            fromAminoMsg(object: _186.QueryHostZoneResponseAminoMsg): _186.QueryHostZoneResponse;
            fromProtoMsg(message: _186.QueryHostZoneResponseProtoMsg): _186.QueryHostZoneResponse;
            toProto(message: _186.QueryHostZoneResponse): Uint8Array;
            toProtoMsg(message: _186.QueryHostZoneResponse): _186.QueryHostZoneResponseProtoMsg;
        };
        QueryDelegationRecordsRequest: {
            typeUrl: string;
            encode(message: _186.QueryDelegationRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.QueryDelegationRecordsRequest;
            fromPartial(object: Partial<_186.QueryDelegationRecordsRequest>): _186.QueryDelegationRecordsRequest;
            fromAmino(object: _186.QueryDelegationRecordsRequestAmino): _186.QueryDelegationRecordsRequest;
            toAmino(message: _186.QueryDelegationRecordsRequest): _186.QueryDelegationRecordsRequestAmino;
            fromAminoMsg(object: _186.QueryDelegationRecordsRequestAminoMsg): _186.QueryDelegationRecordsRequest;
            fromProtoMsg(message: _186.QueryDelegationRecordsRequestProtoMsg): _186.QueryDelegationRecordsRequest;
            toProto(message: _186.QueryDelegationRecordsRequest): Uint8Array;
            toProtoMsg(message: _186.QueryDelegationRecordsRequest): _186.QueryDelegationRecordsRequestProtoMsg;
        };
        QueryDelegationRecordsResponse: {
            typeUrl: string;
            encode(message: _186.QueryDelegationRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.QueryDelegationRecordsResponse;
            fromPartial(object: Partial<_186.QueryDelegationRecordsResponse>): _186.QueryDelegationRecordsResponse;
            fromAmino(object: _186.QueryDelegationRecordsResponseAmino): _186.QueryDelegationRecordsResponse;
            toAmino(message: _186.QueryDelegationRecordsResponse): _186.QueryDelegationRecordsResponseAmino;
            fromAminoMsg(object: _186.QueryDelegationRecordsResponseAminoMsg): _186.QueryDelegationRecordsResponse;
            fromProtoMsg(message: _186.QueryDelegationRecordsResponseProtoMsg): _186.QueryDelegationRecordsResponse;
            toProto(message: _186.QueryDelegationRecordsResponse): Uint8Array;
            toProtoMsg(message: _186.QueryDelegationRecordsResponse): _186.QueryDelegationRecordsResponseProtoMsg;
        };
        QueryUnbondingRecordsRequest: {
            typeUrl: string;
            encode(message: _186.QueryUnbondingRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.QueryUnbondingRecordsRequest;
            fromPartial(object: Partial<_186.QueryUnbondingRecordsRequest>): _186.QueryUnbondingRecordsRequest;
            fromAmino(object: _186.QueryUnbondingRecordsRequestAmino): _186.QueryUnbondingRecordsRequest;
            toAmino(message: _186.QueryUnbondingRecordsRequest): _186.QueryUnbondingRecordsRequestAmino;
            fromAminoMsg(object: _186.QueryUnbondingRecordsRequestAminoMsg): _186.QueryUnbondingRecordsRequest;
            fromProtoMsg(message: _186.QueryUnbondingRecordsRequestProtoMsg): _186.QueryUnbondingRecordsRequest;
            toProto(message: _186.QueryUnbondingRecordsRequest): Uint8Array;
            toProtoMsg(message: _186.QueryUnbondingRecordsRequest): _186.QueryUnbondingRecordsRequestProtoMsg;
        };
        QueryUnbondingRecordsResponse: {
            typeUrl: string;
            encode(message: _186.QueryUnbondingRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.QueryUnbondingRecordsResponse;
            fromPartial(object: Partial<_186.QueryUnbondingRecordsResponse>): _186.QueryUnbondingRecordsResponse;
            fromAmino(object: _186.QueryUnbondingRecordsResponseAmino): _186.QueryUnbondingRecordsResponse;
            toAmino(message: _186.QueryUnbondingRecordsResponse): _186.QueryUnbondingRecordsResponseAmino;
            fromAminoMsg(object: _186.QueryUnbondingRecordsResponseAminoMsg): _186.QueryUnbondingRecordsResponse;
            fromProtoMsg(message: _186.QueryUnbondingRecordsResponseProtoMsg): _186.QueryUnbondingRecordsResponse;
            toProto(message: _186.QueryUnbondingRecordsResponse): Uint8Array;
            toProtoMsg(message: _186.QueryUnbondingRecordsResponse): _186.QueryUnbondingRecordsResponseProtoMsg;
        };
        QueryRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _186.QueryRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.QueryRedemptionRecordRequest;
            fromPartial(object: Partial<_186.QueryRedemptionRecordRequest>): _186.QueryRedemptionRecordRequest;
            fromAmino(object: _186.QueryRedemptionRecordRequestAmino): _186.QueryRedemptionRecordRequest;
            toAmino(message: _186.QueryRedemptionRecordRequest): _186.QueryRedemptionRecordRequestAmino;
            fromAminoMsg(object: _186.QueryRedemptionRecordRequestAminoMsg): _186.QueryRedemptionRecordRequest;
            fromProtoMsg(message: _186.QueryRedemptionRecordRequestProtoMsg): _186.QueryRedemptionRecordRequest;
            toProto(message: _186.QueryRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _186.QueryRedemptionRecordRequest): _186.QueryRedemptionRecordRequestProtoMsg;
        };
        QueryRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _186.QueryRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.QueryRedemptionRecordResponse;
            fromPartial(object: Partial<_186.QueryRedemptionRecordResponse>): _186.QueryRedemptionRecordResponse;
            fromAmino(object: _186.QueryRedemptionRecordResponseAmino): _186.QueryRedemptionRecordResponse;
            toAmino(message: _186.QueryRedemptionRecordResponse): _186.QueryRedemptionRecordResponseAmino;
            fromAminoMsg(object: _186.QueryRedemptionRecordResponseAminoMsg): _186.QueryRedemptionRecordResponse;
            fromProtoMsg(message: _186.QueryRedemptionRecordResponseProtoMsg): _186.QueryRedemptionRecordResponse;
            toProto(message: _186.QueryRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _186.QueryRedemptionRecordResponse): _186.QueryRedemptionRecordResponseProtoMsg;
        };
        QueryRedemptionRecordsRequest: {
            typeUrl: string;
            encode(message: _186.QueryRedemptionRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.QueryRedemptionRecordsRequest;
            fromPartial(object: Partial<_186.QueryRedemptionRecordsRequest>): _186.QueryRedemptionRecordsRequest;
            fromAmino(object: _186.QueryRedemptionRecordsRequestAmino): _186.QueryRedemptionRecordsRequest;
            toAmino(message: _186.QueryRedemptionRecordsRequest): _186.QueryRedemptionRecordsRequestAmino;
            fromAminoMsg(object: _186.QueryRedemptionRecordsRequestAminoMsg): _186.QueryRedemptionRecordsRequest;
            fromProtoMsg(message: _186.QueryRedemptionRecordsRequestProtoMsg): _186.QueryRedemptionRecordsRequest;
            toProto(message: _186.QueryRedemptionRecordsRequest): Uint8Array;
            toProtoMsg(message: _186.QueryRedemptionRecordsRequest): _186.QueryRedemptionRecordsRequestProtoMsg;
        };
        QueryRedemptionRecordsResponse: {
            typeUrl: string;
            encode(message: _186.QueryRedemptionRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.QueryRedemptionRecordsResponse;
            fromPartial(object: Partial<_186.QueryRedemptionRecordsResponse>): _186.QueryRedemptionRecordsResponse;
            fromAmino(object: _186.QueryRedemptionRecordsResponseAmino): _186.QueryRedemptionRecordsResponse;
            toAmino(message: _186.QueryRedemptionRecordsResponse): _186.QueryRedemptionRecordsResponseAmino;
            fromAminoMsg(object: _186.QueryRedemptionRecordsResponseAminoMsg): _186.QueryRedemptionRecordsResponse;
            fromProtoMsg(message: _186.QueryRedemptionRecordsResponseProtoMsg): _186.QueryRedemptionRecordsResponse;
            toProto(message: _186.QueryRedemptionRecordsResponse): Uint8Array;
            toProtoMsg(message: _186.QueryRedemptionRecordsResponse): _186.QueryRedemptionRecordsResponseProtoMsg;
        };
        QuerySlashRecordsRequest: {
            typeUrl: string;
            encode(_: _186.QuerySlashRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.QuerySlashRecordsRequest;
            fromPartial(_: Partial<_186.QuerySlashRecordsRequest>): _186.QuerySlashRecordsRequest;
            fromAmino(_: _186.QuerySlashRecordsRequestAmino): _186.QuerySlashRecordsRequest;
            toAmino(_: _186.QuerySlashRecordsRequest): _186.QuerySlashRecordsRequestAmino;
            fromAminoMsg(object: _186.QuerySlashRecordsRequestAminoMsg): _186.QuerySlashRecordsRequest;
            fromProtoMsg(message: _186.QuerySlashRecordsRequestProtoMsg): _186.QuerySlashRecordsRequest;
            toProto(message: _186.QuerySlashRecordsRequest): Uint8Array;
            toProtoMsg(message: _186.QuerySlashRecordsRequest): _186.QuerySlashRecordsRequestProtoMsg;
        };
        QuerySlashRecordsResponse: {
            typeUrl: string;
            encode(message: _186.QuerySlashRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.QuerySlashRecordsResponse;
            fromPartial(object: Partial<_186.QuerySlashRecordsResponse>): _186.QuerySlashRecordsResponse;
            fromAmino(object: _186.QuerySlashRecordsResponseAmino): _186.QuerySlashRecordsResponse;
            toAmino(message: _186.QuerySlashRecordsResponse): _186.QuerySlashRecordsResponseAmino;
            fromAminoMsg(object: _186.QuerySlashRecordsResponseAminoMsg): _186.QuerySlashRecordsResponse;
            fromProtoMsg(message: _186.QuerySlashRecordsResponseProtoMsg): _186.QuerySlashRecordsResponse;
            toProto(message: _186.QuerySlashRecordsResponse): Uint8Array;
            toProtoMsg(message: _186.QuerySlashRecordsResponse): _186.QuerySlashRecordsResponseProtoMsg;
        };
        RedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _186.RedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.RedemptionRecordResponse;
            fromPartial(object: Partial<_186.RedemptionRecordResponse>): _186.RedemptionRecordResponse;
            fromAmino(object: _186.RedemptionRecordResponseAmino): _186.RedemptionRecordResponse;
            toAmino(message: _186.RedemptionRecordResponse): _186.RedemptionRecordResponseAmino;
            fromAminoMsg(object: _186.RedemptionRecordResponseAminoMsg): _186.RedemptionRecordResponse;
            fromProtoMsg(message: _186.RedemptionRecordResponseProtoMsg): _186.RedemptionRecordResponse;
            toProto(message: _186.RedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _186.RedemptionRecordResponse): _186.RedemptionRecordResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _185.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.Params;
            fromPartial(_: Partial<_185.Params>): _185.Params;
            fromAmino(_: _185.ParamsAmino): _185.Params;
            toAmino(_: _185.Params): _185.ParamsAmino;
            fromAminoMsg(object: _185.ParamsAminoMsg): _185.Params;
            fromProtoMsg(message: _185.ParamsProtoMsg): _185.Params;
            toProto(message: _185.Params): Uint8Array;
            toProtoMsg(message: _185.Params): _185.ParamsProtoMsg;
        };
        TransferInProgressRecordIds: {
            typeUrl: string;
            encode(message: _185.TransferInProgressRecordIds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.TransferInProgressRecordIds;
            fromPartial(object: Partial<_185.TransferInProgressRecordIds>): _185.TransferInProgressRecordIds;
            fromAmino(object: _185.TransferInProgressRecordIdsAmino): _185.TransferInProgressRecordIds;
            toAmino(message: _185.TransferInProgressRecordIds): _185.TransferInProgressRecordIdsAmino;
            fromAminoMsg(object: _185.TransferInProgressRecordIdsAminoMsg): _185.TransferInProgressRecordIds;
            fromProtoMsg(message: _185.TransferInProgressRecordIdsProtoMsg): _185.TransferInProgressRecordIds;
            toProto(message: _185.TransferInProgressRecordIds): Uint8Array;
            toProtoMsg(message: _185.TransferInProgressRecordIds): _185.TransferInProgressRecordIdsProtoMsg;
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
    };
    const strdburner: {
        QueryClientImpl: typeof _305.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            strdBurnerAddress(request?: _190.QueryStrdBurnerAddressRequest): Promise<_190.QueryStrdBurnerAddressResponse>;
            totalStrdBurned(request?: _190.QueryTotalStrdBurnedRequest): Promise<_190.QueryTotalStrdBurnedResponse>;
        };
        QueryStrdBurnerAddressRequest: {
            typeUrl: string;
            encode(_: _190.QueryStrdBurnerAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.QueryStrdBurnerAddressRequest;
            fromPartial(_: Partial<_190.QueryStrdBurnerAddressRequest>): _190.QueryStrdBurnerAddressRequest;
            fromAmino(_: _190.QueryStrdBurnerAddressRequestAmino): _190.QueryStrdBurnerAddressRequest;
            toAmino(_: _190.QueryStrdBurnerAddressRequest): _190.QueryStrdBurnerAddressRequestAmino;
            fromAminoMsg(object: _190.QueryStrdBurnerAddressRequestAminoMsg): _190.QueryStrdBurnerAddressRequest;
            fromProtoMsg(message: _190.QueryStrdBurnerAddressRequestProtoMsg): _190.QueryStrdBurnerAddressRequest;
            toProto(message: _190.QueryStrdBurnerAddressRequest): Uint8Array;
            toProtoMsg(message: _190.QueryStrdBurnerAddressRequest): _190.QueryStrdBurnerAddressRequestProtoMsg;
        };
        QueryStrdBurnerAddressResponse: {
            typeUrl: string;
            encode(message: _190.QueryStrdBurnerAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.QueryStrdBurnerAddressResponse;
            fromPartial(object: Partial<_190.QueryStrdBurnerAddressResponse>): _190.QueryStrdBurnerAddressResponse;
            fromAmino(object: _190.QueryStrdBurnerAddressResponseAmino): _190.QueryStrdBurnerAddressResponse;
            toAmino(message: _190.QueryStrdBurnerAddressResponse): _190.QueryStrdBurnerAddressResponseAmino;
            fromAminoMsg(object: _190.QueryStrdBurnerAddressResponseAminoMsg): _190.QueryStrdBurnerAddressResponse;
            fromProtoMsg(message: _190.QueryStrdBurnerAddressResponseProtoMsg): _190.QueryStrdBurnerAddressResponse;
            toProto(message: _190.QueryStrdBurnerAddressResponse): Uint8Array;
            toProtoMsg(message: _190.QueryStrdBurnerAddressResponse): _190.QueryStrdBurnerAddressResponseProtoMsg;
        };
        QueryTotalStrdBurnedRequest: {
            typeUrl: string;
            encode(_: _190.QueryTotalStrdBurnedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.QueryTotalStrdBurnedRequest;
            fromPartial(_: Partial<_190.QueryTotalStrdBurnedRequest>): _190.QueryTotalStrdBurnedRequest;
            fromAmino(_: _190.QueryTotalStrdBurnedRequestAmino): _190.QueryTotalStrdBurnedRequest;
            toAmino(_: _190.QueryTotalStrdBurnedRequest): _190.QueryTotalStrdBurnedRequestAmino;
            fromAminoMsg(object: _190.QueryTotalStrdBurnedRequestAminoMsg): _190.QueryTotalStrdBurnedRequest;
            fromProtoMsg(message: _190.QueryTotalStrdBurnedRequestProtoMsg): _190.QueryTotalStrdBurnedRequest;
            toProto(message: _190.QueryTotalStrdBurnedRequest): Uint8Array;
            toProtoMsg(message: _190.QueryTotalStrdBurnedRequest): _190.QueryTotalStrdBurnedRequestProtoMsg;
        };
        QueryTotalStrdBurnedResponse: {
            typeUrl: string;
            encode(message: _190.QueryTotalStrdBurnedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.QueryTotalStrdBurnedResponse;
            fromPartial(object: Partial<_190.QueryTotalStrdBurnedResponse>): _190.QueryTotalStrdBurnedResponse;
            fromAmino(object: _190.QueryTotalStrdBurnedResponseAmino): _190.QueryTotalStrdBurnedResponse;
            toAmino(message: _190.QueryTotalStrdBurnedResponse): _190.QueryTotalStrdBurnedResponseAmino;
            fromAminoMsg(object: _190.QueryTotalStrdBurnedResponseAminoMsg): _190.QueryTotalStrdBurnedResponse;
            fromProtoMsg(message: _190.QueryTotalStrdBurnedResponseProtoMsg): _190.QueryTotalStrdBurnedResponse;
            toProto(message: _190.QueryTotalStrdBurnedResponse): Uint8Array;
            toProtoMsg(message: _190.QueryTotalStrdBurnedResponse): _190.QueryTotalStrdBurnedResponseProtoMsg;
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
    };
    const vesting: {
        BaseVestingAccount: {
            typeUrl: string;
            encode(message: _192.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.BaseVestingAccount;
            fromPartial(object: Partial<_192.BaseVestingAccount>): _192.BaseVestingAccount;
            fromAmino(object: _192.BaseVestingAccountAmino): _192.BaseVestingAccount;
            toAmino(message: _192.BaseVestingAccount): _192.BaseVestingAccountAmino;
            fromAminoMsg(object: _192.BaseVestingAccountAminoMsg): _192.BaseVestingAccount;
            fromProtoMsg(message: _192.BaseVestingAccountProtoMsg): _192.BaseVestingAccount;
            toProto(message: _192.BaseVestingAccount): Uint8Array;
            toProtoMsg(message: _192.BaseVestingAccount): _192.BaseVestingAccountProtoMsg;
        };
        Period: {
            typeUrl: string;
            encode(message: _192.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.Period;
            fromPartial(object: Partial<_192.Period>): _192.Period;
            fromAmino(object: _192.PeriodAmino): _192.Period;
            toAmino(message: _192.Period): _192.PeriodAmino;
            fromAminoMsg(object: _192.PeriodAminoMsg): _192.Period;
            fromProtoMsg(message: _192.PeriodProtoMsg): _192.Period;
            toProto(message: _192.Period): Uint8Array;
            toProtoMsg(message: _192.Period): _192.PeriodProtoMsg;
        };
        StridePeriodicVestingAccount: {
            typeUrl: string;
            encode(message: _192.StridePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.StridePeriodicVestingAccount;
            fromPartial(object: Partial<_192.StridePeriodicVestingAccount>): _192.StridePeriodicVestingAccount;
            fromAmino(object: _192.StridePeriodicVestingAccountAmino): _192.StridePeriodicVestingAccount;
            toAmino(message: _192.StridePeriodicVestingAccount): _192.StridePeriodicVestingAccountAmino;
            fromAminoMsg(object: _192.StridePeriodicVestingAccountAminoMsg): _192.StridePeriodicVestingAccount;
            fromProtoMsg(message: _192.StridePeriodicVestingAccountProtoMsg): _192.StridePeriodicVestingAccount;
            toProto(message: _192.StridePeriodicVestingAccount): Uint8Array;
            toProtoMsg(message: _192.StridePeriodicVestingAccount): _192.StridePeriodicVestingAccountProtoMsg;
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
                airdrop: _306.MsgClientImpl;
                auction: _307.MsgClientImpl;
                claim: _308.MsgClientImpl;
                icaoracle: _309.MsgClientImpl;
                icqoracle: _310.MsgClientImpl;
                interchainquery: {
                    v1: _311.MsgClientImpl;
                };
                stakedym: _312.MsgClientImpl;
                stakeibc: _313.MsgClientImpl;
                staketia: _314.MsgClientImpl;
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
                auction: {
                    auction(request: _129.QueryAuctionRequest): Promise<_129.QueryAuctionResponse>;
                    auctions(request?: _129.QueryAuctionsRequest): Promise<_129.QueryAuctionsResponse>;
                };
                autopilot: {
                    params(request?: _133.QueryParamsRequest): Promise<_133.QueryParamsResponse>;
                };
                claim: {
                    distributorAccountBalance(request: _137.QueryDistributorAccountBalanceRequest): Promise<_137.QueryDistributorAccountBalanceResponse>;
                    params(request?: _137.QueryParamsRequest): Promise<_137.QueryParamsResponse>;
                    claimRecord(request: _137.QueryClaimRecordRequest): Promise<_137.QueryClaimRecordResponse>;
                    claimableForAction(request: _137.QueryClaimableForActionRequest): Promise<_137.QueryClaimableForActionResponse>;
                    totalClaimable(request: _137.QueryTotalClaimableRequest): Promise<_137.QueryTotalClaimableResponse>;
                    userVestings(request: _137.QueryUserVestingsRequest): Promise<_137.QueryUserVestingsResponse>;
                    claimStatus(request: _137.QueryClaimStatusRequest): Promise<_137.QueryClaimStatusResponse>;
                    claimMetadata(request?: _137.QueryClaimMetadataRequest): Promise<_137.QueryClaimMetadataResponse>;
                };
                epochs: {
                    epochInfos(request?: _140.QueryEpochsInfoRequest): Promise<_140.QueryEpochsInfoResponse>;
                    currentEpoch(request: _140.QueryCurrentEpochRequest): Promise<_140.QueryCurrentEpochResponse>;
                    epochInfo(request: _140.QueryEpochInfoRequest): Promise<_140.QueryEpochInfoResponse>;
                };
                icacallbacks: {
                    params(request?: _145.QueryParamsRequest): Promise<_145.QueryParamsResponse>;
                    callbackData(request: _145.QueryGetCallbackDataRequest): Promise<_145.QueryGetCallbackDataResponse>;
                    callbackDataAll(request?: _145.QueryAllCallbackDataRequest): Promise<_145.QueryAllCallbackDataResponse>;
                };
                icaoracle: {
                    oracle(request: _151.QueryOracleRequest): Promise<_151.QueryOracleResponse>;
                    allOracles(request?: _151.QueryAllOraclesRequest): Promise<_151.QueryAllOraclesResponse>;
                    activeOracles(request: _151.QueryActiveOraclesRequest): Promise<_151.QueryActiveOraclesResponse>;
                    metrics(request: _151.QueryMetricsRequest): Promise<_151.QueryMetricsResponse>;
                };
                icqoracle: {
                    tokenPrice(request: _155.QueryTokenPriceRequest): Promise<_155.QueryTokenPriceResponse>;
                    tokenPrices(request?: _155.QueryTokenPricesRequest): Promise<_155.QueryTokenPricesResponse>;
                    params(request?: _155.QueryParamsRequest): Promise<_155.QueryParamsResponse>;
                    tokenPriceForQuoteDenom(request: _155.QueryTokenPriceForQuoteDenomRequest): Promise<_155.QueryTokenPriceForQuoteDenomResponse>;
                };
                mint: {
                    v1beta1: {
                        params(request?: _162.QueryParamsRequest): Promise<_162.QueryParamsResponse>;
                        epochProvisions(request?: _162.QueryEpochProvisionsRequest): Promise<_162.QueryEpochProvisionsResponse>;
                    };
                };
                records: {
                    params(request?: _166.QueryParamsRequest): Promise<_166.QueryParamsResponse>;
                    userRedemptionRecord(request: _166.QueryGetUserRedemptionRecordRequest): Promise<_166.QueryGetUserRedemptionRecordResponse>;
                    userRedemptionRecordAll(request?: _166.QueryAllUserRedemptionRecordRequest): Promise<_166.QueryAllUserRedemptionRecordResponse>;
                    userRedemptionRecordForUser(request: _166.QueryAllUserRedemptionRecordForUserRequest): Promise<_166.QueryAllUserRedemptionRecordForUserResponse>;
                    epochUnbondingRecord(request: _166.QueryGetEpochUnbondingRecordRequest): Promise<_166.QueryGetEpochUnbondingRecordResponse>;
                    epochUnbondingRecordAll(request?: _166.QueryAllEpochUnbondingRecordRequest): Promise<_166.QueryAllEpochUnbondingRecordResponse>;
                    depositRecord(request: _166.QueryGetDepositRecordRequest): Promise<_166.QueryGetDepositRecordResponse>;
                    depositRecordAll(request?: _166.QueryAllDepositRecordRequest): Promise<_166.QueryAllDepositRecordResponse>;
                    depositRecordByHost(request: _166.QueryDepositRecordByHostRequest): Promise<_166.QueryDepositRecordByHostResponse>;
                    lSMDeposit(request: _166.QueryLSMDepositRequest): Promise<_166.QueryLSMDepositResponse>;
                    lSMDeposits(request: _166.QueryLSMDepositsRequest): Promise<_166.QueryLSMDepositsResponse>;
                };
                stakedym: {
                    hostZone(request?: _169.QueryHostZoneRequest): Promise<_169.QueryHostZoneResponse>;
                    delegationRecords(request: _169.QueryDelegationRecordsRequest): Promise<_169.QueryDelegationRecordsResponse>;
                    unbondingRecords(request: _169.QueryUnbondingRecordsRequest): Promise<_169.QueryUnbondingRecordsResponse>;
                    redemptionRecord(request: _169.QueryRedemptionRecordRequest): Promise<_169.QueryRedemptionRecordResponse>;
                    redemptionRecords(request: _169.QueryRedemptionRecordsRequest): Promise<_169.QueryRedemptionRecordsResponse>;
                    slashRecords(request?: _169.QuerySlashRecordsRequest): Promise<_169.QuerySlashRecordsResponse>;
                };
                stakeibc: {
                    params(request?: _181.QueryParamsRequest): Promise<_181.QueryParamsResponse>;
                    validators(request: _181.QueryGetValidatorsRequest): Promise<_181.QueryGetValidatorsResponse>;
                    hostZone(request: _181.QueryGetHostZoneRequest): Promise<_181.QueryGetHostZoneResponse>;
                    hostZoneAll(request?: _181.QueryAllHostZoneRequest): Promise<_181.QueryAllHostZoneResponse>;
                    moduleAddress(request: _181.QueryModuleAddressRequest): Promise<_181.QueryModuleAddressResponse>;
                    interchainAccountFromAddress(request: _181.QueryInterchainAccountFromAddressRequest): Promise<_181.QueryInterchainAccountFromAddressResponse>;
                    epochTracker(request: _181.QueryGetEpochTrackerRequest): Promise<_181.QueryGetEpochTrackerResponse>;
                    epochTrackerAll(request?: _181.QueryAllEpochTrackerRequest): Promise<_181.QueryAllEpochTrackerResponse>;
                    nextPacketSequence(request: _181.QueryGetNextPacketSequenceRequest): Promise<_181.QueryGetNextPacketSequenceResponse>;
                    addressUnbondings(request: _181.QueryAddressUnbondings): Promise<_181.QueryAddressUnbondingsResponse>;
                    allTradeRoutes(request?: _181.QueryAllTradeRoutes): Promise<_181.QueryAllTradeRoutesResponse>;
                };
                staketia: {
                    hostZone(request?: _186.QueryHostZoneRequest): Promise<_186.QueryHostZoneResponse>;
                    delegationRecords(request: _186.QueryDelegationRecordsRequest): Promise<_186.QueryDelegationRecordsResponse>;
                    unbondingRecords(request: _186.QueryUnbondingRecordsRequest): Promise<_186.QueryUnbondingRecordsResponse>;
                    redemptionRecord(request: _186.QueryRedemptionRecordRequest): Promise<_186.QueryRedemptionRecordResponse>;
                    redemptionRecords(request: _186.QueryRedemptionRecordsRequest): Promise<_186.QueryRedemptionRecordsResponse>;
                    slashRecords(request?: _186.QuerySlashRecordsRequest): Promise<_186.QuerySlashRecordsResponse>;
                };
                strdburner: {
                    strdBurnerAddress(request?: _190.QueryStrdBurnerAddressRequest): Promise<_190.QueryStrdBurnerAddressResponse>;
                    totalStrdBurned(request?: _190.QueryTotalStrdBurnedRequest): Promise<_190.QueryTotalStrdBurnedResponse>;
                };
            };
        }>;
    };
}
