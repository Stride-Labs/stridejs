import * as _124 from "./airdrop/airdrop";
import * as _125 from "./airdrop/genesis";
import * as _126 from "./airdrop/query";
import * as _127 from "./airdrop/tx";
import * as _128 from "./autopilot/genesis";
import * as _129 from "./autopilot/params";
import * as _130 from "./autopilot/query";
import * as _131 from "./claim/claim";
import * as _132 from "./claim/genesis";
import * as _133 from "./claim/params";
import * as _134 from "./claim/query";
import * as _135 from "./claim/tx";
import * as _136 from "./epochs/genesis";
import * as _137 from "./epochs/query";
import * as _138 from "./icacallbacks/callback_data";
import * as _139 from "./icacallbacks/genesis";
import * as _140 from "./icacallbacks/packet";
import * as _141 from "./icacallbacks/params";
import * as _142 from "./icacallbacks/query";
import * as _144 from "./icaoracle/callbacks";
import * as _145 from "./icaoracle/contract";
import * as _146 from "./icaoracle/genesis";
import * as _147 from "./icaoracle/icaoracle";
import * as _148 from "./icaoracle/query";
import * as _149 from "./icaoracle/tx";
import * as _150 from "./interchainquery/v1/genesis";
import * as _151 from "./interchainquery/v1/messages";
import * as _152 from "./interchainquery/v1/query";
import * as _153 from "./mint/v1beta1/genesis";
import * as _154 from "./mint/v1beta1/mint";
import * as _155 from "./mint/v1beta1/query";
import * as _156 from "./records/callbacks";
import * as _157 from "./records/genesis";
import * as _158 from "./records/params";
import * as _159 from "./records/query";
import * as _160 from "./records/records";
import * as _161 from "./stakedym/genesis";
import * as _162 from "./stakedym/query";
import * as _163 from "./stakedym/stakedym";
import * as _164 from "./stakedym/tx";
import * as _165 from "./stakeibc/address_unbonding";
import * as _166 from "./stakeibc/callbacks";
import * as _167 from "./stakeibc/epoch_tracker";
import * as _168 from "./stakeibc/genesis";
import * as _169 from "./stakeibc/gov";
import * as _170 from "./stakeibc/host_zone";
import * as _171 from "./stakeibc/ica_account";
import * as _172 from "./stakeibc/packet";
import * as _173 from "./stakeibc/params";
import * as _174 from "./stakeibc/query";
import * as _175 from "./stakeibc/trade_route";
import * as _176 from "./stakeibc/tx";
import * as _177 from "./stakeibc/validator";
import * as _178 from "./staketia/genesis";
import * as _179 from "./staketia/query";
import * as _180 from "./staketia/staketia";
import * as _181 from "./staketia/tx";
import * as _183 from "./vesting/vesting";
import * as _279 from "./airdrop/query.rpc.Query";
import * as _280 from "./autopilot/query.rpc.Query";
import * as _281 from "./claim/query.rpc.Query";
import * as _282 from "./epochs/query.rpc.Query";
import * as _283 from "./icacallbacks/query.rpc.Query";
import * as _284 from "./icaoracle/query.rpc.Query";
import * as _285 from "./mint/v1beta1/query.rpc.Query";
import * as _286 from "./records/query.rpc.Query";
import * as _287 from "./stakedym/query.rpc.Query";
import * as _288 from "./stakeibc/query.rpc.Query";
import * as _289 from "./staketia/query.rpc.Query";
import * as _290 from "./airdrop/tx.rpc.msg";
import * as _291 from "./claim/tx.rpc.msg";
import * as _292 from "./icaoracle/tx.rpc.msg";
import * as _293 from "./interchainquery/v1/messages.rpc.msg";
import * as _294 from "./stakedym/tx.rpc.msg";
import * as _295 from "./stakeibc/tx.rpc.msg";
import * as _296 from "./staketia/tx.rpc.msg";
export declare namespace stride {
    const airdrop: {
        MsgClientImpl: typeof _290.MsgClientImpl;
        QueryClientImpl: typeof _279.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            airdrop(request: _126.QueryAirdropRequest): Promise<_126.QueryAirdropResponse>;
            allAirdrops(request?: _126.QueryAllAirdropsRequest): Promise<_126.QueryAllAirdropsResponse>;
            userAllocation(request: _126.QueryUserAllocationRequest): Promise<_126.QueryUserAllocationResponse>;
            userAllocations(request: _126.QueryUserAllocationsRequest): Promise<_126.QueryUserAllocationsResponse>;
            allAllocations(request: _126.QueryAllAllocationsRequest): Promise<_126.QueryAllAllocationsResponse>;
            userSummary(request: _126.QueryUserSummaryRequest): Promise<_126.QueryUserSummaryResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                claimDaily(value: _127.MsgClaimDaily): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                claimEarly(value: _127.MsgClaimEarly): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createAirdrop(value: _127.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateAirdrop(value: _127.MsgUpdateAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addAllocations(value: _127.MsgAddAllocations): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateUserAllocation(value: _127.MsgUpdateUserAllocation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                linkAddresses(value: _127.MsgLinkAddresses): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                claimDaily(value: _127.MsgClaimDaily): {
                    typeUrl: string;
                    value: _127.MsgClaimDaily;
                };
                claimEarly(value: _127.MsgClaimEarly): {
                    typeUrl: string;
                    value: _127.MsgClaimEarly;
                };
                createAirdrop(value: _127.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _127.MsgCreateAirdrop;
                };
                updateAirdrop(value: _127.MsgUpdateAirdrop): {
                    typeUrl: string;
                    value: _127.MsgUpdateAirdrop;
                };
                addAllocations(value: _127.MsgAddAllocations): {
                    typeUrl: string;
                    value: _127.MsgAddAllocations;
                };
                updateUserAllocation(value: _127.MsgUpdateUserAllocation): {
                    typeUrl: string;
                    value: _127.MsgUpdateUserAllocation;
                };
                linkAddresses(value: _127.MsgLinkAddresses): {
                    typeUrl: string;
                    value: _127.MsgLinkAddresses;
                };
            };
            fromPartial: {
                claimDaily(value: _127.MsgClaimDaily): {
                    typeUrl: string;
                    value: _127.MsgClaimDaily;
                };
                claimEarly(value: _127.MsgClaimEarly): {
                    typeUrl: string;
                    value: _127.MsgClaimEarly;
                };
                createAirdrop(value: _127.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _127.MsgCreateAirdrop;
                };
                updateAirdrop(value: _127.MsgUpdateAirdrop): {
                    typeUrl: string;
                    value: _127.MsgUpdateAirdrop;
                };
                addAllocations(value: _127.MsgAddAllocations): {
                    typeUrl: string;
                    value: _127.MsgAddAllocations;
                };
                updateUserAllocation(value: _127.MsgUpdateUserAllocation): {
                    typeUrl: string;
                    value: _127.MsgUpdateUserAllocation;
                };
                linkAddresses(value: _127.MsgLinkAddresses): {
                    typeUrl: string;
                    value: _127.MsgLinkAddresses;
                };
            };
        };
        AminoConverter: {
            "/stride.airdrop.MsgClaimDaily": {
                aminoType: string;
                toAmino: (message: _127.MsgClaimDaily) => _127.MsgClaimDailyAmino;
                fromAmino: (object: _127.MsgClaimDailyAmino) => _127.MsgClaimDaily;
            };
            "/stride.airdrop.MsgClaimEarly": {
                aminoType: string;
                toAmino: (message: _127.MsgClaimEarly) => _127.MsgClaimEarlyAmino;
                fromAmino: (object: _127.MsgClaimEarlyAmino) => _127.MsgClaimEarly;
            };
            "/stride.airdrop.MsgCreateAirdrop": {
                aminoType: string;
                toAmino: (message: _127.MsgCreateAirdrop) => _127.MsgCreateAirdropAmino;
                fromAmino: (object: _127.MsgCreateAirdropAmino) => _127.MsgCreateAirdrop;
            };
            "/stride.airdrop.MsgUpdateAirdrop": {
                aminoType: string;
                toAmino: (message: _127.MsgUpdateAirdrop) => _127.MsgUpdateAirdropAmino;
                fromAmino: (object: _127.MsgUpdateAirdropAmino) => _127.MsgUpdateAirdrop;
            };
            "/stride.airdrop.MsgAddAllocations": {
                aminoType: string;
                toAmino: (message: _127.MsgAddAllocations) => _127.MsgAddAllocationsAmino;
                fromAmino: (object: _127.MsgAddAllocationsAmino) => _127.MsgAddAllocations;
            };
            "/stride.airdrop.MsgUpdateUserAllocation": {
                aminoType: string;
                toAmino: (message: _127.MsgUpdateUserAllocation) => _127.MsgUpdateUserAllocationAmino;
                fromAmino: (object: _127.MsgUpdateUserAllocationAmino) => _127.MsgUpdateUserAllocation;
            };
            "/stride.airdrop.MsgLinkAddresses": {
                aminoType: string;
                toAmino: (message: _127.MsgLinkAddresses) => _127.MsgLinkAddressesAmino;
                fromAmino: (object: _127.MsgLinkAddressesAmino) => _127.MsgLinkAddresses;
            };
        };
        MsgClaimDaily: {
            typeUrl: string;
            encode(message: _127.MsgClaimDaily, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.MsgClaimDaily;
            fromPartial(object: Partial<_127.MsgClaimDaily>): _127.MsgClaimDaily;
            fromAmino(object: _127.MsgClaimDailyAmino): _127.MsgClaimDaily;
            toAmino(message: _127.MsgClaimDaily): _127.MsgClaimDailyAmino;
            fromAminoMsg(object: _127.MsgClaimDailyAminoMsg): _127.MsgClaimDaily;
            toAminoMsg(message: _127.MsgClaimDaily): _127.MsgClaimDailyAminoMsg;
            fromProtoMsg(message: _127.MsgClaimDailyProtoMsg): _127.MsgClaimDaily;
            toProto(message: _127.MsgClaimDaily): Uint8Array;
            toProtoMsg(message: _127.MsgClaimDaily): _127.MsgClaimDailyProtoMsg;
        };
        MsgClaimDailyResponse: {
            typeUrl: string;
            encode(_: _127.MsgClaimDailyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.MsgClaimDailyResponse;
            fromPartial(_: Partial<_127.MsgClaimDailyResponse>): _127.MsgClaimDailyResponse;
            fromAmino(_: _127.MsgClaimDailyResponseAmino): _127.MsgClaimDailyResponse;
            toAmino(_: _127.MsgClaimDailyResponse): _127.MsgClaimDailyResponseAmino;
            fromAminoMsg(object: _127.MsgClaimDailyResponseAminoMsg): _127.MsgClaimDailyResponse;
            fromProtoMsg(message: _127.MsgClaimDailyResponseProtoMsg): _127.MsgClaimDailyResponse;
            toProto(message: _127.MsgClaimDailyResponse): Uint8Array;
            toProtoMsg(message: _127.MsgClaimDailyResponse): _127.MsgClaimDailyResponseProtoMsg;
        };
        MsgClaimEarly: {
            typeUrl: string;
            encode(message: _127.MsgClaimEarly, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.MsgClaimEarly;
            fromPartial(object: Partial<_127.MsgClaimEarly>): _127.MsgClaimEarly;
            fromAmino(object: _127.MsgClaimEarlyAmino): _127.MsgClaimEarly;
            toAmino(message: _127.MsgClaimEarly): _127.MsgClaimEarlyAmino;
            fromAminoMsg(object: _127.MsgClaimEarlyAminoMsg): _127.MsgClaimEarly;
            toAminoMsg(message: _127.MsgClaimEarly): _127.MsgClaimEarlyAminoMsg;
            fromProtoMsg(message: _127.MsgClaimEarlyProtoMsg): _127.MsgClaimEarly;
            toProto(message: _127.MsgClaimEarly): Uint8Array;
            toProtoMsg(message: _127.MsgClaimEarly): _127.MsgClaimEarlyProtoMsg;
        };
        MsgClaimEarlyResponse: {
            typeUrl: string;
            encode(_: _127.MsgClaimEarlyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.MsgClaimEarlyResponse;
            fromPartial(_: Partial<_127.MsgClaimEarlyResponse>): _127.MsgClaimEarlyResponse;
            fromAmino(_: _127.MsgClaimEarlyResponseAmino): _127.MsgClaimEarlyResponse;
            toAmino(_: _127.MsgClaimEarlyResponse): _127.MsgClaimEarlyResponseAmino;
            fromAminoMsg(object: _127.MsgClaimEarlyResponseAminoMsg): _127.MsgClaimEarlyResponse;
            fromProtoMsg(message: _127.MsgClaimEarlyResponseProtoMsg): _127.MsgClaimEarlyResponse;
            toProto(message: _127.MsgClaimEarlyResponse): Uint8Array;
            toProtoMsg(message: _127.MsgClaimEarlyResponse): _127.MsgClaimEarlyResponseProtoMsg;
        };
        MsgCreateAirdrop: {
            typeUrl: string;
            encode(message: _127.MsgCreateAirdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.MsgCreateAirdrop;
            fromPartial(object: Partial<_127.MsgCreateAirdrop>): _127.MsgCreateAirdrop;
            fromAmino(object: _127.MsgCreateAirdropAmino): _127.MsgCreateAirdrop;
            toAmino(message: _127.MsgCreateAirdrop): _127.MsgCreateAirdropAmino;
            fromAminoMsg(object: _127.MsgCreateAirdropAminoMsg): _127.MsgCreateAirdrop;
            toAminoMsg(message: _127.MsgCreateAirdrop): _127.MsgCreateAirdropAminoMsg;
            fromProtoMsg(message: _127.MsgCreateAirdropProtoMsg): _127.MsgCreateAirdrop;
            toProto(message: _127.MsgCreateAirdrop): Uint8Array;
            toProtoMsg(message: _127.MsgCreateAirdrop): _127.MsgCreateAirdropProtoMsg;
        };
        MsgCreateAirdropResponse: {
            typeUrl: string;
            encode(_: _127.MsgCreateAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.MsgCreateAirdropResponse;
            fromPartial(_: Partial<_127.MsgCreateAirdropResponse>): _127.MsgCreateAirdropResponse;
            fromAmino(_: _127.MsgCreateAirdropResponseAmino): _127.MsgCreateAirdropResponse;
            toAmino(_: _127.MsgCreateAirdropResponse): _127.MsgCreateAirdropResponseAmino;
            fromAminoMsg(object: _127.MsgCreateAirdropResponseAminoMsg): _127.MsgCreateAirdropResponse;
            fromProtoMsg(message: _127.MsgCreateAirdropResponseProtoMsg): _127.MsgCreateAirdropResponse;
            toProto(message: _127.MsgCreateAirdropResponse): Uint8Array;
            toProtoMsg(message: _127.MsgCreateAirdropResponse): _127.MsgCreateAirdropResponseProtoMsg;
        };
        MsgUpdateAirdrop: {
            typeUrl: string;
            encode(message: _127.MsgUpdateAirdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.MsgUpdateAirdrop;
            fromPartial(object: Partial<_127.MsgUpdateAirdrop>): _127.MsgUpdateAirdrop;
            fromAmino(object: _127.MsgUpdateAirdropAmino): _127.MsgUpdateAirdrop;
            toAmino(message: _127.MsgUpdateAirdrop): _127.MsgUpdateAirdropAmino;
            fromAminoMsg(object: _127.MsgUpdateAirdropAminoMsg): _127.MsgUpdateAirdrop;
            toAminoMsg(message: _127.MsgUpdateAirdrop): _127.MsgUpdateAirdropAminoMsg;
            fromProtoMsg(message: _127.MsgUpdateAirdropProtoMsg): _127.MsgUpdateAirdrop;
            toProto(message: _127.MsgUpdateAirdrop): Uint8Array;
            toProtoMsg(message: _127.MsgUpdateAirdrop): _127.MsgUpdateAirdropProtoMsg;
        };
        MsgUpdateAirdropResponse: {
            typeUrl: string;
            encode(_: _127.MsgUpdateAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.MsgUpdateAirdropResponse;
            fromPartial(_: Partial<_127.MsgUpdateAirdropResponse>): _127.MsgUpdateAirdropResponse;
            fromAmino(_: _127.MsgUpdateAirdropResponseAmino): _127.MsgUpdateAirdropResponse;
            toAmino(_: _127.MsgUpdateAirdropResponse): _127.MsgUpdateAirdropResponseAmino;
            fromAminoMsg(object: _127.MsgUpdateAirdropResponseAminoMsg): _127.MsgUpdateAirdropResponse;
            fromProtoMsg(message: _127.MsgUpdateAirdropResponseProtoMsg): _127.MsgUpdateAirdropResponse;
            toProto(message: _127.MsgUpdateAirdropResponse): Uint8Array;
            toProtoMsg(message: _127.MsgUpdateAirdropResponse): _127.MsgUpdateAirdropResponseProtoMsg;
        };
        RawAllocation: {
            typeUrl: string;
            encode(message: _127.RawAllocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.RawAllocation;
            fromPartial(object: Partial<_127.RawAllocation>): _127.RawAllocation;
            fromAmino(object: _127.RawAllocationAmino): _127.RawAllocation;
            toAmino(message: _127.RawAllocation): _127.RawAllocationAmino;
            fromAminoMsg(object: _127.RawAllocationAminoMsg): _127.RawAllocation;
            fromProtoMsg(message: _127.RawAllocationProtoMsg): _127.RawAllocation;
            toProto(message: _127.RawAllocation): Uint8Array;
            toProtoMsg(message: _127.RawAllocation): _127.RawAllocationProtoMsg;
        };
        MsgAddAllocations: {
            typeUrl: string;
            encode(message: _127.MsgAddAllocations, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.MsgAddAllocations;
            fromPartial(object: Partial<_127.MsgAddAllocations>): _127.MsgAddAllocations;
            fromAmino(object: _127.MsgAddAllocationsAmino): _127.MsgAddAllocations;
            toAmino(message: _127.MsgAddAllocations): _127.MsgAddAllocationsAmino;
            fromAminoMsg(object: _127.MsgAddAllocationsAminoMsg): _127.MsgAddAllocations;
            toAminoMsg(message: _127.MsgAddAllocations): _127.MsgAddAllocationsAminoMsg;
            fromProtoMsg(message: _127.MsgAddAllocationsProtoMsg): _127.MsgAddAllocations;
            toProto(message: _127.MsgAddAllocations): Uint8Array;
            toProtoMsg(message: _127.MsgAddAllocations): _127.MsgAddAllocationsProtoMsg;
        };
        MsgAddAllocationsResponse: {
            typeUrl: string;
            encode(_: _127.MsgAddAllocationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.MsgAddAllocationsResponse;
            fromPartial(_: Partial<_127.MsgAddAllocationsResponse>): _127.MsgAddAllocationsResponse;
            fromAmino(_: _127.MsgAddAllocationsResponseAmino): _127.MsgAddAllocationsResponse;
            toAmino(_: _127.MsgAddAllocationsResponse): _127.MsgAddAllocationsResponseAmino;
            fromAminoMsg(object: _127.MsgAddAllocationsResponseAminoMsg): _127.MsgAddAllocationsResponse;
            fromProtoMsg(message: _127.MsgAddAllocationsResponseProtoMsg): _127.MsgAddAllocationsResponse;
            toProto(message: _127.MsgAddAllocationsResponse): Uint8Array;
            toProtoMsg(message: _127.MsgAddAllocationsResponse): _127.MsgAddAllocationsResponseProtoMsg;
        };
        MsgUpdateUserAllocation: {
            typeUrl: string;
            encode(message: _127.MsgUpdateUserAllocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.MsgUpdateUserAllocation;
            fromPartial(object: Partial<_127.MsgUpdateUserAllocation>): _127.MsgUpdateUserAllocation;
            fromAmino(object: _127.MsgUpdateUserAllocationAmino): _127.MsgUpdateUserAllocation;
            toAmino(message: _127.MsgUpdateUserAllocation): _127.MsgUpdateUserAllocationAmino;
            fromAminoMsg(object: _127.MsgUpdateUserAllocationAminoMsg): _127.MsgUpdateUserAllocation;
            toAminoMsg(message: _127.MsgUpdateUserAllocation): _127.MsgUpdateUserAllocationAminoMsg;
            fromProtoMsg(message: _127.MsgUpdateUserAllocationProtoMsg): _127.MsgUpdateUserAllocation;
            toProto(message: _127.MsgUpdateUserAllocation): Uint8Array;
            toProtoMsg(message: _127.MsgUpdateUserAllocation): _127.MsgUpdateUserAllocationProtoMsg;
        };
        MsgUpdateUserAllocationResponse: {
            typeUrl: string;
            encode(_: _127.MsgUpdateUserAllocationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.MsgUpdateUserAllocationResponse;
            fromPartial(_: Partial<_127.MsgUpdateUserAllocationResponse>): _127.MsgUpdateUserAllocationResponse;
            fromAmino(_: _127.MsgUpdateUserAllocationResponseAmino): _127.MsgUpdateUserAllocationResponse;
            toAmino(_: _127.MsgUpdateUserAllocationResponse): _127.MsgUpdateUserAllocationResponseAmino;
            fromAminoMsg(object: _127.MsgUpdateUserAllocationResponseAminoMsg): _127.MsgUpdateUserAllocationResponse;
            fromProtoMsg(message: _127.MsgUpdateUserAllocationResponseProtoMsg): _127.MsgUpdateUserAllocationResponse;
            toProto(message: _127.MsgUpdateUserAllocationResponse): Uint8Array;
            toProtoMsg(message: _127.MsgUpdateUserAllocationResponse): _127.MsgUpdateUserAllocationResponseProtoMsg;
        };
        MsgLinkAddresses: {
            typeUrl: string;
            encode(message: _127.MsgLinkAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.MsgLinkAddresses;
            fromPartial(object: Partial<_127.MsgLinkAddresses>): _127.MsgLinkAddresses;
            fromAmino(object: _127.MsgLinkAddressesAmino): _127.MsgLinkAddresses;
            toAmino(message: _127.MsgLinkAddresses): _127.MsgLinkAddressesAmino;
            fromAminoMsg(object: _127.MsgLinkAddressesAminoMsg): _127.MsgLinkAddresses;
            toAminoMsg(message: _127.MsgLinkAddresses): _127.MsgLinkAddressesAminoMsg;
            fromProtoMsg(message: _127.MsgLinkAddressesProtoMsg): _127.MsgLinkAddresses;
            toProto(message: _127.MsgLinkAddresses): Uint8Array;
            toProtoMsg(message: _127.MsgLinkAddresses): _127.MsgLinkAddressesProtoMsg;
        };
        MsgLinkAddressesResponse: {
            typeUrl: string;
            encode(_: _127.MsgLinkAddressesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.MsgLinkAddressesResponse;
            fromPartial(_: Partial<_127.MsgLinkAddressesResponse>): _127.MsgLinkAddressesResponse;
            fromAmino(_: _127.MsgLinkAddressesResponseAmino): _127.MsgLinkAddressesResponse;
            toAmino(_: _127.MsgLinkAddressesResponse): _127.MsgLinkAddressesResponseAmino;
            fromAminoMsg(object: _127.MsgLinkAddressesResponseAminoMsg): _127.MsgLinkAddressesResponse;
            fromProtoMsg(message: _127.MsgLinkAddressesResponseProtoMsg): _127.MsgLinkAddressesResponse;
            toProto(message: _127.MsgLinkAddressesResponse): Uint8Array;
            toProtoMsg(message: _127.MsgLinkAddressesResponse): _127.MsgLinkAddressesResponseProtoMsg;
        };
        QueryAirdropRequest: {
            typeUrl: string;
            encode(message: _126.QueryAirdropRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.QueryAirdropRequest;
            fromPartial(object: Partial<_126.QueryAirdropRequest>): _126.QueryAirdropRequest;
            fromAmino(object: _126.QueryAirdropRequestAmino): _126.QueryAirdropRequest;
            toAmino(message: _126.QueryAirdropRequest): _126.QueryAirdropRequestAmino;
            fromAminoMsg(object: _126.QueryAirdropRequestAminoMsg): _126.QueryAirdropRequest;
            fromProtoMsg(message: _126.QueryAirdropRequestProtoMsg): _126.QueryAirdropRequest;
            toProto(message: _126.QueryAirdropRequest): Uint8Array;
            toProtoMsg(message: _126.QueryAirdropRequest): _126.QueryAirdropRequestProtoMsg;
        };
        QueryAirdropResponse: {
            typeUrl: string;
            encode(message: _126.QueryAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.QueryAirdropResponse;
            fromPartial(object: Partial<_126.QueryAirdropResponse>): _126.QueryAirdropResponse;
            fromAmino(object: _126.QueryAirdropResponseAmino): _126.QueryAirdropResponse;
            toAmino(message: _126.QueryAirdropResponse): _126.QueryAirdropResponseAmino;
            fromAminoMsg(object: _126.QueryAirdropResponseAminoMsg): _126.QueryAirdropResponse;
            fromProtoMsg(message: _126.QueryAirdropResponseProtoMsg): _126.QueryAirdropResponse;
            toProto(message: _126.QueryAirdropResponse): Uint8Array;
            toProtoMsg(message: _126.QueryAirdropResponse): _126.QueryAirdropResponseProtoMsg;
        };
        QueryAllAirdropsRequest: {
            typeUrl: string;
            encode(_: _126.QueryAllAirdropsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.QueryAllAirdropsRequest;
            fromPartial(_: Partial<_126.QueryAllAirdropsRequest>): _126.QueryAllAirdropsRequest;
            fromAmino(_: _126.QueryAllAirdropsRequestAmino): _126.QueryAllAirdropsRequest;
            toAmino(_: _126.QueryAllAirdropsRequest): _126.QueryAllAirdropsRequestAmino;
            fromAminoMsg(object: _126.QueryAllAirdropsRequestAminoMsg): _126.QueryAllAirdropsRequest;
            fromProtoMsg(message: _126.QueryAllAirdropsRequestProtoMsg): _126.QueryAllAirdropsRequest;
            toProto(message: _126.QueryAllAirdropsRequest): Uint8Array;
            toProtoMsg(message: _126.QueryAllAirdropsRequest): _126.QueryAllAirdropsRequestProtoMsg;
        };
        QueryAllAirdropsResponse: {
            typeUrl: string;
            encode(message: _126.QueryAllAirdropsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.QueryAllAirdropsResponse;
            fromPartial(object: Partial<_126.QueryAllAirdropsResponse>): _126.QueryAllAirdropsResponse;
            fromAmino(object: _126.QueryAllAirdropsResponseAmino): _126.QueryAllAirdropsResponse;
            toAmino(message: _126.QueryAllAirdropsResponse): _126.QueryAllAirdropsResponseAmino;
            fromAminoMsg(object: _126.QueryAllAirdropsResponseAminoMsg): _126.QueryAllAirdropsResponse;
            fromProtoMsg(message: _126.QueryAllAirdropsResponseProtoMsg): _126.QueryAllAirdropsResponse;
            toProto(message: _126.QueryAllAirdropsResponse): Uint8Array;
            toProtoMsg(message: _126.QueryAllAirdropsResponse): _126.QueryAllAirdropsResponseProtoMsg;
        };
        QueryUserAllocationRequest: {
            typeUrl: string;
            encode(message: _126.QueryUserAllocationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.QueryUserAllocationRequest;
            fromPartial(object: Partial<_126.QueryUserAllocationRequest>): _126.QueryUserAllocationRequest;
            fromAmino(object: _126.QueryUserAllocationRequestAmino): _126.QueryUserAllocationRequest;
            toAmino(message: _126.QueryUserAllocationRequest): _126.QueryUserAllocationRequestAmino;
            fromAminoMsg(object: _126.QueryUserAllocationRequestAminoMsg): _126.QueryUserAllocationRequest;
            fromProtoMsg(message: _126.QueryUserAllocationRequestProtoMsg): _126.QueryUserAllocationRequest;
            toProto(message: _126.QueryUserAllocationRequest): Uint8Array;
            toProtoMsg(message: _126.QueryUserAllocationRequest): _126.QueryUserAllocationRequestProtoMsg;
        };
        QueryUserAllocationResponse: {
            typeUrl: string;
            encode(message: _126.QueryUserAllocationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.QueryUserAllocationResponse;
            fromPartial(object: Partial<_126.QueryUserAllocationResponse>): _126.QueryUserAllocationResponse;
            fromAmino(object: _126.QueryUserAllocationResponseAmino): _126.QueryUserAllocationResponse;
            toAmino(message: _126.QueryUserAllocationResponse): _126.QueryUserAllocationResponseAmino;
            fromAminoMsg(object: _126.QueryUserAllocationResponseAminoMsg): _126.QueryUserAllocationResponse;
            fromProtoMsg(message: _126.QueryUserAllocationResponseProtoMsg): _126.QueryUserAllocationResponse;
            toProto(message: _126.QueryUserAllocationResponse): Uint8Array;
            toProtoMsg(message: _126.QueryUserAllocationResponse): _126.QueryUserAllocationResponseProtoMsg;
        };
        QueryUserAllocationsRequest: {
            typeUrl: string;
            encode(message: _126.QueryUserAllocationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.QueryUserAllocationsRequest;
            fromPartial(object: Partial<_126.QueryUserAllocationsRequest>): _126.QueryUserAllocationsRequest;
            fromAmino(object: _126.QueryUserAllocationsRequestAmino): _126.QueryUserAllocationsRequest;
            toAmino(message: _126.QueryUserAllocationsRequest): _126.QueryUserAllocationsRequestAmino;
            fromAminoMsg(object: _126.QueryUserAllocationsRequestAminoMsg): _126.QueryUserAllocationsRequest;
            fromProtoMsg(message: _126.QueryUserAllocationsRequestProtoMsg): _126.QueryUserAllocationsRequest;
            toProto(message: _126.QueryUserAllocationsRequest): Uint8Array;
            toProtoMsg(message: _126.QueryUserAllocationsRequest): _126.QueryUserAllocationsRequestProtoMsg;
        };
        QueryUserAllocationsResponse: {
            typeUrl: string;
            encode(message: _126.QueryUserAllocationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.QueryUserAllocationsResponse;
            fromPartial(object: Partial<_126.QueryUserAllocationsResponse>): _126.QueryUserAllocationsResponse;
            fromAmino(object: _126.QueryUserAllocationsResponseAmino): _126.QueryUserAllocationsResponse;
            toAmino(message: _126.QueryUserAllocationsResponse): _126.QueryUserAllocationsResponseAmino;
            fromAminoMsg(object: _126.QueryUserAllocationsResponseAminoMsg): _126.QueryUserAllocationsResponse;
            fromProtoMsg(message: _126.QueryUserAllocationsResponseProtoMsg): _126.QueryUserAllocationsResponse;
            toProto(message: _126.QueryUserAllocationsResponse): Uint8Array;
            toProtoMsg(message: _126.QueryUserAllocationsResponse): _126.QueryUserAllocationsResponseProtoMsg;
        };
        QueryAllAllocationsRequest: {
            typeUrl: string;
            encode(message: _126.QueryAllAllocationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.QueryAllAllocationsRequest;
            fromPartial(object: Partial<_126.QueryAllAllocationsRequest>): _126.QueryAllAllocationsRequest;
            fromAmino(object: _126.QueryAllAllocationsRequestAmino): _126.QueryAllAllocationsRequest;
            toAmino(message: _126.QueryAllAllocationsRequest): _126.QueryAllAllocationsRequestAmino;
            fromAminoMsg(object: _126.QueryAllAllocationsRequestAminoMsg): _126.QueryAllAllocationsRequest;
            fromProtoMsg(message: _126.QueryAllAllocationsRequestProtoMsg): _126.QueryAllAllocationsRequest;
            toProto(message: _126.QueryAllAllocationsRequest): Uint8Array;
            toProtoMsg(message: _126.QueryAllAllocationsRequest): _126.QueryAllAllocationsRequestProtoMsg;
        };
        QueryAllAllocationsResponse: {
            typeUrl: string;
            encode(message: _126.QueryAllAllocationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.QueryAllAllocationsResponse;
            fromPartial(object: Partial<_126.QueryAllAllocationsResponse>): _126.QueryAllAllocationsResponse;
            fromAmino(object: _126.QueryAllAllocationsResponseAmino): _126.QueryAllAllocationsResponse;
            toAmino(message: _126.QueryAllAllocationsResponse): _126.QueryAllAllocationsResponseAmino;
            fromAminoMsg(object: _126.QueryAllAllocationsResponseAminoMsg): _126.QueryAllAllocationsResponse;
            fromProtoMsg(message: _126.QueryAllAllocationsResponseProtoMsg): _126.QueryAllAllocationsResponse;
            toProto(message: _126.QueryAllAllocationsResponse): Uint8Array;
            toProtoMsg(message: _126.QueryAllAllocationsResponse): _126.QueryAllAllocationsResponseProtoMsg;
        };
        QueryUserSummaryRequest: {
            typeUrl: string;
            encode(message: _126.QueryUserSummaryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.QueryUserSummaryRequest;
            fromPartial(object: Partial<_126.QueryUserSummaryRequest>): _126.QueryUserSummaryRequest;
            fromAmino(object: _126.QueryUserSummaryRequestAmino): _126.QueryUserSummaryRequest;
            toAmino(message: _126.QueryUserSummaryRequest): _126.QueryUserSummaryRequestAmino;
            fromAminoMsg(object: _126.QueryUserSummaryRequestAminoMsg): _126.QueryUserSummaryRequest;
            fromProtoMsg(message: _126.QueryUserSummaryRequestProtoMsg): _126.QueryUserSummaryRequest;
            toProto(message: _126.QueryUserSummaryRequest): Uint8Array;
            toProtoMsg(message: _126.QueryUserSummaryRequest): _126.QueryUserSummaryRequestProtoMsg;
        };
        QueryUserSummaryResponse: {
            typeUrl: string;
            encode(message: _126.QueryUserSummaryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.QueryUserSummaryResponse;
            fromPartial(object: Partial<_126.QueryUserSummaryResponse>): _126.QueryUserSummaryResponse;
            fromAmino(object: _126.QueryUserSummaryResponseAmino): _126.QueryUserSummaryResponse;
            toAmino(message: _126.QueryUserSummaryResponse): _126.QueryUserSummaryResponseAmino;
            fromAminoMsg(object: _126.QueryUserSummaryResponseAminoMsg): _126.QueryUserSummaryResponse;
            fromProtoMsg(message: _126.QueryUserSummaryResponseProtoMsg): _126.QueryUserSummaryResponse;
            toProto(message: _126.QueryUserSummaryResponse): Uint8Array;
            toProtoMsg(message: _126.QueryUserSummaryResponse): _126.QueryUserSummaryResponseProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _125.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.GenesisState;
            fromPartial(object: Partial<_125.GenesisState>): _125.GenesisState;
            fromAmino(object: _125.GenesisStateAmino): _125.GenesisState;
            toAmino(message: _125.GenesisState): _125.GenesisStateAmino;
            fromAminoMsg(object: _125.GenesisStateAminoMsg): _125.GenesisState;
            fromProtoMsg(message: _125.GenesisStateProtoMsg): _125.GenesisState;
            toProto(message: _125.GenesisState): Uint8Array;
            toProtoMsg(message: _125.GenesisState): _125.GenesisStateProtoMsg;
        };
        claimTypeFromJSON(object: any): _124.ClaimType;
        claimTypeToJSON(object: _124.ClaimType): string;
        ClaimType: typeof _124.ClaimType;
        ClaimTypeSDKType: typeof _124.ClaimType;
        ClaimTypeAmino: typeof _124.ClaimType;
        Params: {
            typeUrl: string;
            encode(message: _124.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.Params;
            fromPartial(object: Partial<_124.Params>): _124.Params;
            fromAmino(object: _124.ParamsAmino): _124.Params;
            toAmino(message: _124.Params): _124.ParamsAmino;
            fromAminoMsg(object: _124.ParamsAminoMsg): _124.Params;
            fromProtoMsg(message: _124.ParamsProtoMsg): _124.Params;
            toProto(message: _124.Params): Uint8Array;
            toProtoMsg(message: _124.Params): _124.ParamsProtoMsg;
        };
        UserAllocation: {
            typeUrl: string;
            encode(message: _124.UserAllocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.UserAllocation;
            fromPartial(object: Partial<_124.UserAllocation>): _124.UserAllocation;
            fromAmino(object: _124.UserAllocationAmino): _124.UserAllocation;
            toAmino(message: _124.UserAllocation): _124.UserAllocationAmino;
            fromAminoMsg(object: _124.UserAllocationAminoMsg): _124.UserAllocation;
            fromProtoMsg(message: _124.UserAllocationProtoMsg): _124.UserAllocation;
            toProto(message: _124.UserAllocation): Uint8Array;
            toProtoMsg(message: _124.UserAllocation): _124.UserAllocationProtoMsg;
        };
        Airdrop: {
            typeUrl: string;
            encode(message: _124.Airdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.Airdrop;
            fromPartial(object: Partial<_124.Airdrop>): _124.Airdrop;
            fromAmino(object: _124.AirdropAmino): _124.Airdrop;
            toAmino(message: _124.Airdrop): _124.AirdropAmino;
            fromAminoMsg(object: _124.AirdropAminoMsg): _124.Airdrop;
            fromProtoMsg(message: _124.AirdropProtoMsg): _124.Airdrop;
            toProto(message: _124.Airdrop): Uint8Array;
            toProtoMsg(message: _124.Airdrop): _124.AirdropProtoMsg;
        };
    };
    const autopilot: {
        QueryClientImpl: typeof _280.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _130.QueryParamsRequest): Promise<_130.QueryParamsResponse>;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _130.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.QueryParamsRequest;
            fromPartial(_: Partial<_130.QueryParamsRequest>): _130.QueryParamsRequest;
            fromAmino(_: _130.QueryParamsRequestAmino): _130.QueryParamsRequest;
            toAmino(_: _130.QueryParamsRequest): _130.QueryParamsRequestAmino;
            fromAminoMsg(object: _130.QueryParamsRequestAminoMsg): _130.QueryParamsRequest;
            fromProtoMsg(message: _130.QueryParamsRequestProtoMsg): _130.QueryParamsRequest;
            toProto(message: _130.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _130.QueryParamsRequest): _130.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _130.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.QueryParamsResponse;
            fromPartial(object: Partial<_130.QueryParamsResponse>): _130.QueryParamsResponse;
            fromAmino(object: _130.QueryParamsResponseAmino): _130.QueryParamsResponse;
            toAmino(message: _130.QueryParamsResponse): _130.QueryParamsResponseAmino;
            fromAminoMsg(object: _130.QueryParamsResponseAminoMsg): _130.QueryParamsResponse;
            fromProtoMsg(message: _130.QueryParamsResponseProtoMsg): _130.QueryParamsResponse;
            toProto(message: _130.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _130.QueryParamsResponse): _130.QueryParamsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _129.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.Params;
            fromPartial(object: Partial<_129.Params>): _129.Params;
            fromAmino(object: _129.ParamsAmino): _129.Params;
            toAmino(message: _129.Params): _129.ParamsAmino;
            fromAminoMsg(object: _129.ParamsAminoMsg): _129.Params;
            fromProtoMsg(message: _129.ParamsProtoMsg): _129.Params;
            toProto(message: _129.Params): Uint8Array;
            toProtoMsg(message: _129.Params): _129.ParamsProtoMsg;
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
    };
    const claim: {
        MsgClientImpl: typeof _291.MsgClientImpl;
        QueryClientImpl: typeof _281.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            distributorAccountBalance(request: _134.QueryDistributorAccountBalanceRequest): Promise<_134.QueryDistributorAccountBalanceResponse>;
            params(request?: _134.QueryParamsRequest): Promise<_134.QueryParamsResponse>;
            claimRecord(request: _134.QueryClaimRecordRequest): Promise<_134.QueryClaimRecordResponse>;
            claimableForAction(request: _134.QueryClaimableForActionRequest): Promise<_134.QueryClaimableForActionResponse>;
            totalClaimable(request: _134.QueryTotalClaimableRequest): Promise<_134.QueryTotalClaimableResponse>;
            userVestings(request: _134.QueryUserVestingsRequest): Promise<_134.QueryUserVestingsResponse>;
            claimStatus(request: _134.QueryClaimStatusRequest): Promise<_134.QueryClaimStatusResponse>;
            claimMetadata(request?: _134.QueryClaimMetadataRequest): Promise<_134.QueryClaimMetadataResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                setAirdropAllocations(value: _135.MsgSetAirdropAllocations): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                claimFreeAmount(value: _135.MsgClaimFreeAmount): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createAirdrop(value: _135.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteAirdrop(value: _135.MsgDeleteAirdrop): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                setAirdropAllocations(value: _135.MsgSetAirdropAllocations): {
                    typeUrl: string;
                    value: _135.MsgSetAirdropAllocations;
                };
                claimFreeAmount(value: _135.MsgClaimFreeAmount): {
                    typeUrl: string;
                    value: _135.MsgClaimFreeAmount;
                };
                createAirdrop(value: _135.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _135.MsgCreateAirdrop;
                };
                deleteAirdrop(value: _135.MsgDeleteAirdrop): {
                    typeUrl: string;
                    value: _135.MsgDeleteAirdrop;
                };
            };
            fromPartial: {
                setAirdropAllocations(value: _135.MsgSetAirdropAllocations): {
                    typeUrl: string;
                    value: _135.MsgSetAirdropAllocations;
                };
                claimFreeAmount(value: _135.MsgClaimFreeAmount): {
                    typeUrl: string;
                    value: _135.MsgClaimFreeAmount;
                };
                createAirdrop(value: _135.MsgCreateAirdrop): {
                    typeUrl: string;
                    value: _135.MsgCreateAirdrop;
                };
                deleteAirdrop(value: _135.MsgDeleteAirdrop): {
                    typeUrl: string;
                    value: _135.MsgDeleteAirdrop;
                };
            };
        };
        AminoConverter: {
            "/stride.claim.MsgSetAirdropAllocations": {
                aminoType: string;
                toAmino: (message: _135.MsgSetAirdropAllocations) => _135.MsgSetAirdropAllocationsAmino;
                fromAmino: (object: _135.MsgSetAirdropAllocationsAmino) => _135.MsgSetAirdropAllocations;
            };
            "/stride.claim.MsgClaimFreeAmount": {
                aminoType: string;
                toAmino: (message: _135.MsgClaimFreeAmount) => _135.MsgClaimFreeAmountAmino;
                fromAmino: (object: _135.MsgClaimFreeAmountAmino) => _135.MsgClaimFreeAmount;
            };
            "/stride.claim.MsgCreateAirdrop": {
                aminoType: string;
                toAmino: (message: _135.MsgCreateAirdrop) => _135.MsgCreateAirdropAmino;
                fromAmino: (object: _135.MsgCreateAirdropAmino) => _135.MsgCreateAirdrop;
            };
            "/stride.claim.MsgDeleteAirdrop": {
                aminoType: string;
                toAmino: (message: _135.MsgDeleteAirdrop) => _135.MsgDeleteAirdropAmino;
                fromAmino: (object: _135.MsgDeleteAirdropAmino) => _135.MsgDeleteAirdrop;
            };
        };
        MsgSetAirdropAllocations: {
            typeUrl: string;
            encode(message: _135.MsgSetAirdropAllocations, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.MsgSetAirdropAllocations;
            fromPartial(object: Partial<_135.MsgSetAirdropAllocations>): _135.MsgSetAirdropAllocations;
            fromAmino(object: _135.MsgSetAirdropAllocationsAmino): _135.MsgSetAirdropAllocations;
            toAmino(message: _135.MsgSetAirdropAllocations): _135.MsgSetAirdropAllocationsAmino;
            fromAminoMsg(object: _135.MsgSetAirdropAllocationsAminoMsg): _135.MsgSetAirdropAllocations;
            fromProtoMsg(message: _135.MsgSetAirdropAllocationsProtoMsg): _135.MsgSetAirdropAllocations;
            toProto(message: _135.MsgSetAirdropAllocations): Uint8Array;
            toProtoMsg(message: _135.MsgSetAirdropAllocations): _135.MsgSetAirdropAllocationsProtoMsg;
        };
        MsgSetAirdropAllocationsResponse: {
            typeUrl: string;
            encode(_: _135.MsgSetAirdropAllocationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.MsgSetAirdropAllocationsResponse;
            fromPartial(_: Partial<_135.MsgSetAirdropAllocationsResponse>): _135.MsgSetAirdropAllocationsResponse;
            fromAmino(_: _135.MsgSetAirdropAllocationsResponseAmino): _135.MsgSetAirdropAllocationsResponse;
            toAmino(_: _135.MsgSetAirdropAllocationsResponse): _135.MsgSetAirdropAllocationsResponseAmino;
            fromAminoMsg(object: _135.MsgSetAirdropAllocationsResponseAminoMsg): _135.MsgSetAirdropAllocationsResponse;
            fromProtoMsg(message: _135.MsgSetAirdropAllocationsResponseProtoMsg): _135.MsgSetAirdropAllocationsResponse;
            toProto(message: _135.MsgSetAirdropAllocationsResponse): Uint8Array;
            toProtoMsg(message: _135.MsgSetAirdropAllocationsResponse): _135.MsgSetAirdropAllocationsResponseProtoMsg;
        };
        MsgClaimFreeAmount: {
            typeUrl: string;
            encode(message: _135.MsgClaimFreeAmount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.MsgClaimFreeAmount;
            fromPartial(object: Partial<_135.MsgClaimFreeAmount>): _135.MsgClaimFreeAmount;
            fromAmino(object: _135.MsgClaimFreeAmountAmino): _135.MsgClaimFreeAmount;
            toAmino(message: _135.MsgClaimFreeAmount): _135.MsgClaimFreeAmountAmino;
            fromAminoMsg(object: _135.MsgClaimFreeAmountAminoMsg): _135.MsgClaimFreeAmount;
            toAminoMsg(message: _135.MsgClaimFreeAmount): _135.MsgClaimFreeAmountAminoMsg;
            fromProtoMsg(message: _135.MsgClaimFreeAmountProtoMsg): _135.MsgClaimFreeAmount;
            toProto(message: _135.MsgClaimFreeAmount): Uint8Array;
            toProtoMsg(message: _135.MsgClaimFreeAmount): _135.MsgClaimFreeAmountProtoMsg;
        };
        MsgClaimFreeAmountResponse: {
            typeUrl: string;
            encode(message: _135.MsgClaimFreeAmountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.MsgClaimFreeAmountResponse;
            fromPartial(object: Partial<_135.MsgClaimFreeAmountResponse>): _135.MsgClaimFreeAmountResponse;
            fromAmino(object: _135.MsgClaimFreeAmountResponseAmino): _135.MsgClaimFreeAmountResponse;
            toAmino(message: _135.MsgClaimFreeAmountResponse): _135.MsgClaimFreeAmountResponseAmino;
            fromAminoMsg(object: _135.MsgClaimFreeAmountResponseAminoMsg): _135.MsgClaimFreeAmountResponse;
            fromProtoMsg(message: _135.MsgClaimFreeAmountResponseProtoMsg): _135.MsgClaimFreeAmountResponse;
            toProto(message: _135.MsgClaimFreeAmountResponse): Uint8Array;
            toProtoMsg(message: _135.MsgClaimFreeAmountResponse): _135.MsgClaimFreeAmountResponseProtoMsg;
        };
        MsgCreateAirdrop: {
            typeUrl: string;
            encode(message: _135.MsgCreateAirdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.MsgCreateAirdrop;
            fromPartial(object: Partial<_135.MsgCreateAirdrop>): _135.MsgCreateAirdrop;
            fromAmino(object: _135.MsgCreateAirdropAmino): _135.MsgCreateAirdrop;
            toAmino(message: _135.MsgCreateAirdrop): _135.MsgCreateAirdropAmino;
            fromAminoMsg(object: _135.MsgCreateAirdropAminoMsg): _135.MsgCreateAirdrop;
            fromProtoMsg(message: _135.MsgCreateAirdropProtoMsg): _135.MsgCreateAirdrop;
            toProto(message: _135.MsgCreateAirdrop): Uint8Array;
            toProtoMsg(message: _135.MsgCreateAirdrop): _135.MsgCreateAirdropProtoMsg;
        };
        MsgCreateAirdropResponse: {
            typeUrl: string;
            encode(_: _135.MsgCreateAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.MsgCreateAirdropResponse;
            fromPartial(_: Partial<_135.MsgCreateAirdropResponse>): _135.MsgCreateAirdropResponse;
            fromAmino(_: _135.MsgCreateAirdropResponseAmino): _135.MsgCreateAirdropResponse;
            toAmino(_: _135.MsgCreateAirdropResponse): _135.MsgCreateAirdropResponseAmino;
            fromAminoMsg(object: _135.MsgCreateAirdropResponseAminoMsg): _135.MsgCreateAirdropResponse;
            fromProtoMsg(message: _135.MsgCreateAirdropResponseProtoMsg): _135.MsgCreateAirdropResponse;
            toProto(message: _135.MsgCreateAirdropResponse): Uint8Array;
            toProtoMsg(message: _135.MsgCreateAirdropResponse): _135.MsgCreateAirdropResponseProtoMsg;
        };
        MsgDeleteAirdrop: {
            typeUrl: string;
            encode(message: _135.MsgDeleteAirdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.MsgDeleteAirdrop;
            fromPartial(object: Partial<_135.MsgDeleteAirdrop>): _135.MsgDeleteAirdrop;
            fromAmino(object: _135.MsgDeleteAirdropAmino): _135.MsgDeleteAirdrop;
            toAmino(message: _135.MsgDeleteAirdrop): _135.MsgDeleteAirdropAmino;
            fromAminoMsg(object: _135.MsgDeleteAirdropAminoMsg): _135.MsgDeleteAirdrop;
            fromProtoMsg(message: _135.MsgDeleteAirdropProtoMsg): _135.MsgDeleteAirdrop;
            toProto(message: _135.MsgDeleteAirdrop): Uint8Array;
            toProtoMsg(message: _135.MsgDeleteAirdrop): _135.MsgDeleteAirdropProtoMsg;
        };
        MsgDeleteAirdropResponse: {
            typeUrl: string;
            encode(_: _135.MsgDeleteAirdropResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.MsgDeleteAirdropResponse;
            fromPartial(_: Partial<_135.MsgDeleteAirdropResponse>): _135.MsgDeleteAirdropResponse;
            fromAmino(_: _135.MsgDeleteAirdropResponseAmino): _135.MsgDeleteAirdropResponse;
            toAmino(_: _135.MsgDeleteAirdropResponse): _135.MsgDeleteAirdropResponseAmino;
            fromAminoMsg(object: _135.MsgDeleteAirdropResponseAminoMsg): _135.MsgDeleteAirdropResponse;
            fromProtoMsg(message: _135.MsgDeleteAirdropResponseProtoMsg): _135.MsgDeleteAirdropResponse;
            toProto(message: _135.MsgDeleteAirdropResponse): Uint8Array;
            toProtoMsg(message: _135.MsgDeleteAirdropResponse): _135.MsgDeleteAirdropResponseProtoMsg;
        };
        ClaimStatus: {
            typeUrl: string;
            encode(message: _134.ClaimStatus, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.ClaimStatus;
            fromPartial(object: Partial<_134.ClaimStatus>): _134.ClaimStatus;
            fromAmino(object: _134.ClaimStatusAmino): _134.ClaimStatus;
            toAmino(message: _134.ClaimStatus): _134.ClaimStatusAmino;
            fromAminoMsg(object: _134.ClaimStatusAminoMsg): _134.ClaimStatus;
            fromProtoMsg(message: _134.ClaimStatusProtoMsg): _134.ClaimStatus;
            toProto(message: _134.ClaimStatus): Uint8Array;
            toProtoMsg(message: _134.ClaimStatus): _134.ClaimStatusProtoMsg;
        };
        QueryClaimStatusRequest: {
            typeUrl: string;
            encode(message: _134.QueryClaimStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.QueryClaimStatusRequest;
            fromPartial(object: Partial<_134.QueryClaimStatusRequest>): _134.QueryClaimStatusRequest;
            fromAmino(object: _134.QueryClaimStatusRequestAmino): _134.QueryClaimStatusRequest;
            toAmino(message: _134.QueryClaimStatusRequest): _134.QueryClaimStatusRequestAmino;
            fromAminoMsg(object: _134.QueryClaimStatusRequestAminoMsg): _134.QueryClaimStatusRequest;
            fromProtoMsg(message: _134.QueryClaimStatusRequestProtoMsg): _134.QueryClaimStatusRequest;
            toProto(message: _134.QueryClaimStatusRequest): Uint8Array;
            toProtoMsg(message: _134.QueryClaimStatusRequest): _134.QueryClaimStatusRequestProtoMsg;
        };
        QueryClaimStatusResponse: {
            typeUrl: string;
            encode(message: _134.QueryClaimStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.QueryClaimStatusResponse;
            fromPartial(object: Partial<_134.QueryClaimStatusResponse>): _134.QueryClaimStatusResponse;
            fromAmino(object: _134.QueryClaimStatusResponseAmino): _134.QueryClaimStatusResponse;
            toAmino(message: _134.QueryClaimStatusResponse): _134.QueryClaimStatusResponseAmino;
            fromAminoMsg(object: _134.QueryClaimStatusResponseAminoMsg): _134.QueryClaimStatusResponse;
            fromProtoMsg(message: _134.QueryClaimStatusResponseProtoMsg): _134.QueryClaimStatusResponse;
            toProto(message: _134.QueryClaimStatusResponse): Uint8Array;
            toProtoMsg(message: _134.QueryClaimStatusResponse): _134.QueryClaimStatusResponseProtoMsg;
        };
        ClaimMetadata: {
            typeUrl: string;
            encode(message: _134.ClaimMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.ClaimMetadata;
            fromPartial(object: Partial<_134.ClaimMetadata>): _134.ClaimMetadata;
            fromAmino(object: _134.ClaimMetadataAmino): _134.ClaimMetadata;
            toAmino(message: _134.ClaimMetadata): _134.ClaimMetadataAmino;
            fromAminoMsg(object: _134.ClaimMetadataAminoMsg): _134.ClaimMetadata;
            fromProtoMsg(message: _134.ClaimMetadataProtoMsg): _134.ClaimMetadata;
            toProto(message: _134.ClaimMetadata): Uint8Array;
            toProtoMsg(message: _134.ClaimMetadata): _134.ClaimMetadataProtoMsg;
        };
        QueryClaimMetadataRequest: {
            typeUrl: string;
            encode(_: _134.QueryClaimMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.QueryClaimMetadataRequest;
            fromPartial(_: Partial<_134.QueryClaimMetadataRequest>): _134.QueryClaimMetadataRequest;
            fromAmino(_: _134.QueryClaimMetadataRequestAmino): _134.QueryClaimMetadataRequest;
            toAmino(_: _134.QueryClaimMetadataRequest): _134.QueryClaimMetadataRequestAmino;
            fromAminoMsg(object: _134.QueryClaimMetadataRequestAminoMsg): _134.QueryClaimMetadataRequest;
            fromProtoMsg(message: _134.QueryClaimMetadataRequestProtoMsg): _134.QueryClaimMetadataRequest;
            toProto(message: _134.QueryClaimMetadataRequest): Uint8Array;
            toProtoMsg(message: _134.QueryClaimMetadataRequest): _134.QueryClaimMetadataRequestProtoMsg;
        };
        QueryClaimMetadataResponse: {
            typeUrl: string;
            encode(message: _134.QueryClaimMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.QueryClaimMetadataResponse;
            fromPartial(object: Partial<_134.QueryClaimMetadataResponse>): _134.QueryClaimMetadataResponse;
            fromAmino(object: _134.QueryClaimMetadataResponseAmino): _134.QueryClaimMetadataResponse;
            toAmino(message: _134.QueryClaimMetadataResponse): _134.QueryClaimMetadataResponseAmino;
            fromAminoMsg(object: _134.QueryClaimMetadataResponseAminoMsg): _134.QueryClaimMetadataResponse;
            fromProtoMsg(message: _134.QueryClaimMetadataResponseProtoMsg): _134.QueryClaimMetadataResponse;
            toProto(message: _134.QueryClaimMetadataResponse): Uint8Array;
            toProtoMsg(message: _134.QueryClaimMetadataResponse): _134.QueryClaimMetadataResponseProtoMsg;
        };
        QueryDistributorAccountBalanceRequest: {
            typeUrl: string;
            encode(message: _134.QueryDistributorAccountBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.QueryDistributorAccountBalanceRequest;
            fromPartial(object: Partial<_134.QueryDistributorAccountBalanceRequest>): _134.QueryDistributorAccountBalanceRequest;
            fromAmino(object: _134.QueryDistributorAccountBalanceRequestAmino): _134.QueryDistributorAccountBalanceRequest;
            toAmino(message: _134.QueryDistributorAccountBalanceRequest): _134.QueryDistributorAccountBalanceRequestAmino;
            fromAminoMsg(object: _134.QueryDistributorAccountBalanceRequestAminoMsg): _134.QueryDistributorAccountBalanceRequest;
            fromProtoMsg(message: _134.QueryDistributorAccountBalanceRequestProtoMsg): _134.QueryDistributorAccountBalanceRequest;
            toProto(message: _134.QueryDistributorAccountBalanceRequest): Uint8Array;
            toProtoMsg(message: _134.QueryDistributorAccountBalanceRequest): _134.QueryDistributorAccountBalanceRequestProtoMsg;
        };
        QueryDistributorAccountBalanceResponse: {
            typeUrl: string;
            encode(message: _134.QueryDistributorAccountBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.QueryDistributorAccountBalanceResponse;
            fromPartial(object: Partial<_134.QueryDistributorAccountBalanceResponse>): _134.QueryDistributorAccountBalanceResponse;
            fromAmino(object: _134.QueryDistributorAccountBalanceResponseAmino): _134.QueryDistributorAccountBalanceResponse;
            toAmino(message: _134.QueryDistributorAccountBalanceResponse): _134.QueryDistributorAccountBalanceResponseAmino;
            fromAminoMsg(object: _134.QueryDistributorAccountBalanceResponseAminoMsg): _134.QueryDistributorAccountBalanceResponse;
            fromProtoMsg(message: _134.QueryDistributorAccountBalanceResponseProtoMsg): _134.QueryDistributorAccountBalanceResponse;
            toProto(message: _134.QueryDistributorAccountBalanceResponse): Uint8Array;
            toProtoMsg(message: _134.QueryDistributorAccountBalanceResponse): _134.QueryDistributorAccountBalanceResponseProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _134.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.QueryParamsRequest;
            fromPartial(_: Partial<_134.QueryParamsRequest>): _134.QueryParamsRequest;
            fromAmino(_: _134.QueryParamsRequestAmino): _134.QueryParamsRequest;
            toAmino(_: _134.QueryParamsRequest): _134.QueryParamsRequestAmino;
            fromAminoMsg(object: _134.QueryParamsRequestAminoMsg): _134.QueryParamsRequest;
            fromProtoMsg(message: _134.QueryParamsRequestProtoMsg): _134.QueryParamsRequest;
            toProto(message: _134.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _134.QueryParamsRequest): _134.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _134.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.QueryParamsResponse;
            fromPartial(object: Partial<_134.QueryParamsResponse>): _134.QueryParamsResponse;
            fromAmino(object: _134.QueryParamsResponseAmino): _134.QueryParamsResponse;
            toAmino(message: _134.QueryParamsResponse): _134.QueryParamsResponseAmino;
            fromAminoMsg(object: _134.QueryParamsResponseAminoMsg): _134.QueryParamsResponse;
            fromProtoMsg(message: _134.QueryParamsResponseProtoMsg): _134.QueryParamsResponse;
            toProto(message: _134.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _134.QueryParamsResponse): _134.QueryParamsResponseProtoMsg;
        };
        QueryClaimRecordRequest: {
            typeUrl: string;
            encode(message: _134.QueryClaimRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.QueryClaimRecordRequest;
            fromPartial(object: Partial<_134.QueryClaimRecordRequest>): _134.QueryClaimRecordRequest;
            fromAmino(object: _134.QueryClaimRecordRequestAmino): _134.QueryClaimRecordRequest;
            toAmino(message: _134.QueryClaimRecordRequest): _134.QueryClaimRecordRequestAmino;
            fromAminoMsg(object: _134.QueryClaimRecordRequestAminoMsg): _134.QueryClaimRecordRequest;
            fromProtoMsg(message: _134.QueryClaimRecordRequestProtoMsg): _134.QueryClaimRecordRequest;
            toProto(message: _134.QueryClaimRecordRequest): Uint8Array;
            toProtoMsg(message: _134.QueryClaimRecordRequest): _134.QueryClaimRecordRequestProtoMsg;
        };
        QueryClaimRecordResponse: {
            typeUrl: string;
            encode(message: _134.QueryClaimRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.QueryClaimRecordResponse;
            fromPartial(object: Partial<_134.QueryClaimRecordResponse>): _134.QueryClaimRecordResponse;
            fromAmino(object: _134.QueryClaimRecordResponseAmino): _134.QueryClaimRecordResponse;
            toAmino(message: _134.QueryClaimRecordResponse): _134.QueryClaimRecordResponseAmino;
            fromAminoMsg(object: _134.QueryClaimRecordResponseAminoMsg): _134.QueryClaimRecordResponse;
            fromProtoMsg(message: _134.QueryClaimRecordResponseProtoMsg): _134.QueryClaimRecordResponse;
            toProto(message: _134.QueryClaimRecordResponse): Uint8Array;
            toProtoMsg(message: _134.QueryClaimRecordResponse): _134.QueryClaimRecordResponseProtoMsg;
        };
        QueryClaimableForActionRequest: {
            typeUrl: string;
            encode(message: _134.QueryClaimableForActionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.QueryClaimableForActionRequest;
            fromPartial(object: Partial<_134.QueryClaimableForActionRequest>): _134.QueryClaimableForActionRequest;
            fromAmino(object: _134.QueryClaimableForActionRequestAmino): _134.QueryClaimableForActionRequest;
            toAmino(message: _134.QueryClaimableForActionRequest): _134.QueryClaimableForActionRequestAmino;
            fromAminoMsg(object: _134.QueryClaimableForActionRequestAminoMsg): _134.QueryClaimableForActionRequest;
            fromProtoMsg(message: _134.QueryClaimableForActionRequestProtoMsg): _134.QueryClaimableForActionRequest;
            toProto(message: _134.QueryClaimableForActionRequest): Uint8Array;
            toProtoMsg(message: _134.QueryClaimableForActionRequest): _134.QueryClaimableForActionRequestProtoMsg;
        };
        QueryClaimableForActionResponse: {
            typeUrl: string;
            encode(message: _134.QueryClaimableForActionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.QueryClaimableForActionResponse;
            fromPartial(object: Partial<_134.QueryClaimableForActionResponse>): _134.QueryClaimableForActionResponse;
            fromAmino(object: _134.QueryClaimableForActionResponseAmino): _134.QueryClaimableForActionResponse;
            toAmino(message: _134.QueryClaimableForActionResponse): _134.QueryClaimableForActionResponseAmino;
            fromAminoMsg(object: _134.QueryClaimableForActionResponseAminoMsg): _134.QueryClaimableForActionResponse;
            fromProtoMsg(message: _134.QueryClaimableForActionResponseProtoMsg): _134.QueryClaimableForActionResponse;
            toProto(message: _134.QueryClaimableForActionResponse): Uint8Array;
            toProtoMsg(message: _134.QueryClaimableForActionResponse): _134.QueryClaimableForActionResponseProtoMsg;
        };
        QueryTotalClaimableRequest: {
            typeUrl: string;
            encode(message: _134.QueryTotalClaimableRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.QueryTotalClaimableRequest;
            fromPartial(object: Partial<_134.QueryTotalClaimableRequest>): _134.QueryTotalClaimableRequest;
            fromAmino(object: _134.QueryTotalClaimableRequestAmino): _134.QueryTotalClaimableRequest;
            toAmino(message: _134.QueryTotalClaimableRequest): _134.QueryTotalClaimableRequestAmino;
            fromAminoMsg(object: _134.QueryTotalClaimableRequestAminoMsg): _134.QueryTotalClaimableRequest;
            fromProtoMsg(message: _134.QueryTotalClaimableRequestProtoMsg): _134.QueryTotalClaimableRequest;
            toProto(message: _134.QueryTotalClaimableRequest): Uint8Array;
            toProtoMsg(message: _134.QueryTotalClaimableRequest): _134.QueryTotalClaimableRequestProtoMsg;
        };
        QueryTotalClaimableResponse: {
            typeUrl: string;
            encode(message: _134.QueryTotalClaimableResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.QueryTotalClaimableResponse;
            fromPartial(object: Partial<_134.QueryTotalClaimableResponse>): _134.QueryTotalClaimableResponse;
            fromAmino(object: _134.QueryTotalClaimableResponseAmino): _134.QueryTotalClaimableResponse;
            toAmino(message: _134.QueryTotalClaimableResponse): _134.QueryTotalClaimableResponseAmino;
            fromAminoMsg(object: _134.QueryTotalClaimableResponseAminoMsg): _134.QueryTotalClaimableResponse;
            fromProtoMsg(message: _134.QueryTotalClaimableResponseProtoMsg): _134.QueryTotalClaimableResponse;
            toProto(message: _134.QueryTotalClaimableResponse): Uint8Array;
            toProtoMsg(message: _134.QueryTotalClaimableResponse): _134.QueryTotalClaimableResponseProtoMsg;
        };
        QueryUserVestingsRequest: {
            typeUrl: string;
            encode(message: _134.QueryUserVestingsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.QueryUserVestingsRequest;
            fromPartial(object: Partial<_134.QueryUserVestingsRequest>): _134.QueryUserVestingsRequest;
            fromAmino(object: _134.QueryUserVestingsRequestAmino): _134.QueryUserVestingsRequest;
            toAmino(message: _134.QueryUserVestingsRequest): _134.QueryUserVestingsRequestAmino;
            fromAminoMsg(object: _134.QueryUserVestingsRequestAminoMsg): _134.QueryUserVestingsRequest;
            fromProtoMsg(message: _134.QueryUserVestingsRequestProtoMsg): _134.QueryUserVestingsRequest;
            toProto(message: _134.QueryUserVestingsRequest): Uint8Array;
            toProtoMsg(message: _134.QueryUserVestingsRequest): _134.QueryUserVestingsRequestProtoMsg;
        };
        QueryUserVestingsResponse: {
            typeUrl: string;
            encode(message: _134.QueryUserVestingsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.QueryUserVestingsResponse;
            fromPartial(object: Partial<_134.QueryUserVestingsResponse>): _134.QueryUserVestingsResponse;
            fromAmino(object: _134.QueryUserVestingsResponseAmino): _134.QueryUserVestingsResponse;
            toAmino(message: _134.QueryUserVestingsResponse): _134.QueryUserVestingsResponseAmino;
            fromAminoMsg(object: _134.QueryUserVestingsResponseAminoMsg): _134.QueryUserVestingsResponse;
            fromProtoMsg(message: _134.QueryUserVestingsResponseProtoMsg): _134.QueryUserVestingsResponse;
            toProto(message: _134.QueryUserVestingsResponse): Uint8Array;
            toProtoMsg(message: _134.QueryUserVestingsResponse): _134.QueryUserVestingsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _133.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.Params;
            fromPartial(object: Partial<_133.Params>): _133.Params;
            fromAmino(object: _133.ParamsAmino): _133.Params;
            toAmino(message: _133.Params): _133.ParamsAmino;
            fromAminoMsg(object: _133.ParamsAminoMsg): _133.Params;
            fromProtoMsg(message: _133.ParamsProtoMsg): _133.Params;
            toProto(message: _133.Params): Uint8Array;
            toProtoMsg(message: _133.Params): _133.ParamsProtoMsg;
        };
        Airdrop: {
            typeUrl: string;
            encode(message: _133.Airdrop, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.Airdrop;
            fromPartial(object: Partial<_133.Airdrop>): _133.Airdrop;
            fromAmino(object: _133.AirdropAmino): _133.Airdrop;
            toAmino(message: _133.Airdrop): _133.AirdropAmino;
            fromAminoMsg(object: _133.AirdropAminoMsg): _133.Airdrop;
            fromProtoMsg(message: _133.AirdropProtoMsg): _133.Airdrop;
            toProto(message: _133.Airdrop): Uint8Array;
            toProtoMsg(message: _133.Airdrop): _133.AirdropProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _132.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.GenesisState;
            fromPartial(object: Partial<_132.GenesisState>): _132.GenesisState;
            fromAmino(object: _132.GenesisStateAmino): _132.GenesisState;
            toAmino(message: _132.GenesisState): _132.GenesisStateAmino;
            fromAminoMsg(object: _132.GenesisStateAminoMsg): _132.GenesisState;
            fromProtoMsg(message: _132.GenesisStateProtoMsg): _132.GenesisState;
            toProto(message: _132.GenesisState): Uint8Array;
            toProtoMsg(message: _132.GenesisState): _132.GenesisStateProtoMsg;
        };
        actionFromJSON(object: any): _131.Action;
        actionToJSON(object: _131.Action): string;
        Action: typeof _131.Action;
        ActionSDKType: typeof _131.Action;
        ActionAmino: typeof _131.Action;
        ClaimRecord: {
            typeUrl: string;
            encode(message: _131.ClaimRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.ClaimRecord;
            fromPartial(object: Partial<_131.ClaimRecord>): _131.ClaimRecord;
            fromAmino(object: _131.ClaimRecordAmino): _131.ClaimRecord;
            toAmino(message: _131.ClaimRecord): _131.ClaimRecordAmino;
            fromAminoMsg(object: _131.ClaimRecordAminoMsg): _131.ClaimRecord;
            fromProtoMsg(message: _131.ClaimRecordProtoMsg): _131.ClaimRecord;
            toProto(message: _131.ClaimRecord): Uint8Array;
            toProtoMsg(message: _131.ClaimRecord): _131.ClaimRecordProtoMsg;
        };
    };
    const epochs: {
        QueryClientImpl: typeof _282.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            epochInfos(request?: _137.QueryEpochsInfoRequest): Promise<_137.QueryEpochsInfoResponse>;
            currentEpoch(request: _137.QueryCurrentEpochRequest): Promise<_137.QueryCurrentEpochResponse>;
            epochInfo(request: _137.QueryEpochInfoRequest): Promise<_137.QueryEpochInfoResponse>;
        };
        QueryEpochsInfoRequest: {
            typeUrl: string;
            encode(message: _137.QueryEpochsInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryEpochsInfoRequest;
            fromPartial(object: Partial<_137.QueryEpochsInfoRequest>): _137.QueryEpochsInfoRequest;
            fromAmino(object: _137.QueryEpochsInfoRequestAmino): _137.QueryEpochsInfoRequest;
            toAmino(message: _137.QueryEpochsInfoRequest): _137.QueryEpochsInfoRequestAmino;
            fromAminoMsg(object: _137.QueryEpochsInfoRequestAminoMsg): _137.QueryEpochsInfoRequest;
            fromProtoMsg(message: _137.QueryEpochsInfoRequestProtoMsg): _137.QueryEpochsInfoRequest;
            toProto(message: _137.QueryEpochsInfoRequest): Uint8Array;
            toProtoMsg(message: _137.QueryEpochsInfoRequest): _137.QueryEpochsInfoRequestProtoMsg;
        };
        QueryEpochsInfoResponse: {
            typeUrl: string;
            encode(message: _137.QueryEpochsInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryEpochsInfoResponse;
            fromPartial(object: Partial<_137.QueryEpochsInfoResponse>): _137.QueryEpochsInfoResponse;
            fromAmino(object: _137.QueryEpochsInfoResponseAmino): _137.QueryEpochsInfoResponse;
            toAmino(message: _137.QueryEpochsInfoResponse): _137.QueryEpochsInfoResponseAmino;
            fromAminoMsg(object: _137.QueryEpochsInfoResponseAminoMsg): _137.QueryEpochsInfoResponse;
            fromProtoMsg(message: _137.QueryEpochsInfoResponseProtoMsg): _137.QueryEpochsInfoResponse;
            toProto(message: _137.QueryEpochsInfoResponse): Uint8Array;
            toProtoMsg(message: _137.QueryEpochsInfoResponse): _137.QueryEpochsInfoResponseProtoMsg;
        };
        QueryCurrentEpochRequest: {
            typeUrl: string;
            encode(message: _137.QueryCurrentEpochRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryCurrentEpochRequest;
            fromPartial(object: Partial<_137.QueryCurrentEpochRequest>): _137.QueryCurrentEpochRequest;
            fromAmino(object: _137.QueryCurrentEpochRequestAmino): _137.QueryCurrentEpochRequest;
            toAmino(message: _137.QueryCurrentEpochRequest): _137.QueryCurrentEpochRequestAmino;
            fromAminoMsg(object: _137.QueryCurrentEpochRequestAminoMsg): _137.QueryCurrentEpochRequest;
            fromProtoMsg(message: _137.QueryCurrentEpochRequestProtoMsg): _137.QueryCurrentEpochRequest;
            toProto(message: _137.QueryCurrentEpochRequest): Uint8Array;
            toProtoMsg(message: _137.QueryCurrentEpochRequest): _137.QueryCurrentEpochRequestProtoMsg;
        };
        QueryCurrentEpochResponse: {
            typeUrl: string;
            encode(message: _137.QueryCurrentEpochResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryCurrentEpochResponse;
            fromPartial(object: Partial<_137.QueryCurrentEpochResponse>): _137.QueryCurrentEpochResponse;
            fromAmino(object: _137.QueryCurrentEpochResponseAmino): _137.QueryCurrentEpochResponse;
            toAmino(message: _137.QueryCurrentEpochResponse): _137.QueryCurrentEpochResponseAmino;
            fromAminoMsg(object: _137.QueryCurrentEpochResponseAminoMsg): _137.QueryCurrentEpochResponse;
            fromProtoMsg(message: _137.QueryCurrentEpochResponseProtoMsg): _137.QueryCurrentEpochResponse;
            toProto(message: _137.QueryCurrentEpochResponse): Uint8Array;
            toProtoMsg(message: _137.QueryCurrentEpochResponse): _137.QueryCurrentEpochResponseProtoMsg;
        };
        QueryEpochInfoRequest: {
            typeUrl: string;
            encode(message: _137.QueryEpochInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryEpochInfoRequest;
            fromPartial(object: Partial<_137.QueryEpochInfoRequest>): _137.QueryEpochInfoRequest;
            fromAmino(object: _137.QueryEpochInfoRequestAmino): _137.QueryEpochInfoRequest;
            toAmino(message: _137.QueryEpochInfoRequest): _137.QueryEpochInfoRequestAmino;
            fromAminoMsg(object: _137.QueryEpochInfoRequestAminoMsg): _137.QueryEpochInfoRequest;
            fromProtoMsg(message: _137.QueryEpochInfoRequestProtoMsg): _137.QueryEpochInfoRequest;
            toProto(message: _137.QueryEpochInfoRequest): Uint8Array;
            toProtoMsg(message: _137.QueryEpochInfoRequest): _137.QueryEpochInfoRequestProtoMsg;
        };
        QueryEpochInfoResponse: {
            typeUrl: string;
            encode(message: _137.QueryEpochInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryEpochInfoResponse;
            fromPartial(object: Partial<_137.QueryEpochInfoResponse>): _137.QueryEpochInfoResponse;
            fromAmino(object: _137.QueryEpochInfoResponseAmino): _137.QueryEpochInfoResponse;
            toAmino(message: _137.QueryEpochInfoResponse): _137.QueryEpochInfoResponseAmino;
            fromAminoMsg(object: _137.QueryEpochInfoResponseAminoMsg): _137.QueryEpochInfoResponse;
            fromProtoMsg(message: _137.QueryEpochInfoResponseProtoMsg): _137.QueryEpochInfoResponse;
            toProto(message: _137.QueryEpochInfoResponse): Uint8Array;
            toProtoMsg(message: _137.QueryEpochInfoResponse): _137.QueryEpochInfoResponseProtoMsg;
        };
        EpochInfo: {
            typeUrl: string;
            encode(message: _136.EpochInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.EpochInfo;
            fromPartial(object: Partial<_136.EpochInfo>): _136.EpochInfo;
            fromAmino(object: _136.EpochInfoAmino): _136.EpochInfo;
            toAmino(message: _136.EpochInfo): _136.EpochInfoAmino;
            fromAminoMsg(object: _136.EpochInfoAminoMsg): _136.EpochInfo;
            fromProtoMsg(message: _136.EpochInfoProtoMsg): _136.EpochInfo;
            toProto(message: _136.EpochInfo): Uint8Array;
            toProtoMsg(message: _136.EpochInfo): _136.EpochInfoProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _136.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.GenesisState;
            fromPartial(object: Partial<_136.GenesisState>): _136.GenesisState;
            fromAmino(object: _136.GenesisStateAmino): _136.GenesisState;
            toAmino(message: _136.GenesisState): _136.GenesisStateAmino;
            fromAminoMsg(object: _136.GenesisStateAminoMsg): _136.GenesisState;
            fromProtoMsg(message: _136.GenesisStateProtoMsg): _136.GenesisState;
            toProto(message: _136.GenesisState): Uint8Array;
            toProtoMsg(message: _136.GenesisState): _136.GenesisStateProtoMsg;
        };
    };
    const icacallbacks: {
        QueryClientImpl: typeof _283.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _142.QueryParamsRequest): Promise<_142.QueryParamsResponse>;
            callbackData(request: _142.QueryGetCallbackDataRequest): Promise<_142.QueryGetCallbackDataResponse>;
            callbackDataAll(request?: _142.QueryAllCallbackDataRequest): Promise<_142.QueryAllCallbackDataResponse>;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _142.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.QueryParamsRequest;
            fromPartial(_: Partial<_142.QueryParamsRequest>): _142.QueryParamsRequest;
            fromAmino(_: _142.QueryParamsRequestAmino): _142.QueryParamsRequest;
            toAmino(_: _142.QueryParamsRequest): _142.QueryParamsRequestAmino;
            fromAminoMsg(object: _142.QueryParamsRequestAminoMsg): _142.QueryParamsRequest;
            fromProtoMsg(message: _142.QueryParamsRequestProtoMsg): _142.QueryParamsRequest;
            toProto(message: _142.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _142.QueryParamsRequest): _142.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _142.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.QueryParamsResponse;
            fromPartial(object: Partial<_142.QueryParamsResponse>): _142.QueryParamsResponse;
            fromAmino(object: _142.QueryParamsResponseAmino): _142.QueryParamsResponse;
            toAmino(message: _142.QueryParamsResponse): _142.QueryParamsResponseAmino;
            fromAminoMsg(object: _142.QueryParamsResponseAminoMsg): _142.QueryParamsResponse;
            fromProtoMsg(message: _142.QueryParamsResponseProtoMsg): _142.QueryParamsResponse;
            toProto(message: _142.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _142.QueryParamsResponse): _142.QueryParamsResponseProtoMsg;
        };
        QueryGetCallbackDataRequest: {
            typeUrl: string;
            encode(message: _142.QueryGetCallbackDataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.QueryGetCallbackDataRequest;
            fromPartial(object: Partial<_142.QueryGetCallbackDataRequest>): _142.QueryGetCallbackDataRequest;
            fromAmino(object: _142.QueryGetCallbackDataRequestAmino): _142.QueryGetCallbackDataRequest;
            toAmino(message: _142.QueryGetCallbackDataRequest): _142.QueryGetCallbackDataRequestAmino;
            fromAminoMsg(object: _142.QueryGetCallbackDataRequestAminoMsg): _142.QueryGetCallbackDataRequest;
            fromProtoMsg(message: _142.QueryGetCallbackDataRequestProtoMsg): _142.QueryGetCallbackDataRequest;
            toProto(message: _142.QueryGetCallbackDataRequest): Uint8Array;
            toProtoMsg(message: _142.QueryGetCallbackDataRequest): _142.QueryGetCallbackDataRequestProtoMsg;
        };
        QueryGetCallbackDataResponse: {
            typeUrl: string;
            encode(message: _142.QueryGetCallbackDataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.QueryGetCallbackDataResponse;
            fromPartial(object: Partial<_142.QueryGetCallbackDataResponse>): _142.QueryGetCallbackDataResponse;
            fromAmino(object: _142.QueryGetCallbackDataResponseAmino): _142.QueryGetCallbackDataResponse;
            toAmino(message: _142.QueryGetCallbackDataResponse): _142.QueryGetCallbackDataResponseAmino;
            fromAminoMsg(object: _142.QueryGetCallbackDataResponseAminoMsg): _142.QueryGetCallbackDataResponse;
            fromProtoMsg(message: _142.QueryGetCallbackDataResponseProtoMsg): _142.QueryGetCallbackDataResponse;
            toProto(message: _142.QueryGetCallbackDataResponse): Uint8Array;
            toProtoMsg(message: _142.QueryGetCallbackDataResponse): _142.QueryGetCallbackDataResponseProtoMsg;
        };
        QueryAllCallbackDataRequest: {
            typeUrl: string;
            encode(message: _142.QueryAllCallbackDataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.QueryAllCallbackDataRequest;
            fromPartial(object: Partial<_142.QueryAllCallbackDataRequest>): _142.QueryAllCallbackDataRequest;
            fromAmino(object: _142.QueryAllCallbackDataRequestAmino): _142.QueryAllCallbackDataRequest;
            toAmino(message: _142.QueryAllCallbackDataRequest): _142.QueryAllCallbackDataRequestAmino;
            fromAminoMsg(object: _142.QueryAllCallbackDataRequestAminoMsg): _142.QueryAllCallbackDataRequest;
            fromProtoMsg(message: _142.QueryAllCallbackDataRequestProtoMsg): _142.QueryAllCallbackDataRequest;
            toProto(message: _142.QueryAllCallbackDataRequest): Uint8Array;
            toProtoMsg(message: _142.QueryAllCallbackDataRequest): _142.QueryAllCallbackDataRequestProtoMsg;
        };
        QueryAllCallbackDataResponse: {
            typeUrl: string;
            encode(message: _142.QueryAllCallbackDataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.QueryAllCallbackDataResponse;
            fromPartial(object: Partial<_142.QueryAllCallbackDataResponse>): _142.QueryAllCallbackDataResponse;
            fromAmino(object: _142.QueryAllCallbackDataResponseAmino): _142.QueryAllCallbackDataResponse;
            toAmino(message: _142.QueryAllCallbackDataResponse): _142.QueryAllCallbackDataResponseAmino;
            fromAminoMsg(object: _142.QueryAllCallbackDataResponseAminoMsg): _142.QueryAllCallbackDataResponse;
            fromProtoMsg(message: _142.QueryAllCallbackDataResponseProtoMsg): _142.QueryAllCallbackDataResponse;
            toProto(message: _142.QueryAllCallbackDataResponse): Uint8Array;
            toProtoMsg(message: _142.QueryAllCallbackDataResponse): _142.QueryAllCallbackDataResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _141.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.Params;
            fromPartial(_: Partial<_141.Params>): _141.Params;
            fromAmino(_: _141.ParamsAmino): _141.Params;
            toAmino(_: _141.Params): _141.ParamsAmino;
            fromAminoMsg(object: _141.ParamsAminoMsg): _141.Params;
            fromProtoMsg(message: _141.ParamsProtoMsg): _141.Params;
            toProto(message: _141.Params): Uint8Array;
            toProtoMsg(message: _141.Params): _141.ParamsProtoMsg;
        };
        IcacallbacksPacketData: {
            typeUrl: string;
            encode(message: _140.IcacallbacksPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.IcacallbacksPacketData;
            fromPartial(object: Partial<_140.IcacallbacksPacketData>): _140.IcacallbacksPacketData;
            fromAmino(object: _140.IcacallbacksPacketDataAmino): _140.IcacallbacksPacketData;
            toAmino(message: _140.IcacallbacksPacketData): _140.IcacallbacksPacketDataAmino;
            fromAminoMsg(object: _140.IcacallbacksPacketDataAminoMsg): _140.IcacallbacksPacketData;
            fromProtoMsg(message: _140.IcacallbacksPacketDataProtoMsg): _140.IcacallbacksPacketData;
            toProto(message: _140.IcacallbacksPacketData): Uint8Array;
            toProtoMsg(message: _140.IcacallbacksPacketData): _140.IcacallbacksPacketDataProtoMsg;
        };
        NoData: {
            typeUrl: string;
            encode(_: _140.NoData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.NoData;
            fromPartial(_: Partial<_140.NoData>): _140.NoData;
            fromAmino(_: _140.NoDataAmino): _140.NoData;
            toAmino(_: _140.NoData): _140.NoDataAmino;
            fromAminoMsg(object: _140.NoDataAminoMsg): _140.NoData;
            fromProtoMsg(message: _140.NoDataProtoMsg): _140.NoData;
            toProto(message: _140.NoData): Uint8Array;
            toProtoMsg(message: _140.NoData): _140.NoDataProtoMsg;
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
        CallbackData: {
            typeUrl: string;
            encode(message: _138.CallbackData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.CallbackData;
            fromPartial(object: Partial<_138.CallbackData>): _138.CallbackData;
            fromAmino(object: _138.CallbackDataAmino): _138.CallbackData;
            toAmino(message: _138.CallbackData): _138.CallbackDataAmino;
            fromAminoMsg(object: _138.CallbackDataAminoMsg): _138.CallbackData;
            fromProtoMsg(message: _138.CallbackDataProtoMsg): _138.CallbackData;
            toProto(message: _138.CallbackData): Uint8Array;
            toProtoMsg(message: _138.CallbackData): _138.CallbackDataProtoMsg;
        };
    };
    const icaoracle: {
        MsgClientImpl: typeof _292.MsgClientImpl;
        QueryClientImpl: typeof _284.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            oracle(request: _148.QueryOracleRequest): Promise<_148.QueryOracleResponse>;
            allOracles(request?: _148.QueryAllOraclesRequest): Promise<_148.QueryAllOraclesResponse>;
            activeOracles(request: _148.QueryActiveOraclesRequest): Promise<_148.QueryActiveOraclesResponse>;
            metrics(request: _148.QueryMetricsRequest): Promise<_148.QueryMetricsResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                addOracle(value: _149.MsgAddOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                instantiateOracle(value: _149.MsgInstantiateOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                restoreOracleICA(value: _149.MsgRestoreOracleICA): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                toggleOracle(value: _149.MsgToggleOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                removeOracle(value: _149.MsgRemoveOracle): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                addOracle(value: _149.MsgAddOracle): {
                    typeUrl: string;
                    value: _149.MsgAddOracle;
                };
                instantiateOracle(value: _149.MsgInstantiateOracle): {
                    typeUrl: string;
                    value: _149.MsgInstantiateOracle;
                };
                restoreOracleICA(value: _149.MsgRestoreOracleICA): {
                    typeUrl: string;
                    value: _149.MsgRestoreOracleICA;
                };
                toggleOracle(value: _149.MsgToggleOracle): {
                    typeUrl: string;
                    value: _149.MsgToggleOracle;
                };
                removeOracle(value: _149.MsgRemoveOracle): {
                    typeUrl: string;
                    value: _149.MsgRemoveOracle;
                };
            };
            fromPartial: {
                addOracle(value: _149.MsgAddOracle): {
                    typeUrl: string;
                    value: _149.MsgAddOracle;
                };
                instantiateOracle(value: _149.MsgInstantiateOracle): {
                    typeUrl: string;
                    value: _149.MsgInstantiateOracle;
                };
                restoreOracleICA(value: _149.MsgRestoreOracleICA): {
                    typeUrl: string;
                    value: _149.MsgRestoreOracleICA;
                };
                toggleOracle(value: _149.MsgToggleOracle): {
                    typeUrl: string;
                    value: _149.MsgToggleOracle;
                };
                removeOracle(value: _149.MsgRemoveOracle): {
                    typeUrl: string;
                    value: _149.MsgRemoveOracle;
                };
            };
        };
        AminoConverter: {
            "/stride.icaoracle.MsgAddOracle": {
                aminoType: string;
                toAmino: (message: _149.MsgAddOracle) => _149.MsgAddOracleAmino;
                fromAmino: (object: _149.MsgAddOracleAmino) => _149.MsgAddOracle;
            };
            "/stride.icaoracle.MsgInstantiateOracle": {
                aminoType: string;
                toAmino: (message: _149.MsgInstantiateOracle) => _149.MsgInstantiateOracleAmino;
                fromAmino: (object: _149.MsgInstantiateOracleAmino) => _149.MsgInstantiateOracle;
            };
            "/stride.icaoracle.MsgRestoreOracleICA": {
                aminoType: string;
                toAmino: (message: _149.MsgRestoreOracleICA) => _149.MsgRestoreOracleICAAmino;
                fromAmino: (object: _149.MsgRestoreOracleICAAmino) => _149.MsgRestoreOracleICA;
            };
            "/stride.icaoracle.MsgToggleOracle": {
                aminoType: string;
                toAmino: (message: _149.MsgToggleOracle) => _149.MsgToggleOracleAmino;
                fromAmino: (object: _149.MsgToggleOracleAmino) => _149.MsgToggleOracle;
            };
            "/stride.icaoracle.MsgRemoveOracle": {
                aminoType: string;
                toAmino: (message: _149.MsgRemoveOracle) => _149.MsgRemoveOracleAmino;
                fromAmino: (object: _149.MsgRemoveOracleAmino) => _149.MsgRemoveOracle;
            };
        };
        MsgAddOracle: {
            typeUrl: string;
            encode(message: _149.MsgAddOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.MsgAddOracle;
            fromPartial(object: Partial<_149.MsgAddOracle>): _149.MsgAddOracle;
            fromAmino(object: _149.MsgAddOracleAmino): _149.MsgAddOracle;
            toAmino(message: _149.MsgAddOracle): _149.MsgAddOracleAmino;
            fromAminoMsg(object: _149.MsgAddOracleAminoMsg): _149.MsgAddOracle;
            toAminoMsg(message: _149.MsgAddOracle): _149.MsgAddOracleAminoMsg;
            fromProtoMsg(message: _149.MsgAddOracleProtoMsg): _149.MsgAddOracle;
            toProto(message: _149.MsgAddOracle): Uint8Array;
            toProtoMsg(message: _149.MsgAddOracle): _149.MsgAddOracleProtoMsg;
        };
        MsgAddOracleResponse: {
            typeUrl: string;
            encode(_: _149.MsgAddOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.MsgAddOracleResponse;
            fromPartial(_: Partial<_149.MsgAddOracleResponse>): _149.MsgAddOracleResponse;
            fromAmino(_: _149.MsgAddOracleResponseAmino): _149.MsgAddOracleResponse;
            toAmino(_: _149.MsgAddOracleResponse): _149.MsgAddOracleResponseAmino;
            fromAminoMsg(object: _149.MsgAddOracleResponseAminoMsg): _149.MsgAddOracleResponse;
            fromProtoMsg(message: _149.MsgAddOracleResponseProtoMsg): _149.MsgAddOracleResponse;
            toProto(message: _149.MsgAddOracleResponse): Uint8Array;
            toProtoMsg(message: _149.MsgAddOracleResponse): _149.MsgAddOracleResponseProtoMsg;
        };
        MsgInstantiateOracle: {
            typeUrl: string;
            encode(message: _149.MsgInstantiateOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.MsgInstantiateOracle;
            fromPartial(object: Partial<_149.MsgInstantiateOracle>): _149.MsgInstantiateOracle;
            fromAmino(object: _149.MsgInstantiateOracleAmino): _149.MsgInstantiateOracle;
            toAmino(message: _149.MsgInstantiateOracle): _149.MsgInstantiateOracleAmino;
            fromAminoMsg(object: _149.MsgInstantiateOracleAminoMsg): _149.MsgInstantiateOracle;
            toAminoMsg(message: _149.MsgInstantiateOracle): _149.MsgInstantiateOracleAminoMsg;
            fromProtoMsg(message: _149.MsgInstantiateOracleProtoMsg): _149.MsgInstantiateOracle;
            toProto(message: _149.MsgInstantiateOracle): Uint8Array;
            toProtoMsg(message: _149.MsgInstantiateOracle): _149.MsgInstantiateOracleProtoMsg;
        };
        MsgInstantiateOracleResponse: {
            typeUrl: string;
            encode(_: _149.MsgInstantiateOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.MsgInstantiateOracleResponse;
            fromPartial(_: Partial<_149.MsgInstantiateOracleResponse>): _149.MsgInstantiateOracleResponse;
            fromAmino(_: _149.MsgInstantiateOracleResponseAmino): _149.MsgInstantiateOracleResponse;
            toAmino(_: _149.MsgInstantiateOracleResponse): _149.MsgInstantiateOracleResponseAmino;
            fromAminoMsg(object: _149.MsgInstantiateOracleResponseAminoMsg): _149.MsgInstantiateOracleResponse;
            fromProtoMsg(message: _149.MsgInstantiateOracleResponseProtoMsg): _149.MsgInstantiateOracleResponse;
            toProto(message: _149.MsgInstantiateOracleResponse): Uint8Array;
            toProtoMsg(message: _149.MsgInstantiateOracleResponse): _149.MsgInstantiateOracleResponseProtoMsg;
        };
        MsgRestoreOracleICA: {
            typeUrl: string;
            encode(message: _149.MsgRestoreOracleICA, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.MsgRestoreOracleICA;
            fromPartial(object: Partial<_149.MsgRestoreOracleICA>): _149.MsgRestoreOracleICA;
            fromAmino(object: _149.MsgRestoreOracleICAAmino): _149.MsgRestoreOracleICA;
            toAmino(message: _149.MsgRestoreOracleICA): _149.MsgRestoreOracleICAAmino;
            fromAminoMsg(object: _149.MsgRestoreOracleICAAminoMsg): _149.MsgRestoreOracleICA;
            toAminoMsg(message: _149.MsgRestoreOracleICA): _149.MsgRestoreOracleICAAminoMsg;
            fromProtoMsg(message: _149.MsgRestoreOracleICAProtoMsg): _149.MsgRestoreOracleICA;
            toProto(message: _149.MsgRestoreOracleICA): Uint8Array;
            toProtoMsg(message: _149.MsgRestoreOracleICA): _149.MsgRestoreOracleICAProtoMsg;
        };
        MsgRestoreOracleICAResponse: {
            typeUrl: string;
            encode(_: _149.MsgRestoreOracleICAResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.MsgRestoreOracleICAResponse;
            fromPartial(_: Partial<_149.MsgRestoreOracleICAResponse>): _149.MsgRestoreOracleICAResponse;
            fromAmino(_: _149.MsgRestoreOracleICAResponseAmino): _149.MsgRestoreOracleICAResponse;
            toAmino(_: _149.MsgRestoreOracleICAResponse): _149.MsgRestoreOracleICAResponseAmino;
            fromAminoMsg(object: _149.MsgRestoreOracleICAResponseAminoMsg): _149.MsgRestoreOracleICAResponse;
            fromProtoMsg(message: _149.MsgRestoreOracleICAResponseProtoMsg): _149.MsgRestoreOracleICAResponse;
            toProto(message: _149.MsgRestoreOracleICAResponse): Uint8Array;
            toProtoMsg(message: _149.MsgRestoreOracleICAResponse): _149.MsgRestoreOracleICAResponseProtoMsg;
        };
        MsgToggleOracle: {
            typeUrl: string;
            encode(message: _149.MsgToggleOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.MsgToggleOracle;
            fromPartial(object: Partial<_149.MsgToggleOracle>): _149.MsgToggleOracle;
            fromAmino(object: _149.MsgToggleOracleAmino): _149.MsgToggleOracle;
            toAmino(message: _149.MsgToggleOracle): _149.MsgToggleOracleAmino;
            fromAminoMsg(object: _149.MsgToggleOracleAminoMsg): _149.MsgToggleOracle;
            toAminoMsg(message: _149.MsgToggleOracle): _149.MsgToggleOracleAminoMsg;
            fromProtoMsg(message: _149.MsgToggleOracleProtoMsg): _149.MsgToggleOracle;
            toProto(message: _149.MsgToggleOracle): Uint8Array;
            toProtoMsg(message: _149.MsgToggleOracle): _149.MsgToggleOracleProtoMsg;
        };
        MsgToggleOracleResponse: {
            typeUrl: string;
            encode(_: _149.MsgToggleOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.MsgToggleOracleResponse;
            fromPartial(_: Partial<_149.MsgToggleOracleResponse>): _149.MsgToggleOracleResponse;
            fromAmino(_: _149.MsgToggleOracleResponseAmino): _149.MsgToggleOracleResponse;
            toAmino(_: _149.MsgToggleOracleResponse): _149.MsgToggleOracleResponseAmino;
            fromAminoMsg(object: _149.MsgToggleOracleResponseAminoMsg): _149.MsgToggleOracleResponse;
            fromProtoMsg(message: _149.MsgToggleOracleResponseProtoMsg): _149.MsgToggleOracleResponse;
            toProto(message: _149.MsgToggleOracleResponse): Uint8Array;
            toProtoMsg(message: _149.MsgToggleOracleResponse): _149.MsgToggleOracleResponseProtoMsg;
        };
        MsgRemoveOracle: {
            typeUrl: string;
            encode(message: _149.MsgRemoveOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.MsgRemoveOracle;
            fromPartial(object: Partial<_149.MsgRemoveOracle>): _149.MsgRemoveOracle;
            fromAmino(object: _149.MsgRemoveOracleAmino): _149.MsgRemoveOracle;
            toAmino(message: _149.MsgRemoveOracle): _149.MsgRemoveOracleAmino;
            fromAminoMsg(object: _149.MsgRemoveOracleAminoMsg): _149.MsgRemoveOracle;
            toAminoMsg(message: _149.MsgRemoveOracle): _149.MsgRemoveOracleAminoMsg;
            fromProtoMsg(message: _149.MsgRemoveOracleProtoMsg): _149.MsgRemoveOracle;
            toProto(message: _149.MsgRemoveOracle): Uint8Array;
            toProtoMsg(message: _149.MsgRemoveOracle): _149.MsgRemoveOracleProtoMsg;
        };
        MsgRemoveOracleResponse: {
            typeUrl: string;
            encode(_: _149.MsgRemoveOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.MsgRemoveOracleResponse;
            fromPartial(_: Partial<_149.MsgRemoveOracleResponse>): _149.MsgRemoveOracleResponse;
            fromAmino(_: _149.MsgRemoveOracleResponseAmino): _149.MsgRemoveOracleResponse;
            toAmino(_: _149.MsgRemoveOracleResponse): _149.MsgRemoveOracleResponseAmino;
            fromAminoMsg(object: _149.MsgRemoveOracleResponseAminoMsg): _149.MsgRemoveOracleResponse;
            fromProtoMsg(message: _149.MsgRemoveOracleResponseProtoMsg): _149.MsgRemoveOracleResponse;
            toProto(message: _149.MsgRemoveOracleResponse): Uint8Array;
            toProtoMsg(message: _149.MsgRemoveOracleResponse): _149.MsgRemoveOracleResponseProtoMsg;
        };
        QueryOracleRequest: {
            typeUrl: string;
            encode(message: _148.QueryOracleRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.QueryOracleRequest;
            fromPartial(object: Partial<_148.QueryOracleRequest>): _148.QueryOracleRequest;
            fromAmino(object: _148.QueryOracleRequestAmino): _148.QueryOracleRequest;
            toAmino(message: _148.QueryOracleRequest): _148.QueryOracleRequestAmino;
            fromAminoMsg(object: _148.QueryOracleRequestAminoMsg): _148.QueryOracleRequest;
            fromProtoMsg(message: _148.QueryOracleRequestProtoMsg): _148.QueryOracleRequest;
            toProto(message: _148.QueryOracleRequest): Uint8Array;
            toProtoMsg(message: _148.QueryOracleRequest): _148.QueryOracleRequestProtoMsg;
        };
        QueryOracleResponse: {
            typeUrl: string;
            encode(message: _148.QueryOracleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.QueryOracleResponse;
            fromPartial(object: Partial<_148.QueryOracleResponse>): _148.QueryOracleResponse;
            fromAmino(object: _148.QueryOracleResponseAmino): _148.QueryOracleResponse;
            toAmino(message: _148.QueryOracleResponse): _148.QueryOracleResponseAmino;
            fromAminoMsg(object: _148.QueryOracleResponseAminoMsg): _148.QueryOracleResponse;
            fromProtoMsg(message: _148.QueryOracleResponseProtoMsg): _148.QueryOracleResponse;
            toProto(message: _148.QueryOracleResponse): Uint8Array;
            toProtoMsg(message: _148.QueryOracleResponse): _148.QueryOracleResponseProtoMsg;
        };
        QueryAllOraclesRequest: {
            typeUrl: string;
            encode(_: _148.QueryAllOraclesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.QueryAllOraclesRequest;
            fromPartial(_: Partial<_148.QueryAllOraclesRequest>): _148.QueryAllOraclesRequest;
            fromAmino(_: _148.QueryAllOraclesRequestAmino): _148.QueryAllOraclesRequest;
            toAmino(_: _148.QueryAllOraclesRequest): _148.QueryAllOraclesRequestAmino;
            fromAminoMsg(object: _148.QueryAllOraclesRequestAminoMsg): _148.QueryAllOraclesRequest;
            fromProtoMsg(message: _148.QueryAllOraclesRequestProtoMsg): _148.QueryAllOraclesRequest;
            toProto(message: _148.QueryAllOraclesRequest): Uint8Array;
            toProtoMsg(message: _148.QueryAllOraclesRequest): _148.QueryAllOraclesRequestProtoMsg;
        };
        QueryAllOraclesResponse: {
            typeUrl: string;
            encode(message: _148.QueryAllOraclesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.QueryAllOraclesResponse;
            fromPartial(object: Partial<_148.QueryAllOraclesResponse>): _148.QueryAllOraclesResponse;
            fromAmino(object: _148.QueryAllOraclesResponseAmino): _148.QueryAllOraclesResponse;
            toAmino(message: _148.QueryAllOraclesResponse): _148.QueryAllOraclesResponseAmino;
            fromAminoMsg(object: _148.QueryAllOraclesResponseAminoMsg): _148.QueryAllOraclesResponse;
            fromProtoMsg(message: _148.QueryAllOraclesResponseProtoMsg): _148.QueryAllOraclesResponse;
            toProto(message: _148.QueryAllOraclesResponse): Uint8Array;
            toProtoMsg(message: _148.QueryAllOraclesResponse): _148.QueryAllOraclesResponseProtoMsg;
        };
        QueryActiveOraclesRequest: {
            typeUrl: string;
            encode(message: _148.QueryActiveOraclesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.QueryActiveOraclesRequest;
            fromPartial(object: Partial<_148.QueryActiveOraclesRequest>): _148.QueryActiveOraclesRequest;
            fromAmino(object: _148.QueryActiveOraclesRequestAmino): _148.QueryActiveOraclesRequest;
            toAmino(message: _148.QueryActiveOraclesRequest): _148.QueryActiveOraclesRequestAmino;
            fromAminoMsg(object: _148.QueryActiveOraclesRequestAminoMsg): _148.QueryActiveOraclesRequest;
            fromProtoMsg(message: _148.QueryActiveOraclesRequestProtoMsg): _148.QueryActiveOraclesRequest;
            toProto(message: _148.QueryActiveOraclesRequest): Uint8Array;
            toProtoMsg(message: _148.QueryActiveOraclesRequest): _148.QueryActiveOraclesRequestProtoMsg;
        };
        QueryActiveOraclesResponse: {
            typeUrl: string;
            encode(message: _148.QueryActiveOraclesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.QueryActiveOraclesResponse;
            fromPartial(object: Partial<_148.QueryActiveOraclesResponse>): _148.QueryActiveOraclesResponse;
            fromAmino(object: _148.QueryActiveOraclesResponseAmino): _148.QueryActiveOraclesResponse;
            toAmino(message: _148.QueryActiveOraclesResponse): _148.QueryActiveOraclesResponseAmino;
            fromAminoMsg(object: _148.QueryActiveOraclesResponseAminoMsg): _148.QueryActiveOraclesResponse;
            fromProtoMsg(message: _148.QueryActiveOraclesResponseProtoMsg): _148.QueryActiveOraclesResponse;
            toProto(message: _148.QueryActiveOraclesResponse): Uint8Array;
            toProtoMsg(message: _148.QueryActiveOraclesResponse): _148.QueryActiveOraclesResponseProtoMsg;
        };
        QueryMetricsRequest: {
            typeUrl: string;
            encode(message: _148.QueryMetricsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.QueryMetricsRequest;
            fromPartial(object: Partial<_148.QueryMetricsRequest>): _148.QueryMetricsRequest;
            fromAmino(object: _148.QueryMetricsRequestAmino): _148.QueryMetricsRequest;
            toAmino(message: _148.QueryMetricsRequest): _148.QueryMetricsRequestAmino;
            fromAminoMsg(object: _148.QueryMetricsRequestAminoMsg): _148.QueryMetricsRequest;
            fromProtoMsg(message: _148.QueryMetricsRequestProtoMsg): _148.QueryMetricsRequest;
            toProto(message: _148.QueryMetricsRequest): Uint8Array;
            toProtoMsg(message: _148.QueryMetricsRequest): _148.QueryMetricsRequestProtoMsg;
        };
        QueryMetricsResponse: {
            typeUrl: string;
            encode(message: _148.QueryMetricsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.QueryMetricsResponse;
            fromPartial(object: Partial<_148.QueryMetricsResponse>): _148.QueryMetricsResponse;
            fromAmino(object: _148.QueryMetricsResponseAmino): _148.QueryMetricsResponse;
            toAmino(message: _148.QueryMetricsResponse): _148.QueryMetricsResponseAmino;
            fromAminoMsg(object: _148.QueryMetricsResponseAminoMsg): _148.QueryMetricsResponse;
            fromProtoMsg(message: _148.QueryMetricsResponseProtoMsg): _148.QueryMetricsResponse;
            toProto(message: _148.QueryMetricsResponse): Uint8Array;
            toProtoMsg(message: _148.QueryMetricsResponse): _148.QueryMetricsResponseProtoMsg;
        };
        metricStatusFromJSON(object: any): _147.MetricStatus;
        metricStatusToJSON(object: _147.MetricStatus): string;
        MetricStatus: typeof _147.MetricStatus;
        MetricStatusSDKType: typeof _147.MetricStatus;
        MetricStatusAmino: typeof _147.MetricStatus;
        Oracle: {
            typeUrl: string;
            encode(message: _147.Oracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.Oracle;
            fromPartial(object: Partial<_147.Oracle>): _147.Oracle;
            fromAmino(object: _147.OracleAmino): _147.Oracle;
            toAmino(message: _147.Oracle): _147.OracleAmino;
            fromAminoMsg(object: _147.OracleAminoMsg): _147.Oracle;
            fromProtoMsg(message: _147.OracleProtoMsg): _147.Oracle;
            toProto(message: _147.Oracle): Uint8Array;
            toProtoMsg(message: _147.Oracle): _147.OracleProtoMsg;
        };
        Metric: {
            typeUrl: string;
            encode(message: _147.Metric, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.Metric;
            fromPartial(object: Partial<_147.Metric>): _147.Metric;
            fromAmino(object: _147.MetricAmino): _147.Metric;
            toAmino(message: _147.Metric): _147.MetricAmino;
            fromAminoMsg(object: _147.MetricAminoMsg): _147.Metric;
            fromProtoMsg(message: _147.MetricProtoMsg): _147.Metric;
            toProto(message: _147.Metric): Uint8Array;
            toProtoMsg(message: _147.Metric): _147.MetricProtoMsg;
        };
        RedemptionRateAttributes: {
            typeUrl: string;
            encode(message: _147.RedemptionRateAttributes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.RedemptionRateAttributes;
            fromPartial(object: Partial<_147.RedemptionRateAttributes>): _147.RedemptionRateAttributes;
            fromAmino(object: _147.RedemptionRateAttributesAmino): _147.RedemptionRateAttributes;
            toAmino(message: _147.RedemptionRateAttributes): _147.RedemptionRateAttributesAmino;
            fromAminoMsg(object: _147.RedemptionRateAttributesAminoMsg): _147.RedemptionRateAttributes;
            fromProtoMsg(message: _147.RedemptionRateAttributesProtoMsg): _147.RedemptionRateAttributes;
            toProto(message: _147.RedemptionRateAttributes): Uint8Array;
            toProtoMsg(message: _147.RedemptionRateAttributes): _147.RedemptionRateAttributesProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _146.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _146.Params;
            fromPartial(_: Partial<_146.Params>): _146.Params;
            fromAmino(_: _146.ParamsAmino): _146.Params;
            toAmino(_: _146.Params): _146.ParamsAmino;
            fromAminoMsg(object: _146.ParamsAminoMsg): _146.Params;
            fromProtoMsg(message: _146.ParamsProtoMsg): _146.Params;
            toProto(message: _146.Params): Uint8Array;
            toProtoMsg(message: _146.Params): _146.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _146.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _146.GenesisState;
            fromPartial(object: Partial<_146.GenesisState>): _146.GenesisState;
            fromAmino(object: _146.GenesisStateAmino): _146.GenesisState;
            toAmino(message: _146.GenesisState): _146.GenesisStateAmino;
            fromAminoMsg(object: _146.GenesisStateAminoMsg): _146.GenesisState;
            fromProtoMsg(message: _146.GenesisStateProtoMsg): _146.GenesisState;
            toProto(message: _146.GenesisState): Uint8Array;
            toProtoMsg(message: _146.GenesisState): _146.GenesisStateProtoMsg;
        };
        MsgInstantiateOracleContract: {
            typeUrl: string;
            encode(message: _145.MsgInstantiateOracleContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.MsgInstantiateOracleContract;
            fromPartial(object: Partial<_145.MsgInstantiateOracleContract>): _145.MsgInstantiateOracleContract;
            fromAmino(object: _145.MsgInstantiateOracleContractAmino): _145.MsgInstantiateOracleContract;
            toAmino(message: _145.MsgInstantiateOracleContract): _145.MsgInstantiateOracleContractAmino;
            fromAminoMsg(object: _145.MsgInstantiateOracleContractAminoMsg): _145.MsgInstantiateOracleContract;
            fromProtoMsg(message: _145.MsgInstantiateOracleContractProtoMsg): _145.MsgInstantiateOracleContract;
            toProto(message: _145.MsgInstantiateOracleContract): Uint8Array;
            toProtoMsg(message: _145.MsgInstantiateOracleContract): _145.MsgInstantiateOracleContractProtoMsg;
        };
        MsgExecuteContractPostMetric: {
            typeUrl: string;
            encode(message: _145.MsgExecuteContractPostMetric, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.MsgExecuteContractPostMetric;
            fromPartial(object: Partial<_145.MsgExecuteContractPostMetric>): _145.MsgExecuteContractPostMetric;
            fromAmino(object: _145.MsgExecuteContractPostMetricAmino): _145.MsgExecuteContractPostMetric;
            toAmino(message: _145.MsgExecuteContractPostMetric): _145.MsgExecuteContractPostMetricAmino;
            fromAminoMsg(object: _145.MsgExecuteContractPostMetricAminoMsg): _145.MsgExecuteContractPostMetric;
            fromProtoMsg(message: _145.MsgExecuteContractPostMetricProtoMsg): _145.MsgExecuteContractPostMetric;
            toProto(message: _145.MsgExecuteContractPostMetric): Uint8Array;
            toProtoMsg(message: _145.MsgExecuteContractPostMetric): _145.MsgExecuteContractPostMetricProtoMsg;
        };
        MsgPostMetric: {
            typeUrl: string;
            encode(message: _145.MsgPostMetric, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.MsgPostMetric;
            fromPartial(object: Partial<_145.MsgPostMetric>): _145.MsgPostMetric;
            fromAmino(object: _145.MsgPostMetricAmino): _145.MsgPostMetric;
            toAmino(message: _145.MsgPostMetric): _145.MsgPostMetricAmino;
            fromAminoMsg(object: _145.MsgPostMetricAminoMsg): _145.MsgPostMetric;
            fromProtoMsg(message: _145.MsgPostMetricProtoMsg): _145.MsgPostMetric;
            toProto(message: _145.MsgPostMetric): Uint8Array;
            toProtoMsg(message: _145.MsgPostMetric): _145.MsgPostMetricProtoMsg;
        };
        InstantiateOracleCallback: {
            typeUrl: string;
            encode(message: _144.InstantiateOracleCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.InstantiateOracleCallback;
            fromPartial(object: Partial<_144.InstantiateOracleCallback>): _144.InstantiateOracleCallback;
            fromAmino(object: _144.InstantiateOracleCallbackAmino): _144.InstantiateOracleCallback;
            toAmino(message: _144.InstantiateOracleCallback): _144.InstantiateOracleCallbackAmino;
            fromAminoMsg(object: _144.InstantiateOracleCallbackAminoMsg): _144.InstantiateOracleCallback;
            fromProtoMsg(message: _144.InstantiateOracleCallbackProtoMsg): _144.InstantiateOracleCallback;
            toProto(message: _144.InstantiateOracleCallback): Uint8Array;
            toProtoMsg(message: _144.InstantiateOracleCallback): _144.InstantiateOracleCallbackProtoMsg;
        };
        UpdateOracleCallback: {
            typeUrl: string;
            encode(message: _144.UpdateOracleCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.UpdateOracleCallback;
            fromPartial(object: Partial<_144.UpdateOracleCallback>): _144.UpdateOracleCallback;
            fromAmino(object: _144.UpdateOracleCallbackAmino): _144.UpdateOracleCallback;
            toAmino(message: _144.UpdateOracleCallback): _144.UpdateOracleCallbackAmino;
            fromAminoMsg(object: _144.UpdateOracleCallbackAminoMsg): _144.UpdateOracleCallback;
            fromProtoMsg(message: _144.UpdateOracleCallbackProtoMsg): _144.UpdateOracleCallback;
            toProto(message: _144.UpdateOracleCallback): Uint8Array;
            toProtoMsg(message: _144.UpdateOracleCallback): _144.UpdateOracleCallbackProtoMsg;
        };
    };
    namespace interchainquery {
        const v1: {
            MsgClientImpl: typeof _293.MsgClientImpl;
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitQueryResponse(value: _151.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitQueryResponse(value: _151.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: _151.MsgSubmitQueryResponse;
                    };
                };
                fromPartial: {
                    submitQueryResponse(value: _151.MsgSubmitQueryResponse): {
                        typeUrl: string;
                        value: _151.MsgSubmitQueryResponse;
                    };
                };
            };
            AminoConverter: {
                "/stride.interchainquery.v1.MsgSubmitQueryResponse": {
                    aminoType: string;
                    toAmino: (message: _151.MsgSubmitQueryResponse) => _151.MsgSubmitQueryResponseAmino;
                    fromAmino: (object: _151.MsgSubmitQueryResponseAmino) => _151.MsgSubmitQueryResponse;
                };
            };
            QueryPendingQueriesRequest: {
                typeUrl: string;
                encode(_: _152.QueryPendingQueriesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QueryPendingQueriesRequest;
                fromPartial(_: Partial<_152.QueryPendingQueriesRequest>): _152.QueryPendingQueriesRequest;
                fromAmino(_: _152.QueryPendingQueriesRequestAmino): _152.QueryPendingQueriesRequest;
                toAmino(_: _152.QueryPendingQueriesRequest): _152.QueryPendingQueriesRequestAmino;
                fromAminoMsg(object: _152.QueryPendingQueriesRequestAminoMsg): _152.QueryPendingQueriesRequest;
                fromProtoMsg(message: _152.QueryPendingQueriesRequestProtoMsg): _152.QueryPendingQueriesRequest;
                toProto(message: _152.QueryPendingQueriesRequest): Uint8Array;
                toProtoMsg(message: _152.QueryPendingQueriesRequest): _152.QueryPendingQueriesRequestProtoMsg;
            };
            QueryPendingQueriesResponse: {
                typeUrl: string;
                encode(message: _152.QueryPendingQueriesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QueryPendingQueriesResponse;
                fromPartial(object: Partial<_152.QueryPendingQueriesResponse>): _152.QueryPendingQueriesResponse;
                fromAmino(object: _152.QueryPendingQueriesResponseAmino): _152.QueryPendingQueriesResponse;
                toAmino(message: _152.QueryPendingQueriesResponse): _152.QueryPendingQueriesResponseAmino;
                fromAminoMsg(object: _152.QueryPendingQueriesResponseAminoMsg): _152.QueryPendingQueriesResponse;
                fromProtoMsg(message: _152.QueryPendingQueriesResponseProtoMsg): _152.QueryPendingQueriesResponse;
                toProto(message: _152.QueryPendingQueriesResponse): Uint8Array;
                toProtoMsg(message: _152.QueryPendingQueriesResponse): _152.QueryPendingQueriesResponseProtoMsg;
            };
            MsgSubmitQueryResponse: {
                typeUrl: string;
                encode(message: _151.MsgSubmitQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.MsgSubmitQueryResponse;
                fromPartial(object: Partial<_151.MsgSubmitQueryResponse>): _151.MsgSubmitQueryResponse;
                fromAmino(object: _151.MsgSubmitQueryResponseAmino): _151.MsgSubmitQueryResponse;
                toAmino(message: _151.MsgSubmitQueryResponse): _151.MsgSubmitQueryResponseAmino;
                fromAminoMsg(object: _151.MsgSubmitQueryResponseAminoMsg): _151.MsgSubmitQueryResponse;
                fromProtoMsg(message: _151.MsgSubmitQueryResponseProtoMsg): _151.MsgSubmitQueryResponse;
                toProto(message: _151.MsgSubmitQueryResponse): Uint8Array;
                toProtoMsg(message: _151.MsgSubmitQueryResponse): _151.MsgSubmitQueryResponseProtoMsg;
            };
            MsgSubmitQueryResponseResponse: {
                typeUrl: string;
                encode(_: _151.MsgSubmitQueryResponseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.MsgSubmitQueryResponseResponse;
                fromPartial(_: Partial<_151.MsgSubmitQueryResponseResponse>): _151.MsgSubmitQueryResponseResponse;
                fromAmino(_: _151.MsgSubmitQueryResponseResponseAmino): _151.MsgSubmitQueryResponseResponse;
                toAmino(_: _151.MsgSubmitQueryResponseResponse): _151.MsgSubmitQueryResponseResponseAmino;
                fromAminoMsg(object: _151.MsgSubmitQueryResponseResponseAminoMsg): _151.MsgSubmitQueryResponseResponse;
                fromProtoMsg(message: _151.MsgSubmitQueryResponseResponseProtoMsg): _151.MsgSubmitQueryResponseResponse;
                toProto(message: _151.MsgSubmitQueryResponseResponse): Uint8Array;
                toProtoMsg(message: _151.MsgSubmitQueryResponseResponse): _151.MsgSubmitQueryResponseResponseProtoMsg;
            };
            timeoutPolicyFromJSON(object: any): _150.TimeoutPolicy;
            timeoutPolicyToJSON(object: _150.TimeoutPolicy): string;
            TimeoutPolicy: typeof _150.TimeoutPolicy;
            TimeoutPolicySDKType: typeof _150.TimeoutPolicy;
            TimeoutPolicyAmino: typeof _150.TimeoutPolicy;
            Query: {
                typeUrl: string;
                encode(message: _150.Query, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.Query;
                fromPartial(object: Partial<_150.Query>): _150.Query;
                fromAmino(object: _150.QueryAmino): _150.Query;
                toAmino(message: _150.Query): _150.QueryAmino;
                fromAminoMsg(object: _150.QueryAminoMsg): _150.Query;
                fromProtoMsg(message: _150.QueryProtoMsg): _150.Query;
                toProto(message: _150.Query): Uint8Array;
                toProtoMsg(message: _150.Query): _150.QueryProtoMsg;
            };
            DataPoint: {
                typeUrl: string;
                encode(message: _150.DataPoint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.DataPoint;
                fromPartial(object: Partial<_150.DataPoint>): _150.DataPoint;
                fromAmino(object: _150.DataPointAmino): _150.DataPoint;
                toAmino(message: _150.DataPoint): _150.DataPointAmino;
                fromAminoMsg(object: _150.DataPointAminoMsg): _150.DataPoint;
                fromProtoMsg(message: _150.DataPointProtoMsg): _150.DataPoint;
                toProto(message: _150.DataPoint): Uint8Array;
                toProtoMsg(message: _150.DataPoint): _150.DataPointProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _150.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.GenesisState;
                fromPartial(object: Partial<_150.GenesisState>): _150.GenesisState;
                fromAmino(object: _150.GenesisStateAmino): _150.GenesisState;
                toAmino(message: _150.GenesisState): _150.GenesisStateAmino;
                fromAminoMsg(object: _150.GenesisStateAminoMsg): _150.GenesisState;
                fromProtoMsg(message: _150.GenesisStateProtoMsg): _150.GenesisState;
                toProto(message: _150.GenesisState): Uint8Array;
                toProtoMsg(message: _150.GenesisState): _150.GenesisStateProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _285.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _155.QueryParamsRequest): Promise<_155.QueryParamsResponse>;
                epochProvisions(request?: _155.QueryEpochProvisionsRequest): Promise<_155.QueryEpochProvisionsResponse>;
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
            QueryEpochProvisionsRequest: {
                typeUrl: string;
                encode(_: _155.QueryEpochProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.QueryEpochProvisionsRequest;
                fromPartial(_: Partial<_155.QueryEpochProvisionsRequest>): _155.QueryEpochProvisionsRequest;
                fromAmino(_: _155.QueryEpochProvisionsRequestAmino): _155.QueryEpochProvisionsRequest;
                toAmino(_: _155.QueryEpochProvisionsRequest): _155.QueryEpochProvisionsRequestAmino;
                fromAminoMsg(object: _155.QueryEpochProvisionsRequestAminoMsg): _155.QueryEpochProvisionsRequest;
                fromProtoMsg(message: _155.QueryEpochProvisionsRequestProtoMsg): _155.QueryEpochProvisionsRequest;
                toProto(message: _155.QueryEpochProvisionsRequest): Uint8Array;
                toProtoMsg(message: _155.QueryEpochProvisionsRequest): _155.QueryEpochProvisionsRequestProtoMsg;
            };
            QueryEpochProvisionsResponse: {
                typeUrl: string;
                encode(message: _155.QueryEpochProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.QueryEpochProvisionsResponse;
                fromPartial(object: Partial<_155.QueryEpochProvisionsResponse>): _155.QueryEpochProvisionsResponse;
                fromAmino(object: _155.QueryEpochProvisionsResponseAmino): _155.QueryEpochProvisionsResponse;
                toAmino(message: _155.QueryEpochProvisionsResponse): _155.QueryEpochProvisionsResponseAmino;
                fromAminoMsg(object: _155.QueryEpochProvisionsResponseAminoMsg): _155.QueryEpochProvisionsResponse;
                fromProtoMsg(message: _155.QueryEpochProvisionsResponseProtoMsg): _155.QueryEpochProvisionsResponse;
                toProto(message: _155.QueryEpochProvisionsResponse): Uint8Array;
                toProtoMsg(message: _155.QueryEpochProvisionsResponse): _155.QueryEpochProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _154.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.Minter;
                fromPartial(object: Partial<_154.Minter>): _154.Minter;
                fromAmino(object: _154.MinterAmino): _154.Minter;
                toAmino(message: _154.Minter): _154.MinterAmino;
                fromAminoMsg(object: _154.MinterAminoMsg): _154.Minter;
                fromProtoMsg(message: _154.MinterProtoMsg): _154.Minter;
                toProto(message: _154.Minter): Uint8Array;
                toProtoMsg(message: _154.Minter): _154.MinterProtoMsg;
            };
            DistributionProportions: {
                typeUrl: string;
                encode(message: _154.DistributionProportions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.DistributionProportions;
                fromPartial(object: Partial<_154.DistributionProportions>): _154.DistributionProportions;
                fromAmino(object: _154.DistributionProportionsAmino): _154.DistributionProportions;
                toAmino(message: _154.DistributionProportions): _154.DistributionProportionsAmino;
                fromAminoMsg(object: _154.DistributionProportionsAminoMsg): _154.DistributionProportions;
                fromProtoMsg(message: _154.DistributionProportionsProtoMsg): _154.DistributionProportions;
                toProto(message: _154.DistributionProportions): Uint8Array;
                toProtoMsg(message: _154.DistributionProportions): _154.DistributionProportionsProtoMsg;
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
    }
    const records: {
        QueryClientImpl: typeof _286.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _159.QueryParamsRequest): Promise<_159.QueryParamsResponse>;
            userRedemptionRecord(request: _159.QueryGetUserRedemptionRecordRequest): Promise<_159.QueryGetUserRedemptionRecordResponse>;
            userRedemptionRecordAll(request?: _159.QueryAllUserRedemptionRecordRequest): Promise<_159.QueryAllUserRedemptionRecordResponse>;
            userRedemptionRecordForUser(request: _159.QueryAllUserRedemptionRecordForUserRequest): Promise<_159.QueryAllUserRedemptionRecordForUserResponse>;
            epochUnbondingRecord(request: _159.QueryGetEpochUnbondingRecordRequest): Promise<_159.QueryGetEpochUnbondingRecordResponse>;
            epochUnbondingRecordAll(request?: _159.QueryAllEpochUnbondingRecordRequest): Promise<_159.QueryAllEpochUnbondingRecordResponse>;
            depositRecord(request: _159.QueryGetDepositRecordRequest): Promise<_159.QueryGetDepositRecordResponse>;
            depositRecordAll(request?: _159.QueryAllDepositRecordRequest): Promise<_159.QueryAllDepositRecordResponse>;
            depositRecordByHost(request: _159.QueryDepositRecordByHostRequest): Promise<_159.QueryDepositRecordByHostResponse>;
            lSMDeposit(request: _159.QueryLSMDepositRequest): Promise<_159.QueryLSMDepositResponse>;
            lSMDeposits(request: _159.QueryLSMDepositsRequest): Promise<_159.QueryLSMDepositsResponse>;
        };
        depositRecord_StatusFromJSON(object: any): _160.DepositRecord_Status;
        depositRecord_StatusToJSON(object: _160.DepositRecord_Status): string;
        depositRecord_SourceFromJSON(object: any): _160.DepositRecord_Source;
        depositRecord_SourceToJSON(object: _160.DepositRecord_Source): string;
        hostZoneUnbonding_StatusFromJSON(object: any): _160.HostZoneUnbonding_Status;
        hostZoneUnbonding_StatusToJSON(object: _160.HostZoneUnbonding_Status): string;
        lSMTokenDeposit_StatusFromJSON(object: any): _160.LSMTokenDeposit_Status;
        lSMTokenDeposit_StatusToJSON(object: _160.LSMTokenDeposit_Status): string;
        DepositRecord_Status: typeof _160.DepositRecord_Status;
        DepositRecord_StatusSDKType: typeof _160.DepositRecord_Status;
        DepositRecord_StatusAmino: typeof _160.DepositRecord_Status;
        DepositRecord_Source: typeof _160.DepositRecord_Source;
        DepositRecord_SourceSDKType: typeof _160.DepositRecord_Source;
        DepositRecord_SourceAmino: typeof _160.DepositRecord_Source;
        HostZoneUnbonding_Status: typeof _160.HostZoneUnbonding_Status;
        HostZoneUnbonding_StatusSDKType: typeof _160.HostZoneUnbonding_Status;
        HostZoneUnbonding_StatusAmino: typeof _160.HostZoneUnbonding_Status;
        LSMTokenDeposit_Status: typeof _160.LSMTokenDeposit_Status;
        LSMTokenDeposit_StatusSDKType: typeof _160.LSMTokenDeposit_Status;
        LSMTokenDeposit_StatusAmino: typeof _160.LSMTokenDeposit_Status;
        UserRedemptionRecord: {
            typeUrl: string;
            encode(message: _160.UserRedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.UserRedemptionRecord;
            fromPartial(object: Partial<_160.UserRedemptionRecord>): _160.UserRedemptionRecord;
            fromAmino(object: _160.UserRedemptionRecordAmino): _160.UserRedemptionRecord;
            toAmino(message: _160.UserRedemptionRecord): _160.UserRedemptionRecordAmino;
            fromAminoMsg(object: _160.UserRedemptionRecordAminoMsg): _160.UserRedemptionRecord;
            fromProtoMsg(message: _160.UserRedemptionRecordProtoMsg): _160.UserRedemptionRecord;
            toProto(message: _160.UserRedemptionRecord): Uint8Array;
            toProtoMsg(message: _160.UserRedemptionRecord): _160.UserRedemptionRecordProtoMsg;
        };
        DepositRecord: {
            typeUrl: string;
            encode(message: _160.DepositRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.DepositRecord;
            fromPartial(object: Partial<_160.DepositRecord>): _160.DepositRecord;
            fromAmino(object: _160.DepositRecordAmino): _160.DepositRecord;
            toAmino(message: _160.DepositRecord): _160.DepositRecordAmino;
            fromAminoMsg(object: _160.DepositRecordAminoMsg): _160.DepositRecord;
            fromProtoMsg(message: _160.DepositRecordProtoMsg): _160.DepositRecord;
            toProto(message: _160.DepositRecord): Uint8Array;
            toProtoMsg(message: _160.DepositRecord): _160.DepositRecordProtoMsg;
        };
        HostZoneUnbonding: {
            typeUrl: string;
            encode(message: _160.HostZoneUnbonding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.HostZoneUnbonding;
            fromPartial(object: Partial<_160.HostZoneUnbonding>): _160.HostZoneUnbonding;
            fromAmino(object: _160.HostZoneUnbondingAmino): _160.HostZoneUnbonding;
            toAmino(message: _160.HostZoneUnbonding): _160.HostZoneUnbondingAmino;
            fromAminoMsg(object: _160.HostZoneUnbondingAminoMsg): _160.HostZoneUnbonding;
            fromProtoMsg(message: _160.HostZoneUnbondingProtoMsg): _160.HostZoneUnbonding;
            toProto(message: _160.HostZoneUnbonding): Uint8Array;
            toProtoMsg(message: _160.HostZoneUnbonding): _160.HostZoneUnbondingProtoMsg;
        };
        EpochUnbondingRecord: {
            typeUrl: string;
            encode(message: _160.EpochUnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.EpochUnbondingRecord;
            fromPartial(object: Partial<_160.EpochUnbondingRecord>): _160.EpochUnbondingRecord;
            fromAmino(object: _160.EpochUnbondingRecordAmino): _160.EpochUnbondingRecord;
            toAmino(message: _160.EpochUnbondingRecord): _160.EpochUnbondingRecordAmino;
            fromAminoMsg(object: _160.EpochUnbondingRecordAminoMsg): _160.EpochUnbondingRecord;
            fromProtoMsg(message: _160.EpochUnbondingRecordProtoMsg): _160.EpochUnbondingRecord;
            toProto(message: _160.EpochUnbondingRecord): Uint8Array;
            toProtoMsg(message: _160.EpochUnbondingRecord): _160.EpochUnbondingRecordProtoMsg;
        };
        LSMTokenDeposit: {
            typeUrl: string;
            encode(message: _160.LSMTokenDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.LSMTokenDeposit;
            fromPartial(object: Partial<_160.LSMTokenDeposit>): _160.LSMTokenDeposit;
            fromAmino(object: _160.LSMTokenDepositAmino): _160.LSMTokenDeposit;
            toAmino(message: _160.LSMTokenDeposit): _160.LSMTokenDepositAmino;
            fromAminoMsg(object: _160.LSMTokenDepositAminoMsg): _160.LSMTokenDeposit;
            fromProtoMsg(message: _160.LSMTokenDepositProtoMsg): _160.LSMTokenDeposit;
            toProto(message: _160.LSMTokenDeposit): Uint8Array;
            toProtoMsg(message: _160.LSMTokenDeposit): _160.LSMTokenDepositProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _159.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryParamsRequest;
            fromPartial(_: Partial<_159.QueryParamsRequest>): _159.QueryParamsRequest;
            fromAmino(_: _159.QueryParamsRequestAmino): _159.QueryParamsRequest;
            toAmino(_: _159.QueryParamsRequest): _159.QueryParamsRequestAmino;
            fromAminoMsg(object: _159.QueryParamsRequestAminoMsg): _159.QueryParamsRequest;
            fromProtoMsg(message: _159.QueryParamsRequestProtoMsg): _159.QueryParamsRequest;
            toProto(message: _159.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _159.QueryParamsRequest): _159.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _159.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryParamsResponse;
            fromPartial(object: Partial<_159.QueryParamsResponse>): _159.QueryParamsResponse;
            fromAmino(object: _159.QueryParamsResponseAmino): _159.QueryParamsResponse;
            toAmino(message: _159.QueryParamsResponse): _159.QueryParamsResponseAmino;
            fromAminoMsg(object: _159.QueryParamsResponseAminoMsg): _159.QueryParamsResponse;
            fromProtoMsg(message: _159.QueryParamsResponseProtoMsg): _159.QueryParamsResponse;
            toProto(message: _159.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _159.QueryParamsResponse): _159.QueryParamsResponseProtoMsg;
        };
        QueryGetDepositRecordRequest: {
            typeUrl: string;
            encode(message: _159.QueryGetDepositRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryGetDepositRecordRequest;
            fromPartial(object: Partial<_159.QueryGetDepositRecordRequest>): _159.QueryGetDepositRecordRequest;
            fromAmino(object: _159.QueryGetDepositRecordRequestAmino): _159.QueryGetDepositRecordRequest;
            toAmino(message: _159.QueryGetDepositRecordRequest): _159.QueryGetDepositRecordRequestAmino;
            fromAminoMsg(object: _159.QueryGetDepositRecordRequestAminoMsg): _159.QueryGetDepositRecordRequest;
            fromProtoMsg(message: _159.QueryGetDepositRecordRequestProtoMsg): _159.QueryGetDepositRecordRequest;
            toProto(message: _159.QueryGetDepositRecordRequest): Uint8Array;
            toProtoMsg(message: _159.QueryGetDepositRecordRequest): _159.QueryGetDepositRecordRequestProtoMsg;
        };
        QueryGetDepositRecordResponse: {
            typeUrl: string;
            encode(message: _159.QueryGetDepositRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryGetDepositRecordResponse;
            fromPartial(object: Partial<_159.QueryGetDepositRecordResponse>): _159.QueryGetDepositRecordResponse;
            fromAmino(object: _159.QueryGetDepositRecordResponseAmino): _159.QueryGetDepositRecordResponse;
            toAmino(message: _159.QueryGetDepositRecordResponse): _159.QueryGetDepositRecordResponseAmino;
            fromAminoMsg(object: _159.QueryGetDepositRecordResponseAminoMsg): _159.QueryGetDepositRecordResponse;
            fromProtoMsg(message: _159.QueryGetDepositRecordResponseProtoMsg): _159.QueryGetDepositRecordResponse;
            toProto(message: _159.QueryGetDepositRecordResponse): Uint8Array;
            toProtoMsg(message: _159.QueryGetDepositRecordResponse): _159.QueryGetDepositRecordResponseProtoMsg;
        };
        QueryAllDepositRecordRequest: {
            typeUrl: string;
            encode(message: _159.QueryAllDepositRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryAllDepositRecordRequest;
            fromPartial(object: Partial<_159.QueryAllDepositRecordRequest>): _159.QueryAllDepositRecordRequest;
            fromAmino(object: _159.QueryAllDepositRecordRequestAmino): _159.QueryAllDepositRecordRequest;
            toAmino(message: _159.QueryAllDepositRecordRequest): _159.QueryAllDepositRecordRequestAmino;
            fromAminoMsg(object: _159.QueryAllDepositRecordRequestAminoMsg): _159.QueryAllDepositRecordRequest;
            fromProtoMsg(message: _159.QueryAllDepositRecordRequestProtoMsg): _159.QueryAllDepositRecordRequest;
            toProto(message: _159.QueryAllDepositRecordRequest): Uint8Array;
            toProtoMsg(message: _159.QueryAllDepositRecordRequest): _159.QueryAllDepositRecordRequestProtoMsg;
        };
        QueryAllDepositRecordResponse: {
            typeUrl: string;
            encode(message: _159.QueryAllDepositRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryAllDepositRecordResponse;
            fromPartial(object: Partial<_159.QueryAllDepositRecordResponse>): _159.QueryAllDepositRecordResponse;
            fromAmino(object: _159.QueryAllDepositRecordResponseAmino): _159.QueryAllDepositRecordResponse;
            toAmino(message: _159.QueryAllDepositRecordResponse): _159.QueryAllDepositRecordResponseAmino;
            fromAminoMsg(object: _159.QueryAllDepositRecordResponseAminoMsg): _159.QueryAllDepositRecordResponse;
            fromProtoMsg(message: _159.QueryAllDepositRecordResponseProtoMsg): _159.QueryAllDepositRecordResponse;
            toProto(message: _159.QueryAllDepositRecordResponse): Uint8Array;
            toProtoMsg(message: _159.QueryAllDepositRecordResponse): _159.QueryAllDepositRecordResponseProtoMsg;
        };
        QueryDepositRecordByHostRequest: {
            typeUrl: string;
            encode(message: _159.QueryDepositRecordByHostRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryDepositRecordByHostRequest;
            fromPartial(object: Partial<_159.QueryDepositRecordByHostRequest>): _159.QueryDepositRecordByHostRequest;
            fromAmino(object: _159.QueryDepositRecordByHostRequestAmino): _159.QueryDepositRecordByHostRequest;
            toAmino(message: _159.QueryDepositRecordByHostRequest): _159.QueryDepositRecordByHostRequestAmino;
            fromAminoMsg(object: _159.QueryDepositRecordByHostRequestAminoMsg): _159.QueryDepositRecordByHostRequest;
            fromProtoMsg(message: _159.QueryDepositRecordByHostRequestProtoMsg): _159.QueryDepositRecordByHostRequest;
            toProto(message: _159.QueryDepositRecordByHostRequest): Uint8Array;
            toProtoMsg(message: _159.QueryDepositRecordByHostRequest): _159.QueryDepositRecordByHostRequestProtoMsg;
        };
        QueryDepositRecordByHostResponse: {
            typeUrl: string;
            encode(message: _159.QueryDepositRecordByHostResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryDepositRecordByHostResponse;
            fromPartial(object: Partial<_159.QueryDepositRecordByHostResponse>): _159.QueryDepositRecordByHostResponse;
            fromAmino(object: _159.QueryDepositRecordByHostResponseAmino): _159.QueryDepositRecordByHostResponse;
            toAmino(message: _159.QueryDepositRecordByHostResponse): _159.QueryDepositRecordByHostResponseAmino;
            fromAminoMsg(object: _159.QueryDepositRecordByHostResponseAminoMsg): _159.QueryDepositRecordByHostResponse;
            fromProtoMsg(message: _159.QueryDepositRecordByHostResponseProtoMsg): _159.QueryDepositRecordByHostResponse;
            toProto(message: _159.QueryDepositRecordByHostResponse): Uint8Array;
            toProtoMsg(message: _159.QueryDepositRecordByHostResponse): _159.QueryDepositRecordByHostResponseProtoMsg;
        };
        QueryGetUserRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _159.QueryGetUserRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryGetUserRedemptionRecordRequest;
            fromPartial(object: Partial<_159.QueryGetUserRedemptionRecordRequest>): _159.QueryGetUserRedemptionRecordRequest;
            fromAmino(object: _159.QueryGetUserRedemptionRecordRequestAmino): _159.QueryGetUserRedemptionRecordRequest;
            toAmino(message: _159.QueryGetUserRedemptionRecordRequest): _159.QueryGetUserRedemptionRecordRequestAmino;
            fromAminoMsg(object: _159.QueryGetUserRedemptionRecordRequestAminoMsg): _159.QueryGetUserRedemptionRecordRequest;
            fromProtoMsg(message: _159.QueryGetUserRedemptionRecordRequestProtoMsg): _159.QueryGetUserRedemptionRecordRequest;
            toProto(message: _159.QueryGetUserRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _159.QueryGetUserRedemptionRecordRequest): _159.QueryGetUserRedemptionRecordRequestProtoMsg;
        };
        QueryGetUserRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _159.QueryGetUserRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryGetUserRedemptionRecordResponse;
            fromPartial(object: Partial<_159.QueryGetUserRedemptionRecordResponse>): _159.QueryGetUserRedemptionRecordResponse;
            fromAmino(object: _159.QueryGetUserRedemptionRecordResponseAmino): _159.QueryGetUserRedemptionRecordResponse;
            toAmino(message: _159.QueryGetUserRedemptionRecordResponse): _159.QueryGetUserRedemptionRecordResponseAmino;
            fromAminoMsg(object: _159.QueryGetUserRedemptionRecordResponseAminoMsg): _159.QueryGetUserRedemptionRecordResponse;
            fromProtoMsg(message: _159.QueryGetUserRedemptionRecordResponseProtoMsg): _159.QueryGetUserRedemptionRecordResponse;
            toProto(message: _159.QueryGetUserRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _159.QueryGetUserRedemptionRecordResponse): _159.QueryGetUserRedemptionRecordResponseProtoMsg;
        };
        QueryAllUserRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _159.QueryAllUserRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryAllUserRedemptionRecordRequest;
            fromPartial(object: Partial<_159.QueryAllUserRedemptionRecordRequest>): _159.QueryAllUserRedemptionRecordRequest;
            fromAmino(object: _159.QueryAllUserRedemptionRecordRequestAmino): _159.QueryAllUserRedemptionRecordRequest;
            toAmino(message: _159.QueryAllUserRedemptionRecordRequest): _159.QueryAllUserRedemptionRecordRequestAmino;
            fromAminoMsg(object: _159.QueryAllUserRedemptionRecordRequestAminoMsg): _159.QueryAllUserRedemptionRecordRequest;
            fromProtoMsg(message: _159.QueryAllUserRedemptionRecordRequestProtoMsg): _159.QueryAllUserRedemptionRecordRequest;
            toProto(message: _159.QueryAllUserRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _159.QueryAllUserRedemptionRecordRequest): _159.QueryAllUserRedemptionRecordRequestProtoMsg;
        };
        QueryAllUserRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _159.QueryAllUserRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryAllUserRedemptionRecordResponse;
            fromPartial(object: Partial<_159.QueryAllUserRedemptionRecordResponse>): _159.QueryAllUserRedemptionRecordResponse;
            fromAmino(object: _159.QueryAllUserRedemptionRecordResponseAmino): _159.QueryAllUserRedemptionRecordResponse;
            toAmino(message: _159.QueryAllUserRedemptionRecordResponse): _159.QueryAllUserRedemptionRecordResponseAmino;
            fromAminoMsg(object: _159.QueryAllUserRedemptionRecordResponseAminoMsg): _159.QueryAllUserRedemptionRecordResponse;
            fromProtoMsg(message: _159.QueryAllUserRedemptionRecordResponseProtoMsg): _159.QueryAllUserRedemptionRecordResponse;
            toProto(message: _159.QueryAllUserRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _159.QueryAllUserRedemptionRecordResponse): _159.QueryAllUserRedemptionRecordResponseProtoMsg;
        };
        QueryAllUserRedemptionRecordForUserRequest: {
            typeUrl: string;
            encode(message: _159.QueryAllUserRedemptionRecordForUserRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryAllUserRedemptionRecordForUserRequest;
            fromPartial(object: Partial<_159.QueryAllUserRedemptionRecordForUserRequest>): _159.QueryAllUserRedemptionRecordForUserRequest;
            fromAmino(object: _159.QueryAllUserRedemptionRecordForUserRequestAmino): _159.QueryAllUserRedemptionRecordForUserRequest;
            toAmino(message: _159.QueryAllUserRedemptionRecordForUserRequest): _159.QueryAllUserRedemptionRecordForUserRequestAmino;
            fromAminoMsg(object: _159.QueryAllUserRedemptionRecordForUserRequestAminoMsg): _159.QueryAllUserRedemptionRecordForUserRequest;
            fromProtoMsg(message: _159.QueryAllUserRedemptionRecordForUserRequestProtoMsg): _159.QueryAllUserRedemptionRecordForUserRequest;
            toProto(message: _159.QueryAllUserRedemptionRecordForUserRequest): Uint8Array;
            toProtoMsg(message: _159.QueryAllUserRedemptionRecordForUserRequest): _159.QueryAllUserRedemptionRecordForUserRequestProtoMsg;
        };
        QueryAllUserRedemptionRecordForUserResponse: {
            typeUrl: string;
            encode(message: _159.QueryAllUserRedemptionRecordForUserResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryAllUserRedemptionRecordForUserResponse;
            fromPartial(object: Partial<_159.QueryAllUserRedemptionRecordForUserResponse>): _159.QueryAllUserRedemptionRecordForUserResponse;
            fromAmino(object: _159.QueryAllUserRedemptionRecordForUserResponseAmino): _159.QueryAllUserRedemptionRecordForUserResponse;
            toAmino(message: _159.QueryAllUserRedemptionRecordForUserResponse): _159.QueryAllUserRedemptionRecordForUserResponseAmino;
            fromAminoMsg(object: _159.QueryAllUserRedemptionRecordForUserResponseAminoMsg): _159.QueryAllUserRedemptionRecordForUserResponse;
            fromProtoMsg(message: _159.QueryAllUserRedemptionRecordForUserResponseProtoMsg): _159.QueryAllUserRedemptionRecordForUserResponse;
            toProto(message: _159.QueryAllUserRedemptionRecordForUserResponse): Uint8Array;
            toProtoMsg(message: _159.QueryAllUserRedemptionRecordForUserResponse): _159.QueryAllUserRedemptionRecordForUserResponseProtoMsg;
        };
        QueryGetEpochUnbondingRecordRequest: {
            typeUrl: string;
            encode(message: _159.QueryGetEpochUnbondingRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryGetEpochUnbondingRecordRequest;
            fromPartial(object: Partial<_159.QueryGetEpochUnbondingRecordRequest>): _159.QueryGetEpochUnbondingRecordRequest;
            fromAmino(object: _159.QueryGetEpochUnbondingRecordRequestAmino): _159.QueryGetEpochUnbondingRecordRequest;
            toAmino(message: _159.QueryGetEpochUnbondingRecordRequest): _159.QueryGetEpochUnbondingRecordRequestAmino;
            fromAminoMsg(object: _159.QueryGetEpochUnbondingRecordRequestAminoMsg): _159.QueryGetEpochUnbondingRecordRequest;
            fromProtoMsg(message: _159.QueryGetEpochUnbondingRecordRequestProtoMsg): _159.QueryGetEpochUnbondingRecordRequest;
            toProto(message: _159.QueryGetEpochUnbondingRecordRequest): Uint8Array;
            toProtoMsg(message: _159.QueryGetEpochUnbondingRecordRequest): _159.QueryGetEpochUnbondingRecordRequestProtoMsg;
        };
        QueryGetEpochUnbondingRecordResponse: {
            typeUrl: string;
            encode(message: _159.QueryGetEpochUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryGetEpochUnbondingRecordResponse;
            fromPartial(object: Partial<_159.QueryGetEpochUnbondingRecordResponse>): _159.QueryGetEpochUnbondingRecordResponse;
            fromAmino(object: _159.QueryGetEpochUnbondingRecordResponseAmino): _159.QueryGetEpochUnbondingRecordResponse;
            toAmino(message: _159.QueryGetEpochUnbondingRecordResponse): _159.QueryGetEpochUnbondingRecordResponseAmino;
            fromAminoMsg(object: _159.QueryGetEpochUnbondingRecordResponseAminoMsg): _159.QueryGetEpochUnbondingRecordResponse;
            fromProtoMsg(message: _159.QueryGetEpochUnbondingRecordResponseProtoMsg): _159.QueryGetEpochUnbondingRecordResponse;
            toProto(message: _159.QueryGetEpochUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _159.QueryGetEpochUnbondingRecordResponse): _159.QueryGetEpochUnbondingRecordResponseProtoMsg;
        };
        QueryAllEpochUnbondingRecordRequest: {
            typeUrl: string;
            encode(message: _159.QueryAllEpochUnbondingRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryAllEpochUnbondingRecordRequest;
            fromPartial(object: Partial<_159.QueryAllEpochUnbondingRecordRequest>): _159.QueryAllEpochUnbondingRecordRequest;
            fromAmino(object: _159.QueryAllEpochUnbondingRecordRequestAmino): _159.QueryAllEpochUnbondingRecordRequest;
            toAmino(message: _159.QueryAllEpochUnbondingRecordRequest): _159.QueryAllEpochUnbondingRecordRequestAmino;
            fromAminoMsg(object: _159.QueryAllEpochUnbondingRecordRequestAminoMsg): _159.QueryAllEpochUnbondingRecordRequest;
            fromProtoMsg(message: _159.QueryAllEpochUnbondingRecordRequestProtoMsg): _159.QueryAllEpochUnbondingRecordRequest;
            toProto(message: _159.QueryAllEpochUnbondingRecordRequest): Uint8Array;
            toProtoMsg(message: _159.QueryAllEpochUnbondingRecordRequest): _159.QueryAllEpochUnbondingRecordRequestProtoMsg;
        };
        QueryAllEpochUnbondingRecordResponse: {
            typeUrl: string;
            encode(message: _159.QueryAllEpochUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryAllEpochUnbondingRecordResponse;
            fromPartial(object: Partial<_159.QueryAllEpochUnbondingRecordResponse>): _159.QueryAllEpochUnbondingRecordResponse;
            fromAmino(object: _159.QueryAllEpochUnbondingRecordResponseAmino): _159.QueryAllEpochUnbondingRecordResponse;
            toAmino(message: _159.QueryAllEpochUnbondingRecordResponse): _159.QueryAllEpochUnbondingRecordResponseAmino;
            fromAminoMsg(object: _159.QueryAllEpochUnbondingRecordResponseAminoMsg): _159.QueryAllEpochUnbondingRecordResponse;
            fromProtoMsg(message: _159.QueryAllEpochUnbondingRecordResponseProtoMsg): _159.QueryAllEpochUnbondingRecordResponse;
            toProto(message: _159.QueryAllEpochUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _159.QueryAllEpochUnbondingRecordResponse): _159.QueryAllEpochUnbondingRecordResponseProtoMsg;
        };
        QueryLSMDepositRequest: {
            typeUrl: string;
            encode(message: _159.QueryLSMDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryLSMDepositRequest;
            fromPartial(object: Partial<_159.QueryLSMDepositRequest>): _159.QueryLSMDepositRequest;
            fromAmino(object: _159.QueryLSMDepositRequestAmino): _159.QueryLSMDepositRequest;
            toAmino(message: _159.QueryLSMDepositRequest): _159.QueryLSMDepositRequestAmino;
            fromAminoMsg(object: _159.QueryLSMDepositRequestAminoMsg): _159.QueryLSMDepositRequest;
            fromProtoMsg(message: _159.QueryLSMDepositRequestProtoMsg): _159.QueryLSMDepositRequest;
            toProto(message: _159.QueryLSMDepositRequest): Uint8Array;
            toProtoMsg(message: _159.QueryLSMDepositRequest): _159.QueryLSMDepositRequestProtoMsg;
        };
        QueryLSMDepositResponse: {
            typeUrl: string;
            encode(message: _159.QueryLSMDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryLSMDepositResponse;
            fromPartial(object: Partial<_159.QueryLSMDepositResponse>): _159.QueryLSMDepositResponse;
            fromAmino(object: _159.QueryLSMDepositResponseAmino): _159.QueryLSMDepositResponse;
            toAmino(message: _159.QueryLSMDepositResponse): _159.QueryLSMDepositResponseAmino;
            fromAminoMsg(object: _159.QueryLSMDepositResponseAminoMsg): _159.QueryLSMDepositResponse;
            fromProtoMsg(message: _159.QueryLSMDepositResponseProtoMsg): _159.QueryLSMDepositResponse;
            toProto(message: _159.QueryLSMDepositResponse): Uint8Array;
            toProtoMsg(message: _159.QueryLSMDepositResponse): _159.QueryLSMDepositResponseProtoMsg;
        };
        QueryLSMDepositsRequest: {
            typeUrl: string;
            encode(message: _159.QueryLSMDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryLSMDepositsRequest;
            fromPartial(object: Partial<_159.QueryLSMDepositsRequest>): _159.QueryLSMDepositsRequest;
            fromAmino(object: _159.QueryLSMDepositsRequestAmino): _159.QueryLSMDepositsRequest;
            toAmino(message: _159.QueryLSMDepositsRequest): _159.QueryLSMDepositsRequestAmino;
            fromAminoMsg(object: _159.QueryLSMDepositsRequestAminoMsg): _159.QueryLSMDepositsRequest;
            fromProtoMsg(message: _159.QueryLSMDepositsRequestProtoMsg): _159.QueryLSMDepositsRequest;
            toProto(message: _159.QueryLSMDepositsRequest): Uint8Array;
            toProtoMsg(message: _159.QueryLSMDepositsRequest): _159.QueryLSMDepositsRequestProtoMsg;
        };
        QueryLSMDepositsResponse: {
            typeUrl: string;
            encode(message: _159.QueryLSMDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryLSMDepositsResponse;
            fromPartial(object: Partial<_159.QueryLSMDepositsResponse>): _159.QueryLSMDepositsResponse;
            fromAmino(object: _159.QueryLSMDepositsResponseAmino): _159.QueryLSMDepositsResponse;
            toAmino(message: _159.QueryLSMDepositsResponse): _159.QueryLSMDepositsResponseAmino;
            fromAminoMsg(object: _159.QueryLSMDepositsResponseAminoMsg): _159.QueryLSMDepositsResponse;
            fromProtoMsg(message: _159.QueryLSMDepositsResponseProtoMsg): _159.QueryLSMDepositsResponse;
            toProto(message: _159.QueryLSMDepositsResponse): Uint8Array;
            toProtoMsg(message: _159.QueryLSMDepositsResponse): _159.QueryLSMDepositsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _158.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.Params;
            fromPartial(_: Partial<_158.Params>): _158.Params;
            fromAmino(_: _158.ParamsAmino): _158.Params;
            toAmino(_: _158.Params): _158.ParamsAmino;
            fromAminoMsg(object: _158.ParamsAminoMsg): _158.Params;
            fromProtoMsg(message: _158.ParamsProtoMsg): _158.Params;
            toProto(message: _158.Params): Uint8Array;
            toProtoMsg(message: _158.Params): _158.ParamsProtoMsg;
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
        TransferCallback: {
            typeUrl: string;
            encode(message: _156.TransferCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _156.TransferCallback;
            fromPartial(object: Partial<_156.TransferCallback>): _156.TransferCallback;
            fromAmino(object: _156.TransferCallbackAmino): _156.TransferCallback;
            toAmino(message: _156.TransferCallback): _156.TransferCallbackAmino;
            fromAminoMsg(object: _156.TransferCallbackAminoMsg): _156.TransferCallback;
            fromProtoMsg(message: _156.TransferCallbackProtoMsg): _156.TransferCallback;
            toProto(message: _156.TransferCallback): Uint8Array;
            toProtoMsg(message: _156.TransferCallback): _156.TransferCallbackProtoMsg;
        };
        TransferLSMTokenCallback: {
            typeUrl: string;
            encode(message: _156.TransferLSMTokenCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _156.TransferLSMTokenCallback;
            fromPartial(object: Partial<_156.TransferLSMTokenCallback>): _156.TransferLSMTokenCallback;
            fromAmino(object: _156.TransferLSMTokenCallbackAmino): _156.TransferLSMTokenCallback;
            toAmino(message: _156.TransferLSMTokenCallback): _156.TransferLSMTokenCallbackAmino;
            fromAminoMsg(object: _156.TransferLSMTokenCallbackAminoMsg): _156.TransferLSMTokenCallback;
            fromProtoMsg(message: _156.TransferLSMTokenCallbackProtoMsg): _156.TransferLSMTokenCallback;
            toProto(message: _156.TransferLSMTokenCallback): Uint8Array;
            toProtoMsg(message: _156.TransferLSMTokenCallback): _156.TransferLSMTokenCallbackProtoMsg;
        };
    };
    const stakedym: {
        MsgClientImpl: typeof _294.MsgClientImpl;
        QueryClientImpl: typeof _287.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            hostZone(request?: _162.QueryHostZoneRequest): Promise<_162.QueryHostZoneResponse>;
            delegationRecords(request: _162.QueryDelegationRecordsRequest): Promise<_162.QueryDelegationRecordsResponse>;
            unbondingRecords(request: _162.QueryUnbondingRecordsRequest): Promise<_162.QueryUnbondingRecordsResponse>;
            redemptionRecord(request: _162.QueryRedemptionRecordRequest): Promise<_162.QueryRedemptionRecordResponse>;
            redemptionRecords(request: _162.QueryRedemptionRecordsRequest): Promise<_162.QueryRedemptionRecordsResponse>;
            slashRecords(request?: _162.QuerySlashRecordsRequest): Promise<_162.QuerySlashRecordsResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                liquidStake(value: _164.MsgLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                redeemStake(value: _164.MsgRedeemStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmDelegation(value: _164.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmUndelegation(value: _164.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmUnbondedTokenSweep(value: _164.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                adjustDelegatedBalance(value: _164.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateInnerRedemptionRateBounds(value: _164.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                resumeHostZone(value: _164.MsgResumeHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                refreshRedemptionRate(value: _164.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteDelegationRecord(value: _164.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteUnbondingRecord(value: _164.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteRedemptionRecord(value: _164.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setOperatorAddress(value: _164.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                liquidStake(value: _164.MsgLiquidStake): {
                    typeUrl: string;
                    value: _164.MsgLiquidStake;
                };
                redeemStake(value: _164.MsgRedeemStake): {
                    typeUrl: string;
                    value: _164.MsgRedeemStake;
                };
                confirmDelegation(value: _164.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: _164.MsgConfirmDelegation;
                };
                confirmUndelegation(value: _164.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: _164.MsgConfirmUndelegation;
                };
                confirmUnbondedTokenSweep(value: _164.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: _164.MsgConfirmUnbondedTokenSweep;
                };
                adjustDelegatedBalance(value: _164.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: _164.MsgAdjustDelegatedBalance;
                };
                updateInnerRedemptionRateBounds(value: _164.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _164.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _164.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _164.MsgResumeHostZone;
                };
                refreshRedemptionRate(value: _164.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: _164.MsgRefreshRedemptionRate;
                };
                overwriteDelegationRecord(value: _164.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: _164.MsgOverwriteDelegationRecord;
                };
                overwriteUnbondingRecord(value: _164.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: _164.MsgOverwriteUnbondingRecord;
                };
                overwriteRedemptionRecord(value: _164.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: _164.MsgOverwriteRedemptionRecord;
                };
                setOperatorAddress(value: _164.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: _164.MsgSetOperatorAddress;
                };
            };
            fromPartial: {
                liquidStake(value: _164.MsgLiquidStake): {
                    typeUrl: string;
                    value: _164.MsgLiquidStake;
                };
                redeemStake(value: _164.MsgRedeemStake): {
                    typeUrl: string;
                    value: _164.MsgRedeemStake;
                };
                confirmDelegation(value: _164.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: _164.MsgConfirmDelegation;
                };
                confirmUndelegation(value: _164.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: _164.MsgConfirmUndelegation;
                };
                confirmUnbondedTokenSweep(value: _164.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: _164.MsgConfirmUnbondedTokenSweep;
                };
                adjustDelegatedBalance(value: _164.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: _164.MsgAdjustDelegatedBalance;
                };
                updateInnerRedemptionRateBounds(value: _164.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _164.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _164.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _164.MsgResumeHostZone;
                };
                refreshRedemptionRate(value: _164.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: _164.MsgRefreshRedemptionRate;
                };
                overwriteDelegationRecord(value: _164.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: _164.MsgOverwriteDelegationRecord;
                };
                overwriteUnbondingRecord(value: _164.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: _164.MsgOverwriteUnbondingRecord;
                };
                overwriteRedemptionRecord(value: _164.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: _164.MsgOverwriteRedemptionRecord;
                };
                setOperatorAddress(value: _164.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: _164.MsgSetOperatorAddress;
                };
            };
        };
        AminoConverter: {
            "/stride.stakedym.MsgLiquidStake": {
                aminoType: string;
                toAmino: (message: _164.MsgLiquidStake) => _164.MsgLiquidStakeAmino;
                fromAmino: (object: _164.MsgLiquidStakeAmino) => _164.MsgLiquidStake;
            };
            "/stride.stakedym.MsgRedeemStake": {
                aminoType: string;
                toAmino: (message: _164.MsgRedeemStake) => _164.MsgRedeemStakeAmino;
                fromAmino: (object: _164.MsgRedeemStakeAmino) => _164.MsgRedeemStake;
            };
            "/stride.stakedym.MsgConfirmDelegation": {
                aminoType: string;
                toAmino: (message: _164.MsgConfirmDelegation) => _164.MsgConfirmDelegationAmino;
                fromAmino: (object: _164.MsgConfirmDelegationAmino) => _164.MsgConfirmDelegation;
            };
            "/stride.stakedym.MsgConfirmUndelegation": {
                aminoType: string;
                toAmino: (message: _164.MsgConfirmUndelegation) => _164.MsgConfirmUndelegationAmino;
                fromAmino: (object: _164.MsgConfirmUndelegationAmino) => _164.MsgConfirmUndelegation;
            };
            "/stride.stakedym.MsgConfirmUnbondedTokenSweep": {
                aminoType: string;
                toAmino: (message: _164.MsgConfirmUnbondedTokenSweep) => _164.MsgConfirmUnbondedTokenSweepAmino;
                fromAmino: (object: _164.MsgConfirmUnbondedTokenSweepAmino) => _164.MsgConfirmUnbondedTokenSweep;
            };
            "/stride.stakedym.MsgAdjustDelegatedBalance": {
                aminoType: string;
                toAmino: (message: _164.MsgAdjustDelegatedBalance) => _164.MsgAdjustDelegatedBalanceAmino;
                fromAmino: (object: _164.MsgAdjustDelegatedBalanceAmino) => _164.MsgAdjustDelegatedBalance;
            };
            "/stride.stakedym.MsgUpdateInnerRedemptionRateBounds": {
                aminoType: string;
                toAmino: (message: _164.MsgUpdateInnerRedemptionRateBounds) => _164.MsgUpdateInnerRedemptionRateBoundsAmino;
                fromAmino: (object: _164.MsgUpdateInnerRedemptionRateBoundsAmino) => _164.MsgUpdateInnerRedemptionRateBounds;
            };
            "/stride.stakedym.MsgResumeHostZone": {
                aminoType: string;
                toAmino: (message: _164.MsgResumeHostZone) => _164.MsgResumeHostZoneAmino;
                fromAmino: (object: _164.MsgResumeHostZoneAmino) => _164.MsgResumeHostZone;
            };
            "/stride.stakedym.MsgRefreshRedemptionRate": {
                aminoType: string;
                toAmino: (message: _164.MsgRefreshRedemptionRate) => _164.MsgRefreshRedemptionRateAmino;
                fromAmino: (object: _164.MsgRefreshRedemptionRateAmino) => _164.MsgRefreshRedemptionRate;
            };
            "/stride.stakedym.MsgOverwriteDelegationRecord": {
                aminoType: string;
                toAmino: (message: _164.MsgOverwriteDelegationRecord) => _164.MsgOverwriteDelegationRecordAmino;
                fromAmino: (object: _164.MsgOverwriteDelegationRecordAmino) => _164.MsgOverwriteDelegationRecord;
            };
            "/stride.stakedym.MsgOverwriteUnbondingRecord": {
                aminoType: string;
                toAmino: (message: _164.MsgOverwriteUnbondingRecord) => _164.MsgOverwriteUnbondingRecordAmino;
                fromAmino: (object: _164.MsgOverwriteUnbondingRecordAmino) => _164.MsgOverwriteUnbondingRecord;
            };
            "/stride.stakedym.MsgOverwriteRedemptionRecord": {
                aminoType: string;
                toAmino: (message: _164.MsgOverwriteRedemptionRecord) => _164.MsgOverwriteRedemptionRecordAmino;
                fromAmino: (object: _164.MsgOverwriteRedemptionRecordAmino) => _164.MsgOverwriteRedemptionRecord;
            };
            "/stride.stakedym.MsgSetOperatorAddress": {
                aminoType: string;
                toAmino: (message: _164.MsgSetOperatorAddress) => _164.MsgSetOperatorAddressAmino;
                fromAmino: (object: _164.MsgSetOperatorAddressAmino) => _164.MsgSetOperatorAddress;
            };
        };
        overwritableRecordTypeFromJSON(object: any): _164.OverwritableRecordType;
        overwritableRecordTypeToJSON(object: _164.OverwritableRecordType): string;
        OverwritableRecordType: typeof _164.OverwritableRecordType;
        OverwritableRecordTypeSDKType: typeof _164.OverwritableRecordType;
        OverwritableRecordTypeAmino: typeof _164.OverwritableRecordType;
        MsgLiquidStake: {
            typeUrl: string;
            encode(message: _164.MsgLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.MsgLiquidStake;
            fromPartial(object: Partial<_164.MsgLiquidStake>): _164.MsgLiquidStake;
            fromAmino(object: _164.MsgLiquidStakeAmino): _164.MsgLiquidStake;
            toAmino(message: _164.MsgLiquidStake): _164.MsgLiquidStakeAmino;
            fromAminoMsg(object: _164.MsgLiquidStakeAminoMsg): _164.MsgLiquidStake;
            toAminoMsg(message: _164.MsgLiquidStake): _164.MsgLiquidStakeAminoMsg;
            fromProtoMsg(message: _164.MsgLiquidStakeProtoMsg): _164.MsgLiquidStake;
            toProto(message: _164.MsgLiquidStake): Uint8Array;
            toProtoMsg(message: _164.MsgLiquidStake): _164.MsgLiquidStakeProtoMsg;
        };
        MsgLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _164.MsgLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.MsgLiquidStakeResponse;
            fromPartial(object: Partial<_164.MsgLiquidStakeResponse>): _164.MsgLiquidStakeResponse;
            fromAmino(object: _164.MsgLiquidStakeResponseAmino): _164.MsgLiquidStakeResponse;
            toAmino(message: _164.MsgLiquidStakeResponse): _164.MsgLiquidStakeResponseAmino;
            fromAminoMsg(object: _164.MsgLiquidStakeResponseAminoMsg): _164.MsgLiquidStakeResponse;
            fromProtoMsg(message: _164.MsgLiquidStakeResponseProtoMsg): _164.MsgLiquidStakeResponse;
            toProto(message: _164.MsgLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _164.MsgLiquidStakeResponse): _164.MsgLiquidStakeResponseProtoMsg;
        };
        MsgRedeemStake: {
            typeUrl: string;
            encode(message: _164.MsgRedeemStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.MsgRedeemStake;
            fromPartial(object: Partial<_164.MsgRedeemStake>): _164.MsgRedeemStake;
            fromAmino(object: _164.MsgRedeemStakeAmino): _164.MsgRedeemStake;
            toAmino(message: _164.MsgRedeemStake): _164.MsgRedeemStakeAmino;
            fromAminoMsg(object: _164.MsgRedeemStakeAminoMsg): _164.MsgRedeemStake;
            toAminoMsg(message: _164.MsgRedeemStake): _164.MsgRedeemStakeAminoMsg;
            fromProtoMsg(message: _164.MsgRedeemStakeProtoMsg): _164.MsgRedeemStake;
            toProto(message: _164.MsgRedeemStake): Uint8Array;
            toProtoMsg(message: _164.MsgRedeemStake): _164.MsgRedeemStakeProtoMsg;
        };
        MsgRedeemStakeResponse: {
            typeUrl: string;
            encode(message: _164.MsgRedeemStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.MsgRedeemStakeResponse;
            fromPartial(object: Partial<_164.MsgRedeemStakeResponse>): _164.MsgRedeemStakeResponse;
            fromAmino(object: _164.MsgRedeemStakeResponseAmino): _164.MsgRedeemStakeResponse;
            toAmino(message: _164.MsgRedeemStakeResponse): _164.MsgRedeemStakeResponseAmino;
            fromAminoMsg(object: _164.MsgRedeemStakeResponseAminoMsg): _164.MsgRedeemStakeResponse;
            fromProtoMsg(message: _164.MsgRedeemStakeResponseProtoMsg): _164.MsgRedeemStakeResponse;
            toProto(message: _164.MsgRedeemStakeResponse): Uint8Array;
            toProtoMsg(message: _164.MsgRedeemStakeResponse): _164.MsgRedeemStakeResponseProtoMsg;
        };
        MsgConfirmDelegation: {
            typeUrl: string;
            encode(message: _164.MsgConfirmDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.MsgConfirmDelegation;
            fromPartial(object: Partial<_164.MsgConfirmDelegation>): _164.MsgConfirmDelegation;
            fromAmino(object: _164.MsgConfirmDelegationAmino): _164.MsgConfirmDelegation;
            toAmino(message: _164.MsgConfirmDelegation): _164.MsgConfirmDelegationAmino;
            fromAminoMsg(object: _164.MsgConfirmDelegationAminoMsg): _164.MsgConfirmDelegation;
            toAminoMsg(message: _164.MsgConfirmDelegation): _164.MsgConfirmDelegationAminoMsg;
            fromProtoMsg(message: _164.MsgConfirmDelegationProtoMsg): _164.MsgConfirmDelegation;
            toProto(message: _164.MsgConfirmDelegation): Uint8Array;
            toProtoMsg(message: _164.MsgConfirmDelegation): _164.MsgConfirmDelegationProtoMsg;
        };
        MsgConfirmDelegationResponse: {
            typeUrl: string;
            encode(_: _164.MsgConfirmDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.MsgConfirmDelegationResponse;
            fromPartial(_: Partial<_164.MsgConfirmDelegationResponse>): _164.MsgConfirmDelegationResponse;
            fromAmino(_: _164.MsgConfirmDelegationResponseAmino): _164.MsgConfirmDelegationResponse;
            toAmino(_: _164.MsgConfirmDelegationResponse): _164.MsgConfirmDelegationResponseAmino;
            fromAminoMsg(object: _164.MsgConfirmDelegationResponseAminoMsg): _164.MsgConfirmDelegationResponse;
            fromProtoMsg(message: _164.MsgConfirmDelegationResponseProtoMsg): _164.MsgConfirmDelegationResponse;
            toProto(message: _164.MsgConfirmDelegationResponse): Uint8Array;
            toProtoMsg(message: _164.MsgConfirmDelegationResponse): _164.MsgConfirmDelegationResponseProtoMsg;
        };
        MsgConfirmUndelegation: {
            typeUrl: string;
            encode(message: _164.MsgConfirmUndelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.MsgConfirmUndelegation;
            fromPartial(object: Partial<_164.MsgConfirmUndelegation>): _164.MsgConfirmUndelegation;
            fromAmino(object: _164.MsgConfirmUndelegationAmino): _164.MsgConfirmUndelegation;
            toAmino(message: _164.MsgConfirmUndelegation): _164.MsgConfirmUndelegationAmino;
            fromAminoMsg(object: _164.MsgConfirmUndelegationAminoMsg): _164.MsgConfirmUndelegation;
            toAminoMsg(message: _164.MsgConfirmUndelegation): _164.MsgConfirmUndelegationAminoMsg;
            fromProtoMsg(message: _164.MsgConfirmUndelegationProtoMsg): _164.MsgConfirmUndelegation;
            toProto(message: _164.MsgConfirmUndelegation): Uint8Array;
            toProtoMsg(message: _164.MsgConfirmUndelegation): _164.MsgConfirmUndelegationProtoMsg;
        };
        MsgConfirmUndelegationResponse: {
            typeUrl: string;
            encode(_: _164.MsgConfirmUndelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.MsgConfirmUndelegationResponse;
            fromPartial(_: Partial<_164.MsgConfirmUndelegationResponse>): _164.MsgConfirmUndelegationResponse;
            fromAmino(_: _164.MsgConfirmUndelegationResponseAmino): _164.MsgConfirmUndelegationResponse;
            toAmino(_: _164.MsgConfirmUndelegationResponse): _164.MsgConfirmUndelegationResponseAmino;
            fromAminoMsg(object: _164.MsgConfirmUndelegationResponseAminoMsg): _164.MsgConfirmUndelegationResponse;
            fromProtoMsg(message: _164.MsgConfirmUndelegationResponseProtoMsg): _164.MsgConfirmUndelegationResponse;
            toProto(message: _164.MsgConfirmUndelegationResponse): Uint8Array;
            toProtoMsg(message: _164.MsgConfirmUndelegationResponse): _164.MsgConfirmUndelegationResponseProtoMsg;
        };
        MsgConfirmUnbondedTokenSweep: {
            typeUrl: string;
            encode(message: _164.MsgConfirmUnbondedTokenSweep, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.MsgConfirmUnbondedTokenSweep;
            fromPartial(object: Partial<_164.MsgConfirmUnbondedTokenSweep>): _164.MsgConfirmUnbondedTokenSweep;
            fromAmino(object: _164.MsgConfirmUnbondedTokenSweepAmino): _164.MsgConfirmUnbondedTokenSweep;
            toAmino(message: _164.MsgConfirmUnbondedTokenSweep): _164.MsgConfirmUnbondedTokenSweepAmino;
            fromAminoMsg(object: _164.MsgConfirmUnbondedTokenSweepAminoMsg): _164.MsgConfirmUnbondedTokenSweep;
            toAminoMsg(message: _164.MsgConfirmUnbondedTokenSweep): _164.MsgConfirmUnbondedTokenSweepAminoMsg;
            fromProtoMsg(message: _164.MsgConfirmUnbondedTokenSweepProtoMsg): _164.MsgConfirmUnbondedTokenSweep;
            toProto(message: _164.MsgConfirmUnbondedTokenSweep): Uint8Array;
            toProtoMsg(message: _164.MsgConfirmUnbondedTokenSweep): _164.MsgConfirmUnbondedTokenSweepProtoMsg;
        };
        MsgConfirmUnbondedTokenSweepResponse: {
            typeUrl: string;
            encode(_: _164.MsgConfirmUnbondedTokenSweepResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.MsgConfirmUnbondedTokenSweepResponse;
            fromPartial(_: Partial<_164.MsgConfirmUnbondedTokenSweepResponse>): _164.MsgConfirmUnbondedTokenSweepResponse;
            fromAmino(_: _164.MsgConfirmUnbondedTokenSweepResponseAmino): _164.MsgConfirmUnbondedTokenSweepResponse;
            toAmino(_: _164.MsgConfirmUnbondedTokenSweepResponse): _164.MsgConfirmUnbondedTokenSweepResponseAmino;
            fromAminoMsg(object: _164.MsgConfirmUnbondedTokenSweepResponseAminoMsg): _164.MsgConfirmUnbondedTokenSweepResponse;
            fromProtoMsg(message: _164.MsgConfirmUnbondedTokenSweepResponseProtoMsg): _164.MsgConfirmUnbondedTokenSweepResponse;
            toProto(message: _164.MsgConfirmUnbondedTokenSweepResponse): Uint8Array;
            toProtoMsg(message: _164.MsgConfirmUnbondedTokenSweepResponse): _164.MsgConfirmUnbondedTokenSweepResponseProtoMsg;
        };
        MsgAdjustDelegatedBalance: {
            typeUrl: string;
            encode(message: _164.MsgAdjustDelegatedBalance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.MsgAdjustDelegatedBalance;
            fromPartial(object: Partial<_164.MsgAdjustDelegatedBalance>): _164.MsgAdjustDelegatedBalance;
            fromAmino(object: _164.MsgAdjustDelegatedBalanceAmino): _164.MsgAdjustDelegatedBalance;
            toAmino(message: _164.MsgAdjustDelegatedBalance): _164.MsgAdjustDelegatedBalanceAmino;
            fromAminoMsg(object: _164.MsgAdjustDelegatedBalanceAminoMsg): _164.MsgAdjustDelegatedBalance;
            toAminoMsg(message: _164.MsgAdjustDelegatedBalance): _164.MsgAdjustDelegatedBalanceAminoMsg;
            fromProtoMsg(message: _164.MsgAdjustDelegatedBalanceProtoMsg): _164.MsgAdjustDelegatedBalance;
            toProto(message: _164.MsgAdjustDelegatedBalance): Uint8Array;
            toProtoMsg(message: _164.MsgAdjustDelegatedBalance): _164.MsgAdjustDelegatedBalanceProtoMsg;
        };
        MsgAdjustDelegatedBalanceResponse: {
            typeUrl: string;
            encode(_: _164.MsgAdjustDelegatedBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.MsgAdjustDelegatedBalanceResponse;
            fromPartial(_: Partial<_164.MsgAdjustDelegatedBalanceResponse>): _164.MsgAdjustDelegatedBalanceResponse;
            fromAmino(_: _164.MsgAdjustDelegatedBalanceResponseAmino): _164.MsgAdjustDelegatedBalanceResponse;
            toAmino(_: _164.MsgAdjustDelegatedBalanceResponse): _164.MsgAdjustDelegatedBalanceResponseAmino;
            fromAminoMsg(object: _164.MsgAdjustDelegatedBalanceResponseAminoMsg): _164.MsgAdjustDelegatedBalanceResponse;
            fromProtoMsg(message: _164.MsgAdjustDelegatedBalanceResponseProtoMsg): _164.MsgAdjustDelegatedBalanceResponse;
            toProto(message: _164.MsgAdjustDelegatedBalanceResponse): Uint8Array;
            toProtoMsg(message: _164.MsgAdjustDelegatedBalanceResponse): _164.MsgAdjustDelegatedBalanceResponseProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBounds: {
            typeUrl: string;
            encode(message: _164.MsgUpdateInnerRedemptionRateBounds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.MsgUpdateInnerRedemptionRateBounds;
            fromPartial(object: Partial<_164.MsgUpdateInnerRedemptionRateBounds>): _164.MsgUpdateInnerRedemptionRateBounds;
            fromAmino(object: _164.MsgUpdateInnerRedemptionRateBoundsAmino): _164.MsgUpdateInnerRedemptionRateBounds;
            toAmino(message: _164.MsgUpdateInnerRedemptionRateBounds): _164.MsgUpdateInnerRedemptionRateBoundsAmino;
            fromAminoMsg(object: _164.MsgUpdateInnerRedemptionRateBoundsAminoMsg): _164.MsgUpdateInnerRedemptionRateBounds;
            toAminoMsg(message: _164.MsgUpdateInnerRedemptionRateBounds): _164.MsgUpdateInnerRedemptionRateBoundsAminoMsg;
            fromProtoMsg(message: _164.MsgUpdateInnerRedemptionRateBoundsProtoMsg): _164.MsgUpdateInnerRedemptionRateBounds;
            toProto(message: _164.MsgUpdateInnerRedemptionRateBounds): Uint8Array;
            toProtoMsg(message: _164.MsgUpdateInnerRedemptionRateBounds): _164.MsgUpdateInnerRedemptionRateBoundsProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBoundsResponse: {
            typeUrl: string;
            encode(_: _164.MsgUpdateInnerRedemptionRateBoundsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromPartial(_: Partial<_164.MsgUpdateInnerRedemptionRateBoundsResponse>): _164.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromAmino(_: _164.MsgUpdateInnerRedemptionRateBoundsResponseAmino): _164.MsgUpdateInnerRedemptionRateBoundsResponse;
            toAmino(_: _164.MsgUpdateInnerRedemptionRateBoundsResponse): _164.MsgUpdateInnerRedemptionRateBoundsResponseAmino;
            fromAminoMsg(object: _164.MsgUpdateInnerRedemptionRateBoundsResponseAminoMsg): _164.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromProtoMsg(message: _164.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg): _164.MsgUpdateInnerRedemptionRateBoundsResponse;
            toProto(message: _164.MsgUpdateInnerRedemptionRateBoundsResponse): Uint8Array;
            toProtoMsg(message: _164.MsgUpdateInnerRedemptionRateBoundsResponse): _164.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg;
        };
        MsgResumeHostZone: {
            typeUrl: string;
            encode(message: _164.MsgResumeHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.MsgResumeHostZone;
            fromPartial(object: Partial<_164.MsgResumeHostZone>): _164.MsgResumeHostZone;
            fromAmino(object: _164.MsgResumeHostZoneAmino): _164.MsgResumeHostZone;
            toAmino(message: _164.MsgResumeHostZone): _164.MsgResumeHostZoneAmino;
            fromAminoMsg(object: _164.MsgResumeHostZoneAminoMsg): _164.MsgResumeHostZone;
            toAminoMsg(message: _164.MsgResumeHostZone): _164.MsgResumeHostZoneAminoMsg;
            fromProtoMsg(message: _164.MsgResumeHostZoneProtoMsg): _164.MsgResumeHostZone;
            toProto(message: _164.MsgResumeHostZone): Uint8Array;
            toProtoMsg(message: _164.MsgResumeHostZone): _164.MsgResumeHostZoneProtoMsg;
        };
        MsgResumeHostZoneResponse: {
            typeUrl: string;
            encode(_: _164.MsgResumeHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.MsgResumeHostZoneResponse;
            fromPartial(_: Partial<_164.MsgResumeHostZoneResponse>): _164.MsgResumeHostZoneResponse;
            fromAmino(_: _164.MsgResumeHostZoneResponseAmino): _164.MsgResumeHostZoneResponse;
            toAmino(_: _164.MsgResumeHostZoneResponse): _164.MsgResumeHostZoneResponseAmino;
            fromAminoMsg(object: _164.MsgResumeHostZoneResponseAminoMsg): _164.MsgResumeHostZoneResponse;
            fromProtoMsg(message: _164.MsgResumeHostZoneResponseProtoMsg): _164.MsgResumeHostZoneResponse;
            toProto(message: _164.MsgResumeHostZoneResponse): Uint8Array;
            toProtoMsg(message: _164.MsgResumeHostZoneResponse): _164.MsgResumeHostZoneResponseProtoMsg;
        };
        MsgRefreshRedemptionRate: {
            typeUrl: string;
            encode(message: _164.MsgRefreshRedemptionRate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.MsgRefreshRedemptionRate;
            fromPartial(object: Partial<_164.MsgRefreshRedemptionRate>): _164.MsgRefreshRedemptionRate;
            fromAmino(object: _164.MsgRefreshRedemptionRateAmino): _164.MsgRefreshRedemptionRate;
            toAmino(message: _164.MsgRefreshRedemptionRate): _164.MsgRefreshRedemptionRateAmino;
            fromAminoMsg(object: _164.MsgRefreshRedemptionRateAminoMsg): _164.MsgRefreshRedemptionRate;
            toAminoMsg(message: _164.MsgRefreshRedemptionRate): _164.MsgRefreshRedemptionRateAminoMsg;
            fromProtoMsg(message: _164.MsgRefreshRedemptionRateProtoMsg): _164.MsgRefreshRedemptionRate;
            toProto(message: _164.MsgRefreshRedemptionRate): Uint8Array;
            toProtoMsg(message: _164.MsgRefreshRedemptionRate): _164.MsgRefreshRedemptionRateProtoMsg;
        };
        MsgRefreshRedemptionRateResponse: {
            typeUrl: string;
            encode(_: _164.MsgRefreshRedemptionRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.MsgRefreshRedemptionRateResponse;
            fromPartial(_: Partial<_164.MsgRefreshRedemptionRateResponse>): _164.MsgRefreshRedemptionRateResponse;
            fromAmino(_: _164.MsgRefreshRedemptionRateResponseAmino): _164.MsgRefreshRedemptionRateResponse;
            toAmino(_: _164.MsgRefreshRedemptionRateResponse): _164.MsgRefreshRedemptionRateResponseAmino;
            fromAminoMsg(object: _164.MsgRefreshRedemptionRateResponseAminoMsg): _164.MsgRefreshRedemptionRateResponse;
            fromProtoMsg(message: _164.MsgRefreshRedemptionRateResponseProtoMsg): _164.MsgRefreshRedemptionRateResponse;
            toProto(message: _164.MsgRefreshRedemptionRateResponse): Uint8Array;
            toProtoMsg(message: _164.MsgRefreshRedemptionRateResponse): _164.MsgRefreshRedemptionRateResponseProtoMsg;
        };
        MsgOverwriteDelegationRecord: {
            typeUrl: string;
            encode(message: _164.MsgOverwriteDelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.MsgOverwriteDelegationRecord;
            fromPartial(object: Partial<_164.MsgOverwriteDelegationRecord>): _164.MsgOverwriteDelegationRecord;
            fromAmino(object: _164.MsgOverwriteDelegationRecordAmino): _164.MsgOverwriteDelegationRecord;
            toAmino(message: _164.MsgOverwriteDelegationRecord): _164.MsgOverwriteDelegationRecordAmino;
            fromAminoMsg(object: _164.MsgOverwriteDelegationRecordAminoMsg): _164.MsgOverwriteDelegationRecord;
            toAminoMsg(message: _164.MsgOverwriteDelegationRecord): _164.MsgOverwriteDelegationRecordAminoMsg;
            fromProtoMsg(message: _164.MsgOverwriteDelegationRecordProtoMsg): _164.MsgOverwriteDelegationRecord;
            toProto(message: _164.MsgOverwriteDelegationRecord): Uint8Array;
            toProtoMsg(message: _164.MsgOverwriteDelegationRecord): _164.MsgOverwriteDelegationRecordProtoMsg;
        };
        MsgOverwriteDelegationRecordResponse: {
            typeUrl: string;
            encode(_: _164.MsgOverwriteDelegationRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.MsgOverwriteDelegationRecordResponse;
            fromPartial(_: Partial<_164.MsgOverwriteDelegationRecordResponse>): _164.MsgOverwriteDelegationRecordResponse;
            fromAmino(_: _164.MsgOverwriteDelegationRecordResponseAmino): _164.MsgOverwriteDelegationRecordResponse;
            toAmino(_: _164.MsgOverwriteDelegationRecordResponse): _164.MsgOverwriteDelegationRecordResponseAmino;
            fromAminoMsg(object: _164.MsgOverwriteDelegationRecordResponseAminoMsg): _164.MsgOverwriteDelegationRecordResponse;
            fromProtoMsg(message: _164.MsgOverwriteDelegationRecordResponseProtoMsg): _164.MsgOverwriteDelegationRecordResponse;
            toProto(message: _164.MsgOverwriteDelegationRecordResponse): Uint8Array;
            toProtoMsg(message: _164.MsgOverwriteDelegationRecordResponse): _164.MsgOverwriteDelegationRecordResponseProtoMsg;
        };
        MsgOverwriteUnbondingRecord: {
            typeUrl: string;
            encode(message: _164.MsgOverwriteUnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.MsgOverwriteUnbondingRecord;
            fromPartial(object: Partial<_164.MsgOverwriteUnbondingRecord>): _164.MsgOverwriteUnbondingRecord;
            fromAmino(object: _164.MsgOverwriteUnbondingRecordAmino): _164.MsgOverwriteUnbondingRecord;
            toAmino(message: _164.MsgOverwriteUnbondingRecord): _164.MsgOverwriteUnbondingRecordAmino;
            fromAminoMsg(object: _164.MsgOverwriteUnbondingRecordAminoMsg): _164.MsgOverwriteUnbondingRecord;
            toAminoMsg(message: _164.MsgOverwriteUnbondingRecord): _164.MsgOverwriteUnbondingRecordAminoMsg;
            fromProtoMsg(message: _164.MsgOverwriteUnbondingRecordProtoMsg): _164.MsgOverwriteUnbondingRecord;
            toProto(message: _164.MsgOverwriteUnbondingRecord): Uint8Array;
            toProtoMsg(message: _164.MsgOverwriteUnbondingRecord): _164.MsgOverwriteUnbondingRecordProtoMsg;
        };
        MsgOverwriteUnbondingRecordResponse: {
            typeUrl: string;
            encode(_: _164.MsgOverwriteUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.MsgOverwriteUnbondingRecordResponse;
            fromPartial(_: Partial<_164.MsgOverwriteUnbondingRecordResponse>): _164.MsgOverwriteUnbondingRecordResponse;
            fromAmino(_: _164.MsgOverwriteUnbondingRecordResponseAmino): _164.MsgOverwriteUnbondingRecordResponse;
            toAmino(_: _164.MsgOverwriteUnbondingRecordResponse): _164.MsgOverwriteUnbondingRecordResponseAmino;
            fromAminoMsg(object: _164.MsgOverwriteUnbondingRecordResponseAminoMsg): _164.MsgOverwriteUnbondingRecordResponse;
            fromProtoMsg(message: _164.MsgOverwriteUnbondingRecordResponseProtoMsg): _164.MsgOverwriteUnbondingRecordResponse;
            toProto(message: _164.MsgOverwriteUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _164.MsgOverwriteUnbondingRecordResponse): _164.MsgOverwriteUnbondingRecordResponseProtoMsg;
        };
        MsgOverwriteRedemptionRecord: {
            typeUrl: string;
            encode(message: _164.MsgOverwriteRedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.MsgOverwriteRedemptionRecord;
            fromPartial(object: Partial<_164.MsgOverwriteRedemptionRecord>): _164.MsgOverwriteRedemptionRecord;
            fromAmino(object: _164.MsgOverwriteRedemptionRecordAmino): _164.MsgOverwriteRedemptionRecord;
            toAmino(message: _164.MsgOverwriteRedemptionRecord): _164.MsgOverwriteRedemptionRecordAmino;
            fromAminoMsg(object: _164.MsgOverwriteRedemptionRecordAminoMsg): _164.MsgOverwriteRedemptionRecord;
            toAminoMsg(message: _164.MsgOverwriteRedemptionRecord): _164.MsgOverwriteRedemptionRecordAminoMsg;
            fromProtoMsg(message: _164.MsgOverwriteRedemptionRecordProtoMsg): _164.MsgOverwriteRedemptionRecord;
            toProto(message: _164.MsgOverwriteRedemptionRecord): Uint8Array;
            toProtoMsg(message: _164.MsgOverwriteRedemptionRecord): _164.MsgOverwriteRedemptionRecordProtoMsg;
        };
        MsgOverwriteRedemptionRecordResponse: {
            typeUrl: string;
            encode(_: _164.MsgOverwriteRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.MsgOverwriteRedemptionRecordResponse;
            fromPartial(_: Partial<_164.MsgOverwriteRedemptionRecordResponse>): _164.MsgOverwriteRedemptionRecordResponse;
            fromAmino(_: _164.MsgOverwriteRedemptionRecordResponseAmino): _164.MsgOverwriteRedemptionRecordResponse;
            toAmino(_: _164.MsgOverwriteRedemptionRecordResponse): _164.MsgOverwriteRedemptionRecordResponseAmino;
            fromAminoMsg(object: _164.MsgOverwriteRedemptionRecordResponseAminoMsg): _164.MsgOverwriteRedemptionRecordResponse;
            fromProtoMsg(message: _164.MsgOverwriteRedemptionRecordResponseProtoMsg): _164.MsgOverwriteRedemptionRecordResponse;
            toProto(message: _164.MsgOverwriteRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _164.MsgOverwriteRedemptionRecordResponse): _164.MsgOverwriteRedemptionRecordResponseProtoMsg;
        };
        MsgSetOperatorAddress: {
            typeUrl: string;
            encode(message: _164.MsgSetOperatorAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.MsgSetOperatorAddress;
            fromPartial(object: Partial<_164.MsgSetOperatorAddress>): _164.MsgSetOperatorAddress;
            fromAmino(object: _164.MsgSetOperatorAddressAmino): _164.MsgSetOperatorAddress;
            toAmino(message: _164.MsgSetOperatorAddress): _164.MsgSetOperatorAddressAmino;
            fromAminoMsg(object: _164.MsgSetOperatorAddressAminoMsg): _164.MsgSetOperatorAddress;
            toAminoMsg(message: _164.MsgSetOperatorAddress): _164.MsgSetOperatorAddressAminoMsg;
            fromProtoMsg(message: _164.MsgSetOperatorAddressProtoMsg): _164.MsgSetOperatorAddress;
            toProto(message: _164.MsgSetOperatorAddress): Uint8Array;
            toProtoMsg(message: _164.MsgSetOperatorAddress): _164.MsgSetOperatorAddressProtoMsg;
        };
        MsgSetOperatorAddressResponse: {
            typeUrl: string;
            encode(_: _164.MsgSetOperatorAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.MsgSetOperatorAddressResponse;
            fromPartial(_: Partial<_164.MsgSetOperatorAddressResponse>): _164.MsgSetOperatorAddressResponse;
            fromAmino(_: _164.MsgSetOperatorAddressResponseAmino): _164.MsgSetOperatorAddressResponse;
            toAmino(_: _164.MsgSetOperatorAddressResponse): _164.MsgSetOperatorAddressResponseAmino;
            fromAminoMsg(object: _164.MsgSetOperatorAddressResponseAminoMsg): _164.MsgSetOperatorAddressResponse;
            fromProtoMsg(message: _164.MsgSetOperatorAddressResponseProtoMsg): _164.MsgSetOperatorAddressResponse;
            toProto(message: _164.MsgSetOperatorAddressResponse): Uint8Array;
            toProtoMsg(message: _164.MsgSetOperatorAddressResponse): _164.MsgSetOperatorAddressResponseProtoMsg;
        };
        delegationRecordStatusFromJSON(object: any): _163.DelegationRecordStatus;
        delegationRecordStatusToJSON(object: _163.DelegationRecordStatus): string;
        unbondingRecordStatusFromJSON(object: any): _163.UnbondingRecordStatus;
        unbondingRecordStatusToJSON(object: _163.UnbondingRecordStatus): string;
        DelegationRecordStatus: typeof _163.DelegationRecordStatus;
        DelegationRecordStatusSDKType: typeof _163.DelegationRecordStatus;
        DelegationRecordStatusAmino: typeof _163.DelegationRecordStatus;
        UnbondingRecordStatus: typeof _163.UnbondingRecordStatus;
        UnbondingRecordStatusSDKType: typeof _163.UnbondingRecordStatus;
        UnbondingRecordStatusAmino: typeof _163.UnbondingRecordStatus;
        HostZone: {
            typeUrl: string;
            encode(message: _163.HostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.HostZone;
            fromPartial(object: Partial<_163.HostZone>): _163.HostZone;
            fromAmino(object: _163.HostZoneAmino): _163.HostZone;
            toAmino(message: _163.HostZone): _163.HostZoneAmino;
            fromAminoMsg(object: _163.HostZoneAminoMsg): _163.HostZone;
            fromProtoMsg(message: _163.HostZoneProtoMsg): _163.HostZone;
            toProto(message: _163.HostZone): Uint8Array;
            toProtoMsg(message: _163.HostZone): _163.HostZoneProtoMsg;
        };
        DelegationRecord: {
            typeUrl: string;
            encode(message: _163.DelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.DelegationRecord;
            fromPartial(object: Partial<_163.DelegationRecord>): _163.DelegationRecord;
            fromAmino(object: _163.DelegationRecordAmino): _163.DelegationRecord;
            toAmino(message: _163.DelegationRecord): _163.DelegationRecordAmino;
            fromAminoMsg(object: _163.DelegationRecordAminoMsg): _163.DelegationRecord;
            fromProtoMsg(message: _163.DelegationRecordProtoMsg): _163.DelegationRecord;
            toProto(message: _163.DelegationRecord): Uint8Array;
            toProtoMsg(message: _163.DelegationRecord): _163.DelegationRecordProtoMsg;
        };
        UnbondingRecord: {
            typeUrl: string;
            encode(message: _163.UnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.UnbondingRecord;
            fromPartial(object: Partial<_163.UnbondingRecord>): _163.UnbondingRecord;
            fromAmino(object: _163.UnbondingRecordAmino): _163.UnbondingRecord;
            toAmino(message: _163.UnbondingRecord): _163.UnbondingRecordAmino;
            fromAminoMsg(object: _163.UnbondingRecordAminoMsg): _163.UnbondingRecord;
            fromProtoMsg(message: _163.UnbondingRecordProtoMsg): _163.UnbondingRecord;
            toProto(message: _163.UnbondingRecord): Uint8Array;
            toProtoMsg(message: _163.UnbondingRecord): _163.UnbondingRecordProtoMsg;
        };
        RedemptionRecord: {
            typeUrl: string;
            encode(message: _163.RedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.RedemptionRecord;
            fromPartial(object: Partial<_163.RedemptionRecord>): _163.RedemptionRecord;
            fromAmino(object: _163.RedemptionRecordAmino): _163.RedemptionRecord;
            toAmino(message: _163.RedemptionRecord): _163.RedemptionRecordAmino;
            fromAminoMsg(object: _163.RedemptionRecordAminoMsg): _163.RedemptionRecord;
            fromProtoMsg(message: _163.RedemptionRecordProtoMsg): _163.RedemptionRecord;
            toProto(message: _163.RedemptionRecord): Uint8Array;
            toProtoMsg(message: _163.RedemptionRecord): _163.RedemptionRecordProtoMsg;
        };
        SlashRecord: {
            typeUrl: string;
            encode(message: _163.SlashRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.SlashRecord;
            fromPartial(object: Partial<_163.SlashRecord>): _163.SlashRecord;
            fromAmino(object: _163.SlashRecordAmino): _163.SlashRecord;
            toAmino(message: _163.SlashRecord): _163.SlashRecordAmino;
            fromAminoMsg(object: _163.SlashRecordAminoMsg): _163.SlashRecord;
            fromProtoMsg(message: _163.SlashRecordProtoMsg): _163.SlashRecord;
            toProto(message: _163.SlashRecord): Uint8Array;
            toProtoMsg(message: _163.SlashRecord): _163.SlashRecordProtoMsg;
        };
        QueryHostZoneRequest: {
            typeUrl: string;
            encode(_: _162.QueryHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.QueryHostZoneRequest;
            fromPartial(_: Partial<_162.QueryHostZoneRequest>): _162.QueryHostZoneRequest;
            fromAmino(_: _162.QueryHostZoneRequestAmino): _162.QueryHostZoneRequest;
            toAmino(_: _162.QueryHostZoneRequest): _162.QueryHostZoneRequestAmino;
            fromAminoMsg(object: _162.QueryHostZoneRequestAminoMsg): _162.QueryHostZoneRequest;
            fromProtoMsg(message: _162.QueryHostZoneRequestProtoMsg): _162.QueryHostZoneRequest;
            toProto(message: _162.QueryHostZoneRequest): Uint8Array;
            toProtoMsg(message: _162.QueryHostZoneRequest): _162.QueryHostZoneRequestProtoMsg;
        };
        QueryHostZoneResponse: {
            typeUrl: string;
            encode(message: _162.QueryHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.QueryHostZoneResponse;
            fromPartial(object: Partial<_162.QueryHostZoneResponse>): _162.QueryHostZoneResponse;
            fromAmino(object: _162.QueryHostZoneResponseAmino): _162.QueryHostZoneResponse;
            toAmino(message: _162.QueryHostZoneResponse): _162.QueryHostZoneResponseAmino;
            fromAminoMsg(object: _162.QueryHostZoneResponseAminoMsg): _162.QueryHostZoneResponse;
            fromProtoMsg(message: _162.QueryHostZoneResponseProtoMsg): _162.QueryHostZoneResponse;
            toProto(message: _162.QueryHostZoneResponse): Uint8Array;
            toProtoMsg(message: _162.QueryHostZoneResponse): _162.QueryHostZoneResponseProtoMsg;
        };
        QueryDelegationRecordsRequest: {
            typeUrl: string;
            encode(message: _162.QueryDelegationRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.QueryDelegationRecordsRequest;
            fromPartial(object: Partial<_162.QueryDelegationRecordsRequest>): _162.QueryDelegationRecordsRequest;
            fromAmino(object: _162.QueryDelegationRecordsRequestAmino): _162.QueryDelegationRecordsRequest;
            toAmino(message: _162.QueryDelegationRecordsRequest): _162.QueryDelegationRecordsRequestAmino;
            fromAminoMsg(object: _162.QueryDelegationRecordsRequestAminoMsg): _162.QueryDelegationRecordsRequest;
            fromProtoMsg(message: _162.QueryDelegationRecordsRequestProtoMsg): _162.QueryDelegationRecordsRequest;
            toProto(message: _162.QueryDelegationRecordsRequest): Uint8Array;
            toProtoMsg(message: _162.QueryDelegationRecordsRequest): _162.QueryDelegationRecordsRequestProtoMsg;
        };
        QueryDelegationRecordsResponse: {
            typeUrl: string;
            encode(message: _162.QueryDelegationRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.QueryDelegationRecordsResponse;
            fromPartial(object: Partial<_162.QueryDelegationRecordsResponse>): _162.QueryDelegationRecordsResponse;
            fromAmino(object: _162.QueryDelegationRecordsResponseAmino): _162.QueryDelegationRecordsResponse;
            toAmino(message: _162.QueryDelegationRecordsResponse): _162.QueryDelegationRecordsResponseAmino;
            fromAminoMsg(object: _162.QueryDelegationRecordsResponseAminoMsg): _162.QueryDelegationRecordsResponse;
            fromProtoMsg(message: _162.QueryDelegationRecordsResponseProtoMsg): _162.QueryDelegationRecordsResponse;
            toProto(message: _162.QueryDelegationRecordsResponse): Uint8Array;
            toProtoMsg(message: _162.QueryDelegationRecordsResponse): _162.QueryDelegationRecordsResponseProtoMsg;
        };
        QueryUnbondingRecordsRequest: {
            typeUrl: string;
            encode(message: _162.QueryUnbondingRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.QueryUnbondingRecordsRequest;
            fromPartial(object: Partial<_162.QueryUnbondingRecordsRequest>): _162.QueryUnbondingRecordsRequest;
            fromAmino(object: _162.QueryUnbondingRecordsRequestAmino): _162.QueryUnbondingRecordsRequest;
            toAmino(message: _162.QueryUnbondingRecordsRequest): _162.QueryUnbondingRecordsRequestAmino;
            fromAminoMsg(object: _162.QueryUnbondingRecordsRequestAminoMsg): _162.QueryUnbondingRecordsRequest;
            fromProtoMsg(message: _162.QueryUnbondingRecordsRequestProtoMsg): _162.QueryUnbondingRecordsRequest;
            toProto(message: _162.QueryUnbondingRecordsRequest): Uint8Array;
            toProtoMsg(message: _162.QueryUnbondingRecordsRequest): _162.QueryUnbondingRecordsRequestProtoMsg;
        };
        QueryUnbondingRecordsResponse: {
            typeUrl: string;
            encode(message: _162.QueryUnbondingRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.QueryUnbondingRecordsResponse;
            fromPartial(object: Partial<_162.QueryUnbondingRecordsResponse>): _162.QueryUnbondingRecordsResponse;
            fromAmino(object: _162.QueryUnbondingRecordsResponseAmino): _162.QueryUnbondingRecordsResponse;
            toAmino(message: _162.QueryUnbondingRecordsResponse): _162.QueryUnbondingRecordsResponseAmino;
            fromAminoMsg(object: _162.QueryUnbondingRecordsResponseAminoMsg): _162.QueryUnbondingRecordsResponse;
            fromProtoMsg(message: _162.QueryUnbondingRecordsResponseProtoMsg): _162.QueryUnbondingRecordsResponse;
            toProto(message: _162.QueryUnbondingRecordsResponse): Uint8Array;
            toProtoMsg(message: _162.QueryUnbondingRecordsResponse): _162.QueryUnbondingRecordsResponseProtoMsg;
        };
        QueryRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _162.QueryRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.QueryRedemptionRecordRequest;
            fromPartial(object: Partial<_162.QueryRedemptionRecordRequest>): _162.QueryRedemptionRecordRequest;
            fromAmino(object: _162.QueryRedemptionRecordRequestAmino): _162.QueryRedemptionRecordRequest;
            toAmino(message: _162.QueryRedemptionRecordRequest): _162.QueryRedemptionRecordRequestAmino;
            fromAminoMsg(object: _162.QueryRedemptionRecordRequestAminoMsg): _162.QueryRedemptionRecordRequest;
            fromProtoMsg(message: _162.QueryRedemptionRecordRequestProtoMsg): _162.QueryRedemptionRecordRequest;
            toProto(message: _162.QueryRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _162.QueryRedemptionRecordRequest): _162.QueryRedemptionRecordRequestProtoMsg;
        };
        QueryRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _162.QueryRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.QueryRedemptionRecordResponse;
            fromPartial(object: Partial<_162.QueryRedemptionRecordResponse>): _162.QueryRedemptionRecordResponse;
            fromAmino(object: _162.QueryRedemptionRecordResponseAmino): _162.QueryRedemptionRecordResponse;
            toAmino(message: _162.QueryRedemptionRecordResponse): _162.QueryRedemptionRecordResponseAmino;
            fromAminoMsg(object: _162.QueryRedemptionRecordResponseAminoMsg): _162.QueryRedemptionRecordResponse;
            fromProtoMsg(message: _162.QueryRedemptionRecordResponseProtoMsg): _162.QueryRedemptionRecordResponse;
            toProto(message: _162.QueryRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _162.QueryRedemptionRecordResponse): _162.QueryRedemptionRecordResponseProtoMsg;
        };
        QueryRedemptionRecordsRequest: {
            typeUrl: string;
            encode(message: _162.QueryRedemptionRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.QueryRedemptionRecordsRequest;
            fromPartial(object: Partial<_162.QueryRedemptionRecordsRequest>): _162.QueryRedemptionRecordsRequest;
            fromAmino(object: _162.QueryRedemptionRecordsRequestAmino): _162.QueryRedemptionRecordsRequest;
            toAmino(message: _162.QueryRedemptionRecordsRequest): _162.QueryRedemptionRecordsRequestAmino;
            fromAminoMsg(object: _162.QueryRedemptionRecordsRequestAminoMsg): _162.QueryRedemptionRecordsRequest;
            fromProtoMsg(message: _162.QueryRedemptionRecordsRequestProtoMsg): _162.QueryRedemptionRecordsRequest;
            toProto(message: _162.QueryRedemptionRecordsRequest): Uint8Array;
            toProtoMsg(message: _162.QueryRedemptionRecordsRequest): _162.QueryRedemptionRecordsRequestProtoMsg;
        };
        QueryRedemptionRecordsResponse: {
            typeUrl: string;
            encode(message: _162.QueryRedemptionRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.QueryRedemptionRecordsResponse;
            fromPartial(object: Partial<_162.QueryRedemptionRecordsResponse>): _162.QueryRedemptionRecordsResponse;
            fromAmino(object: _162.QueryRedemptionRecordsResponseAmino): _162.QueryRedemptionRecordsResponse;
            toAmino(message: _162.QueryRedemptionRecordsResponse): _162.QueryRedemptionRecordsResponseAmino;
            fromAminoMsg(object: _162.QueryRedemptionRecordsResponseAminoMsg): _162.QueryRedemptionRecordsResponse;
            fromProtoMsg(message: _162.QueryRedemptionRecordsResponseProtoMsg): _162.QueryRedemptionRecordsResponse;
            toProto(message: _162.QueryRedemptionRecordsResponse): Uint8Array;
            toProtoMsg(message: _162.QueryRedemptionRecordsResponse): _162.QueryRedemptionRecordsResponseProtoMsg;
        };
        QuerySlashRecordsRequest: {
            typeUrl: string;
            encode(_: _162.QuerySlashRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.QuerySlashRecordsRequest;
            fromPartial(_: Partial<_162.QuerySlashRecordsRequest>): _162.QuerySlashRecordsRequest;
            fromAmino(_: _162.QuerySlashRecordsRequestAmino): _162.QuerySlashRecordsRequest;
            toAmino(_: _162.QuerySlashRecordsRequest): _162.QuerySlashRecordsRequestAmino;
            fromAminoMsg(object: _162.QuerySlashRecordsRequestAminoMsg): _162.QuerySlashRecordsRequest;
            fromProtoMsg(message: _162.QuerySlashRecordsRequestProtoMsg): _162.QuerySlashRecordsRequest;
            toProto(message: _162.QuerySlashRecordsRequest): Uint8Array;
            toProtoMsg(message: _162.QuerySlashRecordsRequest): _162.QuerySlashRecordsRequestProtoMsg;
        };
        QuerySlashRecordsResponse: {
            typeUrl: string;
            encode(message: _162.QuerySlashRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.QuerySlashRecordsResponse;
            fromPartial(object: Partial<_162.QuerySlashRecordsResponse>): _162.QuerySlashRecordsResponse;
            fromAmino(object: _162.QuerySlashRecordsResponseAmino): _162.QuerySlashRecordsResponse;
            toAmino(message: _162.QuerySlashRecordsResponse): _162.QuerySlashRecordsResponseAmino;
            fromAminoMsg(object: _162.QuerySlashRecordsResponseAminoMsg): _162.QuerySlashRecordsResponse;
            fromProtoMsg(message: _162.QuerySlashRecordsResponseProtoMsg): _162.QuerySlashRecordsResponse;
            toProto(message: _162.QuerySlashRecordsResponse): Uint8Array;
            toProtoMsg(message: _162.QuerySlashRecordsResponse): _162.QuerySlashRecordsResponseProtoMsg;
        };
        RedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _162.RedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.RedemptionRecordResponse;
            fromPartial(object: Partial<_162.RedemptionRecordResponse>): _162.RedemptionRecordResponse;
            fromAmino(object: _162.RedemptionRecordResponseAmino): _162.RedemptionRecordResponse;
            toAmino(message: _162.RedemptionRecordResponse): _162.RedemptionRecordResponseAmino;
            fromAminoMsg(object: _162.RedemptionRecordResponseAminoMsg): _162.RedemptionRecordResponse;
            fromProtoMsg(message: _162.RedemptionRecordResponseProtoMsg): _162.RedemptionRecordResponse;
            toProto(message: _162.RedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _162.RedemptionRecordResponse): _162.RedemptionRecordResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _161.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.Params;
            fromPartial(_: Partial<_161.Params>): _161.Params;
            fromAmino(_: _161.ParamsAmino): _161.Params;
            toAmino(_: _161.Params): _161.ParamsAmino;
            fromAminoMsg(object: _161.ParamsAminoMsg): _161.Params;
            fromProtoMsg(message: _161.ParamsProtoMsg): _161.Params;
            toProto(message: _161.Params): Uint8Array;
            toProtoMsg(message: _161.Params): _161.ParamsProtoMsg;
        };
        TransferInProgressRecordIds: {
            typeUrl: string;
            encode(message: _161.TransferInProgressRecordIds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.TransferInProgressRecordIds;
            fromPartial(object: Partial<_161.TransferInProgressRecordIds>): _161.TransferInProgressRecordIds;
            fromAmino(object: _161.TransferInProgressRecordIdsAmino): _161.TransferInProgressRecordIds;
            toAmino(message: _161.TransferInProgressRecordIds): _161.TransferInProgressRecordIdsAmino;
            fromAminoMsg(object: _161.TransferInProgressRecordIdsAminoMsg): _161.TransferInProgressRecordIds;
            fromProtoMsg(message: _161.TransferInProgressRecordIdsProtoMsg): _161.TransferInProgressRecordIds;
            toProto(message: _161.TransferInProgressRecordIds): Uint8Array;
            toProtoMsg(message: _161.TransferInProgressRecordIds): _161.TransferInProgressRecordIdsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _161.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.GenesisState;
            fromPartial(object: Partial<_161.GenesisState>): _161.GenesisState;
            fromAmino(object: _161.GenesisStateAmino): _161.GenesisState;
            toAmino(message: _161.GenesisState): _161.GenesisStateAmino;
            fromAminoMsg(object: _161.GenesisStateAminoMsg): _161.GenesisState;
            fromProtoMsg(message: _161.GenesisStateProtoMsg): _161.GenesisState;
            toProto(message: _161.GenesisState): Uint8Array;
            toProtoMsg(message: _161.GenesisState): _161.GenesisStateProtoMsg;
        };
    };
    const stakeibc: {
        MsgClientImpl: typeof _295.MsgClientImpl;
        QueryClientImpl: typeof _288.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _174.QueryParamsRequest): Promise<_174.QueryParamsResponse>;
            validators(request: _174.QueryGetValidatorsRequest): Promise<_174.QueryGetValidatorsResponse>;
            hostZone(request: _174.QueryGetHostZoneRequest): Promise<_174.QueryGetHostZoneResponse>;
            hostZoneAll(request?: _174.QueryAllHostZoneRequest): Promise<_174.QueryAllHostZoneResponse>;
            moduleAddress(request: _174.QueryModuleAddressRequest): Promise<_174.QueryModuleAddressResponse>;
            interchainAccountFromAddress(request: _174.QueryInterchainAccountFromAddressRequest): Promise<_174.QueryInterchainAccountFromAddressResponse>;
            epochTracker(request: _174.QueryGetEpochTrackerRequest): Promise<_174.QueryGetEpochTrackerResponse>;
            epochTrackerAll(request?: _174.QueryAllEpochTrackerRequest): Promise<_174.QueryAllEpochTrackerResponse>;
            nextPacketSequence(request: _174.QueryGetNextPacketSequenceRequest): Promise<_174.QueryGetNextPacketSequenceResponse>;
            addressUnbondings(request: _174.QueryAddressUnbondings): Promise<_174.QueryAddressUnbondingsResponse>;
            allTradeRoutes(request?: _174.QueryAllTradeRoutes): Promise<_174.QueryAllTradeRoutesResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                liquidStake(value: _176.MsgLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                lSMLiquidStake(value: _176.MsgLSMLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                redeemStake(value: _176.MsgRedeemStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                registerHostZone(value: _176.MsgRegisterHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                claimUndelegatedTokens(value: _176.MsgClaimUndelegatedTokens): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                rebalanceValidators(value: _176.MsgRebalanceValidators): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addValidators(value: _176.MsgAddValidators): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                changeValidatorWeight(value: _176.MsgChangeValidatorWeights): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteValidator(value: _176.MsgDeleteValidator): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                restoreInterchainAccount(value: _176.MsgRestoreInterchainAccount): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateValidatorSharesExchRate(value: _176.MsgUpdateValidatorSharesExchRate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                calibrateDelegation(value: _176.MsgCalibrateDelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                clearBalance(value: _176.MsgClearBalance): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateInnerRedemptionRateBounds(value: _176.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                resumeHostZone(value: _176.MsgResumeHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                createTradeRoute(value: _176.MsgCreateTradeRoute): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                deleteTradeRoute(value: _176.MsgDeleteTradeRoute): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateTradeRoute(value: _176.MsgUpdateTradeRoute): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setCommunityPoolRebate(value: _176.MsgSetCommunityPoolRebate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                toggleTradeController(value: _176.MsgToggleTradeController): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateHostZoneParams(value: _176.MsgUpdateHostZoneParams): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                liquidStake(value: _176.MsgLiquidStake): {
                    typeUrl: string;
                    value: _176.MsgLiquidStake;
                };
                lSMLiquidStake(value: _176.MsgLSMLiquidStake): {
                    typeUrl: string;
                    value: _176.MsgLSMLiquidStake;
                };
                redeemStake(value: _176.MsgRedeemStake): {
                    typeUrl: string;
                    value: _176.MsgRedeemStake;
                };
                registerHostZone(value: _176.MsgRegisterHostZone): {
                    typeUrl: string;
                    value: _176.MsgRegisterHostZone;
                };
                claimUndelegatedTokens(value: _176.MsgClaimUndelegatedTokens): {
                    typeUrl: string;
                    value: _176.MsgClaimUndelegatedTokens;
                };
                rebalanceValidators(value: _176.MsgRebalanceValidators): {
                    typeUrl: string;
                    value: _176.MsgRebalanceValidators;
                };
                addValidators(value: _176.MsgAddValidators): {
                    typeUrl: string;
                    value: _176.MsgAddValidators;
                };
                changeValidatorWeight(value: _176.MsgChangeValidatorWeights): {
                    typeUrl: string;
                    value: _176.MsgChangeValidatorWeights;
                };
                deleteValidator(value: _176.MsgDeleteValidator): {
                    typeUrl: string;
                    value: _176.MsgDeleteValidator;
                };
                restoreInterchainAccount(value: _176.MsgRestoreInterchainAccount): {
                    typeUrl: string;
                    value: _176.MsgRestoreInterchainAccount;
                };
                updateValidatorSharesExchRate(value: _176.MsgUpdateValidatorSharesExchRate): {
                    typeUrl: string;
                    value: _176.MsgUpdateValidatorSharesExchRate;
                };
                calibrateDelegation(value: _176.MsgCalibrateDelegation): {
                    typeUrl: string;
                    value: _176.MsgCalibrateDelegation;
                };
                clearBalance(value: _176.MsgClearBalance): {
                    typeUrl: string;
                    value: _176.MsgClearBalance;
                };
                updateInnerRedemptionRateBounds(value: _176.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _176.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _176.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _176.MsgResumeHostZone;
                };
                createTradeRoute(value: _176.MsgCreateTradeRoute): {
                    typeUrl: string;
                    value: _176.MsgCreateTradeRoute;
                };
                deleteTradeRoute(value: _176.MsgDeleteTradeRoute): {
                    typeUrl: string;
                    value: _176.MsgDeleteTradeRoute;
                };
                updateTradeRoute(value: _176.MsgUpdateTradeRoute): {
                    typeUrl: string;
                    value: _176.MsgUpdateTradeRoute;
                };
                setCommunityPoolRebate(value: _176.MsgSetCommunityPoolRebate): {
                    typeUrl: string;
                    value: _176.MsgSetCommunityPoolRebate;
                };
                toggleTradeController(value: _176.MsgToggleTradeController): {
                    typeUrl: string;
                    value: _176.MsgToggleTradeController;
                };
                updateHostZoneParams(value: _176.MsgUpdateHostZoneParams): {
                    typeUrl: string;
                    value: _176.MsgUpdateHostZoneParams;
                };
            };
            fromPartial: {
                liquidStake(value: _176.MsgLiquidStake): {
                    typeUrl: string;
                    value: _176.MsgLiquidStake;
                };
                lSMLiquidStake(value: _176.MsgLSMLiquidStake): {
                    typeUrl: string;
                    value: _176.MsgLSMLiquidStake;
                };
                redeemStake(value: _176.MsgRedeemStake): {
                    typeUrl: string;
                    value: _176.MsgRedeemStake;
                };
                registerHostZone(value: _176.MsgRegisterHostZone): {
                    typeUrl: string;
                    value: _176.MsgRegisterHostZone;
                };
                claimUndelegatedTokens(value: _176.MsgClaimUndelegatedTokens): {
                    typeUrl: string;
                    value: _176.MsgClaimUndelegatedTokens;
                };
                rebalanceValidators(value: _176.MsgRebalanceValidators): {
                    typeUrl: string;
                    value: _176.MsgRebalanceValidators;
                };
                addValidators(value: _176.MsgAddValidators): {
                    typeUrl: string;
                    value: _176.MsgAddValidators;
                };
                changeValidatorWeight(value: _176.MsgChangeValidatorWeights): {
                    typeUrl: string;
                    value: _176.MsgChangeValidatorWeights;
                };
                deleteValidator(value: _176.MsgDeleteValidator): {
                    typeUrl: string;
                    value: _176.MsgDeleteValidator;
                };
                restoreInterchainAccount(value: _176.MsgRestoreInterchainAccount): {
                    typeUrl: string;
                    value: _176.MsgRestoreInterchainAccount;
                };
                updateValidatorSharesExchRate(value: _176.MsgUpdateValidatorSharesExchRate): {
                    typeUrl: string;
                    value: _176.MsgUpdateValidatorSharesExchRate;
                };
                calibrateDelegation(value: _176.MsgCalibrateDelegation): {
                    typeUrl: string;
                    value: _176.MsgCalibrateDelegation;
                };
                clearBalance(value: _176.MsgClearBalance): {
                    typeUrl: string;
                    value: _176.MsgClearBalance;
                };
                updateInnerRedemptionRateBounds(value: _176.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _176.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _176.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _176.MsgResumeHostZone;
                };
                createTradeRoute(value: _176.MsgCreateTradeRoute): {
                    typeUrl: string;
                    value: _176.MsgCreateTradeRoute;
                };
                deleteTradeRoute(value: _176.MsgDeleteTradeRoute): {
                    typeUrl: string;
                    value: _176.MsgDeleteTradeRoute;
                };
                updateTradeRoute(value: _176.MsgUpdateTradeRoute): {
                    typeUrl: string;
                    value: _176.MsgUpdateTradeRoute;
                };
                setCommunityPoolRebate(value: _176.MsgSetCommunityPoolRebate): {
                    typeUrl: string;
                    value: _176.MsgSetCommunityPoolRebate;
                };
                toggleTradeController(value: _176.MsgToggleTradeController): {
                    typeUrl: string;
                    value: _176.MsgToggleTradeController;
                };
                updateHostZoneParams(value: _176.MsgUpdateHostZoneParams): {
                    typeUrl: string;
                    value: _176.MsgUpdateHostZoneParams;
                };
            };
        };
        AminoConverter: {
            "/stride.stakeibc.MsgLiquidStake": {
                aminoType: string;
                toAmino: (message: _176.MsgLiquidStake) => _176.MsgLiquidStakeAmino;
                fromAmino: (object: _176.MsgLiquidStakeAmino) => _176.MsgLiquidStake;
            };
            "/stride.stakeibc.MsgLSMLiquidStake": {
                aminoType: string;
                toAmino: (message: _176.MsgLSMLiquidStake) => _176.MsgLSMLiquidStakeAmino;
                fromAmino: (object: _176.MsgLSMLiquidStakeAmino) => _176.MsgLSMLiquidStake;
            };
            "/stride.stakeibc.MsgRedeemStake": {
                aminoType: string;
                toAmino: (message: _176.MsgRedeemStake) => _176.MsgRedeemStakeAmino;
                fromAmino: (object: _176.MsgRedeemStakeAmino) => _176.MsgRedeemStake;
            };
            "/stride.stakeibc.MsgRegisterHostZone": {
                aminoType: string;
                toAmino: (message: _176.MsgRegisterHostZone) => _176.MsgRegisterHostZoneAmino;
                fromAmino: (object: _176.MsgRegisterHostZoneAmino) => _176.MsgRegisterHostZone;
            };
            "/stride.stakeibc.MsgClaimUndelegatedTokens": {
                aminoType: string;
                toAmino: (message: _176.MsgClaimUndelegatedTokens) => _176.MsgClaimUndelegatedTokensAmino;
                fromAmino: (object: _176.MsgClaimUndelegatedTokensAmino) => _176.MsgClaimUndelegatedTokens;
            };
            "/stride.stakeibc.MsgRebalanceValidators": {
                aminoType: string;
                toAmino: (message: _176.MsgRebalanceValidators) => _176.MsgRebalanceValidatorsAmino;
                fromAmino: (object: _176.MsgRebalanceValidatorsAmino) => _176.MsgRebalanceValidators;
            };
            "/stride.stakeibc.MsgAddValidators": {
                aminoType: string;
                toAmino: (message: _176.MsgAddValidators) => _176.MsgAddValidatorsAmino;
                fromAmino: (object: _176.MsgAddValidatorsAmino) => _176.MsgAddValidators;
            };
            "/stride.stakeibc.MsgChangeValidatorWeights": {
                aminoType: string;
                toAmino: (message: _176.MsgChangeValidatorWeights) => _176.MsgChangeValidatorWeightsAmino;
                fromAmino: (object: _176.MsgChangeValidatorWeightsAmino) => _176.MsgChangeValidatorWeights;
            };
            "/stride.stakeibc.MsgDeleteValidator": {
                aminoType: string;
                toAmino: (message: _176.MsgDeleteValidator) => _176.MsgDeleteValidatorAmino;
                fromAmino: (object: _176.MsgDeleteValidatorAmino) => _176.MsgDeleteValidator;
            };
            "/stride.stakeibc.MsgRestoreInterchainAccount": {
                aminoType: string;
                toAmino: (message: _176.MsgRestoreInterchainAccount) => _176.MsgRestoreInterchainAccountAmino;
                fromAmino: (object: _176.MsgRestoreInterchainAccountAmino) => _176.MsgRestoreInterchainAccount;
            };
            "/stride.stakeibc.MsgUpdateValidatorSharesExchRate": {
                aminoType: string;
                toAmino: (message: _176.MsgUpdateValidatorSharesExchRate) => _176.MsgUpdateValidatorSharesExchRateAmino;
                fromAmino: (object: _176.MsgUpdateValidatorSharesExchRateAmino) => _176.MsgUpdateValidatorSharesExchRate;
            };
            "/stride.stakeibc.MsgCalibrateDelegation": {
                aminoType: string;
                toAmino: (message: _176.MsgCalibrateDelegation) => _176.MsgCalibrateDelegationAmino;
                fromAmino: (object: _176.MsgCalibrateDelegationAmino) => _176.MsgCalibrateDelegation;
            };
            "/stride.stakeibc.MsgClearBalance": {
                aminoType: string;
                toAmino: (message: _176.MsgClearBalance) => _176.MsgClearBalanceAmino;
                fromAmino: (object: _176.MsgClearBalanceAmino) => _176.MsgClearBalance;
            };
            "/stride.stakeibc.MsgUpdateInnerRedemptionRateBounds": {
                aminoType: string;
                toAmino: (message: _176.MsgUpdateInnerRedemptionRateBounds) => _176.MsgUpdateInnerRedemptionRateBoundsAmino;
                fromAmino: (object: _176.MsgUpdateInnerRedemptionRateBoundsAmino) => _176.MsgUpdateInnerRedemptionRateBounds;
            };
            "/stride.stakeibc.MsgResumeHostZone": {
                aminoType: string;
                toAmino: (message: _176.MsgResumeHostZone) => _176.MsgResumeHostZoneAmino;
                fromAmino: (object: _176.MsgResumeHostZoneAmino) => _176.MsgResumeHostZone;
            };
            "/stride.stakeibc.MsgCreateTradeRoute": {
                aminoType: string;
                toAmino: (message: _176.MsgCreateTradeRoute) => _176.MsgCreateTradeRouteAmino;
                fromAmino: (object: _176.MsgCreateTradeRouteAmino) => _176.MsgCreateTradeRoute;
            };
            "/stride.stakeibc.MsgDeleteTradeRoute": {
                aminoType: string;
                toAmino: (message: _176.MsgDeleteTradeRoute) => _176.MsgDeleteTradeRouteAmino;
                fromAmino: (object: _176.MsgDeleteTradeRouteAmino) => _176.MsgDeleteTradeRoute;
            };
            "/stride.stakeibc.MsgUpdateTradeRoute": {
                aminoType: string;
                toAmino: (message: _176.MsgUpdateTradeRoute) => _176.MsgUpdateTradeRouteAmino;
                fromAmino: (object: _176.MsgUpdateTradeRouteAmino) => _176.MsgUpdateTradeRoute;
            };
            "/stride.stakeibc.MsgSetCommunityPoolRebate": {
                aminoType: string;
                toAmino: (message: _176.MsgSetCommunityPoolRebate) => _176.MsgSetCommunityPoolRebateAmino;
                fromAmino: (object: _176.MsgSetCommunityPoolRebateAmino) => _176.MsgSetCommunityPoolRebate;
            };
            "/stride.stakeibc.MsgToggleTradeController": {
                aminoType: string;
                toAmino: (message: _176.MsgToggleTradeController) => _176.MsgToggleTradeControllerAmino;
                fromAmino: (object: _176.MsgToggleTradeControllerAmino) => _176.MsgToggleTradeController;
            };
            "/stride.stakeibc.MsgUpdateHostZoneParams": {
                aminoType: string;
                toAmino: (message: _176.MsgUpdateHostZoneParams) => _176.MsgUpdateHostZoneParamsAmino;
                fromAmino: (object: _176.MsgUpdateHostZoneParamsAmino) => _176.MsgUpdateHostZoneParams;
            };
        };
        Validator: {
            typeUrl: string;
            encode(message: _177.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.Validator;
            fromPartial(object: Partial<_177.Validator>): _177.Validator;
            fromAmino(object: _177.ValidatorAmino): _177.Validator;
            toAmino(message: _177.Validator): _177.ValidatorAmino;
            fromAminoMsg(object: _177.ValidatorAminoMsg): _177.Validator;
            fromProtoMsg(message: _177.ValidatorProtoMsg): _177.Validator;
            toProto(message: _177.Validator): Uint8Array;
            toProtoMsg(message: _177.Validator): _177.ValidatorProtoMsg;
        };
        authzPermissionChangeFromJSON(object: any): _176.AuthzPermissionChange;
        authzPermissionChangeToJSON(object: _176.AuthzPermissionChange): string;
        AuthzPermissionChange: typeof _176.AuthzPermissionChange;
        AuthzPermissionChangeSDKType: typeof _176.AuthzPermissionChange;
        AuthzPermissionChangeAmino: typeof _176.AuthzPermissionChange;
        MsgUpdateInnerRedemptionRateBounds: {
            typeUrl: string;
            encode(message: _176.MsgUpdateInnerRedemptionRateBounds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgUpdateInnerRedemptionRateBounds;
            fromPartial(object: Partial<_176.MsgUpdateInnerRedemptionRateBounds>): _176.MsgUpdateInnerRedemptionRateBounds;
            fromAmino(object: _176.MsgUpdateInnerRedemptionRateBoundsAmino): _176.MsgUpdateInnerRedemptionRateBounds;
            toAmino(message: _176.MsgUpdateInnerRedemptionRateBounds): _176.MsgUpdateInnerRedemptionRateBoundsAmino;
            fromAminoMsg(object: _176.MsgUpdateInnerRedemptionRateBoundsAminoMsg): _176.MsgUpdateInnerRedemptionRateBounds;
            fromProtoMsg(message: _176.MsgUpdateInnerRedemptionRateBoundsProtoMsg): _176.MsgUpdateInnerRedemptionRateBounds;
            toProto(message: _176.MsgUpdateInnerRedemptionRateBounds): Uint8Array;
            toProtoMsg(message: _176.MsgUpdateInnerRedemptionRateBounds): _176.MsgUpdateInnerRedemptionRateBoundsProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBoundsResponse: {
            typeUrl: string;
            encode(_: _176.MsgUpdateInnerRedemptionRateBoundsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromPartial(_: Partial<_176.MsgUpdateInnerRedemptionRateBoundsResponse>): _176.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromAmino(_: _176.MsgUpdateInnerRedemptionRateBoundsResponseAmino): _176.MsgUpdateInnerRedemptionRateBoundsResponse;
            toAmino(_: _176.MsgUpdateInnerRedemptionRateBoundsResponse): _176.MsgUpdateInnerRedemptionRateBoundsResponseAmino;
            fromAminoMsg(object: _176.MsgUpdateInnerRedemptionRateBoundsResponseAminoMsg): _176.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromProtoMsg(message: _176.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg): _176.MsgUpdateInnerRedemptionRateBoundsResponse;
            toProto(message: _176.MsgUpdateInnerRedemptionRateBoundsResponse): Uint8Array;
            toProtoMsg(message: _176.MsgUpdateInnerRedemptionRateBoundsResponse): _176.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg;
        };
        MsgLiquidStake: {
            typeUrl: string;
            encode(message: _176.MsgLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgLiquidStake;
            fromPartial(object: Partial<_176.MsgLiquidStake>): _176.MsgLiquidStake;
            fromAmino(object: _176.MsgLiquidStakeAmino): _176.MsgLiquidStake;
            toAmino(message: _176.MsgLiquidStake): _176.MsgLiquidStakeAmino;
            fromAminoMsg(object: _176.MsgLiquidStakeAminoMsg): _176.MsgLiquidStake;
            toAminoMsg(message: _176.MsgLiquidStake): _176.MsgLiquidStakeAminoMsg;
            fromProtoMsg(message: _176.MsgLiquidStakeProtoMsg): _176.MsgLiquidStake;
            toProto(message: _176.MsgLiquidStake): Uint8Array;
            toProtoMsg(message: _176.MsgLiquidStake): _176.MsgLiquidStakeProtoMsg;
        };
        MsgLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _176.MsgLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgLiquidStakeResponse;
            fromPartial(object: Partial<_176.MsgLiquidStakeResponse>): _176.MsgLiquidStakeResponse;
            fromAmino(object: _176.MsgLiquidStakeResponseAmino): _176.MsgLiquidStakeResponse;
            toAmino(message: _176.MsgLiquidStakeResponse): _176.MsgLiquidStakeResponseAmino;
            fromAminoMsg(object: _176.MsgLiquidStakeResponseAminoMsg): _176.MsgLiquidStakeResponse;
            fromProtoMsg(message: _176.MsgLiquidStakeResponseProtoMsg): _176.MsgLiquidStakeResponse;
            toProto(message: _176.MsgLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _176.MsgLiquidStakeResponse): _176.MsgLiquidStakeResponseProtoMsg;
        };
        MsgLSMLiquidStake: {
            typeUrl: string;
            encode(message: _176.MsgLSMLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgLSMLiquidStake;
            fromPartial(object: Partial<_176.MsgLSMLiquidStake>): _176.MsgLSMLiquidStake;
            fromAmino(object: _176.MsgLSMLiquidStakeAmino): _176.MsgLSMLiquidStake;
            toAmino(message: _176.MsgLSMLiquidStake): _176.MsgLSMLiquidStakeAmino;
            fromAminoMsg(object: _176.MsgLSMLiquidStakeAminoMsg): _176.MsgLSMLiquidStake;
            toAminoMsg(message: _176.MsgLSMLiquidStake): _176.MsgLSMLiquidStakeAminoMsg;
            fromProtoMsg(message: _176.MsgLSMLiquidStakeProtoMsg): _176.MsgLSMLiquidStake;
            toProto(message: _176.MsgLSMLiquidStake): Uint8Array;
            toProtoMsg(message: _176.MsgLSMLiquidStake): _176.MsgLSMLiquidStakeProtoMsg;
        };
        MsgLSMLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _176.MsgLSMLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgLSMLiquidStakeResponse;
            fromPartial(object: Partial<_176.MsgLSMLiquidStakeResponse>): _176.MsgLSMLiquidStakeResponse;
            fromAmino(object: _176.MsgLSMLiquidStakeResponseAmino): _176.MsgLSMLiquidStakeResponse;
            toAmino(message: _176.MsgLSMLiquidStakeResponse): _176.MsgLSMLiquidStakeResponseAmino;
            fromAminoMsg(object: _176.MsgLSMLiquidStakeResponseAminoMsg): _176.MsgLSMLiquidStakeResponse;
            fromProtoMsg(message: _176.MsgLSMLiquidStakeResponseProtoMsg): _176.MsgLSMLiquidStakeResponse;
            toProto(message: _176.MsgLSMLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _176.MsgLSMLiquidStakeResponse): _176.MsgLSMLiquidStakeResponseProtoMsg;
        };
        MsgClearBalance: {
            typeUrl: string;
            encode(message: _176.MsgClearBalance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgClearBalance;
            fromPartial(object: Partial<_176.MsgClearBalance>): _176.MsgClearBalance;
            fromAmino(object: _176.MsgClearBalanceAmino): _176.MsgClearBalance;
            toAmino(message: _176.MsgClearBalance): _176.MsgClearBalanceAmino;
            fromAminoMsg(object: _176.MsgClearBalanceAminoMsg): _176.MsgClearBalance;
            toAminoMsg(message: _176.MsgClearBalance): _176.MsgClearBalanceAminoMsg;
            fromProtoMsg(message: _176.MsgClearBalanceProtoMsg): _176.MsgClearBalance;
            toProto(message: _176.MsgClearBalance): Uint8Array;
            toProtoMsg(message: _176.MsgClearBalance): _176.MsgClearBalanceProtoMsg;
        };
        MsgClearBalanceResponse: {
            typeUrl: string;
            encode(_: _176.MsgClearBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgClearBalanceResponse;
            fromPartial(_: Partial<_176.MsgClearBalanceResponse>): _176.MsgClearBalanceResponse;
            fromAmino(_: _176.MsgClearBalanceResponseAmino): _176.MsgClearBalanceResponse;
            toAmino(_: _176.MsgClearBalanceResponse): _176.MsgClearBalanceResponseAmino;
            fromAminoMsg(object: _176.MsgClearBalanceResponseAminoMsg): _176.MsgClearBalanceResponse;
            fromProtoMsg(message: _176.MsgClearBalanceResponseProtoMsg): _176.MsgClearBalanceResponse;
            toProto(message: _176.MsgClearBalanceResponse): Uint8Array;
            toProtoMsg(message: _176.MsgClearBalanceResponse): _176.MsgClearBalanceResponseProtoMsg;
        };
        MsgRedeemStake: {
            typeUrl: string;
            encode(message: _176.MsgRedeemStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgRedeemStake;
            fromPartial(object: Partial<_176.MsgRedeemStake>): _176.MsgRedeemStake;
            fromAmino(object: _176.MsgRedeemStakeAmino): _176.MsgRedeemStake;
            toAmino(message: _176.MsgRedeemStake): _176.MsgRedeemStakeAmino;
            fromAminoMsg(object: _176.MsgRedeemStakeAminoMsg): _176.MsgRedeemStake;
            toAminoMsg(message: _176.MsgRedeemStake): _176.MsgRedeemStakeAminoMsg;
            fromProtoMsg(message: _176.MsgRedeemStakeProtoMsg): _176.MsgRedeemStake;
            toProto(message: _176.MsgRedeemStake): Uint8Array;
            toProtoMsg(message: _176.MsgRedeemStake): _176.MsgRedeemStakeProtoMsg;
        };
        MsgRedeemStakeResponse: {
            typeUrl: string;
            encode(_: _176.MsgRedeemStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgRedeemStakeResponse;
            fromPartial(_: Partial<_176.MsgRedeemStakeResponse>): _176.MsgRedeemStakeResponse;
            fromAmino(_: _176.MsgRedeemStakeResponseAmino): _176.MsgRedeemStakeResponse;
            toAmino(_: _176.MsgRedeemStakeResponse): _176.MsgRedeemStakeResponseAmino;
            fromAminoMsg(object: _176.MsgRedeemStakeResponseAminoMsg): _176.MsgRedeemStakeResponse;
            fromProtoMsg(message: _176.MsgRedeemStakeResponseProtoMsg): _176.MsgRedeemStakeResponse;
            toProto(message: _176.MsgRedeemStakeResponse): Uint8Array;
            toProtoMsg(message: _176.MsgRedeemStakeResponse): _176.MsgRedeemStakeResponseProtoMsg;
        };
        MsgRegisterHostZone: {
            typeUrl: string;
            encode(message: _176.MsgRegisterHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgRegisterHostZone;
            fromPartial(object: Partial<_176.MsgRegisterHostZone>): _176.MsgRegisterHostZone;
            fromAmino(object: _176.MsgRegisterHostZoneAmino): _176.MsgRegisterHostZone;
            toAmino(message: _176.MsgRegisterHostZone): _176.MsgRegisterHostZoneAmino;
            fromAminoMsg(object: _176.MsgRegisterHostZoneAminoMsg): _176.MsgRegisterHostZone;
            toAminoMsg(message: _176.MsgRegisterHostZone): _176.MsgRegisterHostZoneAminoMsg;
            fromProtoMsg(message: _176.MsgRegisterHostZoneProtoMsg): _176.MsgRegisterHostZone;
            toProto(message: _176.MsgRegisterHostZone): Uint8Array;
            toProtoMsg(message: _176.MsgRegisterHostZone): _176.MsgRegisterHostZoneProtoMsg;
        };
        MsgRegisterHostZoneResponse: {
            typeUrl: string;
            encode(_: _176.MsgRegisterHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgRegisterHostZoneResponse;
            fromPartial(_: Partial<_176.MsgRegisterHostZoneResponse>): _176.MsgRegisterHostZoneResponse;
            fromAmino(_: _176.MsgRegisterHostZoneResponseAmino): _176.MsgRegisterHostZoneResponse;
            toAmino(_: _176.MsgRegisterHostZoneResponse): _176.MsgRegisterHostZoneResponseAmino;
            fromAminoMsg(object: _176.MsgRegisterHostZoneResponseAminoMsg): _176.MsgRegisterHostZoneResponse;
            fromProtoMsg(message: _176.MsgRegisterHostZoneResponseProtoMsg): _176.MsgRegisterHostZoneResponse;
            toProto(message: _176.MsgRegisterHostZoneResponse): Uint8Array;
            toProtoMsg(message: _176.MsgRegisterHostZoneResponse): _176.MsgRegisterHostZoneResponseProtoMsg;
        };
        MsgClaimUndelegatedTokens: {
            typeUrl: string;
            encode(message: _176.MsgClaimUndelegatedTokens, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgClaimUndelegatedTokens;
            fromPartial(object: Partial<_176.MsgClaimUndelegatedTokens>): _176.MsgClaimUndelegatedTokens;
            fromAmino(object: _176.MsgClaimUndelegatedTokensAmino): _176.MsgClaimUndelegatedTokens;
            toAmino(message: _176.MsgClaimUndelegatedTokens): _176.MsgClaimUndelegatedTokensAmino;
            fromAminoMsg(object: _176.MsgClaimUndelegatedTokensAminoMsg): _176.MsgClaimUndelegatedTokens;
            toAminoMsg(message: _176.MsgClaimUndelegatedTokens): _176.MsgClaimUndelegatedTokensAminoMsg;
            fromProtoMsg(message: _176.MsgClaimUndelegatedTokensProtoMsg): _176.MsgClaimUndelegatedTokens;
            toProto(message: _176.MsgClaimUndelegatedTokens): Uint8Array;
            toProtoMsg(message: _176.MsgClaimUndelegatedTokens): _176.MsgClaimUndelegatedTokensProtoMsg;
        };
        MsgClaimUndelegatedTokensResponse: {
            typeUrl: string;
            encode(_: _176.MsgClaimUndelegatedTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgClaimUndelegatedTokensResponse;
            fromPartial(_: Partial<_176.MsgClaimUndelegatedTokensResponse>): _176.MsgClaimUndelegatedTokensResponse;
            fromAmino(_: _176.MsgClaimUndelegatedTokensResponseAmino): _176.MsgClaimUndelegatedTokensResponse;
            toAmino(_: _176.MsgClaimUndelegatedTokensResponse): _176.MsgClaimUndelegatedTokensResponseAmino;
            fromAminoMsg(object: _176.MsgClaimUndelegatedTokensResponseAminoMsg): _176.MsgClaimUndelegatedTokensResponse;
            fromProtoMsg(message: _176.MsgClaimUndelegatedTokensResponseProtoMsg): _176.MsgClaimUndelegatedTokensResponse;
            toProto(message: _176.MsgClaimUndelegatedTokensResponse): Uint8Array;
            toProtoMsg(message: _176.MsgClaimUndelegatedTokensResponse): _176.MsgClaimUndelegatedTokensResponseProtoMsg;
        };
        MsgRebalanceValidators: {
            typeUrl: string;
            encode(message: _176.MsgRebalanceValidators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgRebalanceValidators;
            fromPartial(object: Partial<_176.MsgRebalanceValidators>): _176.MsgRebalanceValidators;
            fromAmino(object: _176.MsgRebalanceValidatorsAmino): _176.MsgRebalanceValidators;
            toAmino(message: _176.MsgRebalanceValidators): _176.MsgRebalanceValidatorsAmino;
            fromAminoMsg(object: _176.MsgRebalanceValidatorsAminoMsg): _176.MsgRebalanceValidators;
            toAminoMsg(message: _176.MsgRebalanceValidators): _176.MsgRebalanceValidatorsAminoMsg;
            fromProtoMsg(message: _176.MsgRebalanceValidatorsProtoMsg): _176.MsgRebalanceValidators;
            toProto(message: _176.MsgRebalanceValidators): Uint8Array;
            toProtoMsg(message: _176.MsgRebalanceValidators): _176.MsgRebalanceValidatorsProtoMsg;
        };
        MsgRebalanceValidatorsResponse: {
            typeUrl: string;
            encode(_: _176.MsgRebalanceValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgRebalanceValidatorsResponse;
            fromPartial(_: Partial<_176.MsgRebalanceValidatorsResponse>): _176.MsgRebalanceValidatorsResponse;
            fromAmino(_: _176.MsgRebalanceValidatorsResponseAmino): _176.MsgRebalanceValidatorsResponse;
            toAmino(_: _176.MsgRebalanceValidatorsResponse): _176.MsgRebalanceValidatorsResponseAmino;
            fromAminoMsg(object: _176.MsgRebalanceValidatorsResponseAminoMsg): _176.MsgRebalanceValidatorsResponse;
            fromProtoMsg(message: _176.MsgRebalanceValidatorsResponseProtoMsg): _176.MsgRebalanceValidatorsResponse;
            toProto(message: _176.MsgRebalanceValidatorsResponse): Uint8Array;
            toProtoMsg(message: _176.MsgRebalanceValidatorsResponse): _176.MsgRebalanceValidatorsResponseProtoMsg;
        };
        MsgAddValidators: {
            typeUrl: string;
            encode(message: _176.MsgAddValidators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgAddValidators;
            fromPartial(object: Partial<_176.MsgAddValidators>): _176.MsgAddValidators;
            fromAmino(object: _176.MsgAddValidatorsAmino): _176.MsgAddValidators;
            toAmino(message: _176.MsgAddValidators): _176.MsgAddValidatorsAmino;
            fromAminoMsg(object: _176.MsgAddValidatorsAminoMsg): _176.MsgAddValidators;
            fromProtoMsg(message: _176.MsgAddValidatorsProtoMsg): _176.MsgAddValidators;
            toProto(message: _176.MsgAddValidators): Uint8Array;
            toProtoMsg(message: _176.MsgAddValidators): _176.MsgAddValidatorsProtoMsg;
        };
        MsgAddValidatorsResponse: {
            typeUrl: string;
            encode(_: _176.MsgAddValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgAddValidatorsResponse;
            fromPartial(_: Partial<_176.MsgAddValidatorsResponse>): _176.MsgAddValidatorsResponse;
            fromAmino(_: _176.MsgAddValidatorsResponseAmino): _176.MsgAddValidatorsResponse;
            toAmino(_: _176.MsgAddValidatorsResponse): _176.MsgAddValidatorsResponseAmino;
            fromAminoMsg(object: _176.MsgAddValidatorsResponseAminoMsg): _176.MsgAddValidatorsResponse;
            fromProtoMsg(message: _176.MsgAddValidatorsResponseProtoMsg): _176.MsgAddValidatorsResponse;
            toProto(message: _176.MsgAddValidatorsResponse): Uint8Array;
            toProtoMsg(message: _176.MsgAddValidatorsResponse): _176.MsgAddValidatorsResponseProtoMsg;
        };
        ValidatorWeight: {
            typeUrl: string;
            encode(message: _176.ValidatorWeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.ValidatorWeight;
            fromPartial(object: Partial<_176.ValidatorWeight>): _176.ValidatorWeight;
            fromAmino(object: _176.ValidatorWeightAmino): _176.ValidatorWeight;
            toAmino(message: _176.ValidatorWeight): _176.ValidatorWeightAmino;
            fromAminoMsg(object: _176.ValidatorWeightAminoMsg): _176.ValidatorWeight;
            fromProtoMsg(message: _176.ValidatorWeightProtoMsg): _176.ValidatorWeight;
            toProto(message: _176.ValidatorWeight): Uint8Array;
            toProtoMsg(message: _176.ValidatorWeight): _176.ValidatorWeightProtoMsg;
        };
        MsgChangeValidatorWeights: {
            typeUrl: string;
            encode(message: _176.MsgChangeValidatorWeights, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgChangeValidatorWeights;
            fromPartial(object: Partial<_176.MsgChangeValidatorWeights>): _176.MsgChangeValidatorWeights;
            fromAmino(object: _176.MsgChangeValidatorWeightsAmino): _176.MsgChangeValidatorWeights;
            toAmino(message: _176.MsgChangeValidatorWeights): _176.MsgChangeValidatorWeightsAmino;
            fromAminoMsg(object: _176.MsgChangeValidatorWeightsAminoMsg): _176.MsgChangeValidatorWeights;
            fromProtoMsg(message: _176.MsgChangeValidatorWeightsProtoMsg): _176.MsgChangeValidatorWeights;
            toProto(message: _176.MsgChangeValidatorWeights): Uint8Array;
            toProtoMsg(message: _176.MsgChangeValidatorWeights): _176.MsgChangeValidatorWeightsProtoMsg;
        };
        MsgChangeValidatorWeightsResponse: {
            typeUrl: string;
            encode(_: _176.MsgChangeValidatorWeightsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgChangeValidatorWeightsResponse;
            fromPartial(_: Partial<_176.MsgChangeValidatorWeightsResponse>): _176.MsgChangeValidatorWeightsResponse;
            fromAmino(_: _176.MsgChangeValidatorWeightsResponseAmino): _176.MsgChangeValidatorWeightsResponse;
            toAmino(_: _176.MsgChangeValidatorWeightsResponse): _176.MsgChangeValidatorWeightsResponseAmino;
            fromAminoMsg(object: _176.MsgChangeValidatorWeightsResponseAminoMsg): _176.MsgChangeValidatorWeightsResponse;
            fromProtoMsg(message: _176.MsgChangeValidatorWeightsResponseProtoMsg): _176.MsgChangeValidatorWeightsResponse;
            toProto(message: _176.MsgChangeValidatorWeightsResponse): Uint8Array;
            toProtoMsg(message: _176.MsgChangeValidatorWeightsResponse): _176.MsgChangeValidatorWeightsResponseProtoMsg;
        };
        MsgDeleteValidator: {
            typeUrl: string;
            encode(message: _176.MsgDeleteValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgDeleteValidator;
            fromPartial(object: Partial<_176.MsgDeleteValidator>): _176.MsgDeleteValidator;
            fromAmino(object: _176.MsgDeleteValidatorAmino): _176.MsgDeleteValidator;
            toAmino(message: _176.MsgDeleteValidator): _176.MsgDeleteValidatorAmino;
            fromAminoMsg(object: _176.MsgDeleteValidatorAminoMsg): _176.MsgDeleteValidator;
            toAminoMsg(message: _176.MsgDeleteValidator): _176.MsgDeleteValidatorAminoMsg;
            fromProtoMsg(message: _176.MsgDeleteValidatorProtoMsg): _176.MsgDeleteValidator;
            toProto(message: _176.MsgDeleteValidator): Uint8Array;
            toProtoMsg(message: _176.MsgDeleteValidator): _176.MsgDeleteValidatorProtoMsg;
        };
        MsgDeleteValidatorResponse: {
            typeUrl: string;
            encode(_: _176.MsgDeleteValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgDeleteValidatorResponse;
            fromPartial(_: Partial<_176.MsgDeleteValidatorResponse>): _176.MsgDeleteValidatorResponse;
            fromAmino(_: _176.MsgDeleteValidatorResponseAmino): _176.MsgDeleteValidatorResponse;
            toAmino(_: _176.MsgDeleteValidatorResponse): _176.MsgDeleteValidatorResponseAmino;
            fromAminoMsg(object: _176.MsgDeleteValidatorResponseAminoMsg): _176.MsgDeleteValidatorResponse;
            fromProtoMsg(message: _176.MsgDeleteValidatorResponseProtoMsg): _176.MsgDeleteValidatorResponse;
            toProto(message: _176.MsgDeleteValidatorResponse): Uint8Array;
            toProtoMsg(message: _176.MsgDeleteValidatorResponse): _176.MsgDeleteValidatorResponseProtoMsg;
        };
        MsgRestoreInterchainAccount: {
            typeUrl: string;
            encode(message: _176.MsgRestoreInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgRestoreInterchainAccount;
            fromPartial(object: Partial<_176.MsgRestoreInterchainAccount>): _176.MsgRestoreInterchainAccount;
            fromAmino(object: _176.MsgRestoreInterchainAccountAmino): _176.MsgRestoreInterchainAccount;
            toAmino(message: _176.MsgRestoreInterchainAccount): _176.MsgRestoreInterchainAccountAmino;
            fromAminoMsg(object: _176.MsgRestoreInterchainAccountAminoMsg): _176.MsgRestoreInterchainAccount;
            toAminoMsg(message: _176.MsgRestoreInterchainAccount): _176.MsgRestoreInterchainAccountAminoMsg;
            fromProtoMsg(message: _176.MsgRestoreInterchainAccountProtoMsg): _176.MsgRestoreInterchainAccount;
            toProto(message: _176.MsgRestoreInterchainAccount): Uint8Array;
            toProtoMsg(message: _176.MsgRestoreInterchainAccount): _176.MsgRestoreInterchainAccountProtoMsg;
        };
        MsgRestoreInterchainAccountResponse: {
            typeUrl: string;
            encode(_: _176.MsgRestoreInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgRestoreInterchainAccountResponse;
            fromPartial(_: Partial<_176.MsgRestoreInterchainAccountResponse>): _176.MsgRestoreInterchainAccountResponse;
            fromAmino(_: _176.MsgRestoreInterchainAccountResponseAmino): _176.MsgRestoreInterchainAccountResponse;
            toAmino(_: _176.MsgRestoreInterchainAccountResponse): _176.MsgRestoreInterchainAccountResponseAmino;
            fromAminoMsg(object: _176.MsgRestoreInterchainAccountResponseAminoMsg): _176.MsgRestoreInterchainAccountResponse;
            fromProtoMsg(message: _176.MsgRestoreInterchainAccountResponseProtoMsg): _176.MsgRestoreInterchainAccountResponse;
            toProto(message: _176.MsgRestoreInterchainAccountResponse): Uint8Array;
            toProtoMsg(message: _176.MsgRestoreInterchainAccountResponse): _176.MsgRestoreInterchainAccountResponseProtoMsg;
        };
        MsgUpdateValidatorSharesExchRate: {
            typeUrl: string;
            encode(message: _176.MsgUpdateValidatorSharesExchRate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgUpdateValidatorSharesExchRate;
            fromPartial(object: Partial<_176.MsgUpdateValidatorSharesExchRate>): _176.MsgUpdateValidatorSharesExchRate;
            fromAmino(object: _176.MsgUpdateValidatorSharesExchRateAmino): _176.MsgUpdateValidatorSharesExchRate;
            toAmino(message: _176.MsgUpdateValidatorSharesExchRate): _176.MsgUpdateValidatorSharesExchRateAmino;
            fromAminoMsg(object: _176.MsgUpdateValidatorSharesExchRateAminoMsg): _176.MsgUpdateValidatorSharesExchRate;
            toAminoMsg(message: _176.MsgUpdateValidatorSharesExchRate): _176.MsgUpdateValidatorSharesExchRateAminoMsg;
            fromProtoMsg(message: _176.MsgUpdateValidatorSharesExchRateProtoMsg): _176.MsgUpdateValidatorSharesExchRate;
            toProto(message: _176.MsgUpdateValidatorSharesExchRate): Uint8Array;
            toProtoMsg(message: _176.MsgUpdateValidatorSharesExchRate): _176.MsgUpdateValidatorSharesExchRateProtoMsg;
        };
        MsgUpdateValidatorSharesExchRateResponse: {
            typeUrl: string;
            encode(_: _176.MsgUpdateValidatorSharesExchRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgUpdateValidatorSharesExchRateResponse;
            fromPartial(_: Partial<_176.MsgUpdateValidatorSharesExchRateResponse>): _176.MsgUpdateValidatorSharesExchRateResponse;
            fromAmino(_: _176.MsgUpdateValidatorSharesExchRateResponseAmino): _176.MsgUpdateValidatorSharesExchRateResponse;
            toAmino(_: _176.MsgUpdateValidatorSharesExchRateResponse): _176.MsgUpdateValidatorSharesExchRateResponseAmino;
            fromAminoMsg(object: _176.MsgUpdateValidatorSharesExchRateResponseAminoMsg): _176.MsgUpdateValidatorSharesExchRateResponse;
            fromProtoMsg(message: _176.MsgUpdateValidatorSharesExchRateResponseProtoMsg): _176.MsgUpdateValidatorSharesExchRateResponse;
            toProto(message: _176.MsgUpdateValidatorSharesExchRateResponse): Uint8Array;
            toProtoMsg(message: _176.MsgUpdateValidatorSharesExchRateResponse): _176.MsgUpdateValidatorSharesExchRateResponseProtoMsg;
        };
        MsgCalibrateDelegation: {
            typeUrl: string;
            encode(message: _176.MsgCalibrateDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgCalibrateDelegation;
            fromPartial(object: Partial<_176.MsgCalibrateDelegation>): _176.MsgCalibrateDelegation;
            fromAmino(object: _176.MsgCalibrateDelegationAmino): _176.MsgCalibrateDelegation;
            toAmino(message: _176.MsgCalibrateDelegation): _176.MsgCalibrateDelegationAmino;
            fromAminoMsg(object: _176.MsgCalibrateDelegationAminoMsg): _176.MsgCalibrateDelegation;
            fromProtoMsg(message: _176.MsgCalibrateDelegationProtoMsg): _176.MsgCalibrateDelegation;
            toProto(message: _176.MsgCalibrateDelegation): Uint8Array;
            toProtoMsg(message: _176.MsgCalibrateDelegation): _176.MsgCalibrateDelegationProtoMsg;
        };
        MsgCalibrateDelegationResponse: {
            typeUrl: string;
            encode(_: _176.MsgCalibrateDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgCalibrateDelegationResponse;
            fromPartial(_: Partial<_176.MsgCalibrateDelegationResponse>): _176.MsgCalibrateDelegationResponse;
            fromAmino(_: _176.MsgCalibrateDelegationResponseAmino): _176.MsgCalibrateDelegationResponse;
            toAmino(_: _176.MsgCalibrateDelegationResponse): _176.MsgCalibrateDelegationResponseAmino;
            fromAminoMsg(object: _176.MsgCalibrateDelegationResponseAminoMsg): _176.MsgCalibrateDelegationResponse;
            fromProtoMsg(message: _176.MsgCalibrateDelegationResponseProtoMsg): _176.MsgCalibrateDelegationResponse;
            toProto(message: _176.MsgCalibrateDelegationResponse): Uint8Array;
            toProtoMsg(message: _176.MsgCalibrateDelegationResponse): _176.MsgCalibrateDelegationResponseProtoMsg;
        };
        MsgResumeHostZone: {
            typeUrl: string;
            encode(message: _176.MsgResumeHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgResumeHostZone;
            fromPartial(object: Partial<_176.MsgResumeHostZone>): _176.MsgResumeHostZone;
            fromAmino(object: _176.MsgResumeHostZoneAmino): _176.MsgResumeHostZone;
            toAmino(message: _176.MsgResumeHostZone): _176.MsgResumeHostZoneAmino;
            fromAminoMsg(object: _176.MsgResumeHostZoneAminoMsg): _176.MsgResumeHostZone;
            fromProtoMsg(message: _176.MsgResumeHostZoneProtoMsg): _176.MsgResumeHostZone;
            toProto(message: _176.MsgResumeHostZone): Uint8Array;
            toProtoMsg(message: _176.MsgResumeHostZone): _176.MsgResumeHostZoneProtoMsg;
        };
        MsgResumeHostZoneResponse: {
            typeUrl: string;
            encode(_: _176.MsgResumeHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgResumeHostZoneResponse;
            fromPartial(_: Partial<_176.MsgResumeHostZoneResponse>): _176.MsgResumeHostZoneResponse;
            fromAmino(_: _176.MsgResumeHostZoneResponseAmino): _176.MsgResumeHostZoneResponse;
            toAmino(_: _176.MsgResumeHostZoneResponse): _176.MsgResumeHostZoneResponseAmino;
            fromAminoMsg(object: _176.MsgResumeHostZoneResponseAminoMsg): _176.MsgResumeHostZoneResponse;
            fromProtoMsg(message: _176.MsgResumeHostZoneResponseProtoMsg): _176.MsgResumeHostZoneResponse;
            toProto(message: _176.MsgResumeHostZoneResponse): Uint8Array;
            toProtoMsg(message: _176.MsgResumeHostZoneResponse): _176.MsgResumeHostZoneResponseProtoMsg;
        };
        MsgCreateTradeRoute: {
            typeUrl: string;
            encode(message: _176.MsgCreateTradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgCreateTradeRoute;
            fromPartial(object: Partial<_176.MsgCreateTradeRoute>): _176.MsgCreateTradeRoute;
            fromAmino(object: _176.MsgCreateTradeRouteAmino): _176.MsgCreateTradeRoute;
            toAmino(message: _176.MsgCreateTradeRoute): _176.MsgCreateTradeRouteAmino;
            fromAminoMsg(object: _176.MsgCreateTradeRouteAminoMsg): _176.MsgCreateTradeRoute;
            toAminoMsg(message: _176.MsgCreateTradeRoute): _176.MsgCreateTradeRouteAminoMsg;
            fromProtoMsg(message: _176.MsgCreateTradeRouteProtoMsg): _176.MsgCreateTradeRoute;
            toProto(message: _176.MsgCreateTradeRoute): Uint8Array;
            toProtoMsg(message: _176.MsgCreateTradeRoute): _176.MsgCreateTradeRouteProtoMsg;
        };
        MsgCreateTradeRouteResponse: {
            typeUrl: string;
            encode(_: _176.MsgCreateTradeRouteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgCreateTradeRouteResponse;
            fromPartial(_: Partial<_176.MsgCreateTradeRouteResponse>): _176.MsgCreateTradeRouteResponse;
            fromAmino(_: _176.MsgCreateTradeRouteResponseAmino): _176.MsgCreateTradeRouteResponse;
            toAmino(_: _176.MsgCreateTradeRouteResponse): _176.MsgCreateTradeRouteResponseAmino;
            fromAminoMsg(object: _176.MsgCreateTradeRouteResponseAminoMsg): _176.MsgCreateTradeRouteResponse;
            fromProtoMsg(message: _176.MsgCreateTradeRouteResponseProtoMsg): _176.MsgCreateTradeRouteResponse;
            toProto(message: _176.MsgCreateTradeRouteResponse): Uint8Array;
            toProtoMsg(message: _176.MsgCreateTradeRouteResponse): _176.MsgCreateTradeRouteResponseProtoMsg;
        };
        MsgDeleteTradeRoute: {
            typeUrl: string;
            encode(message: _176.MsgDeleteTradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgDeleteTradeRoute;
            fromPartial(object: Partial<_176.MsgDeleteTradeRoute>): _176.MsgDeleteTradeRoute;
            fromAmino(object: _176.MsgDeleteTradeRouteAmino): _176.MsgDeleteTradeRoute;
            toAmino(message: _176.MsgDeleteTradeRoute): _176.MsgDeleteTradeRouteAmino;
            fromAminoMsg(object: _176.MsgDeleteTradeRouteAminoMsg): _176.MsgDeleteTradeRoute;
            toAminoMsg(message: _176.MsgDeleteTradeRoute): _176.MsgDeleteTradeRouteAminoMsg;
            fromProtoMsg(message: _176.MsgDeleteTradeRouteProtoMsg): _176.MsgDeleteTradeRoute;
            toProto(message: _176.MsgDeleteTradeRoute): Uint8Array;
            toProtoMsg(message: _176.MsgDeleteTradeRoute): _176.MsgDeleteTradeRouteProtoMsg;
        };
        MsgDeleteTradeRouteResponse: {
            typeUrl: string;
            encode(_: _176.MsgDeleteTradeRouteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgDeleteTradeRouteResponse;
            fromPartial(_: Partial<_176.MsgDeleteTradeRouteResponse>): _176.MsgDeleteTradeRouteResponse;
            fromAmino(_: _176.MsgDeleteTradeRouteResponseAmino): _176.MsgDeleteTradeRouteResponse;
            toAmino(_: _176.MsgDeleteTradeRouteResponse): _176.MsgDeleteTradeRouteResponseAmino;
            fromAminoMsg(object: _176.MsgDeleteTradeRouteResponseAminoMsg): _176.MsgDeleteTradeRouteResponse;
            fromProtoMsg(message: _176.MsgDeleteTradeRouteResponseProtoMsg): _176.MsgDeleteTradeRouteResponse;
            toProto(message: _176.MsgDeleteTradeRouteResponse): Uint8Array;
            toProtoMsg(message: _176.MsgDeleteTradeRouteResponse): _176.MsgDeleteTradeRouteResponseProtoMsg;
        };
        MsgUpdateTradeRoute: {
            typeUrl: string;
            encode(message: _176.MsgUpdateTradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgUpdateTradeRoute;
            fromPartial(object: Partial<_176.MsgUpdateTradeRoute>): _176.MsgUpdateTradeRoute;
            fromAmino(object: _176.MsgUpdateTradeRouteAmino): _176.MsgUpdateTradeRoute;
            toAmino(message: _176.MsgUpdateTradeRoute): _176.MsgUpdateTradeRouteAmino;
            fromAminoMsg(object: _176.MsgUpdateTradeRouteAminoMsg): _176.MsgUpdateTradeRoute;
            toAminoMsg(message: _176.MsgUpdateTradeRoute): _176.MsgUpdateTradeRouteAminoMsg;
            fromProtoMsg(message: _176.MsgUpdateTradeRouteProtoMsg): _176.MsgUpdateTradeRoute;
            toProto(message: _176.MsgUpdateTradeRoute): Uint8Array;
            toProtoMsg(message: _176.MsgUpdateTradeRoute): _176.MsgUpdateTradeRouteProtoMsg;
        };
        MsgUpdateTradeRouteResponse: {
            typeUrl: string;
            encode(_: _176.MsgUpdateTradeRouteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgUpdateTradeRouteResponse;
            fromPartial(_: Partial<_176.MsgUpdateTradeRouteResponse>): _176.MsgUpdateTradeRouteResponse;
            fromAmino(_: _176.MsgUpdateTradeRouteResponseAmino): _176.MsgUpdateTradeRouteResponse;
            toAmino(_: _176.MsgUpdateTradeRouteResponse): _176.MsgUpdateTradeRouteResponseAmino;
            fromAminoMsg(object: _176.MsgUpdateTradeRouteResponseAminoMsg): _176.MsgUpdateTradeRouteResponse;
            fromProtoMsg(message: _176.MsgUpdateTradeRouteResponseProtoMsg): _176.MsgUpdateTradeRouteResponse;
            toProto(message: _176.MsgUpdateTradeRouteResponse): Uint8Array;
            toProtoMsg(message: _176.MsgUpdateTradeRouteResponse): _176.MsgUpdateTradeRouteResponseProtoMsg;
        };
        MsgSetCommunityPoolRebate: {
            typeUrl: string;
            encode(message: _176.MsgSetCommunityPoolRebate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgSetCommunityPoolRebate;
            fromPartial(object: Partial<_176.MsgSetCommunityPoolRebate>): _176.MsgSetCommunityPoolRebate;
            fromAmino(object: _176.MsgSetCommunityPoolRebateAmino): _176.MsgSetCommunityPoolRebate;
            toAmino(message: _176.MsgSetCommunityPoolRebate): _176.MsgSetCommunityPoolRebateAmino;
            fromAminoMsg(object: _176.MsgSetCommunityPoolRebateAminoMsg): _176.MsgSetCommunityPoolRebate;
            toAminoMsg(message: _176.MsgSetCommunityPoolRebate): _176.MsgSetCommunityPoolRebateAminoMsg;
            fromProtoMsg(message: _176.MsgSetCommunityPoolRebateProtoMsg): _176.MsgSetCommunityPoolRebate;
            toProto(message: _176.MsgSetCommunityPoolRebate): Uint8Array;
            toProtoMsg(message: _176.MsgSetCommunityPoolRebate): _176.MsgSetCommunityPoolRebateProtoMsg;
        };
        MsgSetCommunityPoolRebateResponse: {
            typeUrl: string;
            encode(_: _176.MsgSetCommunityPoolRebateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgSetCommunityPoolRebateResponse;
            fromPartial(_: Partial<_176.MsgSetCommunityPoolRebateResponse>): _176.MsgSetCommunityPoolRebateResponse;
            fromAmino(_: _176.MsgSetCommunityPoolRebateResponseAmino): _176.MsgSetCommunityPoolRebateResponse;
            toAmino(_: _176.MsgSetCommunityPoolRebateResponse): _176.MsgSetCommunityPoolRebateResponseAmino;
            fromAminoMsg(object: _176.MsgSetCommunityPoolRebateResponseAminoMsg): _176.MsgSetCommunityPoolRebateResponse;
            fromProtoMsg(message: _176.MsgSetCommunityPoolRebateResponseProtoMsg): _176.MsgSetCommunityPoolRebateResponse;
            toProto(message: _176.MsgSetCommunityPoolRebateResponse): Uint8Array;
            toProtoMsg(message: _176.MsgSetCommunityPoolRebateResponse): _176.MsgSetCommunityPoolRebateResponseProtoMsg;
        };
        MsgToggleTradeController: {
            typeUrl: string;
            encode(message: _176.MsgToggleTradeController, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgToggleTradeController;
            fromPartial(object: Partial<_176.MsgToggleTradeController>): _176.MsgToggleTradeController;
            fromAmino(object: _176.MsgToggleTradeControllerAmino): _176.MsgToggleTradeController;
            toAmino(message: _176.MsgToggleTradeController): _176.MsgToggleTradeControllerAmino;
            fromAminoMsg(object: _176.MsgToggleTradeControllerAminoMsg): _176.MsgToggleTradeController;
            toAminoMsg(message: _176.MsgToggleTradeController): _176.MsgToggleTradeControllerAminoMsg;
            fromProtoMsg(message: _176.MsgToggleTradeControllerProtoMsg): _176.MsgToggleTradeController;
            toProto(message: _176.MsgToggleTradeController): Uint8Array;
            toProtoMsg(message: _176.MsgToggleTradeController): _176.MsgToggleTradeControllerProtoMsg;
        };
        MsgToggleTradeControllerResponse: {
            typeUrl: string;
            encode(_: _176.MsgToggleTradeControllerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgToggleTradeControllerResponse;
            fromPartial(_: Partial<_176.MsgToggleTradeControllerResponse>): _176.MsgToggleTradeControllerResponse;
            fromAmino(_: _176.MsgToggleTradeControllerResponseAmino): _176.MsgToggleTradeControllerResponse;
            toAmino(_: _176.MsgToggleTradeControllerResponse): _176.MsgToggleTradeControllerResponseAmino;
            fromAminoMsg(object: _176.MsgToggleTradeControllerResponseAminoMsg): _176.MsgToggleTradeControllerResponse;
            fromProtoMsg(message: _176.MsgToggleTradeControllerResponseProtoMsg): _176.MsgToggleTradeControllerResponse;
            toProto(message: _176.MsgToggleTradeControllerResponse): Uint8Array;
            toProtoMsg(message: _176.MsgToggleTradeControllerResponse): _176.MsgToggleTradeControllerResponseProtoMsg;
        };
        MsgUpdateHostZoneParams: {
            typeUrl: string;
            encode(message: _176.MsgUpdateHostZoneParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgUpdateHostZoneParams;
            fromPartial(object: Partial<_176.MsgUpdateHostZoneParams>): _176.MsgUpdateHostZoneParams;
            fromAmino(object: _176.MsgUpdateHostZoneParamsAmino): _176.MsgUpdateHostZoneParams;
            toAmino(message: _176.MsgUpdateHostZoneParams): _176.MsgUpdateHostZoneParamsAmino;
            fromAminoMsg(object: _176.MsgUpdateHostZoneParamsAminoMsg): _176.MsgUpdateHostZoneParams;
            toAminoMsg(message: _176.MsgUpdateHostZoneParams): _176.MsgUpdateHostZoneParamsAminoMsg;
            fromProtoMsg(message: _176.MsgUpdateHostZoneParamsProtoMsg): _176.MsgUpdateHostZoneParams;
            toProto(message: _176.MsgUpdateHostZoneParams): Uint8Array;
            toProtoMsg(message: _176.MsgUpdateHostZoneParams): _176.MsgUpdateHostZoneParamsProtoMsg;
        };
        MsgUpdateHostZoneParamsResponse: {
            typeUrl: string;
            encode(_: _176.MsgUpdateHostZoneParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgUpdateHostZoneParamsResponse;
            fromPartial(_: Partial<_176.MsgUpdateHostZoneParamsResponse>): _176.MsgUpdateHostZoneParamsResponse;
            fromAmino(_: _176.MsgUpdateHostZoneParamsResponseAmino): _176.MsgUpdateHostZoneParamsResponse;
            toAmino(_: _176.MsgUpdateHostZoneParamsResponse): _176.MsgUpdateHostZoneParamsResponseAmino;
            fromAminoMsg(object: _176.MsgUpdateHostZoneParamsResponseAminoMsg): _176.MsgUpdateHostZoneParamsResponse;
            fromProtoMsg(message: _176.MsgUpdateHostZoneParamsResponseProtoMsg): _176.MsgUpdateHostZoneParamsResponse;
            toProto(message: _176.MsgUpdateHostZoneParamsResponse): Uint8Array;
            toProtoMsg(message: _176.MsgUpdateHostZoneParamsResponse): _176.MsgUpdateHostZoneParamsResponseProtoMsg;
        };
        TradeConfig: {
            typeUrl: string;
            encode(message: _175.TradeConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.TradeConfig;
            fromPartial(object: Partial<_175.TradeConfig>): _175.TradeConfig;
            fromAmino(object: _175.TradeConfigAmino): _175.TradeConfig;
            toAmino(message: _175.TradeConfig): _175.TradeConfigAmino;
            fromAminoMsg(object: _175.TradeConfigAminoMsg): _175.TradeConfig;
            fromProtoMsg(message: _175.TradeConfigProtoMsg): _175.TradeConfig;
            toProto(message: _175.TradeConfig): Uint8Array;
            toProtoMsg(message: _175.TradeConfig): _175.TradeConfigProtoMsg;
        };
        TradeRoute: {
            typeUrl: string;
            encode(message: _175.TradeRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.TradeRoute;
            fromPartial(object: Partial<_175.TradeRoute>): _175.TradeRoute;
            fromAmino(object: _175.TradeRouteAmino): _175.TradeRoute;
            toAmino(message: _175.TradeRoute): _175.TradeRouteAmino;
            fromAminoMsg(object: _175.TradeRouteAminoMsg): _175.TradeRoute;
            fromProtoMsg(message: _175.TradeRouteProtoMsg): _175.TradeRoute;
            toProto(message: _175.TradeRoute): Uint8Array;
            toProtoMsg(message: _175.TradeRoute): _175.TradeRouteProtoMsg;
        };
        QueryInterchainAccountFromAddressRequest: {
            typeUrl: string;
            encode(message: _174.QueryInterchainAccountFromAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.QueryInterchainAccountFromAddressRequest;
            fromPartial(object: Partial<_174.QueryInterchainAccountFromAddressRequest>): _174.QueryInterchainAccountFromAddressRequest;
            fromAmino(object: _174.QueryInterchainAccountFromAddressRequestAmino): _174.QueryInterchainAccountFromAddressRequest;
            toAmino(message: _174.QueryInterchainAccountFromAddressRequest): _174.QueryInterchainAccountFromAddressRequestAmino;
            fromAminoMsg(object: _174.QueryInterchainAccountFromAddressRequestAminoMsg): _174.QueryInterchainAccountFromAddressRequest;
            fromProtoMsg(message: _174.QueryInterchainAccountFromAddressRequestProtoMsg): _174.QueryInterchainAccountFromAddressRequest;
            toProto(message: _174.QueryInterchainAccountFromAddressRequest): Uint8Array;
            toProtoMsg(message: _174.QueryInterchainAccountFromAddressRequest): _174.QueryInterchainAccountFromAddressRequestProtoMsg;
        };
        QueryInterchainAccountFromAddressResponse: {
            typeUrl: string;
            encode(message: _174.QueryInterchainAccountFromAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.QueryInterchainAccountFromAddressResponse;
            fromPartial(object: Partial<_174.QueryInterchainAccountFromAddressResponse>): _174.QueryInterchainAccountFromAddressResponse;
            fromAmino(object: _174.QueryInterchainAccountFromAddressResponseAmino): _174.QueryInterchainAccountFromAddressResponse;
            toAmino(message: _174.QueryInterchainAccountFromAddressResponse): _174.QueryInterchainAccountFromAddressResponseAmino;
            fromAminoMsg(object: _174.QueryInterchainAccountFromAddressResponseAminoMsg): _174.QueryInterchainAccountFromAddressResponse;
            fromProtoMsg(message: _174.QueryInterchainAccountFromAddressResponseProtoMsg): _174.QueryInterchainAccountFromAddressResponse;
            toProto(message: _174.QueryInterchainAccountFromAddressResponse): Uint8Array;
            toProtoMsg(message: _174.QueryInterchainAccountFromAddressResponse): _174.QueryInterchainAccountFromAddressResponseProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _174.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.QueryParamsRequest;
            fromPartial(_: Partial<_174.QueryParamsRequest>): _174.QueryParamsRequest;
            fromAmino(_: _174.QueryParamsRequestAmino): _174.QueryParamsRequest;
            toAmino(_: _174.QueryParamsRequest): _174.QueryParamsRequestAmino;
            fromAminoMsg(object: _174.QueryParamsRequestAminoMsg): _174.QueryParamsRequest;
            fromProtoMsg(message: _174.QueryParamsRequestProtoMsg): _174.QueryParamsRequest;
            toProto(message: _174.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _174.QueryParamsRequest): _174.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _174.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.QueryParamsResponse;
            fromPartial(object: Partial<_174.QueryParamsResponse>): _174.QueryParamsResponse;
            fromAmino(object: _174.QueryParamsResponseAmino): _174.QueryParamsResponse;
            toAmino(message: _174.QueryParamsResponse): _174.QueryParamsResponseAmino;
            fromAminoMsg(object: _174.QueryParamsResponseAminoMsg): _174.QueryParamsResponse;
            fromProtoMsg(message: _174.QueryParamsResponseProtoMsg): _174.QueryParamsResponse;
            toProto(message: _174.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _174.QueryParamsResponse): _174.QueryParamsResponseProtoMsg;
        };
        QueryGetValidatorsRequest: {
            typeUrl: string;
            encode(message: _174.QueryGetValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.QueryGetValidatorsRequest;
            fromPartial(object: Partial<_174.QueryGetValidatorsRequest>): _174.QueryGetValidatorsRequest;
            fromAmino(object: _174.QueryGetValidatorsRequestAmino): _174.QueryGetValidatorsRequest;
            toAmino(message: _174.QueryGetValidatorsRequest): _174.QueryGetValidatorsRequestAmino;
            fromAminoMsg(object: _174.QueryGetValidatorsRequestAminoMsg): _174.QueryGetValidatorsRequest;
            fromProtoMsg(message: _174.QueryGetValidatorsRequestProtoMsg): _174.QueryGetValidatorsRequest;
            toProto(message: _174.QueryGetValidatorsRequest): Uint8Array;
            toProtoMsg(message: _174.QueryGetValidatorsRequest): _174.QueryGetValidatorsRequestProtoMsg;
        };
        QueryGetValidatorsResponse: {
            typeUrl: string;
            encode(message: _174.QueryGetValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.QueryGetValidatorsResponse;
            fromPartial(object: Partial<_174.QueryGetValidatorsResponse>): _174.QueryGetValidatorsResponse;
            fromAmino(object: _174.QueryGetValidatorsResponseAmino): _174.QueryGetValidatorsResponse;
            toAmino(message: _174.QueryGetValidatorsResponse): _174.QueryGetValidatorsResponseAmino;
            fromAminoMsg(object: _174.QueryGetValidatorsResponseAminoMsg): _174.QueryGetValidatorsResponse;
            fromProtoMsg(message: _174.QueryGetValidatorsResponseProtoMsg): _174.QueryGetValidatorsResponse;
            toProto(message: _174.QueryGetValidatorsResponse): Uint8Array;
            toProtoMsg(message: _174.QueryGetValidatorsResponse): _174.QueryGetValidatorsResponseProtoMsg;
        };
        QueryGetHostZoneRequest: {
            typeUrl: string;
            encode(message: _174.QueryGetHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.QueryGetHostZoneRequest;
            fromPartial(object: Partial<_174.QueryGetHostZoneRequest>): _174.QueryGetHostZoneRequest;
            fromAmino(object: _174.QueryGetHostZoneRequestAmino): _174.QueryGetHostZoneRequest;
            toAmino(message: _174.QueryGetHostZoneRequest): _174.QueryGetHostZoneRequestAmino;
            fromAminoMsg(object: _174.QueryGetHostZoneRequestAminoMsg): _174.QueryGetHostZoneRequest;
            fromProtoMsg(message: _174.QueryGetHostZoneRequestProtoMsg): _174.QueryGetHostZoneRequest;
            toProto(message: _174.QueryGetHostZoneRequest): Uint8Array;
            toProtoMsg(message: _174.QueryGetHostZoneRequest): _174.QueryGetHostZoneRequestProtoMsg;
        };
        QueryGetHostZoneResponse: {
            typeUrl: string;
            encode(message: _174.QueryGetHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.QueryGetHostZoneResponse;
            fromPartial(object: Partial<_174.QueryGetHostZoneResponse>): _174.QueryGetHostZoneResponse;
            fromAmino(object: _174.QueryGetHostZoneResponseAmino): _174.QueryGetHostZoneResponse;
            toAmino(message: _174.QueryGetHostZoneResponse): _174.QueryGetHostZoneResponseAmino;
            fromAminoMsg(object: _174.QueryGetHostZoneResponseAminoMsg): _174.QueryGetHostZoneResponse;
            fromProtoMsg(message: _174.QueryGetHostZoneResponseProtoMsg): _174.QueryGetHostZoneResponse;
            toProto(message: _174.QueryGetHostZoneResponse): Uint8Array;
            toProtoMsg(message: _174.QueryGetHostZoneResponse): _174.QueryGetHostZoneResponseProtoMsg;
        };
        QueryAllHostZoneRequest: {
            typeUrl: string;
            encode(message: _174.QueryAllHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.QueryAllHostZoneRequest;
            fromPartial(object: Partial<_174.QueryAllHostZoneRequest>): _174.QueryAllHostZoneRequest;
            fromAmino(object: _174.QueryAllHostZoneRequestAmino): _174.QueryAllHostZoneRequest;
            toAmino(message: _174.QueryAllHostZoneRequest): _174.QueryAllHostZoneRequestAmino;
            fromAminoMsg(object: _174.QueryAllHostZoneRequestAminoMsg): _174.QueryAllHostZoneRequest;
            fromProtoMsg(message: _174.QueryAllHostZoneRequestProtoMsg): _174.QueryAllHostZoneRequest;
            toProto(message: _174.QueryAllHostZoneRequest): Uint8Array;
            toProtoMsg(message: _174.QueryAllHostZoneRequest): _174.QueryAllHostZoneRequestProtoMsg;
        };
        QueryAllHostZoneResponse: {
            typeUrl: string;
            encode(message: _174.QueryAllHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.QueryAllHostZoneResponse;
            fromPartial(object: Partial<_174.QueryAllHostZoneResponse>): _174.QueryAllHostZoneResponse;
            fromAmino(object: _174.QueryAllHostZoneResponseAmino): _174.QueryAllHostZoneResponse;
            toAmino(message: _174.QueryAllHostZoneResponse): _174.QueryAllHostZoneResponseAmino;
            fromAminoMsg(object: _174.QueryAllHostZoneResponseAminoMsg): _174.QueryAllHostZoneResponse;
            fromProtoMsg(message: _174.QueryAllHostZoneResponseProtoMsg): _174.QueryAllHostZoneResponse;
            toProto(message: _174.QueryAllHostZoneResponse): Uint8Array;
            toProtoMsg(message: _174.QueryAllHostZoneResponse): _174.QueryAllHostZoneResponseProtoMsg;
        };
        QueryModuleAddressRequest: {
            typeUrl: string;
            encode(message: _174.QueryModuleAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.QueryModuleAddressRequest;
            fromPartial(object: Partial<_174.QueryModuleAddressRequest>): _174.QueryModuleAddressRequest;
            fromAmino(object: _174.QueryModuleAddressRequestAmino): _174.QueryModuleAddressRequest;
            toAmino(message: _174.QueryModuleAddressRequest): _174.QueryModuleAddressRequestAmino;
            fromAminoMsg(object: _174.QueryModuleAddressRequestAminoMsg): _174.QueryModuleAddressRequest;
            fromProtoMsg(message: _174.QueryModuleAddressRequestProtoMsg): _174.QueryModuleAddressRequest;
            toProto(message: _174.QueryModuleAddressRequest): Uint8Array;
            toProtoMsg(message: _174.QueryModuleAddressRequest): _174.QueryModuleAddressRequestProtoMsg;
        };
        QueryModuleAddressResponse: {
            typeUrl: string;
            encode(message: _174.QueryModuleAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.QueryModuleAddressResponse;
            fromPartial(object: Partial<_174.QueryModuleAddressResponse>): _174.QueryModuleAddressResponse;
            fromAmino(object: _174.QueryModuleAddressResponseAmino): _174.QueryModuleAddressResponse;
            toAmino(message: _174.QueryModuleAddressResponse): _174.QueryModuleAddressResponseAmino;
            fromAminoMsg(object: _174.QueryModuleAddressResponseAminoMsg): _174.QueryModuleAddressResponse;
            fromProtoMsg(message: _174.QueryModuleAddressResponseProtoMsg): _174.QueryModuleAddressResponse;
            toProto(message: _174.QueryModuleAddressResponse): Uint8Array;
            toProtoMsg(message: _174.QueryModuleAddressResponse): _174.QueryModuleAddressResponseProtoMsg;
        };
        QueryGetEpochTrackerRequest: {
            typeUrl: string;
            encode(message: _174.QueryGetEpochTrackerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.QueryGetEpochTrackerRequest;
            fromPartial(object: Partial<_174.QueryGetEpochTrackerRequest>): _174.QueryGetEpochTrackerRequest;
            fromAmino(object: _174.QueryGetEpochTrackerRequestAmino): _174.QueryGetEpochTrackerRequest;
            toAmino(message: _174.QueryGetEpochTrackerRequest): _174.QueryGetEpochTrackerRequestAmino;
            fromAminoMsg(object: _174.QueryGetEpochTrackerRequestAminoMsg): _174.QueryGetEpochTrackerRequest;
            fromProtoMsg(message: _174.QueryGetEpochTrackerRequestProtoMsg): _174.QueryGetEpochTrackerRequest;
            toProto(message: _174.QueryGetEpochTrackerRequest): Uint8Array;
            toProtoMsg(message: _174.QueryGetEpochTrackerRequest): _174.QueryGetEpochTrackerRequestProtoMsg;
        };
        QueryGetEpochTrackerResponse: {
            typeUrl: string;
            encode(message: _174.QueryGetEpochTrackerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.QueryGetEpochTrackerResponse;
            fromPartial(object: Partial<_174.QueryGetEpochTrackerResponse>): _174.QueryGetEpochTrackerResponse;
            fromAmino(object: _174.QueryGetEpochTrackerResponseAmino): _174.QueryGetEpochTrackerResponse;
            toAmino(message: _174.QueryGetEpochTrackerResponse): _174.QueryGetEpochTrackerResponseAmino;
            fromAminoMsg(object: _174.QueryGetEpochTrackerResponseAminoMsg): _174.QueryGetEpochTrackerResponse;
            fromProtoMsg(message: _174.QueryGetEpochTrackerResponseProtoMsg): _174.QueryGetEpochTrackerResponse;
            toProto(message: _174.QueryGetEpochTrackerResponse): Uint8Array;
            toProtoMsg(message: _174.QueryGetEpochTrackerResponse): _174.QueryGetEpochTrackerResponseProtoMsg;
        };
        QueryAllEpochTrackerRequest: {
            typeUrl: string;
            encode(_: _174.QueryAllEpochTrackerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.QueryAllEpochTrackerRequest;
            fromPartial(_: Partial<_174.QueryAllEpochTrackerRequest>): _174.QueryAllEpochTrackerRequest;
            fromAmino(_: _174.QueryAllEpochTrackerRequestAmino): _174.QueryAllEpochTrackerRequest;
            toAmino(_: _174.QueryAllEpochTrackerRequest): _174.QueryAllEpochTrackerRequestAmino;
            fromAminoMsg(object: _174.QueryAllEpochTrackerRequestAminoMsg): _174.QueryAllEpochTrackerRequest;
            fromProtoMsg(message: _174.QueryAllEpochTrackerRequestProtoMsg): _174.QueryAllEpochTrackerRequest;
            toProto(message: _174.QueryAllEpochTrackerRequest): Uint8Array;
            toProtoMsg(message: _174.QueryAllEpochTrackerRequest): _174.QueryAllEpochTrackerRequestProtoMsg;
        };
        QueryAllEpochTrackerResponse: {
            typeUrl: string;
            encode(message: _174.QueryAllEpochTrackerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.QueryAllEpochTrackerResponse;
            fromPartial(object: Partial<_174.QueryAllEpochTrackerResponse>): _174.QueryAllEpochTrackerResponse;
            fromAmino(object: _174.QueryAllEpochTrackerResponseAmino): _174.QueryAllEpochTrackerResponse;
            toAmino(message: _174.QueryAllEpochTrackerResponse): _174.QueryAllEpochTrackerResponseAmino;
            fromAminoMsg(object: _174.QueryAllEpochTrackerResponseAminoMsg): _174.QueryAllEpochTrackerResponse;
            fromProtoMsg(message: _174.QueryAllEpochTrackerResponseProtoMsg): _174.QueryAllEpochTrackerResponse;
            toProto(message: _174.QueryAllEpochTrackerResponse): Uint8Array;
            toProtoMsg(message: _174.QueryAllEpochTrackerResponse): _174.QueryAllEpochTrackerResponseProtoMsg;
        };
        QueryGetNextPacketSequenceRequest: {
            typeUrl: string;
            encode(message: _174.QueryGetNextPacketSequenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.QueryGetNextPacketSequenceRequest;
            fromPartial(object: Partial<_174.QueryGetNextPacketSequenceRequest>): _174.QueryGetNextPacketSequenceRequest;
            fromAmino(object: _174.QueryGetNextPacketSequenceRequestAmino): _174.QueryGetNextPacketSequenceRequest;
            toAmino(message: _174.QueryGetNextPacketSequenceRequest): _174.QueryGetNextPacketSequenceRequestAmino;
            fromAminoMsg(object: _174.QueryGetNextPacketSequenceRequestAminoMsg): _174.QueryGetNextPacketSequenceRequest;
            fromProtoMsg(message: _174.QueryGetNextPacketSequenceRequestProtoMsg): _174.QueryGetNextPacketSequenceRequest;
            toProto(message: _174.QueryGetNextPacketSequenceRequest): Uint8Array;
            toProtoMsg(message: _174.QueryGetNextPacketSequenceRequest): _174.QueryGetNextPacketSequenceRequestProtoMsg;
        };
        QueryGetNextPacketSequenceResponse: {
            typeUrl: string;
            encode(message: _174.QueryGetNextPacketSequenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.QueryGetNextPacketSequenceResponse;
            fromPartial(object: Partial<_174.QueryGetNextPacketSequenceResponse>): _174.QueryGetNextPacketSequenceResponse;
            fromAmino(object: _174.QueryGetNextPacketSequenceResponseAmino): _174.QueryGetNextPacketSequenceResponse;
            toAmino(message: _174.QueryGetNextPacketSequenceResponse): _174.QueryGetNextPacketSequenceResponseAmino;
            fromAminoMsg(object: _174.QueryGetNextPacketSequenceResponseAminoMsg): _174.QueryGetNextPacketSequenceResponse;
            fromProtoMsg(message: _174.QueryGetNextPacketSequenceResponseProtoMsg): _174.QueryGetNextPacketSequenceResponse;
            toProto(message: _174.QueryGetNextPacketSequenceResponse): Uint8Array;
            toProtoMsg(message: _174.QueryGetNextPacketSequenceResponse): _174.QueryGetNextPacketSequenceResponseProtoMsg;
        };
        QueryAddressUnbondings: {
            typeUrl: string;
            encode(message: _174.QueryAddressUnbondings, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.QueryAddressUnbondings;
            fromPartial(object: Partial<_174.QueryAddressUnbondings>): _174.QueryAddressUnbondings;
            fromAmino(object: _174.QueryAddressUnbondingsAmino): _174.QueryAddressUnbondings;
            toAmino(message: _174.QueryAddressUnbondings): _174.QueryAddressUnbondingsAmino;
            fromAminoMsg(object: _174.QueryAddressUnbondingsAminoMsg): _174.QueryAddressUnbondings;
            fromProtoMsg(message: _174.QueryAddressUnbondingsProtoMsg): _174.QueryAddressUnbondings;
            toProto(message: _174.QueryAddressUnbondings): Uint8Array;
            toProtoMsg(message: _174.QueryAddressUnbondings): _174.QueryAddressUnbondingsProtoMsg;
        };
        QueryAddressUnbondingsResponse: {
            typeUrl: string;
            encode(message: _174.QueryAddressUnbondingsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.QueryAddressUnbondingsResponse;
            fromPartial(object: Partial<_174.QueryAddressUnbondingsResponse>): _174.QueryAddressUnbondingsResponse;
            fromAmino(object: _174.QueryAddressUnbondingsResponseAmino): _174.QueryAddressUnbondingsResponse;
            toAmino(message: _174.QueryAddressUnbondingsResponse): _174.QueryAddressUnbondingsResponseAmino;
            fromAminoMsg(object: _174.QueryAddressUnbondingsResponseAminoMsg): _174.QueryAddressUnbondingsResponse;
            fromProtoMsg(message: _174.QueryAddressUnbondingsResponseProtoMsg): _174.QueryAddressUnbondingsResponse;
            toProto(message: _174.QueryAddressUnbondingsResponse): Uint8Array;
            toProtoMsg(message: _174.QueryAddressUnbondingsResponse): _174.QueryAddressUnbondingsResponseProtoMsg;
        };
        QueryAllTradeRoutes: {
            typeUrl: string;
            encode(_: _174.QueryAllTradeRoutes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.QueryAllTradeRoutes;
            fromPartial(_: Partial<_174.QueryAllTradeRoutes>): _174.QueryAllTradeRoutes;
            fromAmino(_: _174.QueryAllTradeRoutesAmino): _174.QueryAllTradeRoutes;
            toAmino(_: _174.QueryAllTradeRoutes): _174.QueryAllTradeRoutesAmino;
            fromAminoMsg(object: _174.QueryAllTradeRoutesAminoMsg): _174.QueryAllTradeRoutes;
            fromProtoMsg(message: _174.QueryAllTradeRoutesProtoMsg): _174.QueryAllTradeRoutes;
            toProto(message: _174.QueryAllTradeRoutes): Uint8Array;
            toProtoMsg(message: _174.QueryAllTradeRoutes): _174.QueryAllTradeRoutesProtoMsg;
        };
        QueryAllTradeRoutesResponse: {
            typeUrl: string;
            encode(message: _174.QueryAllTradeRoutesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.QueryAllTradeRoutesResponse;
            fromPartial(object: Partial<_174.QueryAllTradeRoutesResponse>): _174.QueryAllTradeRoutesResponse;
            fromAmino(object: _174.QueryAllTradeRoutesResponseAmino): _174.QueryAllTradeRoutesResponse;
            toAmino(message: _174.QueryAllTradeRoutesResponse): _174.QueryAllTradeRoutesResponseAmino;
            fromAminoMsg(object: _174.QueryAllTradeRoutesResponseAminoMsg): _174.QueryAllTradeRoutesResponse;
            fromProtoMsg(message: _174.QueryAllTradeRoutesResponseProtoMsg): _174.QueryAllTradeRoutesResponse;
            toProto(message: _174.QueryAllTradeRoutesResponse): Uint8Array;
            toProtoMsg(message: _174.QueryAllTradeRoutesResponse): _174.QueryAllTradeRoutesResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _173.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.Params;
            fromPartial(object: Partial<_173.Params>): _173.Params;
            fromAmino(object: _173.ParamsAmino): _173.Params;
            toAmino(message: _173.Params): _173.ParamsAmino;
            fromAminoMsg(object: _173.ParamsAminoMsg): _173.Params;
            fromProtoMsg(message: _173.ParamsProtoMsg): _173.Params;
            toProto(message: _173.Params): Uint8Array;
            toProtoMsg(message: _173.Params): _173.ParamsProtoMsg;
        };
        StakeibcPacketData: {
            typeUrl: string;
            encode(message: _172.StakeibcPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.StakeibcPacketData;
            fromPartial(object: Partial<_172.StakeibcPacketData>): _172.StakeibcPacketData;
            fromAmino(object: _172.StakeibcPacketDataAmino): _172.StakeibcPacketData;
            toAmino(message: _172.StakeibcPacketData): _172.StakeibcPacketDataAmino;
            fromAminoMsg(object: _172.StakeibcPacketDataAminoMsg): _172.StakeibcPacketData;
            fromProtoMsg(message: _172.StakeibcPacketDataProtoMsg): _172.StakeibcPacketData;
            toProto(message: _172.StakeibcPacketData): Uint8Array;
            toProtoMsg(message: _172.StakeibcPacketData): _172.StakeibcPacketDataProtoMsg;
        };
        NoData: {
            typeUrl: string;
            encode(_: _172.NoData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.NoData;
            fromPartial(_: Partial<_172.NoData>): _172.NoData;
            fromAmino(_: _172.NoDataAmino): _172.NoData;
            toAmino(_: _172.NoData): _172.NoDataAmino;
            fromAminoMsg(object: _172.NoDataAminoMsg): _172.NoData;
            fromProtoMsg(message: _172.NoDataProtoMsg): _172.NoData;
            toProto(message: _172.NoData): Uint8Array;
            toProtoMsg(message: _172.NoData): _172.NoDataProtoMsg;
        };
        iCAAccountTypeFromJSON(object: any): _171.ICAAccountType;
        iCAAccountTypeToJSON(object: _171.ICAAccountType): string;
        ICAAccountType: typeof _171.ICAAccountType;
        ICAAccountTypeSDKType: typeof _171.ICAAccountType;
        ICAAccountTypeAmino: typeof _171.ICAAccountType;
        ICAAccount: {
            typeUrl: string;
            encode(message: _171.ICAAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.ICAAccount;
            fromPartial(object: Partial<_171.ICAAccount>): _171.ICAAccount;
            fromAmino(object: _171.ICAAccountAmino): _171.ICAAccount;
            toAmino(message: _171.ICAAccount): _171.ICAAccountAmino;
            fromAminoMsg(object: _171.ICAAccountAminoMsg): _171.ICAAccount;
            fromProtoMsg(message: _171.ICAAccountProtoMsg): _171.ICAAccount;
            toProto(message: _171.ICAAccount): Uint8Array;
            toProtoMsg(message: _171.ICAAccount): _171.ICAAccountProtoMsg;
        };
        CommunityPoolRebate: {
            typeUrl: string;
            encode(message: _170.CommunityPoolRebate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.CommunityPoolRebate;
            fromPartial(object: Partial<_170.CommunityPoolRebate>): _170.CommunityPoolRebate;
            fromAmino(object: _170.CommunityPoolRebateAmino): _170.CommunityPoolRebate;
            toAmino(message: _170.CommunityPoolRebate): _170.CommunityPoolRebateAmino;
            fromAminoMsg(object: _170.CommunityPoolRebateAminoMsg): _170.CommunityPoolRebate;
            fromProtoMsg(message: _170.CommunityPoolRebateProtoMsg): _170.CommunityPoolRebate;
            toProto(message: _170.CommunityPoolRebate): Uint8Array;
            toProtoMsg(message: _170.CommunityPoolRebate): _170.CommunityPoolRebateProtoMsg;
        };
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
        AddValidatorsProposal: {
            typeUrl: string;
            encode(message: _169.AddValidatorsProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.AddValidatorsProposal;
            fromPartial(object: Partial<_169.AddValidatorsProposal>): _169.AddValidatorsProposal;
            fromAmino(object: _169.AddValidatorsProposalAmino): _169.AddValidatorsProposal;
            toAmino(message: _169.AddValidatorsProposal): _169.AddValidatorsProposalAmino;
            fromAminoMsg(object: _169.AddValidatorsProposalAminoMsg): _169.AddValidatorsProposal;
            fromProtoMsg(message: _169.AddValidatorsProposalProtoMsg): _169.AddValidatorsProposal;
            toProto(message: _169.AddValidatorsProposal): Uint8Array;
            toProtoMsg(message: _169.AddValidatorsProposal): _169.AddValidatorsProposalProtoMsg;
        };
        ToggleLSMProposal: {
            typeUrl: string;
            encode(message: _169.ToggleLSMProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.ToggleLSMProposal;
            fromPartial(object: Partial<_169.ToggleLSMProposal>): _169.ToggleLSMProposal;
            fromAmino(object: _169.ToggleLSMProposalAmino): _169.ToggleLSMProposal;
            toAmino(message: _169.ToggleLSMProposal): _169.ToggleLSMProposalAmino;
            fromAminoMsg(object: _169.ToggleLSMProposalAminoMsg): _169.ToggleLSMProposal;
            fromProtoMsg(message: _169.ToggleLSMProposalProtoMsg): _169.ToggleLSMProposal;
            toProto(message: _169.ToggleLSMProposal): Uint8Array;
            toProtoMsg(message: _169.ToggleLSMProposal): _169.ToggleLSMProposalProtoMsg;
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
        EpochTracker: {
            typeUrl: string;
            encode(message: _167.EpochTracker, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.EpochTracker;
            fromPartial(object: Partial<_167.EpochTracker>): _167.EpochTracker;
            fromAmino(object: _167.EpochTrackerAmino): _167.EpochTracker;
            toAmino(message: _167.EpochTracker): _167.EpochTrackerAmino;
            fromAminoMsg(object: _167.EpochTrackerAminoMsg): _167.EpochTracker;
            fromProtoMsg(message: _167.EpochTrackerProtoMsg): _167.EpochTracker;
            toProto(message: _167.EpochTracker): Uint8Array;
            toProtoMsg(message: _167.EpochTracker): _167.EpochTrackerProtoMsg;
        };
        SplitDelegation: {
            typeUrl: string;
            encode(message: _166.SplitDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.SplitDelegation;
            fromPartial(object: Partial<_166.SplitDelegation>): _166.SplitDelegation;
            fromAmino(object: _166.SplitDelegationAmino): _166.SplitDelegation;
            toAmino(message: _166.SplitDelegation): _166.SplitDelegationAmino;
            fromAminoMsg(object: _166.SplitDelegationAminoMsg): _166.SplitDelegation;
            fromProtoMsg(message: _166.SplitDelegationProtoMsg): _166.SplitDelegation;
            toProto(message: _166.SplitDelegation): Uint8Array;
            toProtoMsg(message: _166.SplitDelegation): _166.SplitDelegationProtoMsg;
        };
        DelegateCallback: {
            typeUrl: string;
            encode(message: _166.DelegateCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.DelegateCallback;
            fromPartial(object: Partial<_166.DelegateCallback>): _166.DelegateCallback;
            fromAmino(object: _166.DelegateCallbackAmino): _166.DelegateCallback;
            toAmino(message: _166.DelegateCallback): _166.DelegateCallbackAmino;
            fromAminoMsg(object: _166.DelegateCallbackAminoMsg): _166.DelegateCallback;
            fromProtoMsg(message: _166.DelegateCallbackProtoMsg): _166.DelegateCallback;
            toProto(message: _166.DelegateCallback): Uint8Array;
            toProtoMsg(message: _166.DelegateCallback): _166.DelegateCallbackProtoMsg;
        };
        ClaimCallback: {
            typeUrl: string;
            encode(message: _166.ClaimCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.ClaimCallback;
            fromPartial(object: Partial<_166.ClaimCallback>): _166.ClaimCallback;
            fromAmino(object: _166.ClaimCallbackAmino): _166.ClaimCallback;
            toAmino(message: _166.ClaimCallback): _166.ClaimCallbackAmino;
            fromAminoMsg(object: _166.ClaimCallbackAminoMsg): _166.ClaimCallback;
            fromProtoMsg(message: _166.ClaimCallbackProtoMsg): _166.ClaimCallback;
            toProto(message: _166.ClaimCallback): Uint8Array;
            toProtoMsg(message: _166.ClaimCallback): _166.ClaimCallbackProtoMsg;
        };
        ReinvestCallback: {
            typeUrl: string;
            encode(message: _166.ReinvestCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.ReinvestCallback;
            fromPartial(object: Partial<_166.ReinvestCallback>): _166.ReinvestCallback;
            fromAmino(object: _166.ReinvestCallbackAmino): _166.ReinvestCallback;
            toAmino(message: _166.ReinvestCallback): _166.ReinvestCallbackAmino;
            fromAminoMsg(object: _166.ReinvestCallbackAminoMsg): _166.ReinvestCallback;
            fromProtoMsg(message: _166.ReinvestCallbackProtoMsg): _166.ReinvestCallback;
            toProto(message: _166.ReinvestCallback): Uint8Array;
            toProtoMsg(message: _166.ReinvestCallback): _166.ReinvestCallbackProtoMsg;
        };
        UndelegateCallback: {
            typeUrl: string;
            encode(message: _166.UndelegateCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.UndelegateCallback;
            fromPartial(object: Partial<_166.UndelegateCallback>): _166.UndelegateCallback;
            fromAmino(object: _166.UndelegateCallbackAmino): _166.UndelegateCallback;
            toAmino(message: _166.UndelegateCallback): _166.UndelegateCallbackAmino;
            fromAminoMsg(object: _166.UndelegateCallbackAminoMsg): _166.UndelegateCallback;
            fromProtoMsg(message: _166.UndelegateCallbackProtoMsg): _166.UndelegateCallback;
            toProto(message: _166.UndelegateCallback): Uint8Array;
            toProtoMsg(message: _166.UndelegateCallback): _166.UndelegateCallbackProtoMsg;
        };
        RedemptionCallback: {
            typeUrl: string;
            encode(message: _166.RedemptionCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.RedemptionCallback;
            fromPartial(object: Partial<_166.RedemptionCallback>): _166.RedemptionCallback;
            fromAmino(object: _166.RedemptionCallbackAmino): _166.RedemptionCallback;
            toAmino(message: _166.RedemptionCallback): _166.RedemptionCallbackAmino;
            fromAminoMsg(object: _166.RedemptionCallbackAminoMsg): _166.RedemptionCallback;
            fromProtoMsg(message: _166.RedemptionCallbackProtoMsg): _166.RedemptionCallback;
            toProto(message: _166.RedemptionCallback): Uint8Array;
            toProtoMsg(message: _166.RedemptionCallback): _166.RedemptionCallbackProtoMsg;
        };
        Rebalancing: {
            typeUrl: string;
            encode(message: _166.Rebalancing, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.Rebalancing;
            fromPartial(object: Partial<_166.Rebalancing>): _166.Rebalancing;
            fromAmino(object: _166.RebalancingAmino): _166.Rebalancing;
            toAmino(message: _166.Rebalancing): _166.RebalancingAmino;
            fromAminoMsg(object: _166.RebalancingAminoMsg): _166.Rebalancing;
            fromProtoMsg(message: _166.RebalancingProtoMsg): _166.Rebalancing;
            toProto(message: _166.Rebalancing): Uint8Array;
            toProtoMsg(message: _166.Rebalancing): _166.RebalancingProtoMsg;
        };
        RebalanceCallback: {
            typeUrl: string;
            encode(message: _166.RebalanceCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.RebalanceCallback;
            fromPartial(object: Partial<_166.RebalanceCallback>): _166.RebalanceCallback;
            fromAmino(object: _166.RebalanceCallbackAmino): _166.RebalanceCallback;
            toAmino(message: _166.RebalanceCallback): _166.RebalanceCallbackAmino;
            fromAminoMsg(object: _166.RebalanceCallbackAminoMsg): _166.RebalanceCallback;
            fromProtoMsg(message: _166.RebalanceCallbackProtoMsg): _166.RebalanceCallback;
            toProto(message: _166.RebalanceCallback): Uint8Array;
            toProtoMsg(message: _166.RebalanceCallback): _166.RebalanceCallbackProtoMsg;
        };
        DetokenizeSharesCallback: {
            typeUrl: string;
            encode(message: _166.DetokenizeSharesCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.DetokenizeSharesCallback;
            fromPartial(object: Partial<_166.DetokenizeSharesCallback>): _166.DetokenizeSharesCallback;
            fromAmino(object: _166.DetokenizeSharesCallbackAmino): _166.DetokenizeSharesCallback;
            toAmino(message: _166.DetokenizeSharesCallback): _166.DetokenizeSharesCallbackAmino;
            fromAminoMsg(object: _166.DetokenizeSharesCallbackAminoMsg): _166.DetokenizeSharesCallback;
            fromProtoMsg(message: _166.DetokenizeSharesCallbackProtoMsg): _166.DetokenizeSharesCallback;
            toProto(message: _166.DetokenizeSharesCallback): Uint8Array;
            toProtoMsg(message: _166.DetokenizeSharesCallback): _166.DetokenizeSharesCallbackProtoMsg;
        };
        LSMLiquidStake: {
            typeUrl: string;
            encode(message: _166.LSMLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.LSMLiquidStake;
            fromPartial(object: Partial<_166.LSMLiquidStake>): _166.LSMLiquidStake;
            fromAmino(object: _166.LSMLiquidStakeAmino): _166.LSMLiquidStake;
            toAmino(message: _166.LSMLiquidStake): _166.LSMLiquidStakeAmino;
            fromAminoMsg(object: _166.LSMLiquidStakeAminoMsg): _166.LSMLiquidStake;
            fromProtoMsg(message: _166.LSMLiquidStakeProtoMsg): _166.LSMLiquidStake;
            toProto(message: _166.LSMLiquidStake): Uint8Array;
            toProtoMsg(message: _166.LSMLiquidStake): _166.LSMLiquidStakeProtoMsg;
        };
        ValidatorSharesToTokensQueryCallback: {
            typeUrl: string;
            encode(message: _166.ValidatorSharesToTokensQueryCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.ValidatorSharesToTokensQueryCallback;
            fromPartial(object: Partial<_166.ValidatorSharesToTokensQueryCallback>): _166.ValidatorSharesToTokensQueryCallback;
            fromAmino(object: _166.ValidatorSharesToTokensQueryCallbackAmino): _166.ValidatorSharesToTokensQueryCallback;
            toAmino(message: _166.ValidatorSharesToTokensQueryCallback): _166.ValidatorSharesToTokensQueryCallbackAmino;
            fromAminoMsg(object: _166.ValidatorSharesToTokensQueryCallbackAminoMsg): _166.ValidatorSharesToTokensQueryCallback;
            fromProtoMsg(message: _166.ValidatorSharesToTokensQueryCallbackProtoMsg): _166.ValidatorSharesToTokensQueryCallback;
            toProto(message: _166.ValidatorSharesToTokensQueryCallback): Uint8Array;
            toProtoMsg(message: _166.ValidatorSharesToTokensQueryCallback): _166.ValidatorSharesToTokensQueryCallbackProtoMsg;
        };
        DelegatorSharesQueryCallback: {
            typeUrl: string;
            encode(message: _166.DelegatorSharesQueryCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.DelegatorSharesQueryCallback;
            fromPartial(object: Partial<_166.DelegatorSharesQueryCallback>): _166.DelegatorSharesQueryCallback;
            fromAmino(object: _166.DelegatorSharesQueryCallbackAmino): _166.DelegatorSharesQueryCallback;
            toAmino(message: _166.DelegatorSharesQueryCallback): _166.DelegatorSharesQueryCallbackAmino;
            fromAminoMsg(object: _166.DelegatorSharesQueryCallbackAminoMsg): _166.DelegatorSharesQueryCallback;
            fromProtoMsg(message: _166.DelegatorSharesQueryCallbackProtoMsg): _166.DelegatorSharesQueryCallback;
            toProto(message: _166.DelegatorSharesQueryCallback): Uint8Array;
            toProtoMsg(message: _166.DelegatorSharesQueryCallback): _166.DelegatorSharesQueryCallbackProtoMsg;
        };
        CommunityPoolBalanceQueryCallback: {
            typeUrl: string;
            encode(message: _166.CommunityPoolBalanceQueryCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.CommunityPoolBalanceQueryCallback;
            fromPartial(object: Partial<_166.CommunityPoolBalanceQueryCallback>): _166.CommunityPoolBalanceQueryCallback;
            fromAmino(object: _166.CommunityPoolBalanceQueryCallbackAmino): _166.CommunityPoolBalanceQueryCallback;
            toAmino(message: _166.CommunityPoolBalanceQueryCallback): _166.CommunityPoolBalanceQueryCallbackAmino;
            fromAminoMsg(object: _166.CommunityPoolBalanceQueryCallbackAminoMsg): _166.CommunityPoolBalanceQueryCallback;
            fromProtoMsg(message: _166.CommunityPoolBalanceQueryCallbackProtoMsg): _166.CommunityPoolBalanceQueryCallback;
            toProto(message: _166.CommunityPoolBalanceQueryCallback): Uint8Array;
            toProtoMsg(message: _166.CommunityPoolBalanceQueryCallback): _166.CommunityPoolBalanceQueryCallbackProtoMsg;
        };
        TradeRouteCallback: {
            typeUrl: string;
            encode(message: _166.TradeRouteCallback, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.TradeRouteCallback;
            fromPartial(object: Partial<_166.TradeRouteCallback>): _166.TradeRouteCallback;
            fromAmino(object: _166.TradeRouteCallbackAmino): _166.TradeRouteCallback;
            toAmino(message: _166.TradeRouteCallback): _166.TradeRouteCallbackAmino;
            fromAminoMsg(object: _166.TradeRouteCallbackAminoMsg): _166.TradeRouteCallback;
            fromProtoMsg(message: _166.TradeRouteCallbackProtoMsg): _166.TradeRouteCallback;
            toProto(message: _166.TradeRouteCallback): Uint8Array;
            toProtoMsg(message: _166.TradeRouteCallback): _166.TradeRouteCallbackProtoMsg;
        };
        AddressUnbonding: {
            typeUrl: string;
            encode(message: _165.AddressUnbonding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.AddressUnbonding;
            fromPartial(object: Partial<_165.AddressUnbonding>): _165.AddressUnbonding;
            fromAmino(object: _165.AddressUnbondingAmino): _165.AddressUnbonding;
            toAmino(message: _165.AddressUnbonding): _165.AddressUnbondingAmino;
            fromAminoMsg(object: _165.AddressUnbondingAminoMsg): _165.AddressUnbonding;
            fromProtoMsg(message: _165.AddressUnbondingProtoMsg): _165.AddressUnbonding;
            toProto(message: _165.AddressUnbonding): Uint8Array;
            toProtoMsg(message: _165.AddressUnbonding): _165.AddressUnbondingProtoMsg;
        };
    };
    const staketia: {
        MsgClientImpl: typeof _296.MsgClientImpl;
        QueryClientImpl: typeof _289.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            hostZone(request?: _179.QueryHostZoneRequest): Promise<_179.QueryHostZoneResponse>;
            delegationRecords(request: _179.QueryDelegationRecordsRequest): Promise<_179.QueryDelegationRecordsResponse>;
            unbondingRecords(request: _179.QueryUnbondingRecordsRequest): Promise<_179.QueryUnbondingRecordsResponse>;
            redemptionRecord(request: _179.QueryRedemptionRecordRequest): Promise<_179.QueryRedemptionRecordResponse>;
            redemptionRecords(request: _179.QueryRedemptionRecordsRequest): Promise<_179.QueryRedemptionRecordsResponse>;
            slashRecords(request?: _179.QuerySlashRecordsRequest): Promise<_179.QuerySlashRecordsResponse>;
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                liquidStake(value: _181.MsgLiquidStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                redeemStake(value: _181.MsgRedeemStake): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmDelegation(value: _181.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmUndelegation(value: _181.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmUnbondedTokenSweep(value: _181.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                adjustDelegatedBalance(value: _181.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                updateInnerRedemptionRateBounds(value: _181.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                resumeHostZone(value: _181.MsgResumeHostZone): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                refreshRedemptionRate(value: _181.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteDelegationRecord(value: _181.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteUnbondingRecord(value: _181.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                overwriteRedemptionRecord(value: _181.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setOperatorAddress(value: _181.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                liquidStake(value: _181.MsgLiquidStake): {
                    typeUrl: string;
                    value: _181.MsgLiquidStake;
                };
                redeemStake(value: _181.MsgRedeemStake): {
                    typeUrl: string;
                    value: _181.MsgRedeemStake;
                };
                confirmDelegation(value: _181.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: _181.MsgConfirmDelegation;
                };
                confirmUndelegation(value: _181.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: _181.MsgConfirmUndelegation;
                };
                confirmUnbondedTokenSweep(value: _181.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: _181.MsgConfirmUnbondedTokenSweep;
                };
                adjustDelegatedBalance(value: _181.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: _181.MsgAdjustDelegatedBalance;
                };
                updateInnerRedemptionRateBounds(value: _181.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _181.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _181.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _181.MsgResumeHostZone;
                };
                refreshRedemptionRate(value: _181.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: _181.MsgRefreshRedemptionRate;
                };
                overwriteDelegationRecord(value: _181.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: _181.MsgOverwriteDelegationRecord;
                };
                overwriteUnbondingRecord(value: _181.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: _181.MsgOverwriteUnbondingRecord;
                };
                overwriteRedemptionRecord(value: _181.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: _181.MsgOverwriteRedemptionRecord;
                };
                setOperatorAddress(value: _181.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: _181.MsgSetOperatorAddress;
                };
            };
            fromPartial: {
                liquidStake(value: _181.MsgLiquidStake): {
                    typeUrl: string;
                    value: _181.MsgLiquidStake;
                };
                redeemStake(value: _181.MsgRedeemStake): {
                    typeUrl: string;
                    value: _181.MsgRedeemStake;
                };
                confirmDelegation(value: _181.MsgConfirmDelegation): {
                    typeUrl: string;
                    value: _181.MsgConfirmDelegation;
                };
                confirmUndelegation(value: _181.MsgConfirmUndelegation): {
                    typeUrl: string;
                    value: _181.MsgConfirmUndelegation;
                };
                confirmUnbondedTokenSweep(value: _181.MsgConfirmUnbondedTokenSweep): {
                    typeUrl: string;
                    value: _181.MsgConfirmUnbondedTokenSweep;
                };
                adjustDelegatedBalance(value: _181.MsgAdjustDelegatedBalance): {
                    typeUrl: string;
                    value: _181.MsgAdjustDelegatedBalance;
                };
                updateInnerRedemptionRateBounds(value: _181.MsgUpdateInnerRedemptionRateBounds): {
                    typeUrl: string;
                    value: _181.MsgUpdateInnerRedemptionRateBounds;
                };
                resumeHostZone(value: _181.MsgResumeHostZone): {
                    typeUrl: string;
                    value: _181.MsgResumeHostZone;
                };
                refreshRedemptionRate(value: _181.MsgRefreshRedemptionRate): {
                    typeUrl: string;
                    value: _181.MsgRefreshRedemptionRate;
                };
                overwriteDelegationRecord(value: _181.MsgOverwriteDelegationRecord): {
                    typeUrl: string;
                    value: _181.MsgOverwriteDelegationRecord;
                };
                overwriteUnbondingRecord(value: _181.MsgOverwriteUnbondingRecord): {
                    typeUrl: string;
                    value: _181.MsgOverwriteUnbondingRecord;
                };
                overwriteRedemptionRecord(value: _181.MsgOverwriteRedemptionRecord): {
                    typeUrl: string;
                    value: _181.MsgOverwriteRedemptionRecord;
                };
                setOperatorAddress(value: _181.MsgSetOperatorAddress): {
                    typeUrl: string;
                    value: _181.MsgSetOperatorAddress;
                };
            };
        };
        AminoConverter: {
            "/stride.staketia.MsgLiquidStake": {
                aminoType: string;
                toAmino: (message: _181.MsgLiquidStake) => _181.MsgLiquidStakeAmino;
                fromAmino: (object: _181.MsgLiquidStakeAmino) => _181.MsgLiquidStake;
            };
            "/stride.staketia.MsgRedeemStake": {
                aminoType: string;
                toAmino: (message: _181.MsgRedeemStake) => _181.MsgRedeemStakeAmino;
                fromAmino: (object: _181.MsgRedeemStakeAmino) => _181.MsgRedeemStake;
            };
            "/stride.staketia.MsgConfirmDelegation": {
                aminoType: string;
                toAmino: (message: _181.MsgConfirmDelegation) => _181.MsgConfirmDelegationAmino;
                fromAmino: (object: _181.MsgConfirmDelegationAmino) => _181.MsgConfirmDelegation;
            };
            "/stride.staketia.MsgConfirmUndelegation": {
                aminoType: string;
                toAmino: (message: _181.MsgConfirmUndelegation) => _181.MsgConfirmUndelegationAmino;
                fromAmino: (object: _181.MsgConfirmUndelegationAmino) => _181.MsgConfirmUndelegation;
            };
            "/stride.staketia.MsgConfirmUnbondedTokenSweep": {
                aminoType: string;
                toAmino: (message: _181.MsgConfirmUnbondedTokenSweep) => _181.MsgConfirmUnbondedTokenSweepAmino;
                fromAmino: (object: _181.MsgConfirmUnbondedTokenSweepAmino) => _181.MsgConfirmUnbondedTokenSweep;
            };
            "/stride.staketia.MsgAdjustDelegatedBalance": {
                aminoType: string;
                toAmino: (message: _181.MsgAdjustDelegatedBalance) => _181.MsgAdjustDelegatedBalanceAmino;
                fromAmino: (object: _181.MsgAdjustDelegatedBalanceAmino) => _181.MsgAdjustDelegatedBalance;
            };
            "/stride.staketia.MsgUpdateInnerRedemptionRateBounds": {
                aminoType: string;
                toAmino: (message: _181.MsgUpdateInnerRedemptionRateBounds) => _181.MsgUpdateInnerRedemptionRateBoundsAmino;
                fromAmino: (object: _181.MsgUpdateInnerRedemptionRateBoundsAmino) => _181.MsgUpdateInnerRedemptionRateBounds;
            };
            "/stride.staketia.MsgResumeHostZone": {
                aminoType: string;
                toAmino: (message: _181.MsgResumeHostZone) => _181.MsgResumeHostZoneAmino;
                fromAmino: (object: _181.MsgResumeHostZoneAmino) => _181.MsgResumeHostZone;
            };
            "/stride.staketia.MsgRefreshRedemptionRate": {
                aminoType: string;
                toAmino: (message: _181.MsgRefreshRedemptionRate) => _181.MsgRefreshRedemptionRateAmino;
                fromAmino: (object: _181.MsgRefreshRedemptionRateAmino) => _181.MsgRefreshRedemptionRate;
            };
            "/stride.staketia.MsgOverwriteDelegationRecord": {
                aminoType: string;
                toAmino: (message: _181.MsgOverwriteDelegationRecord) => _181.MsgOverwriteDelegationRecordAmino;
                fromAmino: (object: _181.MsgOverwriteDelegationRecordAmino) => _181.MsgOverwriteDelegationRecord;
            };
            "/stride.staketia.MsgOverwriteUnbondingRecord": {
                aminoType: string;
                toAmino: (message: _181.MsgOverwriteUnbondingRecord) => _181.MsgOverwriteUnbondingRecordAmino;
                fromAmino: (object: _181.MsgOverwriteUnbondingRecordAmino) => _181.MsgOverwriteUnbondingRecord;
            };
            "/stride.staketia.MsgOverwriteRedemptionRecord": {
                aminoType: string;
                toAmino: (message: _181.MsgOverwriteRedemptionRecord) => _181.MsgOverwriteRedemptionRecordAmino;
                fromAmino: (object: _181.MsgOverwriteRedemptionRecordAmino) => _181.MsgOverwriteRedemptionRecord;
            };
            "/stride.staketia.MsgSetOperatorAddress": {
                aminoType: string;
                toAmino: (message: _181.MsgSetOperatorAddress) => _181.MsgSetOperatorAddressAmino;
                fromAmino: (object: _181.MsgSetOperatorAddressAmino) => _181.MsgSetOperatorAddress;
            };
        };
        overwritableRecordTypeFromJSON(object: any): _181.OverwritableRecordType;
        overwritableRecordTypeToJSON(object: _181.OverwritableRecordType): string;
        OverwritableRecordType: typeof _181.OverwritableRecordType;
        OverwritableRecordTypeSDKType: typeof _181.OverwritableRecordType;
        OverwritableRecordTypeAmino: typeof _181.OverwritableRecordType;
        MsgLiquidStake: {
            typeUrl: string;
            encode(message: _181.MsgLiquidStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.MsgLiquidStake;
            fromPartial(object: Partial<_181.MsgLiquidStake>): _181.MsgLiquidStake;
            fromAmino(object: _181.MsgLiquidStakeAmino): _181.MsgLiquidStake;
            toAmino(message: _181.MsgLiquidStake): _181.MsgLiquidStakeAmino;
            fromAminoMsg(object: _181.MsgLiquidStakeAminoMsg): _181.MsgLiquidStake;
            toAminoMsg(message: _181.MsgLiquidStake): _181.MsgLiquidStakeAminoMsg;
            fromProtoMsg(message: _181.MsgLiquidStakeProtoMsg): _181.MsgLiquidStake;
            toProto(message: _181.MsgLiquidStake): Uint8Array;
            toProtoMsg(message: _181.MsgLiquidStake): _181.MsgLiquidStakeProtoMsg;
        };
        MsgLiquidStakeResponse: {
            typeUrl: string;
            encode(message: _181.MsgLiquidStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.MsgLiquidStakeResponse;
            fromPartial(object: Partial<_181.MsgLiquidStakeResponse>): _181.MsgLiquidStakeResponse;
            fromAmino(object: _181.MsgLiquidStakeResponseAmino): _181.MsgLiquidStakeResponse;
            toAmino(message: _181.MsgLiquidStakeResponse): _181.MsgLiquidStakeResponseAmino;
            fromAminoMsg(object: _181.MsgLiquidStakeResponseAminoMsg): _181.MsgLiquidStakeResponse;
            fromProtoMsg(message: _181.MsgLiquidStakeResponseProtoMsg): _181.MsgLiquidStakeResponse;
            toProto(message: _181.MsgLiquidStakeResponse): Uint8Array;
            toProtoMsg(message: _181.MsgLiquidStakeResponse): _181.MsgLiquidStakeResponseProtoMsg;
        };
        MsgRedeemStake: {
            typeUrl: string;
            encode(message: _181.MsgRedeemStake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.MsgRedeemStake;
            fromPartial(object: Partial<_181.MsgRedeemStake>): _181.MsgRedeemStake;
            fromAmino(object: _181.MsgRedeemStakeAmino): _181.MsgRedeemStake;
            toAmino(message: _181.MsgRedeemStake): _181.MsgRedeemStakeAmino;
            fromAminoMsg(object: _181.MsgRedeemStakeAminoMsg): _181.MsgRedeemStake;
            toAminoMsg(message: _181.MsgRedeemStake): _181.MsgRedeemStakeAminoMsg;
            fromProtoMsg(message: _181.MsgRedeemStakeProtoMsg): _181.MsgRedeemStake;
            toProto(message: _181.MsgRedeemStake): Uint8Array;
            toProtoMsg(message: _181.MsgRedeemStake): _181.MsgRedeemStakeProtoMsg;
        };
        MsgRedeemStakeResponse: {
            typeUrl: string;
            encode(message: _181.MsgRedeemStakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.MsgRedeemStakeResponse;
            fromPartial(object: Partial<_181.MsgRedeemStakeResponse>): _181.MsgRedeemStakeResponse;
            fromAmino(object: _181.MsgRedeemStakeResponseAmino): _181.MsgRedeemStakeResponse;
            toAmino(message: _181.MsgRedeemStakeResponse): _181.MsgRedeemStakeResponseAmino;
            fromAminoMsg(object: _181.MsgRedeemStakeResponseAminoMsg): _181.MsgRedeemStakeResponse;
            fromProtoMsg(message: _181.MsgRedeemStakeResponseProtoMsg): _181.MsgRedeemStakeResponse;
            toProto(message: _181.MsgRedeemStakeResponse): Uint8Array;
            toProtoMsg(message: _181.MsgRedeemStakeResponse): _181.MsgRedeemStakeResponseProtoMsg;
        };
        MsgConfirmDelegation: {
            typeUrl: string;
            encode(message: _181.MsgConfirmDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.MsgConfirmDelegation;
            fromPartial(object: Partial<_181.MsgConfirmDelegation>): _181.MsgConfirmDelegation;
            fromAmino(object: _181.MsgConfirmDelegationAmino): _181.MsgConfirmDelegation;
            toAmino(message: _181.MsgConfirmDelegation): _181.MsgConfirmDelegationAmino;
            fromAminoMsg(object: _181.MsgConfirmDelegationAminoMsg): _181.MsgConfirmDelegation;
            toAminoMsg(message: _181.MsgConfirmDelegation): _181.MsgConfirmDelegationAminoMsg;
            fromProtoMsg(message: _181.MsgConfirmDelegationProtoMsg): _181.MsgConfirmDelegation;
            toProto(message: _181.MsgConfirmDelegation): Uint8Array;
            toProtoMsg(message: _181.MsgConfirmDelegation): _181.MsgConfirmDelegationProtoMsg;
        };
        MsgConfirmDelegationResponse: {
            typeUrl: string;
            encode(_: _181.MsgConfirmDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.MsgConfirmDelegationResponse;
            fromPartial(_: Partial<_181.MsgConfirmDelegationResponse>): _181.MsgConfirmDelegationResponse;
            fromAmino(_: _181.MsgConfirmDelegationResponseAmino): _181.MsgConfirmDelegationResponse;
            toAmino(_: _181.MsgConfirmDelegationResponse): _181.MsgConfirmDelegationResponseAmino;
            fromAminoMsg(object: _181.MsgConfirmDelegationResponseAminoMsg): _181.MsgConfirmDelegationResponse;
            fromProtoMsg(message: _181.MsgConfirmDelegationResponseProtoMsg): _181.MsgConfirmDelegationResponse;
            toProto(message: _181.MsgConfirmDelegationResponse): Uint8Array;
            toProtoMsg(message: _181.MsgConfirmDelegationResponse): _181.MsgConfirmDelegationResponseProtoMsg;
        };
        MsgConfirmUndelegation: {
            typeUrl: string;
            encode(message: _181.MsgConfirmUndelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.MsgConfirmUndelegation;
            fromPartial(object: Partial<_181.MsgConfirmUndelegation>): _181.MsgConfirmUndelegation;
            fromAmino(object: _181.MsgConfirmUndelegationAmino): _181.MsgConfirmUndelegation;
            toAmino(message: _181.MsgConfirmUndelegation): _181.MsgConfirmUndelegationAmino;
            fromAminoMsg(object: _181.MsgConfirmUndelegationAminoMsg): _181.MsgConfirmUndelegation;
            toAminoMsg(message: _181.MsgConfirmUndelegation): _181.MsgConfirmUndelegationAminoMsg;
            fromProtoMsg(message: _181.MsgConfirmUndelegationProtoMsg): _181.MsgConfirmUndelegation;
            toProto(message: _181.MsgConfirmUndelegation): Uint8Array;
            toProtoMsg(message: _181.MsgConfirmUndelegation): _181.MsgConfirmUndelegationProtoMsg;
        };
        MsgConfirmUndelegationResponse: {
            typeUrl: string;
            encode(_: _181.MsgConfirmUndelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.MsgConfirmUndelegationResponse;
            fromPartial(_: Partial<_181.MsgConfirmUndelegationResponse>): _181.MsgConfirmUndelegationResponse;
            fromAmino(_: _181.MsgConfirmUndelegationResponseAmino): _181.MsgConfirmUndelegationResponse;
            toAmino(_: _181.MsgConfirmUndelegationResponse): _181.MsgConfirmUndelegationResponseAmino;
            fromAminoMsg(object: _181.MsgConfirmUndelegationResponseAminoMsg): _181.MsgConfirmUndelegationResponse;
            fromProtoMsg(message: _181.MsgConfirmUndelegationResponseProtoMsg): _181.MsgConfirmUndelegationResponse;
            toProto(message: _181.MsgConfirmUndelegationResponse): Uint8Array;
            toProtoMsg(message: _181.MsgConfirmUndelegationResponse): _181.MsgConfirmUndelegationResponseProtoMsg;
        };
        MsgConfirmUnbondedTokenSweep: {
            typeUrl: string;
            encode(message: _181.MsgConfirmUnbondedTokenSweep, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.MsgConfirmUnbondedTokenSweep;
            fromPartial(object: Partial<_181.MsgConfirmUnbondedTokenSweep>): _181.MsgConfirmUnbondedTokenSweep;
            fromAmino(object: _181.MsgConfirmUnbondedTokenSweepAmino): _181.MsgConfirmUnbondedTokenSweep;
            toAmino(message: _181.MsgConfirmUnbondedTokenSweep): _181.MsgConfirmUnbondedTokenSweepAmino;
            fromAminoMsg(object: _181.MsgConfirmUnbondedTokenSweepAminoMsg): _181.MsgConfirmUnbondedTokenSweep;
            toAminoMsg(message: _181.MsgConfirmUnbondedTokenSweep): _181.MsgConfirmUnbondedTokenSweepAminoMsg;
            fromProtoMsg(message: _181.MsgConfirmUnbondedTokenSweepProtoMsg): _181.MsgConfirmUnbondedTokenSweep;
            toProto(message: _181.MsgConfirmUnbondedTokenSweep): Uint8Array;
            toProtoMsg(message: _181.MsgConfirmUnbondedTokenSweep): _181.MsgConfirmUnbondedTokenSweepProtoMsg;
        };
        MsgConfirmUnbondedTokenSweepResponse: {
            typeUrl: string;
            encode(_: _181.MsgConfirmUnbondedTokenSweepResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.MsgConfirmUnbondedTokenSweepResponse;
            fromPartial(_: Partial<_181.MsgConfirmUnbondedTokenSweepResponse>): _181.MsgConfirmUnbondedTokenSweepResponse;
            fromAmino(_: _181.MsgConfirmUnbondedTokenSweepResponseAmino): _181.MsgConfirmUnbondedTokenSweepResponse;
            toAmino(_: _181.MsgConfirmUnbondedTokenSweepResponse): _181.MsgConfirmUnbondedTokenSweepResponseAmino;
            fromAminoMsg(object: _181.MsgConfirmUnbondedTokenSweepResponseAminoMsg): _181.MsgConfirmUnbondedTokenSweepResponse;
            fromProtoMsg(message: _181.MsgConfirmUnbondedTokenSweepResponseProtoMsg): _181.MsgConfirmUnbondedTokenSweepResponse;
            toProto(message: _181.MsgConfirmUnbondedTokenSweepResponse): Uint8Array;
            toProtoMsg(message: _181.MsgConfirmUnbondedTokenSweepResponse): _181.MsgConfirmUnbondedTokenSweepResponseProtoMsg;
        };
        MsgAdjustDelegatedBalance: {
            typeUrl: string;
            encode(message: _181.MsgAdjustDelegatedBalance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.MsgAdjustDelegatedBalance;
            fromPartial(object: Partial<_181.MsgAdjustDelegatedBalance>): _181.MsgAdjustDelegatedBalance;
            fromAmino(object: _181.MsgAdjustDelegatedBalanceAmino): _181.MsgAdjustDelegatedBalance;
            toAmino(message: _181.MsgAdjustDelegatedBalance): _181.MsgAdjustDelegatedBalanceAmino;
            fromAminoMsg(object: _181.MsgAdjustDelegatedBalanceAminoMsg): _181.MsgAdjustDelegatedBalance;
            toAminoMsg(message: _181.MsgAdjustDelegatedBalance): _181.MsgAdjustDelegatedBalanceAminoMsg;
            fromProtoMsg(message: _181.MsgAdjustDelegatedBalanceProtoMsg): _181.MsgAdjustDelegatedBalance;
            toProto(message: _181.MsgAdjustDelegatedBalance): Uint8Array;
            toProtoMsg(message: _181.MsgAdjustDelegatedBalance): _181.MsgAdjustDelegatedBalanceProtoMsg;
        };
        MsgAdjustDelegatedBalanceResponse: {
            typeUrl: string;
            encode(_: _181.MsgAdjustDelegatedBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.MsgAdjustDelegatedBalanceResponse;
            fromPartial(_: Partial<_181.MsgAdjustDelegatedBalanceResponse>): _181.MsgAdjustDelegatedBalanceResponse;
            fromAmino(_: _181.MsgAdjustDelegatedBalanceResponseAmino): _181.MsgAdjustDelegatedBalanceResponse;
            toAmino(_: _181.MsgAdjustDelegatedBalanceResponse): _181.MsgAdjustDelegatedBalanceResponseAmino;
            fromAminoMsg(object: _181.MsgAdjustDelegatedBalanceResponseAminoMsg): _181.MsgAdjustDelegatedBalanceResponse;
            fromProtoMsg(message: _181.MsgAdjustDelegatedBalanceResponseProtoMsg): _181.MsgAdjustDelegatedBalanceResponse;
            toProto(message: _181.MsgAdjustDelegatedBalanceResponse): Uint8Array;
            toProtoMsg(message: _181.MsgAdjustDelegatedBalanceResponse): _181.MsgAdjustDelegatedBalanceResponseProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBounds: {
            typeUrl: string;
            encode(message: _181.MsgUpdateInnerRedemptionRateBounds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.MsgUpdateInnerRedemptionRateBounds;
            fromPartial(object: Partial<_181.MsgUpdateInnerRedemptionRateBounds>): _181.MsgUpdateInnerRedemptionRateBounds;
            fromAmino(object: _181.MsgUpdateInnerRedemptionRateBoundsAmino): _181.MsgUpdateInnerRedemptionRateBounds;
            toAmino(message: _181.MsgUpdateInnerRedemptionRateBounds): _181.MsgUpdateInnerRedemptionRateBoundsAmino;
            fromAminoMsg(object: _181.MsgUpdateInnerRedemptionRateBoundsAminoMsg): _181.MsgUpdateInnerRedemptionRateBounds;
            toAminoMsg(message: _181.MsgUpdateInnerRedemptionRateBounds): _181.MsgUpdateInnerRedemptionRateBoundsAminoMsg;
            fromProtoMsg(message: _181.MsgUpdateInnerRedemptionRateBoundsProtoMsg): _181.MsgUpdateInnerRedemptionRateBounds;
            toProto(message: _181.MsgUpdateInnerRedemptionRateBounds): Uint8Array;
            toProtoMsg(message: _181.MsgUpdateInnerRedemptionRateBounds): _181.MsgUpdateInnerRedemptionRateBoundsProtoMsg;
        };
        MsgUpdateInnerRedemptionRateBoundsResponse: {
            typeUrl: string;
            encode(_: _181.MsgUpdateInnerRedemptionRateBoundsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromPartial(_: Partial<_181.MsgUpdateInnerRedemptionRateBoundsResponse>): _181.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromAmino(_: _181.MsgUpdateInnerRedemptionRateBoundsResponseAmino): _181.MsgUpdateInnerRedemptionRateBoundsResponse;
            toAmino(_: _181.MsgUpdateInnerRedemptionRateBoundsResponse): _181.MsgUpdateInnerRedemptionRateBoundsResponseAmino;
            fromAminoMsg(object: _181.MsgUpdateInnerRedemptionRateBoundsResponseAminoMsg): _181.MsgUpdateInnerRedemptionRateBoundsResponse;
            fromProtoMsg(message: _181.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg): _181.MsgUpdateInnerRedemptionRateBoundsResponse;
            toProto(message: _181.MsgUpdateInnerRedemptionRateBoundsResponse): Uint8Array;
            toProtoMsg(message: _181.MsgUpdateInnerRedemptionRateBoundsResponse): _181.MsgUpdateInnerRedemptionRateBoundsResponseProtoMsg;
        };
        MsgResumeHostZone: {
            typeUrl: string;
            encode(message: _181.MsgResumeHostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.MsgResumeHostZone;
            fromPartial(object: Partial<_181.MsgResumeHostZone>): _181.MsgResumeHostZone;
            fromAmino(object: _181.MsgResumeHostZoneAmino): _181.MsgResumeHostZone;
            toAmino(message: _181.MsgResumeHostZone): _181.MsgResumeHostZoneAmino;
            fromAminoMsg(object: _181.MsgResumeHostZoneAminoMsg): _181.MsgResumeHostZone;
            toAminoMsg(message: _181.MsgResumeHostZone): _181.MsgResumeHostZoneAminoMsg;
            fromProtoMsg(message: _181.MsgResumeHostZoneProtoMsg): _181.MsgResumeHostZone;
            toProto(message: _181.MsgResumeHostZone): Uint8Array;
            toProtoMsg(message: _181.MsgResumeHostZone): _181.MsgResumeHostZoneProtoMsg;
        };
        MsgResumeHostZoneResponse: {
            typeUrl: string;
            encode(_: _181.MsgResumeHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.MsgResumeHostZoneResponse;
            fromPartial(_: Partial<_181.MsgResumeHostZoneResponse>): _181.MsgResumeHostZoneResponse;
            fromAmino(_: _181.MsgResumeHostZoneResponseAmino): _181.MsgResumeHostZoneResponse;
            toAmino(_: _181.MsgResumeHostZoneResponse): _181.MsgResumeHostZoneResponseAmino;
            fromAminoMsg(object: _181.MsgResumeHostZoneResponseAminoMsg): _181.MsgResumeHostZoneResponse;
            fromProtoMsg(message: _181.MsgResumeHostZoneResponseProtoMsg): _181.MsgResumeHostZoneResponse;
            toProto(message: _181.MsgResumeHostZoneResponse): Uint8Array;
            toProtoMsg(message: _181.MsgResumeHostZoneResponse): _181.MsgResumeHostZoneResponseProtoMsg;
        };
        MsgRefreshRedemptionRate: {
            typeUrl: string;
            encode(message: _181.MsgRefreshRedemptionRate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.MsgRefreshRedemptionRate;
            fromPartial(object: Partial<_181.MsgRefreshRedemptionRate>): _181.MsgRefreshRedemptionRate;
            fromAmino(object: _181.MsgRefreshRedemptionRateAmino): _181.MsgRefreshRedemptionRate;
            toAmino(message: _181.MsgRefreshRedemptionRate): _181.MsgRefreshRedemptionRateAmino;
            fromAminoMsg(object: _181.MsgRefreshRedemptionRateAminoMsg): _181.MsgRefreshRedemptionRate;
            toAminoMsg(message: _181.MsgRefreshRedemptionRate): _181.MsgRefreshRedemptionRateAminoMsg;
            fromProtoMsg(message: _181.MsgRefreshRedemptionRateProtoMsg): _181.MsgRefreshRedemptionRate;
            toProto(message: _181.MsgRefreshRedemptionRate): Uint8Array;
            toProtoMsg(message: _181.MsgRefreshRedemptionRate): _181.MsgRefreshRedemptionRateProtoMsg;
        };
        MsgRefreshRedemptionRateResponse: {
            typeUrl: string;
            encode(_: _181.MsgRefreshRedemptionRateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.MsgRefreshRedemptionRateResponse;
            fromPartial(_: Partial<_181.MsgRefreshRedemptionRateResponse>): _181.MsgRefreshRedemptionRateResponse;
            fromAmino(_: _181.MsgRefreshRedemptionRateResponseAmino): _181.MsgRefreshRedemptionRateResponse;
            toAmino(_: _181.MsgRefreshRedemptionRateResponse): _181.MsgRefreshRedemptionRateResponseAmino;
            fromAminoMsg(object: _181.MsgRefreshRedemptionRateResponseAminoMsg): _181.MsgRefreshRedemptionRateResponse;
            fromProtoMsg(message: _181.MsgRefreshRedemptionRateResponseProtoMsg): _181.MsgRefreshRedemptionRateResponse;
            toProto(message: _181.MsgRefreshRedemptionRateResponse): Uint8Array;
            toProtoMsg(message: _181.MsgRefreshRedemptionRateResponse): _181.MsgRefreshRedemptionRateResponseProtoMsg;
        };
        MsgOverwriteDelegationRecord: {
            typeUrl: string;
            encode(message: _181.MsgOverwriteDelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.MsgOverwriteDelegationRecord;
            fromPartial(object: Partial<_181.MsgOverwriteDelegationRecord>): _181.MsgOverwriteDelegationRecord;
            fromAmino(object: _181.MsgOverwriteDelegationRecordAmino): _181.MsgOverwriteDelegationRecord;
            toAmino(message: _181.MsgOverwriteDelegationRecord): _181.MsgOverwriteDelegationRecordAmino;
            fromAminoMsg(object: _181.MsgOverwriteDelegationRecordAminoMsg): _181.MsgOverwriteDelegationRecord;
            toAminoMsg(message: _181.MsgOverwriteDelegationRecord): _181.MsgOverwriteDelegationRecordAminoMsg;
            fromProtoMsg(message: _181.MsgOverwriteDelegationRecordProtoMsg): _181.MsgOverwriteDelegationRecord;
            toProto(message: _181.MsgOverwriteDelegationRecord): Uint8Array;
            toProtoMsg(message: _181.MsgOverwriteDelegationRecord): _181.MsgOverwriteDelegationRecordProtoMsg;
        };
        MsgOverwriteDelegationRecordResponse: {
            typeUrl: string;
            encode(_: _181.MsgOverwriteDelegationRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.MsgOverwriteDelegationRecordResponse;
            fromPartial(_: Partial<_181.MsgOverwriteDelegationRecordResponse>): _181.MsgOverwriteDelegationRecordResponse;
            fromAmino(_: _181.MsgOverwriteDelegationRecordResponseAmino): _181.MsgOverwriteDelegationRecordResponse;
            toAmino(_: _181.MsgOverwriteDelegationRecordResponse): _181.MsgOverwriteDelegationRecordResponseAmino;
            fromAminoMsg(object: _181.MsgOverwriteDelegationRecordResponseAminoMsg): _181.MsgOverwriteDelegationRecordResponse;
            fromProtoMsg(message: _181.MsgOverwriteDelegationRecordResponseProtoMsg): _181.MsgOverwriteDelegationRecordResponse;
            toProto(message: _181.MsgOverwriteDelegationRecordResponse): Uint8Array;
            toProtoMsg(message: _181.MsgOverwriteDelegationRecordResponse): _181.MsgOverwriteDelegationRecordResponseProtoMsg;
        };
        MsgOverwriteUnbondingRecord: {
            typeUrl: string;
            encode(message: _181.MsgOverwriteUnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.MsgOverwriteUnbondingRecord;
            fromPartial(object: Partial<_181.MsgOverwriteUnbondingRecord>): _181.MsgOverwriteUnbondingRecord;
            fromAmino(object: _181.MsgOverwriteUnbondingRecordAmino): _181.MsgOverwriteUnbondingRecord;
            toAmino(message: _181.MsgOverwriteUnbondingRecord): _181.MsgOverwriteUnbondingRecordAmino;
            fromAminoMsg(object: _181.MsgOverwriteUnbondingRecordAminoMsg): _181.MsgOverwriteUnbondingRecord;
            toAminoMsg(message: _181.MsgOverwriteUnbondingRecord): _181.MsgOverwriteUnbondingRecordAminoMsg;
            fromProtoMsg(message: _181.MsgOverwriteUnbondingRecordProtoMsg): _181.MsgOverwriteUnbondingRecord;
            toProto(message: _181.MsgOverwriteUnbondingRecord): Uint8Array;
            toProtoMsg(message: _181.MsgOverwriteUnbondingRecord): _181.MsgOverwriteUnbondingRecordProtoMsg;
        };
        MsgOverwriteUnbondingRecordResponse: {
            typeUrl: string;
            encode(_: _181.MsgOverwriteUnbondingRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.MsgOverwriteUnbondingRecordResponse;
            fromPartial(_: Partial<_181.MsgOverwriteUnbondingRecordResponse>): _181.MsgOverwriteUnbondingRecordResponse;
            fromAmino(_: _181.MsgOverwriteUnbondingRecordResponseAmino): _181.MsgOverwriteUnbondingRecordResponse;
            toAmino(_: _181.MsgOverwriteUnbondingRecordResponse): _181.MsgOverwriteUnbondingRecordResponseAmino;
            fromAminoMsg(object: _181.MsgOverwriteUnbondingRecordResponseAminoMsg): _181.MsgOverwriteUnbondingRecordResponse;
            fromProtoMsg(message: _181.MsgOverwriteUnbondingRecordResponseProtoMsg): _181.MsgOverwriteUnbondingRecordResponse;
            toProto(message: _181.MsgOverwriteUnbondingRecordResponse): Uint8Array;
            toProtoMsg(message: _181.MsgOverwriteUnbondingRecordResponse): _181.MsgOverwriteUnbondingRecordResponseProtoMsg;
        };
        MsgOverwriteRedemptionRecord: {
            typeUrl: string;
            encode(message: _181.MsgOverwriteRedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.MsgOverwriteRedemptionRecord;
            fromPartial(object: Partial<_181.MsgOverwriteRedemptionRecord>): _181.MsgOverwriteRedemptionRecord;
            fromAmino(object: _181.MsgOverwriteRedemptionRecordAmino): _181.MsgOverwriteRedemptionRecord;
            toAmino(message: _181.MsgOverwriteRedemptionRecord): _181.MsgOverwriteRedemptionRecordAmino;
            fromAminoMsg(object: _181.MsgOverwriteRedemptionRecordAminoMsg): _181.MsgOverwriteRedemptionRecord;
            toAminoMsg(message: _181.MsgOverwriteRedemptionRecord): _181.MsgOverwriteRedemptionRecordAminoMsg;
            fromProtoMsg(message: _181.MsgOverwriteRedemptionRecordProtoMsg): _181.MsgOverwriteRedemptionRecord;
            toProto(message: _181.MsgOverwriteRedemptionRecord): Uint8Array;
            toProtoMsg(message: _181.MsgOverwriteRedemptionRecord): _181.MsgOverwriteRedemptionRecordProtoMsg;
        };
        MsgOverwriteRedemptionRecordResponse: {
            typeUrl: string;
            encode(_: _181.MsgOverwriteRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.MsgOverwriteRedemptionRecordResponse;
            fromPartial(_: Partial<_181.MsgOverwriteRedemptionRecordResponse>): _181.MsgOverwriteRedemptionRecordResponse;
            fromAmino(_: _181.MsgOverwriteRedemptionRecordResponseAmino): _181.MsgOverwriteRedemptionRecordResponse;
            toAmino(_: _181.MsgOverwriteRedemptionRecordResponse): _181.MsgOverwriteRedemptionRecordResponseAmino;
            fromAminoMsg(object: _181.MsgOverwriteRedemptionRecordResponseAminoMsg): _181.MsgOverwriteRedemptionRecordResponse;
            fromProtoMsg(message: _181.MsgOverwriteRedemptionRecordResponseProtoMsg): _181.MsgOverwriteRedemptionRecordResponse;
            toProto(message: _181.MsgOverwriteRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _181.MsgOverwriteRedemptionRecordResponse): _181.MsgOverwriteRedemptionRecordResponseProtoMsg;
        };
        MsgSetOperatorAddress: {
            typeUrl: string;
            encode(message: _181.MsgSetOperatorAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.MsgSetOperatorAddress;
            fromPartial(object: Partial<_181.MsgSetOperatorAddress>): _181.MsgSetOperatorAddress;
            fromAmino(object: _181.MsgSetOperatorAddressAmino): _181.MsgSetOperatorAddress;
            toAmino(message: _181.MsgSetOperatorAddress): _181.MsgSetOperatorAddressAmino;
            fromAminoMsg(object: _181.MsgSetOperatorAddressAminoMsg): _181.MsgSetOperatorAddress;
            toAminoMsg(message: _181.MsgSetOperatorAddress): _181.MsgSetOperatorAddressAminoMsg;
            fromProtoMsg(message: _181.MsgSetOperatorAddressProtoMsg): _181.MsgSetOperatorAddress;
            toProto(message: _181.MsgSetOperatorAddress): Uint8Array;
            toProtoMsg(message: _181.MsgSetOperatorAddress): _181.MsgSetOperatorAddressProtoMsg;
        };
        MsgSetOperatorAddressResponse: {
            typeUrl: string;
            encode(_: _181.MsgSetOperatorAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.MsgSetOperatorAddressResponse;
            fromPartial(_: Partial<_181.MsgSetOperatorAddressResponse>): _181.MsgSetOperatorAddressResponse;
            fromAmino(_: _181.MsgSetOperatorAddressResponseAmino): _181.MsgSetOperatorAddressResponse;
            toAmino(_: _181.MsgSetOperatorAddressResponse): _181.MsgSetOperatorAddressResponseAmino;
            fromAminoMsg(object: _181.MsgSetOperatorAddressResponseAminoMsg): _181.MsgSetOperatorAddressResponse;
            fromProtoMsg(message: _181.MsgSetOperatorAddressResponseProtoMsg): _181.MsgSetOperatorAddressResponse;
            toProto(message: _181.MsgSetOperatorAddressResponse): Uint8Array;
            toProtoMsg(message: _181.MsgSetOperatorAddressResponse): _181.MsgSetOperatorAddressResponseProtoMsg;
        };
        delegationRecordStatusFromJSON(object: any): _180.DelegationRecordStatus;
        delegationRecordStatusToJSON(object: _180.DelegationRecordStatus): string;
        unbondingRecordStatusFromJSON(object: any): _180.UnbondingRecordStatus;
        unbondingRecordStatusToJSON(object: _180.UnbondingRecordStatus): string;
        DelegationRecordStatus: typeof _180.DelegationRecordStatus;
        DelegationRecordStatusSDKType: typeof _180.DelegationRecordStatus;
        DelegationRecordStatusAmino: typeof _180.DelegationRecordStatus;
        UnbondingRecordStatus: typeof _180.UnbondingRecordStatus;
        UnbondingRecordStatusSDKType: typeof _180.UnbondingRecordStatus;
        UnbondingRecordStatusAmino: typeof _180.UnbondingRecordStatus;
        HostZone: {
            typeUrl: string;
            encode(message: _180.HostZone, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.HostZone;
            fromPartial(object: Partial<_180.HostZone>): _180.HostZone;
            fromAmino(object: _180.HostZoneAmino): _180.HostZone;
            toAmino(message: _180.HostZone): _180.HostZoneAmino;
            fromAminoMsg(object: _180.HostZoneAminoMsg): _180.HostZone;
            fromProtoMsg(message: _180.HostZoneProtoMsg): _180.HostZone;
            toProto(message: _180.HostZone): Uint8Array;
            toProtoMsg(message: _180.HostZone): _180.HostZoneProtoMsg;
        };
        DelegationRecord: {
            typeUrl: string;
            encode(message: _180.DelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.DelegationRecord;
            fromPartial(object: Partial<_180.DelegationRecord>): _180.DelegationRecord;
            fromAmino(object: _180.DelegationRecordAmino): _180.DelegationRecord;
            toAmino(message: _180.DelegationRecord): _180.DelegationRecordAmino;
            fromAminoMsg(object: _180.DelegationRecordAminoMsg): _180.DelegationRecord;
            fromProtoMsg(message: _180.DelegationRecordProtoMsg): _180.DelegationRecord;
            toProto(message: _180.DelegationRecord): Uint8Array;
            toProtoMsg(message: _180.DelegationRecord): _180.DelegationRecordProtoMsg;
        };
        UnbondingRecord: {
            typeUrl: string;
            encode(message: _180.UnbondingRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.UnbondingRecord;
            fromPartial(object: Partial<_180.UnbondingRecord>): _180.UnbondingRecord;
            fromAmino(object: _180.UnbondingRecordAmino): _180.UnbondingRecord;
            toAmino(message: _180.UnbondingRecord): _180.UnbondingRecordAmino;
            fromAminoMsg(object: _180.UnbondingRecordAminoMsg): _180.UnbondingRecord;
            fromProtoMsg(message: _180.UnbondingRecordProtoMsg): _180.UnbondingRecord;
            toProto(message: _180.UnbondingRecord): Uint8Array;
            toProtoMsg(message: _180.UnbondingRecord): _180.UnbondingRecordProtoMsg;
        };
        RedemptionRecord: {
            typeUrl: string;
            encode(message: _180.RedemptionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.RedemptionRecord;
            fromPartial(object: Partial<_180.RedemptionRecord>): _180.RedemptionRecord;
            fromAmino(object: _180.RedemptionRecordAmino): _180.RedemptionRecord;
            toAmino(message: _180.RedemptionRecord): _180.RedemptionRecordAmino;
            fromAminoMsg(object: _180.RedemptionRecordAminoMsg): _180.RedemptionRecord;
            fromProtoMsg(message: _180.RedemptionRecordProtoMsg): _180.RedemptionRecord;
            toProto(message: _180.RedemptionRecord): Uint8Array;
            toProtoMsg(message: _180.RedemptionRecord): _180.RedemptionRecordProtoMsg;
        };
        SlashRecord: {
            typeUrl: string;
            encode(message: _180.SlashRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.SlashRecord;
            fromPartial(object: Partial<_180.SlashRecord>): _180.SlashRecord;
            fromAmino(object: _180.SlashRecordAmino): _180.SlashRecord;
            toAmino(message: _180.SlashRecord): _180.SlashRecordAmino;
            fromAminoMsg(object: _180.SlashRecordAminoMsg): _180.SlashRecord;
            fromProtoMsg(message: _180.SlashRecordProtoMsg): _180.SlashRecord;
            toProto(message: _180.SlashRecord): Uint8Array;
            toProtoMsg(message: _180.SlashRecord): _180.SlashRecordProtoMsg;
        };
        QueryHostZoneRequest: {
            typeUrl: string;
            encode(_: _179.QueryHostZoneRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.QueryHostZoneRequest;
            fromPartial(_: Partial<_179.QueryHostZoneRequest>): _179.QueryHostZoneRequest;
            fromAmino(_: _179.QueryHostZoneRequestAmino): _179.QueryHostZoneRequest;
            toAmino(_: _179.QueryHostZoneRequest): _179.QueryHostZoneRequestAmino;
            fromAminoMsg(object: _179.QueryHostZoneRequestAminoMsg): _179.QueryHostZoneRequest;
            fromProtoMsg(message: _179.QueryHostZoneRequestProtoMsg): _179.QueryHostZoneRequest;
            toProto(message: _179.QueryHostZoneRequest): Uint8Array;
            toProtoMsg(message: _179.QueryHostZoneRequest): _179.QueryHostZoneRequestProtoMsg;
        };
        QueryHostZoneResponse: {
            typeUrl: string;
            encode(message: _179.QueryHostZoneResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.QueryHostZoneResponse;
            fromPartial(object: Partial<_179.QueryHostZoneResponse>): _179.QueryHostZoneResponse;
            fromAmino(object: _179.QueryHostZoneResponseAmino): _179.QueryHostZoneResponse;
            toAmino(message: _179.QueryHostZoneResponse): _179.QueryHostZoneResponseAmino;
            fromAminoMsg(object: _179.QueryHostZoneResponseAminoMsg): _179.QueryHostZoneResponse;
            fromProtoMsg(message: _179.QueryHostZoneResponseProtoMsg): _179.QueryHostZoneResponse;
            toProto(message: _179.QueryHostZoneResponse): Uint8Array;
            toProtoMsg(message: _179.QueryHostZoneResponse): _179.QueryHostZoneResponseProtoMsg;
        };
        QueryDelegationRecordsRequest: {
            typeUrl: string;
            encode(message: _179.QueryDelegationRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.QueryDelegationRecordsRequest;
            fromPartial(object: Partial<_179.QueryDelegationRecordsRequest>): _179.QueryDelegationRecordsRequest;
            fromAmino(object: _179.QueryDelegationRecordsRequestAmino): _179.QueryDelegationRecordsRequest;
            toAmino(message: _179.QueryDelegationRecordsRequest): _179.QueryDelegationRecordsRequestAmino;
            fromAminoMsg(object: _179.QueryDelegationRecordsRequestAminoMsg): _179.QueryDelegationRecordsRequest;
            fromProtoMsg(message: _179.QueryDelegationRecordsRequestProtoMsg): _179.QueryDelegationRecordsRequest;
            toProto(message: _179.QueryDelegationRecordsRequest): Uint8Array;
            toProtoMsg(message: _179.QueryDelegationRecordsRequest): _179.QueryDelegationRecordsRequestProtoMsg;
        };
        QueryDelegationRecordsResponse: {
            typeUrl: string;
            encode(message: _179.QueryDelegationRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.QueryDelegationRecordsResponse;
            fromPartial(object: Partial<_179.QueryDelegationRecordsResponse>): _179.QueryDelegationRecordsResponse;
            fromAmino(object: _179.QueryDelegationRecordsResponseAmino): _179.QueryDelegationRecordsResponse;
            toAmino(message: _179.QueryDelegationRecordsResponse): _179.QueryDelegationRecordsResponseAmino;
            fromAminoMsg(object: _179.QueryDelegationRecordsResponseAminoMsg): _179.QueryDelegationRecordsResponse;
            fromProtoMsg(message: _179.QueryDelegationRecordsResponseProtoMsg): _179.QueryDelegationRecordsResponse;
            toProto(message: _179.QueryDelegationRecordsResponse): Uint8Array;
            toProtoMsg(message: _179.QueryDelegationRecordsResponse): _179.QueryDelegationRecordsResponseProtoMsg;
        };
        QueryUnbondingRecordsRequest: {
            typeUrl: string;
            encode(message: _179.QueryUnbondingRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.QueryUnbondingRecordsRequest;
            fromPartial(object: Partial<_179.QueryUnbondingRecordsRequest>): _179.QueryUnbondingRecordsRequest;
            fromAmino(object: _179.QueryUnbondingRecordsRequestAmino): _179.QueryUnbondingRecordsRequest;
            toAmino(message: _179.QueryUnbondingRecordsRequest): _179.QueryUnbondingRecordsRequestAmino;
            fromAminoMsg(object: _179.QueryUnbondingRecordsRequestAminoMsg): _179.QueryUnbondingRecordsRequest;
            fromProtoMsg(message: _179.QueryUnbondingRecordsRequestProtoMsg): _179.QueryUnbondingRecordsRequest;
            toProto(message: _179.QueryUnbondingRecordsRequest): Uint8Array;
            toProtoMsg(message: _179.QueryUnbondingRecordsRequest): _179.QueryUnbondingRecordsRequestProtoMsg;
        };
        QueryUnbondingRecordsResponse: {
            typeUrl: string;
            encode(message: _179.QueryUnbondingRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.QueryUnbondingRecordsResponse;
            fromPartial(object: Partial<_179.QueryUnbondingRecordsResponse>): _179.QueryUnbondingRecordsResponse;
            fromAmino(object: _179.QueryUnbondingRecordsResponseAmino): _179.QueryUnbondingRecordsResponse;
            toAmino(message: _179.QueryUnbondingRecordsResponse): _179.QueryUnbondingRecordsResponseAmino;
            fromAminoMsg(object: _179.QueryUnbondingRecordsResponseAminoMsg): _179.QueryUnbondingRecordsResponse;
            fromProtoMsg(message: _179.QueryUnbondingRecordsResponseProtoMsg): _179.QueryUnbondingRecordsResponse;
            toProto(message: _179.QueryUnbondingRecordsResponse): Uint8Array;
            toProtoMsg(message: _179.QueryUnbondingRecordsResponse): _179.QueryUnbondingRecordsResponseProtoMsg;
        };
        QueryRedemptionRecordRequest: {
            typeUrl: string;
            encode(message: _179.QueryRedemptionRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.QueryRedemptionRecordRequest;
            fromPartial(object: Partial<_179.QueryRedemptionRecordRequest>): _179.QueryRedemptionRecordRequest;
            fromAmino(object: _179.QueryRedemptionRecordRequestAmino): _179.QueryRedemptionRecordRequest;
            toAmino(message: _179.QueryRedemptionRecordRequest): _179.QueryRedemptionRecordRequestAmino;
            fromAminoMsg(object: _179.QueryRedemptionRecordRequestAminoMsg): _179.QueryRedemptionRecordRequest;
            fromProtoMsg(message: _179.QueryRedemptionRecordRequestProtoMsg): _179.QueryRedemptionRecordRequest;
            toProto(message: _179.QueryRedemptionRecordRequest): Uint8Array;
            toProtoMsg(message: _179.QueryRedemptionRecordRequest): _179.QueryRedemptionRecordRequestProtoMsg;
        };
        QueryRedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _179.QueryRedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.QueryRedemptionRecordResponse;
            fromPartial(object: Partial<_179.QueryRedemptionRecordResponse>): _179.QueryRedemptionRecordResponse;
            fromAmino(object: _179.QueryRedemptionRecordResponseAmino): _179.QueryRedemptionRecordResponse;
            toAmino(message: _179.QueryRedemptionRecordResponse): _179.QueryRedemptionRecordResponseAmino;
            fromAminoMsg(object: _179.QueryRedemptionRecordResponseAminoMsg): _179.QueryRedemptionRecordResponse;
            fromProtoMsg(message: _179.QueryRedemptionRecordResponseProtoMsg): _179.QueryRedemptionRecordResponse;
            toProto(message: _179.QueryRedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _179.QueryRedemptionRecordResponse): _179.QueryRedemptionRecordResponseProtoMsg;
        };
        QueryRedemptionRecordsRequest: {
            typeUrl: string;
            encode(message: _179.QueryRedemptionRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.QueryRedemptionRecordsRequest;
            fromPartial(object: Partial<_179.QueryRedemptionRecordsRequest>): _179.QueryRedemptionRecordsRequest;
            fromAmino(object: _179.QueryRedemptionRecordsRequestAmino): _179.QueryRedemptionRecordsRequest;
            toAmino(message: _179.QueryRedemptionRecordsRequest): _179.QueryRedemptionRecordsRequestAmino;
            fromAminoMsg(object: _179.QueryRedemptionRecordsRequestAminoMsg): _179.QueryRedemptionRecordsRequest;
            fromProtoMsg(message: _179.QueryRedemptionRecordsRequestProtoMsg): _179.QueryRedemptionRecordsRequest;
            toProto(message: _179.QueryRedemptionRecordsRequest): Uint8Array;
            toProtoMsg(message: _179.QueryRedemptionRecordsRequest): _179.QueryRedemptionRecordsRequestProtoMsg;
        };
        QueryRedemptionRecordsResponse: {
            typeUrl: string;
            encode(message: _179.QueryRedemptionRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.QueryRedemptionRecordsResponse;
            fromPartial(object: Partial<_179.QueryRedemptionRecordsResponse>): _179.QueryRedemptionRecordsResponse;
            fromAmino(object: _179.QueryRedemptionRecordsResponseAmino): _179.QueryRedemptionRecordsResponse;
            toAmino(message: _179.QueryRedemptionRecordsResponse): _179.QueryRedemptionRecordsResponseAmino;
            fromAminoMsg(object: _179.QueryRedemptionRecordsResponseAminoMsg): _179.QueryRedemptionRecordsResponse;
            fromProtoMsg(message: _179.QueryRedemptionRecordsResponseProtoMsg): _179.QueryRedemptionRecordsResponse;
            toProto(message: _179.QueryRedemptionRecordsResponse): Uint8Array;
            toProtoMsg(message: _179.QueryRedemptionRecordsResponse): _179.QueryRedemptionRecordsResponseProtoMsg;
        };
        QuerySlashRecordsRequest: {
            typeUrl: string;
            encode(_: _179.QuerySlashRecordsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.QuerySlashRecordsRequest;
            fromPartial(_: Partial<_179.QuerySlashRecordsRequest>): _179.QuerySlashRecordsRequest;
            fromAmino(_: _179.QuerySlashRecordsRequestAmino): _179.QuerySlashRecordsRequest;
            toAmino(_: _179.QuerySlashRecordsRequest): _179.QuerySlashRecordsRequestAmino;
            fromAminoMsg(object: _179.QuerySlashRecordsRequestAminoMsg): _179.QuerySlashRecordsRequest;
            fromProtoMsg(message: _179.QuerySlashRecordsRequestProtoMsg): _179.QuerySlashRecordsRequest;
            toProto(message: _179.QuerySlashRecordsRequest): Uint8Array;
            toProtoMsg(message: _179.QuerySlashRecordsRequest): _179.QuerySlashRecordsRequestProtoMsg;
        };
        QuerySlashRecordsResponse: {
            typeUrl: string;
            encode(message: _179.QuerySlashRecordsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.QuerySlashRecordsResponse;
            fromPartial(object: Partial<_179.QuerySlashRecordsResponse>): _179.QuerySlashRecordsResponse;
            fromAmino(object: _179.QuerySlashRecordsResponseAmino): _179.QuerySlashRecordsResponse;
            toAmino(message: _179.QuerySlashRecordsResponse): _179.QuerySlashRecordsResponseAmino;
            fromAminoMsg(object: _179.QuerySlashRecordsResponseAminoMsg): _179.QuerySlashRecordsResponse;
            fromProtoMsg(message: _179.QuerySlashRecordsResponseProtoMsg): _179.QuerySlashRecordsResponse;
            toProto(message: _179.QuerySlashRecordsResponse): Uint8Array;
            toProtoMsg(message: _179.QuerySlashRecordsResponse): _179.QuerySlashRecordsResponseProtoMsg;
        };
        RedemptionRecordResponse: {
            typeUrl: string;
            encode(message: _179.RedemptionRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.RedemptionRecordResponse;
            fromPartial(object: Partial<_179.RedemptionRecordResponse>): _179.RedemptionRecordResponse;
            fromAmino(object: _179.RedemptionRecordResponseAmino): _179.RedemptionRecordResponse;
            toAmino(message: _179.RedemptionRecordResponse): _179.RedemptionRecordResponseAmino;
            fromAminoMsg(object: _179.RedemptionRecordResponseAminoMsg): _179.RedemptionRecordResponse;
            fromProtoMsg(message: _179.RedemptionRecordResponseProtoMsg): _179.RedemptionRecordResponse;
            toProto(message: _179.RedemptionRecordResponse): Uint8Array;
            toProtoMsg(message: _179.RedemptionRecordResponse): _179.RedemptionRecordResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _178.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.Params;
            fromPartial(_: Partial<_178.Params>): _178.Params;
            fromAmino(_: _178.ParamsAmino): _178.Params;
            toAmino(_: _178.Params): _178.ParamsAmino;
            fromAminoMsg(object: _178.ParamsAminoMsg): _178.Params;
            fromProtoMsg(message: _178.ParamsProtoMsg): _178.Params;
            toProto(message: _178.Params): Uint8Array;
            toProtoMsg(message: _178.Params): _178.ParamsProtoMsg;
        };
        TransferInProgressRecordIds: {
            typeUrl: string;
            encode(message: _178.TransferInProgressRecordIds, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.TransferInProgressRecordIds;
            fromPartial(object: Partial<_178.TransferInProgressRecordIds>): _178.TransferInProgressRecordIds;
            fromAmino(object: _178.TransferInProgressRecordIdsAmino): _178.TransferInProgressRecordIds;
            toAmino(message: _178.TransferInProgressRecordIds): _178.TransferInProgressRecordIdsAmino;
            fromAminoMsg(object: _178.TransferInProgressRecordIdsAminoMsg): _178.TransferInProgressRecordIds;
            fromProtoMsg(message: _178.TransferInProgressRecordIdsProtoMsg): _178.TransferInProgressRecordIds;
            toProto(message: _178.TransferInProgressRecordIds): Uint8Array;
            toProtoMsg(message: _178.TransferInProgressRecordIds): _178.TransferInProgressRecordIdsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _178.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.GenesisState;
            fromPartial(object: Partial<_178.GenesisState>): _178.GenesisState;
            fromAmino(object: _178.GenesisStateAmino): _178.GenesisState;
            toAmino(message: _178.GenesisState): _178.GenesisStateAmino;
            fromAminoMsg(object: _178.GenesisStateAminoMsg): _178.GenesisState;
            fromProtoMsg(message: _178.GenesisStateProtoMsg): _178.GenesisState;
            toProto(message: _178.GenesisState): Uint8Array;
            toProtoMsg(message: _178.GenesisState): _178.GenesisStateProtoMsg;
        };
    };
    const vesting: {
        BaseVestingAccount: {
            typeUrl: string;
            encode(message: _183.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.BaseVestingAccount;
            fromPartial(object: Partial<_183.BaseVestingAccount>): _183.BaseVestingAccount;
            fromAmino(object: _183.BaseVestingAccountAmino): _183.BaseVestingAccount;
            toAmino(message: _183.BaseVestingAccount): _183.BaseVestingAccountAmino;
            fromAminoMsg(object: _183.BaseVestingAccountAminoMsg): _183.BaseVestingAccount;
            fromProtoMsg(message: _183.BaseVestingAccountProtoMsg): _183.BaseVestingAccount;
            toProto(message: _183.BaseVestingAccount): Uint8Array;
            toProtoMsg(message: _183.BaseVestingAccount): _183.BaseVestingAccountProtoMsg;
        };
        Period: {
            typeUrl: string;
            encode(message: _183.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.Period;
            fromPartial(object: Partial<_183.Period>): _183.Period;
            fromAmino(object: _183.PeriodAmino): _183.Period;
            toAmino(message: _183.Period): _183.PeriodAmino;
            fromAminoMsg(object: _183.PeriodAminoMsg): _183.Period;
            fromProtoMsg(message: _183.PeriodProtoMsg): _183.Period;
            toProto(message: _183.Period): Uint8Array;
            toProtoMsg(message: _183.Period): _183.PeriodProtoMsg;
        };
        StridePeriodicVestingAccount: {
            typeUrl: string;
            encode(message: _183.StridePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.StridePeriodicVestingAccount;
            fromPartial(object: Partial<_183.StridePeriodicVestingAccount>): _183.StridePeriodicVestingAccount;
            fromAmino(object: _183.StridePeriodicVestingAccountAmino): _183.StridePeriodicVestingAccount;
            toAmino(message: _183.StridePeriodicVestingAccount): _183.StridePeriodicVestingAccountAmino;
            fromAminoMsg(object: _183.StridePeriodicVestingAccountAminoMsg): _183.StridePeriodicVestingAccount;
            fromProtoMsg(message: _183.StridePeriodicVestingAccountProtoMsg): _183.StridePeriodicVestingAccount;
            toProto(message: _183.StridePeriodicVestingAccount): Uint8Array;
            toProtoMsg(message: _183.StridePeriodicVestingAccount): _183.StridePeriodicVestingAccountProtoMsg;
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
                airdrop: _290.MsgClientImpl;
                claim: _291.MsgClientImpl;
                icaoracle: _292.MsgClientImpl;
                interchainquery: {
                    v1: _293.MsgClientImpl;
                };
                stakedym: _294.MsgClientImpl;
                stakeibc: _295.MsgClientImpl;
                staketia: _296.MsgClientImpl;
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
                    airdrop(request: _126.QueryAirdropRequest): Promise<_126.QueryAirdropResponse>;
                    allAirdrops(request?: _126.QueryAllAirdropsRequest): Promise<_126.QueryAllAirdropsResponse>;
                    userAllocation(request: _126.QueryUserAllocationRequest): Promise<_126.QueryUserAllocationResponse>;
                    userAllocations(request: _126.QueryUserAllocationsRequest): Promise<_126.QueryUserAllocationsResponse>;
                    allAllocations(request: _126.QueryAllAllocationsRequest): Promise<_126.QueryAllAllocationsResponse>;
                    userSummary(request: _126.QueryUserSummaryRequest): Promise<_126.QueryUserSummaryResponse>;
                };
                autopilot: {
                    params(request?: _130.QueryParamsRequest): Promise<_130.QueryParamsResponse>;
                };
                claim: {
                    distributorAccountBalance(request: _134.QueryDistributorAccountBalanceRequest): Promise<_134.QueryDistributorAccountBalanceResponse>;
                    params(request?: _134.QueryParamsRequest): Promise<_134.QueryParamsResponse>;
                    claimRecord(request: _134.QueryClaimRecordRequest): Promise<_134.QueryClaimRecordResponse>;
                    claimableForAction(request: _134.QueryClaimableForActionRequest): Promise<_134.QueryClaimableForActionResponse>;
                    totalClaimable(request: _134.QueryTotalClaimableRequest): Promise<_134.QueryTotalClaimableResponse>;
                    userVestings(request: _134.QueryUserVestingsRequest): Promise<_134.QueryUserVestingsResponse>;
                    claimStatus(request: _134.QueryClaimStatusRequest): Promise<_134.QueryClaimStatusResponse>;
                    claimMetadata(request?: _134.QueryClaimMetadataRequest): Promise<_134.QueryClaimMetadataResponse>;
                };
                epochs: {
                    epochInfos(request?: _137.QueryEpochsInfoRequest): Promise<_137.QueryEpochsInfoResponse>;
                    currentEpoch(request: _137.QueryCurrentEpochRequest): Promise<_137.QueryCurrentEpochResponse>;
                    epochInfo(request: _137.QueryEpochInfoRequest): Promise<_137.QueryEpochInfoResponse>;
                };
                icacallbacks: {
                    params(request?: _142.QueryParamsRequest): Promise<_142.QueryParamsResponse>;
                    callbackData(request: _142.QueryGetCallbackDataRequest): Promise<_142.QueryGetCallbackDataResponse>;
                    callbackDataAll(request?: _142.QueryAllCallbackDataRequest): Promise<_142.QueryAllCallbackDataResponse>;
                };
                icaoracle: {
                    oracle(request: _148.QueryOracleRequest): Promise<_148.QueryOracleResponse>;
                    allOracles(request?: _148.QueryAllOraclesRequest): Promise<_148.QueryAllOraclesResponse>;
                    activeOracles(request: _148.QueryActiveOraclesRequest): Promise<_148.QueryActiveOraclesResponse>;
                    metrics(request: _148.QueryMetricsRequest): Promise<_148.QueryMetricsResponse>;
                };
                mint: {
                    v1beta1: {
                        params(request?: _155.QueryParamsRequest): Promise<_155.QueryParamsResponse>;
                        epochProvisions(request?: _155.QueryEpochProvisionsRequest): Promise<_155.QueryEpochProvisionsResponse>;
                    };
                };
                records: {
                    params(request?: _159.QueryParamsRequest): Promise<_159.QueryParamsResponse>;
                    userRedemptionRecord(request: _159.QueryGetUserRedemptionRecordRequest): Promise<_159.QueryGetUserRedemptionRecordResponse>;
                    userRedemptionRecordAll(request?: _159.QueryAllUserRedemptionRecordRequest): Promise<_159.QueryAllUserRedemptionRecordResponse>;
                    userRedemptionRecordForUser(request: _159.QueryAllUserRedemptionRecordForUserRequest): Promise<_159.QueryAllUserRedemptionRecordForUserResponse>;
                    epochUnbondingRecord(request: _159.QueryGetEpochUnbondingRecordRequest): Promise<_159.QueryGetEpochUnbondingRecordResponse>;
                    epochUnbondingRecordAll(request?: _159.QueryAllEpochUnbondingRecordRequest): Promise<_159.QueryAllEpochUnbondingRecordResponse>;
                    depositRecord(request: _159.QueryGetDepositRecordRequest): Promise<_159.QueryGetDepositRecordResponse>;
                    depositRecordAll(request?: _159.QueryAllDepositRecordRequest): Promise<_159.QueryAllDepositRecordResponse>;
                    depositRecordByHost(request: _159.QueryDepositRecordByHostRequest): Promise<_159.QueryDepositRecordByHostResponse>;
                    lSMDeposit(request: _159.QueryLSMDepositRequest): Promise<_159.QueryLSMDepositResponse>;
                    lSMDeposits(request: _159.QueryLSMDepositsRequest): Promise<_159.QueryLSMDepositsResponse>;
                };
                stakedym: {
                    hostZone(request?: _162.QueryHostZoneRequest): Promise<_162.QueryHostZoneResponse>;
                    delegationRecords(request: _162.QueryDelegationRecordsRequest): Promise<_162.QueryDelegationRecordsResponse>;
                    unbondingRecords(request: _162.QueryUnbondingRecordsRequest): Promise<_162.QueryUnbondingRecordsResponse>;
                    redemptionRecord(request: _162.QueryRedemptionRecordRequest): Promise<_162.QueryRedemptionRecordResponse>;
                    redemptionRecords(request: _162.QueryRedemptionRecordsRequest): Promise<_162.QueryRedemptionRecordsResponse>;
                    slashRecords(request?: _162.QuerySlashRecordsRequest): Promise<_162.QuerySlashRecordsResponse>;
                };
                stakeibc: {
                    params(request?: _174.QueryParamsRequest): Promise<_174.QueryParamsResponse>;
                    validators(request: _174.QueryGetValidatorsRequest): Promise<_174.QueryGetValidatorsResponse>;
                    hostZone(request: _174.QueryGetHostZoneRequest): Promise<_174.QueryGetHostZoneResponse>;
                    hostZoneAll(request?: _174.QueryAllHostZoneRequest): Promise<_174.QueryAllHostZoneResponse>;
                    moduleAddress(request: _174.QueryModuleAddressRequest): Promise<_174.QueryModuleAddressResponse>;
                    interchainAccountFromAddress(request: _174.QueryInterchainAccountFromAddressRequest): Promise<_174.QueryInterchainAccountFromAddressResponse>;
                    epochTracker(request: _174.QueryGetEpochTrackerRequest): Promise<_174.QueryGetEpochTrackerResponse>;
                    epochTrackerAll(request?: _174.QueryAllEpochTrackerRequest): Promise<_174.QueryAllEpochTrackerResponse>;
                    nextPacketSequence(request: _174.QueryGetNextPacketSequenceRequest): Promise<_174.QueryGetNextPacketSequenceResponse>;
                    addressUnbondings(request: _174.QueryAddressUnbondings): Promise<_174.QueryAddressUnbondingsResponse>;
                    allTradeRoutes(request?: _174.QueryAllTradeRoutes): Promise<_174.QueryAllTradeRoutesResponse>;
                };
                staketia: {
                    hostZone(request?: _179.QueryHostZoneRequest): Promise<_179.QueryHostZoneResponse>;
                    delegationRecords(request: _179.QueryDelegationRecordsRequest): Promise<_179.QueryDelegationRecordsResponse>;
                    unbondingRecords(request: _179.QueryUnbondingRecordsRequest): Promise<_179.QueryUnbondingRecordsResponse>;
                    redemptionRecord(request: _179.QueryRedemptionRecordRequest): Promise<_179.QueryRedemptionRecordResponse>;
                    redemptionRecords(request: _179.QueryRedemptionRecordsRequest): Promise<_179.QueryRedemptionRecordsResponse>;
                    slashRecords(request?: _179.QuerySlashRecordsRequest): Promise<_179.QuerySlashRecordsResponse>;
                };
            };
        }>;
    };
}
