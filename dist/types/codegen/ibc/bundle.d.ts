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
import * as _155 from "./applications/interchain_accounts/v1/account";
import * as _156 from "./applications/interchain_accounts/v1/metadata";
import * as _157 from "./applications/interchain_accounts/v1/packet";
import * as _158 from "./applications/transfer/v1/authz";
import * as _159 from "./applications/transfer/v1/genesis";
import * as _160 from "./applications/transfer/v1/query";
import * as _161 from "./applications/transfer/v1/transfer";
import * as _162 from "./applications/transfer/v1/tx";
import * as _163 from "./applications/transfer/v2/packet";
import * as _164 from "./core/channel/v1/channel";
import * as _165 from "./core/channel/v1/genesis";
import * as _166 from "./core/channel/v1/query";
import * as _167 from "./core/channel/v1/tx";
import * as _168 from "./core/client/v1/client";
import * as _169 from "./core/client/v1/genesis";
import * as _170 from "./core/client/v1/query";
import * as _171 from "./core/client/v1/tx";
import * as _172 from "./core/commitment/v1/commitment";
import * as _173 from "./core/connection/v1/connection";
import * as _174 from "./core/connection/v1/genesis";
import * as _175 from "./core/connection/v1/query";
import * as _176 from "./core/connection/v1/tx";
import * as _177 from "./core/types/v1/genesis";
import * as _178 from "./lightclients/localhost/v2/localhost";
import * as _179 from "./lightclients/solomachine/v2/solomachine";
import * as _180 from "./lightclients/solomachine/v3/solomachine";
import * as _181 from "./lightclients/tendermint/v1/tendermint";
import * as _353 from "./applications/fee/v1/query.rpc.Query";
import * as _354 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _355 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _356 from "./applications/transfer/v1/query.rpc.Query";
import * as _357 from "./core/channel/v1/query.rpc.Query";
import * as _358 from "./core/client/v1/query.rpc.Query";
import * as _359 from "./core/connection/v1/query.rpc.Query";
import * as _360 from "./applications/fee/v1/tx.rpc.msg";
import * as _361 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _362 from "./applications/transfer/v1/tx.rpc.msg";
import * as _363 from "./core/channel/v1/tx.rpc.msg";
import * as _364 from "./core/client/v1/tx.rpc.msg";
import * as _365 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace fee {
            const v1: {
                MsgClientImpl: typeof _360.MsgClientImpl;
                QueryClientImpl: typeof _353.QueryClientImpl;
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
                    MsgClientImpl: typeof _361.MsgClientImpl;
                    QueryClientImpl: typeof _354.QueryClientImpl;
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
                    QueryClientImpl: typeof _355.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        params(request?: _154.QueryParamsRequest): Promise<_154.QueryParamsResponse>;
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
                };
            }
            const v1: {
                typeFromJSON(object: any): _157.Type;
                typeToJSON(object: _157.Type): string;
                Type: typeof _157.Type;
                TypeSDKType: typeof _157.Type;
                TypeAmino: typeof _157.Type;
                InterchainAccountPacketData: {
                    typeUrl: string;
                    encode(message: _157.InterchainAccountPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _157.InterchainAccountPacketData;
                    fromPartial(object: Partial<_157.InterchainAccountPacketData>): _157.InterchainAccountPacketData;
                    fromAmino(object: _157.InterchainAccountPacketDataAmino): _157.InterchainAccountPacketData;
                    toAmino(message: _157.InterchainAccountPacketData): _157.InterchainAccountPacketDataAmino;
                    fromAminoMsg(object: _157.InterchainAccountPacketDataAminoMsg): _157.InterchainAccountPacketData;
                    toAminoMsg(message: _157.InterchainAccountPacketData): _157.InterchainAccountPacketDataAminoMsg;
                    fromProtoMsg(message: _157.InterchainAccountPacketDataProtoMsg): _157.InterchainAccountPacketData;
                    toProto(message: _157.InterchainAccountPacketData): Uint8Array;
                    toProtoMsg(message: _157.InterchainAccountPacketData): _157.InterchainAccountPacketDataProtoMsg;
                };
                CosmosTx: {
                    typeUrl: string;
                    encode(message: _157.CosmosTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _157.CosmosTx;
                    fromPartial(object: Partial<_157.CosmosTx>): _157.CosmosTx;
                    fromAmino(object: _157.CosmosTxAmino): _157.CosmosTx;
                    toAmino(message: _157.CosmosTx): _157.CosmosTxAmino;
                    fromAminoMsg(object: _157.CosmosTxAminoMsg): _157.CosmosTx;
                    toAminoMsg(message: _157.CosmosTx): _157.CosmosTxAminoMsg;
                    fromProtoMsg(message: _157.CosmosTxProtoMsg): _157.CosmosTx;
                    toProto(message: _157.CosmosTx): Uint8Array;
                    toProtoMsg(message: _157.CosmosTx): _157.CosmosTxProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _156.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _156.Metadata;
                    fromPartial(object: Partial<_156.Metadata>): _156.Metadata;
                    fromAmino(object: _156.MetadataAmino): _156.Metadata;
                    toAmino(message: _156.Metadata): _156.MetadataAmino;
                    fromAminoMsg(object: _156.MetadataAminoMsg): _156.Metadata;
                    toAminoMsg(message: _156.Metadata): _156.MetadataAminoMsg;
                    fromProtoMsg(message: _156.MetadataProtoMsg): _156.Metadata;
                    toProto(message: _156.Metadata): Uint8Array;
                    toProtoMsg(message: _156.Metadata): _156.MetadataProtoMsg;
                };
                InterchainAccount: {
                    typeUrl: string;
                    encode(message: _155.InterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.InterchainAccount;
                    fromPartial(object: Partial<_155.InterchainAccount>): _155.InterchainAccount;
                    fromAmino(object: _155.InterchainAccountAmino): _155.InterchainAccount;
                    toAmino(message: _155.InterchainAccount): _155.InterchainAccountAmino;
                    fromAminoMsg(object: _155.InterchainAccountAminoMsg): _155.InterchainAccount;
                    toAminoMsg(message: _155.InterchainAccount): _155.InterchainAccountAminoMsg;
                    fromProtoMsg(message: _155.InterchainAccountProtoMsg): _155.InterchainAccount;
                    toProto(message: _155.InterchainAccount): Uint8Array;
                    toProtoMsg(message: _155.InterchainAccount): _155.InterchainAccountProtoMsg;
                };
            };
        }
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _362.MsgClientImpl;
                QueryClientImpl: typeof _356.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTraces(request?: _160.QueryDenomTracesRequest): Promise<_160.QueryDenomTracesResponse>;
                    denomTrace(request: _160.QueryDenomTraceRequest): Promise<_160.QueryDenomTraceResponse>;
                    params(request?: _160.QueryParamsRequest): Promise<_160.QueryParamsResponse>;
                    denomHash(request: _160.QueryDenomHashRequest): Promise<_160.QueryDenomHashResponse>;
                    escrowAddress(request: _160.QueryEscrowAddressRequest): Promise<_160.QueryEscrowAddressResponse>;
                    totalEscrowForDenom(request: _160.QueryTotalEscrowForDenomRequest): Promise<_160.QueryTotalEscrowForDenomResponse>;
                };
                registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _162.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _162.MsgTransfer): {
                            typeUrl: string;
                            value: _162.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _162.MsgTransfer): {
                            typeUrl: string;
                            value: _162.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _162.MsgTransfer) => _162.MsgTransferAmino;
                        fromAmino: (object: _162.MsgTransferAmino) => _162.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    typeUrl: string;
                    encode(message: _162.MsgTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.MsgTransfer;
                    fromPartial(object: Partial<_162.MsgTransfer>): _162.MsgTransfer;
                    fromAmino(object: _162.MsgTransferAmino): _162.MsgTransfer;
                    toAmino(message: _162.MsgTransfer): _162.MsgTransferAmino;
                    fromAminoMsg(object: _162.MsgTransferAminoMsg): _162.MsgTransfer;
                    toAminoMsg(message: _162.MsgTransfer): _162.MsgTransferAminoMsg;
                    fromProtoMsg(message: _162.MsgTransferProtoMsg): _162.MsgTransfer;
                    toProto(message: _162.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _162.MsgTransfer): _162.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    typeUrl: string;
                    encode(message: _162.MsgTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.MsgTransferResponse;
                    fromPartial(object: Partial<_162.MsgTransferResponse>): _162.MsgTransferResponse;
                    fromAmino(object: _162.MsgTransferResponseAmino): _162.MsgTransferResponse;
                    toAmino(message: _162.MsgTransferResponse): _162.MsgTransferResponseAmino;
                    fromAminoMsg(object: _162.MsgTransferResponseAminoMsg): _162.MsgTransferResponse;
                    toAminoMsg(message: _162.MsgTransferResponse): _162.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _162.MsgTransferResponseProtoMsg): _162.MsgTransferResponse;
                    toProto(message: _162.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _162.MsgTransferResponse): _162.MsgTransferResponseProtoMsg;
                };
                DenomTrace: {
                    typeUrl: string;
                    encode(message: _161.DenomTrace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.DenomTrace;
                    fromPartial(object: Partial<_161.DenomTrace>): _161.DenomTrace;
                    fromAmino(object: _161.DenomTraceAmino): _161.DenomTrace;
                    toAmino(message: _161.DenomTrace): _161.DenomTraceAmino;
                    fromAminoMsg(object: _161.DenomTraceAminoMsg): _161.DenomTrace;
                    toAminoMsg(message: _161.DenomTrace): _161.DenomTraceAminoMsg;
                    fromProtoMsg(message: _161.DenomTraceProtoMsg): _161.DenomTrace;
                    toProto(message: _161.DenomTrace): Uint8Array;
                    toProtoMsg(message: _161.DenomTrace): _161.DenomTraceProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _161.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.Params;
                    fromPartial(object: Partial<_161.Params>): _161.Params;
                    fromAmino(object: _161.ParamsAmino): _161.Params;
                    toAmino(message: _161.Params): _161.ParamsAmino;
                    fromAminoMsg(object: _161.ParamsAminoMsg): _161.Params;
                    toAminoMsg(message: _161.Params): _161.ParamsAminoMsg;
                    fromProtoMsg(message: _161.ParamsProtoMsg): _161.Params;
                    toProto(message: _161.Params): Uint8Array;
                    toProtoMsg(message: _161.Params): _161.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    encode(message: _160.QueryDenomTraceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.QueryDenomTraceRequest;
                    fromPartial(object: Partial<_160.QueryDenomTraceRequest>): _160.QueryDenomTraceRequest;
                    fromAmino(object: _160.QueryDenomTraceRequestAmino): _160.QueryDenomTraceRequest;
                    toAmino(message: _160.QueryDenomTraceRequest): _160.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _160.QueryDenomTraceRequestAminoMsg): _160.QueryDenomTraceRequest;
                    toAminoMsg(message: _160.QueryDenomTraceRequest): _160.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _160.QueryDenomTraceRequestProtoMsg): _160.QueryDenomTraceRequest;
                    toProto(message: _160.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _160.QueryDenomTraceRequest): _160.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    encode(message: _160.QueryDenomTraceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.QueryDenomTraceResponse;
                    fromPartial(object: Partial<_160.QueryDenomTraceResponse>): _160.QueryDenomTraceResponse;
                    fromAmino(object: _160.QueryDenomTraceResponseAmino): _160.QueryDenomTraceResponse;
                    toAmino(message: _160.QueryDenomTraceResponse): _160.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _160.QueryDenomTraceResponseAminoMsg): _160.QueryDenomTraceResponse;
                    toAminoMsg(message: _160.QueryDenomTraceResponse): _160.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _160.QueryDenomTraceResponseProtoMsg): _160.QueryDenomTraceResponse;
                    toProto(message: _160.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _160.QueryDenomTraceResponse): _160.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    encode(message: _160.QueryDenomTracesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.QueryDenomTracesRequest;
                    fromPartial(object: Partial<_160.QueryDenomTracesRequest>): _160.QueryDenomTracesRequest;
                    fromAmino(object: _160.QueryDenomTracesRequestAmino): _160.QueryDenomTracesRequest;
                    toAmino(message: _160.QueryDenomTracesRequest): _160.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _160.QueryDenomTracesRequestAminoMsg): _160.QueryDenomTracesRequest;
                    toAminoMsg(message: _160.QueryDenomTracesRequest): _160.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _160.QueryDenomTracesRequestProtoMsg): _160.QueryDenomTracesRequest;
                    toProto(message: _160.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _160.QueryDenomTracesRequest): _160.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    encode(message: _160.QueryDenomTracesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.QueryDenomTracesResponse;
                    fromPartial(object: Partial<_160.QueryDenomTracesResponse>): _160.QueryDenomTracesResponse;
                    fromAmino(object: _160.QueryDenomTracesResponseAmino): _160.QueryDenomTracesResponse;
                    toAmino(message: _160.QueryDenomTracesResponse): _160.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _160.QueryDenomTracesResponseAminoMsg): _160.QueryDenomTracesResponse;
                    toAminoMsg(message: _160.QueryDenomTracesResponse): _160.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _160.QueryDenomTracesResponseProtoMsg): _160.QueryDenomTracesResponse;
                    toProto(message: _160.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _160.QueryDenomTracesResponse): _160.QueryDenomTracesResponseProtoMsg;
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
                QueryDenomHashRequest: {
                    typeUrl: string;
                    encode(message: _160.QueryDenomHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.QueryDenomHashRequest;
                    fromPartial(object: Partial<_160.QueryDenomHashRequest>): _160.QueryDenomHashRequest;
                    fromAmino(object: _160.QueryDenomHashRequestAmino): _160.QueryDenomHashRequest;
                    toAmino(message: _160.QueryDenomHashRequest): _160.QueryDenomHashRequestAmino;
                    fromAminoMsg(object: _160.QueryDenomHashRequestAminoMsg): _160.QueryDenomHashRequest;
                    toAminoMsg(message: _160.QueryDenomHashRequest): _160.QueryDenomHashRequestAminoMsg;
                    fromProtoMsg(message: _160.QueryDenomHashRequestProtoMsg): _160.QueryDenomHashRequest;
                    toProto(message: _160.QueryDenomHashRequest): Uint8Array;
                    toProtoMsg(message: _160.QueryDenomHashRequest): _160.QueryDenomHashRequestProtoMsg;
                };
                QueryDenomHashResponse: {
                    typeUrl: string;
                    encode(message: _160.QueryDenomHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.QueryDenomHashResponse;
                    fromPartial(object: Partial<_160.QueryDenomHashResponse>): _160.QueryDenomHashResponse;
                    fromAmino(object: _160.QueryDenomHashResponseAmino): _160.QueryDenomHashResponse;
                    toAmino(message: _160.QueryDenomHashResponse): _160.QueryDenomHashResponseAmino;
                    fromAminoMsg(object: _160.QueryDenomHashResponseAminoMsg): _160.QueryDenomHashResponse;
                    toAminoMsg(message: _160.QueryDenomHashResponse): _160.QueryDenomHashResponseAminoMsg;
                    fromProtoMsg(message: _160.QueryDenomHashResponseProtoMsg): _160.QueryDenomHashResponse;
                    toProto(message: _160.QueryDenomHashResponse): Uint8Array;
                    toProtoMsg(message: _160.QueryDenomHashResponse): _160.QueryDenomHashResponseProtoMsg;
                };
                QueryEscrowAddressRequest: {
                    typeUrl: string;
                    encode(message: _160.QueryEscrowAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.QueryEscrowAddressRequest;
                    fromPartial(object: Partial<_160.QueryEscrowAddressRequest>): _160.QueryEscrowAddressRequest;
                    fromAmino(object: _160.QueryEscrowAddressRequestAmino): _160.QueryEscrowAddressRequest;
                    toAmino(message: _160.QueryEscrowAddressRequest): _160.QueryEscrowAddressRequestAmino;
                    fromAminoMsg(object: _160.QueryEscrowAddressRequestAminoMsg): _160.QueryEscrowAddressRequest;
                    toAminoMsg(message: _160.QueryEscrowAddressRequest): _160.QueryEscrowAddressRequestAminoMsg;
                    fromProtoMsg(message: _160.QueryEscrowAddressRequestProtoMsg): _160.QueryEscrowAddressRequest;
                    toProto(message: _160.QueryEscrowAddressRequest): Uint8Array;
                    toProtoMsg(message: _160.QueryEscrowAddressRequest): _160.QueryEscrowAddressRequestProtoMsg;
                };
                QueryEscrowAddressResponse: {
                    typeUrl: string;
                    encode(message: _160.QueryEscrowAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.QueryEscrowAddressResponse;
                    fromPartial(object: Partial<_160.QueryEscrowAddressResponse>): _160.QueryEscrowAddressResponse;
                    fromAmino(object: _160.QueryEscrowAddressResponseAmino): _160.QueryEscrowAddressResponse;
                    toAmino(message: _160.QueryEscrowAddressResponse): _160.QueryEscrowAddressResponseAmino;
                    fromAminoMsg(object: _160.QueryEscrowAddressResponseAminoMsg): _160.QueryEscrowAddressResponse;
                    toAminoMsg(message: _160.QueryEscrowAddressResponse): _160.QueryEscrowAddressResponseAminoMsg;
                    fromProtoMsg(message: _160.QueryEscrowAddressResponseProtoMsg): _160.QueryEscrowAddressResponse;
                    toProto(message: _160.QueryEscrowAddressResponse): Uint8Array;
                    toProtoMsg(message: _160.QueryEscrowAddressResponse): _160.QueryEscrowAddressResponseProtoMsg;
                };
                QueryTotalEscrowForDenomRequest: {
                    typeUrl: string;
                    encode(message: _160.QueryTotalEscrowForDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.QueryTotalEscrowForDenomRequest;
                    fromPartial(object: Partial<_160.QueryTotalEscrowForDenomRequest>): _160.QueryTotalEscrowForDenomRequest;
                    fromAmino(object: _160.QueryTotalEscrowForDenomRequestAmino): _160.QueryTotalEscrowForDenomRequest;
                    toAmino(message: _160.QueryTotalEscrowForDenomRequest): _160.QueryTotalEscrowForDenomRequestAmino;
                    fromAminoMsg(object: _160.QueryTotalEscrowForDenomRequestAminoMsg): _160.QueryTotalEscrowForDenomRequest;
                    toAminoMsg(message: _160.QueryTotalEscrowForDenomRequest): _160.QueryTotalEscrowForDenomRequestAminoMsg;
                    fromProtoMsg(message: _160.QueryTotalEscrowForDenomRequestProtoMsg): _160.QueryTotalEscrowForDenomRequest;
                    toProto(message: _160.QueryTotalEscrowForDenomRequest): Uint8Array;
                    toProtoMsg(message: _160.QueryTotalEscrowForDenomRequest): _160.QueryTotalEscrowForDenomRequestProtoMsg;
                };
                QueryTotalEscrowForDenomResponse: {
                    typeUrl: string;
                    encode(message: _160.QueryTotalEscrowForDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.QueryTotalEscrowForDenomResponse;
                    fromPartial(object: Partial<_160.QueryTotalEscrowForDenomResponse>): _160.QueryTotalEscrowForDenomResponse;
                    fromAmino(object: _160.QueryTotalEscrowForDenomResponseAmino): _160.QueryTotalEscrowForDenomResponse;
                    toAmino(message: _160.QueryTotalEscrowForDenomResponse): _160.QueryTotalEscrowForDenomResponseAmino;
                    fromAminoMsg(object: _160.QueryTotalEscrowForDenomResponseAminoMsg): _160.QueryTotalEscrowForDenomResponse;
                    toAminoMsg(message: _160.QueryTotalEscrowForDenomResponse): _160.QueryTotalEscrowForDenomResponseAminoMsg;
                    fromProtoMsg(message: _160.QueryTotalEscrowForDenomResponseProtoMsg): _160.QueryTotalEscrowForDenomResponse;
                    toProto(message: _160.QueryTotalEscrowForDenomResponse): Uint8Array;
                    toProtoMsg(message: _160.QueryTotalEscrowForDenomResponse): _160.QueryTotalEscrowForDenomResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _159.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.GenesisState;
                    fromPartial(object: Partial<_159.GenesisState>): _159.GenesisState;
                    fromAmino(object: _159.GenesisStateAmino): _159.GenesisState;
                    toAmino(message: _159.GenesisState): _159.GenesisStateAmino;
                    fromAminoMsg(object: _159.GenesisStateAminoMsg): _159.GenesisState;
                    toAminoMsg(message: _159.GenesisState): _159.GenesisStateAminoMsg;
                    fromProtoMsg(message: _159.GenesisStateProtoMsg): _159.GenesisState;
                    toProto(message: _159.GenesisState): Uint8Array;
                    toProtoMsg(message: _159.GenesisState): _159.GenesisStateProtoMsg;
                };
                Allocation: {
                    typeUrl: string;
                    encode(message: _158.Allocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.Allocation;
                    fromPartial(object: Partial<_158.Allocation>): _158.Allocation;
                    fromAmino(object: _158.AllocationAmino): _158.Allocation;
                    toAmino(message: _158.Allocation): _158.AllocationAmino;
                    fromAminoMsg(object: _158.AllocationAminoMsg): _158.Allocation;
                    toAminoMsg(message: _158.Allocation): _158.AllocationAminoMsg;
                    fromProtoMsg(message: _158.AllocationProtoMsg): _158.Allocation;
                    toProto(message: _158.Allocation): Uint8Array;
                    toProtoMsg(message: _158.Allocation): _158.AllocationProtoMsg;
                };
                TransferAuthorization: {
                    typeUrl: string;
                    encode(message: _158.TransferAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.TransferAuthorization;
                    fromPartial(object: Partial<_158.TransferAuthorization>): _158.TransferAuthorization;
                    fromAmino(object: _158.TransferAuthorizationAmino): _158.TransferAuthorization;
                    toAmino(message: _158.TransferAuthorization): _158.TransferAuthorizationAmino;
                    fromAminoMsg(object: _158.TransferAuthorizationAminoMsg): _158.TransferAuthorization;
                    toAminoMsg(message: _158.TransferAuthorization): _158.TransferAuthorizationAminoMsg;
                    fromProtoMsg(message: _158.TransferAuthorizationProtoMsg): _158.TransferAuthorization;
                    toProto(message: _158.TransferAuthorization): Uint8Array;
                    toProtoMsg(message: _158.TransferAuthorization): _158.TransferAuthorizationProtoMsg;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    typeUrl: string;
                    encode(message: _163.FungibleTokenPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.FungibleTokenPacketData;
                    fromPartial(object: Partial<_163.FungibleTokenPacketData>): _163.FungibleTokenPacketData;
                    fromAmino(object: _163.FungibleTokenPacketDataAmino): _163.FungibleTokenPacketData;
                    toAmino(message: _163.FungibleTokenPacketData): _163.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _163.FungibleTokenPacketDataAminoMsg): _163.FungibleTokenPacketData;
                    toAminoMsg(message: _163.FungibleTokenPacketData): _163.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _163.FungibleTokenPacketDataProtoMsg): _163.FungibleTokenPacketData;
                    toProto(message: _163.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _163.FungibleTokenPacketData): _163.FungibleTokenPacketDataProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _363.MsgClientImpl;
                QueryClientImpl: typeof _357.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _166.QueryChannelRequest): Promise<_166.QueryChannelResponse>;
                    channels(request?: _166.QueryChannelsRequest): Promise<_166.QueryChannelsResponse>;
                    connectionChannels(request: _166.QueryConnectionChannelsRequest): Promise<_166.QueryConnectionChannelsResponse>;
                    channelClientState(request: _166.QueryChannelClientStateRequest): Promise<_166.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _166.QueryChannelConsensusStateRequest): Promise<_166.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _166.QueryPacketCommitmentRequest): Promise<_166.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _166.QueryPacketCommitmentsRequest): Promise<_166.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _166.QueryPacketReceiptRequest): Promise<_166.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _166.QueryPacketAcknowledgementRequest): Promise<_166.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _166.QueryPacketAcknowledgementsRequest): Promise<_166.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _166.QueryUnreceivedPacketsRequest): Promise<_166.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _166.QueryUnreceivedAcksRequest): Promise<_166.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _166.QueryNextSequenceReceiveRequest): Promise<_166.QueryNextSequenceReceiveResponse>;
                };
                registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _167.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _167.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _167.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _167.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _167.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _167.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _167.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _167.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _167.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _167.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _167.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _167.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _167.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _167.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _167.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _167.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _167.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _167.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _167.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _167.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _167.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _167.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _167.MsgRecvPacket): {
                            typeUrl: string;
                            value: _167.MsgRecvPacket;
                        };
                        timeout(value: _167.MsgTimeout): {
                            typeUrl: string;
                            value: _167.MsgTimeout;
                        };
                        timeoutOnClose(value: _167.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _167.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _167.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _167.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _167.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _167.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _167.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _167.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _167.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _167.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _167.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _167.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _167.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _167.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _167.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _167.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _167.MsgRecvPacket): {
                            typeUrl: string;
                            value: _167.MsgRecvPacket;
                        };
                        timeout(value: _167.MsgTimeout): {
                            typeUrl: string;
                            value: _167.MsgTimeout;
                        };
                        timeoutOnClose(value: _167.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _167.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _167.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _167.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _167.MsgChannelOpenInit) => _167.MsgChannelOpenInitAmino;
                        fromAmino: (object: _167.MsgChannelOpenInitAmino) => _167.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _167.MsgChannelOpenTry) => _167.MsgChannelOpenTryAmino;
                        fromAmino: (object: _167.MsgChannelOpenTryAmino) => _167.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _167.MsgChannelOpenAck) => _167.MsgChannelOpenAckAmino;
                        fromAmino: (object: _167.MsgChannelOpenAckAmino) => _167.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _167.MsgChannelOpenConfirm) => _167.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _167.MsgChannelOpenConfirmAmino) => _167.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _167.MsgChannelCloseInit) => _167.MsgChannelCloseInitAmino;
                        fromAmino: (object: _167.MsgChannelCloseInitAmino) => _167.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _167.MsgChannelCloseConfirm) => _167.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _167.MsgChannelCloseConfirmAmino) => _167.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _167.MsgRecvPacket) => _167.MsgRecvPacketAmino;
                        fromAmino: (object: _167.MsgRecvPacketAmino) => _167.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _167.MsgTimeout) => _167.MsgTimeoutAmino;
                        fromAmino: (object: _167.MsgTimeoutAmino) => _167.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _167.MsgTimeoutOnClose) => _167.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _167.MsgTimeoutOnCloseAmino) => _167.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _167.MsgAcknowledgement) => _167.MsgAcknowledgementAmino;
                        fromAmino: (object: _167.MsgAcknowledgementAmino) => _167.MsgAcknowledgement;
                    };
                };
                responseResultTypeFromJSON(object: any): _167.ResponseResultType;
                responseResultTypeToJSON(object: _167.ResponseResultType): string;
                ResponseResultType: typeof _167.ResponseResultType;
                ResponseResultTypeSDKType: typeof _167.ResponseResultType;
                ResponseResultTypeAmino: typeof _167.ResponseResultType;
                MsgChannelOpenInit: {
                    typeUrl: string;
                    encode(message: _167.MsgChannelOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.MsgChannelOpenInit;
                    fromPartial(object: Partial<_167.MsgChannelOpenInit>): _167.MsgChannelOpenInit;
                    fromAmino(object: _167.MsgChannelOpenInitAmino): _167.MsgChannelOpenInit;
                    toAmino(message: _167.MsgChannelOpenInit): _167.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _167.MsgChannelOpenInitAminoMsg): _167.MsgChannelOpenInit;
                    toAminoMsg(message: _167.MsgChannelOpenInit): _167.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _167.MsgChannelOpenInitProtoMsg): _167.MsgChannelOpenInit;
                    toProto(message: _167.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _167.MsgChannelOpenInit): _167.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    typeUrl: string;
                    encode(message: _167.MsgChannelOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.MsgChannelOpenInitResponse;
                    fromPartial(object: Partial<_167.MsgChannelOpenInitResponse>): _167.MsgChannelOpenInitResponse;
                    fromAmino(object: _167.MsgChannelOpenInitResponseAmino): _167.MsgChannelOpenInitResponse;
                    toAmino(message: _167.MsgChannelOpenInitResponse): _167.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _167.MsgChannelOpenInitResponseAminoMsg): _167.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _167.MsgChannelOpenInitResponse): _167.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _167.MsgChannelOpenInitResponseProtoMsg): _167.MsgChannelOpenInitResponse;
                    toProto(message: _167.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _167.MsgChannelOpenInitResponse): _167.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    typeUrl: string;
                    encode(message: _167.MsgChannelOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.MsgChannelOpenTry;
                    fromPartial(object: Partial<_167.MsgChannelOpenTry>): _167.MsgChannelOpenTry;
                    fromAmino(object: _167.MsgChannelOpenTryAmino): _167.MsgChannelOpenTry;
                    toAmino(message: _167.MsgChannelOpenTry): _167.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _167.MsgChannelOpenTryAminoMsg): _167.MsgChannelOpenTry;
                    toAminoMsg(message: _167.MsgChannelOpenTry): _167.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _167.MsgChannelOpenTryProtoMsg): _167.MsgChannelOpenTry;
                    toProto(message: _167.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _167.MsgChannelOpenTry): _167.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    typeUrl: string;
                    encode(message: _167.MsgChannelOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.MsgChannelOpenTryResponse;
                    fromPartial(object: Partial<_167.MsgChannelOpenTryResponse>): _167.MsgChannelOpenTryResponse;
                    fromAmino(object: _167.MsgChannelOpenTryResponseAmino): _167.MsgChannelOpenTryResponse;
                    toAmino(message: _167.MsgChannelOpenTryResponse): _167.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _167.MsgChannelOpenTryResponseAminoMsg): _167.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _167.MsgChannelOpenTryResponse): _167.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _167.MsgChannelOpenTryResponseProtoMsg): _167.MsgChannelOpenTryResponse;
                    toProto(message: _167.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _167.MsgChannelOpenTryResponse): _167.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    typeUrl: string;
                    encode(message: _167.MsgChannelOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.MsgChannelOpenAck;
                    fromPartial(object: Partial<_167.MsgChannelOpenAck>): _167.MsgChannelOpenAck;
                    fromAmino(object: _167.MsgChannelOpenAckAmino): _167.MsgChannelOpenAck;
                    toAmino(message: _167.MsgChannelOpenAck): _167.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _167.MsgChannelOpenAckAminoMsg): _167.MsgChannelOpenAck;
                    toAminoMsg(message: _167.MsgChannelOpenAck): _167.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _167.MsgChannelOpenAckProtoMsg): _167.MsgChannelOpenAck;
                    toProto(message: _167.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _167.MsgChannelOpenAck): _167.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _167.MsgChannelOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.MsgChannelOpenAckResponse;
                    fromPartial(_: Partial<_167.MsgChannelOpenAckResponse>): _167.MsgChannelOpenAckResponse;
                    fromAmino(_: _167.MsgChannelOpenAckResponseAmino): _167.MsgChannelOpenAckResponse;
                    toAmino(_: _167.MsgChannelOpenAckResponse): _167.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _167.MsgChannelOpenAckResponseAminoMsg): _167.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _167.MsgChannelOpenAckResponse): _167.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _167.MsgChannelOpenAckResponseProtoMsg): _167.MsgChannelOpenAckResponse;
                    toProto(message: _167.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _167.MsgChannelOpenAckResponse): _167.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    typeUrl: string;
                    encode(message: _167.MsgChannelOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.MsgChannelOpenConfirm;
                    fromPartial(object: Partial<_167.MsgChannelOpenConfirm>): _167.MsgChannelOpenConfirm;
                    fromAmino(object: _167.MsgChannelOpenConfirmAmino): _167.MsgChannelOpenConfirm;
                    toAmino(message: _167.MsgChannelOpenConfirm): _167.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _167.MsgChannelOpenConfirmAminoMsg): _167.MsgChannelOpenConfirm;
                    toAminoMsg(message: _167.MsgChannelOpenConfirm): _167.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _167.MsgChannelOpenConfirmProtoMsg): _167.MsgChannelOpenConfirm;
                    toProto(message: _167.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _167.MsgChannelOpenConfirm): _167.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _167.MsgChannelOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.MsgChannelOpenConfirmResponse;
                    fromPartial(_: Partial<_167.MsgChannelOpenConfirmResponse>): _167.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _167.MsgChannelOpenConfirmResponseAmino): _167.MsgChannelOpenConfirmResponse;
                    toAmino(_: _167.MsgChannelOpenConfirmResponse): _167.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _167.MsgChannelOpenConfirmResponseAminoMsg): _167.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _167.MsgChannelOpenConfirmResponse): _167.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _167.MsgChannelOpenConfirmResponseProtoMsg): _167.MsgChannelOpenConfirmResponse;
                    toProto(message: _167.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _167.MsgChannelOpenConfirmResponse): _167.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    typeUrl: string;
                    encode(message: _167.MsgChannelCloseInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.MsgChannelCloseInit;
                    fromPartial(object: Partial<_167.MsgChannelCloseInit>): _167.MsgChannelCloseInit;
                    fromAmino(object: _167.MsgChannelCloseInitAmino): _167.MsgChannelCloseInit;
                    toAmino(message: _167.MsgChannelCloseInit): _167.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _167.MsgChannelCloseInitAminoMsg): _167.MsgChannelCloseInit;
                    toAminoMsg(message: _167.MsgChannelCloseInit): _167.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _167.MsgChannelCloseInitProtoMsg): _167.MsgChannelCloseInit;
                    toProto(message: _167.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _167.MsgChannelCloseInit): _167.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    typeUrl: string;
                    encode(_: _167.MsgChannelCloseInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.MsgChannelCloseInitResponse;
                    fromPartial(_: Partial<_167.MsgChannelCloseInitResponse>): _167.MsgChannelCloseInitResponse;
                    fromAmino(_: _167.MsgChannelCloseInitResponseAmino): _167.MsgChannelCloseInitResponse;
                    toAmino(_: _167.MsgChannelCloseInitResponse): _167.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _167.MsgChannelCloseInitResponseAminoMsg): _167.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _167.MsgChannelCloseInitResponse): _167.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _167.MsgChannelCloseInitResponseProtoMsg): _167.MsgChannelCloseInitResponse;
                    toProto(message: _167.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _167.MsgChannelCloseInitResponse): _167.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    typeUrl: string;
                    encode(message: _167.MsgChannelCloseConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.MsgChannelCloseConfirm;
                    fromPartial(object: Partial<_167.MsgChannelCloseConfirm>): _167.MsgChannelCloseConfirm;
                    fromAmino(object: _167.MsgChannelCloseConfirmAmino): _167.MsgChannelCloseConfirm;
                    toAmino(message: _167.MsgChannelCloseConfirm): _167.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _167.MsgChannelCloseConfirmAminoMsg): _167.MsgChannelCloseConfirm;
                    toAminoMsg(message: _167.MsgChannelCloseConfirm): _167.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _167.MsgChannelCloseConfirmProtoMsg): _167.MsgChannelCloseConfirm;
                    toProto(message: _167.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _167.MsgChannelCloseConfirm): _167.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    typeUrl: string;
                    encode(_: _167.MsgChannelCloseConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.MsgChannelCloseConfirmResponse;
                    fromPartial(_: Partial<_167.MsgChannelCloseConfirmResponse>): _167.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _167.MsgChannelCloseConfirmResponseAmino): _167.MsgChannelCloseConfirmResponse;
                    toAmino(_: _167.MsgChannelCloseConfirmResponse): _167.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _167.MsgChannelCloseConfirmResponseAminoMsg): _167.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _167.MsgChannelCloseConfirmResponse): _167.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _167.MsgChannelCloseConfirmResponseProtoMsg): _167.MsgChannelCloseConfirmResponse;
                    toProto(message: _167.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _167.MsgChannelCloseConfirmResponse): _167.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    typeUrl: string;
                    encode(message: _167.MsgRecvPacket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.MsgRecvPacket;
                    fromPartial(object: Partial<_167.MsgRecvPacket>): _167.MsgRecvPacket;
                    fromAmino(object: _167.MsgRecvPacketAmino): _167.MsgRecvPacket;
                    toAmino(message: _167.MsgRecvPacket): _167.MsgRecvPacketAmino;
                    fromAminoMsg(object: _167.MsgRecvPacketAminoMsg): _167.MsgRecvPacket;
                    toAminoMsg(message: _167.MsgRecvPacket): _167.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _167.MsgRecvPacketProtoMsg): _167.MsgRecvPacket;
                    toProto(message: _167.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _167.MsgRecvPacket): _167.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    typeUrl: string;
                    encode(message: _167.MsgRecvPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.MsgRecvPacketResponse;
                    fromPartial(object: Partial<_167.MsgRecvPacketResponse>): _167.MsgRecvPacketResponse;
                    fromAmino(object: _167.MsgRecvPacketResponseAmino): _167.MsgRecvPacketResponse;
                    toAmino(message: _167.MsgRecvPacketResponse): _167.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _167.MsgRecvPacketResponseAminoMsg): _167.MsgRecvPacketResponse;
                    toAminoMsg(message: _167.MsgRecvPacketResponse): _167.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _167.MsgRecvPacketResponseProtoMsg): _167.MsgRecvPacketResponse;
                    toProto(message: _167.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _167.MsgRecvPacketResponse): _167.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    typeUrl: string;
                    encode(message: _167.MsgTimeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.MsgTimeout;
                    fromPartial(object: Partial<_167.MsgTimeout>): _167.MsgTimeout;
                    fromAmino(object: _167.MsgTimeoutAmino): _167.MsgTimeout;
                    toAmino(message: _167.MsgTimeout): _167.MsgTimeoutAmino;
                    fromAminoMsg(object: _167.MsgTimeoutAminoMsg): _167.MsgTimeout;
                    toAminoMsg(message: _167.MsgTimeout): _167.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _167.MsgTimeoutProtoMsg): _167.MsgTimeout;
                    toProto(message: _167.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _167.MsgTimeout): _167.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    typeUrl: string;
                    encode(message: _167.MsgTimeoutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.MsgTimeoutResponse;
                    fromPartial(object: Partial<_167.MsgTimeoutResponse>): _167.MsgTimeoutResponse;
                    fromAmino(object: _167.MsgTimeoutResponseAmino): _167.MsgTimeoutResponse;
                    toAmino(message: _167.MsgTimeoutResponse): _167.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _167.MsgTimeoutResponseAminoMsg): _167.MsgTimeoutResponse;
                    toAminoMsg(message: _167.MsgTimeoutResponse): _167.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _167.MsgTimeoutResponseProtoMsg): _167.MsgTimeoutResponse;
                    toProto(message: _167.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _167.MsgTimeoutResponse): _167.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    typeUrl: string;
                    encode(message: _167.MsgTimeoutOnClose, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.MsgTimeoutOnClose;
                    fromPartial(object: Partial<_167.MsgTimeoutOnClose>): _167.MsgTimeoutOnClose;
                    fromAmino(object: _167.MsgTimeoutOnCloseAmino): _167.MsgTimeoutOnClose;
                    toAmino(message: _167.MsgTimeoutOnClose): _167.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _167.MsgTimeoutOnCloseAminoMsg): _167.MsgTimeoutOnClose;
                    toAminoMsg(message: _167.MsgTimeoutOnClose): _167.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _167.MsgTimeoutOnCloseProtoMsg): _167.MsgTimeoutOnClose;
                    toProto(message: _167.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _167.MsgTimeoutOnClose): _167.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    typeUrl: string;
                    encode(message: _167.MsgTimeoutOnCloseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.MsgTimeoutOnCloseResponse;
                    fromPartial(object: Partial<_167.MsgTimeoutOnCloseResponse>): _167.MsgTimeoutOnCloseResponse;
                    fromAmino(object: _167.MsgTimeoutOnCloseResponseAmino): _167.MsgTimeoutOnCloseResponse;
                    toAmino(message: _167.MsgTimeoutOnCloseResponse): _167.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _167.MsgTimeoutOnCloseResponseAminoMsg): _167.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _167.MsgTimeoutOnCloseResponse): _167.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _167.MsgTimeoutOnCloseResponseProtoMsg): _167.MsgTimeoutOnCloseResponse;
                    toProto(message: _167.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _167.MsgTimeoutOnCloseResponse): _167.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    typeUrl: string;
                    encode(message: _167.MsgAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.MsgAcknowledgement;
                    fromPartial(object: Partial<_167.MsgAcknowledgement>): _167.MsgAcknowledgement;
                    fromAmino(object: _167.MsgAcknowledgementAmino): _167.MsgAcknowledgement;
                    toAmino(message: _167.MsgAcknowledgement): _167.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _167.MsgAcknowledgementAminoMsg): _167.MsgAcknowledgement;
                    toAminoMsg(message: _167.MsgAcknowledgement): _167.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _167.MsgAcknowledgementProtoMsg): _167.MsgAcknowledgement;
                    toProto(message: _167.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _167.MsgAcknowledgement): _167.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _167.MsgAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.MsgAcknowledgementResponse;
                    fromPartial(object: Partial<_167.MsgAcknowledgementResponse>): _167.MsgAcknowledgementResponse;
                    fromAmino(object: _167.MsgAcknowledgementResponseAmino): _167.MsgAcknowledgementResponse;
                    toAmino(message: _167.MsgAcknowledgementResponse): _167.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _167.MsgAcknowledgementResponseAminoMsg): _167.MsgAcknowledgementResponse;
                    toAminoMsg(message: _167.MsgAcknowledgementResponse): _167.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _167.MsgAcknowledgementResponseProtoMsg): _167.MsgAcknowledgementResponse;
                    toProto(message: _167.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _167.MsgAcknowledgementResponse): _167.MsgAcknowledgementResponseProtoMsg;
                };
                QueryChannelRequest: {
                    typeUrl: string;
                    encode(message: _166.QueryChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryChannelRequest;
                    fromPartial(object: Partial<_166.QueryChannelRequest>): _166.QueryChannelRequest;
                    fromAmino(object: _166.QueryChannelRequestAmino): _166.QueryChannelRequest;
                    toAmino(message: _166.QueryChannelRequest): _166.QueryChannelRequestAmino;
                    fromAminoMsg(object: _166.QueryChannelRequestAminoMsg): _166.QueryChannelRequest;
                    toAminoMsg(message: _166.QueryChannelRequest): _166.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _166.QueryChannelRequestProtoMsg): _166.QueryChannelRequest;
                    toProto(message: _166.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _166.QueryChannelRequest): _166.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    typeUrl: string;
                    encode(message: _166.QueryChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryChannelResponse;
                    fromPartial(object: Partial<_166.QueryChannelResponse>): _166.QueryChannelResponse;
                    fromAmino(object: _166.QueryChannelResponseAmino): _166.QueryChannelResponse;
                    toAmino(message: _166.QueryChannelResponse): _166.QueryChannelResponseAmino;
                    fromAminoMsg(object: _166.QueryChannelResponseAminoMsg): _166.QueryChannelResponse;
                    toAminoMsg(message: _166.QueryChannelResponse): _166.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _166.QueryChannelResponseProtoMsg): _166.QueryChannelResponse;
                    toProto(message: _166.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _166.QueryChannelResponse): _166.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    typeUrl: string;
                    encode(message: _166.QueryChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryChannelsRequest;
                    fromPartial(object: Partial<_166.QueryChannelsRequest>): _166.QueryChannelsRequest;
                    fromAmino(object: _166.QueryChannelsRequestAmino): _166.QueryChannelsRequest;
                    toAmino(message: _166.QueryChannelsRequest): _166.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _166.QueryChannelsRequestAminoMsg): _166.QueryChannelsRequest;
                    toAminoMsg(message: _166.QueryChannelsRequest): _166.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _166.QueryChannelsRequestProtoMsg): _166.QueryChannelsRequest;
                    toProto(message: _166.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _166.QueryChannelsRequest): _166.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    typeUrl: string;
                    encode(message: _166.QueryChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryChannelsResponse;
                    fromPartial(object: Partial<_166.QueryChannelsResponse>): _166.QueryChannelsResponse;
                    fromAmino(object: _166.QueryChannelsResponseAmino): _166.QueryChannelsResponse;
                    toAmino(message: _166.QueryChannelsResponse): _166.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _166.QueryChannelsResponseAminoMsg): _166.QueryChannelsResponse;
                    toAminoMsg(message: _166.QueryChannelsResponse): _166.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _166.QueryChannelsResponseProtoMsg): _166.QueryChannelsResponse;
                    toProto(message: _166.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _166.QueryChannelsResponse): _166.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    typeUrl: string;
                    encode(message: _166.QueryConnectionChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryConnectionChannelsRequest;
                    fromPartial(object: Partial<_166.QueryConnectionChannelsRequest>): _166.QueryConnectionChannelsRequest;
                    fromAmino(object: _166.QueryConnectionChannelsRequestAmino): _166.QueryConnectionChannelsRequest;
                    toAmino(message: _166.QueryConnectionChannelsRequest): _166.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _166.QueryConnectionChannelsRequestAminoMsg): _166.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _166.QueryConnectionChannelsRequest): _166.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _166.QueryConnectionChannelsRequestProtoMsg): _166.QueryConnectionChannelsRequest;
                    toProto(message: _166.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _166.QueryConnectionChannelsRequest): _166.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    typeUrl: string;
                    encode(message: _166.QueryConnectionChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryConnectionChannelsResponse;
                    fromPartial(object: Partial<_166.QueryConnectionChannelsResponse>): _166.QueryConnectionChannelsResponse;
                    fromAmino(object: _166.QueryConnectionChannelsResponseAmino): _166.QueryConnectionChannelsResponse;
                    toAmino(message: _166.QueryConnectionChannelsResponse): _166.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _166.QueryConnectionChannelsResponseAminoMsg): _166.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _166.QueryConnectionChannelsResponse): _166.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _166.QueryConnectionChannelsResponseProtoMsg): _166.QueryConnectionChannelsResponse;
                    toProto(message: _166.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _166.QueryConnectionChannelsResponse): _166.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    typeUrl: string;
                    encode(message: _166.QueryChannelClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryChannelClientStateRequest;
                    fromPartial(object: Partial<_166.QueryChannelClientStateRequest>): _166.QueryChannelClientStateRequest;
                    fromAmino(object: _166.QueryChannelClientStateRequestAmino): _166.QueryChannelClientStateRequest;
                    toAmino(message: _166.QueryChannelClientStateRequest): _166.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _166.QueryChannelClientStateRequestAminoMsg): _166.QueryChannelClientStateRequest;
                    toAminoMsg(message: _166.QueryChannelClientStateRequest): _166.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _166.QueryChannelClientStateRequestProtoMsg): _166.QueryChannelClientStateRequest;
                    toProto(message: _166.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _166.QueryChannelClientStateRequest): _166.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    typeUrl: string;
                    encode(message: _166.QueryChannelClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryChannelClientStateResponse;
                    fromPartial(object: Partial<_166.QueryChannelClientStateResponse>): _166.QueryChannelClientStateResponse;
                    fromAmino(object: _166.QueryChannelClientStateResponseAmino): _166.QueryChannelClientStateResponse;
                    toAmino(message: _166.QueryChannelClientStateResponse): _166.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _166.QueryChannelClientStateResponseAminoMsg): _166.QueryChannelClientStateResponse;
                    toAminoMsg(message: _166.QueryChannelClientStateResponse): _166.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _166.QueryChannelClientStateResponseProtoMsg): _166.QueryChannelClientStateResponse;
                    toProto(message: _166.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _166.QueryChannelClientStateResponse): _166.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _166.QueryChannelConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryChannelConsensusStateRequest;
                    fromPartial(object: Partial<_166.QueryChannelConsensusStateRequest>): _166.QueryChannelConsensusStateRequest;
                    fromAmino(object: _166.QueryChannelConsensusStateRequestAmino): _166.QueryChannelConsensusStateRequest;
                    toAmino(message: _166.QueryChannelConsensusStateRequest): _166.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _166.QueryChannelConsensusStateRequestAminoMsg): _166.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _166.QueryChannelConsensusStateRequest): _166.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _166.QueryChannelConsensusStateRequestProtoMsg): _166.QueryChannelConsensusStateRequest;
                    toProto(message: _166.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _166.QueryChannelConsensusStateRequest): _166.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _166.QueryChannelConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryChannelConsensusStateResponse;
                    fromPartial(object: Partial<_166.QueryChannelConsensusStateResponse>): _166.QueryChannelConsensusStateResponse;
                    fromAmino(object: _166.QueryChannelConsensusStateResponseAmino): _166.QueryChannelConsensusStateResponse;
                    toAmino(message: _166.QueryChannelConsensusStateResponse): _166.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _166.QueryChannelConsensusStateResponseAminoMsg): _166.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _166.QueryChannelConsensusStateResponse): _166.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _166.QueryChannelConsensusStateResponseProtoMsg): _166.QueryChannelConsensusStateResponse;
                    toProto(message: _166.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _166.QueryChannelConsensusStateResponse): _166.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    typeUrl: string;
                    encode(message: _166.QueryPacketCommitmentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryPacketCommitmentRequest;
                    fromPartial(object: Partial<_166.QueryPacketCommitmentRequest>): _166.QueryPacketCommitmentRequest;
                    fromAmino(object: _166.QueryPacketCommitmentRequestAmino): _166.QueryPacketCommitmentRequest;
                    toAmino(message: _166.QueryPacketCommitmentRequest): _166.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _166.QueryPacketCommitmentRequestAminoMsg): _166.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _166.QueryPacketCommitmentRequest): _166.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _166.QueryPacketCommitmentRequestProtoMsg): _166.QueryPacketCommitmentRequest;
                    toProto(message: _166.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _166.QueryPacketCommitmentRequest): _166.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    typeUrl: string;
                    encode(message: _166.QueryPacketCommitmentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryPacketCommitmentResponse;
                    fromPartial(object: Partial<_166.QueryPacketCommitmentResponse>): _166.QueryPacketCommitmentResponse;
                    fromAmino(object: _166.QueryPacketCommitmentResponseAmino): _166.QueryPacketCommitmentResponse;
                    toAmino(message: _166.QueryPacketCommitmentResponse): _166.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _166.QueryPacketCommitmentResponseAminoMsg): _166.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _166.QueryPacketCommitmentResponse): _166.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _166.QueryPacketCommitmentResponseProtoMsg): _166.QueryPacketCommitmentResponse;
                    toProto(message: _166.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _166.QueryPacketCommitmentResponse): _166.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    typeUrl: string;
                    encode(message: _166.QueryPacketCommitmentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryPacketCommitmentsRequest;
                    fromPartial(object: Partial<_166.QueryPacketCommitmentsRequest>): _166.QueryPacketCommitmentsRequest;
                    fromAmino(object: _166.QueryPacketCommitmentsRequestAmino): _166.QueryPacketCommitmentsRequest;
                    toAmino(message: _166.QueryPacketCommitmentsRequest): _166.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _166.QueryPacketCommitmentsRequestAminoMsg): _166.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _166.QueryPacketCommitmentsRequest): _166.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _166.QueryPacketCommitmentsRequestProtoMsg): _166.QueryPacketCommitmentsRequest;
                    toProto(message: _166.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _166.QueryPacketCommitmentsRequest): _166.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    typeUrl: string;
                    encode(message: _166.QueryPacketCommitmentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryPacketCommitmentsResponse;
                    fromPartial(object: Partial<_166.QueryPacketCommitmentsResponse>): _166.QueryPacketCommitmentsResponse;
                    fromAmino(object: _166.QueryPacketCommitmentsResponseAmino): _166.QueryPacketCommitmentsResponse;
                    toAmino(message: _166.QueryPacketCommitmentsResponse): _166.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _166.QueryPacketCommitmentsResponseAminoMsg): _166.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _166.QueryPacketCommitmentsResponse): _166.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _166.QueryPacketCommitmentsResponseProtoMsg): _166.QueryPacketCommitmentsResponse;
                    toProto(message: _166.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _166.QueryPacketCommitmentsResponse): _166.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    typeUrl: string;
                    encode(message: _166.QueryPacketReceiptRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryPacketReceiptRequest;
                    fromPartial(object: Partial<_166.QueryPacketReceiptRequest>): _166.QueryPacketReceiptRequest;
                    fromAmino(object: _166.QueryPacketReceiptRequestAmino): _166.QueryPacketReceiptRequest;
                    toAmino(message: _166.QueryPacketReceiptRequest): _166.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _166.QueryPacketReceiptRequestAminoMsg): _166.QueryPacketReceiptRequest;
                    toAminoMsg(message: _166.QueryPacketReceiptRequest): _166.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _166.QueryPacketReceiptRequestProtoMsg): _166.QueryPacketReceiptRequest;
                    toProto(message: _166.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _166.QueryPacketReceiptRequest): _166.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    typeUrl: string;
                    encode(message: _166.QueryPacketReceiptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryPacketReceiptResponse;
                    fromPartial(object: Partial<_166.QueryPacketReceiptResponse>): _166.QueryPacketReceiptResponse;
                    fromAmino(object: _166.QueryPacketReceiptResponseAmino): _166.QueryPacketReceiptResponse;
                    toAmino(message: _166.QueryPacketReceiptResponse): _166.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _166.QueryPacketReceiptResponseAminoMsg): _166.QueryPacketReceiptResponse;
                    toAminoMsg(message: _166.QueryPacketReceiptResponse): _166.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _166.QueryPacketReceiptResponseProtoMsg): _166.QueryPacketReceiptResponse;
                    toProto(message: _166.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _166.QueryPacketReceiptResponse): _166.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    typeUrl: string;
                    encode(message: _166.QueryPacketAcknowledgementRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryPacketAcknowledgementRequest;
                    fromPartial(object: Partial<_166.QueryPacketAcknowledgementRequest>): _166.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _166.QueryPacketAcknowledgementRequestAmino): _166.QueryPacketAcknowledgementRequest;
                    toAmino(message: _166.QueryPacketAcknowledgementRequest): _166.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _166.QueryPacketAcknowledgementRequestAminoMsg): _166.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _166.QueryPacketAcknowledgementRequest): _166.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _166.QueryPacketAcknowledgementRequestProtoMsg): _166.QueryPacketAcknowledgementRequest;
                    toProto(message: _166.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _166.QueryPacketAcknowledgementRequest): _166.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _166.QueryPacketAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryPacketAcknowledgementResponse;
                    fromPartial(object: Partial<_166.QueryPacketAcknowledgementResponse>): _166.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _166.QueryPacketAcknowledgementResponseAmino): _166.QueryPacketAcknowledgementResponse;
                    toAmino(message: _166.QueryPacketAcknowledgementResponse): _166.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _166.QueryPacketAcknowledgementResponseAminoMsg): _166.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _166.QueryPacketAcknowledgementResponse): _166.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _166.QueryPacketAcknowledgementResponseProtoMsg): _166.QueryPacketAcknowledgementResponse;
                    toProto(message: _166.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _166.QueryPacketAcknowledgementResponse): _166.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    typeUrl: string;
                    encode(message: _166.QueryPacketAcknowledgementsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: Partial<_166.QueryPacketAcknowledgementsRequest>): _166.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _166.QueryPacketAcknowledgementsRequestAmino): _166.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _166.QueryPacketAcknowledgementsRequest): _166.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _166.QueryPacketAcknowledgementsRequestAminoMsg): _166.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _166.QueryPacketAcknowledgementsRequest): _166.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _166.QueryPacketAcknowledgementsRequestProtoMsg): _166.QueryPacketAcknowledgementsRequest;
                    toProto(message: _166.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _166.QueryPacketAcknowledgementsRequest): _166.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    typeUrl: string;
                    encode(message: _166.QueryPacketAcknowledgementsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: Partial<_166.QueryPacketAcknowledgementsResponse>): _166.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _166.QueryPacketAcknowledgementsResponseAmino): _166.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _166.QueryPacketAcknowledgementsResponse): _166.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _166.QueryPacketAcknowledgementsResponseAminoMsg): _166.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _166.QueryPacketAcknowledgementsResponse): _166.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _166.QueryPacketAcknowledgementsResponseProtoMsg): _166.QueryPacketAcknowledgementsResponse;
                    toProto(message: _166.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _166.QueryPacketAcknowledgementsResponse): _166.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _166.QueryUnreceivedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryUnreceivedPacketsRequest;
                    fromPartial(object: Partial<_166.QueryUnreceivedPacketsRequest>): _166.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _166.QueryUnreceivedPacketsRequestAmino): _166.QueryUnreceivedPacketsRequest;
                    toAmino(message: _166.QueryUnreceivedPacketsRequest): _166.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _166.QueryUnreceivedPacketsRequestAminoMsg): _166.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _166.QueryUnreceivedPacketsRequest): _166.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _166.QueryUnreceivedPacketsRequestProtoMsg): _166.QueryUnreceivedPacketsRequest;
                    toProto(message: _166.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _166.QueryUnreceivedPacketsRequest): _166.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _166.QueryUnreceivedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryUnreceivedPacketsResponse;
                    fromPartial(object: Partial<_166.QueryUnreceivedPacketsResponse>): _166.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _166.QueryUnreceivedPacketsResponseAmino): _166.QueryUnreceivedPacketsResponse;
                    toAmino(message: _166.QueryUnreceivedPacketsResponse): _166.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _166.QueryUnreceivedPacketsResponseAminoMsg): _166.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _166.QueryUnreceivedPacketsResponse): _166.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _166.QueryUnreceivedPacketsResponseProtoMsg): _166.QueryUnreceivedPacketsResponse;
                    toProto(message: _166.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _166.QueryUnreceivedPacketsResponse): _166.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    typeUrl: string;
                    encode(message: _166.QueryUnreceivedAcksRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryUnreceivedAcksRequest;
                    fromPartial(object: Partial<_166.QueryUnreceivedAcksRequest>): _166.QueryUnreceivedAcksRequest;
                    fromAmino(object: _166.QueryUnreceivedAcksRequestAmino): _166.QueryUnreceivedAcksRequest;
                    toAmino(message: _166.QueryUnreceivedAcksRequest): _166.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _166.QueryUnreceivedAcksRequestAminoMsg): _166.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _166.QueryUnreceivedAcksRequest): _166.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _166.QueryUnreceivedAcksRequestProtoMsg): _166.QueryUnreceivedAcksRequest;
                    toProto(message: _166.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _166.QueryUnreceivedAcksRequest): _166.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    typeUrl: string;
                    encode(message: _166.QueryUnreceivedAcksResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryUnreceivedAcksResponse;
                    fromPartial(object: Partial<_166.QueryUnreceivedAcksResponse>): _166.QueryUnreceivedAcksResponse;
                    fromAmino(object: _166.QueryUnreceivedAcksResponseAmino): _166.QueryUnreceivedAcksResponse;
                    toAmino(message: _166.QueryUnreceivedAcksResponse): _166.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _166.QueryUnreceivedAcksResponseAminoMsg): _166.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _166.QueryUnreceivedAcksResponse): _166.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _166.QueryUnreceivedAcksResponseProtoMsg): _166.QueryUnreceivedAcksResponse;
                    toProto(message: _166.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _166.QueryUnreceivedAcksResponse): _166.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    typeUrl: string;
                    encode(message: _166.QueryNextSequenceReceiveRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryNextSequenceReceiveRequest;
                    fromPartial(object: Partial<_166.QueryNextSequenceReceiveRequest>): _166.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _166.QueryNextSequenceReceiveRequestAmino): _166.QueryNextSequenceReceiveRequest;
                    toAmino(message: _166.QueryNextSequenceReceiveRequest): _166.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _166.QueryNextSequenceReceiveRequestAminoMsg): _166.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _166.QueryNextSequenceReceiveRequest): _166.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _166.QueryNextSequenceReceiveRequestProtoMsg): _166.QueryNextSequenceReceiveRequest;
                    toProto(message: _166.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _166.QueryNextSequenceReceiveRequest): _166.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    typeUrl: string;
                    encode(message: _166.QueryNextSequenceReceiveResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.QueryNextSequenceReceiveResponse;
                    fromPartial(object: Partial<_166.QueryNextSequenceReceiveResponse>): _166.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _166.QueryNextSequenceReceiveResponseAmino): _166.QueryNextSequenceReceiveResponse;
                    toAmino(message: _166.QueryNextSequenceReceiveResponse): _166.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _166.QueryNextSequenceReceiveResponseAminoMsg): _166.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _166.QueryNextSequenceReceiveResponse): _166.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _166.QueryNextSequenceReceiveResponseProtoMsg): _166.QueryNextSequenceReceiveResponse;
                    toProto(message: _166.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _166.QueryNextSequenceReceiveResponse): _166.QueryNextSequenceReceiveResponseProtoMsg;
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
                PacketSequence: {
                    typeUrl: string;
                    encode(message: _165.PacketSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.PacketSequence;
                    fromPartial(object: Partial<_165.PacketSequence>): _165.PacketSequence;
                    fromAmino(object: _165.PacketSequenceAmino): _165.PacketSequence;
                    toAmino(message: _165.PacketSequence): _165.PacketSequenceAmino;
                    fromAminoMsg(object: _165.PacketSequenceAminoMsg): _165.PacketSequence;
                    toAminoMsg(message: _165.PacketSequence): _165.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _165.PacketSequenceProtoMsg): _165.PacketSequence;
                    toProto(message: _165.PacketSequence): Uint8Array;
                    toProtoMsg(message: _165.PacketSequence): _165.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _164.State;
                stateToJSON(object: _164.State): string;
                orderFromJSON(object: any): _164.Order;
                orderToJSON(object: _164.Order): string;
                State: typeof _164.State;
                StateSDKType: typeof _164.State;
                StateAmino: typeof _164.State;
                Order: typeof _164.Order;
                OrderSDKType: typeof _164.Order;
                OrderAmino: typeof _164.Order;
                Channel: {
                    typeUrl: string;
                    encode(message: _164.Channel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.Channel;
                    fromPartial(object: Partial<_164.Channel>): _164.Channel;
                    fromAmino(object: _164.ChannelAmino): _164.Channel;
                    toAmino(message: _164.Channel): _164.ChannelAmino;
                    fromAminoMsg(object: _164.ChannelAminoMsg): _164.Channel;
                    toAminoMsg(message: _164.Channel): _164.ChannelAminoMsg;
                    fromProtoMsg(message: _164.ChannelProtoMsg): _164.Channel;
                    toProto(message: _164.Channel): Uint8Array;
                    toProtoMsg(message: _164.Channel): _164.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    encode(message: _164.IdentifiedChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.IdentifiedChannel;
                    fromPartial(object: Partial<_164.IdentifiedChannel>): _164.IdentifiedChannel;
                    fromAmino(object: _164.IdentifiedChannelAmino): _164.IdentifiedChannel;
                    toAmino(message: _164.IdentifiedChannel): _164.IdentifiedChannelAmino;
                    fromAminoMsg(object: _164.IdentifiedChannelAminoMsg): _164.IdentifiedChannel;
                    toAminoMsg(message: _164.IdentifiedChannel): _164.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _164.IdentifiedChannelProtoMsg): _164.IdentifiedChannel;
                    toProto(message: _164.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _164.IdentifiedChannel): _164.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _164.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.Counterparty;
                    fromPartial(object: Partial<_164.Counterparty>): _164.Counterparty;
                    fromAmino(object: _164.CounterpartyAmino): _164.Counterparty;
                    toAmino(message: _164.Counterparty): _164.CounterpartyAmino;
                    fromAminoMsg(object: _164.CounterpartyAminoMsg): _164.Counterparty;
                    toAminoMsg(message: _164.Counterparty): _164.CounterpartyAminoMsg;
                    fromProtoMsg(message: _164.CounterpartyProtoMsg): _164.Counterparty;
                    toProto(message: _164.Counterparty): Uint8Array;
                    toProtoMsg(message: _164.Counterparty): _164.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    encode(message: _164.Packet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.Packet;
                    fromPartial(object: Partial<_164.Packet>): _164.Packet;
                    fromAmino(object: _164.PacketAmino): _164.Packet;
                    toAmino(message: _164.Packet): _164.PacketAmino;
                    fromAminoMsg(object: _164.PacketAminoMsg): _164.Packet;
                    toAminoMsg(message: _164.Packet): _164.PacketAminoMsg;
                    fromProtoMsg(message: _164.PacketProtoMsg): _164.Packet;
                    toProto(message: _164.Packet): Uint8Array;
                    toProtoMsg(message: _164.Packet): _164.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    encode(message: _164.PacketState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.PacketState;
                    fromPartial(object: Partial<_164.PacketState>): _164.PacketState;
                    fromAmino(object: _164.PacketStateAmino): _164.PacketState;
                    toAmino(message: _164.PacketState): _164.PacketStateAmino;
                    fromAminoMsg(object: _164.PacketStateAminoMsg): _164.PacketState;
                    toAminoMsg(message: _164.PacketState): _164.PacketStateAminoMsg;
                    fromProtoMsg(message: _164.PacketStateProtoMsg): _164.PacketState;
                    toProto(message: _164.PacketState): Uint8Array;
                    toProtoMsg(message: _164.PacketState): _164.PacketStateProtoMsg;
                };
                PacketId: {
                    typeUrl: string;
                    encode(message: _164.PacketId, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.PacketId;
                    fromPartial(object: Partial<_164.PacketId>): _164.PacketId;
                    fromAmino(object: _164.PacketIdAmino): _164.PacketId;
                    toAmino(message: _164.PacketId): _164.PacketIdAmino;
                    fromAminoMsg(object: _164.PacketIdAminoMsg): _164.PacketId;
                    toAminoMsg(message: _164.PacketId): _164.PacketIdAminoMsg;
                    fromProtoMsg(message: _164.PacketIdProtoMsg): _164.PacketId;
                    toProto(message: _164.PacketId): Uint8Array;
                    toProtoMsg(message: _164.PacketId): _164.PacketIdProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    encode(message: _164.Acknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.Acknowledgement;
                    fromPartial(object: Partial<_164.Acknowledgement>): _164.Acknowledgement;
                    fromAmino(object: _164.AcknowledgementAmino): _164.Acknowledgement;
                    toAmino(message: _164.Acknowledgement): _164.AcknowledgementAmino;
                    fromAminoMsg(object: _164.AcknowledgementAminoMsg): _164.Acknowledgement;
                    toAminoMsg(message: _164.Acknowledgement): _164.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _164.AcknowledgementProtoMsg): _164.Acknowledgement;
                    toProto(message: _164.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _164.Acknowledgement): _164.AcknowledgementProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _364.MsgClientImpl;
                QueryClientImpl: typeof _358.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _170.QueryClientStateRequest): Promise<_170.QueryClientStateResponse>;
                    clientStates(request?: _170.QueryClientStatesRequest): Promise<_170.QueryClientStatesResponse>;
                    consensusState(request: _170.QueryConsensusStateRequest): Promise<_170.QueryConsensusStateResponse>;
                    consensusStates(request: _170.QueryConsensusStatesRequest): Promise<_170.QueryConsensusStatesResponse>;
                    consensusStateHeights(request: _170.QueryConsensusStateHeightsRequest): Promise<_170.QueryConsensusStateHeightsResponse>;
                    clientStatus(request: _170.QueryClientStatusRequest): Promise<_170.QueryClientStatusResponse>;
                    clientParams(request?: _170.QueryClientParamsRequest): Promise<_170.QueryClientParamsResponse>;
                    upgradedClientState(request?: _170.QueryUpgradedClientStateRequest): Promise<_170.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _170.QueryUpgradedConsensusStateRequest): Promise<_170.QueryUpgradedConsensusStateResponse>;
                };
                registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _171.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _171.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _171.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _171.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _171.MsgCreateClient): {
                            typeUrl: string;
                            value: _171.MsgCreateClient;
                        };
                        updateClient(value: _171.MsgUpdateClient): {
                            typeUrl: string;
                            value: _171.MsgUpdateClient;
                        };
                        upgradeClient(value: _171.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _171.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _171.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _171.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _171.MsgCreateClient): {
                            typeUrl: string;
                            value: _171.MsgCreateClient;
                        };
                        updateClient(value: _171.MsgUpdateClient): {
                            typeUrl: string;
                            value: _171.MsgUpdateClient;
                        };
                        upgradeClient(value: _171.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _171.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _171.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _171.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _171.MsgCreateClient) => _171.MsgCreateClientAmino;
                        fromAmino: (object: _171.MsgCreateClientAmino) => _171.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _171.MsgUpdateClient) => _171.MsgUpdateClientAmino;
                        fromAmino: (object: _171.MsgUpdateClientAmino) => _171.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _171.MsgUpgradeClient) => _171.MsgUpgradeClientAmino;
                        fromAmino: (object: _171.MsgUpgradeClientAmino) => _171.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _171.MsgSubmitMisbehaviour) => _171.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _171.MsgSubmitMisbehaviourAmino) => _171.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    typeUrl: string;
                    encode(message: _171.MsgCreateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MsgCreateClient;
                    fromPartial(object: Partial<_171.MsgCreateClient>): _171.MsgCreateClient;
                    fromAmino(object: _171.MsgCreateClientAmino): _171.MsgCreateClient;
                    toAmino(message: _171.MsgCreateClient): _171.MsgCreateClientAmino;
                    fromAminoMsg(object: _171.MsgCreateClientAminoMsg): _171.MsgCreateClient;
                    toAminoMsg(message: _171.MsgCreateClient): _171.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _171.MsgCreateClientProtoMsg): _171.MsgCreateClient;
                    toProto(message: _171.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _171.MsgCreateClient): _171.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    typeUrl: string;
                    encode(_: _171.MsgCreateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MsgCreateClientResponse;
                    fromPartial(_: Partial<_171.MsgCreateClientResponse>): _171.MsgCreateClientResponse;
                    fromAmino(_: _171.MsgCreateClientResponseAmino): _171.MsgCreateClientResponse;
                    toAmino(_: _171.MsgCreateClientResponse): _171.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _171.MsgCreateClientResponseAminoMsg): _171.MsgCreateClientResponse;
                    toAminoMsg(message: _171.MsgCreateClientResponse): _171.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _171.MsgCreateClientResponseProtoMsg): _171.MsgCreateClientResponse;
                    toProto(message: _171.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _171.MsgCreateClientResponse): _171.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    typeUrl: string;
                    encode(message: _171.MsgUpdateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MsgUpdateClient;
                    fromPartial(object: Partial<_171.MsgUpdateClient>): _171.MsgUpdateClient;
                    fromAmino(object: _171.MsgUpdateClientAmino): _171.MsgUpdateClient;
                    toAmino(message: _171.MsgUpdateClient): _171.MsgUpdateClientAmino;
                    fromAminoMsg(object: _171.MsgUpdateClientAminoMsg): _171.MsgUpdateClient;
                    toAminoMsg(message: _171.MsgUpdateClient): _171.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _171.MsgUpdateClientProtoMsg): _171.MsgUpdateClient;
                    toProto(message: _171.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _171.MsgUpdateClient): _171.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    typeUrl: string;
                    encode(_: _171.MsgUpdateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MsgUpdateClientResponse;
                    fromPartial(_: Partial<_171.MsgUpdateClientResponse>): _171.MsgUpdateClientResponse;
                    fromAmino(_: _171.MsgUpdateClientResponseAmino): _171.MsgUpdateClientResponse;
                    toAmino(_: _171.MsgUpdateClientResponse): _171.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _171.MsgUpdateClientResponseAminoMsg): _171.MsgUpdateClientResponse;
                    toAminoMsg(message: _171.MsgUpdateClientResponse): _171.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _171.MsgUpdateClientResponseProtoMsg): _171.MsgUpdateClientResponse;
                    toProto(message: _171.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _171.MsgUpdateClientResponse): _171.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    typeUrl: string;
                    encode(message: _171.MsgUpgradeClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MsgUpgradeClient;
                    fromPartial(object: Partial<_171.MsgUpgradeClient>): _171.MsgUpgradeClient;
                    fromAmino(object: _171.MsgUpgradeClientAmino): _171.MsgUpgradeClient;
                    toAmino(message: _171.MsgUpgradeClient): _171.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _171.MsgUpgradeClientAminoMsg): _171.MsgUpgradeClient;
                    toAminoMsg(message: _171.MsgUpgradeClient): _171.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _171.MsgUpgradeClientProtoMsg): _171.MsgUpgradeClient;
                    toProto(message: _171.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _171.MsgUpgradeClient): _171.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    typeUrl: string;
                    encode(_: _171.MsgUpgradeClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MsgUpgradeClientResponse;
                    fromPartial(_: Partial<_171.MsgUpgradeClientResponse>): _171.MsgUpgradeClientResponse;
                    fromAmino(_: _171.MsgUpgradeClientResponseAmino): _171.MsgUpgradeClientResponse;
                    toAmino(_: _171.MsgUpgradeClientResponse): _171.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _171.MsgUpgradeClientResponseAminoMsg): _171.MsgUpgradeClientResponse;
                    toAminoMsg(message: _171.MsgUpgradeClientResponse): _171.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _171.MsgUpgradeClientResponseProtoMsg): _171.MsgUpgradeClientResponse;
                    toProto(message: _171.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _171.MsgUpgradeClientResponse): _171.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    typeUrl: string;
                    encode(message: _171.MsgSubmitMisbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MsgSubmitMisbehaviour;
                    fromPartial(object: Partial<_171.MsgSubmitMisbehaviour>): _171.MsgSubmitMisbehaviour;
                    fromAmino(object: _171.MsgSubmitMisbehaviourAmino): _171.MsgSubmitMisbehaviour;
                    toAmino(message: _171.MsgSubmitMisbehaviour): _171.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _171.MsgSubmitMisbehaviourAminoMsg): _171.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _171.MsgSubmitMisbehaviour): _171.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _171.MsgSubmitMisbehaviourProtoMsg): _171.MsgSubmitMisbehaviour;
                    toProto(message: _171.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _171.MsgSubmitMisbehaviour): _171.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    typeUrl: string;
                    encode(_: _171.MsgSubmitMisbehaviourResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: Partial<_171.MsgSubmitMisbehaviourResponse>): _171.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _171.MsgSubmitMisbehaviourResponseAmino): _171.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _171.MsgSubmitMisbehaviourResponse): _171.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _171.MsgSubmitMisbehaviourResponseAminoMsg): _171.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _171.MsgSubmitMisbehaviourResponse): _171.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _171.MsgSubmitMisbehaviourResponseProtoMsg): _171.MsgSubmitMisbehaviourResponse;
                    toProto(message: _171.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _171.MsgSubmitMisbehaviourResponse): _171.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    typeUrl: string;
                    encode(message: _170.QueryClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.QueryClientStateRequest;
                    fromPartial(object: Partial<_170.QueryClientStateRequest>): _170.QueryClientStateRequest;
                    fromAmino(object: _170.QueryClientStateRequestAmino): _170.QueryClientStateRequest;
                    toAmino(message: _170.QueryClientStateRequest): _170.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _170.QueryClientStateRequestAminoMsg): _170.QueryClientStateRequest;
                    toAminoMsg(message: _170.QueryClientStateRequest): _170.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _170.QueryClientStateRequestProtoMsg): _170.QueryClientStateRequest;
                    toProto(message: _170.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _170.QueryClientStateRequest): _170.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    typeUrl: string;
                    encode(message: _170.QueryClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.QueryClientStateResponse;
                    fromPartial(object: Partial<_170.QueryClientStateResponse>): _170.QueryClientStateResponse;
                    fromAmino(object: _170.QueryClientStateResponseAmino): _170.QueryClientStateResponse;
                    toAmino(message: _170.QueryClientStateResponse): _170.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _170.QueryClientStateResponseAminoMsg): _170.QueryClientStateResponse;
                    toAminoMsg(message: _170.QueryClientStateResponse): _170.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _170.QueryClientStateResponseProtoMsg): _170.QueryClientStateResponse;
                    toProto(message: _170.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _170.QueryClientStateResponse): _170.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    typeUrl: string;
                    encode(message: _170.QueryClientStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.QueryClientStatesRequest;
                    fromPartial(object: Partial<_170.QueryClientStatesRequest>): _170.QueryClientStatesRequest;
                    fromAmino(object: _170.QueryClientStatesRequestAmino): _170.QueryClientStatesRequest;
                    toAmino(message: _170.QueryClientStatesRequest): _170.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _170.QueryClientStatesRequestAminoMsg): _170.QueryClientStatesRequest;
                    toAminoMsg(message: _170.QueryClientStatesRequest): _170.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _170.QueryClientStatesRequestProtoMsg): _170.QueryClientStatesRequest;
                    toProto(message: _170.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _170.QueryClientStatesRequest): _170.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    typeUrl: string;
                    encode(message: _170.QueryClientStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.QueryClientStatesResponse;
                    fromPartial(object: Partial<_170.QueryClientStatesResponse>): _170.QueryClientStatesResponse;
                    fromAmino(object: _170.QueryClientStatesResponseAmino): _170.QueryClientStatesResponse;
                    toAmino(message: _170.QueryClientStatesResponse): _170.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _170.QueryClientStatesResponseAminoMsg): _170.QueryClientStatesResponse;
                    toAminoMsg(message: _170.QueryClientStatesResponse): _170.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _170.QueryClientStatesResponseProtoMsg): _170.QueryClientStatesResponse;
                    toProto(message: _170.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _170.QueryClientStatesResponse): _170.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _170.QueryConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.QueryConsensusStateRequest;
                    fromPartial(object: Partial<_170.QueryConsensusStateRequest>): _170.QueryConsensusStateRequest;
                    fromAmino(object: _170.QueryConsensusStateRequestAmino): _170.QueryConsensusStateRequest;
                    toAmino(message: _170.QueryConsensusStateRequest): _170.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _170.QueryConsensusStateRequestAminoMsg): _170.QueryConsensusStateRequest;
                    toAminoMsg(message: _170.QueryConsensusStateRequest): _170.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _170.QueryConsensusStateRequestProtoMsg): _170.QueryConsensusStateRequest;
                    toProto(message: _170.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _170.QueryConsensusStateRequest): _170.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _170.QueryConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.QueryConsensusStateResponse;
                    fromPartial(object: Partial<_170.QueryConsensusStateResponse>): _170.QueryConsensusStateResponse;
                    fromAmino(object: _170.QueryConsensusStateResponseAmino): _170.QueryConsensusStateResponse;
                    toAmino(message: _170.QueryConsensusStateResponse): _170.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _170.QueryConsensusStateResponseAminoMsg): _170.QueryConsensusStateResponse;
                    toAminoMsg(message: _170.QueryConsensusStateResponse): _170.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _170.QueryConsensusStateResponseProtoMsg): _170.QueryConsensusStateResponse;
                    toProto(message: _170.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _170.QueryConsensusStateResponse): _170.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    typeUrl: string;
                    encode(message: _170.QueryConsensusStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.QueryConsensusStatesRequest;
                    fromPartial(object: Partial<_170.QueryConsensusStatesRequest>): _170.QueryConsensusStatesRequest;
                    fromAmino(object: _170.QueryConsensusStatesRequestAmino): _170.QueryConsensusStatesRequest;
                    toAmino(message: _170.QueryConsensusStatesRequest): _170.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _170.QueryConsensusStatesRequestAminoMsg): _170.QueryConsensusStatesRequest;
                    toAminoMsg(message: _170.QueryConsensusStatesRequest): _170.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _170.QueryConsensusStatesRequestProtoMsg): _170.QueryConsensusStatesRequest;
                    toProto(message: _170.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _170.QueryConsensusStatesRequest): _170.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    typeUrl: string;
                    encode(message: _170.QueryConsensusStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.QueryConsensusStatesResponse;
                    fromPartial(object: Partial<_170.QueryConsensusStatesResponse>): _170.QueryConsensusStatesResponse;
                    fromAmino(object: _170.QueryConsensusStatesResponseAmino): _170.QueryConsensusStatesResponse;
                    toAmino(message: _170.QueryConsensusStatesResponse): _170.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _170.QueryConsensusStatesResponseAminoMsg): _170.QueryConsensusStatesResponse;
                    toAminoMsg(message: _170.QueryConsensusStatesResponse): _170.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _170.QueryConsensusStatesResponseProtoMsg): _170.QueryConsensusStatesResponse;
                    toProto(message: _170.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _170.QueryConsensusStatesResponse): _170.QueryConsensusStatesResponseProtoMsg;
                };
                QueryConsensusStateHeightsRequest: {
                    typeUrl: string;
                    encode(message: _170.QueryConsensusStateHeightsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.QueryConsensusStateHeightsRequest;
                    fromPartial(object: Partial<_170.QueryConsensusStateHeightsRequest>): _170.QueryConsensusStateHeightsRequest;
                    fromAmino(object: _170.QueryConsensusStateHeightsRequestAmino): _170.QueryConsensusStateHeightsRequest;
                    toAmino(message: _170.QueryConsensusStateHeightsRequest): _170.QueryConsensusStateHeightsRequestAmino;
                    fromAminoMsg(object: _170.QueryConsensusStateHeightsRequestAminoMsg): _170.QueryConsensusStateHeightsRequest;
                    toAminoMsg(message: _170.QueryConsensusStateHeightsRequest): _170.QueryConsensusStateHeightsRequestAminoMsg;
                    fromProtoMsg(message: _170.QueryConsensusStateHeightsRequestProtoMsg): _170.QueryConsensusStateHeightsRequest;
                    toProto(message: _170.QueryConsensusStateHeightsRequest): Uint8Array;
                    toProtoMsg(message: _170.QueryConsensusStateHeightsRequest): _170.QueryConsensusStateHeightsRequestProtoMsg;
                };
                QueryConsensusStateHeightsResponse: {
                    typeUrl: string;
                    encode(message: _170.QueryConsensusStateHeightsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.QueryConsensusStateHeightsResponse;
                    fromPartial(object: Partial<_170.QueryConsensusStateHeightsResponse>): _170.QueryConsensusStateHeightsResponse;
                    fromAmino(object: _170.QueryConsensusStateHeightsResponseAmino): _170.QueryConsensusStateHeightsResponse;
                    toAmino(message: _170.QueryConsensusStateHeightsResponse): _170.QueryConsensusStateHeightsResponseAmino;
                    fromAminoMsg(object: _170.QueryConsensusStateHeightsResponseAminoMsg): _170.QueryConsensusStateHeightsResponse;
                    toAminoMsg(message: _170.QueryConsensusStateHeightsResponse): _170.QueryConsensusStateHeightsResponseAminoMsg;
                    fromProtoMsg(message: _170.QueryConsensusStateHeightsResponseProtoMsg): _170.QueryConsensusStateHeightsResponse;
                    toProto(message: _170.QueryConsensusStateHeightsResponse): Uint8Array;
                    toProtoMsg(message: _170.QueryConsensusStateHeightsResponse): _170.QueryConsensusStateHeightsResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    typeUrl: string;
                    encode(message: _170.QueryClientStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.QueryClientStatusRequest;
                    fromPartial(object: Partial<_170.QueryClientStatusRequest>): _170.QueryClientStatusRequest;
                    fromAmino(object: _170.QueryClientStatusRequestAmino): _170.QueryClientStatusRequest;
                    toAmino(message: _170.QueryClientStatusRequest): _170.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _170.QueryClientStatusRequestAminoMsg): _170.QueryClientStatusRequest;
                    toAminoMsg(message: _170.QueryClientStatusRequest): _170.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _170.QueryClientStatusRequestProtoMsg): _170.QueryClientStatusRequest;
                    toProto(message: _170.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _170.QueryClientStatusRequest): _170.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    typeUrl: string;
                    encode(message: _170.QueryClientStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.QueryClientStatusResponse;
                    fromPartial(object: Partial<_170.QueryClientStatusResponse>): _170.QueryClientStatusResponse;
                    fromAmino(object: _170.QueryClientStatusResponseAmino): _170.QueryClientStatusResponse;
                    toAmino(message: _170.QueryClientStatusResponse): _170.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _170.QueryClientStatusResponseAminoMsg): _170.QueryClientStatusResponse;
                    toAminoMsg(message: _170.QueryClientStatusResponse): _170.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _170.QueryClientStatusResponseProtoMsg): _170.QueryClientStatusResponse;
                    toProto(message: _170.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _170.QueryClientStatusResponse): _170.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    typeUrl: string;
                    encode(_: _170.QueryClientParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.QueryClientParamsRequest;
                    fromPartial(_: Partial<_170.QueryClientParamsRequest>): _170.QueryClientParamsRequest;
                    fromAmino(_: _170.QueryClientParamsRequestAmino): _170.QueryClientParamsRequest;
                    toAmino(_: _170.QueryClientParamsRequest): _170.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _170.QueryClientParamsRequestAminoMsg): _170.QueryClientParamsRequest;
                    toAminoMsg(message: _170.QueryClientParamsRequest): _170.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _170.QueryClientParamsRequestProtoMsg): _170.QueryClientParamsRequest;
                    toProto(message: _170.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _170.QueryClientParamsRequest): _170.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    typeUrl: string;
                    encode(message: _170.QueryClientParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.QueryClientParamsResponse;
                    fromPartial(object: Partial<_170.QueryClientParamsResponse>): _170.QueryClientParamsResponse;
                    fromAmino(object: _170.QueryClientParamsResponseAmino): _170.QueryClientParamsResponse;
                    toAmino(message: _170.QueryClientParamsResponse): _170.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _170.QueryClientParamsResponseAminoMsg): _170.QueryClientParamsResponse;
                    toAminoMsg(message: _170.QueryClientParamsResponse): _170.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _170.QueryClientParamsResponseProtoMsg): _170.QueryClientParamsResponse;
                    toProto(message: _170.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _170.QueryClientParamsResponse): _170.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    typeUrl: string;
                    encode(_: _170.QueryUpgradedClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.QueryUpgradedClientStateRequest;
                    fromPartial(_: Partial<_170.QueryUpgradedClientStateRequest>): _170.QueryUpgradedClientStateRequest;
                    fromAmino(_: _170.QueryUpgradedClientStateRequestAmino): _170.QueryUpgradedClientStateRequest;
                    toAmino(_: _170.QueryUpgradedClientStateRequest): _170.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _170.QueryUpgradedClientStateRequestAminoMsg): _170.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _170.QueryUpgradedClientStateRequest): _170.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _170.QueryUpgradedClientStateRequestProtoMsg): _170.QueryUpgradedClientStateRequest;
                    toProto(message: _170.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _170.QueryUpgradedClientStateRequest): _170.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    typeUrl: string;
                    encode(message: _170.QueryUpgradedClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.QueryUpgradedClientStateResponse;
                    fromPartial(object: Partial<_170.QueryUpgradedClientStateResponse>): _170.QueryUpgradedClientStateResponse;
                    fromAmino(object: _170.QueryUpgradedClientStateResponseAmino): _170.QueryUpgradedClientStateResponse;
                    toAmino(message: _170.QueryUpgradedClientStateResponse): _170.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _170.QueryUpgradedClientStateResponseAminoMsg): _170.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _170.QueryUpgradedClientStateResponse): _170.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _170.QueryUpgradedClientStateResponseProtoMsg): _170.QueryUpgradedClientStateResponse;
                    toProto(message: _170.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _170.QueryUpgradedClientStateResponse): _170.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    typeUrl: string;
                    encode(_: _170.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: Partial<_170.QueryUpgradedConsensusStateRequest>): _170.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _170.QueryUpgradedConsensusStateRequestAmino): _170.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _170.QueryUpgradedConsensusStateRequest): _170.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _170.QueryUpgradedConsensusStateRequestAminoMsg): _170.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _170.QueryUpgradedConsensusStateRequest): _170.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _170.QueryUpgradedConsensusStateRequestProtoMsg): _170.QueryUpgradedConsensusStateRequest;
                    toProto(message: _170.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _170.QueryUpgradedConsensusStateRequest): _170.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _170.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: Partial<_170.QueryUpgradedConsensusStateResponse>): _170.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _170.QueryUpgradedConsensusStateResponseAmino): _170.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _170.QueryUpgradedConsensusStateResponse): _170.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _170.QueryUpgradedConsensusStateResponseAminoMsg): _170.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _170.QueryUpgradedConsensusStateResponse): _170.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _170.QueryUpgradedConsensusStateResponseProtoMsg): _170.QueryUpgradedConsensusStateResponse;
                    toProto(message: _170.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _170.QueryUpgradedConsensusStateResponse): _170.QueryUpgradedConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _169.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.GenesisState;
                    fromPartial(object: Partial<_169.GenesisState>): _169.GenesisState;
                    fromAmino(object: _169.GenesisStateAmino): _169.GenesisState;
                    toAmino(message: _169.GenesisState): _169.GenesisStateAmino;
                    fromAminoMsg(object: _169.GenesisStateAminoMsg): _169.GenesisState;
                    toAminoMsg(message: _169.GenesisState): _169.GenesisStateAminoMsg;
                    fromProtoMsg(message: _169.GenesisStateProtoMsg): _169.GenesisState;
                    toProto(message: _169.GenesisState): Uint8Array;
                    toProtoMsg(message: _169.GenesisState): _169.GenesisStateProtoMsg;
                };
                GenesisMetadata: {
                    typeUrl: string;
                    encode(message: _169.GenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.GenesisMetadata;
                    fromPartial(object: Partial<_169.GenesisMetadata>): _169.GenesisMetadata;
                    fromAmino(object: _169.GenesisMetadataAmino): _169.GenesisMetadata;
                    toAmino(message: _169.GenesisMetadata): _169.GenesisMetadataAmino;
                    fromAminoMsg(object: _169.GenesisMetadataAminoMsg): _169.GenesisMetadata;
                    toAminoMsg(message: _169.GenesisMetadata): _169.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _169.GenesisMetadataProtoMsg): _169.GenesisMetadata;
                    toProto(message: _169.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _169.GenesisMetadata): _169.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    typeUrl: string;
                    encode(message: _169.IdentifiedGenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.IdentifiedGenesisMetadata;
                    fromPartial(object: Partial<_169.IdentifiedGenesisMetadata>): _169.IdentifiedGenesisMetadata;
                    fromAmino(object: _169.IdentifiedGenesisMetadataAmino): _169.IdentifiedGenesisMetadata;
                    toAmino(message: _169.IdentifiedGenesisMetadata): _169.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _169.IdentifiedGenesisMetadataAminoMsg): _169.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _169.IdentifiedGenesisMetadata): _169.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _169.IdentifiedGenesisMetadataProtoMsg): _169.IdentifiedGenesisMetadata;
                    toProto(message: _169.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _169.IdentifiedGenesisMetadata): _169.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    typeUrl: string;
                    encode(message: _168.IdentifiedClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.IdentifiedClientState;
                    fromPartial(object: Partial<_168.IdentifiedClientState>): _168.IdentifiedClientState;
                    fromAmino(object: _168.IdentifiedClientStateAmino): _168.IdentifiedClientState;
                    toAmino(message: _168.IdentifiedClientState): _168.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _168.IdentifiedClientStateAminoMsg): _168.IdentifiedClientState;
                    toAminoMsg(message: _168.IdentifiedClientState): _168.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _168.IdentifiedClientStateProtoMsg): _168.IdentifiedClientState;
                    toProto(message: _168.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _168.IdentifiedClientState): _168.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    encode(message: _168.ConsensusStateWithHeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.ConsensusStateWithHeight;
                    fromPartial(object: Partial<_168.ConsensusStateWithHeight>): _168.ConsensusStateWithHeight;
                    fromAmino(object: _168.ConsensusStateWithHeightAmino): _168.ConsensusStateWithHeight;
                    toAmino(message: _168.ConsensusStateWithHeight): _168.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _168.ConsensusStateWithHeightAminoMsg): _168.ConsensusStateWithHeight;
                    toAminoMsg(message: _168.ConsensusStateWithHeight): _168.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _168.ConsensusStateWithHeightProtoMsg): _168.ConsensusStateWithHeight;
                    toProto(message: _168.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _168.ConsensusStateWithHeight): _168.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    encode(message: _168.ClientConsensusStates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.ClientConsensusStates;
                    fromPartial(object: Partial<_168.ClientConsensusStates>): _168.ClientConsensusStates;
                    fromAmino(object: _168.ClientConsensusStatesAmino): _168.ClientConsensusStates;
                    toAmino(message: _168.ClientConsensusStates): _168.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _168.ClientConsensusStatesAminoMsg): _168.ClientConsensusStates;
                    toAminoMsg(message: _168.ClientConsensusStates): _168.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _168.ClientConsensusStatesProtoMsg): _168.ClientConsensusStates;
                    toProto(message: _168.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _168.ClientConsensusStates): _168.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    encode(message: _168.ClientUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.ClientUpdateProposal;
                    fromPartial(object: Partial<_168.ClientUpdateProposal>): _168.ClientUpdateProposal;
                    fromAmino(object: _168.ClientUpdateProposalAmino): _168.ClientUpdateProposal;
                    toAmino(message: _168.ClientUpdateProposal): _168.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _168.ClientUpdateProposalAminoMsg): _168.ClientUpdateProposal;
                    toAminoMsg(message: _168.ClientUpdateProposal): _168.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _168.ClientUpdateProposalProtoMsg): _168.ClientUpdateProposal;
                    toProto(message: _168.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _168.ClientUpdateProposal): _168.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    encode(message: _168.UpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.UpgradeProposal;
                    fromPartial(object: Partial<_168.UpgradeProposal>): _168.UpgradeProposal;
                    fromAmino(object: _168.UpgradeProposalAmino): _168.UpgradeProposal;
                    toAmino(message: _168.UpgradeProposal): _168.UpgradeProposalAmino;
                    fromAminoMsg(object: _168.UpgradeProposalAminoMsg): _168.UpgradeProposal;
                    toAminoMsg(message: _168.UpgradeProposal): _168.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _168.UpgradeProposalProtoMsg): _168.UpgradeProposal;
                    toProto(message: _168.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _168.UpgradeProposal): _168.UpgradeProposalProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    encode(message: _168.Height, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.Height;
                    fromPartial(object: Partial<_168.Height>): _168.Height;
                    fromAmino(object: _168.HeightAmino): _168.Height;
                    toAmino(message: _168.Height): _168.HeightAmino;
                    fromAminoMsg(object: _168.HeightAminoMsg): _168.Height;
                    toAminoMsg(message: _168.Height): _168.HeightAminoMsg;
                    fromProtoMsg(message: _168.HeightProtoMsg): _168.Height;
                    toProto(message: _168.Height): Uint8Array;
                    toProtoMsg(message: _168.Height): _168.HeightProtoMsg;
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
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    typeUrl: string;
                    encode(message: _172.MerkleRoot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.MerkleRoot;
                    fromPartial(object: Partial<_172.MerkleRoot>): _172.MerkleRoot;
                    fromAmino(object: _172.MerkleRootAmino): _172.MerkleRoot;
                    toAmino(message: _172.MerkleRoot): _172.MerkleRootAmino;
                    fromAminoMsg(object: _172.MerkleRootAminoMsg): _172.MerkleRoot;
                    toAminoMsg(message: _172.MerkleRoot): _172.MerkleRootAminoMsg;
                    fromProtoMsg(message: _172.MerkleRootProtoMsg): _172.MerkleRoot;
                    toProto(message: _172.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _172.MerkleRoot): _172.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    typeUrl: string;
                    encode(message: _172.MerklePrefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.MerklePrefix;
                    fromPartial(object: Partial<_172.MerklePrefix>): _172.MerklePrefix;
                    fromAmino(object: _172.MerklePrefixAmino): _172.MerklePrefix;
                    toAmino(message: _172.MerklePrefix): _172.MerklePrefixAmino;
                    fromAminoMsg(object: _172.MerklePrefixAminoMsg): _172.MerklePrefix;
                    toAminoMsg(message: _172.MerklePrefix): _172.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _172.MerklePrefixProtoMsg): _172.MerklePrefix;
                    toProto(message: _172.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _172.MerklePrefix): _172.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    typeUrl: string;
                    encode(message: _172.MerklePath, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.MerklePath;
                    fromPartial(object: Partial<_172.MerklePath>): _172.MerklePath;
                    fromAmino(object: _172.MerklePathAmino): _172.MerklePath;
                    toAmino(message: _172.MerklePath): _172.MerklePathAmino;
                    fromAminoMsg(object: _172.MerklePathAminoMsg): _172.MerklePath;
                    toAminoMsg(message: _172.MerklePath): _172.MerklePathAminoMsg;
                    fromProtoMsg(message: _172.MerklePathProtoMsg): _172.MerklePath;
                    toProto(message: _172.MerklePath): Uint8Array;
                    toProtoMsg(message: _172.MerklePath): _172.MerklePathProtoMsg;
                };
                MerkleProof: {
                    typeUrl: string;
                    encode(message: _172.MerkleProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.MerkleProof;
                    fromPartial(object: Partial<_172.MerkleProof>): _172.MerkleProof;
                    fromAmino(object: _172.MerkleProofAmino): _172.MerkleProof;
                    toAmino(message: _172.MerkleProof): _172.MerkleProofAmino;
                    fromAminoMsg(object: _172.MerkleProofAminoMsg): _172.MerkleProof;
                    toAminoMsg(message: _172.MerkleProof): _172.MerkleProofAminoMsg;
                    fromProtoMsg(message: _172.MerkleProofProtoMsg): _172.MerkleProof;
                    toProto(message: _172.MerkleProof): Uint8Array;
                    toProtoMsg(message: _172.MerkleProof): _172.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _365.MsgClientImpl;
                QueryClientImpl: typeof _359.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _175.QueryConnectionRequest): Promise<_175.QueryConnectionResponse>;
                    connections(request?: _175.QueryConnectionsRequest): Promise<_175.QueryConnectionsResponse>;
                    clientConnections(request: _175.QueryClientConnectionsRequest): Promise<_175.QueryClientConnectionsResponse>;
                    connectionClientState(request: _175.QueryConnectionClientStateRequest): Promise<_175.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _175.QueryConnectionConsensusStateRequest): Promise<_175.QueryConnectionConsensusStateResponse>;
                    connectionParams(request?: _175.QueryConnectionParamsRequest): Promise<_175.QueryConnectionParamsResponse>;
                };
                registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _176.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _176.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _176.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _176.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _176.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _176.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _176.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _176.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _176.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _176.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _176.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _176.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _176.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _176.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _176.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _176.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _176.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _176.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _176.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _176.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _176.MsgConnectionOpenInit) => _176.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _176.MsgConnectionOpenInitAmino) => _176.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _176.MsgConnectionOpenTry) => _176.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _176.MsgConnectionOpenTryAmino) => _176.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _176.MsgConnectionOpenAck) => _176.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _176.MsgConnectionOpenAckAmino) => _176.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _176.MsgConnectionOpenConfirm) => _176.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _176.MsgConnectionOpenConfirmAmino) => _176.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    typeUrl: string;
                    encode(message: _176.MsgConnectionOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgConnectionOpenInit;
                    fromPartial(object: Partial<_176.MsgConnectionOpenInit>): _176.MsgConnectionOpenInit;
                    fromAmino(object: _176.MsgConnectionOpenInitAmino): _176.MsgConnectionOpenInit;
                    toAmino(message: _176.MsgConnectionOpenInit): _176.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _176.MsgConnectionOpenInitAminoMsg): _176.MsgConnectionOpenInit;
                    toAminoMsg(message: _176.MsgConnectionOpenInit): _176.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _176.MsgConnectionOpenInitProtoMsg): _176.MsgConnectionOpenInit;
                    toProto(message: _176.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _176.MsgConnectionOpenInit): _176.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    typeUrl: string;
                    encode(_: _176.MsgConnectionOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgConnectionOpenInitResponse;
                    fromPartial(_: Partial<_176.MsgConnectionOpenInitResponse>): _176.MsgConnectionOpenInitResponse;
                    fromAmino(_: _176.MsgConnectionOpenInitResponseAmino): _176.MsgConnectionOpenInitResponse;
                    toAmino(_: _176.MsgConnectionOpenInitResponse): _176.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _176.MsgConnectionOpenInitResponseAminoMsg): _176.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _176.MsgConnectionOpenInitResponse): _176.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _176.MsgConnectionOpenInitResponseProtoMsg): _176.MsgConnectionOpenInitResponse;
                    toProto(message: _176.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _176.MsgConnectionOpenInitResponse): _176.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    typeUrl: string;
                    encode(message: _176.MsgConnectionOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgConnectionOpenTry;
                    fromPartial(object: Partial<_176.MsgConnectionOpenTry>): _176.MsgConnectionOpenTry;
                    fromAmino(object: _176.MsgConnectionOpenTryAmino): _176.MsgConnectionOpenTry;
                    toAmino(message: _176.MsgConnectionOpenTry): _176.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _176.MsgConnectionOpenTryAminoMsg): _176.MsgConnectionOpenTry;
                    toAminoMsg(message: _176.MsgConnectionOpenTry): _176.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _176.MsgConnectionOpenTryProtoMsg): _176.MsgConnectionOpenTry;
                    toProto(message: _176.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _176.MsgConnectionOpenTry): _176.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    typeUrl: string;
                    encode(_: _176.MsgConnectionOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgConnectionOpenTryResponse;
                    fromPartial(_: Partial<_176.MsgConnectionOpenTryResponse>): _176.MsgConnectionOpenTryResponse;
                    fromAmino(_: _176.MsgConnectionOpenTryResponseAmino): _176.MsgConnectionOpenTryResponse;
                    toAmino(_: _176.MsgConnectionOpenTryResponse): _176.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _176.MsgConnectionOpenTryResponseAminoMsg): _176.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _176.MsgConnectionOpenTryResponse): _176.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _176.MsgConnectionOpenTryResponseProtoMsg): _176.MsgConnectionOpenTryResponse;
                    toProto(message: _176.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _176.MsgConnectionOpenTryResponse): _176.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    typeUrl: string;
                    encode(message: _176.MsgConnectionOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgConnectionOpenAck;
                    fromPartial(object: Partial<_176.MsgConnectionOpenAck>): _176.MsgConnectionOpenAck;
                    fromAmino(object: _176.MsgConnectionOpenAckAmino): _176.MsgConnectionOpenAck;
                    toAmino(message: _176.MsgConnectionOpenAck): _176.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _176.MsgConnectionOpenAckAminoMsg): _176.MsgConnectionOpenAck;
                    toAminoMsg(message: _176.MsgConnectionOpenAck): _176.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _176.MsgConnectionOpenAckProtoMsg): _176.MsgConnectionOpenAck;
                    toProto(message: _176.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _176.MsgConnectionOpenAck): _176.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _176.MsgConnectionOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgConnectionOpenAckResponse;
                    fromPartial(_: Partial<_176.MsgConnectionOpenAckResponse>): _176.MsgConnectionOpenAckResponse;
                    fromAmino(_: _176.MsgConnectionOpenAckResponseAmino): _176.MsgConnectionOpenAckResponse;
                    toAmino(_: _176.MsgConnectionOpenAckResponse): _176.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _176.MsgConnectionOpenAckResponseAminoMsg): _176.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _176.MsgConnectionOpenAckResponse): _176.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _176.MsgConnectionOpenAckResponseProtoMsg): _176.MsgConnectionOpenAckResponse;
                    toProto(message: _176.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _176.MsgConnectionOpenAckResponse): _176.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    typeUrl: string;
                    encode(message: _176.MsgConnectionOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgConnectionOpenConfirm;
                    fromPartial(object: Partial<_176.MsgConnectionOpenConfirm>): _176.MsgConnectionOpenConfirm;
                    fromAmino(object: _176.MsgConnectionOpenConfirmAmino): _176.MsgConnectionOpenConfirm;
                    toAmino(message: _176.MsgConnectionOpenConfirm): _176.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _176.MsgConnectionOpenConfirmAminoMsg): _176.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _176.MsgConnectionOpenConfirm): _176.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _176.MsgConnectionOpenConfirmProtoMsg): _176.MsgConnectionOpenConfirm;
                    toProto(message: _176.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _176.MsgConnectionOpenConfirm): _176.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _176.MsgConnectionOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: Partial<_176.MsgConnectionOpenConfirmResponse>): _176.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _176.MsgConnectionOpenConfirmResponseAmino): _176.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _176.MsgConnectionOpenConfirmResponse): _176.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _176.MsgConnectionOpenConfirmResponseAminoMsg): _176.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _176.MsgConnectionOpenConfirmResponse): _176.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _176.MsgConnectionOpenConfirmResponseProtoMsg): _176.MsgConnectionOpenConfirmResponse;
                    toProto(message: _176.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _176.MsgConnectionOpenConfirmResponse): _176.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    typeUrl: string;
                    encode(message: _175.QueryConnectionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.QueryConnectionRequest;
                    fromPartial(object: Partial<_175.QueryConnectionRequest>): _175.QueryConnectionRequest;
                    fromAmino(object: _175.QueryConnectionRequestAmino): _175.QueryConnectionRequest;
                    toAmino(message: _175.QueryConnectionRequest): _175.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _175.QueryConnectionRequestAminoMsg): _175.QueryConnectionRequest;
                    toAminoMsg(message: _175.QueryConnectionRequest): _175.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _175.QueryConnectionRequestProtoMsg): _175.QueryConnectionRequest;
                    toProto(message: _175.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _175.QueryConnectionRequest): _175.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    typeUrl: string;
                    encode(message: _175.QueryConnectionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.QueryConnectionResponse;
                    fromPartial(object: Partial<_175.QueryConnectionResponse>): _175.QueryConnectionResponse;
                    fromAmino(object: _175.QueryConnectionResponseAmino): _175.QueryConnectionResponse;
                    toAmino(message: _175.QueryConnectionResponse): _175.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _175.QueryConnectionResponseAminoMsg): _175.QueryConnectionResponse;
                    toAminoMsg(message: _175.QueryConnectionResponse): _175.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _175.QueryConnectionResponseProtoMsg): _175.QueryConnectionResponse;
                    toProto(message: _175.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _175.QueryConnectionResponse): _175.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _175.QueryConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.QueryConnectionsRequest;
                    fromPartial(object: Partial<_175.QueryConnectionsRequest>): _175.QueryConnectionsRequest;
                    fromAmino(object: _175.QueryConnectionsRequestAmino): _175.QueryConnectionsRequest;
                    toAmino(message: _175.QueryConnectionsRequest): _175.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _175.QueryConnectionsRequestAminoMsg): _175.QueryConnectionsRequest;
                    toAminoMsg(message: _175.QueryConnectionsRequest): _175.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _175.QueryConnectionsRequestProtoMsg): _175.QueryConnectionsRequest;
                    toProto(message: _175.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _175.QueryConnectionsRequest): _175.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _175.QueryConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.QueryConnectionsResponse;
                    fromPartial(object: Partial<_175.QueryConnectionsResponse>): _175.QueryConnectionsResponse;
                    fromAmino(object: _175.QueryConnectionsResponseAmino): _175.QueryConnectionsResponse;
                    toAmino(message: _175.QueryConnectionsResponse): _175.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _175.QueryConnectionsResponseAminoMsg): _175.QueryConnectionsResponse;
                    toAminoMsg(message: _175.QueryConnectionsResponse): _175.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _175.QueryConnectionsResponseProtoMsg): _175.QueryConnectionsResponse;
                    toProto(message: _175.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _175.QueryConnectionsResponse): _175.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _175.QueryClientConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.QueryClientConnectionsRequest;
                    fromPartial(object: Partial<_175.QueryClientConnectionsRequest>): _175.QueryClientConnectionsRequest;
                    fromAmino(object: _175.QueryClientConnectionsRequestAmino): _175.QueryClientConnectionsRequest;
                    toAmino(message: _175.QueryClientConnectionsRequest): _175.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _175.QueryClientConnectionsRequestAminoMsg): _175.QueryClientConnectionsRequest;
                    toAminoMsg(message: _175.QueryClientConnectionsRequest): _175.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _175.QueryClientConnectionsRequestProtoMsg): _175.QueryClientConnectionsRequest;
                    toProto(message: _175.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _175.QueryClientConnectionsRequest): _175.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _175.QueryClientConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.QueryClientConnectionsResponse;
                    fromPartial(object: Partial<_175.QueryClientConnectionsResponse>): _175.QueryClientConnectionsResponse;
                    fromAmino(object: _175.QueryClientConnectionsResponseAmino): _175.QueryClientConnectionsResponse;
                    toAmino(message: _175.QueryClientConnectionsResponse): _175.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _175.QueryClientConnectionsResponseAminoMsg): _175.QueryClientConnectionsResponse;
                    toAminoMsg(message: _175.QueryClientConnectionsResponse): _175.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _175.QueryClientConnectionsResponseProtoMsg): _175.QueryClientConnectionsResponse;
                    toProto(message: _175.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _175.QueryClientConnectionsResponse): _175.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    typeUrl: string;
                    encode(message: _175.QueryConnectionClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.QueryConnectionClientStateRequest;
                    fromPartial(object: Partial<_175.QueryConnectionClientStateRequest>): _175.QueryConnectionClientStateRequest;
                    fromAmino(object: _175.QueryConnectionClientStateRequestAmino): _175.QueryConnectionClientStateRequest;
                    toAmino(message: _175.QueryConnectionClientStateRequest): _175.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _175.QueryConnectionClientStateRequestAminoMsg): _175.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _175.QueryConnectionClientStateRequest): _175.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _175.QueryConnectionClientStateRequestProtoMsg): _175.QueryConnectionClientStateRequest;
                    toProto(message: _175.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _175.QueryConnectionClientStateRequest): _175.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    typeUrl: string;
                    encode(message: _175.QueryConnectionClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.QueryConnectionClientStateResponse;
                    fromPartial(object: Partial<_175.QueryConnectionClientStateResponse>): _175.QueryConnectionClientStateResponse;
                    fromAmino(object: _175.QueryConnectionClientStateResponseAmino): _175.QueryConnectionClientStateResponse;
                    toAmino(message: _175.QueryConnectionClientStateResponse): _175.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _175.QueryConnectionClientStateResponseAminoMsg): _175.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _175.QueryConnectionClientStateResponse): _175.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _175.QueryConnectionClientStateResponseProtoMsg): _175.QueryConnectionClientStateResponse;
                    toProto(message: _175.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _175.QueryConnectionClientStateResponse): _175.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _175.QueryConnectionConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.QueryConnectionConsensusStateRequest;
                    fromPartial(object: Partial<_175.QueryConnectionConsensusStateRequest>): _175.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _175.QueryConnectionConsensusStateRequestAmino): _175.QueryConnectionConsensusStateRequest;
                    toAmino(message: _175.QueryConnectionConsensusStateRequest): _175.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _175.QueryConnectionConsensusStateRequestAminoMsg): _175.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _175.QueryConnectionConsensusStateRequest): _175.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _175.QueryConnectionConsensusStateRequestProtoMsg): _175.QueryConnectionConsensusStateRequest;
                    toProto(message: _175.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _175.QueryConnectionConsensusStateRequest): _175.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _175.QueryConnectionConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.QueryConnectionConsensusStateResponse;
                    fromPartial(object: Partial<_175.QueryConnectionConsensusStateResponse>): _175.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _175.QueryConnectionConsensusStateResponseAmino): _175.QueryConnectionConsensusStateResponse;
                    toAmino(message: _175.QueryConnectionConsensusStateResponse): _175.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _175.QueryConnectionConsensusStateResponseAminoMsg): _175.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _175.QueryConnectionConsensusStateResponse): _175.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _175.QueryConnectionConsensusStateResponseProtoMsg): _175.QueryConnectionConsensusStateResponse;
                    toProto(message: _175.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _175.QueryConnectionConsensusStateResponse): _175.QueryConnectionConsensusStateResponseProtoMsg;
                };
                QueryConnectionParamsRequest: {
                    typeUrl: string;
                    encode(_: _175.QueryConnectionParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.QueryConnectionParamsRequest;
                    fromPartial(_: Partial<_175.QueryConnectionParamsRequest>): _175.QueryConnectionParamsRequest;
                    fromAmino(_: _175.QueryConnectionParamsRequestAmino): _175.QueryConnectionParamsRequest;
                    toAmino(_: _175.QueryConnectionParamsRequest): _175.QueryConnectionParamsRequestAmino;
                    fromAminoMsg(object: _175.QueryConnectionParamsRequestAminoMsg): _175.QueryConnectionParamsRequest;
                    toAminoMsg(message: _175.QueryConnectionParamsRequest): _175.QueryConnectionParamsRequestAminoMsg;
                    fromProtoMsg(message: _175.QueryConnectionParamsRequestProtoMsg): _175.QueryConnectionParamsRequest;
                    toProto(message: _175.QueryConnectionParamsRequest): Uint8Array;
                    toProtoMsg(message: _175.QueryConnectionParamsRequest): _175.QueryConnectionParamsRequestProtoMsg;
                };
                QueryConnectionParamsResponse: {
                    typeUrl: string;
                    encode(message: _175.QueryConnectionParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.QueryConnectionParamsResponse;
                    fromPartial(object: Partial<_175.QueryConnectionParamsResponse>): _175.QueryConnectionParamsResponse;
                    fromAmino(object: _175.QueryConnectionParamsResponseAmino): _175.QueryConnectionParamsResponse;
                    toAmino(message: _175.QueryConnectionParamsResponse): _175.QueryConnectionParamsResponseAmino;
                    fromAminoMsg(object: _175.QueryConnectionParamsResponseAminoMsg): _175.QueryConnectionParamsResponse;
                    toAminoMsg(message: _175.QueryConnectionParamsResponse): _175.QueryConnectionParamsResponseAminoMsg;
                    fromProtoMsg(message: _175.QueryConnectionParamsResponseProtoMsg): _175.QueryConnectionParamsResponse;
                    toProto(message: _175.QueryConnectionParamsResponse): Uint8Array;
                    toProtoMsg(message: _175.QueryConnectionParamsResponse): _175.QueryConnectionParamsResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _174.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.GenesisState;
                    fromPartial(object: Partial<_174.GenesisState>): _174.GenesisState;
                    fromAmino(object: _174.GenesisStateAmino): _174.GenesisState;
                    toAmino(message: _174.GenesisState): _174.GenesisStateAmino;
                    fromAminoMsg(object: _174.GenesisStateAminoMsg): _174.GenesisState;
                    toAminoMsg(message: _174.GenesisState): _174.GenesisStateAminoMsg;
                    fromProtoMsg(message: _174.GenesisStateProtoMsg): _174.GenesisState;
                    toProto(message: _174.GenesisState): Uint8Array;
                    toProtoMsg(message: _174.GenesisState): _174.GenesisStateProtoMsg;
                };
                stateFromJSON(object: any): _173.State;
                stateToJSON(object: _173.State): string;
                State: typeof _173.State;
                StateSDKType: typeof _173.State;
                StateAmino: typeof _173.State;
                ConnectionEnd: {
                    typeUrl: string;
                    encode(message: _173.ConnectionEnd, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.ConnectionEnd;
                    fromPartial(object: Partial<_173.ConnectionEnd>): _173.ConnectionEnd;
                    fromAmino(object: _173.ConnectionEndAmino): _173.ConnectionEnd;
                    toAmino(message: _173.ConnectionEnd): _173.ConnectionEndAmino;
                    fromAminoMsg(object: _173.ConnectionEndAminoMsg): _173.ConnectionEnd;
                    toAminoMsg(message: _173.ConnectionEnd): _173.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _173.ConnectionEndProtoMsg): _173.ConnectionEnd;
                    toProto(message: _173.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _173.ConnectionEnd): _173.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    typeUrl: string;
                    encode(message: _173.IdentifiedConnection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.IdentifiedConnection;
                    fromPartial(object: Partial<_173.IdentifiedConnection>): _173.IdentifiedConnection;
                    fromAmino(object: _173.IdentifiedConnectionAmino): _173.IdentifiedConnection;
                    toAmino(message: _173.IdentifiedConnection): _173.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _173.IdentifiedConnectionAminoMsg): _173.IdentifiedConnection;
                    toAminoMsg(message: _173.IdentifiedConnection): _173.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _173.IdentifiedConnectionProtoMsg): _173.IdentifiedConnection;
                    toProto(message: _173.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _173.IdentifiedConnection): _173.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _173.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.Counterparty;
                    fromPartial(object: Partial<_173.Counterparty>): _173.Counterparty;
                    fromAmino(object: _173.CounterpartyAmino): _173.Counterparty;
                    toAmino(message: _173.Counterparty): _173.CounterpartyAmino;
                    fromAminoMsg(object: _173.CounterpartyAminoMsg): _173.Counterparty;
                    toAminoMsg(message: _173.Counterparty): _173.CounterpartyAminoMsg;
                    fromProtoMsg(message: _173.CounterpartyProtoMsg): _173.Counterparty;
                    toProto(message: _173.Counterparty): Uint8Array;
                    toProtoMsg(message: _173.Counterparty): _173.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    typeUrl: string;
                    encode(message: _173.ClientPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.ClientPaths;
                    fromPartial(object: Partial<_173.ClientPaths>): _173.ClientPaths;
                    fromAmino(object: _173.ClientPathsAmino): _173.ClientPaths;
                    toAmino(message: _173.ClientPaths): _173.ClientPathsAmino;
                    fromAminoMsg(object: _173.ClientPathsAminoMsg): _173.ClientPaths;
                    toAminoMsg(message: _173.ClientPaths): _173.ClientPathsAminoMsg;
                    fromProtoMsg(message: _173.ClientPathsProtoMsg): _173.ClientPaths;
                    toProto(message: _173.ClientPaths): Uint8Array;
                    toProtoMsg(message: _173.ClientPaths): _173.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    typeUrl: string;
                    encode(message: _173.ConnectionPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.ConnectionPaths;
                    fromPartial(object: Partial<_173.ConnectionPaths>): _173.ConnectionPaths;
                    fromAmino(object: _173.ConnectionPathsAmino): _173.ConnectionPaths;
                    toAmino(message: _173.ConnectionPaths): _173.ConnectionPathsAmino;
                    fromAminoMsg(object: _173.ConnectionPathsAminoMsg): _173.ConnectionPaths;
                    toAminoMsg(message: _173.ConnectionPaths): _173.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _173.ConnectionPathsProtoMsg): _173.ConnectionPaths;
                    toProto(message: _173.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _173.ConnectionPaths): _173.ConnectionPathsProtoMsg;
                };
                Version: {
                    typeUrl: string;
                    encode(message: _173.Version, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.Version;
                    fromPartial(object: Partial<_173.Version>): _173.Version;
                    fromAmino(object: _173.VersionAmino): _173.Version;
                    toAmino(message: _173.Version): _173.VersionAmino;
                    fromAminoMsg(object: _173.VersionAminoMsg): _173.Version;
                    toAminoMsg(message: _173.Version): _173.VersionAminoMsg;
                    fromProtoMsg(message: _173.VersionProtoMsg): _173.Version;
                    toProto(message: _173.Version): Uint8Array;
                    toProtoMsg(message: _173.Version): _173.VersionProtoMsg;
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
            };
        }
        namespace types {
            const v1: {
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
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v2: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _178.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.ClientState;
                    fromPartial(object: Partial<_178.ClientState>): _178.ClientState;
                    fromAmino(object: _178.ClientStateAmino): _178.ClientState;
                    toAmino(message: _178.ClientState): _178.ClientStateAmino;
                    fromAminoMsg(object: _178.ClientStateAminoMsg): _178.ClientState;
                    toAminoMsg(message: _178.ClientState): _178.ClientStateAminoMsg;
                    fromProtoMsg(message: _178.ClientStateProtoMsg): _178.ClientState;
                    toProto(message: _178.ClientState): Uint8Array;
                    toProtoMsg(message: _178.ClientState): _178.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v2: {
                dataTypeFromJSON(object: any): _179.DataType;
                dataTypeToJSON(object: _179.DataType): string;
                DataType: typeof _179.DataType;
                DataTypeSDKType: typeof _179.DataType;
                DataTypeAmino: typeof _179.DataType;
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
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _179.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.ConsensusState;
                    fromPartial(object: Partial<_179.ConsensusState>): _179.ConsensusState;
                    fromAmino(object: _179.ConsensusStateAmino): _179.ConsensusState;
                    toAmino(message: _179.ConsensusState): _179.ConsensusStateAmino;
                    fromAminoMsg(object: _179.ConsensusStateAminoMsg): _179.ConsensusState;
                    toAminoMsg(message: _179.ConsensusState): _179.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _179.ConsensusStateProtoMsg): _179.ConsensusState;
                    toProto(message: _179.ConsensusState): Uint8Array;
                    toProtoMsg(message: _179.ConsensusState): _179.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _179.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.Header;
                    fromPartial(object: Partial<_179.Header>): _179.Header;
                    fromAmino(object: _179.HeaderAmino): _179.Header;
                    toAmino(message: _179.Header): _179.HeaderAmino;
                    fromAminoMsg(object: _179.HeaderAminoMsg): _179.Header;
                    toAminoMsg(message: _179.Header): _179.HeaderAminoMsg;
                    fromProtoMsg(message: _179.HeaderProtoMsg): _179.Header;
                    toProto(message: _179.Header): Uint8Array;
                    toProtoMsg(message: _179.Header): _179.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _179.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.Misbehaviour;
                    fromPartial(object: Partial<_179.Misbehaviour>): _179.Misbehaviour;
                    fromAmino(object: _179.MisbehaviourAmino): _179.Misbehaviour;
                    toAmino(message: _179.Misbehaviour): _179.MisbehaviourAmino;
                    fromAminoMsg(object: _179.MisbehaviourAminoMsg): _179.Misbehaviour;
                    toAminoMsg(message: _179.Misbehaviour): _179.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _179.MisbehaviourProtoMsg): _179.Misbehaviour;
                    toProto(message: _179.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _179.Misbehaviour): _179.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _179.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.SignatureAndData;
                    fromPartial(object: Partial<_179.SignatureAndData>): _179.SignatureAndData;
                    fromAmino(object: _179.SignatureAndDataAmino): _179.SignatureAndData;
                    toAmino(message: _179.SignatureAndData): _179.SignatureAndDataAmino;
                    fromAminoMsg(object: _179.SignatureAndDataAminoMsg): _179.SignatureAndData;
                    toAminoMsg(message: _179.SignatureAndData): _179.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _179.SignatureAndDataProtoMsg): _179.SignatureAndData;
                    toProto(message: _179.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _179.SignatureAndData): _179.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _179.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.TimestampedSignatureData;
                    fromPartial(object: Partial<_179.TimestampedSignatureData>): _179.TimestampedSignatureData;
                    fromAmino(object: _179.TimestampedSignatureDataAmino): _179.TimestampedSignatureData;
                    toAmino(message: _179.TimestampedSignatureData): _179.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _179.TimestampedSignatureDataAminoMsg): _179.TimestampedSignatureData;
                    toAminoMsg(message: _179.TimestampedSignatureData): _179.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _179.TimestampedSignatureDataProtoMsg): _179.TimestampedSignatureData;
                    toProto(message: _179.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _179.TimestampedSignatureData): _179.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _179.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.SignBytes;
                    fromPartial(object: Partial<_179.SignBytes>): _179.SignBytes;
                    fromAmino(object: _179.SignBytesAmino): _179.SignBytes;
                    toAmino(message: _179.SignBytes): _179.SignBytesAmino;
                    fromAminoMsg(object: _179.SignBytesAminoMsg): _179.SignBytes;
                    toAminoMsg(message: _179.SignBytes): _179.SignBytesAminoMsg;
                    fromProtoMsg(message: _179.SignBytesProtoMsg): _179.SignBytes;
                    toProto(message: _179.SignBytes): Uint8Array;
                    toProtoMsg(message: _179.SignBytes): _179.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _179.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.HeaderData;
                    fromPartial(object: Partial<_179.HeaderData>): _179.HeaderData;
                    fromAmino(object: _179.HeaderDataAmino): _179.HeaderData;
                    toAmino(message: _179.HeaderData): _179.HeaderDataAmino;
                    fromAminoMsg(object: _179.HeaderDataAminoMsg): _179.HeaderData;
                    toAminoMsg(message: _179.HeaderData): _179.HeaderDataAminoMsg;
                    fromProtoMsg(message: _179.HeaderDataProtoMsg): _179.HeaderData;
                    toProto(message: _179.HeaderData): Uint8Array;
                    toProtoMsg(message: _179.HeaderData): _179.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _179.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.ClientStateData;
                    fromPartial(object: Partial<_179.ClientStateData>): _179.ClientStateData;
                    fromAmino(object: _179.ClientStateDataAmino): _179.ClientStateData;
                    toAmino(message: _179.ClientStateData): _179.ClientStateDataAmino;
                    fromAminoMsg(object: _179.ClientStateDataAminoMsg): _179.ClientStateData;
                    toAminoMsg(message: _179.ClientStateData): _179.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _179.ClientStateDataProtoMsg): _179.ClientStateData;
                    toProto(message: _179.ClientStateData): Uint8Array;
                    toProtoMsg(message: _179.ClientStateData): _179.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _179.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.ConsensusStateData;
                    fromPartial(object: Partial<_179.ConsensusStateData>): _179.ConsensusStateData;
                    fromAmino(object: _179.ConsensusStateDataAmino): _179.ConsensusStateData;
                    toAmino(message: _179.ConsensusStateData): _179.ConsensusStateDataAmino;
                    fromAminoMsg(object: _179.ConsensusStateDataAminoMsg): _179.ConsensusStateData;
                    toAminoMsg(message: _179.ConsensusStateData): _179.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _179.ConsensusStateDataProtoMsg): _179.ConsensusStateData;
                    toProto(message: _179.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _179.ConsensusStateData): _179.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _179.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.ConnectionStateData;
                    fromPartial(object: Partial<_179.ConnectionStateData>): _179.ConnectionStateData;
                    fromAmino(object: _179.ConnectionStateDataAmino): _179.ConnectionStateData;
                    toAmino(message: _179.ConnectionStateData): _179.ConnectionStateDataAmino;
                    fromAminoMsg(object: _179.ConnectionStateDataAminoMsg): _179.ConnectionStateData;
                    toAminoMsg(message: _179.ConnectionStateData): _179.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _179.ConnectionStateDataProtoMsg): _179.ConnectionStateData;
                    toProto(message: _179.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _179.ConnectionStateData): _179.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _179.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.ChannelStateData;
                    fromPartial(object: Partial<_179.ChannelStateData>): _179.ChannelStateData;
                    fromAmino(object: _179.ChannelStateDataAmino): _179.ChannelStateData;
                    toAmino(message: _179.ChannelStateData): _179.ChannelStateDataAmino;
                    fromAminoMsg(object: _179.ChannelStateDataAminoMsg): _179.ChannelStateData;
                    toAminoMsg(message: _179.ChannelStateData): _179.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _179.ChannelStateDataProtoMsg): _179.ChannelStateData;
                    toProto(message: _179.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _179.ChannelStateData): _179.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _179.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.PacketCommitmentData;
                    fromPartial(object: Partial<_179.PacketCommitmentData>): _179.PacketCommitmentData;
                    fromAmino(object: _179.PacketCommitmentDataAmino): _179.PacketCommitmentData;
                    toAmino(message: _179.PacketCommitmentData): _179.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _179.PacketCommitmentDataAminoMsg): _179.PacketCommitmentData;
                    toAminoMsg(message: _179.PacketCommitmentData): _179.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _179.PacketCommitmentDataProtoMsg): _179.PacketCommitmentData;
                    toProto(message: _179.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _179.PacketCommitmentData): _179.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _179.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.PacketAcknowledgementData;
                    fromPartial(object: Partial<_179.PacketAcknowledgementData>): _179.PacketAcknowledgementData;
                    fromAmino(object: _179.PacketAcknowledgementDataAmino): _179.PacketAcknowledgementData;
                    toAmino(message: _179.PacketAcknowledgementData): _179.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _179.PacketAcknowledgementDataAminoMsg): _179.PacketAcknowledgementData;
                    toAminoMsg(message: _179.PacketAcknowledgementData): _179.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _179.PacketAcknowledgementDataProtoMsg): _179.PacketAcknowledgementData;
                    toProto(message: _179.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _179.PacketAcknowledgementData): _179.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _179.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_179.PacketReceiptAbsenceData>): _179.PacketReceiptAbsenceData;
                    fromAmino(object: _179.PacketReceiptAbsenceDataAmino): _179.PacketReceiptAbsenceData;
                    toAmino(message: _179.PacketReceiptAbsenceData): _179.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _179.PacketReceiptAbsenceDataAminoMsg): _179.PacketReceiptAbsenceData;
                    toAminoMsg(message: _179.PacketReceiptAbsenceData): _179.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _179.PacketReceiptAbsenceDataProtoMsg): _179.PacketReceiptAbsenceData;
                    toProto(message: _179.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _179.PacketReceiptAbsenceData): _179.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _179.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.NextSequenceRecvData;
                    fromPartial(object: Partial<_179.NextSequenceRecvData>): _179.NextSequenceRecvData;
                    fromAmino(object: _179.NextSequenceRecvDataAmino): _179.NextSequenceRecvData;
                    toAmino(message: _179.NextSequenceRecvData): _179.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _179.NextSequenceRecvDataAminoMsg): _179.NextSequenceRecvData;
                    toAminoMsg(message: _179.NextSequenceRecvData): _179.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _179.NextSequenceRecvDataProtoMsg): _179.NextSequenceRecvData;
                    toProto(message: _179.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _179.NextSequenceRecvData): _179.NextSequenceRecvDataProtoMsg;
                };
            };
            const v3: {
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
            };
        }
        namespace tendermint {
            const v1: {
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
                Fraction: {
                    typeUrl: string;
                    encode(message: _181.Fraction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.Fraction;
                    fromPartial(object: Partial<_181.Fraction>): _181.Fraction;
                    fromAmino(object: _181.FractionAmino): _181.Fraction;
                    toAmino(message: _181.Fraction): _181.FractionAmino;
                    fromAminoMsg(object: _181.FractionAminoMsg): _181.Fraction;
                    toAminoMsg(message: _181.Fraction): _181.FractionAminoMsg;
                    fromProtoMsg(message: _181.FractionProtoMsg): _181.Fraction;
                    toProto(message: _181.Fraction): Uint8Array;
                    toProtoMsg(message: _181.Fraction): _181.FractionProtoMsg;
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
                        v1: _360.MsgClientImpl;
                    };
                    interchain_accounts: {
                        controller: {
                            v1: _361.MsgClientImpl;
                        };
                    };
                    transfer: {
                        v1: _362.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _363.MsgClientImpl;
                    };
                    client: {
                        v1: _364.MsgClientImpl;
                    };
                    connection: {
                        v1: _365.MsgClientImpl;
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
                            denomTraces(request?: _160.QueryDenomTracesRequest): Promise<_160.QueryDenomTracesResponse>;
                            denomTrace(request: _160.QueryDenomTraceRequest): Promise<_160.QueryDenomTraceResponse>;
                            params(request?: _160.QueryParamsRequest): Promise<_160.QueryParamsResponse>;
                            denomHash(request: _160.QueryDenomHashRequest): Promise<_160.QueryDenomHashResponse>;
                            escrowAddress(request: _160.QueryEscrowAddressRequest): Promise<_160.QueryEscrowAddressResponse>;
                            totalEscrowForDenom(request: _160.QueryTotalEscrowForDenomRequest): Promise<_160.QueryTotalEscrowForDenomResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _166.QueryChannelRequest): Promise<_166.QueryChannelResponse>;
                            channels(request?: _166.QueryChannelsRequest): Promise<_166.QueryChannelsResponse>;
                            connectionChannels(request: _166.QueryConnectionChannelsRequest): Promise<_166.QueryConnectionChannelsResponse>;
                            channelClientState(request: _166.QueryChannelClientStateRequest): Promise<_166.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _166.QueryChannelConsensusStateRequest): Promise<_166.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _166.QueryPacketCommitmentRequest): Promise<_166.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _166.QueryPacketCommitmentsRequest): Promise<_166.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _166.QueryPacketReceiptRequest): Promise<_166.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _166.QueryPacketAcknowledgementRequest): Promise<_166.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _166.QueryPacketAcknowledgementsRequest): Promise<_166.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _166.QueryUnreceivedPacketsRequest): Promise<_166.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _166.QueryUnreceivedAcksRequest): Promise<_166.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _166.QueryNextSequenceReceiveRequest): Promise<_166.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _170.QueryClientStateRequest): Promise<_170.QueryClientStateResponse>;
                            clientStates(request?: _170.QueryClientStatesRequest): Promise<_170.QueryClientStatesResponse>;
                            consensusState(request: _170.QueryConsensusStateRequest): Promise<_170.QueryConsensusStateResponse>;
                            consensusStates(request: _170.QueryConsensusStatesRequest): Promise<_170.QueryConsensusStatesResponse>;
                            consensusStateHeights(request: _170.QueryConsensusStateHeightsRequest): Promise<_170.QueryConsensusStateHeightsResponse>;
                            clientStatus(request: _170.QueryClientStatusRequest): Promise<_170.QueryClientStatusResponse>;
                            clientParams(request?: _170.QueryClientParamsRequest): Promise<_170.QueryClientParamsResponse>;
                            upgradedClientState(request?: _170.QueryUpgradedClientStateRequest): Promise<_170.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _170.QueryUpgradedConsensusStateRequest): Promise<_170.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _175.QueryConnectionRequest): Promise<_175.QueryConnectionResponse>;
                            connections(request?: _175.QueryConnectionsRequest): Promise<_175.QueryConnectionsResponse>;
                            clientConnections(request: _175.QueryClientConnectionsRequest): Promise<_175.QueryClientConnectionsResponse>;
                            connectionClientState(request: _175.QueryConnectionClientStateRequest): Promise<_175.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _175.QueryConnectionConsensusStateRequest): Promise<_175.QueryConnectionConsensusStateResponse>;
                            connectionParams(request?: _175.QueryConnectionParamsRequest): Promise<_175.QueryConnectionParamsResponse>;
                        };
                    };
                };
            };
        }>;
    };
}
