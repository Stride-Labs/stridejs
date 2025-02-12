import * as _136 from "./applications/fee/v1/ack";
import * as _137 from "./applications/fee/v1/fee";
import * as _138 from "./applications/fee/v1/genesis";
import * as _139 from "./applications/fee/v1/metadata";
import * as _140 from "./applications/fee/v1/query";
import * as _141 from "./applications/fee/v1/tx";
import * as _142 from "./applications/interchain_accounts/controller/v1/controller";
import * as _143 from "./applications/interchain_accounts/controller/v1/query";
import * as _144 from "./applications/interchain_accounts/controller/v1/tx";
import * as _145 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _146 from "./applications/interchain_accounts/host/v1/host";
import * as _147 from "./applications/interchain_accounts/host/v1/query";
import * as _148 from "./applications/interchain_accounts/v1/account";
import * as _149 from "./applications/interchain_accounts/v1/metadata";
import * as _150 from "./applications/interchain_accounts/v1/packet";
import * as _151 from "./applications/transfer/v1/authz";
import * as _152 from "./applications/transfer/v1/genesis";
import * as _153 from "./applications/transfer/v1/query";
import * as _154 from "./applications/transfer/v1/transfer";
import * as _155 from "./applications/transfer/v1/tx";
import * as _156 from "./applications/transfer/v2/packet";
import * as _157 from "./core/channel/v1/channel";
import * as _158 from "./core/channel/v1/genesis";
import * as _159 from "./core/channel/v1/query";
import * as _160 from "./core/channel/v1/tx";
import * as _161 from "./core/client/v1/client";
import * as _162 from "./core/client/v1/genesis";
import * as _163 from "./core/client/v1/query";
import * as _164 from "./core/client/v1/tx";
import * as _165 from "./core/commitment/v1/commitment";
import * as _166 from "./core/connection/v1/connection";
import * as _167 from "./core/connection/v1/genesis";
import * as _168 from "./core/connection/v1/query";
import * as _169 from "./core/connection/v1/tx";
import * as _170 from "./core/types/v1/genesis";
import * as _171 from "./lightclients/localhost/v2/localhost";
import * as _172 from "./lightclients/solomachine/v2/solomachine";
import * as _173 from "./lightclients/solomachine/v3/solomachine";
import * as _174 from "./lightclients/tendermint/v1/tendermint";
import * as _342 from "./applications/fee/v1/query.rpc.Query";
import * as _343 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _344 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _345 from "./applications/transfer/v1/query.rpc.Query";
import * as _346 from "./core/channel/v1/query.rpc.Query";
import * as _347 from "./core/client/v1/query.rpc.Query";
import * as _348 from "./core/connection/v1/query.rpc.Query";
import * as _349 from "./applications/fee/v1/tx.rpc.msg";
import * as _350 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _351 from "./applications/transfer/v1/tx.rpc.msg";
import * as _352 from "./core/channel/v1/tx.rpc.msg";
import * as _353 from "./core/client/v1/tx.rpc.msg";
import * as _354 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace fee {
            const v1: {
                MsgClientImpl: typeof _349.MsgClientImpl;
                QueryClientImpl: typeof _342.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    incentivizedPackets(request: _140.QueryIncentivizedPacketsRequest): Promise<_140.QueryIncentivizedPacketsResponse>;
                    incentivizedPacket(request: _140.QueryIncentivizedPacketRequest): Promise<_140.QueryIncentivizedPacketResponse>;
                    incentivizedPacketsForChannel(request: _140.QueryIncentivizedPacketsForChannelRequest): Promise<_140.QueryIncentivizedPacketsForChannelResponse>;
                    totalRecvFees(request: _140.QueryTotalRecvFeesRequest): Promise<_140.QueryTotalRecvFeesResponse>;
                    totalAckFees(request: _140.QueryTotalAckFeesRequest): Promise<_140.QueryTotalAckFeesResponse>;
                    totalTimeoutFees(request: _140.QueryTotalTimeoutFeesRequest): Promise<_140.QueryTotalTimeoutFeesResponse>;
                    payee(request: _140.QueryPayeeRequest): Promise<_140.QueryPayeeResponse>;
                    counterpartyPayee(request: _140.QueryCounterpartyPayeeRequest): Promise<_140.QueryCounterpartyPayeeResponse>;
                    feeEnabledChannels(request: _140.QueryFeeEnabledChannelsRequest): Promise<_140.QueryFeeEnabledChannelsResponse>;
                    feeEnabledChannel(request: _140.QueryFeeEnabledChannelRequest): Promise<_140.QueryFeeEnabledChannelResponse>;
                };
                registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        registerPayee(value: _141.MsgRegisterPayee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        registerCounterpartyPayee(value: _141.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        payPacketFee(value: _141.MsgPayPacketFee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        payPacketFeeAsync(value: _141.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        registerPayee(value: _141.MsgRegisterPayee): {
                            typeUrl: string;
                            value: _141.MsgRegisterPayee;
                        };
                        registerCounterpartyPayee(value: _141.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: _141.MsgRegisterCounterpartyPayee;
                        };
                        payPacketFee(value: _141.MsgPayPacketFee): {
                            typeUrl: string;
                            value: _141.MsgPayPacketFee;
                        };
                        payPacketFeeAsync(value: _141.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: _141.MsgPayPacketFeeAsync;
                        };
                    };
                    fromPartial: {
                        registerPayee(value: _141.MsgRegisterPayee): {
                            typeUrl: string;
                            value: _141.MsgRegisterPayee;
                        };
                        registerCounterpartyPayee(value: _141.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: _141.MsgRegisterCounterpartyPayee;
                        };
                        payPacketFee(value: _141.MsgPayPacketFee): {
                            typeUrl: string;
                            value: _141.MsgPayPacketFee;
                        };
                        payPacketFeeAsync(value: _141.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: _141.MsgPayPacketFeeAsync;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.fee.v1.MsgRegisterPayee": {
                        aminoType: string;
                        toAmino: (message: _141.MsgRegisterPayee) => _141.MsgRegisterPayeeAmino;
                        fromAmino: (object: _141.MsgRegisterPayeeAmino) => _141.MsgRegisterPayee;
                    };
                    "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee": {
                        aminoType: string;
                        toAmino: (message: _141.MsgRegisterCounterpartyPayee) => _141.MsgRegisterCounterpartyPayeeAmino;
                        fromAmino: (object: _141.MsgRegisterCounterpartyPayeeAmino) => _141.MsgRegisterCounterpartyPayee;
                    };
                    "/ibc.applications.fee.v1.MsgPayPacketFee": {
                        aminoType: string;
                        toAmino: (message: _141.MsgPayPacketFee) => _141.MsgPayPacketFeeAmino;
                        fromAmino: (object: _141.MsgPayPacketFeeAmino) => _141.MsgPayPacketFee;
                    };
                    "/ibc.applications.fee.v1.MsgPayPacketFeeAsync": {
                        aminoType: string;
                        toAmino: (message: _141.MsgPayPacketFeeAsync) => _141.MsgPayPacketFeeAsyncAmino;
                        fromAmino: (object: _141.MsgPayPacketFeeAsyncAmino) => _141.MsgPayPacketFeeAsync;
                    };
                };
                MsgRegisterPayee: {
                    typeUrl: string;
                    encode(message: _141.MsgRegisterPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.MsgRegisterPayee;
                    fromPartial(object: Partial<_141.MsgRegisterPayee>): _141.MsgRegisterPayee;
                    fromAmino(object: _141.MsgRegisterPayeeAmino): _141.MsgRegisterPayee;
                    toAmino(message: _141.MsgRegisterPayee): _141.MsgRegisterPayeeAmino;
                    fromAminoMsg(object: _141.MsgRegisterPayeeAminoMsg): _141.MsgRegisterPayee;
                    toAminoMsg(message: _141.MsgRegisterPayee): _141.MsgRegisterPayeeAminoMsg;
                    fromProtoMsg(message: _141.MsgRegisterPayeeProtoMsg): _141.MsgRegisterPayee;
                    toProto(message: _141.MsgRegisterPayee): Uint8Array;
                    toProtoMsg(message: _141.MsgRegisterPayee): _141.MsgRegisterPayeeProtoMsg;
                };
                MsgRegisterPayeeResponse: {
                    typeUrl: string;
                    encode(_: _141.MsgRegisterPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.MsgRegisterPayeeResponse;
                    fromPartial(_: Partial<_141.MsgRegisterPayeeResponse>): _141.MsgRegisterPayeeResponse;
                    fromAmino(_: _141.MsgRegisterPayeeResponseAmino): _141.MsgRegisterPayeeResponse;
                    toAmino(_: _141.MsgRegisterPayeeResponse): _141.MsgRegisterPayeeResponseAmino;
                    fromAminoMsg(object: _141.MsgRegisterPayeeResponseAminoMsg): _141.MsgRegisterPayeeResponse;
                    toAminoMsg(message: _141.MsgRegisterPayeeResponse): _141.MsgRegisterPayeeResponseAminoMsg;
                    fromProtoMsg(message: _141.MsgRegisterPayeeResponseProtoMsg): _141.MsgRegisterPayeeResponse;
                    toProto(message: _141.MsgRegisterPayeeResponse): Uint8Array;
                    toProtoMsg(message: _141.MsgRegisterPayeeResponse): _141.MsgRegisterPayeeResponseProtoMsg;
                };
                MsgRegisterCounterpartyPayee: {
                    typeUrl: string;
                    encode(message: _141.MsgRegisterCounterpartyPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.MsgRegisterCounterpartyPayee;
                    fromPartial(object: Partial<_141.MsgRegisterCounterpartyPayee>): _141.MsgRegisterCounterpartyPayee;
                    fromAmino(object: _141.MsgRegisterCounterpartyPayeeAmino): _141.MsgRegisterCounterpartyPayee;
                    toAmino(message: _141.MsgRegisterCounterpartyPayee): _141.MsgRegisterCounterpartyPayeeAmino;
                    fromAminoMsg(object: _141.MsgRegisterCounterpartyPayeeAminoMsg): _141.MsgRegisterCounterpartyPayee;
                    toAminoMsg(message: _141.MsgRegisterCounterpartyPayee): _141.MsgRegisterCounterpartyPayeeAminoMsg;
                    fromProtoMsg(message: _141.MsgRegisterCounterpartyPayeeProtoMsg): _141.MsgRegisterCounterpartyPayee;
                    toProto(message: _141.MsgRegisterCounterpartyPayee): Uint8Array;
                    toProtoMsg(message: _141.MsgRegisterCounterpartyPayee): _141.MsgRegisterCounterpartyPayeeProtoMsg;
                };
                MsgRegisterCounterpartyPayeeResponse: {
                    typeUrl: string;
                    encode(_: _141.MsgRegisterCounterpartyPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.MsgRegisterCounterpartyPayeeResponse;
                    fromPartial(_: Partial<_141.MsgRegisterCounterpartyPayeeResponse>): _141.MsgRegisterCounterpartyPayeeResponse;
                    fromAmino(_: _141.MsgRegisterCounterpartyPayeeResponseAmino): _141.MsgRegisterCounterpartyPayeeResponse;
                    toAmino(_: _141.MsgRegisterCounterpartyPayeeResponse): _141.MsgRegisterCounterpartyPayeeResponseAmino;
                    fromAminoMsg(object: _141.MsgRegisterCounterpartyPayeeResponseAminoMsg): _141.MsgRegisterCounterpartyPayeeResponse;
                    toAminoMsg(message: _141.MsgRegisterCounterpartyPayeeResponse): _141.MsgRegisterCounterpartyPayeeResponseAminoMsg;
                    fromProtoMsg(message: _141.MsgRegisterCounterpartyPayeeResponseProtoMsg): _141.MsgRegisterCounterpartyPayeeResponse;
                    toProto(message: _141.MsgRegisterCounterpartyPayeeResponse): Uint8Array;
                    toProtoMsg(message: _141.MsgRegisterCounterpartyPayeeResponse): _141.MsgRegisterCounterpartyPayeeResponseProtoMsg;
                };
                MsgPayPacketFee: {
                    typeUrl: string;
                    encode(message: _141.MsgPayPacketFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.MsgPayPacketFee;
                    fromPartial(object: Partial<_141.MsgPayPacketFee>): _141.MsgPayPacketFee;
                    fromAmino(object: _141.MsgPayPacketFeeAmino): _141.MsgPayPacketFee;
                    toAmino(message: _141.MsgPayPacketFee): _141.MsgPayPacketFeeAmino;
                    fromAminoMsg(object: _141.MsgPayPacketFeeAminoMsg): _141.MsgPayPacketFee;
                    toAminoMsg(message: _141.MsgPayPacketFee): _141.MsgPayPacketFeeAminoMsg;
                    fromProtoMsg(message: _141.MsgPayPacketFeeProtoMsg): _141.MsgPayPacketFee;
                    toProto(message: _141.MsgPayPacketFee): Uint8Array;
                    toProtoMsg(message: _141.MsgPayPacketFee): _141.MsgPayPacketFeeProtoMsg;
                };
                MsgPayPacketFeeResponse: {
                    typeUrl: string;
                    encode(_: _141.MsgPayPacketFeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.MsgPayPacketFeeResponse;
                    fromPartial(_: Partial<_141.MsgPayPacketFeeResponse>): _141.MsgPayPacketFeeResponse;
                    fromAmino(_: _141.MsgPayPacketFeeResponseAmino): _141.MsgPayPacketFeeResponse;
                    toAmino(_: _141.MsgPayPacketFeeResponse): _141.MsgPayPacketFeeResponseAmino;
                    fromAminoMsg(object: _141.MsgPayPacketFeeResponseAminoMsg): _141.MsgPayPacketFeeResponse;
                    toAminoMsg(message: _141.MsgPayPacketFeeResponse): _141.MsgPayPacketFeeResponseAminoMsg;
                    fromProtoMsg(message: _141.MsgPayPacketFeeResponseProtoMsg): _141.MsgPayPacketFeeResponse;
                    toProto(message: _141.MsgPayPacketFeeResponse): Uint8Array;
                    toProtoMsg(message: _141.MsgPayPacketFeeResponse): _141.MsgPayPacketFeeResponseProtoMsg;
                };
                MsgPayPacketFeeAsync: {
                    typeUrl: string;
                    encode(message: _141.MsgPayPacketFeeAsync, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.MsgPayPacketFeeAsync;
                    fromPartial(object: Partial<_141.MsgPayPacketFeeAsync>): _141.MsgPayPacketFeeAsync;
                    fromAmino(object: _141.MsgPayPacketFeeAsyncAmino): _141.MsgPayPacketFeeAsync;
                    toAmino(message: _141.MsgPayPacketFeeAsync): _141.MsgPayPacketFeeAsyncAmino;
                    fromAminoMsg(object: _141.MsgPayPacketFeeAsyncAminoMsg): _141.MsgPayPacketFeeAsync;
                    toAminoMsg(message: _141.MsgPayPacketFeeAsync): _141.MsgPayPacketFeeAsyncAminoMsg;
                    fromProtoMsg(message: _141.MsgPayPacketFeeAsyncProtoMsg): _141.MsgPayPacketFeeAsync;
                    toProto(message: _141.MsgPayPacketFeeAsync): Uint8Array;
                    toProtoMsg(message: _141.MsgPayPacketFeeAsync): _141.MsgPayPacketFeeAsyncProtoMsg;
                };
                MsgPayPacketFeeAsyncResponse: {
                    typeUrl: string;
                    encode(_: _141.MsgPayPacketFeeAsyncResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.MsgPayPacketFeeAsyncResponse;
                    fromPartial(_: Partial<_141.MsgPayPacketFeeAsyncResponse>): _141.MsgPayPacketFeeAsyncResponse;
                    fromAmino(_: _141.MsgPayPacketFeeAsyncResponseAmino): _141.MsgPayPacketFeeAsyncResponse;
                    toAmino(_: _141.MsgPayPacketFeeAsyncResponse): _141.MsgPayPacketFeeAsyncResponseAmino;
                    fromAminoMsg(object: _141.MsgPayPacketFeeAsyncResponseAminoMsg): _141.MsgPayPacketFeeAsyncResponse;
                    toAminoMsg(message: _141.MsgPayPacketFeeAsyncResponse): _141.MsgPayPacketFeeAsyncResponseAminoMsg;
                    fromProtoMsg(message: _141.MsgPayPacketFeeAsyncResponseProtoMsg): _141.MsgPayPacketFeeAsyncResponse;
                    toProto(message: _141.MsgPayPacketFeeAsyncResponse): Uint8Array;
                    toProtoMsg(message: _141.MsgPayPacketFeeAsyncResponse): _141.MsgPayPacketFeeAsyncResponseProtoMsg;
                };
                QueryIncentivizedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _140.QueryIncentivizedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.QueryIncentivizedPacketsRequest;
                    fromPartial(object: Partial<_140.QueryIncentivizedPacketsRequest>): _140.QueryIncentivizedPacketsRequest;
                    fromAmino(object: _140.QueryIncentivizedPacketsRequestAmino): _140.QueryIncentivizedPacketsRequest;
                    toAmino(message: _140.QueryIncentivizedPacketsRequest): _140.QueryIncentivizedPacketsRequestAmino;
                    fromAminoMsg(object: _140.QueryIncentivizedPacketsRequestAminoMsg): _140.QueryIncentivizedPacketsRequest;
                    toAminoMsg(message: _140.QueryIncentivizedPacketsRequest): _140.QueryIncentivizedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _140.QueryIncentivizedPacketsRequestProtoMsg): _140.QueryIncentivizedPacketsRequest;
                    toProto(message: _140.QueryIncentivizedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _140.QueryIncentivizedPacketsRequest): _140.QueryIncentivizedPacketsRequestProtoMsg;
                };
                QueryIncentivizedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _140.QueryIncentivizedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.QueryIncentivizedPacketsResponse;
                    fromPartial(object: Partial<_140.QueryIncentivizedPacketsResponse>): _140.QueryIncentivizedPacketsResponse;
                    fromAmino(object: _140.QueryIncentivizedPacketsResponseAmino): _140.QueryIncentivizedPacketsResponse;
                    toAmino(message: _140.QueryIncentivizedPacketsResponse): _140.QueryIncentivizedPacketsResponseAmino;
                    fromAminoMsg(object: _140.QueryIncentivizedPacketsResponseAminoMsg): _140.QueryIncentivizedPacketsResponse;
                    toAminoMsg(message: _140.QueryIncentivizedPacketsResponse): _140.QueryIncentivizedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _140.QueryIncentivizedPacketsResponseProtoMsg): _140.QueryIncentivizedPacketsResponse;
                    toProto(message: _140.QueryIncentivizedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _140.QueryIncentivizedPacketsResponse): _140.QueryIncentivizedPacketsResponseProtoMsg;
                };
                QueryIncentivizedPacketRequest: {
                    typeUrl: string;
                    encode(message: _140.QueryIncentivizedPacketRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.QueryIncentivizedPacketRequest;
                    fromPartial(object: Partial<_140.QueryIncentivizedPacketRequest>): _140.QueryIncentivizedPacketRequest;
                    fromAmino(object: _140.QueryIncentivizedPacketRequestAmino): _140.QueryIncentivizedPacketRequest;
                    toAmino(message: _140.QueryIncentivizedPacketRequest): _140.QueryIncentivizedPacketRequestAmino;
                    fromAminoMsg(object: _140.QueryIncentivizedPacketRequestAminoMsg): _140.QueryIncentivizedPacketRequest;
                    toAminoMsg(message: _140.QueryIncentivizedPacketRequest): _140.QueryIncentivizedPacketRequestAminoMsg;
                    fromProtoMsg(message: _140.QueryIncentivizedPacketRequestProtoMsg): _140.QueryIncentivizedPacketRequest;
                    toProto(message: _140.QueryIncentivizedPacketRequest): Uint8Array;
                    toProtoMsg(message: _140.QueryIncentivizedPacketRequest): _140.QueryIncentivizedPacketRequestProtoMsg;
                };
                QueryIncentivizedPacketResponse: {
                    typeUrl: string;
                    encode(message: _140.QueryIncentivizedPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.QueryIncentivizedPacketResponse;
                    fromPartial(object: Partial<_140.QueryIncentivizedPacketResponse>): _140.QueryIncentivizedPacketResponse;
                    fromAmino(object: _140.QueryIncentivizedPacketResponseAmino): _140.QueryIncentivizedPacketResponse;
                    toAmino(message: _140.QueryIncentivizedPacketResponse): _140.QueryIncentivizedPacketResponseAmino;
                    fromAminoMsg(object: _140.QueryIncentivizedPacketResponseAminoMsg): _140.QueryIncentivizedPacketResponse;
                    toAminoMsg(message: _140.QueryIncentivizedPacketResponse): _140.QueryIncentivizedPacketResponseAminoMsg;
                    fromProtoMsg(message: _140.QueryIncentivizedPacketResponseProtoMsg): _140.QueryIncentivizedPacketResponse;
                    toProto(message: _140.QueryIncentivizedPacketResponse): Uint8Array;
                    toProtoMsg(message: _140.QueryIncentivizedPacketResponse): _140.QueryIncentivizedPacketResponseProtoMsg;
                };
                QueryIncentivizedPacketsForChannelRequest: {
                    typeUrl: string;
                    encode(message: _140.QueryIncentivizedPacketsForChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.QueryIncentivizedPacketsForChannelRequest;
                    fromPartial(object: Partial<_140.QueryIncentivizedPacketsForChannelRequest>): _140.QueryIncentivizedPacketsForChannelRequest;
                    fromAmino(object: _140.QueryIncentivizedPacketsForChannelRequestAmino): _140.QueryIncentivizedPacketsForChannelRequest;
                    toAmino(message: _140.QueryIncentivizedPacketsForChannelRequest): _140.QueryIncentivizedPacketsForChannelRequestAmino;
                    fromAminoMsg(object: _140.QueryIncentivizedPacketsForChannelRequestAminoMsg): _140.QueryIncentivizedPacketsForChannelRequest;
                    toAminoMsg(message: _140.QueryIncentivizedPacketsForChannelRequest): _140.QueryIncentivizedPacketsForChannelRequestAminoMsg;
                    fromProtoMsg(message: _140.QueryIncentivizedPacketsForChannelRequestProtoMsg): _140.QueryIncentivizedPacketsForChannelRequest;
                    toProto(message: _140.QueryIncentivizedPacketsForChannelRequest): Uint8Array;
                    toProtoMsg(message: _140.QueryIncentivizedPacketsForChannelRequest): _140.QueryIncentivizedPacketsForChannelRequestProtoMsg;
                };
                QueryIncentivizedPacketsForChannelResponse: {
                    typeUrl: string;
                    encode(message: _140.QueryIncentivizedPacketsForChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.QueryIncentivizedPacketsForChannelResponse;
                    fromPartial(object: Partial<_140.QueryIncentivizedPacketsForChannelResponse>): _140.QueryIncentivizedPacketsForChannelResponse;
                    fromAmino(object: _140.QueryIncentivizedPacketsForChannelResponseAmino): _140.QueryIncentivizedPacketsForChannelResponse;
                    toAmino(message: _140.QueryIncentivizedPacketsForChannelResponse): _140.QueryIncentivizedPacketsForChannelResponseAmino;
                    fromAminoMsg(object: _140.QueryIncentivizedPacketsForChannelResponseAminoMsg): _140.QueryIncentivizedPacketsForChannelResponse;
                    toAminoMsg(message: _140.QueryIncentivizedPacketsForChannelResponse): _140.QueryIncentivizedPacketsForChannelResponseAminoMsg;
                    fromProtoMsg(message: _140.QueryIncentivizedPacketsForChannelResponseProtoMsg): _140.QueryIncentivizedPacketsForChannelResponse;
                    toProto(message: _140.QueryIncentivizedPacketsForChannelResponse): Uint8Array;
                    toProtoMsg(message: _140.QueryIncentivizedPacketsForChannelResponse): _140.QueryIncentivizedPacketsForChannelResponseProtoMsg;
                };
                QueryTotalRecvFeesRequest: {
                    typeUrl: string;
                    encode(message: _140.QueryTotalRecvFeesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.QueryTotalRecvFeesRequest;
                    fromPartial(object: Partial<_140.QueryTotalRecvFeesRequest>): _140.QueryTotalRecvFeesRequest;
                    fromAmino(object: _140.QueryTotalRecvFeesRequestAmino): _140.QueryTotalRecvFeesRequest;
                    toAmino(message: _140.QueryTotalRecvFeesRequest): _140.QueryTotalRecvFeesRequestAmino;
                    fromAminoMsg(object: _140.QueryTotalRecvFeesRequestAminoMsg): _140.QueryTotalRecvFeesRequest;
                    toAminoMsg(message: _140.QueryTotalRecvFeesRequest): _140.QueryTotalRecvFeesRequestAminoMsg;
                    fromProtoMsg(message: _140.QueryTotalRecvFeesRequestProtoMsg): _140.QueryTotalRecvFeesRequest;
                    toProto(message: _140.QueryTotalRecvFeesRequest): Uint8Array;
                    toProtoMsg(message: _140.QueryTotalRecvFeesRequest): _140.QueryTotalRecvFeesRequestProtoMsg;
                };
                QueryTotalRecvFeesResponse: {
                    typeUrl: string;
                    encode(message: _140.QueryTotalRecvFeesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.QueryTotalRecvFeesResponse;
                    fromPartial(object: Partial<_140.QueryTotalRecvFeesResponse>): _140.QueryTotalRecvFeesResponse;
                    fromAmino(object: _140.QueryTotalRecvFeesResponseAmino): _140.QueryTotalRecvFeesResponse;
                    toAmino(message: _140.QueryTotalRecvFeesResponse): _140.QueryTotalRecvFeesResponseAmino;
                    fromAminoMsg(object: _140.QueryTotalRecvFeesResponseAminoMsg): _140.QueryTotalRecvFeesResponse;
                    toAminoMsg(message: _140.QueryTotalRecvFeesResponse): _140.QueryTotalRecvFeesResponseAminoMsg;
                    fromProtoMsg(message: _140.QueryTotalRecvFeesResponseProtoMsg): _140.QueryTotalRecvFeesResponse;
                    toProto(message: _140.QueryTotalRecvFeesResponse): Uint8Array;
                    toProtoMsg(message: _140.QueryTotalRecvFeesResponse): _140.QueryTotalRecvFeesResponseProtoMsg;
                };
                QueryTotalAckFeesRequest: {
                    typeUrl: string;
                    encode(message: _140.QueryTotalAckFeesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.QueryTotalAckFeesRequest;
                    fromPartial(object: Partial<_140.QueryTotalAckFeesRequest>): _140.QueryTotalAckFeesRequest;
                    fromAmino(object: _140.QueryTotalAckFeesRequestAmino): _140.QueryTotalAckFeesRequest;
                    toAmino(message: _140.QueryTotalAckFeesRequest): _140.QueryTotalAckFeesRequestAmino;
                    fromAminoMsg(object: _140.QueryTotalAckFeesRequestAminoMsg): _140.QueryTotalAckFeesRequest;
                    toAminoMsg(message: _140.QueryTotalAckFeesRequest): _140.QueryTotalAckFeesRequestAminoMsg;
                    fromProtoMsg(message: _140.QueryTotalAckFeesRequestProtoMsg): _140.QueryTotalAckFeesRequest;
                    toProto(message: _140.QueryTotalAckFeesRequest): Uint8Array;
                    toProtoMsg(message: _140.QueryTotalAckFeesRequest): _140.QueryTotalAckFeesRequestProtoMsg;
                };
                QueryTotalAckFeesResponse: {
                    typeUrl: string;
                    encode(message: _140.QueryTotalAckFeesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.QueryTotalAckFeesResponse;
                    fromPartial(object: Partial<_140.QueryTotalAckFeesResponse>): _140.QueryTotalAckFeesResponse;
                    fromAmino(object: _140.QueryTotalAckFeesResponseAmino): _140.QueryTotalAckFeesResponse;
                    toAmino(message: _140.QueryTotalAckFeesResponse): _140.QueryTotalAckFeesResponseAmino;
                    fromAminoMsg(object: _140.QueryTotalAckFeesResponseAminoMsg): _140.QueryTotalAckFeesResponse;
                    toAminoMsg(message: _140.QueryTotalAckFeesResponse): _140.QueryTotalAckFeesResponseAminoMsg;
                    fromProtoMsg(message: _140.QueryTotalAckFeesResponseProtoMsg): _140.QueryTotalAckFeesResponse;
                    toProto(message: _140.QueryTotalAckFeesResponse): Uint8Array;
                    toProtoMsg(message: _140.QueryTotalAckFeesResponse): _140.QueryTotalAckFeesResponseProtoMsg;
                };
                QueryTotalTimeoutFeesRequest: {
                    typeUrl: string;
                    encode(message: _140.QueryTotalTimeoutFeesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.QueryTotalTimeoutFeesRequest;
                    fromPartial(object: Partial<_140.QueryTotalTimeoutFeesRequest>): _140.QueryTotalTimeoutFeesRequest;
                    fromAmino(object: _140.QueryTotalTimeoutFeesRequestAmino): _140.QueryTotalTimeoutFeesRequest;
                    toAmino(message: _140.QueryTotalTimeoutFeesRequest): _140.QueryTotalTimeoutFeesRequestAmino;
                    fromAminoMsg(object: _140.QueryTotalTimeoutFeesRequestAminoMsg): _140.QueryTotalTimeoutFeesRequest;
                    toAminoMsg(message: _140.QueryTotalTimeoutFeesRequest): _140.QueryTotalTimeoutFeesRequestAminoMsg;
                    fromProtoMsg(message: _140.QueryTotalTimeoutFeesRequestProtoMsg): _140.QueryTotalTimeoutFeesRequest;
                    toProto(message: _140.QueryTotalTimeoutFeesRequest): Uint8Array;
                    toProtoMsg(message: _140.QueryTotalTimeoutFeesRequest): _140.QueryTotalTimeoutFeesRequestProtoMsg;
                };
                QueryTotalTimeoutFeesResponse: {
                    typeUrl: string;
                    encode(message: _140.QueryTotalTimeoutFeesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.QueryTotalTimeoutFeesResponse;
                    fromPartial(object: Partial<_140.QueryTotalTimeoutFeesResponse>): _140.QueryTotalTimeoutFeesResponse;
                    fromAmino(object: _140.QueryTotalTimeoutFeesResponseAmino): _140.QueryTotalTimeoutFeesResponse;
                    toAmino(message: _140.QueryTotalTimeoutFeesResponse): _140.QueryTotalTimeoutFeesResponseAmino;
                    fromAminoMsg(object: _140.QueryTotalTimeoutFeesResponseAminoMsg): _140.QueryTotalTimeoutFeesResponse;
                    toAminoMsg(message: _140.QueryTotalTimeoutFeesResponse): _140.QueryTotalTimeoutFeesResponseAminoMsg;
                    fromProtoMsg(message: _140.QueryTotalTimeoutFeesResponseProtoMsg): _140.QueryTotalTimeoutFeesResponse;
                    toProto(message: _140.QueryTotalTimeoutFeesResponse): Uint8Array;
                    toProtoMsg(message: _140.QueryTotalTimeoutFeesResponse): _140.QueryTotalTimeoutFeesResponseProtoMsg;
                };
                QueryPayeeRequest: {
                    typeUrl: string;
                    encode(message: _140.QueryPayeeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.QueryPayeeRequest;
                    fromPartial(object: Partial<_140.QueryPayeeRequest>): _140.QueryPayeeRequest;
                    fromAmino(object: _140.QueryPayeeRequestAmino): _140.QueryPayeeRequest;
                    toAmino(message: _140.QueryPayeeRequest): _140.QueryPayeeRequestAmino;
                    fromAminoMsg(object: _140.QueryPayeeRequestAminoMsg): _140.QueryPayeeRequest;
                    toAminoMsg(message: _140.QueryPayeeRequest): _140.QueryPayeeRequestAminoMsg;
                    fromProtoMsg(message: _140.QueryPayeeRequestProtoMsg): _140.QueryPayeeRequest;
                    toProto(message: _140.QueryPayeeRequest): Uint8Array;
                    toProtoMsg(message: _140.QueryPayeeRequest): _140.QueryPayeeRequestProtoMsg;
                };
                QueryPayeeResponse: {
                    typeUrl: string;
                    encode(message: _140.QueryPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.QueryPayeeResponse;
                    fromPartial(object: Partial<_140.QueryPayeeResponse>): _140.QueryPayeeResponse;
                    fromAmino(object: _140.QueryPayeeResponseAmino): _140.QueryPayeeResponse;
                    toAmino(message: _140.QueryPayeeResponse): _140.QueryPayeeResponseAmino;
                    fromAminoMsg(object: _140.QueryPayeeResponseAminoMsg): _140.QueryPayeeResponse;
                    toAminoMsg(message: _140.QueryPayeeResponse): _140.QueryPayeeResponseAminoMsg;
                    fromProtoMsg(message: _140.QueryPayeeResponseProtoMsg): _140.QueryPayeeResponse;
                    toProto(message: _140.QueryPayeeResponse): Uint8Array;
                    toProtoMsg(message: _140.QueryPayeeResponse): _140.QueryPayeeResponseProtoMsg;
                };
                QueryCounterpartyPayeeRequest: {
                    typeUrl: string;
                    encode(message: _140.QueryCounterpartyPayeeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.QueryCounterpartyPayeeRequest;
                    fromPartial(object: Partial<_140.QueryCounterpartyPayeeRequest>): _140.QueryCounterpartyPayeeRequest;
                    fromAmino(object: _140.QueryCounterpartyPayeeRequestAmino): _140.QueryCounterpartyPayeeRequest;
                    toAmino(message: _140.QueryCounterpartyPayeeRequest): _140.QueryCounterpartyPayeeRequestAmino;
                    fromAminoMsg(object: _140.QueryCounterpartyPayeeRequestAminoMsg): _140.QueryCounterpartyPayeeRequest;
                    toAminoMsg(message: _140.QueryCounterpartyPayeeRequest): _140.QueryCounterpartyPayeeRequestAminoMsg;
                    fromProtoMsg(message: _140.QueryCounterpartyPayeeRequestProtoMsg): _140.QueryCounterpartyPayeeRequest;
                    toProto(message: _140.QueryCounterpartyPayeeRequest): Uint8Array;
                    toProtoMsg(message: _140.QueryCounterpartyPayeeRequest): _140.QueryCounterpartyPayeeRequestProtoMsg;
                };
                QueryCounterpartyPayeeResponse: {
                    typeUrl: string;
                    encode(message: _140.QueryCounterpartyPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.QueryCounterpartyPayeeResponse;
                    fromPartial(object: Partial<_140.QueryCounterpartyPayeeResponse>): _140.QueryCounterpartyPayeeResponse;
                    fromAmino(object: _140.QueryCounterpartyPayeeResponseAmino): _140.QueryCounterpartyPayeeResponse;
                    toAmino(message: _140.QueryCounterpartyPayeeResponse): _140.QueryCounterpartyPayeeResponseAmino;
                    fromAminoMsg(object: _140.QueryCounterpartyPayeeResponseAminoMsg): _140.QueryCounterpartyPayeeResponse;
                    toAminoMsg(message: _140.QueryCounterpartyPayeeResponse): _140.QueryCounterpartyPayeeResponseAminoMsg;
                    fromProtoMsg(message: _140.QueryCounterpartyPayeeResponseProtoMsg): _140.QueryCounterpartyPayeeResponse;
                    toProto(message: _140.QueryCounterpartyPayeeResponse): Uint8Array;
                    toProtoMsg(message: _140.QueryCounterpartyPayeeResponse): _140.QueryCounterpartyPayeeResponseProtoMsg;
                };
                QueryFeeEnabledChannelsRequest: {
                    typeUrl: string;
                    encode(message: _140.QueryFeeEnabledChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.QueryFeeEnabledChannelsRequest;
                    fromPartial(object: Partial<_140.QueryFeeEnabledChannelsRequest>): _140.QueryFeeEnabledChannelsRequest;
                    fromAmino(object: _140.QueryFeeEnabledChannelsRequestAmino): _140.QueryFeeEnabledChannelsRequest;
                    toAmino(message: _140.QueryFeeEnabledChannelsRequest): _140.QueryFeeEnabledChannelsRequestAmino;
                    fromAminoMsg(object: _140.QueryFeeEnabledChannelsRequestAminoMsg): _140.QueryFeeEnabledChannelsRequest;
                    toAminoMsg(message: _140.QueryFeeEnabledChannelsRequest): _140.QueryFeeEnabledChannelsRequestAminoMsg;
                    fromProtoMsg(message: _140.QueryFeeEnabledChannelsRequestProtoMsg): _140.QueryFeeEnabledChannelsRequest;
                    toProto(message: _140.QueryFeeEnabledChannelsRequest): Uint8Array;
                    toProtoMsg(message: _140.QueryFeeEnabledChannelsRequest): _140.QueryFeeEnabledChannelsRequestProtoMsg;
                };
                QueryFeeEnabledChannelsResponse: {
                    typeUrl: string;
                    encode(message: _140.QueryFeeEnabledChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.QueryFeeEnabledChannelsResponse;
                    fromPartial(object: Partial<_140.QueryFeeEnabledChannelsResponse>): _140.QueryFeeEnabledChannelsResponse;
                    fromAmino(object: _140.QueryFeeEnabledChannelsResponseAmino): _140.QueryFeeEnabledChannelsResponse;
                    toAmino(message: _140.QueryFeeEnabledChannelsResponse): _140.QueryFeeEnabledChannelsResponseAmino;
                    fromAminoMsg(object: _140.QueryFeeEnabledChannelsResponseAminoMsg): _140.QueryFeeEnabledChannelsResponse;
                    toAminoMsg(message: _140.QueryFeeEnabledChannelsResponse): _140.QueryFeeEnabledChannelsResponseAminoMsg;
                    fromProtoMsg(message: _140.QueryFeeEnabledChannelsResponseProtoMsg): _140.QueryFeeEnabledChannelsResponse;
                    toProto(message: _140.QueryFeeEnabledChannelsResponse): Uint8Array;
                    toProtoMsg(message: _140.QueryFeeEnabledChannelsResponse): _140.QueryFeeEnabledChannelsResponseProtoMsg;
                };
                QueryFeeEnabledChannelRequest: {
                    typeUrl: string;
                    encode(message: _140.QueryFeeEnabledChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.QueryFeeEnabledChannelRequest;
                    fromPartial(object: Partial<_140.QueryFeeEnabledChannelRequest>): _140.QueryFeeEnabledChannelRequest;
                    fromAmino(object: _140.QueryFeeEnabledChannelRequestAmino): _140.QueryFeeEnabledChannelRequest;
                    toAmino(message: _140.QueryFeeEnabledChannelRequest): _140.QueryFeeEnabledChannelRequestAmino;
                    fromAminoMsg(object: _140.QueryFeeEnabledChannelRequestAminoMsg): _140.QueryFeeEnabledChannelRequest;
                    toAminoMsg(message: _140.QueryFeeEnabledChannelRequest): _140.QueryFeeEnabledChannelRequestAminoMsg;
                    fromProtoMsg(message: _140.QueryFeeEnabledChannelRequestProtoMsg): _140.QueryFeeEnabledChannelRequest;
                    toProto(message: _140.QueryFeeEnabledChannelRequest): Uint8Array;
                    toProtoMsg(message: _140.QueryFeeEnabledChannelRequest): _140.QueryFeeEnabledChannelRequestProtoMsg;
                };
                QueryFeeEnabledChannelResponse: {
                    typeUrl: string;
                    encode(message: _140.QueryFeeEnabledChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.QueryFeeEnabledChannelResponse;
                    fromPartial(object: Partial<_140.QueryFeeEnabledChannelResponse>): _140.QueryFeeEnabledChannelResponse;
                    fromAmino(object: _140.QueryFeeEnabledChannelResponseAmino): _140.QueryFeeEnabledChannelResponse;
                    toAmino(message: _140.QueryFeeEnabledChannelResponse): _140.QueryFeeEnabledChannelResponseAmino;
                    fromAminoMsg(object: _140.QueryFeeEnabledChannelResponseAminoMsg): _140.QueryFeeEnabledChannelResponse;
                    toAminoMsg(message: _140.QueryFeeEnabledChannelResponse): _140.QueryFeeEnabledChannelResponseAminoMsg;
                    fromProtoMsg(message: _140.QueryFeeEnabledChannelResponseProtoMsg): _140.QueryFeeEnabledChannelResponse;
                    toProto(message: _140.QueryFeeEnabledChannelResponse): Uint8Array;
                    toProtoMsg(message: _140.QueryFeeEnabledChannelResponse): _140.QueryFeeEnabledChannelResponseProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _139.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.Metadata;
                    fromPartial(object: Partial<_139.Metadata>): _139.Metadata;
                    fromAmino(object: _139.MetadataAmino): _139.Metadata;
                    toAmino(message: _139.Metadata): _139.MetadataAmino;
                    fromAminoMsg(object: _139.MetadataAminoMsg): _139.Metadata;
                    toAminoMsg(message: _139.Metadata): _139.MetadataAminoMsg;
                    fromProtoMsg(message: _139.MetadataProtoMsg): _139.Metadata;
                    toProto(message: _139.Metadata): Uint8Array;
                    toProtoMsg(message: _139.Metadata): _139.MetadataProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _138.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.GenesisState;
                    fromPartial(object: Partial<_138.GenesisState>): _138.GenesisState;
                    fromAmino(object: _138.GenesisStateAmino): _138.GenesisState;
                    toAmino(message: _138.GenesisState): _138.GenesisStateAmino;
                    fromAminoMsg(object: _138.GenesisStateAminoMsg): _138.GenesisState;
                    toAminoMsg(message: _138.GenesisState): _138.GenesisStateAminoMsg;
                    fromProtoMsg(message: _138.GenesisStateProtoMsg): _138.GenesisState;
                    toProto(message: _138.GenesisState): Uint8Array;
                    toProtoMsg(message: _138.GenesisState): _138.GenesisStateProtoMsg;
                };
                FeeEnabledChannel: {
                    typeUrl: string;
                    encode(message: _138.FeeEnabledChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.FeeEnabledChannel;
                    fromPartial(object: Partial<_138.FeeEnabledChannel>): _138.FeeEnabledChannel;
                    fromAmino(object: _138.FeeEnabledChannelAmino): _138.FeeEnabledChannel;
                    toAmino(message: _138.FeeEnabledChannel): _138.FeeEnabledChannelAmino;
                    fromAminoMsg(object: _138.FeeEnabledChannelAminoMsg): _138.FeeEnabledChannel;
                    toAminoMsg(message: _138.FeeEnabledChannel): _138.FeeEnabledChannelAminoMsg;
                    fromProtoMsg(message: _138.FeeEnabledChannelProtoMsg): _138.FeeEnabledChannel;
                    toProto(message: _138.FeeEnabledChannel): Uint8Array;
                    toProtoMsg(message: _138.FeeEnabledChannel): _138.FeeEnabledChannelProtoMsg;
                };
                RegisteredPayee: {
                    typeUrl: string;
                    encode(message: _138.RegisteredPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.RegisteredPayee;
                    fromPartial(object: Partial<_138.RegisteredPayee>): _138.RegisteredPayee;
                    fromAmino(object: _138.RegisteredPayeeAmino): _138.RegisteredPayee;
                    toAmino(message: _138.RegisteredPayee): _138.RegisteredPayeeAmino;
                    fromAminoMsg(object: _138.RegisteredPayeeAminoMsg): _138.RegisteredPayee;
                    toAminoMsg(message: _138.RegisteredPayee): _138.RegisteredPayeeAminoMsg;
                    fromProtoMsg(message: _138.RegisteredPayeeProtoMsg): _138.RegisteredPayee;
                    toProto(message: _138.RegisteredPayee): Uint8Array;
                    toProtoMsg(message: _138.RegisteredPayee): _138.RegisteredPayeeProtoMsg;
                };
                RegisteredCounterpartyPayee: {
                    typeUrl: string;
                    encode(message: _138.RegisteredCounterpartyPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.RegisteredCounterpartyPayee;
                    fromPartial(object: Partial<_138.RegisteredCounterpartyPayee>): _138.RegisteredCounterpartyPayee;
                    fromAmino(object: _138.RegisteredCounterpartyPayeeAmino): _138.RegisteredCounterpartyPayee;
                    toAmino(message: _138.RegisteredCounterpartyPayee): _138.RegisteredCounterpartyPayeeAmino;
                    fromAminoMsg(object: _138.RegisteredCounterpartyPayeeAminoMsg): _138.RegisteredCounterpartyPayee;
                    toAminoMsg(message: _138.RegisteredCounterpartyPayee): _138.RegisteredCounterpartyPayeeAminoMsg;
                    fromProtoMsg(message: _138.RegisteredCounterpartyPayeeProtoMsg): _138.RegisteredCounterpartyPayee;
                    toProto(message: _138.RegisteredCounterpartyPayee): Uint8Array;
                    toProtoMsg(message: _138.RegisteredCounterpartyPayee): _138.RegisteredCounterpartyPayeeProtoMsg;
                };
                ForwardRelayerAddress: {
                    typeUrl: string;
                    encode(message: _138.ForwardRelayerAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.ForwardRelayerAddress;
                    fromPartial(object: Partial<_138.ForwardRelayerAddress>): _138.ForwardRelayerAddress;
                    fromAmino(object: _138.ForwardRelayerAddressAmino): _138.ForwardRelayerAddress;
                    toAmino(message: _138.ForwardRelayerAddress): _138.ForwardRelayerAddressAmino;
                    fromAminoMsg(object: _138.ForwardRelayerAddressAminoMsg): _138.ForwardRelayerAddress;
                    toAminoMsg(message: _138.ForwardRelayerAddress): _138.ForwardRelayerAddressAminoMsg;
                    fromProtoMsg(message: _138.ForwardRelayerAddressProtoMsg): _138.ForwardRelayerAddress;
                    toProto(message: _138.ForwardRelayerAddress): Uint8Array;
                    toProtoMsg(message: _138.ForwardRelayerAddress): _138.ForwardRelayerAddressProtoMsg;
                };
                Fee: {
                    typeUrl: string;
                    encode(message: _137.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.Fee;
                    fromPartial(object: Partial<_137.Fee>): _137.Fee;
                    fromAmino(object: _137.FeeAmino): _137.Fee;
                    toAmino(message: _137.Fee): _137.FeeAmino;
                    fromAminoMsg(object: _137.FeeAminoMsg): _137.Fee;
                    toAminoMsg(message: _137.Fee): _137.FeeAminoMsg;
                    fromProtoMsg(message: _137.FeeProtoMsg): _137.Fee;
                    toProto(message: _137.Fee): Uint8Array;
                    toProtoMsg(message: _137.Fee): _137.FeeProtoMsg;
                };
                PacketFee: {
                    typeUrl: string;
                    encode(message: _137.PacketFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.PacketFee;
                    fromPartial(object: Partial<_137.PacketFee>): _137.PacketFee;
                    fromAmino(object: _137.PacketFeeAmino): _137.PacketFee;
                    toAmino(message: _137.PacketFee): _137.PacketFeeAmino;
                    fromAminoMsg(object: _137.PacketFeeAminoMsg): _137.PacketFee;
                    toAminoMsg(message: _137.PacketFee): _137.PacketFeeAminoMsg;
                    fromProtoMsg(message: _137.PacketFeeProtoMsg): _137.PacketFee;
                    toProto(message: _137.PacketFee): Uint8Array;
                    toProtoMsg(message: _137.PacketFee): _137.PacketFeeProtoMsg;
                };
                PacketFees: {
                    typeUrl: string;
                    encode(message: _137.PacketFees, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.PacketFees;
                    fromPartial(object: Partial<_137.PacketFees>): _137.PacketFees;
                    fromAmino(object: _137.PacketFeesAmino): _137.PacketFees;
                    toAmino(message: _137.PacketFees): _137.PacketFeesAmino;
                    fromAminoMsg(object: _137.PacketFeesAminoMsg): _137.PacketFees;
                    toAminoMsg(message: _137.PacketFees): _137.PacketFeesAminoMsg;
                    fromProtoMsg(message: _137.PacketFeesProtoMsg): _137.PacketFees;
                    toProto(message: _137.PacketFees): Uint8Array;
                    toProtoMsg(message: _137.PacketFees): _137.PacketFeesProtoMsg;
                };
                IdentifiedPacketFees: {
                    typeUrl: string;
                    encode(message: _137.IdentifiedPacketFees, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.IdentifiedPacketFees;
                    fromPartial(object: Partial<_137.IdentifiedPacketFees>): _137.IdentifiedPacketFees;
                    fromAmino(object: _137.IdentifiedPacketFeesAmino): _137.IdentifiedPacketFees;
                    toAmino(message: _137.IdentifiedPacketFees): _137.IdentifiedPacketFeesAmino;
                    fromAminoMsg(object: _137.IdentifiedPacketFeesAminoMsg): _137.IdentifiedPacketFees;
                    toAminoMsg(message: _137.IdentifiedPacketFees): _137.IdentifiedPacketFeesAminoMsg;
                    fromProtoMsg(message: _137.IdentifiedPacketFeesProtoMsg): _137.IdentifiedPacketFees;
                    toProto(message: _137.IdentifiedPacketFees): Uint8Array;
                    toProtoMsg(message: _137.IdentifiedPacketFees): _137.IdentifiedPacketFeesProtoMsg;
                };
                IncentivizedAcknowledgement: {
                    typeUrl: string;
                    encode(message: _136.IncentivizedAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.IncentivizedAcknowledgement;
                    fromPartial(object: Partial<_136.IncentivizedAcknowledgement>): _136.IncentivizedAcknowledgement;
                    fromAmino(object: _136.IncentivizedAcknowledgementAmino): _136.IncentivizedAcknowledgement;
                    toAmino(message: _136.IncentivizedAcknowledgement): _136.IncentivizedAcknowledgementAmino;
                    fromAminoMsg(object: _136.IncentivizedAcknowledgementAminoMsg): _136.IncentivizedAcknowledgement;
                    toAminoMsg(message: _136.IncentivizedAcknowledgement): _136.IncentivizedAcknowledgementAminoMsg;
                    fromProtoMsg(message: _136.IncentivizedAcknowledgementProtoMsg): _136.IncentivizedAcknowledgement;
                    toProto(message: _136.IncentivizedAcknowledgement): Uint8Array;
                    toProtoMsg(message: _136.IncentivizedAcknowledgement): _136.IncentivizedAcknowledgementProtoMsg;
                };
            };
        }
        namespace interchain_accounts {
            namespace controller {
                const v1: {
                    MsgClientImpl: typeof _350.MsgClientImpl;
                    QueryClientImpl: typeof _343.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        interchainAccount(request: _143.QueryInterchainAccountRequest): Promise<_143.QueryInterchainAccountResponse>;
                        params(request?: _143.QueryParamsRequest): Promise<_143.QueryParamsResponse>;
                    };
                    registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            registerInterchainAccount(value: _144.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            sendTx(value: _144.MsgSendTx): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            registerInterchainAccount(value: _144.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: _144.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: _144.MsgSendTx): {
                                typeUrl: string;
                                value: _144.MsgSendTx;
                            };
                        };
                        fromPartial: {
                            registerInterchainAccount(value: _144.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: _144.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: _144.MsgSendTx): {
                                typeUrl: string;
                                value: _144.MsgSendTx;
                            };
                        };
                    };
                    AminoConverter: {
                        "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount": {
                            aminoType: string;
                            toAmino: (message: _144.MsgRegisterInterchainAccount) => _144.MsgRegisterInterchainAccountAmino;
                            fromAmino: (object: _144.MsgRegisterInterchainAccountAmino) => _144.MsgRegisterInterchainAccount;
                        };
                        "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx": {
                            aminoType: string;
                            toAmino: (message: _144.MsgSendTx) => _144.MsgSendTxAmino;
                            fromAmino: (object: _144.MsgSendTxAmino) => _144.MsgSendTx;
                        };
                    };
                    MsgRegisterInterchainAccount: {
                        typeUrl: string;
                        encode(message: _144.MsgRegisterInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.MsgRegisterInterchainAccount;
                        fromPartial(object: Partial<_144.MsgRegisterInterchainAccount>): _144.MsgRegisterInterchainAccount;
                        fromAmino(object: _144.MsgRegisterInterchainAccountAmino): _144.MsgRegisterInterchainAccount;
                        toAmino(message: _144.MsgRegisterInterchainAccount): _144.MsgRegisterInterchainAccountAmino;
                        fromAminoMsg(object: _144.MsgRegisterInterchainAccountAminoMsg): _144.MsgRegisterInterchainAccount;
                        toAminoMsg(message: _144.MsgRegisterInterchainAccount): _144.MsgRegisterInterchainAccountAminoMsg;
                        fromProtoMsg(message: _144.MsgRegisterInterchainAccountProtoMsg): _144.MsgRegisterInterchainAccount;
                        toProto(message: _144.MsgRegisterInterchainAccount): Uint8Array;
                        toProtoMsg(message: _144.MsgRegisterInterchainAccount): _144.MsgRegisterInterchainAccountProtoMsg;
                    };
                    MsgRegisterInterchainAccountResponse: {
                        typeUrl: string;
                        encode(message: _144.MsgRegisterInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.MsgRegisterInterchainAccountResponse;
                        fromPartial(object: Partial<_144.MsgRegisterInterchainAccountResponse>): _144.MsgRegisterInterchainAccountResponse;
                        fromAmino(object: _144.MsgRegisterInterchainAccountResponseAmino): _144.MsgRegisterInterchainAccountResponse;
                        toAmino(message: _144.MsgRegisterInterchainAccountResponse): _144.MsgRegisterInterchainAccountResponseAmino;
                        fromAminoMsg(object: _144.MsgRegisterInterchainAccountResponseAminoMsg): _144.MsgRegisterInterchainAccountResponse;
                        toAminoMsg(message: _144.MsgRegisterInterchainAccountResponse): _144.MsgRegisterInterchainAccountResponseAminoMsg;
                        fromProtoMsg(message: _144.MsgRegisterInterchainAccountResponseProtoMsg): _144.MsgRegisterInterchainAccountResponse;
                        toProto(message: _144.MsgRegisterInterchainAccountResponse): Uint8Array;
                        toProtoMsg(message: _144.MsgRegisterInterchainAccountResponse): _144.MsgRegisterInterchainAccountResponseProtoMsg;
                    };
                    MsgSendTx: {
                        typeUrl: string;
                        encode(message: _144.MsgSendTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.MsgSendTx;
                        fromPartial(object: Partial<_144.MsgSendTx>): _144.MsgSendTx;
                        fromAmino(object: _144.MsgSendTxAmino): _144.MsgSendTx;
                        toAmino(message: _144.MsgSendTx): _144.MsgSendTxAmino;
                        fromAminoMsg(object: _144.MsgSendTxAminoMsg): _144.MsgSendTx;
                        toAminoMsg(message: _144.MsgSendTx): _144.MsgSendTxAminoMsg;
                        fromProtoMsg(message: _144.MsgSendTxProtoMsg): _144.MsgSendTx;
                        toProto(message: _144.MsgSendTx): Uint8Array;
                        toProtoMsg(message: _144.MsgSendTx): _144.MsgSendTxProtoMsg;
                    };
                    MsgSendTxResponse: {
                        typeUrl: string;
                        encode(message: _144.MsgSendTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.MsgSendTxResponse;
                        fromPartial(object: Partial<_144.MsgSendTxResponse>): _144.MsgSendTxResponse;
                        fromAmino(object: _144.MsgSendTxResponseAmino): _144.MsgSendTxResponse;
                        toAmino(message: _144.MsgSendTxResponse): _144.MsgSendTxResponseAmino;
                        fromAminoMsg(object: _144.MsgSendTxResponseAminoMsg): _144.MsgSendTxResponse;
                        toAminoMsg(message: _144.MsgSendTxResponse): _144.MsgSendTxResponseAminoMsg;
                        fromProtoMsg(message: _144.MsgSendTxResponseProtoMsg): _144.MsgSendTxResponse;
                        toProto(message: _144.MsgSendTxResponse): Uint8Array;
                        toProtoMsg(message: _144.MsgSendTxResponse): _144.MsgSendTxResponseProtoMsg;
                    };
                    QueryInterchainAccountRequest: {
                        typeUrl: string;
                        encode(message: _143.QueryInterchainAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.QueryInterchainAccountRequest;
                        fromPartial(object: Partial<_143.QueryInterchainAccountRequest>): _143.QueryInterchainAccountRequest;
                        fromAmino(object: _143.QueryInterchainAccountRequestAmino): _143.QueryInterchainAccountRequest;
                        toAmino(message: _143.QueryInterchainAccountRequest): _143.QueryInterchainAccountRequestAmino;
                        fromAminoMsg(object: _143.QueryInterchainAccountRequestAminoMsg): _143.QueryInterchainAccountRequest;
                        toAminoMsg(message: _143.QueryInterchainAccountRequest): _143.QueryInterchainAccountRequestAminoMsg;
                        fromProtoMsg(message: _143.QueryInterchainAccountRequestProtoMsg): _143.QueryInterchainAccountRequest;
                        toProto(message: _143.QueryInterchainAccountRequest): Uint8Array;
                        toProtoMsg(message: _143.QueryInterchainAccountRequest): _143.QueryInterchainAccountRequestProtoMsg;
                    };
                    QueryInterchainAccountResponse: {
                        typeUrl: string;
                        encode(message: _143.QueryInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.QueryInterchainAccountResponse;
                        fromPartial(object: Partial<_143.QueryInterchainAccountResponse>): _143.QueryInterchainAccountResponse;
                        fromAmino(object: _143.QueryInterchainAccountResponseAmino): _143.QueryInterchainAccountResponse;
                        toAmino(message: _143.QueryInterchainAccountResponse): _143.QueryInterchainAccountResponseAmino;
                        fromAminoMsg(object: _143.QueryInterchainAccountResponseAminoMsg): _143.QueryInterchainAccountResponse;
                        toAminoMsg(message: _143.QueryInterchainAccountResponse): _143.QueryInterchainAccountResponseAminoMsg;
                        fromProtoMsg(message: _143.QueryInterchainAccountResponseProtoMsg): _143.QueryInterchainAccountResponse;
                        toProto(message: _143.QueryInterchainAccountResponse): Uint8Array;
                        toProtoMsg(message: _143.QueryInterchainAccountResponse): _143.QueryInterchainAccountResponseProtoMsg;
                    };
                    QueryParamsRequest: {
                        typeUrl: string;
                        encode(_: _143.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.QueryParamsRequest;
                        fromPartial(_: Partial<_143.QueryParamsRequest>): _143.QueryParamsRequest;
                        fromAmino(_: _143.QueryParamsRequestAmino): _143.QueryParamsRequest;
                        toAmino(_: _143.QueryParamsRequest): _143.QueryParamsRequestAmino;
                        fromAminoMsg(object: _143.QueryParamsRequestAminoMsg): _143.QueryParamsRequest;
                        toAminoMsg(message: _143.QueryParamsRequest): _143.QueryParamsRequestAminoMsg;
                        fromProtoMsg(message: _143.QueryParamsRequestProtoMsg): _143.QueryParamsRequest;
                        toProto(message: _143.QueryParamsRequest): Uint8Array;
                        toProtoMsg(message: _143.QueryParamsRequest): _143.QueryParamsRequestProtoMsg;
                    };
                    QueryParamsResponse: {
                        typeUrl: string;
                        encode(message: _143.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.QueryParamsResponse;
                        fromPartial(object: Partial<_143.QueryParamsResponse>): _143.QueryParamsResponse;
                        fromAmino(object: _143.QueryParamsResponseAmino): _143.QueryParamsResponse;
                        toAmino(message: _143.QueryParamsResponse): _143.QueryParamsResponseAmino;
                        fromAminoMsg(object: _143.QueryParamsResponseAminoMsg): _143.QueryParamsResponse;
                        toAminoMsg(message: _143.QueryParamsResponse): _143.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _143.QueryParamsResponseProtoMsg): _143.QueryParamsResponse;
                        toProto(message: _143.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _143.QueryParamsResponse): _143.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        typeUrl: string;
                        encode(message: _142.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.Params;
                        fromPartial(object: Partial<_142.Params>): _142.Params;
                        fromAmino(object: _142.ParamsAmino): _142.Params;
                        toAmino(message: _142.Params): _142.ParamsAmino;
                        fromAminoMsg(object: _142.ParamsAminoMsg): _142.Params;
                        toAminoMsg(message: _142.Params): _142.ParamsAminoMsg;
                        fromProtoMsg(message: _142.ParamsProtoMsg): _142.Params;
                        toProto(message: _142.Params): Uint8Array;
                        toProtoMsg(message: _142.Params): _142.ParamsProtoMsg;
                    };
                };
            }
            namespace genesis {
                const v1: {
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
                    ControllerGenesisState: {
                        typeUrl: string;
                        encode(message: _145.ControllerGenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.ControllerGenesisState;
                        fromPartial(object: Partial<_145.ControllerGenesisState>): _145.ControllerGenesisState;
                        fromAmino(object: _145.ControllerGenesisStateAmino): _145.ControllerGenesisState;
                        toAmino(message: _145.ControllerGenesisState): _145.ControllerGenesisStateAmino;
                        fromAminoMsg(object: _145.ControllerGenesisStateAminoMsg): _145.ControllerGenesisState;
                        toAminoMsg(message: _145.ControllerGenesisState): _145.ControllerGenesisStateAminoMsg;
                        fromProtoMsg(message: _145.ControllerGenesisStateProtoMsg): _145.ControllerGenesisState;
                        toProto(message: _145.ControllerGenesisState): Uint8Array;
                        toProtoMsg(message: _145.ControllerGenesisState): _145.ControllerGenesisStateProtoMsg;
                    };
                    HostGenesisState: {
                        typeUrl: string;
                        encode(message: _145.HostGenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.HostGenesisState;
                        fromPartial(object: Partial<_145.HostGenesisState>): _145.HostGenesisState;
                        fromAmino(object: _145.HostGenesisStateAmino): _145.HostGenesisState;
                        toAmino(message: _145.HostGenesisState): _145.HostGenesisStateAmino;
                        fromAminoMsg(object: _145.HostGenesisStateAminoMsg): _145.HostGenesisState;
                        toAminoMsg(message: _145.HostGenesisState): _145.HostGenesisStateAminoMsg;
                        fromProtoMsg(message: _145.HostGenesisStateProtoMsg): _145.HostGenesisState;
                        toProto(message: _145.HostGenesisState): Uint8Array;
                        toProtoMsg(message: _145.HostGenesisState): _145.HostGenesisStateProtoMsg;
                    };
                    ActiveChannel: {
                        typeUrl: string;
                        encode(message: _145.ActiveChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.ActiveChannel;
                        fromPartial(object: Partial<_145.ActiveChannel>): _145.ActiveChannel;
                        fromAmino(object: _145.ActiveChannelAmino): _145.ActiveChannel;
                        toAmino(message: _145.ActiveChannel): _145.ActiveChannelAmino;
                        fromAminoMsg(object: _145.ActiveChannelAminoMsg): _145.ActiveChannel;
                        toAminoMsg(message: _145.ActiveChannel): _145.ActiveChannelAminoMsg;
                        fromProtoMsg(message: _145.ActiveChannelProtoMsg): _145.ActiveChannel;
                        toProto(message: _145.ActiveChannel): Uint8Array;
                        toProtoMsg(message: _145.ActiveChannel): _145.ActiveChannelProtoMsg;
                    };
                    RegisteredInterchainAccount: {
                        typeUrl: string;
                        encode(message: _145.RegisteredInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.RegisteredInterchainAccount;
                        fromPartial(object: Partial<_145.RegisteredInterchainAccount>): _145.RegisteredInterchainAccount;
                        fromAmino(object: _145.RegisteredInterchainAccountAmino): _145.RegisteredInterchainAccount;
                        toAmino(message: _145.RegisteredInterchainAccount): _145.RegisteredInterchainAccountAmino;
                        fromAminoMsg(object: _145.RegisteredInterchainAccountAminoMsg): _145.RegisteredInterchainAccount;
                        toAminoMsg(message: _145.RegisteredInterchainAccount): _145.RegisteredInterchainAccountAminoMsg;
                        fromProtoMsg(message: _145.RegisteredInterchainAccountProtoMsg): _145.RegisteredInterchainAccount;
                        toProto(message: _145.RegisteredInterchainAccount): Uint8Array;
                        toProtoMsg(message: _145.RegisteredInterchainAccount): _145.RegisteredInterchainAccountProtoMsg;
                    };
                };
            }
            namespace host {
                const v1: {
                    QueryClientImpl: typeof _344.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        params(request?: _147.QueryParamsRequest): Promise<_147.QueryParamsResponse>;
                    };
                    QueryParamsRequest: {
                        typeUrl: string;
                        encode(_: _147.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.QueryParamsRequest;
                        fromPartial(_: Partial<_147.QueryParamsRequest>): _147.QueryParamsRequest;
                        fromAmino(_: _147.QueryParamsRequestAmino): _147.QueryParamsRequest;
                        toAmino(_: _147.QueryParamsRequest): _147.QueryParamsRequestAmino;
                        fromAminoMsg(object: _147.QueryParamsRequestAminoMsg): _147.QueryParamsRequest;
                        toAminoMsg(message: _147.QueryParamsRequest): _147.QueryParamsRequestAminoMsg;
                        fromProtoMsg(message: _147.QueryParamsRequestProtoMsg): _147.QueryParamsRequest;
                        toProto(message: _147.QueryParamsRequest): Uint8Array;
                        toProtoMsg(message: _147.QueryParamsRequest): _147.QueryParamsRequestProtoMsg;
                    };
                    QueryParamsResponse: {
                        typeUrl: string;
                        encode(message: _147.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.QueryParamsResponse;
                        fromPartial(object: Partial<_147.QueryParamsResponse>): _147.QueryParamsResponse;
                        fromAmino(object: _147.QueryParamsResponseAmino): _147.QueryParamsResponse;
                        toAmino(message: _147.QueryParamsResponse): _147.QueryParamsResponseAmino;
                        fromAminoMsg(object: _147.QueryParamsResponseAminoMsg): _147.QueryParamsResponse;
                        toAminoMsg(message: _147.QueryParamsResponse): _147.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _147.QueryParamsResponseProtoMsg): _147.QueryParamsResponse;
                        toProto(message: _147.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _147.QueryParamsResponse): _147.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        typeUrl: string;
                        encode(message: _146.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _146.Params;
                        fromPartial(object: Partial<_146.Params>): _146.Params;
                        fromAmino(object: _146.ParamsAmino): _146.Params;
                        toAmino(message: _146.Params): _146.ParamsAmino;
                        fromAminoMsg(object: _146.ParamsAminoMsg): _146.Params;
                        toAminoMsg(message: _146.Params): _146.ParamsAminoMsg;
                        fromProtoMsg(message: _146.ParamsProtoMsg): _146.Params;
                        toProto(message: _146.Params): Uint8Array;
                        toProtoMsg(message: _146.Params): _146.ParamsProtoMsg;
                    };
                };
            }
            const v1: {
                typeFromJSON(object: any): _150.Type;
                typeToJSON(object: _150.Type): string;
                Type: typeof _150.Type;
                TypeSDKType: typeof _150.Type;
                TypeAmino: typeof _150.Type;
                InterchainAccountPacketData: {
                    typeUrl: string;
                    encode(message: _150.InterchainAccountPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.InterchainAccountPacketData;
                    fromPartial(object: Partial<_150.InterchainAccountPacketData>): _150.InterchainAccountPacketData;
                    fromAmino(object: _150.InterchainAccountPacketDataAmino): _150.InterchainAccountPacketData;
                    toAmino(message: _150.InterchainAccountPacketData): _150.InterchainAccountPacketDataAmino;
                    fromAminoMsg(object: _150.InterchainAccountPacketDataAminoMsg): _150.InterchainAccountPacketData;
                    toAminoMsg(message: _150.InterchainAccountPacketData): _150.InterchainAccountPacketDataAminoMsg;
                    fromProtoMsg(message: _150.InterchainAccountPacketDataProtoMsg): _150.InterchainAccountPacketData;
                    toProto(message: _150.InterchainAccountPacketData): Uint8Array;
                    toProtoMsg(message: _150.InterchainAccountPacketData): _150.InterchainAccountPacketDataProtoMsg;
                };
                CosmosTx: {
                    typeUrl: string;
                    encode(message: _150.CosmosTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.CosmosTx;
                    fromPartial(object: Partial<_150.CosmosTx>): _150.CosmosTx;
                    fromAmino(object: _150.CosmosTxAmino): _150.CosmosTx;
                    toAmino(message: _150.CosmosTx): _150.CosmosTxAmino;
                    fromAminoMsg(object: _150.CosmosTxAminoMsg): _150.CosmosTx;
                    toAminoMsg(message: _150.CosmosTx): _150.CosmosTxAminoMsg;
                    fromProtoMsg(message: _150.CosmosTxProtoMsg): _150.CosmosTx;
                    toProto(message: _150.CosmosTx): Uint8Array;
                    toProtoMsg(message: _150.CosmosTx): _150.CosmosTxProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _149.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.Metadata;
                    fromPartial(object: Partial<_149.Metadata>): _149.Metadata;
                    fromAmino(object: _149.MetadataAmino): _149.Metadata;
                    toAmino(message: _149.Metadata): _149.MetadataAmino;
                    fromAminoMsg(object: _149.MetadataAminoMsg): _149.Metadata;
                    toAminoMsg(message: _149.Metadata): _149.MetadataAminoMsg;
                    fromProtoMsg(message: _149.MetadataProtoMsg): _149.Metadata;
                    toProto(message: _149.Metadata): Uint8Array;
                    toProtoMsg(message: _149.Metadata): _149.MetadataProtoMsg;
                };
                InterchainAccount: {
                    typeUrl: string;
                    encode(message: _148.InterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.InterchainAccount;
                    fromPartial(object: Partial<_148.InterchainAccount>): _148.InterchainAccount;
                    fromAmino(object: _148.InterchainAccountAmino): _148.InterchainAccount;
                    toAmino(message: _148.InterchainAccount): _148.InterchainAccountAmino;
                    fromAminoMsg(object: _148.InterchainAccountAminoMsg): _148.InterchainAccount;
                    toAminoMsg(message: _148.InterchainAccount): _148.InterchainAccountAminoMsg;
                    fromProtoMsg(message: _148.InterchainAccountProtoMsg): _148.InterchainAccount;
                    toProto(message: _148.InterchainAccount): Uint8Array;
                    toProtoMsg(message: _148.InterchainAccount): _148.InterchainAccountProtoMsg;
                };
            };
        }
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _351.MsgClientImpl;
                QueryClientImpl: typeof _345.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTraces(request?: _153.QueryDenomTracesRequest): Promise<_153.QueryDenomTracesResponse>;
                    denomTrace(request: _153.QueryDenomTraceRequest): Promise<_153.QueryDenomTraceResponse>;
                    params(request?: _153.QueryParamsRequest): Promise<_153.QueryParamsResponse>;
                    denomHash(request: _153.QueryDenomHashRequest): Promise<_153.QueryDenomHashResponse>;
                    escrowAddress(request: _153.QueryEscrowAddressRequest): Promise<_153.QueryEscrowAddressResponse>;
                    totalEscrowForDenom(request: _153.QueryTotalEscrowForDenomRequest): Promise<_153.QueryTotalEscrowForDenomResponse>;
                };
                registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _155.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _155.MsgTransfer): {
                            typeUrl: string;
                            value: _155.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _155.MsgTransfer): {
                            typeUrl: string;
                            value: _155.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _155.MsgTransfer) => _155.MsgTransferAmino;
                        fromAmino: (object: _155.MsgTransferAmino) => _155.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    typeUrl: string;
                    encode(message: _155.MsgTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.MsgTransfer;
                    fromPartial(object: Partial<_155.MsgTransfer>): _155.MsgTransfer;
                    fromAmino(object: _155.MsgTransferAmino): _155.MsgTransfer;
                    toAmino(message: _155.MsgTransfer): _155.MsgTransferAmino;
                    fromAminoMsg(object: _155.MsgTransferAminoMsg): _155.MsgTransfer;
                    toAminoMsg(message: _155.MsgTransfer): _155.MsgTransferAminoMsg;
                    fromProtoMsg(message: _155.MsgTransferProtoMsg): _155.MsgTransfer;
                    toProto(message: _155.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _155.MsgTransfer): _155.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    typeUrl: string;
                    encode(message: _155.MsgTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.MsgTransferResponse;
                    fromPartial(object: Partial<_155.MsgTransferResponse>): _155.MsgTransferResponse;
                    fromAmino(object: _155.MsgTransferResponseAmino): _155.MsgTransferResponse;
                    toAmino(message: _155.MsgTransferResponse): _155.MsgTransferResponseAmino;
                    fromAminoMsg(object: _155.MsgTransferResponseAminoMsg): _155.MsgTransferResponse;
                    toAminoMsg(message: _155.MsgTransferResponse): _155.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _155.MsgTransferResponseProtoMsg): _155.MsgTransferResponse;
                    toProto(message: _155.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _155.MsgTransferResponse): _155.MsgTransferResponseProtoMsg;
                };
                DenomTrace: {
                    typeUrl: string;
                    encode(message: _154.DenomTrace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.DenomTrace;
                    fromPartial(object: Partial<_154.DenomTrace>): _154.DenomTrace;
                    fromAmino(object: _154.DenomTraceAmino): _154.DenomTrace;
                    toAmino(message: _154.DenomTrace): _154.DenomTraceAmino;
                    fromAminoMsg(object: _154.DenomTraceAminoMsg): _154.DenomTrace;
                    toAminoMsg(message: _154.DenomTrace): _154.DenomTraceAminoMsg;
                    fromProtoMsg(message: _154.DenomTraceProtoMsg): _154.DenomTrace;
                    toProto(message: _154.DenomTrace): Uint8Array;
                    toProtoMsg(message: _154.DenomTrace): _154.DenomTraceProtoMsg;
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
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    encode(message: _153.QueryDenomTraceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.QueryDenomTraceRequest;
                    fromPartial(object: Partial<_153.QueryDenomTraceRequest>): _153.QueryDenomTraceRequest;
                    fromAmino(object: _153.QueryDenomTraceRequestAmino): _153.QueryDenomTraceRequest;
                    toAmino(message: _153.QueryDenomTraceRequest): _153.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _153.QueryDenomTraceRequestAminoMsg): _153.QueryDenomTraceRequest;
                    toAminoMsg(message: _153.QueryDenomTraceRequest): _153.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _153.QueryDenomTraceRequestProtoMsg): _153.QueryDenomTraceRequest;
                    toProto(message: _153.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _153.QueryDenomTraceRequest): _153.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    encode(message: _153.QueryDenomTraceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.QueryDenomTraceResponse;
                    fromPartial(object: Partial<_153.QueryDenomTraceResponse>): _153.QueryDenomTraceResponse;
                    fromAmino(object: _153.QueryDenomTraceResponseAmino): _153.QueryDenomTraceResponse;
                    toAmino(message: _153.QueryDenomTraceResponse): _153.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _153.QueryDenomTraceResponseAminoMsg): _153.QueryDenomTraceResponse;
                    toAminoMsg(message: _153.QueryDenomTraceResponse): _153.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _153.QueryDenomTraceResponseProtoMsg): _153.QueryDenomTraceResponse;
                    toProto(message: _153.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _153.QueryDenomTraceResponse): _153.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    encode(message: _153.QueryDenomTracesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.QueryDenomTracesRequest;
                    fromPartial(object: Partial<_153.QueryDenomTracesRequest>): _153.QueryDenomTracesRequest;
                    fromAmino(object: _153.QueryDenomTracesRequestAmino): _153.QueryDenomTracesRequest;
                    toAmino(message: _153.QueryDenomTracesRequest): _153.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _153.QueryDenomTracesRequestAminoMsg): _153.QueryDenomTracesRequest;
                    toAminoMsg(message: _153.QueryDenomTracesRequest): _153.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _153.QueryDenomTracesRequestProtoMsg): _153.QueryDenomTracesRequest;
                    toProto(message: _153.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _153.QueryDenomTracesRequest): _153.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    encode(message: _153.QueryDenomTracesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.QueryDenomTracesResponse;
                    fromPartial(object: Partial<_153.QueryDenomTracesResponse>): _153.QueryDenomTracesResponse;
                    fromAmino(object: _153.QueryDenomTracesResponseAmino): _153.QueryDenomTracesResponse;
                    toAmino(message: _153.QueryDenomTracesResponse): _153.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _153.QueryDenomTracesResponseAminoMsg): _153.QueryDenomTracesResponse;
                    toAminoMsg(message: _153.QueryDenomTracesResponse): _153.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _153.QueryDenomTracesResponseProtoMsg): _153.QueryDenomTracesResponse;
                    toProto(message: _153.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _153.QueryDenomTracesResponse): _153.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    encode(_: _153.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.QueryParamsRequest;
                    fromPartial(_: Partial<_153.QueryParamsRequest>): _153.QueryParamsRequest;
                    fromAmino(_: _153.QueryParamsRequestAmino): _153.QueryParamsRequest;
                    toAmino(_: _153.QueryParamsRequest): _153.QueryParamsRequestAmino;
                    fromAminoMsg(object: _153.QueryParamsRequestAminoMsg): _153.QueryParamsRequest;
                    toAminoMsg(message: _153.QueryParamsRequest): _153.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _153.QueryParamsRequestProtoMsg): _153.QueryParamsRequest;
                    toProto(message: _153.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _153.QueryParamsRequest): _153.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    encode(message: _153.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.QueryParamsResponse;
                    fromPartial(object: Partial<_153.QueryParamsResponse>): _153.QueryParamsResponse;
                    fromAmino(object: _153.QueryParamsResponseAmino): _153.QueryParamsResponse;
                    toAmino(message: _153.QueryParamsResponse): _153.QueryParamsResponseAmino;
                    fromAminoMsg(object: _153.QueryParamsResponseAminoMsg): _153.QueryParamsResponse;
                    toAminoMsg(message: _153.QueryParamsResponse): _153.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _153.QueryParamsResponseProtoMsg): _153.QueryParamsResponse;
                    toProto(message: _153.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _153.QueryParamsResponse): _153.QueryParamsResponseProtoMsg;
                };
                QueryDenomHashRequest: {
                    typeUrl: string;
                    encode(message: _153.QueryDenomHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.QueryDenomHashRequest;
                    fromPartial(object: Partial<_153.QueryDenomHashRequest>): _153.QueryDenomHashRequest;
                    fromAmino(object: _153.QueryDenomHashRequestAmino): _153.QueryDenomHashRequest;
                    toAmino(message: _153.QueryDenomHashRequest): _153.QueryDenomHashRequestAmino;
                    fromAminoMsg(object: _153.QueryDenomHashRequestAminoMsg): _153.QueryDenomHashRequest;
                    toAminoMsg(message: _153.QueryDenomHashRequest): _153.QueryDenomHashRequestAminoMsg;
                    fromProtoMsg(message: _153.QueryDenomHashRequestProtoMsg): _153.QueryDenomHashRequest;
                    toProto(message: _153.QueryDenomHashRequest): Uint8Array;
                    toProtoMsg(message: _153.QueryDenomHashRequest): _153.QueryDenomHashRequestProtoMsg;
                };
                QueryDenomHashResponse: {
                    typeUrl: string;
                    encode(message: _153.QueryDenomHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.QueryDenomHashResponse;
                    fromPartial(object: Partial<_153.QueryDenomHashResponse>): _153.QueryDenomHashResponse;
                    fromAmino(object: _153.QueryDenomHashResponseAmino): _153.QueryDenomHashResponse;
                    toAmino(message: _153.QueryDenomHashResponse): _153.QueryDenomHashResponseAmino;
                    fromAminoMsg(object: _153.QueryDenomHashResponseAminoMsg): _153.QueryDenomHashResponse;
                    toAminoMsg(message: _153.QueryDenomHashResponse): _153.QueryDenomHashResponseAminoMsg;
                    fromProtoMsg(message: _153.QueryDenomHashResponseProtoMsg): _153.QueryDenomHashResponse;
                    toProto(message: _153.QueryDenomHashResponse): Uint8Array;
                    toProtoMsg(message: _153.QueryDenomHashResponse): _153.QueryDenomHashResponseProtoMsg;
                };
                QueryEscrowAddressRequest: {
                    typeUrl: string;
                    encode(message: _153.QueryEscrowAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.QueryEscrowAddressRequest;
                    fromPartial(object: Partial<_153.QueryEscrowAddressRequest>): _153.QueryEscrowAddressRequest;
                    fromAmino(object: _153.QueryEscrowAddressRequestAmino): _153.QueryEscrowAddressRequest;
                    toAmino(message: _153.QueryEscrowAddressRequest): _153.QueryEscrowAddressRequestAmino;
                    fromAminoMsg(object: _153.QueryEscrowAddressRequestAminoMsg): _153.QueryEscrowAddressRequest;
                    toAminoMsg(message: _153.QueryEscrowAddressRequest): _153.QueryEscrowAddressRequestAminoMsg;
                    fromProtoMsg(message: _153.QueryEscrowAddressRequestProtoMsg): _153.QueryEscrowAddressRequest;
                    toProto(message: _153.QueryEscrowAddressRequest): Uint8Array;
                    toProtoMsg(message: _153.QueryEscrowAddressRequest): _153.QueryEscrowAddressRequestProtoMsg;
                };
                QueryEscrowAddressResponse: {
                    typeUrl: string;
                    encode(message: _153.QueryEscrowAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.QueryEscrowAddressResponse;
                    fromPartial(object: Partial<_153.QueryEscrowAddressResponse>): _153.QueryEscrowAddressResponse;
                    fromAmino(object: _153.QueryEscrowAddressResponseAmino): _153.QueryEscrowAddressResponse;
                    toAmino(message: _153.QueryEscrowAddressResponse): _153.QueryEscrowAddressResponseAmino;
                    fromAminoMsg(object: _153.QueryEscrowAddressResponseAminoMsg): _153.QueryEscrowAddressResponse;
                    toAminoMsg(message: _153.QueryEscrowAddressResponse): _153.QueryEscrowAddressResponseAminoMsg;
                    fromProtoMsg(message: _153.QueryEscrowAddressResponseProtoMsg): _153.QueryEscrowAddressResponse;
                    toProto(message: _153.QueryEscrowAddressResponse): Uint8Array;
                    toProtoMsg(message: _153.QueryEscrowAddressResponse): _153.QueryEscrowAddressResponseProtoMsg;
                };
                QueryTotalEscrowForDenomRequest: {
                    typeUrl: string;
                    encode(message: _153.QueryTotalEscrowForDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.QueryTotalEscrowForDenomRequest;
                    fromPartial(object: Partial<_153.QueryTotalEscrowForDenomRequest>): _153.QueryTotalEscrowForDenomRequest;
                    fromAmino(object: _153.QueryTotalEscrowForDenomRequestAmino): _153.QueryTotalEscrowForDenomRequest;
                    toAmino(message: _153.QueryTotalEscrowForDenomRequest): _153.QueryTotalEscrowForDenomRequestAmino;
                    fromAminoMsg(object: _153.QueryTotalEscrowForDenomRequestAminoMsg): _153.QueryTotalEscrowForDenomRequest;
                    toAminoMsg(message: _153.QueryTotalEscrowForDenomRequest): _153.QueryTotalEscrowForDenomRequestAminoMsg;
                    fromProtoMsg(message: _153.QueryTotalEscrowForDenomRequestProtoMsg): _153.QueryTotalEscrowForDenomRequest;
                    toProto(message: _153.QueryTotalEscrowForDenomRequest): Uint8Array;
                    toProtoMsg(message: _153.QueryTotalEscrowForDenomRequest): _153.QueryTotalEscrowForDenomRequestProtoMsg;
                };
                QueryTotalEscrowForDenomResponse: {
                    typeUrl: string;
                    encode(message: _153.QueryTotalEscrowForDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.QueryTotalEscrowForDenomResponse;
                    fromPartial(object: Partial<_153.QueryTotalEscrowForDenomResponse>): _153.QueryTotalEscrowForDenomResponse;
                    fromAmino(object: _153.QueryTotalEscrowForDenomResponseAmino): _153.QueryTotalEscrowForDenomResponse;
                    toAmino(message: _153.QueryTotalEscrowForDenomResponse): _153.QueryTotalEscrowForDenomResponseAmino;
                    fromAminoMsg(object: _153.QueryTotalEscrowForDenomResponseAminoMsg): _153.QueryTotalEscrowForDenomResponse;
                    toAminoMsg(message: _153.QueryTotalEscrowForDenomResponse): _153.QueryTotalEscrowForDenomResponseAminoMsg;
                    fromProtoMsg(message: _153.QueryTotalEscrowForDenomResponseProtoMsg): _153.QueryTotalEscrowForDenomResponse;
                    toProto(message: _153.QueryTotalEscrowForDenomResponse): Uint8Array;
                    toProtoMsg(message: _153.QueryTotalEscrowForDenomResponse): _153.QueryTotalEscrowForDenomResponseProtoMsg;
                };
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
                Allocation: {
                    typeUrl: string;
                    encode(message: _151.Allocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.Allocation;
                    fromPartial(object: Partial<_151.Allocation>): _151.Allocation;
                    fromAmino(object: _151.AllocationAmino): _151.Allocation;
                    toAmino(message: _151.Allocation): _151.AllocationAmino;
                    fromAminoMsg(object: _151.AllocationAminoMsg): _151.Allocation;
                    toAminoMsg(message: _151.Allocation): _151.AllocationAminoMsg;
                    fromProtoMsg(message: _151.AllocationProtoMsg): _151.Allocation;
                    toProto(message: _151.Allocation): Uint8Array;
                    toProtoMsg(message: _151.Allocation): _151.AllocationProtoMsg;
                };
                TransferAuthorization: {
                    typeUrl: string;
                    encode(message: _151.TransferAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.TransferAuthorization;
                    fromPartial(object: Partial<_151.TransferAuthorization>): _151.TransferAuthorization;
                    fromAmino(object: _151.TransferAuthorizationAmino): _151.TransferAuthorization;
                    toAmino(message: _151.TransferAuthorization): _151.TransferAuthorizationAmino;
                    fromAminoMsg(object: _151.TransferAuthorizationAminoMsg): _151.TransferAuthorization;
                    toAminoMsg(message: _151.TransferAuthorization): _151.TransferAuthorizationAminoMsg;
                    fromProtoMsg(message: _151.TransferAuthorizationProtoMsg): _151.TransferAuthorization;
                    toProto(message: _151.TransferAuthorization): Uint8Array;
                    toProtoMsg(message: _151.TransferAuthorization): _151.TransferAuthorizationProtoMsg;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    typeUrl: string;
                    encode(message: _156.FungibleTokenPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _156.FungibleTokenPacketData;
                    fromPartial(object: Partial<_156.FungibleTokenPacketData>): _156.FungibleTokenPacketData;
                    fromAmino(object: _156.FungibleTokenPacketDataAmino): _156.FungibleTokenPacketData;
                    toAmino(message: _156.FungibleTokenPacketData): _156.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _156.FungibleTokenPacketDataAminoMsg): _156.FungibleTokenPacketData;
                    toAminoMsg(message: _156.FungibleTokenPacketData): _156.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _156.FungibleTokenPacketDataProtoMsg): _156.FungibleTokenPacketData;
                    toProto(message: _156.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _156.FungibleTokenPacketData): _156.FungibleTokenPacketDataProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _352.MsgClientImpl;
                QueryClientImpl: typeof _346.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _159.QueryChannelRequest): Promise<_159.QueryChannelResponse>;
                    channels(request?: _159.QueryChannelsRequest): Promise<_159.QueryChannelsResponse>;
                    connectionChannels(request: _159.QueryConnectionChannelsRequest): Promise<_159.QueryConnectionChannelsResponse>;
                    channelClientState(request: _159.QueryChannelClientStateRequest): Promise<_159.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _159.QueryChannelConsensusStateRequest): Promise<_159.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _159.QueryPacketCommitmentRequest): Promise<_159.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _159.QueryPacketCommitmentsRequest): Promise<_159.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _159.QueryPacketReceiptRequest): Promise<_159.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _159.QueryPacketAcknowledgementRequest): Promise<_159.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _159.QueryPacketAcknowledgementsRequest): Promise<_159.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _159.QueryUnreceivedPacketsRequest): Promise<_159.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _159.QueryUnreceivedAcksRequest): Promise<_159.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _159.QueryNextSequenceReceiveRequest): Promise<_159.QueryNextSequenceReceiveResponse>;
                };
                registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _160.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _160.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _160.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _160.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _160.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _160.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _160.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _160.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _160.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _160.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _160.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _160.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _160.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _160.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _160.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _160.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _160.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _160.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _160.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _160.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _160.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _160.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _160.MsgRecvPacket): {
                            typeUrl: string;
                            value: _160.MsgRecvPacket;
                        };
                        timeout(value: _160.MsgTimeout): {
                            typeUrl: string;
                            value: _160.MsgTimeout;
                        };
                        timeoutOnClose(value: _160.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _160.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _160.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _160.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _160.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _160.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _160.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _160.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _160.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _160.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _160.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _160.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _160.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _160.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _160.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _160.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _160.MsgRecvPacket): {
                            typeUrl: string;
                            value: _160.MsgRecvPacket;
                        };
                        timeout(value: _160.MsgTimeout): {
                            typeUrl: string;
                            value: _160.MsgTimeout;
                        };
                        timeoutOnClose(value: _160.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _160.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _160.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _160.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _160.MsgChannelOpenInit) => _160.MsgChannelOpenInitAmino;
                        fromAmino: (object: _160.MsgChannelOpenInitAmino) => _160.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _160.MsgChannelOpenTry) => _160.MsgChannelOpenTryAmino;
                        fromAmino: (object: _160.MsgChannelOpenTryAmino) => _160.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _160.MsgChannelOpenAck) => _160.MsgChannelOpenAckAmino;
                        fromAmino: (object: _160.MsgChannelOpenAckAmino) => _160.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _160.MsgChannelOpenConfirm) => _160.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _160.MsgChannelOpenConfirmAmino) => _160.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _160.MsgChannelCloseInit) => _160.MsgChannelCloseInitAmino;
                        fromAmino: (object: _160.MsgChannelCloseInitAmino) => _160.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _160.MsgChannelCloseConfirm) => _160.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _160.MsgChannelCloseConfirmAmino) => _160.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _160.MsgRecvPacket) => _160.MsgRecvPacketAmino;
                        fromAmino: (object: _160.MsgRecvPacketAmino) => _160.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _160.MsgTimeout) => _160.MsgTimeoutAmino;
                        fromAmino: (object: _160.MsgTimeoutAmino) => _160.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _160.MsgTimeoutOnClose) => _160.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _160.MsgTimeoutOnCloseAmino) => _160.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _160.MsgAcknowledgement) => _160.MsgAcknowledgementAmino;
                        fromAmino: (object: _160.MsgAcknowledgementAmino) => _160.MsgAcknowledgement;
                    };
                };
                responseResultTypeFromJSON(object: any): _160.ResponseResultType;
                responseResultTypeToJSON(object: _160.ResponseResultType): string;
                ResponseResultType: typeof _160.ResponseResultType;
                ResponseResultTypeSDKType: typeof _160.ResponseResultType;
                ResponseResultTypeAmino: typeof _160.ResponseResultType;
                MsgChannelOpenInit: {
                    typeUrl: string;
                    encode(message: _160.MsgChannelOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgChannelOpenInit;
                    fromPartial(object: Partial<_160.MsgChannelOpenInit>): _160.MsgChannelOpenInit;
                    fromAmino(object: _160.MsgChannelOpenInitAmino): _160.MsgChannelOpenInit;
                    toAmino(message: _160.MsgChannelOpenInit): _160.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _160.MsgChannelOpenInitAminoMsg): _160.MsgChannelOpenInit;
                    toAminoMsg(message: _160.MsgChannelOpenInit): _160.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _160.MsgChannelOpenInitProtoMsg): _160.MsgChannelOpenInit;
                    toProto(message: _160.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _160.MsgChannelOpenInit): _160.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    typeUrl: string;
                    encode(message: _160.MsgChannelOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgChannelOpenInitResponse;
                    fromPartial(object: Partial<_160.MsgChannelOpenInitResponse>): _160.MsgChannelOpenInitResponse;
                    fromAmino(object: _160.MsgChannelOpenInitResponseAmino): _160.MsgChannelOpenInitResponse;
                    toAmino(message: _160.MsgChannelOpenInitResponse): _160.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _160.MsgChannelOpenInitResponseAminoMsg): _160.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _160.MsgChannelOpenInitResponse): _160.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _160.MsgChannelOpenInitResponseProtoMsg): _160.MsgChannelOpenInitResponse;
                    toProto(message: _160.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _160.MsgChannelOpenInitResponse): _160.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    typeUrl: string;
                    encode(message: _160.MsgChannelOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgChannelOpenTry;
                    fromPartial(object: Partial<_160.MsgChannelOpenTry>): _160.MsgChannelOpenTry;
                    fromAmino(object: _160.MsgChannelOpenTryAmino): _160.MsgChannelOpenTry;
                    toAmino(message: _160.MsgChannelOpenTry): _160.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _160.MsgChannelOpenTryAminoMsg): _160.MsgChannelOpenTry;
                    toAminoMsg(message: _160.MsgChannelOpenTry): _160.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _160.MsgChannelOpenTryProtoMsg): _160.MsgChannelOpenTry;
                    toProto(message: _160.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _160.MsgChannelOpenTry): _160.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    typeUrl: string;
                    encode(message: _160.MsgChannelOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgChannelOpenTryResponse;
                    fromPartial(object: Partial<_160.MsgChannelOpenTryResponse>): _160.MsgChannelOpenTryResponse;
                    fromAmino(object: _160.MsgChannelOpenTryResponseAmino): _160.MsgChannelOpenTryResponse;
                    toAmino(message: _160.MsgChannelOpenTryResponse): _160.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _160.MsgChannelOpenTryResponseAminoMsg): _160.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _160.MsgChannelOpenTryResponse): _160.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _160.MsgChannelOpenTryResponseProtoMsg): _160.MsgChannelOpenTryResponse;
                    toProto(message: _160.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _160.MsgChannelOpenTryResponse): _160.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    typeUrl: string;
                    encode(message: _160.MsgChannelOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgChannelOpenAck;
                    fromPartial(object: Partial<_160.MsgChannelOpenAck>): _160.MsgChannelOpenAck;
                    fromAmino(object: _160.MsgChannelOpenAckAmino): _160.MsgChannelOpenAck;
                    toAmino(message: _160.MsgChannelOpenAck): _160.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _160.MsgChannelOpenAckAminoMsg): _160.MsgChannelOpenAck;
                    toAminoMsg(message: _160.MsgChannelOpenAck): _160.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _160.MsgChannelOpenAckProtoMsg): _160.MsgChannelOpenAck;
                    toProto(message: _160.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _160.MsgChannelOpenAck): _160.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _160.MsgChannelOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgChannelOpenAckResponse;
                    fromPartial(_: Partial<_160.MsgChannelOpenAckResponse>): _160.MsgChannelOpenAckResponse;
                    fromAmino(_: _160.MsgChannelOpenAckResponseAmino): _160.MsgChannelOpenAckResponse;
                    toAmino(_: _160.MsgChannelOpenAckResponse): _160.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _160.MsgChannelOpenAckResponseAminoMsg): _160.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _160.MsgChannelOpenAckResponse): _160.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _160.MsgChannelOpenAckResponseProtoMsg): _160.MsgChannelOpenAckResponse;
                    toProto(message: _160.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _160.MsgChannelOpenAckResponse): _160.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    typeUrl: string;
                    encode(message: _160.MsgChannelOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgChannelOpenConfirm;
                    fromPartial(object: Partial<_160.MsgChannelOpenConfirm>): _160.MsgChannelOpenConfirm;
                    fromAmino(object: _160.MsgChannelOpenConfirmAmino): _160.MsgChannelOpenConfirm;
                    toAmino(message: _160.MsgChannelOpenConfirm): _160.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _160.MsgChannelOpenConfirmAminoMsg): _160.MsgChannelOpenConfirm;
                    toAminoMsg(message: _160.MsgChannelOpenConfirm): _160.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _160.MsgChannelOpenConfirmProtoMsg): _160.MsgChannelOpenConfirm;
                    toProto(message: _160.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _160.MsgChannelOpenConfirm): _160.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _160.MsgChannelOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgChannelOpenConfirmResponse;
                    fromPartial(_: Partial<_160.MsgChannelOpenConfirmResponse>): _160.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _160.MsgChannelOpenConfirmResponseAmino): _160.MsgChannelOpenConfirmResponse;
                    toAmino(_: _160.MsgChannelOpenConfirmResponse): _160.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _160.MsgChannelOpenConfirmResponseAminoMsg): _160.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _160.MsgChannelOpenConfirmResponse): _160.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _160.MsgChannelOpenConfirmResponseProtoMsg): _160.MsgChannelOpenConfirmResponse;
                    toProto(message: _160.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _160.MsgChannelOpenConfirmResponse): _160.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    typeUrl: string;
                    encode(message: _160.MsgChannelCloseInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgChannelCloseInit;
                    fromPartial(object: Partial<_160.MsgChannelCloseInit>): _160.MsgChannelCloseInit;
                    fromAmino(object: _160.MsgChannelCloseInitAmino): _160.MsgChannelCloseInit;
                    toAmino(message: _160.MsgChannelCloseInit): _160.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _160.MsgChannelCloseInitAminoMsg): _160.MsgChannelCloseInit;
                    toAminoMsg(message: _160.MsgChannelCloseInit): _160.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _160.MsgChannelCloseInitProtoMsg): _160.MsgChannelCloseInit;
                    toProto(message: _160.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _160.MsgChannelCloseInit): _160.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    typeUrl: string;
                    encode(_: _160.MsgChannelCloseInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgChannelCloseInitResponse;
                    fromPartial(_: Partial<_160.MsgChannelCloseInitResponse>): _160.MsgChannelCloseInitResponse;
                    fromAmino(_: _160.MsgChannelCloseInitResponseAmino): _160.MsgChannelCloseInitResponse;
                    toAmino(_: _160.MsgChannelCloseInitResponse): _160.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _160.MsgChannelCloseInitResponseAminoMsg): _160.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _160.MsgChannelCloseInitResponse): _160.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _160.MsgChannelCloseInitResponseProtoMsg): _160.MsgChannelCloseInitResponse;
                    toProto(message: _160.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _160.MsgChannelCloseInitResponse): _160.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    typeUrl: string;
                    encode(message: _160.MsgChannelCloseConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgChannelCloseConfirm;
                    fromPartial(object: Partial<_160.MsgChannelCloseConfirm>): _160.MsgChannelCloseConfirm;
                    fromAmino(object: _160.MsgChannelCloseConfirmAmino): _160.MsgChannelCloseConfirm;
                    toAmino(message: _160.MsgChannelCloseConfirm): _160.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _160.MsgChannelCloseConfirmAminoMsg): _160.MsgChannelCloseConfirm;
                    toAminoMsg(message: _160.MsgChannelCloseConfirm): _160.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _160.MsgChannelCloseConfirmProtoMsg): _160.MsgChannelCloseConfirm;
                    toProto(message: _160.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _160.MsgChannelCloseConfirm): _160.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    typeUrl: string;
                    encode(_: _160.MsgChannelCloseConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgChannelCloseConfirmResponse;
                    fromPartial(_: Partial<_160.MsgChannelCloseConfirmResponse>): _160.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _160.MsgChannelCloseConfirmResponseAmino): _160.MsgChannelCloseConfirmResponse;
                    toAmino(_: _160.MsgChannelCloseConfirmResponse): _160.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _160.MsgChannelCloseConfirmResponseAminoMsg): _160.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _160.MsgChannelCloseConfirmResponse): _160.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _160.MsgChannelCloseConfirmResponseProtoMsg): _160.MsgChannelCloseConfirmResponse;
                    toProto(message: _160.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _160.MsgChannelCloseConfirmResponse): _160.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    typeUrl: string;
                    encode(message: _160.MsgRecvPacket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgRecvPacket;
                    fromPartial(object: Partial<_160.MsgRecvPacket>): _160.MsgRecvPacket;
                    fromAmino(object: _160.MsgRecvPacketAmino): _160.MsgRecvPacket;
                    toAmino(message: _160.MsgRecvPacket): _160.MsgRecvPacketAmino;
                    fromAminoMsg(object: _160.MsgRecvPacketAminoMsg): _160.MsgRecvPacket;
                    toAminoMsg(message: _160.MsgRecvPacket): _160.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _160.MsgRecvPacketProtoMsg): _160.MsgRecvPacket;
                    toProto(message: _160.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _160.MsgRecvPacket): _160.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    typeUrl: string;
                    encode(message: _160.MsgRecvPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgRecvPacketResponse;
                    fromPartial(object: Partial<_160.MsgRecvPacketResponse>): _160.MsgRecvPacketResponse;
                    fromAmino(object: _160.MsgRecvPacketResponseAmino): _160.MsgRecvPacketResponse;
                    toAmino(message: _160.MsgRecvPacketResponse): _160.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _160.MsgRecvPacketResponseAminoMsg): _160.MsgRecvPacketResponse;
                    toAminoMsg(message: _160.MsgRecvPacketResponse): _160.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _160.MsgRecvPacketResponseProtoMsg): _160.MsgRecvPacketResponse;
                    toProto(message: _160.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _160.MsgRecvPacketResponse): _160.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    typeUrl: string;
                    encode(message: _160.MsgTimeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgTimeout;
                    fromPartial(object: Partial<_160.MsgTimeout>): _160.MsgTimeout;
                    fromAmino(object: _160.MsgTimeoutAmino): _160.MsgTimeout;
                    toAmino(message: _160.MsgTimeout): _160.MsgTimeoutAmino;
                    fromAminoMsg(object: _160.MsgTimeoutAminoMsg): _160.MsgTimeout;
                    toAminoMsg(message: _160.MsgTimeout): _160.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _160.MsgTimeoutProtoMsg): _160.MsgTimeout;
                    toProto(message: _160.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _160.MsgTimeout): _160.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    typeUrl: string;
                    encode(message: _160.MsgTimeoutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgTimeoutResponse;
                    fromPartial(object: Partial<_160.MsgTimeoutResponse>): _160.MsgTimeoutResponse;
                    fromAmino(object: _160.MsgTimeoutResponseAmino): _160.MsgTimeoutResponse;
                    toAmino(message: _160.MsgTimeoutResponse): _160.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _160.MsgTimeoutResponseAminoMsg): _160.MsgTimeoutResponse;
                    toAminoMsg(message: _160.MsgTimeoutResponse): _160.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _160.MsgTimeoutResponseProtoMsg): _160.MsgTimeoutResponse;
                    toProto(message: _160.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _160.MsgTimeoutResponse): _160.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    typeUrl: string;
                    encode(message: _160.MsgTimeoutOnClose, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgTimeoutOnClose;
                    fromPartial(object: Partial<_160.MsgTimeoutOnClose>): _160.MsgTimeoutOnClose;
                    fromAmino(object: _160.MsgTimeoutOnCloseAmino): _160.MsgTimeoutOnClose;
                    toAmino(message: _160.MsgTimeoutOnClose): _160.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _160.MsgTimeoutOnCloseAminoMsg): _160.MsgTimeoutOnClose;
                    toAminoMsg(message: _160.MsgTimeoutOnClose): _160.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _160.MsgTimeoutOnCloseProtoMsg): _160.MsgTimeoutOnClose;
                    toProto(message: _160.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _160.MsgTimeoutOnClose): _160.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    typeUrl: string;
                    encode(message: _160.MsgTimeoutOnCloseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgTimeoutOnCloseResponse;
                    fromPartial(object: Partial<_160.MsgTimeoutOnCloseResponse>): _160.MsgTimeoutOnCloseResponse;
                    fromAmino(object: _160.MsgTimeoutOnCloseResponseAmino): _160.MsgTimeoutOnCloseResponse;
                    toAmino(message: _160.MsgTimeoutOnCloseResponse): _160.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _160.MsgTimeoutOnCloseResponseAminoMsg): _160.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _160.MsgTimeoutOnCloseResponse): _160.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _160.MsgTimeoutOnCloseResponseProtoMsg): _160.MsgTimeoutOnCloseResponse;
                    toProto(message: _160.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _160.MsgTimeoutOnCloseResponse): _160.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    typeUrl: string;
                    encode(message: _160.MsgAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgAcknowledgement;
                    fromPartial(object: Partial<_160.MsgAcknowledgement>): _160.MsgAcknowledgement;
                    fromAmino(object: _160.MsgAcknowledgementAmino): _160.MsgAcknowledgement;
                    toAmino(message: _160.MsgAcknowledgement): _160.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _160.MsgAcknowledgementAminoMsg): _160.MsgAcknowledgement;
                    toAminoMsg(message: _160.MsgAcknowledgement): _160.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _160.MsgAcknowledgementProtoMsg): _160.MsgAcknowledgement;
                    toProto(message: _160.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _160.MsgAcknowledgement): _160.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _160.MsgAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgAcknowledgementResponse;
                    fromPartial(object: Partial<_160.MsgAcknowledgementResponse>): _160.MsgAcknowledgementResponse;
                    fromAmino(object: _160.MsgAcknowledgementResponseAmino): _160.MsgAcknowledgementResponse;
                    toAmino(message: _160.MsgAcknowledgementResponse): _160.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _160.MsgAcknowledgementResponseAminoMsg): _160.MsgAcknowledgementResponse;
                    toAminoMsg(message: _160.MsgAcknowledgementResponse): _160.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _160.MsgAcknowledgementResponseProtoMsg): _160.MsgAcknowledgementResponse;
                    toProto(message: _160.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _160.MsgAcknowledgementResponse): _160.MsgAcknowledgementResponseProtoMsg;
                };
                QueryChannelRequest: {
                    typeUrl: string;
                    encode(message: _159.QueryChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryChannelRequest;
                    fromPartial(object: Partial<_159.QueryChannelRequest>): _159.QueryChannelRequest;
                    fromAmino(object: _159.QueryChannelRequestAmino): _159.QueryChannelRequest;
                    toAmino(message: _159.QueryChannelRequest): _159.QueryChannelRequestAmino;
                    fromAminoMsg(object: _159.QueryChannelRequestAminoMsg): _159.QueryChannelRequest;
                    toAminoMsg(message: _159.QueryChannelRequest): _159.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _159.QueryChannelRequestProtoMsg): _159.QueryChannelRequest;
                    toProto(message: _159.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _159.QueryChannelRequest): _159.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    typeUrl: string;
                    encode(message: _159.QueryChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryChannelResponse;
                    fromPartial(object: Partial<_159.QueryChannelResponse>): _159.QueryChannelResponse;
                    fromAmino(object: _159.QueryChannelResponseAmino): _159.QueryChannelResponse;
                    toAmino(message: _159.QueryChannelResponse): _159.QueryChannelResponseAmino;
                    fromAminoMsg(object: _159.QueryChannelResponseAminoMsg): _159.QueryChannelResponse;
                    toAminoMsg(message: _159.QueryChannelResponse): _159.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _159.QueryChannelResponseProtoMsg): _159.QueryChannelResponse;
                    toProto(message: _159.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _159.QueryChannelResponse): _159.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    typeUrl: string;
                    encode(message: _159.QueryChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryChannelsRequest;
                    fromPartial(object: Partial<_159.QueryChannelsRequest>): _159.QueryChannelsRequest;
                    fromAmino(object: _159.QueryChannelsRequestAmino): _159.QueryChannelsRequest;
                    toAmino(message: _159.QueryChannelsRequest): _159.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _159.QueryChannelsRequestAminoMsg): _159.QueryChannelsRequest;
                    toAminoMsg(message: _159.QueryChannelsRequest): _159.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _159.QueryChannelsRequestProtoMsg): _159.QueryChannelsRequest;
                    toProto(message: _159.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _159.QueryChannelsRequest): _159.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    typeUrl: string;
                    encode(message: _159.QueryChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryChannelsResponse;
                    fromPartial(object: Partial<_159.QueryChannelsResponse>): _159.QueryChannelsResponse;
                    fromAmino(object: _159.QueryChannelsResponseAmino): _159.QueryChannelsResponse;
                    toAmino(message: _159.QueryChannelsResponse): _159.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _159.QueryChannelsResponseAminoMsg): _159.QueryChannelsResponse;
                    toAminoMsg(message: _159.QueryChannelsResponse): _159.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _159.QueryChannelsResponseProtoMsg): _159.QueryChannelsResponse;
                    toProto(message: _159.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _159.QueryChannelsResponse): _159.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    typeUrl: string;
                    encode(message: _159.QueryConnectionChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryConnectionChannelsRequest;
                    fromPartial(object: Partial<_159.QueryConnectionChannelsRequest>): _159.QueryConnectionChannelsRequest;
                    fromAmino(object: _159.QueryConnectionChannelsRequestAmino): _159.QueryConnectionChannelsRequest;
                    toAmino(message: _159.QueryConnectionChannelsRequest): _159.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _159.QueryConnectionChannelsRequestAminoMsg): _159.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _159.QueryConnectionChannelsRequest): _159.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _159.QueryConnectionChannelsRequestProtoMsg): _159.QueryConnectionChannelsRequest;
                    toProto(message: _159.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _159.QueryConnectionChannelsRequest): _159.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    typeUrl: string;
                    encode(message: _159.QueryConnectionChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryConnectionChannelsResponse;
                    fromPartial(object: Partial<_159.QueryConnectionChannelsResponse>): _159.QueryConnectionChannelsResponse;
                    fromAmino(object: _159.QueryConnectionChannelsResponseAmino): _159.QueryConnectionChannelsResponse;
                    toAmino(message: _159.QueryConnectionChannelsResponse): _159.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _159.QueryConnectionChannelsResponseAminoMsg): _159.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _159.QueryConnectionChannelsResponse): _159.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _159.QueryConnectionChannelsResponseProtoMsg): _159.QueryConnectionChannelsResponse;
                    toProto(message: _159.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _159.QueryConnectionChannelsResponse): _159.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    typeUrl: string;
                    encode(message: _159.QueryChannelClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryChannelClientStateRequest;
                    fromPartial(object: Partial<_159.QueryChannelClientStateRequest>): _159.QueryChannelClientStateRequest;
                    fromAmino(object: _159.QueryChannelClientStateRequestAmino): _159.QueryChannelClientStateRequest;
                    toAmino(message: _159.QueryChannelClientStateRequest): _159.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _159.QueryChannelClientStateRequestAminoMsg): _159.QueryChannelClientStateRequest;
                    toAminoMsg(message: _159.QueryChannelClientStateRequest): _159.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _159.QueryChannelClientStateRequestProtoMsg): _159.QueryChannelClientStateRequest;
                    toProto(message: _159.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _159.QueryChannelClientStateRequest): _159.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    typeUrl: string;
                    encode(message: _159.QueryChannelClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryChannelClientStateResponse;
                    fromPartial(object: Partial<_159.QueryChannelClientStateResponse>): _159.QueryChannelClientStateResponse;
                    fromAmino(object: _159.QueryChannelClientStateResponseAmino): _159.QueryChannelClientStateResponse;
                    toAmino(message: _159.QueryChannelClientStateResponse): _159.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _159.QueryChannelClientStateResponseAminoMsg): _159.QueryChannelClientStateResponse;
                    toAminoMsg(message: _159.QueryChannelClientStateResponse): _159.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _159.QueryChannelClientStateResponseProtoMsg): _159.QueryChannelClientStateResponse;
                    toProto(message: _159.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _159.QueryChannelClientStateResponse): _159.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _159.QueryChannelConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryChannelConsensusStateRequest;
                    fromPartial(object: Partial<_159.QueryChannelConsensusStateRequest>): _159.QueryChannelConsensusStateRequest;
                    fromAmino(object: _159.QueryChannelConsensusStateRequestAmino): _159.QueryChannelConsensusStateRequest;
                    toAmino(message: _159.QueryChannelConsensusStateRequest): _159.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _159.QueryChannelConsensusStateRequestAminoMsg): _159.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _159.QueryChannelConsensusStateRequest): _159.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _159.QueryChannelConsensusStateRequestProtoMsg): _159.QueryChannelConsensusStateRequest;
                    toProto(message: _159.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _159.QueryChannelConsensusStateRequest): _159.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _159.QueryChannelConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryChannelConsensusStateResponse;
                    fromPartial(object: Partial<_159.QueryChannelConsensusStateResponse>): _159.QueryChannelConsensusStateResponse;
                    fromAmino(object: _159.QueryChannelConsensusStateResponseAmino): _159.QueryChannelConsensusStateResponse;
                    toAmino(message: _159.QueryChannelConsensusStateResponse): _159.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _159.QueryChannelConsensusStateResponseAminoMsg): _159.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _159.QueryChannelConsensusStateResponse): _159.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _159.QueryChannelConsensusStateResponseProtoMsg): _159.QueryChannelConsensusStateResponse;
                    toProto(message: _159.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _159.QueryChannelConsensusStateResponse): _159.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    typeUrl: string;
                    encode(message: _159.QueryPacketCommitmentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryPacketCommitmentRequest;
                    fromPartial(object: Partial<_159.QueryPacketCommitmentRequest>): _159.QueryPacketCommitmentRequest;
                    fromAmino(object: _159.QueryPacketCommitmentRequestAmino): _159.QueryPacketCommitmentRequest;
                    toAmino(message: _159.QueryPacketCommitmentRequest): _159.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _159.QueryPacketCommitmentRequestAminoMsg): _159.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _159.QueryPacketCommitmentRequest): _159.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _159.QueryPacketCommitmentRequestProtoMsg): _159.QueryPacketCommitmentRequest;
                    toProto(message: _159.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _159.QueryPacketCommitmentRequest): _159.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    typeUrl: string;
                    encode(message: _159.QueryPacketCommitmentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryPacketCommitmentResponse;
                    fromPartial(object: Partial<_159.QueryPacketCommitmentResponse>): _159.QueryPacketCommitmentResponse;
                    fromAmino(object: _159.QueryPacketCommitmentResponseAmino): _159.QueryPacketCommitmentResponse;
                    toAmino(message: _159.QueryPacketCommitmentResponse): _159.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _159.QueryPacketCommitmentResponseAminoMsg): _159.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _159.QueryPacketCommitmentResponse): _159.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _159.QueryPacketCommitmentResponseProtoMsg): _159.QueryPacketCommitmentResponse;
                    toProto(message: _159.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _159.QueryPacketCommitmentResponse): _159.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    typeUrl: string;
                    encode(message: _159.QueryPacketCommitmentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryPacketCommitmentsRequest;
                    fromPartial(object: Partial<_159.QueryPacketCommitmentsRequest>): _159.QueryPacketCommitmentsRequest;
                    fromAmino(object: _159.QueryPacketCommitmentsRequestAmino): _159.QueryPacketCommitmentsRequest;
                    toAmino(message: _159.QueryPacketCommitmentsRequest): _159.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _159.QueryPacketCommitmentsRequestAminoMsg): _159.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _159.QueryPacketCommitmentsRequest): _159.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _159.QueryPacketCommitmentsRequestProtoMsg): _159.QueryPacketCommitmentsRequest;
                    toProto(message: _159.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _159.QueryPacketCommitmentsRequest): _159.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    typeUrl: string;
                    encode(message: _159.QueryPacketCommitmentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryPacketCommitmentsResponse;
                    fromPartial(object: Partial<_159.QueryPacketCommitmentsResponse>): _159.QueryPacketCommitmentsResponse;
                    fromAmino(object: _159.QueryPacketCommitmentsResponseAmino): _159.QueryPacketCommitmentsResponse;
                    toAmino(message: _159.QueryPacketCommitmentsResponse): _159.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _159.QueryPacketCommitmentsResponseAminoMsg): _159.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _159.QueryPacketCommitmentsResponse): _159.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _159.QueryPacketCommitmentsResponseProtoMsg): _159.QueryPacketCommitmentsResponse;
                    toProto(message: _159.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _159.QueryPacketCommitmentsResponse): _159.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    typeUrl: string;
                    encode(message: _159.QueryPacketReceiptRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryPacketReceiptRequest;
                    fromPartial(object: Partial<_159.QueryPacketReceiptRequest>): _159.QueryPacketReceiptRequest;
                    fromAmino(object: _159.QueryPacketReceiptRequestAmino): _159.QueryPacketReceiptRequest;
                    toAmino(message: _159.QueryPacketReceiptRequest): _159.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _159.QueryPacketReceiptRequestAminoMsg): _159.QueryPacketReceiptRequest;
                    toAminoMsg(message: _159.QueryPacketReceiptRequest): _159.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _159.QueryPacketReceiptRequestProtoMsg): _159.QueryPacketReceiptRequest;
                    toProto(message: _159.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _159.QueryPacketReceiptRequest): _159.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    typeUrl: string;
                    encode(message: _159.QueryPacketReceiptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryPacketReceiptResponse;
                    fromPartial(object: Partial<_159.QueryPacketReceiptResponse>): _159.QueryPacketReceiptResponse;
                    fromAmino(object: _159.QueryPacketReceiptResponseAmino): _159.QueryPacketReceiptResponse;
                    toAmino(message: _159.QueryPacketReceiptResponse): _159.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _159.QueryPacketReceiptResponseAminoMsg): _159.QueryPacketReceiptResponse;
                    toAminoMsg(message: _159.QueryPacketReceiptResponse): _159.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _159.QueryPacketReceiptResponseProtoMsg): _159.QueryPacketReceiptResponse;
                    toProto(message: _159.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _159.QueryPacketReceiptResponse): _159.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    typeUrl: string;
                    encode(message: _159.QueryPacketAcknowledgementRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryPacketAcknowledgementRequest;
                    fromPartial(object: Partial<_159.QueryPacketAcknowledgementRequest>): _159.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _159.QueryPacketAcknowledgementRequestAmino): _159.QueryPacketAcknowledgementRequest;
                    toAmino(message: _159.QueryPacketAcknowledgementRequest): _159.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _159.QueryPacketAcknowledgementRequestAminoMsg): _159.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _159.QueryPacketAcknowledgementRequest): _159.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _159.QueryPacketAcknowledgementRequestProtoMsg): _159.QueryPacketAcknowledgementRequest;
                    toProto(message: _159.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _159.QueryPacketAcknowledgementRequest): _159.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _159.QueryPacketAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryPacketAcknowledgementResponse;
                    fromPartial(object: Partial<_159.QueryPacketAcknowledgementResponse>): _159.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _159.QueryPacketAcknowledgementResponseAmino): _159.QueryPacketAcknowledgementResponse;
                    toAmino(message: _159.QueryPacketAcknowledgementResponse): _159.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _159.QueryPacketAcknowledgementResponseAminoMsg): _159.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _159.QueryPacketAcknowledgementResponse): _159.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _159.QueryPacketAcknowledgementResponseProtoMsg): _159.QueryPacketAcknowledgementResponse;
                    toProto(message: _159.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _159.QueryPacketAcknowledgementResponse): _159.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    typeUrl: string;
                    encode(message: _159.QueryPacketAcknowledgementsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: Partial<_159.QueryPacketAcknowledgementsRequest>): _159.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _159.QueryPacketAcknowledgementsRequestAmino): _159.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _159.QueryPacketAcknowledgementsRequest): _159.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _159.QueryPacketAcknowledgementsRequestAminoMsg): _159.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _159.QueryPacketAcknowledgementsRequest): _159.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _159.QueryPacketAcknowledgementsRequestProtoMsg): _159.QueryPacketAcknowledgementsRequest;
                    toProto(message: _159.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _159.QueryPacketAcknowledgementsRequest): _159.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    typeUrl: string;
                    encode(message: _159.QueryPacketAcknowledgementsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: Partial<_159.QueryPacketAcknowledgementsResponse>): _159.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _159.QueryPacketAcknowledgementsResponseAmino): _159.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _159.QueryPacketAcknowledgementsResponse): _159.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _159.QueryPacketAcknowledgementsResponseAminoMsg): _159.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _159.QueryPacketAcknowledgementsResponse): _159.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _159.QueryPacketAcknowledgementsResponseProtoMsg): _159.QueryPacketAcknowledgementsResponse;
                    toProto(message: _159.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _159.QueryPacketAcknowledgementsResponse): _159.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _159.QueryUnreceivedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryUnreceivedPacketsRequest;
                    fromPartial(object: Partial<_159.QueryUnreceivedPacketsRequest>): _159.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _159.QueryUnreceivedPacketsRequestAmino): _159.QueryUnreceivedPacketsRequest;
                    toAmino(message: _159.QueryUnreceivedPacketsRequest): _159.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _159.QueryUnreceivedPacketsRequestAminoMsg): _159.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _159.QueryUnreceivedPacketsRequest): _159.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _159.QueryUnreceivedPacketsRequestProtoMsg): _159.QueryUnreceivedPacketsRequest;
                    toProto(message: _159.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _159.QueryUnreceivedPacketsRequest): _159.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _159.QueryUnreceivedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryUnreceivedPacketsResponse;
                    fromPartial(object: Partial<_159.QueryUnreceivedPacketsResponse>): _159.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _159.QueryUnreceivedPacketsResponseAmino): _159.QueryUnreceivedPacketsResponse;
                    toAmino(message: _159.QueryUnreceivedPacketsResponse): _159.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _159.QueryUnreceivedPacketsResponseAminoMsg): _159.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _159.QueryUnreceivedPacketsResponse): _159.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _159.QueryUnreceivedPacketsResponseProtoMsg): _159.QueryUnreceivedPacketsResponse;
                    toProto(message: _159.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _159.QueryUnreceivedPacketsResponse): _159.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    typeUrl: string;
                    encode(message: _159.QueryUnreceivedAcksRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryUnreceivedAcksRequest;
                    fromPartial(object: Partial<_159.QueryUnreceivedAcksRequest>): _159.QueryUnreceivedAcksRequest;
                    fromAmino(object: _159.QueryUnreceivedAcksRequestAmino): _159.QueryUnreceivedAcksRequest;
                    toAmino(message: _159.QueryUnreceivedAcksRequest): _159.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _159.QueryUnreceivedAcksRequestAminoMsg): _159.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _159.QueryUnreceivedAcksRequest): _159.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _159.QueryUnreceivedAcksRequestProtoMsg): _159.QueryUnreceivedAcksRequest;
                    toProto(message: _159.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _159.QueryUnreceivedAcksRequest): _159.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    typeUrl: string;
                    encode(message: _159.QueryUnreceivedAcksResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryUnreceivedAcksResponse;
                    fromPartial(object: Partial<_159.QueryUnreceivedAcksResponse>): _159.QueryUnreceivedAcksResponse;
                    fromAmino(object: _159.QueryUnreceivedAcksResponseAmino): _159.QueryUnreceivedAcksResponse;
                    toAmino(message: _159.QueryUnreceivedAcksResponse): _159.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _159.QueryUnreceivedAcksResponseAminoMsg): _159.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _159.QueryUnreceivedAcksResponse): _159.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _159.QueryUnreceivedAcksResponseProtoMsg): _159.QueryUnreceivedAcksResponse;
                    toProto(message: _159.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _159.QueryUnreceivedAcksResponse): _159.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    typeUrl: string;
                    encode(message: _159.QueryNextSequenceReceiveRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryNextSequenceReceiveRequest;
                    fromPartial(object: Partial<_159.QueryNextSequenceReceiveRequest>): _159.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _159.QueryNextSequenceReceiveRequestAmino): _159.QueryNextSequenceReceiveRequest;
                    toAmino(message: _159.QueryNextSequenceReceiveRequest): _159.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _159.QueryNextSequenceReceiveRequestAminoMsg): _159.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _159.QueryNextSequenceReceiveRequest): _159.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _159.QueryNextSequenceReceiveRequestProtoMsg): _159.QueryNextSequenceReceiveRequest;
                    toProto(message: _159.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _159.QueryNextSequenceReceiveRequest): _159.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    typeUrl: string;
                    encode(message: _159.QueryNextSequenceReceiveResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryNextSequenceReceiveResponse;
                    fromPartial(object: Partial<_159.QueryNextSequenceReceiveResponse>): _159.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _159.QueryNextSequenceReceiveResponseAmino): _159.QueryNextSequenceReceiveResponse;
                    toAmino(message: _159.QueryNextSequenceReceiveResponse): _159.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _159.QueryNextSequenceReceiveResponseAminoMsg): _159.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _159.QueryNextSequenceReceiveResponse): _159.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _159.QueryNextSequenceReceiveResponseProtoMsg): _159.QueryNextSequenceReceiveResponse;
                    toProto(message: _159.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _159.QueryNextSequenceReceiveResponse): _159.QueryNextSequenceReceiveResponseProtoMsg;
                };
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
                PacketSequence: {
                    typeUrl: string;
                    encode(message: _158.PacketSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.PacketSequence;
                    fromPartial(object: Partial<_158.PacketSequence>): _158.PacketSequence;
                    fromAmino(object: _158.PacketSequenceAmino): _158.PacketSequence;
                    toAmino(message: _158.PacketSequence): _158.PacketSequenceAmino;
                    fromAminoMsg(object: _158.PacketSequenceAminoMsg): _158.PacketSequence;
                    toAminoMsg(message: _158.PacketSequence): _158.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _158.PacketSequenceProtoMsg): _158.PacketSequence;
                    toProto(message: _158.PacketSequence): Uint8Array;
                    toProtoMsg(message: _158.PacketSequence): _158.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _157.State;
                stateToJSON(object: _157.State): string;
                orderFromJSON(object: any): _157.Order;
                orderToJSON(object: _157.Order): string;
                State: typeof _157.State;
                StateSDKType: typeof _157.State;
                StateAmino: typeof _157.State;
                Order: typeof _157.Order;
                OrderSDKType: typeof _157.Order;
                OrderAmino: typeof _157.Order;
                Channel: {
                    typeUrl: string;
                    encode(message: _157.Channel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _157.Channel;
                    fromPartial(object: Partial<_157.Channel>): _157.Channel;
                    fromAmino(object: _157.ChannelAmino): _157.Channel;
                    toAmino(message: _157.Channel): _157.ChannelAmino;
                    fromAminoMsg(object: _157.ChannelAminoMsg): _157.Channel;
                    toAminoMsg(message: _157.Channel): _157.ChannelAminoMsg;
                    fromProtoMsg(message: _157.ChannelProtoMsg): _157.Channel;
                    toProto(message: _157.Channel): Uint8Array;
                    toProtoMsg(message: _157.Channel): _157.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    encode(message: _157.IdentifiedChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _157.IdentifiedChannel;
                    fromPartial(object: Partial<_157.IdentifiedChannel>): _157.IdentifiedChannel;
                    fromAmino(object: _157.IdentifiedChannelAmino): _157.IdentifiedChannel;
                    toAmino(message: _157.IdentifiedChannel): _157.IdentifiedChannelAmino;
                    fromAminoMsg(object: _157.IdentifiedChannelAminoMsg): _157.IdentifiedChannel;
                    toAminoMsg(message: _157.IdentifiedChannel): _157.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _157.IdentifiedChannelProtoMsg): _157.IdentifiedChannel;
                    toProto(message: _157.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _157.IdentifiedChannel): _157.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _157.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _157.Counterparty;
                    fromPartial(object: Partial<_157.Counterparty>): _157.Counterparty;
                    fromAmino(object: _157.CounterpartyAmino): _157.Counterparty;
                    toAmino(message: _157.Counterparty): _157.CounterpartyAmino;
                    fromAminoMsg(object: _157.CounterpartyAminoMsg): _157.Counterparty;
                    toAminoMsg(message: _157.Counterparty): _157.CounterpartyAminoMsg;
                    fromProtoMsg(message: _157.CounterpartyProtoMsg): _157.Counterparty;
                    toProto(message: _157.Counterparty): Uint8Array;
                    toProtoMsg(message: _157.Counterparty): _157.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    encode(message: _157.Packet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _157.Packet;
                    fromPartial(object: Partial<_157.Packet>): _157.Packet;
                    fromAmino(object: _157.PacketAmino): _157.Packet;
                    toAmino(message: _157.Packet): _157.PacketAmino;
                    fromAminoMsg(object: _157.PacketAminoMsg): _157.Packet;
                    toAminoMsg(message: _157.Packet): _157.PacketAminoMsg;
                    fromProtoMsg(message: _157.PacketProtoMsg): _157.Packet;
                    toProto(message: _157.Packet): Uint8Array;
                    toProtoMsg(message: _157.Packet): _157.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    encode(message: _157.PacketState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _157.PacketState;
                    fromPartial(object: Partial<_157.PacketState>): _157.PacketState;
                    fromAmino(object: _157.PacketStateAmino): _157.PacketState;
                    toAmino(message: _157.PacketState): _157.PacketStateAmino;
                    fromAminoMsg(object: _157.PacketStateAminoMsg): _157.PacketState;
                    toAminoMsg(message: _157.PacketState): _157.PacketStateAminoMsg;
                    fromProtoMsg(message: _157.PacketStateProtoMsg): _157.PacketState;
                    toProto(message: _157.PacketState): Uint8Array;
                    toProtoMsg(message: _157.PacketState): _157.PacketStateProtoMsg;
                };
                PacketId: {
                    typeUrl: string;
                    encode(message: _157.PacketId, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _157.PacketId;
                    fromPartial(object: Partial<_157.PacketId>): _157.PacketId;
                    fromAmino(object: _157.PacketIdAmino): _157.PacketId;
                    toAmino(message: _157.PacketId): _157.PacketIdAmino;
                    fromAminoMsg(object: _157.PacketIdAminoMsg): _157.PacketId;
                    toAminoMsg(message: _157.PacketId): _157.PacketIdAminoMsg;
                    fromProtoMsg(message: _157.PacketIdProtoMsg): _157.PacketId;
                    toProto(message: _157.PacketId): Uint8Array;
                    toProtoMsg(message: _157.PacketId): _157.PacketIdProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    encode(message: _157.Acknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _157.Acknowledgement;
                    fromPartial(object: Partial<_157.Acknowledgement>): _157.Acknowledgement;
                    fromAmino(object: _157.AcknowledgementAmino): _157.Acknowledgement;
                    toAmino(message: _157.Acknowledgement): _157.AcknowledgementAmino;
                    fromAminoMsg(object: _157.AcknowledgementAminoMsg): _157.Acknowledgement;
                    toAminoMsg(message: _157.Acknowledgement): _157.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _157.AcknowledgementProtoMsg): _157.Acknowledgement;
                    toProto(message: _157.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _157.Acknowledgement): _157.AcknowledgementProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _353.MsgClientImpl;
                QueryClientImpl: typeof _347.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _163.QueryClientStateRequest): Promise<_163.QueryClientStateResponse>;
                    clientStates(request?: _163.QueryClientStatesRequest): Promise<_163.QueryClientStatesResponse>;
                    consensusState(request: _163.QueryConsensusStateRequest): Promise<_163.QueryConsensusStateResponse>;
                    consensusStates(request: _163.QueryConsensusStatesRequest): Promise<_163.QueryConsensusStatesResponse>;
                    consensusStateHeights(request: _163.QueryConsensusStateHeightsRequest): Promise<_163.QueryConsensusStateHeightsResponse>;
                    clientStatus(request: _163.QueryClientStatusRequest): Promise<_163.QueryClientStatusResponse>;
                    clientParams(request?: _163.QueryClientParamsRequest): Promise<_163.QueryClientParamsResponse>;
                    upgradedClientState(request?: _163.QueryUpgradedClientStateRequest): Promise<_163.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _163.QueryUpgradedConsensusStateRequest): Promise<_163.QueryUpgradedConsensusStateResponse>;
                };
                registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _164.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _164.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _164.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _164.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _164.MsgCreateClient): {
                            typeUrl: string;
                            value: _164.MsgCreateClient;
                        };
                        updateClient(value: _164.MsgUpdateClient): {
                            typeUrl: string;
                            value: _164.MsgUpdateClient;
                        };
                        upgradeClient(value: _164.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _164.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _164.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _164.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _164.MsgCreateClient): {
                            typeUrl: string;
                            value: _164.MsgCreateClient;
                        };
                        updateClient(value: _164.MsgUpdateClient): {
                            typeUrl: string;
                            value: _164.MsgUpdateClient;
                        };
                        upgradeClient(value: _164.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _164.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _164.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _164.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _164.MsgCreateClient) => _164.MsgCreateClientAmino;
                        fromAmino: (object: _164.MsgCreateClientAmino) => _164.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _164.MsgUpdateClient) => _164.MsgUpdateClientAmino;
                        fromAmino: (object: _164.MsgUpdateClientAmino) => _164.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _164.MsgUpgradeClient) => _164.MsgUpgradeClientAmino;
                        fromAmino: (object: _164.MsgUpgradeClientAmino) => _164.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _164.MsgSubmitMisbehaviour) => _164.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _164.MsgSubmitMisbehaviourAmino) => _164.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    typeUrl: string;
                    encode(message: _164.MsgCreateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.MsgCreateClient;
                    fromPartial(object: Partial<_164.MsgCreateClient>): _164.MsgCreateClient;
                    fromAmino(object: _164.MsgCreateClientAmino): _164.MsgCreateClient;
                    toAmino(message: _164.MsgCreateClient): _164.MsgCreateClientAmino;
                    fromAminoMsg(object: _164.MsgCreateClientAminoMsg): _164.MsgCreateClient;
                    toAminoMsg(message: _164.MsgCreateClient): _164.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _164.MsgCreateClientProtoMsg): _164.MsgCreateClient;
                    toProto(message: _164.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _164.MsgCreateClient): _164.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    typeUrl: string;
                    encode(_: _164.MsgCreateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.MsgCreateClientResponse;
                    fromPartial(_: Partial<_164.MsgCreateClientResponse>): _164.MsgCreateClientResponse;
                    fromAmino(_: _164.MsgCreateClientResponseAmino): _164.MsgCreateClientResponse;
                    toAmino(_: _164.MsgCreateClientResponse): _164.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _164.MsgCreateClientResponseAminoMsg): _164.MsgCreateClientResponse;
                    toAminoMsg(message: _164.MsgCreateClientResponse): _164.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _164.MsgCreateClientResponseProtoMsg): _164.MsgCreateClientResponse;
                    toProto(message: _164.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _164.MsgCreateClientResponse): _164.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    typeUrl: string;
                    encode(message: _164.MsgUpdateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.MsgUpdateClient;
                    fromPartial(object: Partial<_164.MsgUpdateClient>): _164.MsgUpdateClient;
                    fromAmino(object: _164.MsgUpdateClientAmino): _164.MsgUpdateClient;
                    toAmino(message: _164.MsgUpdateClient): _164.MsgUpdateClientAmino;
                    fromAminoMsg(object: _164.MsgUpdateClientAminoMsg): _164.MsgUpdateClient;
                    toAminoMsg(message: _164.MsgUpdateClient): _164.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _164.MsgUpdateClientProtoMsg): _164.MsgUpdateClient;
                    toProto(message: _164.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _164.MsgUpdateClient): _164.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    typeUrl: string;
                    encode(_: _164.MsgUpdateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.MsgUpdateClientResponse;
                    fromPartial(_: Partial<_164.MsgUpdateClientResponse>): _164.MsgUpdateClientResponse;
                    fromAmino(_: _164.MsgUpdateClientResponseAmino): _164.MsgUpdateClientResponse;
                    toAmino(_: _164.MsgUpdateClientResponse): _164.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _164.MsgUpdateClientResponseAminoMsg): _164.MsgUpdateClientResponse;
                    toAminoMsg(message: _164.MsgUpdateClientResponse): _164.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _164.MsgUpdateClientResponseProtoMsg): _164.MsgUpdateClientResponse;
                    toProto(message: _164.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _164.MsgUpdateClientResponse): _164.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    typeUrl: string;
                    encode(message: _164.MsgUpgradeClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.MsgUpgradeClient;
                    fromPartial(object: Partial<_164.MsgUpgradeClient>): _164.MsgUpgradeClient;
                    fromAmino(object: _164.MsgUpgradeClientAmino): _164.MsgUpgradeClient;
                    toAmino(message: _164.MsgUpgradeClient): _164.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _164.MsgUpgradeClientAminoMsg): _164.MsgUpgradeClient;
                    toAminoMsg(message: _164.MsgUpgradeClient): _164.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _164.MsgUpgradeClientProtoMsg): _164.MsgUpgradeClient;
                    toProto(message: _164.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _164.MsgUpgradeClient): _164.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    typeUrl: string;
                    encode(_: _164.MsgUpgradeClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.MsgUpgradeClientResponse;
                    fromPartial(_: Partial<_164.MsgUpgradeClientResponse>): _164.MsgUpgradeClientResponse;
                    fromAmino(_: _164.MsgUpgradeClientResponseAmino): _164.MsgUpgradeClientResponse;
                    toAmino(_: _164.MsgUpgradeClientResponse): _164.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _164.MsgUpgradeClientResponseAminoMsg): _164.MsgUpgradeClientResponse;
                    toAminoMsg(message: _164.MsgUpgradeClientResponse): _164.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _164.MsgUpgradeClientResponseProtoMsg): _164.MsgUpgradeClientResponse;
                    toProto(message: _164.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _164.MsgUpgradeClientResponse): _164.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    typeUrl: string;
                    encode(message: _164.MsgSubmitMisbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.MsgSubmitMisbehaviour;
                    fromPartial(object: Partial<_164.MsgSubmitMisbehaviour>): _164.MsgSubmitMisbehaviour;
                    fromAmino(object: _164.MsgSubmitMisbehaviourAmino): _164.MsgSubmitMisbehaviour;
                    toAmino(message: _164.MsgSubmitMisbehaviour): _164.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _164.MsgSubmitMisbehaviourAminoMsg): _164.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _164.MsgSubmitMisbehaviour): _164.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _164.MsgSubmitMisbehaviourProtoMsg): _164.MsgSubmitMisbehaviour;
                    toProto(message: _164.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _164.MsgSubmitMisbehaviour): _164.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    typeUrl: string;
                    encode(_: _164.MsgSubmitMisbehaviourResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: Partial<_164.MsgSubmitMisbehaviourResponse>): _164.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _164.MsgSubmitMisbehaviourResponseAmino): _164.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _164.MsgSubmitMisbehaviourResponse): _164.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _164.MsgSubmitMisbehaviourResponseAminoMsg): _164.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _164.MsgSubmitMisbehaviourResponse): _164.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _164.MsgSubmitMisbehaviourResponseProtoMsg): _164.MsgSubmitMisbehaviourResponse;
                    toProto(message: _164.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _164.MsgSubmitMisbehaviourResponse): _164.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    typeUrl: string;
                    encode(message: _163.QueryClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.QueryClientStateRequest;
                    fromPartial(object: Partial<_163.QueryClientStateRequest>): _163.QueryClientStateRequest;
                    fromAmino(object: _163.QueryClientStateRequestAmino): _163.QueryClientStateRequest;
                    toAmino(message: _163.QueryClientStateRequest): _163.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _163.QueryClientStateRequestAminoMsg): _163.QueryClientStateRequest;
                    toAminoMsg(message: _163.QueryClientStateRequest): _163.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _163.QueryClientStateRequestProtoMsg): _163.QueryClientStateRequest;
                    toProto(message: _163.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _163.QueryClientStateRequest): _163.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    typeUrl: string;
                    encode(message: _163.QueryClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.QueryClientStateResponse;
                    fromPartial(object: Partial<_163.QueryClientStateResponse>): _163.QueryClientStateResponse;
                    fromAmino(object: _163.QueryClientStateResponseAmino): _163.QueryClientStateResponse;
                    toAmino(message: _163.QueryClientStateResponse): _163.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _163.QueryClientStateResponseAminoMsg): _163.QueryClientStateResponse;
                    toAminoMsg(message: _163.QueryClientStateResponse): _163.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _163.QueryClientStateResponseProtoMsg): _163.QueryClientStateResponse;
                    toProto(message: _163.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _163.QueryClientStateResponse): _163.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    typeUrl: string;
                    encode(message: _163.QueryClientStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.QueryClientStatesRequest;
                    fromPartial(object: Partial<_163.QueryClientStatesRequest>): _163.QueryClientStatesRequest;
                    fromAmino(object: _163.QueryClientStatesRequestAmino): _163.QueryClientStatesRequest;
                    toAmino(message: _163.QueryClientStatesRequest): _163.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _163.QueryClientStatesRequestAminoMsg): _163.QueryClientStatesRequest;
                    toAminoMsg(message: _163.QueryClientStatesRequest): _163.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _163.QueryClientStatesRequestProtoMsg): _163.QueryClientStatesRequest;
                    toProto(message: _163.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _163.QueryClientStatesRequest): _163.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    typeUrl: string;
                    encode(message: _163.QueryClientStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.QueryClientStatesResponse;
                    fromPartial(object: Partial<_163.QueryClientStatesResponse>): _163.QueryClientStatesResponse;
                    fromAmino(object: _163.QueryClientStatesResponseAmino): _163.QueryClientStatesResponse;
                    toAmino(message: _163.QueryClientStatesResponse): _163.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _163.QueryClientStatesResponseAminoMsg): _163.QueryClientStatesResponse;
                    toAminoMsg(message: _163.QueryClientStatesResponse): _163.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _163.QueryClientStatesResponseProtoMsg): _163.QueryClientStatesResponse;
                    toProto(message: _163.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _163.QueryClientStatesResponse): _163.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _163.QueryConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.QueryConsensusStateRequest;
                    fromPartial(object: Partial<_163.QueryConsensusStateRequest>): _163.QueryConsensusStateRequest;
                    fromAmino(object: _163.QueryConsensusStateRequestAmino): _163.QueryConsensusStateRequest;
                    toAmino(message: _163.QueryConsensusStateRequest): _163.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _163.QueryConsensusStateRequestAminoMsg): _163.QueryConsensusStateRequest;
                    toAminoMsg(message: _163.QueryConsensusStateRequest): _163.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _163.QueryConsensusStateRequestProtoMsg): _163.QueryConsensusStateRequest;
                    toProto(message: _163.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _163.QueryConsensusStateRequest): _163.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _163.QueryConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.QueryConsensusStateResponse;
                    fromPartial(object: Partial<_163.QueryConsensusStateResponse>): _163.QueryConsensusStateResponse;
                    fromAmino(object: _163.QueryConsensusStateResponseAmino): _163.QueryConsensusStateResponse;
                    toAmino(message: _163.QueryConsensusStateResponse): _163.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _163.QueryConsensusStateResponseAminoMsg): _163.QueryConsensusStateResponse;
                    toAminoMsg(message: _163.QueryConsensusStateResponse): _163.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _163.QueryConsensusStateResponseProtoMsg): _163.QueryConsensusStateResponse;
                    toProto(message: _163.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _163.QueryConsensusStateResponse): _163.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    typeUrl: string;
                    encode(message: _163.QueryConsensusStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.QueryConsensusStatesRequest;
                    fromPartial(object: Partial<_163.QueryConsensusStatesRequest>): _163.QueryConsensusStatesRequest;
                    fromAmino(object: _163.QueryConsensusStatesRequestAmino): _163.QueryConsensusStatesRequest;
                    toAmino(message: _163.QueryConsensusStatesRequest): _163.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _163.QueryConsensusStatesRequestAminoMsg): _163.QueryConsensusStatesRequest;
                    toAminoMsg(message: _163.QueryConsensusStatesRequest): _163.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _163.QueryConsensusStatesRequestProtoMsg): _163.QueryConsensusStatesRequest;
                    toProto(message: _163.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _163.QueryConsensusStatesRequest): _163.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    typeUrl: string;
                    encode(message: _163.QueryConsensusStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.QueryConsensusStatesResponse;
                    fromPartial(object: Partial<_163.QueryConsensusStatesResponse>): _163.QueryConsensusStatesResponse;
                    fromAmino(object: _163.QueryConsensusStatesResponseAmino): _163.QueryConsensusStatesResponse;
                    toAmino(message: _163.QueryConsensusStatesResponse): _163.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _163.QueryConsensusStatesResponseAminoMsg): _163.QueryConsensusStatesResponse;
                    toAminoMsg(message: _163.QueryConsensusStatesResponse): _163.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _163.QueryConsensusStatesResponseProtoMsg): _163.QueryConsensusStatesResponse;
                    toProto(message: _163.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _163.QueryConsensusStatesResponse): _163.QueryConsensusStatesResponseProtoMsg;
                };
                QueryConsensusStateHeightsRequest: {
                    typeUrl: string;
                    encode(message: _163.QueryConsensusStateHeightsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.QueryConsensusStateHeightsRequest;
                    fromPartial(object: Partial<_163.QueryConsensusStateHeightsRequest>): _163.QueryConsensusStateHeightsRequest;
                    fromAmino(object: _163.QueryConsensusStateHeightsRequestAmino): _163.QueryConsensusStateHeightsRequest;
                    toAmino(message: _163.QueryConsensusStateHeightsRequest): _163.QueryConsensusStateHeightsRequestAmino;
                    fromAminoMsg(object: _163.QueryConsensusStateHeightsRequestAminoMsg): _163.QueryConsensusStateHeightsRequest;
                    toAminoMsg(message: _163.QueryConsensusStateHeightsRequest): _163.QueryConsensusStateHeightsRequestAminoMsg;
                    fromProtoMsg(message: _163.QueryConsensusStateHeightsRequestProtoMsg): _163.QueryConsensusStateHeightsRequest;
                    toProto(message: _163.QueryConsensusStateHeightsRequest): Uint8Array;
                    toProtoMsg(message: _163.QueryConsensusStateHeightsRequest): _163.QueryConsensusStateHeightsRequestProtoMsg;
                };
                QueryConsensusStateHeightsResponse: {
                    typeUrl: string;
                    encode(message: _163.QueryConsensusStateHeightsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.QueryConsensusStateHeightsResponse;
                    fromPartial(object: Partial<_163.QueryConsensusStateHeightsResponse>): _163.QueryConsensusStateHeightsResponse;
                    fromAmino(object: _163.QueryConsensusStateHeightsResponseAmino): _163.QueryConsensusStateHeightsResponse;
                    toAmino(message: _163.QueryConsensusStateHeightsResponse): _163.QueryConsensusStateHeightsResponseAmino;
                    fromAminoMsg(object: _163.QueryConsensusStateHeightsResponseAminoMsg): _163.QueryConsensusStateHeightsResponse;
                    toAminoMsg(message: _163.QueryConsensusStateHeightsResponse): _163.QueryConsensusStateHeightsResponseAminoMsg;
                    fromProtoMsg(message: _163.QueryConsensusStateHeightsResponseProtoMsg): _163.QueryConsensusStateHeightsResponse;
                    toProto(message: _163.QueryConsensusStateHeightsResponse): Uint8Array;
                    toProtoMsg(message: _163.QueryConsensusStateHeightsResponse): _163.QueryConsensusStateHeightsResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    typeUrl: string;
                    encode(message: _163.QueryClientStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.QueryClientStatusRequest;
                    fromPartial(object: Partial<_163.QueryClientStatusRequest>): _163.QueryClientStatusRequest;
                    fromAmino(object: _163.QueryClientStatusRequestAmino): _163.QueryClientStatusRequest;
                    toAmino(message: _163.QueryClientStatusRequest): _163.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _163.QueryClientStatusRequestAminoMsg): _163.QueryClientStatusRequest;
                    toAminoMsg(message: _163.QueryClientStatusRequest): _163.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _163.QueryClientStatusRequestProtoMsg): _163.QueryClientStatusRequest;
                    toProto(message: _163.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _163.QueryClientStatusRequest): _163.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    typeUrl: string;
                    encode(message: _163.QueryClientStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.QueryClientStatusResponse;
                    fromPartial(object: Partial<_163.QueryClientStatusResponse>): _163.QueryClientStatusResponse;
                    fromAmino(object: _163.QueryClientStatusResponseAmino): _163.QueryClientStatusResponse;
                    toAmino(message: _163.QueryClientStatusResponse): _163.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _163.QueryClientStatusResponseAminoMsg): _163.QueryClientStatusResponse;
                    toAminoMsg(message: _163.QueryClientStatusResponse): _163.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _163.QueryClientStatusResponseProtoMsg): _163.QueryClientStatusResponse;
                    toProto(message: _163.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _163.QueryClientStatusResponse): _163.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    typeUrl: string;
                    encode(_: _163.QueryClientParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.QueryClientParamsRequest;
                    fromPartial(_: Partial<_163.QueryClientParamsRequest>): _163.QueryClientParamsRequest;
                    fromAmino(_: _163.QueryClientParamsRequestAmino): _163.QueryClientParamsRequest;
                    toAmino(_: _163.QueryClientParamsRequest): _163.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _163.QueryClientParamsRequestAminoMsg): _163.QueryClientParamsRequest;
                    toAminoMsg(message: _163.QueryClientParamsRequest): _163.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _163.QueryClientParamsRequestProtoMsg): _163.QueryClientParamsRequest;
                    toProto(message: _163.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _163.QueryClientParamsRequest): _163.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    typeUrl: string;
                    encode(message: _163.QueryClientParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.QueryClientParamsResponse;
                    fromPartial(object: Partial<_163.QueryClientParamsResponse>): _163.QueryClientParamsResponse;
                    fromAmino(object: _163.QueryClientParamsResponseAmino): _163.QueryClientParamsResponse;
                    toAmino(message: _163.QueryClientParamsResponse): _163.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _163.QueryClientParamsResponseAminoMsg): _163.QueryClientParamsResponse;
                    toAminoMsg(message: _163.QueryClientParamsResponse): _163.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _163.QueryClientParamsResponseProtoMsg): _163.QueryClientParamsResponse;
                    toProto(message: _163.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _163.QueryClientParamsResponse): _163.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    typeUrl: string;
                    encode(_: _163.QueryUpgradedClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.QueryUpgradedClientStateRequest;
                    fromPartial(_: Partial<_163.QueryUpgradedClientStateRequest>): _163.QueryUpgradedClientStateRequest;
                    fromAmino(_: _163.QueryUpgradedClientStateRequestAmino): _163.QueryUpgradedClientStateRequest;
                    toAmino(_: _163.QueryUpgradedClientStateRequest): _163.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _163.QueryUpgradedClientStateRequestAminoMsg): _163.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _163.QueryUpgradedClientStateRequest): _163.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _163.QueryUpgradedClientStateRequestProtoMsg): _163.QueryUpgradedClientStateRequest;
                    toProto(message: _163.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _163.QueryUpgradedClientStateRequest): _163.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    typeUrl: string;
                    encode(message: _163.QueryUpgradedClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.QueryUpgradedClientStateResponse;
                    fromPartial(object: Partial<_163.QueryUpgradedClientStateResponse>): _163.QueryUpgradedClientStateResponse;
                    fromAmino(object: _163.QueryUpgradedClientStateResponseAmino): _163.QueryUpgradedClientStateResponse;
                    toAmino(message: _163.QueryUpgradedClientStateResponse): _163.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _163.QueryUpgradedClientStateResponseAminoMsg): _163.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _163.QueryUpgradedClientStateResponse): _163.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _163.QueryUpgradedClientStateResponseProtoMsg): _163.QueryUpgradedClientStateResponse;
                    toProto(message: _163.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _163.QueryUpgradedClientStateResponse): _163.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    typeUrl: string;
                    encode(_: _163.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: Partial<_163.QueryUpgradedConsensusStateRequest>): _163.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _163.QueryUpgradedConsensusStateRequestAmino): _163.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _163.QueryUpgradedConsensusStateRequest): _163.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _163.QueryUpgradedConsensusStateRequestAminoMsg): _163.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _163.QueryUpgradedConsensusStateRequest): _163.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _163.QueryUpgradedConsensusStateRequestProtoMsg): _163.QueryUpgradedConsensusStateRequest;
                    toProto(message: _163.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _163.QueryUpgradedConsensusStateRequest): _163.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _163.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: Partial<_163.QueryUpgradedConsensusStateResponse>): _163.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _163.QueryUpgradedConsensusStateResponseAmino): _163.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _163.QueryUpgradedConsensusStateResponse): _163.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _163.QueryUpgradedConsensusStateResponseAminoMsg): _163.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _163.QueryUpgradedConsensusStateResponse): _163.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _163.QueryUpgradedConsensusStateResponseProtoMsg): _163.QueryUpgradedConsensusStateResponse;
                    toProto(message: _163.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _163.QueryUpgradedConsensusStateResponse): _163.QueryUpgradedConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _162.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.GenesisState;
                    fromPartial(object: Partial<_162.GenesisState>): _162.GenesisState;
                    fromAmino(object: _162.GenesisStateAmino): _162.GenesisState;
                    toAmino(message: _162.GenesisState): _162.GenesisStateAmino;
                    fromAminoMsg(object: _162.GenesisStateAminoMsg): _162.GenesisState;
                    toAminoMsg(message: _162.GenesisState): _162.GenesisStateAminoMsg;
                    fromProtoMsg(message: _162.GenesisStateProtoMsg): _162.GenesisState;
                    toProto(message: _162.GenesisState): Uint8Array;
                    toProtoMsg(message: _162.GenesisState): _162.GenesisStateProtoMsg;
                };
                GenesisMetadata: {
                    typeUrl: string;
                    encode(message: _162.GenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.GenesisMetadata;
                    fromPartial(object: Partial<_162.GenesisMetadata>): _162.GenesisMetadata;
                    fromAmino(object: _162.GenesisMetadataAmino): _162.GenesisMetadata;
                    toAmino(message: _162.GenesisMetadata): _162.GenesisMetadataAmino;
                    fromAminoMsg(object: _162.GenesisMetadataAminoMsg): _162.GenesisMetadata;
                    toAminoMsg(message: _162.GenesisMetadata): _162.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _162.GenesisMetadataProtoMsg): _162.GenesisMetadata;
                    toProto(message: _162.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _162.GenesisMetadata): _162.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    typeUrl: string;
                    encode(message: _162.IdentifiedGenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.IdentifiedGenesisMetadata;
                    fromPartial(object: Partial<_162.IdentifiedGenesisMetadata>): _162.IdentifiedGenesisMetadata;
                    fromAmino(object: _162.IdentifiedGenesisMetadataAmino): _162.IdentifiedGenesisMetadata;
                    toAmino(message: _162.IdentifiedGenesisMetadata): _162.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _162.IdentifiedGenesisMetadataAminoMsg): _162.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _162.IdentifiedGenesisMetadata): _162.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _162.IdentifiedGenesisMetadataProtoMsg): _162.IdentifiedGenesisMetadata;
                    toProto(message: _162.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _162.IdentifiedGenesisMetadata): _162.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    typeUrl: string;
                    encode(message: _161.IdentifiedClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.IdentifiedClientState;
                    fromPartial(object: Partial<_161.IdentifiedClientState>): _161.IdentifiedClientState;
                    fromAmino(object: _161.IdentifiedClientStateAmino): _161.IdentifiedClientState;
                    toAmino(message: _161.IdentifiedClientState): _161.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _161.IdentifiedClientStateAminoMsg): _161.IdentifiedClientState;
                    toAminoMsg(message: _161.IdentifiedClientState): _161.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _161.IdentifiedClientStateProtoMsg): _161.IdentifiedClientState;
                    toProto(message: _161.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _161.IdentifiedClientState): _161.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    encode(message: _161.ConsensusStateWithHeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.ConsensusStateWithHeight;
                    fromPartial(object: Partial<_161.ConsensusStateWithHeight>): _161.ConsensusStateWithHeight;
                    fromAmino(object: _161.ConsensusStateWithHeightAmino): _161.ConsensusStateWithHeight;
                    toAmino(message: _161.ConsensusStateWithHeight): _161.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _161.ConsensusStateWithHeightAminoMsg): _161.ConsensusStateWithHeight;
                    toAminoMsg(message: _161.ConsensusStateWithHeight): _161.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _161.ConsensusStateWithHeightProtoMsg): _161.ConsensusStateWithHeight;
                    toProto(message: _161.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _161.ConsensusStateWithHeight): _161.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    encode(message: _161.ClientConsensusStates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.ClientConsensusStates;
                    fromPartial(object: Partial<_161.ClientConsensusStates>): _161.ClientConsensusStates;
                    fromAmino(object: _161.ClientConsensusStatesAmino): _161.ClientConsensusStates;
                    toAmino(message: _161.ClientConsensusStates): _161.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _161.ClientConsensusStatesAminoMsg): _161.ClientConsensusStates;
                    toAminoMsg(message: _161.ClientConsensusStates): _161.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _161.ClientConsensusStatesProtoMsg): _161.ClientConsensusStates;
                    toProto(message: _161.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _161.ClientConsensusStates): _161.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    encode(message: _161.ClientUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.ClientUpdateProposal;
                    fromPartial(object: Partial<_161.ClientUpdateProposal>): _161.ClientUpdateProposal;
                    fromAmino(object: _161.ClientUpdateProposalAmino): _161.ClientUpdateProposal;
                    toAmino(message: _161.ClientUpdateProposal): _161.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _161.ClientUpdateProposalAminoMsg): _161.ClientUpdateProposal;
                    toAminoMsg(message: _161.ClientUpdateProposal): _161.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _161.ClientUpdateProposalProtoMsg): _161.ClientUpdateProposal;
                    toProto(message: _161.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _161.ClientUpdateProposal): _161.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    encode(message: _161.UpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.UpgradeProposal;
                    fromPartial(object: Partial<_161.UpgradeProposal>): _161.UpgradeProposal;
                    fromAmino(object: _161.UpgradeProposalAmino): _161.UpgradeProposal;
                    toAmino(message: _161.UpgradeProposal): _161.UpgradeProposalAmino;
                    fromAminoMsg(object: _161.UpgradeProposalAminoMsg): _161.UpgradeProposal;
                    toAminoMsg(message: _161.UpgradeProposal): _161.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _161.UpgradeProposalProtoMsg): _161.UpgradeProposal;
                    toProto(message: _161.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _161.UpgradeProposal): _161.UpgradeProposalProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    encode(message: _161.Height, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.Height;
                    fromPartial(object: Partial<_161.Height>): _161.Height;
                    fromAmino(object: _161.HeightAmino): _161.Height;
                    toAmino(message: _161.Height): _161.HeightAmino;
                    fromAminoMsg(object: _161.HeightAminoMsg): _161.Height;
                    toAminoMsg(message: _161.Height): _161.HeightAminoMsg;
                    fromProtoMsg(message: _161.HeightProtoMsg): _161.Height;
                    toProto(message: _161.Height): Uint8Array;
                    toProtoMsg(message: _161.Height): _161.HeightProtoMsg;
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
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    typeUrl: string;
                    encode(message: _165.MerkleRoot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.MerkleRoot;
                    fromPartial(object: Partial<_165.MerkleRoot>): _165.MerkleRoot;
                    fromAmino(object: _165.MerkleRootAmino): _165.MerkleRoot;
                    toAmino(message: _165.MerkleRoot): _165.MerkleRootAmino;
                    fromAminoMsg(object: _165.MerkleRootAminoMsg): _165.MerkleRoot;
                    toAminoMsg(message: _165.MerkleRoot): _165.MerkleRootAminoMsg;
                    fromProtoMsg(message: _165.MerkleRootProtoMsg): _165.MerkleRoot;
                    toProto(message: _165.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _165.MerkleRoot): _165.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    typeUrl: string;
                    encode(message: _165.MerklePrefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.MerklePrefix;
                    fromPartial(object: Partial<_165.MerklePrefix>): _165.MerklePrefix;
                    fromAmino(object: _165.MerklePrefixAmino): _165.MerklePrefix;
                    toAmino(message: _165.MerklePrefix): _165.MerklePrefixAmino;
                    fromAminoMsg(object: _165.MerklePrefixAminoMsg): _165.MerklePrefix;
                    toAminoMsg(message: _165.MerklePrefix): _165.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _165.MerklePrefixProtoMsg): _165.MerklePrefix;
                    toProto(message: _165.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _165.MerklePrefix): _165.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    typeUrl: string;
                    encode(message: _165.MerklePath, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.MerklePath;
                    fromPartial(object: Partial<_165.MerklePath>): _165.MerklePath;
                    fromAmino(object: _165.MerklePathAmino): _165.MerklePath;
                    toAmino(message: _165.MerklePath): _165.MerklePathAmino;
                    fromAminoMsg(object: _165.MerklePathAminoMsg): _165.MerklePath;
                    toAminoMsg(message: _165.MerklePath): _165.MerklePathAminoMsg;
                    fromProtoMsg(message: _165.MerklePathProtoMsg): _165.MerklePath;
                    toProto(message: _165.MerklePath): Uint8Array;
                    toProtoMsg(message: _165.MerklePath): _165.MerklePathProtoMsg;
                };
                MerkleProof: {
                    typeUrl: string;
                    encode(message: _165.MerkleProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.MerkleProof;
                    fromPartial(object: Partial<_165.MerkleProof>): _165.MerkleProof;
                    fromAmino(object: _165.MerkleProofAmino): _165.MerkleProof;
                    toAmino(message: _165.MerkleProof): _165.MerkleProofAmino;
                    fromAminoMsg(object: _165.MerkleProofAminoMsg): _165.MerkleProof;
                    toAminoMsg(message: _165.MerkleProof): _165.MerkleProofAminoMsg;
                    fromProtoMsg(message: _165.MerkleProofProtoMsg): _165.MerkleProof;
                    toProto(message: _165.MerkleProof): Uint8Array;
                    toProtoMsg(message: _165.MerkleProof): _165.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _354.MsgClientImpl;
                QueryClientImpl: typeof _348.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _168.QueryConnectionRequest): Promise<_168.QueryConnectionResponse>;
                    connections(request?: _168.QueryConnectionsRequest): Promise<_168.QueryConnectionsResponse>;
                    clientConnections(request: _168.QueryClientConnectionsRequest): Promise<_168.QueryClientConnectionsResponse>;
                    connectionClientState(request: _168.QueryConnectionClientStateRequest): Promise<_168.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _168.QueryConnectionConsensusStateRequest): Promise<_168.QueryConnectionConsensusStateResponse>;
                    connectionParams(request?: _168.QueryConnectionParamsRequest): Promise<_168.QueryConnectionParamsResponse>;
                };
                registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _169.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _169.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _169.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _169.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _169.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _169.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _169.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _169.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _169.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _169.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _169.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _169.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _169.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _169.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _169.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _169.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _169.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _169.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _169.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _169.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _169.MsgConnectionOpenInit) => _169.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _169.MsgConnectionOpenInitAmino) => _169.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _169.MsgConnectionOpenTry) => _169.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _169.MsgConnectionOpenTryAmino) => _169.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _169.MsgConnectionOpenAck) => _169.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _169.MsgConnectionOpenAckAmino) => _169.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _169.MsgConnectionOpenConfirm) => _169.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _169.MsgConnectionOpenConfirmAmino) => _169.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    typeUrl: string;
                    encode(message: _169.MsgConnectionOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.MsgConnectionOpenInit;
                    fromPartial(object: Partial<_169.MsgConnectionOpenInit>): _169.MsgConnectionOpenInit;
                    fromAmino(object: _169.MsgConnectionOpenInitAmino): _169.MsgConnectionOpenInit;
                    toAmino(message: _169.MsgConnectionOpenInit): _169.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _169.MsgConnectionOpenInitAminoMsg): _169.MsgConnectionOpenInit;
                    toAminoMsg(message: _169.MsgConnectionOpenInit): _169.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _169.MsgConnectionOpenInitProtoMsg): _169.MsgConnectionOpenInit;
                    toProto(message: _169.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _169.MsgConnectionOpenInit): _169.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    typeUrl: string;
                    encode(_: _169.MsgConnectionOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.MsgConnectionOpenInitResponse;
                    fromPartial(_: Partial<_169.MsgConnectionOpenInitResponse>): _169.MsgConnectionOpenInitResponse;
                    fromAmino(_: _169.MsgConnectionOpenInitResponseAmino): _169.MsgConnectionOpenInitResponse;
                    toAmino(_: _169.MsgConnectionOpenInitResponse): _169.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _169.MsgConnectionOpenInitResponseAminoMsg): _169.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _169.MsgConnectionOpenInitResponse): _169.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _169.MsgConnectionOpenInitResponseProtoMsg): _169.MsgConnectionOpenInitResponse;
                    toProto(message: _169.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _169.MsgConnectionOpenInitResponse): _169.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    typeUrl: string;
                    encode(message: _169.MsgConnectionOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.MsgConnectionOpenTry;
                    fromPartial(object: Partial<_169.MsgConnectionOpenTry>): _169.MsgConnectionOpenTry;
                    fromAmino(object: _169.MsgConnectionOpenTryAmino): _169.MsgConnectionOpenTry;
                    toAmino(message: _169.MsgConnectionOpenTry): _169.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _169.MsgConnectionOpenTryAminoMsg): _169.MsgConnectionOpenTry;
                    toAminoMsg(message: _169.MsgConnectionOpenTry): _169.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _169.MsgConnectionOpenTryProtoMsg): _169.MsgConnectionOpenTry;
                    toProto(message: _169.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _169.MsgConnectionOpenTry): _169.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    typeUrl: string;
                    encode(_: _169.MsgConnectionOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.MsgConnectionOpenTryResponse;
                    fromPartial(_: Partial<_169.MsgConnectionOpenTryResponse>): _169.MsgConnectionOpenTryResponse;
                    fromAmino(_: _169.MsgConnectionOpenTryResponseAmino): _169.MsgConnectionOpenTryResponse;
                    toAmino(_: _169.MsgConnectionOpenTryResponse): _169.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _169.MsgConnectionOpenTryResponseAminoMsg): _169.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _169.MsgConnectionOpenTryResponse): _169.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _169.MsgConnectionOpenTryResponseProtoMsg): _169.MsgConnectionOpenTryResponse;
                    toProto(message: _169.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _169.MsgConnectionOpenTryResponse): _169.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    typeUrl: string;
                    encode(message: _169.MsgConnectionOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.MsgConnectionOpenAck;
                    fromPartial(object: Partial<_169.MsgConnectionOpenAck>): _169.MsgConnectionOpenAck;
                    fromAmino(object: _169.MsgConnectionOpenAckAmino): _169.MsgConnectionOpenAck;
                    toAmino(message: _169.MsgConnectionOpenAck): _169.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _169.MsgConnectionOpenAckAminoMsg): _169.MsgConnectionOpenAck;
                    toAminoMsg(message: _169.MsgConnectionOpenAck): _169.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _169.MsgConnectionOpenAckProtoMsg): _169.MsgConnectionOpenAck;
                    toProto(message: _169.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _169.MsgConnectionOpenAck): _169.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _169.MsgConnectionOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.MsgConnectionOpenAckResponse;
                    fromPartial(_: Partial<_169.MsgConnectionOpenAckResponse>): _169.MsgConnectionOpenAckResponse;
                    fromAmino(_: _169.MsgConnectionOpenAckResponseAmino): _169.MsgConnectionOpenAckResponse;
                    toAmino(_: _169.MsgConnectionOpenAckResponse): _169.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _169.MsgConnectionOpenAckResponseAminoMsg): _169.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _169.MsgConnectionOpenAckResponse): _169.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _169.MsgConnectionOpenAckResponseProtoMsg): _169.MsgConnectionOpenAckResponse;
                    toProto(message: _169.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _169.MsgConnectionOpenAckResponse): _169.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    typeUrl: string;
                    encode(message: _169.MsgConnectionOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.MsgConnectionOpenConfirm;
                    fromPartial(object: Partial<_169.MsgConnectionOpenConfirm>): _169.MsgConnectionOpenConfirm;
                    fromAmino(object: _169.MsgConnectionOpenConfirmAmino): _169.MsgConnectionOpenConfirm;
                    toAmino(message: _169.MsgConnectionOpenConfirm): _169.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _169.MsgConnectionOpenConfirmAminoMsg): _169.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _169.MsgConnectionOpenConfirm): _169.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _169.MsgConnectionOpenConfirmProtoMsg): _169.MsgConnectionOpenConfirm;
                    toProto(message: _169.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _169.MsgConnectionOpenConfirm): _169.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _169.MsgConnectionOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: Partial<_169.MsgConnectionOpenConfirmResponse>): _169.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _169.MsgConnectionOpenConfirmResponseAmino): _169.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _169.MsgConnectionOpenConfirmResponse): _169.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _169.MsgConnectionOpenConfirmResponseAminoMsg): _169.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _169.MsgConnectionOpenConfirmResponse): _169.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _169.MsgConnectionOpenConfirmResponseProtoMsg): _169.MsgConnectionOpenConfirmResponse;
                    toProto(message: _169.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _169.MsgConnectionOpenConfirmResponse): _169.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    typeUrl: string;
                    encode(message: _168.QueryConnectionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.QueryConnectionRequest;
                    fromPartial(object: Partial<_168.QueryConnectionRequest>): _168.QueryConnectionRequest;
                    fromAmino(object: _168.QueryConnectionRequestAmino): _168.QueryConnectionRequest;
                    toAmino(message: _168.QueryConnectionRequest): _168.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _168.QueryConnectionRequestAminoMsg): _168.QueryConnectionRequest;
                    toAminoMsg(message: _168.QueryConnectionRequest): _168.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _168.QueryConnectionRequestProtoMsg): _168.QueryConnectionRequest;
                    toProto(message: _168.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _168.QueryConnectionRequest): _168.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    typeUrl: string;
                    encode(message: _168.QueryConnectionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.QueryConnectionResponse;
                    fromPartial(object: Partial<_168.QueryConnectionResponse>): _168.QueryConnectionResponse;
                    fromAmino(object: _168.QueryConnectionResponseAmino): _168.QueryConnectionResponse;
                    toAmino(message: _168.QueryConnectionResponse): _168.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _168.QueryConnectionResponseAminoMsg): _168.QueryConnectionResponse;
                    toAminoMsg(message: _168.QueryConnectionResponse): _168.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _168.QueryConnectionResponseProtoMsg): _168.QueryConnectionResponse;
                    toProto(message: _168.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _168.QueryConnectionResponse): _168.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _168.QueryConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.QueryConnectionsRequest;
                    fromPartial(object: Partial<_168.QueryConnectionsRequest>): _168.QueryConnectionsRequest;
                    fromAmino(object: _168.QueryConnectionsRequestAmino): _168.QueryConnectionsRequest;
                    toAmino(message: _168.QueryConnectionsRequest): _168.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _168.QueryConnectionsRequestAminoMsg): _168.QueryConnectionsRequest;
                    toAminoMsg(message: _168.QueryConnectionsRequest): _168.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _168.QueryConnectionsRequestProtoMsg): _168.QueryConnectionsRequest;
                    toProto(message: _168.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _168.QueryConnectionsRequest): _168.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _168.QueryConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.QueryConnectionsResponse;
                    fromPartial(object: Partial<_168.QueryConnectionsResponse>): _168.QueryConnectionsResponse;
                    fromAmino(object: _168.QueryConnectionsResponseAmino): _168.QueryConnectionsResponse;
                    toAmino(message: _168.QueryConnectionsResponse): _168.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _168.QueryConnectionsResponseAminoMsg): _168.QueryConnectionsResponse;
                    toAminoMsg(message: _168.QueryConnectionsResponse): _168.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _168.QueryConnectionsResponseProtoMsg): _168.QueryConnectionsResponse;
                    toProto(message: _168.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _168.QueryConnectionsResponse): _168.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _168.QueryClientConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.QueryClientConnectionsRequest;
                    fromPartial(object: Partial<_168.QueryClientConnectionsRequest>): _168.QueryClientConnectionsRequest;
                    fromAmino(object: _168.QueryClientConnectionsRequestAmino): _168.QueryClientConnectionsRequest;
                    toAmino(message: _168.QueryClientConnectionsRequest): _168.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _168.QueryClientConnectionsRequestAminoMsg): _168.QueryClientConnectionsRequest;
                    toAminoMsg(message: _168.QueryClientConnectionsRequest): _168.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _168.QueryClientConnectionsRequestProtoMsg): _168.QueryClientConnectionsRequest;
                    toProto(message: _168.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _168.QueryClientConnectionsRequest): _168.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _168.QueryClientConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.QueryClientConnectionsResponse;
                    fromPartial(object: Partial<_168.QueryClientConnectionsResponse>): _168.QueryClientConnectionsResponse;
                    fromAmino(object: _168.QueryClientConnectionsResponseAmino): _168.QueryClientConnectionsResponse;
                    toAmino(message: _168.QueryClientConnectionsResponse): _168.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _168.QueryClientConnectionsResponseAminoMsg): _168.QueryClientConnectionsResponse;
                    toAminoMsg(message: _168.QueryClientConnectionsResponse): _168.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _168.QueryClientConnectionsResponseProtoMsg): _168.QueryClientConnectionsResponse;
                    toProto(message: _168.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _168.QueryClientConnectionsResponse): _168.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    typeUrl: string;
                    encode(message: _168.QueryConnectionClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.QueryConnectionClientStateRequest;
                    fromPartial(object: Partial<_168.QueryConnectionClientStateRequest>): _168.QueryConnectionClientStateRequest;
                    fromAmino(object: _168.QueryConnectionClientStateRequestAmino): _168.QueryConnectionClientStateRequest;
                    toAmino(message: _168.QueryConnectionClientStateRequest): _168.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _168.QueryConnectionClientStateRequestAminoMsg): _168.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _168.QueryConnectionClientStateRequest): _168.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _168.QueryConnectionClientStateRequestProtoMsg): _168.QueryConnectionClientStateRequest;
                    toProto(message: _168.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _168.QueryConnectionClientStateRequest): _168.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    typeUrl: string;
                    encode(message: _168.QueryConnectionClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.QueryConnectionClientStateResponse;
                    fromPartial(object: Partial<_168.QueryConnectionClientStateResponse>): _168.QueryConnectionClientStateResponse;
                    fromAmino(object: _168.QueryConnectionClientStateResponseAmino): _168.QueryConnectionClientStateResponse;
                    toAmino(message: _168.QueryConnectionClientStateResponse): _168.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _168.QueryConnectionClientStateResponseAminoMsg): _168.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _168.QueryConnectionClientStateResponse): _168.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _168.QueryConnectionClientStateResponseProtoMsg): _168.QueryConnectionClientStateResponse;
                    toProto(message: _168.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _168.QueryConnectionClientStateResponse): _168.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _168.QueryConnectionConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.QueryConnectionConsensusStateRequest;
                    fromPartial(object: Partial<_168.QueryConnectionConsensusStateRequest>): _168.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _168.QueryConnectionConsensusStateRequestAmino): _168.QueryConnectionConsensusStateRequest;
                    toAmino(message: _168.QueryConnectionConsensusStateRequest): _168.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _168.QueryConnectionConsensusStateRequestAminoMsg): _168.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _168.QueryConnectionConsensusStateRequest): _168.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _168.QueryConnectionConsensusStateRequestProtoMsg): _168.QueryConnectionConsensusStateRequest;
                    toProto(message: _168.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _168.QueryConnectionConsensusStateRequest): _168.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _168.QueryConnectionConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.QueryConnectionConsensusStateResponse;
                    fromPartial(object: Partial<_168.QueryConnectionConsensusStateResponse>): _168.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _168.QueryConnectionConsensusStateResponseAmino): _168.QueryConnectionConsensusStateResponse;
                    toAmino(message: _168.QueryConnectionConsensusStateResponse): _168.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _168.QueryConnectionConsensusStateResponseAminoMsg): _168.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _168.QueryConnectionConsensusStateResponse): _168.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _168.QueryConnectionConsensusStateResponseProtoMsg): _168.QueryConnectionConsensusStateResponse;
                    toProto(message: _168.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _168.QueryConnectionConsensusStateResponse): _168.QueryConnectionConsensusStateResponseProtoMsg;
                };
                QueryConnectionParamsRequest: {
                    typeUrl: string;
                    encode(_: _168.QueryConnectionParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.QueryConnectionParamsRequest;
                    fromPartial(_: Partial<_168.QueryConnectionParamsRequest>): _168.QueryConnectionParamsRequest;
                    fromAmino(_: _168.QueryConnectionParamsRequestAmino): _168.QueryConnectionParamsRequest;
                    toAmino(_: _168.QueryConnectionParamsRequest): _168.QueryConnectionParamsRequestAmino;
                    fromAminoMsg(object: _168.QueryConnectionParamsRequestAminoMsg): _168.QueryConnectionParamsRequest;
                    toAminoMsg(message: _168.QueryConnectionParamsRequest): _168.QueryConnectionParamsRequestAminoMsg;
                    fromProtoMsg(message: _168.QueryConnectionParamsRequestProtoMsg): _168.QueryConnectionParamsRequest;
                    toProto(message: _168.QueryConnectionParamsRequest): Uint8Array;
                    toProtoMsg(message: _168.QueryConnectionParamsRequest): _168.QueryConnectionParamsRequestProtoMsg;
                };
                QueryConnectionParamsResponse: {
                    typeUrl: string;
                    encode(message: _168.QueryConnectionParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.QueryConnectionParamsResponse;
                    fromPartial(object: Partial<_168.QueryConnectionParamsResponse>): _168.QueryConnectionParamsResponse;
                    fromAmino(object: _168.QueryConnectionParamsResponseAmino): _168.QueryConnectionParamsResponse;
                    toAmino(message: _168.QueryConnectionParamsResponse): _168.QueryConnectionParamsResponseAmino;
                    fromAminoMsg(object: _168.QueryConnectionParamsResponseAminoMsg): _168.QueryConnectionParamsResponse;
                    toAminoMsg(message: _168.QueryConnectionParamsResponse): _168.QueryConnectionParamsResponseAminoMsg;
                    fromProtoMsg(message: _168.QueryConnectionParamsResponseProtoMsg): _168.QueryConnectionParamsResponse;
                    toProto(message: _168.QueryConnectionParamsResponse): Uint8Array;
                    toProtoMsg(message: _168.QueryConnectionParamsResponse): _168.QueryConnectionParamsResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _167.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.GenesisState;
                    fromPartial(object: Partial<_167.GenesisState>): _167.GenesisState;
                    fromAmino(object: _167.GenesisStateAmino): _167.GenesisState;
                    toAmino(message: _167.GenesisState): _167.GenesisStateAmino;
                    fromAminoMsg(object: _167.GenesisStateAminoMsg): _167.GenesisState;
                    toAminoMsg(message: _167.GenesisState): _167.GenesisStateAminoMsg;
                    fromProtoMsg(message: _167.GenesisStateProtoMsg): _167.GenesisState;
                    toProto(message: _167.GenesisState): Uint8Array;
                    toProtoMsg(message: _167.GenesisState): _167.GenesisStateProtoMsg;
                };
                stateFromJSON(object: any): _166.State;
                stateToJSON(object: _166.State): string;
                State: typeof _166.State;
                StateSDKType: typeof _166.State;
                StateAmino: typeof _166.State;
                ConnectionEnd: {
                    typeUrl: string;
                    encode(message: _166.ConnectionEnd, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.ConnectionEnd;
                    fromPartial(object: Partial<_166.ConnectionEnd>): _166.ConnectionEnd;
                    fromAmino(object: _166.ConnectionEndAmino): _166.ConnectionEnd;
                    toAmino(message: _166.ConnectionEnd): _166.ConnectionEndAmino;
                    fromAminoMsg(object: _166.ConnectionEndAminoMsg): _166.ConnectionEnd;
                    toAminoMsg(message: _166.ConnectionEnd): _166.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _166.ConnectionEndProtoMsg): _166.ConnectionEnd;
                    toProto(message: _166.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _166.ConnectionEnd): _166.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    typeUrl: string;
                    encode(message: _166.IdentifiedConnection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.IdentifiedConnection;
                    fromPartial(object: Partial<_166.IdentifiedConnection>): _166.IdentifiedConnection;
                    fromAmino(object: _166.IdentifiedConnectionAmino): _166.IdentifiedConnection;
                    toAmino(message: _166.IdentifiedConnection): _166.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _166.IdentifiedConnectionAminoMsg): _166.IdentifiedConnection;
                    toAminoMsg(message: _166.IdentifiedConnection): _166.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _166.IdentifiedConnectionProtoMsg): _166.IdentifiedConnection;
                    toProto(message: _166.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _166.IdentifiedConnection): _166.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _166.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.Counterparty;
                    fromPartial(object: Partial<_166.Counterparty>): _166.Counterparty;
                    fromAmino(object: _166.CounterpartyAmino): _166.Counterparty;
                    toAmino(message: _166.Counterparty): _166.CounterpartyAmino;
                    fromAminoMsg(object: _166.CounterpartyAminoMsg): _166.Counterparty;
                    toAminoMsg(message: _166.Counterparty): _166.CounterpartyAminoMsg;
                    fromProtoMsg(message: _166.CounterpartyProtoMsg): _166.Counterparty;
                    toProto(message: _166.Counterparty): Uint8Array;
                    toProtoMsg(message: _166.Counterparty): _166.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    typeUrl: string;
                    encode(message: _166.ClientPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.ClientPaths;
                    fromPartial(object: Partial<_166.ClientPaths>): _166.ClientPaths;
                    fromAmino(object: _166.ClientPathsAmino): _166.ClientPaths;
                    toAmino(message: _166.ClientPaths): _166.ClientPathsAmino;
                    fromAminoMsg(object: _166.ClientPathsAminoMsg): _166.ClientPaths;
                    toAminoMsg(message: _166.ClientPaths): _166.ClientPathsAminoMsg;
                    fromProtoMsg(message: _166.ClientPathsProtoMsg): _166.ClientPaths;
                    toProto(message: _166.ClientPaths): Uint8Array;
                    toProtoMsg(message: _166.ClientPaths): _166.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    typeUrl: string;
                    encode(message: _166.ConnectionPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.ConnectionPaths;
                    fromPartial(object: Partial<_166.ConnectionPaths>): _166.ConnectionPaths;
                    fromAmino(object: _166.ConnectionPathsAmino): _166.ConnectionPaths;
                    toAmino(message: _166.ConnectionPaths): _166.ConnectionPathsAmino;
                    fromAminoMsg(object: _166.ConnectionPathsAminoMsg): _166.ConnectionPaths;
                    toAminoMsg(message: _166.ConnectionPaths): _166.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _166.ConnectionPathsProtoMsg): _166.ConnectionPaths;
                    toProto(message: _166.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _166.ConnectionPaths): _166.ConnectionPathsProtoMsg;
                };
                Version: {
                    typeUrl: string;
                    encode(message: _166.Version, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.Version;
                    fromPartial(object: Partial<_166.Version>): _166.Version;
                    fromAmino(object: _166.VersionAmino): _166.Version;
                    toAmino(message: _166.Version): _166.VersionAmino;
                    fromAminoMsg(object: _166.VersionAminoMsg): _166.Version;
                    toAminoMsg(message: _166.Version): _166.VersionAminoMsg;
                    fromProtoMsg(message: _166.VersionProtoMsg): _166.Version;
                    toProto(message: _166.Version): Uint8Array;
                    toProtoMsg(message: _166.Version): _166.VersionProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _166.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.Params;
                    fromPartial(object: Partial<_166.Params>): _166.Params;
                    fromAmino(object: _166.ParamsAmino): _166.Params;
                    toAmino(message: _166.Params): _166.ParamsAmino;
                    fromAminoMsg(object: _166.ParamsAminoMsg): _166.Params;
                    toAminoMsg(message: _166.Params): _166.ParamsAminoMsg;
                    fromProtoMsg(message: _166.ParamsProtoMsg): _166.Params;
                    toProto(message: _166.Params): Uint8Array;
                    toProtoMsg(message: _166.Params): _166.ParamsProtoMsg;
                };
            };
        }
        namespace types {
            const v1: {
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
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v2: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _171.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.ClientState;
                    fromPartial(object: Partial<_171.ClientState>): _171.ClientState;
                    fromAmino(object: _171.ClientStateAmino): _171.ClientState;
                    toAmino(message: _171.ClientState): _171.ClientStateAmino;
                    fromAminoMsg(object: _171.ClientStateAminoMsg): _171.ClientState;
                    toAminoMsg(message: _171.ClientState): _171.ClientStateAminoMsg;
                    fromProtoMsg(message: _171.ClientStateProtoMsg): _171.ClientState;
                    toProto(message: _171.ClientState): Uint8Array;
                    toProtoMsg(message: _171.ClientState): _171.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v2: {
                dataTypeFromJSON(object: any): _172.DataType;
                dataTypeToJSON(object: _172.DataType): string;
                DataType: typeof _172.DataType;
                DataTypeSDKType: typeof _172.DataType;
                DataTypeAmino: typeof _172.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _172.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.ClientState;
                    fromPartial(object: Partial<_172.ClientState>): _172.ClientState;
                    fromAmino(object: _172.ClientStateAmino): _172.ClientState;
                    toAmino(message: _172.ClientState): _172.ClientStateAmino;
                    fromAminoMsg(object: _172.ClientStateAminoMsg): _172.ClientState;
                    toAminoMsg(message: _172.ClientState): _172.ClientStateAminoMsg;
                    fromProtoMsg(message: _172.ClientStateProtoMsg): _172.ClientState;
                    toProto(message: _172.ClientState): Uint8Array;
                    toProtoMsg(message: _172.ClientState): _172.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _172.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.ConsensusState;
                    fromPartial(object: Partial<_172.ConsensusState>): _172.ConsensusState;
                    fromAmino(object: _172.ConsensusStateAmino): _172.ConsensusState;
                    toAmino(message: _172.ConsensusState): _172.ConsensusStateAmino;
                    fromAminoMsg(object: _172.ConsensusStateAminoMsg): _172.ConsensusState;
                    toAminoMsg(message: _172.ConsensusState): _172.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _172.ConsensusStateProtoMsg): _172.ConsensusState;
                    toProto(message: _172.ConsensusState): Uint8Array;
                    toProtoMsg(message: _172.ConsensusState): _172.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _172.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.Header;
                    fromPartial(object: Partial<_172.Header>): _172.Header;
                    fromAmino(object: _172.HeaderAmino): _172.Header;
                    toAmino(message: _172.Header): _172.HeaderAmino;
                    fromAminoMsg(object: _172.HeaderAminoMsg): _172.Header;
                    toAminoMsg(message: _172.Header): _172.HeaderAminoMsg;
                    fromProtoMsg(message: _172.HeaderProtoMsg): _172.Header;
                    toProto(message: _172.Header): Uint8Array;
                    toProtoMsg(message: _172.Header): _172.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _172.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.Misbehaviour;
                    fromPartial(object: Partial<_172.Misbehaviour>): _172.Misbehaviour;
                    fromAmino(object: _172.MisbehaviourAmino): _172.Misbehaviour;
                    toAmino(message: _172.Misbehaviour): _172.MisbehaviourAmino;
                    fromAminoMsg(object: _172.MisbehaviourAminoMsg): _172.Misbehaviour;
                    toAminoMsg(message: _172.Misbehaviour): _172.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _172.MisbehaviourProtoMsg): _172.Misbehaviour;
                    toProto(message: _172.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _172.Misbehaviour): _172.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _172.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.SignatureAndData;
                    fromPartial(object: Partial<_172.SignatureAndData>): _172.SignatureAndData;
                    fromAmino(object: _172.SignatureAndDataAmino): _172.SignatureAndData;
                    toAmino(message: _172.SignatureAndData): _172.SignatureAndDataAmino;
                    fromAminoMsg(object: _172.SignatureAndDataAminoMsg): _172.SignatureAndData;
                    toAminoMsg(message: _172.SignatureAndData): _172.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _172.SignatureAndDataProtoMsg): _172.SignatureAndData;
                    toProto(message: _172.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _172.SignatureAndData): _172.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _172.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.TimestampedSignatureData;
                    fromPartial(object: Partial<_172.TimestampedSignatureData>): _172.TimestampedSignatureData;
                    fromAmino(object: _172.TimestampedSignatureDataAmino): _172.TimestampedSignatureData;
                    toAmino(message: _172.TimestampedSignatureData): _172.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _172.TimestampedSignatureDataAminoMsg): _172.TimestampedSignatureData;
                    toAminoMsg(message: _172.TimestampedSignatureData): _172.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _172.TimestampedSignatureDataProtoMsg): _172.TimestampedSignatureData;
                    toProto(message: _172.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _172.TimestampedSignatureData): _172.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _172.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.SignBytes;
                    fromPartial(object: Partial<_172.SignBytes>): _172.SignBytes;
                    fromAmino(object: _172.SignBytesAmino): _172.SignBytes;
                    toAmino(message: _172.SignBytes): _172.SignBytesAmino;
                    fromAminoMsg(object: _172.SignBytesAminoMsg): _172.SignBytes;
                    toAminoMsg(message: _172.SignBytes): _172.SignBytesAminoMsg;
                    fromProtoMsg(message: _172.SignBytesProtoMsg): _172.SignBytes;
                    toProto(message: _172.SignBytes): Uint8Array;
                    toProtoMsg(message: _172.SignBytes): _172.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _172.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.HeaderData;
                    fromPartial(object: Partial<_172.HeaderData>): _172.HeaderData;
                    fromAmino(object: _172.HeaderDataAmino): _172.HeaderData;
                    toAmino(message: _172.HeaderData): _172.HeaderDataAmino;
                    fromAminoMsg(object: _172.HeaderDataAminoMsg): _172.HeaderData;
                    toAminoMsg(message: _172.HeaderData): _172.HeaderDataAminoMsg;
                    fromProtoMsg(message: _172.HeaderDataProtoMsg): _172.HeaderData;
                    toProto(message: _172.HeaderData): Uint8Array;
                    toProtoMsg(message: _172.HeaderData): _172.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _172.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.ClientStateData;
                    fromPartial(object: Partial<_172.ClientStateData>): _172.ClientStateData;
                    fromAmino(object: _172.ClientStateDataAmino): _172.ClientStateData;
                    toAmino(message: _172.ClientStateData): _172.ClientStateDataAmino;
                    fromAminoMsg(object: _172.ClientStateDataAminoMsg): _172.ClientStateData;
                    toAminoMsg(message: _172.ClientStateData): _172.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _172.ClientStateDataProtoMsg): _172.ClientStateData;
                    toProto(message: _172.ClientStateData): Uint8Array;
                    toProtoMsg(message: _172.ClientStateData): _172.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _172.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.ConsensusStateData;
                    fromPartial(object: Partial<_172.ConsensusStateData>): _172.ConsensusStateData;
                    fromAmino(object: _172.ConsensusStateDataAmino): _172.ConsensusStateData;
                    toAmino(message: _172.ConsensusStateData): _172.ConsensusStateDataAmino;
                    fromAminoMsg(object: _172.ConsensusStateDataAminoMsg): _172.ConsensusStateData;
                    toAminoMsg(message: _172.ConsensusStateData): _172.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _172.ConsensusStateDataProtoMsg): _172.ConsensusStateData;
                    toProto(message: _172.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _172.ConsensusStateData): _172.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _172.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.ConnectionStateData;
                    fromPartial(object: Partial<_172.ConnectionStateData>): _172.ConnectionStateData;
                    fromAmino(object: _172.ConnectionStateDataAmino): _172.ConnectionStateData;
                    toAmino(message: _172.ConnectionStateData): _172.ConnectionStateDataAmino;
                    fromAminoMsg(object: _172.ConnectionStateDataAminoMsg): _172.ConnectionStateData;
                    toAminoMsg(message: _172.ConnectionStateData): _172.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _172.ConnectionStateDataProtoMsg): _172.ConnectionStateData;
                    toProto(message: _172.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _172.ConnectionStateData): _172.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _172.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.ChannelStateData;
                    fromPartial(object: Partial<_172.ChannelStateData>): _172.ChannelStateData;
                    fromAmino(object: _172.ChannelStateDataAmino): _172.ChannelStateData;
                    toAmino(message: _172.ChannelStateData): _172.ChannelStateDataAmino;
                    fromAminoMsg(object: _172.ChannelStateDataAminoMsg): _172.ChannelStateData;
                    toAminoMsg(message: _172.ChannelStateData): _172.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _172.ChannelStateDataProtoMsg): _172.ChannelStateData;
                    toProto(message: _172.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _172.ChannelStateData): _172.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _172.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.PacketCommitmentData;
                    fromPartial(object: Partial<_172.PacketCommitmentData>): _172.PacketCommitmentData;
                    fromAmino(object: _172.PacketCommitmentDataAmino): _172.PacketCommitmentData;
                    toAmino(message: _172.PacketCommitmentData): _172.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _172.PacketCommitmentDataAminoMsg): _172.PacketCommitmentData;
                    toAminoMsg(message: _172.PacketCommitmentData): _172.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _172.PacketCommitmentDataProtoMsg): _172.PacketCommitmentData;
                    toProto(message: _172.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _172.PacketCommitmentData): _172.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _172.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.PacketAcknowledgementData;
                    fromPartial(object: Partial<_172.PacketAcknowledgementData>): _172.PacketAcknowledgementData;
                    fromAmino(object: _172.PacketAcknowledgementDataAmino): _172.PacketAcknowledgementData;
                    toAmino(message: _172.PacketAcknowledgementData): _172.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _172.PacketAcknowledgementDataAminoMsg): _172.PacketAcknowledgementData;
                    toAminoMsg(message: _172.PacketAcknowledgementData): _172.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _172.PacketAcknowledgementDataProtoMsg): _172.PacketAcknowledgementData;
                    toProto(message: _172.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _172.PacketAcknowledgementData): _172.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _172.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_172.PacketReceiptAbsenceData>): _172.PacketReceiptAbsenceData;
                    fromAmino(object: _172.PacketReceiptAbsenceDataAmino): _172.PacketReceiptAbsenceData;
                    toAmino(message: _172.PacketReceiptAbsenceData): _172.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _172.PacketReceiptAbsenceDataAminoMsg): _172.PacketReceiptAbsenceData;
                    toAminoMsg(message: _172.PacketReceiptAbsenceData): _172.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _172.PacketReceiptAbsenceDataProtoMsg): _172.PacketReceiptAbsenceData;
                    toProto(message: _172.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _172.PacketReceiptAbsenceData): _172.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _172.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.NextSequenceRecvData;
                    fromPartial(object: Partial<_172.NextSequenceRecvData>): _172.NextSequenceRecvData;
                    fromAmino(object: _172.NextSequenceRecvDataAmino): _172.NextSequenceRecvData;
                    toAmino(message: _172.NextSequenceRecvData): _172.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _172.NextSequenceRecvDataAminoMsg): _172.NextSequenceRecvData;
                    toAminoMsg(message: _172.NextSequenceRecvData): _172.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _172.NextSequenceRecvDataProtoMsg): _172.NextSequenceRecvData;
                    toProto(message: _172.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _172.NextSequenceRecvData): _172.NextSequenceRecvDataProtoMsg;
                };
            };
            const v3: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _173.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.ClientState;
                    fromPartial(object: Partial<_173.ClientState>): _173.ClientState;
                    fromAmino(object: _173.ClientStateAmino): _173.ClientState;
                    toAmino(message: _173.ClientState): _173.ClientStateAmino;
                    fromAminoMsg(object: _173.ClientStateAminoMsg): _173.ClientState;
                    toAminoMsg(message: _173.ClientState): _173.ClientStateAminoMsg;
                    fromProtoMsg(message: _173.ClientStateProtoMsg): _173.ClientState;
                    toProto(message: _173.ClientState): Uint8Array;
                    toProtoMsg(message: _173.ClientState): _173.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _173.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.ConsensusState;
                    fromPartial(object: Partial<_173.ConsensusState>): _173.ConsensusState;
                    fromAmino(object: _173.ConsensusStateAmino): _173.ConsensusState;
                    toAmino(message: _173.ConsensusState): _173.ConsensusStateAmino;
                    fromAminoMsg(object: _173.ConsensusStateAminoMsg): _173.ConsensusState;
                    toAminoMsg(message: _173.ConsensusState): _173.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _173.ConsensusStateProtoMsg): _173.ConsensusState;
                    toProto(message: _173.ConsensusState): Uint8Array;
                    toProtoMsg(message: _173.ConsensusState): _173.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _173.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.Header;
                    fromPartial(object: Partial<_173.Header>): _173.Header;
                    fromAmino(object: _173.HeaderAmino): _173.Header;
                    toAmino(message: _173.Header): _173.HeaderAmino;
                    fromAminoMsg(object: _173.HeaderAminoMsg): _173.Header;
                    toAminoMsg(message: _173.Header): _173.HeaderAminoMsg;
                    fromProtoMsg(message: _173.HeaderProtoMsg): _173.Header;
                    toProto(message: _173.Header): Uint8Array;
                    toProtoMsg(message: _173.Header): _173.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _173.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.Misbehaviour;
                    fromPartial(object: Partial<_173.Misbehaviour>): _173.Misbehaviour;
                    fromAmino(object: _173.MisbehaviourAmino): _173.Misbehaviour;
                    toAmino(message: _173.Misbehaviour): _173.MisbehaviourAmino;
                    fromAminoMsg(object: _173.MisbehaviourAminoMsg): _173.Misbehaviour;
                    toAminoMsg(message: _173.Misbehaviour): _173.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _173.MisbehaviourProtoMsg): _173.Misbehaviour;
                    toProto(message: _173.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _173.Misbehaviour): _173.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _173.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.SignatureAndData;
                    fromPartial(object: Partial<_173.SignatureAndData>): _173.SignatureAndData;
                    fromAmino(object: _173.SignatureAndDataAmino): _173.SignatureAndData;
                    toAmino(message: _173.SignatureAndData): _173.SignatureAndDataAmino;
                    fromAminoMsg(object: _173.SignatureAndDataAminoMsg): _173.SignatureAndData;
                    toAminoMsg(message: _173.SignatureAndData): _173.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _173.SignatureAndDataProtoMsg): _173.SignatureAndData;
                    toProto(message: _173.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _173.SignatureAndData): _173.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _173.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.TimestampedSignatureData;
                    fromPartial(object: Partial<_173.TimestampedSignatureData>): _173.TimestampedSignatureData;
                    fromAmino(object: _173.TimestampedSignatureDataAmino): _173.TimestampedSignatureData;
                    toAmino(message: _173.TimestampedSignatureData): _173.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _173.TimestampedSignatureDataAminoMsg): _173.TimestampedSignatureData;
                    toAminoMsg(message: _173.TimestampedSignatureData): _173.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _173.TimestampedSignatureDataProtoMsg): _173.TimestampedSignatureData;
                    toProto(message: _173.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _173.TimestampedSignatureData): _173.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _173.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.SignBytes;
                    fromPartial(object: Partial<_173.SignBytes>): _173.SignBytes;
                    fromAmino(object: _173.SignBytesAmino): _173.SignBytes;
                    toAmino(message: _173.SignBytes): _173.SignBytesAmino;
                    fromAminoMsg(object: _173.SignBytesAminoMsg): _173.SignBytes;
                    toAminoMsg(message: _173.SignBytes): _173.SignBytesAminoMsg;
                    fromProtoMsg(message: _173.SignBytesProtoMsg): _173.SignBytes;
                    toProto(message: _173.SignBytes): Uint8Array;
                    toProtoMsg(message: _173.SignBytes): _173.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _173.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.HeaderData;
                    fromPartial(object: Partial<_173.HeaderData>): _173.HeaderData;
                    fromAmino(object: _173.HeaderDataAmino): _173.HeaderData;
                    toAmino(message: _173.HeaderData): _173.HeaderDataAmino;
                    fromAminoMsg(object: _173.HeaderDataAminoMsg): _173.HeaderData;
                    toAminoMsg(message: _173.HeaderData): _173.HeaderDataAminoMsg;
                    fromProtoMsg(message: _173.HeaderDataProtoMsg): _173.HeaderData;
                    toProto(message: _173.HeaderData): Uint8Array;
                    toProtoMsg(message: _173.HeaderData): _173.HeaderDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _174.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.ClientState;
                    fromPartial(object: Partial<_174.ClientState>): _174.ClientState;
                    fromAmino(object: _174.ClientStateAmino): _174.ClientState;
                    toAmino(message: _174.ClientState): _174.ClientStateAmino;
                    fromAminoMsg(object: _174.ClientStateAminoMsg): _174.ClientState;
                    toAminoMsg(message: _174.ClientState): _174.ClientStateAminoMsg;
                    fromProtoMsg(message: _174.ClientStateProtoMsg): _174.ClientState;
                    toProto(message: _174.ClientState): Uint8Array;
                    toProtoMsg(message: _174.ClientState): _174.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _174.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.ConsensusState;
                    fromPartial(object: Partial<_174.ConsensusState>): _174.ConsensusState;
                    fromAmino(object: _174.ConsensusStateAmino): _174.ConsensusState;
                    toAmino(message: _174.ConsensusState): _174.ConsensusStateAmino;
                    fromAminoMsg(object: _174.ConsensusStateAminoMsg): _174.ConsensusState;
                    toAminoMsg(message: _174.ConsensusState): _174.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _174.ConsensusStateProtoMsg): _174.ConsensusState;
                    toProto(message: _174.ConsensusState): Uint8Array;
                    toProtoMsg(message: _174.ConsensusState): _174.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _174.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.Misbehaviour;
                    fromPartial(object: Partial<_174.Misbehaviour>): _174.Misbehaviour;
                    fromAmino(object: _174.MisbehaviourAmino): _174.Misbehaviour;
                    toAmino(message: _174.Misbehaviour): _174.MisbehaviourAmino;
                    fromAminoMsg(object: _174.MisbehaviourAminoMsg): _174.Misbehaviour;
                    toAminoMsg(message: _174.Misbehaviour): _174.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _174.MisbehaviourProtoMsg): _174.Misbehaviour;
                    toProto(message: _174.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _174.Misbehaviour): _174.MisbehaviourProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _174.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.Header;
                    fromPartial(object: Partial<_174.Header>): _174.Header;
                    fromAmino(object: _174.HeaderAmino): _174.Header;
                    toAmino(message: _174.Header): _174.HeaderAmino;
                    fromAminoMsg(object: _174.HeaderAminoMsg): _174.Header;
                    toAminoMsg(message: _174.Header): _174.HeaderAminoMsg;
                    fromProtoMsg(message: _174.HeaderProtoMsg): _174.Header;
                    toProto(message: _174.Header): Uint8Array;
                    toProtoMsg(message: _174.Header): _174.HeaderProtoMsg;
                };
                Fraction: {
                    typeUrl: string;
                    encode(message: _174.Fraction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.Fraction;
                    fromPartial(object: Partial<_174.Fraction>): _174.Fraction;
                    fromAmino(object: _174.FractionAmino): _174.Fraction;
                    toAmino(message: _174.Fraction): _174.FractionAmino;
                    fromAminoMsg(object: _174.FractionAminoMsg): _174.Fraction;
                    toAminoMsg(message: _174.Fraction): _174.FractionAminoMsg;
                    fromProtoMsg(message: _174.FractionProtoMsg): _174.Fraction;
                    toProto(message: _174.Fraction): Uint8Array;
                    toProtoMsg(message: _174.Fraction): _174.FractionProtoMsg;
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
                        v1: _349.MsgClientImpl;
                    };
                    interchain_accounts: {
                        controller: {
                            v1: _350.MsgClientImpl;
                        };
                    };
                    transfer: {
                        v1: _351.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _352.MsgClientImpl;
                    };
                    client: {
                        v1: _353.MsgClientImpl;
                    };
                    connection: {
                        v1: _354.MsgClientImpl;
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
                            incentivizedPackets(request: _140.QueryIncentivizedPacketsRequest): Promise<_140.QueryIncentivizedPacketsResponse>;
                            incentivizedPacket(request: _140.QueryIncentivizedPacketRequest): Promise<_140.QueryIncentivizedPacketResponse>;
                            incentivizedPacketsForChannel(request: _140.QueryIncentivizedPacketsForChannelRequest): Promise<_140.QueryIncentivizedPacketsForChannelResponse>;
                            totalRecvFees(request: _140.QueryTotalRecvFeesRequest): Promise<_140.QueryTotalRecvFeesResponse>;
                            totalAckFees(request: _140.QueryTotalAckFeesRequest): Promise<_140.QueryTotalAckFeesResponse>;
                            totalTimeoutFees(request: _140.QueryTotalTimeoutFeesRequest): Promise<_140.QueryTotalTimeoutFeesResponse>;
                            payee(request: _140.QueryPayeeRequest): Promise<_140.QueryPayeeResponse>;
                            counterpartyPayee(request: _140.QueryCounterpartyPayeeRequest): Promise<_140.QueryCounterpartyPayeeResponse>;
                            feeEnabledChannels(request: _140.QueryFeeEnabledChannelsRequest): Promise<_140.QueryFeeEnabledChannelsResponse>;
                            feeEnabledChannel(request: _140.QueryFeeEnabledChannelRequest): Promise<_140.QueryFeeEnabledChannelResponse>;
                        };
                    };
                    interchain_accounts: {
                        controller: {
                            v1: {
                                interchainAccount(request: _143.QueryInterchainAccountRequest): Promise<_143.QueryInterchainAccountResponse>;
                                params(request?: _143.QueryParamsRequest): Promise<_143.QueryParamsResponse>;
                            };
                        };
                        host: {
                            v1: {
                                params(request?: _147.QueryParamsRequest): Promise<_147.QueryParamsResponse>;
                            };
                        };
                    };
                    transfer: {
                        v1: {
                            denomTraces(request?: _153.QueryDenomTracesRequest): Promise<_153.QueryDenomTracesResponse>;
                            denomTrace(request: _153.QueryDenomTraceRequest): Promise<_153.QueryDenomTraceResponse>;
                            params(request?: _153.QueryParamsRequest): Promise<_153.QueryParamsResponse>;
                            denomHash(request: _153.QueryDenomHashRequest): Promise<_153.QueryDenomHashResponse>;
                            escrowAddress(request: _153.QueryEscrowAddressRequest): Promise<_153.QueryEscrowAddressResponse>;
                            totalEscrowForDenom(request: _153.QueryTotalEscrowForDenomRequest): Promise<_153.QueryTotalEscrowForDenomResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _159.QueryChannelRequest): Promise<_159.QueryChannelResponse>;
                            channels(request?: _159.QueryChannelsRequest): Promise<_159.QueryChannelsResponse>;
                            connectionChannels(request: _159.QueryConnectionChannelsRequest): Promise<_159.QueryConnectionChannelsResponse>;
                            channelClientState(request: _159.QueryChannelClientStateRequest): Promise<_159.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _159.QueryChannelConsensusStateRequest): Promise<_159.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _159.QueryPacketCommitmentRequest): Promise<_159.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _159.QueryPacketCommitmentsRequest): Promise<_159.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _159.QueryPacketReceiptRequest): Promise<_159.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _159.QueryPacketAcknowledgementRequest): Promise<_159.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _159.QueryPacketAcknowledgementsRequest): Promise<_159.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _159.QueryUnreceivedPacketsRequest): Promise<_159.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _159.QueryUnreceivedAcksRequest): Promise<_159.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _159.QueryNextSequenceReceiveRequest): Promise<_159.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _163.QueryClientStateRequest): Promise<_163.QueryClientStateResponse>;
                            clientStates(request?: _163.QueryClientStatesRequest): Promise<_163.QueryClientStatesResponse>;
                            consensusState(request: _163.QueryConsensusStateRequest): Promise<_163.QueryConsensusStateResponse>;
                            consensusStates(request: _163.QueryConsensusStatesRequest): Promise<_163.QueryConsensusStatesResponse>;
                            consensusStateHeights(request: _163.QueryConsensusStateHeightsRequest): Promise<_163.QueryConsensusStateHeightsResponse>;
                            clientStatus(request: _163.QueryClientStatusRequest): Promise<_163.QueryClientStatusResponse>;
                            clientParams(request?: _163.QueryClientParamsRequest): Promise<_163.QueryClientParamsResponse>;
                            upgradedClientState(request?: _163.QueryUpgradedClientStateRequest): Promise<_163.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _163.QueryUpgradedConsensusStateRequest): Promise<_163.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _168.QueryConnectionRequest): Promise<_168.QueryConnectionResponse>;
                            connections(request?: _168.QueryConnectionsRequest): Promise<_168.QueryConnectionsResponse>;
                            clientConnections(request: _168.QueryClientConnectionsRequest): Promise<_168.QueryClientConnectionsResponse>;
                            connectionClientState(request: _168.QueryConnectionClientStateRequest): Promise<_168.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _168.QueryConnectionConsensusStateRequest): Promise<_168.QueryConnectionConsensusStateResponse>;
                            connectionParams(request?: _168.QueryConnectionParamsRequest): Promise<_168.QueryConnectionParamsResponse>;
                        };
                    };
                };
            };
        }>;
    };
}
