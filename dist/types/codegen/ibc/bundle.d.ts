import * as _149 from "./applications/fee/v1/ack";
import * as _150 from "./applications/fee/v1/fee";
import * as _151 from "./applications/fee/v1/genesis";
import * as _152 from "./applications/fee/v1/metadata";
import * as _153 from "./applications/fee/v1/query";
import * as _154 from "./applications/fee/v1/tx";
import * as _155 from "./applications/interchain_accounts/controller/v1/controller";
import * as _156 from "./applications/interchain_accounts/controller/v1/query";
import * as _157 from "./applications/interchain_accounts/controller/v1/tx";
import * as _158 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _159 from "./applications/interchain_accounts/host/v1/host";
import * as _160 from "./applications/interchain_accounts/host/v1/query";
import * as _161 from "./applications/interchain_accounts/host/v1/tx";
import * as _162 from "./applications/interchain_accounts/v1/account";
import * as _163 from "./applications/interchain_accounts/v1/metadata";
import * as _164 from "./applications/interchain_accounts/v1/packet";
import * as _165 from "./applications/transfer/v1/authz";
import * as _166 from "./applications/transfer/v1/genesis";
import * as _167 from "./applications/transfer/v1/query";
import * as _168 from "./applications/transfer/v1/transfer";
import * as _169 from "./applications/transfer/v1/tx";
import * as _170 from "./applications/transfer/v2/packet";
import * as _171 from "./core/channel/v1/channel";
import * as _172 from "./core/channel/v1/genesis";
import * as _173 from "./core/channel/v1/query";
import * as _174 from "./core/channel/v1/tx";
import * as _175 from "./core/client/v1/client";
import * as _176 from "./core/client/v1/genesis";
import * as _177 from "./core/client/v1/query";
import * as _178 from "./core/client/v1/tx";
import * as _179 from "./core/commitment/v1/commitment";
import * as _180 from "./core/connection/v1/connection";
import * as _181 from "./core/connection/v1/genesis";
import * as _182 from "./core/connection/v1/query";
import * as _183 from "./core/connection/v1/tx";
import * as _184 from "./core/types/v1/genesis";
import * as _185 from "./lightclients/localhost/v2/localhost";
import * as _186 from "./lightclients/solomachine/v2/solomachine";
import * as _187 from "./lightclients/solomachine/v3/solomachine";
import * as _188 from "./lightclients/tendermint/v1/tendermint";
import * as _366 from "./applications/fee/v1/query.rpc.Query";
import * as _367 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _368 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _369 from "./applications/transfer/v1/query.rpc.Query";
import * as _370 from "./core/channel/v1/query.rpc.Query";
import * as _371 from "./core/client/v1/query.rpc.Query";
import * as _372 from "./core/connection/v1/query.rpc.Query";
import * as _373 from "./applications/fee/v1/tx.rpc.msg";
import * as _374 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _375 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _376 from "./applications/transfer/v1/tx.rpc.msg";
import * as _377 from "./core/channel/v1/tx.rpc.msg";
import * as _378 from "./core/client/v1/tx.rpc.msg";
import * as _379 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace fee {
            const v1: {
                MsgClientImpl: typeof _373.MsgClientImpl;
                QueryClientImpl: typeof _366.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    incentivizedPackets(request: _153.QueryIncentivizedPacketsRequest): Promise<_153.QueryIncentivizedPacketsResponse>;
                    incentivizedPacket(request: _153.QueryIncentivizedPacketRequest): Promise<_153.QueryIncentivizedPacketResponse>;
                    incentivizedPacketsForChannel(request: _153.QueryIncentivizedPacketsForChannelRequest): Promise<_153.QueryIncentivizedPacketsForChannelResponse>;
                    totalRecvFees(request: _153.QueryTotalRecvFeesRequest): Promise<_153.QueryTotalRecvFeesResponse>;
                    totalAckFees(request: _153.QueryTotalAckFeesRequest): Promise<_153.QueryTotalAckFeesResponse>;
                    totalTimeoutFees(request: _153.QueryTotalTimeoutFeesRequest): Promise<_153.QueryTotalTimeoutFeesResponse>;
                    payee(request: _153.QueryPayeeRequest): Promise<_153.QueryPayeeResponse>;
                    counterpartyPayee(request: _153.QueryCounterpartyPayeeRequest): Promise<_153.QueryCounterpartyPayeeResponse>;
                    feeEnabledChannels(request: _153.QueryFeeEnabledChannelsRequest): Promise<_153.QueryFeeEnabledChannelsResponse>;
                    feeEnabledChannel(request: _153.QueryFeeEnabledChannelRequest): Promise<_153.QueryFeeEnabledChannelResponse>;
                };
                registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        registerPayee(value: _154.MsgRegisterPayee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        registerCounterpartyPayee(value: _154.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        payPacketFee(value: _154.MsgPayPacketFee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        payPacketFeeAsync(value: _154.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        registerPayee(value: _154.MsgRegisterPayee): {
                            typeUrl: string;
                            value: _154.MsgRegisterPayee;
                        };
                        registerCounterpartyPayee(value: _154.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: _154.MsgRegisterCounterpartyPayee;
                        };
                        payPacketFee(value: _154.MsgPayPacketFee): {
                            typeUrl: string;
                            value: _154.MsgPayPacketFee;
                        };
                        payPacketFeeAsync(value: _154.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: _154.MsgPayPacketFeeAsync;
                        };
                    };
                    fromPartial: {
                        registerPayee(value: _154.MsgRegisterPayee): {
                            typeUrl: string;
                            value: _154.MsgRegisterPayee;
                        };
                        registerCounterpartyPayee(value: _154.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: _154.MsgRegisterCounterpartyPayee;
                        };
                        payPacketFee(value: _154.MsgPayPacketFee): {
                            typeUrl: string;
                            value: _154.MsgPayPacketFee;
                        };
                        payPacketFeeAsync(value: _154.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: _154.MsgPayPacketFeeAsync;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.fee.v1.MsgRegisterPayee": {
                        aminoType: string;
                        toAmino: (message: _154.MsgRegisterPayee) => _154.MsgRegisterPayeeAmino;
                        fromAmino: (object: _154.MsgRegisterPayeeAmino) => _154.MsgRegisterPayee;
                    };
                    "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee": {
                        aminoType: string;
                        toAmino: (message: _154.MsgRegisterCounterpartyPayee) => _154.MsgRegisterCounterpartyPayeeAmino;
                        fromAmino: (object: _154.MsgRegisterCounterpartyPayeeAmino) => _154.MsgRegisterCounterpartyPayee;
                    };
                    "/ibc.applications.fee.v1.MsgPayPacketFee": {
                        aminoType: string;
                        toAmino: (message: _154.MsgPayPacketFee) => _154.MsgPayPacketFeeAmino;
                        fromAmino: (object: _154.MsgPayPacketFeeAmino) => _154.MsgPayPacketFee;
                    };
                    "/ibc.applications.fee.v1.MsgPayPacketFeeAsync": {
                        aminoType: string;
                        toAmino: (message: _154.MsgPayPacketFeeAsync) => _154.MsgPayPacketFeeAsyncAmino;
                        fromAmino: (object: _154.MsgPayPacketFeeAsyncAmino) => _154.MsgPayPacketFeeAsync;
                    };
                };
                MsgRegisterPayee: {
                    typeUrl: string;
                    encode(message: _154.MsgRegisterPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.MsgRegisterPayee;
                    fromPartial(object: Partial<_154.MsgRegisterPayee>): _154.MsgRegisterPayee;
                    fromAmino(object: _154.MsgRegisterPayeeAmino): _154.MsgRegisterPayee;
                    toAmino(message: _154.MsgRegisterPayee): _154.MsgRegisterPayeeAmino;
                    fromAminoMsg(object: _154.MsgRegisterPayeeAminoMsg): _154.MsgRegisterPayee;
                    toAminoMsg(message: _154.MsgRegisterPayee): _154.MsgRegisterPayeeAminoMsg;
                    fromProtoMsg(message: _154.MsgRegisterPayeeProtoMsg): _154.MsgRegisterPayee;
                    toProto(message: _154.MsgRegisterPayee): Uint8Array;
                    toProtoMsg(message: _154.MsgRegisterPayee): _154.MsgRegisterPayeeProtoMsg;
                };
                MsgRegisterPayeeResponse: {
                    typeUrl: string;
                    encode(_: _154.MsgRegisterPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.MsgRegisterPayeeResponse;
                    fromPartial(_: Partial<_154.MsgRegisterPayeeResponse>): _154.MsgRegisterPayeeResponse;
                    fromAmino(_: _154.MsgRegisterPayeeResponseAmino): _154.MsgRegisterPayeeResponse;
                    toAmino(_: _154.MsgRegisterPayeeResponse): _154.MsgRegisterPayeeResponseAmino;
                    fromAminoMsg(object: _154.MsgRegisterPayeeResponseAminoMsg): _154.MsgRegisterPayeeResponse;
                    toAminoMsg(message: _154.MsgRegisterPayeeResponse): _154.MsgRegisterPayeeResponseAminoMsg;
                    fromProtoMsg(message: _154.MsgRegisterPayeeResponseProtoMsg): _154.MsgRegisterPayeeResponse;
                    toProto(message: _154.MsgRegisterPayeeResponse): Uint8Array;
                    toProtoMsg(message: _154.MsgRegisterPayeeResponse): _154.MsgRegisterPayeeResponseProtoMsg;
                };
                MsgRegisterCounterpartyPayee: {
                    typeUrl: string;
                    encode(message: _154.MsgRegisterCounterpartyPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.MsgRegisterCounterpartyPayee;
                    fromPartial(object: Partial<_154.MsgRegisterCounterpartyPayee>): _154.MsgRegisterCounterpartyPayee;
                    fromAmino(object: _154.MsgRegisterCounterpartyPayeeAmino): _154.MsgRegisterCounterpartyPayee;
                    toAmino(message: _154.MsgRegisterCounterpartyPayee): _154.MsgRegisterCounterpartyPayeeAmino;
                    fromAminoMsg(object: _154.MsgRegisterCounterpartyPayeeAminoMsg): _154.MsgRegisterCounterpartyPayee;
                    toAminoMsg(message: _154.MsgRegisterCounterpartyPayee): _154.MsgRegisterCounterpartyPayeeAminoMsg;
                    fromProtoMsg(message: _154.MsgRegisterCounterpartyPayeeProtoMsg): _154.MsgRegisterCounterpartyPayee;
                    toProto(message: _154.MsgRegisterCounterpartyPayee): Uint8Array;
                    toProtoMsg(message: _154.MsgRegisterCounterpartyPayee): _154.MsgRegisterCounterpartyPayeeProtoMsg;
                };
                MsgRegisterCounterpartyPayeeResponse: {
                    typeUrl: string;
                    encode(_: _154.MsgRegisterCounterpartyPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.MsgRegisterCounterpartyPayeeResponse;
                    fromPartial(_: Partial<_154.MsgRegisterCounterpartyPayeeResponse>): _154.MsgRegisterCounterpartyPayeeResponse;
                    fromAmino(_: _154.MsgRegisterCounterpartyPayeeResponseAmino): _154.MsgRegisterCounterpartyPayeeResponse;
                    toAmino(_: _154.MsgRegisterCounterpartyPayeeResponse): _154.MsgRegisterCounterpartyPayeeResponseAmino;
                    fromAminoMsg(object: _154.MsgRegisterCounterpartyPayeeResponseAminoMsg): _154.MsgRegisterCounterpartyPayeeResponse;
                    toAminoMsg(message: _154.MsgRegisterCounterpartyPayeeResponse): _154.MsgRegisterCounterpartyPayeeResponseAminoMsg;
                    fromProtoMsg(message: _154.MsgRegisterCounterpartyPayeeResponseProtoMsg): _154.MsgRegisterCounterpartyPayeeResponse;
                    toProto(message: _154.MsgRegisterCounterpartyPayeeResponse): Uint8Array;
                    toProtoMsg(message: _154.MsgRegisterCounterpartyPayeeResponse): _154.MsgRegisterCounterpartyPayeeResponseProtoMsg;
                };
                MsgPayPacketFee: {
                    typeUrl: string;
                    encode(message: _154.MsgPayPacketFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.MsgPayPacketFee;
                    fromPartial(object: Partial<_154.MsgPayPacketFee>): _154.MsgPayPacketFee;
                    fromAmino(object: _154.MsgPayPacketFeeAmino): _154.MsgPayPacketFee;
                    toAmino(message: _154.MsgPayPacketFee): _154.MsgPayPacketFeeAmino;
                    fromAminoMsg(object: _154.MsgPayPacketFeeAminoMsg): _154.MsgPayPacketFee;
                    toAminoMsg(message: _154.MsgPayPacketFee): _154.MsgPayPacketFeeAminoMsg;
                    fromProtoMsg(message: _154.MsgPayPacketFeeProtoMsg): _154.MsgPayPacketFee;
                    toProto(message: _154.MsgPayPacketFee): Uint8Array;
                    toProtoMsg(message: _154.MsgPayPacketFee): _154.MsgPayPacketFeeProtoMsg;
                };
                MsgPayPacketFeeResponse: {
                    typeUrl: string;
                    encode(_: _154.MsgPayPacketFeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.MsgPayPacketFeeResponse;
                    fromPartial(_: Partial<_154.MsgPayPacketFeeResponse>): _154.MsgPayPacketFeeResponse;
                    fromAmino(_: _154.MsgPayPacketFeeResponseAmino): _154.MsgPayPacketFeeResponse;
                    toAmino(_: _154.MsgPayPacketFeeResponse): _154.MsgPayPacketFeeResponseAmino;
                    fromAminoMsg(object: _154.MsgPayPacketFeeResponseAminoMsg): _154.MsgPayPacketFeeResponse;
                    toAminoMsg(message: _154.MsgPayPacketFeeResponse): _154.MsgPayPacketFeeResponseAminoMsg;
                    fromProtoMsg(message: _154.MsgPayPacketFeeResponseProtoMsg): _154.MsgPayPacketFeeResponse;
                    toProto(message: _154.MsgPayPacketFeeResponse): Uint8Array;
                    toProtoMsg(message: _154.MsgPayPacketFeeResponse): _154.MsgPayPacketFeeResponseProtoMsg;
                };
                MsgPayPacketFeeAsync: {
                    typeUrl: string;
                    encode(message: _154.MsgPayPacketFeeAsync, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.MsgPayPacketFeeAsync;
                    fromPartial(object: Partial<_154.MsgPayPacketFeeAsync>): _154.MsgPayPacketFeeAsync;
                    fromAmino(object: _154.MsgPayPacketFeeAsyncAmino): _154.MsgPayPacketFeeAsync;
                    toAmino(message: _154.MsgPayPacketFeeAsync): _154.MsgPayPacketFeeAsyncAmino;
                    fromAminoMsg(object: _154.MsgPayPacketFeeAsyncAminoMsg): _154.MsgPayPacketFeeAsync;
                    toAminoMsg(message: _154.MsgPayPacketFeeAsync): _154.MsgPayPacketFeeAsyncAminoMsg;
                    fromProtoMsg(message: _154.MsgPayPacketFeeAsyncProtoMsg): _154.MsgPayPacketFeeAsync;
                    toProto(message: _154.MsgPayPacketFeeAsync): Uint8Array;
                    toProtoMsg(message: _154.MsgPayPacketFeeAsync): _154.MsgPayPacketFeeAsyncProtoMsg;
                };
                MsgPayPacketFeeAsyncResponse: {
                    typeUrl: string;
                    encode(_: _154.MsgPayPacketFeeAsyncResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.MsgPayPacketFeeAsyncResponse;
                    fromPartial(_: Partial<_154.MsgPayPacketFeeAsyncResponse>): _154.MsgPayPacketFeeAsyncResponse;
                    fromAmino(_: _154.MsgPayPacketFeeAsyncResponseAmino): _154.MsgPayPacketFeeAsyncResponse;
                    toAmino(_: _154.MsgPayPacketFeeAsyncResponse): _154.MsgPayPacketFeeAsyncResponseAmino;
                    fromAminoMsg(object: _154.MsgPayPacketFeeAsyncResponseAminoMsg): _154.MsgPayPacketFeeAsyncResponse;
                    toAminoMsg(message: _154.MsgPayPacketFeeAsyncResponse): _154.MsgPayPacketFeeAsyncResponseAminoMsg;
                    fromProtoMsg(message: _154.MsgPayPacketFeeAsyncResponseProtoMsg): _154.MsgPayPacketFeeAsyncResponse;
                    toProto(message: _154.MsgPayPacketFeeAsyncResponse): Uint8Array;
                    toProtoMsg(message: _154.MsgPayPacketFeeAsyncResponse): _154.MsgPayPacketFeeAsyncResponseProtoMsg;
                };
                QueryIncentivizedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _153.QueryIncentivizedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.QueryIncentivizedPacketsRequest;
                    fromPartial(object: Partial<_153.QueryIncentivizedPacketsRequest>): _153.QueryIncentivizedPacketsRequest;
                    fromAmino(object: _153.QueryIncentivizedPacketsRequestAmino): _153.QueryIncentivizedPacketsRequest;
                    toAmino(message: _153.QueryIncentivizedPacketsRequest): _153.QueryIncentivizedPacketsRequestAmino;
                    fromAminoMsg(object: _153.QueryIncentivizedPacketsRequestAminoMsg): _153.QueryIncentivizedPacketsRequest;
                    toAminoMsg(message: _153.QueryIncentivizedPacketsRequest): _153.QueryIncentivizedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _153.QueryIncentivizedPacketsRequestProtoMsg): _153.QueryIncentivizedPacketsRequest;
                    toProto(message: _153.QueryIncentivizedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _153.QueryIncentivizedPacketsRequest): _153.QueryIncentivizedPacketsRequestProtoMsg;
                };
                QueryIncentivizedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _153.QueryIncentivizedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.QueryIncentivizedPacketsResponse;
                    fromPartial(object: Partial<_153.QueryIncentivizedPacketsResponse>): _153.QueryIncentivizedPacketsResponse;
                    fromAmino(object: _153.QueryIncentivizedPacketsResponseAmino): _153.QueryIncentivizedPacketsResponse;
                    toAmino(message: _153.QueryIncentivizedPacketsResponse): _153.QueryIncentivizedPacketsResponseAmino;
                    fromAminoMsg(object: _153.QueryIncentivizedPacketsResponseAminoMsg): _153.QueryIncentivizedPacketsResponse;
                    toAminoMsg(message: _153.QueryIncentivizedPacketsResponse): _153.QueryIncentivizedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _153.QueryIncentivizedPacketsResponseProtoMsg): _153.QueryIncentivizedPacketsResponse;
                    toProto(message: _153.QueryIncentivizedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _153.QueryIncentivizedPacketsResponse): _153.QueryIncentivizedPacketsResponseProtoMsg;
                };
                QueryIncentivizedPacketRequest: {
                    typeUrl: string;
                    encode(message: _153.QueryIncentivizedPacketRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.QueryIncentivizedPacketRequest;
                    fromPartial(object: Partial<_153.QueryIncentivizedPacketRequest>): _153.QueryIncentivizedPacketRequest;
                    fromAmino(object: _153.QueryIncentivizedPacketRequestAmino): _153.QueryIncentivizedPacketRequest;
                    toAmino(message: _153.QueryIncentivizedPacketRequest): _153.QueryIncentivizedPacketRequestAmino;
                    fromAminoMsg(object: _153.QueryIncentivizedPacketRequestAminoMsg): _153.QueryIncentivizedPacketRequest;
                    toAminoMsg(message: _153.QueryIncentivizedPacketRequest): _153.QueryIncentivizedPacketRequestAminoMsg;
                    fromProtoMsg(message: _153.QueryIncentivizedPacketRequestProtoMsg): _153.QueryIncentivizedPacketRequest;
                    toProto(message: _153.QueryIncentivizedPacketRequest): Uint8Array;
                    toProtoMsg(message: _153.QueryIncentivizedPacketRequest): _153.QueryIncentivizedPacketRequestProtoMsg;
                };
                QueryIncentivizedPacketResponse: {
                    typeUrl: string;
                    encode(message: _153.QueryIncentivizedPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.QueryIncentivizedPacketResponse;
                    fromPartial(object: Partial<_153.QueryIncentivizedPacketResponse>): _153.QueryIncentivizedPacketResponse;
                    fromAmino(object: _153.QueryIncentivizedPacketResponseAmino): _153.QueryIncentivizedPacketResponse;
                    toAmino(message: _153.QueryIncentivizedPacketResponse): _153.QueryIncentivizedPacketResponseAmino;
                    fromAminoMsg(object: _153.QueryIncentivizedPacketResponseAminoMsg): _153.QueryIncentivizedPacketResponse;
                    toAminoMsg(message: _153.QueryIncentivizedPacketResponse): _153.QueryIncentivizedPacketResponseAminoMsg;
                    fromProtoMsg(message: _153.QueryIncentivizedPacketResponseProtoMsg): _153.QueryIncentivizedPacketResponse;
                    toProto(message: _153.QueryIncentivizedPacketResponse): Uint8Array;
                    toProtoMsg(message: _153.QueryIncentivizedPacketResponse): _153.QueryIncentivizedPacketResponseProtoMsg;
                };
                QueryIncentivizedPacketsForChannelRequest: {
                    typeUrl: string;
                    encode(message: _153.QueryIncentivizedPacketsForChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.QueryIncentivizedPacketsForChannelRequest;
                    fromPartial(object: Partial<_153.QueryIncentivizedPacketsForChannelRequest>): _153.QueryIncentivizedPacketsForChannelRequest;
                    fromAmino(object: _153.QueryIncentivizedPacketsForChannelRequestAmino): _153.QueryIncentivizedPacketsForChannelRequest;
                    toAmino(message: _153.QueryIncentivizedPacketsForChannelRequest): _153.QueryIncentivizedPacketsForChannelRequestAmino;
                    fromAminoMsg(object: _153.QueryIncentivizedPacketsForChannelRequestAminoMsg): _153.QueryIncentivizedPacketsForChannelRequest;
                    toAminoMsg(message: _153.QueryIncentivizedPacketsForChannelRequest): _153.QueryIncentivizedPacketsForChannelRequestAminoMsg;
                    fromProtoMsg(message: _153.QueryIncentivizedPacketsForChannelRequestProtoMsg): _153.QueryIncentivizedPacketsForChannelRequest;
                    toProto(message: _153.QueryIncentivizedPacketsForChannelRequest): Uint8Array;
                    toProtoMsg(message: _153.QueryIncentivizedPacketsForChannelRequest): _153.QueryIncentivizedPacketsForChannelRequestProtoMsg;
                };
                QueryIncentivizedPacketsForChannelResponse: {
                    typeUrl: string;
                    encode(message: _153.QueryIncentivizedPacketsForChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.QueryIncentivizedPacketsForChannelResponse;
                    fromPartial(object: Partial<_153.QueryIncentivizedPacketsForChannelResponse>): _153.QueryIncentivizedPacketsForChannelResponse;
                    fromAmino(object: _153.QueryIncentivizedPacketsForChannelResponseAmino): _153.QueryIncentivizedPacketsForChannelResponse;
                    toAmino(message: _153.QueryIncentivizedPacketsForChannelResponse): _153.QueryIncentivizedPacketsForChannelResponseAmino;
                    fromAminoMsg(object: _153.QueryIncentivizedPacketsForChannelResponseAminoMsg): _153.QueryIncentivizedPacketsForChannelResponse;
                    toAminoMsg(message: _153.QueryIncentivizedPacketsForChannelResponse): _153.QueryIncentivizedPacketsForChannelResponseAminoMsg;
                    fromProtoMsg(message: _153.QueryIncentivizedPacketsForChannelResponseProtoMsg): _153.QueryIncentivizedPacketsForChannelResponse;
                    toProto(message: _153.QueryIncentivizedPacketsForChannelResponse): Uint8Array;
                    toProtoMsg(message: _153.QueryIncentivizedPacketsForChannelResponse): _153.QueryIncentivizedPacketsForChannelResponseProtoMsg;
                };
                QueryTotalRecvFeesRequest: {
                    typeUrl: string;
                    encode(message: _153.QueryTotalRecvFeesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.QueryTotalRecvFeesRequest;
                    fromPartial(object: Partial<_153.QueryTotalRecvFeesRequest>): _153.QueryTotalRecvFeesRequest;
                    fromAmino(object: _153.QueryTotalRecvFeesRequestAmino): _153.QueryTotalRecvFeesRequest;
                    toAmino(message: _153.QueryTotalRecvFeesRequest): _153.QueryTotalRecvFeesRequestAmino;
                    fromAminoMsg(object: _153.QueryTotalRecvFeesRequestAminoMsg): _153.QueryTotalRecvFeesRequest;
                    toAminoMsg(message: _153.QueryTotalRecvFeesRequest): _153.QueryTotalRecvFeesRequestAminoMsg;
                    fromProtoMsg(message: _153.QueryTotalRecvFeesRequestProtoMsg): _153.QueryTotalRecvFeesRequest;
                    toProto(message: _153.QueryTotalRecvFeesRequest): Uint8Array;
                    toProtoMsg(message: _153.QueryTotalRecvFeesRequest): _153.QueryTotalRecvFeesRequestProtoMsg;
                };
                QueryTotalRecvFeesResponse: {
                    typeUrl: string;
                    encode(message: _153.QueryTotalRecvFeesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.QueryTotalRecvFeesResponse;
                    fromPartial(object: Partial<_153.QueryTotalRecvFeesResponse>): _153.QueryTotalRecvFeesResponse;
                    fromAmino(object: _153.QueryTotalRecvFeesResponseAmino): _153.QueryTotalRecvFeesResponse;
                    toAmino(message: _153.QueryTotalRecvFeesResponse): _153.QueryTotalRecvFeesResponseAmino;
                    fromAminoMsg(object: _153.QueryTotalRecvFeesResponseAminoMsg): _153.QueryTotalRecvFeesResponse;
                    toAminoMsg(message: _153.QueryTotalRecvFeesResponse): _153.QueryTotalRecvFeesResponseAminoMsg;
                    fromProtoMsg(message: _153.QueryTotalRecvFeesResponseProtoMsg): _153.QueryTotalRecvFeesResponse;
                    toProto(message: _153.QueryTotalRecvFeesResponse): Uint8Array;
                    toProtoMsg(message: _153.QueryTotalRecvFeesResponse): _153.QueryTotalRecvFeesResponseProtoMsg;
                };
                QueryTotalAckFeesRequest: {
                    typeUrl: string;
                    encode(message: _153.QueryTotalAckFeesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.QueryTotalAckFeesRequest;
                    fromPartial(object: Partial<_153.QueryTotalAckFeesRequest>): _153.QueryTotalAckFeesRequest;
                    fromAmino(object: _153.QueryTotalAckFeesRequestAmino): _153.QueryTotalAckFeesRequest;
                    toAmino(message: _153.QueryTotalAckFeesRequest): _153.QueryTotalAckFeesRequestAmino;
                    fromAminoMsg(object: _153.QueryTotalAckFeesRequestAminoMsg): _153.QueryTotalAckFeesRequest;
                    toAminoMsg(message: _153.QueryTotalAckFeesRequest): _153.QueryTotalAckFeesRequestAminoMsg;
                    fromProtoMsg(message: _153.QueryTotalAckFeesRequestProtoMsg): _153.QueryTotalAckFeesRequest;
                    toProto(message: _153.QueryTotalAckFeesRequest): Uint8Array;
                    toProtoMsg(message: _153.QueryTotalAckFeesRequest): _153.QueryTotalAckFeesRequestProtoMsg;
                };
                QueryTotalAckFeesResponse: {
                    typeUrl: string;
                    encode(message: _153.QueryTotalAckFeesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.QueryTotalAckFeesResponse;
                    fromPartial(object: Partial<_153.QueryTotalAckFeesResponse>): _153.QueryTotalAckFeesResponse;
                    fromAmino(object: _153.QueryTotalAckFeesResponseAmino): _153.QueryTotalAckFeesResponse;
                    toAmino(message: _153.QueryTotalAckFeesResponse): _153.QueryTotalAckFeesResponseAmino;
                    fromAminoMsg(object: _153.QueryTotalAckFeesResponseAminoMsg): _153.QueryTotalAckFeesResponse;
                    toAminoMsg(message: _153.QueryTotalAckFeesResponse): _153.QueryTotalAckFeesResponseAminoMsg;
                    fromProtoMsg(message: _153.QueryTotalAckFeesResponseProtoMsg): _153.QueryTotalAckFeesResponse;
                    toProto(message: _153.QueryTotalAckFeesResponse): Uint8Array;
                    toProtoMsg(message: _153.QueryTotalAckFeesResponse): _153.QueryTotalAckFeesResponseProtoMsg;
                };
                QueryTotalTimeoutFeesRequest: {
                    typeUrl: string;
                    encode(message: _153.QueryTotalTimeoutFeesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.QueryTotalTimeoutFeesRequest;
                    fromPartial(object: Partial<_153.QueryTotalTimeoutFeesRequest>): _153.QueryTotalTimeoutFeesRequest;
                    fromAmino(object: _153.QueryTotalTimeoutFeesRequestAmino): _153.QueryTotalTimeoutFeesRequest;
                    toAmino(message: _153.QueryTotalTimeoutFeesRequest): _153.QueryTotalTimeoutFeesRequestAmino;
                    fromAminoMsg(object: _153.QueryTotalTimeoutFeesRequestAminoMsg): _153.QueryTotalTimeoutFeesRequest;
                    toAminoMsg(message: _153.QueryTotalTimeoutFeesRequest): _153.QueryTotalTimeoutFeesRequestAminoMsg;
                    fromProtoMsg(message: _153.QueryTotalTimeoutFeesRequestProtoMsg): _153.QueryTotalTimeoutFeesRequest;
                    toProto(message: _153.QueryTotalTimeoutFeesRequest): Uint8Array;
                    toProtoMsg(message: _153.QueryTotalTimeoutFeesRequest): _153.QueryTotalTimeoutFeesRequestProtoMsg;
                };
                QueryTotalTimeoutFeesResponse: {
                    typeUrl: string;
                    encode(message: _153.QueryTotalTimeoutFeesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.QueryTotalTimeoutFeesResponse;
                    fromPartial(object: Partial<_153.QueryTotalTimeoutFeesResponse>): _153.QueryTotalTimeoutFeesResponse;
                    fromAmino(object: _153.QueryTotalTimeoutFeesResponseAmino): _153.QueryTotalTimeoutFeesResponse;
                    toAmino(message: _153.QueryTotalTimeoutFeesResponse): _153.QueryTotalTimeoutFeesResponseAmino;
                    fromAminoMsg(object: _153.QueryTotalTimeoutFeesResponseAminoMsg): _153.QueryTotalTimeoutFeesResponse;
                    toAminoMsg(message: _153.QueryTotalTimeoutFeesResponse): _153.QueryTotalTimeoutFeesResponseAminoMsg;
                    fromProtoMsg(message: _153.QueryTotalTimeoutFeesResponseProtoMsg): _153.QueryTotalTimeoutFeesResponse;
                    toProto(message: _153.QueryTotalTimeoutFeesResponse): Uint8Array;
                    toProtoMsg(message: _153.QueryTotalTimeoutFeesResponse): _153.QueryTotalTimeoutFeesResponseProtoMsg;
                };
                QueryPayeeRequest: {
                    typeUrl: string;
                    encode(message: _153.QueryPayeeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.QueryPayeeRequest;
                    fromPartial(object: Partial<_153.QueryPayeeRequest>): _153.QueryPayeeRequest;
                    fromAmino(object: _153.QueryPayeeRequestAmino): _153.QueryPayeeRequest;
                    toAmino(message: _153.QueryPayeeRequest): _153.QueryPayeeRequestAmino;
                    fromAminoMsg(object: _153.QueryPayeeRequestAminoMsg): _153.QueryPayeeRequest;
                    toAminoMsg(message: _153.QueryPayeeRequest): _153.QueryPayeeRequestAminoMsg;
                    fromProtoMsg(message: _153.QueryPayeeRequestProtoMsg): _153.QueryPayeeRequest;
                    toProto(message: _153.QueryPayeeRequest): Uint8Array;
                    toProtoMsg(message: _153.QueryPayeeRequest): _153.QueryPayeeRequestProtoMsg;
                };
                QueryPayeeResponse: {
                    typeUrl: string;
                    encode(message: _153.QueryPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.QueryPayeeResponse;
                    fromPartial(object: Partial<_153.QueryPayeeResponse>): _153.QueryPayeeResponse;
                    fromAmino(object: _153.QueryPayeeResponseAmino): _153.QueryPayeeResponse;
                    toAmino(message: _153.QueryPayeeResponse): _153.QueryPayeeResponseAmino;
                    fromAminoMsg(object: _153.QueryPayeeResponseAminoMsg): _153.QueryPayeeResponse;
                    toAminoMsg(message: _153.QueryPayeeResponse): _153.QueryPayeeResponseAminoMsg;
                    fromProtoMsg(message: _153.QueryPayeeResponseProtoMsg): _153.QueryPayeeResponse;
                    toProto(message: _153.QueryPayeeResponse): Uint8Array;
                    toProtoMsg(message: _153.QueryPayeeResponse): _153.QueryPayeeResponseProtoMsg;
                };
                QueryCounterpartyPayeeRequest: {
                    typeUrl: string;
                    encode(message: _153.QueryCounterpartyPayeeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.QueryCounterpartyPayeeRequest;
                    fromPartial(object: Partial<_153.QueryCounterpartyPayeeRequest>): _153.QueryCounterpartyPayeeRequest;
                    fromAmino(object: _153.QueryCounterpartyPayeeRequestAmino): _153.QueryCounterpartyPayeeRequest;
                    toAmino(message: _153.QueryCounterpartyPayeeRequest): _153.QueryCounterpartyPayeeRequestAmino;
                    fromAminoMsg(object: _153.QueryCounterpartyPayeeRequestAminoMsg): _153.QueryCounterpartyPayeeRequest;
                    toAminoMsg(message: _153.QueryCounterpartyPayeeRequest): _153.QueryCounterpartyPayeeRequestAminoMsg;
                    fromProtoMsg(message: _153.QueryCounterpartyPayeeRequestProtoMsg): _153.QueryCounterpartyPayeeRequest;
                    toProto(message: _153.QueryCounterpartyPayeeRequest): Uint8Array;
                    toProtoMsg(message: _153.QueryCounterpartyPayeeRequest): _153.QueryCounterpartyPayeeRequestProtoMsg;
                };
                QueryCounterpartyPayeeResponse: {
                    typeUrl: string;
                    encode(message: _153.QueryCounterpartyPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.QueryCounterpartyPayeeResponse;
                    fromPartial(object: Partial<_153.QueryCounterpartyPayeeResponse>): _153.QueryCounterpartyPayeeResponse;
                    fromAmino(object: _153.QueryCounterpartyPayeeResponseAmino): _153.QueryCounterpartyPayeeResponse;
                    toAmino(message: _153.QueryCounterpartyPayeeResponse): _153.QueryCounterpartyPayeeResponseAmino;
                    fromAminoMsg(object: _153.QueryCounterpartyPayeeResponseAminoMsg): _153.QueryCounterpartyPayeeResponse;
                    toAminoMsg(message: _153.QueryCounterpartyPayeeResponse): _153.QueryCounterpartyPayeeResponseAminoMsg;
                    fromProtoMsg(message: _153.QueryCounterpartyPayeeResponseProtoMsg): _153.QueryCounterpartyPayeeResponse;
                    toProto(message: _153.QueryCounterpartyPayeeResponse): Uint8Array;
                    toProtoMsg(message: _153.QueryCounterpartyPayeeResponse): _153.QueryCounterpartyPayeeResponseProtoMsg;
                };
                QueryFeeEnabledChannelsRequest: {
                    typeUrl: string;
                    encode(message: _153.QueryFeeEnabledChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.QueryFeeEnabledChannelsRequest;
                    fromPartial(object: Partial<_153.QueryFeeEnabledChannelsRequest>): _153.QueryFeeEnabledChannelsRequest;
                    fromAmino(object: _153.QueryFeeEnabledChannelsRequestAmino): _153.QueryFeeEnabledChannelsRequest;
                    toAmino(message: _153.QueryFeeEnabledChannelsRequest): _153.QueryFeeEnabledChannelsRequestAmino;
                    fromAminoMsg(object: _153.QueryFeeEnabledChannelsRequestAminoMsg): _153.QueryFeeEnabledChannelsRequest;
                    toAminoMsg(message: _153.QueryFeeEnabledChannelsRequest): _153.QueryFeeEnabledChannelsRequestAminoMsg;
                    fromProtoMsg(message: _153.QueryFeeEnabledChannelsRequestProtoMsg): _153.QueryFeeEnabledChannelsRequest;
                    toProto(message: _153.QueryFeeEnabledChannelsRequest): Uint8Array;
                    toProtoMsg(message: _153.QueryFeeEnabledChannelsRequest): _153.QueryFeeEnabledChannelsRequestProtoMsg;
                };
                QueryFeeEnabledChannelsResponse: {
                    typeUrl: string;
                    encode(message: _153.QueryFeeEnabledChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.QueryFeeEnabledChannelsResponse;
                    fromPartial(object: Partial<_153.QueryFeeEnabledChannelsResponse>): _153.QueryFeeEnabledChannelsResponse;
                    fromAmino(object: _153.QueryFeeEnabledChannelsResponseAmino): _153.QueryFeeEnabledChannelsResponse;
                    toAmino(message: _153.QueryFeeEnabledChannelsResponse): _153.QueryFeeEnabledChannelsResponseAmino;
                    fromAminoMsg(object: _153.QueryFeeEnabledChannelsResponseAminoMsg): _153.QueryFeeEnabledChannelsResponse;
                    toAminoMsg(message: _153.QueryFeeEnabledChannelsResponse): _153.QueryFeeEnabledChannelsResponseAminoMsg;
                    fromProtoMsg(message: _153.QueryFeeEnabledChannelsResponseProtoMsg): _153.QueryFeeEnabledChannelsResponse;
                    toProto(message: _153.QueryFeeEnabledChannelsResponse): Uint8Array;
                    toProtoMsg(message: _153.QueryFeeEnabledChannelsResponse): _153.QueryFeeEnabledChannelsResponseProtoMsg;
                };
                QueryFeeEnabledChannelRequest: {
                    typeUrl: string;
                    encode(message: _153.QueryFeeEnabledChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.QueryFeeEnabledChannelRequest;
                    fromPartial(object: Partial<_153.QueryFeeEnabledChannelRequest>): _153.QueryFeeEnabledChannelRequest;
                    fromAmino(object: _153.QueryFeeEnabledChannelRequestAmino): _153.QueryFeeEnabledChannelRequest;
                    toAmino(message: _153.QueryFeeEnabledChannelRequest): _153.QueryFeeEnabledChannelRequestAmino;
                    fromAminoMsg(object: _153.QueryFeeEnabledChannelRequestAminoMsg): _153.QueryFeeEnabledChannelRequest;
                    toAminoMsg(message: _153.QueryFeeEnabledChannelRequest): _153.QueryFeeEnabledChannelRequestAminoMsg;
                    fromProtoMsg(message: _153.QueryFeeEnabledChannelRequestProtoMsg): _153.QueryFeeEnabledChannelRequest;
                    toProto(message: _153.QueryFeeEnabledChannelRequest): Uint8Array;
                    toProtoMsg(message: _153.QueryFeeEnabledChannelRequest): _153.QueryFeeEnabledChannelRequestProtoMsg;
                };
                QueryFeeEnabledChannelResponse: {
                    typeUrl: string;
                    encode(message: _153.QueryFeeEnabledChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.QueryFeeEnabledChannelResponse;
                    fromPartial(object: Partial<_153.QueryFeeEnabledChannelResponse>): _153.QueryFeeEnabledChannelResponse;
                    fromAmino(object: _153.QueryFeeEnabledChannelResponseAmino): _153.QueryFeeEnabledChannelResponse;
                    toAmino(message: _153.QueryFeeEnabledChannelResponse): _153.QueryFeeEnabledChannelResponseAmino;
                    fromAminoMsg(object: _153.QueryFeeEnabledChannelResponseAminoMsg): _153.QueryFeeEnabledChannelResponse;
                    toAminoMsg(message: _153.QueryFeeEnabledChannelResponse): _153.QueryFeeEnabledChannelResponseAminoMsg;
                    fromProtoMsg(message: _153.QueryFeeEnabledChannelResponseProtoMsg): _153.QueryFeeEnabledChannelResponse;
                    toProto(message: _153.QueryFeeEnabledChannelResponse): Uint8Array;
                    toProtoMsg(message: _153.QueryFeeEnabledChannelResponse): _153.QueryFeeEnabledChannelResponseProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _152.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.Metadata;
                    fromPartial(object: Partial<_152.Metadata>): _152.Metadata;
                    fromAmino(object: _152.MetadataAmino): _152.Metadata;
                    toAmino(message: _152.Metadata): _152.MetadataAmino;
                    fromAminoMsg(object: _152.MetadataAminoMsg): _152.Metadata;
                    toAminoMsg(message: _152.Metadata): _152.MetadataAminoMsg;
                    fromProtoMsg(message: _152.MetadataProtoMsg): _152.Metadata;
                    toProto(message: _152.Metadata): Uint8Array;
                    toProtoMsg(message: _152.Metadata): _152.MetadataProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _151.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.GenesisState;
                    fromPartial(object: Partial<_151.GenesisState>): _151.GenesisState;
                    fromAmino(object: _151.GenesisStateAmino): _151.GenesisState;
                    toAmino(message: _151.GenesisState): _151.GenesisStateAmino;
                    fromAminoMsg(object: _151.GenesisStateAminoMsg): _151.GenesisState;
                    toAminoMsg(message: _151.GenesisState): _151.GenesisStateAminoMsg;
                    fromProtoMsg(message: _151.GenesisStateProtoMsg): _151.GenesisState;
                    toProto(message: _151.GenesisState): Uint8Array;
                    toProtoMsg(message: _151.GenesisState): _151.GenesisStateProtoMsg;
                };
                FeeEnabledChannel: {
                    typeUrl: string;
                    encode(message: _151.FeeEnabledChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.FeeEnabledChannel;
                    fromPartial(object: Partial<_151.FeeEnabledChannel>): _151.FeeEnabledChannel;
                    fromAmino(object: _151.FeeEnabledChannelAmino): _151.FeeEnabledChannel;
                    toAmino(message: _151.FeeEnabledChannel): _151.FeeEnabledChannelAmino;
                    fromAminoMsg(object: _151.FeeEnabledChannelAminoMsg): _151.FeeEnabledChannel;
                    toAminoMsg(message: _151.FeeEnabledChannel): _151.FeeEnabledChannelAminoMsg;
                    fromProtoMsg(message: _151.FeeEnabledChannelProtoMsg): _151.FeeEnabledChannel;
                    toProto(message: _151.FeeEnabledChannel): Uint8Array;
                    toProtoMsg(message: _151.FeeEnabledChannel): _151.FeeEnabledChannelProtoMsg;
                };
                RegisteredPayee: {
                    typeUrl: string;
                    encode(message: _151.RegisteredPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.RegisteredPayee;
                    fromPartial(object: Partial<_151.RegisteredPayee>): _151.RegisteredPayee;
                    fromAmino(object: _151.RegisteredPayeeAmino): _151.RegisteredPayee;
                    toAmino(message: _151.RegisteredPayee): _151.RegisteredPayeeAmino;
                    fromAminoMsg(object: _151.RegisteredPayeeAminoMsg): _151.RegisteredPayee;
                    toAminoMsg(message: _151.RegisteredPayee): _151.RegisteredPayeeAminoMsg;
                    fromProtoMsg(message: _151.RegisteredPayeeProtoMsg): _151.RegisteredPayee;
                    toProto(message: _151.RegisteredPayee): Uint8Array;
                    toProtoMsg(message: _151.RegisteredPayee): _151.RegisteredPayeeProtoMsg;
                };
                RegisteredCounterpartyPayee: {
                    typeUrl: string;
                    encode(message: _151.RegisteredCounterpartyPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.RegisteredCounterpartyPayee;
                    fromPartial(object: Partial<_151.RegisteredCounterpartyPayee>): _151.RegisteredCounterpartyPayee;
                    fromAmino(object: _151.RegisteredCounterpartyPayeeAmino): _151.RegisteredCounterpartyPayee;
                    toAmino(message: _151.RegisteredCounterpartyPayee): _151.RegisteredCounterpartyPayeeAmino;
                    fromAminoMsg(object: _151.RegisteredCounterpartyPayeeAminoMsg): _151.RegisteredCounterpartyPayee;
                    toAminoMsg(message: _151.RegisteredCounterpartyPayee): _151.RegisteredCounterpartyPayeeAminoMsg;
                    fromProtoMsg(message: _151.RegisteredCounterpartyPayeeProtoMsg): _151.RegisteredCounterpartyPayee;
                    toProto(message: _151.RegisteredCounterpartyPayee): Uint8Array;
                    toProtoMsg(message: _151.RegisteredCounterpartyPayee): _151.RegisteredCounterpartyPayeeProtoMsg;
                };
                ForwardRelayerAddress: {
                    typeUrl: string;
                    encode(message: _151.ForwardRelayerAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.ForwardRelayerAddress;
                    fromPartial(object: Partial<_151.ForwardRelayerAddress>): _151.ForwardRelayerAddress;
                    fromAmino(object: _151.ForwardRelayerAddressAmino): _151.ForwardRelayerAddress;
                    toAmino(message: _151.ForwardRelayerAddress): _151.ForwardRelayerAddressAmino;
                    fromAminoMsg(object: _151.ForwardRelayerAddressAminoMsg): _151.ForwardRelayerAddress;
                    toAminoMsg(message: _151.ForwardRelayerAddress): _151.ForwardRelayerAddressAminoMsg;
                    fromProtoMsg(message: _151.ForwardRelayerAddressProtoMsg): _151.ForwardRelayerAddress;
                    toProto(message: _151.ForwardRelayerAddress): Uint8Array;
                    toProtoMsg(message: _151.ForwardRelayerAddress): _151.ForwardRelayerAddressProtoMsg;
                };
                Fee: {
                    typeUrl: string;
                    encode(message: _150.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.Fee;
                    fromPartial(object: Partial<_150.Fee>): _150.Fee;
                    fromAmino(object: _150.FeeAmino): _150.Fee;
                    toAmino(message: _150.Fee): _150.FeeAmino;
                    fromAminoMsg(object: _150.FeeAminoMsg): _150.Fee;
                    toAminoMsg(message: _150.Fee): _150.FeeAminoMsg;
                    fromProtoMsg(message: _150.FeeProtoMsg): _150.Fee;
                    toProto(message: _150.Fee): Uint8Array;
                    toProtoMsg(message: _150.Fee): _150.FeeProtoMsg;
                };
                PacketFee: {
                    typeUrl: string;
                    encode(message: _150.PacketFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.PacketFee;
                    fromPartial(object: Partial<_150.PacketFee>): _150.PacketFee;
                    fromAmino(object: _150.PacketFeeAmino): _150.PacketFee;
                    toAmino(message: _150.PacketFee): _150.PacketFeeAmino;
                    fromAminoMsg(object: _150.PacketFeeAminoMsg): _150.PacketFee;
                    toAminoMsg(message: _150.PacketFee): _150.PacketFeeAminoMsg;
                    fromProtoMsg(message: _150.PacketFeeProtoMsg): _150.PacketFee;
                    toProto(message: _150.PacketFee): Uint8Array;
                    toProtoMsg(message: _150.PacketFee): _150.PacketFeeProtoMsg;
                };
                PacketFees: {
                    typeUrl: string;
                    encode(message: _150.PacketFees, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.PacketFees;
                    fromPartial(object: Partial<_150.PacketFees>): _150.PacketFees;
                    fromAmino(object: _150.PacketFeesAmino): _150.PacketFees;
                    toAmino(message: _150.PacketFees): _150.PacketFeesAmino;
                    fromAminoMsg(object: _150.PacketFeesAminoMsg): _150.PacketFees;
                    toAminoMsg(message: _150.PacketFees): _150.PacketFeesAminoMsg;
                    fromProtoMsg(message: _150.PacketFeesProtoMsg): _150.PacketFees;
                    toProto(message: _150.PacketFees): Uint8Array;
                    toProtoMsg(message: _150.PacketFees): _150.PacketFeesProtoMsg;
                };
                IdentifiedPacketFees: {
                    typeUrl: string;
                    encode(message: _150.IdentifiedPacketFees, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.IdentifiedPacketFees;
                    fromPartial(object: Partial<_150.IdentifiedPacketFees>): _150.IdentifiedPacketFees;
                    fromAmino(object: _150.IdentifiedPacketFeesAmino): _150.IdentifiedPacketFees;
                    toAmino(message: _150.IdentifiedPacketFees): _150.IdentifiedPacketFeesAmino;
                    fromAminoMsg(object: _150.IdentifiedPacketFeesAminoMsg): _150.IdentifiedPacketFees;
                    toAminoMsg(message: _150.IdentifiedPacketFees): _150.IdentifiedPacketFeesAminoMsg;
                    fromProtoMsg(message: _150.IdentifiedPacketFeesProtoMsg): _150.IdentifiedPacketFees;
                    toProto(message: _150.IdentifiedPacketFees): Uint8Array;
                    toProtoMsg(message: _150.IdentifiedPacketFees): _150.IdentifiedPacketFeesProtoMsg;
                };
                IncentivizedAcknowledgement: {
                    typeUrl: string;
                    encode(message: _149.IncentivizedAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.IncentivizedAcknowledgement;
                    fromPartial(object: Partial<_149.IncentivizedAcknowledgement>): _149.IncentivizedAcknowledgement;
                    fromAmino(object: _149.IncentivizedAcknowledgementAmino): _149.IncentivizedAcknowledgement;
                    toAmino(message: _149.IncentivizedAcknowledgement): _149.IncentivizedAcknowledgementAmino;
                    fromAminoMsg(object: _149.IncentivizedAcknowledgementAminoMsg): _149.IncentivizedAcknowledgement;
                    toAminoMsg(message: _149.IncentivizedAcknowledgement): _149.IncentivizedAcknowledgementAminoMsg;
                    fromProtoMsg(message: _149.IncentivizedAcknowledgementProtoMsg): _149.IncentivizedAcknowledgement;
                    toProto(message: _149.IncentivizedAcknowledgement): Uint8Array;
                    toProtoMsg(message: _149.IncentivizedAcknowledgement): _149.IncentivizedAcknowledgementProtoMsg;
                };
            };
        }
        namespace interchain_accounts {
            namespace controller {
                const v1: {
                    MsgClientImpl: typeof _374.MsgClientImpl;
                    QueryClientImpl: typeof _367.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        interchainAccount(request: _156.QueryInterchainAccountRequest): Promise<_156.QueryInterchainAccountResponse>;
                        params(request?: _156.QueryParamsRequest): Promise<_156.QueryParamsResponse>;
                    };
                    registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            registerInterchainAccount(value: _157.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            sendTx(value: _157.MsgSendTx): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            registerInterchainAccount(value: _157.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: _157.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: _157.MsgSendTx): {
                                typeUrl: string;
                                value: _157.MsgSendTx;
                            };
                        };
                        fromPartial: {
                            registerInterchainAccount(value: _157.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: _157.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: _157.MsgSendTx): {
                                typeUrl: string;
                                value: _157.MsgSendTx;
                            };
                        };
                    };
                    AminoConverter: {
                        "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount": {
                            aminoType: string;
                            toAmino: (message: _157.MsgRegisterInterchainAccount) => _157.MsgRegisterInterchainAccountAmino;
                            fromAmino: (object: _157.MsgRegisterInterchainAccountAmino) => _157.MsgRegisterInterchainAccount;
                        };
                        "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx": {
                            aminoType: string;
                            toAmino: (message: _157.MsgSendTx) => _157.MsgSendTxAmino;
                            fromAmino: (object: _157.MsgSendTxAmino) => _157.MsgSendTx;
                        };
                    };
                    MsgRegisterInterchainAccount: {
                        typeUrl: string;
                        encode(message: _157.MsgRegisterInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _157.MsgRegisterInterchainAccount;
                        fromPartial(object: Partial<_157.MsgRegisterInterchainAccount>): _157.MsgRegisterInterchainAccount;
                        fromAmino(object: _157.MsgRegisterInterchainAccountAmino): _157.MsgRegisterInterchainAccount;
                        toAmino(message: _157.MsgRegisterInterchainAccount): _157.MsgRegisterInterchainAccountAmino;
                        fromAminoMsg(object: _157.MsgRegisterInterchainAccountAminoMsg): _157.MsgRegisterInterchainAccount;
                        toAminoMsg(message: _157.MsgRegisterInterchainAccount): _157.MsgRegisterInterchainAccountAminoMsg;
                        fromProtoMsg(message: _157.MsgRegisterInterchainAccountProtoMsg): _157.MsgRegisterInterchainAccount;
                        toProto(message: _157.MsgRegisterInterchainAccount): Uint8Array;
                        toProtoMsg(message: _157.MsgRegisterInterchainAccount): _157.MsgRegisterInterchainAccountProtoMsg;
                    };
                    MsgRegisterInterchainAccountResponse: {
                        typeUrl: string;
                        encode(message: _157.MsgRegisterInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _157.MsgRegisterInterchainAccountResponse;
                        fromPartial(object: Partial<_157.MsgRegisterInterchainAccountResponse>): _157.MsgRegisterInterchainAccountResponse;
                        fromAmino(object: _157.MsgRegisterInterchainAccountResponseAmino): _157.MsgRegisterInterchainAccountResponse;
                        toAmino(message: _157.MsgRegisterInterchainAccountResponse): _157.MsgRegisterInterchainAccountResponseAmino;
                        fromAminoMsg(object: _157.MsgRegisterInterchainAccountResponseAminoMsg): _157.MsgRegisterInterchainAccountResponse;
                        toAminoMsg(message: _157.MsgRegisterInterchainAccountResponse): _157.MsgRegisterInterchainAccountResponseAminoMsg;
                        fromProtoMsg(message: _157.MsgRegisterInterchainAccountResponseProtoMsg): _157.MsgRegisterInterchainAccountResponse;
                        toProto(message: _157.MsgRegisterInterchainAccountResponse): Uint8Array;
                        toProtoMsg(message: _157.MsgRegisterInterchainAccountResponse): _157.MsgRegisterInterchainAccountResponseProtoMsg;
                    };
                    MsgSendTx: {
                        typeUrl: string;
                        encode(message: _157.MsgSendTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _157.MsgSendTx;
                        fromPartial(object: Partial<_157.MsgSendTx>): _157.MsgSendTx;
                        fromAmino(object: _157.MsgSendTxAmino): _157.MsgSendTx;
                        toAmino(message: _157.MsgSendTx): _157.MsgSendTxAmino;
                        fromAminoMsg(object: _157.MsgSendTxAminoMsg): _157.MsgSendTx;
                        toAminoMsg(message: _157.MsgSendTx): _157.MsgSendTxAminoMsg;
                        fromProtoMsg(message: _157.MsgSendTxProtoMsg): _157.MsgSendTx;
                        toProto(message: _157.MsgSendTx): Uint8Array;
                        toProtoMsg(message: _157.MsgSendTx): _157.MsgSendTxProtoMsg;
                    };
                    MsgSendTxResponse: {
                        typeUrl: string;
                        encode(message: _157.MsgSendTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _157.MsgSendTxResponse;
                        fromPartial(object: Partial<_157.MsgSendTxResponse>): _157.MsgSendTxResponse;
                        fromAmino(object: _157.MsgSendTxResponseAmino): _157.MsgSendTxResponse;
                        toAmino(message: _157.MsgSendTxResponse): _157.MsgSendTxResponseAmino;
                        fromAminoMsg(object: _157.MsgSendTxResponseAminoMsg): _157.MsgSendTxResponse;
                        toAminoMsg(message: _157.MsgSendTxResponse): _157.MsgSendTxResponseAminoMsg;
                        fromProtoMsg(message: _157.MsgSendTxResponseProtoMsg): _157.MsgSendTxResponse;
                        toProto(message: _157.MsgSendTxResponse): Uint8Array;
                        toProtoMsg(message: _157.MsgSendTxResponse): _157.MsgSendTxResponseProtoMsg;
                    };
                    QueryInterchainAccountRequest: {
                        typeUrl: string;
                        encode(message: _156.QueryInterchainAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _156.QueryInterchainAccountRequest;
                        fromPartial(object: Partial<_156.QueryInterchainAccountRequest>): _156.QueryInterchainAccountRequest;
                        fromAmino(object: _156.QueryInterchainAccountRequestAmino): _156.QueryInterchainAccountRequest;
                        toAmino(message: _156.QueryInterchainAccountRequest): _156.QueryInterchainAccountRequestAmino;
                        fromAminoMsg(object: _156.QueryInterchainAccountRequestAminoMsg): _156.QueryInterchainAccountRequest;
                        toAminoMsg(message: _156.QueryInterchainAccountRequest): _156.QueryInterchainAccountRequestAminoMsg;
                        fromProtoMsg(message: _156.QueryInterchainAccountRequestProtoMsg): _156.QueryInterchainAccountRequest;
                        toProto(message: _156.QueryInterchainAccountRequest): Uint8Array;
                        toProtoMsg(message: _156.QueryInterchainAccountRequest): _156.QueryInterchainAccountRequestProtoMsg;
                    };
                    QueryInterchainAccountResponse: {
                        typeUrl: string;
                        encode(message: _156.QueryInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _156.QueryInterchainAccountResponse;
                        fromPartial(object: Partial<_156.QueryInterchainAccountResponse>): _156.QueryInterchainAccountResponse;
                        fromAmino(object: _156.QueryInterchainAccountResponseAmino): _156.QueryInterchainAccountResponse;
                        toAmino(message: _156.QueryInterchainAccountResponse): _156.QueryInterchainAccountResponseAmino;
                        fromAminoMsg(object: _156.QueryInterchainAccountResponseAminoMsg): _156.QueryInterchainAccountResponse;
                        toAminoMsg(message: _156.QueryInterchainAccountResponse): _156.QueryInterchainAccountResponseAminoMsg;
                        fromProtoMsg(message: _156.QueryInterchainAccountResponseProtoMsg): _156.QueryInterchainAccountResponse;
                        toProto(message: _156.QueryInterchainAccountResponse): Uint8Array;
                        toProtoMsg(message: _156.QueryInterchainAccountResponse): _156.QueryInterchainAccountResponseProtoMsg;
                    };
                    QueryParamsRequest: {
                        typeUrl: string;
                        encode(_: _156.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _156.QueryParamsRequest;
                        fromPartial(_: Partial<_156.QueryParamsRequest>): _156.QueryParamsRequest;
                        fromAmino(_: _156.QueryParamsRequestAmino): _156.QueryParamsRequest;
                        toAmino(_: _156.QueryParamsRequest): _156.QueryParamsRequestAmino;
                        fromAminoMsg(object: _156.QueryParamsRequestAminoMsg): _156.QueryParamsRequest;
                        toAminoMsg(message: _156.QueryParamsRequest): _156.QueryParamsRequestAminoMsg;
                        fromProtoMsg(message: _156.QueryParamsRequestProtoMsg): _156.QueryParamsRequest;
                        toProto(message: _156.QueryParamsRequest): Uint8Array;
                        toProtoMsg(message: _156.QueryParamsRequest): _156.QueryParamsRequestProtoMsg;
                    };
                    QueryParamsResponse: {
                        typeUrl: string;
                        encode(message: _156.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _156.QueryParamsResponse;
                        fromPartial(object: Partial<_156.QueryParamsResponse>): _156.QueryParamsResponse;
                        fromAmino(object: _156.QueryParamsResponseAmino): _156.QueryParamsResponse;
                        toAmino(message: _156.QueryParamsResponse): _156.QueryParamsResponseAmino;
                        fromAminoMsg(object: _156.QueryParamsResponseAminoMsg): _156.QueryParamsResponse;
                        toAminoMsg(message: _156.QueryParamsResponse): _156.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _156.QueryParamsResponseProtoMsg): _156.QueryParamsResponse;
                        toProto(message: _156.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _156.QueryParamsResponse): _156.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        typeUrl: string;
                        encode(message: _155.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.Params;
                        fromPartial(object: Partial<_155.Params>): _155.Params;
                        fromAmino(object: _155.ParamsAmino): _155.Params;
                        toAmino(message: _155.Params): _155.ParamsAmino;
                        fromAminoMsg(object: _155.ParamsAminoMsg): _155.Params;
                        toAminoMsg(message: _155.Params): _155.ParamsAminoMsg;
                        fromProtoMsg(message: _155.ParamsProtoMsg): _155.Params;
                        toProto(message: _155.Params): Uint8Array;
                        toProtoMsg(message: _155.Params): _155.ParamsProtoMsg;
                    };
                };
            }
            namespace genesis {
                const v1: {
                    GenesisState: {
                        typeUrl: string;
                        encode(message: _158.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.GenesisState;
                        fromPartial(object: Partial<_158.GenesisState>): _158.GenesisState;
                        fromAmino(object: _158.GenesisStateAmino): _158.GenesisState;
                        toAmino(message: _158.GenesisState): _158.GenesisStateAmino;
                        fromAminoMsg(object: _158.GenesisStateAminoMsg): _158.GenesisState;
                        toAminoMsg(message: _158.GenesisState): _158.GenesisStateAminoMsg;
                        fromProtoMsg(message: _158.GenesisStateProtoMsg): _158.GenesisState;
                        toProto(message: _158.GenesisState): Uint8Array;
                        toProtoMsg(message: _158.GenesisState): _158.GenesisStateProtoMsg;
                    };
                    ControllerGenesisState: {
                        typeUrl: string;
                        encode(message: _158.ControllerGenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.ControllerGenesisState;
                        fromPartial(object: Partial<_158.ControllerGenesisState>): _158.ControllerGenesisState;
                        fromAmino(object: _158.ControllerGenesisStateAmino): _158.ControllerGenesisState;
                        toAmino(message: _158.ControllerGenesisState): _158.ControllerGenesisStateAmino;
                        fromAminoMsg(object: _158.ControllerGenesisStateAminoMsg): _158.ControllerGenesisState;
                        toAminoMsg(message: _158.ControllerGenesisState): _158.ControllerGenesisStateAminoMsg;
                        fromProtoMsg(message: _158.ControllerGenesisStateProtoMsg): _158.ControllerGenesisState;
                        toProto(message: _158.ControllerGenesisState): Uint8Array;
                        toProtoMsg(message: _158.ControllerGenesisState): _158.ControllerGenesisStateProtoMsg;
                    };
                    HostGenesisState: {
                        typeUrl: string;
                        encode(message: _158.HostGenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.HostGenesisState;
                        fromPartial(object: Partial<_158.HostGenesisState>): _158.HostGenesisState;
                        fromAmino(object: _158.HostGenesisStateAmino): _158.HostGenesisState;
                        toAmino(message: _158.HostGenesisState): _158.HostGenesisStateAmino;
                        fromAminoMsg(object: _158.HostGenesisStateAminoMsg): _158.HostGenesisState;
                        toAminoMsg(message: _158.HostGenesisState): _158.HostGenesisStateAminoMsg;
                        fromProtoMsg(message: _158.HostGenesisStateProtoMsg): _158.HostGenesisState;
                        toProto(message: _158.HostGenesisState): Uint8Array;
                        toProtoMsg(message: _158.HostGenesisState): _158.HostGenesisStateProtoMsg;
                    };
                    ActiveChannel: {
                        typeUrl: string;
                        encode(message: _158.ActiveChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.ActiveChannel;
                        fromPartial(object: Partial<_158.ActiveChannel>): _158.ActiveChannel;
                        fromAmino(object: _158.ActiveChannelAmino): _158.ActiveChannel;
                        toAmino(message: _158.ActiveChannel): _158.ActiveChannelAmino;
                        fromAminoMsg(object: _158.ActiveChannelAminoMsg): _158.ActiveChannel;
                        toAminoMsg(message: _158.ActiveChannel): _158.ActiveChannelAminoMsg;
                        fromProtoMsg(message: _158.ActiveChannelProtoMsg): _158.ActiveChannel;
                        toProto(message: _158.ActiveChannel): Uint8Array;
                        toProtoMsg(message: _158.ActiveChannel): _158.ActiveChannelProtoMsg;
                    };
                    RegisteredInterchainAccount: {
                        typeUrl: string;
                        encode(message: _158.RegisteredInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.RegisteredInterchainAccount;
                        fromPartial(object: Partial<_158.RegisteredInterchainAccount>): _158.RegisteredInterchainAccount;
                        fromAmino(object: _158.RegisteredInterchainAccountAmino): _158.RegisteredInterchainAccount;
                        toAmino(message: _158.RegisteredInterchainAccount): _158.RegisteredInterchainAccountAmino;
                        fromAminoMsg(object: _158.RegisteredInterchainAccountAminoMsg): _158.RegisteredInterchainAccount;
                        toAminoMsg(message: _158.RegisteredInterchainAccount): _158.RegisteredInterchainAccountAminoMsg;
                        fromProtoMsg(message: _158.RegisteredInterchainAccountProtoMsg): _158.RegisteredInterchainAccount;
                        toProto(message: _158.RegisteredInterchainAccount): Uint8Array;
                        toProtoMsg(message: _158.RegisteredInterchainAccount): _158.RegisteredInterchainAccountProtoMsg;
                    };
                };
            }
            namespace host {
                const v1: {
                    MsgClientImpl: typeof _375.MsgClientImpl;
                    QueryClientImpl: typeof _368.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        params(request?: _160.QueryParamsRequest): Promise<_160.QueryParamsResponse>;
                    };
                    registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            moduleQuerySafe(value: _161.MsgModuleQuerySafe): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            moduleQuerySafe(value: _161.MsgModuleQuerySafe): {
                                typeUrl: string;
                                value: _161.MsgModuleQuerySafe;
                            };
                        };
                        fromPartial: {
                            moduleQuerySafe(value: _161.MsgModuleQuerySafe): {
                                typeUrl: string;
                                value: _161.MsgModuleQuerySafe;
                            };
                        };
                    };
                    AminoConverter: {
                        "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafe": {
                            aminoType: string;
                            toAmino: (message: _161.MsgModuleQuerySafe) => _161.MsgModuleQuerySafeAmino;
                            fromAmino: (object: _161.MsgModuleQuerySafeAmino) => _161.MsgModuleQuerySafe;
                        };
                    };
                    MsgModuleQuerySafe: {
                        typeUrl: string;
                        encode(message: _161.MsgModuleQuerySafe, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.MsgModuleQuerySafe;
                        fromPartial(object: Partial<_161.MsgModuleQuerySafe>): _161.MsgModuleQuerySafe;
                        fromAmino(object: _161.MsgModuleQuerySafeAmino): _161.MsgModuleQuerySafe;
                        toAmino(message: _161.MsgModuleQuerySafe): _161.MsgModuleQuerySafeAmino;
                        fromAminoMsg(object: _161.MsgModuleQuerySafeAminoMsg): _161.MsgModuleQuerySafe;
                        toAminoMsg(message: _161.MsgModuleQuerySafe): _161.MsgModuleQuerySafeAminoMsg;
                        fromProtoMsg(message: _161.MsgModuleQuerySafeProtoMsg): _161.MsgModuleQuerySafe;
                        toProto(message: _161.MsgModuleQuerySafe): Uint8Array;
                        toProtoMsg(message: _161.MsgModuleQuerySafe): _161.MsgModuleQuerySafeProtoMsg;
                    };
                    MsgModuleQuerySafeResponse: {
                        typeUrl: string;
                        encode(message: _161.MsgModuleQuerySafeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.MsgModuleQuerySafeResponse;
                        fromPartial(object: Partial<_161.MsgModuleQuerySafeResponse>): _161.MsgModuleQuerySafeResponse;
                        fromAmino(object: _161.MsgModuleQuerySafeResponseAmino): _161.MsgModuleQuerySafeResponse;
                        toAmino(message: _161.MsgModuleQuerySafeResponse): _161.MsgModuleQuerySafeResponseAmino;
                        fromAminoMsg(object: _161.MsgModuleQuerySafeResponseAminoMsg): _161.MsgModuleQuerySafeResponse;
                        toAminoMsg(message: _161.MsgModuleQuerySafeResponse): _161.MsgModuleQuerySafeResponseAminoMsg;
                        fromProtoMsg(message: _161.MsgModuleQuerySafeResponseProtoMsg): _161.MsgModuleQuerySafeResponse;
                        toProto(message: _161.MsgModuleQuerySafeResponse): Uint8Array;
                        toProtoMsg(message: _161.MsgModuleQuerySafeResponse): _161.MsgModuleQuerySafeResponseProtoMsg;
                    };
                    QueryParamsRequest: {
                        typeUrl: string;
                        encode(_: _160.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.QueryParamsRequest;
                        fromPartial(_: Partial<_160.QueryParamsRequest>): _160.QueryParamsRequest;
                        fromAmino(_: _160.QueryParamsRequestAmino): _160.QueryParamsRequest;
                        toAmino(_: _160.QueryParamsRequest): _160.QueryParamsRequestAmino;
                        fromAminoMsg(object: _160.QueryParamsRequestAminoMsg): _160.QueryParamsRequest;
                        toAminoMsg(message: _160.QueryParamsRequest): _160.QueryParamsRequestAminoMsg;
                        fromProtoMsg(message: _160.QueryParamsRequestProtoMsg): _160.QueryParamsRequest;
                        toProto(message: _160.QueryParamsRequest): Uint8Array;
                        toProtoMsg(message: _160.QueryParamsRequest): _160.QueryParamsRequestProtoMsg;
                    };
                    QueryParamsResponse: {
                        typeUrl: string;
                        encode(message: _160.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.QueryParamsResponse;
                        fromPartial(object: Partial<_160.QueryParamsResponse>): _160.QueryParamsResponse;
                        fromAmino(object: _160.QueryParamsResponseAmino): _160.QueryParamsResponse;
                        toAmino(message: _160.QueryParamsResponse): _160.QueryParamsResponseAmino;
                        fromAminoMsg(object: _160.QueryParamsResponseAminoMsg): _160.QueryParamsResponse;
                        toAminoMsg(message: _160.QueryParamsResponse): _160.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _160.QueryParamsResponseProtoMsg): _160.QueryParamsResponse;
                        toProto(message: _160.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _160.QueryParamsResponse): _160.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        typeUrl: string;
                        encode(message: _159.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.Params;
                        fromPartial(object: Partial<_159.Params>): _159.Params;
                        fromAmino(object: _159.ParamsAmino): _159.Params;
                        toAmino(message: _159.Params): _159.ParamsAmino;
                        fromAminoMsg(object: _159.ParamsAminoMsg): _159.Params;
                        toAminoMsg(message: _159.Params): _159.ParamsAminoMsg;
                        fromProtoMsg(message: _159.ParamsProtoMsg): _159.Params;
                        toProto(message: _159.Params): Uint8Array;
                        toProtoMsg(message: _159.Params): _159.ParamsProtoMsg;
                    };
                    QueryRequest: {
                        typeUrl: string;
                        encode(message: _159.QueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryRequest;
                        fromPartial(object: Partial<_159.QueryRequest>): _159.QueryRequest;
                        fromAmino(object: _159.QueryRequestAmino): _159.QueryRequest;
                        toAmino(message: _159.QueryRequest): _159.QueryRequestAmino;
                        fromAminoMsg(object: _159.QueryRequestAminoMsg): _159.QueryRequest;
                        toAminoMsg(message: _159.QueryRequest): _159.QueryRequestAminoMsg;
                        fromProtoMsg(message: _159.QueryRequestProtoMsg): _159.QueryRequest;
                        toProto(message: _159.QueryRequest): Uint8Array;
                        toProtoMsg(message: _159.QueryRequest): _159.QueryRequestProtoMsg;
                    };
                };
            }
            const v1: {
                typeFromJSON(object: any): _164.Type;
                typeToJSON(object: _164.Type): string;
                Type: typeof _164.Type;
                TypeSDKType: typeof _164.Type;
                TypeAmino: typeof _164.Type;
                InterchainAccountPacketData: {
                    typeUrl: string;
                    encode(message: _164.InterchainAccountPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.InterchainAccountPacketData;
                    fromPartial(object: Partial<_164.InterchainAccountPacketData>): _164.InterchainAccountPacketData;
                    fromAmino(object: _164.InterchainAccountPacketDataAmino): _164.InterchainAccountPacketData;
                    toAmino(message: _164.InterchainAccountPacketData): _164.InterchainAccountPacketDataAmino;
                    fromAminoMsg(object: _164.InterchainAccountPacketDataAminoMsg): _164.InterchainAccountPacketData;
                    toAminoMsg(message: _164.InterchainAccountPacketData): _164.InterchainAccountPacketDataAminoMsg;
                    fromProtoMsg(message: _164.InterchainAccountPacketDataProtoMsg): _164.InterchainAccountPacketData;
                    toProto(message: _164.InterchainAccountPacketData): Uint8Array;
                    toProtoMsg(message: _164.InterchainAccountPacketData): _164.InterchainAccountPacketDataProtoMsg;
                };
                CosmosTx: {
                    typeUrl: string;
                    encode(message: _164.CosmosTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.CosmosTx;
                    fromPartial(object: Partial<_164.CosmosTx>): _164.CosmosTx;
                    fromAmino(object: _164.CosmosTxAmino): _164.CosmosTx;
                    toAmino(message: _164.CosmosTx): _164.CosmosTxAmino;
                    fromAminoMsg(object: _164.CosmosTxAminoMsg): _164.CosmosTx;
                    toAminoMsg(message: _164.CosmosTx): _164.CosmosTxAminoMsg;
                    fromProtoMsg(message: _164.CosmosTxProtoMsg): _164.CosmosTx;
                    toProto(message: _164.CosmosTx): Uint8Array;
                    toProtoMsg(message: _164.CosmosTx): _164.CosmosTxProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _163.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.Metadata;
                    fromPartial(object: Partial<_163.Metadata>): _163.Metadata;
                    fromAmino(object: _163.MetadataAmino): _163.Metadata;
                    toAmino(message: _163.Metadata): _163.MetadataAmino;
                    fromAminoMsg(object: _163.MetadataAminoMsg): _163.Metadata;
                    toAminoMsg(message: _163.Metadata): _163.MetadataAminoMsg;
                    fromProtoMsg(message: _163.MetadataProtoMsg): _163.Metadata;
                    toProto(message: _163.Metadata): Uint8Array;
                    toProtoMsg(message: _163.Metadata): _163.MetadataProtoMsg;
                };
                InterchainAccount: {
                    typeUrl: string;
                    encode(message: _162.InterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.InterchainAccount;
                    fromPartial(object: Partial<_162.InterchainAccount>): _162.InterchainAccount;
                    fromAmino(object: _162.InterchainAccountAmino): _162.InterchainAccount;
                    toAmino(message: _162.InterchainAccount): _162.InterchainAccountAmino;
                    fromAminoMsg(object: _162.InterchainAccountAminoMsg): _162.InterchainAccount;
                    toAminoMsg(message: _162.InterchainAccount): _162.InterchainAccountAminoMsg;
                    fromProtoMsg(message: _162.InterchainAccountProtoMsg): _162.InterchainAccount;
                    toProto(message: _162.InterchainAccount): Uint8Array;
                    toProtoMsg(message: _162.InterchainAccount): _162.InterchainAccountProtoMsg;
                };
            };
        }
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _376.MsgClientImpl;
                QueryClientImpl: typeof _369.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTraces(request?: _167.QueryDenomTracesRequest): Promise<_167.QueryDenomTracesResponse>;
                    denomTrace(request: _167.QueryDenomTraceRequest): Promise<_167.QueryDenomTraceResponse>;
                    params(request?: _167.QueryParamsRequest): Promise<_167.QueryParamsResponse>;
                    denomHash(request: _167.QueryDenomHashRequest): Promise<_167.QueryDenomHashResponse>;
                    escrowAddress(request: _167.QueryEscrowAddressRequest): Promise<_167.QueryEscrowAddressResponse>;
                    totalEscrowForDenom(request: _167.QueryTotalEscrowForDenomRequest): Promise<_167.QueryTotalEscrowForDenomResponse>;
                };
                registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _169.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _169.MsgTransfer): {
                            typeUrl: string;
                            value: _169.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _169.MsgTransfer): {
                            typeUrl: string;
                            value: _169.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _169.MsgTransfer) => _169.MsgTransferAmino;
                        fromAmino: (object: _169.MsgTransferAmino) => _169.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    typeUrl: string;
                    encode(message: _169.MsgTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.MsgTransfer;
                    fromPartial(object: Partial<_169.MsgTransfer>): _169.MsgTransfer;
                    fromAmino(object: _169.MsgTransferAmino): _169.MsgTransfer;
                    toAmino(message: _169.MsgTransfer): _169.MsgTransferAmino;
                    fromAminoMsg(object: _169.MsgTransferAminoMsg): _169.MsgTransfer;
                    toAminoMsg(message: _169.MsgTransfer): _169.MsgTransferAminoMsg;
                    fromProtoMsg(message: _169.MsgTransferProtoMsg): _169.MsgTransfer;
                    toProto(message: _169.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _169.MsgTransfer): _169.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    typeUrl: string;
                    encode(message: _169.MsgTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.MsgTransferResponse;
                    fromPartial(object: Partial<_169.MsgTransferResponse>): _169.MsgTransferResponse;
                    fromAmino(object: _169.MsgTransferResponseAmino): _169.MsgTransferResponse;
                    toAmino(message: _169.MsgTransferResponse): _169.MsgTransferResponseAmino;
                    fromAminoMsg(object: _169.MsgTransferResponseAminoMsg): _169.MsgTransferResponse;
                    toAminoMsg(message: _169.MsgTransferResponse): _169.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _169.MsgTransferResponseProtoMsg): _169.MsgTransferResponse;
                    toProto(message: _169.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _169.MsgTransferResponse): _169.MsgTransferResponseProtoMsg;
                };
                DenomTrace: {
                    typeUrl: string;
                    encode(message: _168.DenomTrace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.DenomTrace;
                    fromPartial(object: Partial<_168.DenomTrace>): _168.DenomTrace;
                    fromAmino(object: _168.DenomTraceAmino): _168.DenomTrace;
                    toAmino(message: _168.DenomTrace): _168.DenomTraceAmino;
                    fromAminoMsg(object: _168.DenomTraceAminoMsg): _168.DenomTrace;
                    toAminoMsg(message: _168.DenomTrace): _168.DenomTraceAminoMsg;
                    fromProtoMsg(message: _168.DenomTraceProtoMsg): _168.DenomTrace;
                    toProto(message: _168.DenomTrace): Uint8Array;
                    toProtoMsg(message: _168.DenomTrace): _168.DenomTraceProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _168.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.Params;
                    fromPartial(object: Partial<_168.Params>): _168.Params;
                    fromAmino(object: _168.ParamsAmino): _168.Params;
                    toAmino(message: _168.Params): _168.ParamsAmino;
                    fromAminoMsg(object: _168.ParamsAminoMsg): _168.Params;
                    toAminoMsg(message: _168.Params): _168.ParamsAminoMsg;
                    fromProtoMsg(message: _168.ParamsProtoMsg): _168.Params;
                    toProto(message: _168.Params): Uint8Array;
                    toProtoMsg(message: _168.Params): _168.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    encode(message: _167.QueryDenomTraceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryDenomTraceRequest;
                    fromPartial(object: Partial<_167.QueryDenomTraceRequest>): _167.QueryDenomTraceRequest;
                    fromAmino(object: _167.QueryDenomTraceRequestAmino): _167.QueryDenomTraceRequest;
                    toAmino(message: _167.QueryDenomTraceRequest): _167.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _167.QueryDenomTraceRequestAminoMsg): _167.QueryDenomTraceRequest;
                    toAminoMsg(message: _167.QueryDenomTraceRequest): _167.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _167.QueryDenomTraceRequestProtoMsg): _167.QueryDenomTraceRequest;
                    toProto(message: _167.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _167.QueryDenomTraceRequest): _167.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    encode(message: _167.QueryDenomTraceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryDenomTraceResponse;
                    fromPartial(object: Partial<_167.QueryDenomTraceResponse>): _167.QueryDenomTraceResponse;
                    fromAmino(object: _167.QueryDenomTraceResponseAmino): _167.QueryDenomTraceResponse;
                    toAmino(message: _167.QueryDenomTraceResponse): _167.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _167.QueryDenomTraceResponseAminoMsg): _167.QueryDenomTraceResponse;
                    toAminoMsg(message: _167.QueryDenomTraceResponse): _167.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _167.QueryDenomTraceResponseProtoMsg): _167.QueryDenomTraceResponse;
                    toProto(message: _167.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _167.QueryDenomTraceResponse): _167.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    encode(message: _167.QueryDenomTracesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryDenomTracesRequest;
                    fromPartial(object: Partial<_167.QueryDenomTracesRequest>): _167.QueryDenomTracesRequest;
                    fromAmino(object: _167.QueryDenomTracesRequestAmino): _167.QueryDenomTracesRequest;
                    toAmino(message: _167.QueryDenomTracesRequest): _167.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _167.QueryDenomTracesRequestAminoMsg): _167.QueryDenomTracesRequest;
                    toAminoMsg(message: _167.QueryDenomTracesRequest): _167.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _167.QueryDenomTracesRequestProtoMsg): _167.QueryDenomTracesRequest;
                    toProto(message: _167.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _167.QueryDenomTracesRequest): _167.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    encode(message: _167.QueryDenomTracesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryDenomTracesResponse;
                    fromPartial(object: Partial<_167.QueryDenomTracesResponse>): _167.QueryDenomTracesResponse;
                    fromAmino(object: _167.QueryDenomTracesResponseAmino): _167.QueryDenomTracesResponse;
                    toAmino(message: _167.QueryDenomTracesResponse): _167.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _167.QueryDenomTracesResponseAminoMsg): _167.QueryDenomTracesResponse;
                    toAminoMsg(message: _167.QueryDenomTracesResponse): _167.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _167.QueryDenomTracesResponseProtoMsg): _167.QueryDenomTracesResponse;
                    toProto(message: _167.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _167.QueryDenomTracesResponse): _167.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    encode(_: _167.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryParamsRequest;
                    fromPartial(_: Partial<_167.QueryParamsRequest>): _167.QueryParamsRequest;
                    fromAmino(_: _167.QueryParamsRequestAmino): _167.QueryParamsRequest;
                    toAmino(_: _167.QueryParamsRequest): _167.QueryParamsRequestAmino;
                    fromAminoMsg(object: _167.QueryParamsRequestAminoMsg): _167.QueryParamsRequest;
                    toAminoMsg(message: _167.QueryParamsRequest): _167.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _167.QueryParamsRequestProtoMsg): _167.QueryParamsRequest;
                    toProto(message: _167.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _167.QueryParamsRequest): _167.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    encode(message: _167.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryParamsResponse;
                    fromPartial(object: Partial<_167.QueryParamsResponse>): _167.QueryParamsResponse;
                    fromAmino(object: _167.QueryParamsResponseAmino): _167.QueryParamsResponse;
                    toAmino(message: _167.QueryParamsResponse): _167.QueryParamsResponseAmino;
                    fromAminoMsg(object: _167.QueryParamsResponseAminoMsg): _167.QueryParamsResponse;
                    toAminoMsg(message: _167.QueryParamsResponse): _167.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _167.QueryParamsResponseProtoMsg): _167.QueryParamsResponse;
                    toProto(message: _167.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _167.QueryParamsResponse): _167.QueryParamsResponseProtoMsg;
                };
                QueryDenomHashRequest: {
                    typeUrl: string;
                    encode(message: _167.QueryDenomHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryDenomHashRequest;
                    fromPartial(object: Partial<_167.QueryDenomHashRequest>): _167.QueryDenomHashRequest;
                    fromAmino(object: _167.QueryDenomHashRequestAmino): _167.QueryDenomHashRequest;
                    toAmino(message: _167.QueryDenomHashRequest): _167.QueryDenomHashRequestAmino;
                    fromAminoMsg(object: _167.QueryDenomHashRequestAminoMsg): _167.QueryDenomHashRequest;
                    toAminoMsg(message: _167.QueryDenomHashRequest): _167.QueryDenomHashRequestAminoMsg;
                    fromProtoMsg(message: _167.QueryDenomHashRequestProtoMsg): _167.QueryDenomHashRequest;
                    toProto(message: _167.QueryDenomHashRequest): Uint8Array;
                    toProtoMsg(message: _167.QueryDenomHashRequest): _167.QueryDenomHashRequestProtoMsg;
                };
                QueryDenomHashResponse: {
                    typeUrl: string;
                    encode(message: _167.QueryDenomHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryDenomHashResponse;
                    fromPartial(object: Partial<_167.QueryDenomHashResponse>): _167.QueryDenomHashResponse;
                    fromAmino(object: _167.QueryDenomHashResponseAmino): _167.QueryDenomHashResponse;
                    toAmino(message: _167.QueryDenomHashResponse): _167.QueryDenomHashResponseAmino;
                    fromAminoMsg(object: _167.QueryDenomHashResponseAminoMsg): _167.QueryDenomHashResponse;
                    toAminoMsg(message: _167.QueryDenomHashResponse): _167.QueryDenomHashResponseAminoMsg;
                    fromProtoMsg(message: _167.QueryDenomHashResponseProtoMsg): _167.QueryDenomHashResponse;
                    toProto(message: _167.QueryDenomHashResponse): Uint8Array;
                    toProtoMsg(message: _167.QueryDenomHashResponse): _167.QueryDenomHashResponseProtoMsg;
                };
                QueryEscrowAddressRequest: {
                    typeUrl: string;
                    encode(message: _167.QueryEscrowAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryEscrowAddressRequest;
                    fromPartial(object: Partial<_167.QueryEscrowAddressRequest>): _167.QueryEscrowAddressRequest;
                    fromAmino(object: _167.QueryEscrowAddressRequestAmino): _167.QueryEscrowAddressRequest;
                    toAmino(message: _167.QueryEscrowAddressRequest): _167.QueryEscrowAddressRequestAmino;
                    fromAminoMsg(object: _167.QueryEscrowAddressRequestAminoMsg): _167.QueryEscrowAddressRequest;
                    toAminoMsg(message: _167.QueryEscrowAddressRequest): _167.QueryEscrowAddressRequestAminoMsg;
                    fromProtoMsg(message: _167.QueryEscrowAddressRequestProtoMsg): _167.QueryEscrowAddressRequest;
                    toProto(message: _167.QueryEscrowAddressRequest): Uint8Array;
                    toProtoMsg(message: _167.QueryEscrowAddressRequest): _167.QueryEscrowAddressRequestProtoMsg;
                };
                QueryEscrowAddressResponse: {
                    typeUrl: string;
                    encode(message: _167.QueryEscrowAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryEscrowAddressResponse;
                    fromPartial(object: Partial<_167.QueryEscrowAddressResponse>): _167.QueryEscrowAddressResponse;
                    fromAmino(object: _167.QueryEscrowAddressResponseAmino): _167.QueryEscrowAddressResponse;
                    toAmino(message: _167.QueryEscrowAddressResponse): _167.QueryEscrowAddressResponseAmino;
                    fromAminoMsg(object: _167.QueryEscrowAddressResponseAminoMsg): _167.QueryEscrowAddressResponse;
                    toAminoMsg(message: _167.QueryEscrowAddressResponse): _167.QueryEscrowAddressResponseAminoMsg;
                    fromProtoMsg(message: _167.QueryEscrowAddressResponseProtoMsg): _167.QueryEscrowAddressResponse;
                    toProto(message: _167.QueryEscrowAddressResponse): Uint8Array;
                    toProtoMsg(message: _167.QueryEscrowAddressResponse): _167.QueryEscrowAddressResponseProtoMsg;
                };
                QueryTotalEscrowForDenomRequest: {
                    typeUrl: string;
                    encode(message: _167.QueryTotalEscrowForDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryTotalEscrowForDenomRequest;
                    fromPartial(object: Partial<_167.QueryTotalEscrowForDenomRequest>): _167.QueryTotalEscrowForDenomRequest;
                    fromAmino(object: _167.QueryTotalEscrowForDenomRequestAmino): _167.QueryTotalEscrowForDenomRequest;
                    toAmino(message: _167.QueryTotalEscrowForDenomRequest): _167.QueryTotalEscrowForDenomRequestAmino;
                    fromAminoMsg(object: _167.QueryTotalEscrowForDenomRequestAminoMsg): _167.QueryTotalEscrowForDenomRequest;
                    toAminoMsg(message: _167.QueryTotalEscrowForDenomRequest): _167.QueryTotalEscrowForDenomRequestAminoMsg;
                    fromProtoMsg(message: _167.QueryTotalEscrowForDenomRequestProtoMsg): _167.QueryTotalEscrowForDenomRequest;
                    toProto(message: _167.QueryTotalEscrowForDenomRequest): Uint8Array;
                    toProtoMsg(message: _167.QueryTotalEscrowForDenomRequest): _167.QueryTotalEscrowForDenomRequestProtoMsg;
                };
                QueryTotalEscrowForDenomResponse: {
                    typeUrl: string;
                    encode(message: _167.QueryTotalEscrowForDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryTotalEscrowForDenomResponse;
                    fromPartial(object: Partial<_167.QueryTotalEscrowForDenomResponse>): _167.QueryTotalEscrowForDenomResponse;
                    fromAmino(object: _167.QueryTotalEscrowForDenomResponseAmino): _167.QueryTotalEscrowForDenomResponse;
                    toAmino(message: _167.QueryTotalEscrowForDenomResponse): _167.QueryTotalEscrowForDenomResponseAmino;
                    fromAminoMsg(object: _167.QueryTotalEscrowForDenomResponseAminoMsg): _167.QueryTotalEscrowForDenomResponse;
                    toAminoMsg(message: _167.QueryTotalEscrowForDenomResponse): _167.QueryTotalEscrowForDenomResponseAminoMsg;
                    fromProtoMsg(message: _167.QueryTotalEscrowForDenomResponseProtoMsg): _167.QueryTotalEscrowForDenomResponse;
                    toProto(message: _167.QueryTotalEscrowForDenomResponse): Uint8Array;
                    toProtoMsg(message: _167.QueryTotalEscrowForDenomResponse): _167.QueryTotalEscrowForDenomResponseProtoMsg;
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
                Allocation: {
                    typeUrl: string;
                    encode(message: _165.Allocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.Allocation;
                    fromPartial(object: Partial<_165.Allocation>): _165.Allocation;
                    fromAmino(object: _165.AllocationAmino): _165.Allocation;
                    toAmino(message: _165.Allocation): _165.AllocationAmino;
                    fromAminoMsg(object: _165.AllocationAminoMsg): _165.Allocation;
                    toAminoMsg(message: _165.Allocation): _165.AllocationAminoMsg;
                    fromProtoMsg(message: _165.AllocationProtoMsg): _165.Allocation;
                    toProto(message: _165.Allocation): Uint8Array;
                    toProtoMsg(message: _165.Allocation): _165.AllocationProtoMsg;
                };
                TransferAuthorization: {
                    typeUrl: string;
                    encode(message: _165.TransferAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.TransferAuthorization;
                    fromPartial(object: Partial<_165.TransferAuthorization>): _165.TransferAuthorization;
                    fromAmino(object: _165.TransferAuthorizationAmino): _165.TransferAuthorization;
                    toAmino(message: _165.TransferAuthorization): _165.TransferAuthorizationAmino;
                    fromAminoMsg(object: _165.TransferAuthorizationAminoMsg): _165.TransferAuthorization;
                    toAminoMsg(message: _165.TransferAuthorization): _165.TransferAuthorizationAminoMsg;
                    fromProtoMsg(message: _165.TransferAuthorizationProtoMsg): _165.TransferAuthorization;
                    toProto(message: _165.TransferAuthorization): Uint8Array;
                    toProtoMsg(message: _165.TransferAuthorization): _165.TransferAuthorizationProtoMsg;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    typeUrl: string;
                    encode(message: _170.FungibleTokenPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.FungibleTokenPacketData;
                    fromPartial(object: Partial<_170.FungibleTokenPacketData>): _170.FungibleTokenPacketData;
                    fromAmino(object: _170.FungibleTokenPacketDataAmino): _170.FungibleTokenPacketData;
                    toAmino(message: _170.FungibleTokenPacketData): _170.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _170.FungibleTokenPacketDataAminoMsg): _170.FungibleTokenPacketData;
                    toAminoMsg(message: _170.FungibleTokenPacketData): _170.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _170.FungibleTokenPacketDataProtoMsg): _170.FungibleTokenPacketData;
                    toProto(message: _170.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _170.FungibleTokenPacketData): _170.FungibleTokenPacketDataProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _377.MsgClientImpl;
                QueryClientImpl: typeof _370.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _173.QueryChannelRequest): Promise<_173.QueryChannelResponse>;
                    channels(request?: _173.QueryChannelsRequest): Promise<_173.QueryChannelsResponse>;
                    connectionChannels(request: _173.QueryConnectionChannelsRequest): Promise<_173.QueryConnectionChannelsResponse>;
                    channelClientState(request: _173.QueryChannelClientStateRequest): Promise<_173.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _173.QueryChannelConsensusStateRequest): Promise<_173.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _173.QueryPacketCommitmentRequest): Promise<_173.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _173.QueryPacketCommitmentsRequest): Promise<_173.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _173.QueryPacketReceiptRequest): Promise<_173.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _173.QueryPacketAcknowledgementRequest): Promise<_173.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _173.QueryPacketAcknowledgementsRequest): Promise<_173.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _173.QueryUnreceivedPacketsRequest): Promise<_173.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _173.QueryUnreceivedAcksRequest): Promise<_173.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _173.QueryNextSequenceReceiveRequest): Promise<_173.QueryNextSequenceReceiveResponse>;
                };
                registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _174.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _174.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _174.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _174.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _174.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _174.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _174.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _174.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _174.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _174.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _174.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _174.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _174.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _174.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _174.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _174.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _174.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _174.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _174.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _174.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _174.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _174.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _174.MsgRecvPacket): {
                            typeUrl: string;
                            value: _174.MsgRecvPacket;
                        };
                        timeout(value: _174.MsgTimeout): {
                            typeUrl: string;
                            value: _174.MsgTimeout;
                        };
                        timeoutOnClose(value: _174.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _174.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _174.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _174.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _174.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _174.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _174.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _174.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _174.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _174.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _174.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _174.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _174.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _174.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _174.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _174.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _174.MsgRecvPacket): {
                            typeUrl: string;
                            value: _174.MsgRecvPacket;
                        };
                        timeout(value: _174.MsgTimeout): {
                            typeUrl: string;
                            value: _174.MsgTimeout;
                        };
                        timeoutOnClose(value: _174.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _174.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _174.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _174.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _174.MsgChannelOpenInit) => _174.MsgChannelOpenInitAmino;
                        fromAmino: (object: _174.MsgChannelOpenInitAmino) => _174.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _174.MsgChannelOpenTry) => _174.MsgChannelOpenTryAmino;
                        fromAmino: (object: _174.MsgChannelOpenTryAmino) => _174.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _174.MsgChannelOpenAck) => _174.MsgChannelOpenAckAmino;
                        fromAmino: (object: _174.MsgChannelOpenAckAmino) => _174.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _174.MsgChannelOpenConfirm) => _174.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _174.MsgChannelOpenConfirmAmino) => _174.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _174.MsgChannelCloseInit) => _174.MsgChannelCloseInitAmino;
                        fromAmino: (object: _174.MsgChannelCloseInitAmino) => _174.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _174.MsgChannelCloseConfirm) => _174.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _174.MsgChannelCloseConfirmAmino) => _174.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _174.MsgRecvPacket) => _174.MsgRecvPacketAmino;
                        fromAmino: (object: _174.MsgRecvPacketAmino) => _174.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _174.MsgTimeout) => _174.MsgTimeoutAmino;
                        fromAmino: (object: _174.MsgTimeoutAmino) => _174.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _174.MsgTimeoutOnClose) => _174.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _174.MsgTimeoutOnCloseAmino) => _174.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _174.MsgAcknowledgement) => _174.MsgAcknowledgementAmino;
                        fromAmino: (object: _174.MsgAcknowledgementAmino) => _174.MsgAcknowledgement;
                    };
                };
                responseResultTypeFromJSON(object: any): _174.ResponseResultType;
                responseResultTypeToJSON(object: _174.ResponseResultType): string;
                ResponseResultType: typeof _174.ResponseResultType;
                ResponseResultTypeSDKType: typeof _174.ResponseResultType;
                ResponseResultTypeAmino: typeof _174.ResponseResultType;
                MsgChannelOpenInit: {
                    typeUrl: string;
                    encode(message: _174.MsgChannelOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.MsgChannelOpenInit;
                    fromPartial(object: Partial<_174.MsgChannelOpenInit>): _174.MsgChannelOpenInit;
                    fromAmino(object: _174.MsgChannelOpenInitAmino): _174.MsgChannelOpenInit;
                    toAmino(message: _174.MsgChannelOpenInit): _174.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _174.MsgChannelOpenInitAminoMsg): _174.MsgChannelOpenInit;
                    toAminoMsg(message: _174.MsgChannelOpenInit): _174.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _174.MsgChannelOpenInitProtoMsg): _174.MsgChannelOpenInit;
                    toProto(message: _174.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _174.MsgChannelOpenInit): _174.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    typeUrl: string;
                    encode(message: _174.MsgChannelOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.MsgChannelOpenInitResponse;
                    fromPartial(object: Partial<_174.MsgChannelOpenInitResponse>): _174.MsgChannelOpenInitResponse;
                    fromAmino(object: _174.MsgChannelOpenInitResponseAmino): _174.MsgChannelOpenInitResponse;
                    toAmino(message: _174.MsgChannelOpenInitResponse): _174.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _174.MsgChannelOpenInitResponseAminoMsg): _174.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _174.MsgChannelOpenInitResponse): _174.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _174.MsgChannelOpenInitResponseProtoMsg): _174.MsgChannelOpenInitResponse;
                    toProto(message: _174.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _174.MsgChannelOpenInitResponse): _174.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    typeUrl: string;
                    encode(message: _174.MsgChannelOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.MsgChannelOpenTry;
                    fromPartial(object: Partial<_174.MsgChannelOpenTry>): _174.MsgChannelOpenTry;
                    fromAmino(object: _174.MsgChannelOpenTryAmino): _174.MsgChannelOpenTry;
                    toAmino(message: _174.MsgChannelOpenTry): _174.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _174.MsgChannelOpenTryAminoMsg): _174.MsgChannelOpenTry;
                    toAminoMsg(message: _174.MsgChannelOpenTry): _174.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _174.MsgChannelOpenTryProtoMsg): _174.MsgChannelOpenTry;
                    toProto(message: _174.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _174.MsgChannelOpenTry): _174.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    typeUrl: string;
                    encode(message: _174.MsgChannelOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.MsgChannelOpenTryResponse;
                    fromPartial(object: Partial<_174.MsgChannelOpenTryResponse>): _174.MsgChannelOpenTryResponse;
                    fromAmino(object: _174.MsgChannelOpenTryResponseAmino): _174.MsgChannelOpenTryResponse;
                    toAmino(message: _174.MsgChannelOpenTryResponse): _174.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _174.MsgChannelOpenTryResponseAminoMsg): _174.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _174.MsgChannelOpenTryResponse): _174.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _174.MsgChannelOpenTryResponseProtoMsg): _174.MsgChannelOpenTryResponse;
                    toProto(message: _174.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _174.MsgChannelOpenTryResponse): _174.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    typeUrl: string;
                    encode(message: _174.MsgChannelOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.MsgChannelOpenAck;
                    fromPartial(object: Partial<_174.MsgChannelOpenAck>): _174.MsgChannelOpenAck;
                    fromAmino(object: _174.MsgChannelOpenAckAmino): _174.MsgChannelOpenAck;
                    toAmino(message: _174.MsgChannelOpenAck): _174.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _174.MsgChannelOpenAckAminoMsg): _174.MsgChannelOpenAck;
                    toAminoMsg(message: _174.MsgChannelOpenAck): _174.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _174.MsgChannelOpenAckProtoMsg): _174.MsgChannelOpenAck;
                    toProto(message: _174.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _174.MsgChannelOpenAck): _174.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _174.MsgChannelOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.MsgChannelOpenAckResponse;
                    fromPartial(_: Partial<_174.MsgChannelOpenAckResponse>): _174.MsgChannelOpenAckResponse;
                    fromAmino(_: _174.MsgChannelOpenAckResponseAmino): _174.MsgChannelOpenAckResponse;
                    toAmino(_: _174.MsgChannelOpenAckResponse): _174.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _174.MsgChannelOpenAckResponseAminoMsg): _174.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _174.MsgChannelOpenAckResponse): _174.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _174.MsgChannelOpenAckResponseProtoMsg): _174.MsgChannelOpenAckResponse;
                    toProto(message: _174.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _174.MsgChannelOpenAckResponse): _174.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    typeUrl: string;
                    encode(message: _174.MsgChannelOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.MsgChannelOpenConfirm;
                    fromPartial(object: Partial<_174.MsgChannelOpenConfirm>): _174.MsgChannelOpenConfirm;
                    fromAmino(object: _174.MsgChannelOpenConfirmAmino): _174.MsgChannelOpenConfirm;
                    toAmino(message: _174.MsgChannelOpenConfirm): _174.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _174.MsgChannelOpenConfirmAminoMsg): _174.MsgChannelOpenConfirm;
                    toAminoMsg(message: _174.MsgChannelOpenConfirm): _174.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _174.MsgChannelOpenConfirmProtoMsg): _174.MsgChannelOpenConfirm;
                    toProto(message: _174.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _174.MsgChannelOpenConfirm): _174.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _174.MsgChannelOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.MsgChannelOpenConfirmResponse;
                    fromPartial(_: Partial<_174.MsgChannelOpenConfirmResponse>): _174.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _174.MsgChannelOpenConfirmResponseAmino): _174.MsgChannelOpenConfirmResponse;
                    toAmino(_: _174.MsgChannelOpenConfirmResponse): _174.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _174.MsgChannelOpenConfirmResponseAminoMsg): _174.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _174.MsgChannelOpenConfirmResponse): _174.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _174.MsgChannelOpenConfirmResponseProtoMsg): _174.MsgChannelOpenConfirmResponse;
                    toProto(message: _174.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _174.MsgChannelOpenConfirmResponse): _174.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    typeUrl: string;
                    encode(message: _174.MsgChannelCloseInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.MsgChannelCloseInit;
                    fromPartial(object: Partial<_174.MsgChannelCloseInit>): _174.MsgChannelCloseInit;
                    fromAmino(object: _174.MsgChannelCloseInitAmino): _174.MsgChannelCloseInit;
                    toAmino(message: _174.MsgChannelCloseInit): _174.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _174.MsgChannelCloseInitAminoMsg): _174.MsgChannelCloseInit;
                    toAminoMsg(message: _174.MsgChannelCloseInit): _174.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _174.MsgChannelCloseInitProtoMsg): _174.MsgChannelCloseInit;
                    toProto(message: _174.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _174.MsgChannelCloseInit): _174.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    typeUrl: string;
                    encode(_: _174.MsgChannelCloseInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.MsgChannelCloseInitResponse;
                    fromPartial(_: Partial<_174.MsgChannelCloseInitResponse>): _174.MsgChannelCloseInitResponse;
                    fromAmino(_: _174.MsgChannelCloseInitResponseAmino): _174.MsgChannelCloseInitResponse;
                    toAmino(_: _174.MsgChannelCloseInitResponse): _174.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _174.MsgChannelCloseInitResponseAminoMsg): _174.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _174.MsgChannelCloseInitResponse): _174.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _174.MsgChannelCloseInitResponseProtoMsg): _174.MsgChannelCloseInitResponse;
                    toProto(message: _174.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _174.MsgChannelCloseInitResponse): _174.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    typeUrl: string;
                    encode(message: _174.MsgChannelCloseConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.MsgChannelCloseConfirm;
                    fromPartial(object: Partial<_174.MsgChannelCloseConfirm>): _174.MsgChannelCloseConfirm;
                    fromAmino(object: _174.MsgChannelCloseConfirmAmino): _174.MsgChannelCloseConfirm;
                    toAmino(message: _174.MsgChannelCloseConfirm): _174.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _174.MsgChannelCloseConfirmAminoMsg): _174.MsgChannelCloseConfirm;
                    toAminoMsg(message: _174.MsgChannelCloseConfirm): _174.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _174.MsgChannelCloseConfirmProtoMsg): _174.MsgChannelCloseConfirm;
                    toProto(message: _174.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _174.MsgChannelCloseConfirm): _174.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    typeUrl: string;
                    encode(_: _174.MsgChannelCloseConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.MsgChannelCloseConfirmResponse;
                    fromPartial(_: Partial<_174.MsgChannelCloseConfirmResponse>): _174.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _174.MsgChannelCloseConfirmResponseAmino): _174.MsgChannelCloseConfirmResponse;
                    toAmino(_: _174.MsgChannelCloseConfirmResponse): _174.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _174.MsgChannelCloseConfirmResponseAminoMsg): _174.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _174.MsgChannelCloseConfirmResponse): _174.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _174.MsgChannelCloseConfirmResponseProtoMsg): _174.MsgChannelCloseConfirmResponse;
                    toProto(message: _174.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _174.MsgChannelCloseConfirmResponse): _174.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    typeUrl: string;
                    encode(message: _174.MsgRecvPacket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.MsgRecvPacket;
                    fromPartial(object: Partial<_174.MsgRecvPacket>): _174.MsgRecvPacket;
                    fromAmino(object: _174.MsgRecvPacketAmino): _174.MsgRecvPacket;
                    toAmino(message: _174.MsgRecvPacket): _174.MsgRecvPacketAmino;
                    fromAminoMsg(object: _174.MsgRecvPacketAminoMsg): _174.MsgRecvPacket;
                    toAminoMsg(message: _174.MsgRecvPacket): _174.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _174.MsgRecvPacketProtoMsg): _174.MsgRecvPacket;
                    toProto(message: _174.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _174.MsgRecvPacket): _174.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    typeUrl: string;
                    encode(message: _174.MsgRecvPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.MsgRecvPacketResponse;
                    fromPartial(object: Partial<_174.MsgRecvPacketResponse>): _174.MsgRecvPacketResponse;
                    fromAmino(object: _174.MsgRecvPacketResponseAmino): _174.MsgRecvPacketResponse;
                    toAmino(message: _174.MsgRecvPacketResponse): _174.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _174.MsgRecvPacketResponseAminoMsg): _174.MsgRecvPacketResponse;
                    toAminoMsg(message: _174.MsgRecvPacketResponse): _174.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _174.MsgRecvPacketResponseProtoMsg): _174.MsgRecvPacketResponse;
                    toProto(message: _174.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _174.MsgRecvPacketResponse): _174.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    typeUrl: string;
                    encode(message: _174.MsgTimeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.MsgTimeout;
                    fromPartial(object: Partial<_174.MsgTimeout>): _174.MsgTimeout;
                    fromAmino(object: _174.MsgTimeoutAmino): _174.MsgTimeout;
                    toAmino(message: _174.MsgTimeout): _174.MsgTimeoutAmino;
                    fromAminoMsg(object: _174.MsgTimeoutAminoMsg): _174.MsgTimeout;
                    toAminoMsg(message: _174.MsgTimeout): _174.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _174.MsgTimeoutProtoMsg): _174.MsgTimeout;
                    toProto(message: _174.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _174.MsgTimeout): _174.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    typeUrl: string;
                    encode(message: _174.MsgTimeoutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.MsgTimeoutResponse;
                    fromPartial(object: Partial<_174.MsgTimeoutResponse>): _174.MsgTimeoutResponse;
                    fromAmino(object: _174.MsgTimeoutResponseAmino): _174.MsgTimeoutResponse;
                    toAmino(message: _174.MsgTimeoutResponse): _174.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _174.MsgTimeoutResponseAminoMsg): _174.MsgTimeoutResponse;
                    toAminoMsg(message: _174.MsgTimeoutResponse): _174.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _174.MsgTimeoutResponseProtoMsg): _174.MsgTimeoutResponse;
                    toProto(message: _174.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _174.MsgTimeoutResponse): _174.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    typeUrl: string;
                    encode(message: _174.MsgTimeoutOnClose, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.MsgTimeoutOnClose;
                    fromPartial(object: Partial<_174.MsgTimeoutOnClose>): _174.MsgTimeoutOnClose;
                    fromAmino(object: _174.MsgTimeoutOnCloseAmino): _174.MsgTimeoutOnClose;
                    toAmino(message: _174.MsgTimeoutOnClose): _174.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _174.MsgTimeoutOnCloseAminoMsg): _174.MsgTimeoutOnClose;
                    toAminoMsg(message: _174.MsgTimeoutOnClose): _174.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _174.MsgTimeoutOnCloseProtoMsg): _174.MsgTimeoutOnClose;
                    toProto(message: _174.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _174.MsgTimeoutOnClose): _174.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    typeUrl: string;
                    encode(message: _174.MsgTimeoutOnCloseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.MsgTimeoutOnCloseResponse;
                    fromPartial(object: Partial<_174.MsgTimeoutOnCloseResponse>): _174.MsgTimeoutOnCloseResponse;
                    fromAmino(object: _174.MsgTimeoutOnCloseResponseAmino): _174.MsgTimeoutOnCloseResponse;
                    toAmino(message: _174.MsgTimeoutOnCloseResponse): _174.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _174.MsgTimeoutOnCloseResponseAminoMsg): _174.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _174.MsgTimeoutOnCloseResponse): _174.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _174.MsgTimeoutOnCloseResponseProtoMsg): _174.MsgTimeoutOnCloseResponse;
                    toProto(message: _174.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _174.MsgTimeoutOnCloseResponse): _174.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    typeUrl: string;
                    encode(message: _174.MsgAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.MsgAcknowledgement;
                    fromPartial(object: Partial<_174.MsgAcknowledgement>): _174.MsgAcknowledgement;
                    fromAmino(object: _174.MsgAcknowledgementAmino): _174.MsgAcknowledgement;
                    toAmino(message: _174.MsgAcknowledgement): _174.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _174.MsgAcknowledgementAminoMsg): _174.MsgAcknowledgement;
                    toAminoMsg(message: _174.MsgAcknowledgement): _174.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _174.MsgAcknowledgementProtoMsg): _174.MsgAcknowledgement;
                    toProto(message: _174.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _174.MsgAcknowledgement): _174.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _174.MsgAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.MsgAcknowledgementResponse;
                    fromPartial(object: Partial<_174.MsgAcknowledgementResponse>): _174.MsgAcknowledgementResponse;
                    fromAmino(object: _174.MsgAcknowledgementResponseAmino): _174.MsgAcknowledgementResponse;
                    toAmino(message: _174.MsgAcknowledgementResponse): _174.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _174.MsgAcknowledgementResponseAminoMsg): _174.MsgAcknowledgementResponse;
                    toAminoMsg(message: _174.MsgAcknowledgementResponse): _174.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _174.MsgAcknowledgementResponseProtoMsg): _174.MsgAcknowledgementResponse;
                    toProto(message: _174.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _174.MsgAcknowledgementResponse): _174.MsgAcknowledgementResponseProtoMsg;
                };
                QueryChannelRequest: {
                    typeUrl: string;
                    encode(message: _173.QueryChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryChannelRequest;
                    fromPartial(object: Partial<_173.QueryChannelRequest>): _173.QueryChannelRequest;
                    fromAmino(object: _173.QueryChannelRequestAmino): _173.QueryChannelRequest;
                    toAmino(message: _173.QueryChannelRequest): _173.QueryChannelRequestAmino;
                    fromAminoMsg(object: _173.QueryChannelRequestAminoMsg): _173.QueryChannelRequest;
                    toAminoMsg(message: _173.QueryChannelRequest): _173.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _173.QueryChannelRequestProtoMsg): _173.QueryChannelRequest;
                    toProto(message: _173.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _173.QueryChannelRequest): _173.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    typeUrl: string;
                    encode(message: _173.QueryChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryChannelResponse;
                    fromPartial(object: Partial<_173.QueryChannelResponse>): _173.QueryChannelResponse;
                    fromAmino(object: _173.QueryChannelResponseAmino): _173.QueryChannelResponse;
                    toAmino(message: _173.QueryChannelResponse): _173.QueryChannelResponseAmino;
                    fromAminoMsg(object: _173.QueryChannelResponseAminoMsg): _173.QueryChannelResponse;
                    toAminoMsg(message: _173.QueryChannelResponse): _173.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _173.QueryChannelResponseProtoMsg): _173.QueryChannelResponse;
                    toProto(message: _173.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _173.QueryChannelResponse): _173.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    typeUrl: string;
                    encode(message: _173.QueryChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryChannelsRequest;
                    fromPartial(object: Partial<_173.QueryChannelsRequest>): _173.QueryChannelsRequest;
                    fromAmino(object: _173.QueryChannelsRequestAmino): _173.QueryChannelsRequest;
                    toAmino(message: _173.QueryChannelsRequest): _173.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _173.QueryChannelsRequestAminoMsg): _173.QueryChannelsRequest;
                    toAminoMsg(message: _173.QueryChannelsRequest): _173.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _173.QueryChannelsRequestProtoMsg): _173.QueryChannelsRequest;
                    toProto(message: _173.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _173.QueryChannelsRequest): _173.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    typeUrl: string;
                    encode(message: _173.QueryChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryChannelsResponse;
                    fromPartial(object: Partial<_173.QueryChannelsResponse>): _173.QueryChannelsResponse;
                    fromAmino(object: _173.QueryChannelsResponseAmino): _173.QueryChannelsResponse;
                    toAmino(message: _173.QueryChannelsResponse): _173.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _173.QueryChannelsResponseAminoMsg): _173.QueryChannelsResponse;
                    toAminoMsg(message: _173.QueryChannelsResponse): _173.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _173.QueryChannelsResponseProtoMsg): _173.QueryChannelsResponse;
                    toProto(message: _173.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _173.QueryChannelsResponse): _173.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    typeUrl: string;
                    encode(message: _173.QueryConnectionChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryConnectionChannelsRequest;
                    fromPartial(object: Partial<_173.QueryConnectionChannelsRequest>): _173.QueryConnectionChannelsRequest;
                    fromAmino(object: _173.QueryConnectionChannelsRequestAmino): _173.QueryConnectionChannelsRequest;
                    toAmino(message: _173.QueryConnectionChannelsRequest): _173.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _173.QueryConnectionChannelsRequestAminoMsg): _173.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _173.QueryConnectionChannelsRequest): _173.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _173.QueryConnectionChannelsRequestProtoMsg): _173.QueryConnectionChannelsRequest;
                    toProto(message: _173.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _173.QueryConnectionChannelsRequest): _173.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    typeUrl: string;
                    encode(message: _173.QueryConnectionChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryConnectionChannelsResponse;
                    fromPartial(object: Partial<_173.QueryConnectionChannelsResponse>): _173.QueryConnectionChannelsResponse;
                    fromAmino(object: _173.QueryConnectionChannelsResponseAmino): _173.QueryConnectionChannelsResponse;
                    toAmino(message: _173.QueryConnectionChannelsResponse): _173.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _173.QueryConnectionChannelsResponseAminoMsg): _173.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _173.QueryConnectionChannelsResponse): _173.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _173.QueryConnectionChannelsResponseProtoMsg): _173.QueryConnectionChannelsResponse;
                    toProto(message: _173.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _173.QueryConnectionChannelsResponse): _173.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    typeUrl: string;
                    encode(message: _173.QueryChannelClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryChannelClientStateRequest;
                    fromPartial(object: Partial<_173.QueryChannelClientStateRequest>): _173.QueryChannelClientStateRequest;
                    fromAmino(object: _173.QueryChannelClientStateRequestAmino): _173.QueryChannelClientStateRequest;
                    toAmino(message: _173.QueryChannelClientStateRequest): _173.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _173.QueryChannelClientStateRequestAminoMsg): _173.QueryChannelClientStateRequest;
                    toAminoMsg(message: _173.QueryChannelClientStateRequest): _173.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _173.QueryChannelClientStateRequestProtoMsg): _173.QueryChannelClientStateRequest;
                    toProto(message: _173.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _173.QueryChannelClientStateRequest): _173.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    typeUrl: string;
                    encode(message: _173.QueryChannelClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryChannelClientStateResponse;
                    fromPartial(object: Partial<_173.QueryChannelClientStateResponse>): _173.QueryChannelClientStateResponse;
                    fromAmino(object: _173.QueryChannelClientStateResponseAmino): _173.QueryChannelClientStateResponse;
                    toAmino(message: _173.QueryChannelClientStateResponse): _173.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _173.QueryChannelClientStateResponseAminoMsg): _173.QueryChannelClientStateResponse;
                    toAminoMsg(message: _173.QueryChannelClientStateResponse): _173.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _173.QueryChannelClientStateResponseProtoMsg): _173.QueryChannelClientStateResponse;
                    toProto(message: _173.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _173.QueryChannelClientStateResponse): _173.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _173.QueryChannelConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryChannelConsensusStateRequest;
                    fromPartial(object: Partial<_173.QueryChannelConsensusStateRequest>): _173.QueryChannelConsensusStateRequest;
                    fromAmino(object: _173.QueryChannelConsensusStateRequestAmino): _173.QueryChannelConsensusStateRequest;
                    toAmino(message: _173.QueryChannelConsensusStateRequest): _173.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _173.QueryChannelConsensusStateRequestAminoMsg): _173.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _173.QueryChannelConsensusStateRequest): _173.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _173.QueryChannelConsensusStateRequestProtoMsg): _173.QueryChannelConsensusStateRequest;
                    toProto(message: _173.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _173.QueryChannelConsensusStateRequest): _173.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _173.QueryChannelConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryChannelConsensusStateResponse;
                    fromPartial(object: Partial<_173.QueryChannelConsensusStateResponse>): _173.QueryChannelConsensusStateResponse;
                    fromAmino(object: _173.QueryChannelConsensusStateResponseAmino): _173.QueryChannelConsensusStateResponse;
                    toAmino(message: _173.QueryChannelConsensusStateResponse): _173.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _173.QueryChannelConsensusStateResponseAminoMsg): _173.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _173.QueryChannelConsensusStateResponse): _173.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _173.QueryChannelConsensusStateResponseProtoMsg): _173.QueryChannelConsensusStateResponse;
                    toProto(message: _173.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _173.QueryChannelConsensusStateResponse): _173.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    typeUrl: string;
                    encode(message: _173.QueryPacketCommitmentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryPacketCommitmentRequest;
                    fromPartial(object: Partial<_173.QueryPacketCommitmentRequest>): _173.QueryPacketCommitmentRequest;
                    fromAmino(object: _173.QueryPacketCommitmentRequestAmino): _173.QueryPacketCommitmentRequest;
                    toAmino(message: _173.QueryPacketCommitmentRequest): _173.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _173.QueryPacketCommitmentRequestAminoMsg): _173.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _173.QueryPacketCommitmentRequest): _173.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _173.QueryPacketCommitmentRequestProtoMsg): _173.QueryPacketCommitmentRequest;
                    toProto(message: _173.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _173.QueryPacketCommitmentRequest): _173.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    typeUrl: string;
                    encode(message: _173.QueryPacketCommitmentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryPacketCommitmentResponse;
                    fromPartial(object: Partial<_173.QueryPacketCommitmentResponse>): _173.QueryPacketCommitmentResponse;
                    fromAmino(object: _173.QueryPacketCommitmentResponseAmino): _173.QueryPacketCommitmentResponse;
                    toAmino(message: _173.QueryPacketCommitmentResponse): _173.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _173.QueryPacketCommitmentResponseAminoMsg): _173.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _173.QueryPacketCommitmentResponse): _173.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _173.QueryPacketCommitmentResponseProtoMsg): _173.QueryPacketCommitmentResponse;
                    toProto(message: _173.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _173.QueryPacketCommitmentResponse): _173.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    typeUrl: string;
                    encode(message: _173.QueryPacketCommitmentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryPacketCommitmentsRequest;
                    fromPartial(object: Partial<_173.QueryPacketCommitmentsRequest>): _173.QueryPacketCommitmentsRequest;
                    fromAmino(object: _173.QueryPacketCommitmentsRequestAmino): _173.QueryPacketCommitmentsRequest;
                    toAmino(message: _173.QueryPacketCommitmentsRequest): _173.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _173.QueryPacketCommitmentsRequestAminoMsg): _173.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _173.QueryPacketCommitmentsRequest): _173.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _173.QueryPacketCommitmentsRequestProtoMsg): _173.QueryPacketCommitmentsRequest;
                    toProto(message: _173.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _173.QueryPacketCommitmentsRequest): _173.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    typeUrl: string;
                    encode(message: _173.QueryPacketCommitmentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryPacketCommitmentsResponse;
                    fromPartial(object: Partial<_173.QueryPacketCommitmentsResponse>): _173.QueryPacketCommitmentsResponse;
                    fromAmino(object: _173.QueryPacketCommitmentsResponseAmino): _173.QueryPacketCommitmentsResponse;
                    toAmino(message: _173.QueryPacketCommitmentsResponse): _173.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _173.QueryPacketCommitmentsResponseAminoMsg): _173.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _173.QueryPacketCommitmentsResponse): _173.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _173.QueryPacketCommitmentsResponseProtoMsg): _173.QueryPacketCommitmentsResponse;
                    toProto(message: _173.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _173.QueryPacketCommitmentsResponse): _173.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    typeUrl: string;
                    encode(message: _173.QueryPacketReceiptRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryPacketReceiptRequest;
                    fromPartial(object: Partial<_173.QueryPacketReceiptRequest>): _173.QueryPacketReceiptRequest;
                    fromAmino(object: _173.QueryPacketReceiptRequestAmino): _173.QueryPacketReceiptRequest;
                    toAmino(message: _173.QueryPacketReceiptRequest): _173.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _173.QueryPacketReceiptRequestAminoMsg): _173.QueryPacketReceiptRequest;
                    toAminoMsg(message: _173.QueryPacketReceiptRequest): _173.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _173.QueryPacketReceiptRequestProtoMsg): _173.QueryPacketReceiptRequest;
                    toProto(message: _173.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _173.QueryPacketReceiptRequest): _173.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    typeUrl: string;
                    encode(message: _173.QueryPacketReceiptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryPacketReceiptResponse;
                    fromPartial(object: Partial<_173.QueryPacketReceiptResponse>): _173.QueryPacketReceiptResponse;
                    fromAmino(object: _173.QueryPacketReceiptResponseAmino): _173.QueryPacketReceiptResponse;
                    toAmino(message: _173.QueryPacketReceiptResponse): _173.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _173.QueryPacketReceiptResponseAminoMsg): _173.QueryPacketReceiptResponse;
                    toAminoMsg(message: _173.QueryPacketReceiptResponse): _173.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _173.QueryPacketReceiptResponseProtoMsg): _173.QueryPacketReceiptResponse;
                    toProto(message: _173.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _173.QueryPacketReceiptResponse): _173.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    typeUrl: string;
                    encode(message: _173.QueryPacketAcknowledgementRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryPacketAcknowledgementRequest;
                    fromPartial(object: Partial<_173.QueryPacketAcknowledgementRequest>): _173.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _173.QueryPacketAcknowledgementRequestAmino): _173.QueryPacketAcknowledgementRequest;
                    toAmino(message: _173.QueryPacketAcknowledgementRequest): _173.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _173.QueryPacketAcknowledgementRequestAminoMsg): _173.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _173.QueryPacketAcknowledgementRequest): _173.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _173.QueryPacketAcknowledgementRequestProtoMsg): _173.QueryPacketAcknowledgementRequest;
                    toProto(message: _173.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _173.QueryPacketAcknowledgementRequest): _173.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _173.QueryPacketAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryPacketAcknowledgementResponse;
                    fromPartial(object: Partial<_173.QueryPacketAcknowledgementResponse>): _173.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _173.QueryPacketAcknowledgementResponseAmino): _173.QueryPacketAcknowledgementResponse;
                    toAmino(message: _173.QueryPacketAcknowledgementResponse): _173.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _173.QueryPacketAcknowledgementResponseAminoMsg): _173.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _173.QueryPacketAcknowledgementResponse): _173.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _173.QueryPacketAcknowledgementResponseProtoMsg): _173.QueryPacketAcknowledgementResponse;
                    toProto(message: _173.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _173.QueryPacketAcknowledgementResponse): _173.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    typeUrl: string;
                    encode(message: _173.QueryPacketAcknowledgementsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: Partial<_173.QueryPacketAcknowledgementsRequest>): _173.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _173.QueryPacketAcknowledgementsRequestAmino): _173.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _173.QueryPacketAcknowledgementsRequest): _173.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _173.QueryPacketAcknowledgementsRequestAminoMsg): _173.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _173.QueryPacketAcknowledgementsRequest): _173.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _173.QueryPacketAcknowledgementsRequestProtoMsg): _173.QueryPacketAcknowledgementsRequest;
                    toProto(message: _173.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _173.QueryPacketAcknowledgementsRequest): _173.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    typeUrl: string;
                    encode(message: _173.QueryPacketAcknowledgementsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: Partial<_173.QueryPacketAcknowledgementsResponse>): _173.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _173.QueryPacketAcknowledgementsResponseAmino): _173.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _173.QueryPacketAcknowledgementsResponse): _173.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _173.QueryPacketAcknowledgementsResponseAminoMsg): _173.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _173.QueryPacketAcknowledgementsResponse): _173.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _173.QueryPacketAcknowledgementsResponseProtoMsg): _173.QueryPacketAcknowledgementsResponse;
                    toProto(message: _173.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _173.QueryPacketAcknowledgementsResponse): _173.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _173.QueryUnreceivedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryUnreceivedPacketsRequest;
                    fromPartial(object: Partial<_173.QueryUnreceivedPacketsRequest>): _173.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _173.QueryUnreceivedPacketsRequestAmino): _173.QueryUnreceivedPacketsRequest;
                    toAmino(message: _173.QueryUnreceivedPacketsRequest): _173.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _173.QueryUnreceivedPacketsRequestAminoMsg): _173.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _173.QueryUnreceivedPacketsRequest): _173.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _173.QueryUnreceivedPacketsRequestProtoMsg): _173.QueryUnreceivedPacketsRequest;
                    toProto(message: _173.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _173.QueryUnreceivedPacketsRequest): _173.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _173.QueryUnreceivedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryUnreceivedPacketsResponse;
                    fromPartial(object: Partial<_173.QueryUnreceivedPacketsResponse>): _173.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _173.QueryUnreceivedPacketsResponseAmino): _173.QueryUnreceivedPacketsResponse;
                    toAmino(message: _173.QueryUnreceivedPacketsResponse): _173.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _173.QueryUnreceivedPacketsResponseAminoMsg): _173.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _173.QueryUnreceivedPacketsResponse): _173.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _173.QueryUnreceivedPacketsResponseProtoMsg): _173.QueryUnreceivedPacketsResponse;
                    toProto(message: _173.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _173.QueryUnreceivedPacketsResponse): _173.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    typeUrl: string;
                    encode(message: _173.QueryUnreceivedAcksRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryUnreceivedAcksRequest;
                    fromPartial(object: Partial<_173.QueryUnreceivedAcksRequest>): _173.QueryUnreceivedAcksRequest;
                    fromAmino(object: _173.QueryUnreceivedAcksRequestAmino): _173.QueryUnreceivedAcksRequest;
                    toAmino(message: _173.QueryUnreceivedAcksRequest): _173.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _173.QueryUnreceivedAcksRequestAminoMsg): _173.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _173.QueryUnreceivedAcksRequest): _173.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _173.QueryUnreceivedAcksRequestProtoMsg): _173.QueryUnreceivedAcksRequest;
                    toProto(message: _173.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _173.QueryUnreceivedAcksRequest): _173.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    typeUrl: string;
                    encode(message: _173.QueryUnreceivedAcksResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryUnreceivedAcksResponse;
                    fromPartial(object: Partial<_173.QueryUnreceivedAcksResponse>): _173.QueryUnreceivedAcksResponse;
                    fromAmino(object: _173.QueryUnreceivedAcksResponseAmino): _173.QueryUnreceivedAcksResponse;
                    toAmino(message: _173.QueryUnreceivedAcksResponse): _173.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _173.QueryUnreceivedAcksResponseAminoMsg): _173.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _173.QueryUnreceivedAcksResponse): _173.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _173.QueryUnreceivedAcksResponseProtoMsg): _173.QueryUnreceivedAcksResponse;
                    toProto(message: _173.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _173.QueryUnreceivedAcksResponse): _173.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    typeUrl: string;
                    encode(message: _173.QueryNextSequenceReceiveRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryNextSequenceReceiveRequest;
                    fromPartial(object: Partial<_173.QueryNextSequenceReceiveRequest>): _173.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _173.QueryNextSequenceReceiveRequestAmino): _173.QueryNextSequenceReceiveRequest;
                    toAmino(message: _173.QueryNextSequenceReceiveRequest): _173.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _173.QueryNextSequenceReceiveRequestAminoMsg): _173.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _173.QueryNextSequenceReceiveRequest): _173.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _173.QueryNextSequenceReceiveRequestProtoMsg): _173.QueryNextSequenceReceiveRequest;
                    toProto(message: _173.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _173.QueryNextSequenceReceiveRequest): _173.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    typeUrl: string;
                    encode(message: _173.QueryNextSequenceReceiveResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.QueryNextSequenceReceiveResponse;
                    fromPartial(object: Partial<_173.QueryNextSequenceReceiveResponse>): _173.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _173.QueryNextSequenceReceiveResponseAmino): _173.QueryNextSequenceReceiveResponse;
                    toAmino(message: _173.QueryNextSequenceReceiveResponse): _173.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _173.QueryNextSequenceReceiveResponseAminoMsg): _173.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _173.QueryNextSequenceReceiveResponse): _173.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _173.QueryNextSequenceReceiveResponseProtoMsg): _173.QueryNextSequenceReceiveResponse;
                    toProto(message: _173.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _173.QueryNextSequenceReceiveResponse): _173.QueryNextSequenceReceiveResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _172.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.GenesisState;
                    fromPartial(object: Partial<_172.GenesisState>): _172.GenesisState;
                    fromAmino(object: _172.GenesisStateAmino): _172.GenesisState;
                    toAmino(message: _172.GenesisState): _172.GenesisStateAmino;
                    fromAminoMsg(object: _172.GenesisStateAminoMsg): _172.GenesisState;
                    toAminoMsg(message: _172.GenesisState): _172.GenesisStateAminoMsg;
                    fromProtoMsg(message: _172.GenesisStateProtoMsg): _172.GenesisState;
                    toProto(message: _172.GenesisState): Uint8Array;
                    toProtoMsg(message: _172.GenesisState): _172.GenesisStateProtoMsg;
                };
                PacketSequence: {
                    typeUrl: string;
                    encode(message: _172.PacketSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.PacketSequence;
                    fromPartial(object: Partial<_172.PacketSequence>): _172.PacketSequence;
                    fromAmino(object: _172.PacketSequenceAmino): _172.PacketSequence;
                    toAmino(message: _172.PacketSequence): _172.PacketSequenceAmino;
                    fromAminoMsg(object: _172.PacketSequenceAminoMsg): _172.PacketSequence;
                    toAminoMsg(message: _172.PacketSequence): _172.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _172.PacketSequenceProtoMsg): _172.PacketSequence;
                    toProto(message: _172.PacketSequence): Uint8Array;
                    toProtoMsg(message: _172.PacketSequence): _172.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _171.State;
                stateToJSON(object: _171.State): string;
                orderFromJSON(object: any): _171.Order;
                orderToJSON(object: _171.Order): string;
                State: typeof _171.State;
                StateSDKType: typeof _171.State;
                StateAmino: typeof _171.State;
                Order: typeof _171.Order;
                OrderSDKType: typeof _171.Order;
                OrderAmino: typeof _171.Order;
                Channel: {
                    typeUrl: string;
                    encode(message: _171.Channel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.Channel;
                    fromPartial(object: Partial<_171.Channel>): _171.Channel;
                    fromAmino(object: _171.ChannelAmino): _171.Channel;
                    toAmino(message: _171.Channel): _171.ChannelAmino;
                    fromAminoMsg(object: _171.ChannelAminoMsg): _171.Channel;
                    toAminoMsg(message: _171.Channel): _171.ChannelAminoMsg;
                    fromProtoMsg(message: _171.ChannelProtoMsg): _171.Channel;
                    toProto(message: _171.Channel): Uint8Array;
                    toProtoMsg(message: _171.Channel): _171.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    encode(message: _171.IdentifiedChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.IdentifiedChannel;
                    fromPartial(object: Partial<_171.IdentifiedChannel>): _171.IdentifiedChannel;
                    fromAmino(object: _171.IdentifiedChannelAmino): _171.IdentifiedChannel;
                    toAmino(message: _171.IdentifiedChannel): _171.IdentifiedChannelAmino;
                    fromAminoMsg(object: _171.IdentifiedChannelAminoMsg): _171.IdentifiedChannel;
                    toAminoMsg(message: _171.IdentifiedChannel): _171.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _171.IdentifiedChannelProtoMsg): _171.IdentifiedChannel;
                    toProto(message: _171.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _171.IdentifiedChannel): _171.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _171.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.Counterparty;
                    fromPartial(object: Partial<_171.Counterparty>): _171.Counterparty;
                    fromAmino(object: _171.CounterpartyAmino): _171.Counterparty;
                    toAmino(message: _171.Counterparty): _171.CounterpartyAmino;
                    fromAminoMsg(object: _171.CounterpartyAminoMsg): _171.Counterparty;
                    toAminoMsg(message: _171.Counterparty): _171.CounterpartyAminoMsg;
                    fromProtoMsg(message: _171.CounterpartyProtoMsg): _171.Counterparty;
                    toProto(message: _171.Counterparty): Uint8Array;
                    toProtoMsg(message: _171.Counterparty): _171.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    encode(message: _171.Packet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.Packet;
                    fromPartial(object: Partial<_171.Packet>): _171.Packet;
                    fromAmino(object: _171.PacketAmino): _171.Packet;
                    toAmino(message: _171.Packet): _171.PacketAmino;
                    fromAminoMsg(object: _171.PacketAminoMsg): _171.Packet;
                    toAminoMsg(message: _171.Packet): _171.PacketAminoMsg;
                    fromProtoMsg(message: _171.PacketProtoMsg): _171.Packet;
                    toProto(message: _171.Packet): Uint8Array;
                    toProtoMsg(message: _171.Packet): _171.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    encode(message: _171.PacketState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.PacketState;
                    fromPartial(object: Partial<_171.PacketState>): _171.PacketState;
                    fromAmino(object: _171.PacketStateAmino): _171.PacketState;
                    toAmino(message: _171.PacketState): _171.PacketStateAmino;
                    fromAminoMsg(object: _171.PacketStateAminoMsg): _171.PacketState;
                    toAminoMsg(message: _171.PacketState): _171.PacketStateAminoMsg;
                    fromProtoMsg(message: _171.PacketStateProtoMsg): _171.PacketState;
                    toProto(message: _171.PacketState): Uint8Array;
                    toProtoMsg(message: _171.PacketState): _171.PacketStateProtoMsg;
                };
                PacketId: {
                    typeUrl: string;
                    encode(message: _171.PacketId, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.PacketId;
                    fromPartial(object: Partial<_171.PacketId>): _171.PacketId;
                    fromAmino(object: _171.PacketIdAmino): _171.PacketId;
                    toAmino(message: _171.PacketId): _171.PacketIdAmino;
                    fromAminoMsg(object: _171.PacketIdAminoMsg): _171.PacketId;
                    toAminoMsg(message: _171.PacketId): _171.PacketIdAminoMsg;
                    fromProtoMsg(message: _171.PacketIdProtoMsg): _171.PacketId;
                    toProto(message: _171.PacketId): Uint8Array;
                    toProtoMsg(message: _171.PacketId): _171.PacketIdProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    encode(message: _171.Acknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.Acknowledgement;
                    fromPartial(object: Partial<_171.Acknowledgement>): _171.Acknowledgement;
                    fromAmino(object: _171.AcknowledgementAmino): _171.Acknowledgement;
                    toAmino(message: _171.Acknowledgement): _171.AcknowledgementAmino;
                    fromAminoMsg(object: _171.AcknowledgementAminoMsg): _171.Acknowledgement;
                    toAminoMsg(message: _171.Acknowledgement): _171.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _171.AcknowledgementProtoMsg): _171.Acknowledgement;
                    toProto(message: _171.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _171.Acknowledgement): _171.AcknowledgementProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _378.MsgClientImpl;
                QueryClientImpl: typeof _371.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _177.QueryClientStateRequest): Promise<_177.QueryClientStateResponse>;
                    clientStates(request?: _177.QueryClientStatesRequest): Promise<_177.QueryClientStatesResponse>;
                    consensusState(request: _177.QueryConsensusStateRequest): Promise<_177.QueryConsensusStateResponse>;
                    consensusStates(request: _177.QueryConsensusStatesRequest): Promise<_177.QueryConsensusStatesResponse>;
                    consensusStateHeights(request: _177.QueryConsensusStateHeightsRequest): Promise<_177.QueryConsensusStateHeightsResponse>;
                    clientStatus(request: _177.QueryClientStatusRequest): Promise<_177.QueryClientStatusResponse>;
                    clientParams(request?: _177.QueryClientParamsRequest): Promise<_177.QueryClientParamsResponse>;
                    upgradedClientState(request?: _177.QueryUpgradedClientStateRequest): Promise<_177.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _177.QueryUpgradedConsensusStateRequest): Promise<_177.QueryUpgradedConsensusStateResponse>;
                };
                registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _178.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _178.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _178.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _178.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _178.MsgCreateClient): {
                            typeUrl: string;
                            value: _178.MsgCreateClient;
                        };
                        updateClient(value: _178.MsgUpdateClient): {
                            typeUrl: string;
                            value: _178.MsgUpdateClient;
                        };
                        upgradeClient(value: _178.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _178.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _178.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _178.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _178.MsgCreateClient): {
                            typeUrl: string;
                            value: _178.MsgCreateClient;
                        };
                        updateClient(value: _178.MsgUpdateClient): {
                            typeUrl: string;
                            value: _178.MsgUpdateClient;
                        };
                        upgradeClient(value: _178.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _178.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _178.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _178.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _178.MsgCreateClient) => _178.MsgCreateClientAmino;
                        fromAmino: (object: _178.MsgCreateClientAmino) => _178.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _178.MsgUpdateClient) => _178.MsgUpdateClientAmino;
                        fromAmino: (object: _178.MsgUpdateClientAmino) => _178.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _178.MsgUpgradeClient) => _178.MsgUpgradeClientAmino;
                        fromAmino: (object: _178.MsgUpgradeClientAmino) => _178.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _178.MsgSubmitMisbehaviour) => _178.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _178.MsgSubmitMisbehaviourAmino) => _178.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    typeUrl: string;
                    encode(message: _178.MsgCreateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.MsgCreateClient;
                    fromPartial(object: Partial<_178.MsgCreateClient>): _178.MsgCreateClient;
                    fromAmino(object: _178.MsgCreateClientAmino): _178.MsgCreateClient;
                    toAmino(message: _178.MsgCreateClient): _178.MsgCreateClientAmino;
                    fromAminoMsg(object: _178.MsgCreateClientAminoMsg): _178.MsgCreateClient;
                    toAminoMsg(message: _178.MsgCreateClient): _178.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _178.MsgCreateClientProtoMsg): _178.MsgCreateClient;
                    toProto(message: _178.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _178.MsgCreateClient): _178.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    typeUrl: string;
                    encode(_: _178.MsgCreateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.MsgCreateClientResponse;
                    fromPartial(_: Partial<_178.MsgCreateClientResponse>): _178.MsgCreateClientResponse;
                    fromAmino(_: _178.MsgCreateClientResponseAmino): _178.MsgCreateClientResponse;
                    toAmino(_: _178.MsgCreateClientResponse): _178.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _178.MsgCreateClientResponseAminoMsg): _178.MsgCreateClientResponse;
                    toAminoMsg(message: _178.MsgCreateClientResponse): _178.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _178.MsgCreateClientResponseProtoMsg): _178.MsgCreateClientResponse;
                    toProto(message: _178.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _178.MsgCreateClientResponse): _178.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    typeUrl: string;
                    encode(message: _178.MsgUpdateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.MsgUpdateClient;
                    fromPartial(object: Partial<_178.MsgUpdateClient>): _178.MsgUpdateClient;
                    fromAmino(object: _178.MsgUpdateClientAmino): _178.MsgUpdateClient;
                    toAmino(message: _178.MsgUpdateClient): _178.MsgUpdateClientAmino;
                    fromAminoMsg(object: _178.MsgUpdateClientAminoMsg): _178.MsgUpdateClient;
                    toAminoMsg(message: _178.MsgUpdateClient): _178.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _178.MsgUpdateClientProtoMsg): _178.MsgUpdateClient;
                    toProto(message: _178.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _178.MsgUpdateClient): _178.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    typeUrl: string;
                    encode(_: _178.MsgUpdateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.MsgUpdateClientResponse;
                    fromPartial(_: Partial<_178.MsgUpdateClientResponse>): _178.MsgUpdateClientResponse;
                    fromAmino(_: _178.MsgUpdateClientResponseAmino): _178.MsgUpdateClientResponse;
                    toAmino(_: _178.MsgUpdateClientResponse): _178.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _178.MsgUpdateClientResponseAminoMsg): _178.MsgUpdateClientResponse;
                    toAminoMsg(message: _178.MsgUpdateClientResponse): _178.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _178.MsgUpdateClientResponseProtoMsg): _178.MsgUpdateClientResponse;
                    toProto(message: _178.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _178.MsgUpdateClientResponse): _178.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    typeUrl: string;
                    encode(message: _178.MsgUpgradeClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.MsgUpgradeClient;
                    fromPartial(object: Partial<_178.MsgUpgradeClient>): _178.MsgUpgradeClient;
                    fromAmino(object: _178.MsgUpgradeClientAmino): _178.MsgUpgradeClient;
                    toAmino(message: _178.MsgUpgradeClient): _178.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _178.MsgUpgradeClientAminoMsg): _178.MsgUpgradeClient;
                    toAminoMsg(message: _178.MsgUpgradeClient): _178.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _178.MsgUpgradeClientProtoMsg): _178.MsgUpgradeClient;
                    toProto(message: _178.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _178.MsgUpgradeClient): _178.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    typeUrl: string;
                    encode(_: _178.MsgUpgradeClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.MsgUpgradeClientResponse;
                    fromPartial(_: Partial<_178.MsgUpgradeClientResponse>): _178.MsgUpgradeClientResponse;
                    fromAmino(_: _178.MsgUpgradeClientResponseAmino): _178.MsgUpgradeClientResponse;
                    toAmino(_: _178.MsgUpgradeClientResponse): _178.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _178.MsgUpgradeClientResponseAminoMsg): _178.MsgUpgradeClientResponse;
                    toAminoMsg(message: _178.MsgUpgradeClientResponse): _178.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _178.MsgUpgradeClientResponseProtoMsg): _178.MsgUpgradeClientResponse;
                    toProto(message: _178.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _178.MsgUpgradeClientResponse): _178.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    typeUrl: string;
                    encode(message: _178.MsgSubmitMisbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.MsgSubmitMisbehaviour;
                    fromPartial(object: Partial<_178.MsgSubmitMisbehaviour>): _178.MsgSubmitMisbehaviour;
                    fromAmino(object: _178.MsgSubmitMisbehaviourAmino): _178.MsgSubmitMisbehaviour;
                    toAmino(message: _178.MsgSubmitMisbehaviour): _178.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _178.MsgSubmitMisbehaviourAminoMsg): _178.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _178.MsgSubmitMisbehaviour): _178.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _178.MsgSubmitMisbehaviourProtoMsg): _178.MsgSubmitMisbehaviour;
                    toProto(message: _178.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _178.MsgSubmitMisbehaviour): _178.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    typeUrl: string;
                    encode(_: _178.MsgSubmitMisbehaviourResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: Partial<_178.MsgSubmitMisbehaviourResponse>): _178.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _178.MsgSubmitMisbehaviourResponseAmino): _178.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _178.MsgSubmitMisbehaviourResponse): _178.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _178.MsgSubmitMisbehaviourResponseAminoMsg): _178.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _178.MsgSubmitMisbehaviourResponse): _178.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _178.MsgSubmitMisbehaviourResponseProtoMsg): _178.MsgSubmitMisbehaviourResponse;
                    toProto(message: _178.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _178.MsgSubmitMisbehaviourResponse): _178.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    typeUrl: string;
                    encode(message: _177.QueryClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.QueryClientStateRequest;
                    fromPartial(object: Partial<_177.QueryClientStateRequest>): _177.QueryClientStateRequest;
                    fromAmino(object: _177.QueryClientStateRequestAmino): _177.QueryClientStateRequest;
                    toAmino(message: _177.QueryClientStateRequest): _177.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _177.QueryClientStateRequestAminoMsg): _177.QueryClientStateRequest;
                    toAminoMsg(message: _177.QueryClientStateRequest): _177.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _177.QueryClientStateRequestProtoMsg): _177.QueryClientStateRequest;
                    toProto(message: _177.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _177.QueryClientStateRequest): _177.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    typeUrl: string;
                    encode(message: _177.QueryClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.QueryClientStateResponse;
                    fromPartial(object: Partial<_177.QueryClientStateResponse>): _177.QueryClientStateResponse;
                    fromAmino(object: _177.QueryClientStateResponseAmino): _177.QueryClientStateResponse;
                    toAmino(message: _177.QueryClientStateResponse): _177.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _177.QueryClientStateResponseAminoMsg): _177.QueryClientStateResponse;
                    toAminoMsg(message: _177.QueryClientStateResponse): _177.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _177.QueryClientStateResponseProtoMsg): _177.QueryClientStateResponse;
                    toProto(message: _177.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _177.QueryClientStateResponse): _177.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    typeUrl: string;
                    encode(message: _177.QueryClientStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.QueryClientStatesRequest;
                    fromPartial(object: Partial<_177.QueryClientStatesRequest>): _177.QueryClientStatesRequest;
                    fromAmino(object: _177.QueryClientStatesRequestAmino): _177.QueryClientStatesRequest;
                    toAmino(message: _177.QueryClientStatesRequest): _177.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _177.QueryClientStatesRequestAminoMsg): _177.QueryClientStatesRequest;
                    toAminoMsg(message: _177.QueryClientStatesRequest): _177.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _177.QueryClientStatesRequestProtoMsg): _177.QueryClientStatesRequest;
                    toProto(message: _177.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _177.QueryClientStatesRequest): _177.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    typeUrl: string;
                    encode(message: _177.QueryClientStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.QueryClientStatesResponse;
                    fromPartial(object: Partial<_177.QueryClientStatesResponse>): _177.QueryClientStatesResponse;
                    fromAmino(object: _177.QueryClientStatesResponseAmino): _177.QueryClientStatesResponse;
                    toAmino(message: _177.QueryClientStatesResponse): _177.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _177.QueryClientStatesResponseAminoMsg): _177.QueryClientStatesResponse;
                    toAminoMsg(message: _177.QueryClientStatesResponse): _177.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _177.QueryClientStatesResponseProtoMsg): _177.QueryClientStatesResponse;
                    toProto(message: _177.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _177.QueryClientStatesResponse): _177.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _177.QueryConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.QueryConsensusStateRequest;
                    fromPartial(object: Partial<_177.QueryConsensusStateRequest>): _177.QueryConsensusStateRequest;
                    fromAmino(object: _177.QueryConsensusStateRequestAmino): _177.QueryConsensusStateRequest;
                    toAmino(message: _177.QueryConsensusStateRequest): _177.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _177.QueryConsensusStateRequestAminoMsg): _177.QueryConsensusStateRequest;
                    toAminoMsg(message: _177.QueryConsensusStateRequest): _177.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _177.QueryConsensusStateRequestProtoMsg): _177.QueryConsensusStateRequest;
                    toProto(message: _177.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _177.QueryConsensusStateRequest): _177.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _177.QueryConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.QueryConsensusStateResponse;
                    fromPartial(object: Partial<_177.QueryConsensusStateResponse>): _177.QueryConsensusStateResponse;
                    fromAmino(object: _177.QueryConsensusStateResponseAmino): _177.QueryConsensusStateResponse;
                    toAmino(message: _177.QueryConsensusStateResponse): _177.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _177.QueryConsensusStateResponseAminoMsg): _177.QueryConsensusStateResponse;
                    toAminoMsg(message: _177.QueryConsensusStateResponse): _177.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _177.QueryConsensusStateResponseProtoMsg): _177.QueryConsensusStateResponse;
                    toProto(message: _177.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _177.QueryConsensusStateResponse): _177.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    typeUrl: string;
                    encode(message: _177.QueryConsensusStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.QueryConsensusStatesRequest;
                    fromPartial(object: Partial<_177.QueryConsensusStatesRequest>): _177.QueryConsensusStatesRequest;
                    fromAmino(object: _177.QueryConsensusStatesRequestAmino): _177.QueryConsensusStatesRequest;
                    toAmino(message: _177.QueryConsensusStatesRequest): _177.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _177.QueryConsensusStatesRequestAminoMsg): _177.QueryConsensusStatesRequest;
                    toAminoMsg(message: _177.QueryConsensusStatesRequest): _177.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _177.QueryConsensusStatesRequestProtoMsg): _177.QueryConsensusStatesRequest;
                    toProto(message: _177.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _177.QueryConsensusStatesRequest): _177.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    typeUrl: string;
                    encode(message: _177.QueryConsensusStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.QueryConsensusStatesResponse;
                    fromPartial(object: Partial<_177.QueryConsensusStatesResponse>): _177.QueryConsensusStatesResponse;
                    fromAmino(object: _177.QueryConsensusStatesResponseAmino): _177.QueryConsensusStatesResponse;
                    toAmino(message: _177.QueryConsensusStatesResponse): _177.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _177.QueryConsensusStatesResponseAminoMsg): _177.QueryConsensusStatesResponse;
                    toAminoMsg(message: _177.QueryConsensusStatesResponse): _177.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _177.QueryConsensusStatesResponseProtoMsg): _177.QueryConsensusStatesResponse;
                    toProto(message: _177.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _177.QueryConsensusStatesResponse): _177.QueryConsensusStatesResponseProtoMsg;
                };
                QueryConsensusStateHeightsRequest: {
                    typeUrl: string;
                    encode(message: _177.QueryConsensusStateHeightsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.QueryConsensusStateHeightsRequest;
                    fromPartial(object: Partial<_177.QueryConsensusStateHeightsRequest>): _177.QueryConsensusStateHeightsRequest;
                    fromAmino(object: _177.QueryConsensusStateHeightsRequestAmino): _177.QueryConsensusStateHeightsRequest;
                    toAmino(message: _177.QueryConsensusStateHeightsRequest): _177.QueryConsensusStateHeightsRequestAmino;
                    fromAminoMsg(object: _177.QueryConsensusStateHeightsRequestAminoMsg): _177.QueryConsensusStateHeightsRequest;
                    toAminoMsg(message: _177.QueryConsensusStateHeightsRequest): _177.QueryConsensusStateHeightsRequestAminoMsg;
                    fromProtoMsg(message: _177.QueryConsensusStateHeightsRequestProtoMsg): _177.QueryConsensusStateHeightsRequest;
                    toProto(message: _177.QueryConsensusStateHeightsRequest): Uint8Array;
                    toProtoMsg(message: _177.QueryConsensusStateHeightsRequest): _177.QueryConsensusStateHeightsRequestProtoMsg;
                };
                QueryConsensusStateHeightsResponse: {
                    typeUrl: string;
                    encode(message: _177.QueryConsensusStateHeightsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.QueryConsensusStateHeightsResponse;
                    fromPartial(object: Partial<_177.QueryConsensusStateHeightsResponse>): _177.QueryConsensusStateHeightsResponse;
                    fromAmino(object: _177.QueryConsensusStateHeightsResponseAmino): _177.QueryConsensusStateHeightsResponse;
                    toAmino(message: _177.QueryConsensusStateHeightsResponse): _177.QueryConsensusStateHeightsResponseAmino;
                    fromAminoMsg(object: _177.QueryConsensusStateHeightsResponseAminoMsg): _177.QueryConsensusStateHeightsResponse;
                    toAminoMsg(message: _177.QueryConsensusStateHeightsResponse): _177.QueryConsensusStateHeightsResponseAminoMsg;
                    fromProtoMsg(message: _177.QueryConsensusStateHeightsResponseProtoMsg): _177.QueryConsensusStateHeightsResponse;
                    toProto(message: _177.QueryConsensusStateHeightsResponse): Uint8Array;
                    toProtoMsg(message: _177.QueryConsensusStateHeightsResponse): _177.QueryConsensusStateHeightsResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    typeUrl: string;
                    encode(message: _177.QueryClientStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.QueryClientStatusRequest;
                    fromPartial(object: Partial<_177.QueryClientStatusRequest>): _177.QueryClientStatusRequest;
                    fromAmino(object: _177.QueryClientStatusRequestAmino): _177.QueryClientStatusRequest;
                    toAmino(message: _177.QueryClientStatusRequest): _177.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _177.QueryClientStatusRequestAminoMsg): _177.QueryClientStatusRequest;
                    toAminoMsg(message: _177.QueryClientStatusRequest): _177.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _177.QueryClientStatusRequestProtoMsg): _177.QueryClientStatusRequest;
                    toProto(message: _177.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _177.QueryClientStatusRequest): _177.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    typeUrl: string;
                    encode(message: _177.QueryClientStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.QueryClientStatusResponse;
                    fromPartial(object: Partial<_177.QueryClientStatusResponse>): _177.QueryClientStatusResponse;
                    fromAmino(object: _177.QueryClientStatusResponseAmino): _177.QueryClientStatusResponse;
                    toAmino(message: _177.QueryClientStatusResponse): _177.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _177.QueryClientStatusResponseAminoMsg): _177.QueryClientStatusResponse;
                    toAminoMsg(message: _177.QueryClientStatusResponse): _177.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _177.QueryClientStatusResponseProtoMsg): _177.QueryClientStatusResponse;
                    toProto(message: _177.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _177.QueryClientStatusResponse): _177.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    typeUrl: string;
                    encode(_: _177.QueryClientParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.QueryClientParamsRequest;
                    fromPartial(_: Partial<_177.QueryClientParamsRequest>): _177.QueryClientParamsRequest;
                    fromAmino(_: _177.QueryClientParamsRequestAmino): _177.QueryClientParamsRequest;
                    toAmino(_: _177.QueryClientParamsRequest): _177.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _177.QueryClientParamsRequestAminoMsg): _177.QueryClientParamsRequest;
                    toAminoMsg(message: _177.QueryClientParamsRequest): _177.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _177.QueryClientParamsRequestProtoMsg): _177.QueryClientParamsRequest;
                    toProto(message: _177.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _177.QueryClientParamsRequest): _177.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    typeUrl: string;
                    encode(message: _177.QueryClientParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.QueryClientParamsResponse;
                    fromPartial(object: Partial<_177.QueryClientParamsResponse>): _177.QueryClientParamsResponse;
                    fromAmino(object: _177.QueryClientParamsResponseAmino): _177.QueryClientParamsResponse;
                    toAmino(message: _177.QueryClientParamsResponse): _177.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _177.QueryClientParamsResponseAminoMsg): _177.QueryClientParamsResponse;
                    toAminoMsg(message: _177.QueryClientParamsResponse): _177.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _177.QueryClientParamsResponseProtoMsg): _177.QueryClientParamsResponse;
                    toProto(message: _177.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _177.QueryClientParamsResponse): _177.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    typeUrl: string;
                    encode(_: _177.QueryUpgradedClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.QueryUpgradedClientStateRequest;
                    fromPartial(_: Partial<_177.QueryUpgradedClientStateRequest>): _177.QueryUpgradedClientStateRequest;
                    fromAmino(_: _177.QueryUpgradedClientStateRequestAmino): _177.QueryUpgradedClientStateRequest;
                    toAmino(_: _177.QueryUpgradedClientStateRequest): _177.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _177.QueryUpgradedClientStateRequestAminoMsg): _177.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _177.QueryUpgradedClientStateRequest): _177.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _177.QueryUpgradedClientStateRequestProtoMsg): _177.QueryUpgradedClientStateRequest;
                    toProto(message: _177.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _177.QueryUpgradedClientStateRequest): _177.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    typeUrl: string;
                    encode(message: _177.QueryUpgradedClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.QueryUpgradedClientStateResponse;
                    fromPartial(object: Partial<_177.QueryUpgradedClientStateResponse>): _177.QueryUpgradedClientStateResponse;
                    fromAmino(object: _177.QueryUpgradedClientStateResponseAmino): _177.QueryUpgradedClientStateResponse;
                    toAmino(message: _177.QueryUpgradedClientStateResponse): _177.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _177.QueryUpgradedClientStateResponseAminoMsg): _177.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _177.QueryUpgradedClientStateResponse): _177.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _177.QueryUpgradedClientStateResponseProtoMsg): _177.QueryUpgradedClientStateResponse;
                    toProto(message: _177.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _177.QueryUpgradedClientStateResponse): _177.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    typeUrl: string;
                    encode(_: _177.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: Partial<_177.QueryUpgradedConsensusStateRequest>): _177.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _177.QueryUpgradedConsensusStateRequestAmino): _177.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _177.QueryUpgradedConsensusStateRequest): _177.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _177.QueryUpgradedConsensusStateRequestAminoMsg): _177.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _177.QueryUpgradedConsensusStateRequest): _177.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _177.QueryUpgradedConsensusStateRequestProtoMsg): _177.QueryUpgradedConsensusStateRequest;
                    toProto(message: _177.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _177.QueryUpgradedConsensusStateRequest): _177.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _177.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: Partial<_177.QueryUpgradedConsensusStateResponse>): _177.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _177.QueryUpgradedConsensusStateResponseAmino): _177.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _177.QueryUpgradedConsensusStateResponse): _177.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _177.QueryUpgradedConsensusStateResponseAminoMsg): _177.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _177.QueryUpgradedConsensusStateResponse): _177.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _177.QueryUpgradedConsensusStateResponseProtoMsg): _177.QueryUpgradedConsensusStateResponse;
                    toProto(message: _177.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _177.QueryUpgradedConsensusStateResponse): _177.QueryUpgradedConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _176.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.GenesisState;
                    fromPartial(object: Partial<_176.GenesisState>): _176.GenesisState;
                    fromAmino(object: _176.GenesisStateAmino): _176.GenesisState;
                    toAmino(message: _176.GenesisState): _176.GenesisStateAmino;
                    fromAminoMsg(object: _176.GenesisStateAminoMsg): _176.GenesisState;
                    toAminoMsg(message: _176.GenesisState): _176.GenesisStateAminoMsg;
                    fromProtoMsg(message: _176.GenesisStateProtoMsg): _176.GenesisState;
                    toProto(message: _176.GenesisState): Uint8Array;
                    toProtoMsg(message: _176.GenesisState): _176.GenesisStateProtoMsg;
                };
                GenesisMetadata: {
                    typeUrl: string;
                    encode(message: _176.GenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.GenesisMetadata;
                    fromPartial(object: Partial<_176.GenesisMetadata>): _176.GenesisMetadata;
                    fromAmino(object: _176.GenesisMetadataAmino): _176.GenesisMetadata;
                    toAmino(message: _176.GenesisMetadata): _176.GenesisMetadataAmino;
                    fromAminoMsg(object: _176.GenesisMetadataAminoMsg): _176.GenesisMetadata;
                    toAminoMsg(message: _176.GenesisMetadata): _176.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _176.GenesisMetadataProtoMsg): _176.GenesisMetadata;
                    toProto(message: _176.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _176.GenesisMetadata): _176.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    typeUrl: string;
                    encode(message: _176.IdentifiedGenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.IdentifiedGenesisMetadata;
                    fromPartial(object: Partial<_176.IdentifiedGenesisMetadata>): _176.IdentifiedGenesisMetadata;
                    fromAmino(object: _176.IdentifiedGenesisMetadataAmino): _176.IdentifiedGenesisMetadata;
                    toAmino(message: _176.IdentifiedGenesisMetadata): _176.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _176.IdentifiedGenesisMetadataAminoMsg): _176.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _176.IdentifiedGenesisMetadata): _176.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _176.IdentifiedGenesisMetadataProtoMsg): _176.IdentifiedGenesisMetadata;
                    toProto(message: _176.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _176.IdentifiedGenesisMetadata): _176.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    typeUrl: string;
                    encode(message: _175.IdentifiedClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.IdentifiedClientState;
                    fromPartial(object: Partial<_175.IdentifiedClientState>): _175.IdentifiedClientState;
                    fromAmino(object: _175.IdentifiedClientStateAmino): _175.IdentifiedClientState;
                    toAmino(message: _175.IdentifiedClientState): _175.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _175.IdentifiedClientStateAminoMsg): _175.IdentifiedClientState;
                    toAminoMsg(message: _175.IdentifiedClientState): _175.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _175.IdentifiedClientStateProtoMsg): _175.IdentifiedClientState;
                    toProto(message: _175.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _175.IdentifiedClientState): _175.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    encode(message: _175.ConsensusStateWithHeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.ConsensusStateWithHeight;
                    fromPartial(object: Partial<_175.ConsensusStateWithHeight>): _175.ConsensusStateWithHeight;
                    fromAmino(object: _175.ConsensusStateWithHeightAmino): _175.ConsensusStateWithHeight;
                    toAmino(message: _175.ConsensusStateWithHeight): _175.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _175.ConsensusStateWithHeightAminoMsg): _175.ConsensusStateWithHeight;
                    toAminoMsg(message: _175.ConsensusStateWithHeight): _175.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _175.ConsensusStateWithHeightProtoMsg): _175.ConsensusStateWithHeight;
                    toProto(message: _175.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _175.ConsensusStateWithHeight): _175.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    encode(message: _175.ClientConsensusStates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.ClientConsensusStates;
                    fromPartial(object: Partial<_175.ClientConsensusStates>): _175.ClientConsensusStates;
                    fromAmino(object: _175.ClientConsensusStatesAmino): _175.ClientConsensusStates;
                    toAmino(message: _175.ClientConsensusStates): _175.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _175.ClientConsensusStatesAminoMsg): _175.ClientConsensusStates;
                    toAminoMsg(message: _175.ClientConsensusStates): _175.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _175.ClientConsensusStatesProtoMsg): _175.ClientConsensusStates;
                    toProto(message: _175.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _175.ClientConsensusStates): _175.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    encode(message: _175.ClientUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.ClientUpdateProposal;
                    fromPartial(object: Partial<_175.ClientUpdateProposal>): _175.ClientUpdateProposal;
                    fromAmino(object: _175.ClientUpdateProposalAmino): _175.ClientUpdateProposal;
                    toAmino(message: _175.ClientUpdateProposal): _175.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _175.ClientUpdateProposalAminoMsg): _175.ClientUpdateProposal;
                    toAminoMsg(message: _175.ClientUpdateProposal): _175.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _175.ClientUpdateProposalProtoMsg): _175.ClientUpdateProposal;
                    toProto(message: _175.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _175.ClientUpdateProposal): _175.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    encode(message: _175.UpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.UpgradeProposal;
                    fromPartial(object: Partial<_175.UpgradeProposal>): _175.UpgradeProposal;
                    fromAmino(object: _175.UpgradeProposalAmino): _175.UpgradeProposal;
                    toAmino(message: _175.UpgradeProposal): _175.UpgradeProposalAmino;
                    fromAminoMsg(object: _175.UpgradeProposalAminoMsg): _175.UpgradeProposal;
                    toAminoMsg(message: _175.UpgradeProposal): _175.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _175.UpgradeProposalProtoMsg): _175.UpgradeProposal;
                    toProto(message: _175.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _175.UpgradeProposal): _175.UpgradeProposalProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    encode(message: _175.Height, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.Height;
                    fromPartial(object: Partial<_175.Height>): _175.Height;
                    fromAmino(object: _175.HeightAmino): _175.Height;
                    toAmino(message: _175.Height): _175.HeightAmino;
                    fromAminoMsg(object: _175.HeightAminoMsg): _175.Height;
                    toAminoMsg(message: _175.Height): _175.HeightAminoMsg;
                    fromProtoMsg(message: _175.HeightProtoMsg): _175.Height;
                    toProto(message: _175.Height): Uint8Array;
                    toProtoMsg(message: _175.Height): _175.HeightProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _175.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.Params;
                    fromPartial(object: Partial<_175.Params>): _175.Params;
                    fromAmino(object: _175.ParamsAmino): _175.Params;
                    toAmino(message: _175.Params): _175.ParamsAmino;
                    fromAminoMsg(object: _175.ParamsAminoMsg): _175.Params;
                    toAminoMsg(message: _175.Params): _175.ParamsAminoMsg;
                    fromProtoMsg(message: _175.ParamsProtoMsg): _175.Params;
                    toProto(message: _175.Params): Uint8Array;
                    toProtoMsg(message: _175.Params): _175.ParamsProtoMsg;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    typeUrl: string;
                    encode(message: _179.MerkleRoot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MerkleRoot;
                    fromPartial(object: Partial<_179.MerkleRoot>): _179.MerkleRoot;
                    fromAmino(object: _179.MerkleRootAmino): _179.MerkleRoot;
                    toAmino(message: _179.MerkleRoot): _179.MerkleRootAmino;
                    fromAminoMsg(object: _179.MerkleRootAminoMsg): _179.MerkleRoot;
                    toAminoMsg(message: _179.MerkleRoot): _179.MerkleRootAminoMsg;
                    fromProtoMsg(message: _179.MerkleRootProtoMsg): _179.MerkleRoot;
                    toProto(message: _179.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _179.MerkleRoot): _179.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    typeUrl: string;
                    encode(message: _179.MerklePrefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MerklePrefix;
                    fromPartial(object: Partial<_179.MerklePrefix>): _179.MerklePrefix;
                    fromAmino(object: _179.MerklePrefixAmino): _179.MerklePrefix;
                    toAmino(message: _179.MerklePrefix): _179.MerklePrefixAmino;
                    fromAminoMsg(object: _179.MerklePrefixAminoMsg): _179.MerklePrefix;
                    toAminoMsg(message: _179.MerklePrefix): _179.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _179.MerklePrefixProtoMsg): _179.MerklePrefix;
                    toProto(message: _179.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _179.MerklePrefix): _179.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    typeUrl: string;
                    encode(message: _179.MerklePath, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MerklePath;
                    fromPartial(object: Partial<_179.MerklePath>): _179.MerklePath;
                    fromAmino(object: _179.MerklePathAmino): _179.MerklePath;
                    toAmino(message: _179.MerklePath): _179.MerklePathAmino;
                    fromAminoMsg(object: _179.MerklePathAminoMsg): _179.MerklePath;
                    toAminoMsg(message: _179.MerklePath): _179.MerklePathAminoMsg;
                    fromProtoMsg(message: _179.MerklePathProtoMsg): _179.MerklePath;
                    toProto(message: _179.MerklePath): Uint8Array;
                    toProtoMsg(message: _179.MerklePath): _179.MerklePathProtoMsg;
                };
                MerkleProof: {
                    typeUrl: string;
                    encode(message: _179.MerkleProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MerkleProof;
                    fromPartial(object: Partial<_179.MerkleProof>): _179.MerkleProof;
                    fromAmino(object: _179.MerkleProofAmino): _179.MerkleProof;
                    toAmino(message: _179.MerkleProof): _179.MerkleProofAmino;
                    fromAminoMsg(object: _179.MerkleProofAminoMsg): _179.MerkleProof;
                    toAminoMsg(message: _179.MerkleProof): _179.MerkleProofAminoMsg;
                    fromProtoMsg(message: _179.MerkleProofProtoMsg): _179.MerkleProof;
                    toProto(message: _179.MerkleProof): Uint8Array;
                    toProtoMsg(message: _179.MerkleProof): _179.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _379.MsgClientImpl;
                QueryClientImpl: typeof _372.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _182.QueryConnectionRequest): Promise<_182.QueryConnectionResponse>;
                    connections(request?: _182.QueryConnectionsRequest): Promise<_182.QueryConnectionsResponse>;
                    clientConnections(request: _182.QueryClientConnectionsRequest): Promise<_182.QueryClientConnectionsResponse>;
                    connectionClientState(request: _182.QueryConnectionClientStateRequest): Promise<_182.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _182.QueryConnectionConsensusStateRequest): Promise<_182.QueryConnectionConsensusStateResponse>;
                    connectionParams(request?: _182.QueryConnectionParamsRequest): Promise<_182.QueryConnectionParamsResponse>;
                };
                registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _183.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _183.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _183.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _183.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _183.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _183.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _183.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _183.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _183.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _183.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _183.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _183.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _183.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _183.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _183.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _183.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _183.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _183.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _183.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _183.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _183.MsgConnectionOpenInit) => _183.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _183.MsgConnectionOpenInitAmino) => _183.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _183.MsgConnectionOpenTry) => _183.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _183.MsgConnectionOpenTryAmino) => _183.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _183.MsgConnectionOpenAck) => _183.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _183.MsgConnectionOpenAckAmino) => _183.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _183.MsgConnectionOpenConfirm) => _183.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _183.MsgConnectionOpenConfirmAmino) => _183.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    typeUrl: string;
                    encode(message: _183.MsgConnectionOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgConnectionOpenInit;
                    fromPartial(object: Partial<_183.MsgConnectionOpenInit>): _183.MsgConnectionOpenInit;
                    fromAmino(object: _183.MsgConnectionOpenInitAmino): _183.MsgConnectionOpenInit;
                    toAmino(message: _183.MsgConnectionOpenInit): _183.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _183.MsgConnectionOpenInitAminoMsg): _183.MsgConnectionOpenInit;
                    toAminoMsg(message: _183.MsgConnectionOpenInit): _183.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _183.MsgConnectionOpenInitProtoMsg): _183.MsgConnectionOpenInit;
                    toProto(message: _183.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _183.MsgConnectionOpenInit): _183.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    typeUrl: string;
                    encode(_: _183.MsgConnectionOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgConnectionOpenInitResponse;
                    fromPartial(_: Partial<_183.MsgConnectionOpenInitResponse>): _183.MsgConnectionOpenInitResponse;
                    fromAmino(_: _183.MsgConnectionOpenInitResponseAmino): _183.MsgConnectionOpenInitResponse;
                    toAmino(_: _183.MsgConnectionOpenInitResponse): _183.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _183.MsgConnectionOpenInitResponseAminoMsg): _183.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _183.MsgConnectionOpenInitResponse): _183.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _183.MsgConnectionOpenInitResponseProtoMsg): _183.MsgConnectionOpenInitResponse;
                    toProto(message: _183.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _183.MsgConnectionOpenInitResponse): _183.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    typeUrl: string;
                    encode(message: _183.MsgConnectionOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgConnectionOpenTry;
                    fromPartial(object: Partial<_183.MsgConnectionOpenTry>): _183.MsgConnectionOpenTry;
                    fromAmino(object: _183.MsgConnectionOpenTryAmino): _183.MsgConnectionOpenTry;
                    toAmino(message: _183.MsgConnectionOpenTry): _183.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _183.MsgConnectionOpenTryAminoMsg): _183.MsgConnectionOpenTry;
                    toAminoMsg(message: _183.MsgConnectionOpenTry): _183.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _183.MsgConnectionOpenTryProtoMsg): _183.MsgConnectionOpenTry;
                    toProto(message: _183.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _183.MsgConnectionOpenTry): _183.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    typeUrl: string;
                    encode(_: _183.MsgConnectionOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgConnectionOpenTryResponse;
                    fromPartial(_: Partial<_183.MsgConnectionOpenTryResponse>): _183.MsgConnectionOpenTryResponse;
                    fromAmino(_: _183.MsgConnectionOpenTryResponseAmino): _183.MsgConnectionOpenTryResponse;
                    toAmino(_: _183.MsgConnectionOpenTryResponse): _183.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _183.MsgConnectionOpenTryResponseAminoMsg): _183.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _183.MsgConnectionOpenTryResponse): _183.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _183.MsgConnectionOpenTryResponseProtoMsg): _183.MsgConnectionOpenTryResponse;
                    toProto(message: _183.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _183.MsgConnectionOpenTryResponse): _183.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    typeUrl: string;
                    encode(message: _183.MsgConnectionOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgConnectionOpenAck;
                    fromPartial(object: Partial<_183.MsgConnectionOpenAck>): _183.MsgConnectionOpenAck;
                    fromAmino(object: _183.MsgConnectionOpenAckAmino): _183.MsgConnectionOpenAck;
                    toAmino(message: _183.MsgConnectionOpenAck): _183.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _183.MsgConnectionOpenAckAminoMsg): _183.MsgConnectionOpenAck;
                    toAminoMsg(message: _183.MsgConnectionOpenAck): _183.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _183.MsgConnectionOpenAckProtoMsg): _183.MsgConnectionOpenAck;
                    toProto(message: _183.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _183.MsgConnectionOpenAck): _183.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _183.MsgConnectionOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgConnectionOpenAckResponse;
                    fromPartial(_: Partial<_183.MsgConnectionOpenAckResponse>): _183.MsgConnectionOpenAckResponse;
                    fromAmino(_: _183.MsgConnectionOpenAckResponseAmino): _183.MsgConnectionOpenAckResponse;
                    toAmino(_: _183.MsgConnectionOpenAckResponse): _183.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _183.MsgConnectionOpenAckResponseAminoMsg): _183.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _183.MsgConnectionOpenAckResponse): _183.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _183.MsgConnectionOpenAckResponseProtoMsg): _183.MsgConnectionOpenAckResponse;
                    toProto(message: _183.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _183.MsgConnectionOpenAckResponse): _183.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    typeUrl: string;
                    encode(message: _183.MsgConnectionOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgConnectionOpenConfirm;
                    fromPartial(object: Partial<_183.MsgConnectionOpenConfirm>): _183.MsgConnectionOpenConfirm;
                    fromAmino(object: _183.MsgConnectionOpenConfirmAmino): _183.MsgConnectionOpenConfirm;
                    toAmino(message: _183.MsgConnectionOpenConfirm): _183.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _183.MsgConnectionOpenConfirmAminoMsg): _183.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _183.MsgConnectionOpenConfirm): _183.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _183.MsgConnectionOpenConfirmProtoMsg): _183.MsgConnectionOpenConfirm;
                    toProto(message: _183.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _183.MsgConnectionOpenConfirm): _183.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _183.MsgConnectionOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: Partial<_183.MsgConnectionOpenConfirmResponse>): _183.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _183.MsgConnectionOpenConfirmResponseAmino): _183.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _183.MsgConnectionOpenConfirmResponse): _183.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _183.MsgConnectionOpenConfirmResponseAminoMsg): _183.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _183.MsgConnectionOpenConfirmResponse): _183.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _183.MsgConnectionOpenConfirmResponseProtoMsg): _183.MsgConnectionOpenConfirmResponse;
                    toProto(message: _183.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _183.MsgConnectionOpenConfirmResponse): _183.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    typeUrl: string;
                    encode(message: _182.QueryConnectionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.QueryConnectionRequest;
                    fromPartial(object: Partial<_182.QueryConnectionRequest>): _182.QueryConnectionRequest;
                    fromAmino(object: _182.QueryConnectionRequestAmino): _182.QueryConnectionRequest;
                    toAmino(message: _182.QueryConnectionRequest): _182.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _182.QueryConnectionRequestAminoMsg): _182.QueryConnectionRequest;
                    toAminoMsg(message: _182.QueryConnectionRequest): _182.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _182.QueryConnectionRequestProtoMsg): _182.QueryConnectionRequest;
                    toProto(message: _182.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _182.QueryConnectionRequest): _182.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    typeUrl: string;
                    encode(message: _182.QueryConnectionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.QueryConnectionResponse;
                    fromPartial(object: Partial<_182.QueryConnectionResponse>): _182.QueryConnectionResponse;
                    fromAmino(object: _182.QueryConnectionResponseAmino): _182.QueryConnectionResponse;
                    toAmino(message: _182.QueryConnectionResponse): _182.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _182.QueryConnectionResponseAminoMsg): _182.QueryConnectionResponse;
                    toAminoMsg(message: _182.QueryConnectionResponse): _182.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _182.QueryConnectionResponseProtoMsg): _182.QueryConnectionResponse;
                    toProto(message: _182.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _182.QueryConnectionResponse): _182.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _182.QueryConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.QueryConnectionsRequest;
                    fromPartial(object: Partial<_182.QueryConnectionsRequest>): _182.QueryConnectionsRequest;
                    fromAmino(object: _182.QueryConnectionsRequestAmino): _182.QueryConnectionsRequest;
                    toAmino(message: _182.QueryConnectionsRequest): _182.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _182.QueryConnectionsRequestAminoMsg): _182.QueryConnectionsRequest;
                    toAminoMsg(message: _182.QueryConnectionsRequest): _182.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _182.QueryConnectionsRequestProtoMsg): _182.QueryConnectionsRequest;
                    toProto(message: _182.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _182.QueryConnectionsRequest): _182.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _182.QueryConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.QueryConnectionsResponse;
                    fromPartial(object: Partial<_182.QueryConnectionsResponse>): _182.QueryConnectionsResponse;
                    fromAmino(object: _182.QueryConnectionsResponseAmino): _182.QueryConnectionsResponse;
                    toAmino(message: _182.QueryConnectionsResponse): _182.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _182.QueryConnectionsResponseAminoMsg): _182.QueryConnectionsResponse;
                    toAminoMsg(message: _182.QueryConnectionsResponse): _182.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _182.QueryConnectionsResponseProtoMsg): _182.QueryConnectionsResponse;
                    toProto(message: _182.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _182.QueryConnectionsResponse): _182.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _182.QueryClientConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.QueryClientConnectionsRequest;
                    fromPartial(object: Partial<_182.QueryClientConnectionsRequest>): _182.QueryClientConnectionsRequest;
                    fromAmino(object: _182.QueryClientConnectionsRequestAmino): _182.QueryClientConnectionsRequest;
                    toAmino(message: _182.QueryClientConnectionsRequest): _182.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _182.QueryClientConnectionsRequestAminoMsg): _182.QueryClientConnectionsRequest;
                    toAminoMsg(message: _182.QueryClientConnectionsRequest): _182.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _182.QueryClientConnectionsRequestProtoMsg): _182.QueryClientConnectionsRequest;
                    toProto(message: _182.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _182.QueryClientConnectionsRequest): _182.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _182.QueryClientConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.QueryClientConnectionsResponse;
                    fromPartial(object: Partial<_182.QueryClientConnectionsResponse>): _182.QueryClientConnectionsResponse;
                    fromAmino(object: _182.QueryClientConnectionsResponseAmino): _182.QueryClientConnectionsResponse;
                    toAmino(message: _182.QueryClientConnectionsResponse): _182.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _182.QueryClientConnectionsResponseAminoMsg): _182.QueryClientConnectionsResponse;
                    toAminoMsg(message: _182.QueryClientConnectionsResponse): _182.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _182.QueryClientConnectionsResponseProtoMsg): _182.QueryClientConnectionsResponse;
                    toProto(message: _182.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _182.QueryClientConnectionsResponse): _182.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    typeUrl: string;
                    encode(message: _182.QueryConnectionClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.QueryConnectionClientStateRequest;
                    fromPartial(object: Partial<_182.QueryConnectionClientStateRequest>): _182.QueryConnectionClientStateRequest;
                    fromAmino(object: _182.QueryConnectionClientStateRequestAmino): _182.QueryConnectionClientStateRequest;
                    toAmino(message: _182.QueryConnectionClientStateRequest): _182.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _182.QueryConnectionClientStateRequestAminoMsg): _182.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _182.QueryConnectionClientStateRequest): _182.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _182.QueryConnectionClientStateRequestProtoMsg): _182.QueryConnectionClientStateRequest;
                    toProto(message: _182.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _182.QueryConnectionClientStateRequest): _182.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    typeUrl: string;
                    encode(message: _182.QueryConnectionClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.QueryConnectionClientStateResponse;
                    fromPartial(object: Partial<_182.QueryConnectionClientStateResponse>): _182.QueryConnectionClientStateResponse;
                    fromAmino(object: _182.QueryConnectionClientStateResponseAmino): _182.QueryConnectionClientStateResponse;
                    toAmino(message: _182.QueryConnectionClientStateResponse): _182.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _182.QueryConnectionClientStateResponseAminoMsg): _182.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _182.QueryConnectionClientStateResponse): _182.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _182.QueryConnectionClientStateResponseProtoMsg): _182.QueryConnectionClientStateResponse;
                    toProto(message: _182.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _182.QueryConnectionClientStateResponse): _182.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _182.QueryConnectionConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.QueryConnectionConsensusStateRequest;
                    fromPartial(object: Partial<_182.QueryConnectionConsensusStateRequest>): _182.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _182.QueryConnectionConsensusStateRequestAmino): _182.QueryConnectionConsensusStateRequest;
                    toAmino(message: _182.QueryConnectionConsensusStateRequest): _182.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _182.QueryConnectionConsensusStateRequestAminoMsg): _182.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _182.QueryConnectionConsensusStateRequest): _182.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _182.QueryConnectionConsensusStateRequestProtoMsg): _182.QueryConnectionConsensusStateRequest;
                    toProto(message: _182.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _182.QueryConnectionConsensusStateRequest): _182.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _182.QueryConnectionConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.QueryConnectionConsensusStateResponse;
                    fromPartial(object: Partial<_182.QueryConnectionConsensusStateResponse>): _182.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _182.QueryConnectionConsensusStateResponseAmino): _182.QueryConnectionConsensusStateResponse;
                    toAmino(message: _182.QueryConnectionConsensusStateResponse): _182.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _182.QueryConnectionConsensusStateResponseAminoMsg): _182.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _182.QueryConnectionConsensusStateResponse): _182.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _182.QueryConnectionConsensusStateResponseProtoMsg): _182.QueryConnectionConsensusStateResponse;
                    toProto(message: _182.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _182.QueryConnectionConsensusStateResponse): _182.QueryConnectionConsensusStateResponseProtoMsg;
                };
                QueryConnectionParamsRequest: {
                    typeUrl: string;
                    encode(_: _182.QueryConnectionParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.QueryConnectionParamsRequest;
                    fromPartial(_: Partial<_182.QueryConnectionParamsRequest>): _182.QueryConnectionParamsRequest;
                    fromAmino(_: _182.QueryConnectionParamsRequestAmino): _182.QueryConnectionParamsRequest;
                    toAmino(_: _182.QueryConnectionParamsRequest): _182.QueryConnectionParamsRequestAmino;
                    fromAminoMsg(object: _182.QueryConnectionParamsRequestAminoMsg): _182.QueryConnectionParamsRequest;
                    toAminoMsg(message: _182.QueryConnectionParamsRequest): _182.QueryConnectionParamsRequestAminoMsg;
                    fromProtoMsg(message: _182.QueryConnectionParamsRequestProtoMsg): _182.QueryConnectionParamsRequest;
                    toProto(message: _182.QueryConnectionParamsRequest): Uint8Array;
                    toProtoMsg(message: _182.QueryConnectionParamsRequest): _182.QueryConnectionParamsRequestProtoMsg;
                };
                QueryConnectionParamsResponse: {
                    typeUrl: string;
                    encode(message: _182.QueryConnectionParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.QueryConnectionParamsResponse;
                    fromPartial(object: Partial<_182.QueryConnectionParamsResponse>): _182.QueryConnectionParamsResponse;
                    fromAmino(object: _182.QueryConnectionParamsResponseAmino): _182.QueryConnectionParamsResponse;
                    toAmino(message: _182.QueryConnectionParamsResponse): _182.QueryConnectionParamsResponseAmino;
                    fromAminoMsg(object: _182.QueryConnectionParamsResponseAminoMsg): _182.QueryConnectionParamsResponse;
                    toAminoMsg(message: _182.QueryConnectionParamsResponse): _182.QueryConnectionParamsResponseAminoMsg;
                    fromProtoMsg(message: _182.QueryConnectionParamsResponseProtoMsg): _182.QueryConnectionParamsResponse;
                    toProto(message: _182.QueryConnectionParamsResponse): Uint8Array;
                    toProtoMsg(message: _182.QueryConnectionParamsResponse): _182.QueryConnectionParamsResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _181.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.GenesisState;
                    fromPartial(object: Partial<_181.GenesisState>): _181.GenesisState;
                    fromAmino(object: _181.GenesisStateAmino): _181.GenesisState;
                    toAmino(message: _181.GenesisState): _181.GenesisStateAmino;
                    fromAminoMsg(object: _181.GenesisStateAminoMsg): _181.GenesisState;
                    toAminoMsg(message: _181.GenesisState): _181.GenesisStateAminoMsg;
                    fromProtoMsg(message: _181.GenesisStateProtoMsg): _181.GenesisState;
                    toProto(message: _181.GenesisState): Uint8Array;
                    toProtoMsg(message: _181.GenesisState): _181.GenesisStateProtoMsg;
                };
                stateFromJSON(object: any): _180.State;
                stateToJSON(object: _180.State): string;
                State: typeof _180.State;
                StateSDKType: typeof _180.State;
                StateAmino: typeof _180.State;
                ConnectionEnd: {
                    typeUrl: string;
                    encode(message: _180.ConnectionEnd, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.ConnectionEnd;
                    fromPartial(object: Partial<_180.ConnectionEnd>): _180.ConnectionEnd;
                    fromAmino(object: _180.ConnectionEndAmino): _180.ConnectionEnd;
                    toAmino(message: _180.ConnectionEnd): _180.ConnectionEndAmino;
                    fromAminoMsg(object: _180.ConnectionEndAminoMsg): _180.ConnectionEnd;
                    toAminoMsg(message: _180.ConnectionEnd): _180.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _180.ConnectionEndProtoMsg): _180.ConnectionEnd;
                    toProto(message: _180.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _180.ConnectionEnd): _180.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    typeUrl: string;
                    encode(message: _180.IdentifiedConnection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.IdentifiedConnection;
                    fromPartial(object: Partial<_180.IdentifiedConnection>): _180.IdentifiedConnection;
                    fromAmino(object: _180.IdentifiedConnectionAmino): _180.IdentifiedConnection;
                    toAmino(message: _180.IdentifiedConnection): _180.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _180.IdentifiedConnectionAminoMsg): _180.IdentifiedConnection;
                    toAminoMsg(message: _180.IdentifiedConnection): _180.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _180.IdentifiedConnectionProtoMsg): _180.IdentifiedConnection;
                    toProto(message: _180.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _180.IdentifiedConnection): _180.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _180.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.Counterparty;
                    fromPartial(object: Partial<_180.Counterparty>): _180.Counterparty;
                    fromAmino(object: _180.CounterpartyAmino): _180.Counterparty;
                    toAmino(message: _180.Counterparty): _180.CounterpartyAmino;
                    fromAminoMsg(object: _180.CounterpartyAminoMsg): _180.Counterparty;
                    toAminoMsg(message: _180.Counterparty): _180.CounterpartyAminoMsg;
                    fromProtoMsg(message: _180.CounterpartyProtoMsg): _180.Counterparty;
                    toProto(message: _180.Counterparty): Uint8Array;
                    toProtoMsg(message: _180.Counterparty): _180.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    typeUrl: string;
                    encode(message: _180.ClientPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.ClientPaths;
                    fromPartial(object: Partial<_180.ClientPaths>): _180.ClientPaths;
                    fromAmino(object: _180.ClientPathsAmino): _180.ClientPaths;
                    toAmino(message: _180.ClientPaths): _180.ClientPathsAmino;
                    fromAminoMsg(object: _180.ClientPathsAminoMsg): _180.ClientPaths;
                    toAminoMsg(message: _180.ClientPaths): _180.ClientPathsAminoMsg;
                    fromProtoMsg(message: _180.ClientPathsProtoMsg): _180.ClientPaths;
                    toProto(message: _180.ClientPaths): Uint8Array;
                    toProtoMsg(message: _180.ClientPaths): _180.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    typeUrl: string;
                    encode(message: _180.ConnectionPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.ConnectionPaths;
                    fromPartial(object: Partial<_180.ConnectionPaths>): _180.ConnectionPaths;
                    fromAmino(object: _180.ConnectionPathsAmino): _180.ConnectionPaths;
                    toAmino(message: _180.ConnectionPaths): _180.ConnectionPathsAmino;
                    fromAminoMsg(object: _180.ConnectionPathsAminoMsg): _180.ConnectionPaths;
                    toAminoMsg(message: _180.ConnectionPaths): _180.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _180.ConnectionPathsProtoMsg): _180.ConnectionPaths;
                    toProto(message: _180.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _180.ConnectionPaths): _180.ConnectionPathsProtoMsg;
                };
                Version: {
                    typeUrl: string;
                    encode(message: _180.Version, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.Version;
                    fromPartial(object: Partial<_180.Version>): _180.Version;
                    fromAmino(object: _180.VersionAmino): _180.Version;
                    toAmino(message: _180.Version): _180.VersionAmino;
                    fromAminoMsg(object: _180.VersionAminoMsg): _180.Version;
                    toAminoMsg(message: _180.Version): _180.VersionAminoMsg;
                    fromProtoMsg(message: _180.VersionProtoMsg): _180.Version;
                    toProto(message: _180.Version): Uint8Array;
                    toProtoMsg(message: _180.Version): _180.VersionProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _180.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.Params;
                    fromPartial(object: Partial<_180.Params>): _180.Params;
                    fromAmino(object: _180.ParamsAmino): _180.Params;
                    toAmino(message: _180.Params): _180.ParamsAmino;
                    fromAminoMsg(object: _180.ParamsAminoMsg): _180.Params;
                    toAminoMsg(message: _180.Params): _180.ParamsAminoMsg;
                    fromProtoMsg(message: _180.ParamsProtoMsg): _180.Params;
                    toProto(message: _180.Params): Uint8Array;
                    toProtoMsg(message: _180.Params): _180.ParamsProtoMsg;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    typeUrl: string;
                    encode(message: _184.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _184.GenesisState;
                    fromPartial(object: Partial<_184.GenesisState>): _184.GenesisState;
                    fromAmino(object: _184.GenesisStateAmino): _184.GenesisState;
                    toAmino(message: _184.GenesisState): _184.GenesisStateAmino;
                    fromAminoMsg(object: _184.GenesisStateAminoMsg): _184.GenesisState;
                    toAminoMsg(message: _184.GenesisState): _184.GenesisStateAminoMsg;
                    fromProtoMsg(message: _184.GenesisStateProtoMsg): _184.GenesisState;
                    toProto(message: _184.GenesisState): Uint8Array;
                    toProtoMsg(message: _184.GenesisState): _184.GenesisStateProtoMsg;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v2: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _185.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.ClientState;
                    fromPartial(object: Partial<_185.ClientState>): _185.ClientState;
                    fromAmino(object: _185.ClientStateAmino): _185.ClientState;
                    toAmino(message: _185.ClientState): _185.ClientStateAmino;
                    fromAminoMsg(object: _185.ClientStateAminoMsg): _185.ClientState;
                    toAminoMsg(message: _185.ClientState): _185.ClientStateAminoMsg;
                    fromProtoMsg(message: _185.ClientStateProtoMsg): _185.ClientState;
                    toProto(message: _185.ClientState): Uint8Array;
                    toProtoMsg(message: _185.ClientState): _185.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v2: {
                dataTypeFromJSON(object: any): _186.DataType;
                dataTypeToJSON(object: _186.DataType): string;
                DataType: typeof _186.DataType;
                DataTypeSDKType: typeof _186.DataType;
                DataTypeAmino: typeof _186.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _186.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.ClientState;
                    fromPartial(object: Partial<_186.ClientState>): _186.ClientState;
                    fromAmino(object: _186.ClientStateAmino): _186.ClientState;
                    toAmino(message: _186.ClientState): _186.ClientStateAmino;
                    fromAminoMsg(object: _186.ClientStateAminoMsg): _186.ClientState;
                    toAminoMsg(message: _186.ClientState): _186.ClientStateAminoMsg;
                    fromProtoMsg(message: _186.ClientStateProtoMsg): _186.ClientState;
                    toProto(message: _186.ClientState): Uint8Array;
                    toProtoMsg(message: _186.ClientState): _186.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _186.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.ConsensusState;
                    fromPartial(object: Partial<_186.ConsensusState>): _186.ConsensusState;
                    fromAmino(object: _186.ConsensusStateAmino): _186.ConsensusState;
                    toAmino(message: _186.ConsensusState): _186.ConsensusStateAmino;
                    fromAminoMsg(object: _186.ConsensusStateAminoMsg): _186.ConsensusState;
                    toAminoMsg(message: _186.ConsensusState): _186.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _186.ConsensusStateProtoMsg): _186.ConsensusState;
                    toProto(message: _186.ConsensusState): Uint8Array;
                    toProtoMsg(message: _186.ConsensusState): _186.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _186.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.Header;
                    fromPartial(object: Partial<_186.Header>): _186.Header;
                    fromAmino(object: _186.HeaderAmino): _186.Header;
                    toAmino(message: _186.Header): _186.HeaderAmino;
                    fromAminoMsg(object: _186.HeaderAminoMsg): _186.Header;
                    toAminoMsg(message: _186.Header): _186.HeaderAminoMsg;
                    fromProtoMsg(message: _186.HeaderProtoMsg): _186.Header;
                    toProto(message: _186.Header): Uint8Array;
                    toProtoMsg(message: _186.Header): _186.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _186.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.Misbehaviour;
                    fromPartial(object: Partial<_186.Misbehaviour>): _186.Misbehaviour;
                    fromAmino(object: _186.MisbehaviourAmino): _186.Misbehaviour;
                    toAmino(message: _186.Misbehaviour): _186.MisbehaviourAmino;
                    fromAminoMsg(object: _186.MisbehaviourAminoMsg): _186.Misbehaviour;
                    toAminoMsg(message: _186.Misbehaviour): _186.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _186.MisbehaviourProtoMsg): _186.Misbehaviour;
                    toProto(message: _186.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _186.Misbehaviour): _186.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _186.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.SignatureAndData;
                    fromPartial(object: Partial<_186.SignatureAndData>): _186.SignatureAndData;
                    fromAmino(object: _186.SignatureAndDataAmino): _186.SignatureAndData;
                    toAmino(message: _186.SignatureAndData): _186.SignatureAndDataAmino;
                    fromAminoMsg(object: _186.SignatureAndDataAminoMsg): _186.SignatureAndData;
                    toAminoMsg(message: _186.SignatureAndData): _186.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _186.SignatureAndDataProtoMsg): _186.SignatureAndData;
                    toProto(message: _186.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _186.SignatureAndData): _186.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _186.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.TimestampedSignatureData;
                    fromPartial(object: Partial<_186.TimestampedSignatureData>): _186.TimestampedSignatureData;
                    fromAmino(object: _186.TimestampedSignatureDataAmino): _186.TimestampedSignatureData;
                    toAmino(message: _186.TimestampedSignatureData): _186.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _186.TimestampedSignatureDataAminoMsg): _186.TimestampedSignatureData;
                    toAminoMsg(message: _186.TimestampedSignatureData): _186.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _186.TimestampedSignatureDataProtoMsg): _186.TimestampedSignatureData;
                    toProto(message: _186.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _186.TimestampedSignatureData): _186.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _186.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.SignBytes;
                    fromPartial(object: Partial<_186.SignBytes>): _186.SignBytes;
                    fromAmino(object: _186.SignBytesAmino): _186.SignBytes;
                    toAmino(message: _186.SignBytes): _186.SignBytesAmino;
                    fromAminoMsg(object: _186.SignBytesAminoMsg): _186.SignBytes;
                    toAminoMsg(message: _186.SignBytes): _186.SignBytesAminoMsg;
                    fromProtoMsg(message: _186.SignBytesProtoMsg): _186.SignBytes;
                    toProto(message: _186.SignBytes): Uint8Array;
                    toProtoMsg(message: _186.SignBytes): _186.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _186.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.HeaderData;
                    fromPartial(object: Partial<_186.HeaderData>): _186.HeaderData;
                    fromAmino(object: _186.HeaderDataAmino): _186.HeaderData;
                    toAmino(message: _186.HeaderData): _186.HeaderDataAmino;
                    fromAminoMsg(object: _186.HeaderDataAminoMsg): _186.HeaderData;
                    toAminoMsg(message: _186.HeaderData): _186.HeaderDataAminoMsg;
                    fromProtoMsg(message: _186.HeaderDataProtoMsg): _186.HeaderData;
                    toProto(message: _186.HeaderData): Uint8Array;
                    toProtoMsg(message: _186.HeaderData): _186.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _186.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.ClientStateData;
                    fromPartial(object: Partial<_186.ClientStateData>): _186.ClientStateData;
                    fromAmino(object: _186.ClientStateDataAmino): _186.ClientStateData;
                    toAmino(message: _186.ClientStateData): _186.ClientStateDataAmino;
                    fromAminoMsg(object: _186.ClientStateDataAminoMsg): _186.ClientStateData;
                    toAminoMsg(message: _186.ClientStateData): _186.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _186.ClientStateDataProtoMsg): _186.ClientStateData;
                    toProto(message: _186.ClientStateData): Uint8Array;
                    toProtoMsg(message: _186.ClientStateData): _186.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _186.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.ConsensusStateData;
                    fromPartial(object: Partial<_186.ConsensusStateData>): _186.ConsensusStateData;
                    fromAmino(object: _186.ConsensusStateDataAmino): _186.ConsensusStateData;
                    toAmino(message: _186.ConsensusStateData): _186.ConsensusStateDataAmino;
                    fromAminoMsg(object: _186.ConsensusStateDataAminoMsg): _186.ConsensusStateData;
                    toAminoMsg(message: _186.ConsensusStateData): _186.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _186.ConsensusStateDataProtoMsg): _186.ConsensusStateData;
                    toProto(message: _186.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _186.ConsensusStateData): _186.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _186.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.ConnectionStateData;
                    fromPartial(object: Partial<_186.ConnectionStateData>): _186.ConnectionStateData;
                    fromAmino(object: _186.ConnectionStateDataAmino): _186.ConnectionStateData;
                    toAmino(message: _186.ConnectionStateData): _186.ConnectionStateDataAmino;
                    fromAminoMsg(object: _186.ConnectionStateDataAminoMsg): _186.ConnectionStateData;
                    toAminoMsg(message: _186.ConnectionStateData): _186.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _186.ConnectionStateDataProtoMsg): _186.ConnectionStateData;
                    toProto(message: _186.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _186.ConnectionStateData): _186.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _186.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.ChannelStateData;
                    fromPartial(object: Partial<_186.ChannelStateData>): _186.ChannelStateData;
                    fromAmino(object: _186.ChannelStateDataAmino): _186.ChannelStateData;
                    toAmino(message: _186.ChannelStateData): _186.ChannelStateDataAmino;
                    fromAminoMsg(object: _186.ChannelStateDataAminoMsg): _186.ChannelStateData;
                    toAminoMsg(message: _186.ChannelStateData): _186.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _186.ChannelStateDataProtoMsg): _186.ChannelStateData;
                    toProto(message: _186.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _186.ChannelStateData): _186.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _186.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.PacketCommitmentData;
                    fromPartial(object: Partial<_186.PacketCommitmentData>): _186.PacketCommitmentData;
                    fromAmino(object: _186.PacketCommitmentDataAmino): _186.PacketCommitmentData;
                    toAmino(message: _186.PacketCommitmentData): _186.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _186.PacketCommitmentDataAminoMsg): _186.PacketCommitmentData;
                    toAminoMsg(message: _186.PacketCommitmentData): _186.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _186.PacketCommitmentDataProtoMsg): _186.PacketCommitmentData;
                    toProto(message: _186.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _186.PacketCommitmentData): _186.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _186.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.PacketAcknowledgementData;
                    fromPartial(object: Partial<_186.PacketAcknowledgementData>): _186.PacketAcknowledgementData;
                    fromAmino(object: _186.PacketAcknowledgementDataAmino): _186.PacketAcknowledgementData;
                    toAmino(message: _186.PacketAcknowledgementData): _186.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _186.PacketAcknowledgementDataAminoMsg): _186.PacketAcknowledgementData;
                    toAminoMsg(message: _186.PacketAcknowledgementData): _186.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _186.PacketAcknowledgementDataProtoMsg): _186.PacketAcknowledgementData;
                    toProto(message: _186.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _186.PacketAcknowledgementData): _186.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _186.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_186.PacketReceiptAbsenceData>): _186.PacketReceiptAbsenceData;
                    fromAmino(object: _186.PacketReceiptAbsenceDataAmino): _186.PacketReceiptAbsenceData;
                    toAmino(message: _186.PacketReceiptAbsenceData): _186.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _186.PacketReceiptAbsenceDataAminoMsg): _186.PacketReceiptAbsenceData;
                    toAminoMsg(message: _186.PacketReceiptAbsenceData): _186.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _186.PacketReceiptAbsenceDataProtoMsg): _186.PacketReceiptAbsenceData;
                    toProto(message: _186.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _186.PacketReceiptAbsenceData): _186.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _186.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.NextSequenceRecvData;
                    fromPartial(object: Partial<_186.NextSequenceRecvData>): _186.NextSequenceRecvData;
                    fromAmino(object: _186.NextSequenceRecvDataAmino): _186.NextSequenceRecvData;
                    toAmino(message: _186.NextSequenceRecvData): _186.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _186.NextSequenceRecvDataAminoMsg): _186.NextSequenceRecvData;
                    toAminoMsg(message: _186.NextSequenceRecvData): _186.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _186.NextSequenceRecvDataProtoMsg): _186.NextSequenceRecvData;
                    toProto(message: _186.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _186.NextSequenceRecvData): _186.NextSequenceRecvDataProtoMsg;
                };
            };
            const v3: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _187.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.ClientState;
                    fromPartial(object: Partial<_187.ClientState>): _187.ClientState;
                    fromAmino(object: _187.ClientStateAmino): _187.ClientState;
                    toAmino(message: _187.ClientState): _187.ClientStateAmino;
                    fromAminoMsg(object: _187.ClientStateAminoMsg): _187.ClientState;
                    toAminoMsg(message: _187.ClientState): _187.ClientStateAminoMsg;
                    fromProtoMsg(message: _187.ClientStateProtoMsg): _187.ClientState;
                    toProto(message: _187.ClientState): Uint8Array;
                    toProtoMsg(message: _187.ClientState): _187.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _187.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.ConsensusState;
                    fromPartial(object: Partial<_187.ConsensusState>): _187.ConsensusState;
                    fromAmino(object: _187.ConsensusStateAmino): _187.ConsensusState;
                    toAmino(message: _187.ConsensusState): _187.ConsensusStateAmino;
                    fromAminoMsg(object: _187.ConsensusStateAminoMsg): _187.ConsensusState;
                    toAminoMsg(message: _187.ConsensusState): _187.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _187.ConsensusStateProtoMsg): _187.ConsensusState;
                    toProto(message: _187.ConsensusState): Uint8Array;
                    toProtoMsg(message: _187.ConsensusState): _187.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _187.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.Header;
                    fromPartial(object: Partial<_187.Header>): _187.Header;
                    fromAmino(object: _187.HeaderAmino): _187.Header;
                    toAmino(message: _187.Header): _187.HeaderAmino;
                    fromAminoMsg(object: _187.HeaderAminoMsg): _187.Header;
                    toAminoMsg(message: _187.Header): _187.HeaderAminoMsg;
                    fromProtoMsg(message: _187.HeaderProtoMsg): _187.Header;
                    toProto(message: _187.Header): Uint8Array;
                    toProtoMsg(message: _187.Header): _187.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _187.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.Misbehaviour;
                    fromPartial(object: Partial<_187.Misbehaviour>): _187.Misbehaviour;
                    fromAmino(object: _187.MisbehaviourAmino): _187.Misbehaviour;
                    toAmino(message: _187.Misbehaviour): _187.MisbehaviourAmino;
                    fromAminoMsg(object: _187.MisbehaviourAminoMsg): _187.Misbehaviour;
                    toAminoMsg(message: _187.Misbehaviour): _187.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _187.MisbehaviourProtoMsg): _187.Misbehaviour;
                    toProto(message: _187.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _187.Misbehaviour): _187.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _187.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.SignatureAndData;
                    fromPartial(object: Partial<_187.SignatureAndData>): _187.SignatureAndData;
                    fromAmino(object: _187.SignatureAndDataAmino): _187.SignatureAndData;
                    toAmino(message: _187.SignatureAndData): _187.SignatureAndDataAmino;
                    fromAminoMsg(object: _187.SignatureAndDataAminoMsg): _187.SignatureAndData;
                    toAminoMsg(message: _187.SignatureAndData): _187.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _187.SignatureAndDataProtoMsg): _187.SignatureAndData;
                    toProto(message: _187.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _187.SignatureAndData): _187.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _187.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.TimestampedSignatureData;
                    fromPartial(object: Partial<_187.TimestampedSignatureData>): _187.TimestampedSignatureData;
                    fromAmino(object: _187.TimestampedSignatureDataAmino): _187.TimestampedSignatureData;
                    toAmino(message: _187.TimestampedSignatureData): _187.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _187.TimestampedSignatureDataAminoMsg): _187.TimestampedSignatureData;
                    toAminoMsg(message: _187.TimestampedSignatureData): _187.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _187.TimestampedSignatureDataProtoMsg): _187.TimestampedSignatureData;
                    toProto(message: _187.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _187.TimestampedSignatureData): _187.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _187.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.SignBytes;
                    fromPartial(object: Partial<_187.SignBytes>): _187.SignBytes;
                    fromAmino(object: _187.SignBytesAmino): _187.SignBytes;
                    toAmino(message: _187.SignBytes): _187.SignBytesAmino;
                    fromAminoMsg(object: _187.SignBytesAminoMsg): _187.SignBytes;
                    toAminoMsg(message: _187.SignBytes): _187.SignBytesAminoMsg;
                    fromProtoMsg(message: _187.SignBytesProtoMsg): _187.SignBytes;
                    toProto(message: _187.SignBytes): Uint8Array;
                    toProtoMsg(message: _187.SignBytes): _187.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _187.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.HeaderData;
                    fromPartial(object: Partial<_187.HeaderData>): _187.HeaderData;
                    fromAmino(object: _187.HeaderDataAmino): _187.HeaderData;
                    toAmino(message: _187.HeaderData): _187.HeaderDataAmino;
                    fromAminoMsg(object: _187.HeaderDataAminoMsg): _187.HeaderData;
                    toAminoMsg(message: _187.HeaderData): _187.HeaderDataAminoMsg;
                    fromProtoMsg(message: _187.HeaderDataProtoMsg): _187.HeaderData;
                    toProto(message: _187.HeaderData): Uint8Array;
                    toProtoMsg(message: _187.HeaderData): _187.HeaderDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _188.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.ClientState;
                    fromPartial(object: Partial<_188.ClientState>): _188.ClientState;
                    fromAmino(object: _188.ClientStateAmino): _188.ClientState;
                    toAmino(message: _188.ClientState): _188.ClientStateAmino;
                    fromAminoMsg(object: _188.ClientStateAminoMsg): _188.ClientState;
                    toAminoMsg(message: _188.ClientState): _188.ClientStateAminoMsg;
                    fromProtoMsg(message: _188.ClientStateProtoMsg): _188.ClientState;
                    toProto(message: _188.ClientState): Uint8Array;
                    toProtoMsg(message: _188.ClientState): _188.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _188.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.ConsensusState;
                    fromPartial(object: Partial<_188.ConsensusState>): _188.ConsensusState;
                    fromAmino(object: _188.ConsensusStateAmino): _188.ConsensusState;
                    toAmino(message: _188.ConsensusState): _188.ConsensusStateAmino;
                    fromAminoMsg(object: _188.ConsensusStateAminoMsg): _188.ConsensusState;
                    toAminoMsg(message: _188.ConsensusState): _188.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _188.ConsensusStateProtoMsg): _188.ConsensusState;
                    toProto(message: _188.ConsensusState): Uint8Array;
                    toProtoMsg(message: _188.ConsensusState): _188.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _188.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.Misbehaviour;
                    fromPartial(object: Partial<_188.Misbehaviour>): _188.Misbehaviour;
                    fromAmino(object: _188.MisbehaviourAmino): _188.Misbehaviour;
                    toAmino(message: _188.Misbehaviour): _188.MisbehaviourAmino;
                    fromAminoMsg(object: _188.MisbehaviourAminoMsg): _188.Misbehaviour;
                    toAminoMsg(message: _188.Misbehaviour): _188.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _188.MisbehaviourProtoMsg): _188.Misbehaviour;
                    toProto(message: _188.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _188.Misbehaviour): _188.MisbehaviourProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _188.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.Header;
                    fromPartial(object: Partial<_188.Header>): _188.Header;
                    fromAmino(object: _188.HeaderAmino): _188.Header;
                    toAmino(message: _188.Header): _188.HeaderAmino;
                    fromAminoMsg(object: _188.HeaderAminoMsg): _188.Header;
                    toAminoMsg(message: _188.Header): _188.HeaderAminoMsg;
                    fromProtoMsg(message: _188.HeaderProtoMsg): _188.Header;
                    toProto(message: _188.Header): Uint8Array;
                    toProtoMsg(message: _188.Header): _188.HeaderProtoMsg;
                };
                Fraction: {
                    typeUrl: string;
                    encode(message: _188.Fraction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.Fraction;
                    fromPartial(object: Partial<_188.Fraction>): _188.Fraction;
                    fromAmino(object: _188.FractionAmino): _188.Fraction;
                    toAmino(message: _188.Fraction): _188.FractionAmino;
                    fromAminoMsg(object: _188.FractionAminoMsg): _188.Fraction;
                    toAminoMsg(message: _188.Fraction): _188.FractionAminoMsg;
                    fromProtoMsg(message: _188.FractionProtoMsg): _188.Fraction;
                    toProto(message: _188.Fraction): Uint8Array;
                    toProtoMsg(message: _188.Fraction): _188.FractionProtoMsg;
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
                        v1: _373.MsgClientImpl;
                    };
                    interchain_accounts: {
                        controller: {
                            v1: _374.MsgClientImpl;
                        };
                        host: {
                            v1: _375.MsgClientImpl;
                        };
                    };
                    transfer: {
                        v1: _376.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _377.MsgClientImpl;
                    };
                    client: {
                        v1: _378.MsgClientImpl;
                    };
                    connection: {
                        v1: _379.MsgClientImpl;
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
                            incentivizedPackets(request: _153.QueryIncentivizedPacketsRequest): Promise<_153.QueryIncentivizedPacketsResponse>;
                            incentivizedPacket(request: _153.QueryIncentivizedPacketRequest): Promise<_153.QueryIncentivizedPacketResponse>;
                            incentivizedPacketsForChannel(request: _153.QueryIncentivizedPacketsForChannelRequest): Promise<_153.QueryIncentivizedPacketsForChannelResponse>;
                            totalRecvFees(request: _153.QueryTotalRecvFeesRequest): Promise<_153.QueryTotalRecvFeesResponse>;
                            totalAckFees(request: _153.QueryTotalAckFeesRequest): Promise<_153.QueryTotalAckFeesResponse>;
                            totalTimeoutFees(request: _153.QueryTotalTimeoutFeesRequest): Promise<_153.QueryTotalTimeoutFeesResponse>;
                            payee(request: _153.QueryPayeeRequest): Promise<_153.QueryPayeeResponse>;
                            counterpartyPayee(request: _153.QueryCounterpartyPayeeRequest): Promise<_153.QueryCounterpartyPayeeResponse>;
                            feeEnabledChannels(request: _153.QueryFeeEnabledChannelsRequest): Promise<_153.QueryFeeEnabledChannelsResponse>;
                            feeEnabledChannel(request: _153.QueryFeeEnabledChannelRequest): Promise<_153.QueryFeeEnabledChannelResponse>;
                        };
                    };
                    interchain_accounts: {
                        controller: {
                            v1: {
                                interchainAccount(request: _156.QueryInterchainAccountRequest): Promise<_156.QueryInterchainAccountResponse>;
                                params(request?: _156.QueryParamsRequest): Promise<_156.QueryParamsResponse>;
                            };
                        };
                        host: {
                            v1: {
                                params(request?: _160.QueryParamsRequest): Promise<_160.QueryParamsResponse>;
                            };
                        };
                    };
                    transfer: {
                        v1: {
                            denomTraces(request?: _167.QueryDenomTracesRequest): Promise<_167.QueryDenomTracesResponse>;
                            denomTrace(request: _167.QueryDenomTraceRequest): Promise<_167.QueryDenomTraceResponse>;
                            params(request?: _167.QueryParamsRequest): Promise<_167.QueryParamsResponse>;
                            denomHash(request: _167.QueryDenomHashRequest): Promise<_167.QueryDenomHashResponse>;
                            escrowAddress(request: _167.QueryEscrowAddressRequest): Promise<_167.QueryEscrowAddressResponse>;
                            totalEscrowForDenom(request: _167.QueryTotalEscrowForDenomRequest): Promise<_167.QueryTotalEscrowForDenomResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _173.QueryChannelRequest): Promise<_173.QueryChannelResponse>;
                            channels(request?: _173.QueryChannelsRequest): Promise<_173.QueryChannelsResponse>;
                            connectionChannels(request: _173.QueryConnectionChannelsRequest): Promise<_173.QueryConnectionChannelsResponse>;
                            channelClientState(request: _173.QueryChannelClientStateRequest): Promise<_173.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _173.QueryChannelConsensusStateRequest): Promise<_173.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _173.QueryPacketCommitmentRequest): Promise<_173.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _173.QueryPacketCommitmentsRequest): Promise<_173.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _173.QueryPacketReceiptRequest): Promise<_173.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _173.QueryPacketAcknowledgementRequest): Promise<_173.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _173.QueryPacketAcknowledgementsRequest): Promise<_173.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _173.QueryUnreceivedPacketsRequest): Promise<_173.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _173.QueryUnreceivedAcksRequest): Promise<_173.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _173.QueryNextSequenceReceiveRequest): Promise<_173.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _177.QueryClientStateRequest): Promise<_177.QueryClientStateResponse>;
                            clientStates(request?: _177.QueryClientStatesRequest): Promise<_177.QueryClientStatesResponse>;
                            consensusState(request: _177.QueryConsensusStateRequest): Promise<_177.QueryConsensusStateResponse>;
                            consensusStates(request: _177.QueryConsensusStatesRequest): Promise<_177.QueryConsensusStatesResponse>;
                            consensusStateHeights(request: _177.QueryConsensusStateHeightsRequest): Promise<_177.QueryConsensusStateHeightsResponse>;
                            clientStatus(request: _177.QueryClientStatusRequest): Promise<_177.QueryClientStatusResponse>;
                            clientParams(request?: _177.QueryClientParamsRequest): Promise<_177.QueryClientParamsResponse>;
                            upgradedClientState(request?: _177.QueryUpgradedClientStateRequest): Promise<_177.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _177.QueryUpgradedConsensusStateRequest): Promise<_177.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _182.QueryConnectionRequest): Promise<_182.QueryConnectionResponse>;
                            connections(request?: _182.QueryConnectionsRequest): Promise<_182.QueryConnectionsResponse>;
                            clientConnections(request: _182.QueryClientConnectionsRequest): Promise<_182.QueryClientConnectionsResponse>;
                            connectionClientState(request: _182.QueryConnectionClientStateRequest): Promise<_182.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _182.QueryConnectionConsensusStateRequest): Promise<_182.QueryConnectionConsensusStateResponse>;
                            connectionParams(request?: _182.QueryConnectionParamsRequest): Promise<_182.QueryConnectionParamsResponse>;
                        };
                    };
                };
            };
        }>;
    };
}
