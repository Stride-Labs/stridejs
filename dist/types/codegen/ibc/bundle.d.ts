import * as _148 from "./applications/fee/v1/ack";
import * as _149 from "./applications/fee/v1/fee";
import * as _150 from "./applications/fee/v1/genesis";
import * as _151 from "./applications/fee/v1/metadata";
import * as _152 from "./applications/fee/v1/query";
import * as _153 from "./applications/fee/v1/tx";
import * as _154 from "./applications/interchain_accounts/controller/v1/controller";
import * as _155 from "./applications/interchain_accounts/controller/v1/query";
import * as _156 from "./applications/interchain_accounts/controller/v1/tx";
import * as _157 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _158 from "./applications/interchain_accounts/host/v1/host";
import * as _159 from "./applications/interchain_accounts/host/v1/query";
import * as _160 from "./applications/interchain_accounts/host/v1/tx";
import * as _161 from "./applications/interchain_accounts/v1/account";
import * as _162 from "./applications/interchain_accounts/v1/metadata";
import * as _163 from "./applications/interchain_accounts/v1/packet";
import * as _164 from "./applications/transfer/v1/authz";
import * as _165 from "./applications/transfer/v1/genesis";
import * as _166 from "./applications/transfer/v1/query";
import * as _167 from "./applications/transfer/v1/transfer";
import * as _168 from "./applications/transfer/v1/tx";
import * as _169 from "./applications/transfer/v2/packet";
import * as _170 from "./core/channel/v1/channel";
import * as _171 from "./core/channel/v1/genesis";
import * as _172 from "./core/channel/v1/query";
import * as _173 from "./core/channel/v1/tx";
import * as _174 from "./core/channel/v1/upgrade";
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
import * as _189 from "./lightclients/wasm/v1/genesis";
import * as _190 from "./lightclients/wasm/v1/query";
import * as _191 from "./lightclients/wasm/v1/tx";
import * as _192 from "./lightclients/wasm/v1/wasm";
import * as _370 from "./applications/fee/v1/query.rpc.Query";
import * as _371 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _372 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _373 from "./applications/transfer/v1/query.rpc.Query";
import * as _374 from "./core/channel/v1/query.rpc.Query";
import * as _375 from "./core/client/v1/query.rpc.Query";
import * as _376 from "./core/connection/v1/query.rpc.Query";
import * as _377 from "./lightclients/wasm/v1/query.rpc.Query";
import * as _378 from "./applications/fee/v1/tx.rpc.msg";
import * as _379 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _380 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _381 from "./applications/transfer/v1/tx.rpc.msg";
import * as _382 from "./core/channel/v1/tx.rpc.msg";
import * as _383 from "./core/client/v1/tx.rpc.msg";
import * as _384 from "./core/connection/v1/tx.rpc.msg";
import * as _385 from "./lightclients/wasm/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace fee {
            const v1: {
                MsgClientImpl: typeof _378.MsgClientImpl;
                QueryClientImpl: typeof _370.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    incentivizedPackets(request: _152.QueryIncentivizedPacketsRequest): Promise<_152.QueryIncentivizedPacketsResponse>;
                    incentivizedPacket(request: _152.QueryIncentivizedPacketRequest): Promise<_152.QueryIncentivizedPacketResponse>;
                    incentivizedPacketsForChannel(request: _152.QueryIncentivizedPacketsForChannelRequest): Promise<_152.QueryIncentivizedPacketsForChannelResponse>;
                    totalRecvFees(request: _152.QueryTotalRecvFeesRequest): Promise<_152.QueryTotalRecvFeesResponse>;
                    totalAckFees(request: _152.QueryTotalAckFeesRequest): Promise<_152.QueryTotalAckFeesResponse>;
                    totalTimeoutFees(request: _152.QueryTotalTimeoutFeesRequest): Promise<_152.QueryTotalTimeoutFeesResponse>;
                    payee(request: _152.QueryPayeeRequest): Promise<_152.QueryPayeeResponse>;
                    counterpartyPayee(request: _152.QueryCounterpartyPayeeRequest): Promise<_152.QueryCounterpartyPayeeResponse>;
                    feeEnabledChannels(request: _152.QueryFeeEnabledChannelsRequest): Promise<_152.QueryFeeEnabledChannelsResponse>;
                    feeEnabledChannel(request: _152.QueryFeeEnabledChannelRequest): Promise<_152.QueryFeeEnabledChannelResponse>;
                };
                registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        registerPayee(value: _153.MsgRegisterPayee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        registerCounterpartyPayee(value: _153.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        payPacketFee(value: _153.MsgPayPacketFee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        payPacketFeeAsync(value: _153.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        registerPayee(value: _153.MsgRegisterPayee): {
                            typeUrl: string;
                            value: _153.MsgRegisterPayee;
                        };
                        registerCounterpartyPayee(value: _153.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: _153.MsgRegisterCounterpartyPayee;
                        };
                        payPacketFee(value: _153.MsgPayPacketFee): {
                            typeUrl: string;
                            value: _153.MsgPayPacketFee;
                        };
                        payPacketFeeAsync(value: _153.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: _153.MsgPayPacketFeeAsync;
                        };
                    };
                    fromPartial: {
                        registerPayee(value: _153.MsgRegisterPayee): {
                            typeUrl: string;
                            value: _153.MsgRegisterPayee;
                        };
                        registerCounterpartyPayee(value: _153.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: _153.MsgRegisterCounterpartyPayee;
                        };
                        payPacketFee(value: _153.MsgPayPacketFee): {
                            typeUrl: string;
                            value: _153.MsgPayPacketFee;
                        };
                        payPacketFeeAsync(value: _153.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: _153.MsgPayPacketFeeAsync;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.fee.v1.MsgRegisterPayee": {
                        aminoType: string;
                        toAmino: (message: _153.MsgRegisterPayee) => _153.MsgRegisterPayeeAmino;
                        fromAmino: (object: _153.MsgRegisterPayeeAmino) => _153.MsgRegisterPayee;
                    };
                    "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee": {
                        aminoType: string;
                        toAmino: (message: _153.MsgRegisterCounterpartyPayee) => _153.MsgRegisterCounterpartyPayeeAmino;
                        fromAmino: (object: _153.MsgRegisterCounterpartyPayeeAmino) => _153.MsgRegisterCounterpartyPayee;
                    };
                    "/ibc.applications.fee.v1.MsgPayPacketFee": {
                        aminoType: string;
                        toAmino: (message: _153.MsgPayPacketFee) => _153.MsgPayPacketFeeAmino;
                        fromAmino: (object: _153.MsgPayPacketFeeAmino) => _153.MsgPayPacketFee;
                    };
                    "/ibc.applications.fee.v1.MsgPayPacketFeeAsync": {
                        aminoType: string;
                        toAmino: (message: _153.MsgPayPacketFeeAsync) => _153.MsgPayPacketFeeAsyncAmino;
                        fromAmino: (object: _153.MsgPayPacketFeeAsyncAmino) => _153.MsgPayPacketFeeAsync;
                    };
                };
                MsgRegisterPayee: {
                    typeUrl: string;
                    encode(message: _153.MsgRegisterPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgRegisterPayee;
                    fromPartial(object: Partial<_153.MsgRegisterPayee>): _153.MsgRegisterPayee;
                    fromAmino(object: _153.MsgRegisterPayeeAmino): _153.MsgRegisterPayee;
                    toAmino(message: _153.MsgRegisterPayee): _153.MsgRegisterPayeeAmino;
                    fromAminoMsg(object: _153.MsgRegisterPayeeAminoMsg): _153.MsgRegisterPayee;
                    toAminoMsg(message: _153.MsgRegisterPayee): _153.MsgRegisterPayeeAminoMsg;
                    fromProtoMsg(message: _153.MsgRegisterPayeeProtoMsg): _153.MsgRegisterPayee;
                    toProto(message: _153.MsgRegisterPayee): Uint8Array;
                    toProtoMsg(message: _153.MsgRegisterPayee): _153.MsgRegisterPayeeProtoMsg;
                };
                MsgRegisterPayeeResponse: {
                    typeUrl: string;
                    encode(_: _153.MsgRegisterPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgRegisterPayeeResponse;
                    fromPartial(_: Partial<_153.MsgRegisterPayeeResponse>): _153.MsgRegisterPayeeResponse;
                    fromAmino(_: _153.MsgRegisterPayeeResponseAmino): _153.MsgRegisterPayeeResponse;
                    toAmino(_: _153.MsgRegisterPayeeResponse): _153.MsgRegisterPayeeResponseAmino;
                    fromAminoMsg(object: _153.MsgRegisterPayeeResponseAminoMsg): _153.MsgRegisterPayeeResponse;
                    toAminoMsg(message: _153.MsgRegisterPayeeResponse): _153.MsgRegisterPayeeResponseAminoMsg;
                    fromProtoMsg(message: _153.MsgRegisterPayeeResponseProtoMsg): _153.MsgRegisterPayeeResponse;
                    toProto(message: _153.MsgRegisterPayeeResponse): Uint8Array;
                    toProtoMsg(message: _153.MsgRegisterPayeeResponse): _153.MsgRegisterPayeeResponseProtoMsg;
                };
                MsgRegisterCounterpartyPayee: {
                    typeUrl: string;
                    encode(message: _153.MsgRegisterCounterpartyPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgRegisterCounterpartyPayee;
                    fromPartial(object: Partial<_153.MsgRegisterCounterpartyPayee>): _153.MsgRegisterCounterpartyPayee;
                    fromAmino(object: _153.MsgRegisterCounterpartyPayeeAmino): _153.MsgRegisterCounterpartyPayee;
                    toAmino(message: _153.MsgRegisterCounterpartyPayee): _153.MsgRegisterCounterpartyPayeeAmino;
                    fromAminoMsg(object: _153.MsgRegisterCounterpartyPayeeAminoMsg): _153.MsgRegisterCounterpartyPayee;
                    toAminoMsg(message: _153.MsgRegisterCounterpartyPayee): _153.MsgRegisterCounterpartyPayeeAminoMsg;
                    fromProtoMsg(message: _153.MsgRegisterCounterpartyPayeeProtoMsg): _153.MsgRegisterCounterpartyPayee;
                    toProto(message: _153.MsgRegisterCounterpartyPayee): Uint8Array;
                    toProtoMsg(message: _153.MsgRegisterCounterpartyPayee): _153.MsgRegisterCounterpartyPayeeProtoMsg;
                };
                MsgRegisterCounterpartyPayeeResponse: {
                    typeUrl: string;
                    encode(_: _153.MsgRegisterCounterpartyPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgRegisterCounterpartyPayeeResponse;
                    fromPartial(_: Partial<_153.MsgRegisterCounterpartyPayeeResponse>): _153.MsgRegisterCounterpartyPayeeResponse;
                    fromAmino(_: _153.MsgRegisterCounterpartyPayeeResponseAmino): _153.MsgRegisterCounterpartyPayeeResponse;
                    toAmino(_: _153.MsgRegisterCounterpartyPayeeResponse): _153.MsgRegisterCounterpartyPayeeResponseAmino;
                    fromAminoMsg(object: _153.MsgRegisterCounterpartyPayeeResponseAminoMsg): _153.MsgRegisterCounterpartyPayeeResponse;
                    toAminoMsg(message: _153.MsgRegisterCounterpartyPayeeResponse): _153.MsgRegisterCounterpartyPayeeResponseAminoMsg;
                    fromProtoMsg(message: _153.MsgRegisterCounterpartyPayeeResponseProtoMsg): _153.MsgRegisterCounterpartyPayeeResponse;
                    toProto(message: _153.MsgRegisterCounterpartyPayeeResponse): Uint8Array;
                    toProtoMsg(message: _153.MsgRegisterCounterpartyPayeeResponse): _153.MsgRegisterCounterpartyPayeeResponseProtoMsg;
                };
                MsgPayPacketFee: {
                    typeUrl: string;
                    encode(message: _153.MsgPayPacketFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgPayPacketFee;
                    fromPartial(object: Partial<_153.MsgPayPacketFee>): _153.MsgPayPacketFee;
                    fromAmino(object: _153.MsgPayPacketFeeAmino): _153.MsgPayPacketFee;
                    toAmino(message: _153.MsgPayPacketFee): _153.MsgPayPacketFeeAmino;
                    fromAminoMsg(object: _153.MsgPayPacketFeeAminoMsg): _153.MsgPayPacketFee;
                    toAminoMsg(message: _153.MsgPayPacketFee): _153.MsgPayPacketFeeAminoMsg;
                    fromProtoMsg(message: _153.MsgPayPacketFeeProtoMsg): _153.MsgPayPacketFee;
                    toProto(message: _153.MsgPayPacketFee): Uint8Array;
                    toProtoMsg(message: _153.MsgPayPacketFee): _153.MsgPayPacketFeeProtoMsg;
                };
                MsgPayPacketFeeResponse: {
                    typeUrl: string;
                    encode(_: _153.MsgPayPacketFeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgPayPacketFeeResponse;
                    fromPartial(_: Partial<_153.MsgPayPacketFeeResponse>): _153.MsgPayPacketFeeResponse;
                    fromAmino(_: _153.MsgPayPacketFeeResponseAmino): _153.MsgPayPacketFeeResponse;
                    toAmino(_: _153.MsgPayPacketFeeResponse): _153.MsgPayPacketFeeResponseAmino;
                    fromAminoMsg(object: _153.MsgPayPacketFeeResponseAminoMsg): _153.MsgPayPacketFeeResponse;
                    toAminoMsg(message: _153.MsgPayPacketFeeResponse): _153.MsgPayPacketFeeResponseAminoMsg;
                    fromProtoMsg(message: _153.MsgPayPacketFeeResponseProtoMsg): _153.MsgPayPacketFeeResponse;
                    toProto(message: _153.MsgPayPacketFeeResponse): Uint8Array;
                    toProtoMsg(message: _153.MsgPayPacketFeeResponse): _153.MsgPayPacketFeeResponseProtoMsg;
                };
                MsgPayPacketFeeAsync: {
                    typeUrl: string;
                    encode(message: _153.MsgPayPacketFeeAsync, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgPayPacketFeeAsync;
                    fromPartial(object: Partial<_153.MsgPayPacketFeeAsync>): _153.MsgPayPacketFeeAsync;
                    fromAmino(object: _153.MsgPayPacketFeeAsyncAmino): _153.MsgPayPacketFeeAsync;
                    toAmino(message: _153.MsgPayPacketFeeAsync): _153.MsgPayPacketFeeAsyncAmino;
                    fromAminoMsg(object: _153.MsgPayPacketFeeAsyncAminoMsg): _153.MsgPayPacketFeeAsync;
                    toAminoMsg(message: _153.MsgPayPacketFeeAsync): _153.MsgPayPacketFeeAsyncAminoMsg;
                    fromProtoMsg(message: _153.MsgPayPacketFeeAsyncProtoMsg): _153.MsgPayPacketFeeAsync;
                    toProto(message: _153.MsgPayPacketFeeAsync): Uint8Array;
                    toProtoMsg(message: _153.MsgPayPacketFeeAsync): _153.MsgPayPacketFeeAsyncProtoMsg;
                };
                MsgPayPacketFeeAsyncResponse: {
                    typeUrl: string;
                    encode(_: _153.MsgPayPacketFeeAsyncResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgPayPacketFeeAsyncResponse;
                    fromPartial(_: Partial<_153.MsgPayPacketFeeAsyncResponse>): _153.MsgPayPacketFeeAsyncResponse;
                    fromAmino(_: _153.MsgPayPacketFeeAsyncResponseAmino): _153.MsgPayPacketFeeAsyncResponse;
                    toAmino(_: _153.MsgPayPacketFeeAsyncResponse): _153.MsgPayPacketFeeAsyncResponseAmino;
                    fromAminoMsg(object: _153.MsgPayPacketFeeAsyncResponseAminoMsg): _153.MsgPayPacketFeeAsyncResponse;
                    toAminoMsg(message: _153.MsgPayPacketFeeAsyncResponse): _153.MsgPayPacketFeeAsyncResponseAminoMsg;
                    fromProtoMsg(message: _153.MsgPayPacketFeeAsyncResponseProtoMsg): _153.MsgPayPacketFeeAsyncResponse;
                    toProto(message: _153.MsgPayPacketFeeAsyncResponse): Uint8Array;
                    toProtoMsg(message: _153.MsgPayPacketFeeAsyncResponse): _153.MsgPayPacketFeeAsyncResponseProtoMsg;
                };
                QueryIncentivizedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _152.QueryIncentivizedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QueryIncentivizedPacketsRequest;
                    fromPartial(object: Partial<_152.QueryIncentivizedPacketsRequest>): _152.QueryIncentivizedPacketsRequest;
                    fromAmino(object: _152.QueryIncentivizedPacketsRequestAmino): _152.QueryIncentivizedPacketsRequest;
                    toAmino(message: _152.QueryIncentivizedPacketsRequest): _152.QueryIncentivizedPacketsRequestAmino;
                    fromAminoMsg(object: _152.QueryIncentivizedPacketsRequestAminoMsg): _152.QueryIncentivizedPacketsRequest;
                    toAminoMsg(message: _152.QueryIncentivizedPacketsRequest): _152.QueryIncentivizedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _152.QueryIncentivizedPacketsRequestProtoMsg): _152.QueryIncentivizedPacketsRequest;
                    toProto(message: _152.QueryIncentivizedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _152.QueryIncentivizedPacketsRequest): _152.QueryIncentivizedPacketsRequestProtoMsg;
                };
                QueryIncentivizedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _152.QueryIncentivizedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QueryIncentivizedPacketsResponse;
                    fromPartial(object: Partial<_152.QueryIncentivizedPacketsResponse>): _152.QueryIncentivizedPacketsResponse;
                    fromAmino(object: _152.QueryIncentivizedPacketsResponseAmino): _152.QueryIncentivizedPacketsResponse;
                    toAmino(message: _152.QueryIncentivizedPacketsResponse): _152.QueryIncentivizedPacketsResponseAmino;
                    fromAminoMsg(object: _152.QueryIncentivizedPacketsResponseAminoMsg): _152.QueryIncentivizedPacketsResponse;
                    toAminoMsg(message: _152.QueryIncentivizedPacketsResponse): _152.QueryIncentivizedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _152.QueryIncentivizedPacketsResponseProtoMsg): _152.QueryIncentivizedPacketsResponse;
                    toProto(message: _152.QueryIncentivizedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _152.QueryIncentivizedPacketsResponse): _152.QueryIncentivizedPacketsResponseProtoMsg;
                };
                QueryIncentivizedPacketRequest: {
                    typeUrl: string;
                    encode(message: _152.QueryIncentivizedPacketRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QueryIncentivizedPacketRequest;
                    fromPartial(object: Partial<_152.QueryIncentivizedPacketRequest>): _152.QueryIncentivizedPacketRequest;
                    fromAmino(object: _152.QueryIncentivizedPacketRequestAmino): _152.QueryIncentivizedPacketRequest;
                    toAmino(message: _152.QueryIncentivizedPacketRequest): _152.QueryIncentivizedPacketRequestAmino;
                    fromAminoMsg(object: _152.QueryIncentivizedPacketRequestAminoMsg): _152.QueryIncentivizedPacketRequest;
                    toAminoMsg(message: _152.QueryIncentivizedPacketRequest): _152.QueryIncentivizedPacketRequestAminoMsg;
                    fromProtoMsg(message: _152.QueryIncentivizedPacketRequestProtoMsg): _152.QueryIncentivizedPacketRequest;
                    toProto(message: _152.QueryIncentivizedPacketRequest): Uint8Array;
                    toProtoMsg(message: _152.QueryIncentivizedPacketRequest): _152.QueryIncentivizedPacketRequestProtoMsg;
                };
                QueryIncentivizedPacketResponse: {
                    typeUrl: string;
                    encode(message: _152.QueryIncentivizedPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QueryIncentivizedPacketResponse;
                    fromPartial(object: Partial<_152.QueryIncentivizedPacketResponse>): _152.QueryIncentivizedPacketResponse;
                    fromAmino(object: _152.QueryIncentivizedPacketResponseAmino): _152.QueryIncentivizedPacketResponse;
                    toAmino(message: _152.QueryIncentivizedPacketResponse): _152.QueryIncentivizedPacketResponseAmino;
                    fromAminoMsg(object: _152.QueryIncentivizedPacketResponseAminoMsg): _152.QueryIncentivizedPacketResponse;
                    toAminoMsg(message: _152.QueryIncentivizedPacketResponse): _152.QueryIncentivizedPacketResponseAminoMsg;
                    fromProtoMsg(message: _152.QueryIncentivizedPacketResponseProtoMsg): _152.QueryIncentivizedPacketResponse;
                    toProto(message: _152.QueryIncentivizedPacketResponse): Uint8Array;
                    toProtoMsg(message: _152.QueryIncentivizedPacketResponse): _152.QueryIncentivizedPacketResponseProtoMsg;
                };
                QueryIncentivizedPacketsForChannelRequest: {
                    typeUrl: string;
                    encode(message: _152.QueryIncentivizedPacketsForChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QueryIncentivizedPacketsForChannelRequest;
                    fromPartial(object: Partial<_152.QueryIncentivizedPacketsForChannelRequest>): _152.QueryIncentivizedPacketsForChannelRequest;
                    fromAmino(object: _152.QueryIncentivizedPacketsForChannelRequestAmino): _152.QueryIncentivizedPacketsForChannelRequest;
                    toAmino(message: _152.QueryIncentivizedPacketsForChannelRequest): _152.QueryIncentivizedPacketsForChannelRequestAmino;
                    fromAminoMsg(object: _152.QueryIncentivizedPacketsForChannelRequestAminoMsg): _152.QueryIncentivizedPacketsForChannelRequest;
                    toAminoMsg(message: _152.QueryIncentivizedPacketsForChannelRequest): _152.QueryIncentivizedPacketsForChannelRequestAminoMsg;
                    fromProtoMsg(message: _152.QueryIncentivizedPacketsForChannelRequestProtoMsg): _152.QueryIncentivizedPacketsForChannelRequest;
                    toProto(message: _152.QueryIncentivizedPacketsForChannelRequest): Uint8Array;
                    toProtoMsg(message: _152.QueryIncentivizedPacketsForChannelRequest): _152.QueryIncentivizedPacketsForChannelRequestProtoMsg;
                };
                QueryIncentivizedPacketsForChannelResponse: {
                    typeUrl: string;
                    encode(message: _152.QueryIncentivizedPacketsForChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QueryIncentivizedPacketsForChannelResponse;
                    fromPartial(object: Partial<_152.QueryIncentivizedPacketsForChannelResponse>): _152.QueryIncentivizedPacketsForChannelResponse;
                    fromAmino(object: _152.QueryIncentivizedPacketsForChannelResponseAmino): _152.QueryIncentivizedPacketsForChannelResponse;
                    toAmino(message: _152.QueryIncentivizedPacketsForChannelResponse): _152.QueryIncentivizedPacketsForChannelResponseAmino;
                    fromAminoMsg(object: _152.QueryIncentivizedPacketsForChannelResponseAminoMsg): _152.QueryIncentivizedPacketsForChannelResponse;
                    toAminoMsg(message: _152.QueryIncentivizedPacketsForChannelResponse): _152.QueryIncentivizedPacketsForChannelResponseAminoMsg;
                    fromProtoMsg(message: _152.QueryIncentivizedPacketsForChannelResponseProtoMsg): _152.QueryIncentivizedPacketsForChannelResponse;
                    toProto(message: _152.QueryIncentivizedPacketsForChannelResponse): Uint8Array;
                    toProtoMsg(message: _152.QueryIncentivizedPacketsForChannelResponse): _152.QueryIncentivizedPacketsForChannelResponseProtoMsg;
                };
                QueryTotalRecvFeesRequest: {
                    typeUrl: string;
                    encode(message: _152.QueryTotalRecvFeesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QueryTotalRecvFeesRequest;
                    fromPartial(object: Partial<_152.QueryTotalRecvFeesRequest>): _152.QueryTotalRecvFeesRequest;
                    fromAmino(object: _152.QueryTotalRecvFeesRequestAmino): _152.QueryTotalRecvFeesRequest;
                    toAmino(message: _152.QueryTotalRecvFeesRequest): _152.QueryTotalRecvFeesRequestAmino;
                    fromAminoMsg(object: _152.QueryTotalRecvFeesRequestAminoMsg): _152.QueryTotalRecvFeesRequest;
                    toAminoMsg(message: _152.QueryTotalRecvFeesRequest): _152.QueryTotalRecvFeesRequestAminoMsg;
                    fromProtoMsg(message: _152.QueryTotalRecvFeesRequestProtoMsg): _152.QueryTotalRecvFeesRequest;
                    toProto(message: _152.QueryTotalRecvFeesRequest): Uint8Array;
                    toProtoMsg(message: _152.QueryTotalRecvFeesRequest): _152.QueryTotalRecvFeesRequestProtoMsg;
                };
                QueryTotalRecvFeesResponse: {
                    typeUrl: string;
                    encode(message: _152.QueryTotalRecvFeesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QueryTotalRecvFeesResponse;
                    fromPartial(object: Partial<_152.QueryTotalRecvFeesResponse>): _152.QueryTotalRecvFeesResponse;
                    fromAmino(object: _152.QueryTotalRecvFeesResponseAmino): _152.QueryTotalRecvFeesResponse;
                    toAmino(message: _152.QueryTotalRecvFeesResponse): _152.QueryTotalRecvFeesResponseAmino;
                    fromAminoMsg(object: _152.QueryTotalRecvFeesResponseAminoMsg): _152.QueryTotalRecvFeesResponse;
                    toAminoMsg(message: _152.QueryTotalRecvFeesResponse): _152.QueryTotalRecvFeesResponseAminoMsg;
                    fromProtoMsg(message: _152.QueryTotalRecvFeesResponseProtoMsg): _152.QueryTotalRecvFeesResponse;
                    toProto(message: _152.QueryTotalRecvFeesResponse): Uint8Array;
                    toProtoMsg(message: _152.QueryTotalRecvFeesResponse): _152.QueryTotalRecvFeesResponseProtoMsg;
                };
                QueryTotalAckFeesRequest: {
                    typeUrl: string;
                    encode(message: _152.QueryTotalAckFeesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QueryTotalAckFeesRequest;
                    fromPartial(object: Partial<_152.QueryTotalAckFeesRequest>): _152.QueryTotalAckFeesRequest;
                    fromAmino(object: _152.QueryTotalAckFeesRequestAmino): _152.QueryTotalAckFeesRequest;
                    toAmino(message: _152.QueryTotalAckFeesRequest): _152.QueryTotalAckFeesRequestAmino;
                    fromAminoMsg(object: _152.QueryTotalAckFeesRequestAminoMsg): _152.QueryTotalAckFeesRequest;
                    toAminoMsg(message: _152.QueryTotalAckFeesRequest): _152.QueryTotalAckFeesRequestAminoMsg;
                    fromProtoMsg(message: _152.QueryTotalAckFeesRequestProtoMsg): _152.QueryTotalAckFeesRequest;
                    toProto(message: _152.QueryTotalAckFeesRequest): Uint8Array;
                    toProtoMsg(message: _152.QueryTotalAckFeesRequest): _152.QueryTotalAckFeesRequestProtoMsg;
                };
                QueryTotalAckFeesResponse: {
                    typeUrl: string;
                    encode(message: _152.QueryTotalAckFeesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QueryTotalAckFeesResponse;
                    fromPartial(object: Partial<_152.QueryTotalAckFeesResponse>): _152.QueryTotalAckFeesResponse;
                    fromAmino(object: _152.QueryTotalAckFeesResponseAmino): _152.QueryTotalAckFeesResponse;
                    toAmino(message: _152.QueryTotalAckFeesResponse): _152.QueryTotalAckFeesResponseAmino;
                    fromAminoMsg(object: _152.QueryTotalAckFeesResponseAminoMsg): _152.QueryTotalAckFeesResponse;
                    toAminoMsg(message: _152.QueryTotalAckFeesResponse): _152.QueryTotalAckFeesResponseAminoMsg;
                    fromProtoMsg(message: _152.QueryTotalAckFeesResponseProtoMsg): _152.QueryTotalAckFeesResponse;
                    toProto(message: _152.QueryTotalAckFeesResponse): Uint8Array;
                    toProtoMsg(message: _152.QueryTotalAckFeesResponse): _152.QueryTotalAckFeesResponseProtoMsg;
                };
                QueryTotalTimeoutFeesRequest: {
                    typeUrl: string;
                    encode(message: _152.QueryTotalTimeoutFeesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QueryTotalTimeoutFeesRequest;
                    fromPartial(object: Partial<_152.QueryTotalTimeoutFeesRequest>): _152.QueryTotalTimeoutFeesRequest;
                    fromAmino(object: _152.QueryTotalTimeoutFeesRequestAmino): _152.QueryTotalTimeoutFeesRequest;
                    toAmino(message: _152.QueryTotalTimeoutFeesRequest): _152.QueryTotalTimeoutFeesRequestAmino;
                    fromAminoMsg(object: _152.QueryTotalTimeoutFeesRequestAminoMsg): _152.QueryTotalTimeoutFeesRequest;
                    toAminoMsg(message: _152.QueryTotalTimeoutFeesRequest): _152.QueryTotalTimeoutFeesRequestAminoMsg;
                    fromProtoMsg(message: _152.QueryTotalTimeoutFeesRequestProtoMsg): _152.QueryTotalTimeoutFeesRequest;
                    toProto(message: _152.QueryTotalTimeoutFeesRequest): Uint8Array;
                    toProtoMsg(message: _152.QueryTotalTimeoutFeesRequest): _152.QueryTotalTimeoutFeesRequestProtoMsg;
                };
                QueryTotalTimeoutFeesResponse: {
                    typeUrl: string;
                    encode(message: _152.QueryTotalTimeoutFeesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QueryTotalTimeoutFeesResponse;
                    fromPartial(object: Partial<_152.QueryTotalTimeoutFeesResponse>): _152.QueryTotalTimeoutFeesResponse;
                    fromAmino(object: _152.QueryTotalTimeoutFeesResponseAmino): _152.QueryTotalTimeoutFeesResponse;
                    toAmino(message: _152.QueryTotalTimeoutFeesResponse): _152.QueryTotalTimeoutFeesResponseAmino;
                    fromAminoMsg(object: _152.QueryTotalTimeoutFeesResponseAminoMsg): _152.QueryTotalTimeoutFeesResponse;
                    toAminoMsg(message: _152.QueryTotalTimeoutFeesResponse): _152.QueryTotalTimeoutFeesResponseAminoMsg;
                    fromProtoMsg(message: _152.QueryTotalTimeoutFeesResponseProtoMsg): _152.QueryTotalTimeoutFeesResponse;
                    toProto(message: _152.QueryTotalTimeoutFeesResponse): Uint8Array;
                    toProtoMsg(message: _152.QueryTotalTimeoutFeesResponse): _152.QueryTotalTimeoutFeesResponseProtoMsg;
                };
                QueryPayeeRequest: {
                    typeUrl: string;
                    encode(message: _152.QueryPayeeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QueryPayeeRequest;
                    fromPartial(object: Partial<_152.QueryPayeeRequest>): _152.QueryPayeeRequest;
                    fromAmino(object: _152.QueryPayeeRequestAmino): _152.QueryPayeeRequest;
                    toAmino(message: _152.QueryPayeeRequest): _152.QueryPayeeRequestAmino;
                    fromAminoMsg(object: _152.QueryPayeeRequestAminoMsg): _152.QueryPayeeRequest;
                    toAminoMsg(message: _152.QueryPayeeRequest): _152.QueryPayeeRequestAminoMsg;
                    fromProtoMsg(message: _152.QueryPayeeRequestProtoMsg): _152.QueryPayeeRequest;
                    toProto(message: _152.QueryPayeeRequest): Uint8Array;
                    toProtoMsg(message: _152.QueryPayeeRequest): _152.QueryPayeeRequestProtoMsg;
                };
                QueryPayeeResponse: {
                    typeUrl: string;
                    encode(message: _152.QueryPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QueryPayeeResponse;
                    fromPartial(object: Partial<_152.QueryPayeeResponse>): _152.QueryPayeeResponse;
                    fromAmino(object: _152.QueryPayeeResponseAmino): _152.QueryPayeeResponse;
                    toAmino(message: _152.QueryPayeeResponse): _152.QueryPayeeResponseAmino;
                    fromAminoMsg(object: _152.QueryPayeeResponseAminoMsg): _152.QueryPayeeResponse;
                    toAminoMsg(message: _152.QueryPayeeResponse): _152.QueryPayeeResponseAminoMsg;
                    fromProtoMsg(message: _152.QueryPayeeResponseProtoMsg): _152.QueryPayeeResponse;
                    toProto(message: _152.QueryPayeeResponse): Uint8Array;
                    toProtoMsg(message: _152.QueryPayeeResponse): _152.QueryPayeeResponseProtoMsg;
                };
                QueryCounterpartyPayeeRequest: {
                    typeUrl: string;
                    encode(message: _152.QueryCounterpartyPayeeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QueryCounterpartyPayeeRequest;
                    fromPartial(object: Partial<_152.QueryCounterpartyPayeeRequest>): _152.QueryCounterpartyPayeeRequest;
                    fromAmino(object: _152.QueryCounterpartyPayeeRequestAmino): _152.QueryCounterpartyPayeeRequest;
                    toAmino(message: _152.QueryCounterpartyPayeeRequest): _152.QueryCounterpartyPayeeRequestAmino;
                    fromAminoMsg(object: _152.QueryCounterpartyPayeeRequestAminoMsg): _152.QueryCounterpartyPayeeRequest;
                    toAminoMsg(message: _152.QueryCounterpartyPayeeRequest): _152.QueryCounterpartyPayeeRequestAminoMsg;
                    fromProtoMsg(message: _152.QueryCounterpartyPayeeRequestProtoMsg): _152.QueryCounterpartyPayeeRequest;
                    toProto(message: _152.QueryCounterpartyPayeeRequest): Uint8Array;
                    toProtoMsg(message: _152.QueryCounterpartyPayeeRequest): _152.QueryCounterpartyPayeeRequestProtoMsg;
                };
                QueryCounterpartyPayeeResponse: {
                    typeUrl: string;
                    encode(message: _152.QueryCounterpartyPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QueryCounterpartyPayeeResponse;
                    fromPartial(object: Partial<_152.QueryCounterpartyPayeeResponse>): _152.QueryCounterpartyPayeeResponse;
                    fromAmino(object: _152.QueryCounterpartyPayeeResponseAmino): _152.QueryCounterpartyPayeeResponse;
                    toAmino(message: _152.QueryCounterpartyPayeeResponse): _152.QueryCounterpartyPayeeResponseAmino;
                    fromAminoMsg(object: _152.QueryCounterpartyPayeeResponseAminoMsg): _152.QueryCounterpartyPayeeResponse;
                    toAminoMsg(message: _152.QueryCounterpartyPayeeResponse): _152.QueryCounterpartyPayeeResponseAminoMsg;
                    fromProtoMsg(message: _152.QueryCounterpartyPayeeResponseProtoMsg): _152.QueryCounterpartyPayeeResponse;
                    toProto(message: _152.QueryCounterpartyPayeeResponse): Uint8Array;
                    toProtoMsg(message: _152.QueryCounterpartyPayeeResponse): _152.QueryCounterpartyPayeeResponseProtoMsg;
                };
                QueryFeeEnabledChannelsRequest: {
                    typeUrl: string;
                    encode(message: _152.QueryFeeEnabledChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QueryFeeEnabledChannelsRequest;
                    fromPartial(object: Partial<_152.QueryFeeEnabledChannelsRequest>): _152.QueryFeeEnabledChannelsRequest;
                    fromAmino(object: _152.QueryFeeEnabledChannelsRequestAmino): _152.QueryFeeEnabledChannelsRequest;
                    toAmino(message: _152.QueryFeeEnabledChannelsRequest): _152.QueryFeeEnabledChannelsRequestAmino;
                    fromAminoMsg(object: _152.QueryFeeEnabledChannelsRequestAminoMsg): _152.QueryFeeEnabledChannelsRequest;
                    toAminoMsg(message: _152.QueryFeeEnabledChannelsRequest): _152.QueryFeeEnabledChannelsRequestAminoMsg;
                    fromProtoMsg(message: _152.QueryFeeEnabledChannelsRequestProtoMsg): _152.QueryFeeEnabledChannelsRequest;
                    toProto(message: _152.QueryFeeEnabledChannelsRequest): Uint8Array;
                    toProtoMsg(message: _152.QueryFeeEnabledChannelsRequest): _152.QueryFeeEnabledChannelsRequestProtoMsg;
                };
                QueryFeeEnabledChannelsResponse: {
                    typeUrl: string;
                    encode(message: _152.QueryFeeEnabledChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QueryFeeEnabledChannelsResponse;
                    fromPartial(object: Partial<_152.QueryFeeEnabledChannelsResponse>): _152.QueryFeeEnabledChannelsResponse;
                    fromAmino(object: _152.QueryFeeEnabledChannelsResponseAmino): _152.QueryFeeEnabledChannelsResponse;
                    toAmino(message: _152.QueryFeeEnabledChannelsResponse): _152.QueryFeeEnabledChannelsResponseAmino;
                    fromAminoMsg(object: _152.QueryFeeEnabledChannelsResponseAminoMsg): _152.QueryFeeEnabledChannelsResponse;
                    toAminoMsg(message: _152.QueryFeeEnabledChannelsResponse): _152.QueryFeeEnabledChannelsResponseAminoMsg;
                    fromProtoMsg(message: _152.QueryFeeEnabledChannelsResponseProtoMsg): _152.QueryFeeEnabledChannelsResponse;
                    toProto(message: _152.QueryFeeEnabledChannelsResponse): Uint8Array;
                    toProtoMsg(message: _152.QueryFeeEnabledChannelsResponse): _152.QueryFeeEnabledChannelsResponseProtoMsg;
                };
                QueryFeeEnabledChannelRequest: {
                    typeUrl: string;
                    encode(message: _152.QueryFeeEnabledChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QueryFeeEnabledChannelRequest;
                    fromPartial(object: Partial<_152.QueryFeeEnabledChannelRequest>): _152.QueryFeeEnabledChannelRequest;
                    fromAmino(object: _152.QueryFeeEnabledChannelRequestAmino): _152.QueryFeeEnabledChannelRequest;
                    toAmino(message: _152.QueryFeeEnabledChannelRequest): _152.QueryFeeEnabledChannelRequestAmino;
                    fromAminoMsg(object: _152.QueryFeeEnabledChannelRequestAminoMsg): _152.QueryFeeEnabledChannelRequest;
                    toAminoMsg(message: _152.QueryFeeEnabledChannelRequest): _152.QueryFeeEnabledChannelRequestAminoMsg;
                    fromProtoMsg(message: _152.QueryFeeEnabledChannelRequestProtoMsg): _152.QueryFeeEnabledChannelRequest;
                    toProto(message: _152.QueryFeeEnabledChannelRequest): Uint8Array;
                    toProtoMsg(message: _152.QueryFeeEnabledChannelRequest): _152.QueryFeeEnabledChannelRequestProtoMsg;
                };
                QueryFeeEnabledChannelResponse: {
                    typeUrl: string;
                    encode(message: _152.QueryFeeEnabledChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QueryFeeEnabledChannelResponse;
                    fromPartial(object: Partial<_152.QueryFeeEnabledChannelResponse>): _152.QueryFeeEnabledChannelResponse;
                    fromAmino(object: _152.QueryFeeEnabledChannelResponseAmino): _152.QueryFeeEnabledChannelResponse;
                    toAmino(message: _152.QueryFeeEnabledChannelResponse): _152.QueryFeeEnabledChannelResponseAmino;
                    fromAminoMsg(object: _152.QueryFeeEnabledChannelResponseAminoMsg): _152.QueryFeeEnabledChannelResponse;
                    toAminoMsg(message: _152.QueryFeeEnabledChannelResponse): _152.QueryFeeEnabledChannelResponseAminoMsg;
                    fromProtoMsg(message: _152.QueryFeeEnabledChannelResponseProtoMsg): _152.QueryFeeEnabledChannelResponse;
                    toProto(message: _152.QueryFeeEnabledChannelResponse): Uint8Array;
                    toProtoMsg(message: _152.QueryFeeEnabledChannelResponse): _152.QueryFeeEnabledChannelResponseProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _151.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.Metadata;
                    fromPartial(object: Partial<_151.Metadata>): _151.Metadata;
                    fromAmino(object: _151.MetadataAmino): _151.Metadata;
                    toAmino(message: _151.Metadata): _151.MetadataAmino;
                    fromAminoMsg(object: _151.MetadataAminoMsg): _151.Metadata;
                    toAminoMsg(message: _151.Metadata): _151.MetadataAminoMsg;
                    fromProtoMsg(message: _151.MetadataProtoMsg): _151.Metadata;
                    toProto(message: _151.Metadata): Uint8Array;
                    toProtoMsg(message: _151.Metadata): _151.MetadataProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _150.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.GenesisState;
                    fromPartial(object: Partial<_150.GenesisState>): _150.GenesisState;
                    fromAmino(object: _150.GenesisStateAmino): _150.GenesisState;
                    toAmino(message: _150.GenesisState): _150.GenesisStateAmino;
                    fromAminoMsg(object: _150.GenesisStateAminoMsg): _150.GenesisState;
                    toAminoMsg(message: _150.GenesisState): _150.GenesisStateAminoMsg;
                    fromProtoMsg(message: _150.GenesisStateProtoMsg): _150.GenesisState;
                    toProto(message: _150.GenesisState): Uint8Array;
                    toProtoMsg(message: _150.GenesisState): _150.GenesisStateProtoMsg;
                };
                FeeEnabledChannel: {
                    typeUrl: string;
                    encode(message: _150.FeeEnabledChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.FeeEnabledChannel;
                    fromPartial(object: Partial<_150.FeeEnabledChannel>): _150.FeeEnabledChannel;
                    fromAmino(object: _150.FeeEnabledChannelAmino): _150.FeeEnabledChannel;
                    toAmino(message: _150.FeeEnabledChannel): _150.FeeEnabledChannelAmino;
                    fromAminoMsg(object: _150.FeeEnabledChannelAminoMsg): _150.FeeEnabledChannel;
                    toAminoMsg(message: _150.FeeEnabledChannel): _150.FeeEnabledChannelAminoMsg;
                    fromProtoMsg(message: _150.FeeEnabledChannelProtoMsg): _150.FeeEnabledChannel;
                    toProto(message: _150.FeeEnabledChannel): Uint8Array;
                    toProtoMsg(message: _150.FeeEnabledChannel): _150.FeeEnabledChannelProtoMsg;
                };
                RegisteredPayee: {
                    typeUrl: string;
                    encode(message: _150.RegisteredPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.RegisteredPayee;
                    fromPartial(object: Partial<_150.RegisteredPayee>): _150.RegisteredPayee;
                    fromAmino(object: _150.RegisteredPayeeAmino): _150.RegisteredPayee;
                    toAmino(message: _150.RegisteredPayee): _150.RegisteredPayeeAmino;
                    fromAminoMsg(object: _150.RegisteredPayeeAminoMsg): _150.RegisteredPayee;
                    toAminoMsg(message: _150.RegisteredPayee): _150.RegisteredPayeeAminoMsg;
                    fromProtoMsg(message: _150.RegisteredPayeeProtoMsg): _150.RegisteredPayee;
                    toProto(message: _150.RegisteredPayee): Uint8Array;
                    toProtoMsg(message: _150.RegisteredPayee): _150.RegisteredPayeeProtoMsg;
                };
                RegisteredCounterpartyPayee: {
                    typeUrl: string;
                    encode(message: _150.RegisteredCounterpartyPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.RegisteredCounterpartyPayee;
                    fromPartial(object: Partial<_150.RegisteredCounterpartyPayee>): _150.RegisteredCounterpartyPayee;
                    fromAmino(object: _150.RegisteredCounterpartyPayeeAmino): _150.RegisteredCounterpartyPayee;
                    toAmino(message: _150.RegisteredCounterpartyPayee): _150.RegisteredCounterpartyPayeeAmino;
                    fromAminoMsg(object: _150.RegisteredCounterpartyPayeeAminoMsg): _150.RegisteredCounterpartyPayee;
                    toAminoMsg(message: _150.RegisteredCounterpartyPayee): _150.RegisteredCounterpartyPayeeAminoMsg;
                    fromProtoMsg(message: _150.RegisteredCounterpartyPayeeProtoMsg): _150.RegisteredCounterpartyPayee;
                    toProto(message: _150.RegisteredCounterpartyPayee): Uint8Array;
                    toProtoMsg(message: _150.RegisteredCounterpartyPayee): _150.RegisteredCounterpartyPayeeProtoMsg;
                };
                ForwardRelayerAddress: {
                    typeUrl: string;
                    encode(message: _150.ForwardRelayerAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.ForwardRelayerAddress;
                    fromPartial(object: Partial<_150.ForwardRelayerAddress>): _150.ForwardRelayerAddress;
                    fromAmino(object: _150.ForwardRelayerAddressAmino): _150.ForwardRelayerAddress;
                    toAmino(message: _150.ForwardRelayerAddress): _150.ForwardRelayerAddressAmino;
                    fromAminoMsg(object: _150.ForwardRelayerAddressAminoMsg): _150.ForwardRelayerAddress;
                    toAminoMsg(message: _150.ForwardRelayerAddress): _150.ForwardRelayerAddressAminoMsg;
                    fromProtoMsg(message: _150.ForwardRelayerAddressProtoMsg): _150.ForwardRelayerAddress;
                    toProto(message: _150.ForwardRelayerAddress): Uint8Array;
                    toProtoMsg(message: _150.ForwardRelayerAddress): _150.ForwardRelayerAddressProtoMsg;
                };
                Fee: {
                    typeUrl: string;
                    encode(message: _149.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.Fee;
                    fromPartial(object: Partial<_149.Fee>): _149.Fee;
                    fromAmino(object: _149.FeeAmino): _149.Fee;
                    toAmino(message: _149.Fee): _149.FeeAmino;
                    fromAminoMsg(object: _149.FeeAminoMsg): _149.Fee;
                    toAminoMsg(message: _149.Fee): _149.FeeAminoMsg;
                    fromProtoMsg(message: _149.FeeProtoMsg): _149.Fee;
                    toProto(message: _149.Fee): Uint8Array;
                    toProtoMsg(message: _149.Fee): _149.FeeProtoMsg;
                };
                PacketFee: {
                    typeUrl: string;
                    encode(message: _149.PacketFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.PacketFee;
                    fromPartial(object: Partial<_149.PacketFee>): _149.PacketFee;
                    fromAmino(object: _149.PacketFeeAmino): _149.PacketFee;
                    toAmino(message: _149.PacketFee): _149.PacketFeeAmino;
                    fromAminoMsg(object: _149.PacketFeeAminoMsg): _149.PacketFee;
                    toAminoMsg(message: _149.PacketFee): _149.PacketFeeAminoMsg;
                    fromProtoMsg(message: _149.PacketFeeProtoMsg): _149.PacketFee;
                    toProto(message: _149.PacketFee): Uint8Array;
                    toProtoMsg(message: _149.PacketFee): _149.PacketFeeProtoMsg;
                };
                PacketFees: {
                    typeUrl: string;
                    encode(message: _149.PacketFees, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.PacketFees;
                    fromPartial(object: Partial<_149.PacketFees>): _149.PacketFees;
                    fromAmino(object: _149.PacketFeesAmino): _149.PacketFees;
                    toAmino(message: _149.PacketFees): _149.PacketFeesAmino;
                    fromAminoMsg(object: _149.PacketFeesAminoMsg): _149.PacketFees;
                    toAminoMsg(message: _149.PacketFees): _149.PacketFeesAminoMsg;
                    fromProtoMsg(message: _149.PacketFeesProtoMsg): _149.PacketFees;
                    toProto(message: _149.PacketFees): Uint8Array;
                    toProtoMsg(message: _149.PacketFees): _149.PacketFeesProtoMsg;
                };
                IdentifiedPacketFees: {
                    typeUrl: string;
                    encode(message: _149.IdentifiedPacketFees, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.IdentifiedPacketFees;
                    fromPartial(object: Partial<_149.IdentifiedPacketFees>): _149.IdentifiedPacketFees;
                    fromAmino(object: _149.IdentifiedPacketFeesAmino): _149.IdentifiedPacketFees;
                    toAmino(message: _149.IdentifiedPacketFees): _149.IdentifiedPacketFeesAmino;
                    fromAminoMsg(object: _149.IdentifiedPacketFeesAminoMsg): _149.IdentifiedPacketFees;
                    toAminoMsg(message: _149.IdentifiedPacketFees): _149.IdentifiedPacketFeesAminoMsg;
                    fromProtoMsg(message: _149.IdentifiedPacketFeesProtoMsg): _149.IdentifiedPacketFees;
                    toProto(message: _149.IdentifiedPacketFees): Uint8Array;
                    toProtoMsg(message: _149.IdentifiedPacketFees): _149.IdentifiedPacketFeesProtoMsg;
                };
                IncentivizedAcknowledgement: {
                    typeUrl: string;
                    encode(message: _148.IncentivizedAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.IncentivizedAcknowledgement;
                    fromPartial(object: Partial<_148.IncentivizedAcknowledgement>): _148.IncentivizedAcknowledgement;
                    fromAmino(object: _148.IncentivizedAcknowledgementAmino): _148.IncentivizedAcknowledgement;
                    toAmino(message: _148.IncentivizedAcknowledgement): _148.IncentivizedAcknowledgementAmino;
                    fromAminoMsg(object: _148.IncentivizedAcknowledgementAminoMsg): _148.IncentivizedAcknowledgement;
                    toAminoMsg(message: _148.IncentivizedAcknowledgement): _148.IncentivizedAcknowledgementAminoMsg;
                    fromProtoMsg(message: _148.IncentivizedAcknowledgementProtoMsg): _148.IncentivizedAcknowledgement;
                    toProto(message: _148.IncentivizedAcknowledgement): Uint8Array;
                    toProtoMsg(message: _148.IncentivizedAcknowledgement): _148.IncentivizedAcknowledgementProtoMsg;
                };
            };
        }
        namespace interchain_accounts {
            namespace controller {
                const v1: {
                    MsgClientImpl: typeof _379.MsgClientImpl;
                    QueryClientImpl: typeof _371.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        interchainAccount(request: _155.QueryInterchainAccountRequest): Promise<_155.QueryInterchainAccountResponse>;
                        params(request?: _155.QueryParamsRequest): Promise<_155.QueryParamsResponse>;
                    };
                    registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            registerInterchainAccount(value: _156.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            sendTx(value: _156.MsgSendTx): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            updateParams(value: _156.MsgUpdateParams): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            registerInterchainAccount(value: _156.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: _156.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: _156.MsgSendTx): {
                                typeUrl: string;
                                value: _156.MsgSendTx;
                            };
                            updateParams(value: _156.MsgUpdateParams): {
                                typeUrl: string;
                                value: _156.MsgUpdateParams;
                            };
                        };
                        fromPartial: {
                            registerInterchainAccount(value: _156.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: _156.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: _156.MsgSendTx): {
                                typeUrl: string;
                                value: _156.MsgSendTx;
                            };
                            updateParams(value: _156.MsgUpdateParams): {
                                typeUrl: string;
                                value: _156.MsgUpdateParams;
                            };
                        };
                    };
                    AminoConverter: {
                        "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount": {
                            aminoType: string;
                            toAmino: (message: _156.MsgRegisterInterchainAccount) => _156.MsgRegisterInterchainAccountAmino;
                            fromAmino: (object: _156.MsgRegisterInterchainAccountAmino) => _156.MsgRegisterInterchainAccount;
                        };
                        "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx": {
                            aminoType: string;
                            toAmino: (message: _156.MsgSendTx) => _156.MsgSendTxAmino;
                            fromAmino: (object: _156.MsgSendTxAmino) => _156.MsgSendTx;
                        };
                        "/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParams": {
                            aminoType: string;
                            toAmino: (message: _156.MsgUpdateParams) => _156.MsgUpdateParamsAmino;
                            fromAmino: (object: _156.MsgUpdateParamsAmino) => _156.MsgUpdateParams;
                        };
                    };
                    MsgRegisterInterchainAccount: {
                        typeUrl: string;
                        encode(message: _156.MsgRegisterInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _156.MsgRegisterInterchainAccount;
                        fromPartial(object: Partial<_156.MsgRegisterInterchainAccount>): _156.MsgRegisterInterchainAccount;
                        fromAmino(object: _156.MsgRegisterInterchainAccountAmino): _156.MsgRegisterInterchainAccount;
                        toAmino(message: _156.MsgRegisterInterchainAccount): _156.MsgRegisterInterchainAccountAmino;
                        fromAminoMsg(object: _156.MsgRegisterInterchainAccountAminoMsg): _156.MsgRegisterInterchainAccount;
                        toAminoMsg(message: _156.MsgRegisterInterchainAccount): _156.MsgRegisterInterchainAccountAminoMsg;
                        fromProtoMsg(message: _156.MsgRegisterInterchainAccountProtoMsg): _156.MsgRegisterInterchainAccount;
                        toProto(message: _156.MsgRegisterInterchainAccount): Uint8Array;
                        toProtoMsg(message: _156.MsgRegisterInterchainAccount): _156.MsgRegisterInterchainAccountProtoMsg;
                    };
                    MsgRegisterInterchainAccountResponse: {
                        typeUrl: string;
                        encode(message: _156.MsgRegisterInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _156.MsgRegisterInterchainAccountResponse;
                        fromPartial(object: Partial<_156.MsgRegisterInterchainAccountResponse>): _156.MsgRegisterInterchainAccountResponse;
                        fromAmino(object: _156.MsgRegisterInterchainAccountResponseAmino): _156.MsgRegisterInterchainAccountResponse;
                        toAmino(message: _156.MsgRegisterInterchainAccountResponse): _156.MsgRegisterInterchainAccountResponseAmino;
                        fromAminoMsg(object: _156.MsgRegisterInterchainAccountResponseAminoMsg): _156.MsgRegisterInterchainAccountResponse;
                        toAminoMsg(message: _156.MsgRegisterInterchainAccountResponse): _156.MsgRegisterInterchainAccountResponseAminoMsg;
                        fromProtoMsg(message: _156.MsgRegisterInterchainAccountResponseProtoMsg): _156.MsgRegisterInterchainAccountResponse;
                        toProto(message: _156.MsgRegisterInterchainAccountResponse): Uint8Array;
                        toProtoMsg(message: _156.MsgRegisterInterchainAccountResponse): _156.MsgRegisterInterchainAccountResponseProtoMsg;
                    };
                    MsgSendTx: {
                        typeUrl: string;
                        encode(message: _156.MsgSendTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _156.MsgSendTx;
                        fromPartial(object: Partial<_156.MsgSendTx>): _156.MsgSendTx;
                        fromAmino(object: _156.MsgSendTxAmino): _156.MsgSendTx;
                        toAmino(message: _156.MsgSendTx): _156.MsgSendTxAmino;
                        fromAminoMsg(object: _156.MsgSendTxAminoMsg): _156.MsgSendTx;
                        toAminoMsg(message: _156.MsgSendTx): _156.MsgSendTxAminoMsg;
                        fromProtoMsg(message: _156.MsgSendTxProtoMsg): _156.MsgSendTx;
                        toProto(message: _156.MsgSendTx): Uint8Array;
                        toProtoMsg(message: _156.MsgSendTx): _156.MsgSendTxProtoMsg;
                    };
                    MsgSendTxResponse: {
                        typeUrl: string;
                        encode(message: _156.MsgSendTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _156.MsgSendTxResponse;
                        fromPartial(object: Partial<_156.MsgSendTxResponse>): _156.MsgSendTxResponse;
                        fromAmino(object: _156.MsgSendTxResponseAmino): _156.MsgSendTxResponse;
                        toAmino(message: _156.MsgSendTxResponse): _156.MsgSendTxResponseAmino;
                        fromAminoMsg(object: _156.MsgSendTxResponseAminoMsg): _156.MsgSendTxResponse;
                        toAminoMsg(message: _156.MsgSendTxResponse): _156.MsgSendTxResponseAminoMsg;
                        fromProtoMsg(message: _156.MsgSendTxResponseProtoMsg): _156.MsgSendTxResponse;
                        toProto(message: _156.MsgSendTxResponse): Uint8Array;
                        toProtoMsg(message: _156.MsgSendTxResponse): _156.MsgSendTxResponseProtoMsg;
                    };
                    MsgUpdateParams: {
                        typeUrl: string;
                        encode(message: _156.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _156.MsgUpdateParams;
                        fromPartial(object: Partial<_156.MsgUpdateParams>): _156.MsgUpdateParams;
                        fromAmino(object: _156.MsgUpdateParamsAmino): _156.MsgUpdateParams;
                        toAmino(message: _156.MsgUpdateParams): _156.MsgUpdateParamsAmino;
                        fromAminoMsg(object: _156.MsgUpdateParamsAminoMsg): _156.MsgUpdateParams;
                        toAminoMsg(message: _156.MsgUpdateParams): _156.MsgUpdateParamsAminoMsg;
                        fromProtoMsg(message: _156.MsgUpdateParamsProtoMsg): _156.MsgUpdateParams;
                        toProto(message: _156.MsgUpdateParams): Uint8Array;
                        toProtoMsg(message: _156.MsgUpdateParams): _156.MsgUpdateParamsProtoMsg;
                    };
                    MsgUpdateParamsResponse: {
                        typeUrl: string;
                        encode(_: _156.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _156.MsgUpdateParamsResponse;
                        fromPartial(_: Partial<_156.MsgUpdateParamsResponse>): _156.MsgUpdateParamsResponse;
                        fromAmino(_: _156.MsgUpdateParamsResponseAmino): _156.MsgUpdateParamsResponse;
                        toAmino(_: _156.MsgUpdateParamsResponse): _156.MsgUpdateParamsResponseAmino;
                        fromAminoMsg(object: _156.MsgUpdateParamsResponseAminoMsg): _156.MsgUpdateParamsResponse;
                        toAminoMsg(message: _156.MsgUpdateParamsResponse): _156.MsgUpdateParamsResponseAminoMsg;
                        fromProtoMsg(message: _156.MsgUpdateParamsResponseProtoMsg): _156.MsgUpdateParamsResponse;
                        toProto(message: _156.MsgUpdateParamsResponse): Uint8Array;
                        toProtoMsg(message: _156.MsgUpdateParamsResponse): _156.MsgUpdateParamsResponseProtoMsg;
                    };
                    QueryInterchainAccountRequest: {
                        typeUrl: string;
                        encode(message: _155.QueryInterchainAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.QueryInterchainAccountRequest;
                        fromPartial(object: Partial<_155.QueryInterchainAccountRequest>): _155.QueryInterchainAccountRequest;
                        fromAmino(object: _155.QueryInterchainAccountRequestAmino): _155.QueryInterchainAccountRequest;
                        toAmino(message: _155.QueryInterchainAccountRequest): _155.QueryInterchainAccountRequestAmino;
                        fromAminoMsg(object: _155.QueryInterchainAccountRequestAminoMsg): _155.QueryInterchainAccountRequest;
                        toAminoMsg(message: _155.QueryInterchainAccountRequest): _155.QueryInterchainAccountRequestAminoMsg;
                        fromProtoMsg(message: _155.QueryInterchainAccountRequestProtoMsg): _155.QueryInterchainAccountRequest;
                        toProto(message: _155.QueryInterchainAccountRequest): Uint8Array;
                        toProtoMsg(message: _155.QueryInterchainAccountRequest): _155.QueryInterchainAccountRequestProtoMsg;
                    };
                    QueryInterchainAccountResponse: {
                        typeUrl: string;
                        encode(message: _155.QueryInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.QueryInterchainAccountResponse;
                        fromPartial(object: Partial<_155.QueryInterchainAccountResponse>): _155.QueryInterchainAccountResponse;
                        fromAmino(object: _155.QueryInterchainAccountResponseAmino): _155.QueryInterchainAccountResponse;
                        toAmino(message: _155.QueryInterchainAccountResponse): _155.QueryInterchainAccountResponseAmino;
                        fromAminoMsg(object: _155.QueryInterchainAccountResponseAminoMsg): _155.QueryInterchainAccountResponse;
                        toAminoMsg(message: _155.QueryInterchainAccountResponse): _155.QueryInterchainAccountResponseAminoMsg;
                        fromProtoMsg(message: _155.QueryInterchainAccountResponseProtoMsg): _155.QueryInterchainAccountResponse;
                        toProto(message: _155.QueryInterchainAccountResponse): Uint8Array;
                        toProtoMsg(message: _155.QueryInterchainAccountResponse): _155.QueryInterchainAccountResponseProtoMsg;
                    };
                    QueryParamsRequest: {
                        typeUrl: string;
                        encode(_: _155.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.QueryParamsRequest;
                        fromPartial(_: Partial<_155.QueryParamsRequest>): _155.QueryParamsRequest;
                        fromAmino(_: _155.QueryParamsRequestAmino): _155.QueryParamsRequest;
                        toAmino(_: _155.QueryParamsRequest): _155.QueryParamsRequestAmino;
                        fromAminoMsg(object: _155.QueryParamsRequestAminoMsg): _155.QueryParamsRequest;
                        toAminoMsg(message: _155.QueryParamsRequest): _155.QueryParamsRequestAminoMsg;
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
                        toAminoMsg(message: _155.QueryParamsResponse): _155.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _155.QueryParamsResponseProtoMsg): _155.QueryParamsResponse;
                        toProto(message: _155.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _155.QueryParamsResponse): _155.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        typeUrl: string;
                        encode(message: _154.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.Params;
                        fromPartial(object: Partial<_154.Params>): _154.Params;
                        fromAmino(object: _154.ParamsAmino): _154.Params;
                        toAmino(message: _154.Params): _154.ParamsAmino;
                        fromAminoMsg(object: _154.ParamsAminoMsg): _154.Params;
                        toAminoMsg(message: _154.Params): _154.ParamsAminoMsg;
                        fromProtoMsg(message: _154.ParamsProtoMsg): _154.Params;
                        toProto(message: _154.Params): Uint8Array;
                        toProtoMsg(message: _154.Params): _154.ParamsProtoMsg;
                    };
                };
            }
            namespace genesis {
                const v1: {
                    GenesisState: {
                        typeUrl: string;
                        encode(message: _157.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _157.GenesisState;
                        fromPartial(object: Partial<_157.GenesisState>): _157.GenesisState;
                        fromAmino(object: _157.GenesisStateAmino): _157.GenesisState;
                        toAmino(message: _157.GenesisState): _157.GenesisStateAmino;
                        fromAminoMsg(object: _157.GenesisStateAminoMsg): _157.GenesisState;
                        toAminoMsg(message: _157.GenesisState): _157.GenesisStateAminoMsg;
                        fromProtoMsg(message: _157.GenesisStateProtoMsg): _157.GenesisState;
                        toProto(message: _157.GenesisState): Uint8Array;
                        toProtoMsg(message: _157.GenesisState): _157.GenesisStateProtoMsg;
                    };
                    ControllerGenesisState: {
                        typeUrl: string;
                        encode(message: _157.ControllerGenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _157.ControllerGenesisState;
                        fromPartial(object: Partial<_157.ControllerGenesisState>): _157.ControllerGenesisState;
                        fromAmino(object: _157.ControllerGenesisStateAmino): _157.ControllerGenesisState;
                        toAmino(message: _157.ControllerGenesisState): _157.ControllerGenesisStateAmino;
                        fromAminoMsg(object: _157.ControllerGenesisStateAminoMsg): _157.ControllerGenesisState;
                        toAminoMsg(message: _157.ControllerGenesisState): _157.ControllerGenesisStateAminoMsg;
                        fromProtoMsg(message: _157.ControllerGenesisStateProtoMsg): _157.ControllerGenesisState;
                        toProto(message: _157.ControllerGenesisState): Uint8Array;
                        toProtoMsg(message: _157.ControllerGenesisState): _157.ControllerGenesisStateProtoMsg;
                    };
                    HostGenesisState: {
                        typeUrl: string;
                        encode(message: _157.HostGenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _157.HostGenesisState;
                        fromPartial(object: Partial<_157.HostGenesisState>): _157.HostGenesisState;
                        fromAmino(object: _157.HostGenesisStateAmino): _157.HostGenesisState;
                        toAmino(message: _157.HostGenesisState): _157.HostGenesisStateAmino;
                        fromAminoMsg(object: _157.HostGenesisStateAminoMsg): _157.HostGenesisState;
                        toAminoMsg(message: _157.HostGenesisState): _157.HostGenesisStateAminoMsg;
                        fromProtoMsg(message: _157.HostGenesisStateProtoMsg): _157.HostGenesisState;
                        toProto(message: _157.HostGenesisState): Uint8Array;
                        toProtoMsg(message: _157.HostGenesisState): _157.HostGenesisStateProtoMsg;
                    };
                    ActiveChannel: {
                        typeUrl: string;
                        encode(message: _157.ActiveChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _157.ActiveChannel;
                        fromPartial(object: Partial<_157.ActiveChannel>): _157.ActiveChannel;
                        fromAmino(object: _157.ActiveChannelAmino): _157.ActiveChannel;
                        toAmino(message: _157.ActiveChannel): _157.ActiveChannelAmino;
                        fromAminoMsg(object: _157.ActiveChannelAminoMsg): _157.ActiveChannel;
                        toAminoMsg(message: _157.ActiveChannel): _157.ActiveChannelAminoMsg;
                        fromProtoMsg(message: _157.ActiveChannelProtoMsg): _157.ActiveChannel;
                        toProto(message: _157.ActiveChannel): Uint8Array;
                        toProtoMsg(message: _157.ActiveChannel): _157.ActiveChannelProtoMsg;
                    };
                    RegisteredInterchainAccount: {
                        typeUrl: string;
                        encode(message: _157.RegisteredInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _157.RegisteredInterchainAccount;
                        fromPartial(object: Partial<_157.RegisteredInterchainAccount>): _157.RegisteredInterchainAccount;
                        fromAmino(object: _157.RegisteredInterchainAccountAmino): _157.RegisteredInterchainAccount;
                        toAmino(message: _157.RegisteredInterchainAccount): _157.RegisteredInterchainAccountAmino;
                        fromAminoMsg(object: _157.RegisteredInterchainAccountAminoMsg): _157.RegisteredInterchainAccount;
                        toAminoMsg(message: _157.RegisteredInterchainAccount): _157.RegisteredInterchainAccountAminoMsg;
                        fromProtoMsg(message: _157.RegisteredInterchainAccountProtoMsg): _157.RegisteredInterchainAccount;
                        toProto(message: _157.RegisteredInterchainAccount): Uint8Array;
                        toProtoMsg(message: _157.RegisteredInterchainAccount): _157.RegisteredInterchainAccountProtoMsg;
                    };
                };
            }
            namespace host {
                const v1: {
                    MsgClientImpl: typeof _380.MsgClientImpl;
                    QueryClientImpl: typeof _372.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        params(request?: _159.QueryParamsRequest): Promise<_159.QueryParamsResponse>;
                    };
                    registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            updateParams(value: _160.MsgUpdateParams): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            moduleQuerySafe(value: _160.MsgModuleQuerySafe): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            updateParams(value: _160.MsgUpdateParams): {
                                typeUrl: string;
                                value: _160.MsgUpdateParams;
                            };
                            moduleQuerySafe(value: _160.MsgModuleQuerySafe): {
                                typeUrl: string;
                                value: _160.MsgModuleQuerySafe;
                            };
                        };
                        fromPartial: {
                            updateParams(value: _160.MsgUpdateParams): {
                                typeUrl: string;
                                value: _160.MsgUpdateParams;
                            };
                            moduleQuerySafe(value: _160.MsgModuleQuerySafe): {
                                typeUrl: string;
                                value: _160.MsgModuleQuerySafe;
                            };
                        };
                    };
                    AminoConverter: {
                        "/ibc.applications.interchain_accounts.host.v1.MsgUpdateParams": {
                            aminoType: string;
                            toAmino: (message: _160.MsgUpdateParams) => _160.MsgUpdateParamsAmino;
                            fromAmino: (object: _160.MsgUpdateParamsAmino) => _160.MsgUpdateParams;
                        };
                        "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafe": {
                            aminoType: string;
                            toAmino: (message: _160.MsgModuleQuerySafe) => _160.MsgModuleQuerySafeAmino;
                            fromAmino: (object: _160.MsgModuleQuerySafeAmino) => _160.MsgModuleQuerySafe;
                        };
                    };
                    MsgUpdateParams: {
                        typeUrl: string;
                        encode(message: _160.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgUpdateParams;
                        fromPartial(object: Partial<_160.MsgUpdateParams>): _160.MsgUpdateParams;
                        fromAmino(object: _160.MsgUpdateParamsAmino): _160.MsgUpdateParams;
                        toAmino(message: _160.MsgUpdateParams): _160.MsgUpdateParamsAmino;
                        fromAminoMsg(object: _160.MsgUpdateParamsAminoMsg): _160.MsgUpdateParams;
                        toAminoMsg(message: _160.MsgUpdateParams): _160.MsgUpdateParamsAminoMsg;
                        fromProtoMsg(message: _160.MsgUpdateParamsProtoMsg): _160.MsgUpdateParams;
                        toProto(message: _160.MsgUpdateParams): Uint8Array;
                        toProtoMsg(message: _160.MsgUpdateParams): _160.MsgUpdateParamsProtoMsg;
                    };
                    MsgUpdateParamsResponse: {
                        typeUrl: string;
                        encode(_: _160.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgUpdateParamsResponse;
                        fromPartial(_: Partial<_160.MsgUpdateParamsResponse>): _160.MsgUpdateParamsResponse;
                        fromAmino(_: _160.MsgUpdateParamsResponseAmino): _160.MsgUpdateParamsResponse;
                        toAmino(_: _160.MsgUpdateParamsResponse): _160.MsgUpdateParamsResponseAmino;
                        fromAminoMsg(object: _160.MsgUpdateParamsResponseAminoMsg): _160.MsgUpdateParamsResponse;
                        toAminoMsg(message: _160.MsgUpdateParamsResponse): _160.MsgUpdateParamsResponseAminoMsg;
                        fromProtoMsg(message: _160.MsgUpdateParamsResponseProtoMsg): _160.MsgUpdateParamsResponse;
                        toProto(message: _160.MsgUpdateParamsResponse): Uint8Array;
                        toProtoMsg(message: _160.MsgUpdateParamsResponse): _160.MsgUpdateParamsResponseProtoMsg;
                    };
                    MsgModuleQuerySafe: {
                        typeUrl: string;
                        encode(message: _160.MsgModuleQuerySafe, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgModuleQuerySafe;
                        fromPartial(object: Partial<_160.MsgModuleQuerySafe>): _160.MsgModuleQuerySafe;
                        fromAmino(object: _160.MsgModuleQuerySafeAmino): _160.MsgModuleQuerySafe;
                        toAmino(message: _160.MsgModuleQuerySafe): _160.MsgModuleQuerySafeAmino;
                        fromAminoMsg(object: _160.MsgModuleQuerySafeAminoMsg): _160.MsgModuleQuerySafe;
                        toAminoMsg(message: _160.MsgModuleQuerySafe): _160.MsgModuleQuerySafeAminoMsg;
                        fromProtoMsg(message: _160.MsgModuleQuerySafeProtoMsg): _160.MsgModuleQuerySafe;
                        toProto(message: _160.MsgModuleQuerySafe): Uint8Array;
                        toProtoMsg(message: _160.MsgModuleQuerySafe): _160.MsgModuleQuerySafeProtoMsg;
                    };
                    MsgModuleQuerySafeResponse: {
                        typeUrl: string;
                        encode(message: _160.MsgModuleQuerySafeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgModuleQuerySafeResponse;
                        fromPartial(object: Partial<_160.MsgModuleQuerySafeResponse>): _160.MsgModuleQuerySafeResponse;
                        fromAmino(object: _160.MsgModuleQuerySafeResponseAmino): _160.MsgModuleQuerySafeResponse;
                        toAmino(message: _160.MsgModuleQuerySafeResponse): _160.MsgModuleQuerySafeResponseAmino;
                        fromAminoMsg(object: _160.MsgModuleQuerySafeResponseAminoMsg): _160.MsgModuleQuerySafeResponse;
                        toAminoMsg(message: _160.MsgModuleQuerySafeResponse): _160.MsgModuleQuerySafeResponseAminoMsg;
                        fromProtoMsg(message: _160.MsgModuleQuerySafeResponseProtoMsg): _160.MsgModuleQuerySafeResponse;
                        toProto(message: _160.MsgModuleQuerySafeResponse): Uint8Array;
                        toProtoMsg(message: _160.MsgModuleQuerySafeResponse): _160.MsgModuleQuerySafeResponseProtoMsg;
                    };
                    QueryParamsRequest: {
                        typeUrl: string;
                        encode(_: _159.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryParamsRequest;
                        fromPartial(_: Partial<_159.QueryParamsRequest>): _159.QueryParamsRequest;
                        fromAmino(_: _159.QueryParamsRequestAmino): _159.QueryParamsRequest;
                        toAmino(_: _159.QueryParamsRequest): _159.QueryParamsRequestAmino;
                        fromAminoMsg(object: _159.QueryParamsRequestAminoMsg): _159.QueryParamsRequest;
                        toAminoMsg(message: _159.QueryParamsRequest): _159.QueryParamsRequestAminoMsg;
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
                        toAminoMsg(message: _159.QueryParamsResponse): _159.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _159.QueryParamsResponseProtoMsg): _159.QueryParamsResponse;
                        toProto(message: _159.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _159.QueryParamsResponse): _159.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        typeUrl: string;
                        encode(message: _158.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.Params;
                        fromPartial(object: Partial<_158.Params>): _158.Params;
                        fromAmino(object: _158.ParamsAmino): _158.Params;
                        toAmino(message: _158.Params): _158.ParamsAmino;
                        fromAminoMsg(object: _158.ParamsAminoMsg): _158.Params;
                        toAminoMsg(message: _158.Params): _158.ParamsAminoMsg;
                        fromProtoMsg(message: _158.ParamsProtoMsg): _158.Params;
                        toProto(message: _158.Params): Uint8Array;
                        toProtoMsg(message: _158.Params): _158.ParamsProtoMsg;
                    };
                    QueryRequest: {
                        typeUrl: string;
                        encode(message: _158.QueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryRequest;
                        fromPartial(object: Partial<_158.QueryRequest>): _158.QueryRequest;
                        fromAmino(object: _158.QueryRequestAmino): _158.QueryRequest;
                        toAmino(message: _158.QueryRequest): _158.QueryRequestAmino;
                        fromAminoMsg(object: _158.QueryRequestAminoMsg): _158.QueryRequest;
                        toAminoMsg(message: _158.QueryRequest): _158.QueryRequestAminoMsg;
                        fromProtoMsg(message: _158.QueryRequestProtoMsg): _158.QueryRequest;
                        toProto(message: _158.QueryRequest): Uint8Array;
                        toProtoMsg(message: _158.QueryRequest): _158.QueryRequestProtoMsg;
                    };
                };
            }
            const v1: {
                typeFromJSON(object: any): _163.Type;
                typeToJSON(object: _163.Type): string;
                Type: typeof _163.Type;
                TypeSDKType: typeof _163.Type;
                TypeAmino: typeof _163.Type;
                InterchainAccountPacketData: {
                    typeUrl: string;
                    encode(message: _163.InterchainAccountPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.InterchainAccountPacketData;
                    fromPartial(object: Partial<_163.InterchainAccountPacketData>): _163.InterchainAccountPacketData;
                    fromAmino(object: _163.InterchainAccountPacketDataAmino): _163.InterchainAccountPacketData;
                    toAmino(message: _163.InterchainAccountPacketData): _163.InterchainAccountPacketDataAmino;
                    fromAminoMsg(object: _163.InterchainAccountPacketDataAminoMsg): _163.InterchainAccountPacketData;
                    toAminoMsg(message: _163.InterchainAccountPacketData): _163.InterchainAccountPacketDataAminoMsg;
                    fromProtoMsg(message: _163.InterchainAccountPacketDataProtoMsg): _163.InterchainAccountPacketData;
                    toProto(message: _163.InterchainAccountPacketData): Uint8Array;
                    toProtoMsg(message: _163.InterchainAccountPacketData): _163.InterchainAccountPacketDataProtoMsg;
                };
                CosmosTx: {
                    typeUrl: string;
                    encode(message: _163.CosmosTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.CosmosTx;
                    fromPartial(object: Partial<_163.CosmosTx>): _163.CosmosTx;
                    fromAmino(object: _163.CosmosTxAmino): _163.CosmosTx;
                    toAmino(message: _163.CosmosTx): _163.CosmosTxAmino;
                    fromAminoMsg(object: _163.CosmosTxAminoMsg): _163.CosmosTx;
                    toAminoMsg(message: _163.CosmosTx): _163.CosmosTxAminoMsg;
                    fromProtoMsg(message: _163.CosmosTxProtoMsg): _163.CosmosTx;
                    toProto(message: _163.CosmosTx): Uint8Array;
                    toProtoMsg(message: _163.CosmosTx): _163.CosmosTxProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _162.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.Metadata;
                    fromPartial(object: Partial<_162.Metadata>): _162.Metadata;
                    fromAmino(object: _162.MetadataAmino): _162.Metadata;
                    toAmino(message: _162.Metadata): _162.MetadataAmino;
                    fromAminoMsg(object: _162.MetadataAminoMsg): _162.Metadata;
                    toAminoMsg(message: _162.Metadata): _162.MetadataAminoMsg;
                    fromProtoMsg(message: _162.MetadataProtoMsg): _162.Metadata;
                    toProto(message: _162.Metadata): Uint8Array;
                    toProtoMsg(message: _162.Metadata): _162.MetadataProtoMsg;
                };
                InterchainAccount: {
                    typeUrl: string;
                    encode(message: _161.InterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.InterchainAccount;
                    fromPartial(object: Partial<_161.InterchainAccount>): _161.InterchainAccount;
                    fromAmino(object: _161.InterchainAccountAmino): _161.InterchainAccount;
                    toAmino(message: _161.InterchainAccount): _161.InterchainAccountAmino;
                    fromAminoMsg(object: _161.InterchainAccountAminoMsg): _161.InterchainAccount;
                    toAminoMsg(message: _161.InterchainAccount): _161.InterchainAccountAminoMsg;
                    fromProtoMsg(message: _161.InterchainAccountProtoMsg): _161.InterchainAccount;
                    toProto(message: _161.InterchainAccount): Uint8Array;
                    toProtoMsg(message: _161.InterchainAccount): _161.InterchainAccountProtoMsg;
                };
            };
        }
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _381.MsgClientImpl;
                QueryClientImpl: typeof _373.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTraces(request?: _166.QueryDenomTracesRequest): Promise<_166.QueryDenomTracesResponse>;
                    denomTrace(request: _166.QueryDenomTraceRequest): Promise<_166.QueryDenomTraceResponse>;
                    params(request?: _166.QueryParamsRequest): Promise<_166.QueryParamsResponse>;
                    denomHash(request: _166.QueryDenomHashRequest): Promise<_166.QueryDenomHashResponse>;
                    escrowAddress(request: _166.QueryEscrowAddressRequest): Promise<_166.QueryEscrowAddressResponse>;
                    totalEscrowForDenom(request: _166.QueryTotalEscrowForDenomRequest): Promise<_166.QueryTotalEscrowForDenomResponse>;
                };
                registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _168.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateParams(value: _168.MsgUpdateParams): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _168.MsgTransfer): {
                            typeUrl: string;
                            value: _168.MsgTransfer;
                        };
                        updateParams(value: _168.MsgUpdateParams): {
                            typeUrl: string;
                            value: _168.MsgUpdateParams;
                        };
                    };
                    fromPartial: {
                        transfer(value: _168.MsgTransfer): {
                            typeUrl: string;
                            value: _168.MsgTransfer;
                        };
                        updateParams(value: _168.MsgUpdateParams): {
                            typeUrl: string;
                            value: _168.MsgUpdateParams;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _168.MsgTransfer) => _168.MsgTransferAmino;
                        fromAmino: (object: _168.MsgTransferAmino) => _168.MsgTransfer;
                    };
                    "/ibc.applications.transfer.v1.MsgUpdateParams": {
                        aminoType: string;
                        toAmino: (message: _168.MsgUpdateParams) => _168.MsgUpdateParamsAmino;
                        fromAmino: (object: _168.MsgUpdateParamsAmino) => _168.MsgUpdateParams;
                    };
                };
                MsgTransfer: {
                    typeUrl: string;
                    encode(message: _168.MsgTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.MsgTransfer;
                    fromPartial(object: Partial<_168.MsgTransfer>): _168.MsgTransfer;
                    fromAmino(object: _168.MsgTransferAmino): _168.MsgTransfer;
                    toAmino(message: _168.MsgTransfer): _168.MsgTransferAmino;
                    fromAminoMsg(object: _168.MsgTransferAminoMsg): _168.MsgTransfer;
                    toAminoMsg(message: _168.MsgTransfer): _168.MsgTransferAminoMsg;
                    fromProtoMsg(message: _168.MsgTransferProtoMsg): _168.MsgTransfer;
                    toProto(message: _168.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _168.MsgTransfer): _168.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    typeUrl: string;
                    encode(message: _168.MsgTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.MsgTransferResponse;
                    fromPartial(object: Partial<_168.MsgTransferResponse>): _168.MsgTransferResponse;
                    fromAmino(object: _168.MsgTransferResponseAmino): _168.MsgTransferResponse;
                    toAmino(message: _168.MsgTransferResponse): _168.MsgTransferResponseAmino;
                    fromAminoMsg(object: _168.MsgTransferResponseAminoMsg): _168.MsgTransferResponse;
                    toAminoMsg(message: _168.MsgTransferResponse): _168.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _168.MsgTransferResponseProtoMsg): _168.MsgTransferResponse;
                    toProto(message: _168.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _168.MsgTransferResponse): _168.MsgTransferResponseProtoMsg;
                };
                MsgUpdateParams: {
                    typeUrl: string;
                    encode(message: _168.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.MsgUpdateParams;
                    fromPartial(object: Partial<_168.MsgUpdateParams>): _168.MsgUpdateParams;
                    fromAmino(object: _168.MsgUpdateParamsAmino): _168.MsgUpdateParams;
                    toAmino(message: _168.MsgUpdateParams): _168.MsgUpdateParamsAmino;
                    fromAminoMsg(object: _168.MsgUpdateParamsAminoMsg): _168.MsgUpdateParams;
                    toAminoMsg(message: _168.MsgUpdateParams): _168.MsgUpdateParamsAminoMsg;
                    fromProtoMsg(message: _168.MsgUpdateParamsProtoMsg): _168.MsgUpdateParams;
                    toProto(message: _168.MsgUpdateParams): Uint8Array;
                    toProtoMsg(message: _168.MsgUpdateParams): _168.MsgUpdateParamsProtoMsg;
                };
                MsgUpdateParamsResponse: {
                    typeUrl: string;
                    encode(_: _168.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.MsgUpdateParamsResponse;
                    fromPartial(_: Partial<_168.MsgUpdateParamsResponse>): _168.MsgUpdateParamsResponse;
                    fromAmino(_: _168.MsgUpdateParamsResponseAmino): _168.MsgUpdateParamsResponse;
                    toAmino(_: _168.MsgUpdateParamsResponse): _168.MsgUpdateParamsResponseAmino;
                    fromAminoMsg(object: _168.MsgUpdateParamsResponseAminoMsg): _168.MsgUpdateParamsResponse;
                    toAminoMsg(message: _168.MsgUpdateParamsResponse): _168.MsgUpdateParamsResponseAminoMsg;
                    fromProtoMsg(message: _168.MsgUpdateParamsResponseProtoMsg): _168.MsgUpdateParamsResponse;
                    toProto(message: _168.MsgUpdateParamsResponse): Uint8Array;
                    toProtoMsg(message: _168.MsgUpdateParamsResponse): _168.MsgUpdateParamsResponseProtoMsg;
                };
                DenomTrace: {
                    typeUrl: string;
                    encode(message: _167.DenomTrace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.DenomTrace;
                    fromPartial(object: Partial<_167.DenomTrace>): _167.DenomTrace;
                    fromAmino(object: _167.DenomTraceAmino): _167.DenomTrace;
                    toAmino(message: _167.DenomTrace): _167.DenomTraceAmino;
                    fromAminoMsg(object: _167.DenomTraceAminoMsg): _167.DenomTrace;
                    toAminoMsg(message: _167.DenomTrace): _167.DenomTraceAminoMsg;
                    fromProtoMsg(message: _167.DenomTraceProtoMsg): _167.DenomTrace;
                    toProto(message: _167.DenomTrace): Uint8Array;
                    toProtoMsg(message: _167.DenomTrace): _167.DenomTraceProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _167.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.Params;
                    fromPartial(object: Partial<_167.Params>): _167.Params;
                    fromAmino(object: _167.ParamsAmino): _167.Params;
                    toAmino(message: _167.Params): _167.ParamsAmino;
                    fromAminoMsg(object: _167.ParamsAminoMsg): _167.Params;
                    toAminoMsg(message: _167.Params): _167.ParamsAminoMsg;
                    fromProtoMsg(message: _167.ParamsProtoMsg): _167.Params;
                    toProto(message: _167.Params): Uint8Array;
                    toProtoMsg(message: _167.Params): _167.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    encode(message: _166.QueryDenomTraceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryDenomTraceRequest;
                    fromPartial(object: Partial<_166.QueryDenomTraceRequest>): _166.QueryDenomTraceRequest;
                    fromAmino(object: _166.QueryDenomTraceRequestAmino): _166.QueryDenomTraceRequest;
                    toAmino(message: _166.QueryDenomTraceRequest): _166.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _166.QueryDenomTraceRequestAminoMsg): _166.QueryDenomTraceRequest;
                    toAminoMsg(message: _166.QueryDenomTraceRequest): _166.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _166.QueryDenomTraceRequestProtoMsg): _166.QueryDenomTraceRequest;
                    toProto(message: _166.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _166.QueryDenomTraceRequest): _166.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    encode(message: _166.QueryDenomTraceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryDenomTraceResponse;
                    fromPartial(object: Partial<_166.QueryDenomTraceResponse>): _166.QueryDenomTraceResponse;
                    fromAmino(object: _166.QueryDenomTraceResponseAmino): _166.QueryDenomTraceResponse;
                    toAmino(message: _166.QueryDenomTraceResponse): _166.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _166.QueryDenomTraceResponseAminoMsg): _166.QueryDenomTraceResponse;
                    toAminoMsg(message: _166.QueryDenomTraceResponse): _166.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _166.QueryDenomTraceResponseProtoMsg): _166.QueryDenomTraceResponse;
                    toProto(message: _166.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _166.QueryDenomTraceResponse): _166.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    encode(message: _166.QueryDenomTracesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryDenomTracesRequest;
                    fromPartial(object: Partial<_166.QueryDenomTracesRequest>): _166.QueryDenomTracesRequest;
                    fromAmino(object: _166.QueryDenomTracesRequestAmino): _166.QueryDenomTracesRequest;
                    toAmino(message: _166.QueryDenomTracesRequest): _166.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _166.QueryDenomTracesRequestAminoMsg): _166.QueryDenomTracesRequest;
                    toAminoMsg(message: _166.QueryDenomTracesRequest): _166.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _166.QueryDenomTracesRequestProtoMsg): _166.QueryDenomTracesRequest;
                    toProto(message: _166.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _166.QueryDenomTracesRequest): _166.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    encode(message: _166.QueryDenomTracesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryDenomTracesResponse;
                    fromPartial(object: Partial<_166.QueryDenomTracesResponse>): _166.QueryDenomTracesResponse;
                    fromAmino(object: _166.QueryDenomTracesResponseAmino): _166.QueryDenomTracesResponse;
                    toAmino(message: _166.QueryDenomTracesResponse): _166.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _166.QueryDenomTracesResponseAminoMsg): _166.QueryDenomTracesResponse;
                    toAminoMsg(message: _166.QueryDenomTracesResponse): _166.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _166.QueryDenomTracesResponseProtoMsg): _166.QueryDenomTracesResponse;
                    toProto(message: _166.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _166.QueryDenomTracesResponse): _166.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    encode(_: _166.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryParamsRequest;
                    fromPartial(_: Partial<_166.QueryParamsRequest>): _166.QueryParamsRequest;
                    fromAmino(_: _166.QueryParamsRequestAmino): _166.QueryParamsRequest;
                    toAmino(_: _166.QueryParamsRequest): _166.QueryParamsRequestAmino;
                    fromAminoMsg(object: _166.QueryParamsRequestAminoMsg): _166.QueryParamsRequest;
                    toAminoMsg(message: _166.QueryParamsRequest): _166.QueryParamsRequestAminoMsg;
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
                    toAminoMsg(message: _166.QueryParamsResponse): _166.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _166.QueryParamsResponseProtoMsg): _166.QueryParamsResponse;
                    toProto(message: _166.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _166.QueryParamsResponse): _166.QueryParamsResponseProtoMsg;
                };
                QueryDenomHashRequest: {
                    typeUrl: string;
                    encode(message: _166.QueryDenomHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryDenomHashRequest;
                    fromPartial(object: Partial<_166.QueryDenomHashRequest>): _166.QueryDenomHashRequest;
                    fromAmino(object: _166.QueryDenomHashRequestAmino): _166.QueryDenomHashRequest;
                    toAmino(message: _166.QueryDenomHashRequest): _166.QueryDenomHashRequestAmino;
                    fromAminoMsg(object: _166.QueryDenomHashRequestAminoMsg): _166.QueryDenomHashRequest;
                    toAminoMsg(message: _166.QueryDenomHashRequest): _166.QueryDenomHashRequestAminoMsg;
                    fromProtoMsg(message: _166.QueryDenomHashRequestProtoMsg): _166.QueryDenomHashRequest;
                    toProto(message: _166.QueryDenomHashRequest): Uint8Array;
                    toProtoMsg(message: _166.QueryDenomHashRequest): _166.QueryDenomHashRequestProtoMsg;
                };
                QueryDenomHashResponse: {
                    typeUrl: string;
                    encode(message: _166.QueryDenomHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryDenomHashResponse;
                    fromPartial(object: Partial<_166.QueryDenomHashResponse>): _166.QueryDenomHashResponse;
                    fromAmino(object: _166.QueryDenomHashResponseAmino): _166.QueryDenomHashResponse;
                    toAmino(message: _166.QueryDenomHashResponse): _166.QueryDenomHashResponseAmino;
                    fromAminoMsg(object: _166.QueryDenomHashResponseAminoMsg): _166.QueryDenomHashResponse;
                    toAminoMsg(message: _166.QueryDenomHashResponse): _166.QueryDenomHashResponseAminoMsg;
                    fromProtoMsg(message: _166.QueryDenomHashResponseProtoMsg): _166.QueryDenomHashResponse;
                    toProto(message: _166.QueryDenomHashResponse): Uint8Array;
                    toProtoMsg(message: _166.QueryDenomHashResponse): _166.QueryDenomHashResponseProtoMsg;
                };
                QueryEscrowAddressRequest: {
                    typeUrl: string;
                    encode(message: _166.QueryEscrowAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryEscrowAddressRequest;
                    fromPartial(object: Partial<_166.QueryEscrowAddressRequest>): _166.QueryEscrowAddressRequest;
                    fromAmino(object: _166.QueryEscrowAddressRequestAmino): _166.QueryEscrowAddressRequest;
                    toAmino(message: _166.QueryEscrowAddressRequest): _166.QueryEscrowAddressRequestAmino;
                    fromAminoMsg(object: _166.QueryEscrowAddressRequestAminoMsg): _166.QueryEscrowAddressRequest;
                    toAminoMsg(message: _166.QueryEscrowAddressRequest): _166.QueryEscrowAddressRequestAminoMsg;
                    fromProtoMsg(message: _166.QueryEscrowAddressRequestProtoMsg): _166.QueryEscrowAddressRequest;
                    toProto(message: _166.QueryEscrowAddressRequest): Uint8Array;
                    toProtoMsg(message: _166.QueryEscrowAddressRequest): _166.QueryEscrowAddressRequestProtoMsg;
                };
                QueryEscrowAddressResponse: {
                    typeUrl: string;
                    encode(message: _166.QueryEscrowAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryEscrowAddressResponse;
                    fromPartial(object: Partial<_166.QueryEscrowAddressResponse>): _166.QueryEscrowAddressResponse;
                    fromAmino(object: _166.QueryEscrowAddressResponseAmino): _166.QueryEscrowAddressResponse;
                    toAmino(message: _166.QueryEscrowAddressResponse): _166.QueryEscrowAddressResponseAmino;
                    fromAminoMsg(object: _166.QueryEscrowAddressResponseAminoMsg): _166.QueryEscrowAddressResponse;
                    toAminoMsg(message: _166.QueryEscrowAddressResponse): _166.QueryEscrowAddressResponseAminoMsg;
                    fromProtoMsg(message: _166.QueryEscrowAddressResponseProtoMsg): _166.QueryEscrowAddressResponse;
                    toProto(message: _166.QueryEscrowAddressResponse): Uint8Array;
                    toProtoMsg(message: _166.QueryEscrowAddressResponse): _166.QueryEscrowAddressResponseProtoMsg;
                };
                QueryTotalEscrowForDenomRequest: {
                    typeUrl: string;
                    encode(message: _166.QueryTotalEscrowForDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryTotalEscrowForDenomRequest;
                    fromPartial(object: Partial<_166.QueryTotalEscrowForDenomRequest>): _166.QueryTotalEscrowForDenomRequest;
                    fromAmino(object: _166.QueryTotalEscrowForDenomRequestAmino): _166.QueryTotalEscrowForDenomRequest;
                    toAmino(message: _166.QueryTotalEscrowForDenomRequest): _166.QueryTotalEscrowForDenomRequestAmino;
                    fromAminoMsg(object: _166.QueryTotalEscrowForDenomRequestAminoMsg): _166.QueryTotalEscrowForDenomRequest;
                    toAminoMsg(message: _166.QueryTotalEscrowForDenomRequest): _166.QueryTotalEscrowForDenomRequestAminoMsg;
                    fromProtoMsg(message: _166.QueryTotalEscrowForDenomRequestProtoMsg): _166.QueryTotalEscrowForDenomRequest;
                    toProto(message: _166.QueryTotalEscrowForDenomRequest): Uint8Array;
                    toProtoMsg(message: _166.QueryTotalEscrowForDenomRequest): _166.QueryTotalEscrowForDenomRequestProtoMsg;
                };
                QueryTotalEscrowForDenomResponse: {
                    typeUrl: string;
                    encode(message: _166.QueryTotalEscrowForDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryTotalEscrowForDenomResponse;
                    fromPartial(object: Partial<_166.QueryTotalEscrowForDenomResponse>): _166.QueryTotalEscrowForDenomResponse;
                    fromAmino(object: _166.QueryTotalEscrowForDenomResponseAmino): _166.QueryTotalEscrowForDenomResponse;
                    toAmino(message: _166.QueryTotalEscrowForDenomResponse): _166.QueryTotalEscrowForDenomResponseAmino;
                    fromAminoMsg(object: _166.QueryTotalEscrowForDenomResponseAminoMsg): _166.QueryTotalEscrowForDenomResponse;
                    toAminoMsg(message: _166.QueryTotalEscrowForDenomResponse): _166.QueryTotalEscrowForDenomResponseAminoMsg;
                    fromProtoMsg(message: _166.QueryTotalEscrowForDenomResponseProtoMsg): _166.QueryTotalEscrowForDenomResponse;
                    toProto(message: _166.QueryTotalEscrowForDenomResponse): Uint8Array;
                    toProtoMsg(message: _166.QueryTotalEscrowForDenomResponse): _166.QueryTotalEscrowForDenomResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _165.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.GenesisState;
                    fromPartial(object: Partial<_165.GenesisState>): _165.GenesisState;
                    fromAmino(object: _165.GenesisStateAmino): _165.GenesisState;
                    toAmino(message: _165.GenesisState): _165.GenesisStateAmino;
                    fromAminoMsg(object: _165.GenesisStateAminoMsg): _165.GenesisState;
                    toAminoMsg(message: _165.GenesisState): _165.GenesisStateAminoMsg;
                    fromProtoMsg(message: _165.GenesisStateProtoMsg): _165.GenesisState;
                    toProto(message: _165.GenesisState): Uint8Array;
                    toProtoMsg(message: _165.GenesisState): _165.GenesisStateProtoMsg;
                };
                Allocation: {
                    typeUrl: string;
                    encode(message: _164.Allocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.Allocation;
                    fromPartial(object: Partial<_164.Allocation>): _164.Allocation;
                    fromAmino(object: _164.AllocationAmino): _164.Allocation;
                    toAmino(message: _164.Allocation): _164.AllocationAmino;
                    fromAminoMsg(object: _164.AllocationAminoMsg): _164.Allocation;
                    toAminoMsg(message: _164.Allocation): _164.AllocationAminoMsg;
                    fromProtoMsg(message: _164.AllocationProtoMsg): _164.Allocation;
                    toProto(message: _164.Allocation): Uint8Array;
                    toProtoMsg(message: _164.Allocation): _164.AllocationProtoMsg;
                };
                TransferAuthorization: {
                    typeUrl: string;
                    encode(message: _164.TransferAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.TransferAuthorization;
                    fromPartial(object: Partial<_164.TransferAuthorization>): _164.TransferAuthorization;
                    fromAmino(object: _164.TransferAuthorizationAmino): _164.TransferAuthorization;
                    toAmino(message: _164.TransferAuthorization): _164.TransferAuthorizationAmino;
                    fromAminoMsg(object: _164.TransferAuthorizationAminoMsg): _164.TransferAuthorization;
                    toAminoMsg(message: _164.TransferAuthorization): _164.TransferAuthorizationAminoMsg;
                    fromProtoMsg(message: _164.TransferAuthorizationProtoMsg): _164.TransferAuthorization;
                    toProto(message: _164.TransferAuthorization): Uint8Array;
                    toProtoMsg(message: _164.TransferAuthorization): _164.TransferAuthorizationProtoMsg;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    typeUrl: string;
                    encode(message: _169.FungibleTokenPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.FungibleTokenPacketData;
                    fromPartial(object: Partial<_169.FungibleTokenPacketData>): _169.FungibleTokenPacketData;
                    fromAmino(object: _169.FungibleTokenPacketDataAmino): _169.FungibleTokenPacketData;
                    toAmino(message: _169.FungibleTokenPacketData): _169.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _169.FungibleTokenPacketDataAminoMsg): _169.FungibleTokenPacketData;
                    toAminoMsg(message: _169.FungibleTokenPacketData): _169.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _169.FungibleTokenPacketDataProtoMsg): _169.FungibleTokenPacketData;
                    toProto(message: _169.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _169.FungibleTokenPacketData): _169.FungibleTokenPacketDataProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _382.MsgClientImpl;
                QueryClientImpl: typeof _374.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _172.QueryChannelRequest): Promise<_172.QueryChannelResponse>;
                    channels(request?: _172.QueryChannelsRequest): Promise<_172.QueryChannelsResponse>;
                    connectionChannels(request: _172.QueryConnectionChannelsRequest): Promise<_172.QueryConnectionChannelsResponse>;
                    channelClientState(request: _172.QueryChannelClientStateRequest): Promise<_172.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _172.QueryChannelConsensusStateRequest): Promise<_172.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _172.QueryPacketCommitmentRequest): Promise<_172.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _172.QueryPacketCommitmentsRequest): Promise<_172.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _172.QueryPacketReceiptRequest): Promise<_172.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _172.QueryPacketAcknowledgementRequest): Promise<_172.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _172.QueryPacketAcknowledgementsRequest): Promise<_172.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _172.QueryUnreceivedPacketsRequest): Promise<_172.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _172.QueryUnreceivedAcksRequest): Promise<_172.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _172.QueryNextSequenceReceiveRequest): Promise<_172.QueryNextSequenceReceiveResponse>;
                    nextSequenceSend(request: _172.QueryNextSequenceSendRequest): Promise<_172.QueryNextSequenceSendResponse>;
                    upgradeError(request: _172.QueryUpgradeErrorRequest): Promise<_172.QueryUpgradeErrorResponse>;
                    upgrade(request: _172.QueryUpgradeRequest): Promise<_172.QueryUpgradeResponse>;
                    channelParams(request?: _172.QueryChannelParamsRequest): Promise<_172.QueryChannelParamsResponse>;
                };
                registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _173.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _173.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _173.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _173.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _173.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _173.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _173.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _173.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _173.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _173.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelUpgradeInit(value: _173.MsgChannelUpgradeInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelUpgradeTry(value: _173.MsgChannelUpgradeTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelUpgradeAck(value: _173.MsgChannelUpgradeAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelUpgradeConfirm(value: _173.MsgChannelUpgradeConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelUpgradeOpen(value: _173.MsgChannelUpgradeOpen): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelUpgradeTimeout(value: _173.MsgChannelUpgradeTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelUpgradeCancel(value: _173.MsgChannelUpgradeCancel): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateChannelParams(value: _173.MsgUpdateParams): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        pruneAcknowledgements(value: _173.MsgPruneAcknowledgements): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _173.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _173.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _173.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _173.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _173.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _173.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _173.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _173.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _173.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _173.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _173.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _173.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _173.MsgRecvPacket): {
                            typeUrl: string;
                            value: _173.MsgRecvPacket;
                        };
                        timeout(value: _173.MsgTimeout): {
                            typeUrl: string;
                            value: _173.MsgTimeout;
                        };
                        timeoutOnClose(value: _173.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _173.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _173.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _173.MsgAcknowledgement;
                        };
                        channelUpgradeInit(value: _173.MsgChannelUpgradeInit): {
                            typeUrl: string;
                            value: _173.MsgChannelUpgradeInit;
                        };
                        channelUpgradeTry(value: _173.MsgChannelUpgradeTry): {
                            typeUrl: string;
                            value: _173.MsgChannelUpgradeTry;
                        };
                        channelUpgradeAck(value: _173.MsgChannelUpgradeAck): {
                            typeUrl: string;
                            value: _173.MsgChannelUpgradeAck;
                        };
                        channelUpgradeConfirm(value: _173.MsgChannelUpgradeConfirm): {
                            typeUrl: string;
                            value: _173.MsgChannelUpgradeConfirm;
                        };
                        channelUpgradeOpen(value: _173.MsgChannelUpgradeOpen): {
                            typeUrl: string;
                            value: _173.MsgChannelUpgradeOpen;
                        };
                        channelUpgradeTimeout(value: _173.MsgChannelUpgradeTimeout): {
                            typeUrl: string;
                            value: _173.MsgChannelUpgradeTimeout;
                        };
                        channelUpgradeCancel(value: _173.MsgChannelUpgradeCancel): {
                            typeUrl: string;
                            value: _173.MsgChannelUpgradeCancel;
                        };
                        updateChannelParams(value: _173.MsgUpdateParams): {
                            typeUrl: string;
                            value: _173.MsgUpdateParams;
                        };
                        pruneAcknowledgements(value: _173.MsgPruneAcknowledgements): {
                            typeUrl: string;
                            value: _173.MsgPruneAcknowledgements;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _173.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _173.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _173.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _173.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _173.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _173.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _173.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _173.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _173.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _173.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _173.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _173.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _173.MsgRecvPacket): {
                            typeUrl: string;
                            value: _173.MsgRecvPacket;
                        };
                        timeout(value: _173.MsgTimeout): {
                            typeUrl: string;
                            value: _173.MsgTimeout;
                        };
                        timeoutOnClose(value: _173.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _173.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _173.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _173.MsgAcknowledgement;
                        };
                        channelUpgradeInit(value: _173.MsgChannelUpgradeInit): {
                            typeUrl: string;
                            value: _173.MsgChannelUpgradeInit;
                        };
                        channelUpgradeTry(value: _173.MsgChannelUpgradeTry): {
                            typeUrl: string;
                            value: _173.MsgChannelUpgradeTry;
                        };
                        channelUpgradeAck(value: _173.MsgChannelUpgradeAck): {
                            typeUrl: string;
                            value: _173.MsgChannelUpgradeAck;
                        };
                        channelUpgradeConfirm(value: _173.MsgChannelUpgradeConfirm): {
                            typeUrl: string;
                            value: _173.MsgChannelUpgradeConfirm;
                        };
                        channelUpgradeOpen(value: _173.MsgChannelUpgradeOpen): {
                            typeUrl: string;
                            value: _173.MsgChannelUpgradeOpen;
                        };
                        channelUpgradeTimeout(value: _173.MsgChannelUpgradeTimeout): {
                            typeUrl: string;
                            value: _173.MsgChannelUpgradeTimeout;
                        };
                        channelUpgradeCancel(value: _173.MsgChannelUpgradeCancel): {
                            typeUrl: string;
                            value: _173.MsgChannelUpgradeCancel;
                        };
                        updateChannelParams(value: _173.MsgUpdateParams): {
                            typeUrl: string;
                            value: _173.MsgUpdateParams;
                        };
                        pruneAcknowledgements(value: _173.MsgPruneAcknowledgements): {
                            typeUrl: string;
                            value: _173.MsgPruneAcknowledgements;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _173.MsgChannelOpenInit) => _173.MsgChannelOpenInitAmino;
                        fromAmino: (object: _173.MsgChannelOpenInitAmino) => _173.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _173.MsgChannelOpenTry) => _173.MsgChannelOpenTryAmino;
                        fromAmino: (object: _173.MsgChannelOpenTryAmino) => _173.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _173.MsgChannelOpenAck) => _173.MsgChannelOpenAckAmino;
                        fromAmino: (object: _173.MsgChannelOpenAckAmino) => _173.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _173.MsgChannelOpenConfirm) => _173.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _173.MsgChannelOpenConfirmAmino) => _173.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _173.MsgChannelCloseInit) => _173.MsgChannelCloseInitAmino;
                        fromAmino: (object: _173.MsgChannelCloseInitAmino) => _173.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _173.MsgChannelCloseConfirm) => _173.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _173.MsgChannelCloseConfirmAmino) => _173.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _173.MsgRecvPacket) => _173.MsgRecvPacketAmino;
                        fromAmino: (object: _173.MsgRecvPacketAmino) => _173.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _173.MsgTimeout) => _173.MsgTimeoutAmino;
                        fromAmino: (object: _173.MsgTimeoutAmino) => _173.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _173.MsgTimeoutOnClose) => _173.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _173.MsgTimeoutOnCloseAmino) => _173.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _173.MsgAcknowledgement) => _173.MsgAcknowledgementAmino;
                        fromAmino: (object: _173.MsgAcknowledgementAmino) => _173.MsgAcknowledgement;
                    };
                    "/ibc.core.channel.v1.MsgChannelUpgradeInit": {
                        aminoType: string;
                        toAmino: (message: _173.MsgChannelUpgradeInit) => _173.MsgChannelUpgradeInitAmino;
                        fromAmino: (object: _173.MsgChannelUpgradeInitAmino) => _173.MsgChannelUpgradeInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelUpgradeTry": {
                        aminoType: string;
                        toAmino: (message: _173.MsgChannelUpgradeTry) => _173.MsgChannelUpgradeTryAmino;
                        fromAmino: (object: _173.MsgChannelUpgradeTryAmino) => _173.MsgChannelUpgradeTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelUpgradeAck": {
                        aminoType: string;
                        toAmino: (message: _173.MsgChannelUpgradeAck) => _173.MsgChannelUpgradeAckAmino;
                        fromAmino: (object: _173.MsgChannelUpgradeAckAmino) => _173.MsgChannelUpgradeAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelUpgradeConfirm": {
                        aminoType: string;
                        toAmino: (message: _173.MsgChannelUpgradeConfirm) => _173.MsgChannelUpgradeConfirmAmino;
                        fromAmino: (object: _173.MsgChannelUpgradeConfirmAmino) => _173.MsgChannelUpgradeConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelUpgradeOpen": {
                        aminoType: string;
                        toAmino: (message: _173.MsgChannelUpgradeOpen) => _173.MsgChannelUpgradeOpenAmino;
                        fromAmino: (object: _173.MsgChannelUpgradeOpenAmino) => _173.MsgChannelUpgradeOpen;
                    };
                    "/ibc.core.channel.v1.MsgChannelUpgradeTimeout": {
                        aminoType: string;
                        toAmino: (message: _173.MsgChannelUpgradeTimeout) => _173.MsgChannelUpgradeTimeoutAmino;
                        fromAmino: (object: _173.MsgChannelUpgradeTimeoutAmino) => _173.MsgChannelUpgradeTimeout;
                    };
                    "/ibc.core.channel.v1.MsgChannelUpgradeCancel": {
                        aminoType: string;
                        toAmino: (message: _173.MsgChannelUpgradeCancel) => _173.MsgChannelUpgradeCancelAmino;
                        fromAmino: (object: _173.MsgChannelUpgradeCancelAmino) => _173.MsgChannelUpgradeCancel;
                    };
                    "/ibc.core.channel.v1.MsgUpdateParams": {
                        aminoType: string;
                        toAmino: (message: _173.MsgUpdateParams) => _173.MsgUpdateParamsAmino;
                        fromAmino: (object: _173.MsgUpdateParamsAmino) => _173.MsgUpdateParams;
                    };
                    "/ibc.core.channel.v1.MsgPruneAcknowledgements": {
                        aminoType: string;
                        toAmino: (message: _173.MsgPruneAcknowledgements) => _173.MsgPruneAcknowledgementsAmino;
                        fromAmino: (object: _173.MsgPruneAcknowledgementsAmino) => _173.MsgPruneAcknowledgements;
                    };
                };
                Upgrade: {
                    typeUrl: string;
                    encode(message: _174.Upgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.Upgrade;
                    fromPartial(object: Partial<_174.Upgrade>): _174.Upgrade;
                    fromAmino(object: _174.UpgradeAmino): _174.Upgrade;
                    toAmino(message: _174.Upgrade): _174.UpgradeAmino;
                    fromAminoMsg(object: _174.UpgradeAminoMsg): _174.Upgrade;
                    toAminoMsg(message: _174.Upgrade): _174.UpgradeAminoMsg;
                    fromProtoMsg(message: _174.UpgradeProtoMsg): _174.Upgrade;
                    toProto(message: _174.Upgrade): Uint8Array;
                    toProtoMsg(message: _174.Upgrade): _174.UpgradeProtoMsg;
                };
                UpgradeFields: {
                    typeUrl: string;
                    encode(message: _174.UpgradeFields, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.UpgradeFields;
                    fromPartial(object: Partial<_174.UpgradeFields>): _174.UpgradeFields;
                    fromAmino(object: _174.UpgradeFieldsAmino): _174.UpgradeFields;
                    toAmino(message: _174.UpgradeFields): _174.UpgradeFieldsAmino;
                    fromAminoMsg(object: _174.UpgradeFieldsAminoMsg): _174.UpgradeFields;
                    toAminoMsg(message: _174.UpgradeFields): _174.UpgradeFieldsAminoMsg;
                    fromProtoMsg(message: _174.UpgradeFieldsProtoMsg): _174.UpgradeFields;
                    toProto(message: _174.UpgradeFields): Uint8Array;
                    toProtoMsg(message: _174.UpgradeFields): _174.UpgradeFieldsProtoMsg;
                };
                ErrorReceipt: {
                    typeUrl: string;
                    encode(message: _174.ErrorReceipt, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.ErrorReceipt;
                    fromPartial(object: Partial<_174.ErrorReceipt>): _174.ErrorReceipt;
                    fromAmino(object: _174.ErrorReceiptAmino): _174.ErrorReceipt;
                    toAmino(message: _174.ErrorReceipt): _174.ErrorReceiptAmino;
                    fromAminoMsg(object: _174.ErrorReceiptAminoMsg): _174.ErrorReceipt;
                    toAminoMsg(message: _174.ErrorReceipt): _174.ErrorReceiptAminoMsg;
                    fromProtoMsg(message: _174.ErrorReceiptProtoMsg): _174.ErrorReceipt;
                    toProto(message: _174.ErrorReceipt): Uint8Array;
                    toProtoMsg(message: _174.ErrorReceipt): _174.ErrorReceiptProtoMsg;
                };
                responseResultTypeFromJSON(object: any): _173.ResponseResultType;
                responseResultTypeToJSON(object: _173.ResponseResultType): string;
                ResponseResultType: typeof _173.ResponseResultType;
                ResponseResultTypeSDKType: typeof _173.ResponseResultType;
                ResponseResultTypeAmino: typeof _173.ResponseResultType;
                MsgChannelOpenInit: {
                    typeUrl: string;
                    encode(message: _173.MsgChannelOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MsgChannelOpenInit;
                    fromPartial(object: Partial<_173.MsgChannelOpenInit>): _173.MsgChannelOpenInit;
                    fromAmino(object: _173.MsgChannelOpenInitAmino): _173.MsgChannelOpenInit;
                    toAmino(message: _173.MsgChannelOpenInit): _173.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _173.MsgChannelOpenInitAminoMsg): _173.MsgChannelOpenInit;
                    toAminoMsg(message: _173.MsgChannelOpenInit): _173.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _173.MsgChannelOpenInitProtoMsg): _173.MsgChannelOpenInit;
                    toProto(message: _173.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _173.MsgChannelOpenInit): _173.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    typeUrl: string;
                    encode(message: _173.MsgChannelOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MsgChannelOpenInitResponse;
                    fromPartial(object: Partial<_173.MsgChannelOpenInitResponse>): _173.MsgChannelOpenInitResponse;
                    fromAmino(object: _173.MsgChannelOpenInitResponseAmino): _173.MsgChannelOpenInitResponse;
                    toAmino(message: _173.MsgChannelOpenInitResponse): _173.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _173.MsgChannelOpenInitResponseAminoMsg): _173.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _173.MsgChannelOpenInitResponse): _173.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _173.MsgChannelOpenInitResponseProtoMsg): _173.MsgChannelOpenInitResponse;
                    toProto(message: _173.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _173.MsgChannelOpenInitResponse): _173.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    typeUrl: string;
                    encode(message: _173.MsgChannelOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MsgChannelOpenTry;
                    fromPartial(object: Partial<_173.MsgChannelOpenTry>): _173.MsgChannelOpenTry;
                    fromAmino(object: _173.MsgChannelOpenTryAmino): _173.MsgChannelOpenTry;
                    toAmino(message: _173.MsgChannelOpenTry): _173.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _173.MsgChannelOpenTryAminoMsg): _173.MsgChannelOpenTry;
                    toAminoMsg(message: _173.MsgChannelOpenTry): _173.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _173.MsgChannelOpenTryProtoMsg): _173.MsgChannelOpenTry;
                    toProto(message: _173.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _173.MsgChannelOpenTry): _173.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    typeUrl: string;
                    encode(message: _173.MsgChannelOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MsgChannelOpenTryResponse;
                    fromPartial(object: Partial<_173.MsgChannelOpenTryResponse>): _173.MsgChannelOpenTryResponse;
                    fromAmino(object: _173.MsgChannelOpenTryResponseAmino): _173.MsgChannelOpenTryResponse;
                    toAmino(message: _173.MsgChannelOpenTryResponse): _173.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _173.MsgChannelOpenTryResponseAminoMsg): _173.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _173.MsgChannelOpenTryResponse): _173.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _173.MsgChannelOpenTryResponseProtoMsg): _173.MsgChannelOpenTryResponse;
                    toProto(message: _173.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _173.MsgChannelOpenTryResponse): _173.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    typeUrl: string;
                    encode(message: _173.MsgChannelOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MsgChannelOpenAck;
                    fromPartial(object: Partial<_173.MsgChannelOpenAck>): _173.MsgChannelOpenAck;
                    fromAmino(object: _173.MsgChannelOpenAckAmino): _173.MsgChannelOpenAck;
                    toAmino(message: _173.MsgChannelOpenAck): _173.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _173.MsgChannelOpenAckAminoMsg): _173.MsgChannelOpenAck;
                    toAminoMsg(message: _173.MsgChannelOpenAck): _173.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _173.MsgChannelOpenAckProtoMsg): _173.MsgChannelOpenAck;
                    toProto(message: _173.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _173.MsgChannelOpenAck): _173.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _173.MsgChannelOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MsgChannelOpenAckResponse;
                    fromPartial(_: Partial<_173.MsgChannelOpenAckResponse>): _173.MsgChannelOpenAckResponse;
                    fromAmino(_: _173.MsgChannelOpenAckResponseAmino): _173.MsgChannelOpenAckResponse;
                    toAmino(_: _173.MsgChannelOpenAckResponse): _173.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _173.MsgChannelOpenAckResponseAminoMsg): _173.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _173.MsgChannelOpenAckResponse): _173.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _173.MsgChannelOpenAckResponseProtoMsg): _173.MsgChannelOpenAckResponse;
                    toProto(message: _173.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _173.MsgChannelOpenAckResponse): _173.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    typeUrl: string;
                    encode(message: _173.MsgChannelOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MsgChannelOpenConfirm;
                    fromPartial(object: Partial<_173.MsgChannelOpenConfirm>): _173.MsgChannelOpenConfirm;
                    fromAmino(object: _173.MsgChannelOpenConfirmAmino): _173.MsgChannelOpenConfirm;
                    toAmino(message: _173.MsgChannelOpenConfirm): _173.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _173.MsgChannelOpenConfirmAminoMsg): _173.MsgChannelOpenConfirm;
                    toAminoMsg(message: _173.MsgChannelOpenConfirm): _173.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _173.MsgChannelOpenConfirmProtoMsg): _173.MsgChannelOpenConfirm;
                    toProto(message: _173.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _173.MsgChannelOpenConfirm): _173.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _173.MsgChannelOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MsgChannelOpenConfirmResponse;
                    fromPartial(_: Partial<_173.MsgChannelOpenConfirmResponse>): _173.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _173.MsgChannelOpenConfirmResponseAmino): _173.MsgChannelOpenConfirmResponse;
                    toAmino(_: _173.MsgChannelOpenConfirmResponse): _173.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _173.MsgChannelOpenConfirmResponseAminoMsg): _173.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _173.MsgChannelOpenConfirmResponse): _173.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _173.MsgChannelOpenConfirmResponseProtoMsg): _173.MsgChannelOpenConfirmResponse;
                    toProto(message: _173.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _173.MsgChannelOpenConfirmResponse): _173.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    typeUrl: string;
                    encode(message: _173.MsgChannelCloseInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MsgChannelCloseInit;
                    fromPartial(object: Partial<_173.MsgChannelCloseInit>): _173.MsgChannelCloseInit;
                    fromAmino(object: _173.MsgChannelCloseInitAmino): _173.MsgChannelCloseInit;
                    toAmino(message: _173.MsgChannelCloseInit): _173.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _173.MsgChannelCloseInitAminoMsg): _173.MsgChannelCloseInit;
                    toAminoMsg(message: _173.MsgChannelCloseInit): _173.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _173.MsgChannelCloseInitProtoMsg): _173.MsgChannelCloseInit;
                    toProto(message: _173.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _173.MsgChannelCloseInit): _173.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    typeUrl: string;
                    encode(_: _173.MsgChannelCloseInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MsgChannelCloseInitResponse;
                    fromPartial(_: Partial<_173.MsgChannelCloseInitResponse>): _173.MsgChannelCloseInitResponse;
                    fromAmino(_: _173.MsgChannelCloseInitResponseAmino): _173.MsgChannelCloseInitResponse;
                    toAmino(_: _173.MsgChannelCloseInitResponse): _173.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _173.MsgChannelCloseInitResponseAminoMsg): _173.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _173.MsgChannelCloseInitResponse): _173.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _173.MsgChannelCloseInitResponseProtoMsg): _173.MsgChannelCloseInitResponse;
                    toProto(message: _173.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _173.MsgChannelCloseInitResponse): _173.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    typeUrl: string;
                    encode(message: _173.MsgChannelCloseConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MsgChannelCloseConfirm;
                    fromPartial(object: Partial<_173.MsgChannelCloseConfirm>): _173.MsgChannelCloseConfirm;
                    fromAmino(object: _173.MsgChannelCloseConfirmAmino): _173.MsgChannelCloseConfirm;
                    toAmino(message: _173.MsgChannelCloseConfirm): _173.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _173.MsgChannelCloseConfirmAminoMsg): _173.MsgChannelCloseConfirm;
                    toAminoMsg(message: _173.MsgChannelCloseConfirm): _173.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _173.MsgChannelCloseConfirmProtoMsg): _173.MsgChannelCloseConfirm;
                    toProto(message: _173.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _173.MsgChannelCloseConfirm): _173.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    typeUrl: string;
                    encode(_: _173.MsgChannelCloseConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MsgChannelCloseConfirmResponse;
                    fromPartial(_: Partial<_173.MsgChannelCloseConfirmResponse>): _173.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _173.MsgChannelCloseConfirmResponseAmino): _173.MsgChannelCloseConfirmResponse;
                    toAmino(_: _173.MsgChannelCloseConfirmResponse): _173.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _173.MsgChannelCloseConfirmResponseAminoMsg): _173.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _173.MsgChannelCloseConfirmResponse): _173.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _173.MsgChannelCloseConfirmResponseProtoMsg): _173.MsgChannelCloseConfirmResponse;
                    toProto(message: _173.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _173.MsgChannelCloseConfirmResponse): _173.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    typeUrl: string;
                    encode(message: _173.MsgRecvPacket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MsgRecvPacket;
                    fromPartial(object: Partial<_173.MsgRecvPacket>): _173.MsgRecvPacket;
                    fromAmino(object: _173.MsgRecvPacketAmino): _173.MsgRecvPacket;
                    toAmino(message: _173.MsgRecvPacket): _173.MsgRecvPacketAmino;
                    fromAminoMsg(object: _173.MsgRecvPacketAminoMsg): _173.MsgRecvPacket;
                    toAminoMsg(message: _173.MsgRecvPacket): _173.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _173.MsgRecvPacketProtoMsg): _173.MsgRecvPacket;
                    toProto(message: _173.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _173.MsgRecvPacket): _173.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    typeUrl: string;
                    encode(message: _173.MsgRecvPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MsgRecvPacketResponse;
                    fromPartial(object: Partial<_173.MsgRecvPacketResponse>): _173.MsgRecvPacketResponse;
                    fromAmino(object: _173.MsgRecvPacketResponseAmino): _173.MsgRecvPacketResponse;
                    toAmino(message: _173.MsgRecvPacketResponse): _173.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _173.MsgRecvPacketResponseAminoMsg): _173.MsgRecvPacketResponse;
                    toAminoMsg(message: _173.MsgRecvPacketResponse): _173.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _173.MsgRecvPacketResponseProtoMsg): _173.MsgRecvPacketResponse;
                    toProto(message: _173.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _173.MsgRecvPacketResponse): _173.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    typeUrl: string;
                    encode(message: _173.MsgTimeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MsgTimeout;
                    fromPartial(object: Partial<_173.MsgTimeout>): _173.MsgTimeout;
                    fromAmino(object: _173.MsgTimeoutAmino): _173.MsgTimeout;
                    toAmino(message: _173.MsgTimeout): _173.MsgTimeoutAmino;
                    fromAminoMsg(object: _173.MsgTimeoutAminoMsg): _173.MsgTimeout;
                    toAminoMsg(message: _173.MsgTimeout): _173.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _173.MsgTimeoutProtoMsg): _173.MsgTimeout;
                    toProto(message: _173.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _173.MsgTimeout): _173.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    typeUrl: string;
                    encode(message: _173.MsgTimeoutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MsgTimeoutResponse;
                    fromPartial(object: Partial<_173.MsgTimeoutResponse>): _173.MsgTimeoutResponse;
                    fromAmino(object: _173.MsgTimeoutResponseAmino): _173.MsgTimeoutResponse;
                    toAmino(message: _173.MsgTimeoutResponse): _173.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _173.MsgTimeoutResponseAminoMsg): _173.MsgTimeoutResponse;
                    toAminoMsg(message: _173.MsgTimeoutResponse): _173.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _173.MsgTimeoutResponseProtoMsg): _173.MsgTimeoutResponse;
                    toProto(message: _173.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _173.MsgTimeoutResponse): _173.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    typeUrl: string;
                    encode(message: _173.MsgTimeoutOnClose, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MsgTimeoutOnClose;
                    fromPartial(object: Partial<_173.MsgTimeoutOnClose>): _173.MsgTimeoutOnClose;
                    fromAmino(object: _173.MsgTimeoutOnCloseAmino): _173.MsgTimeoutOnClose;
                    toAmino(message: _173.MsgTimeoutOnClose): _173.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _173.MsgTimeoutOnCloseAminoMsg): _173.MsgTimeoutOnClose;
                    toAminoMsg(message: _173.MsgTimeoutOnClose): _173.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _173.MsgTimeoutOnCloseProtoMsg): _173.MsgTimeoutOnClose;
                    toProto(message: _173.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _173.MsgTimeoutOnClose): _173.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    typeUrl: string;
                    encode(message: _173.MsgTimeoutOnCloseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MsgTimeoutOnCloseResponse;
                    fromPartial(object: Partial<_173.MsgTimeoutOnCloseResponse>): _173.MsgTimeoutOnCloseResponse;
                    fromAmino(object: _173.MsgTimeoutOnCloseResponseAmino): _173.MsgTimeoutOnCloseResponse;
                    toAmino(message: _173.MsgTimeoutOnCloseResponse): _173.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _173.MsgTimeoutOnCloseResponseAminoMsg): _173.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _173.MsgTimeoutOnCloseResponse): _173.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _173.MsgTimeoutOnCloseResponseProtoMsg): _173.MsgTimeoutOnCloseResponse;
                    toProto(message: _173.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _173.MsgTimeoutOnCloseResponse): _173.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    typeUrl: string;
                    encode(message: _173.MsgAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MsgAcknowledgement;
                    fromPartial(object: Partial<_173.MsgAcknowledgement>): _173.MsgAcknowledgement;
                    fromAmino(object: _173.MsgAcknowledgementAmino): _173.MsgAcknowledgement;
                    toAmino(message: _173.MsgAcknowledgement): _173.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _173.MsgAcknowledgementAminoMsg): _173.MsgAcknowledgement;
                    toAminoMsg(message: _173.MsgAcknowledgement): _173.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _173.MsgAcknowledgementProtoMsg): _173.MsgAcknowledgement;
                    toProto(message: _173.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _173.MsgAcknowledgement): _173.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _173.MsgAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MsgAcknowledgementResponse;
                    fromPartial(object: Partial<_173.MsgAcknowledgementResponse>): _173.MsgAcknowledgementResponse;
                    fromAmino(object: _173.MsgAcknowledgementResponseAmino): _173.MsgAcknowledgementResponse;
                    toAmino(message: _173.MsgAcknowledgementResponse): _173.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _173.MsgAcknowledgementResponseAminoMsg): _173.MsgAcknowledgementResponse;
                    toAminoMsg(message: _173.MsgAcknowledgementResponse): _173.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _173.MsgAcknowledgementResponseProtoMsg): _173.MsgAcknowledgementResponse;
                    toProto(message: _173.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _173.MsgAcknowledgementResponse): _173.MsgAcknowledgementResponseProtoMsg;
                };
                MsgChannelUpgradeInit: {
                    typeUrl: string;
                    encode(message: _173.MsgChannelUpgradeInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MsgChannelUpgradeInit;
                    fromPartial(object: Partial<_173.MsgChannelUpgradeInit>): _173.MsgChannelUpgradeInit;
                    fromAmino(object: _173.MsgChannelUpgradeInitAmino): _173.MsgChannelUpgradeInit;
                    toAmino(message: _173.MsgChannelUpgradeInit): _173.MsgChannelUpgradeInitAmino;
                    fromAminoMsg(object: _173.MsgChannelUpgradeInitAminoMsg): _173.MsgChannelUpgradeInit;
                    toAminoMsg(message: _173.MsgChannelUpgradeInit): _173.MsgChannelUpgradeInitAminoMsg;
                    fromProtoMsg(message: _173.MsgChannelUpgradeInitProtoMsg): _173.MsgChannelUpgradeInit;
                    toProto(message: _173.MsgChannelUpgradeInit): Uint8Array;
                    toProtoMsg(message: _173.MsgChannelUpgradeInit): _173.MsgChannelUpgradeInitProtoMsg;
                };
                MsgChannelUpgradeInitResponse: {
                    typeUrl: string;
                    encode(message: _173.MsgChannelUpgradeInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MsgChannelUpgradeInitResponse;
                    fromPartial(object: Partial<_173.MsgChannelUpgradeInitResponse>): _173.MsgChannelUpgradeInitResponse;
                    fromAmino(object: _173.MsgChannelUpgradeInitResponseAmino): _173.MsgChannelUpgradeInitResponse;
                    toAmino(message: _173.MsgChannelUpgradeInitResponse): _173.MsgChannelUpgradeInitResponseAmino;
                    fromAminoMsg(object: _173.MsgChannelUpgradeInitResponseAminoMsg): _173.MsgChannelUpgradeInitResponse;
                    toAminoMsg(message: _173.MsgChannelUpgradeInitResponse): _173.MsgChannelUpgradeInitResponseAminoMsg;
                    fromProtoMsg(message: _173.MsgChannelUpgradeInitResponseProtoMsg): _173.MsgChannelUpgradeInitResponse;
                    toProto(message: _173.MsgChannelUpgradeInitResponse): Uint8Array;
                    toProtoMsg(message: _173.MsgChannelUpgradeInitResponse): _173.MsgChannelUpgradeInitResponseProtoMsg;
                };
                MsgChannelUpgradeTry: {
                    typeUrl: string;
                    encode(message: _173.MsgChannelUpgradeTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MsgChannelUpgradeTry;
                    fromPartial(object: Partial<_173.MsgChannelUpgradeTry>): _173.MsgChannelUpgradeTry;
                    fromAmino(object: _173.MsgChannelUpgradeTryAmino): _173.MsgChannelUpgradeTry;
                    toAmino(message: _173.MsgChannelUpgradeTry): _173.MsgChannelUpgradeTryAmino;
                    fromAminoMsg(object: _173.MsgChannelUpgradeTryAminoMsg): _173.MsgChannelUpgradeTry;
                    toAminoMsg(message: _173.MsgChannelUpgradeTry): _173.MsgChannelUpgradeTryAminoMsg;
                    fromProtoMsg(message: _173.MsgChannelUpgradeTryProtoMsg): _173.MsgChannelUpgradeTry;
                    toProto(message: _173.MsgChannelUpgradeTry): Uint8Array;
                    toProtoMsg(message: _173.MsgChannelUpgradeTry): _173.MsgChannelUpgradeTryProtoMsg;
                };
                MsgChannelUpgradeTryResponse: {
                    typeUrl: string;
                    encode(message: _173.MsgChannelUpgradeTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MsgChannelUpgradeTryResponse;
                    fromPartial(object: Partial<_173.MsgChannelUpgradeTryResponse>): _173.MsgChannelUpgradeTryResponse;
                    fromAmino(object: _173.MsgChannelUpgradeTryResponseAmino): _173.MsgChannelUpgradeTryResponse;
                    toAmino(message: _173.MsgChannelUpgradeTryResponse): _173.MsgChannelUpgradeTryResponseAmino;
                    fromAminoMsg(object: _173.MsgChannelUpgradeTryResponseAminoMsg): _173.MsgChannelUpgradeTryResponse;
                    toAminoMsg(message: _173.MsgChannelUpgradeTryResponse): _173.MsgChannelUpgradeTryResponseAminoMsg;
                    fromProtoMsg(message: _173.MsgChannelUpgradeTryResponseProtoMsg): _173.MsgChannelUpgradeTryResponse;
                    toProto(message: _173.MsgChannelUpgradeTryResponse): Uint8Array;
                    toProtoMsg(message: _173.MsgChannelUpgradeTryResponse): _173.MsgChannelUpgradeTryResponseProtoMsg;
                };
                MsgChannelUpgradeAck: {
                    typeUrl: string;
                    encode(message: _173.MsgChannelUpgradeAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MsgChannelUpgradeAck;
                    fromPartial(object: Partial<_173.MsgChannelUpgradeAck>): _173.MsgChannelUpgradeAck;
                    fromAmino(object: _173.MsgChannelUpgradeAckAmino): _173.MsgChannelUpgradeAck;
                    toAmino(message: _173.MsgChannelUpgradeAck): _173.MsgChannelUpgradeAckAmino;
                    fromAminoMsg(object: _173.MsgChannelUpgradeAckAminoMsg): _173.MsgChannelUpgradeAck;
                    toAminoMsg(message: _173.MsgChannelUpgradeAck): _173.MsgChannelUpgradeAckAminoMsg;
                    fromProtoMsg(message: _173.MsgChannelUpgradeAckProtoMsg): _173.MsgChannelUpgradeAck;
                    toProto(message: _173.MsgChannelUpgradeAck): Uint8Array;
                    toProtoMsg(message: _173.MsgChannelUpgradeAck): _173.MsgChannelUpgradeAckProtoMsg;
                };
                MsgChannelUpgradeAckResponse: {
                    typeUrl: string;
                    encode(message: _173.MsgChannelUpgradeAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MsgChannelUpgradeAckResponse;
                    fromPartial(object: Partial<_173.MsgChannelUpgradeAckResponse>): _173.MsgChannelUpgradeAckResponse;
                    fromAmino(object: _173.MsgChannelUpgradeAckResponseAmino): _173.MsgChannelUpgradeAckResponse;
                    toAmino(message: _173.MsgChannelUpgradeAckResponse): _173.MsgChannelUpgradeAckResponseAmino;
                    fromAminoMsg(object: _173.MsgChannelUpgradeAckResponseAminoMsg): _173.MsgChannelUpgradeAckResponse;
                    toAminoMsg(message: _173.MsgChannelUpgradeAckResponse): _173.MsgChannelUpgradeAckResponseAminoMsg;
                    fromProtoMsg(message: _173.MsgChannelUpgradeAckResponseProtoMsg): _173.MsgChannelUpgradeAckResponse;
                    toProto(message: _173.MsgChannelUpgradeAckResponse): Uint8Array;
                    toProtoMsg(message: _173.MsgChannelUpgradeAckResponse): _173.MsgChannelUpgradeAckResponseProtoMsg;
                };
                MsgChannelUpgradeConfirm: {
                    typeUrl: string;
                    encode(message: _173.MsgChannelUpgradeConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MsgChannelUpgradeConfirm;
                    fromPartial(object: Partial<_173.MsgChannelUpgradeConfirm>): _173.MsgChannelUpgradeConfirm;
                    fromAmino(object: _173.MsgChannelUpgradeConfirmAmino): _173.MsgChannelUpgradeConfirm;
                    toAmino(message: _173.MsgChannelUpgradeConfirm): _173.MsgChannelUpgradeConfirmAmino;
                    fromAminoMsg(object: _173.MsgChannelUpgradeConfirmAminoMsg): _173.MsgChannelUpgradeConfirm;
                    toAminoMsg(message: _173.MsgChannelUpgradeConfirm): _173.MsgChannelUpgradeConfirmAminoMsg;
                    fromProtoMsg(message: _173.MsgChannelUpgradeConfirmProtoMsg): _173.MsgChannelUpgradeConfirm;
                    toProto(message: _173.MsgChannelUpgradeConfirm): Uint8Array;
                    toProtoMsg(message: _173.MsgChannelUpgradeConfirm): _173.MsgChannelUpgradeConfirmProtoMsg;
                };
                MsgChannelUpgradeConfirmResponse: {
                    typeUrl: string;
                    encode(message: _173.MsgChannelUpgradeConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MsgChannelUpgradeConfirmResponse;
                    fromPartial(object: Partial<_173.MsgChannelUpgradeConfirmResponse>): _173.MsgChannelUpgradeConfirmResponse;
                    fromAmino(object: _173.MsgChannelUpgradeConfirmResponseAmino): _173.MsgChannelUpgradeConfirmResponse;
                    toAmino(message: _173.MsgChannelUpgradeConfirmResponse): _173.MsgChannelUpgradeConfirmResponseAmino;
                    fromAminoMsg(object: _173.MsgChannelUpgradeConfirmResponseAminoMsg): _173.MsgChannelUpgradeConfirmResponse;
                    toAminoMsg(message: _173.MsgChannelUpgradeConfirmResponse): _173.MsgChannelUpgradeConfirmResponseAminoMsg;
                    fromProtoMsg(message: _173.MsgChannelUpgradeConfirmResponseProtoMsg): _173.MsgChannelUpgradeConfirmResponse;
                    toProto(message: _173.MsgChannelUpgradeConfirmResponse): Uint8Array;
                    toProtoMsg(message: _173.MsgChannelUpgradeConfirmResponse): _173.MsgChannelUpgradeConfirmResponseProtoMsg;
                };
                MsgChannelUpgradeOpen: {
                    typeUrl: string;
                    encode(message: _173.MsgChannelUpgradeOpen, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MsgChannelUpgradeOpen;
                    fromPartial(object: Partial<_173.MsgChannelUpgradeOpen>): _173.MsgChannelUpgradeOpen;
                    fromAmino(object: _173.MsgChannelUpgradeOpenAmino): _173.MsgChannelUpgradeOpen;
                    toAmino(message: _173.MsgChannelUpgradeOpen): _173.MsgChannelUpgradeOpenAmino;
                    fromAminoMsg(object: _173.MsgChannelUpgradeOpenAminoMsg): _173.MsgChannelUpgradeOpen;
                    toAminoMsg(message: _173.MsgChannelUpgradeOpen): _173.MsgChannelUpgradeOpenAminoMsg;
                    fromProtoMsg(message: _173.MsgChannelUpgradeOpenProtoMsg): _173.MsgChannelUpgradeOpen;
                    toProto(message: _173.MsgChannelUpgradeOpen): Uint8Array;
                    toProtoMsg(message: _173.MsgChannelUpgradeOpen): _173.MsgChannelUpgradeOpenProtoMsg;
                };
                MsgChannelUpgradeOpenResponse: {
                    typeUrl: string;
                    encode(_: _173.MsgChannelUpgradeOpenResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MsgChannelUpgradeOpenResponse;
                    fromPartial(_: Partial<_173.MsgChannelUpgradeOpenResponse>): _173.MsgChannelUpgradeOpenResponse;
                    fromAmino(_: _173.MsgChannelUpgradeOpenResponseAmino): _173.MsgChannelUpgradeOpenResponse;
                    toAmino(_: _173.MsgChannelUpgradeOpenResponse): _173.MsgChannelUpgradeOpenResponseAmino;
                    fromAminoMsg(object: _173.MsgChannelUpgradeOpenResponseAminoMsg): _173.MsgChannelUpgradeOpenResponse;
                    toAminoMsg(message: _173.MsgChannelUpgradeOpenResponse): _173.MsgChannelUpgradeOpenResponseAminoMsg;
                    fromProtoMsg(message: _173.MsgChannelUpgradeOpenResponseProtoMsg): _173.MsgChannelUpgradeOpenResponse;
                    toProto(message: _173.MsgChannelUpgradeOpenResponse): Uint8Array;
                    toProtoMsg(message: _173.MsgChannelUpgradeOpenResponse): _173.MsgChannelUpgradeOpenResponseProtoMsg;
                };
                MsgChannelUpgradeTimeout: {
                    typeUrl: string;
                    encode(message: _173.MsgChannelUpgradeTimeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MsgChannelUpgradeTimeout;
                    fromPartial(object: Partial<_173.MsgChannelUpgradeTimeout>): _173.MsgChannelUpgradeTimeout;
                    fromAmino(object: _173.MsgChannelUpgradeTimeoutAmino): _173.MsgChannelUpgradeTimeout;
                    toAmino(message: _173.MsgChannelUpgradeTimeout): _173.MsgChannelUpgradeTimeoutAmino;
                    fromAminoMsg(object: _173.MsgChannelUpgradeTimeoutAminoMsg): _173.MsgChannelUpgradeTimeout;
                    toAminoMsg(message: _173.MsgChannelUpgradeTimeout): _173.MsgChannelUpgradeTimeoutAminoMsg;
                    fromProtoMsg(message: _173.MsgChannelUpgradeTimeoutProtoMsg): _173.MsgChannelUpgradeTimeout;
                    toProto(message: _173.MsgChannelUpgradeTimeout): Uint8Array;
                    toProtoMsg(message: _173.MsgChannelUpgradeTimeout): _173.MsgChannelUpgradeTimeoutProtoMsg;
                };
                MsgChannelUpgradeTimeoutResponse: {
                    typeUrl: string;
                    encode(_: _173.MsgChannelUpgradeTimeoutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MsgChannelUpgradeTimeoutResponse;
                    fromPartial(_: Partial<_173.MsgChannelUpgradeTimeoutResponse>): _173.MsgChannelUpgradeTimeoutResponse;
                    fromAmino(_: _173.MsgChannelUpgradeTimeoutResponseAmino): _173.MsgChannelUpgradeTimeoutResponse;
                    toAmino(_: _173.MsgChannelUpgradeTimeoutResponse): _173.MsgChannelUpgradeTimeoutResponseAmino;
                    fromAminoMsg(object: _173.MsgChannelUpgradeTimeoutResponseAminoMsg): _173.MsgChannelUpgradeTimeoutResponse;
                    toAminoMsg(message: _173.MsgChannelUpgradeTimeoutResponse): _173.MsgChannelUpgradeTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _173.MsgChannelUpgradeTimeoutResponseProtoMsg): _173.MsgChannelUpgradeTimeoutResponse;
                    toProto(message: _173.MsgChannelUpgradeTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _173.MsgChannelUpgradeTimeoutResponse): _173.MsgChannelUpgradeTimeoutResponseProtoMsg;
                };
                MsgChannelUpgradeCancel: {
                    typeUrl: string;
                    encode(message: _173.MsgChannelUpgradeCancel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MsgChannelUpgradeCancel;
                    fromPartial(object: Partial<_173.MsgChannelUpgradeCancel>): _173.MsgChannelUpgradeCancel;
                    fromAmino(object: _173.MsgChannelUpgradeCancelAmino): _173.MsgChannelUpgradeCancel;
                    toAmino(message: _173.MsgChannelUpgradeCancel): _173.MsgChannelUpgradeCancelAmino;
                    fromAminoMsg(object: _173.MsgChannelUpgradeCancelAminoMsg): _173.MsgChannelUpgradeCancel;
                    toAminoMsg(message: _173.MsgChannelUpgradeCancel): _173.MsgChannelUpgradeCancelAminoMsg;
                    fromProtoMsg(message: _173.MsgChannelUpgradeCancelProtoMsg): _173.MsgChannelUpgradeCancel;
                    toProto(message: _173.MsgChannelUpgradeCancel): Uint8Array;
                    toProtoMsg(message: _173.MsgChannelUpgradeCancel): _173.MsgChannelUpgradeCancelProtoMsg;
                };
                MsgChannelUpgradeCancelResponse: {
                    typeUrl: string;
                    encode(_: _173.MsgChannelUpgradeCancelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MsgChannelUpgradeCancelResponse;
                    fromPartial(_: Partial<_173.MsgChannelUpgradeCancelResponse>): _173.MsgChannelUpgradeCancelResponse;
                    fromAmino(_: _173.MsgChannelUpgradeCancelResponseAmino): _173.MsgChannelUpgradeCancelResponse;
                    toAmino(_: _173.MsgChannelUpgradeCancelResponse): _173.MsgChannelUpgradeCancelResponseAmino;
                    fromAminoMsg(object: _173.MsgChannelUpgradeCancelResponseAminoMsg): _173.MsgChannelUpgradeCancelResponse;
                    toAminoMsg(message: _173.MsgChannelUpgradeCancelResponse): _173.MsgChannelUpgradeCancelResponseAminoMsg;
                    fromProtoMsg(message: _173.MsgChannelUpgradeCancelResponseProtoMsg): _173.MsgChannelUpgradeCancelResponse;
                    toProto(message: _173.MsgChannelUpgradeCancelResponse): Uint8Array;
                    toProtoMsg(message: _173.MsgChannelUpgradeCancelResponse): _173.MsgChannelUpgradeCancelResponseProtoMsg;
                };
                MsgUpdateParams: {
                    typeUrl: string;
                    encode(message: _173.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MsgUpdateParams;
                    fromPartial(object: Partial<_173.MsgUpdateParams>): _173.MsgUpdateParams;
                    fromAmino(object: _173.MsgUpdateParamsAmino): _173.MsgUpdateParams;
                    toAmino(message: _173.MsgUpdateParams): _173.MsgUpdateParamsAmino;
                    fromAminoMsg(object: _173.MsgUpdateParamsAminoMsg): _173.MsgUpdateParams;
                    toAminoMsg(message: _173.MsgUpdateParams): _173.MsgUpdateParamsAminoMsg;
                    fromProtoMsg(message: _173.MsgUpdateParamsProtoMsg): _173.MsgUpdateParams;
                    toProto(message: _173.MsgUpdateParams): Uint8Array;
                    toProtoMsg(message: _173.MsgUpdateParams): _173.MsgUpdateParamsProtoMsg;
                };
                MsgUpdateParamsResponse: {
                    typeUrl: string;
                    encode(_: _173.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MsgUpdateParamsResponse;
                    fromPartial(_: Partial<_173.MsgUpdateParamsResponse>): _173.MsgUpdateParamsResponse;
                    fromAmino(_: _173.MsgUpdateParamsResponseAmino): _173.MsgUpdateParamsResponse;
                    toAmino(_: _173.MsgUpdateParamsResponse): _173.MsgUpdateParamsResponseAmino;
                    fromAminoMsg(object: _173.MsgUpdateParamsResponseAminoMsg): _173.MsgUpdateParamsResponse;
                    toAminoMsg(message: _173.MsgUpdateParamsResponse): _173.MsgUpdateParamsResponseAminoMsg;
                    fromProtoMsg(message: _173.MsgUpdateParamsResponseProtoMsg): _173.MsgUpdateParamsResponse;
                    toProto(message: _173.MsgUpdateParamsResponse): Uint8Array;
                    toProtoMsg(message: _173.MsgUpdateParamsResponse): _173.MsgUpdateParamsResponseProtoMsg;
                };
                MsgPruneAcknowledgements: {
                    typeUrl: string;
                    encode(message: _173.MsgPruneAcknowledgements, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MsgPruneAcknowledgements;
                    fromPartial(object: Partial<_173.MsgPruneAcknowledgements>): _173.MsgPruneAcknowledgements;
                    fromAmino(object: _173.MsgPruneAcknowledgementsAmino): _173.MsgPruneAcknowledgements;
                    toAmino(message: _173.MsgPruneAcknowledgements): _173.MsgPruneAcknowledgementsAmino;
                    fromAminoMsg(object: _173.MsgPruneAcknowledgementsAminoMsg): _173.MsgPruneAcknowledgements;
                    toAminoMsg(message: _173.MsgPruneAcknowledgements): _173.MsgPruneAcknowledgementsAminoMsg;
                    fromProtoMsg(message: _173.MsgPruneAcknowledgementsProtoMsg): _173.MsgPruneAcknowledgements;
                    toProto(message: _173.MsgPruneAcknowledgements): Uint8Array;
                    toProtoMsg(message: _173.MsgPruneAcknowledgements): _173.MsgPruneAcknowledgementsProtoMsg;
                };
                MsgPruneAcknowledgementsResponse: {
                    typeUrl: string;
                    encode(message: _173.MsgPruneAcknowledgementsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MsgPruneAcknowledgementsResponse;
                    fromPartial(object: Partial<_173.MsgPruneAcknowledgementsResponse>): _173.MsgPruneAcknowledgementsResponse;
                    fromAmino(object: _173.MsgPruneAcknowledgementsResponseAmino): _173.MsgPruneAcknowledgementsResponse;
                    toAmino(message: _173.MsgPruneAcknowledgementsResponse): _173.MsgPruneAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _173.MsgPruneAcknowledgementsResponseAminoMsg): _173.MsgPruneAcknowledgementsResponse;
                    toAminoMsg(message: _173.MsgPruneAcknowledgementsResponse): _173.MsgPruneAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _173.MsgPruneAcknowledgementsResponseProtoMsg): _173.MsgPruneAcknowledgementsResponse;
                    toProto(message: _173.MsgPruneAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _173.MsgPruneAcknowledgementsResponse): _173.MsgPruneAcknowledgementsResponseProtoMsg;
                };
                QueryChannelRequest: {
                    typeUrl: string;
                    encode(message: _172.QueryChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryChannelRequest;
                    fromPartial(object: Partial<_172.QueryChannelRequest>): _172.QueryChannelRequest;
                    fromAmino(object: _172.QueryChannelRequestAmino): _172.QueryChannelRequest;
                    toAmino(message: _172.QueryChannelRequest): _172.QueryChannelRequestAmino;
                    fromAminoMsg(object: _172.QueryChannelRequestAminoMsg): _172.QueryChannelRequest;
                    toAminoMsg(message: _172.QueryChannelRequest): _172.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _172.QueryChannelRequestProtoMsg): _172.QueryChannelRequest;
                    toProto(message: _172.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _172.QueryChannelRequest): _172.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    typeUrl: string;
                    encode(message: _172.QueryChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryChannelResponse;
                    fromPartial(object: Partial<_172.QueryChannelResponse>): _172.QueryChannelResponse;
                    fromAmino(object: _172.QueryChannelResponseAmino): _172.QueryChannelResponse;
                    toAmino(message: _172.QueryChannelResponse): _172.QueryChannelResponseAmino;
                    fromAminoMsg(object: _172.QueryChannelResponseAminoMsg): _172.QueryChannelResponse;
                    toAminoMsg(message: _172.QueryChannelResponse): _172.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _172.QueryChannelResponseProtoMsg): _172.QueryChannelResponse;
                    toProto(message: _172.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _172.QueryChannelResponse): _172.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    typeUrl: string;
                    encode(message: _172.QueryChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryChannelsRequest;
                    fromPartial(object: Partial<_172.QueryChannelsRequest>): _172.QueryChannelsRequest;
                    fromAmino(object: _172.QueryChannelsRequestAmino): _172.QueryChannelsRequest;
                    toAmino(message: _172.QueryChannelsRequest): _172.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _172.QueryChannelsRequestAminoMsg): _172.QueryChannelsRequest;
                    toAminoMsg(message: _172.QueryChannelsRequest): _172.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _172.QueryChannelsRequestProtoMsg): _172.QueryChannelsRequest;
                    toProto(message: _172.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _172.QueryChannelsRequest): _172.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    typeUrl: string;
                    encode(message: _172.QueryChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryChannelsResponse;
                    fromPartial(object: Partial<_172.QueryChannelsResponse>): _172.QueryChannelsResponse;
                    fromAmino(object: _172.QueryChannelsResponseAmino): _172.QueryChannelsResponse;
                    toAmino(message: _172.QueryChannelsResponse): _172.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _172.QueryChannelsResponseAminoMsg): _172.QueryChannelsResponse;
                    toAminoMsg(message: _172.QueryChannelsResponse): _172.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _172.QueryChannelsResponseProtoMsg): _172.QueryChannelsResponse;
                    toProto(message: _172.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _172.QueryChannelsResponse): _172.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    typeUrl: string;
                    encode(message: _172.QueryConnectionChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryConnectionChannelsRequest;
                    fromPartial(object: Partial<_172.QueryConnectionChannelsRequest>): _172.QueryConnectionChannelsRequest;
                    fromAmino(object: _172.QueryConnectionChannelsRequestAmino): _172.QueryConnectionChannelsRequest;
                    toAmino(message: _172.QueryConnectionChannelsRequest): _172.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _172.QueryConnectionChannelsRequestAminoMsg): _172.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _172.QueryConnectionChannelsRequest): _172.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _172.QueryConnectionChannelsRequestProtoMsg): _172.QueryConnectionChannelsRequest;
                    toProto(message: _172.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _172.QueryConnectionChannelsRequest): _172.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    typeUrl: string;
                    encode(message: _172.QueryConnectionChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryConnectionChannelsResponse;
                    fromPartial(object: Partial<_172.QueryConnectionChannelsResponse>): _172.QueryConnectionChannelsResponse;
                    fromAmino(object: _172.QueryConnectionChannelsResponseAmino): _172.QueryConnectionChannelsResponse;
                    toAmino(message: _172.QueryConnectionChannelsResponse): _172.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _172.QueryConnectionChannelsResponseAminoMsg): _172.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _172.QueryConnectionChannelsResponse): _172.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _172.QueryConnectionChannelsResponseProtoMsg): _172.QueryConnectionChannelsResponse;
                    toProto(message: _172.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _172.QueryConnectionChannelsResponse): _172.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    typeUrl: string;
                    encode(message: _172.QueryChannelClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryChannelClientStateRequest;
                    fromPartial(object: Partial<_172.QueryChannelClientStateRequest>): _172.QueryChannelClientStateRequest;
                    fromAmino(object: _172.QueryChannelClientStateRequestAmino): _172.QueryChannelClientStateRequest;
                    toAmino(message: _172.QueryChannelClientStateRequest): _172.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _172.QueryChannelClientStateRequestAminoMsg): _172.QueryChannelClientStateRequest;
                    toAminoMsg(message: _172.QueryChannelClientStateRequest): _172.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _172.QueryChannelClientStateRequestProtoMsg): _172.QueryChannelClientStateRequest;
                    toProto(message: _172.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _172.QueryChannelClientStateRequest): _172.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    typeUrl: string;
                    encode(message: _172.QueryChannelClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryChannelClientStateResponse;
                    fromPartial(object: Partial<_172.QueryChannelClientStateResponse>): _172.QueryChannelClientStateResponse;
                    fromAmino(object: _172.QueryChannelClientStateResponseAmino): _172.QueryChannelClientStateResponse;
                    toAmino(message: _172.QueryChannelClientStateResponse): _172.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _172.QueryChannelClientStateResponseAminoMsg): _172.QueryChannelClientStateResponse;
                    toAminoMsg(message: _172.QueryChannelClientStateResponse): _172.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _172.QueryChannelClientStateResponseProtoMsg): _172.QueryChannelClientStateResponse;
                    toProto(message: _172.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _172.QueryChannelClientStateResponse): _172.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _172.QueryChannelConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryChannelConsensusStateRequest;
                    fromPartial(object: Partial<_172.QueryChannelConsensusStateRequest>): _172.QueryChannelConsensusStateRequest;
                    fromAmino(object: _172.QueryChannelConsensusStateRequestAmino): _172.QueryChannelConsensusStateRequest;
                    toAmino(message: _172.QueryChannelConsensusStateRequest): _172.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _172.QueryChannelConsensusStateRequestAminoMsg): _172.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _172.QueryChannelConsensusStateRequest): _172.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _172.QueryChannelConsensusStateRequestProtoMsg): _172.QueryChannelConsensusStateRequest;
                    toProto(message: _172.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _172.QueryChannelConsensusStateRequest): _172.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _172.QueryChannelConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryChannelConsensusStateResponse;
                    fromPartial(object: Partial<_172.QueryChannelConsensusStateResponse>): _172.QueryChannelConsensusStateResponse;
                    fromAmino(object: _172.QueryChannelConsensusStateResponseAmino): _172.QueryChannelConsensusStateResponse;
                    toAmino(message: _172.QueryChannelConsensusStateResponse): _172.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _172.QueryChannelConsensusStateResponseAminoMsg): _172.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _172.QueryChannelConsensusStateResponse): _172.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _172.QueryChannelConsensusStateResponseProtoMsg): _172.QueryChannelConsensusStateResponse;
                    toProto(message: _172.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _172.QueryChannelConsensusStateResponse): _172.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    typeUrl: string;
                    encode(message: _172.QueryPacketCommitmentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryPacketCommitmentRequest;
                    fromPartial(object: Partial<_172.QueryPacketCommitmentRequest>): _172.QueryPacketCommitmentRequest;
                    fromAmino(object: _172.QueryPacketCommitmentRequestAmino): _172.QueryPacketCommitmentRequest;
                    toAmino(message: _172.QueryPacketCommitmentRequest): _172.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _172.QueryPacketCommitmentRequestAminoMsg): _172.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _172.QueryPacketCommitmentRequest): _172.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _172.QueryPacketCommitmentRequestProtoMsg): _172.QueryPacketCommitmentRequest;
                    toProto(message: _172.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _172.QueryPacketCommitmentRequest): _172.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    typeUrl: string;
                    encode(message: _172.QueryPacketCommitmentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryPacketCommitmentResponse;
                    fromPartial(object: Partial<_172.QueryPacketCommitmentResponse>): _172.QueryPacketCommitmentResponse;
                    fromAmino(object: _172.QueryPacketCommitmentResponseAmino): _172.QueryPacketCommitmentResponse;
                    toAmino(message: _172.QueryPacketCommitmentResponse): _172.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _172.QueryPacketCommitmentResponseAminoMsg): _172.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _172.QueryPacketCommitmentResponse): _172.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _172.QueryPacketCommitmentResponseProtoMsg): _172.QueryPacketCommitmentResponse;
                    toProto(message: _172.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _172.QueryPacketCommitmentResponse): _172.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    typeUrl: string;
                    encode(message: _172.QueryPacketCommitmentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryPacketCommitmentsRequest;
                    fromPartial(object: Partial<_172.QueryPacketCommitmentsRequest>): _172.QueryPacketCommitmentsRequest;
                    fromAmino(object: _172.QueryPacketCommitmentsRequestAmino): _172.QueryPacketCommitmentsRequest;
                    toAmino(message: _172.QueryPacketCommitmentsRequest): _172.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _172.QueryPacketCommitmentsRequestAminoMsg): _172.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _172.QueryPacketCommitmentsRequest): _172.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _172.QueryPacketCommitmentsRequestProtoMsg): _172.QueryPacketCommitmentsRequest;
                    toProto(message: _172.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _172.QueryPacketCommitmentsRequest): _172.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    typeUrl: string;
                    encode(message: _172.QueryPacketCommitmentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryPacketCommitmentsResponse;
                    fromPartial(object: Partial<_172.QueryPacketCommitmentsResponse>): _172.QueryPacketCommitmentsResponse;
                    fromAmino(object: _172.QueryPacketCommitmentsResponseAmino): _172.QueryPacketCommitmentsResponse;
                    toAmino(message: _172.QueryPacketCommitmentsResponse): _172.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _172.QueryPacketCommitmentsResponseAminoMsg): _172.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _172.QueryPacketCommitmentsResponse): _172.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _172.QueryPacketCommitmentsResponseProtoMsg): _172.QueryPacketCommitmentsResponse;
                    toProto(message: _172.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _172.QueryPacketCommitmentsResponse): _172.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    typeUrl: string;
                    encode(message: _172.QueryPacketReceiptRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryPacketReceiptRequest;
                    fromPartial(object: Partial<_172.QueryPacketReceiptRequest>): _172.QueryPacketReceiptRequest;
                    fromAmino(object: _172.QueryPacketReceiptRequestAmino): _172.QueryPacketReceiptRequest;
                    toAmino(message: _172.QueryPacketReceiptRequest): _172.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _172.QueryPacketReceiptRequestAminoMsg): _172.QueryPacketReceiptRequest;
                    toAminoMsg(message: _172.QueryPacketReceiptRequest): _172.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _172.QueryPacketReceiptRequestProtoMsg): _172.QueryPacketReceiptRequest;
                    toProto(message: _172.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _172.QueryPacketReceiptRequest): _172.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    typeUrl: string;
                    encode(message: _172.QueryPacketReceiptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryPacketReceiptResponse;
                    fromPartial(object: Partial<_172.QueryPacketReceiptResponse>): _172.QueryPacketReceiptResponse;
                    fromAmino(object: _172.QueryPacketReceiptResponseAmino): _172.QueryPacketReceiptResponse;
                    toAmino(message: _172.QueryPacketReceiptResponse): _172.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _172.QueryPacketReceiptResponseAminoMsg): _172.QueryPacketReceiptResponse;
                    toAminoMsg(message: _172.QueryPacketReceiptResponse): _172.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _172.QueryPacketReceiptResponseProtoMsg): _172.QueryPacketReceiptResponse;
                    toProto(message: _172.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _172.QueryPacketReceiptResponse): _172.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    typeUrl: string;
                    encode(message: _172.QueryPacketAcknowledgementRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryPacketAcknowledgementRequest;
                    fromPartial(object: Partial<_172.QueryPacketAcknowledgementRequest>): _172.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _172.QueryPacketAcknowledgementRequestAmino): _172.QueryPacketAcknowledgementRequest;
                    toAmino(message: _172.QueryPacketAcknowledgementRequest): _172.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _172.QueryPacketAcknowledgementRequestAminoMsg): _172.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _172.QueryPacketAcknowledgementRequest): _172.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _172.QueryPacketAcknowledgementRequestProtoMsg): _172.QueryPacketAcknowledgementRequest;
                    toProto(message: _172.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _172.QueryPacketAcknowledgementRequest): _172.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _172.QueryPacketAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryPacketAcknowledgementResponse;
                    fromPartial(object: Partial<_172.QueryPacketAcknowledgementResponse>): _172.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _172.QueryPacketAcknowledgementResponseAmino): _172.QueryPacketAcknowledgementResponse;
                    toAmino(message: _172.QueryPacketAcknowledgementResponse): _172.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _172.QueryPacketAcknowledgementResponseAminoMsg): _172.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _172.QueryPacketAcknowledgementResponse): _172.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _172.QueryPacketAcknowledgementResponseProtoMsg): _172.QueryPacketAcknowledgementResponse;
                    toProto(message: _172.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _172.QueryPacketAcknowledgementResponse): _172.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    typeUrl: string;
                    encode(message: _172.QueryPacketAcknowledgementsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: Partial<_172.QueryPacketAcknowledgementsRequest>): _172.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _172.QueryPacketAcknowledgementsRequestAmino): _172.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _172.QueryPacketAcknowledgementsRequest): _172.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _172.QueryPacketAcknowledgementsRequestAminoMsg): _172.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _172.QueryPacketAcknowledgementsRequest): _172.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _172.QueryPacketAcknowledgementsRequestProtoMsg): _172.QueryPacketAcknowledgementsRequest;
                    toProto(message: _172.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _172.QueryPacketAcknowledgementsRequest): _172.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    typeUrl: string;
                    encode(message: _172.QueryPacketAcknowledgementsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: Partial<_172.QueryPacketAcknowledgementsResponse>): _172.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _172.QueryPacketAcknowledgementsResponseAmino): _172.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _172.QueryPacketAcknowledgementsResponse): _172.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _172.QueryPacketAcknowledgementsResponseAminoMsg): _172.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _172.QueryPacketAcknowledgementsResponse): _172.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _172.QueryPacketAcknowledgementsResponseProtoMsg): _172.QueryPacketAcknowledgementsResponse;
                    toProto(message: _172.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _172.QueryPacketAcknowledgementsResponse): _172.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _172.QueryUnreceivedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryUnreceivedPacketsRequest;
                    fromPartial(object: Partial<_172.QueryUnreceivedPacketsRequest>): _172.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _172.QueryUnreceivedPacketsRequestAmino): _172.QueryUnreceivedPacketsRequest;
                    toAmino(message: _172.QueryUnreceivedPacketsRequest): _172.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _172.QueryUnreceivedPacketsRequestAminoMsg): _172.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _172.QueryUnreceivedPacketsRequest): _172.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _172.QueryUnreceivedPacketsRequestProtoMsg): _172.QueryUnreceivedPacketsRequest;
                    toProto(message: _172.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _172.QueryUnreceivedPacketsRequest): _172.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _172.QueryUnreceivedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryUnreceivedPacketsResponse;
                    fromPartial(object: Partial<_172.QueryUnreceivedPacketsResponse>): _172.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _172.QueryUnreceivedPacketsResponseAmino): _172.QueryUnreceivedPacketsResponse;
                    toAmino(message: _172.QueryUnreceivedPacketsResponse): _172.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _172.QueryUnreceivedPacketsResponseAminoMsg): _172.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _172.QueryUnreceivedPacketsResponse): _172.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _172.QueryUnreceivedPacketsResponseProtoMsg): _172.QueryUnreceivedPacketsResponse;
                    toProto(message: _172.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _172.QueryUnreceivedPacketsResponse): _172.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    typeUrl: string;
                    encode(message: _172.QueryUnreceivedAcksRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryUnreceivedAcksRequest;
                    fromPartial(object: Partial<_172.QueryUnreceivedAcksRequest>): _172.QueryUnreceivedAcksRequest;
                    fromAmino(object: _172.QueryUnreceivedAcksRequestAmino): _172.QueryUnreceivedAcksRequest;
                    toAmino(message: _172.QueryUnreceivedAcksRequest): _172.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _172.QueryUnreceivedAcksRequestAminoMsg): _172.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _172.QueryUnreceivedAcksRequest): _172.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _172.QueryUnreceivedAcksRequestProtoMsg): _172.QueryUnreceivedAcksRequest;
                    toProto(message: _172.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _172.QueryUnreceivedAcksRequest): _172.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    typeUrl: string;
                    encode(message: _172.QueryUnreceivedAcksResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryUnreceivedAcksResponse;
                    fromPartial(object: Partial<_172.QueryUnreceivedAcksResponse>): _172.QueryUnreceivedAcksResponse;
                    fromAmino(object: _172.QueryUnreceivedAcksResponseAmino): _172.QueryUnreceivedAcksResponse;
                    toAmino(message: _172.QueryUnreceivedAcksResponse): _172.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _172.QueryUnreceivedAcksResponseAminoMsg): _172.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _172.QueryUnreceivedAcksResponse): _172.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _172.QueryUnreceivedAcksResponseProtoMsg): _172.QueryUnreceivedAcksResponse;
                    toProto(message: _172.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _172.QueryUnreceivedAcksResponse): _172.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    typeUrl: string;
                    encode(message: _172.QueryNextSequenceReceiveRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryNextSequenceReceiveRequest;
                    fromPartial(object: Partial<_172.QueryNextSequenceReceiveRequest>): _172.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _172.QueryNextSequenceReceiveRequestAmino): _172.QueryNextSequenceReceiveRequest;
                    toAmino(message: _172.QueryNextSequenceReceiveRequest): _172.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _172.QueryNextSequenceReceiveRequestAminoMsg): _172.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _172.QueryNextSequenceReceiveRequest): _172.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _172.QueryNextSequenceReceiveRequestProtoMsg): _172.QueryNextSequenceReceiveRequest;
                    toProto(message: _172.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _172.QueryNextSequenceReceiveRequest): _172.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    typeUrl: string;
                    encode(message: _172.QueryNextSequenceReceiveResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryNextSequenceReceiveResponse;
                    fromPartial(object: Partial<_172.QueryNextSequenceReceiveResponse>): _172.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _172.QueryNextSequenceReceiveResponseAmino): _172.QueryNextSequenceReceiveResponse;
                    toAmino(message: _172.QueryNextSequenceReceiveResponse): _172.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _172.QueryNextSequenceReceiveResponseAminoMsg): _172.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _172.QueryNextSequenceReceiveResponse): _172.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _172.QueryNextSequenceReceiveResponseProtoMsg): _172.QueryNextSequenceReceiveResponse;
                    toProto(message: _172.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _172.QueryNextSequenceReceiveResponse): _172.QueryNextSequenceReceiveResponseProtoMsg;
                };
                QueryNextSequenceSendRequest: {
                    typeUrl: string;
                    encode(message: _172.QueryNextSequenceSendRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryNextSequenceSendRequest;
                    fromPartial(object: Partial<_172.QueryNextSequenceSendRequest>): _172.QueryNextSequenceSendRequest;
                    fromAmino(object: _172.QueryNextSequenceSendRequestAmino): _172.QueryNextSequenceSendRequest;
                    toAmino(message: _172.QueryNextSequenceSendRequest): _172.QueryNextSequenceSendRequestAmino;
                    fromAminoMsg(object: _172.QueryNextSequenceSendRequestAminoMsg): _172.QueryNextSequenceSendRequest;
                    toAminoMsg(message: _172.QueryNextSequenceSendRequest): _172.QueryNextSequenceSendRequestAminoMsg;
                    fromProtoMsg(message: _172.QueryNextSequenceSendRequestProtoMsg): _172.QueryNextSequenceSendRequest;
                    toProto(message: _172.QueryNextSequenceSendRequest): Uint8Array;
                    toProtoMsg(message: _172.QueryNextSequenceSendRequest): _172.QueryNextSequenceSendRequestProtoMsg;
                };
                QueryNextSequenceSendResponse: {
                    typeUrl: string;
                    encode(message: _172.QueryNextSequenceSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryNextSequenceSendResponse;
                    fromPartial(object: Partial<_172.QueryNextSequenceSendResponse>): _172.QueryNextSequenceSendResponse;
                    fromAmino(object: _172.QueryNextSequenceSendResponseAmino): _172.QueryNextSequenceSendResponse;
                    toAmino(message: _172.QueryNextSequenceSendResponse): _172.QueryNextSequenceSendResponseAmino;
                    fromAminoMsg(object: _172.QueryNextSequenceSendResponseAminoMsg): _172.QueryNextSequenceSendResponse;
                    toAminoMsg(message: _172.QueryNextSequenceSendResponse): _172.QueryNextSequenceSendResponseAminoMsg;
                    fromProtoMsg(message: _172.QueryNextSequenceSendResponseProtoMsg): _172.QueryNextSequenceSendResponse;
                    toProto(message: _172.QueryNextSequenceSendResponse): Uint8Array;
                    toProtoMsg(message: _172.QueryNextSequenceSendResponse): _172.QueryNextSequenceSendResponseProtoMsg;
                };
                QueryUpgradeErrorRequest: {
                    typeUrl: string;
                    encode(message: _172.QueryUpgradeErrorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryUpgradeErrorRequest;
                    fromPartial(object: Partial<_172.QueryUpgradeErrorRequest>): _172.QueryUpgradeErrorRequest;
                    fromAmino(object: _172.QueryUpgradeErrorRequestAmino): _172.QueryUpgradeErrorRequest;
                    toAmino(message: _172.QueryUpgradeErrorRequest): _172.QueryUpgradeErrorRequestAmino;
                    fromAminoMsg(object: _172.QueryUpgradeErrorRequestAminoMsg): _172.QueryUpgradeErrorRequest;
                    toAminoMsg(message: _172.QueryUpgradeErrorRequest): _172.QueryUpgradeErrorRequestAminoMsg;
                    fromProtoMsg(message: _172.QueryUpgradeErrorRequestProtoMsg): _172.QueryUpgradeErrorRequest;
                    toProto(message: _172.QueryUpgradeErrorRequest): Uint8Array;
                    toProtoMsg(message: _172.QueryUpgradeErrorRequest): _172.QueryUpgradeErrorRequestProtoMsg;
                };
                QueryUpgradeErrorResponse: {
                    typeUrl: string;
                    encode(message: _172.QueryUpgradeErrorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryUpgradeErrorResponse;
                    fromPartial(object: Partial<_172.QueryUpgradeErrorResponse>): _172.QueryUpgradeErrorResponse;
                    fromAmino(object: _172.QueryUpgradeErrorResponseAmino): _172.QueryUpgradeErrorResponse;
                    toAmino(message: _172.QueryUpgradeErrorResponse): _172.QueryUpgradeErrorResponseAmino;
                    fromAminoMsg(object: _172.QueryUpgradeErrorResponseAminoMsg): _172.QueryUpgradeErrorResponse;
                    toAminoMsg(message: _172.QueryUpgradeErrorResponse): _172.QueryUpgradeErrorResponseAminoMsg;
                    fromProtoMsg(message: _172.QueryUpgradeErrorResponseProtoMsg): _172.QueryUpgradeErrorResponse;
                    toProto(message: _172.QueryUpgradeErrorResponse): Uint8Array;
                    toProtoMsg(message: _172.QueryUpgradeErrorResponse): _172.QueryUpgradeErrorResponseProtoMsg;
                };
                QueryUpgradeRequest: {
                    typeUrl: string;
                    encode(message: _172.QueryUpgradeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryUpgradeRequest;
                    fromPartial(object: Partial<_172.QueryUpgradeRequest>): _172.QueryUpgradeRequest;
                    fromAmino(object: _172.QueryUpgradeRequestAmino): _172.QueryUpgradeRequest;
                    toAmino(message: _172.QueryUpgradeRequest): _172.QueryUpgradeRequestAmino;
                    fromAminoMsg(object: _172.QueryUpgradeRequestAminoMsg): _172.QueryUpgradeRequest;
                    toAminoMsg(message: _172.QueryUpgradeRequest): _172.QueryUpgradeRequestAminoMsg;
                    fromProtoMsg(message: _172.QueryUpgradeRequestProtoMsg): _172.QueryUpgradeRequest;
                    toProto(message: _172.QueryUpgradeRequest): Uint8Array;
                    toProtoMsg(message: _172.QueryUpgradeRequest): _172.QueryUpgradeRequestProtoMsg;
                };
                QueryUpgradeResponse: {
                    typeUrl: string;
                    encode(message: _172.QueryUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryUpgradeResponse;
                    fromPartial(object: Partial<_172.QueryUpgradeResponse>): _172.QueryUpgradeResponse;
                    fromAmino(object: _172.QueryUpgradeResponseAmino): _172.QueryUpgradeResponse;
                    toAmino(message: _172.QueryUpgradeResponse): _172.QueryUpgradeResponseAmino;
                    fromAminoMsg(object: _172.QueryUpgradeResponseAminoMsg): _172.QueryUpgradeResponse;
                    toAminoMsg(message: _172.QueryUpgradeResponse): _172.QueryUpgradeResponseAminoMsg;
                    fromProtoMsg(message: _172.QueryUpgradeResponseProtoMsg): _172.QueryUpgradeResponse;
                    toProto(message: _172.QueryUpgradeResponse): Uint8Array;
                    toProtoMsg(message: _172.QueryUpgradeResponse): _172.QueryUpgradeResponseProtoMsg;
                };
                QueryChannelParamsRequest: {
                    typeUrl: string;
                    encode(_: _172.QueryChannelParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryChannelParamsRequest;
                    fromPartial(_: Partial<_172.QueryChannelParamsRequest>): _172.QueryChannelParamsRequest;
                    fromAmino(_: _172.QueryChannelParamsRequestAmino): _172.QueryChannelParamsRequest;
                    toAmino(_: _172.QueryChannelParamsRequest): _172.QueryChannelParamsRequestAmino;
                    fromAminoMsg(object: _172.QueryChannelParamsRequestAminoMsg): _172.QueryChannelParamsRequest;
                    toAminoMsg(message: _172.QueryChannelParamsRequest): _172.QueryChannelParamsRequestAminoMsg;
                    fromProtoMsg(message: _172.QueryChannelParamsRequestProtoMsg): _172.QueryChannelParamsRequest;
                    toProto(message: _172.QueryChannelParamsRequest): Uint8Array;
                    toProtoMsg(message: _172.QueryChannelParamsRequest): _172.QueryChannelParamsRequestProtoMsg;
                };
                QueryChannelParamsResponse: {
                    typeUrl: string;
                    encode(message: _172.QueryChannelParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryChannelParamsResponse;
                    fromPartial(object: Partial<_172.QueryChannelParamsResponse>): _172.QueryChannelParamsResponse;
                    fromAmino(object: _172.QueryChannelParamsResponseAmino): _172.QueryChannelParamsResponse;
                    toAmino(message: _172.QueryChannelParamsResponse): _172.QueryChannelParamsResponseAmino;
                    fromAminoMsg(object: _172.QueryChannelParamsResponseAminoMsg): _172.QueryChannelParamsResponse;
                    toAminoMsg(message: _172.QueryChannelParamsResponse): _172.QueryChannelParamsResponseAminoMsg;
                    fromProtoMsg(message: _172.QueryChannelParamsResponseProtoMsg): _172.QueryChannelParamsResponse;
                    toProto(message: _172.QueryChannelParamsResponse): Uint8Array;
                    toProtoMsg(message: _172.QueryChannelParamsResponse): _172.QueryChannelParamsResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _171.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.GenesisState;
                    fromPartial(object: Partial<_171.GenesisState>): _171.GenesisState;
                    fromAmino(object: _171.GenesisStateAmino): _171.GenesisState;
                    toAmino(message: _171.GenesisState): _171.GenesisStateAmino;
                    fromAminoMsg(object: _171.GenesisStateAminoMsg): _171.GenesisState;
                    toAminoMsg(message: _171.GenesisState): _171.GenesisStateAminoMsg;
                    fromProtoMsg(message: _171.GenesisStateProtoMsg): _171.GenesisState;
                    toProto(message: _171.GenesisState): Uint8Array;
                    toProtoMsg(message: _171.GenesisState): _171.GenesisStateProtoMsg;
                };
                PacketSequence: {
                    typeUrl: string;
                    encode(message: _171.PacketSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.PacketSequence;
                    fromPartial(object: Partial<_171.PacketSequence>): _171.PacketSequence;
                    fromAmino(object: _171.PacketSequenceAmino): _171.PacketSequence;
                    toAmino(message: _171.PacketSequence): _171.PacketSequenceAmino;
                    fromAminoMsg(object: _171.PacketSequenceAminoMsg): _171.PacketSequence;
                    toAminoMsg(message: _171.PacketSequence): _171.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _171.PacketSequenceProtoMsg): _171.PacketSequence;
                    toProto(message: _171.PacketSequence): Uint8Array;
                    toProtoMsg(message: _171.PacketSequence): _171.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _170.State;
                stateToJSON(object: _170.State): string;
                orderFromJSON(object: any): _170.Order;
                orderToJSON(object: _170.Order): string;
                State: typeof _170.State;
                StateSDKType: typeof _170.State;
                StateAmino: typeof _170.State;
                Order: typeof _170.Order;
                OrderSDKType: typeof _170.Order;
                OrderAmino: typeof _170.Order;
                Channel: {
                    typeUrl: string;
                    encode(message: _170.Channel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.Channel;
                    fromPartial(object: Partial<_170.Channel>): _170.Channel;
                    fromAmino(object: _170.ChannelAmino): _170.Channel;
                    toAmino(message: _170.Channel): _170.ChannelAmino;
                    fromAminoMsg(object: _170.ChannelAminoMsg): _170.Channel;
                    toAminoMsg(message: _170.Channel): _170.ChannelAminoMsg;
                    fromProtoMsg(message: _170.ChannelProtoMsg): _170.Channel;
                    toProto(message: _170.Channel): Uint8Array;
                    toProtoMsg(message: _170.Channel): _170.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    encode(message: _170.IdentifiedChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.IdentifiedChannel;
                    fromPartial(object: Partial<_170.IdentifiedChannel>): _170.IdentifiedChannel;
                    fromAmino(object: _170.IdentifiedChannelAmino): _170.IdentifiedChannel;
                    toAmino(message: _170.IdentifiedChannel): _170.IdentifiedChannelAmino;
                    fromAminoMsg(object: _170.IdentifiedChannelAminoMsg): _170.IdentifiedChannel;
                    toAminoMsg(message: _170.IdentifiedChannel): _170.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _170.IdentifiedChannelProtoMsg): _170.IdentifiedChannel;
                    toProto(message: _170.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _170.IdentifiedChannel): _170.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _170.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.Counterparty;
                    fromPartial(object: Partial<_170.Counterparty>): _170.Counterparty;
                    fromAmino(object: _170.CounterpartyAmino): _170.Counterparty;
                    toAmino(message: _170.Counterparty): _170.CounterpartyAmino;
                    fromAminoMsg(object: _170.CounterpartyAminoMsg): _170.Counterparty;
                    toAminoMsg(message: _170.Counterparty): _170.CounterpartyAminoMsg;
                    fromProtoMsg(message: _170.CounterpartyProtoMsg): _170.Counterparty;
                    toProto(message: _170.Counterparty): Uint8Array;
                    toProtoMsg(message: _170.Counterparty): _170.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    encode(message: _170.Packet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.Packet;
                    fromPartial(object: Partial<_170.Packet>): _170.Packet;
                    fromAmino(object: _170.PacketAmino): _170.Packet;
                    toAmino(message: _170.Packet): _170.PacketAmino;
                    fromAminoMsg(object: _170.PacketAminoMsg): _170.Packet;
                    toAminoMsg(message: _170.Packet): _170.PacketAminoMsg;
                    fromProtoMsg(message: _170.PacketProtoMsg): _170.Packet;
                    toProto(message: _170.Packet): Uint8Array;
                    toProtoMsg(message: _170.Packet): _170.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    encode(message: _170.PacketState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.PacketState;
                    fromPartial(object: Partial<_170.PacketState>): _170.PacketState;
                    fromAmino(object: _170.PacketStateAmino): _170.PacketState;
                    toAmino(message: _170.PacketState): _170.PacketStateAmino;
                    fromAminoMsg(object: _170.PacketStateAminoMsg): _170.PacketState;
                    toAminoMsg(message: _170.PacketState): _170.PacketStateAminoMsg;
                    fromProtoMsg(message: _170.PacketStateProtoMsg): _170.PacketState;
                    toProto(message: _170.PacketState): Uint8Array;
                    toProtoMsg(message: _170.PacketState): _170.PacketStateProtoMsg;
                };
                PacketId: {
                    typeUrl: string;
                    encode(message: _170.PacketId, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.PacketId;
                    fromPartial(object: Partial<_170.PacketId>): _170.PacketId;
                    fromAmino(object: _170.PacketIdAmino): _170.PacketId;
                    toAmino(message: _170.PacketId): _170.PacketIdAmino;
                    fromAminoMsg(object: _170.PacketIdAminoMsg): _170.PacketId;
                    toAminoMsg(message: _170.PacketId): _170.PacketIdAminoMsg;
                    fromProtoMsg(message: _170.PacketIdProtoMsg): _170.PacketId;
                    toProto(message: _170.PacketId): Uint8Array;
                    toProtoMsg(message: _170.PacketId): _170.PacketIdProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    encode(message: _170.Acknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.Acknowledgement;
                    fromPartial(object: Partial<_170.Acknowledgement>): _170.Acknowledgement;
                    fromAmino(object: _170.AcknowledgementAmino): _170.Acknowledgement;
                    toAmino(message: _170.Acknowledgement): _170.AcknowledgementAmino;
                    fromAminoMsg(object: _170.AcknowledgementAminoMsg): _170.Acknowledgement;
                    toAminoMsg(message: _170.Acknowledgement): _170.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _170.AcknowledgementProtoMsg): _170.Acknowledgement;
                    toProto(message: _170.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _170.Acknowledgement): _170.AcknowledgementProtoMsg;
                };
                Timeout: {
                    typeUrl: string;
                    encode(message: _170.Timeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.Timeout;
                    fromPartial(object: Partial<_170.Timeout>): _170.Timeout;
                    fromAmino(object: _170.TimeoutAmino): _170.Timeout;
                    toAmino(message: _170.Timeout): _170.TimeoutAmino;
                    fromAminoMsg(object: _170.TimeoutAminoMsg): _170.Timeout;
                    toAminoMsg(message: _170.Timeout): _170.TimeoutAminoMsg;
                    fromProtoMsg(message: _170.TimeoutProtoMsg): _170.Timeout;
                    toProto(message: _170.Timeout): Uint8Array;
                    toProtoMsg(message: _170.Timeout): _170.TimeoutProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _170.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.Params;
                    fromPartial(object: Partial<_170.Params>): _170.Params;
                    fromAmino(object: _170.ParamsAmino): _170.Params;
                    toAmino(message: _170.Params): _170.ParamsAmino;
                    fromAminoMsg(object: _170.ParamsAminoMsg): _170.Params;
                    toAminoMsg(message: _170.Params): _170.ParamsAminoMsg;
                    fromProtoMsg(message: _170.ParamsProtoMsg): _170.Params;
                    toProto(message: _170.Params): Uint8Array;
                    toProtoMsg(message: _170.Params): _170.ParamsProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _383.MsgClientImpl;
                QueryClientImpl: typeof _375.QueryClientImpl;
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
                    verifyMembership(request: _177.QueryVerifyMembershipRequest): Promise<_177.QueryVerifyMembershipResponse>;
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
                        recoverClient(value: _178.MsgRecoverClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        iBCSoftwareUpgrade(value: _178.MsgIBCSoftwareUpgrade): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClientParams(value: _178.MsgUpdateParams): {
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
                        recoverClient(value: _178.MsgRecoverClient): {
                            typeUrl: string;
                            value: _178.MsgRecoverClient;
                        };
                        iBCSoftwareUpgrade(value: _178.MsgIBCSoftwareUpgrade): {
                            typeUrl: string;
                            value: _178.MsgIBCSoftwareUpgrade;
                        };
                        updateClientParams(value: _178.MsgUpdateParams): {
                            typeUrl: string;
                            value: _178.MsgUpdateParams;
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
                        recoverClient(value: _178.MsgRecoverClient): {
                            typeUrl: string;
                            value: _178.MsgRecoverClient;
                        };
                        iBCSoftwareUpgrade(value: _178.MsgIBCSoftwareUpgrade): {
                            typeUrl: string;
                            value: _178.MsgIBCSoftwareUpgrade;
                        };
                        updateClientParams(value: _178.MsgUpdateParams): {
                            typeUrl: string;
                            value: _178.MsgUpdateParams;
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
                    "/ibc.core.client.v1.MsgRecoverClient": {
                        aminoType: string;
                        toAmino: (message: _178.MsgRecoverClient) => _178.MsgRecoverClientAmino;
                        fromAmino: (object: _178.MsgRecoverClientAmino) => _178.MsgRecoverClient;
                    };
                    "/ibc.core.client.v1.MsgIBCSoftwareUpgrade": {
                        aminoType: string;
                        toAmino: (message: _178.MsgIBCSoftwareUpgrade) => _178.MsgIBCSoftwareUpgradeAmino;
                        fromAmino: (object: _178.MsgIBCSoftwareUpgradeAmino) => _178.MsgIBCSoftwareUpgrade;
                    };
                    "/ibc.core.client.v1.MsgUpdateParams": {
                        aminoType: string;
                        toAmino: (message: _178.MsgUpdateParams) => _178.MsgUpdateParamsAmino;
                        fromAmino: (object: _178.MsgUpdateParamsAmino) => _178.MsgUpdateParams;
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
                MsgRecoverClient: {
                    typeUrl: string;
                    encode(message: _178.MsgRecoverClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.MsgRecoverClient;
                    fromPartial(object: Partial<_178.MsgRecoverClient>): _178.MsgRecoverClient;
                    fromAmino(object: _178.MsgRecoverClientAmino): _178.MsgRecoverClient;
                    toAmino(message: _178.MsgRecoverClient): _178.MsgRecoverClientAmino;
                    fromAminoMsg(object: _178.MsgRecoverClientAminoMsg): _178.MsgRecoverClient;
                    toAminoMsg(message: _178.MsgRecoverClient): _178.MsgRecoverClientAminoMsg;
                    fromProtoMsg(message: _178.MsgRecoverClientProtoMsg): _178.MsgRecoverClient;
                    toProto(message: _178.MsgRecoverClient): Uint8Array;
                    toProtoMsg(message: _178.MsgRecoverClient): _178.MsgRecoverClientProtoMsg;
                };
                MsgRecoverClientResponse: {
                    typeUrl: string;
                    encode(_: _178.MsgRecoverClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.MsgRecoverClientResponse;
                    fromPartial(_: Partial<_178.MsgRecoverClientResponse>): _178.MsgRecoverClientResponse;
                    fromAmino(_: _178.MsgRecoverClientResponseAmino): _178.MsgRecoverClientResponse;
                    toAmino(_: _178.MsgRecoverClientResponse): _178.MsgRecoverClientResponseAmino;
                    fromAminoMsg(object: _178.MsgRecoverClientResponseAminoMsg): _178.MsgRecoverClientResponse;
                    toAminoMsg(message: _178.MsgRecoverClientResponse): _178.MsgRecoverClientResponseAminoMsg;
                    fromProtoMsg(message: _178.MsgRecoverClientResponseProtoMsg): _178.MsgRecoverClientResponse;
                    toProto(message: _178.MsgRecoverClientResponse): Uint8Array;
                    toProtoMsg(message: _178.MsgRecoverClientResponse): _178.MsgRecoverClientResponseProtoMsg;
                };
                MsgIBCSoftwareUpgrade: {
                    typeUrl: string;
                    encode(message: _178.MsgIBCSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.MsgIBCSoftwareUpgrade;
                    fromPartial(object: Partial<_178.MsgIBCSoftwareUpgrade>): _178.MsgIBCSoftwareUpgrade;
                    fromAmino(object: _178.MsgIBCSoftwareUpgradeAmino): _178.MsgIBCSoftwareUpgrade;
                    toAmino(message: _178.MsgIBCSoftwareUpgrade): _178.MsgIBCSoftwareUpgradeAmino;
                    fromAminoMsg(object: _178.MsgIBCSoftwareUpgradeAminoMsg): _178.MsgIBCSoftwareUpgrade;
                    toAminoMsg(message: _178.MsgIBCSoftwareUpgrade): _178.MsgIBCSoftwareUpgradeAminoMsg;
                    fromProtoMsg(message: _178.MsgIBCSoftwareUpgradeProtoMsg): _178.MsgIBCSoftwareUpgrade;
                    toProto(message: _178.MsgIBCSoftwareUpgrade): Uint8Array;
                    toProtoMsg(message: _178.MsgIBCSoftwareUpgrade): _178.MsgIBCSoftwareUpgradeProtoMsg;
                };
                MsgIBCSoftwareUpgradeResponse: {
                    typeUrl: string;
                    encode(_: _178.MsgIBCSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.MsgIBCSoftwareUpgradeResponse;
                    fromPartial(_: Partial<_178.MsgIBCSoftwareUpgradeResponse>): _178.MsgIBCSoftwareUpgradeResponse;
                    fromAmino(_: _178.MsgIBCSoftwareUpgradeResponseAmino): _178.MsgIBCSoftwareUpgradeResponse;
                    toAmino(_: _178.MsgIBCSoftwareUpgradeResponse): _178.MsgIBCSoftwareUpgradeResponseAmino;
                    fromAminoMsg(object: _178.MsgIBCSoftwareUpgradeResponseAminoMsg): _178.MsgIBCSoftwareUpgradeResponse;
                    toAminoMsg(message: _178.MsgIBCSoftwareUpgradeResponse): _178.MsgIBCSoftwareUpgradeResponseAminoMsg;
                    fromProtoMsg(message: _178.MsgIBCSoftwareUpgradeResponseProtoMsg): _178.MsgIBCSoftwareUpgradeResponse;
                    toProto(message: _178.MsgIBCSoftwareUpgradeResponse): Uint8Array;
                    toProtoMsg(message: _178.MsgIBCSoftwareUpgradeResponse): _178.MsgIBCSoftwareUpgradeResponseProtoMsg;
                };
                MsgUpdateParams: {
                    typeUrl: string;
                    encode(message: _178.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.MsgUpdateParams;
                    fromPartial(object: Partial<_178.MsgUpdateParams>): _178.MsgUpdateParams;
                    fromAmino(object: _178.MsgUpdateParamsAmino): _178.MsgUpdateParams;
                    toAmino(message: _178.MsgUpdateParams): _178.MsgUpdateParamsAmino;
                    fromAminoMsg(object: _178.MsgUpdateParamsAminoMsg): _178.MsgUpdateParams;
                    toAminoMsg(message: _178.MsgUpdateParams): _178.MsgUpdateParamsAminoMsg;
                    fromProtoMsg(message: _178.MsgUpdateParamsProtoMsg): _178.MsgUpdateParams;
                    toProto(message: _178.MsgUpdateParams): Uint8Array;
                    toProtoMsg(message: _178.MsgUpdateParams): _178.MsgUpdateParamsProtoMsg;
                };
                MsgUpdateParamsResponse: {
                    typeUrl: string;
                    encode(_: _178.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.MsgUpdateParamsResponse;
                    fromPartial(_: Partial<_178.MsgUpdateParamsResponse>): _178.MsgUpdateParamsResponse;
                    fromAmino(_: _178.MsgUpdateParamsResponseAmino): _178.MsgUpdateParamsResponse;
                    toAmino(_: _178.MsgUpdateParamsResponse): _178.MsgUpdateParamsResponseAmino;
                    fromAminoMsg(object: _178.MsgUpdateParamsResponseAminoMsg): _178.MsgUpdateParamsResponse;
                    toAminoMsg(message: _178.MsgUpdateParamsResponse): _178.MsgUpdateParamsResponseAminoMsg;
                    fromProtoMsg(message: _178.MsgUpdateParamsResponseProtoMsg): _178.MsgUpdateParamsResponse;
                    toProto(message: _178.MsgUpdateParamsResponse): Uint8Array;
                    toProtoMsg(message: _178.MsgUpdateParamsResponse): _178.MsgUpdateParamsResponseProtoMsg;
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
                QueryVerifyMembershipRequest: {
                    typeUrl: string;
                    encode(message: _177.QueryVerifyMembershipRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.QueryVerifyMembershipRequest;
                    fromPartial(object: Partial<_177.QueryVerifyMembershipRequest>): _177.QueryVerifyMembershipRequest;
                    fromAmino(object: _177.QueryVerifyMembershipRequestAmino): _177.QueryVerifyMembershipRequest;
                    toAmino(message: _177.QueryVerifyMembershipRequest): _177.QueryVerifyMembershipRequestAmino;
                    fromAminoMsg(object: _177.QueryVerifyMembershipRequestAminoMsg): _177.QueryVerifyMembershipRequest;
                    toAminoMsg(message: _177.QueryVerifyMembershipRequest): _177.QueryVerifyMembershipRequestAminoMsg;
                    fromProtoMsg(message: _177.QueryVerifyMembershipRequestProtoMsg): _177.QueryVerifyMembershipRequest;
                    toProto(message: _177.QueryVerifyMembershipRequest): Uint8Array;
                    toProtoMsg(message: _177.QueryVerifyMembershipRequest): _177.QueryVerifyMembershipRequestProtoMsg;
                };
                QueryVerifyMembershipResponse: {
                    typeUrl: string;
                    encode(message: _177.QueryVerifyMembershipResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.QueryVerifyMembershipResponse;
                    fromPartial(object: Partial<_177.QueryVerifyMembershipResponse>): _177.QueryVerifyMembershipResponse;
                    fromAmino(object: _177.QueryVerifyMembershipResponseAmino): _177.QueryVerifyMembershipResponse;
                    toAmino(message: _177.QueryVerifyMembershipResponse): _177.QueryVerifyMembershipResponseAmino;
                    fromAminoMsg(object: _177.QueryVerifyMembershipResponseAminoMsg): _177.QueryVerifyMembershipResponse;
                    toAminoMsg(message: _177.QueryVerifyMembershipResponse): _177.QueryVerifyMembershipResponseAminoMsg;
                    fromProtoMsg(message: _177.QueryVerifyMembershipResponseProtoMsg): _177.QueryVerifyMembershipResponse;
                    toProto(message: _177.QueryVerifyMembershipResponse): Uint8Array;
                    toProtoMsg(message: _177.QueryVerifyMembershipResponse): _177.QueryVerifyMembershipResponseProtoMsg;
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
                MsgClientImpl: typeof _384.MsgClientImpl;
                QueryClientImpl: typeof _376.QueryClientImpl;
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
                        updateConnectionParams(value: _183.MsgUpdateParams): {
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
                        updateConnectionParams(value: _183.MsgUpdateParams): {
                            typeUrl: string;
                            value: _183.MsgUpdateParams;
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
                        updateConnectionParams(value: _183.MsgUpdateParams): {
                            typeUrl: string;
                            value: _183.MsgUpdateParams;
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
                    "/ibc.core.connection.v1.MsgUpdateParams": {
                        aminoType: string;
                        toAmino: (message: _183.MsgUpdateParams) => _183.MsgUpdateParamsAmino;
                        fromAmino: (object: _183.MsgUpdateParamsAmino) => _183.MsgUpdateParams;
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
                MsgUpdateParams: {
                    typeUrl: string;
                    encode(message: _183.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgUpdateParams;
                    fromPartial(object: Partial<_183.MsgUpdateParams>): _183.MsgUpdateParams;
                    fromAmino(object: _183.MsgUpdateParamsAmino): _183.MsgUpdateParams;
                    toAmino(message: _183.MsgUpdateParams): _183.MsgUpdateParamsAmino;
                    fromAminoMsg(object: _183.MsgUpdateParamsAminoMsg): _183.MsgUpdateParams;
                    toAminoMsg(message: _183.MsgUpdateParams): _183.MsgUpdateParamsAminoMsg;
                    fromProtoMsg(message: _183.MsgUpdateParamsProtoMsg): _183.MsgUpdateParams;
                    toProto(message: _183.MsgUpdateParams): Uint8Array;
                    toProtoMsg(message: _183.MsgUpdateParams): _183.MsgUpdateParamsProtoMsg;
                };
                MsgUpdateParamsResponse: {
                    typeUrl: string;
                    encode(_: _183.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.MsgUpdateParamsResponse;
                    fromPartial(_: Partial<_183.MsgUpdateParamsResponse>): _183.MsgUpdateParamsResponse;
                    fromAmino(_: _183.MsgUpdateParamsResponseAmino): _183.MsgUpdateParamsResponse;
                    toAmino(_: _183.MsgUpdateParamsResponse): _183.MsgUpdateParamsResponseAmino;
                    fromAminoMsg(object: _183.MsgUpdateParamsResponseAminoMsg): _183.MsgUpdateParamsResponse;
                    toAminoMsg(message: _183.MsgUpdateParamsResponse): _183.MsgUpdateParamsResponseAminoMsg;
                    fromProtoMsg(message: _183.MsgUpdateParamsResponseProtoMsg): _183.MsgUpdateParamsResponse;
                    toProto(message: _183.MsgUpdateParamsResponse): Uint8Array;
                    toProtoMsg(message: _183.MsgUpdateParamsResponse): _183.MsgUpdateParamsResponseProtoMsg;
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
        namespace wasm {
            const v1: {
                MsgClientImpl: typeof _385.MsgClientImpl;
                QueryClientImpl: typeof _377.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    checksums(request?: _190.QueryChecksumsRequest): Promise<_190.QueryChecksumsResponse>;
                    code(request: _190.QueryCodeRequest): Promise<_190.QueryCodeResponse>;
                };
                registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        storeCode(value: _191.MsgStoreCode): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        removeChecksum(value: _191.MsgRemoveChecksum): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        migrateContract(value: _191.MsgMigrateContract): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        storeCode(value: _191.MsgStoreCode): {
                            typeUrl: string;
                            value: _191.MsgStoreCode;
                        };
                        removeChecksum(value: _191.MsgRemoveChecksum): {
                            typeUrl: string;
                            value: _191.MsgRemoveChecksum;
                        };
                        migrateContract(value: _191.MsgMigrateContract): {
                            typeUrl: string;
                            value: _191.MsgMigrateContract;
                        };
                    };
                    fromPartial: {
                        storeCode(value: _191.MsgStoreCode): {
                            typeUrl: string;
                            value: _191.MsgStoreCode;
                        };
                        removeChecksum(value: _191.MsgRemoveChecksum): {
                            typeUrl: string;
                            value: _191.MsgRemoveChecksum;
                        };
                        migrateContract(value: _191.MsgMigrateContract): {
                            typeUrl: string;
                            value: _191.MsgMigrateContract;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.lightclients.wasm.v1.MsgStoreCode": {
                        aminoType: string;
                        toAmino: (message: _191.MsgStoreCode) => _191.MsgStoreCodeAmino;
                        fromAmino: (object: _191.MsgStoreCodeAmino) => _191.MsgStoreCode;
                    };
                    "/ibc.lightclients.wasm.v1.MsgRemoveChecksum": {
                        aminoType: string;
                        toAmino: (message: _191.MsgRemoveChecksum) => _191.MsgRemoveChecksumAmino;
                        fromAmino: (object: _191.MsgRemoveChecksumAmino) => _191.MsgRemoveChecksum;
                    };
                    "/ibc.lightclients.wasm.v1.MsgMigrateContract": {
                        aminoType: string;
                        toAmino: (message: _191.MsgMigrateContract) => _191.MsgMigrateContractAmino;
                        fromAmino: (object: _191.MsgMigrateContractAmino) => _191.MsgMigrateContract;
                    };
                };
                ClientState: {
                    typeUrl: string;
                    encode(message: _192.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.ClientState;
                    fromPartial(object: Partial<_192.ClientState>): _192.ClientState;
                    fromAmino(object: _192.ClientStateAmino): _192.ClientState;
                    toAmino(message: _192.ClientState): _192.ClientStateAmino;
                    fromAminoMsg(object: _192.ClientStateAminoMsg): _192.ClientState;
                    toAminoMsg(message: _192.ClientState): _192.ClientStateAminoMsg;
                    fromProtoMsg(message: _192.ClientStateProtoMsg): _192.ClientState;
                    toProto(message: _192.ClientState): Uint8Array;
                    toProtoMsg(message: _192.ClientState): _192.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _192.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.ConsensusState;
                    fromPartial(object: Partial<_192.ConsensusState>): _192.ConsensusState;
                    fromAmino(object: _192.ConsensusStateAmino): _192.ConsensusState;
                    toAmino(message: _192.ConsensusState): _192.ConsensusStateAmino;
                    fromAminoMsg(object: _192.ConsensusStateAminoMsg): _192.ConsensusState;
                    toAminoMsg(message: _192.ConsensusState): _192.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _192.ConsensusStateProtoMsg): _192.ConsensusState;
                    toProto(message: _192.ConsensusState): Uint8Array;
                    toProtoMsg(message: _192.ConsensusState): _192.ConsensusStateProtoMsg;
                };
                ClientMessage: {
                    typeUrl: string;
                    encode(message: _192.ClientMessage, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.ClientMessage;
                    fromPartial(object: Partial<_192.ClientMessage>): _192.ClientMessage;
                    fromAmino(object: _192.ClientMessageAmino): _192.ClientMessage;
                    toAmino(message: _192.ClientMessage): _192.ClientMessageAmino;
                    fromAminoMsg(object: _192.ClientMessageAminoMsg): _192.ClientMessage;
                    toAminoMsg(message: _192.ClientMessage): _192.ClientMessageAminoMsg;
                    fromProtoMsg(message: _192.ClientMessageProtoMsg): _192.ClientMessage;
                    toProto(message: _192.ClientMessage): Uint8Array;
                    toProtoMsg(message: _192.ClientMessage): _192.ClientMessageProtoMsg;
                };
                Checksums: {
                    typeUrl: string;
                    encode(message: _192.Checksums, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.Checksums;
                    fromPartial(object: Partial<_192.Checksums>): _192.Checksums;
                    fromAmino(object: _192.ChecksumsAmino): _192.Checksums;
                    toAmino(message: _192.Checksums): _192.ChecksumsAmino;
                    fromAminoMsg(object: _192.ChecksumsAminoMsg): _192.Checksums;
                    toAminoMsg(message: _192.Checksums): _192.ChecksumsAminoMsg;
                    fromProtoMsg(message: _192.ChecksumsProtoMsg): _192.Checksums;
                    toProto(message: _192.Checksums): Uint8Array;
                    toProtoMsg(message: _192.Checksums): _192.ChecksumsProtoMsg;
                };
                MsgStoreCode: {
                    typeUrl: string;
                    encode(message: _191.MsgStoreCode, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _191.MsgStoreCode;
                    fromPartial(object: Partial<_191.MsgStoreCode>): _191.MsgStoreCode;
                    fromAmino(object: _191.MsgStoreCodeAmino): _191.MsgStoreCode;
                    toAmino(message: _191.MsgStoreCode): _191.MsgStoreCodeAmino;
                    fromAminoMsg(object: _191.MsgStoreCodeAminoMsg): _191.MsgStoreCode;
                    toAminoMsg(message: _191.MsgStoreCode): _191.MsgStoreCodeAminoMsg;
                    fromProtoMsg(message: _191.MsgStoreCodeProtoMsg): _191.MsgStoreCode;
                    toProto(message: _191.MsgStoreCode): Uint8Array;
                    toProtoMsg(message: _191.MsgStoreCode): _191.MsgStoreCodeProtoMsg;
                };
                MsgStoreCodeResponse: {
                    typeUrl: string;
                    encode(message: _191.MsgStoreCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _191.MsgStoreCodeResponse;
                    fromPartial(object: Partial<_191.MsgStoreCodeResponse>): _191.MsgStoreCodeResponse;
                    fromAmino(object: _191.MsgStoreCodeResponseAmino): _191.MsgStoreCodeResponse;
                    toAmino(message: _191.MsgStoreCodeResponse): _191.MsgStoreCodeResponseAmino;
                    fromAminoMsg(object: _191.MsgStoreCodeResponseAminoMsg): _191.MsgStoreCodeResponse;
                    toAminoMsg(message: _191.MsgStoreCodeResponse): _191.MsgStoreCodeResponseAminoMsg;
                    fromProtoMsg(message: _191.MsgStoreCodeResponseProtoMsg): _191.MsgStoreCodeResponse;
                    toProto(message: _191.MsgStoreCodeResponse): Uint8Array;
                    toProtoMsg(message: _191.MsgStoreCodeResponse): _191.MsgStoreCodeResponseProtoMsg;
                };
                MsgRemoveChecksum: {
                    typeUrl: string;
                    encode(message: _191.MsgRemoveChecksum, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _191.MsgRemoveChecksum;
                    fromPartial(object: Partial<_191.MsgRemoveChecksum>): _191.MsgRemoveChecksum;
                    fromAmino(object: _191.MsgRemoveChecksumAmino): _191.MsgRemoveChecksum;
                    toAmino(message: _191.MsgRemoveChecksum): _191.MsgRemoveChecksumAmino;
                    fromAminoMsg(object: _191.MsgRemoveChecksumAminoMsg): _191.MsgRemoveChecksum;
                    toAminoMsg(message: _191.MsgRemoveChecksum): _191.MsgRemoveChecksumAminoMsg;
                    fromProtoMsg(message: _191.MsgRemoveChecksumProtoMsg): _191.MsgRemoveChecksum;
                    toProto(message: _191.MsgRemoveChecksum): Uint8Array;
                    toProtoMsg(message: _191.MsgRemoveChecksum): _191.MsgRemoveChecksumProtoMsg;
                };
                MsgRemoveChecksumResponse: {
                    typeUrl: string;
                    encode(_: _191.MsgRemoveChecksumResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _191.MsgRemoveChecksumResponse;
                    fromPartial(_: Partial<_191.MsgRemoveChecksumResponse>): _191.MsgRemoveChecksumResponse;
                    fromAmino(_: _191.MsgRemoveChecksumResponseAmino): _191.MsgRemoveChecksumResponse;
                    toAmino(_: _191.MsgRemoveChecksumResponse): _191.MsgRemoveChecksumResponseAmino;
                    fromAminoMsg(object: _191.MsgRemoveChecksumResponseAminoMsg): _191.MsgRemoveChecksumResponse;
                    toAminoMsg(message: _191.MsgRemoveChecksumResponse): _191.MsgRemoveChecksumResponseAminoMsg;
                    fromProtoMsg(message: _191.MsgRemoveChecksumResponseProtoMsg): _191.MsgRemoveChecksumResponse;
                    toProto(message: _191.MsgRemoveChecksumResponse): Uint8Array;
                    toProtoMsg(message: _191.MsgRemoveChecksumResponse): _191.MsgRemoveChecksumResponseProtoMsg;
                };
                MsgMigrateContract: {
                    typeUrl: string;
                    encode(message: _191.MsgMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _191.MsgMigrateContract;
                    fromPartial(object: Partial<_191.MsgMigrateContract>): _191.MsgMigrateContract;
                    fromAmino(object: _191.MsgMigrateContractAmino): _191.MsgMigrateContract;
                    toAmino(message: _191.MsgMigrateContract): _191.MsgMigrateContractAmino;
                    fromAminoMsg(object: _191.MsgMigrateContractAminoMsg): _191.MsgMigrateContract;
                    toAminoMsg(message: _191.MsgMigrateContract): _191.MsgMigrateContractAminoMsg;
                    fromProtoMsg(message: _191.MsgMigrateContractProtoMsg): _191.MsgMigrateContract;
                    toProto(message: _191.MsgMigrateContract): Uint8Array;
                    toProtoMsg(message: _191.MsgMigrateContract): _191.MsgMigrateContractProtoMsg;
                };
                MsgMigrateContractResponse: {
                    typeUrl: string;
                    encode(_: _191.MsgMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _191.MsgMigrateContractResponse;
                    fromPartial(_: Partial<_191.MsgMigrateContractResponse>): _191.MsgMigrateContractResponse;
                    fromAmino(_: _191.MsgMigrateContractResponseAmino): _191.MsgMigrateContractResponse;
                    toAmino(_: _191.MsgMigrateContractResponse): _191.MsgMigrateContractResponseAmino;
                    fromAminoMsg(object: _191.MsgMigrateContractResponseAminoMsg): _191.MsgMigrateContractResponse;
                    toAminoMsg(message: _191.MsgMigrateContractResponse): _191.MsgMigrateContractResponseAminoMsg;
                    fromProtoMsg(message: _191.MsgMigrateContractResponseProtoMsg): _191.MsgMigrateContractResponse;
                    toProto(message: _191.MsgMigrateContractResponse): Uint8Array;
                    toProtoMsg(message: _191.MsgMigrateContractResponse): _191.MsgMigrateContractResponseProtoMsg;
                };
                QueryChecksumsRequest: {
                    typeUrl: string;
                    encode(message: _190.QueryChecksumsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.QueryChecksumsRequest;
                    fromPartial(object: Partial<_190.QueryChecksumsRequest>): _190.QueryChecksumsRequest;
                    fromAmino(object: _190.QueryChecksumsRequestAmino): _190.QueryChecksumsRequest;
                    toAmino(message: _190.QueryChecksumsRequest): _190.QueryChecksumsRequestAmino;
                    fromAminoMsg(object: _190.QueryChecksumsRequestAminoMsg): _190.QueryChecksumsRequest;
                    toAminoMsg(message: _190.QueryChecksumsRequest): _190.QueryChecksumsRequestAminoMsg;
                    fromProtoMsg(message: _190.QueryChecksumsRequestProtoMsg): _190.QueryChecksumsRequest;
                    toProto(message: _190.QueryChecksumsRequest): Uint8Array;
                    toProtoMsg(message: _190.QueryChecksumsRequest): _190.QueryChecksumsRequestProtoMsg;
                };
                QueryChecksumsResponse: {
                    typeUrl: string;
                    encode(message: _190.QueryChecksumsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.QueryChecksumsResponse;
                    fromPartial(object: Partial<_190.QueryChecksumsResponse>): _190.QueryChecksumsResponse;
                    fromAmino(object: _190.QueryChecksumsResponseAmino): _190.QueryChecksumsResponse;
                    toAmino(message: _190.QueryChecksumsResponse): _190.QueryChecksumsResponseAmino;
                    fromAminoMsg(object: _190.QueryChecksumsResponseAminoMsg): _190.QueryChecksumsResponse;
                    toAminoMsg(message: _190.QueryChecksumsResponse): _190.QueryChecksumsResponseAminoMsg;
                    fromProtoMsg(message: _190.QueryChecksumsResponseProtoMsg): _190.QueryChecksumsResponse;
                    toProto(message: _190.QueryChecksumsResponse): Uint8Array;
                    toProtoMsg(message: _190.QueryChecksumsResponse): _190.QueryChecksumsResponseProtoMsg;
                };
                QueryCodeRequest: {
                    typeUrl: string;
                    encode(message: _190.QueryCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.QueryCodeRequest;
                    fromPartial(object: Partial<_190.QueryCodeRequest>): _190.QueryCodeRequest;
                    fromAmino(object: _190.QueryCodeRequestAmino): _190.QueryCodeRequest;
                    toAmino(message: _190.QueryCodeRequest): _190.QueryCodeRequestAmino;
                    fromAminoMsg(object: _190.QueryCodeRequestAminoMsg): _190.QueryCodeRequest;
                    toAminoMsg(message: _190.QueryCodeRequest): _190.QueryCodeRequestAminoMsg;
                    fromProtoMsg(message: _190.QueryCodeRequestProtoMsg): _190.QueryCodeRequest;
                    toProto(message: _190.QueryCodeRequest): Uint8Array;
                    toProtoMsg(message: _190.QueryCodeRequest): _190.QueryCodeRequestProtoMsg;
                };
                QueryCodeResponse: {
                    typeUrl: string;
                    encode(message: _190.QueryCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.QueryCodeResponse;
                    fromPartial(object: Partial<_190.QueryCodeResponse>): _190.QueryCodeResponse;
                    fromAmino(object: _190.QueryCodeResponseAmino): _190.QueryCodeResponse;
                    toAmino(message: _190.QueryCodeResponse): _190.QueryCodeResponseAmino;
                    fromAminoMsg(object: _190.QueryCodeResponseAminoMsg): _190.QueryCodeResponse;
                    toAminoMsg(message: _190.QueryCodeResponse): _190.QueryCodeResponseAminoMsg;
                    fromProtoMsg(message: _190.QueryCodeResponseProtoMsg): _190.QueryCodeResponse;
                    toProto(message: _190.QueryCodeResponse): Uint8Array;
                    toProtoMsg(message: _190.QueryCodeResponse): _190.QueryCodeResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _189.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.GenesisState;
                    fromPartial(object: Partial<_189.GenesisState>): _189.GenesisState;
                    fromAmino(object: _189.GenesisStateAmino): _189.GenesisState;
                    toAmino(message: _189.GenesisState): _189.GenesisStateAmino;
                    fromAminoMsg(object: _189.GenesisStateAminoMsg): _189.GenesisState;
                    toAminoMsg(message: _189.GenesisState): _189.GenesisStateAminoMsg;
                    fromProtoMsg(message: _189.GenesisStateProtoMsg): _189.GenesisState;
                    toProto(message: _189.GenesisState): Uint8Array;
                    toProtoMsg(message: _189.GenesisState): _189.GenesisStateProtoMsg;
                };
                Contract: {
                    typeUrl: string;
                    encode(message: _189.Contract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.Contract;
                    fromPartial(object: Partial<_189.Contract>): _189.Contract;
                    fromAmino(object: _189.ContractAmino): _189.Contract;
                    toAmino(message: _189.Contract): _189.ContractAmino;
                    fromAminoMsg(object: _189.ContractAminoMsg): _189.Contract;
                    toAminoMsg(message: _189.Contract): _189.ContractAminoMsg;
                    fromProtoMsg(message: _189.ContractProtoMsg): _189.Contract;
                    toProto(message: _189.Contract): Uint8Array;
                    toProtoMsg(message: _189.Contract): _189.ContractProtoMsg;
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
                circuit: {
                    v1: import("../cosmos/circuit/v1/tx.rpc.msg").MsgClientImpl;
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
                        v1: _378.MsgClientImpl;
                    };
                    interchain_accounts: {
                        controller: {
                            v1: _379.MsgClientImpl;
                        };
                        host: {
                            v1: _380.MsgClientImpl;
                        };
                    };
                    transfer: {
                        v1: _381.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _382.MsgClientImpl;
                    };
                    client: {
                        v1: _383.MsgClientImpl;
                    };
                    connection: {
                        v1: _384.MsgClientImpl;
                    };
                };
                lightclients: {
                    wasm: {
                        v1: _385.MsgClientImpl;
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
                        denomMetadataByQueryString(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataByQueryStringRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataByQueryStringResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                        denomOwnersByQuery(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersByQueryRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersByQueryResponse>;
                        sendEnabled(request: import("../cosmos/bank/v1beta1/query").QuerySendEnabledRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySendEnabledResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: import("../cosmos/base/node/v1beta1/query").ConfigRequest): Promise<import("../cosmos/base/node/v1beta1/query").ConfigResponse>;
                            status(request?: import("../cosmos/base/node/v1beta1/query").StatusRequest): Promise<import("../cosmos/base/node/v1beta1/query").StatusResponse>;
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
                circuit: {
                    v1: {
                        account(request: import("../cosmos/circuit/v1/query").QueryAccountRequest): Promise<import("../cosmos/circuit/v1/query").AccountResponse>;
                        accounts(request?: import("../cosmos/circuit/v1/query").QueryAccountsRequest): Promise<import("../cosmos/circuit/v1/query").AccountsResponse>;
                        disabledList(request?: import("../cosmos/circuit/v1/query").QueryDisabledListRequest): Promise<import("../cosmos/circuit/v1/query").DisabledListResponse>;
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
                        constitution(request?: import("../cosmos/gov/v1/query").QueryConstitutionRequest): Promise<import("../cosmos/gov/v1/query").QueryConstitutionResponse>;
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
                            incentivizedPackets(request: _152.QueryIncentivizedPacketsRequest): Promise<_152.QueryIncentivizedPacketsResponse>;
                            incentivizedPacket(request: _152.QueryIncentivizedPacketRequest): Promise<_152.QueryIncentivizedPacketResponse>;
                            incentivizedPacketsForChannel(request: _152.QueryIncentivizedPacketsForChannelRequest): Promise<_152.QueryIncentivizedPacketsForChannelResponse>;
                            totalRecvFees(request: _152.QueryTotalRecvFeesRequest): Promise<_152.QueryTotalRecvFeesResponse>;
                            totalAckFees(request: _152.QueryTotalAckFeesRequest): Promise<_152.QueryTotalAckFeesResponse>;
                            totalTimeoutFees(request: _152.QueryTotalTimeoutFeesRequest): Promise<_152.QueryTotalTimeoutFeesResponse>;
                            payee(request: _152.QueryPayeeRequest): Promise<_152.QueryPayeeResponse>;
                            counterpartyPayee(request: _152.QueryCounterpartyPayeeRequest): Promise<_152.QueryCounterpartyPayeeResponse>;
                            feeEnabledChannels(request: _152.QueryFeeEnabledChannelsRequest): Promise<_152.QueryFeeEnabledChannelsResponse>;
                            feeEnabledChannel(request: _152.QueryFeeEnabledChannelRequest): Promise<_152.QueryFeeEnabledChannelResponse>;
                        };
                    };
                    interchain_accounts: {
                        controller: {
                            v1: {
                                interchainAccount(request: _155.QueryInterchainAccountRequest): Promise<_155.QueryInterchainAccountResponse>;
                                params(request?: _155.QueryParamsRequest): Promise<_155.QueryParamsResponse>;
                            };
                        };
                        host: {
                            v1: {
                                params(request?: _159.QueryParamsRequest): Promise<_159.QueryParamsResponse>;
                            };
                        };
                    };
                    transfer: {
                        v1: {
                            denomTraces(request?: _166.QueryDenomTracesRequest): Promise<_166.QueryDenomTracesResponse>;
                            denomTrace(request: _166.QueryDenomTraceRequest): Promise<_166.QueryDenomTraceResponse>;
                            params(request?: _166.QueryParamsRequest): Promise<_166.QueryParamsResponse>;
                            denomHash(request: _166.QueryDenomHashRequest): Promise<_166.QueryDenomHashResponse>;
                            escrowAddress(request: _166.QueryEscrowAddressRequest): Promise<_166.QueryEscrowAddressResponse>;
                            totalEscrowForDenom(request: _166.QueryTotalEscrowForDenomRequest): Promise<_166.QueryTotalEscrowForDenomResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _172.QueryChannelRequest): Promise<_172.QueryChannelResponse>;
                            channels(request?: _172.QueryChannelsRequest): Promise<_172.QueryChannelsResponse>;
                            connectionChannels(request: _172.QueryConnectionChannelsRequest): Promise<_172.QueryConnectionChannelsResponse>;
                            channelClientState(request: _172.QueryChannelClientStateRequest): Promise<_172.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _172.QueryChannelConsensusStateRequest): Promise<_172.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _172.QueryPacketCommitmentRequest): Promise<_172.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _172.QueryPacketCommitmentsRequest): Promise<_172.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _172.QueryPacketReceiptRequest): Promise<_172.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _172.QueryPacketAcknowledgementRequest): Promise<_172.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _172.QueryPacketAcknowledgementsRequest): Promise<_172.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _172.QueryUnreceivedPacketsRequest): Promise<_172.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _172.QueryUnreceivedAcksRequest): Promise<_172.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _172.QueryNextSequenceReceiveRequest): Promise<_172.QueryNextSequenceReceiveResponse>;
                            nextSequenceSend(request: _172.QueryNextSequenceSendRequest): Promise<_172.QueryNextSequenceSendResponse>;
                            upgradeError(request: _172.QueryUpgradeErrorRequest): Promise<_172.QueryUpgradeErrorResponse>;
                            upgrade(request: _172.QueryUpgradeRequest): Promise<_172.QueryUpgradeResponse>;
                            channelParams(request?: _172.QueryChannelParamsRequest): Promise<_172.QueryChannelParamsResponse>;
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
                            verifyMembership(request: _177.QueryVerifyMembershipRequest): Promise<_177.QueryVerifyMembershipResponse>;
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
                lightclients: {
                    wasm: {
                        v1: {
                            checksums(request?: _190.QueryChecksumsRequest): Promise<_190.QueryChecksumsResponse>;
                            code(request: _190.QueryCodeRequest): Promise<_190.QueryCodeResponse>;
                        };
                    };
                };
            };
        }>;
    };
}
