import * as _143 from "./applications/fee/v1/ack";
import * as _144 from "./applications/fee/v1/fee";
import * as _145 from "./applications/fee/v1/genesis";
import * as _146 from "./applications/fee/v1/metadata";
import * as _147 from "./applications/fee/v1/query";
import * as _148 from "./applications/fee/v1/tx";
import * as _149 from "./applications/interchain_accounts/controller/v1/controller";
import * as _150 from "./applications/interchain_accounts/controller/v1/query";
import * as _151 from "./applications/interchain_accounts/controller/v1/tx";
import * as _152 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _153 from "./applications/interchain_accounts/host/v1/host";
import * as _154 from "./applications/interchain_accounts/host/v1/query";
import * as _155 from "./applications/interchain_accounts/host/v1/tx";
import * as _156 from "./applications/interchain_accounts/v1/account";
import * as _157 from "./applications/interchain_accounts/v1/metadata";
import * as _158 from "./applications/interchain_accounts/v1/packet";
import * as _159 from "./applications/transfer/v1/authz";
import * as _160 from "./applications/transfer/v1/genesis";
import * as _161 from "./applications/transfer/v1/query";
import * as _162 from "./applications/transfer/v1/transfer";
import * as _163 from "./applications/transfer/v1/tx";
import * as _164 from "./applications/transfer/v2/packet";
import * as _165 from "./core/channel/v1/channel";
import * as _166 from "./core/channel/v1/genesis";
import * as _167 from "./core/channel/v1/query";
import * as _168 from "./core/channel/v1/tx";
import * as _169 from "./core/client/v1/client";
import * as _170 from "./core/client/v1/genesis";
import * as _171 from "./core/client/v1/query";
import * as _172 from "./core/client/v1/tx";
import * as _173 from "./core/commitment/v1/commitment";
import * as _174 from "./core/connection/v1/connection";
import * as _175 from "./core/connection/v1/genesis";
import * as _176 from "./core/connection/v1/query";
import * as _177 from "./core/connection/v1/tx";
import * as _178 from "./core/types/v1/genesis";
import * as _179 from "./lightclients/localhost/v2/localhost";
import * as _180 from "./lightclients/solomachine/v2/solomachine";
import * as _181 from "./lightclients/solomachine/v3/solomachine";
import * as _182 from "./lightclients/tendermint/v1/tendermint";
import * as _356 from "./applications/fee/v1/query.rpc.Query";
import * as _357 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _358 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _359 from "./applications/transfer/v1/query.rpc.Query";
import * as _360 from "./core/channel/v1/query.rpc.Query";
import * as _361 from "./core/client/v1/query.rpc.Query";
import * as _362 from "./core/connection/v1/query.rpc.Query";
import * as _363 from "./applications/fee/v1/tx.rpc.msg";
import * as _364 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _365 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _366 from "./applications/transfer/v1/tx.rpc.msg";
import * as _367 from "./core/channel/v1/tx.rpc.msg";
import * as _368 from "./core/client/v1/tx.rpc.msg";
import * as _369 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace fee {
            const v1: {
                MsgClientImpl: typeof _363.MsgClientImpl;
                QueryClientImpl: typeof _356.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    incentivizedPackets(request: _147.QueryIncentivizedPacketsRequest): Promise<_147.QueryIncentivizedPacketsResponse>;
                    incentivizedPacket(request: _147.QueryIncentivizedPacketRequest): Promise<_147.QueryIncentivizedPacketResponse>;
                    incentivizedPacketsForChannel(request: _147.QueryIncentivizedPacketsForChannelRequest): Promise<_147.QueryIncentivizedPacketsForChannelResponse>;
                    totalRecvFees(request: _147.QueryTotalRecvFeesRequest): Promise<_147.QueryTotalRecvFeesResponse>;
                    totalAckFees(request: _147.QueryTotalAckFeesRequest): Promise<_147.QueryTotalAckFeesResponse>;
                    totalTimeoutFees(request: _147.QueryTotalTimeoutFeesRequest): Promise<_147.QueryTotalTimeoutFeesResponse>;
                    payee(request: _147.QueryPayeeRequest): Promise<_147.QueryPayeeResponse>;
                    counterpartyPayee(request: _147.QueryCounterpartyPayeeRequest): Promise<_147.QueryCounterpartyPayeeResponse>;
                    feeEnabledChannels(request: _147.QueryFeeEnabledChannelsRequest): Promise<_147.QueryFeeEnabledChannelsResponse>;
                    feeEnabledChannel(request: _147.QueryFeeEnabledChannelRequest): Promise<_147.QueryFeeEnabledChannelResponse>;
                };
                registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        registerPayee(value: _148.MsgRegisterPayee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        registerCounterpartyPayee(value: _148.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        payPacketFee(value: _148.MsgPayPacketFee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        payPacketFeeAsync(value: _148.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        registerPayee(value: _148.MsgRegisterPayee): {
                            typeUrl: string;
                            value: _148.MsgRegisterPayee;
                        };
                        registerCounterpartyPayee(value: _148.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: _148.MsgRegisterCounterpartyPayee;
                        };
                        payPacketFee(value: _148.MsgPayPacketFee): {
                            typeUrl: string;
                            value: _148.MsgPayPacketFee;
                        };
                        payPacketFeeAsync(value: _148.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: _148.MsgPayPacketFeeAsync;
                        };
                    };
                    fromPartial: {
                        registerPayee(value: _148.MsgRegisterPayee): {
                            typeUrl: string;
                            value: _148.MsgRegisterPayee;
                        };
                        registerCounterpartyPayee(value: _148.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: _148.MsgRegisterCounterpartyPayee;
                        };
                        payPacketFee(value: _148.MsgPayPacketFee): {
                            typeUrl: string;
                            value: _148.MsgPayPacketFee;
                        };
                        payPacketFeeAsync(value: _148.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: _148.MsgPayPacketFeeAsync;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.fee.v1.MsgRegisterPayee": {
                        aminoType: string;
                        toAmino: (message: _148.MsgRegisterPayee) => _148.MsgRegisterPayeeAmino;
                        fromAmino: (object: _148.MsgRegisterPayeeAmino) => _148.MsgRegisterPayee;
                    };
                    "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee": {
                        aminoType: string;
                        toAmino: (message: _148.MsgRegisterCounterpartyPayee) => _148.MsgRegisterCounterpartyPayeeAmino;
                        fromAmino: (object: _148.MsgRegisterCounterpartyPayeeAmino) => _148.MsgRegisterCounterpartyPayee;
                    };
                    "/ibc.applications.fee.v1.MsgPayPacketFee": {
                        aminoType: string;
                        toAmino: (message: _148.MsgPayPacketFee) => _148.MsgPayPacketFeeAmino;
                        fromAmino: (object: _148.MsgPayPacketFeeAmino) => _148.MsgPayPacketFee;
                    };
                    "/ibc.applications.fee.v1.MsgPayPacketFeeAsync": {
                        aminoType: string;
                        toAmino: (message: _148.MsgPayPacketFeeAsync) => _148.MsgPayPacketFeeAsyncAmino;
                        fromAmino: (object: _148.MsgPayPacketFeeAsyncAmino) => _148.MsgPayPacketFeeAsync;
                    };
                };
                MsgRegisterPayee: {
                    typeUrl: string;
                    encode(message: _148.MsgRegisterPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.MsgRegisterPayee;
                    fromPartial(object: Partial<_148.MsgRegisterPayee>): _148.MsgRegisterPayee;
                    fromAmino(object: _148.MsgRegisterPayeeAmino): _148.MsgRegisterPayee;
                    toAmino(message: _148.MsgRegisterPayee): _148.MsgRegisterPayeeAmino;
                    fromAminoMsg(object: _148.MsgRegisterPayeeAminoMsg): _148.MsgRegisterPayee;
                    toAminoMsg(message: _148.MsgRegisterPayee): _148.MsgRegisterPayeeAminoMsg;
                    fromProtoMsg(message: _148.MsgRegisterPayeeProtoMsg): _148.MsgRegisterPayee;
                    toProto(message: _148.MsgRegisterPayee): Uint8Array;
                    toProtoMsg(message: _148.MsgRegisterPayee): _148.MsgRegisterPayeeProtoMsg;
                };
                MsgRegisterPayeeResponse: {
                    typeUrl: string;
                    encode(_: _148.MsgRegisterPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.MsgRegisterPayeeResponse;
                    fromPartial(_: Partial<_148.MsgRegisterPayeeResponse>): _148.MsgRegisterPayeeResponse;
                    fromAmino(_: _148.MsgRegisterPayeeResponseAmino): _148.MsgRegisterPayeeResponse;
                    toAmino(_: _148.MsgRegisterPayeeResponse): _148.MsgRegisterPayeeResponseAmino;
                    fromAminoMsg(object: _148.MsgRegisterPayeeResponseAminoMsg): _148.MsgRegisterPayeeResponse;
                    toAminoMsg(message: _148.MsgRegisterPayeeResponse): _148.MsgRegisterPayeeResponseAminoMsg;
                    fromProtoMsg(message: _148.MsgRegisterPayeeResponseProtoMsg): _148.MsgRegisterPayeeResponse;
                    toProto(message: _148.MsgRegisterPayeeResponse): Uint8Array;
                    toProtoMsg(message: _148.MsgRegisterPayeeResponse): _148.MsgRegisterPayeeResponseProtoMsg;
                };
                MsgRegisterCounterpartyPayee: {
                    typeUrl: string;
                    encode(message: _148.MsgRegisterCounterpartyPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.MsgRegisterCounterpartyPayee;
                    fromPartial(object: Partial<_148.MsgRegisterCounterpartyPayee>): _148.MsgRegisterCounterpartyPayee;
                    fromAmino(object: _148.MsgRegisterCounterpartyPayeeAmino): _148.MsgRegisterCounterpartyPayee;
                    toAmino(message: _148.MsgRegisterCounterpartyPayee): _148.MsgRegisterCounterpartyPayeeAmino;
                    fromAminoMsg(object: _148.MsgRegisterCounterpartyPayeeAminoMsg): _148.MsgRegisterCounterpartyPayee;
                    toAminoMsg(message: _148.MsgRegisterCounterpartyPayee): _148.MsgRegisterCounterpartyPayeeAminoMsg;
                    fromProtoMsg(message: _148.MsgRegisterCounterpartyPayeeProtoMsg): _148.MsgRegisterCounterpartyPayee;
                    toProto(message: _148.MsgRegisterCounterpartyPayee): Uint8Array;
                    toProtoMsg(message: _148.MsgRegisterCounterpartyPayee): _148.MsgRegisterCounterpartyPayeeProtoMsg;
                };
                MsgRegisterCounterpartyPayeeResponse: {
                    typeUrl: string;
                    encode(_: _148.MsgRegisterCounterpartyPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.MsgRegisterCounterpartyPayeeResponse;
                    fromPartial(_: Partial<_148.MsgRegisterCounterpartyPayeeResponse>): _148.MsgRegisterCounterpartyPayeeResponse;
                    fromAmino(_: _148.MsgRegisterCounterpartyPayeeResponseAmino): _148.MsgRegisterCounterpartyPayeeResponse;
                    toAmino(_: _148.MsgRegisterCounterpartyPayeeResponse): _148.MsgRegisterCounterpartyPayeeResponseAmino;
                    fromAminoMsg(object: _148.MsgRegisterCounterpartyPayeeResponseAminoMsg): _148.MsgRegisterCounterpartyPayeeResponse;
                    toAminoMsg(message: _148.MsgRegisterCounterpartyPayeeResponse): _148.MsgRegisterCounterpartyPayeeResponseAminoMsg;
                    fromProtoMsg(message: _148.MsgRegisterCounterpartyPayeeResponseProtoMsg): _148.MsgRegisterCounterpartyPayeeResponse;
                    toProto(message: _148.MsgRegisterCounterpartyPayeeResponse): Uint8Array;
                    toProtoMsg(message: _148.MsgRegisterCounterpartyPayeeResponse): _148.MsgRegisterCounterpartyPayeeResponseProtoMsg;
                };
                MsgPayPacketFee: {
                    typeUrl: string;
                    encode(message: _148.MsgPayPacketFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.MsgPayPacketFee;
                    fromPartial(object: Partial<_148.MsgPayPacketFee>): _148.MsgPayPacketFee;
                    fromAmino(object: _148.MsgPayPacketFeeAmino): _148.MsgPayPacketFee;
                    toAmino(message: _148.MsgPayPacketFee): _148.MsgPayPacketFeeAmino;
                    fromAminoMsg(object: _148.MsgPayPacketFeeAminoMsg): _148.MsgPayPacketFee;
                    toAminoMsg(message: _148.MsgPayPacketFee): _148.MsgPayPacketFeeAminoMsg;
                    fromProtoMsg(message: _148.MsgPayPacketFeeProtoMsg): _148.MsgPayPacketFee;
                    toProto(message: _148.MsgPayPacketFee): Uint8Array;
                    toProtoMsg(message: _148.MsgPayPacketFee): _148.MsgPayPacketFeeProtoMsg;
                };
                MsgPayPacketFeeResponse: {
                    typeUrl: string;
                    encode(_: _148.MsgPayPacketFeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.MsgPayPacketFeeResponse;
                    fromPartial(_: Partial<_148.MsgPayPacketFeeResponse>): _148.MsgPayPacketFeeResponse;
                    fromAmino(_: _148.MsgPayPacketFeeResponseAmino): _148.MsgPayPacketFeeResponse;
                    toAmino(_: _148.MsgPayPacketFeeResponse): _148.MsgPayPacketFeeResponseAmino;
                    fromAminoMsg(object: _148.MsgPayPacketFeeResponseAminoMsg): _148.MsgPayPacketFeeResponse;
                    toAminoMsg(message: _148.MsgPayPacketFeeResponse): _148.MsgPayPacketFeeResponseAminoMsg;
                    fromProtoMsg(message: _148.MsgPayPacketFeeResponseProtoMsg): _148.MsgPayPacketFeeResponse;
                    toProto(message: _148.MsgPayPacketFeeResponse): Uint8Array;
                    toProtoMsg(message: _148.MsgPayPacketFeeResponse): _148.MsgPayPacketFeeResponseProtoMsg;
                };
                MsgPayPacketFeeAsync: {
                    typeUrl: string;
                    encode(message: _148.MsgPayPacketFeeAsync, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.MsgPayPacketFeeAsync;
                    fromPartial(object: Partial<_148.MsgPayPacketFeeAsync>): _148.MsgPayPacketFeeAsync;
                    fromAmino(object: _148.MsgPayPacketFeeAsyncAmino): _148.MsgPayPacketFeeAsync;
                    toAmino(message: _148.MsgPayPacketFeeAsync): _148.MsgPayPacketFeeAsyncAmino;
                    fromAminoMsg(object: _148.MsgPayPacketFeeAsyncAminoMsg): _148.MsgPayPacketFeeAsync;
                    toAminoMsg(message: _148.MsgPayPacketFeeAsync): _148.MsgPayPacketFeeAsyncAminoMsg;
                    fromProtoMsg(message: _148.MsgPayPacketFeeAsyncProtoMsg): _148.MsgPayPacketFeeAsync;
                    toProto(message: _148.MsgPayPacketFeeAsync): Uint8Array;
                    toProtoMsg(message: _148.MsgPayPacketFeeAsync): _148.MsgPayPacketFeeAsyncProtoMsg;
                };
                MsgPayPacketFeeAsyncResponse: {
                    typeUrl: string;
                    encode(_: _148.MsgPayPacketFeeAsyncResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.MsgPayPacketFeeAsyncResponse;
                    fromPartial(_: Partial<_148.MsgPayPacketFeeAsyncResponse>): _148.MsgPayPacketFeeAsyncResponse;
                    fromAmino(_: _148.MsgPayPacketFeeAsyncResponseAmino): _148.MsgPayPacketFeeAsyncResponse;
                    toAmino(_: _148.MsgPayPacketFeeAsyncResponse): _148.MsgPayPacketFeeAsyncResponseAmino;
                    fromAminoMsg(object: _148.MsgPayPacketFeeAsyncResponseAminoMsg): _148.MsgPayPacketFeeAsyncResponse;
                    toAminoMsg(message: _148.MsgPayPacketFeeAsyncResponse): _148.MsgPayPacketFeeAsyncResponseAminoMsg;
                    fromProtoMsg(message: _148.MsgPayPacketFeeAsyncResponseProtoMsg): _148.MsgPayPacketFeeAsyncResponse;
                    toProto(message: _148.MsgPayPacketFeeAsyncResponse): Uint8Array;
                    toProtoMsg(message: _148.MsgPayPacketFeeAsyncResponse): _148.MsgPayPacketFeeAsyncResponseProtoMsg;
                };
                QueryIncentivizedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _147.QueryIncentivizedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.QueryIncentivizedPacketsRequest;
                    fromPartial(object: Partial<_147.QueryIncentivizedPacketsRequest>): _147.QueryIncentivizedPacketsRequest;
                    fromAmino(object: _147.QueryIncentivizedPacketsRequestAmino): _147.QueryIncentivizedPacketsRequest;
                    toAmino(message: _147.QueryIncentivizedPacketsRequest): _147.QueryIncentivizedPacketsRequestAmino;
                    fromAminoMsg(object: _147.QueryIncentivizedPacketsRequestAminoMsg): _147.QueryIncentivizedPacketsRequest;
                    toAminoMsg(message: _147.QueryIncentivizedPacketsRequest): _147.QueryIncentivizedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _147.QueryIncentivizedPacketsRequestProtoMsg): _147.QueryIncentivizedPacketsRequest;
                    toProto(message: _147.QueryIncentivizedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _147.QueryIncentivizedPacketsRequest): _147.QueryIncentivizedPacketsRequestProtoMsg;
                };
                QueryIncentivizedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _147.QueryIncentivizedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.QueryIncentivizedPacketsResponse;
                    fromPartial(object: Partial<_147.QueryIncentivizedPacketsResponse>): _147.QueryIncentivizedPacketsResponse;
                    fromAmino(object: _147.QueryIncentivizedPacketsResponseAmino): _147.QueryIncentivizedPacketsResponse;
                    toAmino(message: _147.QueryIncentivizedPacketsResponse): _147.QueryIncentivizedPacketsResponseAmino;
                    fromAminoMsg(object: _147.QueryIncentivizedPacketsResponseAminoMsg): _147.QueryIncentivizedPacketsResponse;
                    toAminoMsg(message: _147.QueryIncentivizedPacketsResponse): _147.QueryIncentivizedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _147.QueryIncentivizedPacketsResponseProtoMsg): _147.QueryIncentivizedPacketsResponse;
                    toProto(message: _147.QueryIncentivizedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _147.QueryIncentivizedPacketsResponse): _147.QueryIncentivizedPacketsResponseProtoMsg;
                };
                QueryIncentivizedPacketRequest: {
                    typeUrl: string;
                    encode(message: _147.QueryIncentivizedPacketRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.QueryIncentivizedPacketRequest;
                    fromPartial(object: Partial<_147.QueryIncentivizedPacketRequest>): _147.QueryIncentivizedPacketRequest;
                    fromAmino(object: _147.QueryIncentivizedPacketRequestAmino): _147.QueryIncentivizedPacketRequest;
                    toAmino(message: _147.QueryIncentivizedPacketRequest): _147.QueryIncentivizedPacketRequestAmino;
                    fromAminoMsg(object: _147.QueryIncentivizedPacketRequestAminoMsg): _147.QueryIncentivizedPacketRequest;
                    toAminoMsg(message: _147.QueryIncentivizedPacketRequest): _147.QueryIncentivizedPacketRequestAminoMsg;
                    fromProtoMsg(message: _147.QueryIncentivizedPacketRequestProtoMsg): _147.QueryIncentivizedPacketRequest;
                    toProto(message: _147.QueryIncentivizedPacketRequest): Uint8Array;
                    toProtoMsg(message: _147.QueryIncentivizedPacketRequest): _147.QueryIncentivizedPacketRequestProtoMsg;
                };
                QueryIncentivizedPacketResponse: {
                    typeUrl: string;
                    encode(message: _147.QueryIncentivizedPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.QueryIncentivizedPacketResponse;
                    fromPartial(object: Partial<_147.QueryIncentivizedPacketResponse>): _147.QueryIncentivizedPacketResponse;
                    fromAmino(object: _147.QueryIncentivizedPacketResponseAmino): _147.QueryIncentivizedPacketResponse;
                    toAmino(message: _147.QueryIncentivizedPacketResponse): _147.QueryIncentivizedPacketResponseAmino;
                    fromAminoMsg(object: _147.QueryIncentivizedPacketResponseAminoMsg): _147.QueryIncentivizedPacketResponse;
                    toAminoMsg(message: _147.QueryIncentivizedPacketResponse): _147.QueryIncentivizedPacketResponseAminoMsg;
                    fromProtoMsg(message: _147.QueryIncentivizedPacketResponseProtoMsg): _147.QueryIncentivizedPacketResponse;
                    toProto(message: _147.QueryIncentivizedPacketResponse): Uint8Array;
                    toProtoMsg(message: _147.QueryIncentivizedPacketResponse): _147.QueryIncentivizedPacketResponseProtoMsg;
                };
                QueryIncentivizedPacketsForChannelRequest: {
                    typeUrl: string;
                    encode(message: _147.QueryIncentivizedPacketsForChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.QueryIncentivizedPacketsForChannelRequest;
                    fromPartial(object: Partial<_147.QueryIncentivizedPacketsForChannelRequest>): _147.QueryIncentivizedPacketsForChannelRequest;
                    fromAmino(object: _147.QueryIncentivizedPacketsForChannelRequestAmino): _147.QueryIncentivizedPacketsForChannelRequest;
                    toAmino(message: _147.QueryIncentivizedPacketsForChannelRequest): _147.QueryIncentivizedPacketsForChannelRequestAmino;
                    fromAminoMsg(object: _147.QueryIncentivizedPacketsForChannelRequestAminoMsg): _147.QueryIncentivizedPacketsForChannelRequest;
                    toAminoMsg(message: _147.QueryIncentivizedPacketsForChannelRequest): _147.QueryIncentivizedPacketsForChannelRequestAminoMsg;
                    fromProtoMsg(message: _147.QueryIncentivizedPacketsForChannelRequestProtoMsg): _147.QueryIncentivizedPacketsForChannelRequest;
                    toProto(message: _147.QueryIncentivizedPacketsForChannelRequest): Uint8Array;
                    toProtoMsg(message: _147.QueryIncentivizedPacketsForChannelRequest): _147.QueryIncentivizedPacketsForChannelRequestProtoMsg;
                };
                QueryIncentivizedPacketsForChannelResponse: {
                    typeUrl: string;
                    encode(message: _147.QueryIncentivizedPacketsForChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.QueryIncentivizedPacketsForChannelResponse;
                    fromPartial(object: Partial<_147.QueryIncentivizedPacketsForChannelResponse>): _147.QueryIncentivizedPacketsForChannelResponse;
                    fromAmino(object: _147.QueryIncentivizedPacketsForChannelResponseAmino): _147.QueryIncentivizedPacketsForChannelResponse;
                    toAmino(message: _147.QueryIncentivizedPacketsForChannelResponse): _147.QueryIncentivizedPacketsForChannelResponseAmino;
                    fromAminoMsg(object: _147.QueryIncentivizedPacketsForChannelResponseAminoMsg): _147.QueryIncentivizedPacketsForChannelResponse;
                    toAminoMsg(message: _147.QueryIncentivizedPacketsForChannelResponse): _147.QueryIncentivizedPacketsForChannelResponseAminoMsg;
                    fromProtoMsg(message: _147.QueryIncentivizedPacketsForChannelResponseProtoMsg): _147.QueryIncentivizedPacketsForChannelResponse;
                    toProto(message: _147.QueryIncentivizedPacketsForChannelResponse): Uint8Array;
                    toProtoMsg(message: _147.QueryIncentivizedPacketsForChannelResponse): _147.QueryIncentivizedPacketsForChannelResponseProtoMsg;
                };
                QueryTotalRecvFeesRequest: {
                    typeUrl: string;
                    encode(message: _147.QueryTotalRecvFeesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.QueryTotalRecvFeesRequest;
                    fromPartial(object: Partial<_147.QueryTotalRecvFeesRequest>): _147.QueryTotalRecvFeesRequest;
                    fromAmino(object: _147.QueryTotalRecvFeesRequestAmino): _147.QueryTotalRecvFeesRequest;
                    toAmino(message: _147.QueryTotalRecvFeesRequest): _147.QueryTotalRecvFeesRequestAmino;
                    fromAminoMsg(object: _147.QueryTotalRecvFeesRequestAminoMsg): _147.QueryTotalRecvFeesRequest;
                    toAminoMsg(message: _147.QueryTotalRecvFeesRequest): _147.QueryTotalRecvFeesRequestAminoMsg;
                    fromProtoMsg(message: _147.QueryTotalRecvFeesRequestProtoMsg): _147.QueryTotalRecvFeesRequest;
                    toProto(message: _147.QueryTotalRecvFeesRequest): Uint8Array;
                    toProtoMsg(message: _147.QueryTotalRecvFeesRequest): _147.QueryTotalRecvFeesRequestProtoMsg;
                };
                QueryTotalRecvFeesResponse: {
                    typeUrl: string;
                    encode(message: _147.QueryTotalRecvFeesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.QueryTotalRecvFeesResponse;
                    fromPartial(object: Partial<_147.QueryTotalRecvFeesResponse>): _147.QueryTotalRecvFeesResponse;
                    fromAmino(object: _147.QueryTotalRecvFeesResponseAmino): _147.QueryTotalRecvFeesResponse;
                    toAmino(message: _147.QueryTotalRecvFeesResponse): _147.QueryTotalRecvFeesResponseAmino;
                    fromAminoMsg(object: _147.QueryTotalRecvFeesResponseAminoMsg): _147.QueryTotalRecvFeesResponse;
                    toAminoMsg(message: _147.QueryTotalRecvFeesResponse): _147.QueryTotalRecvFeesResponseAminoMsg;
                    fromProtoMsg(message: _147.QueryTotalRecvFeesResponseProtoMsg): _147.QueryTotalRecvFeesResponse;
                    toProto(message: _147.QueryTotalRecvFeesResponse): Uint8Array;
                    toProtoMsg(message: _147.QueryTotalRecvFeesResponse): _147.QueryTotalRecvFeesResponseProtoMsg;
                };
                QueryTotalAckFeesRequest: {
                    typeUrl: string;
                    encode(message: _147.QueryTotalAckFeesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.QueryTotalAckFeesRequest;
                    fromPartial(object: Partial<_147.QueryTotalAckFeesRequest>): _147.QueryTotalAckFeesRequest;
                    fromAmino(object: _147.QueryTotalAckFeesRequestAmino): _147.QueryTotalAckFeesRequest;
                    toAmino(message: _147.QueryTotalAckFeesRequest): _147.QueryTotalAckFeesRequestAmino;
                    fromAminoMsg(object: _147.QueryTotalAckFeesRequestAminoMsg): _147.QueryTotalAckFeesRequest;
                    toAminoMsg(message: _147.QueryTotalAckFeesRequest): _147.QueryTotalAckFeesRequestAminoMsg;
                    fromProtoMsg(message: _147.QueryTotalAckFeesRequestProtoMsg): _147.QueryTotalAckFeesRequest;
                    toProto(message: _147.QueryTotalAckFeesRequest): Uint8Array;
                    toProtoMsg(message: _147.QueryTotalAckFeesRequest): _147.QueryTotalAckFeesRequestProtoMsg;
                };
                QueryTotalAckFeesResponse: {
                    typeUrl: string;
                    encode(message: _147.QueryTotalAckFeesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.QueryTotalAckFeesResponse;
                    fromPartial(object: Partial<_147.QueryTotalAckFeesResponse>): _147.QueryTotalAckFeesResponse;
                    fromAmino(object: _147.QueryTotalAckFeesResponseAmino): _147.QueryTotalAckFeesResponse;
                    toAmino(message: _147.QueryTotalAckFeesResponse): _147.QueryTotalAckFeesResponseAmino;
                    fromAminoMsg(object: _147.QueryTotalAckFeesResponseAminoMsg): _147.QueryTotalAckFeesResponse;
                    toAminoMsg(message: _147.QueryTotalAckFeesResponse): _147.QueryTotalAckFeesResponseAminoMsg;
                    fromProtoMsg(message: _147.QueryTotalAckFeesResponseProtoMsg): _147.QueryTotalAckFeesResponse;
                    toProto(message: _147.QueryTotalAckFeesResponse): Uint8Array;
                    toProtoMsg(message: _147.QueryTotalAckFeesResponse): _147.QueryTotalAckFeesResponseProtoMsg;
                };
                QueryTotalTimeoutFeesRequest: {
                    typeUrl: string;
                    encode(message: _147.QueryTotalTimeoutFeesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.QueryTotalTimeoutFeesRequest;
                    fromPartial(object: Partial<_147.QueryTotalTimeoutFeesRequest>): _147.QueryTotalTimeoutFeesRequest;
                    fromAmino(object: _147.QueryTotalTimeoutFeesRequestAmino): _147.QueryTotalTimeoutFeesRequest;
                    toAmino(message: _147.QueryTotalTimeoutFeesRequest): _147.QueryTotalTimeoutFeesRequestAmino;
                    fromAminoMsg(object: _147.QueryTotalTimeoutFeesRequestAminoMsg): _147.QueryTotalTimeoutFeesRequest;
                    toAminoMsg(message: _147.QueryTotalTimeoutFeesRequest): _147.QueryTotalTimeoutFeesRequestAminoMsg;
                    fromProtoMsg(message: _147.QueryTotalTimeoutFeesRequestProtoMsg): _147.QueryTotalTimeoutFeesRequest;
                    toProto(message: _147.QueryTotalTimeoutFeesRequest): Uint8Array;
                    toProtoMsg(message: _147.QueryTotalTimeoutFeesRequest): _147.QueryTotalTimeoutFeesRequestProtoMsg;
                };
                QueryTotalTimeoutFeesResponse: {
                    typeUrl: string;
                    encode(message: _147.QueryTotalTimeoutFeesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.QueryTotalTimeoutFeesResponse;
                    fromPartial(object: Partial<_147.QueryTotalTimeoutFeesResponse>): _147.QueryTotalTimeoutFeesResponse;
                    fromAmino(object: _147.QueryTotalTimeoutFeesResponseAmino): _147.QueryTotalTimeoutFeesResponse;
                    toAmino(message: _147.QueryTotalTimeoutFeesResponse): _147.QueryTotalTimeoutFeesResponseAmino;
                    fromAminoMsg(object: _147.QueryTotalTimeoutFeesResponseAminoMsg): _147.QueryTotalTimeoutFeesResponse;
                    toAminoMsg(message: _147.QueryTotalTimeoutFeesResponse): _147.QueryTotalTimeoutFeesResponseAminoMsg;
                    fromProtoMsg(message: _147.QueryTotalTimeoutFeesResponseProtoMsg): _147.QueryTotalTimeoutFeesResponse;
                    toProto(message: _147.QueryTotalTimeoutFeesResponse): Uint8Array;
                    toProtoMsg(message: _147.QueryTotalTimeoutFeesResponse): _147.QueryTotalTimeoutFeesResponseProtoMsg;
                };
                QueryPayeeRequest: {
                    typeUrl: string;
                    encode(message: _147.QueryPayeeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.QueryPayeeRequest;
                    fromPartial(object: Partial<_147.QueryPayeeRequest>): _147.QueryPayeeRequest;
                    fromAmino(object: _147.QueryPayeeRequestAmino): _147.QueryPayeeRequest;
                    toAmino(message: _147.QueryPayeeRequest): _147.QueryPayeeRequestAmino;
                    fromAminoMsg(object: _147.QueryPayeeRequestAminoMsg): _147.QueryPayeeRequest;
                    toAminoMsg(message: _147.QueryPayeeRequest): _147.QueryPayeeRequestAminoMsg;
                    fromProtoMsg(message: _147.QueryPayeeRequestProtoMsg): _147.QueryPayeeRequest;
                    toProto(message: _147.QueryPayeeRequest): Uint8Array;
                    toProtoMsg(message: _147.QueryPayeeRequest): _147.QueryPayeeRequestProtoMsg;
                };
                QueryPayeeResponse: {
                    typeUrl: string;
                    encode(message: _147.QueryPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.QueryPayeeResponse;
                    fromPartial(object: Partial<_147.QueryPayeeResponse>): _147.QueryPayeeResponse;
                    fromAmino(object: _147.QueryPayeeResponseAmino): _147.QueryPayeeResponse;
                    toAmino(message: _147.QueryPayeeResponse): _147.QueryPayeeResponseAmino;
                    fromAminoMsg(object: _147.QueryPayeeResponseAminoMsg): _147.QueryPayeeResponse;
                    toAminoMsg(message: _147.QueryPayeeResponse): _147.QueryPayeeResponseAminoMsg;
                    fromProtoMsg(message: _147.QueryPayeeResponseProtoMsg): _147.QueryPayeeResponse;
                    toProto(message: _147.QueryPayeeResponse): Uint8Array;
                    toProtoMsg(message: _147.QueryPayeeResponse): _147.QueryPayeeResponseProtoMsg;
                };
                QueryCounterpartyPayeeRequest: {
                    typeUrl: string;
                    encode(message: _147.QueryCounterpartyPayeeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.QueryCounterpartyPayeeRequest;
                    fromPartial(object: Partial<_147.QueryCounterpartyPayeeRequest>): _147.QueryCounterpartyPayeeRequest;
                    fromAmino(object: _147.QueryCounterpartyPayeeRequestAmino): _147.QueryCounterpartyPayeeRequest;
                    toAmino(message: _147.QueryCounterpartyPayeeRequest): _147.QueryCounterpartyPayeeRequestAmino;
                    fromAminoMsg(object: _147.QueryCounterpartyPayeeRequestAminoMsg): _147.QueryCounterpartyPayeeRequest;
                    toAminoMsg(message: _147.QueryCounterpartyPayeeRequest): _147.QueryCounterpartyPayeeRequestAminoMsg;
                    fromProtoMsg(message: _147.QueryCounterpartyPayeeRequestProtoMsg): _147.QueryCounterpartyPayeeRequest;
                    toProto(message: _147.QueryCounterpartyPayeeRequest): Uint8Array;
                    toProtoMsg(message: _147.QueryCounterpartyPayeeRequest): _147.QueryCounterpartyPayeeRequestProtoMsg;
                };
                QueryCounterpartyPayeeResponse: {
                    typeUrl: string;
                    encode(message: _147.QueryCounterpartyPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.QueryCounterpartyPayeeResponse;
                    fromPartial(object: Partial<_147.QueryCounterpartyPayeeResponse>): _147.QueryCounterpartyPayeeResponse;
                    fromAmino(object: _147.QueryCounterpartyPayeeResponseAmino): _147.QueryCounterpartyPayeeResponse;
                    toAmino(message: _147.QueryCounterpartyPayeeResponse): _147.QueryCounterpartyPayeeResponseAmino;
                    fromAminoMsg(object: _147.QueryCounterpartyPayeeResponseAminoMsg): _147.QueryCounterpartyPayeeResponse;
                    toAminoMsg(message: _147.QueryCounterpartyPayeeResponse): _147.QueryCounterpartyPayeeResponseAminoMsg;
                    fromProtoMsg(message: _147.QueryCounterpartyPayeeResponseProtoMsg): _147.QueryCounterpartyPayeeResponse;
                    toProto(message: _147.QueryCounterpartyPayeeResponse): Uint8Array;
                    toProtoMsg(message: _147.QueryCounterpartyPayeeResponse): _147.QueryCounterpartyPayeeResponseProtoMsg;
                };
                QueryFeeEnabledChannelsRequest: {
                    typeUrl: string;
                    encode(message: _147.QueryFeeEnabledChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.QueryFeeEnabledChannelsRequest;
                    fromPartial(object: Partial<_147.QueryFeeEnabledChannelsRequest>): _147.QueryFeeEnabledChannelsRequest;
                    fromAmino(object: _147.QueryFeeEnabledChannelsRequestAmino): _147.QueryFeeEnabledChannelsRequest;
                    toAmino(message: _147.QueryFeeEnabledChannelsRequest): _147.QueryFeeEnabledChannelsRequestAmino;
                    fromAminoMsg(object: _147.QueryFeeEnabledChannelsRequestAminoMsg): _147.QueryFeeEnabledChannelsRequest;
                    toAminoMsg(message: _147.QueryFeeEnabledChannelsRequest): _147.QueryFeeEnabledChannelsRequestAminoMsg;
                    fromProtoMsg(message: _147.QueryFeeEnabledChannelsRequestProtoMsg): _147.QueryFeeEnabledChannelsRequest;
                    toProto(message: _147.QueryFeeEnabledChannelsRequest): Uint8Array;
                    toProtoMsg(message: _147.QueryFeeEnabledChannelsRequest): _147.QueryFeeEnabledChannelsRequestProtoMsg;
                };
                QueryFeeEnabledChannelsResponse: {
                    typeUrl: string;
                    encode(message: _147.QueryFeeEnabledChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.QueryFeeEnabledChannelsResponse;
                    fromPartial(object: Partial<_147.QueryFeeEnabledChannelsResponse>): _147.QueryFeeEnabledChannelsResponse;
                    fromAmino(object: _147.QueryFeeEnabledChannelsResponseAmino): _147.QueryFeeEnabledChannelsResponse;
                    toAmino(message: _147.QueryFeeEnabledChannelsResponse): _147.QueryFeeEnabledChannelsResponseAmino;
                    fromAminoMsg(object: _147.QueryFeeEnabledChannelsResponseAminoMsg): _147.QueryFeeEnabledChannelsResponse;
                    toAminoMsg(message: _147.QueryFeeEnabledChannelsResponse): _147.QueryFeeEnabledChannelsResponseAminoMsg;
                    fromProtoMsg(message: _147.QueryFeeEnabledChannelsResponseProtoMsg): _147.QueryFeeEnabledChannelsResponse;
                    toProto(message: _147.QueryFeeEnabledChannelsResponse): Uint8Array;
                    toProtoMsg(message: _147.QueryFeeEnabledChannelsResponse): _147.QueryFeeEnabledChannelsResponseProtoMsg;
                };
                QueryFeeEnabledChannelRequest: {
                    typeUrl: string;
                    encode(message: _147.QueryFeeEnabledChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.QueryFeeEnabledChannelRequest;
                    fromPartial(object: Partial<_147.QueryFeeEnabledChannelRequest>): _147.QueryFeeEnabledChannelRequest;
                    fromAmino(object: _147.QueryFeeEnabledChannelRequestAmino): _147.QueryFeeEnabledChannelRequest;
                    toAmino(message: _147.QueryFeeEnabledChannelRequest): _147.QueryFeeEnabledChannelRequestAmino;
                    fromAminoMsg(object: _147.QueryFeeEnabledChannelRequestAminoMsg): _147.QueryFeeEnabledChannelRequest;
                    toAminoMsg(message: _147.QueryFeeEnabledChannelRequest): _147.QueryFeeEnabledChannelRequestAminoMsg;
                    fromProtoMsg(message: _147.QueryFeeEnabledChannelRequestProtoMsg): _147.QueryFeeEnabledChannelRequest;
                    toProto(message: _147.QueryFeeEnabledChannelRequest): Uint8Array;
                    toProtoMsg(message: _147.QueryFeeEnabledChannelRequest): _147.QueryFeeEnabledChannelRequestProtoMsg;
                };
                QueryFeeEnabledChannelResponse: {
                    typeUrl: string;
                    encode(message: _147.QueryFeeEnabledChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.QueryFeeEnabledChannelResponse;
                    fromPartial(object: Partial<_147.QueryFeeEnabledChannelResponse>): _147.QueryFeeEnabledChannelResponse;
                    fromAmino(object: _147.QueryFeeEnabledChannelResponseAmino): _147.QueryFeeEnabledChannelResponse;
                    toAmino(message: _147.QueryFeeEnabledChannelResponse): _147.QueryFeeEnabledChannelResponseAmino;
                    fromAminoMsg(object: _147.QueryFeeEnabledChannelResponseAminoMsg): _147.QueryFeeEnabledChannelResponse;
                    toAminoMsg(message: _147.QueryFeeEnabledChannelResponse): _147.QueryFeeEnabledChannelResponseAminoMsg;
                    fromProtoMsg(message: _147.QueryFeeEnabledChannelResponseProtoMsg): _147.QueryFeeEnabledChannelResponse;
                    toProto(message: _147.QueryFeeEnabledChannelResponse): Uint8Array;
                    toProtoMsg(message: _147.QueryFeeEnabledChannelResponse): _147.QueryFeeEnabledChannelResponseProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _146.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _146.Metadata;
                    fromPartial(object: Partial<_146.Metadata>): _146.Metadata;
                    fromAmino(object: _146.MetadataAmino): _146.Metadata;
                    toAmino(message: _146.Metadata): _146.MetadataAmino;
                    fromAminoMsg(object: _146.MetadataAminoMsg): _146.Metadata;
                    toAminoMsg(message: _146.Metadata): _146.MetadataAminoMsg;
                    fromProtoMsg(message: _146.MetadataProtoMsg): _146.Metadata;
                    toProto(message: _146.Metadata): Uint8Array;
                    toProtoMsg(message: _146.Metadata): _146.MetadataProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _145.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.GenesisState;
                    fromPartial(object: Partial<_145.GenesisState>): _145.GenesisState;
                    fromAmino(object: _145.GenesisStateAmino): _145.GenesisState;
                    toAmino(message: _145.GenesisState): _145.GenesisStateAmino;
                    fromAminoMsg(object: _145.GenesisStateAminoMsg): _145.GenesisState;
                    toAminoMsg(message: _145.GenesisState): _145.GenesisStateAminoMsg;
                    fromProtoMsg(message: _145.GenesisStateProtoMsg): _145.GenesisState;
                    toProto(message: _145.GenesisState): Uint8Array;
                    toProtoMsg(message: _145.GenesisState): _145.GenesisStateProtoMsg;
                };
                FeeEnabledChannel: {
                    typeUrl: string;
                    encode(message: _145.FeeEnabledChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.FeeEnabledChannel;
                    fromPartial(object: Partial<_145.FeeEnabledChannel>): _145.FeeEnabledChannel;
                    fromAmino(object: _145.FeeEnabledChannelAmino): _145.FeeEnabledChannel;
                    toAmino(message: _145.FeeEnabledChannel): _145.FeeEnabledChannelAmino;
                    fromAminoMsg(object: _145.FeeEnabledChannelAminoMsg): _145.FeeEnabledChannel;
                    toAminoMsg(message: _145.FeeEnabledChannel): _145.FeeEnabledChannelAminoMsg;
                    fromProtoMsg(message: _145.FeeEnabledChannelProtoMsg): _145.FeeEnabledChannel;
                    toProto(message: _145.FeeEnabledChannel): Uint8Array;
                    toProtoMsg(message: _145.FeeEnabledChannel): _145.FeeEnabledChannelProtoMsg;
                };
                RegisteredPayee: {
                    typeUrl: string;
                    encode(message: _145.RegisteredPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.RegisteredPayee;
                    fromPartial(object: Partial<_145.RegisteredPayee>): _145.RegisteredPayee;
                    fromAmino(object: _145.RegisteredPayeeAmino): _145.RegisteredPayee;
                    toAmino(message: _145.RegisteredPayee): _145.RegisteredPayeeAmino;
                    fromAminoMsg(object: _145.RegisteredPayeeAminoMsg): _145.RegisteredPayee;
                    toAminoMsg(message: _145.RegisteredPayee): _145.RegisteredPayeeAminoMsg;
                    fromProtoMsg(message: _145.RegisteredPayeeProtoMsg): _145.RegisteredPayee;
                    toProto(message: _145.RegisteredPayee): Uint8Array;
                    toProtoMsg(message: _145.RegisteredPayee): _145.RegisteredPayeeProtoMsg;
                };
                RegisteredCounterpartyPayee: {
                    typeUrl: string;
                    encode(message: _145.RegisteredCounterpartyPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.RegisteredCounterpartyPayee;
                    fromPartial(object: Partial<_145.RegisteredCounterpartyPayee>): _145.RegisteredCounterpartyPayee;
                    fromAmino(object: _145.RegisteredCounterpartyPayeeAmino): _145.RegisteredCounterpartyPayee;
                    toAmino(message: _145.RegisteredCounterpartyPayee): _145.RegisteredCounterpartyPayeeAmino;
                    fromAminoMsg(object: _145.RegisteredCounterpartyPayeeAminoMsg): _145.RegisteredCounterpartyPayee;
                    toAminoMsg(message: _145.RegisteredCounterpartyPayee): _145.RegisteredCounterpartyPayeeAminoMsg;
                    fromProtoMsg(message: _145.RegisteredCounterpartyPayeeProtoMsg): _145.RegisteredCounterpartyPayee;
                    toProto(message: _145.RegisteredCounterpartyPayee): Uint8Array;
                    toProtoMsg(message: _145.RegisteredCounterpartyPayee): _145.RegisteredCounterpartyPayeeProtoMsg;
                };
                ForwardRelayerAddress: {
                    typeUrl: string;
                    encode(message: _145.ForwardRelayerAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.ForwardRelayerAddress;
                    fromPartial(object: Partial<_145.ForwardRelayerAddress>): _145.ForwardRelayerAddress;
                    fromAmino(object: _145.ForwardRelayerAddressAmino): _145.ForwardRelayerAddress;
                    toAmino(message: _145.ForwardRelayerAddress): _145.ForwardRelayerAddressAmino;
                    fromAminoMsg(object: _145.ForwardRelayerAddressAminoMsg): _145.ForwardRelayerAddress;
                    toAminoMsg(message: _145.ForwardRelayerAddress): _145.ForwardRelayerAddressAminoMsg;
                    fromProtoMsg(message: _145.ForwardRelayerAddressProtoMsg): _145.ForwardRelayerAddress;
                    toProto(message: _145.ForwardRelayerAddress): Uint8Array;
                    toProtoMsg(message: _145.ForwardRelayerAddress): _145.ForwardRelayerAddressProtoMsg;
                };
                Fee: {
                    typeUrl: string;
                    encode(message: _144.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.Fee;
                    fromPartial(object: Partial<_144.Fee>): _144.Fee;
                    fromAmino(object: _144.FeeAmino): _144.Fee;
                    toAmino(message: _144.Fee): _144.FeeAmino;
                    fromAminoMsg(object: _144.FeeAminoMsg): _144.Fee;
                    toAminoMsg(message: _144.Fee): _144.FeeAminoMsg;
                    fromProtoMsg(message: _144.FeeProtoMsg): _144.Fee;
                    toProto(message: _144.Fee): Uint8Array;
                    toProtoMsg(message: _144.Fee): _144.FeeProtoMsg;
                };
                PacketFee: {
                    typeUrl: string;
                    encode(message: _144.PacketFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.PacketFee;
                    fromPartial(object: Partial<_144.PacketFee>): _144.PacketFee;
                    fromAmino(object: _144.PacketFeeAmino): _144.PacketFee;
                    toAmino(message: _144.PacketFee): _144.PacketFeeAmino;
                    fromAminoMsg(object: _144.PacketFeeAminoMsg): _144.PacketFee;
                    toAminoMsg(message: _144.PacketFee): _144.PacketFeeAminoMsg;
                    fromProtoMsg(message: _144.PacketFeeProtoMsg): _144.PacketFee;
                    toProto(message: _144.PacketFee): Uint8Array;
                    toProtoMsg(message: _144.PacketFee): _144.PacketFeeProtoMsg;
                };
                PacketFees: {
                    typeUrl: string;
                    encode(message: _144.PacketFees, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.PacketFees;
                    fromPartial(object: Partial<_144.PacketFees>): _144.PacketFees;
                    fromAmino(object: _144.PacketFeesAmino): _144.PacketFees;
                    toAmino(message: _144.PacketFees): _144.PacketFeesAmino;
                    fromAminoMsg(object: _144.PacketFeesAminoMsg): _144.PacketFees;
                    toAminoMsg(message: _144.PacketFees): _144.PacketFeesAminoMsg;
                    fromProtoMsg(message: _144.PacketFeesProtoMsg): _144.PacketFees;
                    toProto(message: _144.PacketFees): Uint8Array;
                    toProtoMsg(message: _144.PacketFees): _144.PacketFeesProtoMsg;
                };
                IdentifiedPacketFees: {
                    typeUrl: string;
                    encode(message: _144.IdentifiedPacketFees, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.IdentifiedPacketFees;
                    fromPartial(object: Partial<_144.IdentifiedPacketFees>): _144.IdentifiedPacketFees;
                    fromAmino(object: _144.IdentifiedPacketFeesAmino): _144.IdentifiedPacketFees;
                    toAmino(message: _144.IdentifiedPacketFees): _144.IdentifiedPacketFeesAmino;
                    fromAminoMsg(object: _144.IdentifiedPacketFeesAminoMsg): _144.IdentifiedPacketFees;
                    toAminoMsg(message: _144.IdentifiedPacketFees): _144.IdentifiedPacketFeesAminoMsg;
                    fromProtoMsg(message: _144.IdentifiedPacketFeesProtoMsg): _144.IdentifiedPacketFees;
                    toProto(message: _144.IdentifiedPacketFees): Uint8Array;
                    toProtoMsg(message: _144.IdentifiedPacketFees): _144.IdentifiedPacketFeesProtoMsg;
                };
                IncentivizedAcknowledgement: {
                    typeUrl: string;
                    encode(message: _143.IncentivizedAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.IncentivizedAcknowledgement;
                    fromPartial(object: Partial<_143.IncentivizedAcknowledgement>): _143.IncentivizedAcknowledgement;
                    fromAmino(object: _143.IncentivizedAcknowledgementAmino): _143.IncentivizedAcknowledgement;
                    toAmino(message: _143.IncentivizedAcknowledgement): _143.IncentivizedAcknowledgementAmino;
                    fromAminoMsg(object: _143.IncentivizedAcknowledgementAminoMsg): _143.IncentivizedAcknowledgement;
                    toAminoMsg(message: _143.IncentivizedAcknowledgement): _143.IncentivizedAcknowledgementAminoMsg;
                    fromProtoMsg(message: _143.IncentivizedAcknowledgementProtoMsg): _143.IncentivizedAcknowledgement;
                    toProto(message: _143.IncentivizedAcknowledgement): Uint8Array;
                    toProtoMsg(message: _143.IncentivizedAcknowledgement): _143.IncentivizedAcknowledgementProtoMsg;
                };
            };
        }
        namespace interchain_accounts {
            namespace controller {
                const v1: {
                    MsgClientImpl: typeof _364.MsgClientImpl;
                    QueryClientImpl: typeof _357.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        interchainAccount(request: _150.QueryInterchainAccountRequest): Promise<_150.QueryInterchainAccountResponse>;
                        params(request?: _150.QueryParamsRequest): Promise<_150.QueryParamsResponse>;
                    };
                    registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            registerInterchainAccount(value: _151.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            sendTx(value: _151.MsgSendTx): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            registerInterchainAccount(value: _151.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: _151.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: _151.MsgSendTx): {
                                typeUrl: string;
                                value: _151.MsgSendTx;
                            };
                        };
                        fromPartial: {
                            registerInterchainAccount(value: _151.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: _151.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: _151.MsgSendTx): {
                                typeUrl: string;
                                value: _151.MsgSendTx;
                            };
                        };
                    };
                    AminoConverter: {
                        "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount": {
                            aminoType: string;
                            toAmino: (message: _151.MsgRegisterInterchainAccount) => _151.MsgRegisterInterchainAccountAmino;
                            fromAmino: (object: _151.MsgRegisterInterchainAccountAmino) => _151.MsgRegisterInterchainAccount;
                        };
                        "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx": {
                            aminoType: string;
                            toAmino: (message: _151.MsgSendTx) => _151.MsgSendTxAmino;
                            fromAmino: (object: _151.MsgSendTxAmino) => _151.MsgSendTx;
                        };
                    };
                    MsgRegisterInterchainAccount: {
                        typeUrl: string;
                        encode(message: _151.MsgRegisterInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.MsgRegisterInterchainAccount;
                        fromPartial(object: Partial<_151.MsgRegisterInterchainAccount>): _151.MsgRegisterInterchainAccount;
                        fromAmino(object: _151.MsgRegisterInterchainAccountAmino): _151.MsgRegisterInterchainAccount;
                        toAmino(message: _151.MsgRegisterInterchainAccount): _151.MsgRegisterInterchainAccountAmino;
                        fromAminoMsg(object: _151.MsgRegisterInterchainAccountAminoMsg): _151.MsgRegisterInterchainAccount;
                        toAminoMsg(message: _151.MsgRegisterInterchainAccount): _151.MsgRegisterInterchainAccountAminoMsg;
                        fromProtoMsg(message: _151.MsgRegisterInterchainAccountProtoMsg): _151.MsgRegisterInterchainAccount;
                        toProto(message: _151.MsgRegisterInterchainAccount): Uint8Array;
                        toProtoMsg(message: _151.MsgRegisterInterchainAccount): _151.MsgRegisterInterchainAccountProtoMsg;
                    };
                    MsgRegisterInterchainAccountResponse: {
                        typeUrl: string;
                        encode(message: _151.MsgRegisterInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.MsgRegisterInterchainAccountResponse;
                        fromPartial(object: Partial<_151.MsgRegisterInterchainAccountResponse>): _151.MsgRegisterInterchainAccountResponse;
                        fromAmino(object: _151.MsgRegisterInterchainAccountResponseAmino): _151.MsgRegisterInterchainAccountResponse;
                        toAmino(message: _151.MsgRegisterInterchainAccountResponse): _151.MsgRegisterInterchainAccountResponseAmino;
                        fromAminoMsg(object: _151.MsgRegisterInterchainAccountResponseAminoMsg): _151.MsgRegisterInterchainAccountResponse;
                        toAminoMsg(message: _151.MsgRegisterInterchainAccountResponse): _151.MsgRegisterInterchainAccountResponseAminoMsg;
                        fromProtoMsg(message: _151.MsgRegisterInterchainAccountResponseProtoMsg): _151.MsgRegisterInterchainAccountResponse;
                        toProto(message: _151.MsgRegisterInterchainAccountResponse): Uint8Array;
                        toProtoMsg(message: _151.MsgRegisterInterchainAccountResponse): _151.MsgRegisterInterchainAccountResponseProtoMsg;
                    };
                    MsgSendTx: {
                        typeUrl: string;
                        encode(message: _151.MsgSendTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.MsgSendTx;
                        fromPartial(object: Partial<_151.MsgSendTx>): _151.MsgSendTx;
                        fromAmino(object: _151.MsgSendTxAmino): _151.MsgSendTx;
                        toAmino(message: _151.MsgSendTx): _151.MsgSendTxAmino;
                        fromAminoMsg(object: _151.MsgSendTxAminoMsg): _151.MsgSendTx;
                        toAminoMsg(message: _151.MsgSendTx): _151.MsgSendTxAminoMsg;
                        fromProtoMsg(message: _151.MsgSendTxProtoMsg): _151.MsgSendTx;
                        toProto(message: _151.MsgSendTx): Uint8Array;
                        toProtoMsg(message: _151.MsgSendTx): _151.MsgSendTxProtoMsg;
                    };
                    MsgSendTxResponse: {
                        typeUrl: string;
                        encode(message: _151.MsgSendTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.MsgSendTxResponse;
                        fromPartial(object: Partial<_151.MsgSendTxResponse>): _151.MsgSendTxResponse;
                        fromAmino(object: _151.MsgSendTxResponseAmino): _151.MsgSendTxResponse;
                        toAmino(message: _151.MsgSendTxResponse): _151.MsgSendTxResponseAmino;
                        fromAminoMsg(object: _151.MsgSendTxResponseAminoMsg): _151.MsgSendTxResponse;
                        toAminoMsg(message: _151.MsgSendTxResponse): _151.MsgSendTxResponseAminoMsg;
                        fromProtoMsg(message: _151.MsgSendTxResponseProtoMsg): _151.MsgSendTxResponse;
                        toProto(message: _151.MsgSendTxResponse): Uint8Array;
                        toProtoMsg(message: _151.MsgSendTxResponse): _151.MsgSendTxResponseProtoMsg;
                    };
                    QueryInterchainAccountRequest: {
                        typeUrl: string;
                        encode(message: _150.QueryInterchainAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.QueryInterchainAccountRequest;
                        fromPartial(object: Partial<_150.QueryInterchainAccountRequest>): _150.QueryInterchainAccountRequest;
                        fromAmino(object: _150.QueryInterchainAccountRequestAmino): _150.QueryInterchainAccountRequest;
                        toAmino(message: _150.QueryInterchainAccountRequest): _150.QueryInterchainAccountRequestAmino;
                        fromAminoMsg(object: _150.QueryInterchainAccountRequestAminoMsg): _150.QueryInterchainAccountRequest;
                        toAminoMsg(message: _150.QueryInterchainAccountRequest): _150.QueryInterchainAccountRequestAminoMsg;
                        fromProtoMsg(message: _150.QueryInterchainAccountRequestProtoMsg): _150.QueryInterchainAccountRequest;
                        toProto(message: _150.QueryInterchainAccountRequest): Uint8Array;
                        toProtoMsg(message: _150.QueryInterchainAccountRequest): _150.QueryInterchainAccountRequestProtoMsg;
                    };
                    QueryInterchainAccountResponse: {
                        typeUrl: string;
                        encode(message: _150.QueryInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.QueryInterchainAccountResponse;
                        fromPartial(object: Partial<_150.QueryInterchainAccountResponse>): _150.QueryInterchainAccountResponse;
                        fromAmino(object: _150.QueryInterchainAccountResponseAmino): _150.QueryInterchainAccountResponse;
                        toAmino(message: _150.QueryInterchainAccountResponse): _150.QueryInterchainAccountResponseAmino;
                        fromAminoMsg(object: _150.QueryInterchainAccountResponseAminoMsg): _150.QueryInterchainAccountResponse;
                        toAminoMsg(message: _150.QueryInterchainAccountResponse): _150.QueryInterchainAccountResponseAminoMsg;
                        fromProtoMsg(message: _150.QueryInterchainAccountResponseProtoMsg): _150.QueryInterchainAccountResponse;
                        toProto(message: _150.QueryInterchainAccountResponse): Uint8Array;
                        toProtoMsg(message: _150.QueryInterchainAccountResponse): _150.QueryInterchainAccountResponseProtoMsg;
                    };
                    QueryParamsRequest: {
                        typeUrl: string;
                        encode(_: _150.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.QueryParamsRequest;
                        fromPartial(_: Partial<_150.QueryParamsRequest>): _150.QueryParamsRequest;
                        fromAmino(_: _150.QueryParamsRequestAmino): _150.QueryParamsRequest;
                        toAmino(_: _150.QueryParamsRequest): _150.QueryParamsRequestAmino;
                        fromAminoMsg(object: _150.QueryParamsRequestAminoMsg): _150.QueryParamsRequest;
                        toAminoMsg(message: _150.QueryParamsRequest): _150.QueryParamsRequestAminoMsg;
                        fromProtoMsg(message: _150.QueryParamsRequestProtoMsg): _150.QueryParamsRequest;
                        toProto(message: _150.QueryParamsRequest): Uint8Array;
                        toProtoMsg(message: _150.QueryParamsRequest): _150.QueryParamsRequestProtoMsg;
                    };
                    QueryParamsResponse: {
                        typeUrl: string;
                        encode(message: _150.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.QueryParamsResponse;
                        fromPartial(object: Partial<_150.QueryParamsResponse>): _150.QueryParamsResponse;
                        fromAmino(object: _150.QueryParamsResponseAmino): _150.QueryParamsResponse;
                        toAmino(message: _150.QueryParamsResponse): _150.QueryParamsResponseAmino;
                        fromAminoMsg(object: _150.QueryParamsResponseAminoMsg): _150.QueryParamsResponse;
                        toAminoMsg(message: _150.QueryParamsResponse): _150.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _150.QueryParamsResponseProtoMsg): _150.QueryParamsResponse;
                        toProto(message: _150.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _150.QueryParamsResponse): _150.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        typeUrl: string;
                        encode(message: _149.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.Params;
                        fromPartial(object: Partial<_149.Params>): _149.Params;
                        fromAmino(object: _149.ParamsAmino): _149.Params;
                        toAmino(message: _149.Params): _149.ParamsAmino;
                        fromAminoMsg(object: _149.ParamsAminoMsg): _149.Params;
                        toAminoMsg(message: _149.Params): _149.ParamsAminoMsg;
                        fromProtoMsg(message: _149.ParamsProtoMsg): _149.Params;
                        toProto(message: _149.Params): Uint8Array;
                        toProtoMsg(message: _149.Params): _149.ParamsProtoMsg;
                    };
                };
            }
            namespace genesis {
                const v1: {
                    GenesisState: {
                        typeUrl: string;
                        encode(message: _152.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.GenesisState;
                        fromPartial(object: Partial<_152.GenesisState>): _152.GenesisState;
                        fromAmino(object: _152.GenesisStateAmino): _152.GenesisState;
                        toAmino(message: _152.GenesisState): _152.GenesisStateAmino;
                        fromAminoMsg(object: _152.GenesisStateAminoMsg): _152.GenesisState;
                        toAminoMsg(message: _152.GenesisState): _152.GenesisStateAminoMsg;
                        fromProtoMsg(message: _152.GenesisStateProtoMsg): _152.GenesisState;
                        toProto(message: _152.GenesisState): Uint8Array;
                        toProtoMsg(message: _152.GenesisState): _152.GenesisStateProtoMsg;
                    };
                    ControllerGenesisState: {
                        typeUrl: string;
                        encode(message: _152.ControllerGenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.ControllerGenesisState;
                        fromPartial(object: Partial<_152.ControllerGenesisState>): _152.ControllerGenesisState;
                        fromAmino(object: _152.ControllerGenesisStateAmino): _152.ControllerGenesisState;
                        toAmino(message: _152.ControllerGenesisState): _152.ControllerGenesisStateAmino;
                        fromAminoMsg(object: _152.ControllerGenesisStateAminoMsg): _152.ControllerGenesisState;
                        toAminoMsg(message: _152.ControllerGenesisState): _152.ControllerGenesisStateAminoMsg;
                        fromProtoMsg(message: _152.ControllerGenesisStateProtoMsg): _152.ControllerGenesisState;
                        toProto(message: _152.ControllerGenesisState): Uint8Array;
                        toProtoMsg(message: _152.ControllerGenesisState): _152.ControllerGenesisStateProtoMsg;
                    };
                    HostGenesisState: {
                        typeUrl: string;
                        encode(message: _152.HostGenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.HostGenesisState;
                        fromPartial(object: Partial<_152.HostGenesisState>): _152.HostGenesisState;
                        fromAmino(object: _152.HostGenesisStateAmino): _152.HostGenesisState;
                        toAmino(message: _152.HostGenesisState): _152.HostGenesisStateAmino;
                        fromAminoMsg(object: _152.HostGenesisStateAminoMsg): _152.HostGenesisState;
                        toAminoMsg(message: _152.HostGenesisState): _152.HostGenesisStateAminoMsg;
                        fromProtoMsg(message: _152.HostGenesisStateProtoMsg): _152.HostGenesisState;
                        toProto(message: _152.HostGenesisState): Uint8Array;
                        toProtoMsg(message: _152.HostGenesisState): _152.HostGenesisStateProtoMsg;
                    };
                    ActiveChannel: {
                        typeUrl: string;
                        encode(message: _152.ActiveChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.ActiveChannel;
                        fromPartial(object: Partial<_152.ActiveChannel>): _152.ActiveChannel;
                        fromAmino(object: _152.ActiveChannelAmino): _152.ActiveChannel;
                        toAmino(message: _152.ActiveChannel): _152.ActiveChannelAmino;
                        fromAminoMsg(object: _152.ActiveChannelAminoMsg): _152.ActiveChannel;
                        toAminoMsg(message: _152.ActiveChannel): _152.ActiveChannelAminoMsg;
                        fromProtoMsg(message: _152.ActiveChannelProtoMsg): _152.ActiveChannel;
                        toProto(message: _152.ActiveChannel): Uint8Array;
                        toProtoMsg(message: _152.ActiveChannel): _152.ActiveChannelProtoMsg;
                    };
                    RegisteredInterchainAccount: {
                        typeUrl: string;
                        encode(message: _152.RegisteredInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.RegisteredInterchainAccount;
                        fromPartial(object: Partial<_152.RegisteredInterchainAccount>): _152.RegisteredInterchainAccount;
                        fromAmino(object: _152.RegisteredInterchainAccountAmino): _152.RegisteredInterchainAccount;
                        toAmino(message: _152.RegisteredInterchainAccount): _152.RegisteredInterchainAccountAmino;
                        fromAminoMsg(object: _152.RegisteredInterchainAccountAminoMsg): _152.RegisteredInterchainAccount;
                        toAminoMsg(message: _152.RegisteredInterchainAccount): _152.RegisteredInterchainAccountAminoMsg;
                        fromProtoMsg(message: _152.RegisteredInterchainAccountProtoMsg): _152.RegisteredInterchainAccount;
                        toProto(message: _152.RegisteredInterchainAccount): Uint8Array;
                        toProtoMsg(message: _152.RegisteredInterchainAccount): _152.RegisteredInterchainAccountProtoMsg;
                    };
                };
            }
            namespace host {
                const v1: {
                    MsgClientImpl: typeof _365.MsgClientImpl;
                    QueryClientImpl: typeof _358.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        params(request?: _154.QueryParamsRequest): Promise<_154.QueryParamsResponse>;
                    };
                    registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            moduleQuerySafe(value: _155.MsgModuleQuerySafe): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            moduleQuerySafe(value: _155.MsgModuleQuerySafe): {
                                typeUrl: string;
                                value: _155.MsgModuleQuerySafe;
                            };
                        };
                        fromPartial: {
                            moduleQuerySafe(value: _155.MsgModuleQuerySafe): {
                                typeUrl: string;
                                value: _155.MsgModuleQuerySafe;
                            };
                        };
                    };
                    AminoConverter: {
                        "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafe": {
                            aminoType: string;
                            toAmino: (message: _155.MsgModuleQuerySafe) => _155.MsgModuleQuerySafeAmino;
                            fromAmino: (object: _155.MsgModuleQuerySafeAmino) => _155.MsgModuleQuerySafe;
                        };
                    };
                    MsgModuleQuerySafe: {
                        typeUrl: string;
                        encode(message: _155.MsgModuleQuerySafe, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.MsgModuleQuerySafe;
                        fromPartial(object: Partial<_155.MsgModuleQuerySafe>): _155.MsgModuleQuerySafe;
                        fromAmino(object: _155.MsgModuleQuerySafeAmino): _155.MsgModuleQuerySafe;
                        toAmino(message: _155.MsgModuleQuerySafe): _155.MsgModuleQuerySafeAmino;
                        fromAminoMsg(object: _155.MsgModuleQuerySafeAminoMsg): _155.MsgModuleQuerySafe;
                        toAminoMsg(message: _155.MsgModuleQuerySafe): _155.MsgModuleQuerySafeAminoMsg;
                        fromProtoMsg(message: _155.MsgModuleQuerySafeProtoMsg): _155.MsgModuleQuerySafe;
                        toProto(message: _155.MsgModuleQuerySafe): Uint8Array;
                        toProtoMsg(message: _155.MsgModuleQuerySafe): _155.MsgModuleQuerySafeProtoMsg;
                    };
                    MsgModuleQuerySafeResponse: {
                        typeUrl: string;
                        encode(message: _155.MsgModuleQuerySafeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.MsgModuleQuerySafeResponse;
                        fromPartial(object: Partial<_155.MsgModuleQuerySafeResponse>): _155.MsgModuleQuerySafeResponse;
                        fromAmino(object: _155.MsgModuleQuerySafeResponseAmino): _155.MsgModuleQuerySafeResponse;
                        toAmino(message: _155.MsgModuleQuerySafeResponse): _155.MsgModuleQuerySafeResponseAmino;
                        fromAminoMsg(object: _155.MsgModuleQuerySafeResponseAminoMsg): _155.MsgModuleQuerySafeResponse;
                        toAminoMsg(message: _155.MsgModuleQuerySafeResponse): _155.MsgModuleQuerySafeResponseAminoMsg;
                        fromProtoMsg(message: _155.MsgModuleQuerySafeResponseProtoMsg): _155.MsgModuleQuerySafeResponse;
                        toProto(message: _155.MsgModuleQuerySafeResponse): Uint8Array;
                        toProtoMsg(message: _155.MsgModuleQuerySafeResponse): _155.MsgModuleQuerySafeResponseProtoMsg;
                    };
                    QueryParamsRequest: {
                        typeUrl: string;
                        encode(_: _154.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.QueryParamsRequest;
                        fromPartial(_: Partial<_154.QueryParamsRequest>): _154.QueryParamsRequest;
                        fromAmino(_: _154.QueryParamsRequestAmino): _154.QueryParamsRequest;
                        toAmino(_: _154.QueryParamsRequest): _154.QueryParamsRequestAmino;
                        fromAminoMsg(object: _154.QueryParamsRequestAminoMsg): _154.QueryParamsRequest;
                        toAminoMsg(message: _154.QueryParamsRequest): _154.QueryParamsRequestAminoMsg;
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
                        toAminoMsg(message: _154.QueryParamsResponse): _154.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _154.QueryParamsResponseProtoMsg): _154.QueryParamsResponse;
                        toProto(message: _154.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _154.QueryParamsResponse): _154.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        typeUrl: string;
                        encode(message: _153.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.Params;
                        fromPartial(object: Partial<_153.Params>): _153.Params;
                        fromAmino(object: _153.ParamsAmino): _153.Params;
                        toAmino(message: _153.Params): _153.ParamsAmino;
                        fromAminoMsg(object: _153.ParamsAminoMsg): _153.Params;
                        toAminoMsg(message: _153.Params): _153.ParamsAminoMsg;
                        fromProtoMsg(message: _153.ParamsProtoMsg): _153.Params;
                        toProto(message: _153.Params): Uint8Array;
                        toProtoMsg(message: _153.Params): _153.ParamsProtoMsg;
                    };
                    QueryRequest: {
                        typeUrl: string;
                        encode(message: _153.QueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.QueryRequest;
                        fromPartial(object: Partial<_153.QueryRequest>): _153.QueryRequest;
                        fromAmino(object: _153.QueryRequestAmino): _153.QueryRequest;
                        toAmino(message: _153.QueryRequest): _153.QueryRequestAmino;
                        fromAminoMsg(object: _153.QueryRequestAminoMsg): _153.QueryRequest;
                        toAminoMsg(message: _153.QueryRequest): _153.QueryRequestAminoMsg;
                        fromProtoMsg(message: _153.QueryRequestProtoMsg): _153.QueryRequest;
                        toProto(message: _153.QueryRequest): Uint8Array;
                        toProtoMsg(message: _153.QueryRequest): _153.QueryRequestProtoMsg;
                    };
                };
            }
            const v1: {
                typeFromJSON(object: any): _158.Type;
                typeToJSON(object: _158.Type): string;
                Type: typeof _158.Type;
                TypeSDKType: typeof _158.Type;
                TypeAmino: typeof _158.Type;
                InterchainAccountPacketData: {
                    typeUrl: string;
                    encode(message: _158.InterchainAccountPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.InterchainAccountPacketData;
                    fromPartial(object: Partial<_158.InterchainAccountPacketData>): _158.InterchainAccountPacketData;
                    fromAmino(object: _158.InterchainAccountPacketDataAmino): _158.InterchainAccountPacketData;
                    toAmino(message: _158.InterchainAccountPacketData): _158.InterchainAccountPacketDataAmino;
                    fromAminoMsg(object: _158.InterchainAccountPacketDataAminoMsg): _158.InterchainAccountPacketData;
                    toAminoMsg(message: _158.InterchainAccountPacketData): _158.InterchainAccountPacketDataAminoMsg;
                    fromProtoMsg(message: _158.InterchainAccountPacketDataProtoMsg): _158.InterchainAccountPacketData;
                    toProto(message: _158.InterchainAccountPacketData): Uint8Array;
                    toProtoMsg(message: _158.InterchainAccountPacketData): _158.InterchainAccountPacketDataProtoMsg;
                };
                CosmosTx: {
                    typeUrl: string;
                    encode(message: _158.CosmosTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.CosmosTx;
                    fromPartial(object: Partial<_158.CosmosTx>): _158.CosmosTx;
                    fromAmino(object: _158.CosmosTxAmino): _158.CosmosTx;
                    toAmino(message: _158.CosmosTx): _158.CosmosTxAmino;
                    fromAminoMsg(object: _158.CosmosTxAminoMsg): _158.CosmosTx;
                    toAminoMsg(message: _158.CosmosTx): _158.CosmosTxAminoMsg;
                    fromProtoMsg(message: _158.CosmosTxProtoMsg): _158.CosmosTx;
                    toProto(message: _158.CosmosTx): Uint8Array;
                    toProtoMsg(message: _158.CosmosTx): _158.CosmosTxProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _157.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _157.Metadata;
                    fromPartial(object: Partial<_157.Metadata>): _157.Metadata;
                    fromAmino(object: _157.MetadataAmino): _157.Metadata;
                    toAmino(message: _157.Metadata): _157.MetadataAmino;
                    fromAminoMsg(object: _157.MetadataAminoMsg): _157.Metadata;
                    toAminoMsg(message: _157.Metadata): _157.MetadataAminoMsg;
                    fromProtoMsg(message: _157.MetadataProtoMsg): _157.Metadata;
                    toProto(message: _157.Metadata): Uint8Array;
                    toProtoMsg(message: _157.Metadata): _157.MetadataProtoMsg;
                };
                InterchainAccount: {
                    typeUrl: string;
                    encode(message: _156.InterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _156.InterchainAccount;
                    fromPartial(object: Partial<_156.InterchainAccount>): _156.InterchainAccount;
                    fromAmino(object: _156.InterchainAccountAmino): _156.InterchainAccount;
                    toAmino(message: _156.InterchainAccount): _156.InterchainAccountAmino;
                    fromAminoMsg(object: _156.InterchainAccountAminoMsg): _156.InterchainAccount;
                    toAminoMsg(message: _156.InterchainAccount): _156.InterchainAccountAminoMsg;
                    fromProtoMsg(message: _156.InterchainAccountProtoMsg): _156.InterchainAccount;
                    toProto(message: _156.InterchainAccount): Uint8Array;
                    toProtoMsg(message: _156.InterchainAccount): _156.InterchainAccountProtoMsg;
                };
            };
        }
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _366.MsgClientImpl;
                QueryClientImpl: typeof _359.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTraces(request?: _161.QueryDenomTracesRequest): Promise<_161.QueryDenomTracesResponse>;
                    denomTrace(request: _161.QueryDenomTraceRequest): Promise<_161.QueryDenomTraceResponse>;
                    params(request?: _161.QueryParamsRequest): Promise<_161.QueryParamsResponse>;
                    denomHash(request: _161.QueryDenomHashRequest): Promise<_161.QueryDenomHashResponse>;
                    escrowAddress(request: _161.QueryEscrowAddressRequest): Promise<_161.QueryEscrowAddressResponse>;
                    totalEscrowForDenom(request: _161.QueryTotalEscrowForDenomRequest): Promise<_161.QueryTotalEscrowForDenomResponse>;
                };
                registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _163.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _163.MsgTransfer): {
                            typeUrl: string;
                            value: _163.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _163.MsgTransfer): {
                            typeUrl: string;
                            value: _163.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _163.MsgTransfer) => _163.MsgTransferAmino;
                        fromAmino: (object: _163.MsgTransferAmino) => _163.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    typeUrl: string;
                    encode(message: _163.MsgTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.MsgTransfer;
                    fromPartial(object: Partial<_163.MsgTransfer>): _163.MsgTransfer;
                    fromAmino(object: _163.MsgTransferAmino): _163.MsgTransfer;
                    toAmino(message: _163.MsgTransfer): _163.MsgTransferAmino;
                    fromAminoMsg(object: _163.MsgTransferAminoMsg): _163.MsgTransfer;
                    toAminoMsg(message: _163.MsgTransfer): _163.MsgTransferAminoMsg;
                    fromProtoMsg(message: _163.MsgTransferProtoMsg): _163.MsgTransfer;
                    toProto(message: _163.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _163.MsgTransfer): _163.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    typeUrl: string;
                    encode(message: _163.MsgTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.MsgTransferResponse;
                    fromPartial(object: Partial<_163.MsgTransferResponse>): _163.MsgTransferResponse;
                    fromAmino(object: _163.MsgTransferResponseAmino): _163.MsgTransferResponse;
                    toAmino(message: _163.MsgTransferResponse): _163.MsgTransferResponseAmino;
                    fromAminoMsg(object: _163.MsgTransferResponseAminoMsg): _163.MsgTransferResponse;
                    toAminoMsg(message: _163.MsgTransferResponse): _163.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _163.MsgTransferResponseProtoMsg): _163.MsgTransferResponse;
                    toProto(message: _163.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _163.MsgTransferResponse): _163.MsgTransferResponseProtoMsg;
                };
                DenomTrace: {
                    typeUrl: string;
                    encode(message: _162.DenomTrace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.DenomTrace;
                    fromPartial(object: Partial<_162.DenomTrace>): _162.DenomTrace;
                    fromAmino(object: _162.DenomTraceAmino): _162.DenomTrace;
                    toAmino(message: _162.DenomTrace): _162.DenomTraceAmino;
                    fromAminoMsg(object: _162.DenomTraceAminoMsg): _162.DenomTrace;
                    toAminoMsg(message: _162.DenomTrace): _162.DenomTraceAminoMsg;
                    fromProtoMsg(message: _162.DenomTraceProtoMsg): _162.DenomTrace;
                    toProto(message: _162.DenomTrace): Uint8Array;
                    toProtoMsg(message: _162.DenomTrace): _162.DenomTraceProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _162.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.Params;
                    fromPartial(object: Partial<_162.Params>): _162.Params;
                    fromAmino(object: _162.ParamsAmino): _162.Params;
                    toAmino(message: _162.Params): _162.ParamsAmino;
                    fromAminoMsg(object: _162.ParamsAminoMsg): _162.Params;
                    toAminoMsg(message: _162.Params): _162.ParamsAminoMsg;
                    fromProtoMsg(message: _162.ParamsProtoMsg): _162.Params;
                    toProto(message: _162.Params): Uint8Array;
                    toProtoMsg(message: _162.Params): _162.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    encode(message: _161.QueryDenomTraceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.QueryDenomTraceRequest;
                    fromPartial(object: Partial<_161.QueryDenomTraceRequest>): _161.QueryDenomTraceRequest;
                    fromAmino(object: _161.QueryDenomTraceRequestAmino): _161.QueryDenomTraceRequest;
                    toAmino(message: _161.QueryDenomTraceRequest): _161.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _161.QueryDenomTraceRequestAminoMsg): _161.QueryDenomTraceRequest;
                    toAminoMsg(message: _161.QueryDenomTraceRequest): _161.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _161.QueryDenomTraceRequestProtoMsg): _161.QueryDenomTraceRequest;
                    toProto(message: _161.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _161.QueryDenomTraceRequest): _161.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    encode(message: _161.QueryDenomTraceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.QueryDenomTraceResponse;
                    fromPartial(object: Partial<_161.QueryDenomTraceResponse>): _161.QueryDenomTraceResponse;
                    fromAmino(object: _161.QueryDenomTraceResponseAmino): _161.QueryDenomTraceResponse;
                    toAmino(message: _161.QueryDenomTraceResponse): _161.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _161.QueryDenomTraceResponseAminoMsg): _161.QueryDenomTraceResponse;
                    toAminoMsg(message: _161.QueryDenomTraceResponse): _161.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _161.QueryDenomTraceResponseProtoMsg): _161.QueryDenomTraceResponse;
                    toProto(message: _161.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _161.QueryDenomTraceResponse): _161.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    encode(message: _161.QueryDenomTracesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.QueryDenomTracesRequest;
                    fromPartial(object: Partial<_161.QueryDenomTracesRequest>): _161.QueryDenomTracesRequest;
                    fromAmino(object: _161.QueryDenomTracesRequestAmino): _161.QueryDenomTracesRequest;
                    toAmino(message: _161.QueryDenomTracesRequest): _161.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _161.QueryDenomTracesRequestAminoMsg): _161.QueryDenomTracesRequest;
                    toAminoMsg(message: _161.QueryDenomTracesRequest): _161.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _161.QueryDenomTracesRequestProtoMsg): _161.QueryDenomTracesRequest;
                    toProto(message: _161.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _161.QueryDenomTracesRequest): _161.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    encode(message: _161.QueryDenomTracesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.QueryDenomTracesResponse;
                    fromPartial(object: Partial<_161.QueryDenomTracesResponse>): _161.QueryDenomTracesResponse;
                    fromAmino(object: _161.QueryDenomTracesResponseAmino): _161.QueryDenomTracesResponse;
                    toAmino(message: _161.QueryDenomTracesResponse): _161.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _161.QueryDenomTracesResponseAminoMsg): _161.QueryDenomTracesResponse;
                    toAminoMsg(message: _161.QueryDenomTracesResponse): _161.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _161.QueryDenomTracesResponseProtoMsg): _161.QueryDenomTracesResponse;
                    toProto(message: _161.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _161.QueryDenomTracesResponse): _161.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    encode(_: _161.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.QueryParamsRequest;
                    fromPartial(_: Partial<_161.QueryParamsRequest>): _161.QueryParamsRequest;
                    fromAmino(_: _161.QueryParamsRequestAmino): _161.QueryParamsRequest;
                    toAmino(_: _161.QueryParamsRequest): _161.QueryParamsRequestAmino;
                    fromAminoMsg(object: _161.QueryParamsRequestAminoMsg): _161.QueryParamsRequest;
                    toAminoMsg(message: _161.QueryParamsRequest): _161.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _161.QueryParamsRequestProtoMsg): _161.QueryParamsRequest;
                    toProto(message: _161.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _161.QueryParamsRequest): _161.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    encode(message: _161.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.QueryParamsResponse;
                    fromPartial(object: Partial<_161.QueryParamsResponse>): _161.QueryParamsResponse;
                    fromAmino(object: _161.QueryParamsResponseAmino): _161.QueryParamsResponse;
                    toAmino(message: _161.QueryParamsResponse): _161.QueryParamsResponseAmino;
                    fromAminoMsg(object: _161.QueryParamsResponseAminoMsg): _161.QueryParamsResponse;
                    toAminoMsg(message: _161.QueryParamsResponse): _161.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _161.QueryParamsResponseProtoMsg): _161.QueryParamsResponse;
                    toProto(message: _161.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _161.QueryParamsResponse): _161.QueryParamsResponseProtoMsg;
                };
                QueryDenomHashRequest: {
                    typeUrl: string;
                    encode(message: _161.QueryDenomHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.QueryDenomHashRequest;
                    fromPartial(object: Partial<_161.QueryDenomHashRequest>): _161.QueryDenomHashRequest;
                    fromAmino(object: _161.QueryDenomHashRequestAmino): _161.QueryDenomHashRequest;
                    toAmino(message: _161.QueryDenomHashRequest): _161.QueryDenomHashRequestAmino;
                    fromAminoMsg(object: _161.QueryDenomHashRequestAminoMsg): _161.QueryDenomHashRequest;
                    toAminoMsg(message: _161.QueryDenomHashRequest): _161.QueryDenomHashRequestAminoMsg;
                    fromProtoMsg(message: _161.QueryDenomHashRequestProtoMsg): _161.QueryDenomHashRequest;
                    toProto(message: _161.QueryDenomHashRequest): Uint8Array;
                    toProtoMsg(message: _161.QueryDenomHashRequest): _161.QueryDenomHashRequestProtoMsg;
                };
                QueryDenomHashResponse: {
                    typeUrl: string;
                    encode(message: _161.QueryDenomHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.QueryDenomHashResponse;
                    fromPartial(object: Partial<_161.QueryDenomHashResponse>): _161.QueryDenomHashResponse;
                    fromAmino(object: _161.QueryDenomHashResponseAmino): _161.QueryDenomHashResponse;
                    toAmino(message: _161.QueryDenomHashResponse): _161.QueryDenomHashResponseAmino;
                    fromAminoMsg(object: _161.QueryDenomHashResponseAminoMsg): _161.QueryDenomHashResponse;
                    toAminoMsg(message: _161.QueryDenomHashResponse): _161.QueryDenomHashResponseAminoMsg;
                    fromProtoMsg(message: _161.QueryDenomHashResponseProtoMsg): _161.QueryDenomHashResponse;
                    toProto(message: _161.QueryDenomHashResponse): Uint8Array;
                    toProtoMsg(message: _161.QueryDenomHashResponse): _161.QueryDenomHashResponseProtoMsg;
                };
                QueryEscrowAddressRequest: {
                    typeUrl: string;
                    encode(message: _161.QueryEscrowAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.QueryEscrowAddressRequest;
                    fromPartial(object: Partial<_161.QueryEscrowAddressRequest>): _161.QueryEscrowAddressRequest;
                    fromAmino(object: _161.QueryEscrowAddressRequestAmino): _161.QueryEscrowAddressRequest;
                    toAmino(message: _161.QueryEscrowAddressRequest): _161.QueryEscrowAddressRequestAmino;
                    fromAminoMsg(object: _161.QueryEscrowAddressRequestAminoMsg): _161.QueryEscrowAddressRequest;
                    toAminoMsg(message: _161.QueryEscrowAddressRequest): _161.QueryEscrowAddressRequestAminoMsg;
                    fromProtoMsg(message: _161.QueryEscrowAddressRequestProtoMsg): _161.QueryEscrowAddressRequest;
                    toProto(message: _161.QueryEscrowAddressRequest): Uint8Array;
                    toProtoMsg(message: _161.QueryEscrowAddressRequest): _161.QueryEscrowAddressRequestProtoMsg;
                };
                QueryEscrowAddressResponse: {
                    typeUrl: string;
                    encode(message: _161.QueryEscrowAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.QueryEscrowAddressResponse;
                    fromPartial(object: Partial<_161.QueryEscrowAddressResponse>): _161.QueryEscrowAddressResponse;
                    fromAmino(object: _161.QueryEscrowAddressResponseAmino): _161.QueryEscrowAddressResponse;
                    toAmino(message: _161.QueryEscrowAddressResponse): _161.QueryEscrowAddressResponseAmino;
                    fromAminoMsg(object: _161.QueryEscrowAddressResponseAminoMsg): _161.QueryEscrowAddressResponse;
                    toAminoMsg(message: _161.QueryEscrowAddressResponse): _161.QueryEscrowAddressResponseAminoMsg;
                    fromProtoMsg(message: _161.QueryEscrowAddressResponseProtoMsg): _161.QueryEscrowAddressResponse;
                    toProto(message: _161.QueryEscrowAddressResponse): Uint8Array;
                    toProtoMsg(message: _161.QueryEscrowAddressResponse): _161.QueryEscrowAddressResponseProtoMsg;
                };
                QueryTotalEscrowForDenomRequest: {
                    typeUrl: string;
                    encode(message: _161.QueryTotalEscrowForDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.QueryTotalEscrowForDenomRequest;
                    fromPartial(object: Partial<_161.QueryTotalEscrowForDenomRequest>): _161.QueryTotalEscrowForDenomRequest;
                    fromAmino(object: _161.QueryTotalEscrowForDenomRequestAmino): _161.QueryTotalEscrowForDenomRequest;
                    toAmino(message: _161.QueryTotalEscrowForDenomRequest): _161.QueryTotalEscrowForDenomRequestAmino;
                    fromAminoMsg(object: _161.QueryTotalEscrowForDenomRequestAminoMsg): _161.QueryTotalEscrowForDenomRequest;
                    toAminoMsg(message: _161.QueryTotalEscrowForDenomRequest): _161.QueryTotalEscrowForDenomRequestAminoMsg;
                    fromProtoMsg(message: _161.QueryTotalEscrowForDenomRequestProtoMsg): _161.QueryTotalEscrowForDenomRequest;
                    toProto(message: _161.QueryTotalEscrowForDenomRequest): Uint8Array;
                    toProtoMsg(message: _161.QueryTotalEscrowForDenomRequest): _161.QueryTotalEscrowForDenomRequestProtoMsg;
                };
                QueryTotalEscrowForDenomResponse: {
                    typeUrl: string;
                    encode(message: _161.QueryTotalEscrowForDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.QueryTotalEscrowForDenomResponse;
                    fromPartial(object: Partial<_161.QueryTotalEscrowForDenomResponse>): _161.QueryTotalEscrowForDenomResponse;
                    fromAmino(object: _161.QueryTotalEscrowForDenomResponseAmino): _161.QueryTotalEscrowForDenomResponse;
                    toAmino(message: _161.QueryTotalEscrowForDenomResponse): _161.QueryTotalEscrowForDenomResponseAmino;
                    fromAminoMsg(object: _161.QueryTotalEscrowForDenomResponseAminoMsg): _161.QueryTotalEscrowForDenomResponse;
                    toAminoMsg(message: _161.QueryTotalEscrowForDenomResponse): _161.QueryTotalEscrowForDenomResponseAminoMsg;
                    fromProtoMsg(message: _161.QueryTotalEscrowForDenomResponseProtoMsg): _161.QueryTotalEscrowForDenomResponse;
                    toProto(message: _161.QueryTotalEscrowForDenomResponse): Uint8Array;
                    toProtoMsg(message: _161.QueryTotalEscrowForDenomResponse): _161.QueryTotalEscrowForDenomResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _160.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.GenesisState;
                    fromPartial(object: Partial<_160.GenesisState>): _160.GenesisState;
                    fromAmino(object: _160.GenesisStateAmino): _160.GenesisState;
                    toAmino(message: _160.GenesisState): _160.GenesisStateAmino;
                    fromAminoMsg(object: _160.GenesisStateAminoMsg): _160.GenesisState;
                    toAminoMsg(message: _160.GenesisState): _160.GenesisStateAminoMsg;
                    fromProtoMsg(message: _160.GenesisStateProtoMsg): _160.GenesisState;
                    toProto(message: _160.GenesisState): Uint8Array;
                    toProtoMsg(message: _160.GenesisState): _160.GenesisStateProtoMsg;
                };
                Allocation: {
                    typeUrl: string;
                    encode(message: _159.Allocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.Allocation;
                    fromPartial(object: Partial<_159.Allocation>): _159.Allocation;
                    fromAmino(object: _159.AllocationAmino): _159.Allocation;
                    toAmino(message: _159.Allocation): _159.AllocationAmino;
                    fromAminoMsg(object: _159.AllocationAminoMsg): _159.Allocation;
                    toAminoMsg(message: _159.Allocation): _159.AllocationAminoMsg;
                    fromProtoMsg(message: _159.AllocationProtoMsg): _159.Allocation;
                    toProto(message: _159.Allocation): Uint8Array;
                    toProtoMsg(message: _159.Allocation): _159.AllocationProtoMsg;
                };
                TransferAuthorization: {
                    typeUrl: string;
                    encode(message: _159.TransferAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.TransferAuthorization;
                    fromPartial(object: Partial<_159.TransferAuthorization>): _159.TransferAuthorization;
                    fromAmino(object: _159.TransferAuthorizationAmino): _159.TransferAuthorization;
                    toAmino(message: _159.TransferAuthorization): _159.TransferAuthorizationAmino;
                    fromAminoMsg(object: _159.TransferAuthorizationAminoMsg): _159.TransferAuthorization;
                    toAminoMsg(message: _159.TransferAuthorization): _159.TransferAuthorizationAminoMsg;
                    fromProtoMsg(message: _159.TransferAuthorizationProtoMsg): _159.TransferAuthorization;
                    toProto(message: _159.TransferAuthorization): Uint8Array;
                    toProtoMsg(message: _159.TransferAuthorization): _159.TransferAuthorizationProtoMsg;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    typeUrl: string;
                    encode(message: _164.FungibleTokenPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.FungibleTokenPacketData;
                    fromPartial(object: Partial<_164.FungibleTokenPacketData>): _164.FungibleTokenPacketData;
                    fromAmino(object: _164.FungibleTokenPacketDataAmino): _164.FungibleTokenPacketData;
                    toAmino(message: _164.FungibleTokenPacketData): _164.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _164.FungibleTokenPacketDataAminoMsg): _164.FungibleTokenPacketData;
                    toAminoMsg(message: _164.FungibleTokenPacketData): _164.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _164.FungibleTokenPacketDataProtoMsg): _164.FungibleTokenPacketData;
                    toProto(message: _164.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _164.FungibleTokenPacketData): _164.FungibleTokenPacketDataProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _367.MsgClientImpl;
                QueryClientImpl: typeof _360.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _167.QueryChannelRequest): Promise<_167.QueryChannelResponse>;
                    channels(request?: _167.QueryChannelsRequest): Promise<_167.QueryChannelsResponse>;
                    connectionChannels(request: _167.QueryConnectionChannelsRequest): Promise<_167.QueryConnectionChannelsResponse>;
                    channelClientState(request: _167.QueryChannelClientStateRequest): Promise<_167.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _167.QueryChannelConsensusStateRequest): Promise<_167.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _167.QueryPacketCommitmentRequest): Promise<_167.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _167.QueryPacketCommitmentsRequest): Promise<_167.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _167.QueryPacketReceiptRequest): Promise<_167.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _167.QueryPacketAcknowledgementRequest): Promise<_167.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _167.QueryPacketAcknowledgementsRequest): Promise<_167.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _167.QueryUnreceivedPacketsRequest): Promise<_167.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _167.QueryUnreceivedAcksRequest): Promise<_167.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _167.QueryNextSequenceReceiveRequest): Promise<_167.QueryNextSequenceReceiveResponse>;
                };
                registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _168.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _168.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _168.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _168.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _168.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _168.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _168.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _168.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _168.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _168.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _168.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _168.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _168.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _168.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _168.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _168.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _168.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _168.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _168.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _168.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _168.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _168.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _168.MsgRecvPacket): {
                            typeUrl: string;
                            value: _168.MsgRecvPacket;
                        };
                        timeout(value: _168.MsgTimeout): {
                            typeUrl: string;
                            value: _168.MsgTimeout;
                        };
                        timeoutOnClose(value: _168.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _168.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _168.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _168.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _168.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _168.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _168.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _168.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _168.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _168.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _168.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _168.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _168.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _168.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _168.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _168.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _168.MsgRecvPacket): {
                            typeUrl: string;
                            value: _168.MsgRecvPacket;
                        };
                        timeout(value: _168.MsgTimeout): {
                            typeUrl: string;
                            value: _168.MsgTimeout;
                        };
                        timeoutOnClose(value: _168.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _168.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _168.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _168.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _168.MsgChannelOpenInit) => _168.MsgChannelOpenInitAmino;
                        fromAmino: (object: _168.MsgChannelOpenInitAmino) => _168.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _168.MsgChannelOpenTry) => _168.MsgChannelOpenTryAmino;
                        fromAmino: (object: _168.MsgChannelOpenTryAmino) => _168.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _168.MsgChannelOpenAck) => _168.MsgChannelOpenAckAmino;
                        fromAmino: (object: _168.MsgChannelOpenAckAmino) => _168.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _168.MsgChannelOpenConfirm) => _168.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _168.MsgChannelOpenConfirmAmino) => _168.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _168.MsgChannelCloseInit) => _168.MsgChannelCloseInitAmino;
                        fromAmino: (object: _168.MsgChannelCloseInitAmino) => _168.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _168.MsgChannelCloseConfirm) => _168.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _168.MsgChannelCloseConfirmAmino) => _168.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _168.MsgRecvPacket) => _168.MsgRecvPacketAmino;
                        fromAmino: (object: _168.MsgRecvPacketAmino) => _168.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _168.MsgTimeout) => _168.MsgTimeoutAmino;
                        fromAmino: (object: _168.MsgTimeoutAmino) => _168.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _168.MsgTimeoutOnClose) => _168.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _168.MsgTimeoutOnCloseAmino) => _168.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _168.MsgAcknowledgement) => _168.MsgAcknowledgementAmino;
                        fromAmino: (object: _168.MsgAcknowledgementAmino) => _168.MsgAcknowledgement;
                    };
                };
                responseResultTypeFromJSON(object: any): _168.ResponseResultType;
                responseResultTypeToJSON(object: _168.ResponseResultType): string;
                ResponseResultType: typeof _168.ResponseResultType;
                ResponseResultTypeSDKType: typeof _168.ResponseResultType;
                ResponseResultTypeAmino: typeof _168.ResponseResultType;
                MsgChannelOpenInit: {
                    typeUrl: string;
                    encode(message: _168.MsgChannelOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.MsgChannelOpenInit;
                    fromPartial(object: Partial<_168.MsgChannelOpenInit>): _168.MsgChannelOpenInit;
                    fromAmino(object: _168.MsgChannelOpenInitAmino): _168.MsgChannelOpenInit;
                    toAmino(message: _168.MsgChannelOpenInit): _168.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _168.MsgChannelOpenInitAminoMsg): _168.MsgChannelOpenInit;
                    toAminoMsg(message: _168.MsgChannelOpenInit): _168.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _168.MsgChannelOpenInitProtoMsg): _168.MsgChannelOpenInit;
                    toProto(message: _168.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _168.MsgChannelOpenInit): _168.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    typeUrl: string;
                    encode(message: _168.MsgChannelOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.MsgChannelOpenInitResponse;
                    fromPartial(object: Partial<_168.MsgChannelOpenInitResponse>): _168.MsgChannelOpenInitResponse;
                    fromAmino(object: _168.MsgChannelOpenInitResponseAmino): _168.MsgChannelOpenInitResponse;
                    toAmino(message: _168.MsgChannelOpenInitResponse): _168.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _168.MsgChannelOpenInitResponseAminoMsg): _168.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _168.MsgChannelOpenInitResponse): _168.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _168.MsgChannelOpenInitResponseProtoMsg): _168.MsgChannelOpenInitResponse;
                    toProto(message: _168.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _168.MsgChannelOpenInitResponse): _168.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    typeUrl: string;
                    encode(message: _168.MsgChannelOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.MsgChannelOpenTry;
                    fromPartial(object: Partial<_168.MsgChannelOpenTry>): _168.MsgChannelOpenTry;
                    fromAmino(object: _168.MsgChannelOpenTryAmino): _168.MsgChannelOpenTry;
                    toAmino(message: _168.MsgChannelOpenTry): _168.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _168.MsgChannelOpenTryAminoMsg): _168.MsgChannelOpenTry;
                    toAminoMsg(message: _168.MsgChannelOpenTry): _168.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _168.MsgChannelOpenTryProtoMsg): _168.MsgChannelOpenTry;
                    toProto(message: _168.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _168.MsgChannelOpenTry): _168.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    typeUrl: string;
                    encode(message: _168.MsgChannelOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.MsgChannelOpenTryResponse;
                    fromPartial(object: Partial<_168.MsgChannelOpenTryResponse>): _168.MsgChannelOpenTryResponse;
                    fromAmino(object: _168.MsgChannelOpenTryResponseAmino): _168.MsgChannelOpenTryResponse;
                    toAmino(message: _168.MsgChannelOpenTryResponse): _168.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _168.MsgChannelOpenTryResponseAminoMsg): _168.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _168.MsgChannelOpenTryResponse): _168.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _168.MsgChannelOpenTryResponseProtoMsg): _168.MsgChannelOpenTryResponse;
                    toProto(message: _168.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _168.MsgChannelOpenTryResponse): _168.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    typeUrl: string;
                    encode(message: _168.MsgChannelOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.MsgChannelOpenAck;
                    fromPartial(object: Partial<_168.MsgChannelOpenAck>): _168.MsgChannelOpenAck;
                    fromAmino(object: _168.MsgChannelOpenAckAmino): _168.MsgChannelOpenAck;
                    toAmino(message: _168.MsgChannelOpenAck): _168.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _168.MsgChannelOpenAckAminoMsg): _168.MsgChannelOpenAck;
                    toAminoMsg(message: _168.MsgChannelOpenAck): _168.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _168.MsgChannelOpenAckProtoMsg): _168.MsgChannelOpenAck;
                    toProto(message: _168.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _168.MsgChannelOpenAck): _168.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _168.MsgChannelOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.MsgChannelOpenAckResponse;
                    fromPartial(_: Partial<_168.MsgChannelOpenAckResponse>): _168.MsgChannelOpenAckResponse;
                    fromAmino(_: _168.MsgChannelOpenAckResponseAmino): _168.MsgChannelOpenAckResponse;
                    toAmino(_: _168.MsgChannelOpenAckResponse): _168.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _168.MsgChannelOpenAckResponseAminoMsg): _168.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _168.MsgChannelOpenAckResponse): _168.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _168.MsgChannelOpenAckResponseProtoMsg): _168.MsgChannelOpenAckResponse;
                    toProto(message: _168.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _168.MsgChannelOpenAckResponse): _168.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    typeUrl: string;
                    encode(message: _168.MsgChannelOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.MsgChannelOpenConfirm;
                    fromPartial(object: Partial<_168.MsgChannelOpenConfirm>): _168.MsgChannelOpenConfirm;
                    fromAmino(object: _168.MsgChannelOpenConfirmAmino): _168.MsgChannelOpenConfirm;
                    toAmino(message: _168.MsgChannelOpenConfirm): _168.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _168.MsgChannelOpenConfirmAminoMsg): _168.MsgChannelOpenConfirm;
                    toAminoMsg(message: _168.MsgChannelOpenConfirm): _168.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _168.MsgChannelOpenConfirmProtoMsg): _168.MsgChannelOpenConfirm;
                    toProto(message: _168.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _168.MsgChannelOpenConfirm): _168.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _168.MsgChannelOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.MsgChannelOpenConfirmResponse;
                    fromPartial(_: Partial<_168.MsgChannelOpenConfirmResponse>): _168.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _168.MsgChannelOpenConfirmResponseAmino): _168.MsgChannelOpenConfirmResponse;
                    toAmino(_: _168.MsgChannelOpenConfirmResponse): _168.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _168.MsgChannelOpenConfirmResponseAminoMsg): _168.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _168.MsgChannelOpenConfirmResponse): _168.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _168.MsgChannelOpenConfirmResponseProtoMsg): _168.MsgChannelOpenConfirmResponse;
                    toProto(message: _168.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _168.MsgChannelOpenConfirmResponse): _168.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    typeUrl: string;
                    encode(message: _168.MsgChannelCloseInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.MsgChannelCloseInit;
                    fromPartial(object: Partial<_168.MsgChannelCloseInit>): _168.MsgChannelCloseInit;
                    fromAmino(object: _168.MsgChannelCloseInitAmino): _168.MsgChannelCloseInit;
                    toAmino(message: _168.MsgChannelCloseInit): _168.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _168.MsgChannelCloseInitAminoMsg): _168.MsgChannelCloseInit;
                    toAminoMsg(message: _168.MsgChannelCloseInit): _168.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _168.MsgChannelCloseInitProtoMsg): _168.MsgChannelCloseInit;
                    toProto(message: _168.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _168.MsgChannelCloseInit): _168.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    typeUrl: string;
                    encode(_: _168.MsgChannelCloseInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.MsgChannelCloseInitResponse;
                    fromPartial(_: Partial<_168.MsgChannelCloseInitResponse>): _168.MsgChannelCloseInitResponse;
                    fromAmino(_: _168.MsgChannelCloseInitResponseAmino): _168.MsgChannelCloseInitResponse;
                    toAmino(_: _168.MsgChannelCloseInitResponse): _168.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _168.MsgChannelCloseInitResponseAminoMsg): _168.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _168.MsgChannelCloseInitResponse): _168.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _168.MsgChannelCloseInitResponseProtoMsg): _168.MsgChannelCloseInitResponse;
                    toProto(message: _168.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _168.MsgChannelCloseInitResponse): _168.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    typeUrl: string;
                    encode(message: _168.MsgChannelCloseConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.MsgChannelCloseConfirm;
                    fromPartial(object: Partial<_168.MsgChannelCloseConfirm>): _168.MsgChannelCloseConfirm;
                    fromAmino(object: _168.MsgChannelCloseConfirmAmino): _168.MsgChannelCloseConfirm;
                    toAmino(message: _168.MsgChannelCloseConfirm): _168.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _168.MsgChannelCloseConfirmAminoMsg): _168.MsgChannelCloseConfirm;
                    toAminoMsg(message: _168.MsgChannelCloseConfirm): _168.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _168.MsgChannelCloseConfirmProtoMsg): _168.MsgChannelCloseConfirm;
                    toProto(message: _168.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _168.MsgChannelCloseConfirm): _168.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    typeUrl: string;
                    encode(_: _168.MsgChannelCloseConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.MsgChannelCloseConfirmResponse;
                    fromPartial(_: Partial<_168.MsgChannelCloseConfirmResponse>): _168.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _168.MsgChannelCloseConfirmResponseAmino): _168.MsgChannelCloseConfirmResponse;
                    toAmino(_: _168.MsgChannelCloseConfirmResponse): _168.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _168.MsgChannelCloseConfirmResponseAminoMsg): _168.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _168.MsgChannelCloseConfirmResponse): _168.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _168.MsgChannelCloseConfirmResponseProtoMsg): _168.MsgChannelCloseConfirmResponse;
                    toProto(message: _168.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _168.MsgChannelCloseConfirmResponse): _168.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    typeUrl: string;
                    encode(message: _168.MsgRecvPacket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.MsgRecvPacket;
                    fromPartial(object: Partial<_168.MsgRecvPacket>): _168.MsgRecvPacket;
                    fromAmino(object: _168.MsgRecvPacketAmino): _168.MsgRecvPacket;
                    toAmino(message: _168.MsgRecvPacket): _168.MsgRecvPacketAmino;
                    fromAminoMsg(object: _168.MsgRecvPacketAminoMsg): _168.MsgRecvPacket;
                    toAminoMsg(message: _168.MsgRecvPacket): _168.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _168.MsgRecvPacketProtoMsg): _168.MsgRecvPacket;
                    toProto(message: _168.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _168.MsgRecvPacket): _168.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    typeUrl: string;
                    encode(message: _168.MsgRecvPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.MsgRecvPacketResponse;
                    fromPartial(object: Partial<_168.MsgRecvPacketResponse>): _168.MsgRecvPacketResponse;
                    fromAmino(object: _168.MsgRecvPacketResponseAmino): _168.MsgRecvPacketResponse;
                    toAmino(message: _168.MsgRecvPacketResponse): _168.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _168.MsgRecvPacketResponseAminoMsg): _168.MsgRecvPacketResponse;
                    toAminoMsg(message: _168.MsgRecvPacketResponse): _168.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _168.MsgRecvPacketResponseProtoMsg): _168.MsgRecvPacketResponse;
                    toProto(message: _168.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _168.MsgRecvPacketResponse): _168.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    typeUrl: string;
                    encode(message: _168.MsgTimeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.MsgTimeout;
                    fromPartial(object: Partial<_168.MsgTimeout>): _168.MsgTimeout;
                    fromAmino(object: _168.MsgTimeoutAmino): _168.MsgTimeout;
                    toAmino(message: _168.MsgTimeout): _168.MsgTimeoutAmino;
                    fromAminoMsg(object: _168.MsgTimeoutAminoMsg): _168.MsgTimeout;
                    toAminoMsg(message: _168.MsgTimeout): _168.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _168.MsgTimeoutProtoMsg): _168.MsgTimeout;
                    toProto(message: _168.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _168.MsgTimeout): _168.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    typeUrl: string;
                    encode(message: _168.MsgTimeoutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.MsgTimeoutResponse;
                    fromPartial(object: Partial<_168.MsgTimeoutResponse>): _168.MsgTimeoutResponse;
                    fromAmino(object: _168.MsgTimeoutResponseAmino): _168.MsgTimeoutResponse;
                    toAmino(message: _168.MsgTimeoutResponse): _168.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _168.MsgTimeoutResponseAminoMsg): _168.MsgTimeoutResponse;
                    toAminoMsg(message: _168.MsgTimeoutResponse): _168.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _168.MsgTimeoutResponseProtoMsg): _168.MsgTimeoutResponse;
                    toProto(message: _168.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _168.MsgTimeoutResponse): _168.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    typeUrl: string;
                    encode(message: _168.MsgTimeoutOnClose, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.MsgTimeoutOnClose;
                    fromPartial(object: Partial<_168.MsgTimeoutOnClose>): _168.MsgTimeoutOnClose;
                    fromAmino(object: _168.MsgTimeoutOnCloseAmino): _168.MsgTimeoutOnClose;
                    toAmino(message: _168.MsgTimeoutOnClose): _168.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _168.MsgTimeoutOnCloseAminoMsg): _168.MsgTimeoutOnClose;
                    toAminoMsg(message: _168.MsgTimeoutOnClose): _168.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _168.MsgTimeoutOnCloseProtoMsg): _168.MsgTimeoutOnClose;
                    toProto(message: _168.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _168.MsgTimeoutOnClose): _168.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    typeUrl: string;
                    encode(message: _168.MsgTimeoutOnCloseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.MsgTimeoutOnCloseResponse;
                    fromPartial(object: Partial<_168.MsgTimeoutOnCloseResponse>): _168.MsgTimeoutOnCloseResponse;
                    fromAmino(object: _168.MsgTimeoutOnCloseResponseAmino): _168.MsgTimeoutOnCloseResponse;
                    toAmino(message: _168.MsgTimeoutOnCloseResponse): _168.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _168.MsgTimeoutOnCloseResponseAminoMsg): _168.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _168.MsgTimeoutOnCloseResponse): _168.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _168.MsgTimeoutOnCloseResponseProtoMsg): _168.MsgTimeoutOnCloseResponse;
                    toProto(message: _168.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _168.MsgTimeoutOnCloseResponse): _168.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    typeUrl: string;
                    encode(message: _168.MsgAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.MsgAcknowledgement;
                    fromPartial(object: Partial<_168.MsgAcknowledgement>): _168.MsgAcknowledgement;
                    fromAmino(object: _168.MsgAcknowledgementAmino): _168.MsgAcknowledgement;
                    toAmino(message: _168.MsgAcknowledgement): _168.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _168.MsgAcknowledgementAminoMsg): _168.MsgAcknowledgement;
                    toAminoMsg(message: _168.MsgAcknowledgement): _168.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _168.MsgAcknowledgementProtoMsg): _168.MsgAcknowledgement;
                    toProto(message: _168.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _168.MsgAcknowledgement): _168.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _168.MsgAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.MsgAcknowledgementResponse;
                    fromPartial(object: Partial<_168.MsgAcknowledgementResponse>): _168.MsgAcknowledgementResponse;
                    fromAmino(object: _168.MsgAcknowledgementResponseAmino): _168.MsgAcknowledgementResponse;
                    toAmino(message: _168.MsgAcknowledgementResponse): _168.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _168.MsgAcknowledgementResponseAminoMsg): _168.MsgAcknowledgementResponse;
                    toAminoMsg(message: _168.MsgAcknowledgementResponse): _168.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _168.MsgAcknowledgementResponseProtoMsg): _168.MsgAcknowledgementResponse;
                    toProto(message: _168.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _168.MsgAcknowledgementResponse): _168.MsgAcknowledgementResponseProtoMsg;
                };
                QueryChannelRequest: {
                    typeUrl: string;
                    encode(message: _167.QueryChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryChannelRequest;
                    fromPartial(object: Partial<_167.QueryChannelRequest>): _167.QueryChannelRequest;
                    fromAmino(object: _167.QueryChannelRequestAmino): _167.QueryChannelRequest;
                    toAmino(message: _167.QueryChannelRequest): _167.QueryChannelRequestAmino;
                    fromAminoMsg(object: _167.QueryChannelRequestAminoMsg): _167.QueryChannelRequest;
                    toAminoMsg(message: _167.QueryChannelRequest): _167.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _167.QueryChannelRequestProtoMsg): _167.QueryChannelRequest;
                    toProto(message: _167.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _167.QueryChannelRequest): _167.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    typeUrl: string;
                    encode(message: _167.QueryChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryChannelResponse;
                    fromPartial(object: Partial<_167.QueryChannelResponse>): _167.QueryChannelResponse;
                    fromAmino(object: _167.QueryChannelResponseAmino): _167.QueryChannelResponse;
                    toAmino(message: _167.QueryChannelResponse): _167.QueryChannelResponseAmino;
                    fromAminoMsg(object: _167.QueryChannelResponseAminoMsg): _167.QueryChannelResponse;
                    toAminoMsg(message: _167.QueryChannelResponse): _167.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _167.QueryChannelResponseProtoMsg): _167.QueryChannelResponse;
                    toProto(message: _167.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _167.QueryChannelResponse): _167.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    typeUrl: string;
                    encode(message: _167.QueryChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryChannelsRequest;
                    fromPartial(object: Partial<_167.QueryChannelsRequest>): _167.QueryChannelsRequest;
                    fromAmino(object: _167.QueryChannelsRequestAmino): _167.QueryChannelsRequest;
                    toAmino(message: _167.QueryChannelsRequest): _167.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _167.QueryChannelsRequestAminoMsg): _167.QueryChannelsRequest;
                    toAminoMsg(message: _167.QueryChannelsRequest): _167.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _167.QueryChannelsRequestProtoMsg): _167.QueryChannelsRequest;
                    toProto(message: _167.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _167.QueryChannelsRequest): _167.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    typeUrl: string;
                    encode(message: _167.QueryChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryChannelsResponse;
                    fromPartial(object: Partial<_167.QueryChannelsResponse>): _167.QueryChannelsResponse;
                    fromAmino(object: _167.QueryChannelsResponseAmino): _167.QueryChannelsResponse;
                    toAmino(message: _167.QueryChannelsResponse): _167.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _167.QueryChannelsResponseAminoMsg): _167.QueryChannelsResponse;
                    toAminoMsg(message: _167.QueryChannelsResponse): _167.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _167.QueryChannelsResponseProtoMsg): _167.QueryChannelsResponse;
                    toProto(message: _167.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _167.QueryChannelsResponse): _167.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    typeUrl: string;
                    encode(message: _167.QueryConnectionChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryConnectionChannelsRequest;
                    fromPartial(object: Partial<_167.QueryConnectionChannelsRequest>): _167.QueryConnectionChannelsRequest;
                    fromAmino(object: _167.QueryConnectionChannelsRequestAmino): _167.QueryConnectionChannelsRequest;
                    toAmino(message: _167.QueryConnectionChannelsRequest): _167.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _167.QueryConnectionChannelsRequestAminoMsg): _167.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _167.QueryConnectionChannelsRequest): _167.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _167.QueryConnectionChannelsRequestProtoMsg): _167.QueryConnectionChannelsRequest;
                    toProto(message: _167.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _167.QueryConnectionChannelsRequest): _167.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    typeUrl: string;
                    encode(message: _167.QueryConnectionChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryConnectionChannelsResponse;
                    fromPartial(object: Partial<_167.QueryConnectionChannelsResponse>): _167.QueryConnectionChannelsResponse;
                    fromAmino(object: _167.QueryConnectionChannelsResponseAmino): _167.QueryConnectionChannelsResponse;
                    toAmino(message: _167.QueryConnectionChannelsResponse): _167.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _167.QueryConnectionChannelsResponseAminoMsg): _167.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _167.QueryConnectionChannelsResponse): _167.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _167.QueryConnectionChannelsResponseProtoMsg): _167.QueryConnectionChannelsResponse;
                    toProto(message: _167.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _167.QueryConnectionChannelsResponse): _167.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    typeUrl: string;
                    encode(message: _167.QueryChannelClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryChannelClientStateRequest;
                    fromPartial(object: Partial<_167.QueryChannelClientStateRequest>): _167.QueryChannelClientStateRequest;
                    fromAmino(object: _167.QueryChannelClientStateRequestAmino): _167.QueryChannelClientStateRequest;
                    toAmino(message: _167.QueryChannelClientStateRequest): _167.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _167.QueryChannelClientStateRequestAminoMsg): _167.QueryChannelClientStateRequest;
                    toAminoMsg(message: _167.QueryChannelClientStateRequest): _167.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _167.QueryChannelClientStateRequestProtoMsg): _167.QueryChannelClientStateRequest;
                    toProto(message: _167.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _167.QueryChannelClientStateRequest): _167.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    typeUrl: string;
                    encode(message: _167.QueryChannelClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryChannelClientStateResponse;
                    fromPartial(object: Partial<_167.QueryChannelClientStateResponse>): _167.QueryChannelClientStateResponse;
                    fromAmino(object: _167.QueryChannelClientStateResponseAmino): _167.QueryChannelClientStateResponse;
                    toAmino(message: _167.QueryChannelClientStateResponse): _167.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _167.QueryChannelClientStateResponseAminoMsg): _167.QueryChannelClientStateResponse;
                    toAminoMsg(message: _167.QueryChannelClientStateResponse): _167.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _167.QueryChannelClientStateResponseProtoMsg): _167.QueryChannelClientStateResponse;
                    toProto(message: _167.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _167.QueryChannelClientStateResponse): _167.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _167.QueryChannelConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryChannelConsensusStateRequest;
                    fromPartial(object: Partial<_167.QueryChannelConsensusStateRequest>): _167.QueryChannelConsensusStateRequest;
                    fromAmino(object: _167.QueryChannelConsensusStateRequestAmino): _167.QueryChannelConsensusStateRequest;
                    toAmino(message: _167.QueryChannelConsensusStateRequest): _167.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _167.QueryChannelConsensusStateRequestAminoMsg): _167.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _167.QueryChannelConsensusStateRequest): _167.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _167.QueryChannelConsensusStateRequestProtoMsg): _167.QueryChannelConsensusStateRequest;
                    toProto(message: _167.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _167.QueryChannelConsensusStateRequest): _167.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _167.QueryChannelConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryChannelConsensusStateResponse;
                    fromPartial(object: Partial<_167.QueryChannelConsensusStateResponse>): _167.QueryChannelConsensusStateResponse;
                    fromAmino(object: _167.QueryChannelConsensusStateResponseAmino): _167.QueryChannelConsensusStateResponse;
                    toAmino(message: _167.QueryChannelConsensusStateResponse): _167.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _167.QueryChannelConsensusStateResponseAminoMsg): _167.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _167.QueryChannelConsensusStateResponse): _167.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _167.QueryChannelConsensusStateResponseProtoMsg): _167.QueryChannelConsensusStateResponse;
                    toProto(message: _167.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _167.QueryChannelConsensusStateResponse): _167.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    typeUrl: string;
                    encode(message: _167.QueryPacketCommitmentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryPacketCommitmentRequest;
                    fromPartial(object: Partial<_167.QueryPacketCommitmentRequest>): _167.QueryPacketCommitmentRequest;
                    fromAmino(object: _167.QueryPacketCommitmentRequestAmino): _167.QueryPacketCommitmentRequest;
                    toAmino(message: _167.QueryPacketCommitmentRequest): _167.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _167.QueryPacketCommitmentRequestAminoMsg): _167.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _167.QueryPacketCommitmentRequest): _167.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _167.QueryPacketCommitmentRequestProtoMsg): _167.QueryPacketCommitmentRequest;
                    toProto(message: _167.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _167.QueryPacketCommitmentRequest): _167.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    typeUrl: string;
                    encode(message: _167.QueryPacketCommitmentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryPacketCommitmentResponse;
                    fromPartial(object: Partial<_167.QueryPacketCommitmentResponse>): _167.QueryPacketCommitmentResponse;
                    fromAmino(object: _167.QueryPacketCommitmentResponseAmino): _167.QueryPacketCommitmentResponse;
                    toAmino(message: _167.QueryPacketCommitmentResponse): _167.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _167.QueryPacketCommitmentResponseAminoMsg): _167.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _167.QueryPacketCommitmentResponse): _167.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _167.QueryPacketCommitmentResponseProtoMsg): _167.QueryPacketCommitmentResponse;
                    toProto(message: _167.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _167.QueryPacketCommitmentResponse): _167.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    typeUrl: string;
                    encode(message: _167.QueryPacketCommitmentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryPacketCommitmentsRequest;
                    fromPartial(object: Partial<_167.QueryPacketCommitmentsRequest>): _167.QueryPacketCommitmentsRequest;
                    fromAmino(object: _167.QueryPacketCommitmentsRequestAmino): _167.QueryPacketCommitmentsRequest;
                    toAmino(message: _167.QueryPacketCommitmentsRequest): _167.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _167.QueryPacketCommitmentsRequestAminoMsg): _167.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _167.QueryPacketCommitmentsRequest): _167.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _167.QueryPacketCommitmentsRequestProtoMsg): _167.QueryPacketCommitmentsRequest;
                    toProto(message: _167.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _167.QueryPacketCommitmentsRequest): _167.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    typeUrl: string;
                    encode(message: _167.QueryPacketCommitmentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryPacketCommitmentsResponse;
                    fromPartial(object: Partial<_167.QueryPacketCommitmentsResponse>): _167.QueryPacketCommitmentsResponse;
                    fromAmino(object: _167.QueryPacketCommitmentsResponseAmino): _167.QueryPacketCommitmentsResponse;
                    toAmino(message: _167.QueryPacketCommitmentsResponse): _167.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _167.QueryPacketCommitmentsResponseAminoMsg): _167.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _167.QueryPacketCommitmentsResponse): _167.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _167.QueryPacketCommitmentsResponseProtoMsg): _167.QueryPacketCommitmentsResponse;
                    toProto(message: _167.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _167.QueryPacketCommitmentsResponse): _167.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    typeUrl: string;
                    encode(message: _167.QueryPacketReceiptRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryPacketReceiptRequest;
                    fromPartial(object: Partial<_167.QueryPacketReceiptRequest>): _167.QueryPacketReceiptRequest;
                    fromAmino(object: _167.QueryPacketReceiptRequestAmino): _167.QueryPacketReceiptRequest;
                    toAmino(message: _167.QueryPacketReceiptRequest): _167.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _167.QueryPacketReceiptRequestAminoMsg): _167.QueryPacketReceiptRequest;
                    toAminoMsg(message: _167.QueryPacketReceiptRequest): _167.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _167.QueryPacketReceiptRequestProtoMsg): _167.QueryPacketReceiptRequest;
                    toProto(message: _167.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _167.QueryPacketReceiptRequest): _167.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    typeUrl: string;
                    encode(message: _167.QueryPacketReceiptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryPacketReceiptResponse;
                    fromPartial(object: Partial<_167.QueryPacketReceiptResponse>): _167.QueryPacketReceiptResponse;
                    fromAmino(object: _167.QueryPacketReceiptResponseAmino): _167.QueryPacketReceiptResponse;
                    toAmino(message: _167.QueryPacketReceiptResponse): _167.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _167.QueryPacketReceiptResponseAminoMsg): _167.QueryPacketReceiptResponse;
                    toAminoMsg(message: _167.QueryPacketReceiptResponse): _167.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _167.QueryPacketReceiptResponseProtoMsg): _167.QueryPacketReceiptResponse;
                    toProto(message: _167.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _167.QueryPacketReceiptResponse): _167.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    typeUrl: string;
                    encode(message: _167.QueryPacketAcknowledgementRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryPacketAcknowledgementRequest;
                    fromPartial(object: Partial<_167.QueryPacketAcknowledgementRequest>): _167.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _167.QueryPacketAcknowledgementRequestAmino): _167.QueryPacketAcknowledgementRequest;
                    toAmino(message: _167.QueryPacketAcknowledgementRequest): _167.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _167.QueryPacketAcknowledgementRequestAminoMsg): _167.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _167.QueryPacketAcknowledgementRequest): _167.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _167.QueryPacketAcknowledgementRequestProtoMsg): _167.QueryPacketAcknowledgementRequest;
                    toProto(message: _167.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _167.QueryPacketAcknowledgementRequest): _167.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _167.QueryPacketAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryPacketAcknowledgementResponse;
                    fromPartial(object: Partial<_167.QueryPacketAcknowledgementResponse>): _167.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _167.QueryPacketAcknowledgementResponseAmino): _167.QueryPacketAcknowledgementResponse;
                    toAmino(message: _167.QueryPacketAcknowledgementResponse): _167.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _167.QueryPacketAcknowledgementResponseAminoMsg): _167.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _167.QueryPacketAcknowledgementResponse): _167.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _167.QueryPacketAcknowledgementResponseProtoMsg): _167.QueryPacketAcknowledgementResponse;
                    toProto(message: _167.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _167.QueryPacketAcknowledgementResponse): _167.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    typeUrl: string;
                    encode(message: _167.QueryPacketAcknowledgementsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: Partial<_167.QueryPacketAcknowledgementsRequest>): _167.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _167.QueryPacketAcknowledgementsRequestAmino): _167.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _167.QueryPacketAcknowledgementsRequest): _167.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _167.QueryPacketAcknowledgementsRequestAminoMsg): _167.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _167.QueryPacketAcknowledgementsRequest): _167.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _167.QueryPacketAcknowledgementsRequestProtoMsg): _167.QueryPacketAcknowledgementsRequest;
                    toProto(message: _167.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _167.QueryPacketAcknowledgementsRequest): _167.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    typeUrl: string;
                    encode(message: _167.QueryPacketAcknowledgementsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: Partial<_167.QueryPacketAcknowledgementsResponse>): _167.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _167.QueryPacketAcknowledgementsResponseAmino): _167.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _167.QueryPacketAcknowledgementsResponse): _167.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _167.QueryPacketAcknowledgementsResponseAminoMsg): _167.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _167.QueryPacketAcknowledgementsResponse): _167.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _167.QueryPacketAcknowledgementsResponseProtoMsg): _167.QueryPacketAcknowledgementsResponse;
                    toProto(message: _167.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _167.QueryPacketAcknowledgementsResponse): _167.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _167.QueryUnreceivedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryUnreceivedPacketsRequest;
                    fromPartial(object: Partial<_167.QueryUnreceivedPacketsRequest>): _167.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _167.QueryUnreceivedPacketsRequestAmino): _167.QueryUnreceivedPacketsRequest;
                    toAmino(message: _167.QueryUnreceivedPacketsRequest): _167.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _167.QueryUnreceivedPacketsRequestAminoMsg): _167.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _167.QueryUnreceivedPacketsRequest): _167.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _167.QueryUnreceivedPacketsRequestProtoMsg): _167.QueryUnreceivedPacketsRequest;
                    toProto(message: _167.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _167.QueryUnreceivedPacketsRequest): _167.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _167.QueryUnreceivedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryUnreceivedPacketsResponse;
                    fromPartial(object: Partial<_167.QueryUnreceivedPacketsResponse>): _167.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _167.QueryUnreceivedPacketsResponseAmino): _167.QueryUnreceivedPacketsResponse;
                    toAmino(message: _167.QueryUnreceivedPacketsResponse): _167.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _167.QueryUnreceivedPacketsResponseAminoMsg): _167.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _167.QueryUnreceivedPacketsResponse): _167.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _167.QueryUnreceivedPacketsResponseProtoMsg): _167.QueryUnreceivedPacketsResponse;
                    toProto(message: _167.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _167.QueryUnreceivedPacketsResponse): _167.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    typeUrl: string;
                    encode(message: _167.QueryUnreceivedAcksRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryUnreceivedAcksRequest;
                    fromPartial(object: Partial<_167.QueryUnreceivedAcksRequest>): _167.QueryUnreceivedAcksRequest;
                    fromAmino(object: _167.QueryUnreceivedAcksRequestAmino): _167.QueryUnreceivedAcksRequest;
                    toAmino(message: _167.QueryUnreceivedAcksRequest): _167.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _167.QueryUnreceivedAcksRequestAminoMsg): _167.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _167.QueryUnreceivedAcksRequest): _167.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _167.QueryUnreceivedAcksRequestProtoMsg): _167.QueryUnreceivedAcksRequest;
                    toProto(message: _167.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _167.QueryUnreceivedAcksRequest): _167.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    typeUrl: string;
                    encode(message: _167.QueryUnreceivedAcksResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryUnreceivedAcksResponse;
                    fromPartial(object: Partial<_167.QueryUnreceivedAcksResponse>): _167.QueryUnreceivedAcksResponse;
                    fromAmino(object: _167.QueryUnreceivedAcksResponseAmino): _167.QueryUnreceivedAcksResponse;
                    toAmino(message: _167.QueryUnreceivedAcksResponse): _167.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _167.QueryUnreceivedAcksResponseAminoMsg): _167.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _167.QueryUnreceivedAcksResponse): _167.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _167.QueryUnreceivedAcksResponseProtoMsg): _167.QueryUnreceivedAcksResponse;
                    toProto(message: _167.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _167.QueryUnreceivedAcksResponse): _167.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    typeUrl: string;
                    encode(message: _167.QueryNextSequenceReceiveRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryNextSequenceReceiveRequest;
                    fromPartial(object: Partial<_167.QueryNextSequenceReceiveRequest>): _167.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _167.QueryNextSequenceReceiveRequestAmino): _167.QueryNextSequenceReceiveRequest;
                    toAmino(message: _167.QueryNextSequenceReceiveRequest): _167.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _167.QueryNextSequenceReceiveRequestAminoMsg): _167.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _167.QueryNextSequenceReceiveRequest): _167.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _167.QueryNextSequenceReceiveRequestProtoMsg): _167.QueryNextSequenceReceiveRequest;
                    toProto(message: _167.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _167.QueryNextSequenceReceiveRequest): _167.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    typeUrl: string;
                    encode(message: _167.QueryNextSequenceReceiveResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryNextSequenceReceiveResponse;
                    fromPartial(object: Partial<_167.QueryNextSequenceReceiveResponse>): _167.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _167.QueryNextSequenceReceiveResponseAmino): _167.QueryNextSequenceReceiveResponse;
                    toAmino(message: _167.QueryNextSequenceReceiveResponse): _167.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _167.QueryNextSequenceReceiveResponseAminoMsg): _167.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _167.QueryNextSequenceReceiveResponse): _167.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _167.QueryNextSequenceReceiveResponseProtoMsg): _167.QueryNextSequenceReceiveResponse;
                    toProto(message: _167.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _167.QueryNextSequenceReceiveResponse): _167.QueryNextSequenceReceiveResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _166.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.GenesisState;
                    fromPartial(object: Partial<_166.GenesisState>): _166.GenesisState;
                    fromAmino(object: _166.GenesisStateAmino): _166.GenesisState;
                    toAmino(message: _166.GenesisState): _166.GenesisStateAmino;
                    fromAminoMsg(object: _166.GenesisStateAminoMsg): _166.GenesisState;
                    toAminoMsg(message: _166.GenesisState): _166.GenesisStateAminoMsg;
                    fromProtoMsg(message: _166.GenesisStateProtoMsg): _166.GenesisState;
                    toProto(message: _166.GenesisState): Uint8Array;
                    toProtoMsg(message: _166.GenesisState): _166.GenesisStateProtoMsg;
                };
                PacketSequence: {
                    typeUrl: string;
                    encode(message: _166.PacketSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.PacketSequence;
                    fromPartial(object: Partial<_166.PacketSequence>): _166.PacketSequence;
                    fromAmino(object: _166.PacketSequenceAmino): _166.PacketSequence;
                    toAmino(message: _166.PacketSequence): _166.PacketSequenceAmino;
                    fromAminoMsg(object: _166.PacketSequenceAminoMsg): _166.PacketSequence;
                    toAminoMsg(message: _166.PacketSequence): _166.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _166.PacketSequenceProtoMsg): _166.PacketSequence;
                    toProto(message: _166.PacketSequence): Uint8Array;
                    toProtoMsg(message: _166.PacketSequence): _166.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _165.State;
                stateToJSON(object: _165.State): string;
                orderFromJSON(object: any): _165.Order;
                orderToJSON(object: _165.Order): string;
                State: typeof _165.State;
                StateSDKType: typeof _165.State;
                StateAmino: typeof _165.State;
                Order: typeof _165.Order;
                OrderSDKType: typeof _165.Order;
                OrderAmino: typeof _165.Order;
                Channel: {
                    typeUrl: string;
                    encode(message: _165.Channel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.Channel;
                    fromPartial(object: Partial<_165.Channel>): _165.Channel;
                    fromAmino(object: _165.ChannelAmino): _165.Channel;
                    toAmino(message: _165.Channel): _165.ChannelAmino;
                    fromAminoMsg(object: _165.ChannelAminoMsg): _165.Channel;
                    toAminoMsg(message: _165.Channel): _165.ChannelAminoMsg;
                    fromProtoMsg(message: _165.ChannelProtoMsg): _165.Channel;
                    toProto(message: _165.Channel): Uint8Array;
                    toProtoMsg(message: _165.Channel): _165.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    encode(message: _165.IdentifiedChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.IdentifiedChannel;
                    fromPartial(object: Partial<_165.IdentifiedChannel>): _165.IdentifiedChannel;
                    fromAmino(object: _165.IdentifiedChannelAmino): _165.IdentifiedChannel;
                    toAmino(message: _165.IdentifiedChannel): _165.IdentifiedChannelAmino;
                    fromAminoMsg(object: _165.IdentifiedChannelAminoMsg): _165.IdentifiedChannel;
                    toAminoMsg(message: _165.IdentifiedChannel): _165.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _165.IdentifiedChannelProtoMsg): _165.IdentifiedChannel;
                    toProto(message: _165.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _165.IdentifiedChannel): _165.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _165.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.Counterparty;
                    fromPartial(object: Partial<_165.Counterparty>): _165.Counterparty;
                    fromAmino(object: _165.CounterpartyAmino): _165.Counterparty;
                    toAmino(message: _165.Counterparty): _165.CounterpartyAmino;
                    fromAminoMsg(object: _165.CounterpartyAminoMsg): _165.Counterparty;
                    toAminoMsg(message: _165.Counterparty): _165.CounterpartyAminoMsg;
                    fromProtoMsg(message: _165.CounterpartyProtoMsg): _165.Counterparty;
                    toProto(message: _165.Counterparty): Uint8Array;
                    toProtoMsg(message: _165.Counterparty): _165.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    encode(message: _165.Packet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.Packet;
                    fromPartial(object: Partial<_165.Packet>): _165.Packet;
                    fromAmino(object: _165.PacketAmino): _165.Packet;
                    toAmino(message: _165.Packet): _165.PacketAmino;
                    fromAminoMsg(object: _165.PacketAminoMsg): _165.Packet;
                    toAminoMsg(message: _165.Packet): _165.PacketAminoMsg;
                    fromProtoMsg(message: _165.PacketProtoMsg): _165.Packet;
                    toProto(message: _165.Packet): Uint8Array;
                    toProtoMsg(message: _165.Packet): _165.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    encode(message: _165.PacketState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.PacketState;
                    fromPartial(object: Partial<_165.PacketState>): _165.PacketState;
                    fromAmino(object: _165.PacketStateAmino): _165.PacketState;
                    toAmino(message: _165.PacketState): _165.PacketStateAmino;
                    fromAminoMsg(object: _165.PacketStateAminoMsg): _165.PacketState;
                    toAminoMsg(message: _165.PacketState): _165.PacketStateAminoMsg;
                    fromProtoMsg(message: _165.PacketStateProtoMsg): _165.PacketState;
                    toProto(message: _165.PacketState): Uint8Array;
                    toProtoMsg(message: _165.PacketState): _165.PacketStateProtoMsg;
                };
                PacketId: {
                    typeUrl: string;
                    encode(message: _165.PacketId, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.PacketId;
                    fromPartial(object: Partial<_165.PacketId>): _165.PacketId;
                    fromAmino(object: _165.PacketIdAmino): _165.PacketId;
                    toAmino(message: _165.PacketId): _165.PacketIdAmino;
                    fromAminoMsg(object: _165.PacketIdAminoMsg): _165.PacketId;
                    toAminoMsg(message: _165.PacketId): _165.PacketIdAminoMsg;
                    fromProtoMsg(message: _165.PacketIdProtoMsg): _165.PacketId;
                    toProto(message: _165.PacketId): Uint8Array;
                    toProtoMsg(message: _165.PacketId): _165.PacketIdProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    encode(message: _165.Acknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.Acknowledgement;
                    fromPartial(object: Partial<_165.Acknowledgement>): _165.Acknowledgement;
                    fromAmino(object: _165.AcknowledgementAmino): _165.Acknowledgement;
                    toAmino(message: _165.Acknowledgement): _165.AcknowledgementAmino;
                    fromAminoMsg(object: _165.AcknowledgementAminoMsg): _165.Acknowledgement;
                    toAminoMsg(message: _165.Acknowledgement): _165.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _165.AcknowledgementProtoMsg): _165.Acknowledgement;
                    toProto(message: _165.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _165.Acknowledgement): _165.AcknowledgementProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _368.MsgClientImpl;
                QueryClientImpl: typeof _361.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _171.QueryClientStateRequest): Promise<_171.QueryClientStateResponse>;
                    clientStates(request?: _171.QueryClientStatesRequest): Promise<_171.QueryClientStatesResponse>;
                    consensusState(request: _171.QueryConsensusStateRequest): Promise<_171.QueryConsensusStateResponse>;
                    consensusStates(request: _171.QueryConsensusStatesRequest): Promise<_171.QueryConsensusStatesResponse>;
                    consensusStateHeights(request: _171.QueryConsensusStateHeightsRequest): Promise<_171.QueryConsensusStateHeightsResponse>;
                    clientStatus(request: _171.QueryClientStatusRequest): Promise<_171.QueryClientStatusResponse>;
                    clientParams(request?: _171.QueryClientParamsRequest): Promise<_171.QueryClientParamsResponse>;
                    upgradedClientState(request?: _171.QueryUpgradedClientStateRequest): Promise<_171.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _171.QueryUpgradedConsensusStateRequest): Promise<_171.QueryUpgradedConsensusStateResponse>;
                };
                registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _172.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _172.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _172.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _172.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _172.MsgCreateClient): {
                            typeUrl: string;
                            value: _172.MsgCreateClient;
                        };
                        updateClient(value: _172.MsgUpdateClient): {
                            typeUrl: string;
                            value: _172.MsgUpdateClient;
                        };
                        upgradeClient(value: _172.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _172.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _172.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _172.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _172.MsgCreateClient): {
                            typeUrl: string;
                            value: _172.MsgCreateClient;
                        };
                        updateClient(value: _172.MsgUpdateClient): {
                            typeUrl: string;
                            value: _172.MsgUpdateClient;
                        };
                        upgradeClient(value: _172.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _172.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _172.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _172.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _172.MsgCreateClient) => _172.MsgCreateClientAmino;
                        fromAmino: (object: _172.MsgCreateClientAmino) => _172.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _172.MsgUpdateClient) => _172.MsgUpdateClientAmino;
                        fromAmino: (object: _172.MsgUpdateClientAmino) => _172.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _172.MsgUpgradeClient) => _172.MsgUpgradeClientAmino;
                        fromAmino: (object: _172.MsgUpgradeClientAmino) => _172.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _172.MsgSubmitMisbehaviour) => _172.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _172.MsgSubmitMisbehaviourAmino) => _172.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    typeUrl: string;
                    encode(message: _172.MsgCreateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.MsgCreateClient;
                    fromPartial(object: Partial<_172.MsgCreateClient>): _172.MsgCreateClient;
                    fromAmino(object: _172.MsgCreateClientAmino): _172.MsgCreateClient;
                    toAmino(message: _172.MsgCreateClient): _172.MsgCreateClientAmino;
                    fromAminoMsg(object: _172.MsgCreateClientAminoMsg): _172.MsgCreateClient;
                    toAminoMsg(message: _172.MsgCreateClient): _172.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _172.MsgCreateClientProtoMsg): _172.MsgCreateClient;
                    toProto(message: _172.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _172.MsgCreateClient): _172.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    typeUrl: string;
                    encode(_: _172.MsgCreateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.MsgCreateClientResponse;
                    fromPartial(_: Partial<_172.MsgCreateClientResponse>): _172.MsgCreateClientResponse;
                    fromAmino(_: _172.MsgCreateClientResponseAmino): _172.MsgCreateClientResponse;
                    toAmino(_: _172.MsgCreateClientResponse): _172.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _172.MsgCreateClientResponseAminoMsg): _172.MsgCreateClientResponse;
                    toAminoMsg(message: _172.MsgCreateClientResponse): _172.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _172.MsgCreateClientResponseProtoMsg): _172.MsgCreateClientResponse;
                    toProto(message: _172.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _172.MsgCreateClientResponse): _172.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    typeUrl: string;
                    encode(message: _172.MsgUpdateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.MsgUpdateClient;
                    fromPartial(object: Partial<_172.MsgUpdateClient>): _172.MsgUpdateClient;
                    fromAmino(object: _172.MsgUpdateClientAmino): _172.MsgUpdateClient;
                    toAmino(message: _172.MsgUpdateClient): _172.MsgUpdateClientAmino;
                    fromAminoMsg(object: _172.MsgUpdateClientAminoMsg): _172.MsgUpdateClient;
                    toAminoMsg(message: _172.MsgUpdateClient): _172.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _172.MsgUpdateClientProtoMsg): _172.MsgUpdateClient;
                    toProto(message: _172.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _172.MsgUpdateClient): _172.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    typeUrl: string;
                    encode(_: _172.MsgUpdateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.MsgUpdateClientResponse;
                    fromPartial(_: Partial<_172.MsgUpdateClientResponse>): _172.MsgUpdateClientResponse;
                    fromAmino(_: _172.MsgUpdateClientResponseAmino): _172.MsgUpdateClientResponse;
                    toAmino(_: _172.MsgUpdateClientResponse): _172.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _172.MsgUpdateClientResponseAminoMsg): _172.MsgUpdateClientResponse;
                    toAminoMsg(message: _172.MsgUpdateClientResponse): _172.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _172.MsgUpdateClientResponseProtoMsg): _172.MsgUpdateClientResponse;
                    toProto(message: _172.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _172.MsgUpdateClientResponse): _172.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    typeUrl: string;
                    encode(message: _172.MsgUpgradeClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.MsgUpgradeClient;
                    fromPartial(object: Partial<_172.MsgUpgradeClient>): _172.MsgUpgradeClient;
                    fromAmino(object: _172.MsgUpgradeClientAmino): _172.MsgUpgradeClient;
                    toAmino(message: _172.MsgUpgradeClient): _172.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _172.MsgUpgradeClientAminoMsg): _172.MsgUpgradeClient;
                    toAminoMsg(message: _172.MsgUpgradeClient): _172.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _172.MsgUpgradeClientProtoMsg): _172.MsgUpgradeClient;
                    toProto(message: _172.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _172.MsgUpgradeClient): _172.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    typeUrl: string;
                    encode(_: _172.MsgUpgradeClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.MsgUpgradeClientResponse;
                    fromPartial(_: Partial<_172.MsgUpgradeClientResponse>): _172.MsgUpgradeClientResponse;
                    fromAmino(_: _172.MsgUpgradeClientResponseAmino): _172.MsgUpgradeClientResponse;
                    toAmino(_: _172.MsgUpgradeClientResponse): _172.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _172.MsgUpgradeClientResponseAminoMsg): _172.MsgUpgradeClientResponse;
                    toAminoMsg(message: _172.MsgUpgradeClientResponse): _172.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _172.MsgUpgradeClientResponseProtoMsg): _172.MsgUpgradeClientResponse;
                    toProto(message: _172.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _172.MsgUpgradeClientResponse): _172.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    typeUrl: string;
                    encode(message: _172.MsgSubmitMisbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.MsgSubmitMisbehaviour;
                    fromPartial(object: Partial<_172.MsgSubmitMisbehaviour>): _172.MsgSubmitMisbehaviour;
                    fromAmino(object: _172.MsgSubmitMisbehaviourAmino): _172.MsgSubmitMisbehaviour;
                    toAmino(message: _172.MsgSubmitMisbehaviour): _172.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _172.MsgSubmitMisbehaviourAminoMsg): _172.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _172.MsgSubmitMisbehaviour): _172.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _172.MsgSubmitMisbehaviourProtoMsg): _172.MsgSubmitMisbehaviour;
                    toProto(message: _172.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _172.MsgSubmitMisbehaviour): _172.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    typeUrl: string;
                    encode(_: _172.MsgSubmitMisbehaviourResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: Partial<_172.MsgSubmitMisbehaviourResponse>): _172.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _172.MsgSubmitMisbehaviourResponseAmino): _172.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _172.MsgSubmitMisbehaviourResponse): _172.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _172.MsgSubmitMisbehaviourResponseAminoMsg): _172.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _172.MsgSubmitMisbehaviourResponse): _172.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _172.MsgSubmitMisbehaviourResponseProtoMsg): _172.MsgSubmitMisbehaviourResponse;
                    toProto(message: _172.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _172.MsgSubmitMisbehaviourResponse): _172.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    typeUrl: string;
                    encode(message: _171.QueryClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.QueryClientStateRequest;
                    fromPartial(object: Partial<_171.QueryClientStateRequest>): _171.QueryClientStateRequest;
                    fromAmino(object: _171.QueryClientStateRequestAmino): _171.QueryClientStateRequest;
                    toAmino(message: _171.QueryClientStateRequest): _171.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _171.QueryClientStateRequestAminoMsg): _171.QueryClientStateRequest;
                    toAminoMsg(message: _171.QueryClientStateRequest): _171.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _171.QueryClientStateRequestProtoMsg): _171.QueryClientStateRequest;
                    toProto(message: _171.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _171.QueryClientStateRequest): _171.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    typeUrl: string;
                    encode(message: _171.QueryClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.QueryClientStateResponse;
                    fromPartial(object: Partial<_171.QueryClientStateResponse>): _171.QueryClientStateResponse;
                    fromAmino(object: _171.QueryClientStateResponseAmino): _171.QueryClientStateResponse;
                    toAmino(message: _171.QueryClientStateResponse): _171.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _171.QueryClientStateResponseAminoMsg): _171.QueryClientStateResponse;
                    toAminoMsg(message: _171.QueryClientStateResponse): _171.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _171.QueryClientStateResponseProtoMsg): _171.QueryClientStateResponse;
                    toProto(message: _171.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _171.QueryClientStateResponse): _171.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    typeUrl: string;
                    encode(message: _171.QueryClientStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.QueryClientStatesRequest;
                    fromPartial(object: Partial<_171.QueryClientStatesRequest>): _171.QueryClientStatesRequest;
                    fromAmino(object: _171.QueryClientStatesRequestAmino): _171.QueryClientStatesRequest;
                    toAmino(message: _171.QueryClientStatesRequest): _171.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _171.QueryClientStatesRequestAminoMsg): _171.QueryClientStatesRequest;
                    toAminoMsg(message: _171.QueryClientStatesRequest): _171.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _171.QueryClientStatesRequestProtoMsg): _171.QueryClientStatesRequest;
                    toProto(message: _171.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _171.QueryClientStatesRequest): _171.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    typeUrl: string;
                    encode(message: _171.QueryClientStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.QueryClientStatesResponse;
                    fromPartial(object: Partial<_171.QueryClientStatesResponse>): _171.QueryClientStatesResponse;
                    fromAmino(object: _171.QueryClientStatesResponseAmino): _171.QueryClientStatesResponse;
                    toAmino(message: _171.QueryClientStatesResponse): _171.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _171.QueryClientStatesResponseAminoMsg): _171.QueryClientStatesResponse;
                    toAminoMsg(message: _171.QueryClientStatesResponse): _171.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _171.QueryClientStatesResponseProtoMsg): _171.QueryClientStatesResponse;
                    toProto(message: _171.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _171.QueryClientStatesResponse): _171.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _171.QueryConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.QueryConsensusStateRequest;
                    fromPartial(object: Partial<_171.QueryConsensusStateRequest>): _171.QueryConsensusStateRequest;
                    fromAmino(object: _171.QueryConsensusStateRequestAmino): _171.QueryConsensusStateRequest;
                    toAmino(message: _171.QueryConsensusStateRequest): _171.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _171.QueryConsensusStateRequestAminoMsg): _171.QueryConsensusStateRequest;
                    toAminoMsg(message: _171.QueryConsensusStateRequest): _171.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _171.QueryConsensusStateRequestProtoMsg): _171.QueryConsensusStateRequest;
                    toProto(message: _171.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _171.QueryConsensusStateRequest): _171.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _171.QueryConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.QueryConsensusStateResponse;
                    fromPartial(object: Partial<_171.QueryConsensusStateResponse>): _171.QueryConsensusStateResponse;
                    fromAmino(object: _171.QueryConsensusStateResponseAmino): _171.QueryConsensusStateResponse;
                    toAmino(message: _171.QueryConsensusStateResponse): _171.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _171.QueryConsensusStateResponseAminoMsg): _171.QueryConsensusStateResponse;
                    toAminoMsg(message: _171.QueryConsensusStateResponse): _171.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _171.QueryConsensusStateResponseProtoMsg): _171.QueryConsensusStateResponse;
                    toProto(message: _171.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _171.QueryConsensusStateResponse): _171.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    typeUrl: string;
                    encode(message: _171.QueryConsensusStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.QueryConsensusStatesRequest;
                    fromPartial(object: Partial<_171.QueryConsensusStatesRequest>): _171.QueryConsensusStatesRequest;
                    fromAmino(object: _171.QueryConsensusStatesRequestAmino): _171.QueryConsensusStatesRequest;
                    toAmino(message: _171.QueryConsensusStatesRequest): _171.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _171.QueryConsensusStatesRequestAminoMsg): _171.QueryConsensusStatesRequest;
                    toAminoMsg(message: _171.QueryConsensusStatesRequest): _171.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _171.QueryConsensusStatesRequestProtoMsg): _171.QueryConsensusStatesRequest;
                    toProto(message: _171.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _171.QueryConsensusStatesRequest): _171.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    typeUrl: string;
                    encode(message: _171.QueryConsensusStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.QueryConsensusStatesResponse;
                    fromPartial(object: Partial<_171.QueryConsensusStatesResponse>): _171.QueryConsensusStatesResponse;
                    fromAmino(object: _171.QueryConsensusStatesResponseAmino): _171.QueryConsensusStatesResponse;
                    toAmino(message: _171.QueryConsensusStatesResponse): _171.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _171.QueryConsensusStatesResponseAminoMsg): _171.QueryConsensusStatesResponse;
                    toAminoMsg(message: _171.QueryConsensusStatesResponse): _171.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _171.QueryConsensusStatesResponseProtoMsg): _171.QueryConsensusStatesResponse;
                    toProto(message: _171.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _171.QueryConsensusStatesResponse): _171.QueryConsensusStatesResponseProtoMsg;
                };
                QueryConsensusStateHeightsRequest: {
                    typeUrl: string;
                    encode(message: _171.QueryConsensusStateHeightsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.QueryConsensusStateHeightsRequest;
                    fromPartial(object: Partial<_171.QueryConsensusStateHeightsRequest>): _171.QueryConsensusStateHeightsRequest;
                    fromAmino(object: _171.QueryConsensusStateHeightsRequestAmino): _171.QueryConsensusStateHeightsRequest;
                    toAmino(message: _171.QueryConsensusStateHeightsRequest): _171.QueryConsensusStateHeightsRequestAmino;
                    fromAminoMsg(object: _171.QueryConsensusStateHeightsRequestAminoMsg): _171.QueryConsensusStateHeightsRequest;
                    toAminoMsg(message: _171.QueryConsensusStateHeightsRequest): _171.QueryConsensusStateHeightsRequestAminoMsg;
                    fromProtoMsg(message: _171.QueryConsensusStateHeightsRequestProtoMsg): _171.QueryConsensusStateHeightsRequest;
                    toProto(message: _171.QueryConsensusStateHeightsRequest): Uint8Array;
                    toProtoMsg(message: _171.QueryConsensusStateHeightsRequest): _171.QueryConsensusStateHeightsRequestProtoMsg;
                };
                QueryConsensusStateHeightsResponse: {
                    typeUrl: string;
                    encode(message: _171.QueryConsensusStateHeightsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.QueryConsensusStateHeightsResponse;
                    fromPartial(object: Partial<_171.QueryConsensusStateHeightsResponse>): _171.QueryConsensusStateHeightsResponse;
                    fromAmino(object: _171.QueryConsensusStateHeightsResponseAmino): _171.QueryConsensusStateHeightsResponse;
                    toAmino(message: _171.QueryConsensusStateHeightsResponse): _171.QueryConsensusStateHeightsResponseAmino;
                    fromAminoMsg(object: _171.QueryConsensusStateHeightsResponseAminoMsg): _171.QueryConsensusStateHeightsResponse;
                    toAminoMsg(message: _171.QueryConsensusStateHeightsResponse): _171.QueryConsensusStateHeightsResponseAminoMsg;
                    fromProtoMsg(message: _171.QueryConsensusStateHeightsResponseProtoMsg): _171.QueryConsensusStateHeightsResponse;
                    toProto(message: _171.QueryConsensusStateHeightsResponse): Uint8Array;
                    toProtoMsg(message: _171.QueryConsensusStateHeightsResponse): _171.QueryConsensusStateHeightsResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    typeUrl: string;
                    encode(message: _171.QueryClientStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.QueryClientStatusRequest;
                    fromPartial(object: Partial<_171.QueryClientStatusRequest>): _171.QueryClientStatusRequest;
                    fromAmino(object: _171.QueryClientStatusRequestAmino): _171.QueryClientStatusRequest;
                    toAmino(message: _171.QueryClientStatusRequest): _171.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _171.QueryClientStatusRequestAminoMsg): _171.QueryClientStatusRequest;
                    toAminoMsg(message: _171.QueryClientStatusRequest): _171.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _171.QueryClientStatusRequestProtoMsg): _171.QueryClientStatusRequest;
                    toProto(message: _171.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _171.QueryClientStatusRequest): _171.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    typeUrl: string;
                    encode(message: _171.QueryClientStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.QueryClientStatusResponse;
                    fromPartial(object: Partial<_171.QueryClientStatusResponse>): _171.QueryClientStatusResponse;
                    fromAmino(object: _171.QueryClientStatusResponseAmino): _171.QueryClientStatusResponse;
                    toAmino(message: _171.QueryClientStatusResponse): _171.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _171.QueryClientStatusResponseAminoMsg): _171.QueryClientStatusResponse;
                    toAminoMsg(message: _171.QueryClientStatusResponse): _171.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _171.QueryClientStatusResponseProtoMsg): _171.QueryClientStatusResponse;
                    toProto(message: _171.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _171.QueryClientStatusResponse): _171.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    typeUrl: string;
                    encode(_: _171.QueryClientParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.QueryClientParamsRequest;
                    fromPartial(_: Partial<_171.QueryClientParamsRequest>): _171.QueryClientParamsRequest;
                    fromAmino(_: _171.QueryClientParamsRequestAmino): _171.QueryClientParamsRequest;
                    toAmino(_: _171.QueryClientParamsRequest): _171.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _171.QueryClientParamsRequestAminoMsg): _171.QueryClientParamsRequest;
                    toAminoMsg(message: _171.QueryClientParamsRequest): _171.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _171.QueryClientParamsRequestProtoMsg): _171.QueryClientParamsRequest;
                    toProto(message: _171.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _171.QueryClientParamsRequest): _171.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    typeUrl: string;
                    encode(message: _171.QueryClientParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.QueryClientParamsResponse;
                    fromPartial(object: Partial<_171.QueryClientParamsResponse>): _171.QueryClientParamsResponse;
                    fromAmino(object: _171.QueryClientParamsResponseAmino): _171.QueryClientParamsResponse;
                    toAmino(message: _171.QueryClientParamsResponse): _171.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _171.QueryClientParamsResponseAminoMsg): _171.QueryClientParamsResponse;
                    toAminoMsg(message: _171.QueryClientParamsResponse): _171.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _171.QueryClientParamsResponseProtoMsg): _171.QueryClientParamsResponse;
                    toProto(message: _171.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _171.QueryClientParamsResponse): _171.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    typeUrl: string;
                    encode(_: _171.QueryUpgradedClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.QueryUpgradedClientStateRequest;
                    fromPartial(_: Partial<_171.QueryUpgradedClientStateRequest>): _171.QueryUpgradedClientStateRequest;
                    fromAmino(_: _171.QueryUpgradedClientStateRequestAmino): _171.QueryUpgradedClientStateRequest;
                    toAmino(_: _171.QueryUpgradedClientStateRequest): _171.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _171.QueryUpgradedClientStateRequestAminoMsg): _171.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _171.QueryUpgradedClientStateRequest): _171.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _171.QueryUpgradedClientStateRequestProtoMsg): _171.QueryUpgradedClientStateRequest;
                    toProto(message: _171.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _171.QueryUpgradedClientStateRequest): _171.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    typeUrl: string;
                    encode(message: _171.QueryUpgradedClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.QueryUpgradedClientStateResponse;
                    fromPartial(object: Partial<_171.QueryUpgradedClientStateResponse>): _171.QueryUpgradedClientStateResponse;
                    fromAmino(object: _171.QueryUpgradedClientStateResponseAmino): _171.QueryUpgradedClientStateResponse;
                    toAmino(message: _171.QueryUpgradedClientStateResponse): _171.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _171.QueryUpgradedClientStateResponseAminoMsg): _171.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _171.QueryUpgradedClientStateResponse): _171.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _171.QueryUpgradedClientStateResponseProtoMsg): _171.QueryUpgradedClientStateResponse;
                    toProto(message: _171.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _171.QueryUpgradedClientStateResponse): _171.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    typeUrl: string;
                    encode(_: _171.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: Partial<_171.QueryUpgradedConsensusStateRequest>): _171.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _171.QueryUpgradedConsensusStateRequestAmino): _171.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _171.QueryUpgradedConsensusStateRequest): _171.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _171.QueryUpgradedConsensusStateRequestAminoMsg): _171.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _171.QueryUpgradedConsensusStateRequest): _171.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _171.QueryUpgradedConsensusStateRequestProtoMsg): _171.QueryUpgradedConsensusStateRequest;
                    toProto(message: _171.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _171.QueryUpgradedConsensusStateRequest): _171.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _171.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: Partial<_171.QueryUpgradedConsensusStateResponse>): _171.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _171.QueryUpgradedConsensusStateResponseAmino): _171.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _171.QueryUpgradedConsensusStateResponse): _171.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _171.QueryUpgradedConsensusStateResponseAminoMsg): _171.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _171.QueryUpgradedConsensusStateResponse): _171.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _171.QueryUpgradedConsensusStateResponseProtoMsg): _171.QueryUpgradedConsensusStateResponse;
                    toProto(message: _171.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _171.QueryUpgradedConsensusStateResponse): _171.QueryUpgradedConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _170.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.GenesisState;
                    fromPartial(object: Partial<_170.GenesisState>): _170.GenesisState;
                    fromAmino(object: _170.GenesisStateAmino): _170.GenesisState;
                    toAmino(message: _170.GenesisState): _170.GenesisStateAmino;
                    fromAminoMsg(object: _170.GenesisStateAminoMsg): _170.GenesisState;
                    toAminoMsg(message: _170.GenesisState): _170.GenesisStateAminoMsg;
                    fromProtoMsg(message: _170.GenesisStateProtoMsg): _170.GenesisState;
                    toProto(message: _170.GenesisState): Uint8Array;
                    toProtoMsg(message: _170.GenesisState): _170.GenesisStateProtoMsg;
                };
                GenesisMetadata: {
                    typeUrl: string;
                    encode(message: _170.GenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.GenesisMetadata;
                    fromPartial(object: Partial<_170.GenesisMetadata>): _170.GenesisMetadata;
                    fromAmino(object: _170.GenesisMetadataAmino): _170.GenesisMetadata;
                    toAmino(message: _170.GenesisMetadata): _170.GenesisMetadataAmino;
                    fromAminoMsg(object: _170.GenesisMetadataAminoMsg): _170.GenesisMetadata;
                    toAminoMsg(message: _170.GenesisMetadata): _170.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _170.GenesisMetadataProtoMsg): _170.GenesisMetadata;
                    toProto(message: _170.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _170.GenesisMetadata): _170.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    typeUrl: string;
                    encode(message: _170.IdentifiedGenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.IdentifiedGenesisMetadata;
                    fromPartial(object: Partial<_170.IdentifiedGenesisMetadata>): _170.IdentifiedGenesisMetadata;
                    fromAmino(object: _170.IdentifiedGenesisMetadataAmino): _170.IdentifiedGenesisMetadata;
                    toAmino(message: _170.IdentifiedGenesisMetadata): _170.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _170.IdentifiedGenesisMetadataAminoMsg): _170.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _170.IdentifiedGenesisMetadata): _170.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _170.IdentifiedGenesisMetadataProtoMsg): _170.IdentifiedGenesisMetadata;
                    toProto(message: _170.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _170.IdentifiedGenesisMetadata): _170.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    typeUrl: string;
                    encode(message: _169.IdentifiedClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.IdentifiedClientState;
                    fromPartial(object: Partial<_169.IdentifiedClientState>): _169.IdentifiedClientState;
                    fromAmino(object: _169.IdentifiedClientStateAmino): _169.IdentifiedClientState;
                    toAmino(message: _169.IdentifiedClientState): _169.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _169.IdentifiedClientStateAminoMsg): _169.IdentifiedClientState;
                    toAminoMsg(message: _169.IdentifiedClientState): _169.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _169.IdentifiedClientStateProtoMsg): _169.IdentifiedClientState;
                    toProto(message: _169.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _169.IdentifiedClientState): _169.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    encode(message: _169.ConsensusStateWithHeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.ConsensusStateWithHeight;
                    fromPartial(object: Partial<_169.ConsensusStateWithHeight>): _169.ConsensusStateWithHeight;
                    fromAmino(object: _169.ConsensusStateWithHeightAmino): _169.ConsensusStateWithHeight;
                    toAmino(message: _169.ConsensusStateWithHeight): _169.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _169.ConsensusStateWithHeightAminoMsg): _169.ConsensusStateWithHeight;
                    toAminoMsg(message: _169.ConsensusStateWithHeight): _169.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _169.ConsensusStateWithHeightProtoMsg): _169.ConsensusStateWithHeight;
                    toProto(message: _169.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _169.ConsensusStateWithHeight): _169.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    encode(message: _169.ClientConsensusStates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.ClientConsensusStates;
                    fromPartial(object: Partial<_169.ClientConsensusStates>): _169.ClientConsensusStates;
                    fromAmino(object: _169.ClientConsensusStatesAmino): _169.ClientConsensusStates;
                    toAmino(message: _169.ClientConsensusStates): _169.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _169.ClientConsensusStatesAminoMsg): _169.ClientConsensusStates;
                    toAminoMsg(message: _169.ClientConsensusStates): _169.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _169.ClientConsensusStatesProtoMsg): _169.ClientConsensusStates;
                    toProto(message: _169.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _169.ClientConsensusStates): _169.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    encode(message: _169.ClientUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.ClientUpdateProposal;
                    fromPartial(object: Partial<_169.ClientUpdateProposal>): _169.ClientUpdateProposal;
                    fromAmino(object: _169.ClientUpdateProposalAmino): _169.ClientUpdateProposal;
                    toAmino(message: _169.ClientUpdateProposal): _169.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _169.ClientUpdateProposalAminoMsg): _169.ClientUpdateProposal;
                    toAminoMsg(message: _169.ClientUpdateProposal): _169.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _169.ClientUpdateProposalProtoMsg): _169.ClientUpdateProposal;
                    toProto(message: _169.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _169.ClientUpdateProposal): _169.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    encode(message: _169.UpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.UpgradeProposal;
                    fromPartial(object: Partial<_169.UpgradeProposal>): _169.UpgradeProposal;
                    fromAmino(object: _169.UpgradeProposalAmino): _169.UpgradeProposal;
                    toAmino(message: _169.UpgradeProposal): _169.UpgradeProposalAmino;
                    fromAminoMsg(object: _169.UpgradeProposalAminoMsg): _169.UpgradeProposal;
                    toAminoMsg(message: _169.UpgradeProposal): _169.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _169.UpgradeProposalProtoMsg): _169.UpgradeProposal;
                    toProto(message: _169.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _169.UpgradeProposal): _169.UpgradeProposalProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    encode(message: _169.Height, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.Height;
                    fromPartial(object: Partial<_169.Height>): _169.Height;
                    fromAmino(object: _169.HeightAmino): _169.Height;
                    toAmino(message: _169.Height): _169.HeightAmino;
                    fromAminoMsg(object: _169.HeightAminoMsg): _169.Height;
                    toAminoMsg(message: _169.Height): _169.HeightAminoMsg;
                    fromProtoMsg(message: _169.HeightProtoMsg): _169.Height;
                    toProto(message: _169.Height): Uint8Array;
                    toProtoMsg(message: _169.Height): _169.HeightProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _169.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.Params;
                    fromPartial(object: Partial<_169.Params>): _169.Params;
                    fromAmino(object: _169.ParamsAmino): _169.Params;
                    toAmino(message: _169.Params): _169.ParamsAmino;
                    fromAminoMsg(object: _169.ParamsAminoMsg): _169.Params;
                    toAminoMsg(message: _169.Params): _169.ParamsAminoMsg;
                    fromProtoMsg(message: _169.ParamsProtoMsg): _169.Params;
                    toProto(message: _169.Params): Uint8Array;
                    toProtoMsg(message: _169.Params): _169.ParamsProtoMsg;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    typeUrl: string;
                    encode(message: _173.MerkleRoot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MerkleRoot;
                    fromPartial(object: Partial<_173.MerkleRoot>): _173.MerkleRoot;
                    fromAmino(object: _173.MerkleRootAmino): _173.MerkleRoot;
                    toAmino(message: _173.MerkleRoot): _173.MerkleRootAmino;
                    fromAminoMsg(object: _173.MerkleRootAminoMsg): _173.MerkleRoot;
                    toAminoMsg(message: _173.MerkleRoot): _173.MerkleRootAminoMsg;
                    fromProtoMsg(message: _173.MerkleRootProtoMsg): _173.MerkleRoot;
                    toProto(message: _173.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _173.MerkleRoot): _173.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    typeUrl: string;
                    encode(message: _173.MerklePrefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MerklePrefix;
                    fromPartial(object: Partial<_173.MerklePrefix>): _173.MerklePrefix;
                    fromAmino(object: _173.MerklePrefixAmino): _173.MerklePrefix;
                    toAmino(message: _173.MerklePrefix): _173.MerklePrefixAmino;
                    fromAminoMsg(object: _173.MerklePrefixAminoMsg): _173.MerklePrefix;
                    toAminoMsg(message: _173.MerklePrefix): _173.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _173.MerklePrefixProtoMsg): _173.MerklePrefix;
                    toProto(message: _173.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _173.MerklePrefix): _173.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    typeUrl: string;
                    encode(message: _173.MerklePath, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MerklePath;
                    fromPartial(object: Partial<_173.MerklePath>): _173.MerklePath;
                    fromAmino(object: _173.MerklePathAmino): _173.MerklePath;
                    toAmino(message: _173.MerklePath): _173.MerklePathAmino;
                    fromAminoMsg(object: _173.MerklePathAminoMsg): _173.MerklePath;
                    toAminoMsg(message: _173.MerklePath): _173.MerklePathAminoMsg;
                    fromProtoMsg(message: _173.MerklePathProtoMsg): _173.MerklePath;
                    toProto(message: _173.MerklePath): Uint8Array;
                    toProtoMsg(message: _173.MerklePath): _173.MerklePathProtoMsg;
                };
                MerkleProof: {
                    typeUrl: string;
                    encode(message: _173.MerkleProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MerkleProof;
                    fromPartial(object: Partial<_173.MerkleProof>): _173.MerkleProof;
                    fromAmino(object: _173.MerkleProofAmino): _173.MerkleProof;
                    toAmino(message: _173.MerkleProof): _173.MerkleProofAmino;
                    fromAminoMsg(object: _173.MerkleProofAminoMsg): _173.MerkleProof;
                    toAminoMsg(message: _173.MerkleProof): _173.MerkleProofAminoMsg;
                    fromProtoMsg(message: _173.MerkleProofProtoMsg): _173.MerkleProof;
                    toProto(message: _173.MerkleProof): Uint8Array;
                    toProtoMsg(message: _173.MerkleProof): _173.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _369.MsgClientImpl;
                QueryClientImpl: typeof _362.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _176.QueryConnectionRequest): Promise<_176.QueryConnectionResponse>;
                    connections(request?: _176.QueryConnectionsRequest): Promise<_176.QueryConnectionsResponse>;
                    clientConnections(request: _176.QueryClientConnectionsRequest): Promise<_176.QueryClientConnectionsResponse>;
                    connectionClientState(request: _176.QueryConnectionClientStateRequest): Promise<_176.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _176.QueryConnectionConsensusStateRequest): Promise<_176.QueryConnectionConsensusStateResponse>;
                    connectionParams(request?: _176.QueryConnectionParamsRequest): Promise<_176.QueryConnectionParamsResponse>;
                };
                registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _177.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _177.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _177.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _177.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _177.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _177.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _177.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _177.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _177.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _177.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _177.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _177.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _177.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _177.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _177.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _177.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _177.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _177.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _177.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _177.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _177.MsgConnectionOpenInit) => _177.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _177.MsgConnectionOpenInitAmino) => _177.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _177.MsgConnectionOpenTry) => _177.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _177.MsgConnectionOpenTryAmino) => _177.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _177.MsgConnectionOpenAck) => _177.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _177.MsgConnectionOpenAckAmino) => _177.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _177.MsgConnectionOpenConfirm) => _177.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _177.MsgConnectionOpenConfirmAmino) => _177.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    typeUrl: string;
                    encode(message: _177.MsgConnectionOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.MsgConnectionOpenInit;
                    fromPartial(object: Partial<_177.MsgConnectionOpenInit>): _177.MsgConnectionOpenInit;
                    fromAmino(object: _177.MsgConnectionOpenInitAmino): _177.MsgConnectionOpenInit;
                    toAmino(message: _177.MsgConnectionOpenInit): _177.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _177.MsgConnectionOpenInitAminoMsg): _177.MsgConnectionOpenInit;
                    toAminoMsg(message: _177.MsgConnectionOpenInit): _177.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _177.MsgConnectionOpenInitProtoMsg): _177.MsgConnectionOpenInit;
                    toProto(message: _177.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _177.MsgConnectionOpenInit): _177.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    typeUrl: string;
                    encode(_: _177.MsgConnectionOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.MsgConnectionOpenInitResponse;
                    fromPartial(_: Partial<_177.MsgConnectionOpenInitResponse>): _177.MsgConnectionOpenInitResponse;
                    fromAmino(_: _177.MsgConnectionOpenInitResponseAmino): _177.MsgConnectionOpenInitResponse;
                    toAmino(_: _177.MsgConnectionOpenInitResponse): _177.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _177.MsgConnectionOpenInitResponseAminoMsg): _177.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _177.MsgConnectionOpenInitResponse): _177.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _177.MsgConnectionOpenInitResponseProtoMsg): _177.MsgConnectionOpenInitResponse;
                    toProto(message: _177.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _177.MsgConnectionOpenInitResponse): _177.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    typeUrl: string;
                    encode(message: _177.MsgConnectionOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.MsgConnectionOpenTry;
                    fromPartial(object: Partial<_177.MsgConnectionOpenTry>): _177.MsgConnectionOpenTry;
                    fromAmino(object: _177.MsgConnectionOpenTryAmino): _177.MsgConnectionOpenTry;
                    toAmino(message: _177.MsgConnectionOpenTry): _177.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _177.MsgConnectionOpenTryAminoMsg): _177.MsgConnectionOpenTry;
                    toAminoMsg(message: _177.MsgConnectionOpenTry): _177.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _177.MsgConnectionOpenTryProtoMsg): _177.MsgConnectionOpenTry;
                    toProto(message: _177.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _177.MsgConnectionOpenTry): _177.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    typeUrl: string;
                    encode(_: _177.MsgConnectionOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.MsgConnectionOpenTryResponse;
                    fromPartial(_: Partial<_177.MsgConnectionOpenTryResponse>): _177.MsgConnectionOpenTryResponse;
                    fromAmino(_: _177.MsgConnectionOpenTryResponseAmino): _177.MsgConnectionOpenTryResponse;
                    toAmino(_: _177.MsgConnectionOpenTryResponse): _177.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _177.MsgConnectionOpenTryResponseAminoMsg): _177.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _177.MsgConnectionOpenTryResponse): _177.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _177.MsgConnectionOpenTryResponseProtoMsg): _177.MsgConnectionOpenTryResponse;
                    toProto(message: _177.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _177.MsgConnectionOpenTryResponse): _177.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    typeUrl: string;
                    encode(message: _177.MsgConnectionOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.MsgConnectionOpenAck;
                    fromPartial(object: Partial<_177.MsgConnectionOpenAck>): _177.MsgConnectionOpenAck;
                    fromAmino(object: _177.MsgConnectionOpenAckAmino): _177.MsgConnectionOpenAck;
                    toAmino(message: _177.MsgConnectionOpenAck): _177.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _177.MsgConnectionOpenAckAminoMsg): _177.MsgConnectionOpenAck;
                    toAminoMsg(message: _177.MsgConnectionOpenAck): _177.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _177.MsgConnectionOpenAckProtoMsg): _177.MsgConnectionOpenAck;
                    toProto(message: _177.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _177.MsgConnectionOpenAck): _177.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _177.MsgConnectionOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.MsgConnectionOpenAckResponse;
                    fromPartial(_: Partial<_177.MsgConnectionOpenAckResponse>): _177.MsgConnectionOpenAckResponse;
                    fromAmino(_: _177.MsgConnectionOpenAckResponseAmino): _177.MsgConnectionOpenAckResponse;
                    toAmino(_: _177.MsgConnectionOpenAckResponse): _177.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _177.MsgConnectionOpenAckResponseAminoMsg): _177.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _177.MsgConnectionOpenAckResponse): _177.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _177.MsgConnectionOpenAckResponseProtoMsg): _177.MsgConnectionOpenAckResponse;
                    toProto(message: _177.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _177.MsgConnectionOpenAckResponse): _177.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    typeUrl: string;
                    encode(message: _177.MsgConnectionOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.MsgConnectionOpenConfirm;
                    fromPartial(object: Partial<_177.MsgConnectionOpenConfirm>): _177.MsgConnectionOpenConfirm;
                    fromAmino(object: _177.MsgConnectionOpenConfirmAmino): _177.MsgConnectionOpenConfirm;
                    toAmino(message: _177.MsgConnectionOpenConfirm): _177.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _177.MsgConnectionOpenConfirmAminoMsg): _177.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _177.MsgConnectionOpenConfirm): _177.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _177.MsgConnectionOpenConfirmProtoMsg): _177.MsgConnectionOpenConfirm;
                    toProto(message: _177.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _177.MsgConnectionOpenConfirm): _177.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _177.MsgConnectionOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: Partial<_177.MsgConnectionOpenConfirmResponse>): _177.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _177.MsgConnectionOpenConfirmResponseAmino): _177.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _177.MsgConnectionOpenConfirmResponse): _177.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _177.MsgConnectionOpenConfirmResponseAminoMsg): _177.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _177.MsgConnectionOpenConfirmResponse): _177.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _177.MsgConnectionOpenConfirmResponseProtoMsg): _177.MsgConnectionOpenConfirmResponse;
                    toProto(message: _177.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _177.MsgConnectionOpenConfirmResponse): _177.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    typeUrl: string;
                    encode(message: _176.QueryConnectionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.QueryConnectionRequest;
                    fromPartial(object: Partial<_176.QueryConnectionRequest>): _176.QueryConnectionRequest;
                    fromAmino(object: _176.QueryConnectionRequestAmino): _176.QueryConnectionRequest;
                    toAmino(message: _176.QueryConnectionRequest): _176.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _176.QueryConnectionRequestAminoMsg): _176.QueryConnectionRequest;
                    toAminoMsg(message: _176.QueryConnectionRequest): _176.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _176.QueryConnectionRequestProtoMsg): _176.QueryConnectionRequest;
                    toProto(message: _176.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _176.QueryConnectionRequest): _176.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    typeUrl: string;
                    encode(message: _176.QueryConnectionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.QueryConnectionResponse;
                    fromPartial(object: Partial<_176.QueryConnectionResponse>): _176.QueryConnectionResponse;
                    fromAmino(object: _176.QueryConnectionResponseAmino): _176.QueryConnectionResponse;
                    toAmino(message: _176.QueryConnectionResponse): _176.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _176.QueryConnectionResponseAminoMsg): _176.QueryConnectionResponse;
                    toAminoMsg(message: _176.QueryConnectionResponse): _176.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _176.QueryConnectionResponseProtoMsg): _176.QueryConnectionResponse;
                    toProto(message: _176.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _176.QueryConnectionResponse): _176.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _176.QueryConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.QueryConnectionsRequest;
                    fromPartial(object: Partial<_176.QueryConnectionsRequest>): _176.QueryConnectionsRequest;
                    fromAmino(object: _176.QueryConnectionsRequestAmino): _176.QueryConnectionsRequest;
                    toAmino(message: _176.QueryConnectionsRequest): _176.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _176.QueryConnectionsRequestAminoMsg): _176.QueryConnectionsRequest;
                    toAminoMsg(message: _176.QueryConnectionsRequest): _176.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _176.QueryConnectionsRequestProtoMsg): _176.QueryConnectionsRequest;
                    toProto(message: _176.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _176.QueryConnectionsRequest): _176.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _176.QueryConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.QueryConnectionsResponse;
                    fromPartial(object: Partial<_176.QueryConnectionsResponse>): _176.QueryConnectionsResponse;
                    fromAmino(object: _176.QueryConnectionsResponseAmino): _176.QueryConnectionsResponse;
                    toAmino(message: _176.QueryConnectionsResponse): _176.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _176.QueryConnectionsResponseAminoMsg): _176.QueryConnectionsResponse;
                    toAminoMsg(message: _176.QueryConnectionsResponse): _176.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _176.QueryConnectionsResponseProtoMsg): _176.QueryConnectionsResponse;
                    toProto(message: _176.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _176.QueryConnectionsResponse): _176.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _176.QueryClientConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.QueryClientConnectionsRequest;
                    fromPartial(object: Partial<_176.QueryClientConnectionsRequest>): _176.QueryClientConnectionsRequest;
                    fromAmino(object: _176.QueryClientConnectionsRequestAmino): _176.QueryClientConnectionsRequest;
                    toAmino(message: _176.QueryClientConnectionsRequest): _176.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _176.QueryClientConnectionsRequestAminoMsg): _176.QueryClientConnectionsRequest;
                    toAminoMsg(message: _176.QueryClientConnectionsRequest): _176.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _176.QueryClientConnectionsRequestProtoMsg): _176.QueryClientConnectionsRequest;
                    toProto(message: _176.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _176.QueryClientConnectionsRequest): _176.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _176.QueryClientConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.QueryClientConnectionsResponse;
                    fromPartial(object: Partial<_176.QueryClientConnectionsResponse>): _176.QueryClientConnectionsResponse;
                    fromAmino(object: _176.QueryClientConnectionsResponseAmino): _176.QueryClientConnectionsResponse;
                    toAmino(message: _176.QueryClientConnectionsResponse): _176.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _176.QueryClientConnectionsResponseAminoMsg): _176.QueryClientConnectionsResponse;
                    toAminoMsg(message: _176.QueryClientConnectionsResponse): _176.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _176.QueryClientConnectionsResponseProtoMsg): _176.QueryClientConnectionsResponse;
                    toProto(message: _176.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _176.QueryClientConnectionsResponse): _176.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    typeUrl: string;
                    encode(message: _176.QueryConnectionClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.QueryConnectionClientStateRequest;
                    fromPartial(object: Partial<_176.QueryConnectionClientStateRequest>): _176.QueryConnectionClientStateRequest;
                    fromAmino(object: _176.QueryConnectionClientStateRequestAmino): _176.QueryConnectionClientStateRequest;
                    toAmino(message: _176.QueryConnectionClientStateRequest): _176.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _176.QueryConnectionClientStateRequestAminoMsg): _176.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _176.QueryConnectionClientStateRequest): _176.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _176.QueryConnectionClientStateRequestProtoMsg): _176.QueryConnectionClientStateRequest;
                    toProto(message: _176.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _176.QueryConnectionClientStateRequest): _176.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    typeUrl: string;
                    encode(message: _176.QueryConnectionClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.QueryConnectionClientStateResponse;
                    fromPartial(object: Partial<_176.QueryConnectionClientStateResponse>): _176.QueryConnectionClientStateResponse;
                    fromAmino(object: _176.QueryConnectionClientStateResponseAmino): _176.QueryConnectionClientStateResponse;
                    toAmino(message: _176.QueryConnectionClientStateResponse): _176.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _176.QueryConnectionClientStateResponseAminoMsg): _176.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _176.QueryConnectionClientStateResponse): _176.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _176.QueryConnectionClientStateResponseProtoMsg): _176.QueryConnectionClientStateResponse;
                    toProto(message: _176.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _176.QueryConnectionClientStateResponse): _176.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _176.QueryConnectionConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.QueryConnectionConsensusStateRequest;
                    fromPartial(object: Partial<_176.QueryConnectionConsensusStateRequest>): _176.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _176.QueryConnectionConsensusStateRequestAmino): _176.QueryConnectionConsensusStateRequest;
                    toAmino(message: _176.QueryConnectionConsensusStateRequest): _176.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _176.QueryConnectionConsensusStateRequestAminoMsg): _176.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _176.QueryConnectionConsensusStateRequest): _176.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _176.QueryConnectionConsensusStateRequestProtoMsg): _176.QueryConnectionConsensusStateRequest;
                    toProto(message: _176.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _176.QueryConnectionConsensusStateRequest): _176.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _176.QueryConnectionConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.QueryConnectionConsensusStateResponse;
                    fromPartial(object: Partial<_176.QueryConnectionConsensusStateResponse>): _176.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _176.QueryConnectionConsensusStateResponseAmino): _176.QueryConnectionConsensusStateResponse;
                    toAmino(message: _176.QueryConnectionConsensusStateResponse): _176.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _176.QueryConnectionConsensusStateResponseAminoMsg): _176.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _176.QueryConnectionConsensusStateResponse): _176.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _176.QueryConnectionConsensusStateResponseProtoMsg): _176.QueryConnectionConsensusStateResponse;
                    toProto(message: _176.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _176.QueryConnectionConsensusStateResponse): _176.QueryConnectionConsensusStateResponseProtoMsg;
                };
                QueryConnectionParamsRequest: {
                    typeUrl: string;
                    encode(_: _176.QueryConnectionParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.QueryConnectionParamsRequest;
                    fromPartial(_: Partial<_176.QueryConnectionParamsRequest>): _176.QueryConnectionParamsRequest;
                    fromAmino(_: _176.QueryConnectionParamsRequestAmino): _176.QueryConnectionParamsRequest;
                    toAmino(_: _176.QueryConnectionParamsRequest): _176.QueryConnectionParamsRequestAmino;
                    fromAminoMsg(object: _176.QueryConnectionParamsRequestAminoMsg): _176.QueryConnectionParamsRequest;
                    toAminoMsg(message: _176.QueryConnectionParamsRequest): _176.QueryConnectionParamsRequestAminoMsg;
                    fromProtoMsg(message: _176.QueryConnectionParamsRequestProtoMsg): _176.QueryConnectionParamsRequest;
                    toProto(message: _176.QueryConnectionParamsRequest): Uint8Array;
                    toProtoMsg(message: _176.QueryConnectionParamsRequest): _176.QueryConnectionParamsRequestProtoMsg;
                };
                QueryConnectionParamsResponse: {
                    typeUrl: string;
                    encode(message: _176.QueryConnectionParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.QueryConnectionParamsResponse;
                    fromPartial(object: Partial<_176.QueryConnectionParamsResponse>): _176.QueryConnectionParamsResponse;
                    fromAmino(object: _176.QueryConnectionParamsResponseAmino): _176.QueryConnectionParamsResponse;
                    toAmino(message: _176.QueryConnectionParamsResponse): _176.QueryConnectionParamsResponseAmino;
                    fromAminoMsg(object: _176.QueryConnectionParamsResponseAminoMsg): _176.QueryConnectionParamsResponse;
                    toAminoMsg(message: _176.QueryConnectionParamsResponse): _176.QueryConnectionParamsResponseAminoMsg;
                    fromProtoMsg(message: _176.QueryConnectionParamsResponseProtoMsg): _176.QueryConnectionParamsResponse;
                    toProto(message: _176.QueryConnectionParamsResponse): Uint8Array;
                    toProtoMsg(message: _176.QueryConnectionParamsResponse): _176.QueryConnectionParamsResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _175.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.GenesisState;
                    fromPartial(object: Partial<_175.GenesisState>): _175.GenesisState;
                    fromAmino(object: _175.GenesisStateAmino): _175.GenesisState;
                    toAmino(message: _175.GenesisState): _175.GenesisStateAmino;
                    fromAminoMsg(object: _175.GenesisStateAminoMsg): _175.GenesisState;
                    toAminoMsg(message: _175.GenesisState): _175.GenesisStateAminoMsg;
                    fromProtoMsg(message: _175.GenesisStateProtoMsg): _175.GenesisState;
                    toProto(message: _175.GenesisState): Uint8Array;
                    toProtoMsg(message: _175.GenesisState): _175.GenesisStateProtoMsg;
                };
                stateFromJSON(object: any): _174.State;
                stateToJSON(object: _174.State): string;
                State: typeof _174.State;
                StateSDKType: typeof _174.State;
                StateAmino: typeof _174.State;
                ConnectionEnd: {
                    typeUrl: string;
                    encode(message: _174.ConnectionEnd, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.ConnectionEnd;
                    fromPartial(object: Partial<_174.ConnectionEnd>): _174.ConnectionEnd;
                    fromAmino(object: _174.ConnectionEndAmino): _174.ConnectionEnd;
                    toAmino(message: _174.ConnectionEnd): _174.ConnectionEndAmino;
                    fromAminoMsg(object: _174.ConnectionEndAminoMsg): _174.ConnectionEnd;
                    toAminoMsg(message: _174.ConnectionEnd): _174.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _174.ConnectionEndProtoMsg): _174.ConnectionEnd;
                    toProto(message: _174.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _174.ConnectionEnd): _174.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    typeUrl: string;
                    encode(message: _174.IdentifiedConnection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.IdentifiedConnection;
                    fromPartial(object: Partial<_174.IdentifiedConnection>): _174.IdentifiedConnection;
                    fromAmino(object: _174.IdentifiedConnectionAmino): _174.IdentifiedConnection;
                    toAmino(message: _174.IdentifiedConnection): _174.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _174.IdentifiedConnectionAminoMsg): _174.IdentifiedConnection;
                    toAminoMsg(message: _174.IdentifiedConnection): _174.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _174.IdentifiedConnectionProtoMsg): _174.IdentifiedConnection;
                    toProto(message: _174.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _174.IdentifiedConnection): _174.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _174.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.Counterparty;
                    fromPartial(object: Partial<_174.Counterparty>): _174.Counterparty;
                    fromAmino(object: _174.CounterpartyAmino): _174.Counterparty;
                    toAmino(message: _174.Counterparty): _174.CounterpartyAmino;
                    fromAminoMsg(object: _174.CounterpartyAminoMsg): _174.Counterparty;
                    toAminoMsg(message: _174.Counterparty): _174.CounterpartyAminoMsg;
                    fromProtoMsg(message: _174.CounterpartyProtoMsg): _174.Counterparty;
                    toProto(message: _174.Counterparty): Uint8Array;
                    toProtoMsg(message: _174.Counterparty): _174.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    typeUrl: string;
                    encode(message: _174.ClientPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.ClientPaths;
                    fromPartial(object: Partial<_174.ClientPaths>): _174.ClientPaths;
                    fromAmino(object: _174.ClientPathsAmino): _174.ClientPaths;
                    toAmino(message: _174.ClientPaths): _174.ClientPathsAmino;
                    fromAminoMsg(object: _174.ClientPathsAminoMsg): _174.ClientPaths;
                    toAminoMsg(message: _174.ClientPaths): _174.ClientPathsAminoMsg;
                    fromProtoMsg(message: _174.ClientPathsProtoMsg): _174.ClientPaths;
                    toProto(message: _174.ClientPaths): Uint8Array;
                    toProtoMsg(message: _174.ClientPaths): _174.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    typeUrl: string;
                    encode(message: _174.ConnectionPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.ConnectionPaths;
                    fromPartial(object: Partial<_174.ConnectionPaths>): _174.ConnectionPaths;
                    fromAmino(object: _174.ConnectionPathsAmino): _174.ConnectionPaths;
                    toAmino(message: _174.ConnectionPaths): _174.ConnectionPathsAmino;
                    fromAminoMsg(object: _174.ConnectionPathsAminoMsg): _174.ConnectionPaths;
                    toAminoMsg(message: _174.ConnectionPaths): _174.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _174.ConnectionPathsProtoMsg): _174.ConnectionPaths;
                    toProto(message: _174.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _174.ConnectionPaths): _174.ConnectionPathsProtoMsg;
                };
                Version: {
                    typeUrl: string;
                    encode(message: _174.Version, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.Version;
                    fromPartial(object: Partial<_174.Version>): _174.Version;
                    fromAmino(object: _174.VersionAmino): _174.Version;
                    toAmino(message: _174.Version): _174.VersionAmino;
                    fromAminoMsg(object: _174.VersionAminoMsg): _174.Version;
                    toAminoMsg(message: _174.Version): _174.VersionAminoMsg;
                    fromProtoMsg(message: _174.VersionProtoMsg): _174.Version;
                    toProto(message: _174.Version): Uint8Array;
                    toProtoMsg(message: _174.Version): _174.VersionProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _174.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.Params;
                    fromPartial(object: Partial<_174.Params>): _174.Params;
                    fromAmino(object: _174.ParamsAmino): _174.Params;
                    toAmino(message: _174.Params): _174.ParamsAmino;
                    fromAminoMsg(object: _174.ParamsAminoMsg): _174.Params;
                    toAminoMsg(message: _174.Params): _174.ParamsAminoMsg;
                    fromProtoMsg(message: _174.ParamsProtoMsg): _174.Params;
                    toProto(message: _174.Params): Uint8Array;
                    toProtoMsg(message: _174.Params): _174.ParamsProtoMsg;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    typeUrl: string;
                    encode(message: _178.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.GenesisState;
                    fromPartial(object: Partial<_178.GenesisState>): _178.GenesisState;
                    fromAmino(object: _178.GenesisStateAmino): _178.GenesisState;
                    toAmino(message: _178.GenesisState): _178.GenesisStateAmino;
                    fromAminoMsg(object: _178.GenesisStateAminoMsg): _178.GenesisState;
                    toAminoMsg(message: _178.GenesisState): _178.GenesisStateAminoMsg;
                    fromProtoMsg(message: _178.GenesisStateProtoMsg): _178.GenesisState;
                    toProto(message: _178.GenesisState): Uint8Array;
                    toProtoMsg(message: _178.GenesisState): _178.GenesisStateProtoMsg;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v2: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _179.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.ClientState;
                    fromPartial(object: Partial<_179.ClientState>): _179.ClientState;
                    fromAmino(object: _179.ClientStateAmino): _179.ClientState;
                    toAmino(message: _179.ClientState): _179.ClientStateAmino;
                    fromAminoMsg(object: _179.ClientStateAminoMsg): _179.ClientState;
                    toAminoMsg(message: _179.ClientState): _179.ClientStateAminoMsg;
                    fromProtoMsg(message: _179.ClientStateProtoMsg): _179.ClientState;
                    toProto(message: _179.ClientState): Uint8Array;
                    toProtoMsg(message: _179.ClientState): _179.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v2: {
                dataTypeFromJSON(object: any): _180.DataType;
                dataTypeToJSON(object: _180.DataType): string;
                DataType: typeof _180.DataType;
                DataTypeSDKType: typeof _180.DataType;
                DataTypeAmino: typeof _180.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _180.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.ClientState;
                    fromPartial(object: Partial<_180.ClientState>): _180.ClientState;
                    fromAmino(object: _180.ClientStateAmino): _180.ClientState;
                    toAmino(message: _180.ClientState): _180.ClientStateAmino;
                    fromAminoMsg(object: _180.ClientStateAminoMsg): _180.ClientState;
                    toAminoMsg(message: _180.ClientState): _180.ClientStateAminoMsg;
                    fromProtoMsg(message: _180.ClientStateProtoMsg): _180.ClientState;
                    toProto(message: _180.ClientState): Uint8Array;
                    toProtoMsg(message: _180.ClientState): _180.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _180.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.ConsensusState;
                    fromPartial(object: Partial<_180.ConsensusState>): _180.ConsensusState;
                    fromAmino(object: _180.ConsensusStateAmino): _180.ConsensusState;
                    toAmino(message: _180.ConsensusState): _180.ConsensusStateAmino;
                    fromAminoMsg(object: _180.ConsensusStateAminoMsg): _180.ConsensusState;
                    toAminoMsg(message: _180.ConsensusState): _180.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _180.ConsensusStateProtoMsg): _180.ConsensusState;
                    toProto(message: _180.ConsensusState): Uint8Array;
                    toProtoMsg(message: _180.ConsensusState): _180.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _180.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.Header;
                    fromPartial(object: Partial<_180.Header>): _180.Header;
                    fromAmino(object: _180.HeaderAmino): _180.Header;
                    toAmino(message: _180.Header): _180.HeaderAmino;
                    fromAminoMsg(object: _180.HeaderAminoMsg): _180.Header;
                    toAminoMsg(message: _180.Header): _180.HeaderAminoMsg;
                    fromProtoMsg(message: _180.HeaderProtoMsg): _180.Header;
                    toProto(message: _180.Header): Uint8Array;
                    toProtoMsg(message: _180.Header): _180.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _180.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.Misbehaviour;
                    fromPartial(object: Partial<_180.Misbehaviour>): _180.Misbehaviour;
                    fromAmino(object: _180.MisbehaviourAmino): _180.Misbehaviour;
                    toAmino(message: _180.Misbehaviour): _180.MisbehaviourAmino;
                    fromAminoMsg(object: _180.MisbehaviourAminoMsg): _180.Misbehaviour;
                    toAminoMsg(message: _180.Misbehaviour): _180.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _180.MisbehaviourProtoMsg): _180.Misbehaviour;
                    toProto(message: _180.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _180.Misbehaviour): _180.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _180.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.SignatureAndData;
                    fromPartial(object: Partial<_180.SignatureAndData>): _180.SignatureAndData;
                    fromAmino(object: _180.SignatureAndDataAmino): _180.SignatureAndData;
                    toAmino(message: _180.SignatureAndData): _180.SignatureAndDataAmino;
                    fromAminoMsg(object: _180.SignatureAndDataAminoMsg): _180.SignatureAndData;
                    toAminoMsg(message: _180.SignatureAndData): _180.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _180.SignatureAndDataProtoMsg): _180.SignatureAndData;
                    toProto(message: _180.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _180.SignatureAndData): _180.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _180.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.TimestampedSignatureData;
                    fromPartial(object: Partial<_180.TimestampedSignatureData>): _180.TimestampedSignatureData;
                    fromAmino(object: _180.TimestampedSignatureDataAmino): _180.TimestampedSignatureData;
                    toAmino(message: _180.TimestampedSignatureData): _180.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _180.TimestampedSignatureDataAminoMsg): _180.TimestampedSignatureData;
                    toAminoMsg(message: _180.TimestampedSignatureData): _180.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _180.TimestampedSignatureDataProtoMsg): _180.TimestampedSignatureData;
                    toProto(message: _180.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _180.TimestampedSignatureData): _180.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _180.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.SignBytes;
                    fromPartial(object: Partial<_180.SignBytes>): _180.SignBytes;
                    fromAmino(object: _180.SignBytesAmino): _180.SignBytes;
                    toAmino(message: _180.SignBytes): _180.SignBytesAmino;
                    fromAminoMsg(object: _180.SignBytesAminoMsg): _180.SignBytes;
                    toAminoMsg(message: _180.SignBytes): _180.SignBytesAminoMsg;
                    fromProtoMsg(message: _180.SignBytesProtoMsg): _180.SignBytes;
                    toProto(message: _180.SignBytes): Uint8Array;
                    toProtoMsg(message: _180.SignBytes): _180.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _180.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.HeaderData;
                    fromPartial(object: Partial<_180.HeaderData>): _180.HeaderData;
                    fromAmino(object: _180.HeaderDataAmino): _180.HeaderData;
                    toAmino(message: _180.HeaderData): _180.HeaderDataAmino;
                    fromAminoMsg(object: _180.HeaderDataAminoMsg): _180.HeaderData;
                    toAminoMsg(message: _180.HeaderData): _180.HeaderDataAminoMsg;
                    fromProtoMsg(message: _180.HeaderDataProtoMsg): _180.HeaderData;
                    toProto(message: _180.HeaderData): Uint8Array;
                    toProtoMsg(message: _180.HeaderData): _180.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _180.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.ClientStateData;
                    fromPartial(object: Partial<_180.ClientStateData>): _180.ClientStateData;
                    fromAmino(object: _180.ClientStateDataAmino): _180.ClientStateData;
                    toAmino(message: _180.ClientStateData): _180.ClientStateDataAmino;
                    fromAminoMsg(object: _180.ClientStateDataAminoMsg): _180.ClientStateData;
                    toAminoMsg(message: _180.ClientStateData): _180.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _180.ClientStateDataProtoMsg): _180.ClientStateData;
                    toProto(message: _180.ClientStateData): Uint8Array;
                    toProtoMsg(message: _180.ClientStateData): _180.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _180.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.ConsensusStateData;
                    fromPartial(object: Partial<_180.ConsensusStateData>): _180.ConsensusStateData;
                    fromAmino(object: _180.ConsensusStateDataAmino): _180.ConsensusStateData;
                    toAmino(message: _180.ConsensusStateData): _180.ConsensusStateDataAmino;
                    fromAminoMsg(object: _180.ConsensusStateDataAminoMsg): _180.ConsensusStateData;
                    toAminoMsg(message: _180.ConsensusStateData): _180.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _180.ConsensusStateDataProtoMsg): _180.ConsensusStateData;
                    toProto(message: _180.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _180.ConsensusStateData): _180.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _180.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.ConnectionStateData;
                    fromPartial(object: Partial<_180.ConnectionStateData>): _180.ConnectionStateData;
                    fromAmino(object: _180.ConnectionStateDataAmino): _180.ConnectionStateData;
                    toAmino(message: _180.ConnectionStateData): _180.ConnectionStateDataAmino;
                    fromAminoMsg(object: _180.ConnectionStateDataAminoMsg): _180.ConnectionStateData;
                    toAminoMsg(message: _180.ConnectionStateData): _180.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _180.ConnectionStateDataProtoMsg): _180.ConnectionStateData;
                    toProto(message: _180.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _180.ConnectionStateData): _180.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _180.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.ChannelStateData;
                    fromPartial(object: Partial<_180.ChannelStateData>): _180.ChannelStateData;
                    fromAmino(object: _180.ChannelStateDataAmino): _180.ChannelStateData;
                    toAmino(message: _180.ChannelStateData): _180.ChannelStateDataAmino;
                    fromAminoMsg(object: _180.ChannelStateDataAminoMsg): _180.ChannelStateData;
                    toAminoMsg(message: _180.ChannelStateData): _180.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _180.ChannelStateDataProtoMsg): _180.ChannelStateData;
                    toProto(message: _180.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _180.ChannelStateData): _180.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _180.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.PacketCommitmentData;
                    fromPartial(object: Partial<_180.PacketCommitmentData>): _180.PacketCommitmentData;
                    fromAmino(object: _180.PacketCommitmentDataAmino): _180.PacketCommitmentData;
                    toAmino(message: _180.PacketCommitmentData): _180.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _180.PacketCommitmentDataAminoMsg): _180.PacketCommitmentData;
                    toAminoMsg(message: _180.PacketCommitmentData): _180.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _180.PacketCommitmentDataProtoMsg): _180.PacketCommitmentData;
                    toProto(message: _180.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _180.PacketCommitmentData): _180.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _180.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.PacketAcknowledgementData;
                    fromPartial(object: Partial<_180.PacketAcknowledgementData>): _180.PacketAcknowledgementData;
                    fromAmino(object: _180.PacketAcknowledgementDataAmino): _180.PacketAcknowledgementData;
                    toAmino(message: _180.PacketAcknowledgementData): _180.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _180.PacketAcknowledgementDataAminoMsg): _180.PacketAcknowledgementData;
                    toAminoMsg(message: _180.PacketAcknowledgementData): _180.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _180.PacketAcknowledgementDataProtoMsg): _180.PacketAcknowledgementData;
                    toProto(message: _180.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _180.PacketAcknowledgementData): _180.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _180.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_180.PacketReceiptAbsenceData>): _180.PacketReceiptAbsenceData;
                    fromAmino(object: _180.PacketReceiptAbsenceDataAmino): _180.PacketReceiptAbsenceData;
                    toAmino(message: _180.PacketReceiptAbsenceData): _180.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _180.PacketReceiptAbsenceDataAminoMsg): _180.PacketReceiptAbsenceData;
                    toAminoMsg(message: _180.PacketReceiptAbsenceData): _180.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _180.PacketReceiptAbsenceDataProtoMsg): _180.PacketReceiptAbsenceData;
                    toProto(message: _180.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _180.PacketReceiptAbsenceData): _180.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _180.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.NextSequenceRecvData;
                    fromPartial(object: Partial<_180.NextSequenceRecvData>): _180.NextSequenceRecvData;
                    fromAmino(object: _180.NextSequenceRecvDataAmino): _180.NextSequenceRecvData;
                    toAmino(message: _180.NextSequenceRecvData): _180.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _180.NextSequenceRecvDataAminoMsg): _180.NextSequenceRecvData;
                    toAminoMsg(message: _180.NextSequenceRecvData): _180.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _180.NextSequenceRecvDataProtoMsg): _180.NextSequenceRecvData;
                    toProto(message: _180.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _180.NextSequenceRecvData): _180.NextSequenceRecvDataProtoMsg;
                };
            };
            const v3: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _181.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.ClientState;
                    fromPartial(object: Partial<_181.ClientState>): _181.ClientState;
                    fromAmino(object: _181.ClientStateAmino): _181.ClientState;
                    toAmino(message: _181.ClientState): _181.ClientStateAmino;
                    fromAminoMsg(object: _181.ClientStateAminoMsg): _181.ClientState;
                    toAminoMsg(message: _181.ClientState): _181.ClientStateAminoMsg;
                    fromProtoMsg(message: _181.ClientStateProtoMsg): _181.ClientState;
                    toProto(message: _181.ClientState): Uint8Array;
                    toProtoMsg(message: _181.ClientState): _181.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _181.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.ConsensusState;
                    fromPartial(object: Partial<_181.ConsensusState>): _181.ConsensusState;
                    fromAmino(object: _181.ConsensusStateAmino): _181.ConsensusState;
                    toAmino(message: _181.ConsensusState): _181.ConsensusStateAmino;
                    fromAminoMsg(object: _181.ConsensusStateAminoMsg): _181.ConsensusState;
                    toAminoMsg(message: _181.ConsensusState): _181.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _181.ConsensusStateProtoMsg): _181.ConsensusState;
                    toProto(message: _181.ConsensusState): Uint8Array;
                    toProtoMsg(message: _181.ConsensusState): _181.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _181.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.Header;
                    fromPartial(object: Partial<_181.Header>): _181.Header;
                    fromAmino(object: _181.HeaderAmino): _181.Header;
                    toAmino(message: _181.Header): _181.HeaderAmino;
                    fromAminoMsg(object: _181.HeaderAminoMsg): _181.Header;
                    toAminoMsg(message: _181.Header): _181.HeaderAminoMsg;
                    fromProtoMsg(message: _181.HeaderProtoMsg): _181.Header;
                    toProto(message: _181.Header): Uint8Array;
                    toProtoMsg(message: _181.Header): _181.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _181.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.Misbehaviour;
                    fromPartial(object: Partial<_181.Misbehaviour>): _181.Misbehaviour;
                    fromAmino(object: _181.MisbehaviourAmino): _181.Misbehaviour;
                    toAmino(message: _181.Misbehaviour): _181.MisbehaviourAmino;
                    fromAminoMsg(object: _181.MisbehaviourAminoMsg): _181.Misbehaviour;
                    toAminoMsg(message: _181.Misbehaviour): _181.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _181.MisbehaviourProtoMsg): _181.Misbehaviour;
                    toProto(message: _181.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _181.Misbehaviour): _181.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _181.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.SignatureAndData;
                    fromPartial(object: Partial<_181.SignatureAndData>): _181.SignatureAndData;
                    fromAmino(object: _181.SignatureAndDataAmino): _181.SignatureAndData;
                    toAmino(message: _181.SignatureAndData): _181.SignatureAndDataAmino;
                    fromAminoMsg(object: _181.SignatureAndDataAminoMsg): _181.SignatureAndData;
                    toAminoMsg(message: _181.SignatureAndData): _181.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _181.SignatureAndDataProtoMsg): _181.SignatureAndData;
                    toProto(message: _181.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _181.SignatureAndData): _181.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _181.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.TimestampedSignatureData;
                    fromPartial(object: Partial<_181.TimestampedSignatureData>): _181.TimestampedSignatureData;
                    fromAmino(object: _181.TimestampedSignatureDataAmino): _181.TimestampedSignatureData;
                    toAmino(message: _181.TimestampedSignatureData): _181.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _181.TimestampedSignatureDataAminoMsg): _181.TimestampedSignatureData;
                    toAminoMsg(message: _181.TimestampedSignatureData): _181.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _181.TimestampedSignatureDataProtoMsg): _181.TimestampedSignatureData;
                    toProto(message: _181.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _181.TimestampedSignatureData): _181.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _181.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.SignBytes;
                    fromPartial(object: Partial<_181.SignBytes>): _181.SignBytes;
                    fromAmino(object: _181.SignBytesAmino): _181.SignBytes;
                    toAmino(message: _181.SignBytes): _181.SignBytesAmino;
                    fromAminoMsg(object: _181.SignBytesAminoMsg): _181.SignBytes;
                    toAminoMsg(message: _181.SignBytes): _181.SignBytesAminoMsg;
                    fromProtoMsg(message: _181.SignBytesProtoMsg): _181.SignBytes;
                    toProto(message: _181.SignBytes): Uint8Array;
                    toProtoMsg(message: _181.SignBytes): _181.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _181.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.HeaderData;
                    fromPartial(object: Partial<_181.HeaderData>): _181.HeaderData;
                    fromAmino(object: _181.HeaderDataAmino): _181.HeaderData;
                    toAmino(message: _181.HeaderData): _181.HeaderDataAmino;
                    fromAminoMsg(object: _181.HeaderDataAminoMsg): _181.HeaderData;
                    toAminoMsg(message: _181.HeaderData): _181.HeaderDataAminoMsg;
                    fromProtoMsg(message: _181.HeaderDataProtoMsg): _181.HeaderData;
                    toProto(message: _181.HeaderData): Uint8Array;
                    toProtoMsg(message: _181.HeaderData): _181.HeaderDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _182.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.ClientState;
                    fromPartial(object: Partial<_182.ClientState>): _182.ClientState;
                    fromAmino(object: _182.ClientStateAmino): _182.ClientState;
                    toAmino(message: _182.ClientState): _182.ClientStateAmino;
                    fromAminoMsg(object: _182.ClientStateAminoMsg): _182.ClientState;
                    toAminoMsg(message: _182.ClientState): _182.ClientStateAminoMsg;
                    fromProtoMsg(message: _182.ClientStateProtoMsg): _182.ClientState;
                    toProto(message: _182.ClientState): Uint8Array;
                    toProtoMsg(message: _182.ClientState): _182.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _182.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.ConsensusState;
                    fromPartial(object: Partial<_182.ConsensusState>): _182.ConsensusState;
                    fromAmino(object: _182.ConsensusStateAmino): _182.ConsensusState;
                    toAmino(message: _182.ConsensusState): _182.ConsensusStateAmino;
                    fromAminoMsg(object: _182.ConsensusStateAminoMsg): _182.ConsensusState;
                    toAminoMsg(message: _182.ConsensusState): _182.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _182.ConsensusStateProtoMsg): _182.ConsensusState;
                    toProto(message: _182.ConsensusState): Uint8Array;
                    toProtoMsg(message: _182.ConsensusState): _182.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _182.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.Misbehaviour;
                    fromPartial(object: Partial<_182.Misbehaviour>): _182.Misbehaviour;
                    fromAmino(object: _182.MisbehaviourAmino): _182.Misbehaviour;
                    toAmino(message: _182.Misbehaviour): _182.MisbehaviourAmino;
                    fromAminoMsg(object: _182.MisbehaviourAminoMsg): _182.Misbehaviour;
                    toAminoMsg(message: _182.Misbehaviour): _182.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _182.MisbehaviourProtoMsg): _182.Misbehaviour;
                    toProto(message: _182.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _182.Misbehaviour): _182.MisbehaviourProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _182.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.Header;
                    fromPartial(object: Partial<_182.Header>): _182.Header;
                    fromAmino(object: _182.HeaderAmino): _182.Header;
                    toAmino(message: _182.Header): _182.HeaderAmino;
                    fromAminoMsg(object: _182.HeaderAminoMsg): _182.Header;
                    toAminoMsg(message: _182.Header): _182.HeaderAminoMsg;
                    fromProtoMsg(message: _182.HeaderProtoMsg): _182.Header;
                    toProto(message: _182.Header): Uint8Array;
                    toProtoMsg(message: _182.Header): _182.HeaderProtoMsg;
                };
                Fraction: {
                    typeUrl: string;
                    encode(message: _182.Fraction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.Fraction;
                    fromPartial(object: Partial<_182.Fraction>): _182.Fraction;
                    fromAmino(object: _182.FractionAmino): _182.Fraction;
                    toAmino(message: _182.Fraction): _182.FractionAmino;
                    fromAminoMsg(object: _182.FractionAminoMsg): _182.Fraction;
                    toAminoMsg(message: _182.Fraction): _182.FractionAminoMsg;
                    fromProtoMsg(message: _182.FractionProtoMsg): _182.Fraction;
                    toProto(message: _182.Fraction): Uint8Array;
                    toProtoMsg(message: _182.Fraction): _182.FractionProtoMsg;
                };
            };
        }
    }
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
            ibc: {
                applications: {
                    fee: {
                        v1: _363.MsgClientImpl;
                    };
                    interchain_accounts: {
                        controller: {
                            v1: _364.MsgClientImpl;
                        };
                        host: {
                            v1: _365.MsgClientImpl;
                        };
                    };
                    transfer: {
                        v1: _366.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _367.MsgClientImpl;
                    };
                    client: {
                        v1: _368.MsgClientImpl;
                    };
                    connection: {
                        v1: _369.MsgClientImpl;
                    };
                };
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
            ibc: {
                applications: {
                    fee: {
                        v1: {
                            incentivizedPackets(request: _147.QueryIncentivizedPacketsRequest): Promise<_147.QueryIncentivizedPacketsResponse>;
                            incentivizedPacket(request: _147.QueryIncentivizedPacketRequest): Promise<_147.QueryIncentivizedPacketResponse>;
                            incentivizedPacketsForChannel(request: _147.QueryIncentivizedPacketsForChannelRequest): Promise<_147.QueryIncentivizedPacketsForChannelResponse>;
                            totalRecvFees(request: _147.QueryTotalRecvFeesRequest): Promise<_147.QueryTotalRecvFeesResponse>;
                            totalAckFees(request: _147.QueryTotalAckFeesRequest): Promise<_147.QueryTotalAckFeesResponse>;
                            totalTimeoutFees(request: _147.QueryTotalTimeoutFeesRequest): Promise<_147.QueryTotalTimeoutFeesResponse>;
                            payee(request: _147.QueryPayeeRequest): Promise<_147.QueryPayeeResponse>;
                            counterpartyPayee(request: _147.QueryCounterpartyPayeeRequest): Promise<_147.QueryCounterpartyPayeeResponse>;
                            feeEnabledChannels(request: _147.QueryFeeEnabledChannelsRequest): Promise<_147.QueryFeeEnabledChannelsResponse>;
                            feeEnabledChannel(request: _147.QueryFeeEnabledChannelRequest): Promise<_147.QueryFeeEnabledChannelResponse>;
                        };
                    };
                    interchain_accounts: {
                        controller: {
                            v1: {
                                interchainAccount(request: _150.QueryInterchainAccountRequest): Promise<_150.QueryInterchainAccountResponse>;
                                params(request?: _150.QueryParamsRequest): Promise<_150.QueryParamsResponse>;
                            };
                        };
                        host: {
                            v1: {
                                params(request?: _154.QueryParamsRequest): Promise<_154.QueryParamsResponse>;
                            };
                        };
                    };
                    transfer: {
                        v1: {
                            denomTraces(request?: _161.QueryDenomTracesRequest): Promise<_161.QueryDenomTracesResponse>;
                            denomTrace(request: _161.QueryDenomTraceRequest): Promise<_161.QueryDenomTraceResponse>;
                            params(request?: _161.QueryParamsRequest): Promise<_161.QueryParamsResponse>;
                            denomHash(request: _161.QueryDenomHashRequest): Promise<_161.QueryDenomHashResponse>;
                            escrowAddress(request: _161.QueryEscrowAddressRequest): Promise<_161.QueryEscrowAddressResponse>;
                            totalEscrowForDenom(request: _161.QueryTotalEscrowForDenomRequest): Promise<_161.QueryTotalEscrowForDenomResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _167.QueryChannelRequest): Promise<_167.QueryChannelResponse>;
                            channels(request?: _167.QueryChannelsRequest): Promise<_167.QueryChannelsResponse>;
                            connectionChannels(request: _167.QueryConnectionChannelsRequest): Promise<_167.QueryConnectionChannelsResponse>;
                            channelClientState(request: _167.QueryChannelClientStateRequest): Promise<_167.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _167.QueryChannelConsensusStateRequest): Promise<_167.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _167.QueryPacketCommitmentRequest): Promise<_167.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _167.QueryPacketCommitmentsRequest): Promise<_167.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _167.QueryPacketReceiptRequest): Promise<_167.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _167.QueryPacketAcknowledgementRequest): Promise<_167.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _167.QueryPacketAcknowledgementsRequest): Promise<_167.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _167.QueryUnreceivedPacketsRequest): Promise<_167.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _167.QueryUnreceivedAcksRequest): Promise<_167.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _167.QueryNextSequenceReceiveRequest): Promise<_167.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _171.QueryClientStateRequest): Promise<_171.QueryClientStateResponse>;
                            clientStates(request?: _171.QueryClientStatesRequest): Promise<_171.QueryClientStatesResponse>;
                            consensusState(request: _171.QueryConsensusStateRequest): Promise<_171.QueryConsensusStateResponse>;
                            consensusStates(request: _171.QueryConsensusStatesRequest): Promise<_171.QueryConsensusStatesResponse>;
                            consensusStateHeights(request: _171.QueryConsensusStateHeightsRequest): Promise<_171.QueryConsensusStateHeightsResponse>;
                            clientStatus(request: _171.QueryClientStatusRequest): Promise<_171.QueryClientStatusResponse>;
                            clientParams(request?: _171.QueryClientParamsRequest): Promise<_171.QueryClientParamsResponse>;
                            upgradedClientState(request?: _171.QueryUpgradedClientStateRequest): Promise<_171.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _171.QueryUpgradedConsensusStateRequest): Promise<_171.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _176.QueryConnectionRequest): Promise<_176.QueryConnectionResponse>;
                            connections(request?: _176.QueryConnectionsRequest): Promise<_176.QueryConnectionsResponse>;
                            clientConnections(request: _176.QueryClientConnectionsRequest): Promise<_176.QueryClientConnectionsResponse>;
                            connectionClientState(request: _176.QueryConnectionClientStateRequest): Promise<_176.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _176.QueryConnectionConsensusStateRequest): Promise<_176.QueryConnectionConsensusStateResponse>;
                            connectionParams(request?: _176.QueryConnectionParamsRequest): Promise<_176.QueryConnectionParamsResponse>;
                        };
                    };
                };
            };
        }>;
    };
}
