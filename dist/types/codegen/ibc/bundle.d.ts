import * as _154 from "./applications/fee/v1/ack";
import * as _155 from "./applications/fee/v1/fee";
import * as _156 from "./applications/fee/v1/genesis";
import * as _157 from "./applications/fee/v1/metadata";
import * as _158 from "./applications/fee/v1/query";
import * as _159 from "./applications/fee/v1/tx";
import * as _160 from "./applications/interchain_accounts/controller/v1/controller";
import * as _161 from "./applications/interchain_accounts/controller/v1/query";
import * as _162 from "./applications/interchain_accounts/controller/v1/tx";
import * as _163 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _164 from "./applications/interchain_accounts/host/v1/host";
import * as _165 from "./applications/interchain_accounts/host/v1/query";
import * as _166 from "./applications/interchain_accounts/host/v1/tx";
import * as _167 from "./applications/interchain_accounts/v1/account";
import * as _168 from "./applications/interchain_accounts/v1/metadata";
import * as _169 from "./applications/interchain_accounts/v1/packet";
import * as _170 from "./applications/transfer/v1/authz";
import * as _171 from "./applications/transfer/v1/genesis";
import * as _172 from "./applications/transfer/v1/query";
import * as _173 from "./applications/transfer/v1/transfer";
import * as _174 from "./applications/transfer/v1/tx";
import * as _175 from "./applications/transfer/v2/packet";
import * as _176 from "./core/channel/v1/channel";
import * as _177 from "./core/channel/v1/genesis";
import * as _178 from "./core/channel/v1/query";
import * as _179 from "./core/channel/v1/tx";
import * as _180 from "./core/channel/v1/upgrade";
import * as _181 from "./core/client/v1/client";
import * as _182 from "./core/client/v1/genesis";
import * as _183 from "./core/client/v1/query";
import * as _184 from "./core/client/v1/tx";
import * as _185 from "./core/commitment/v1/commitment";
import * as _186 from "./core/connection/v1/connection";
import * as _187 from "./core/connection/v1/genesis";
import * as _188 from "./core/connection/v1/query";
import * as _189 from "./core/connection/v1/tx";
import * as _190 from "./core/types/v1/genesis";
import * as _191 from "./lightclients/localhost/v2/localhost";
import * as _192 from "./lightclients/solomachine/v2/solomachine";
import * as _193 from "./lightclients/solomachine/v3/solomachine";
import * as _194 from "./lightclients/tendermint/v1/tendermint";
import * as _195 from "./lightclients/wasm/v1/genesis";
import * as _196 from "./lightclients/wasm/v1/query";
import * as _197 from "./lightclients/wasm/v1/tx";
import * as _198 from "./lightclients/wasm/v1/wasm";
import * as _381 from "./applications/fee/v1/query.rpc.Query";
import * as _382 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _383 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _384 from "./applications/transfer/v1/query.rpc.Query";
import * as _385 from "./core/channel/v1/query.rpc.Query";
import * as _386 from "./core/client/v1/query.rpc.Query";
import * as _387 from "./core/connection/v1/query.rpc.Query";
import * as _388 from "./lightclients/wasm/v1/query.rpc.Query";
import * as _389 from "./applications/fee/v1/tx.rpc.msg";
import * as _390 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _391 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _392 from "./applications/transfer/v1/tx.rpc.msg";
import * as _393 from "./core/channel/v1/tx.rpc.msg";
import * as _394 from "./core/client/v1/tx.rpc.msg";
import * as _395 from "./core/connection/v1/tx.rpc.msg";
import * as _396 from "./lightclients/wasm/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace fee {
            const v1: {
                MsgClientImpl: typeof _389.MsgClientImpl;
                QueryClientImpl: typeof _381.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    incentivizedPackets(request: _158.QueryIncentivizedPacketsRequest): Promise<_158.QueryIncentivizedPacketsResponse>;
                    incentivizedPacket(request: _158.QueryIncentivizedPacketRequest): Promise<_158.QueryIncentivizedPacketResponse>;
                    incentivizedPacketsForChannel(request: _158.QueryIncentivizedPacketsForChannelRequest): Promise<_158.QueryIncentivizedPacketsForChannelResponse>;
                    totalRecvFees(request: _158.QueryTotalRecvFeesRequest): Promise<_158.QueryTotalRecvFeesResponse>;
                    totalAckFees(request: _158.QueryTotalAckFeesRequest): Promise<_158.QueryTotalAckFeesResponse>;
                    totalTimeoutFees(request: _158.QueryTotalTimeoutFeesRequest): Promise<_158.QueryTotalTimeoutFeesResponse>;
                    payee(request: _158.QueryPayeeRequest): Promise<_158.QueryPayeeResponse>;
                    counterpartyPayee(request: _158.QueryCounterpartyPayeeRequest): Promise<_158.QueryCounterpartyPayeeResponse>;
                    feeEnabledChannels(request: _158.QueryFeeEnabledChannelsRequest): Promise<_158.QueryFeeEnabledChannelsResponse>;
                    feeEnabledChannel(request: _158.QueryFeeEnabledChannelRequest): Promise<_158.QueryFeeEnabledChannelResponse>;
                };
                registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        registerPayee(value: _159.MsgRegisterPayee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        registerCounterpartyPayee(value: _159.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        payPacketFee(value: _159.MsgPayPacketFee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        payPacketFeeAsync(value: _159.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        registerPayee(value: _159.MsgRegisterPayee): {
                            typeUrl: string;
                            value: _159.MsgRegisterPayee;
                        };
                        registerCounterpartyPayee(value: _159.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: _159.MsgRegisterCounterpartyPayee;
                        };
                        payPacketFee(value: _159.MsgPayPacketFee): {
                            typeUrl: string;
                            value: _159.MsgPayPacketFee;
                        };
                        payPacketFeeAsync(value: _159.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: _159.MsgPayPacketFeeAsync;
                        };
                    };
                    fromPartial: {
                        registerPayee(value: _159.MsgRegisterPayee): {
                            typeUrl: string;
                            value: _159.MsgRegisterPayee;
                        };
                        registerCounterpartyPayee(value: _159.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: _159.MsgRegisterCounterpartyPayee;
                        };
                        payPacketFee(value: _159.MsgPayPacketFee): {
                            typeUrl: string;
                            value: _159.MsgPayPacketFee;
                        };
                        payPacketFeeAsync(value: _159.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: _159.MsgPayPacketFeeAsync;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.fee.v1.MsgRegisterPayee": {
                        aminoType: string;
                        toAmino: (message: _159.MsgRegisterPayee) => _159.MsgRegisterPayeeAmino;
                        fromAmino: (object: _159.MsgRegisterPayeeAmino) => _159.MsgRegisterPayee;
                    };
                    "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee": {
                        aminoType: string;
                        toAmino: (message: _159.MsgRegisterCounterpartyPayee) => _159.MsgRegisterCounterpartyPayeeAmino;
                        fromAmino: (object: _159.MsgRegisterCounterpartyPayeeAmino) => _159.MsgRegisterCounterpartyPayee;
                    };
                    "/ibc.applications.fee.v1.MsgPayPacketFee": {
                        aminoType: string;
                        toAmino: (message: _159.MsgPayPacketFee) => _159.MsgPayPacketFeeAmino;
                        fromAmino: (object: _159.MsgPayPacketFeeAmino) => _159.MsgPayPacketFee;
                    };
                    "/ibc.applications.fee.v1.MsgPayPacketFeeAsync": {
                        aminoType: string;
                        toAmino: (message: _159.MsgPayPacketFeeAsync) => _159.MsgPayPacketFeeAsyncAmino;
                        fromAmino: (object: _159.MsgPayPacketFeeAsyncAmino) => _159.MsgPayPacketFeeAsync;
                    };
                };
                MsgRegisterPayee: {
                    typeUrl: string;
                    encode(message: _159.MsgRegisterPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.MsgRegisterPayee;
                    fromPartial(object: Partial<_159.MsgRegisterPayee>): _159.MsgRegisterPayee;
                    fromAmino(object: _159.MsgRegisterPayeeAmino): _159.MsgRegisterPayee;
                    toAmino(message: _159.MsgRegisterPayee): _159.MsgRegisterPayeeAmino;
                    fromAminoMsg(object: _159.MsgRegisterPayeeAminoMsg): _159.MsgRegisterPayee;
                    toAminoMsg(message: _159.MsgRegisterPayee): _159.MsgRegisterPayeeAminoMsg;
                    fromProtoMsg(message: _159.MsgRegisterPayeeProtoMsg): _159.MsgRegisterPayee;
                    toProto(message: _159.MsgRegisterPayee): Uint8Array;
                    toProtoMsg(message: _159.MsgRegisterPayee): _159.MsgRegisterPayeeProtoMsg;
                };
                MsgRegisterPayeeResponse: {
                    typeUrl: string;
                    encode(_: _159.MsgRegisterPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.MsgRegisterPayeeResponse;
                    fromPartial(_: Partial<_159.MsgRegisterPayeeResponse>): _159.MsgRegisterPayeeResponse;
                    fromAmino(_: _159.MsgRegisterPayeeResponseAmino): _159.MsgRegisterPayeeResponse;
                    toAmino(_: _159.MsgRegisterPayeeResponse): _159.MsgRegisterPayeeResponseAmino;
                    fromAminoMsg(object: _159.MsgRegisterPayeeResponseAminoMsg): _159.MsgRegisterPayeeResponse;
                    toAminoMsg(message: _159.MsgRegisterPayeeResponse): _159.MsgRegisterPayeeResponseAminoMsg;
                    fromProtoMsg(message: _159.MsgRegisterPayeeResponseProtoMsg): _159.MsgRegisterPayeeResponse;
                    toProto(message: _159.MsgRegisterPayeeResponse): Uint8Array;
                    toProtoMsg(message: _159.MsgRegisterPayeeResponse): _159.MsgRegisterPayeeResponseProtoMsg;
                };
                MsgRegisterCounterpartyPayee: {
                    typeUrl: string;
                    encode(message: _159.MsgRegisterCounterpartyPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.MsgRegisterCounterpartyPayee;
                    fromPartial(object: Partial<_159.MsgRegisterCounterpartyPayee>): _159.MsgRegisterCounterpartyPayee;
                    fromAmino(object: _159.MsgRegisterCounterpartyPayeeAmino): _159.MsgRegisterCounterpartyPayee;
                    toAmino(message: _159.MsgRegisterCounterpartyPayee): _159.MsgRegisterCounterpartyPayeeAmino;
                    fromAminoMsg(object: _159.MsgRegisterCounterpartyPayeeAminoMsg): _159.MsgRegisterCounterpartyPayee;
                    toAminoMsg(message: _159.MsgRegisterCounterpartyPayee): _159.MsgRegisterCounterpartyPayeeAminoMsg;
                    fromProtoMsg(message: _159.MsgRegisterCounterpartyPayeeProtoMsg): _159.MsgRegisterCounterpartyPayee;
                    toProto(message: _159.MsgRegisterCounterpartyPayee): Uint8Array;
                    toProtoMsg(message: _159.MsgRegisterCounterpartyPayee): _159.MsgRegisterCounterpartyPayeeProtoMsg;
                };
                MsgRegisterCounterpartyPayeeResponse: {
                    typeUrl: string;
                    encode(_: _159.MsgRegisterCounterpartyPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.MsgRegisterCounterpartyPayeeResponse;
                    fromPartial(_: Partial<_159.MsgRegisterCounterpartyPayeeResponse>): _159.MsgRegisterCounterpartyPayeeResponse;
                    fromAmino(_: _159.MsgRegisterCounterpartyPayeeResponseAmino): _159.MsgRegisterCounterpartyPayeeResponse;
                    toAmino(_: _159.MsgRegisterCounterpartyPayeeResponse): _159.MsgRegisterCounterpartyPayeeResponseAmino;
                    fromAminoMsg(object: _159.MsgRegisterCounterpartyPayeeResponseAminoMsg): _159.MsgRegisterCounterpartyPayeeResponse;
                    toAminoMsg(message: _159.MsgRegisterCounterpartyPayeeResponse): _159.MsgRegisterCounterpartyPayeeResponseAminoMsg;
                    fromProtoMsg(message: _159.MsgRegisterCounterpartyPayeeResponseProtoMsg): _159.MsgRegisterCounterpartyPayeeResponse;
                    toProto(message: _159.MsgRegisterCounterpartyPayeeResponse): Uint8Array;
                    toProtoMsg(message: _159.MsgRegisterCounterpartyPayeeResponse): _159.MsgRegisterCounterpartyPayeeResponseProtoMsg;
                };
                MsgPayPacketFee: {
                    typeUrl: string;
                    encode(message: _159.MsgPayPacketFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.MsgPayPacketFee;
                    fromPartial(object: Partial<_159.MsgPayPacketFee>): _159.MsgPayPacketFee;
                    fromAmino(object: _159.MsgPayPacketFeeAmino): _159.MsgPayPacketFee;
                    toAmino(message: _159.MsgPayPacketFee): _159.MsgPayPacketFeeAmino;
                    fromAminoMsg(object: _159.MsgPayPacketFeeAminoMsg): _159.MsgPayPacketFee;
                    toAminoMsg(message: _159.MsgPayPacketFee): _159.MsgPayPacketFeeAminoMsg;
                    fromProtoMsg(message: _159.MsgPayPacketFeeProtoMsg): _159.MsgPayPacketFee;
                    toProto(message: _159.MsgPayPacketFee): Uint8Array;
                    toProtoMsg(message: _159.MsgPayPacketFee): _159.MsgPayPacketFeeProtoMsg;
                };
                MsgPayPacketFeeResponse: {
                    typeUrl: string;
                    encode(_: _159.MsgPayPacketFeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.MsgPayPacketFeeResponse;
                    fromPartial(_: Partial<_159.MsgPayPacketFeeResponse>): _159.MsgPayPacketFeeResponse;
                    fromAmino(_: _159.MsgPayPacketFeeResponseAmino): _159.MsgPayPacketFeeResponse;
                    toAmino(_: _159.MsgPayPacketFeeResponse): _159.MsgPayPacketFeeResponseAmino;
                    fromAminoMsg(object: _159.MsgPayPacketFeeResponseAminoMsg): _159.MsgPayPacketFeeResponse;
                    toAminoMsg(message: _159.MsgPayPacketFeeResponse): _159.MsgPayPacketFeeResponseAminoMsg;
                    fromProtoMsg(message: _159.MsgPayPacketFeeResponseProtoMsg): _159.MsgPayPacketFeeResponse;
                    toProto(message: _159.MsgPayPacketFeeResponse): Uint8Array;
                    toProtoMsg(message: _159.MsgPayPacketFeeResponse): _159.MsgPayPacketFeeResponseProtoMsg;
                };
                MsgPayPacketFeeAsync: {
                    typeUrl: string;
                    encode(message: _159.MsgPayPacketFeeAsync, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.MsgPayPacketFeeAsync;
                    fromPartial(object: Partial<_159.MsgPayPacketFeeAsync>): _159.MsgPayPacketFeeAsync;
                    fromAmino(object: _159.MsgPayPacketFeeAsyncAmino): _159.MsgPayPacketFeeAsync;
                    toAmino(message: _159.MsgPayPacketFeeAsync): _159.MsgPayPacketFeeAsyncAmino;
                    fromAminoMsg(object: _159.MsgPayPacketFeeAsyncAminoMsg): _159.MsgPayPacketFeeAsync;
                    toAminoMsg(message: _159.MsgPayPacketFeeAsync): _159.MsgPayPacketFeeAsyncAminoMsg;
                    fromProtoMsg(message: _159.MsgPayPacketFeeAsyncProtoMsg): _159.MsgPayPacketFeeAsync;
                    toProto(message: _159.MsgPayPacketFeeAsync): Uint8Array;
                    toProtoMsg(message: _159.MsgPayPacketFeeAsync): _159.MsgPayPacketFeeAsyncProtoMsg;
                };
                MsgPayPacketFeeAsyncResponse: {
                    typeUrl: string;
                    encode(_: _159.MsgPayPacketFeeAsyncResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.MsgPayPacketFeeAsyncResponse;
                    fromPartial(_: Partial<_159.MsgPayPacketFeeAsyncResponse>): _159.MsgPayPacketFeeAsyncResponse;
                    fromAmino(_: _159.MsgPayPacketFeeAsyncResponseAmino): _159.MsgPayPacketFeeAsyncResponse;
                    toAmino(_: _159.MsgPayPacketFeeAsyncResponse): _159.MsgPayPacketFeeAsyncResponseAmino;
                    fromAminoMsg(object: _159.MsgPayPacketFeeAsyncResponseAminoMsg): _159.MsgPayPacketFeeAsyncResponse;
                    toAminoMsg(message: _159.MsgPayPacketFeeAsyncResponse): _159.MsgPayPacketFeeAsyncResponseAminoMsg;
                    fromProtoMsg(message: _159.MsgPayPacketFeeAsyncResponseProtoMsg): _159.MsgPayPacketFeeAsyncResponse;
                    toProto(message: _159.MsgPayPacketFeeAsyncResponse): Uint8Array;
                    toProtoMsg(message: _159.MsgPayPacketFeeAsyncResponse): _159.MsgPayPacketFeeAsyncResponseProtoMsg;
                };
                QueryIncentivizedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _158.QueryIncentivizedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryIncentivizedPacketsRequest;
                    fromPartial(object: Partial<_158.QueryIncentivizedPacketsRequest>): _158.QueryIncentivizedPacketsRequest;
                    fromAmino(object: _158.QueryIncentivizedPacketsRequestAmino): _158.QueryIncentivizedPacketsRequest;
                    toAmino(message: _158.QueryIncentivizedPacketsRequest): _158.QueryIncentivizedPacketsRequestAmino;
                    fromAminoMsg(object: _158.QueryIncentivizedPacketsRequestAminoMsg): _158.QueryIncentivizedPacketsRequest;
                    toAminoMsg(message: _158.QueryIncentivizedPacketsRequest): _158.QueryIncentivizedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _158.QueryIncentivizedPacketsRequestProtoMsg): _158.QueryIncentivizedPacketsRequest;
                    toProto(message: _158.QueryIncentivizedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _158.QueryIncentivizedPacketsRequest): _158.QueryIncentivizedPacketsRequestProtoMsg;
                };
                QueryIncentivizedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _158.QueryIncentivizedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryIncentivizedPacketsResponse;
                    fromPartial(object: Partial<_158.QueryIncentivizedPacketsResponse>): _158.QueryIncentivizedPacketsResponse;
                    fromAmino(object: _158.QueryIncentivizedPacketsResponseAmino): _158.QueryIncentivizedPacketsResponse;
                    toAmino(message: _158.QueryIncentivizedPacketsResponse): _158.QueryIncentivizedPacketsResponseAmino;
                    fromAminoMsg(object: _158.QueryIncentivizedPacketsResponseAminoMsg): _158.QueryIncentivizedPacketsResponse;
                    toAminoMsg(message: _158.QueryIncentivizedPacketsResponse): _158.QueryIncentivizedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _158.QueryIncentivizedPacketsResponseProtoMsg): _158.QueryIncentivizedPacketsResponse;
                    toProto(message: _158.QueryIncentivizedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _158.QueryIncentivizedPacketsResponse): _158.QueryIncentivizedPacketsResponseProtoMsg;
                };
                QueryIncentivizedPacketRequest: {
                    typeUrl: string;
                    encode(message: _158.QueryIncentivizedPacketRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryIncentivizedPacketRequest;
                    fromPartial(object: Partial<_158.QueryIncentivizedPacketRequest>): _158.QueryIncentivizedPacketRequest;
                    fromAmino(object: _158.QueryIncentivizedPacketRequestAmino): _158.QueryIncentivizedPacketRequest;
                    toAmino(message: _158.QueryIncentivizedPacketRequest): _158.QueryIncentivizedPacketRequestAmino;
                    fromAminoMsg(object: _158.QueryIncentivizedPacketRequestAminoMsg): _158.QueryIncentivizedPacketRequest;
                    toAminoMsg(message: _158.QueryIncentivizedPacketRequest): _158.QueryIncentivizedPacketRequestAminoMsg;
                    fromProtoMsg(message: _158.QueryIncentivizedPacketRequestProtoMsg): _158.QueryIncentivizedPacketRequest;
                    toProto(message: _158.QueryIncentivizedPacketRequest): Uint8Array;
                    toProtoMsg(message: _158.QueryIncentivizedPacketRequest): _158.QueryIncentivizedPacketRequestProtoMsg;
                };
                QueryIncentivizedPacketResponse: {
                    typeUrl: string;
                    encode(message: _158.QueryIncentivizedPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryIncentivizedPacketResponse;
                    fromPartial(object: Partial<_158.QueryIncentivizedPacketResponse>): _158.QueryIncentivizedPacketResponse;
                    fromAmino(object: _158.QueryIncentivizedPacketResponseAmino): _158.QueryIncentivizedPacketResponse;
                    toAmino(message: _158.QueryIncentivizedPacketResponse): _158.QueryIncentivizedPacketResponseAmino;
                    fromAminoMsg(object: _158.QueryIncentivizedPacketResponseAminoMsg): _158.QueryIncentivizedPacketResponse;
                    toAminoMsg(message: _158.QueryIncentivizedPacketResponse): _158.QueryIncentivizedPacketResponseAminoMsg;
                    fromProtoMsg(message: _158.QueryIncentivizedPacketResponseProtoMsg): _158.QueryIncentivizedPacketResponse;
                    toProto(message: _158.QueryIncentivizedPacketResponse): Uint8Array;
                    toProtoMsg(message: _158.QueryIncentivizedPacketResponse): _158.QueryIncentivizedPacketResponseProtoMsg;
                };
                QueryIncentivizedPacketsForChannelRequest: {
                    typeUrl: string;
                    encode(message: _158.QueryIncentivizedPacketsForChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryIncentivizedPacketsForChannelRequest;
                    fromPartial(object: Partial<_158.QueryIncentivizedPacketsForChannelRequest>): _158.QueryIncentivizedPacketsForChannelRequest;
                    fromAmino(object: _158.QueryIncentivizedPacketsForChannelRequestAmino): _158.QueryIncentivizedPacketsForChannelRequest;
                    toAmino(message: _158.QueryIncentivizedPacketsForChannelRequest): _158.QueryIncentivizedPacketsForChannelRequestAmino;
                    fromAminoMsg(object: _158.QueryIncentivizedPacketsForChannelRequestAminoMsg): _158.QueryIncentivizedPacketsForChannelRequest;
                    toAminoMsg(message: _158.QueryIncentivizedPacketsForChannelRequest): _158.QueryIncentivizedPacketsForChannelRequestAminoMsg;
                    fromProtoMsg(message: _158.QueryIncentivizedPacketsForChannelRequestProtoMsg): _158.QueryIncentivizedPacketsForChannelRequest;
                    toProto(message: _158.QueryIncentivizedPacketsForChannelRequest): Uint8Array;
                    toProtoMsg(message: _158.QueryIncentivizedPacketsForChannelRequest): _158.QueryIncentivizedPacketsForChannelRequestProtoMsg;
                };
                QueryIncentivizedPacketsForChannelResponse: {
                    typeUrl: string;
                    encode(message: _158.QueryIncentivizedPacketsForChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryIncentivizedPacketsForChannelResponse;
                    fromPartial(object: Partial<_158.QueryIncentivizedPacketsForChannelResponse>): _158.QueryIncentivizedPacketsForChannelResponse;
                    fromAmino(object: _158.QueryIncentivizedPacketsForChannelResponseAmino): _158.QueryIncentivizedPacketsForChannelResponse;
                    toAmino(message: _158.QueryIncentivizedPacketsForChannelResponse): _158.QueryIncentivizedPacketsForChannelResponseAmino;
                    fromAminoMsg(object: _158.QueryIncentivizedPacketsForChannelResponseAminoMsg): _158.QueryIncentivizedPacketsForChannelResponse;
                    toAminoMsg(message: _158.QueryIncentivizedPacketsForChannelResponse): _158.QueryIncentivizedPacketsForChannelResponseAminoMsg;
                    fromProtoMsg(message: _158.QueryIncentivizedPacketsForChannelResponseProtoMsg): _158.QueryIncentivizedPacketsForChannelResponse;
                    toProto(message: _158.QueryIncentivizedPacketsForChannelResponse): Uint8Array;
                    toProtoMsg(message: _158.QueryIncentivizedPacketsForChannelResponse): _158.QueryIncentivizedPacketsForChannelResponseProtoMsg;
                };
                QueryTotalRecvFeesRequest: {
                    typeUrl: string;
                    encode(message: _158.QueryTotalRecvFeesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryTotalRecvFeesRequest;
                    fromPartial(object: Partial<_158.QueryTotalRecvFeesRequest>): _158.QueryTotalRecvFeesRequest;
                    fromAmino(object: _158.QueryTotalRecvFeesRequestAmino): _158.QueryTotalRecvFeesRequest;
                    toAmino(message: _158.QueryTotalRecvFeesRequest): _158.QueryTotalRecvFeesRequestAmino;
                    fromAminoMsg(object: _158.QueryTotalRecvFeesRequestAminoMsg): _158.QueryTotalRecvFeesRequest;
                    toAminoMsg(message: _158.QueryTotalRecvFeesRequest): _158.QueryTotalRecvFeesRequestAminoMsg;
                    fromProtoMsg(message: _158.QueryTotalRecvFeesRequestProtoMsg): _158.QueryTotalRecvFeesRequest;
                    toProto(message: _158.QueryTotalRecvFeesRequest): Uint8Array;
                    toProtoMsg(message: _158.QueryTotalRecvFeesRequest): _158.QueryTotalRecvFeesRequestProtoMsg;
                };
                QueryTotalRecvFeesResponse: {
                    typeUrl: string;
                    encode(message: _158.QueryTotalRecvFeesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryTotalRecvFeesResponse;
                    fromPartial(object: Partial<_158.QueryTotalRecvFeesResponse>): _158.QueryTotalRecvFeesResponse;
                    fromAmino(object: _158.QueryTotalRecvFeesResponseAmino): _158.QueryTotalRecvFeesResponse;
                    toAmino(message: _158.QueryTotalRecvFeesResponse): _158.QueryTotalRecvFeesResponseAmino;
                    fromAminoMsg(object: _158.QueryTotalRecvFeesResponseAminoMsg): _158.QueryTotalRecvFeesResponse;
                    toAminoMsg(message: _158.QueryTotalRecvFeesResponse): _158.QueryTotalRecvFeesResponseAminoMsg;
                    fromProtoMsg(message: _158.QueryTotalRecvFeesResponseProtoMsg): _158.QueryTotalRecvFeesResponse;
                    toProto(message: _158.QueryTotalRecvFeesResponse): Uint8Array;
                    toProtoMsg(message: _158.QueryTotalRecvFeesResponse): _158.QueryTotalRecvFeesResponseProtoMsg;
                };
                QueryTotalAckFeesRequest: {
                    typeUrl: string;
                    encode(message: _158.QueryTotalAckFeesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryTotalAckFeesRequest;
                    fromPartial(object: Partial<_158.QueryTotalAckFeesRequest>): _158.QueryTotalAckFeesRequest;
                    fromAmino(object: _158.QueryTotalAckFeesRequestAmino): _158.QueryTotalAckFeesRequest;
                    toAmino(message: _158.QueryTotalAckFeesRequest): _158.QueryTotalAckFeesRequestAmino;
                    fromAminoMsg(object: _158.QueryTotalAckFeesRequestAminoMsg): _158.QueryTotalAckFeesRequest;
                    toAminoMsg(message: _158.QueryTotalAckFeesRequest): _158.QueryTotalAckFeesRequestAminoMsg;
                    fromProtoMsg(message: _158.QueryTotalAckFeesRequestProtoMsg): _158.QueryTotalAckFeesRequest;
                    toProto(message: _158.QueryTotalAckFeesRequest): Uint8Array;
                    toProtoMsg(message: _158.QueryTotalAckFeesRequest): _158.QueryTotalAckFeesRequestProtoMsg;
                };
                QueryTotalAckFeesResponse: {
                    typeUrl: string;
                    encode(message: _158.QueryTotalAckFeesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryTotalAckFeesResponse;
                    fromPartial(object: Partial<_158.QueryTotalAckFeesResponse>): _158.QueryTotalAckFeesResponse;
                    fromAmino(object: _158.QueryTotalAckFeesResponseAmino): _158.QueryTotalAckFeesResponse;
                    toAmino(message: _158.QueryTotalAckFeesResponse): _158.QueryTotalAckFeesResponseAmino;
                    fromAminoMsg(object: _158.QueryTotalAckFeesResponseAminoMsg): _158.QueryTotalAckFeesResponse;
                    toAminoMsg(message: _158.QueryTotalAckFeesResponse): _158.QueryTotalAckFeesResponseAminoMsg;
                    fromProtoMsg(message: _158.QueryTotalAckFeesResponseProtoMsg): _158.QueryTotalAckFeesResponse;
                    toProto(message: _158.QueryTotalAckFeesResponse): Uint8Array;
                    toProtoMsg(message: _158.QueryTotalAckFeesResponse): _158.QueryTotalAckFeesResponseProtoMsg;
                };
                QueryTotalTimeoutFeesRequest: {
                    typeUrl: string;
                    encode(message: _158.QueryTotalTimeoutFeesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryTotalTimeoutFeesRequest;
                    fromPartial(object: Partial<_158.QueryTotalTimeoutFeesRequest>): _158.QueryTotalTimeoutFeesRequest;
                    fromAmino(object: _158.QueryTotalTimeoutFeesRequestAmino): _158.QueryTotalTimeoutFeesRequest;
                    toAmino(message: _158.QueryTotalTimeoutFeesRequest): _158.QueryTotalTimeoutFeesRequestAmino;
                    fromAminoMsg(object: _158.QueryTotalTimeoutFeesRequestAminoMsg): _158.QueryTotalTimeoutFeesRequest;
                    toAminoMsg(message: _158.QueryTotalTimeoutFeesRequest): _158.QueryTotalTimeoutFeesRequestAminoMsg;
                    fromProtoMsg(message: _158.QueryTotalTimeoutFeesRequestProtoMsg): _158.QueryTotalTimeoutFeesRequest;
                    toProto(message: _158.QueryTotalTimeoutFeesRequest): Uint8Array;
                    toProtoMsg(message: _158.QueryTotalTimeoutFeesRequest): _158.QueryTotalTimeoutFeesRequestProtoMsg;
                };
                QueryTotalTimeoutFeesResponse: {
                    typeUrl: string;
                    encode(message: _158.QueryTotalTimeoutFeesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryTotalTimeoutFeesResponse;
                    fromPartial(object: Partial<_158.QueryTotalTimeoutFeesResponse>): _158.QueryTotalTimeoutFeesResponse;
                    fromAmino(object: _158.QueryTotalTimeoutFeesResponseAmino): _158.QueryTotalTimeoutFeesResponse;
                    toAmino(message: _158.QueryTotalTimeoutFeesResponse): _158.QueryTotalTimeoutFeesResponseAmino;
                    fromAminoMsg(object: _158.QueryTotalTimeoutFeesResponseAminoMsg): _158.QueryTotalTimeoutFeesResponse;
                    toAminoMsg(message: _158.QueryTotalTimeoutFeesResponse): _158.QueryTotalTimeoutFeesResponseAminoMsg;
                    fromProtoMsg(message: _158.QueryTotalTimeoutFeesResponseProtoMsg): _158.QueryTotalTimeoutFeesResponse;
                    toProto(message: _158.QueryTotalTimeoutFeesResponse): Uint8Array;
                    toProtoMsg(message: _158.QueryTotalTimeoutFeesResponse): _158.QueryTotalTimeoutFeesResponseProtoMsg;
                };
                QueryPayeeRequest: {
                    typeUrl: string;
                    encode(message: _158.QueryPayeeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryPayeeRequest;
                    fromPartial(object: Partial<_158.QueryPayeeRequest>): _158.QueryPayeeRequest;
                    fromAmino(object: _158.QueryPayeeRequestAmino): _158.QueryPayeeRequest;
                    toAmino(message: _158.QueryPayeeRequest): _158.QueryPayeeRequestAmino;
                    fromAminoMsg(object: _158.QueryPayeeRequestAminoMsg): _158.QueryPayeeRequest;
                    toAminoMsg(message: _158.QueryPayeeRequest): _158.QueryPayeeRequestAminoMsg;
                    fromProtoMsg(message: _158.QueryPayeeRequestProtoMsg): _158.QueryPayeeRequest;
                    toProto(message: _158.QueryPayeeRequest): Uint8Array;
                    toProtoMsg(message: _158.QueryPayeeRequest): _158.QueryPayeeRequestProtoMsg;
                };
                QueryPayeeResponse: {
                    typeUrl: string;
                    encode(message: _158.QueryPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryPayeeResponse;
                    fromPartial(object: Partial<_158.QueryPayeeResponse>): _158.QueryPayeeResponse;
                    fromAmino(object: _158.QueryPayeeResponseAmino): _158.QueryPayeeResponse;
                    toAmino(message: _158.QueryPayeeResponse): _158.QueryPayeeResponseAmino;
                    fromAminoMsg(object: _158.QueryPayeeResponseAminoMsg): _158.QueryPayeeResponse;
                    toAminoMsg(message: _158.QueryPayeeResponse): _158.QueryPayeeResponseAminoMsg;
                    fromProtoMsg(message: _158.QueryPayeeResponseProtoMsg): _158.QueryPayeeResponse;
                    toProto(message: _158.QueryPayeeResponse): Uint8Array;
                    toProtoMsg(message: _158.QueryPayeeResponse): _158.QueryPayeeResponseProtoMsg;
                };
                QueryCounterpartyPayeeRequest: {
                    typeUrl: string;
                    encode(message: _158.QueryCounterpartyPayeeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryCounterpartyPayeeRequest;
                    fromPartial(object: Partial<_158.QueryCounterpartyPayeeRequest>): _158.QueryCounterpartyPayeeRequest;
                    fromAmino(object: _158.QueryCounterpartyPayeeRequestAmino): _158.QueryCounterpartyPayeeRequest;
                    toAmino(message: _158.QueryCounterpartyPayeeRequest): _158.QueryCounterpartyPayeeRequestAmino;
                    fromAminoMsg(object: _158.QueryCounterpartyPayeeRequestAminoMsg): _158.QueryCounterpartyPayeeRequest;
                    toAminoMsg(message: _158.QueryCounterpartyPayeeRequest): _158.QueryCounterpartyPayeeRequestAminoMsg;
                    fromProtoMsg(message: _158.QueryCounterpartyPayeeRequestProtoMsg): _158.QueryCounterpartyPayeeRequest;
                    toProto(message: _158.QueryCounterpartyPayeeRequest): Uint8Array;
                    toProtoMsg(message: _158.QueryCounterpartyPayeeRequest): _158.QueryCounterpartyPayeeRequestProtoMsg;
                };
                QueryCounterpartyPayeeResponse: {
                    typeUrl: string;
                    encode(message: _158.QueryCounterpartyPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryCounterpartyPayeeResponse;
                    fromPartial(object: Partial<_158.QueryCounterpartyPayeeResponse>): _158.QueryCounterpartyPayeeResponse;
                    fromAmino(object: _158.QueryCounterpartyPayeeResponseAmino): _158.QueryCounterpartyPayeeResponse;
                    toAmino(message: _158.QueryCounterpartyPayeeResponse): _158.QueryCounterpartyPayeeResponseAmino;
                    fromAminoMsg(object: _158.QueryCounterpartyPayeeResponseAminoMsg): _158.QueryCounterpartyPayeeResponse;
                    toAminoMsg(message: _158.QueryCounterpartyPayeeResponse): _158.QueryCounterpartyPayeeResponseAminoMsg;
                    fromProtoMsg(message: _158.QueryCounterpartyPayeeResponseProtoMsg): _158.QueryCounterpartyPayeeResponse;
                    toProto(message: _158.QueryCounterpartyPayeeResponse): Uint8Array;
                    toProtoMsg(message: _158.QueryCounterpartyPayeeResponse): _158.QueryCounterpartyPayeeResponseProtoMsg;
                };
                QueryFeeEnabledChannelsRequest: {
                    typeUrl: string;
                    encode(message: _158.QueryFeeEnabledChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryFeeEnabledChannelsRequest;
                    fromPartial(object: Partial<_158.QueryFeeEnabledChannelsRequest>): _158.QueryFeeEnabledChannelsRequest;
                    fromAmino(object: _158.QueryFeeEnabledChannelsRequestAmino): _158.QueryFeeEnabledChannelsRequest;
                    toAmino(message: _158.QueryFeeEnabledChannelsRequest): _158.QueryFeeEnabledChannelsRequestAmino;
                    fromAminoMsg(object: _158.QueryFeeEnabledChannelsRequestAminoMsg): _158.QueryFeeEnabledChannelsRequest;
                    toAminoMsg(message: _158.QueryFeeEnabledChannelsRequest): _158.QueryFeeEnabledChannelsRequestAminoMsg;
                    fromProtoMsg(message: _158.QueryFeeEnabledChannelsRequestProtoMsg): _158.QueryFeeEnabledChannelsRequest;
                    toProto(message: _158.QueryFeeEnabledChannelsRequest): Uint8Array;
                    toProtoMsg(message: _158.QueryFeeEnabledChannelsRequest): _158.QueryFeeEnabledChannelsRequestProtoMsg;
                };
                QueryFeeEnabledChannelsResponse: {
                    typeUrl: string;
                    encode(message: _158.QueryFeeEnabledChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryFeeEnabledChannelsResponse;
                    fromPartial(object: Partial<_158.QueryFeeEnabledChannelsResponse>): _158.QueryFeeEnabledChannelsResponse;
                    fromAmino(object: _158.QueryFeeEnabledChannelsResponseAmino): _158.QueryFeeEnabledChannelsResponse;
                    toAmino(message: _158.QueryFeeEnabledChannelsResponse): _158.QueryFeeEnabledChannelsResponseAmino;
                    fromAminoMsg(object: _158.QueryFeeEnabledChannelsResponseAminoMsg): _158.QueryFeeEnabledChannelsResponse;
                    toAminoMsg(message: _158.QueryFeeEnabledChannelsResponse): _158.QueryFeeEnabledChannelsResponseAminoMsg;
                    fromProtoMsg(message: _158.QueryFeeEnabledChannelsResponseProtoMsg): _158.QueryFeeEnabledChannelsResponse;
                    toProto(message: _158.QueryFeeEnabledChannelsResponse): Uint8Array;
                    toProtoMsg(message: _158.QueryFeeEnabledChannelsResponse): _158.QueryFeeEnabledChannelsResponseProtoMsg;
                };
                QueryFeeEnabledChannelRequest: {
                    typeUrl: string;
                    encode(message: _158.QueryFeeEnabledChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryFeeEnabledChannelRequest;
                    fromPartial(object: Partial<_158.QueryFeeEnabledChannelRequest>): _158.QueryFeeEnabledChannelRequest;
                    fromAmino(object: _158.QueryFeeEnabledChannelRequestAmino): _158.QueryFeeEnabledChannelRequest;
                    toAmino(message: _158.QueryFeeEnabledChannelRequest): _158.QueryFeeEnabledChannelRequestAmino;
                    fromAminoMsg(object: _158.QueryFeeEnabledChannelRequestAminoMsg): _158.QueryFeeEnabledChannelRequest;
                    toAminoMsg(message: _158.QueryFeeEnabledChannelRequest): _158.QueryFeeEnabledChannelRequestAminoMsg;
                    fromProtoMsg(message: _158.QueryFeeEnabledChannelRequestProtoMsg): _158.QueryFeeEnabledChannelRequest;
                    toProto(message: _158.QueryFeeEnabledChannelRequest): Uint8Array;
                    toProtoMsg(message: _158.QueryFeeEnabledChannelRequest): _158.QueryFeeEnabledChannelRequestProtoMsg;
                };
                QueryFeeEnabledChannelResponse: {
                    typeUrl: string;
                    encode(message: _158.QueryFeeEnabledChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.QueryFeeEnabledChannelResponse;
                    fromPartial(object: Partial<_158.QueryFeeEnabledChannelResponse>): _158.QueryFeeEnabledChannelResponse;
                    fromAmino(object: _158.QueryFeeEnabledChannelResponseAmino): _158.QueryFeeEnabledChannelResponse;
                    toAmino(message: _158.QueryFeeEnabledChannelResponse): _158.QueryFeeEnabledChannelResponseAmino;
                    fromAminoMsg(object: _158.QueryFeeEnabledChannelResponseAminoMsg): _158.QueryFeeEnabledChannelResponse;
                    toAminoMsg(message: _158.QueryFeeEnabledChannelResponse): _158.QueryFeeEnabledChannelResponseAminoMsg;
                    fromProtoMsg(message: _158.QueryFeeEnabledChannelResponseProtoMsg): _158.QueryFeeEnabledChannelResponse;
                    toProto(message: _158.QueryFeeEnabledChannelResponse): Uint8Array;
                    toProtoMsg(message: _158.QueryFeeEnabledChannelResponse): _158.QueryFeeEnabledChannelResponseProtoMsg;
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
                GenesisState: {
                    typeUrl: string;
                    encode(message: _156.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _156.GenesisState;
                    fromPartial(object: Partial<_156.GenesisState>): _156.GenesisState;
                    fromAmino(object: _156.GenesisStateAmino): _156.GenesisState;
                    toAmino(message: _156.GenesisState): _156.GenesisStateAmino;
                    fromAminoMsg(object: _156.GenesisStateAminoMsg): _156.GenesisState;
                    toAminoMsg(message: _156.GenesisState): _156.GenesisStateAminoMsg;
                    fromProtoMsg(message: _156.GenesisStateProtoMsg): _156.GenesisState;
                    toProto(message: _156.GenesisState): Uint8Array;
                    toProtoMsg(message: _156.GenesisState): _156.GenesisStateProtoMsg;
                };
                FeeEnabledChannel: {
                    typeUrl: string;
                    encode(message: _156.FeeEnabledChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _156.FeeEnabledChannel;
                    fromPartial(object: Partial<_156.FeeEnabledChannel>): _156.FeeEnabledChannel;
                    fromAmino(object: _156.FeeEnabledChannelAmino): _156.FeeEnabledChannel;
                    toAmino(message: _156.FeeEnabledChannel): _156.FeeEnabledChannelAmino;
                    fromAminoMsg(object: _156.FeeEnabledChannelAminoMsg): _156.FeeEnabledChannel;
                    toAminoMsg(message: _156.FeeEnabledChannel): _156.FeeEnabledChannelAminoMsg;
                    fromProtoMsg(message: _156.FeeEnabledChannelProtoMsg): _156.FeeEnabledChannel;
                    toProto(message: _156.FeeEnabledChannel): Uint8Array;
                    toProtoMsg(message: _156.FeeEnabledChannel): _156.FeeEnabledChannelProtoMsg;
                };
                RegisteredPayee: {
                    typeUrl: string;
                    encode(message: _156.RegisteredPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _156.RegisteredPayee;
                    fromPartial(object: Partial<_156.RegisteredPayee>): _156.RegisteredPayee;
                    fromAmino(object: _156.RegisteredPayeeAmino): _156.RegisteredPayee;
                    toAmino(message: _156.RegisteredPayee): _156.RegisteredPayeeAmino;
                    fromAminoMsg(object: _156.RegisteredPayeeAminoMsg): _156.RegisteredPayee;
                    toAminoMsg(message: _156.RegisteredPayee): _156.RegisteredPayeeAminoMsg;
                    fromProtoMsg(message: _156.RegisteredPayeeProtoMsg): _156.RegisteredPayee;
                    toProto(message: _156.RegisteredPayee): Uint8Array;
                    toProtoMsg(message: _156.RegisteredPayee): _156.RegisteredPayeeProtoMsg;
                };
                RegisteredCounterpartyPayee: {
                    typeUrl: string;
                    encode(message: _156.RegisteredCounterpartyPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _156.RegisteredCounterpartyPayee;
                    fromPartial(object: Partial<_156.RegisteredCounterpartyPayee>): _156.RegisteredCounterpartyPayee;
                    fromAmino(object: _156.RegisteredCounterpartyPayeeAmino): _156.RegisteredCounterpartyPayee;
                    toAmino(message: _156.RegisteredCounterpartyPayee): _156.RegisteredCounterpartyPayeeAmino;
                    fromAminoMsg(object: _156.RegisteredCounterpartyPayeeAminoMsg): _156.RegisteredCounterpartyPayee;
                    toAminoMsg(message: _156.RegisteredCounterpartyPayee): _156.RegisteredCounterpartyPayeeAminoMsg;
                    fromProtoMsg(message: _156.RegisteredCounterpartyPayeeProtoMsg): _156.RegisteredCounterpartyPayee;
                    toProto(message: _156.RegisteredCounterpartyPayee): Uint8Array;
                    toProtoMsg(message: _156.RegisteredCounterpartyPayee): _156.RegisteredCounterpartyPayeeProtoMsg;
                };
                ForwardRelayerAddress: {
                    typeUrl: string;
                    encode(message: _156.ForwardRelayerAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _156.ForwardRelayerAddress;
                    fromPartial(object: Partial<_156.ForwardRelayerAddress>): _156.ForwardRelayerAddress;
                    fromAmino(object: _156.ForwardRelayerAddressAmino): _156.ForwardRelayerAddress;
                    toAmino(message: _156.ForwardRelayerAddress): _156.ForwardRelayerAddressAmino;
                    fromAminoMsg(object: _156.ForwardRelayerAddressAminoMsg): _156.ForwardRelayerAddress;
                    toAminoMsg(message: _156.ForwardRelayerAddress): _156.ForwardRelayerAddressAminoMsg;
                    fromProtoMsg(message: _156.ForwardRelayerAddressProtoMsg): _156.ForwardRelayerAddress;
                    toProto(message: _156.ForwardRelayerAddress): Uint8Array;
                    toProtoMsg(message: _156.ForwardRelayerAddress): _156.ForwardRelayerAddressProtoMsg;
                };
                Fee: {
                    typeUrl: string;
                    encode(message: _155.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.Fee;
                    fromPartial(object: Partial<_155.Fee>): _155.Fee;
                    fromAmino(object: _155.FeeAmino): _155.Fee;
                    toAmino(message: _155.Fee): _155.FeeAmino;
                    fromAminoMsg(object: _155.FeeAminoMsg): _155.Fee;
                    toAminoMsg(message: _155.Fee): _155.FeeAminoMsg;
                    fromProtoMsg(message: _155.FeeProtoMsg): _155.Fee;
                    toProto(message: _155.Fee): Uint8Array;
                    toProtoMsg(message: _155.Fee): _155.FeeProtoMsg;
                };
                PacketFee: {
                    typeUrl: string;
                    encode(message: _155.PacketFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.PacketFee;
                    fromPartial(object: Partial<_155.PacketFee>): _155.PacketFee;
                    fromAmino(object: _155.PacketFeeAmino): _155.PacketFee;
                    toAmino(message: _155.PacketFee): _155.PacketFeeAmino;
                    fromAminoMsg(object: _155.PacketFeeAminoMsg): _155.PacketFee;
                    toAminoMsg(message: _155.PacketFee): _155.PacketFeeAminoMsg;
                    fromProtoMsg(message: _155.PacketFeeProtoMsg): _155.PacketFee;
                    toProto(message: _155.PacketFee): Uint8Array;
                    toProtoMsg(message: _155.PacketFee): _155.PacketFeeProtoMsg;
                };
                PacketFees: {
                    typeUrl: string;
                    encode(message: _155.PacketFees, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.PacketFees;
                    fromPartial(object: Partial<_155.PacketFees>): _155.PacketFees;
                    fromAmino(object: _155.PacketFeesAmino): _155.PacketFees;
                    toAmino(message: _155.PacketFees): _155.PacketFeesAmino;
                    fromAminoMsg(object: _155.PacketFeesAminoMsg): _155.PacketFees;
                    toAminoMsg(message: _155.PacketFees): _155.PacketFeesAminoMsg;
                    fromProtoMsg(message: _155.PacketFeesProtoMsg): _155.PacketFees;
                    toProto(message: _155.PacketFees): Uint8Array;
                    toProtoMsg(message: _155.PacketFees): _155.PacketFeesProtoMsg;
                };
                IdentifiedPacketFees: {
                    typeUrl: string;
                    encode(message: _155.IdentifiedPacketFees, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.IdentifiedPacketFees;
                    fromPartial(object: Partial<_155.IdentifiedPacketFees>): _155.IdentifiedPacketFees;
                    fromAmino(object: _155.IdentifiedPacketFeesAmino): _155.IdentifiedPacketFees;
                    toAmino(message: _155.IdentifiedPacketFees): _155.IdentifiedPacketFeesAmino;
                    fromAminoMsg(object: _155.IdentifiedPacketFeesAminoMsg): _155.IdentifiedPacketFees;
                    toAminoMsg(message: _155.IdentifiedPacketFees): _155.IdentifiedPacketFeesAminoMsg;
                    fromProtoMsg(message: _155.IdentifiedPacketFeesProtoMsg): _155.IdentifiedPacketFees;
                    toProto(message: _155.IdentifiedPacketFees): Uint8Array;
                    toProtoMsg(message: _155.IdentifiedPacketFees): _155.IdentifiedPacketFeesProtoMsg;
                };
                IncentivizedAcknowledgement: {
                    typeUrl: string;
                    encode(message: _154.IncentivizedAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.IncentivizedAcknowledgement;
                    fromPartial(object: Partial<_154.IncentivizedAcknowledgement>): _154.IncentivizedAcknowledgement;
                    fromAmino(object: _154.IncentivizedAcknowledgementAmino): _154.IncentivizedAcknowledgement;
                    toAmino(message: _154.IncentivizedAcknowledgement): _154.IncentivizedAcknowledgementAmino;
                    fromAminoMsg(object: _154.IncentivizedAcknowledgementAminoMsg): _154.IncentivizedAcknowledgement;
                    toAminoMsg(message: _154.IncentivizedAcknowledgement): _154.IncentivizedAcknowledgementAminoMsg;
                    fromProtoMsg(message: _154.IncentivizedAcknowledgementProtoMsg): _154.IncentivizedAcknowledgement;
                    toProto(message: _154.IncentivizedAcknowledgement): Uint8Array;
                    toProtoMsg(message: _154.IncentivizedAcknowledgement): _154.IncentivizedAcknowledgementProtoMsg;
                };
            };
        }
        namespace interchain_accounts {
            namespace controller {
                const v1: {
                    MsgClientImpl: typeof _390.MsgClientImpl;
                    QueryClientImpl: typeof _382.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        interchainAccount(request: _161.QueryInterchainAccountRequest): Promise<_161.QueryInterchainAccountResponse>;
                        params(request?: _161.QueryParamsRequest): Promise<_161.QueryParamsResponse>;
                    };
                    registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            registerInterchainAccount(value: _162.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            sendTx(value: _162.MsgSendTx): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            updateParams(value: _162.MsgUpdateParams): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            registerInterchainAccount(value: _162.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: _162.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: _162.MsgSendTx): {
                                typeUrl: string;
                                value: _162.MsgSendTx;
                            };
                            updateParams(value: _162.MsgUpdateParams): {
                                typeUrl: string;
                                value: _162.MsgUpdateParams;
                            };
                        };
                        fromPartial: {
                            registerInterchainAccount(value: _162.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: _162.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: _162.MsgSendTx): {
                                typeUrl: string;
                                value: _162.MsgSendTx;
                            };
                            updateParams(value: _162.MsgUpdateParams): {
                                typeUrl: string;
                                value: _162.MsgUpdateParams;
                            };
                        };
                    };
                    AminoConverter: {
                        "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount": {
                            aminoType: string;
                            toAmino: (message: _162.MsgRegisterInterchainAccount) => _162.MsgRegisterInterchainAccountAmino;
                            fromAmino: (object: _162.MsgRegisterInterchainAccountAmino) => _162.MsgRegisterInterchainAccount;
                        };
                        "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx": {
                            aminoType: string;
                            toAmino: (message: _162.MsgSendTx) => _162.MsgSendTxAmino;
                            fromAmino: (object: _162.MsgSendTxAmino) => _162.MsgSendTx;
                        };
                        "/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParams": {
                            aminoType: string;
                            toAmino: (message: _162.MsgUpdateParams) => _162.MsgUpdateParamsAmino;
                            fromAmino: (object: _162.MsgUpdateParamsAmino) => _162.MsgUpdateParams;
                        };
                    };
                    MsgRegisterInterchainAccount: {
                        typeUrl: string;
                        encode(message: _162.MsgRegisterInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.MsgRegisterInterchainAccount;
                        fromPartial(object: Partial<_162.MsgRegisterInterchainAccount>): _162.MsgRegisterInterchainAccount;
                        fromAmino(object: _162.MsgRegisterInterchainAccountAmino): _162.MsgRegisterInterchainAccount;
                        toAmino(message: _162.MsgRegisterInterchainAccount): _162.MsgRegisterInterchainAccountAmino;
                        fromAminoMsg(object: _162.MsgRegisterInterchainAccountAminoMsg): _162.MsgRegisterInterchainAccount;
                        toAminoMsg(message: _162.MsgRegisterInterchainAccount): _162.MsgRegisterInterchainAccountAminoMsg;
                        fromProtoMsg(message: _162.MsgRegisterInterchainAccountProtoMsg): _162.MsgRegisterInterchainAccount;
                        toProto(message: _162.MsgRegisterInterchainAccount): Uint8Array;
                        toProtoMsg(message: _162.MsgRegisterInterchainAccount): _162.MsgRegisterInterchainAccountProtoMsg;
                    };
                    MsgRegisterInterchainAccountResponse: {
                        typeUrl: string;
                        encode(message: _162.MsgRegisterInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.MsgRegisterInterchainAccountResponse;
                        fromPartial(object: Partial<_162.MsgRegisterInterchainAccountResponse>): _162.MsgRegisterInterchainAccountResponse;
                        fromAmino(object: _162.MsgRegisterInterchainAccountResponseAmino): _162.MsgRegisterInterchainAccountResponse;
                        toAmino(message: _162.MsgRegisterInterchainAccountResponse): _162.MsgRegisterInterchainAccountResponseAmino;
                        fromAminoMsg(object: _162.MsgRegisterInterchainAccountResponseAminoMsg): _162.MsgRegisterInterchainAccountResponse;
                        toAminoMsg(message: _162.MsgRegisterInterchainAccountResponse): _162.MsgRegisterInterchainAccountResponseAminoMsg;
                        fromProtoMsg(message: _162.MsgRegisterInterchainAccountResponseProtoMsg): _162.MsgRegisterInterchainAccountResponse;
                        toProto(message: _162.MsgRegisterInterchainAccountResponse): Uint8Array;
                        toProtoMsg(message: _162.MsgRegisterInterchainAccountResponse): _162.MsgRegisterInterchainAccountResponseProtoMsg;
                    };
                    MsgSendTx: {
                        typeUrl: string;
                        encode(message: _162.MsgSendTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.MsgSendTx;
                        fromPartial(object: Partial<_162.MsgSendTx>): _162.MsgSendTx;
                        fromAmino(object: _162.MsgSendTxAmino): _162.MsgSendTx;
                        toAmino(message: _162.MsgSendTx): _162.MsgSendTxAmino;
                        fromAminoMsg(object: _162.MsgSendTxAminoMsg): _162.MsgSendTx;
                        toAminoMsg(message: _162.MsgSendTx): _162.MsgSendTxAminoMsg;
                        fromProtoMsg(message: _162.MsgSendTxProtoMsg): _162.MsgSendTx;
                        toProto(message: _162.MsgSendTx): Uint8Array;
                        toProtoMsg(message: _162.MsgSendTx): _162.MsgSendTxProtoMsg;
                    };
                    MsgSendTxResponse: {
                        typeUrl: string;
                        encode(message: _162.MsgSendTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.MsgSendTxResponse;
                        fromPartial(object: Partial<_162.MsgSendTxResponse>): _162.MsgSendTxResponse;
                        fromAmino(object: _162.MsgSendTxResponseAmino): _162.MsgSendTxResponse;
                        toAmino(message: _162.MsgSendTxResponse): _162.MsgSendTxResponseAmino;
                        fromAminoMsg(object: _162.MsgSendTxResponseAminoMsg): _162.MsgSendTxResponse;
                        toAminoMsg(message: _162.MsgSendTxResponse): _162.MsgSendTxResponseAminoMsg;
                        fromProtoMsg(message: _162.MsgSendTxResponseProtoMsg): _162.MsgSendTxResponse;
                        toProto(message: _162.MsgSendTxResponse): Uint8Array;
                        toProtoMsg(message: _162.MsgSendTxResponse): _162.MsgSendTxResponseProtoMsg;
                    };
                    MsgUpdateParams: {
                        typeUrl: string;
                        encode(message: _162.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.MsgUpdateParams;
                        fromPartial(object: Partial<_162.MsgUpdateParams>): _162.MsgUpdateParams;
                        fromAmino(object: _162.MsgUpdateParamsAmino): _162.MsgUpdateParams;
                        toAmino(message: _162.MsgUpdateParams): _162.MsgUpdateParamsAmino;
                        fromAminoMsg(object: _162.MsgUpdateParamsAminoMsg): _162.MsgUpdateParams;
                        toAminoMsg(message: _162.MsgUpdateParams): _162.MsgUpdateParamsAminoMsg;
                        fromProtoMsg(message: _162.MsgUpdateParamsProtoMsg): _162.MsgUpdateParams;
                        toProto(message: _162.MsgUpdateParams): Uint8Array;
                        toProtoMsg(message: _162.MsgUpdateParams): _162.MsgUpdateParamsProtoMsg;
                    };
                    MsgUpdateParamsResponse: {
                        typeUrl: string;
                        encode(_: _162.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.MsgUpdateParamsResponse;
                        fromPartial(_: Partial<_162.MsgUpdateParamsResponse>): _162.MsgUpdateParamsResponse;
                        fromAmino(_: _162.MsgUpdateParamsResponseAmino): _162.MsgUpdateParamsResponse;
                        toAmino(_: _162.MsgUpdateParamsResponse): _162.MsgUpdateParamsResponseAmino;
                        fromAminoMsg(object: _162.MsgUpdateParamsResponseAminoMsg): _162.MsgUpdateParamsResponse;
                        toAminoMsg(message: _162.MsgUpdateParamsResponse): _162.MsgUpdateParamsResponseAminoMsg;
                        fromProtoMsg(message: _162.MsgUpdateParamsResponseProtoMsg): _162.MsgUpdateParamsResponse;
                        toProto(message: _162.MsgUpdateParamsResponse): Uint8Array;
                        toProtoMsg(message: _162.MsgUpdateParamsResponse): _162.MsgUpdateParamsResponseProtoMsg;
                    };
                    QueryInterchainAccountRequest: {
                        typeUrl: string;
                        encode(message: _161.QueryInterchainAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.QueryInterchainAccountRequest;
                        fromPartial(object: Partial<_161.QueryInterchainAccountRequest>): _161.QueryInterchainAccountRequest;
                        fromAmino(object: _161.QueryInterchainAccountRequestAmino): _161.QueryInterchainAccountRequest;
                        toAmino(message: _161.QueryInterchainAccountRequest): _161.QueryInterchainAccountRequestAmino;
                        fromAminoMsg(object: _161.QueryInterchainAccountRequestAminoMsg): _161.QueryInterchainAccountRequest;
                        toAminoMsg(message: _161.QueryInterchainAccountRequest): _161.QueryInterchainAccountRequestAminoMsg;
                        fromProtoMsg(message: _161.QueryInterchainAccountRequestProtoMsg): _161.QueryInterchainAccountRequest;
                        toProto(message: _161.QueryInterchainAccountRequest): Uint8Array;
                        toProtoMsg(message: _161.QueryInterchainAccountRequest): _161.QueryInterchainAccountRequestProtoMsg;
                    };
                    QueryInterchainAccountResponse: {
                        typeUrl: string;
                        encode(message: _161.QueryInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.QueryInterchainAccountResponse;
                        fromPartial(object: Partial<_161.QueryInterchainAccountResponse>): _161.QueryInterchainAccountResponse;
                        fromAmino(object: _161.QueryInterchainAccountResponseAmino): _161.QueryInterchainAccountResponse;
                        toAmino(message: _161.QueryInterchainAccountResponse): _161.QueryInterchainAccountResponseAmino;
                        fromAminoMsg(object: _161.QueryInterchainAccountResponseAminoMsg): _161.QueryInterchainAccountResponse;
                        toAminoMsg(message: _161.QueryInterchainAccountResponse): _161.QueryInterchainAccountResponseAminoMsg;
                        fromProtoMsg(message: _161.QueryInterchainAccountResponseProtoMsg): _161.QueryInterchainAccountResponse;
                        toProto(message: _161.QueryInterchainAccountResponse): Uint8Array;
                        toProtoMsg(message: _161.QueryInterchainAccountResponse): _161.QueryInterchainAccountResponseProtoMsg;
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
                    Params: {
                        typeUrl: string;
                        encode(message: _160.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.Params;
                        fromPartial(object: Partial<_160.Params>): _160.Params;
                        fromAmino(object: _160.ParamsAmino): _160.Params;
                        toAmino(message: _160.Params): _160.ParamsAmino;
                        fromAminoMsg(object: _160.ParamsAminoMsg): _160.Params;
                        toAminoMsg(message: _160.Params): _160.ParamsAminoMsg;
                        fromProtoMsg(message: _160.ParamsProtoMsg): _160.Params;
                        toProto(message: _160.Params): Uint8Array;
                        toProtoMsg(message: _160.Params): _160.ParamsProtoMsg;
                    };
                };
            }
            namespace genesis {
                const v1: {
                    GenesisState: {
                        typeUrl: string;
                        encode(message: _163.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.GenesisState;
                        fromPartial(object: Partial<_163.GenesisState>): _163.GenesisState;
                        fromAmino(object: _163.GenesisStateAmino): _163.GenesisState;
                        toAmino(message: _163.GenesisState): _163.GenesisStateAmino;
                        fromAminoMsg(object: _163.GenesisStateAminoMsg): _163.GenesisState;
                        toAminoMsg(message: _163.GenesisState): _163.GenesisStateAminoMsg;
                        fromProtoMsg(message: _163.GenesisStateProtoMsg): _163.GenesisState;
                        toProto(message: _163.GenesisState): Uint8Array;
                        toProtoMsg(message: _163.GenesisState): _163.GenesisStateProtoMsg;
                    };
                    ControllerGenesisState: {
                        typeUrl: string;
                        encode(message: _163.ControllerGenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.ControllerGenesisState;
                        fromPartial(object: Partial<_163.ControllerGenesisState>): _163.ControllerGenesisState;
                        fromAmino(object: _163.ControllerGenesisStateAmino): _163.ControllerGenesisState;
                        toAmino(message: _163.ControllerGenesisState): _163.ControllerGenesisStateAmino;
                        fromAminoMsg(object: _163.ControllerGenesisStateAminoMsg): _163.ControllerGenesisState;
                        toAminoMsg(message: _163.ControllerGenesisState): _163.ControllerGenesisStateAminoMsg;
                        fromProtoMsg(message: _163.ControllerGenesisStateProtoMsg): _163.ControllerGenesisState;
                        toProto(message: _163.ControllerGenesisState): Uint8Array;
                        toProtoMsg(message: _163.ControllerGenesisState): _163.ControllerGenesisStateProtoMsg;
                    };
                    HostGenesisState: {
                        typeUrl: string;
                        encode(message: _163.HostGenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.HostGenesisState;
                        fromPartial(object: Partial<_163.HostGenesisState>): _163.HostGenesisState;
                        fromAmino(object: _163.HostGenesisStateAmino): _163.HostGenesisState;
                        toAmino(message: _163.HostGenesisState): _163.HostGenesisStateAmino;
                        fromAminoMsg(object: _163.HostGenesisStateAminoMsg): _163.HostGenesisState;
                        toAminoMsg(message: _163.HostGenesisState): _163.HostGenesisStateAminoMsg;
                        fromProtoMsg(message: _163.HostGenesisStateProtoMsg): _163.HostGenesisState;
                        toProto(message: _163.HostGenesisState): Uint8Array;
                        toProtoMsg(message: _163.HostGenesisState): _163.HostGenesisStateProtoMsg;
                    };
                    ActiveChannel: {
                        typeUrl: string;
                        encode(message: _163.ActiveChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.ActiveChannel;
                        fromPartial(object: Partial<_163.ActiveChannel>): _163.ActiveChannel;
                        fromAmino(object: _163.ActiveChannelAmino): _163.ActiveChannel;
                        toAmino(message: _163.ActiveChannel): _163.ActiveChannelAmino;
                        fromAminoMsg(object: _163.ActiveChannelAminoMsg): _163.ActiveChannel;
                        toAminoMsg(message: _163.ActiveChannel): _163.ActiveChannelAminoMsg;
                        fromProtoMsg(message: _163.ActiveChannelProtoMsg): _163.ActiveChannel;
                        toProto(message: _163.ActiveChannel): Uint8Array;
                        toProtoMsg(message: _163.ActiveChannel): _163.ActiveChannelProtoMsg;
                    };
                    RegisteredInterchainAccount: {
                        typeUrl: string;
                        encode(message: _163.RegisteredInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.RegisteredInterchainAccount;
                        fromPartial(object: Partial<_163.RegisteredInterchainAccount>): _163.RegisteredInterchainAccount;
                        fromAmino(object: _163.RegisteredInterchainAccountAmino): _163.RegisteredInterchainAccount;
                        toAmino(message: _163.RegisteredInterchainAccount): _163.RegisteredInterchainAccountAmino;
                        fromAminoMsg(object: _163.RegisteredInterchainAccountAminoMsg): _163.RegisteredInterchainAccount;
                        toAminoMsg(message: _163.RegisteredInterchainAccount): _163.RegisteredInterchainAccountAminoMsg;
                        fromProtoMsg(message: _163.RegisteredInterchainAccountProtoMsg): _163.RegisteredInterchainAccount;
                        toProto(message: _163.RegisteredInterchainAccount): Uint8Array;
                        toProtoMsg(message: _163.RegisteredInterchainAccount): _163.RegisteredInterchainAccountProtoMsg;
                    };
                };
            }
            namespace host {
                const v1: {
                    MsgClientImpl: typeof _391.MsgClientImpl;
                    QueryClientImpl: typeof _383.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        params(request?: _165.QueryParamsRequest): Promise<_165.QueryParamsResponse>;
                    };
                    registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            updateParams(value: _166.MsgUpdateParams): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            moduleQuerySafe(value: _166.MsgModuleQuerySafe): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            updateParams(value: _166.MsgUpdateParams): {
                                typeUrl: string;
                                value: _166.MsgUpdateParams;
                            };
                            moduleQuerySafe(value: _166.MsgModuleQuerySafe): {
                                typeUrl: string;
                                value: _166.MsgModuleQuerySafe;
                            };
                        };
                        fromPartial: {
                            updateParams(value: _166.MsgUpdateParams): {
                                typeUrl: string;
                                value: _166.MsgUpdateParams;
                            };
                            moduleQuerySafe(value: _166.MsgModuleQuerySafe): {
                                typeUrl: string;
                                value: _166.MsgModuleQuerySafe;
                            };
                        };
                    };
                    AminoConverter: {
                        "/ibc.applications.interchain_accounts.host.v1.MsgUpdateParams": {
                            aminoType: string;
                            toAmino: (message: _166.MsgUpdateParams) => _166.MsgUpdateParamsAmino;
                            fromAmino: (object: _166.MsgUpdateParamsAmino) => _166.MsgUpdateParams;
                        };
                        "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafe": {
                            aminoType: string;
                            toAmino: (message: _166.MsgModuleQuerySafe) => _166.MsgModuleQuerySafeAmino;
                            fromAmino: (object: _166.MsgModuleQuerySafeAmino) => _166.MsgModuleQuerySafe;
                        };
                    };
                    MsgUpdateParams: {
                        typeUrl: string;
                        encode(message: _166.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.MsgUpdateParams;
                        fromPartial(object: Partial<_166.MsgUpdateParams>): _166.MsgUpdateParams;
                        fromAmino(object: _166.MsgUpdateParamsAmino): _166.MsgUpdateParams;
                        toAmino(message: _166.MsgUpdateParams): _166.MsgUpdateParamsAmino;
                        fromAminoMsg(object: _166.MsgUpdateParamsAminoMsg): _166.MsgUpdateParams;
                        toAminoMsg(message: _166.MsgUpdateParams): _166.MsgUpdateParamsAminoMsg;
                        fromProtoMsg(message: _166.MsgUpdateParamsProtoMsg): _166.MsgUpdateParams;
                        toProto(message: _166.MsgUpdateParams): Uint8Array;
                        toProtoMsg(message: _166.MsgUpdateParams): _166.MsgUpdateParamsProtoMsg;
                    };
                    MsgUpdateParamsResponse: {
                        typeUrl: string;
                        encode(_: _166.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.MsgUpdateParamsResponse;
                        fromPartial(_: Partial<_166.MsgUpdateParamsResponse>): _166.MsgUpdateParamsResponse;
                        fromAmino(_: _166.MsgUpdateParamsResponseAmino): _166.MsgUpdateParamsResponse;
                        toAmino(_: _166.MsgUpdateParamsResponse): _166.MsgUpdateParamsResponseAmino;
                        fromAminoMsg(object: _166.MsgUpdateParamsResponseAminoMsg): _166.MsgUpdateParamsResponse;
                        toAminoMsg(message: _166.MsgUpdateParamsResponse): _166.MsgUpdateParamsResponseAminoMsg;
                        fromProtoMsg(message: _166.MsgUpdateParamsResponseProtoMsg): _166.MsgUpdateParamsResponse;
                        toProto(message: _166.MsgUpdateParamsResponse): Uint8Array;
                        toProtoMsg(message: _166.MsgUpdateParamsResponse): _166.MsgUpdateParamsResponseProtoMsg;
                    };
                    MsgModuleQuerySafe: {
                        typeUrl: string;
                        encode(message: _166.MsgModuleQuerySafe, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.MsgModuleQuerySafe;
                        fromPartial(object: Partial<_166.MsgModuleQuerySafe>): _166.MsgModuleQuerySafe;
                        fromAmino(object: _166.MsgModuleQuerySafeAmino): _166.MsgModuleQuerySafe;
                        toAmino(message: _166.MsgModuleQuerySafe): _166.MsgModuleQuerySafeAmino;
                        fromAminoMsg(object: _166.MsgModuleQuerySafeAminoMsg): _166.MsgModuleQuerySafe;
                        toAminoMsg(message: _166.MsgModuleQuerySafe): _166.MsgModuleQuerySafeAminoMsg;
                        fromProtoMsg(message: _166.MsgModuleQuerySafeProtoMsg): _166.MsgModuleQuerySafe;
                        toProto(message: _166.MsgModuleQuerySafe): Uint8Array;
                        toProtoMsg(message: _166.MsgModuleQuerySafe): _166.MsgModuleQuerySafeProtoMsg;
                    };
                    MsgModuleQuerySafeResponse: {
                        typeUrl: string;
                        encode(message: _166.MsgModuleQuerySafeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.MsgModuleQuerySafeResponse;
                        fromPartial(object: Partial<_166.MsgModuleQuerySafeResponse>): _166.MsgModuleQuerySafeResponse;
                        fromAmino(object: _166.MsgModuleQuerySafeResponseAmino): _166.MsgModuleQuerySafeResponse;
                        toAmino(message: _166.MsgModuleQuerySafeResponse): _166.MsgModuleQuerySafeResponseAmino;
                        fromAminoMsg(object: _166.MsgModuleQuerySafeResponseAminoMsg): _166.MsgModuleQuerySafeResponse;
                        toAminoMsg(message: _166.MsgModuleQuerySafeResponse): _166.MsgModuleQuerySafeResponseAminoMsg;
                        fromProtoMsg(message: _166.MsgModuleQuerySafeResponseProtoMsg): _166.MsgModuleQuerySafeResponse;
                        toProto(message: _166.MsgModuleQuerySafeResponse): Uint8Array;
                        toProtoMsg(message: _166.MsgModuleQuerySafeResponse): _166.MsgModuleQuerySafeResponseProtoMsg;
                    };
                    QueryParamsRequest: {
                        typeUrl: string;
                        encode(_: _165.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.QueryParamsRequest;
                        fromPartial(_: Partial<_165.QueryParamsRequest>): _165.QueryParamsRequest;
                        fromAmino(_: _165.QueryParamsRequestAmino): _165.QueryParamsRequest;
                        toAmino(_: _165.QueryParamsRequest): _165.QueryParamsRequestAmino;
                        fromAminoMsg(object: _165.QueryParamsRequestAminoMsg): _165.QueryParamsRequest;
                        toAminoMsg(message: _165.QueryParamsRequest): _165.QueryParamsRequestAminoMsg;
                        fromProtoMsg(message: _165.QueryParamsRequestProtoMsg): _165.QueryParamsRequest;
                        toProto(message: _165.QueryParamsRequest): Uint8Array;
                        toProtoMsg(message: _165.QueryParamsRequest): _165.QueryParamsRequestProtoMsg;
                    };
                    QueryParamsResponse: {
                        typeUrl: string;
                        encode(message: _165.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.QueryParamsResponse;
                        fromPartial(object: Partial<_165.QueryParamsResponse>): _165.QueryParamsResponse;
                        fromAmino(object: _165.QueryParamsResponseAmino): _165.QueryParamsResponse;
                        toAmino(message: _165.QueryParamsResponse): _165.QueryParamsResponseAmino;
                        fromAminoMsg(object: _165.QueryParamsResponseAminoMsg): _165.QueryParamsResponse;
                        toAminoMsg(message: _165.QueryParamsResponse): _165.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _165.QueryParamsResponseProtoMsg): _165.QueryParamsResponse;
                        toProto(message: _165.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _165.QueryParamsResponse): _165.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        typeUrl: string;
                        encode(message: _164.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.Params;
                        fromPartial(object: Partial<_164.Params>): _164.Params;
                        fromAmino(object: _164.ParamsAmino): _164.Params;
                        toAmino(message: _164.Params): _164.ParamsAmino;
                        fromAminoMsg(object: _164.ParamsAminoMsg): _164.Params;
                        toAminoMsg(message: _164.Params): _164.ParamsAminoMsg;
                        fromProtoMsg(message: _164.ParamsProtoMsg): _164.Params;
                        toProto(message: _164.Params): Uint8Array;
                        toProtoMsg(message: _164.Params): _164.ParamsProtoMsg;
                    };
                    QueryRequest: {
                        typeUrl: string;
                        encode(message: _164.QueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.QueryRequest;
                        fromPartial(object: Partial<_164.QueryRequest>): _164.QueryRequest;
                        fromAmino(object: _164.QueryRequestAmino): _164.QueryRequest;
                        toAmino(message: _164.QueryRequest): _164.QueryRequestAmino;
                        fromAminoMsg(object: _164.QueryRequestAminoMsg): _164.QueryRequest;
                        toAminoMsg(message: _164.QueryRequest): _164.QueryRequestAminoMsg;
                        fromProtoMsg(message: _164.QueryRequestProtoMsg): _164.QueryRequest;
                        toProto(message: _164.QueryRequest): Uint8Array;
                        toProtoMsg(message: _164.QueryRequest): _164.QueryRequestProtoMsg;
                    };
                };
            }
            const v1: {
                typeFromJSON(object: any): _169.Type;
                typeToJSON(object: _169.Type): string;
                Type: typeof _169.Type;
                TypeSDKType: typeof _169.Type;
                TypeAmino: typeof _169.Type;
                InterchainAccountPacketData: {
                    typeUrl: string;
                    encode(message: _169.InterchainAccountPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.InterchainAccountPacketData;
                    fromPartial(object: Partial<_169.InterchainAccountPacketData>): _169.InterchainAccountPacketData;
                    fromAmino(object: _169.InterchainAccountPacketDataAmino): _169.InterchainAccountPacketData;
                    toAmino(message: _169.InterchainAccountPacketData): _169.InterchainAccountPacketDataAmino;
                    fromAminoMsg(object: _169.InterchainAccountPacketDataAminoMsg): _169.InterchainAccountPacketData;
                    toAminoMsg(message: _169.InterchainAccountPacketData): _169.InterchainAccountPacketDataAminoMsg;
                    fromProtoMsg(message: _169.InterchainAccountPacketDataProtoMsg): _169.InterchainAccountPacketData;
                    toProto(message: _169.InterchainAccountPacketData): Uint8Array;
                    toProtoMsg(message: _169.InterchainAccountPacketData): _169.InterchainAccountPacketDataProtoMsg;
                };
                CosmosTx: {
                    typeUrl: string;
                    encode(message: _169.CosmosTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.CosmosTx;
                    fromPartial(object: Partial<_169.CosmosTx>): _169.CosmosTx;
                    fromAmino(object: _169.CosmosTxAmino): _169.CosmosTx;
                    toAmino(message: _169.CosmosTx): _169.CosmosTxAmino;
                    fromAminoMsg(object: _169.CosmosTxAminoMsg): _169.CosmosTx;
                    toAminoMsg(message: _169.CosmosTx): _169.CosmosTxAminoMsg;
                    fromProtoMsg(message: _169.CosmosTxProtoMsg): _169.CosmosTx;
                    toProto(message: _169.CosmosTx): Uint8Array;
                    toProtoMsg(message: _169.CosmosTx): _169.CosmosTxProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _168.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.Metadata;
                    fromPartial(object: Partial<_168.Metadata>): _168.Metadata;
                    fromAmino(object: _168.MetadataAmino): _168.Metadata;
                    toAmino(message: _168.Metadata): _168.MetadataAmino;
                    fromAminoMsg(object: _168.MetadataAminoMsg): _168.Metadata;
                    toAminoMsg(message: _168.Metadata): _168.MetadataAminoMsg;
                    fromProtoMsg(message: _168.MetadataProtoMsg): _168.Metadata;
                    toProto(message: _168.Metadata): Uint8Array;
                    toProtoMsg(message: _168.Metadata): _168.MetadataProtoMsg;
                };
                InterchainAccount: {
                    typeUrl: string;
                    encode(message: _167.InterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.InterchainAccount;
                    fromPartial(object: Partial<_167.InterchainAccount>): _167.InterchainAccount;
                    fromAmino(object: _167.InterchainAccountAmino): _167.InterchainAccount;
                    toAmino(message: _167.InterchainAccount): _167.InterchainAccountAmino;
                    fromAminoMsg(object: _167.InterchainAccountAminoMsg): _167.InterchainAccount;
                    toAminoMsg(message: _167.InterchainAccount): _167.InterchainAccountAminoMsg;
                    fromProtoMsg(message: _167.InterchainAccountProtoMsg): _167.InterchainAccount;
                    toProto(message: _167.InterchainAccount): Uint8Array;
                    toProtoMsg(message: _167.InterchainAccount): _167.InterchainAccountProtoMsg;
                };
            };
        }
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _392.MsgClientImpl;
                QueryClientImpl: typeof _384.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTraces(request?: _172.QueryDenomTracesRequest): Promise<_172.QueryDenomTracesResponse>;
                    denomTrace(request: _172.QueryDenomTraceRequest): Promise<_172.QueryDenomTraceResponse>;
                    params(request?: _172.QueryParamsRequest): Promise<_172.QueryParamsResponse>;
                    denomHash(request: _172.QueryDenomHashRequest): Promise<_172.QueryDenomHashResponse>;
                    escrowAddress(request: _172.QueryEscrowAddressRequest): Promise<_172.QueryEscrowAddressResponse>;
                    totalEscrowForDenom(request: _172.QueryTotalEscrowForDenomRequest): Promise<_172.QueryTotalEscrowForDenomResponse>;
                };
                registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _174.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateParams(value: _174.MsgUpdateParams): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _174.MsgTransfer): {
                            typeUrl: string;
                            value: _174.MsgTransfer;
                        };
                        updateParams(value: _174.MsgUpdateParams): {
                            typeUrl: string;
                            value: _174.MsgUpdateParams;
                        };
                    };
                    fromPartial: {
                        transfer(value: _174.MsgTransfer): {
                            typeUrl: string;
                            value: _174.MsgTransfer;
                        };
                        updateParams(value: _174.MsgUpdateParams): {
                            typeUrl: string;
                            value: _174.MsgUpdateParams;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _174.MsgTransfer) => _174.MsgTransferAmino;
                        fromAmino: (object: _174.MsgTransferAmino) => _174.MsgTransfer;
                    };
                    "/ibc.applications.transfer.v1.MsgUpdateParams": {
                        aminoType: string;
                        toAmino: (message: _174.MsgUpdateParams) => _174.MsgUpdateParamsAmino;
                        fromAmino: (object: _174.MsgUpdateParamsAmino) => _174.MsgUpdateParams;
                    };
                };
                MsgTransfer: {
                    typeUrl: string;
                    encode(message: _174.MsgTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.MsgTransfer;
                    fromPartial(object: Partial<_174.MsgTransfer>): _174.MsgTransfer;
                    fromAmino(object: _174.MsgTransferAmino): _174.MsgTransfer;
                    toAmino(message: _174.MsgTransfer): _174.MsgTransferAmino;
                    fromAminoMsg(object: _174.MsgTransferAminoMsg): _174.MsgTransfer;
                    toAminoMsg(message: _174.MsgTransfer): _174.MsgTransferAminoMsg;
                    fromProtoMsg(message: _174.MsgTransferProtoMsg): _174.MsgTransfer;
                    toProto(message: _174.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _174.MsgTransfer): _174.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    typeUrl: string;
                    encode(message: _174.MsgTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.MsgTransferResponse;
                    fromPartial(object: Partial<_174.MsgTransferResponse>): _174.MsgTransferResponse;
                    fromAmino(object: _174.MsgTransferResponseAmino): _174.MsgTransferResponse;
                    toAmino(message: _174.MsgTransferResponse): _174.MsgTransferResponseAmino;
                    fromAminoMsg(object: _174.MsgTransferResponseAminoMsg): _174.MsgTransferResponse;
                    toAminoMsg(message: _174.MsgTransferResponse): _174.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _174.MsgTransferResponseProtoMsg): _174.MsgTransferResponse;
                    toProto(message: _174.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _174.MsgTransferResponse): _174.MsgTransferResponseProtoMsg;
                };
                MsgUpdateParams: {
                    typeUrl: string;
                    encode(message: _174.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.MsgUpdateParams;
                    fromPartial(object: Partial<_174.MsgUpdateParams>): _174.MsgUpdateParams;
                    fromAmino(object: _174.MsgUpdateParamsAmino): _174.MsgUpdateParams;
                    toAmino(message: _174.MsgUpdateParams): _174.MsgUpdateParamsAmino;
                    fromAminoMsg(object: _174.MsgUpdateParamsAminoMsg): _174.MsgUpdateParams;
                    toAminoMsg(message: _174.MsgUpdateParams): _174.MsgUpdateParamsAminoMsg;
                    fromProtoMsg(message: _174.MsgUpdateParamsProtoMsg): _174.MsgUpdateParams;
                    toProto(message: _174.MsgUpdateParams): Uint8Array;
                    toProtoMsg(message: _174.MsgUpdateParams): _174.MsgUpdateParamsProtoMsg;
                };
                MsgUpdateParamsResponse: {
                    typeUrl: string;
                    encode(_: _174.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.MsgUpdateParamsResponse;
                    fromPartial(_: Partial<_174.MsgUpdateParamsResponse>): _174.MsgUpdateParamsResponse;
                    fromAmino(_: _174.MsgUpdateParamsResponseAmino): _174.MsgUpdateParamsResponse;
                    toAmino(_: _174.MsgUpdateParamsResponse): _174.MsgUpdateParamsResponseAmino;
                    fromAminoMsg(object: _174.MsgUpdateParamsResponseAminoMsg): _174.MsgUpdateParamsResponse;
                    toAminoMsg(message: _174.MsgUpdateParamsResponse): _174.MsgUpdateParamsResponseAminoMsg;
                    fromProtoMsg(message: _174.MsgUpdateParamsResponseProtoMsg): _174.MsgUpdateParamsResponse;
                    toProto(message: _174.MsgUpdateParamsResponse): Uint8Array;
                    toProtoMsg(message: _174.MsgUpdateParamsResponse): _174.MsgUpdateParamsResponseProtoMsg;
                };
                DenomTrace: {
                    typeUrl: string;
                    encode(message: _173.DenomTrace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.DenomTrace;
                    fromPartial(object: Partial<_173.DenomTrace>): _173.DenomTrace;
                    fromAmino(object: _173.DenomTraceAmino): _173.DenomTrace;
                    toAmino(message: _173.DenomTrace): _173.DenomTraceAmino;
                    fromAminoMsg(object: _173.DenomTraceAminoMsg): _173.DenomTrace;
                    toAminoMsg(message: _173.DenomTrace): _173.DenomTraceAminoMsg;
                    fromProtoMsg(message: _173.DenomTraceProtoMsg): _173.DenomTrace;
                    toProto(message: _173.DenomTrace): Uint8Array;
                    toProtoMsg(message: _173.DenomTrace): _173.DenomTraceProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _173.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.Params;
                    fromPartial(object: Partial<_173.Params>): _173.Params;
                    fromAmino(object: _173.ParamsAmino): _173.Params;
                    toAmino(message: _173.Params): _173.ParamsAmino;
                    fromAminoMsg(object: _173.ParamsAminoMsg): _173.Params;
                    toAminoMsg(message: _173.Params): _173.ParamsAminoMsg;
                    fromProtoMsg(message: _173.ParamsProtoMsg): _173.Params;
                    toProto(message: _173.Params): Uint8Array;
                    toProtoMsg(message: _173.Params): _173.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    encode(message: _172.QueryDenomTraceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryDenomTraceRequest;
                    fromPartial(object: Partial<_172.QueryDenomTraceRequest>): _172.QueryDenomTraceRequest;
                    fromAmino(object: _172.QueryDenomTraceRequestAmino): _172.QueryDenomTraceRequest;
                    toAmino(message: _172.QueryDenomTraceRequest): _172.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _172.QueryDenomTraceRequestAminoMsg): _172.QueryDenomTraceRequest;
                    toAminoMsg(message: _172.QueryDenomTraceRequest): _172.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _172.QueryDenomTraceRequestProtoMsg): _172.QueryDenomTraceRequest;
                    toProto(message: _172.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _172.QueryDenomTraceRequest): _172.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    encode(message: _172.QueryDenomTraceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryDenomTraceResponse;
                    fromPartial(object: Partial<_172.QueryDenomTraceResponse>): _172.QueryDenomTraceResponse;
                    fromAmino(object: _172.QueryDenomTraceResponseAmino): _172.QueryDenomTraceResponse;
                    toAmino(message: _172.QueryDenomTraceResponse): _172.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _172.QueryDenomTraceResponseAminoMsg): _172.QueryDenomTraceResponse;
                    toAminoMsg(message: _172.QueryDenomTraceResponse): _172.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _172.QueryDenomTraceResponseProtoMsg): _172.QueryDenomTraceResponse;
                    toProto(message: _172.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _172.QueryDenomTraceResponse): _172.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    encode(message: _172.QueryDenomTracesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryDenomTracesRequest;
                    fromPartial(object: Partial<_172.QueryDenomTracesRequest>): _172.QueryDenomTracesRequest;
                    fromAmino(object: _172.QueryDenomTracesRequestAmino): _172.QueryDenomTracesRequest;
                    toAmino(message: _172.QueryDenomTracesRequest): _172.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _172.QueryDenomTracesRequestAminoMsg): _172.QueryDenomTracesRequest;
                    toAminoMsg(message: _172.QueryDenomTracesRequest): _172.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _172.QueryDenomTracesRequestProtoMsg): _172.QueryDenomTracesRequest;
                    toProto(message: _172.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _172.QueryDenomTracesRequest): _172.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    encode(message: _172.QueryDenomTracesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryDenomTracesResponse;
                    fromPartial(object: Partial<_172.QueryDenomTracesResponse>): _172.QueryDenomTracesResponse;
                    fromAmino(object: _172.QueryDenomTracesResponseAmino): _172.QueryDenomTracesResponse;
                    toAmino(message: _172.QueryDenomTracesResponse): _172.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _172.QueryDenomTracesResponseAminoMsg): _172.QueryDenomTracesResponse;
                    toAminoMsg(message: _172.QueryDenomTracesResponse): _172.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _172.QueryDenomTracesResponseProtoMsg): _172.QueryDenomTracesResponse;
                    toProto(message: _172.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _172.QueryDenomTracesResponse): _172.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    encode(_: _172.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryParamsRequest;
                    fromPartial(_: Partial<_172.QueryParamsRequest>): _172.QueryParamsRequest;
                    fromAmino(_: _172.QueryParamsRequestAmino): _172.QueryParamsRequest;
                    toAmino(_: _172.QueryParamsRequest): _172.QueryParamsRequestAmino;
                    fromAminoMsg(object: _172.QueryParamsRequestAminoMsg): _172.QueryParamsRequest;
                    toAminoMsg(message: _172.QueryParamsRequest): _172.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _172.QueryParamsRequestProtoMsg): _172.QueryParamsRequest;
                    toProto(message: _172.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _172.QueryParamsRequest): _172.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    encode(message: _172.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryParamsResponse;
                    fromPartial(object: Partial<_172.QueryParamsResponse>): _172.QueryParamsResponse;
                    fromAmino(object: _172.QueryParamsResponseAmino): _172.QueryParamsResponse;
                    toAmino(message: _172.QueryParamsResponse): _172.QueryParamsResponseAmino;
                    fromAminoMsg(object: _172.QueryParamsResponseAminoMsg): _172.QueryParamsResponse;
                    toAminoMsg(message: _172.QueryParamsResponse): _172.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _172.QueryParamsResponseProtoMsg): _172.QueryParamsResponse;
                    toProto(message: _172.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _172.QueryParamsResponse): _172.QueryParamsResponseProtoMsg;
                };
                QueryDenomHashRequest: {
                    typeUrl: string;
                    encode(message: _172.QueryDenomHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryDenomHashRequest;
                    fromPartial(object: Partial<_172.QueryDenomHashRequest>): _172.QueryDenomHashRequest;
                    fromAmino(object: _172.QueryDenomHashRequestAmino): _172.QueryDenomHashRequest;
                    toAmino(message: _172.QueryDenomHashRequest): _172.QueryDenomHashRequestAmino;
                    fromAminoMsg(object: _172.QueryDenomHashRequestAminoMsg): _172.QueryDenomHashRequest;
                    toAminoMsg(message: _172.QueryDenomHashRequest): _172.QueryDenomHashRequestAminoMsg;
                    fromProtoMsg(message: _172.QueryDenomHashRequestProtoMsg): _172.QueryDenomHashRequest;
                    toProto(message: _172.QueryDenomHashRequest): Uint8Array;
                    toProtoMsg(message: _172.QueryDenomHashRequest): _172.QueryDenomHashRequestProtoMsg;
                };
                QueryDenomHashResponse: {
                    typeUrl: string;
                    encode(message: _172.QueryDenomHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryDenomHashResponse;
                    fromPartial(object: Partial<_172.QueryDenomHashResponse>): _172.QueryDenomHashResponse;
                    fromAmino(object: _172.QueryDenomHashResponseAmino): _172.QueryDenomHashResponse;
                    toAmino(message: _172.QueryDenomHashResponse): _172.QueryDenomHashResponseAmino;
                    fromAminoMsg(object: _172.QueryDenomHashResponseAminoMsg): _172.QueryDenomHashResponse;
                    toAminoMsg(message: _172.QueryDenomHashResponse): _172.QueryDenomHashResponseAminoMsg;
                    fromProtoMsg(message: _172.QueryDenomHashResponseProtoMsg): _172.QueryDenomHashResponse;
                    toProto(message: _172.QueryDenomHashResponse): Uint8Array;
                    toProtoMsg(message: _172.QueryDenomHashResponse): _172.QueryDenomHashResponseProtoMsg;
                };
                QueryEscrowAddressRequest: {
                    typeUrl: string;
                    encode(message: _172.QueryEscrowAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryEscrowAddressRequest;
                    fromPartial(object: Partial<_172.QueryEscrowAddressRequest>): _172.QueryEscrowAddressRequest;
                    fromAmino(object: _172.QueryEscrowAddressRequestAmino): _172.QueryEscrowAddressRequest;
                    toAmino(message: _172.QueryEscrowAddressRequest): _172.QueryEscrowAddressRequestAmino;
                    fromAminoMsg(object: _172.QueryEscrowAddressRequestAminoMsg): _172.QueryEscrowAddressRequest;
                    toAminoMsg(message: _172.QueryEscrowAddressRequest): _172.QueryEscrowAddressRequestAminoMsg;
                    fromProtoMsg(message: _172.QueryEscrowAddressRequestProtoMsg): _172.QueryEscrowAddressRequest;
                    toProto(message: _172.QueryEscrowAddressRequest): Uint8Array;
                    toProtoMsg(message: _172.QueryEscrowAddressRequest): _172.QueryEscrowAddressRequestProtoMsg;
                };
                QueryEscrowAddressResponse: {
                    typeUrl: string;
                    encode(message: _172.QueryEscrowAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryEscrowAddressResponse;
                    fromPartial(object: Partial<_172.QueryEscrowAddressResponse>): _172.QueryEscrowAddressResponse;
                    fromAmino(object: _172.QueryEscrowAddressResponseAmino): _172.QueryEscrowAddressResponse;
                    toAmino(message: _172.QueryEscrowAddressResponse): _172.QueryEscrowAddressResponseAmino;
                    fromAminoMsg(object: _172.QueryEscrowAddressResponseAminoMsg): _172.QueryEscrowAddressResponse;
                    toAminoMsg(message: _172.QueryEscrowAddressResponse): _172.QueryEscrowAddressResponseAminoMsg;
                    fromProtoMsg(message: _172.QueryEscrowAddressResponseProtoMsg): _172.QueryEscrowAddressResponse;
                    toProto(message: _172.QueryEscrowAddressResponse): Uint8Array;
                    toProtoMsg(message: _172.QueryEscrowAddressResponse): _172.QueryEscrowAddressResponseProtoMsg;
                };
                QueryTotalEscrowForDenomRequest: {
                    typeUrl: string;
                    encode(message: _172.QueryTotalEscrowForDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryTotalEscrowForDenomRequest;
                    fromPartial(object: Partial<_172.QueryTotalEscrowForDenomRequest>): _172.QueryTotalEscrowForDenomRequest;
                    fromAmino(object: _172.QueryTotalEscrowForDenomRequestAmino): _172.QueryTotalEscrowForDenomRequest;
                    toAmino(message: _172.QueryTotalEscrowForDenomRequest): _172.QueryTotalEscrowForDenomRequestAmino;
                    fromAminoMsg(object: _172.QueryTotalEscrowForDenomRequestAminoMsg): _172.QueryTotalEscrowForDenomRequest;
                    toAminoMsg(message: _172.QueryTotalEscrowForDenomRequest): _172.QueryTotalEscrowForDenomRequestAminoMsg;
                    fromProtoMsg(message: _172.QueryTotalEscrowForDenomRequestProtoMsg): _172.QueryTotalEscrowForDenomRequest;
                    toProto(message: _172.QueryTotalEscrowForDenomRequest): Uint8Array;
                    toProtoMsg(message: _172.QueryTotalEscrowForDenomRequest): _172.QueryTotalEscrowForDenomRequestProtoMsg;
                };
                QueryTotalEscrowForDenomResponse: {
                    typeUrl: string;
                    encode(message: _172.QueryTotalEscrowForDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryTotalEscrowForDenomResponse;
                    fromPartial(object: Partial<_172.QueryTotalEscrowForDenomResponse>): _172.QueryTotalEscrowForDenomResponse;
                    fromAmino(object: _172.QueryTotalEscrowForDenomResponseAmino): _172.QueryTotalEscrowForDenomResponse;
                    toAmino(message: _172.QueryTotalEscrowForDenomResponse): _172.QueryTotalEscrowForDenomResponseAmino;
                    fromAminoMsg(object: _172.QueryTotalEscrowForDenomResponseAminoMsg): _172.QueryTotalEscrowForDenomResponse;
                    toAminoMsg(message: _172.QueryTotalEscrowForDenomResponse): _172.QueryTotalEscrowForDenomResponseAminoMsg;
                    fromProtoMsg(message: _172.QueryTotalEscrowForDenomResponseProtoMsg): _172.QueryTotalEscrowForDenomResponse;
                    toProto(message: _172.QueryTotalEscrowForDenomResponse): Uint8Array;
                    toProtoMsg(message: _172.QueryTotalEscrowForDenomResponse): _172.QueryTotalEscrowForDenomResponseProtoMsg;
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
                Allocation: {
                    typeUrl: string;
                    encode(message: _170.Allocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.Allocation;
                    fromPartial(object: Partial<_170.Allocation>): _170.Allocation;
                    fromAmino(object: _170.AllocationAmino): _170.Allocation;
                    toAmino(message: _170.Allocation): _170.AllocationAmino;
                    fromAminoMsg(object: _170.AllocationAminoMsg): _170.Allocation;
                    toAminoMsg(message: _170.Allocation): _170.AllocationAminoMsg;
                    fromProtoMsg(message: _170.AllocationProtoMsg): _170.Allocation;
                    toProto(message: _170.Allocation): Uint8Array;
                    toProtoMsg(message: _170.Allocation): _170.AllocationProtoMsg;
                };
                TransferAuthorization: {
                    typeUrl: string;
                    encode(message: _170.TransferAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.TransferAuthorization;
                    fromPartial(object: Partial<_170.TransferAuthorization>): _170.TransferAuthorization;
                    fromAmino(object: _170.TransferAuthorizationAmino): _170.TransferAuthorization;
                    toAmino(message: _170.TransferAuthorization): _170.TransferAuthorizationAmino;
                    fromAminoMsg(object: _170.TransferAuthorizationAminoMsg): _170.TransferAuthorization;
                    toAminoMsg(message: _170.TransferAuthorization): _170.TransferAuthorizationAminoMsg;
                    fromProtoMsg(message: _170.TransferAuthorizationProtoMsg): _170.TransferAuthorization;
                    toProto(message: _170.TransferAuthorization): Uint8Array;
                    toProtoMsg(message: _170.TransferAuthorization): _170.TransferAuthorizationProtoMsg;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    typeUrl: string;
                    encode(message: _175.FungibleTokenPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.FungibleTokenPacketData;
                    fromPartial(object: Partial<_175.FungibleTokenPacketData>): _175.FungibleTokenPacketData;
                    fromAmino(object: _175.FungibleTokenPacketDataAmino): _175.FungibleTokenPacketData;
                    toAmino(message: _175.FungibleTokenPacketData): _175.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _175.FungibleTokenPacketDataAminoMsg): _175.FungibleTokenPacketData;
                    toAminoMsg(message: _175.FungibleTokenPacketData): _175.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _175.FungibleTokenPacketDataProtoMsg): _175.FungibleTokenPacketData;
                    toProto(message: _175.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _175.FungibleTokenPacketData): _175.FungibleTokenPacketDataProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _393.MsgClientImpl;
                QueryClientImpl: typeof _385.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _178.QueryChannelRequest): Promise<_178.QueryChannelResponse>;
                    channels(request?: _178.QueryChannelsRequest): Promise<_178.QueryChannelsResponse>;
                    connectionChannels(request: _178.QueryConnectionChannelsRequest): Promise<_178.QueryConnectionChannelsResponse>;
                    channelClientState(request: _178.QueryChannelClientStateRequest): Promise<_178.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _178.QueryChannelConsensusStateRequest): Promise<_178.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _178.QueryPacketCommitmentRequest): Promise<_178.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _178.QueryPacketCommitmentsRequest): Promise<_178.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _178.QueryPacketReceiptRequest): Promise<_178.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _178.QueryPacketAcknowledgementRequest): Promise<_178.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _178.QueryPacketAcknowledgementsRequest): Promise<_178.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _178.QueryUnreceivedPacketsRequest): Promise<_178.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _178.QueryUnreceivedAcksRequest): Promise<_178.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _178.QueryNextSequenceReceiveRequest): Promise<_178.QueryNextSequenceReceiveResponse>;
                    nextSequenceSend(request: _178.QueryNextSequenceSendRequest): Promise<_178.QueryNextSequenceSendResponse>;
                    upgradeError(request: _178.QueryUpgradeErrorRequest): Promise<_178.QueryUpgradeErrorResponse>;
                    upgrade(request: _178.QueryUpgradeRequest): Promise<_178.QueryUpgradeResponse>;
                    channelParams(request?: _178.QueryChannelParamsRequest): Promise<_178.QueryChannelParamsResponse>;
                };
                registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _179.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _179.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _179.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _179.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _179.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _179.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _179.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _179.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _179.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _179.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelUpgradeInit(value: _179.MsgChannelUpgradeInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelUpgradeTry(value: _179.MsgChannelUpgradeTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelUpgradeAck(value: _179.MsgChannelUpgradeAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelUpgradeConfirm(value: _179.MsgChannelUpgradeConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelUpgradeOpen(value: _179.MsgChannelUpgradeOpen): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelUpgradeTimeout(value: _179.MsgChannelUpgradeTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelUpgradeCancel(value: _179.MsgChannelUpgradeCancel): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateChannelParams(value: _179.MsgUpdateParams): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        pruneAcknowledgements(value: _179.MsgPruneAcknowledgements): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _179.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _179.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _179.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _179.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _179.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _179.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _179.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _179.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _179.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _179.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _179.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _179.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _179.MsgRecvPacket): {
                            typeUrl: string;
                            value: _179.MsgRecvPacket;
                        };
                        timeout(value: _179.MsgTimeout): {
                            typeUrl: string;
                            value: _179.MsgTimeout;
                        };
                        timeoutOnClose(value: _179.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _179.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _179.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _179.MsgAcknowledgement;
                        };
                        channelUpgradeInit(value: _179.MsgChannelUpgradeInit): {
                            typeUrl: string;
                            value: _179.MsgChannelUpgradeInit;
                        };
                        channelUpgradeTry(value: _179.MsgChannelUpgradeTry): {
                            typeUrl: string;
                            value: _179.MsgChannelUpgradeTry;
                        };
                        channelUpgradeAck(value: _179.MsgChannelUpgradeAck): {
                            typeUrl: string;
                            value: _179.MsgChannelUpgradeAck;
                        };
                        channelUpgradeConfirm(value: _179.MsgChannelUpgradeConfirm): {
                            typeUrl: string;
                            value: _179.MsgChannelUpgradeConfirm;
                        };
                        channelUpgradeOpen(value: _179.MsgChannelUpgradeOpen): {
                            typeUrl: string;
                            value: _179.MsgChannelUpgradeOpen;
                        };
                        channelUpgradeTimeout(value: _179.MsgChannelUpgradeTimeout): {
                            typeUrl: string;
                            value: _179.MsgChannelUpgradeTimeout;
                        };
                        channelUpgradeCancel(value: _179.MsgChannelUpgradeCancel): {
                            typeUrl: string;
                            value: _179.MsgChannelUpgradeCancel;
                        };
                        updateChannelParams(value: _179.MsgUpdateParams): {
                            typeUrl: string;
                            value: _179.MsgUpdateParams;
                        };
                        pruneAcknowledgements(value: _179.MsgPruneAcknowledgements): {
                            typeUrl: string;
                            value: _179.MsgPruneAcknowledgements;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _179.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _179.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _179.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _179.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _179.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _179.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _179.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _179.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _179.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _179.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _179.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _179.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _179.MsgRecvPacket): {
                            typeUrl: string;
                            value: _179.MsgRecvPacket;
                        };
                        timeout(value: _179.MsgTimeout): {
                            typeUrl: string;
                            value: _179.MsgTimeout;
                        };
                        timeoutOnClose(value: _179.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _179.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _179.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _179.MsgAcknowledgement;
                        };
                        channelUpgradeInit(value: _179.MsgChannelUpgradeInit): {
                            typeUrl: string;
                            value: _179.MsgChannelUpgradeInit;
                        };
                        channelUpgradeTry(value: _179.MsgChannelUpgradeTry): {
                            typeUrl: string;
                            value: _179.MsgChannelUpgradeTry;
                        };
                        channelUpgradeAck(value: _179.MsgChannelUpgradeAck): {
                            typeUrl: string;
                            value: _179.MsgChannelUpgradeAck;
                        };
                        channelUpgradeConfirm(value: _179.MsgChannelUpgradeConfirm): {
                            typeUrl: string;
                            value: _179.MsgChannelUpgradeConfirm;
                        };
                        channelUpgradeOpen(value: _179.MsgChannelUpgradeOpen): {
                            typeUrl: string;
                            value: _179.MsgChannelUpgradeOpen;
                        };
                        channelUpgradeTimeout(value: _179.MsgChannelUpgradeTimeout): {
                            typeUrl: string;
                            value: _179.MsgChannelUpgradeTimeout;
                        };
                        channelUpgradeCancel(value: _179.MsgChannelUpgradeCancel): {
                            typeUrl: string;
                            value: _179.MsgChannelUpgradeCancel;
                        };
                        updateChannelParams(value: _179.MsgUpdateParams): {
                            typeUrl: string;
                            value: _179.MsgUpdateParams;
                        };
                        pruneAcknowledgements(value: _179.MsgPruneAcknowledgements): {
                            typeUrl: string;
                            value: _179.MsgPruneAcknowledgements;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _179.MsgChannelOpenInit) => _179.MsgChannelOpenInitAmino;
                        fromAmino: (object: _179.MsgChannelOpenInitAmino) => _179.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _179.MsgChannelOpenTry) => _179.MsgChannelOpenTryAmino;
                        fromAmino: (object: _179.MsgChannelOpenTryAmino) => _179.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _179.MsgChannelOpenAck) => _179.MsgChannelOpenAckAmino;
                        fromAmino: (object: _179.MsgChannelOpenAckAmino) => _179.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _179.MsgChannelOpenConfirm) => _179.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _179.MsgChannelOpenConfirmAmino) => _179.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _179.MsgChannelCloseInit) => _179.MsgChannelCloseInitAmino;
                        fromAmino: (object: _179.MsgChannelCloseInitAmino) => _179.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _179.MsgChannelCloseConfirm) => _179.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _179.MsgChannelCloseConfirmAmino) => _179.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _179.MsgRecvPacket) => _179.MsgRecvPacketAmino;
                        fromAmino: (object: _179.MsgRecvPacketAmino) => _179.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _179.MsgTimeout) => _179.MsgTimeoutAmino;
                        fromAmino: (object: _179.MsgTimeoutAmino) => _179.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _179.MsgTimeoutOnClose) => _179.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _179.MsgTimeoutOnCloseAmino) => _179.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _179.MsgAcknowledgement) => _179.MsgAcknowledgementAmino;
                        fromAmino: (object: _179.MsgAcknowledgementAmino) => _179.MsgAcknowledgement;
                    };
                    "/ibc.core.channel.v1.MsgChannelUpgradeInit": {
                        aminoType: string;
                        toAmino: (message: _179.MsgChannelUpgradeInit) => _179.MsgChannelUpgradeInitAmino;
                        fromAmino: (object: _179.MsgChannelUpgradeInitAmino) => _179.MsgChannelUpgradeInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelUpgradeTry": {
                        aminoType: string;
                        toAmino: (message: _179.MsgChannelUpgradeTry) => _179.MsgChannelUpgradeTryAmino;
                        fromAmino: (object: _179.MsgChannelUpgradeTryAmino) => _179.MsgChannelUpgradeTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelUpgradeAck": {
                        aminoType: string;
                        toAmino: (message: _179.MsgChannelUpgradeAck) => _179.MsgChannelUpgradeAckAmino;
                        fromAmino: (object: _179.MsgChannelUpgradeAckAmino) => _179.MsgChannelUpgradeAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelUpgradeConfirm": {
                        aminoType: string;
                        toAmino: (message: _179.MsgChannelUpgradeConfirm) => _179.MsgChannelUpgradeConfirmAmino;
                        fromAmino: (object: _179.MsgChannelUpgradeConfirmAmino) => _179.MsgChannelUpgradeConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelUpgradeOpen": {
                        aminoType: string;
                        toAmino: (message: _179.MsgChannelUpgradeOpen) => _179.MsgChannelUpgradeOpenAmino;
                        fromAmino: (object: _179.MsgChannelUpgradeOpenAmino) => _179.MsgChannelUpgradeOpen;
                    };
                    "/ibc.core.channel.v1.MsgChannelUpgradeTimeout": {
                        aminoType: string;
                        toAmino: (message: _179.MsgChannelUpgradeTimeout) => _179.MsgChannelUpgradeTimeoutAmino;
                        fromAmino: (object: _179.MsgChannelUpgradeTimeoutAmino) => _179.MsgChannelUpgradeTimeout;
                    };
                    "/ibc.core.channel.v1.MsgChannelUpgradeCancel": {
                        aminoType: string;
                        toAmino: (message: _179.MsgChannelUpgradeCancel) => _179.MsgChannelUpgradeCancelAmino;
                        fromAmino: (object: _179.MsgChannelUpgradeCancelAmino) => _179.MsgChannelUpgradeCancel;
                    };
                    "/ibc.core.channel.v1.MsgUpdateParams": {
                        aminoType: string;
                        toAmino: (message: _179.MsgUpdateParams) => _179.MsgUpdateParamsAmino;
                        fromAmino: (object: _179.MsgUpdateParamsAmino) => _179.MsgUpdateParams;
                    };
                    "/ibc.core.channel.v1.MsgPruneAcknowledgements": {
                        aminoType: string;
                        toAmino: (message: _179.MsgPruneAcknowledgements) => _179.MsgPruneAcknowledgementsAmino;
                        fromAmino: (object: _179.MsgPruneAcknowledgementsAmino) => _179.MsgPruneAcknowledgements;
                    };
                };
                Upgrade: {
                    typeUrl: string;
                    encode(message: _180.Upgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.Upgrade;
                    fromPartial(object: Partial<_180.Upgrade>): _180.Upgrade;
                    fromAmino(object: _180.UpgradeAmino): _180.Upgrade;
                    toAmino(message: _180.Upgrade): _180.UpgradeAmino;
                    fromAminoMsg(object: _180.UpgradeAminoMsg): _180.Upgrade;
                    toAminoMsg(message: _180.Upgrade): _180.UpgradeAminoMsg;
                    fromProtoMsg(message: _180.UpgradeProtoMsg): _180.Upgrade;
                    toProto(message: _180.Upgrade): Uint8Array;
                    toProtoMsg(message: _180.Upgrade): _180.UpgradeProtoMsg;
                };
                UpgradeFields: {
                    typeUrl: string;
                    encode(message: _180.UpgradeFields, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.UpgradeFields;
                    fromPartial(object: Partial<_180.UpgradeFields>): _180.UpgradeFields;
                    fromAmino(object: _180.UpgradeFieldsAmino): _180.UpgradeFields;
                    toAmino(message: _180.UpgradeFields): _180.UpgradeFieldsAmino;
                    fromAminoMsg(object: _180.UpgradeFieldsAminoMsg): _180.UpgradeFields;
                    toAminoMsg(message: _180.UpgradeFields): _180.UpgradeFieldsAminoMsg;
                    fromProtoMsg(message: _180.UpgradeFieldsProtoMsg): _180.UpgradeFields;
                    toProto(message: _180.UpgradeFields): Uint8Array;
                    toProtoMsg(message: _180.UpgradeFields): _180.UpgradeFieldsProtoMsg;
                };
                ErrorReceipt: {
                    typeUrl: string;
                    encode(message: _180.ErrorReceipt, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.ErrorReceipt;
                    fromPartial(object: Partial<_180.ErrorReceipt>): _180.ErrorReceipt;
                    fromAmino(object: _180.ErrorReceiptAmino): _180.ErrorReceipt;
                    toAmino(message: _180.ErrorReceipt): _180.ErrorReceiptAmino;
                    fromAminoMsg(object: _180.ErrorReceiptAminoMsg): _180.ErrorReceipt;
                    toAminoMsg(message: _180.ErrorReceipt): _180.ErrorReceiptAminoMsg;
                    fromProtoMsg(message: _180.ErrorReceiptProtoMsg): _180.ErrorReceipt;
                    toProto(message: _180.ErrorReceipt): Uint8Array;
                    toProtoMsg(message: _180.ErrorReceipt): _180.ErrorReceiptProtoMsg;
                };
                responseResultTypeFromJSON(object: any): _179.ResponseResultType;
                responseResultTypeToJSON(object: _179.ResponseResultType): string;
                ResponseResultType: typeof _179.ResponseResultType;
                ResponseResultTypeSDKType: typeof _179.ResponseResultType;
                ResponseResultTypeAmino: typeof _179.ResponseResultType;
                MsgChannelOpenInit: {
                    typeUrl: string;
                    encode(message: _179.MsgChannelOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgChannelOpenInit;
                    fromPartial(object: Partial<_179.MsgChannelOpenInit>): _179.MsgChannelOpenInit;
                    fromAmino(object: _179.MsgChannelOpenInitAmino): _179.MsgChannelOpenInit;
                    toAmino(message: _179.MsgChannelOpenInit): _179.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _179.MsgChannelOpenInitAminoMsg): _179.MsgChannelOpenInit;
                    toAminoMsg(message: _179.MsgChannelOpenInit): _179.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _179.MsgChannelOpenInitProtoMsg): _179.MsgChannelOpenInit;
                    toProto(message: _179.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _179.MsgChannelOpenInit): _179.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    typeUrl: string;
                    encode(message: _179.MsgChannelOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgChannelOpenInitResponse;
                    fromPartial(object: Partial<_179.MsgChannelOpenInitResponse>): _179.MsgChannelOpenInitResponse;
                    fromAmino(object: _179.MsgChannelOpenInitResponseAmino): _179.MsgChannelOpenInitResponse;
                    toAmino(message: _179.MsgChannelOpenInitResponse): _179.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _179.MsgChannelOpenInitResponseAminoMsg): _179.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _179.MsgChannelOpenInitResponse): _179.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _179.MsgChannelOpenInitResponseProtoMsg): _179.MsgChannelOpenInitResponse;
                    toProto(message: _179.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _179.MsgChannelOpenInitResponse): _179.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    typeUrl: string;
                    encode(message: _179.MsgChannelOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgChannelOpenTry;
                    fromPartial(object: Partial<_179.MsgChannelOpenTry>): _179.MsgChannelOpenTry;
                    fromAmino(object: _179.MsgChannelOpenTryAmino): _179.MsgChannelOpenTry;
                    toAmino(message: _179.MsgChannelOpenTry): _179.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _179.MsgChannelOpenTryAminoMsg): _179.MsgChannelOpenTry;
                    toAminoMsg(message: _179.MsgChannelOpenTry): _179.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _179.MsgChannelOpenTryProtoMsg): _179.MsgChannelOpenTry;
                    toProto(message: _179.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _179.MsgChannelOpenTry): _179.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    typeUrl: string;
                    encode(message: _179.MsgChannelOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgChannelOpenTryResponse;
                    fromPartial(object: Partial<_179.MsgChannelOpenTryResponse>): _179.MsgChannelOpenTryResponse;
                    fromAmino(object: _179.MsgChannelOpenTryResponseAmino): _179.MsgChannelOpenTryResponse;
                    toAmino(message: _179.MsgChannelOpenTryResponse): _179.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _179.MsgChannelOpenTryResponseAminoMsg): _179.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _179.MsgChannelOpenTryResponse): _179.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _179.MsgChannelOpenTryResponseProtoMsg): _179.MsgChannelOpenTryResponse;
                    toProto(message: _179.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _179.MsgChannelOpenTryResponse): _179.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    typeUrl: string;
                    encode(message: _179.MsgChannelOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgChannelOpenAck;
                    fromPartial(object: Partial<_179.MsgChannelOpenAck>): _179.MsgChannelOpenAck;
                    fromAmino(object: _179.MsgChannelOpenAckAmino): _179.MsgChannelOpenAck;
                    toAmino(message: _179.MsgChannelOpenAck): _179.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _179.MsgChannelOpenAckAminoMsg): _179.MsgChannelOpenAck;
                    toAminoMsg(message: _179.MsgChannelOpenAck): _179.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _179.MsgChannelOpenAckProtoMsg): _179.MsgChannelOpenAck;
                    toProto(message: _179.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _179.MsgChannelOpenAck): _179.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _179.MsgChannelOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgChannelOpenAckResponse;
                    fromPartial(_: Partial<_179.MsgChannelOpenAckResponse>): _179.MsgChannelOpenAckResponse;
                    fromAmino(_: _179.MsgChannelOpenAckResponseAmino): _179.MsgChannelOpenAckResponse;
                    toAmino(_: _179.MsgChannelOpenAckResponse): _179.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _179.MsgChannelOpenAckResponseAminoMsg): _179.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _179.MsgChannelOpenAckResponse): _179.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _179.MsgChannelOpenAckResponseProtoMsg): _179.MsgChannelOpenAckResponse;
                    toProto(message: _179.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _179.MsgChannelOpenAckResponse): _179.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    typeUrl: string;
                    encode(message: _179.MsgChannelOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgChannelOpenConfirm;
                    fromPartial(object: Partial<_179.MsgChannelOpenConfirm>): _179.MsgChannelOpenConfirm;
                    fromAmino(object: _179.MsgChannelOpenConfirmAmino): _179.MsgChannelOpenConfirm;
                    toAmino(message: _179.MsgChannelOpenConfirm): _179.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _179.MsgChannelOpenConfirmAminoMsg): _179.MsgChannelOpenConfirm;
                    toAminoMsg(message: _179.MsgChannelOpenConfirm): _179.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _179.MsgChannelOpenConfirmProtoMsg): _179.MsgChannelOpenConfirm;
                    toProto(message: _179.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _179.MsgChannelOpenConfirm): _179.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _179.MsgChannelOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgChannelOpenConfirmResponse;
                    fromPartial(_: Partial<_179.MsgChannelOpenConfirmResponse>): _179.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _179.MsgChannelOpenConfirmResponseAmino): _179.MsgChannelOpenConfirmResponse;
                    toAmino(_: _179.MsgChannelOpenConfirmResponse): _179.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _179.MsgChannelOpenConfirmResponseAminoMsg): _179.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _179.MsgChannelOpenConfirmResponse): _179.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _179.MsgChannelOpenConfirmResponseProtoMsg): _179.MsgChannelOpenConfirmResponse;
                    toProto(message: _179.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _179.MsgChannelOpenConfirmResponse): _179.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    typeUrl: string;
                    encode(message: _179.MsgChannelCloseInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgChannelCloseInit;
                    fromPartial(object: Partial<_179.MsgChannelCloseInit>): _179.MsgChannelCloseInit;
                    fromAmino(object: _179.MsgChannelCloseInitAmino): _179.MsgChannelCloseInit;
                    toAmino(message: _179.MsgChannelCloseInit): _179.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _179.MsgChannelCloseInitAminoMsg): _179.MsgChannelCloseInit;
                    toAminoMsg(message: _179.MsgChannelCloseInit): _179.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _179.MsgChannelCloseInitProtoMsg): _179.MsgChannelCloseInit;
                    toProto(message: _179.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _179.MsgChannelCloseInit): _179.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    typeUrl: string;
                    encode(_: _179.MsgChannelCloseInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgChannelCloseInitResponse;
                    fromPartial(_: Partial<_179.MsgChannelCloseInitResponse>): _179.MsgChannelCloseInitResponse;
                    fromAmino(_: _179.MsgChannelCloseInitResponseAmino): _179.MsgChannelCloseInitResponse;
                    toAmino(_: _179.MsgChannelCloseInitResponse): _179.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _179.MsgChannelCloseInitResponseAminoMsg): _179.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _179.MsgChannelCloseInitResponse): _179.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _179.MsgChannelCloseInitResponseProtoMsg): _179.MsgChannelCloseInitResponse;
                    toProto(message: _179.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _179.MsgChannelCloseInitResponse): _179.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    typeUrl: string;
                    encode(message: _179.MsgChannelCloseConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgChannelCloseConfirm;
                    fromPartial(object: Partial<_179.MsgChannelCloseConfirm>): _179.MsgChannelCloseConfirm;
                    fromAmino(object: _179.MsgChannelCloseConfirmAmino): _179.MsgChannelCloseConfirm;
                    toAmino(message: _179.MsgChannelCloseConfirm): _179.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _179.MsgChannelCloseConfirmAminoMsg): _179.MsgChannelCloseConfirm;
                    toAminoMsg(message: _179.MsgChannelCloseConfirm): _179.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _179.MsgChannelCloseConfirmProtoMsg): _179.MsgChannelCloseConfirm;
                    toProto(message: _179.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _179.MsgChannelCloseConfirm): _179.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    typeUrl: string;
                    encode(_: _179.MsgChannelCloseConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgChannelCloseConfirmResponse;
                    fromPartial(_: Partial<_179.MsgChannelCloseConfirmResponse>): _179.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _179.MsgChannelCloseConfirmResponseAmino): _179.MsgChannelCloseConfirmResponse;
                    toAmino(_: _179.MsgChannelCloseConfirmResponse): _179.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _179.MsgChannelCloseConfirmResponseAminoMsg): _179.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _179.MsgChannelCloseConfirmResponse): _179.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _179.MsgChannelCloseConfirmResponseProtoMsg): _179.MsgChannelCloseConfirmResponse;
                    toProto(message: _179.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _179.MsgChannelCloseConfirmResponse): _179.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    typeUrl: string;
                    encode(message: _179.MsgRecvPacket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgRecvPacket;
                    fromPartial(object: Partial<_179.MsgRecvPacket>): _179.MsgRecvPacket;
                    fromAmino(object: _179.MsgRecvPacketAmino): _179.MsgRecvPacket;
                    toAmino(message: _179.MsgRecvPacket): _179.MsgRecvPacketAmino;
                    fromAminoMsg(object: _179.MsgRecvPacketAminoMsg): _179.MsgRecvPacket;
                    toAminoMsg(message: _179.MsgRecvPacket): _179.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _179.MsgRecvPacketProtoMsg): _179.MsgRecvPacket;
                    toProto(message: _179.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _179.MsgRecvPacket): _179.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    typeUrl: string;
                    encode(message: _179.MsgRecvPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgRecvPacketResponse;
                    fromPartial(object: Partial<_179.MsgRecvPacketResponse>): _179.MsgRecvPacketResponse;
                    fromAmino(object: _179.MsgRecvPacketResponseAmino): _179.MsgRecvPacketResponse;
                    toAmino(message: _179.MsgRecvPacketResponse): _179.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _179.MsgRecvPacketResponseAminoMsg): _179.MsgRecvPacketResponse;
                    toAminoMsg(message: _179.MsgRecvPacketResponse): _179.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _179.MsgRecvPacketResponseProtoMsg): _179.MsgRecvPacketResponse;
                    toProto(message: _179.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _179.MsgRecvPacketResponse): _179.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    typeUrl: string;
                    encode(message: _179.MsgTimeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgTimeout;
                    fromPartial(object: Partial<_179.MsgTimeout>): _179.MsgTimeout;
                    fromAmino(object: _179.MsgTimeoutAmino): _179.MsgTimeout;
                    toAmino(message: _179.MsgTimeout): _179.MsgTimeoutAmino;
                    fromAminoMsg(object: _179.MsgTimeoutAminoMsg): _179.MsgTimeout;
                    toAminoMsg(message: _179.MsgTimeout): _179.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _179.MsgTimeoutProtoMsg): _179.MsgTimeout;
                    toProto(message: _179.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _179.MsgTimeout): _179.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    typeUrl: string;
                    encode(message: _179.MsgTimeoutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgTimeoutResponse;
                    fromPartial(object: Partial<_179.MsgTimeoutResponse>): _179.MsgTimeoutResponse;
                    fromAmino(object: _179.MsgTimeoutResponseAmino): _179.MsgTimeoutResponse;
                    toAmino(message: _179.MsgTimeoutResponse): _179.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _179.MsgTimeoutResponseAminoMsg): _179.MsgTimeoutResponse;
                    toAminoMsg(message: _179.MsgTimeoutResponse): _179.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _179.MsgTimeoutResponseProtoMsg): _179.MsgTimeoutResponse;
                    toProto(message: _179.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _179.MsgTimeoutResponse): _179.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    typeUrl: string;
                    encode(message: _179.MsgTimeoutOnClose, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgTimeoutOnClose;
                    fromPartial(object: Partial<_179.MsgTimeoutOnClose>): _179.MsgTimeoutOnClose;
                    fromAmino(object: _179.MsgTimeoutOnCloseAmino): _179.MsgTimeoutOnClose;
                    toAmino(message: _179.MsgTimeoutOnClose): _179.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _179.MsgTimeoutOnCloseAminoMsg): _179.MsgTimeoutOnClose;
                    toAminoMsg(message: _179.MsgTimeoutOnClose): _179.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _179.MsgTimeoutOnCloseProtoMsg): _179.MsgTimeoutOnClose;
                    toProto(message: _179.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _179.MsgTimeoutOnClose): _179.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    typeUrl: string;
                    encode(message: _179.MsgTimeoutOnCloseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgTimeoutOnCloseResponse;
                    fromPartial(object: Partial<_179.MsgTimeoutOnCloseResponse>): _179.MsgTimeoutOnCloseResponse;
                    fromAmino(object: _179.MsgTimeoutOnCloseResponseAmino): _179.MsgTimeoutOnCloseResponse;
                    toAmino(message: _179.MsgTimeoutOnCloseResponse): _179.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _179.MsgTimeoutOnCloseResponseAminoMsg): _179.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _179.MsgTimeoutOnCloseResponse): _179.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _179.MsgTimeoutOnCloseResponseProtoMsg): _179.MsgTimeoutOnCloseResponse;
                    toProto(message: _179.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _179.MsgTimeoutOnCloseResponse): _179.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    typeUrl: string;
                    encode(message: _179.MsgAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgAcknowledgement;
                    fromPartial(object: Partial<_179.MsgAcknowledgement>): _179.MsgAcknowledgement;
                    fromAmino(object: _179.MsgAcknowledgementAmino): _179.MsgAcknowledgement;
                    toAmino(message: _179.MsgAcknowledgement): _179.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _179.MsgAcknowledgementAminoMsg): _179.MsgAcknowledgement;
                    toAminoMsg(message: _179.MsgAcknowledgement): _179.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _179.MsgAcknowledgementProtoMsg): _179.MsgAcknowledgement;
                    toProto(message: _179.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _179.MsgAcknowledgement): _179.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _179.MsgAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgAcknowledgementResponse;
                    fromPartial(object: Partial<_179.MsgAcknowledgementResponse>): _179.MsgAcknowledgementResponse;
                    fromAmino(object: _179.MsgAcknowledgementResponseAmino): _179.MsgAcknowledgementResponse;
                    toAmino(message: _179.MsgAcknowledgementResponse): _179.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _179.MsgAcknowledgementResponseAminoMsg): _179.MsgAcknowledgementResponse;
                    toAminoMsg(message: _179.MsgAcknowledgementResponse): _179.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _179.MsgAcknowledgementResponseProtoMsg): _179.MsgAcknowledgementResponse;
                    toProto(message: _179.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _179.MsgAcknowledgementResponse): _179.MsgAcknowledgementResponseProtoMsg;
                };
                MsgChannelUpgradeInit: {
                    typeUrl: string;
                    encode(message: _179.MsgChannelUpgradeInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgChannelUpgradeInit;
                    fromPartial(object: Partial<_179.MsgChannelUpgradeInit>): _179.MsgChannelUpgradeInit;
                    fromAmino(object: _179.MsgChannelUpgradeInitAmino): _179.MsgChannelUpgradeInit;
                    toAmino(message: _179.MsgChannelUpgradeInit): _179.MsgChannelUpgradeInitAmino;
                    fromAminoMsg(object: _179.MsgChannelUpgradeInitAminoMsg): _179.MsgChannelUpgradeInit;
                    toAminoMsg(message: _179.MsgChannelUpgradeInit): _179.MsgChannelUpgradeInitAminoMsg;
                    fromProtoMsg(message: _179.MsgChannelUpgradeInitProtoMsg): _179.MsgChannelUpgradeInit;
                    toProto(message: _179.MsgChannelUpgradeInit): Uint8Array;
                    toProtoMsg(message: _179.MsgChannelUpgradeInit): _179.MsgChannelUpgradeInitProtoMsg;
                };
                MsgChannelUpgradeInitResponse: {
                    typeUrl: string;
                    encode(message: _179.MsgChannelUpgradeInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgChannelUpgradeInitResponse;
                    fromPartial(object: Partial<_179.MsgChannelUpgradeInitResponse>): _179.MsgChannelUpgradeInitResponse;
                    fromAmino(object: _179.MsgChannelUpgradeInitResponseAmino): _179.MsgChannelUpgradeInitResponse;
                    toAmino(message: _179.MsgChannelUpgradeInitResponse): _179.MsgChannelUpgradeInitResponseAmino;
                    fromAminoMsg(object: _179.MsgChannelUpgradeInitResponseAminoMsg): _179.MsgChannelUpgradeInitResponse;
                    toAminoMsg(message: _179.MsgChannelUpgradeInitResponse): _179.MsgChannelUpgradeInitResponseAminoMsg;
                    fromProtoMsg(message: _179.MsgChannelUpgradeInitResponseProtoMsg): _179.MsgChannelUpgradeInitResponse;
                    toProto(message: _179.MsgChannelUpgradeInitResponse): Uint8Array;
                    toProtoMsg(message: _179.MsgChannelUpgradeInitResponse): _179.MsgChannelUpgradeInitResponseProtoMsg;
                };
                MsgChannelUpgradeTry: {
                    typeUrl: string;
                    encode(message: _179.MsgChannelUpgradeTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgChannelUpgradeTry;
                    fromPartial(object: Partial<_179.MsgChannelUpgradeTry>): _179.MsgChannelUpgradeTry;
                    fromAmino(object: _179.MsgChannelUpgradeTryAmino): _179.MsgChannelUpgradeTry;
                    toAmino(message: _179.MsgChannelUpgradeTry): _179.MsgChannelUpgradeTryAmino;
                    fromAminoMsg(object: _179.MsgChannelUpgradeTryAminoMsg): _179.MsgChannelUpgradeTry;
                    toAminoMsg(message: _179.MsgChannelUpgradeTry): _179.MsgChannelUpgradeTryAminoMsg;
                    fromProtoMsg(message: _179.MsgChannelUpgradeTryProtoMsg): _179.MsgChannelUpgradeTry;
                    toProto(message: _179.MsgChannelUpgradeTry): Uint8Array;
                    toProtoMsg(message: _179.MsgChannelUpgradeTry): _179.MsgChannelUpgradeTryProtoMsg;
                };
                MsgChannelUpgradeTryResponse: {
                    typeUrl: string;
                    encode(message: _179.MsgChannelUpgradeTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgChannelUpgradeTryResponse;
                    fromPartial(object: Partial<_179.MsgChannelUpgradeTryResponse>): _179.MsgChannelUpgradeTryResponse;
                    fromAmino(object: _179.MsgChannelUpgradeTryResponseAmino): _179.MsgChannelUpgradeTryResponse;
                    toAmino(message: _179.MsgChannelUpgradeTryResponse): _179.MsgChannelUpgradeTryResponseAmino;
                    fromAminoMsg(object: _179.MsgChannelUpgradeTryResponseAminoMsg): _179.MsgChannelUpgradeTryResponse;
                    toAminoMsg(message: _179.MsgChannelUpgradeTryResponse): _179.MsgChannelUpgradeTryResponseAminoMsg;
                    fromProtoMsg(message: _179.MsgChannelUpgradeTryResponseProtoMsg): _179.MsgChannelUpgradeTryResponse;
                    toProto(message: _179.MsgChannelUpgradeTryResponse): Uint8Array;
                    toProtoMsg(message: _179.MsgChannelUpgradeTryResponse): _179.MsgChannelUpgradeTryResponseProtoMsg;
                };
                MsgChannelUpgradeAck: {
                    typeUrl: string;
                    encode(message: _179.MsgChannelUpgradeAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgChannelUpgradeAck;
                    fromPartial(object: Partial<_179.MsgChannelUpgradeAck>): _179.MsgChannelUpgradeAck;
                    fromAmino(object: _179.MsgChannelUpgradeAckAmino): _179.MsgChannelUpgradeAck;
                    toAmino(message: _179.MsgChannelUpgradeAck): _179.MsgChannelUpgradeAckAmino;
                    fromAminoMsg(object: _179.MsgChannelUpgradeAckAminoMsg): _179.MsgChannelUpgradeAck;
                    toAminoMsg(message: _179.MsgChannelUpgradeAck): _179.MsgChannelUpgradeAckAminoMsg;
                    fromProtoMsg(message: _179.MsgChannelUpgradeAckProtoMsg): _179.MsgChannelUpgradeAck;
                    toProto(message: _179.MsgChannelUpgradeAck): Uint8Array;
                    toProtoMsg(message: _179.MsgChannelUpgradeAck): _179.MsgChannelUpgradeAckProtoMsg;
                };
                MsgChannelUpgradeAckResponse: {
                    typeUrl: string;
                    encode(message: _179.MsgChannelUpgradeAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgChannelUpgradeAckResponse;
                    fromPartial(object: Partial<_179.MsgChannelUpgradeAckResponse>): _179.MsgChannelUpgradeAckResponse;
                    fromAmino(object: _179.MsgChannelUpgradeAckResponseAmino): _179.MsgChannelUpgradeAckResponse;
                    toAmino(message: _179.MsgChannelUpgradeAckResponse): _179.MsgChannelUpgradeAckResponseAmino;
                    fromAminoMsg(object: _179.MsgChannelUpgradeAckResponseAminoMsg): _179.MsgChannelUpgradeAckResponse;
                    toAminoMsg(message: _179.MsgChannelUpgradeAckResponse): _179.MsgChannelUpgradeAckResponseAminoMsg;
                    fromProtoMsg(message: _179.MsgChannelUpgradeAckResponseProtoMsg): _179.MsgChannelUpgradeAckResponse;
                    toProto(message: _179.MsgChannelUpgradeAckResponse): Uint8Array;
                    toProtoMsg(message: _179.MsgChannelUpgradeAckResponse): _179.MsgChannelUpgradeAckResponseProtoMsg;
                };
                MsgChannelUpgradeConfirm: {
                    typeUrl: string;
                    encode(message: _179.MsgChannelUpgradeConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgChannelUpgradeConfirm;
                    fromPartial(object: Partial<_179.MsgChannelUpgradeConfirm>): _179.MsgChannelUpgradeConfirm;
                    fromAmino(object: _179.MsgChannelUpgradeConfirmAmino): _179.MsgChannelUpgradeConfirm;
                    toAmino(message: _179.MsgChannelUpgradeConfirm): _179.MsgChannelUpgradeConfirmAmino;
                    fromAminoMsg(object: _179.MsgChannelUpgradeConfirmAminoMsg): _179.MsgChannelUpgradeConfirm;
                    toAminoMsg(message: _179.MsgChannelUpgradeConfirm): _179.MsgChannelUpgradeConfirmAminoMsg;
                    fromProtoMsg(message: _179.MsgChannelUpgradeConfirmProtoMsg): _179.MsgChannelUpgradeConfirm;
                    toProto(message: _179.MsgChannelUpgradeConfirm): Uint8Array;
                    toProtoMsg(message: _179.MsgChannelUpgradeConfirm): _179.MsgChannelUpgradeConfirmProtoMsg;
                };
                MsgChannelUpgradeConfirmResponse: {
                    typeUrl: string;
                    encode(message: _179.MsgChannelUpgradeConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgChannelUpgradeConfirmResponse;
                    fromPartial(object: Partial<_179.MsgChannelUpgradeConfirmResponse>): _179.MsgChannelUpgradeConfirmResponse;
                    fromAmino(object: _179.MsgChannelUpgradeConfirmResponseAmino): _179.MsgChannelUpgradeConfirmResponse;
                    toAmino(message: _179.MsgChannelUpgradeConfirmResponse): _179.MsgChannelUpgradeConfirmResponseAmino;
                    fromAminoMsg(object: _179.MsgChannelUpgradeConfirmResponseAminoMsg): _179.MsgChannelUpgradeConfirmResponse;
                    toAminoMsg(message: _179.MsgChannelUpgradeConfirmResponse): _179.MsgChannelUpgradeConfirmResponseAminoMsg;
                    fromProtoMsg(message: _179.MsgChannelUpgradeConfirmResponseProtoMsg): _179.MsgChannelUpgradeConfirmResponse;
                    toProto(message: _179.MsgChannelUpgradeConfirmResponse): Uint8Array;
                    toProtoMsg(message: _179.MsgChannelUpgradeConfirmResponse): _179.MsgChannelUpgradeConfirmResponseProtoMsg;
                };
                MsgChannelUpgradeOpen: {
                    typeUrl: string;
                    encode(message: _179.MsgChannelUpgradeOpen, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgChannelUpgradeOpen;
                    fromPartial(object: Partial<_179.MsgChannelUpgradeOpen>): _179.MsgChannelUpgradeOpen;
                    fromAmino(object: _179.MsgChannelUpgradeOpenAmino): _179.MsgChannelUpgradeOpen;
                    toAmino(message: _179.MsgChannelUpgradeOpen): _179.MsgChannelUpgradeOpenAmino;
                    fromAminoMsg(object: _179.MsgChannelUpgradeOpenAminoMsg): _179.MsgChannelUpgradeOpen;
                    toAminoMsg(message: _179.MsgChannelUpgradeOpen): _179.MsgChannelUpgradeOpenAminoMsg;
                    fromProtoMsg(message: _179.MsgChannelUpgradeOpenProtoMsg): _179.MsgChannelUpgradeOpen;
                    toProto(message: _179.MsgChannelUpgradeOpen): Uint8Array;
                    toProtoMsg(message: _179.MsgChannelUpgradeOpen): _179.MsgChannelUpgradeOpenProtoMsg;
                };
                MsgChannelUpgradeOpenResponse: {
                    typeUrl: string;
                    encode(_: _179.MsgChannelUpgradeOpenResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgChannelUpgradeOpenResponse;
                    fromPartial(_: Partial<_179.MsgChannelUpgradeOpenResponse>): _179.MsgChannelUpgradeOpenResponse;
                    fromAmino(_: _179.MsgChannelUpgradeOpenResponseAmino): _179.MsgChannelUpgradeOpenResponse;
                    toAmino(_: _179.MsgChannelUpgradeOpenResponse): _179.MsgChannelUpgradeOpenResponseAmino;
                    fromAminoMsg(object: _179.MsgChannelUpgradeOpenResponseAminoMsg): _179.MsgChannelUpgradeOpenResponse;
                    toAminoMsg(message: _179.MsgChannelUpgradeOpenResponse): _179.MsgChannelUpgradeOpenResponseAminoMsg;
                    fromProtoMsg(message: _179.MsgChannelUpgradeOpenResponseProtoMsg): _179.MsgChannelUpgradeOpenResponse;
                    toProto(message: _179.MsgChannelUpgradeOpenResponse): Uint8Array;
                    toProtoMsg(message: _179.MsgChannelUpgradeOpenResponse): _179.MsgChannelUpgradeOpenResponseProtoMsg;
                };
                MsgChannelUpgradeTimeout: {
                    typeUrl: string;
                    encode(message: _179.MsgChannelUpgradeTimeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgChannelUpgradeTimeout;
                    fromPartial(object: Partial<_179.MsgChannelUpgradeTimeout>): _179.MsgChannelUpgradeTimeout;
                    fromAmino(object: _179.MsgChannelUpgradeTimeoutAmino): _179.MsgChannelUpgradeTimeout;
                    toAmino(message: _179.MsgChannelUpgradeTimeout): _179.MsgChannelUpgradeTimeoutAmino;
                    fromAminoMsg(object: _179.MsgChannelUpgradeTimeoutAminoMsg): _179.MsgChannelUpgradeTimeout;
                    toAminoMsg(message: _179.MsgChannelUpgradeTimeout): _179.MsgChannelUpgradeTimeoutAminoMsg;
                    fromProtoMsg(message: _179.MsgChannelUpgradeTimeoutProtoMsg): _179.MsgChannelUpgradeTimeout;
                    toProto(message: _179.MsgChannelUpgradeTimeout): Uint8Array;
                    toProtoMsg(message: _179.MsgChannelUpgradeTimeout): _179.MsgChannelUpgradeTimeoutProtoMsg;
                };
                MsgChannelUpgradeTimeoutResponse: {
                    typeUrl: string;
                    encode(_: _179.MsgChannelUpgradeTimeoutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgChannelUpgradeTimeoutResponse;
                    fromPartial(_: Partial<_179.MsgChannelUpgradeTimeoutResponse>): _179.MsgChannelUpgradeTimeoutResponse;
                    fromAmino(_: _179.MsgChannelUpgradeTimeoutResponseAmino): _179.MsgChannelUpgradeTimeoutResponse;
                    toAmino(_: _179.MsgChannelUpgradeTimeoutResponse): _179.MsgChannelUpgradeTimeoutResponseAmino;
                    fromAminoMsg(object: _179.MsgChannelUpgradeTimeoutResponseAminoMsg): _179.MsgChannelUpgradeTimeoutResponse;
                    toAminoMsg(message: _179.MsgChannelUpgradeTimeoutResponse): _179.MsgChannelUpgradeTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _179.MsgChannelUpgradeTimeoutResponseProtoMsg): _179.MsgChannelUpgradeTimeoutResponse;
                    toProto(message: _179.MsgChannelUpgradeTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _179.MsgChannelUpgradeTimeoutResponse): _179.MsgChannelUpgradeTimeoutResponseProtoMsg;
                };
                MsgChannelUpgradeCancel: {
                    typeUrl: string;
                    encode(message: _179.MsgChannelUpgradeCancel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgChannelUpgradeCancel;
                    fromPartial(object: Partial<_179.MsgChannelUpgradeCancel>): _179.MsgChannelUpgradeCancel;
                    fromAmino(object: _179.MsgChannelUpgradeCancelAmino): _179.MsgChannelUpgradeCancel;
                    toAmino(message: _179.MsgChannelUpgradeCancel): _179.MsgChannelUpgradeCancelAmino;
                    fromAminoMsg(object: _179.MsgChannelUpgradeCancelAminoMsg): _179.MsgChannelUpgradeCancel;
                    toAminoMsg(message: _179.MsgChannelUpgradeCancel): _179.MsgChannelUpgradeCancelAminoMsg;
                    fromProtoMsg(message: _179.MsgChannelUpgradeCancelProtoMsg): _179.MsgChannelUpgradeCancel;
                    toProto(message: _179.MsgChannelUpgradeCancel): Uint8Array;
                    toProtoMsg(message: _179.MsgChannelUpgradeCancel): _179.MsgChannelUpgradeCancelProtoMsg;
                };
                MsgChannelUpgradeCancelResponse: {
                    typeUrl: string;
                    encode(_: _179.MsgChannelUpgradeCancelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgChannelUpgradeCancelResponse;
                    fromPartial(_: Partial<_179.MsgChannelUpgradeCancelResponse>): _179.MsgChannelUpgradeCancelResponse;
                    fromAmino(_: _179.MsgChannelUpgradeCancelResponseAmino): _179.MsgChannelUpgradeCancelResponse;
                    toAmino(_: _179.MsgChannelUpgradeCancelResponse): _179.MsgChannelUpgradeCancelResponseAmino;
                    fromAminoMsg(object: _179.MsgChannelUpgradeCancelResponseAminoMsg): _179.MsgChannelUpgradeCancelResponse;
                    toAminoMsg(message: _179.MsgChannelUpgradeCancelResponse): _179.MsgChannelUpgradeCancelResponseAminoMsg;
                    fromProtoMsg(message: _179.MsgChannelUpgradeCancelResponseProtoMsg): _179.MsgChannelUpgradeCancelResponse;
                    toProto(message: _179.MsgChannelUpgradeCancelResponse): Uint8Array;
                    toProtoMsg(message: _179.MsgChannelUpgradeCancelResponse): _179.MsgChannelUpgradeCancelResponseProtoMsg;
                };
                MsgUpdateParams: {
                    typeUrl: string;
                    encode(message: _179.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgUpdateParams;
                    fromPartial(object: Partial<_179.MsgUpdateParams>): _179.MsgUpdateParams;
                    fromAmino(object: _179.MsgUpdateParamsAmino): _179.MsgUpdateParams;
                    toAmino(message: _179.MsgUpdateParams): _179.MsgUpdateParamsAmino;
                    fromAminoMsg(object: _179.MsgUpdateParamsAminoMsg): _179.MsgUpdateParams;
                    toAminoMsg(message: _179.MsgUpdateParams): _179.MsgUpdateParamsAminoMsg;
                    fromProtoMsg(message: _179.MsgUpdateParamsProtoMsg): _179.MsgUpdateParams;
                    toProto(message: _179.MsgUpdateParams): Uint8Array;
                    toProtoMsg(message: _179.MsgUpdateParams): _179.MsgUpdateParamsProtoMsg;
                };
                MsgUpdateParamsResponse: {
                    typeUrl: string;
                    encode(_: _179.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgUpdateParamsResponse;
                    fromPartial(_: Partial<_179.MsgUpdateParamsResponse>): _179.MsgUpdateParamsResponse;
                    fromAmino(_: _179.MsgUpdateParamsResponseAmino): _179.MsgUpdateParamsResponse;
                    toAmino(_: _179.MsgUpdateParamsResponse): _179.MsgUpdateParamsResponseAmino;
                    fromAminoMsg(object: _179.MsgUpdateParamsResponseAminoMsg): _179.MsgUpdateParamsResponse;
                    toAminoMsg(message: _179.MsgUpdateParamsResponse): _179.MsgUpdateParamsResponseAminoMsg;
                    fromProtoMsg(message: _179.MsgUpdateParamsResponseProtoMsg): _179.MsgUpdateParamsResponse;
                    toProto(message: _179.MsgUpdateParamsResponse): Uint8Array;
                    toProtoMsg(message: _179.MsgUpdateParamsResponse): _179.MsgUpdateParamsResponseProtoMsg;
                };
                MsgPruneAcknowledgements: {
                    typeUrl: string;
                    encode(message: _179.MsgPruneAcknowledgements, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgPruneAcknowledgements;
                    fromPartial(object: Partial<_179.MsgPruneAcknowledgements>): _179.MsgPruneAcknowledgements;
                    fromAmino(object: _179.MsgPruneAcknowledgementsAmino): _179.MsgPruneAcknowledgements;
                    toAmino(message: _179.MsgPruneAcknowledgements): _179.MsgPruneAcknowledgementsAmino;
                    fromAminoMsg(object: _179.MsgPruneAcknowledgementsAminoMsg): _179.MsgPruneAcknowledgements;
                    toAminoMsg(message: _179.MsgPruneAcknowledgements): _179.MsgPruneAcknowledgementsAminoMsg;
                    fromProtoMsg(message: _179.MsgPruneAcknowledgementsProtoMsg): _179.MsgPruneAcknowledgements;
                    toProto(message: _179.MsgPruneAcknowledgements): Uint8Array;
                    toProtoMsg(message: _179.MsgPruneAcknowledgements): _179.MsgPruneAcknowledgementsProtoMsg;
                };
                MsgPruneAcknowledgementsResponse: {
                    typeUrl: string;
                    encode(message: _179.MsgPruneAcknowledgementsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgPruneAcknowledgementsResponse;
                    fromPartial(object: Partial<_179.MsgPruneAcknowledgementsResponse>): _179.MsgPruneAcknowledgementsResponse;
                    fromAmino(object: _179.MsgPruneAcknowledgementsResponseAmino): _179.MsgPruneAcknowledgementsResponse;
                    toAmino(message: _179.MsgPruneAcknowledgementsResponse): _179.MsgPruneAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _179.MsgPruneAcknowledgementsResponseAminoMsg): _179.MsgPruneAcknowledgementsResponse;
                    toAminoMsg(message: _179.MsgPruneAcknowledgementsResponse): _179.MsgPruneAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _179.MsgPruneAcknowledgementsResponseProtoMsg): _179.MsgPruneAcknowledgementsResponse;
                    toProto(message: _179.MsgPruneAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _179.MsgPruneAcknowledgementsResponse): _179.MsgPruneAcknowledgementsResponseProtoMsg;
                };
                QueryChannelRequest: {
                    typeUrl: string;
                    encode(message: _178.QueryChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryChannelRequest;
                    fromPartial(object: Partial<_178.QueryChannelRequest>): _178.QueryChannelRequest;
                    fromAmino(object: _178.QueryChannelRequestAmino): _178.QueryChannelRequest;
                    toAmino(message: _178.QueryChannelRequest): _178.QueryChannelRequestAmino;
                    fromAminoMsg(object: _178.QueryChannelRequestAminoMsg): _178.QueryChannelRequest;
                    toAminoMsg(message: _178.QueryChannelRequest): _178.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _178.QueryChannelRequestProtoMsg): _178.QueryChannelRequest;
                    toProto(message: _178.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _178.QueryChannelRequest): _178.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    typeUrl: string;
                    encode(message: _178.QueryChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryChannelResponse;
                    fromPartial(object: Partial<_178.QueryChannelResponse>): _178.QueryChannelResponse;
                    fromAmino(object: _178.QueryChannelResponseAmino): _178.QueryChannelResponse;
                    toAmino(message: _178.QueryChannelResponse): _178.QueryChannelResponseAmino;
                    fromAminoMsg(object: _178.QueryChannelResponseAminoMsg): _178.QueryChannelResponse;
                    toAminoMsg(message: _178.QueryChannelResponse): _178.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _178.QueryChannelResponseProtoMsg): _178.QueryChannelResponse;
                    toProto(message: _178.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _178.QueryChannelResponse): _178.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    typeUrl: string;
                    encode(message: _178.QueryChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryChannelsRequest;
                    fromPartial(object: Partial<_178.QueryChannelsRequest>): _178.QueryChannelsRequest;
                    fromAmino(object: _178.QueryChannelsRequestAmino): _178.QueryChannelsRequest;
                    toAmino(message: _178.QueryChannelsRequest): _178.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _178.QueryChannelsRequestAminoMsg): _178.QueryChannelsRequest;
                    toAminoMsg(message: _178.QueryChannelsRequest): _178.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _178.QueryChannelsRequestProtoMsg): _178.QueryChannelsRequest;
                    toProto(message: _178.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _178.QueryChannelsRequest): _178.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    typeUrl: string;
                    encode(message: _178.QueryChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryChannelsResponse;
                    fromPartial(object: Partial<_178.QueryChannelsResponse>): _178.QueryChannelsResponse;
                    fromAmino(object: _178.QueryChannelsResponseAmino): _178.QueryChannelsResponse;
                    toAmino(message: _178.QueryChannelsResponse): _178.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _178.QueryChannelsResponseAminoMsg): _178.QueryChannelsResponse;
                    toAminoMsg(message: _178.QueryChannelsResponse): _178.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _178.QueryChannelsResponseProtoMsg): _178.QueryChannelsResponse;
                    toProto(message: _178.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _178.QueryChannelsResponse): _178.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    typeUrl: string;
                    encode(message: _178.QueryConnectionChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryConnectionChannelsRequest;
                    fromPartial(object: Partial<_178.QueryConnectionChannelsRequest>): _178.QueryConnectionChannelsRequest;
                    fromAmino(object: _178.QueryConnectionChannelsRequestAmino): _178.QueryConnectionChannelsRequest;
                    toAmino(message: _178.QueryConnectionChannelsRequest): _178.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _178.QueryConnectionChannelsRequestAminoMsg): _178.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _178.QueryConnectionChannelsRequest): _178.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _178.QueryConnectionChannelsRequestProtoMsg): _178.QueryConnectionChannelsRequest;
                    toProto(message: _178.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _178.QueryConnectionChannelsRequest): _178.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    typeUrl: string;
                    encode(message: _178.QueryConnectionChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryConnectionChannelsResponse;
                    fromPartial(object: Partial<_178.QueryConnectionChannelsResponse>): _178.QueryConnectionChannelsResponse;
                    fromAmino(object: _178.QueryConnectionChannelsResponseAmino): _178.QueryConnectionChannelsResponse;
                    toAmino(message: _178.QueryConnectionChannelsResponse): _178.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _178.QueryConnectionChannelsResponseAminoMsg): _178.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _178.QueryConnectionChannelsResponse): _178.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _178.QueryConnectionChannelsResponseProtoMsg): _178.QueryConnectionChannelsResponse;
                    toProto(message: _178.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _178.QueryConnectionChannelsResponse): _178.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    typeUrl: string;
                    encode(message: _178.QueryChannelClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryChannelClientStateRequest;
                    fromPartial(object: Partial<_178.QueryChannelClientStateRequest>): _178.QueryChannelClientStateRequest;
                    fromAmino(object: _178.QueryChannelClientStateRequestAmino): _178.QueryChannelClientStateRequest;
                    toAmino(message: _178.QueryChannelClientStateRequest): _178.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _178.QueryChannelClientStateRequestAminoMsg): _178.QueryChannelClientStateRequest;
                    toAminoMsg(message: _178.QueryChannelClientStateRequest): _178.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _178.QueryChannelClientStateRequestProtoMsg): _178.QueryChannelClientStateRequest;
                    toProto(message: _178.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _178.QueryChannelClientStateRequest): _178.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    typeUrl: string;
                    encode(message: _178.QueryChannelClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryChannelClientStateResponse;
                    fromPartial(object: Partial<_178.QueryChannelClientStateResponse>): _178.QueryChannelClientStateResponse;
                    fromAmino(object: _178.QueryChannelClientStateResponseAmino): _178.QueryChannelClientStateResponse;
                    toAmino(message: _178.QueryChannelClientStateResponse): _178.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _178.QueryChannelClientStateResponseAminoMsg): _178.QueryChannelClientStateResponse;
                    toAminoMsg(message: _178.QueryChannelClientStateResponse): _178.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _178.QueryChannelClientStateResponseProtoMsg): _178.QueryChannelClientStateResponse;
                    toProto(message: _178.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _178.QueryChannelClientStateResponse): _178.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _178.QueryChannelConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryChannelConsensusStateRequest;
                    fromPartial(object: Partial<_178.QueryChannelConsensusStateRequest>): _178.QueryChannelConsensusStateRequest;
                    fromAmino(object: _178.QueryChannelConsensusStateRequestAmino): _178.QueryChannelConsensusStateRequest;
                    toAmino(message: _178.QueryChannelConsensusStateRequest): _178.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _178.QueryChannelConsensusStateRequestAminoMsg): _178.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _178.QueryChannelConsensusStateRequest): _178.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _178.QueryChannelConsensusStateRequestProtoMsg): _178.QueryChannelConsensusStateRequest;
                    toProto(message: _178.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _178.QueryChannelConsensusStateRequest): _178.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _178.QueryChannelConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryChannelConsensusStateResponse;
                    fromPartial(object: Partial<_178.QueryChannelConsensusStateResponse>): _178.QueryChannelConsensusStateResponse;
                    fromAmino(object: _178.QueryChannelConsensusStateResponseAmino): _178.QueryChannelConsensusStateResponse;
                    toAmino(message: _178.QueryChannelConsensusStateResponse): _178.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _178.QueryChannelConsensusStateResponseAminoMsg): _178.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _178.QueryChannelConsensusStateResponse): _178.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _178.QueryChannelConsensusStateResponseProtoMsg): _178.QueryChannelConsensusStateResponse;
                    toProto(message: _178.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _178.QueryChannelConsensusStateResponse): _178.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    typeUrl: string;
                    encode(message: _178.QueryPacketCommitmentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryPacketCommitmentRequest;
                    fromPartial(object: Partial<_178.QueryPacketCommitmentRequest>): _178.QueryPacketCommitmentRequest;
                    fromAmino(object: _178.QueryPacketCommitmentRequestAmino): _178.QueryPacketCommitmentRequest;
                    toAmino(message: _178.QueryPacketCommitmentRequest): _178.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _178.QueryPacketCommitmentRequestAminoMsg): _178.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _178.QueryPacketCommitmentRequest): _178.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _178.QueryPacketCommitmentRequestProtoMsg): _178.QueryPacketCommitmentRequest;
                    toProto(message: _178.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _178.QueryPacketCommitmentRequest): _178.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    typeUrl: string;
                    encode(message: _178.QueryPacketCommitmentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryPacketCommitmentResponse;
                    fromPartial(object: Partial<_178.QueryPacketCommitmentResponse>): _178.QueryPacketCommitmentResponse;
                    fromAmino(object: _178.QueryPacketCommitmentResponseAmino): _178.QueryPacketCommitmentResponse;
                    toAmino(message: _178.QueryPacketCommitmentResponse): _178.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _178.QueryPacketCommitmentResponseAminoMsg): _178.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _178.QueryPacketCommitmentResponse): _178.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _178.QueryPacketCommitmentResponseProtoMsg): _178.QueryPacketCommitmentResponse;
                    toProto(message: _178.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _178.QueryPacketCommitmentResponse): _178.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    typeUrl: string;
                    encode(message: _178.QueryPacketCommitmentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryPacketCommitmentsRequest;
                    fromPartial(object: Partial<_178.QueryPacketCommitmentsRequest>): _178.QueryPacketCommitmentsRequest;
                    fromAmino(object: _178.QueryPacketCommitmentsRequestAmino): _178.QueryPacketCommitmentsRequest;
                    toAmino(message: _178.QueryPacketCommitmentsRequest): _178.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _178.QueryPacketCommitmentsRequestAminoMsg): _178.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _178.QueryPacketCommitmentsRequest): _178.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _178.QueryPacketCommitmentsRequestProtoMsg): _178.QueryPacketCommitmentsRequest;
                    toProto(message: _178.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _178.QueryPacketCommitmentsRequest): _178.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    typeUrl: string;
                    encode(message: _178.QueryPacketCommitmentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryPacketCommitmentsResponse;
                    fromPartial(object: Partial<_178.QueryPacketCommitmentsResponse>): _178.QueryPacketCommitmentsResponse;
                    fromAmino(object: _178.QueryPacketCommitmentsResponseAmino): _178.QueryPacketCommitmentsResponse;
                    toAmino(message: _178.QueryPacketCommitmentsResponse): _178.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _178.QueryPacketCommitmentsResponseAminoMsg): _178.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _178.QueryPacketCommitmentsResponse): _178.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _178.QueryPacketCommitmentsResponseProtoMsg): _178.QueryPacketCommitmentsResponse;
                    toProto(message: _178.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _178.QueryPacketCommitmentsResponse): _178.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    typeUrl: string;
                    encode(message: _178.QueryPacketReceiptRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryPacketReceiptRequest;
                    fromPartial(object: Partial<_178.QueryPacketReceiptRequest>): _178.QueryPacketReceiptRequest;
                    fromAmino(object: _178.QueryPacketReceiptRequestAmino): _178.QueryPacketReceiptRequest;
                    toAmino(message: _178.QueryPacketReceiptRequest): _178.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _178.QueryPacketReceiptRequestAminoMsg): _178.QueryPacketReceiptRequest;
                    toAminoMsg(message: _178.QueryPacketReceiptRequest): _178.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _178.QueryPacketReceiptRequestProtoMsg): _178.QueryPacketReceiptRequest;
                    toProto(message: _178.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _178.QueryPacketReceiptRequest): _178.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    typeUrl: string;
                    encode(message: _178.QueryPacketReceiptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryPacketReceiptResponse;
                    fromPartial(object: Partial<_178.QueryPacketReceiptResponse>): _178.QueryPacketReceiptResponse;
                    fromAmino(object: _178.QueryPacketReceiptResponseAmino): _178.QueryPacketReceiptResponse;
                    toAmino(message: _178.QueryPacketReceiptResponse): _178.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _178.QueryPacketReceiptResponseAminoMsg): _178.QueryPacketReceiptResponse;
                    toAminoMsg(message: _178.QueryPacketReceiptResponse): _178.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _178.QueryPacketReceiptResponseProtoMsg): _178.QueryPacketReceiptResponse;
                    toProto(message: _178.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _178.QueryPacketReceiptResponse): _178.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    typeUrl: string;
                    encode(message: _178.QueryPacketAcknowledgementRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryPacketAcknowledgementRequest;
                    fromPartial(object: Partial<_178.QueryPacketAcknowledgementRequest>): _178.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _178.QueryPacketAcknowledgementRequestAmino): _178.QueryPacketAcknowledgementRequest;
                    toAmino(message: _178.QueryPacketAcknowledgementRequest): _178.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _178.QueryPacketAcknowledgementRequestAminoMsg): _178.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _178.QueryPacketAcknowledgementRequest): _178.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _178.QueryPacketAcknowledgementRequestProtoMsg): _178.QueryPacketAcknowledgementRequest;
                    toProto(message: _178.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _178.QueryPacketAcknowledgementRequest): _178.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _178.QueryPacketAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryPacketAcknowledgementResponse;
                    fromPartial(object: Partial<_178.QueryPacketAcknowledgementResponse>): _178.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _178.QueryPacketAcknowledgementResponseAmino): _178.QueryPacketAcknowledgementResponse;
                    toAmino(message: _178.QueryPacketAcknowledgementResponse): _178.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _178.QueryPacketAcknowledgementResponseAminoMsg): _178.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _178.QueryPacketAcknowledgementResponse): _178.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _178.QueryPacketAcknowledgementResponseProtoMsg): _178.QueryPacketAcknowledgementResponse;
                    toProto(message: _178.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _178.QueryPacketAcknowledgementResponse): _178.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    typeUrl: string;
                    encode(message: _178.QueryPacketAcknowledgementsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: Partial<_178.QueryPacketAcknowledgementsRequest>): _178.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _178.QueryPacketAcknowledgementsRequestAmino): _178.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _178.QueryPacketAcknowledgementsRequest): _178.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _178.QueryPacketAcknowledgementsRequestAminoMsg): _178.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _178.QueryPacketAcknowledgementsRequest): _178.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _178.QueryPacketAcknowledgementsRequestProtoMsg): _178.QueryPacketAcknowledgementsRequest;
                    toProto(message: _178.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _178.QueryPacketAcknowledgementsRequest): _178.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    typeUrl: string;
                    encode(message: _178.QueryPacketAcknowledgementsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: Partial<_178.QueryPacketAcknowledgementsResponse>): _178.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _178.QueryPacketAcknowledgementsResponseAmino): _178.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _178.QueryPacketAcknowledgementsResponse): _178.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _178.QueryPacketAcknowledgementsResponseAminoMsg): _178.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _178.QueryPacketAcknowledgementsResponse): _178.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _178.QueryPacketAcknowledgementsResponseProtoMsg): _178.QueryPacketAcknowledgementsResponse;
                    toProto(message: _178.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _178.QueryPacketAcknowledgementsResponse): _178.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _178.QueryUnreceivedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryUnreceivedPacketsRequest;
                    fromPartial(object: Partial<_178.QueryUnreceivedPacketsRequest>): _178.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _178.QueryUnreceivedPacketsRequestAmino): _178.QueryUnreceivedPacketsRequest;
                    toAmino(message: _178.QueryUnreceivedPacketsRequest): _178.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _178.QueryUnreceivedPacketsRequestAminoMsg): _178.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _178.QueryUnreceivedPacketsRequest): _178.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _178.QueryUnreceivedPacketsRequestProtoMsg): _178.QueryUnreceivedPacketsRequest;
                    toProto(message: _178.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _178.QueryUnreceivedPacketsRequest): _178.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _178.QueryUnreceivedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryUnreceivedPacketsResponse;
                    fromPartial(object: Partial<_178.QueryUnreceivedPacketsResponse>): _178.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _178.QueryUnreceivedPacketsResponseAmino): _178.QueryUnreceivedPacketsResponse;
                    toAmino(message: _178.QueryUnreceivedPacketsResponse): _178.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _178.QueryUnreceivedPacketsResponseAminoMsg): _178.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _178.QueryUnreceivedPacketsResponse): _178.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _178.QueryUnreceivedPacketsResponseProtoMsg): _178.QueryUnreceivedPacketsResponse;
                    toProto(message: _178.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _178.QueryUnreceivedPacketsResponse): _178.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    typeUrl: string;
                    encode(message: _178.QueryUnreceivedAcksRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryUnreceivedAcksRequest;
                    fromPartial(object: Partial<_178.QueryUnreceivedAcksRequest>): _178.QueryUnreceivedAcksRequest;
                    fromAmino(object: _178.QueryUnreceivedAcksRequestAmino): _178.QueryUnreceivedAcksRequest;
                    toAmino(message: _178.QueryUnreceivedAcksRequest): _178.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _178.QueryUnreceivedAcksRequestAminoMsg): _178.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _178.QueryUnreceivedAcksRequest): _178.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _178.QueryUnreceivedAcksRequestProtoMsg): _178.QueryUnreceivedAcksRequest;
                    toProto(message: _178.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _178.QueryUnreceivedAcksRequest): _178.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    typeUrl: string;
                    encode(message: _178.QueryUnreceivedAcksResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryUnreceivedAcksResponse;
                    fromPartial(object: Partial<_178.QueryUnreceivedAcksResponse>): _178.QueryUnreceivedAcksResponse;
                    fromAmino(object: _178.QueryUnreceivedAcksResponseAmino): _178.QueryUnreceivedAcksResponse;
                    toAmino(message: _178.QueryUnreceivedAcksResponse): _178.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _178.QueryUnreceivedAcksResponseAminoMsg): _178.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _178.QueryUnreceivedAcksResponse): _178.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _178.QueryUnreceivedAcksResponseProtoMsg): _178.QueryUnreceivedAcksResponse;
                    toProto(message: _178.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _178.QueryUnreceivedAcksResponse): _178.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    typeUrl: string;
                    encode(message: _178.QueryNextSequenceReceiveRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryNextSequenceReceiveRequest;
                    fromPartial(object: Partial<_178.QueryNextSequenceReceiveRequest>): _178.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _178.QueryNextSequenceReceiveRequestAmino): _178.QueryNextSequenceReceiveRequest;
                    toAmino(message: _178.QueryNextSequenceReceiveRequest): _178.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _178.QueryNextSequenceReceiveRequestAminoMsg): _178.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _178.QueryNextSequenceReceiveRequest): _178.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _178.QueryNextSequenceReceiveRequestProtoMsg): _178.QueryNextSequenceReceiveRequest;
                    toProto(message: _178.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _178.QueryNextSequenceReceiveRequest): _178.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    typeUrl: string;
                    encode(message: _178.QueryNextSequenceReceiveResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryNextSequenceReceiveResponse;
                    fromPartial(object: Partial<_178.QueryNextSequenceReceiveResponse>): _178.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _178.QueryNextSequenceReceiveResponseAmino): _178.QueryNextSequenceReceiveResponse;
                    toAmino(message: _178.QueryNextSequenceReceiveResponse): _178.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _178.QueryNextSequenceReceiveResponseAminoMsg): _178.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _178.QueryNextSequenceReceiveResponse): _178.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _178.QueryNextSequenceReceiveResponseProtoMsg): _178.QueryNextSequenceReceiveResponse;
                    toProto(message: _178.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _178.QueryNextSequenceReceiveResponse): _178.QueryNextSequenceReceiveResponseProtoMsg;
                };
                QueryNextSequenceSendRequest: {
                    typeUrl: string;
                    encode(message: _178.QueryNextSequenceSendRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryNextSequenceSendRequest;
                    fromPartial(object: Partial<_178.QueryNextSequenceSendRequest>): _178.QueryNextSequenceSendRequest;
                    fromAmino(object: _178.QueryNextSequenceSendRequestAmino): _178.QueryNextSequenceSendRequest;
                    toAmino(message: _178.QueryNextSequenceSendRequest): _178.QueryNextSequenceSendRequestAmino;
                    fromAminoMsg(object: _178.QueryNextSequenceSendRequestAminoMsg): _178.QueryNextSequenceSendRequest;
                    toAminoMsg(message: _178.QueryNextSequenceSendRequest): _178.QueryNextSequenceSendRequestAminoMsg;
                    fromProtoMsg(message: _178.QueryNextSequenceSendRequestProtoMsg): _178.QueryNextSequenceSendRequest;
                    toProto(message: _178.QueryNextSequenceSendRequest): Uint8Array;
                    toProtoMsg(message: _178.QueryNextSequenceSendRequest): _178.QueryNextSequenceSendRequestProtoMsg;
                };
                QueryNextSequenceSendResponse: {
                    typeUrl: string;
                    encode(message: _178.QueryNextSequenceSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryNextSequenceSendResponse;
                    fromPartial(object: Partial<_178.QueryNextSequenceSendResponse>): _178.QueryNextSequenceSendResponse;
                    fromAmino(object: _178.QueryNextSequenceSendResponseAmino): _178.QueryNextSequenceSendResponse;
                    toAmino(message: _178.QueryNextSequenceSendResponse): _178.QueryNextSequenceSendResponseAmino;
                    fromAminoMsg(object: _178.QueryNextSequenceSendResponseAminoMsg): _178.QueryNextSequenceSendResponse;
                    toAminoMsg(message: _178.QueryNextSequenceSendResponse): _178.QueryNextSequenceSendResponseAminoMsg;
                    fromProtoMsg(message: _178.QueryNextSequenceSendResponseProtoMsg): _178.QueryNextSequenceSendResponse;
                    toProto(message: _178.QueryNextSequenceSendResponse): Uint8Array;
                    toProtoMsg(message: _178.QueryNextSequenceSendResponse): _178.QueryNextSequenceSendResponseProtoMsg;
                };
                QueryUpgradeErrorRequest: {
                    typeUrl: string;
                    encode(message: _178.QueryUpgradeErrorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryUpgradeErrorRequest;
                    fromPartial(object: Partial<_178.QueryUpgradeErrorRequest>): _178.QueryUpgradeErrorRequest;
                    fromAmino(object: _178.QueryUpgradeErrorRequestAmino): _178.QueryUpgradeErrorRequest;
                    toAmino(message: _178.QueryUpgradeErrorRequest): _178.QueryUpgradeErrorRequestAmino;
                    fromAminoMsg(object: _178.QueryUpgradeErrorRequestAminoMsg): _178.QueryUpgradeErrorRequest;
                    toAminoMsg(message: _178.QueryUpgradeErrorRequest): _178.QueryUpgradeErrorRequestAminoMsg;
                    fromProtoMsg(message: _178.QueryUpgradeErrorRequestProtoMsg): _178.QueryUpgradeErrorRequest;
                    toProto(message: _178.QueryUpgradeErrorRequest): Uint8Array;
                    toProtoMsg(message: _178.QueryUpgradeErrorRequest): _178.QueryUpgradeErrorRequestProtoMsg;
                };
                QueryUpgradeErrorResponse: {
                    typeUrl: string;
                    encode(message: _178.QueryUpgradeErrorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryUpgradeErrorResponse;
                    fromPartial(object: Partial<_178.QueryUpgradeErrorResponse>): _178.QueryUpgradeErrorResponse;
                    fromAmino(object: _178.QueryUpgradeErrorResponseAmino): _178.QueryUpgradeErrorResponse;
                    toAmino(message: _178.QueryUpgradeErrorResponse): _178.QueryUpgradeErrorResponseAmino;
                    fromAminoMsg(object: _178.QueryUpgradeErrorResponseAminoMsg): _178.QueryUpgradeErrorResponse;
                    toAminoMsg(message: _178.QueryUpgradeErrorResponse): _178.QueryUpgradeErrorResponseAminoMsg;
                    fromProtoMsg(message: _178.QueryUpgradeErrorResponseProtoMsg): _178.QueryUpgradeErrorResponse;
                    toProto(message: _178.QueryUpgradeErrorResponse): Uint8Array;
                    toProtoMsg(message: _178.QueryUpgradeErrorResponse): _178.QueryUpgradeErrorResponseProtoMsg;
                };
                QueryUpgradeRequest: {
                    typeUrl: string;
                    encode(message: _178.QueryUpgradeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryUpgradeRequest;
                    fromPartial(object: Partial<_178.QueryUpgradeRequest>): _178.QueryUpgradeRequest;
                    fromAmino(object: _178.QueryUpgradeRequestAmino): _178.QueryUpgradeRequest;
                    toAmino(message: _178.QueryUpgradeRequest): _178.QueryUpgradeRequestAmino;
                    fromAminoMsg(object: _178.QueryUpgradeRequestAminoMsg): _178.QueryUpgradeRequest;
                    toAminoMsg(message: _178.QueryUpgradeRequest): _178.QueryUpgradeRequestAminoMsg;
                    fromProtoMsg(message: _178.QueryUpgradeRequestProtoMsg): _178.QueryUpgradeRequest;
                    toProto(message: _178.QueryUpgradeRequest): Uint8Array;
                    toProtoMsg(message: _178.QueryUpgradeRequest): _178.QueryUpgradeRequestProtoMsg;
                };
                QueryUpgradeResponse: {
                    typeUrl: string;
                    encode(message: _178.QueryUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryUpgradeResponse;
                    fromPartial(object: Partial<_178.QueryUpgradeResponse>): _178.QueryUpgradeResponse;
                    fromAmino(object: _178.QueryUpgradeResponseAmino): _178.QueryUpgradeResponse;
                    toAmino(message: _178.QueryUpgradeResponse): _178.QueryUpgradeResponseAmino;
                    fromAminoMsg(object: _178.QueryUpgradeResponseAminoMsg): _178.QueryUpgradeResponse;
                    toAminoMsg(message: _178.QueryUpgradeResponse): _178.QueryUpgradeResponseAminoMsg;
                    fromProtoMsg(message: _178.QueryUpgradeResponseProtoMsg): _178.QueryUpgradeResponse;
                    toProto(message: _178.QueryUpgradeResponse): Uint8Array;
                    toProtoMsg(message: _178.QueryUpgradeResponse): _178.QueryUpgradeResponseProtoMsg;
                };
                QueryChannelParamsRequest: {
                    typeUrl: string;
                    encode(_: _178.QueryChannelParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryChannelParamsRequest;
                    fromPartial(_: Partial<_178.QueryChannelParamsRequest>): _178.QueryChannelParamsRequest;
                    fromAmino(_: _178.QueryChannelParamsRequestAmino): _178.QueryChannelParamsRequest;
                    toAmino(_: _178.QueryChannelParamsRequest): _178.QueryChannelParamsRequestAmino;
                    fromAminoMsg(object: _178.QueryChannelParamsRequestAminoMsg): _178.QueryChannelParamsRequest;
                    toAminoMsg(message: _178.QueryChannelParamsRequest): _178.QueryChannelParamsRequestAminoMsg;
                    fromProtoMsg(message: _178.QueryChannelParamsRequestProtoMsg): _178.QueryChannelParamsRequest;
                    toProto(message: _178.QueryChannelParamsRequest): Uint8Array;
                    toProtoMsg(message: _178.QueryChannelParamsRequest): _178.QueryChannelParamsRequestProtoMsg;
                };
                QueryChannelParamsResponse: {
                    typeUrl: string;
                    encode(message: _178.QueryChannelParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryChannelParamsResponse;
                    fromPartial(object: Partial<_178.QueryChannelParamsResponse>): _178.QueryChannelParamsResponse;
                    fromAmino(object: _178.QueryChannelParamsResponseAmino): _178.QueryChannelParamsResponse;
                    toAmino(message: _178.QueryChannelParamsResponse): _178.QueryChannelParamsResponseAmino;
                    fromAminoMsg(object: _178.QueryChannelParamsResponseAminoMsg): _178.QueryChannelParamsResponse;
                    toAminoMsg(message: _178.QueryChannelParamsResponse): _178.QueryChannelParamsResponseAminoMsg;
                    fromProtoMsg(message: _178.QueryChannelParamsResponseProtoMsg): _178.QueryChannelParamsResponse;
                    toProto(message: _178.QueryChannelParamsResponse): Uint8Array;
                    toProtoMsg(message: _178.QueryChannelParamsResponse): _178.QueryChannelParamsResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _177.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.GenesisState;
                    fromPartial(object: Partial<_177.GenesisState>): _177.GenesisState;
                    fromAmino(object: _177.GenesisStateAmino): _177.GenesisState;
                    toAmino(message: _177.GenesisState): _177.GenesisStateAmino;
                    fromAminoMsg(object: _177.GenesisStateAminoMsg): _177.GenesisState;
                    toAminoMsg(message: _177.GenesisState): _177.GenesisStateAminoMsg;
                    fromProtoMsg(message: _177.GenesisStateProtoMsg): _177.GenesisState;
                    toProto(message: _177.GenesisState): Uint8Array;
                    toProtoMsg(message: _177.GenesisState): _177.GenesisStateProtoMsg;
                };
                PacketSequence: {
                    typeUrl: string;
                    encode(message: _177.PacketSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.PacketSequence;
                    fromPartial(object: Partial<_177.PacketSequence>): _177.PacketSequence;
                    fromAmino(object: _177.PacketSequenceAmino): _177.PacketSequence;
                    toAmino(message: _177.PacketSequence): _177.PacketSequenceAmino;
                    fromAminoMsg(object: _177.PacketSequenceAminoMsg): _177.PacketSequence;
                    toAminoMsg(message: _177.PacketSequence): _177.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _177.PacketSequenceProtoMsg): _177.PacketSequence;
                    toProto(message: _177.PacketSequence): Uint8Array;
                    toProtoMsg(message: _177.PacketSequence): _177.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _176.State;
                stateToJSON(object: _176.State): string;
                orderFromJSON(object: any): _176.Order;
                orderToJSON(object: _176.Order): string;
                State: typeof _176.State;
                StateSDKType: typeof _176.State;
                StateAmino: typeof _176.State;
                Order: typeof _176.Order;
                OrderSDKType: typeof _176.Order;
                OrderAmino: typeof _176.Order;
                Channel: {
                    typeUrl: string;
                    encode(message: _176.Channel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.Channel;
                    fromPartial(object: Partial<_176.Channel>): _176.Channel;
                    fromAmino(object: _176.ChannelAmino): _176.Channel;
                    toAmino(message: _176.Channel): _176.ChannelAmino;
                    fromAminoMsg(object: _176.ChannelAminoMsg): _176.Channel;
                    toAminoMsg(message: _176.Channel): _176.ChannelAminoMsg;
                    fromProtoMsg(message: _176.ChannelProtoMsg): _176.Channel;
                    toProto(message: _176.Channel): Uint8Array;
                    toProtoMsg(message: _176.Channel): _176.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    encode(message: _176.IdentifiedChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.IdentifiedChannel;
                    fromPartial(object: Partial<_176.IdentifiedChannel>): _176.IdentifiedChannel;
                    fromAmino(object: _176.IdentifiedChannelAmino): _176.IdentifiedChannel;
                    toAmino(message: _176.IdentifiedChannel): _176.IdentifiedChannelAmino;
                    fromAminoMsg(object: _176.IdentifiedChannelAminoMsg): _176.IdentifiedChannel;
                    toAminoMsg(message: _176.IdentifiedChannel): _176.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _176.IdentifiedChannelProtoMsg): _176.IdentifiedChannel;
                    toProto(message: _176.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _176.IdentifiedChannel): _176.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _176.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.Counterparty;
                    fromPartial(object: Partial<_176.Counterparty>): _176.Counterparty;
                    fromAmino(object: _176.CounterpartyAmino): _176.Counterparty;
                    toAmino(message: _176.Counterparty): _176.CounterpartyAmino;
                    fromAminoMsg(object: _176.CounterpartyAminoMsg): _176.Counterparty;
                    toAminoMsg(message: _176.Counterparty): _176.CounterpartyAminoMsg;
                    fromProtoMsg(message: _176.CounterpartyProtoMsg): _176.Counterparty;
                    toProto(message: _176.Counterparty): Uint8Array;
                    toProtoMsg(message: _176.Counterparty): _176.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    encode(message: _176.Packet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.Packet;
                    fromPartial(object: Partial<_176.Packet>): _176.Packet;
                    fromAmino(object: _176.PacketAmino): _176.Packet;
                    toAmino(message: _176.Packet): _176.PacketAmino;
                    fromAminoMsg(object: _176.PacketAminoMsg): _176.Packet;
                    toAminoMsg(message: _176.Packet): _176.PacketAminoMsg;
                    fromProtoMsg(message: _176.PacketProtoMsg): _176.Packet;
                    toProto(message: _176.Packet): Uint8Array;
                    toProtoMsg(message: _176.Packet): _176.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    encode(message: _176.PacketState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.PacketState;
                    fromPartial(object: Partial<_176.PacketState>): _176.PacketState;
                    fromAmino(object: _176.PacketStateAmino): _176.PacketState;
                    toAmino(message: _176.PacketState): _176.PacketStateAmino;
                    fromAminoMsg(object: _176.PacketStateAminoMsg): _176.PacketState;
                    toAminoMsg(message: _176.PacketState): _176.PacketStateAminoMsg;
                    fromProtoMsg(message: _176.PacketStateProtoMsg): _176.PacketState;
                    toProto(message: _176.PacketState): Uint8Array;
                    toProtoMsg(message: _176.PacketState): _176.PacketStateProtoMsg;
                };
                PacketId: {
                    typeUrl: string;
                    encode(message: _176.PacketId, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.PacketId;
                    fromPartial(object: Partial<_176.PacketId>): _176.PacketId;
                    fromAmino(object: _176.PacketIdAmino): _176.PacketId;
                    toAmino(message: _176.PacketId): _176.PacketIdAmino;
                    fromAminoMsg(object: _176.PacketIdAminoMsg): _176.PacketId;
                    toAminoMsg(message: _176.PacketId): _176.PacketIdAminoMsg;
                    fromProtoMsg(message: _176.PacketIdProtoMsg): _176.PacketId;
                    toProto(message: _176.PacketId): Uint8Array;
                    toProtoMsg(message: _176.PacketId): _176.PacketIdProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    encode(message: _176.Acknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.Acknowledgement;
                    fromPartial(object: Partial<_176.Acknowledgement>): _176.Acknowledgement;
                    fromAmino(object: _176.AcknowledgementAmino): _176.Acknowledgement;
                    toAmino(message: _176.Acknowledgement): _176.AcknowledgementAmino;
                    fromAminoMsg(object: _176.AcknowledgementAminoMsg): _176.Acknowledgement;
                    toAminoMsg(message: _176.Acknowledgement): _176.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _176.AcknowledgementProtoMsg): _176.Acknowledgement;
                    toProto(message: _176.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _176.Acknowledgement): _176.AcknowledgementProtoMsg;
                };
                Timeout: {
                    typeUrl: string;
                    encode(message: _176.Timeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.Timeout;
                    fromPartial(object: Partial<_176.Timeout>): _176.Timeout;
                    fromAmino(object: _176.TimeoutAmino): _176.Timeout;
                    toAmino(message: _176.Timeout): _176.TimeoutAmino;
                    fromAminoMsg(object: _176.TimeoutAminoMsg): _176.Timeout;
                    toAminoMsg(message: _176.Timeout): _176.TimeoutAminoMsg;
                    fromProtoMsg(message: _176.TimeoutProtoMsg): _176.Timeout;
                    toProto(message: _176.Timeout): Uint8Array;
                    toProtoMsg(message: _176.Timeout): _176.TimeoutProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _176.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.Params;
                    fromPartial(object: Partial<_176.Params>): _176.Params;
                    fromAmino(object: _176.ParamsAmino): _176.Params;
                    toAmino(message: _176.Params): _176.ParamsAmino;
                    fromAminoMsg(object: _176.ParamsAminoMsg): _176.Params;
                    toAminoMsg(message: _176.Params): _176.ParamsAminoMsg;
                    fromProtoMsg(message: _176.ParamsProtoMsg): _176.Params;
                    toProto(message: _176.Params): Uint8Array;
                    toProtoMsg(message: _176.Params): _176.ParamsProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _394.MsgClientImpl;
                QueryClientImpl: typeof _386.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _183.QueryClientStateRequest): Promise<_183.QueryClientStateResponse>;
                    clientStates(request?: _183.QueryClientStatesRequest): Promise<_183.QueryClientStatesResponse>;
                    consensusState(request: _183.QueryConsensusStateRequest): Promise<_183.QueryConsensusStateResponse>;
                    consensusStates(request: _183.QueryConsensusStatesRequest): Promise<_183.QueryConsensusStatesResponse>;
                    consensusStateHeights(request: _183.QueryConsensusStateHeightsRequest): Promise<_183.QueryConsensusStateHeightsResponse>;
                    clientStatus(request: _183.QueryClientStatusRequest): Promise<_183.QueryClientStatusResponse>;
                    clientParams(request?: _183.QueryClientParamsRequest): Promise<_183.QueryClientParamsResponse>;
                    upgradedClientState(request?: _183.QueryUpgradedClientStateRequest): Promise<_183.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _183.QueryUpgradedConsensusStateRequest): Promise<_183.QueryUpgradedConsensusStateResponse>;
                    verifyMembership(request: _183.QueryVerifyMembershipRequest): Promise<_183.QueryVerifyMembershipResponse>;
                };
                registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _184.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _184.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _184.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _184.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recoverClient(value: _184.MsgRecoverClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        iBCSoftwareUpgrade(value: _184.MsgIBCSoftwareUpgrade): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClientParams(value: _184.MsgUpdateParams): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _184.MsgCreateClient): {
                            typeUrl: string;
                            value: _184.MsgCreateClient;
                        };
                        updateClient(value: _184.MsgUpdateClient): {
                            typeUrl: string;
                            value: _184.MsgUpdateClient;
                        };
                        upgradeClient(value: _184.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _184.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _184.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _184.MsgSubmitMisbehaviour;
                        };
                        recoverClient(value: _184.MsgRecoverClient): {
                            typeUrl: string;
                            value: _184.MsgRecoverClient;
                        };
                        iBCSoftwareUpgrade(value: _184.MsgIBCSoftwareUpgrade): {
                            typeUrl: string;
                            value: _184.MsgIBCSoftwareUpgrade;
                        };
                        updateClientParams(value: _184.MsgUpdateParams): {
                            typeUrl: string;
                            value: _184.MsgUpdateParams;
                        };
                    };
                    fromPartial: {
                        createClient(value: _184.MsgCreateClient): {
                            typeUrl: string;
                            value: _184.MsgCreateClient;
                        };
                        updateClient(value: _184.MsgUpdateClient): {
                            typeUrl: string;
                            value: _184.MsgUpdateClient;
                        };
                        upgradeClient(value: _184.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _184.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _184.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _184.MsgSubmitMisbehaviour;
                        };
                        recoverClient(value: _184.MsgRecoverClient): {
                            typeUrl: string;
                            value: _184.MsgRecoverClient;
                        };
                        iBCSoftwareUpgrade(value: _184.MsgIBCSoftwareUpgrade): {
                            typeUrl: string;
                            value: _184.MsgIBCSoftwareUpgrade;
                        };
                        updateClientParams(value: _184.MsgUpdateParams): {
                            typeUrl: string;
                            value: _184.MsgUpdateParams;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _184.MsgCreateClient) => _184.MsgCreateClientAmino;
                        fromAmino: (object: _184.MsgCreateClientAmino) => _184.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _184.MsgUpdateClient) => _184.MsgUpdateClientAmino;
                        fromAmino: (object: _184.MsgUpdateClientAmino) => _184.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _184.MsgUpgradeClient) => _184.MsgUpgradeClientAmino;
                        fromAmino: (object: _184.MsgUpgradeClientAmino) => _184.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _184.MsgSubmitMisbehaviour) => _184.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _184.MsgSubmitMisbehaviourAmino) => _184.MsgSubmitMisbehaviour;
                    };
                    "/ibc.core.client.v1.MsgRecoverClient": {
                        aminoType: string;
                        toAmino: (message: _184.MsgRecoverClient) => _184.MsgRecoverClientAmino;
                        fromAmino: (object: _184.MsgRecoverClientAmino) => _184.MsgRecoverClient;
                    };
                    "/ibc.core.client.v1.MsgIBCSoftwareUpgrade": {
                        aminoType: string;
                        toAmino: (message: _184.MsgIBCSoftwareUpgrade) => _184.MsgIBCSoftwareUpgradeAmino;
                        fromAmino: (object: _184.MsgIBCSoftwareUpgradeAmino) => _184.MsgIBCSoftwareUpgrade;
                    };
                    "/ibc.core.client.v1.MsgUpdateParams": {
                        aminoType: string;
                        toAmino: (message: _184.MsgUpdateParams) => _184.MsgUpdateParamsAmino;
                        fromAmino: (object: _184.MsgUpdateParamsAmino) => _184.MsgUpdateParams;
                    };
                };
                MsgCreateClient: {
                    typeUrl: string;
                    encode(message: _184.MsgCreateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _184.MsgCreateClient;
                    fromPartial(object: Partial<_184.MsgCreateClient>): _184.MsgCreateClient;
                    fromAmino(object: _184.MsgCreateClientAmino): _184.MsgCreateClient;
                    toAmino(message: _184.MsgCreateClient): _184.MsgCreateClientAmino;
                    fromAminoMsg(object: _184.MsgCreateClientAminoMsg): _184.MsgCreateClient;
                    toAminoMsg(message: _184.MsgCreateClient): _184.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _184.MsgCreateClientProtoMsg): _184.MsgCreateClient;
                    toProto(message: _184.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _184.MsgCreateClient): _184.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    typeUrl: string;
                    encode(_: _184.MsgCreateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _184.MsgCreateClientResponse;
                    fromPartial(_: Partial<_184.MsgCreateClientResponse>): _184.MsgCreateClientResponse;
                    fromAmino(_: _184.MsgCreateClientResponseAmino): _184.MsgCreateClientResponse;
                    toAmino(_: _184.MsgCreateClientResponse): _184.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _184.MsgCreateClientResponseAminoMsg): _184.MsgCreateClientResponse;
                    toAminoMsg(message: _184.MsgCreateClientResponse): _184.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _184.MsgCreateClientResponseProtoMsg): _184.MsgCreateClientResponse;
                    toProto(message: _184.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _184.MsgCreateClientResponse): _184.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    typeUrl: string;
                    encode(message: _184.MsgUpdateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _184.MsgUpdateClient;
                    fromPartial(object: Partial<_184.MsgUpdateClient>): _184.MsgUpdateClient;
                    fromAmino(object: _184.MsgUpdateClientAmino): _184.MsgUpdateClient;
                    toAmino(message: _184.MsgUpdateClient): _184.MsgUpdateClientAmino;
                    fromAminoMsg(object: _184.MsgUpdateClientAminoMsg): _184.MsgUpdateClient;
                    toAminoMsg(message: _184.MsgUpdateClient): _184.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _184.MsgUpdateClientProtoMsg): _184.MsgUpdateClient;
                    toProto(message: _184.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _184.MsgUpdateClient): _184.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    typeUrl: string;
                    encode(_: _184.MsgUpdateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _184.MsgUpdateClientResponse;
                    fromPartial(_: Partial<_184.MsgUpdateClientResponse>): _184.MsgUpdateClientResponse;
                    fromAmino(_: _184.MsgUpdateClientResponseAmino): _184.MsgUpdateClientResponse;
                    toAmino(_: _184.MsgUpdateClientResponse): _184.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _184.MsgUpdateClientResponseAminoMsg): _184.MsgUpdateClientResponse;
                    toAminoMsg(message: _184.MsgUpdateClientResponse): _184.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _184.MsgUpdateClientResponseProtoMsg): _184.MsgUpdateClientResponse;
                    toProto(message: _184.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _184.MsgUpdateClientResponse): _184.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    typeUrl: string;
                    encode(message: _184.MsgUpgradeClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _184.MsgUpgradeClient;
                    fromPartial(object: Partial<_184.MsgUpgradeClient>): _184.MsgUpgradeClient;
                    fromAmino(object: _184.MsgUpgradeClientAmino): _184.MsgUpgradeClient;
                    toAmino(message: _184.MsgUpgradeClient): _184.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _184.MsgUpgradeClientAminoMsg): _184.MsgUpgradeClient;
                    toAminoMsg(message: _184.MsgUpgradeClient): _184.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _184.MsgUpgradeClientProtoMsg): _184.MsgUpgradeClient;
                    toProto(message: _184.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _184.MsgUpgradeClient): _184.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    typeUrl: string;
                    encode(_: _184.MsgUpgradeClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _184.MsgUpgradeClientResponse;
                    fromPartial(_: Partial<_184.MsgUpgradeClientResponse>): _184.MsgUpgradeClientResponse;
                    fromAmino(_: _184.MsgUpgradeClientResponseAmino): _184.MsgUpgradeClientResponse;
                    toAmino(_: _184.MsgUpgradeClientResponse): _184.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _184.MsgUpgradeClientResponseAminoMsg): _184.MsgUpgradeClientResponse;
                    toAminoMsg(message: _184.MsgUpgradeClientResponse): _184.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _184.MsgUpgradeClientResponseProtoMsg): _184.MsgUpgradeClientResponse;
                    toProto(message: _184.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _184.MsgUpgradeClientResponse): _184.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    typeUrl: string;
                    encode(message: _184.MsgSubmitMisbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _184.MsgSubmitMisbehaviour;
                    fromPartial(object: Partial<_184.MsgSubmitMisbehaviour>): _184.MsgSubmitMisbehaviour;
                    fromAmino(object: _184.MsgSubmitMisbehaviourAmino): _184.MsgSubmitMisbehaviour;
                    toAmino(message: _184.MsgSubmitMisbehaviour): _184.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _184.MsgSubmitMisbehaviourAminoMsg): _184.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _184.MsgSubmitMisbehaviour): _184.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _184.MsgSubmitMisbehaviourProtoMsg): _184.MsgSubmitMisbehaviour;
                    toProto(message: _184.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _184.MsgSubmitMisbehaviour): _184.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    typeUrl: string;
                    encode(_: _184.MsgSubmitMisbehaviourResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _184.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: Partial<_184.MsgSubmitMisbehaviourResponse>): _184.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _184.MsgSubmitMisbehaviourResponseAmino): _184.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _184.MsgSubmitMisbehaviourResponse): _184.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _184.MsgSubmitMisbehaviourResponseAminoMsg): _184.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _184.MsgSubmitMisbehaviourResponse): _184.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _184.MsgSubmitMisbehaviourResponseProtoMsg): _184.MsgSubmitMisbehaviourResponse;
                    toProto(message: _184.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _184.MsgSubmitMisbehaviourResponse): _184.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                MsgRecoverClient: {
                    typeUrl: string;
                    encode(message: _184.MsgRecoverClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _184.MsgRecoverClient;
                    fromPartial(object: Partial<_184.MsgRecoverClient>): _184.MsgRecoverClient;
                    fromAmino(object: _184.MsgRecoverClientAmino): _184.MsgRecoverClient;
                    toAmino(message: _184.MsgRecoverClient): _184.MsgRecoverClientAmino;
                    fromAminoMsg(object: _184.MsgRecoverClientAminoMsg): _184.MsgRecoverClient;
                    toAminoMsg(message: _184.MsgRecoverClient): _184.MsgRecoverClientAminoMsg;
                    fromProtoMsg(message: _184.MsgRecoverClientProtoMsg): _184.MsgRecoverClient;
                    toProto(message: _184.MsgRecoverClient): Uint8Array;
                    toProtoMsg(message: _184.MsgRecoverClient): _184.MsgRecoverClientProtoMsg;
                };
                MsgRecoverClientResponse: {
                    typeUrl: string;
                    encode(_: _184.MsgRecoverClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _184.MsgRecoverClientResponse;
                    fromPartial(_: Partial<_184.MsgRecoverClientResponse>): _184.MsgRecoverClientResponse;
                    fromAmino(_: _184.MsgRecoverClientResponseAmino): _184.MsgRecoverClientResponse;
                    toAmino(_: _184.MsgRecoverClientResponse): _184.MsgRecoverClientResponseAmino;
                    fromAminoMsg(object: _184.MsgRecoverClientResponseAminoMsg): _184.MsgRecoverClientResponse;
                    toAminoMsg(message: _184.MsgRecoverClientResponse): _184.MsgRecoverClientResponseAminoMsg;
                    fromProtoMsg(message: _184.MsgRecoverClientResponseProtoMsg): _184.MsgRecoverClientResponse;
                    toProto(message: _184.MsgRecoverClientResponse): Uint8Array;
                    toProtoMsg(message: _184.MsgRecoverClientResponse): _184.MsgRecoverClientResponseProtoMsg;
                };
                MsgIBCSoftwareUpgrade: {
                    typeUrl: string;
                    encode(message: _184.MsgIBCSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _184.MsgIBCSoftwareUpgrade;
                    fromPartial(object: Partial<_184.MsgIBCSoftwareUpgrade>): _184.MsgIBCSoftwareUpgrade;
                    fromAmino(object: _184.MsgIBCSoftwareUpgradeAmino): _184.MsgIBCSoftwareUpgrade;
                    toAmino(message: _184.MsgIBCSoftwareUpgrade): _184.MsgIBCSoftwareUpgradeAmino;
                    fromAminoMsg(object: _184.MsgIBCSoftwareUpgradeAminoMsg): _184.MsgIBCSoftwareUpgrade;
                    toAminoMsg(message: _184.MsgIBCSoftwareUpgrade): _184.MsgIBCSoftwareUpgradeAminoMsg;
                    fromProtoMsg(message: _184.MsgIBCSoftwareUpgradeProtoMsg): _184.MsgIBCSoftwareUpgrade;
                    toProto(message: _184.MsgIBCSoftwareUpgrade): Uint8Array;
                    toProtoMsg(message: _184.MsgIBCSoftwareUpgrade): _184.MsgIBCSoftwareUpgradeProtoMsg;
                };
                MsgIBCSoftwareUpgradeResponse: {
                    typeUrl: string;
                    encode(_: _184.MsgIBCSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _184.MsgIBCSoftwareUpgradeResponse;
                    fromPartial(_: Partial<_184.MsgIBCSoftwareUpgradeResponse>): _184.MsgIBCSoftwareUpgradeResponse;
                    fromAmino(_: _184.MsgIBCSoftwareUpgradeResponseAmino): _184.MsgIBCSoftwareUpgradeResponse;
                    toAmino(_: _184.MsgIBCSoftwareUpgradeResponse): _184.MsgIBCSoftwareUpgradeResponseAmino;
                    fromAminoMsg(object: _184.MsgIBCSoftwareUpgradeResponseAminoMsg): _184.MsgIBCSoftwareUpgradeResponse;
                    toAminoMsg(message: _184.MsgIBCSoftwareUpgradeResponse): _184.MsgIBCSoftwareUpgradeResponseAminoMsg;
                    fromProtoMsg(message: _184.MsgIBCSoftwareUpgradeResponseProtoMsg): _184.MsgIBCSoftwareUpgradeResponse;
                    toProto(message: _184.MsgIBCSoftwareUpgradeResponse): Uint8Array;
                    toProtoMsg(message: _184.MsgIBCSoftwareUpgradeResponse): _184.MsgIBCSoftwareUpgradeResponseProtoMsg;
                };
                MsgUpdateParams: {
                    typeUrl: string;
                    encode(message: _184.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _184.MsgUpdateParams;
                    fromPartial(object: Partial<_184.MsgUpdateParams>): _184.MsgUpdateParams;
                    fromAmino(object: _184.MsgUpdateParamsAmino): _184.MsgUpdateParams;
                    toAmino(message: _184.MsgUpdateParams): _184.MsgUpdateParamsAmino;
                    fromAminoMsg(object: _184.MsgUpdateParamsAminoMsg): _184.MsgUpdateParams;
                    toAminoMsg(message: _184.MsgUpdateParams): _184.MsgUpdateParamsAminoMsg;
                    fromProtoMsg(message: _184.MsgUpdateParamsProtoMsg): _184.MsgUpdateParams;
                    toProto(message: _184.MsgUpdateParams): Uint8Array;
                    toProtoMsg(message: _184.MsgUpdateParams): _184.MsgUpdateParamsProtoMsg;
                };
                MsgUpdateParamsResponse: {
                    typeUrl: string;
                    encode(_: _184.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _184.MsgUpdateParamsResponse;
                    fromPartial(_: Partial<_184.MsgUpdateParamsResponse>): _184.MsgUpdateParamsResponse;
                    fromAmino(_: _184.MsgUpdateParamsResponseAmino): _184.MsgUpdateParamsResponse;
                    toAmino(_: _184.MsgUpdateParamsResponse): _184.MsgUpdateParamsResponseAmino;
                    fromAminoMsg(object: _184.MsgUpdateParamsResponseAminoMsg): _184.MsgUpdateParamsResponse;
                    toAminoMsg(message: _184.MsgUpdateParamsResponse): _184.MsgUpdateParamsResponseAminoMsg;
                    fromProtoMsg(message: _184.MsgUpdateParamsResponseProtoMsg): _184.MsgUpdateParamsResponse;
                    toProto(message: _184.MsgUpdateParamsResponse): Uint8Array;
                    toProtoMsg(message: _184.MsgUpdateParamsResponse): _184.MsgUpdateParamsResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    typeUrl: string;
                    encode(message: _183.QueryClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.QueryClientStateRequest;
                    fromPartial(object: Partial<_183.QueryClientStateRequest>): _183.QueryClientStateRequest;
                    fromAmino(object: _183.QueryClientStateRequestAmino): _183.QueryClientStateRequest;
                    toAmino(message: _183.QueryClientStateRequest): _183.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _183.QueryClientStateRequestAminoMsg): _183.QueryClientStateRequest;
                    toAminoMsg(message: _183.QueryClientStateRequest): _183.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _183.QueryClientStateRequestProtoMsg): _183.QueryClientStateRequest;
                    toProto(message: _183.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _183.QueryClientStateRequest): _183.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    typeUrl: string;
                    encode(message: _183.QueryClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.QueryClientStateResponse;
                    fromPartial(object: Partial<_183.QueryClientStateResponse>): _183.QueryClientStateResponse;
                    fromAmino(object: _183.QueryClientStateResponseAmino): _183.QueryClientStateResponse;
                    toAmino(message: _183.QueryClientStateResponse): _183.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _183.QueryClientStateResponseAminoMsg): _183.QueryClientStateResponse;
                    toAminoMsg(message: _183.QueryClientStateResponse): _183.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _183.QueryClientStateResponseProtoMsg): _183.QueryClientStateResponse;
                    toProto(message: _183.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _183.QueryClientStateResponse): _183.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    typeUrl: string;
                    encode(message: _183.QueryClientStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.QueryClientStatesRequest;
                    fromPartial(object: Partial<_183.QueryClientStatesRequest>): _183.QueryClientStatesRequest;
                    fromAmino(object: _183.QueryClientStatesRequestAmino): _183.QueryClientStatesRequest;
                    toAmino(message: _183.QueryClientStatesRequest): _183.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _183.QueryClientStatesRequestAminoMsg): _183.QueryClientStatesRequest;
                    toAminoMsg(message: _183.QueryClientStatesRequest): _183.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _183.QueryClientStatesRequestProtoMsg): _183.QueryClientStatesRequest;
                    toProto(message: _183.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _183.QueryClientStatesRequest): _183.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    typeUrl: string;
                    encode(message: _183.QueryClientStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.QueryClientStatesResponse;
                    fromPartial(object: Partial<_183.QueryClientStatesResponse>): _183.QueryClientStatesResponse;
                    fromAmino(object: _183.QueryClientStatesResponseAmino): _183.QueryClientStatesResponse;
                    toAmino(message: _183.QueryClientStatesResponse): _183.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _183.QueryClientStatesResponseAminoMsg): _183.QueryClientStatesResponse;
                    toAminoMsg(message: _183.QueryClientStatesResponse): _183.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _183.QueryClientStatesResponseProtoMsg): _183.QueryClientStatesResponse;
                    toProto(message: _183.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _183.QueryClientStatesResponse): _183.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _183.QueryConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.QueryConsensusStateRequest;
                    fromPartial(object: Partial<_183.QueryConsensusStateRequest>): _183.QueryConsensusStateRequest;
                    fromAmino(object: _183.QueryConsensusStateRequestAmino): _183.QueryConsensusStateRequest;
                    toAmino(message: _183.QueryConsensusStateRequest): _183.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _183.QueryConsensusStateRequestAminoMsg): _183.QueryConsensusStateRequest;
                    toAminoMsg(message: _183.QueryConsensusStateRequest): _183.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _183.QueryConsensusStateRequestProtoMsg): _183.QueryConsensusStateRequest;
                    toProto(message: _183.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _183.QueryConsensusStateRequest): _183.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _183.QueryConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.QueryConsensusStateResponse;
                    fromPartial(object: Partial<_183.QueryConsensusStateResponse>): _183.QueryConsensusStateResponse;
                    fromAmino(object: _183.QueryConsensusStateResponseAmino): _183.QueryConsensusStateResponse;
                    toAmino(message: _183.QueryConsensusStateResponse): _183.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _183.QueryConsensusStateResponseAminoMsg): _183.QueryConsensusStateResponse;
                    toAminoMsg(message: _183.QueryConsensusStateResponse): _183.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _183.QueryConsensusStateResponseProtoMsg): _183.QueryConsensusStateResponse;
                    toProto(message: _183.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _183.QueryConsensusStateResponse): _183.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    typeUrl: string;
                    encode(message: _183.QueryConsensusStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.QueryConsensusStatesRequest;
                    fromPartial(object: Partial<_183.QueryConsensusStatesRequest>): _183.QueryConsensusStatesRequest;
                    fromAmino(object: _183.QueryConsensusStatesRequestAmino): _183.QueryConsensusStatesRequest;
                    toAmino(message: _183.QueryConsensusStatesRequest): _183.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _183.QueryConsensusStatesRequestAminoMsg): _183.QueryConsensusStatesRequest;
                    toAminoMsg(message: _183.QueryConsensusStatesRequest): _183.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _183.QueryConsensusStatesRequestProtoMsg): _183.QueryConsensusStatesRequest;
                    toProto(message: _183.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _183.QueryConsensusStatesRequest): _183.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    typeUrl: string;
                    encode(message: _183.QueryConsensusStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.QueryConsensusStatesResponse;
                    fromPartial(object: Partial<_183.QueryConsensusStatesResponse>): _183.QueryConsensusStatesResponse;
                    fromAmino(object: _183.QueryConsensusStatesResponseAmino): _183.QueryConsensusStatesResponse;
                    toAmino(message: _183.QueryConsensusStatesResponse): _183.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _183.QueryConsensusStatesResponseAminoMsg): _183.QueryConsensusStatesResponse;
                    toAminoMsg(message: _183.QueryConsensusStatesResponse): _183.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _183.QueryConsensusStatesResponseProtoMsg): _183.QueryConsensusStatesResponse;
                    toProto(message: _183.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _183.QueryConsensusStatesResponse): _183.QueryConsensusStatesResponseProtoMsg;
                };
                QueryConsensusStateHeightsRequest: {
                    typeUrl: string;
                    encode(message: _183.QueryConsensusStateHeightsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.QueryConsensusStateHeightsRequest;
                    fromPartial(object: Partial<_183.QueryConsensusStateHeightsRequest>): _183.QueryConsensusStateHeightsRequest;
                    fromAmino(object: _183.QueryConsensusStateHeightsRequestAmino): _183.QueryConsensusStateHeightsRequest;
                    toAmino(message: _183.QueryConsensusStateHeightsRequest): _183.QueryConsensusStateHeightsRequestAmino;
                    fromAminoMsg(object: _183.QueryConsensusStateHeightsRequestAminoMsg): _183.QueryConsensusStateHeightsRequest;
                    toAminoMsg(message: _183.QueryConsensusStateHeightsRequest): _183.QueryConsensusStateHeightsRequestAminoMsg;
                    fromProtoMsg(message: _183.QueryConsensusStateHeightsRequestProtoMsg): _183.QueryConsensusStateHeightsRequest;
                    toProto(message: _183.QueryConsensusStateHeightsRequest): Uint8Array;
                    toProtoMsg(message: _183.QueryConsensusStateHeightsRequest): _183.QueryConsensusStateHeightsRequestProtoMsg;
                };
                QueryConsensusStateHeightsResponse: {
                    typeUrl: string;
                    encode(message: _183.QueryConsensusStateHeightsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.QueryConsensusStateHeightsResponse;
                    fromPartial(object: Partial<_183.QueryConsensusStateHeightsResponse>): _183.QueryConsensusStateHeightsResponse;
                    fromAmino(object: _183.QueryConsensusStateHeightsResponseAmino): _183.QueryConsensusStateHeightsResponse;
                    toAmino(message: _183.QueryConsensusStateHeightsResponse): _183.QueryConsensusStateHeightsResponseAmino;
                    fromAminoMsg(object: _183.QueryConsensusStateHeightsResponseAminoMsg): _183.QueryConsensusStateHeightsResponse;
                    toAminoMsg(message: _183.QueryConsensusStateHeightsResponse): _183.QueryConsensusStateHeightsResponseAminoMsg;
                    fromProtoMsg(message: _183.QueryConsensusStateHeightsResponseProtoMsg): _183.QueryConsensusStateHeightsResponse;
                    toProto(message: _183.QueryConsensusStateHeightsResponse): Uint8Array;
                    toProtoMsg(message: _183.QueryConsensusStateHeightsResponse): _183.QueryConsensusStateHeightsResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    typeUrl: string;
                    encode(message: _183.QueryClientStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.QueryClientStatusRequest;
                    fromPartial(object: Partial<_183.QueryClientStatusRequest>): _183.QueryClientStatusRequest;
                    fromAmino(object: _183.QueryClientStatusRequestAmino): _183.QueryClientStatusRequest;
                    toAmino(message: _183.QueryClientStatusRequest): _183.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _183.QueryClientStatusRequestAminoMsg): _183.QueryClientStatusRequest;
                    toAminoMsg(message: _183.QueryClientStatusRequest): _183.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _183.QueryClientStatusRequestProtoMsg): _183.QueryClientStatusRequest;
                    toProto(message: _183.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _183.QueryClientStatusRequest): _183.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    typeUrl: string;
                    encode(message: _183.QueryClientStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.QueryClientStatusResponse;
                    fromPartial(object: Partial<_183.QueryClientStatusResponse>): _183.QueryClientStatusResponse;
                    fromAmino(object: _183.QueryClientStatusResponseAmino): _183.QueryClientStatusResponse;
                    toAmino(message: _183.QueryClientStatusResponse): _183.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _183.QueryClientStatusResponseAminoMsg): _183.QueryClientStatusResponse;
                    toAminoMsg(message: _183.QueryClientStatusResponse): _183.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _183.QueryClientStatusResponseProtoMsg): _183.QueryClientStatusResponse;
                    toProto(message: _183.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _183.QueryClientStatusResponse): _183.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    typeUrl: string;
                    encode(_: _183.QueryClientParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.QueryClientParamsRequest;
                    fromPartial(_: Partial<_183.QueryClientParamsRequest>): _183.QueryClientParamsRequest;
                    fromAmino(_: _183.QueryClientParamsRequestAmino): _183.QueryClientParamsRequest;
                    toAmino(_: _183.QueryClientParamsRequest): _183.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _183.QueryClientParamsRequestAminoMsg): _183.QueryClientParamsRequest;
                    toAminoMsg(message: _183.QueryClientParamsRequest): _183.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _183.QueryClientParamsRequestProtoMsg): _183.QueryClientParamsRequest;
                    toProto(message: _183.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _183.QueryClientParamsRequest): _183.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    typeUrl: string;
                    encode(message: _183.QueryClientParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.QueryClientParamsResponse;
                    fromPartial(object: Partial<_183.QueryClientParamsResponse>): _183.QueryClientParamsResponse;
                    fromAmino(object: _183.QueryClientParamsResponseAmino): _183.QueryClientParamsResponse;
                    toAmino(message: _183.QueryClientParamsResponse): _183.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _183.QueryClientParamsResponseAminoMsg): _183.QueryClientParamsResponse;
                    toAminoMsg(message: _183.QueryClientParamsResponse): _183.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _183.QueryClientParamsResponseProtoMsg): _183.QueryClientParamsResponse;
                    toProto(message: _183.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _183.QueryClientParamsResponse): _183.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    typeUrl: string;
                    encode(_: _183.QueryUpgradedClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.QueryUpgradedClientStateRequest;
                    fromPartial(_: Partial<_183.QueryUpgradedClientStateRequest>): _183.QueryUpgradedClientStateRequest;
                    fromAmino(_: _183.QueryUpgradedClientStateRequestAmino): _183.QueryUpgradedClientStateRequest;
                    toAmino(_: _183.QueryUpgradedClientStateRequest): _183.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _183.QueryUpgradedClientStateRequestAminoMsg): _183.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _183.QueryUpgradedClientStateRequest): _183.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _183.QueryUpgradedClientStateRequestProtoMsg): _183.QueryUpgradedClientStateRequest;
                    toProto(message: _183.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _183.QueryUpgradedClientStateRequest): _183.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    typeUrl: string;
                    encode(message: _183.QueryUpgradedClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.QueryUpgradedClientStateResponse;
                    fromPartial(object: Partial<_183.QueryUpgradedClientStateResponse>): _183.QueryUpgradedClientStateResponse;
                    fromAmino(object: _183.QueryUpgradedClientStateResponseAmino): _183.QueryUpgradedClientStateResponse;
                    toAmino(message: _183.QueryUpgradedClientStateResponse): _183.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _183.QueryUpgradedClientStateResponseAminoMsg): _183.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _183.QueryUpgradedClientStateResponse): _183.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _183.QueryUpgradedClientStateResponseProtoMsg): _183.QueryUpgradedClientStateResponse;
                    toProto(message: _183.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _183.QueryUpgradedClientStateResponse): _183.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    typeUrl: string;
                    encode(_: _183.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: Partial<_183.QueryUpgradedConsensusStateRequest>): _183.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _183.QueryUpgradedConsensusStateRequestAmino): _183.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _183.QueryUpgradedConsensusStateRequest): _183.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _183.QueryUpgradedConsensusStateRequestAminoMsg): _183.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _183.QueryUpgradedConsensusStateRequest): _183.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _183.QueryUpgradedConsensusStateRequestProtoMsg): _183.QueryUpgradedConsensusStateRequest;
                    toProto(message: _183.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _183.QueryUpgradedConsensusStateRequest): _183.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _183.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: Partial<_183.QueryUpgradedConsensusStateResponse>): _183.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _183.QueryUpgradedConsensusStateResponseAmino): _183.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _183.QueryUpgradedConsensusStateResponse): _183.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _183.QueryUpgradedConsensusStateResponseAminoMsg): _183.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _183.QueryUpgradedConsensusStateResponse): _183.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _183.QueryUpgradedConsensusStateResponseProtoMsg): _183.QueryUpgradedConsensusStateResponse;
                    toProto(message: _183.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _183.QueryUpgradedConsensusStateResponse): _183.QueryUpgradedConsensusStateResponseProtoMsg;
                };
                QueryVerifyMembershipRequest: {
                    typeUrl: string;
                    encode(message: _183.QueryVerifyMembershipRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.QueryVerifyMembershipRequest;
                    fromPartial(object: Partial<_183.QueryVerifyMembershipRequest>): _183.QueryVerifyMembershipRequest;
                    fromAmino(object: _183.QueryVerifyMembershipRequestAmino): _183.QueryVerifyMembershipRequest;
                    toAmino(message: _183.QueryVerifyMembershipRequest): _183.QueryVerifyMembershipRequestAmino;
                    fromAminoMsg(object: _183.QueryVerifyMembershipRequestAminoMsg): _183.QueryVerifyMembershipRequest;
                    toAminoMsg(message: _183.QueryVerifyMembershipRequest): _183.QueryVerifyMembershipRequestAminoMsg;
                    fromProtoMsg(message: _183.QueryVerifyMembershipRequestProtoMsg): _183.QueryVerifyMembershipRequest;
                    toProto(message: _183.QueryVerifyMembershipRequest): Uint8Array;
                    toProtoMsg(message: _183.QueryVerifyMembershipRequest): _183.QueryVerifyMembershipRequestProtoMsg;
                };
                QueryVerifyMembershipResponse: {
                    typeUrl: string;
                    encode(message: _183.QueryVerifyMembershipResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.QueryVerifyMembershipResponse;
                    fromPartial(object: Partial<_183.QueryVerifyMembershipResponse>): _183.QueryVerifyMembershipResponse;
                    fromAmino(object: _183.QueryVerifyMembershipResponseAmino): _183.QueryVerifyMembershipResponse;
                    toAmino(message: _183.QueryVerifyMembershipResponse): _183.QueryVerifyMembershipResponseAmino;
                    fromAminoMsg(object: _183.QueryVerifyMembershipResponseAminoMsg): _183.QueryVerifyMembershipResponse;
                    toAminoMsg(message: _183.QueryVerifyMembershipResponse): _183.QueryVerifyMembershipResponseAminoMsg;
                    fromProtoMsg(message: _183.QueryVerifyMembershipResponseProtoMsg): _183.QueryVerifyMembershipResponse;
                    toProto(message: _183.QueryVerifyMembershipResponse): Uint8Array;
                    toProtoMsg(message: _183.QueryVerifyMembershipResponse): _183.QueryVerifyMembershipResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _182.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.GenesisState;
                    fromPartial(object: Partial<_182.GenesisState>): _182.GenesisState;
                    fromAmino(object: _182.GenesisStateAmino): _182.GenesisState;
                    toAmino(message: _182.GenesisState): _182.GenesisStateAmino;
                    fromAminoMsg(object: _182.GenesisStateAminoMsg): _182.GenesisState;
                    toAminoMsg(message: _182.GenesisState): _182.GenesisStateAminoMsg;
                    fromProtoMsg(message: _182.GenesisStateProtoMsg): _182.GenesisState;
                    toProto(message: _182.GenesisState): Uint8Array;
                    toProtoMsg(message: _182.GenesisState): _182.GenesisStateProtoMsg;
                };
                GenesisMetadata: {
                    typeUrl: string;
                    encode(message: _182.GenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.GenesisMetadata;
                    fromPartial(object: Partial<_182.GenesisMetadata>): _182.GenesisMetadata;
                    fromAmino(object: _182.GenesisMetadataAmino): _182.GenesisMetadata;
                    toAmino(message: _182.GenesisMetadata): _182.GenesisMetadataAmino;
                    fromAminoMsg(object: _182.GenesisMetadataAminoMsg): _182.GenesisMetadata;
                    toAminoMsg(message: _182.GenesisMetadata): _182.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _182.GenesisMetadataProtoMsg): _182.GenesisMetadata;
                    toProto(message: _182.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _182.GenesisMetadata): _182.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    typeUrl: string;
                    encode(message: _182.IdentifiedGenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.IdentifiedGenesisMetadata;
                    fromPartial(object: Partial<_182.IdentifiedGenesisMetadata>): _182.IdentifiedGenesisMetadata;
                    fromAmino(object: _182.IdentifiedGenesisMetadataAmino): _182.IdentifiedGenesisMetadata;
                    toAmino(message: _182.IdentifiedGenesisMetadata): _182.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _182.IdentifiedGenesisMetadataAminoMsg): _182.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _182.IdentifiedGenesisMetadata): _182.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _182.IdentifiedGenesisMetadataProtoMsg): _182.IdentifiedGenesisMetadata;
                    toProto(message: _182.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _182.IdentifiedGenesisMetadata): _182.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    typeUrl: string;
                    encode(message: _181.IdentifiedClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.IdentifiedClientState;
                    fromPartial(object: Partial<_181.IdentifiedClientState>): _181.IdentifiedClientState;
                    fromAmino(object: _181.IdentifiedClientStateAmino): _181.IdentifiedClientState;
                    toAmino(message: _181.IdentifiedClientState): _181.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _181.IdentifiedClientStateAminoMsg): _181.IdentifiedClientState;
                    toAminoMsg(message: _181.IdentifiedClientState): _181.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _181.IdentifiedClientStateProtoMsg): _181.IdentifiedClientState;
                    toProto(message: _181.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _181.IdentifiedClientState): _181.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    encode(message: _181.ConsensusStateWithHeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.ConsensusStateWithHeight;
                    fromPartial(object: Partial<_181.ConsensusStateWithHeight>): _181.ConsensusStateWithHeight;
                    fromAmino(object: _181.ConsensusStateWithHeightAmino): _181.ConsensusStateWithHeight;
                    toAmino(message: _181.ConsensusStateWithHeight): _181.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _181.ConsensusStateWithHeightAminoMsg): _181.ConsensusStateWithHeight;
                    toAminoMsg(message: _181.ConsensusStateWithHeight): _181.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _181.ConsensusStateWithHeightProtoMsg): _181.ConsensusStateWithHeight;
                    toProto(message: _181.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _181.ConsensusStateWithHeight): _181.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    encode(message: _181.ClientConsensusStates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.ClientConsensusStates;
                    fromPartial(object: Partial<_181.ClientConsensusStates>): _181.ClientConsensusStates;
                    fromAmino(object: _181.ClientConsensusStatesAmino): _181.ClientConsensusStates;
                    toAmino(message: _181.ClientConsensusStates): _181.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _181.ClientConsensusStatesAminoMsg): _181.ClientConsensusStates;
                    toAminoMsg(message: _181.ClientConsensusStates): _181.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _181.ClientConsensusStatesProtoMsg): _181.ClientConsensusStates;
                    toProto(message: _181.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _181.ClientConsensusStates): _181.ClientConsensusStatesProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    encode(message: _181.Height, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.Height;
                    fromPartial(object: Partial<_181.Height>): _181.Height;
                    fromAmino(object: _181.HeightAmino): _181.Height;
                    toAmino(message: _181.Height): _181.HeightAmino;
                    fromAminoMsg(object: _181.HeightAminoMsg): _181.Height;
                    toAminoMsg(message: _181.Height): _181.HeightAminoMsg;
                    fromProtoMsg(message: _181.HeightProtoMsg): _181.Height;
                    toProto(message: _181.Height): Uint8Array;
                    toProtoMsg(message: _181.Height): _181.HeightProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _181.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.Params;
                    fromPartial(object: Partial<_181.Params>): _181.Params;
                    fromAmino(object: _181.ParamsAmino): _181.Params;
                    toAmino(message: _181.Params): _181.ParamsAmino;
                    fromAminoMsg(object: _181.ParamsAminoMsg): _181.Params;
                    toAminoMsg(message: _181.Params): _181.ParamsAminoMsg;
                    fromProtoMsg(message: _181.ParamsProtoMsg): _181.Params;
                    toProto(message: _181.Params): Uint8Array;
                    toProtoMsg(message: _181.Params): _181.ParamsProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    encode(message: _181.ClientUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.ClientUpdateProposal;
                    fromPartial(object: Partial<_181.ClientUpdateProposal>): _181.ClientUpdateProposal;
                    fromAmino(object: _181.ClientUpdateProposalAmino): _181.ClientUpdateProposal;
                    toAmino(message: _181.ClientUpdateProposal): _181.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _181.ClientUpdateProposalAminoMsg): _181.ClientUpdateProposal;
                    toAminoMsg(message: _181.ClientUpdateProposal): _181.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _181.ClientUpdateProposalProtoMsg): _181.ClientUpdateProposal;
                    toProto(message: _181.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _181.ClientUpdateProposal): _181.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    encode(message: _181.UpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.UpgradeProposal;
                    fromPartial(object: Partial<_181.UpgradeProposal>): _181.UpgradeProposal;
                    fromAmino(object: _181.UpgradeProposalAmino): _181.UpgradeProposal;
                    toAmino(message: _181.UpgradeProposal): _181.UpgradeProposalAmino;
                    fromAminoMsg(object: _181.UpgradeProposalAminoMsg): _181.UpgradeProposal;
                    toAminoMsg(message: _181.UpgradeProposal): _181.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _181.UpgradeProposalProtoMsg): _181.UpgradeProposal;
                    toProto(message: _181.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _181.UpgradeProposal): _181.UpgradeProposalProtoMsg;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    typeUrl: string;
                    encode(message: _185.MerkleRoot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.MerkleRoot;
                    fromPartial(object: Partial<_185.MerkleRoot>): _185.MerkleRoot;
                    fromAmino(object: _185.MerkleRootAmino): _185.MerkleRoot;
                    toAmino(message: _185.MerkleRoot): _185.MerkleRootAmino;
                    fromAminoMsg(object: _185.MerkleRootAminoMsg): _185.MerkleRoot;
                    toAminoMsg(message: _185.MerkleRoot): _185.MerkleRootAminoMsg;
                    fromProtoMsg(message: _185.MerkleRootProtoMsg): _185.MerkleRoot;
                    toProto(message: _185.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _185.MerkleRoot): _185.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    typeUrl: string;
                    encode(message: _185.MerklePrefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.MerklePrefix;
                    fromPartial(object: Partial<_185.MerklePrefix>): _185.MerklePrefix;
                    fromAmino(object: _185.MerklePrefixAmino): _185.MerklePrefix;
                    toAmino(message: _185.MerklePrefix): _185.MerklePrefixAmino;
                    fromAminoMsg(object: _185.MerklePrefixAminoMsg): _185.MerklePrefix;
                    toAminoMsg(message: _185.MerklePrefix): _185.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _185.MerklePrefixProtoMsg): _185.MerklePrefix;
                    toProto(message: _185.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _185.MerklePrefix): _185.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    typeUrl: string;
                    encode(message: _185.MerklePath, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.MerklePath;
                    fromPartial(object: Partial<_185.MerklePath>): _185.MerklePath;
                    fromAmino(object: _185.MerklePathAmino): _185.MerklePath;
                    toAmino(message: _185.MerklePath): _185.MerklePathAmino;
                    fromAminoMsg(object: _185.MerklePathAminoMsg): _185.MerklePath;
                    toAminoMsg(message: _185.MerklePath): _185.MerklePathAminoMsg;
                    fromProtoMsg(message: _185.MerklePathProtoMsg): _185.MerklePath;
                    toProto(message: _185.MerklePath): Uint8Array;
                    toProtoMsg(message: _185.MerklePath): _185.MerklePathProtoMsg;
                };
                MerkleProof: {
                    typeUrl: string;
                    encode(message: _185.MerkleProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.MerkleProof;
                    fromPartial(object: Partial<_185.MerkleProof>): _185.MerkleProof;
                    fromAmino(object: _185.MerkleProofAmino): _185.MerkleProof;
                    toAmino(message: _185.MerkleProof): _185.MerkleProofAmino;
                    fromAminoMsg(object: _185.MerkleProofAminoMsg): _185.MerkleProof;
                    toAminoMsg(message: _185.MerkleProof): _185.MerkleProofAminoMsg;
                    fromProtoMsg(message: _185.MerkleProofProtoMsg): _185.MerkleProof;
                    toProto(message: _185.MerkleProof): Uint8Array;
                    toProtoMsg(message: _185.MerkleProof): _185.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _395.MsgClientImpl;
                QueryClientImpl: typeof _387.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _188.QueryConnectionRequest): Promise<_188.QueryConnectionResponse>;
                    connections(request?: _188.QueryConnectionsRequest): Promise<_188.QueryConnectionsResponse>;
                    clientConnections(request: _188.QueryClientConnectionsRequest): Promise<_188.QueryClientConnectionsResponse>;
                    connectionClientState(request: _188.QueryConnectionClientStateRequest): Promise<_188.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _188.QueryConnectionConsensusStateRequest): Promise<_188.QueryConnectionConsensusStateResponse>;
                    connectionParams(request?: _188.QueryConnectionParamsRequest): Promise<_188.QueryConnectionParamsResponse>;
                };
                registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _189.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _189.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _189.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _189.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateConnectionParams(value: _189.MsgUpdateParams): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _189.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _189.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _189.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _189.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _189.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _189.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _189.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _189.MsgConnectionOpenConfirm;
                        };
                        updateConnectionParams(value: _189.MsgUpdateParams): {
                            typeUrl: string;
                            value: _189.MsgUpdateParams;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _189.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _189.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _189.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _189.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _189.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _189.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _189.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _189.MsgConnectionOpenConfirm;
                        };
                        updateConnectionParams(value: _189.MsgUpdateParams): {
                            typeUrl: string;
                            value: _189.MsgUpdateParams;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _189.MsgConnectionOpenInit) => _189.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _189.MsgConnectionOpenInitAmino) => _189.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _189.MsgConnectionOpenTry) => _189.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _189.MsgConnectionOpenTryAmino) => _189.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _189.MsgConnectionOpenAck) => _189.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _189.MsgConnectionOpenAckAmino) => _189.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _189.MsgConnectionOpenConfirm) => _189.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _189.MsgConnectionOpenConfirmAmino) => _189.MsgConnectionOpenConfirm;
                    };
                    "/ibc.core.connection.v1.MsgUpdateParams": {
                        aminoType: string;
                        toAmino: (message: _189.MsgUpdateParams) => _189.MsgUpdateParamsAmino;
                        fromAmino: (object: _189.MsgUpdateParamsAmino) => _189.MsgUpdateParams;
                    };
                };
                MsgConnectionOpenInit: {
                    typeUrl: string;
                    encode(message: _189.MsgConnectionOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.MsgConnectionOpenInit;
                    fromPartial(object: Partial<_189.MsgConnectionOpenInit>): _189.MsgConnectionOpenInit;
                    fromAmino(object: _189.MsgConnectionOpenInitAmino): _189.MsgConnectionOpenInit;
                    toAmino(message: _189.MsgConnectionOpenInit): _189.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _189.MsgConnectionOpenInitAminoMsg): _189.MsgConnectionOpenInit;
                    toAminoMsg(message: _189.MsgConnectionOpenInit): _189.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _189.MsgConnectionOpenInitProtoMsg): _189.MsgConnectionOpenInit;
                    toProto(message: _189.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _189.MsgConnectionOpenInit): _189.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    typeUrl: string;
                    encode(_: _189.MsgConnectionOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.MsgConnectionOpenInitResponse;
                    fromPartial(_: Partial<_189.MsgConnectionOpenInitResponse>): _189.MsgConnectionOpenInitResponse;
                    fromAmino(_: _189.MsgConnectionOpenInitResponseAmino): _189.MsgConnectionOpenInitResponse;
                    toAmino(_: _189.MsgConnectionOpenInitResponse): _189.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _189.MsgConnectionOpenInitResponseAminoMsg): _189.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _189.MsgConnectionOpenInitResponse): _189.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _189.MsgConnectionOpenInitResponseProtoMsg): _189.MsgConnectionOpenInitResponse;
                    toProto(message: _189.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _189.MsgConnectionOpenInitResponse): _189.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    typeUrl: string;
                    encode(message: _189.MsgConnectionOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.MsgConnectionOpenTry;
                    fromPartial(object: Partial<_189.MsgConnectionOpenTry>): _189.MsgConnectionOpenTry;
                    fromAmino(object: _189.MsgConnectionOpenTryAmino): _189.MsgConnectionOpenTry;
                    toAmino(message: _189.MsgConnectionOpenTry): _189.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _189.MsgConnectionOpenTryAminoMsg): _189.MsgConnectionOpenTry;
                    toAminoMsg(message: _189.MsgConnectionOpenTry): _189.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _189.MsgConnectionOpenTryProtoMsg): _189.MsgConnectionOpenTry;
                    toProto(message: _189.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _189.MsgConnectionOpenTry): _189.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    typeUrl: string;
                    encode(_: _189.MsgConnectionOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.MsgConnectionOpenTryResponse;
                    fromPartial(_: Partial<_189.MsgConnectionOpenTryResponse>): _189.MsgConnectionOpenTryResponse;
                    fromAmino(_: _189.MsgConnectionOpenTryResponseAmino): _189.MsgConnectionOpenTryResponse;
                    toAmino(_: _189.MsgConnectionOpenTryResponse): _189.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _189.MsgConnectionOpenTryResponseAminoMsg): _189.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _189.MsgConnectionOpenTryResponse): _189.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _189.MsgConnectionOpenTryResponseProtoMsg): _189.MsgConnectionOpenTryResponse;
                    toProto(message: _189.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _189.MsgConnectionOpenTryResponse): _189.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    typeUrl: string;
                    encode(message: _189.MsgConnectionOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.MsgConnectionOpenAck;
                    fromPartial(object: Partial<_189.MsgConnectionOpenAck>): _189.MsgConnectionOpenAck;
                    fromAmino(object: _189.MsgConnectionOpenAckAmino): _189.MsgConnectionOpenAck;
                    toAmino(message: _189.MsgConnectionOpenAck): _189.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _189.MsgConnectionOpenAckAminoMsg): _189.MsgConnectionOpenAck;
                    toAminoMsg(message: _189.MsgConnectionOpenAck): _189.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _189.MsgConnectionOpenAckProtoMsg): _189.MsgConnectionOpenAck;
                    toProto(message: _189.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _189.MsgConnectionOpenAck): _189.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _189.MsgConnectionOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.MsgConnectionOpenAckResponse;
                    fromPartial(_: Partial<_189.MsgConnectionOpenAckResponse>): _189.MsgConnectionOpenAckResponse;
                    fromAmino(_: _189.MsgConnectionOpenAckResponseAmino): _189.MsgConnectionOpenAckResponse;
                    toAmino(_: _189.MsgConnectionOpenAckResponse): _189.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _189.MsgConnectionOpenAckResponseAminoMsg): _189.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _189.MsgConnectionOpenAckResponse): _189.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _189.MsgConnectionOpenAckResponseProtoMsg): _189.MsgConnectionOpenAckResponse;
                    toProto(message: _189.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _189.MsgConnectionOpenAckResponse): _189.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    typeUrl: string;
                    encode(message: _189.MsgConnectionOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.MsgConnectionOpenConfirm;
                    fromPartial(object: Partial<_189.MsgConnectionOpenConfirm>): _189.MsgConnectionOpenConfirm;
                    fromAmino(object: _189.MsgConnectionOpenConfirmAmino): _189.MsgConnectionOpenConfirm;
                    toAmino(message: _189.MsgConnectionOpenConfirm): _189.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _189.MsgConnectionOpenConfirmAminoMsg): _189.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _189.MsgConnectionOpenConfirm): _189.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _189.MsgConnectionOpenConfirmProtoMsg): _189.MsgConnectionOpenConfirm;
                    toProto(message: _189.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _189.MsgConnectionOpenConfirm): _189.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _189.MsgConnectionOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: Partial<_189.MsgConnectionOpenConfirmResponse>): _189.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _189.MsgConnectionOpenConfirmResponseAmino): _189.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _189.MsgConnectionOpenConfirmResponse): _189.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _189.MsgConnectionOpenConfirmResponseAminoMsg): _189.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _189.MsgConnectionOpenConfirmResponse): _189.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _189.MsgConnectionOpenConfirmResponseProtoMsg): _189.MsgConnectionOpenConfirmResponse;
                    toProto(message: _189.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _189.MsgConnectionOpenConfirmResponse): _189.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                MsgUpdateParams: {
                    typeUrl: string;
                    encode(message: _189.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.MsgUpdateParams;
                    fromPartial(object: Partial<_189.MsgUpdateParams>): _189.MsgUpdateParams;
                    fromAmino(object: _189.MsgUpdateParamsAmino): _189.MsgUpdateParams;
                    toAmino(message: _189.MsgUpdateParams): _189.MsgUpdateParamsAmino;
                    fromAminoMsg(object: _189.MsgUpdateParamsAminoMsg): _189.MsgUpdateParams;
                    toAminoMsg(message: _189.MsgUpdateParams): _189.MsgUpdateParamsAminoMsg;
                    fromProtoMsg(message: _189.MsgUpdateParamsProtoMsg): _189.MsgUpdateParams;
                    toProto(message: _189.MsgUpdateParams): Uint8Array;
                    toProtoMsg(message: _189.MsgUpdateParams): _189.MsgUpdateParamsProtoMsg;
                };
                MsgUpdateParamsResponse: {
                    typeUrl: string;
                    encode(_: _189.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.MsgUpdateParamsResponse;
                    fromPartial(_: Partial<_189.MsgUpdateParamsResponse>): _189.MsgUpdateParamsResponse;
                    fromAmino(_: _189.MsgUpdateParamsResponseAmino): _189.MsgUpdateParamsResponse;
                    toAmino(_: _189.MsgUpdateParamsResponse): _189.MsgUpdateParamsResponseAmino;
                    fromAminoMsg(object: _189.MsgUpdateParamsResponseAminoMsg): _189.MsgUpdateParamsResponse;
                    toAminoMsg(message: _189.MsgUpdateParamsResponse): _189.MsgUpdateParamsResponseAminoMsg;
                    fromProtoMsg(message: _189.MsgUpdateParamsResponseProtoMsg): _189.MsgUpdateParamsResponse;
                    toProto(message: _189.MsgUpdateParamsResponse): Uint8Array;
                    toProtoMsg(message: _189.MsgUpdateParamsResponse): _189.MsgUpdateParamsResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    typeUrl: string;
                    encode(message: _188.QueryConnectionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.QueryConnectionRequest;
                    fromPartial(object: Partial<_188.QueryConnectionRequest>): _188.QueryConnectionRequest;
                    fromAmino(object: _188.QueryConnectionRequestAmino): _188.QueryConnectionRequest;
                    toAmino(message: _188.QueryConnectionRequest): _188.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _188.QueryConnectionRequestAminoMsg): _188.QueryConnectionRequest;
                    toAminoMsg(message: _188.QueryConnectionRequest): _188.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _188.QueryConnectionRequestProtoMsg): _188.QueryConnectionRequest;
                    toProto(message: _188.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _188.QueryConnectionRequest): _188.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    typeUrl: string;
                    encode(message: _188.QueryConnectionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.QueryConnectionResponse;
                    fromPartial(object: Partial<_188.QueryConnectionResponse>): _188.QueryConnectionResponse;
                    fromAmino(object: _188.QueryConnectionResponseAmino): _188.QueryConnectionResponse;
                    toAmino(message: _188.QueryConnectionResponse): _188.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _188.QueryConnectionResponseAminoMsg): _188.QueryConnectionResponse;
                    toAminoMsg(message: _188.QueryConnectionResponse): _188.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _188.QueryConnectionResponseProtoMsg): _188.QueryConnectionResponse;
                    toProto(message: _188.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _188.QueryConnectionResponse): _188.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _188.QueryConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.QueryConnectionsRequest;
                    fromPartial(object: Partial<_188.QueryConnectionsRequest>): _188.QueryConnectionsRequest;
                    fromAmino(object: _188.QueryConnectionsRequestAmino): _188.QueryConnectionsRequest;
                    toAmino(message: _188.QueryConnectionsRequest): _188.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _188.QueryConnectionsRequestAminoMsg): _188.QueryConnectionsRequest;
                    toAminoMsg(message: _188.QueryConnectionsRequest): _188.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _188.QueryConnectionsRequestProtoMsg): _188.QueryConnectionsRequest;
                    toProto(message: _188.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _188.QueryConnectionsRequest): _188.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _188.QueryConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.QueryConnectionsResponse;
                    fromPartial(object: Partial<_188.QueryConnectionsResponse>): _188.QueryConnectionsResponse;
                    fromAmino(object: _188.QueryConnectionsResponseAmino): _188.QueryConnectionsResponse;
                    toAmino(message: _188.QueryConnectionsResponse): _188.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _188.QueryConnectionsResponseAminoMsg): _188.QueryConnectionsResponse;
                    toAminoMsg(message: _188.QueryConnectionsResponse): _188.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _188.QueryConnectionsResponseProtoMsg): _188.QueryConnectionsResponse;
                    toProto(message: _188.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _188.QueryConnectionsResponse): _188.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _188.QueryClientConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.QueryClientConnectionsRequest;
                    fromPartial(object: Partial<_188.QueryClientConnectionsRequest>): _188.QueryClientConnectionsRequest;
                    fromAmino(object: _188.QueryClientConnectionsRequestAmino): _188.QueryClientConnectionsRequest;
                    toAmino(message: _188.QueryClientConnectionsRequest): _188.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _188.QueryClientConnectionsRequestAminoMsg): _188.QueryClientConnectionsRequest;
                    toAminoMsg(message: _188.QueryClientConnectionsRequest): _188.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _188.QueryClientConnectionsRequestProtoMsg): _188.QueryClientConnectionsRequest;
                    toProto(message: _188.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _188.QueryClientConnectionsRequest): _188.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _188.QueryClientConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.QueryClientConnectionsResponse;
                    fromPartial(object: Partial<_188.QueryClientConnectionsResponse>): _188.QueryClientConnectionsResponse;
                    fromAmino(object: _188.QueryClientConnectionsResponseAmino): _188.QueryClientConnectionsResponse;
                    toAmino(message: _188.QueryClientConnectionsResponse): _188.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _188.QueryClientConnectionsResponseAminoMsg): _188.QueryClientConnectionsResponse;
                    toAminoMsg(message: _188.QueryClientConnectionsResponse): _188.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _188.QueryClientConnectionsResponseProtoMsg): _188.QueryClientConnectionsResponse;
                    toProto(message: _188.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _188.QueryClientConnectionsResponse): _188.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    typeUrl: string;
                    encode(message: _188.QueryConnectionClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.QueryConnectionClientStateRequest;
                    fromPartial(object: Partial<_188.QueryConnectionClientStateRequest>): _188.QueryConnectionClientStateRequest;
                    fromAmino(object: _188.QueryConnectionClientStateRequestAmino): _188.QueryConnectionClientStateRequest;
                    toAmino(message: _188.QueryConnectionClientStateRequest): _188.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _188.QueryConnectionClientStateRequestAminoMsg): _188.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _188.QueryConnectionClientStateRequest): _188.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _188.QueryConnectionClientStateRequestProtoMsg): _188.QueryConnectionClientStateRequest;
                    toProto(message: _188.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _188.QueryConnectionClientStateRequest): _188.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    typeUrl: string;
                    encode(message: _188.QueryConnectionClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.QueryConnectionClientStateResponse;
                    fromPartial(object: Partial<_188.QueryConnectionClientStateResponse>): _188.QueryConnectionClientStateResponse;
                    fromAmino(object: _188.QueryConnectionClientStateResponseAmino): _188.QueryConnectionClientStateResponse;
                    toAmino(message: _188.QueryConnectionClientStateResponse): _188.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _188.QueryConnectionClientStateResponseAminoMsg): _188.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _188.QueryConnectionClientStateResponse): _188.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _188.QueryConnectionClientStateResponseProtoMsg): _188.QueryConnectionClientStateResponse;
                    toProto(message: _188.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _188.QueryConnectionClientStateResponse): _188.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _188.QueryConnectionConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.QueryConnectionConsensusStateRequest;
                    fromPartial(object: Partial<_188.QueryConnectionConsensusStateRequest>): _188.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _188.QueryConnectionConsensusStateRequestAmino): _188.QueryConnectionConsensusStateRequest;
                    toAmino(message: _188.QueryConnectionConsensusStateRequest): _188.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _188.QueryConnectionConsensusStateRequestAminoMsg): _188.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _188.QueryConnectionConsensusStateRequest): _188.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _188.QueryConnectionConsensusStateRequestProtoMsg): _188.QueryConnectionConsensusStateRequest;
                    toProto(message: _188.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _188.QueryConnectionConsensusStateRequest): _188.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _188.QueryConnectionConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.QueryConnectionConsensusStateResponse;
                    fromPartial(object: Partial<_188.QueryConnectionConsensusStateResponse>): _188.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _188.QueryConnectionConsensusStateResponseAmino): _188.QueryConnectionConsensusStateResponse;
                    toAmino(message: _188.QueryConnectionConsensusStateResponse): _188.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _188.QueryConnectionConsensusStateResponseAminoMsg): _188.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _188.QueryConnectionConsensusStateResponse): _188.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _188.QueryConnectionConsensusStateResponseProtoMsg): _188.QueryConnectionConsensusStateResponse;
                    toProto(message: _188.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _188.QueryConnectionConsensusStateResponse): _188.QueryConnectionConsensusStateResponseProtoMsg;
                };
                QueryConnectionParamsRequest: {
                    typeUrl: string;
                    encode(_: _188.QueryConnectionParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.QueryConnectionParamsRequest;
                    fromPartial(_: Partial<_188.QueryConnectionParamsRequest>): _188.QueryConnectionParamsRequest;
                    fromAmino(_: _188.QueryConnectionParamsRequestAmino): _188.QueryConnectionParamsRequest;
                    toAmino(_: _188.QueryConnectionParamsRequest): _188.QueryConnectionParamsRequestAmino;
                    fromAminoMsg(object: _188.QueryConnectionParamsRequestAminoMsg): _188.QueryConnectionParamsRequest;
                    toAminoMsg(message: _188.QueryConnectionParamsRequest): _188.QueryConnectionParamsRequestAminoMsg;
                    fromProtoMsg(message: _188.QueryConnectionParamsRequestProtoMsg): _188.QueryConnectionParamsRequest;
                    toProto(message: _188.QueryConnectionParamsRequest): Uint8Array;
                    toProtoMsg(message: _188.QueryConnectionParamsRequest): _188.QueryConnectionParamsRequestProtoMsg;
                };
                QueryConnectionParamsResponse: {
                    typeUrl: string;
                    encode(message: _188.QueryConnectionParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.QueryConnectionParamsResponse;
                    fromPartial(object: Partial<_188.QueryConnectionParamsResponse>): _188.QueryConnectionParamsResponse;
                    fromAmino(object: _188.QueryConnectionParamsResponseAmino): _188.QueryConnectionParamsResponse;
                    toAmino(message: _188.QueryConnectionParamsResponse): _188.QueryConnectionParamsResponseAmino;
                    fromAminoMsg(object: _188.QueryConnectionParamsResponseAminoMsg): _188.QueryConnectionParamsResponse;
                    toAminoMsg(message: _188.QueryConnectionParamsResponse): _188.QueryConnectionParamsResponseAminoMsg;
                    fromProtoMsg(message: _188.QueryConnectionParamsResponseProtoMsg): _188.QueryConnectionParamsResponse;
                    toProto(message: _188.QueryConnectionParamsResponse): Uint8Array;
                    toProtoMsg(message: _188.QueryConnectionParamsResponse): _188.QueryConnectionParamsResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _187.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.GenesisState;
                    fromPartial(object: Partial<_187.GenesisState>): _187.GenesisState;
                    fromAmino(object: _187.GenesisStateAmino): _187.GenesisState;
                    toAmino(message: _187.GenesisState): _187.GenesisStateAmino;
                    fromAminoMsg(object: _187.GenesisStateAminoMsg): _187.GenesisState;
                    toAminoMsg(message: _187.GenesisState): _187.GenesisStateAminoMsg;
                    fromProtoMsg(message: _187.GenesisStateProtoMsg): _187.GenesisState;
                    toProto(message: _187.GenesisState): Uint8Array;
                    toProtoMsg(message: _187.GenesisState): _187.GenesisStateProtoMsg;
                };
                stateFromJSON(object: any): _186.State;
                stateToJSON(object: _186.State): string;
                State: typeof _186.State;
                StateSDKType: typeof _186.State;
                StateAmino: typeof _186.State;
                ConnectionEnd: {
                    typeUrl: string;
                    encode(message: _186.ConnectionEnd, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.ConnectionEnd;
                    fromPartial(object: Partial<_186.ConnectionEnd>): _186.ConnectionEnd;
                    fromAmino(object: _186.ConnectionEndAmino): _186.ConnectionEnd;
                    toAmino(message: _186.ConnectionEnd): _186.ConnectionEndAmino;
                    fromAminoMsg(object: _186.ConnectionEndAminoMsg): _186.ConnectionEnd;
                    toAminoMsg(message: _186.ConnectionEnd): _186.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _186.ConnectionEndProtoMsg): _186.ConnectionEnd;
                    toProto(message: _186.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _186.ConnectionEnd): _186.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    typeUrl: string;
                    encode(message: _186.IdentifiedConnection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.IdentifiedConnection;
                    fromPartial(object: Partial<_186.IdentifiedConnection>): _186.IdentifiedConnection;
                    fromAmino(object: _186.IdentifiedConnectionAmino): _186.IdentifiedConnection;
                    toAmino(message: _186.IdentifiedConnection): _186.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _186.IdentifiedConnectionAminoMsg): _186.IdentifiedConnection;
                    toAminoMsg(message: _186.IdentifiedConnection): _186.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _186.IdentifiedConnectionProtoMsg): _186.IdentifiedConnection;
                    toProto(message: _186.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _186.IdentifiedConnection): _186.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _186.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.Counterparty;
                    fromPartial(object: Partial<_186.Counterparty>): _186.Counterparty;
                    fromAmino(object: _186.CounterpartyAmino): _186.Counterparty;
                    toAmino(message: _186.Counterparty): _186.CounterpartyAmino;
                    fromAminoMsg(object: _186.CounterpartyAminoMsg): _186.Counterparty;
                    toAminoMsg(message: _186.Counterparty): _186.CounterpartyAminoMsg;
                    fromProtoMsg(message: _186.CounterpartyProtoMsg): _186.Counterparty;
                    toProto(message: _186.Counterparty): Uint8Array;
                    toProtoMsg(message: _186.Counterparty): _186.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    typeUrl: string;
                    encode(message: _186.ClientPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.ClientPaths;
                    fromPartial(object: Partial<_186.ClientPaths>): _186.ClientPaths;
                    fromAmino(object: _186.ClientPathsAmino): _186.ClientPaths;
                    toAmino(message: _186.ClientPaths): _186.ClientPathsAmino;
                    fromAminoMsg(object: _186.ClientPathsAminoMsg): _186.ClientPaths;
                    toAminoMsg(message: _186.ClientPaths): _186.ClientPathsAminoMsg;
                    fromProtoMsg(message: _186.ClientPathsProtoMsg): _186.ClientPaths;
                    toProto(message: _186.ClientPaths): Uint8Array;
                    toProtoMsg(message: _186.ClientPaths): _186.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    typeUrl: string;
                    encode(message: _186.ConnectionPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.ConnectionPaths;
                    fromPartial(object: Partial<_186.ConnectionPaths>): _186.ConnectionPaths;
                    fromAmino(object: _186.ConnectionPathsAmino): _186.ConnectionPaths;
                    toAmino(message: _186.ConnectionPaths): _186.ConnectionPathsAmino;
                    fromAminoMsg(object: _186.ConnectionPathsAminoMsg): _186.ConnectionPaths;
                    toAminoMsg(message: _186.ConnectionPaths): _186.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _186.ConnectionPathsProtoMsg): _186.ConnectionPaths;
                    toProto(message: _186.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _186.ConnectionPaths): _186.ConnectionPathsProtoMsg;
                };
                Version: {
                    typeUrl: string;
                    encode(message: _186.Version, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.Version;
                    fromPartial(object: Partial<_186.Version>): _186.Version;
                    fromAmino(object: _186.VersionAmino): _186.Version;
                    toAmino(message: _186.Version): _186.VersionAmino;
                    fromAminoMsg(object: _186.VersionAminoMsg): _186.Version;
                    toAminoMsg(message: _186.Version): _186.VersionAminoMsg;
                    fromProtoMsg(message: _186.VersionProtoMsg): _186.Version;
                    toProto(message: _186.Version): Uint8Array;
                    toProtoMsg(message: _186.Version): _186.VersionProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _186.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.Params;
                    fromPartial(object: Partial<_186.Params>): _186.Params;
                    fromAmino(object: _186.ParamsAmino): _186.Params;
                    toAmino(message: _186.Params): _186.ParamsAmino;
                    fromAminoMsg(object: _186.ParamsAminoMsg): _186.Params;
                    toAminoMsg(message: _186.Params): _186.ParamsAminoMsg;
                    fromProtoMsg(message: _186.ParamsProtoMsg): _186.Params;
                    toProto(message: _186.Params): Uint8Array;
                    toProtoMsg(message: _186.Params): _186.ParamsProtoMsg;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    typeUrl: string;
                    encode(message: _190.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.GenesisState;
                    fromPartial(object: Partial<_190.GenesisState>): _190.GenesisState;
                    fromAmino(object: _190.GenesisStateAmino): _190.GenesisState;
                    toAmino(message: _190.GenesisState): _190.GenesisStateAmino;
                    fromAminoMsg(object: _190.GenesisStateAminoMsg): _190.GenesisState;
                    toAminoMsg(message: _190.GenesisState): _190.GenesisStateAminoMsg;
                    fromProtoMsg(message: _190.GenesisStateProtoMsg): _190.GenesisState;
                    toProto(message: _190.GenesisState): Uint8Array;
                    toProtoMsg(message: _190.GenesisState): _190.GenesisStateProtoMsg;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v2: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _191.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _191.ClientState;
                    fromPartial(object: Partial<_191.ClientState>): _191.ClientState;
                    fromAmino(object: _191.ClientStateAmino): _191.ClientState;
                    toAmino(message: _191.ClientState): _191.ClientStateAmino;
                    fromAminoMsg(object: _191.ClientStateAminoMsg): _191.ClientState;
                    toAminoMsg(message: _191.ClientState): _191.ClientStateAminoMsg;
                    fromProtoMsg(message: _191.ClientStateProtoMsg): _191.ClientState;
                    toProto(message: _191.ClientState): Uint8Array;
                    toProtoMsg(message: _191.ClientState): _191.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v2: {
                dataTypeFromJSON(object: any): _192.DataType;
                dataTypeToJSON(object: _192.DataType): string;
                DataType: typeof _192.DataType;
                DataTypeSDKType: typeof _192.DataType;
                DataTypeAmino: typeof _192.DataType;
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
                Header: {
                    typeUrl: string;
                    encode(message: _192.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.Header;
                    fromPartial(object: Partial<_192.Header>): _192.Header;
                    fromAmino(object: _192.HeaderAmino): _192.Header;
                    toAmino(message: _192.Header): _192.HeaderAmino;
                    fromAminoMsg(object: _192.HeaderAminoMsg): _192.Header;
                    toAminoMsg(message: _192.Header): _192.HeaderAminoMsg;
                    fromProtoMsg(message: _192.HeaderProtoMsg): _192.Header;
                    toProto(message: _192.Header): Uint8Array;
                    toProtoMsg(message: _192.Header): _192.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _192.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.Misbehaviour;
                    fromPartial(object: Partial<_192.Misbehaviour>): _192.Misbehaviour;
                    fromAmino(object: _192.MisbehaviourAmino): _192.Misbehaviour;
                    toAmino(message: _192.Misbehaviour): _192.MisbehaviourAmino;
                    fromAminoMsg(object: _192.MisbehaviourAminoMsg): _192.Misbehaviour;
                    toAminoMsg(message: _192.Misbehaviour): _192.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _192.MisbehaviourProtoMsg): _192.Misbehaviour;
                    toProto(message: _192.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _192.Misbehaviour): _192.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _192.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.SignatureAndData;
                    fromPartial(object: Partial<_192.SignatureAndData>): _192.SignatureAndData;
                    fromAmino(object: _192.SignatureAndDataAmino): _192.SignatureAndData;
                    toAmino(message: _192.SignatureAndData): _192.SignatureAndDataAmino;
                    fromAminoMsg(object: _192.SignatureAndDataAminoMsg): _192.SignatureAndData;
                    toAminoMsg(message: _192.SignatureAndData): _192.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _192.SignatureAndDataProtoMsg): _192.SignatureAndData;
                    toProto(message: _192.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _192.SignatureAndData): _192.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _192.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.TimestampedSignatureData;
                    fromPartial(object: Partial<_192.TimestampedSignatureData>): _192.TimestampedSignatureData;
                    fromAmino(object: _192.TimestampedSignatureDataAmino): _192.TimestampedSignatureData;
                    toAmino(message: _192.TimestampedSignatureData): _192.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _192.TimestampedSignatureDataAminoMsg): _192.TimestampedSignatureData;
                    toAminoMsg(message: _192.TimestampedSignatureData): _192.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _192.TimestampedSignatureDataProtoMsg): _192.TimestampedSignatureData;
                    toProto(message: _192.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _192.TimestampedSignatureData): _192.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _192.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.SignBytes;
                    fromPartial(object: Partial<_192.SignBytes>): _192.SignBytes;
                    fromAmino(object: _192.SignBytesAmino): _192.SignBytes;
                    toAmino(message: _192.SignBytes): _192.SignBytesAmino;
                    fromAminoMsg(object: _192.SignBytesAminoMsg): _192.SignBytes;
                    toAminoMsg(message: _192.SignBytes): _192.SignBytesAminoMsg;
                    fromProtoMsg(message: _192.SignBytesProtoMsg): _192.SignBytes;
                    toProto(message: _192.SignBytes): Uint8Array;
                    toProtoMsg(message: _192.SignBytes): _192.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _192.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.HeaderData;
                    fromPartial(object: Partial<_192.HeaderData>): _192.HeaderData;
                    fromAmino(object: _192.HeaderDataAmino): _192.HeaderData;
                    toAmino(message: _192.HeaderData): _192.HeaderDataAmino;
                    fromAminoMsg(object: _192.HeaderDataAminoMsg): _192.HeaderData;
                    toAminoMsg(message: _192.HeaderData): _192.HeaderDataAminoMsg;
                    fromProtoMsg(message: _192.HeaderDataProtoMsg): _192.HeaderData;
                    toProto(message: _192.HeaderData): Uint8Array;
                    toProtoMsg(message: _192.HeaderData): _192.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _192.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.ClientStateData;
                    fromPartial(object: Partial<_192.ClientStateData>): _192.ClientStateData;
                    fromAmino(object: _192.ClientStateDataAmino): _192.ClientStateData;
                    toAmino(message: _192.ClientStateData): _192.ClientStateDataAmino;
                    fromAminoMsg(object: _192.ClientStateDataAminoMsg): _192.ClientStateData;
                    toAminoMsg(message: _192.ClientStateData): _192.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _192.ClientStateDataProtoMsg): _192.ClientStateData;
                    toProto(message: _192.ClientStateData): Uint8Array;
                    toProtoMsg(message: _192.ClientStateData): _192.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _192.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.ConsensusStateData;
                    fromPartial(object: Partial<_192.ConsensusStateData>): _192.ConsensusStateData;
                    fromAmino(object: _192.ConsensusStateDataAmino): _192.ConsensusStateData;
                    toAmino(message: _192.ConsensusStateData): _192.ConsensusStateDataAmino;
                    fromAminoMsg(object: _192.ConsensusStateDataAminoMsg): _192.ConsensusStateData;
                    toAminoMsg(message: _192.ConsensusStateData): _192.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _192.ConsensusStateDataProtoMsg): _192.ConsensusStateData;
                    toProto(message: _192.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _192.ConsensusStateData): _192.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _192.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.ConnectionStateData;
                    fromPartial(object: Partial<_192.ConnectionStateData>): _192.ConnectionStateData;
                    fromAmino(object: _192.ConnectionStateDataAmino): _192.ConnectionStateData;
                    toAmino(message: _192.ConnectionStateData): _192.ConnectionStateDataAmino;
                    fromAminoMsg(object: _192.ConnectionStateDataAminoMsg): _192.ConnectionStateData;
                    toAminoMsg(message: _192.ConnectionStateData): _192.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _192.ConnectionStateDataProtoMsg): _192.ConnectionStateData;
                    toProto(message: _192.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _192.ConnectionStateData): _192.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _192.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.ChannelStateData;
                    fromPartial(object: Partial<_192.ChannelStateData>): _192.ChannelStateData;
                    fromAmino(object: _192.ChannelStateDataAmino): _192.ChannelStateData;
                    toAmino(message: _192.ChannelStateData): _192.ChannelStateDataAmino;
                    fromAminoMsg(object: _192.ChannelStateDataAminoMsg): _192.ChannelStateData;
                    toAminoMsg(message: _192.ChannelStateData): _192.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _192.ChannelStateDataProtoMsg): _192.ChannelStateData;
                    toProto(message: _192.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _192.ChannelStateData): _192.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _192.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.PacketCommitmentData;
                    fromPartial(object: Partial<_192.PacketCommitmentData>): _192.PacketCommitmentData;
                    fromAmino(object: _192.PacketCommitmentDataAmino): _192.PacketCommitmentData;
                    toAmino(message: _192.PacketCommitmentData): _192.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _192.PacketCommitmentDataAminoMsg): _192.PacketCommitmentData;
                    toAminoMsg(message: _192.PacketCommitmentData): _192.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _192.PacketCommitmentDataProtoMsg): _192.PacketCommitmentData;
                    toProto(message: _192.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _192.PacketCommitmentData): _192.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _192.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.PacketAcknowledgementData;
                    fromPartial(object: Partial<_192.PacketAcknowledgementData>): _192.PacketAcknowledgementData;
                    fromAmino(object: _192.PacketAcknowledgementDataAmino): _192.PacketAcknowledgementData;
                    toAmino(message: _192.PacketAcknowledgementData): _192.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _192.PacketAcknowledgementDataAminoMsg): _192.PacketAcknowledgementData;
                    toAminoMsg(message: _192.PacketAcknowledgementData): _192.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _192.PacketAcknowledgementDataProtoMsg): _192.PacketAcknowledgementData;
                    toProto(message: _192.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _192.PacketAcknowledgementData): _192.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _192.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_192.PacketReceiptAbsenceData>): _192.PacketReceiptAbsenceData;
                    fromAmino(object: _192.PacketReceiptAbsenceDataAmino): _192.PacketReceiptAbsenceData;
                    toAmino(message: _192.PacketReceiptAbsenceData): _192.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _192.PacketReceiptAbsenceDataAminoMsg): _192.PacketReceiptAbsenceData;
                    toAminoMsg(message: _192.PacketReceiptAbsenceData): _192.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _192.PacketReceiptAbsenceDataProtoMsg): _192.PacketReceiptAbsenceData;
                    toProto(message: _192.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _192.PacketReceiptAbsenceData): _192.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _192.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.NextSequenceRecvData;
                    fromPartial(object: Partial<_192.NextSequenceRecvData>): _192.NextSequenceRecvData;
                    fromAmino(object: _192.NextSequenceRecvDataAmino): _192.NextSequenceRecvData;
                    toAmino(message: _192.NextSequenceRecvData): _192.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _192.NextSequenceRecvDataAminoMsg): _192.NextSequenceRecvData;
                    toAminoMsg(message: _192.NextSequenceRecvData): _192.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _192.NextSequenceRecvDataProtoMsg): _192.NextSequenceRecvData;
                    toProto(message: _192.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _192.NextSequenceRecvData): _192.NextSequenceRecvDataProtoMsg;
                };
            };
            const v3: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _193.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.ClientState;
                    fromPartial(object: Partial<_193.ClientState>): _193.ClientState;
                    fromAmino(object: _193.ClientStateAmino): _193.ClientState;
                    toAmino(message: _193.ClientState): _193.ClientStateAmino;
                    fromAminoMsg(object: _193.ClientStateAminoMsg): _193.ClientState;
                    toAminoMsg(message: _193.ClientState): _193.ClientStateAminoMsg;
                    fromProtoMsg(message: _193.ClientStateProtoMsg): _193.ClientState;
                    toProto(message: _193.ClientState): Uint8Array;
                    toProtoMsg(message: _193.ClientState): _193.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _193.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.ConsensusState;
                    fromPartial(object: Partial<_193.ConsensusState>): _193.ConsensusState;
                    fromAmino(object: _193.ConsensusStateAmino): _193.ConsensusState;
                    toAmino(message: _193.ConsensusState): _193.ConsensusStateAmino;
                    fromAminoMsg(object: _193.ConsensusStateAminoMsg): _193.ConsensusState;
                    toAminoMsg(message: _193.ConsensusState): _193.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _193.ConsensusStateProtoMsg): _193.ConsensusState;
                    toProto(message: _193.ConsensusState): Uint8Array;
                    toProtoMsg(message: _193.ConsensusState): _193.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _193.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.Header;
                    fromPartial(object: Partial<_193.Header>): _193.Header;
                    fromAmino(object: _193.HeaderAmino): _193.Header;
                    toAmino(message: _193.Header): _193.HeaderAmino;
                    fromAminoMsg(object: _193.HeaderAminoMsg): _193.Header;
                    toAminoMsg(message: _193.Header): _193.HeaderAminoMsg;
                    fromProtoMsg(message: _193.HeaderProtoMsg): _193.Header;
                    toProto(message: _193.Header): Uint8Array;
                    toProtoMsg(message: _193.Header): _193.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _193.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.Misbehaviour;
                    fromPartial(object: Partial<_193.Misbehaviour>): _193.Misbehaviour;
                    fromAmino(object: _193.MisbehaviourAmino): _193.Misbehaviour;
                    toAmino(message: _193.Misbehaviour): _193.MisbehaviourAmino;
                    fromAminoMsg(object: _193.MisbehaviourAminoMsg): _193.Misbehaviour;
                    toAminoMsg(message: _193.Misbehaviour): _193.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _193.MisbehaviourProtoMsg): _193.Misbehaviour;
                    toProto(message: _193.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _193.Misbehaviour): _193.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _193.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.SignatureAndData;
                    fromPartial(object: Partial<_193.SignatureAndData>): _193.SignatureAndData;
                    fromAmino(object: _193.SignatureAndDataAmino): _193.SignatureAndData;
                    toAmino(message: _193.SignatureAndData): _193.SignatureAndDataAmino;
                    fromAminoMsg(object: _193.SignatureAndDataAminoMsg): _193.SignatureAndData;
                    toAminoMsg(message: _193.SignatureAndData): _193.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _193.SignatureAndDataProtoMsg): _193.SignatureAndData;
                    toProto(message: _193.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _193.SignatureAndData): _193.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _193.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.TimestampedSignatureData;
                    fromPartial(object: Partial<_193.TimestampedSignatureData>): _193.TimestampedSignatureData;
                    fromAmino(object: _193.TimestampedSignatureDataAmino): _193.TimestampedSignatureData;
                    toAmino(message: _193.TimestampedSignatureData): _193.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _193.TimestampedSignatureDataAminoMsg): _193.TimestampedSignatureData;
                    toAminoMsg(message: _193.TimestampedSignatureData): _193.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _193.TimestampedSignatureDataProtoMsg): _193.TimestampedSignatureData;
                    toProto(message: _193.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _193.TimestampedSignatureData): _193.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _193.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.SignBytes;
                    fromPartial(object: Partial<_193.SignBytes>): _193.SignBytes;
                    fromAmino(object: _193.SignBytesAmino): _193.SignBytes;
                    toAmino(message: _193.SignBytes): _193.SignBytesAmino;
                    fromAminoMsg(object: _193.SignBytesAminoMsg): _193.SignBytes;
                    toAminoMsg(message: _193.SignBytes): _193.SignBytesAminoMsg;
                    fromProtoMsg(message: _193.SignBytesProtoMsg): _193.SignBytes;
                    toProto(message: _193.SignBytes): Uint8Array;
                    toProtoMsg(message: _193.SignBytes): _193.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _193.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.HeaderData;
                    fromPartial(object: Partial<_193.HeaderData>): _193.HeaderData;
                    fromAmino(object: _193.HeaderDataAmino): _193.HeaderData;
                    toAmino(message: _193.HeaderData): _193.HeaderDataAmino;
                    fromAminoMsg(object: _193.HeaderDataAminoMsg): _193.HeaderData;
                    toAminoMsg(message: _193.HeaderData): _193.HeaderDataAminoMsg;
                    fromProtoMsg(message: _193.HeaderDataProtoMsg): _193.HeaderData;
                    toProto(message: _193.HeaderData): Uint8Array;
                    toProtoMsg(message: _193.HeaderData): _193.HeaderDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _194.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _194.ClientState;
                    fromPartial(object: Partial<_194.ClientState>): _194.ClientState;
                    fromAmino(object: _194.ClientStateAmino): _194.ClientState;
                    toAmino(message: _194.ClientState): _194.ClientStateAmino;
                    fromAminoMsg(object: _194.ClientStateAminoMsg): _194.ClientState;
                    toAminoMsg(message: _194.ClientState): _194.ClientStateAminoMsg;
                    fromProtoMsg(message: _194.ClientStateProtoMsg): _194.ClientState;
                    toProto(message: _194.ClientState): Uint8Array;
                    toProtoMsg(message: _194.ClientState): _194.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _194.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _194.ConsensusState;
                    fromPartial(object: Partial<_194.ConsensusState>): _194.ConsensusState;
                    fromAmino(object: _194.ConsensusStateAmino): _194.ConsensusState;
                    toAmino(message: _194.ConsensusState): _194.ConsensusStateAmino;
                    fromAminoMsg(object: _194.ConsensusStateAminoMsg): _194.ConsensusState;
                    toAminoMsg(message: _194.ConsensusState): _194.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _194.ConsensusStateProtoMsg): _194.ConsensusState;
                    toProto(message: _194.ConsensusState): Uint8Array;
                    toProtoMsg(message: _194.ConsensusState): _194.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _194.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _194.Misbehaviour;
                    fromPartial(object: Partial<_194.Misbehaviour>): _194.Misbehaviour;
                    fromAmino(object: _194.MisbehaviourAmino): _194.Misbehaviour;
                    toAmino(message: _194.Misbehaviour): _194.MisbehaviourAmino;
                    fromAminoMsg(object: _194.MisbehaviourAminoMsg): _194.Misbehaviour;
                    toAminoMsg(message: _194.Misbehaviour): _194.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _194.MisbehaviourProtoMsg): _194.Misbehaviour;
                    toProto(message: _194.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _194.Misbehaviour): _194.MisbehaviourProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _194.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _194.Header;
                    fromPartial(object: Partial<_194.Header>): _194.Header;
                    fromAmino(object: _194.HeaderAmino): _194.Header;
                    toAmino(message: _194.Header): _194.HeaderAmino;
                    fromAminoMsg(object: _194.HeaderAminoMsg): _194.Header;
                    toAminoMsg(message: _194.Header): _194.HeaderAminoMsg;
                    fromProtoMsg(message: _194.HeaderProtoMsg): _194.Header;
                    toProto(message: _194.Header): Uint8Array;
                    toProtoMsg(message: _194.Header): _194.HeaderProtoMsg;
                };
                Fraction: {
                    typeUrl: string;
                    encode(message: _194.Fraction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _194.Fraction;
                    fromPartial(object: Partial<_194.Fraction>): _194.Fraction;
                    fromAmino(object: _194.FractionAmino): _194.Fraction;
                    toAmino(message: _194.Fraction): _194.FractionAmino;
                    fromAminoMsg(object: _194.FractionAminoMsg): _194.Fraction;
                    toAminoMsg(message: _194.Fraction): _194.FractionAminoMsg;
                    fromProtoMsg(message: _194.FractionProtoMsg): _194.Fraction;
                    toProto(message: _194.Fraction): Uint8Array;
                    toProtoMsg(message: _194.Fraction): _194.FractionProtoMsg;
                };
            };
        }
        namespace wasm {
            const v1: {
                MsgClientImpl: typeof _396.MsgClientImpl;
                QueryClientImpl: typeof _388.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    checksums(request?: _196.QueryChecksumsRequest): Promise<_196.QueryChecksumsResponse>;
                    code(request: _196.QueryCodeRequest): Promise<_196.QueryCodeResponse>;
                };
                registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        storeCode(value: _197.MsgStoreCode): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        removeChecksum(value: _197.MsgRemoveChecksum): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        migrateContract(value: _197.MsgMigrateContract): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        storeCode(value: _197.MsgStoreCode): {
                            typeUrl: string;
                            value: _197.MsgStoreCode;
                        };
                        removeChecksum(value: _197.MsgRemoveChecksum): {
                            typeUrl: string;
                            value: _197.MsgRemoveChecksum;
                        };
                        migrateContract(value: _197.MsgMigrateContract): {
                            typeUrl: string;
                            value: _197.MsgMigrateContract;
                        };
                    };
                    fromPartial: {
                        storeCode(value: _197.MsgStoreCode): {
                            typeUrl: string;
                            value: _197.MsgStoreCode;
                        };
                        removeChecksum(value: _197.MsgRemoveChecksum): {
                            typeUrl: string;
                            value: _197.MsgRemoveChecksum;
                        };
                        migrateContract(value: _197.MsgMigrateContract): {
                            typeUrl: string;
                            value: _197.MsgMigrateContract;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.lightclients.wasm.v1.MsgStoreCode": {
                        aminoType: string;
                        toAmino: (message: _197.MsgStoreCode) => _197.MsgStoreCodeAmino;
                        fromAmino: (object: _197.MsgStoreCodeAmino) => _197.MsgStoreCode;
                    };
                    "/ibc.lightclients.wasm.v1.MsgRemoveChecksum": {
                        aminoType: string;
                        toAmino: (message: _197.MsgRemoveChecksum) => _197.MsgRemoveChecksumAmino;
                        fromAmino: (object: _197.MsgRemoveChecksumAmino) => _197.MsgRemoveChecksum;
                    };
                    "/ibc.lightclients.wasm.v1.MsgMigrateContract": {
                        aminoType: string;
                        toAmino: (message: _197.MsgMigrateContract) => _197.MsgMigrateContractAmino;
                        fromAmino: (object: _197.MsgMigrateContractAmino) => _197.MsgMigrateContract;
                    };
                };
                ClientState: {
                    typeUrl: string;
                    encode(message: _198.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.ClientState;
                    fromPartial(object: Partial<_198.ClientState>): _198.ClientState;
                    fromAmino(object: _198.ClientStateAmino): _198.ClientState;
                    toAmino(message: _198.ClientState): _198.ClientStateAmino;
                    fromAminoMsg(object: _198.ClientStateAminoMsg): _198.ClientState;
                    toAminoMsg(message: _198.ClientState): _198.ClientStateAminoMsg;
                    fromProtoMsg(message: _198.ClientStateProtoMsg): _198.ClientState;
                    toProto(message: _198.ClientState): Uint8Array;
                    toProtoMsg(message: _198.ClientState): _198.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _198.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.ConsensusState;
                    fromPartial(object: Partial<_198.ConsensusState>): _198.ConsensusState;
                    fromAmino(object: _198.ConsensusStateAmino): _198.ConsensusState;
                    toAmino(message: _198.ConsensusState): _198.ConsensusStateAmino;
                    fromAminoMsg(object: _198.ConsensusStateAminoMsg): _198.ConsensusState;
                    toAminoMsg(message: _198.ConsensusState): _198.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _198.ConsensusStateProtoMsg): _198.ConsensusState;
                    toProto(message: _198.ConsensusState): Uint8Array;
                    toProtoMsg(message: _198.ConsensusState): _198.ConsensusStateProtoMsg;
                };
                ClientMessage: {
                    typeUrl: string;
                    encode(message: _198.ClientMessage, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.ClientMessage;
                    fromPartial(object: Partial<_198.ClientMessage>): _198.ClientMessage;
                    fromAmino(object: _198.ClientMessageAmino): _198.ClientMessage;
                    toAmino(message: _198.ClientMessage): _198.ClientMessageAmino;
                    fromAminoMsg(object: _198.ClientMessageAminoMsg): _198.ClientMessage;
                    toAminoMsg(message: _198.ClientMessage): _198.ClientMessageAminoMsg;
                    fromProtoMsg(message: _198.ClientMessageProtoMsg): _198.ClientMessage;
                    toProto(message: _198.ClientMessage): Uint8Array;
                    toProtoMsg(message: _198.ClientMessage): _198.ClientMessageProtoMsg;
                };
                Checksums: {
                    typeUrl: string;
                    encode(message: _198.Checksums, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.Checksums;
                    fromPartial(object: Partial<_198.Checksums>): _198.Checksums;
                    fromAmino(object: _198.ChecksumsAmino): _198.Checksums;
                    toAmino(message: _198.Checksums): _198.ChecksumsAmino;
                    fromAminoMsg(object: _198.ChecksumsAminoMsg): _198.Checksums;
                    toAminoMsg(message: _198.Checksums): _198.ChecksumsAminoMsg;
                    fromProtoMsg(message: _198.ChecksumsProtoMsg): _198.Checksums;
                    toProto(message: _198.Checksums): Uint8Array;
                    toProtoMsg(message: _198.Checksums): _198.ChecksumsProtoMsg;
                };
                MsgStoreCode: {
                    typeUrl: string;
                    encode(message: _197.MsgStoreCode, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.MsgStoreCode;
                    fromPartial(object: Partial<_197.MsgStoreCode>): _197.MsgStoreCode;
                    fromAmino(object: _197.MsgStoreCodeAmino): _197.MsgStoreCode;
                    toAmino(message: _197.MsgStoreCode): _197.MsgStoreCodeAmino;
                    fromAminoMsg(object: _197.MsgStoreCodeAminoMsg): _197.MsgStoreCode;
                    toAminoMsg(message: _197.MsgStoreCode): _197.MsgStoreCodeAminoMsg;
                    fromProtoMsg(message: _197.MsgStoreCodeProtoMsg): _197.MsgStoreCode;
                    toProto(message: _197.MsgStoreCode): Uint8Array;
                    toProtoMsg(message: _197.MsgStoreCode): _197.MsgStoreCodeProtoMsg;
                };
                MsgStoreCodeResponse: {
                    typeUrl: string;
                    encode(message: _197.MsgStoreCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.MsgStoreCodeResponse;
                    fromPartial(object: Partial<_197.MsgStoreCodeResponse>): _197.MsgStoreCodeResponse;
                    fromAmino(object: _197.MsgStoreCodeResponseAmino): _197.MsgStoreCodeResponse;
                    toAmino(message: _197.MsgStoreCodeResponse): _197.MsgStoreCodeResponseAmino;
                    fromAminoMsg(object: _197.MsgStoreCodeResponseAminoMsg): _197.MsgStoreCodeResponse;
                    toAminoMsg(message: _197.MsgStoreCodeResponse): _197.MsgStoreCodeResponseAminoMsg;
                    fromProtoMsg(message: _197.MsgStoreCodeResponseProtoMsg): _197.MsgStoreCodeResponse;
                    toProto(message: _197.MsgStoreCodeResponse): Uint8Array;
                    toProtoMsg(message: _197.MsgStoreCodeResponse): _197.MsgStoreCodeResponseProtoMsg;
                };
                MsgRemoveChecksum: {
                    typeUrl: string;
                    encode(message: _197.MsgRemoveChecksum, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.MsgRemoveChecksum;
                    fromPartial(object: Partial<_197.MsgRemoveChecksum>): _197.MsgRemoveChecksum;
                    fromAmino(object: _197.MsgRemoveChecksumAmino): _197.MsgRemoveChecksum;
                    toAmino(message: _197.MsgRemoveChecksum): _197.MsgRemoveChecksumAmino;
                    fromAminoMsg(object: _197.MsgRemoveChecksumAminoMsg): _197.MsgRemoveChecksum;
                    toAminoMsg(message: _197.MsgRemoveChecksum): _197.MsgRemoveChecksumAminoMsg;
                    fromProtoMsg(message: _197.MsgRemoveChecksumProtoMsg): _197.MsgRemoveChecksum;
                    toProto(message: _197.MsgRemoveChecksum): Uint8Array;
                    toProtoMsg(message: _197.MsgRemoveChecksum): _197.MsgRemoveChecksumProtoMsg;
                };
                MsgRemoveChecksumResponse: {
                    typeUrl: string;
                    encode(_: _197.MsgRemoveChecksumResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.MsgRemoveChecksumResponse;
                    fromPartial(_: Partial<_197.MsgRemoveChecksumResponse>): _197.MsgRemoveChecksumResponse;
                    fromAmino(_: _197.MsgRemoveChecksumResponseAmino): _197.MsgRemoveChecksumResponse;
                    toAmino(_: _197.MsgRemoveChecksumResponse): _197.MsgRemoveChecksumResponseAmino;
                    fromAminoMsg(object: _197.MsgRemoveChecksumResponseAminoMsg): _197.MsgRemoveChecksumResponse;
                    toAminoMsg(message: _197.MsgRemoveChecksumResponse): _197.MsgRemoveChecksumResponseAminoMsg;
                    fromProtoMsg(message: _197.MsgRemoveChecksumResponseProtoMsg): _197.MsgRemoveChecksumResponse;
                    toProto(message: _197.MsgRemoveChecksumResponse): Uint8Array;
                    toProtoMsg(message: _197.MsgRemoveChecksumResponse): _197.MsgRemoveChecksumResponseProtoMsg;
                };
                MsgMigrateContract: {
                    typeUrl: string;
                    encode(message: _197.MsgMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.MsgMigrateContract;
                    fromPartial(object: Partial<_197.MsgMigrateContract>): _197.MsgMigrateContract;
                    fromAmino(object: _197.MsgMigrateContractAmino): _197.MsgMigrateContract;
                    toAmino(message: _197.MsgMigrateContract): _197.MsgMigrateContractAmino;
                    fromAminoMsg(object: _197.MsgMigrateContractAminoMsg): _197.MsgMigrateContract;
                    toAminoMsg(message: _197.MsgMigrateContract): _197.MsgMigrateContractAminoMsg;
                    fromProtoMsg(message: _197.MsgMigrateContractProtoMsg): _197.MsgMigrateContract;
                    toProto(message: _197.MsgMigrateContract): Uint8Array;
                    toProtoMsg(message: _197.MsgMigrateContract): _197.MsgMigrateContractProtoMsg;
                };
                MsgMigrateContractResponse: {
                    typeUrl: string;
                    encode(_: _197.MsgMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.MsgMigrateContractResponse;
                    fromPartial(_: Partial<_197.MsgMigrateContractResponse>): _197.MsgMigrateContractResponse;
                    fromAmino(_: _197.MsgMigrateContractResponseAmino): _197.MsgMigrateContractResponse;
                    toAmino(_: _197.MsgMigrateContractResponse): _197.MsgMigrateContractResponseAmino;
                    fromAminoMsg(object: _197.MsgMigrateContractResponseAminoMsg): _197.MsgMigrateContractResponse;
                    toAminoMsg(message: _197.MsgMigrateContractResponse): _197.MsgMigrateContractResponseAminoMsg;
                    fromProtoMsg(message: _197.MsgMigrateContractResponseProtoMsg): _197.MsgMigrateContractResponse;
                    toProto(message: _197.MsgMigrateContractResponse): Uint8Array;
                    toProtoMsg(message: _197.MsgMigrateContractResponse): _197.MsgMigrateContractResponseProtoMsg;
                };
                QueryChecksumsRequest: {
                    typeUrl: string;
                    encode(message: _196.QueryChecksumsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _196.QueryChecksumsRequest;
                    fromPartial(object: Partial<_196.QueryChecksumsRequest>): _196.QueryChecksumsRequest;
                    fromAmino(object: _196.QueryChecksumsRequestAmino): _196.QueryChecksumsRequest;
                    toAmino(message: _196.QueryChecksumsRequest): _196.QueryChecksumsRequestAmino;
                    fromAminoMsg(object: _196.QueryChecksumsRequestAminoMsg): _196.QueryChecksumsRequest;
                    toAminoMsg(message: _196.QueryChecksumsRequest): _196.QueryChecksumsRequestAminoMsg;
                    fromProtoMsg(message: _196.QueryChecksumsRequestProtoMsg): _196.QueryChecksumsRequest;
                    toProto(message: _196.QueryChecksumsRequest): Uint8Array;
                    toProtoMsg(message: _196.QueryChecksumsRequest): _196.QueryChecksumsRequestProtoMsg;
                };
                QueryChecksumsResponse: {
                    typeUrl: string;
                    encode(message: _196.QueryChecksumsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _196.QueryChecksumsResponse;
                    fromPartial(object: Partial<_196.QueryChecksumsResponse>): _196.QueryChecksumsResponse;
                    fromAmino(object: _196.QueryChecksumsResponseAmino): _196.QueryChecksumsResponse;
                    toAmino(message: _196.QueryChecksumsResponse): _196.QueryChecksumsResponseAmino;
                    fromAminoMsg(object: _196.QueryChecksumsResponseAminoMsg): _196.QueryChecksumsResponse;
                    toAminoMsg(message: _196.QueryChecksumsResponse): _196.QueryChecksumsResponseAminoMsg;
                    fromProtoMsg(message: _196.QueryChecksumsResponseProtoMsg): _196.QueryChecksumsResponse;
                    toProto(message: _196.QueryChecksumsResponse): Uint8Array;
                    toProtoMsg(message: _196.QueryChecksumsResponse): _196.QueryChecksumsResponseProtoMsg;
                };
                QueryCodeRequest: {
                    typeUrl: string;
                    encode(message: _196.QueryCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _196.QueryCodeRequest;
                    fromPartial(object: Partial<_196.QueryCodeRequest>): _196.QueryCodeRequest;
                    fromAmino(object: _196.QueryCodeRequestAmino): _196.QueryCodeRequest;
                    toAmino(message: _196.QueryCodeRequest): _196.QueryCodeRequestAmino;
                    fromAminoMsg(object: _196.QueryCodeRequestAminoMsg): _196.QueryCodeRequest;
                    toAminoMsg(message: _196.QueryCodeRequest): _196.QueryCodeRequestAminoMsg;
                    fromProtoMsg(message: _196.QueryCodeRequestProtoMsg): _196.QueryCodeRequest;
                    toProto(message: _196.QueryCodeRequest): Uint8Array;
                    toProtoMsg(message: _196.QueryCodeRequest): _196.QueryCodeRequestProtoMsg;
                };
                QueryCodeResponse: {
                    typeUrl: string;
                    encode(message: _196.QueryCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _196.QueryCodeResponse;
                    fromPartial(object: Partial<_196.QueryCodeResponse>): _196.QueryCodeResponse;
                    fromAmino(object: _196.QueryCodeResponseAmino): _196.QueryCodeResponse;
                    toAmino(message: _196.QueryCodeResponse): _196.QueryCodeResponseAmino;
                    fromAminoMsg(object: _196.QueryCodeResponseAminoMsg): _196.QueryCodeResponse;
                    toAminoMsg(message: _196.QueryCodeResponse): _196.QueryCodeResponseAminoMsg;
                    fromProtoMsg(message: _196.QueryCodeResponseProtoMsg): _196.QueryCodeResponse;
                    toProto(message: _196.QueryCodeResponse): Uint8Array;
                    toProtoMsg(message: _196.QueryCodeResponse): _196.QueryCodeResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _195.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _195.GenesisState;
                    fromPartial(object: Partial<_195.GenesisState>): _195.GenesisState;
                    fromAmino(object: _195.GenesisStateAmino): _195.GenesisState;
                    toAmino(message: _195.GenesisState): _195.GenesisStateAmino;
                    fromAminoMsg(object: _195.GenesisStateAminoMsg): _195.GenesisState;
                    toAminoMsg(message: _195.GenesisState): _195.GenesisStateAminoMsg;
                    fromProtoMsg(message: _195.GenesisStateProtoMsg): _195.GenesisState;
                    toProto(message: _195.GenesisState): Uint8Array;
                    toProtoMsg(message: _195.GenesisState): _195.GenesisStateProtoMsg;
                };
                Contract: {
                    typeUrl: string;
                    encode(message: _195.Contract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _195.Contract;
                    fromPartial(object: Partial<_195.Contract>): _195.Contract;
                    fromAmino(object: _195.ContractAmino): _195.Contract;
                    toAmino(message: _195.Contract): _195.ContractAmino;
                    fromAminoMsg(object: _195.ContractAminoMsg): _195.Contract;
                    toAminoMsg(message: _195.Contract): _195.ContractAminoMsg;
                    fromProtoMsg(message: _195.ContractProtoMsg): _195.Contract;
                    toProto(message: _195.Contract): Uint8Array;
                    toProtoMsg(message: _195.Contract): _195.ContractProtoMsg;
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
                        v1: _389.MsgClientImpl;
                    };
                    interchain_accounts: {
                        controller: {
                            v1: _390.MsgClientImpl;
                        };
                        host: {
                            v1: _391.MsgClientImpl;
                        };
                    };
                    transfer: {
                        v1: _392.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _393.MsgClientImpl;
                    };
                    client: {
                        v1: _394.MsgClientImpl;
                    };
                    connection: {
                        v1: _395.MsgClientImpl;
                    };
                };
                lightclients: {
                    wasm: {
                        v1: _396.MsgClientImpl;
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
                            incentivizedPackets(request: _158.QueryIncentivizedPacketsRequest): Promise<_158.QueryIncentivizedPacketsResponse>;
                            incentivizedPacket(request: _158.QueryIncentivizedPacketRequest): Promise<_158.QueryIncentivizedPacketResponse>;
                            incentivizedPacketsForChannel(request: _158.QueryIncentivizedPacketsForChannelRequest): Promise<_158.QueryIncentivizedPacketsForChannelResponse>;
                            totalRecvFees(request: _158.QueryTotalRecvFeesRequest): Promise<_158.QueryTotalRecvFeesResponse>;
                            totalAckFees(request: _158.QueryTotalAckFeesRequest): Promise<_158.QueryTotalAckFeesResponse>;
                            totalTimeoutFees(request: _158.QueryTotalTimeoutFeesRequest): Promise<_158.QueryTotalTimeoutFeesResponse>;
                            payee(request: _158.QueryPayeeRequest): Promise<_158.QueryPayeeResponse>;
                            counterpartyPayee(request: _158.QueryCounterpartyPayeeRequest): Promise<_158.QueryCounterpartyPayeeResponse>;
                            feeEnabledChannels(request: _158.QueryFeeEnabledChannelsRequest): Promise<_158.QueryFeeEnabledChannelsResponse>;
                            feeEnabledChannel(request: _158.QueryFeeEnabledChannelRequest): Promise<_158.QueryFeeEnabledChannelResponse>;
                        };
                    };
                    interchain_accounts: {
                        controller: {
                            v1: {
                                interchainAccount(request: _161.QueryInterchainAccountRequest): Promise<_161.QueryInterchainAccountResponse>;
                                params(request?: _161.QueryParamsRequest): Promise<_161.QueryParamsResponse>;
                            };
                        };
                        host: {
                            v1: {
                                params(request?: _165.QueryParamsRequest): Promise<_165.QueryParamsResponse>;
                            };
                        };
                    };
                    transfer: {
                        v1: {
                            denomTraces(request?: _172.QueryDenomTracesRequest): Promise<_172.QueryDenomTracesResponse>;
                            denomTrace(request: _172.QueryDenomTraceRequest): Promise<_172.QueryDenomTraceResponse>;
                            params(request?: _172.QueryParamsRequest): Promise<_172.QueryParamsResponse>;
                            denomHash(request: _172.QueryDenomHashRequest): Promise<_172.QueryDenomHashResponse>;
                            escrowAddress(request: _172.QueryEscrowAddressRequest): Promise<_172.QueryEscrowAddressResponse>;
                            totalEscrowForDenom(request: _172.QueryTotalEscrowForDenomRequest): Promise<_172.QueryTotalEscrowForDenomResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _178.QueryChannelRequest): Promise<_178.QueryChannelResponse>;
                            channels(request?: _178.QueryChannelsRequest): Promise<_178.QueryChannelsResponse>;
                            connectionChannels(request: _178.QueryConnectionChannelsRequest): Promise<_178.QueryConnectionChannelsResponse>;
                            channelClientState(request: _178.QueryChannelClientStateRequest): Promise<_178.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _178.QueryChannelConsensusStateRequest): Promise<_178.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _178.QueryPacketCommitmentRequest): Promise<_178.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _178.QueryPacketCommitmentsRequest): Promise<_178.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _178.QueryPacketReceiptRequest): Promise<_178.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _178.QueryPacketAcknowledgementRequest): Promise<_178.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _178.QueryPacketAcknowledgementsRequest): Promise<_178.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _178.QueryUnreceivedPacketsRequest): Promise<_178.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _178.QueryUnreceivedAcksRequest): Promise<_178.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _178.QueryNextSequenceReceiveRequest): Promise<_178.QueryNextSequenceReceiveResponse>;
                            nextSequenceSend(request: _178.QueryNextSequenceSendRequest): Promise<_178.QueryNextSequenceSendResponse>;
                            upgradeError(request: _178.QueryUpgradeErrorRequest): Promise<_178.QueryUpgradeErrorResponse>;
                            upgrade(request: _178.QueryUpgradeRequest): Promise<_178.QueryUpgradeResponse>;
                            channelParams(request?: _178.QueryChannelParamsRequest): Promise<_178.QueryChannelParamsResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _183.QueryClientStateRequest): Promise<_183.QueryClientStateResponse>;
                            clientStates(request?: _183.QueryClientStatesRequest): Promise<_183.QueryClientStatesResponse>;
                            consensusState(request: _183.QueryConsensusStateRequest): Promise<_183.QueryConsensusStateResponse>;
                            consensusStates(request: _183.QueryConsensusStatesRequest): Promise<_183.QueryConsensusStatesResponse>;
                            consensusStateHeights(request: _183.QueryConsensusStateHeightsRequest): Promise<_183.QueryConsensusStateHeightsResponse>;
                            clientStatus(request: _183.QueryClientStatusRequest): Promise<_183.QueryClientStatusResponse>;
                            clientParams(request?: _183.QueryClientParamsRequest): Promise<_183.QueryClientParamsResponse>;
                            upgradedClientState(request?: _183.QueryUpgradedClientStateRequest): Promise<_183.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _183.QueryUpgradedConsensusStateRequest): Promise<_183.QueryUpgradedConsensusStateResponse>;
                            verifyMembership(request: _183.QueryVerifyMembershipRequest): Promise<_183.QueryVerifyMembershipResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _188.QueryConnectionRequest): Promise<_188.QueryConnectionResponse>;
                            connections(request?: _188.QueryConnectionsRequest): Promise<_188.QueryConnectionsResponse>;
                            clientConnections(request: _188.QueryClientConnectionsRequest): Promise<_188.QueryClientConnectionsResponse>;
                            connectionClientState(request: _188.QueryConnectionClientStateRequest): Promise<_188.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _188.QueryConnectionConsensusStateRequest): Promise<_188.QueryConnectionConsensusStateResponse>;
                            connectionParams(request?: _188.QueryConnectionParamsRequest): Promise<_188.QueryConnectionParamsResponse>;
                        };
                    };
                };
                lightclients: {
                    wasm: {
                        v1: {
                            checksums(request?: _196.QueryChecksumsRequest): Promise<_196.QueryChecksumsResponse>;
                            code(request: _196.QueryCodeRequest): Promise<_196.QueryCodeResponse>;
                        };
                    };
                };
            };
        }>;
    };
}
