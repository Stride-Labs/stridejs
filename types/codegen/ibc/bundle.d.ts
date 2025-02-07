import * as _84 from "./applications/fee/v1/ack";
import * as _85 from "./applications/fee/v1/fee";
import * as _86 from "./applications/fee/v1/genesis";
import * as _87 from "./applications/fee/v1/metadata";
import * as _88 from "./applications/fee/v1/query";
import * as _89 from "./applications/fee/v1/tx";
import * as _90 from "./applications/interchain_accounts/controller/v1/controller";
import * as _91 from "./applications/interchain_accounts/controller/v1/query";
import * as _92 from "./applications/interchain_accounts/controller/v1/tx";
import * as _93 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _94 from "./applications/interchain_accounts/host/v1/host";
import * as _95 from "./applications/interchain_accounts/host/v1/query";
import * as _96 from "./applications/interchain_accounts/v1/account";
import * as _97 from "./applications/interchain_accounts/v1/metadata";
import * as _98 from "./applications/interchain_accounts/v1/packet";
import * as _99 from "./applications/transfer/v1/authz";
import * as _100 from "./applications/transfer/v1/genesis";
import * as _101 from "./applications/transfer/v1/query";
import * as _102 from "./applications/transfer/v1/transfer";
import * as _103 from "./applications/transfer/v1/tx";
import * as _104 from "./applications/transfer/v2/packet";
import * as _105 from "./core/channel/v1/channel";
import * as _106 from "./core/channel/v1/genesis";
import * as _107 from "./core/channel/v1/query";
import * as _108 from "./core/channel/v1/tx";
import * as _109 from "./core/client/v1/client";
import * as _110 from "./core/client/v1/genesis";
import * as _111 from "./core/client/v1/query";
import * as _112 from "./core/client/v1/tx";
import * as _113 from "./core/commitment/v1/commitment";
import * as _114 from "./core/connection/v1/connection";
import * as _115 from "./core/connection/v1/genesis";
import * as _116 from "./core/connection/v1/query";
import * as _117 from "./core/connection/v1/tx";
import * as _118 from "./core/types/v1/genesis";
import * as _119 from "./lightclients/localhost/v2/localhost";
import * as _120 from "./lightclients/solomachine/v2/solomachine";
import * as _121 from "./lightclients/solomachine/v3/solomachine";
import * as _122 from "./lightclients/tendermint/v1/tendermint";
import * as _251 from "./applications/fee/v1/query.rpc.Query";
import * as _252 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _253 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _254 from "./applications/transfer/v1/query.rpc.Query";
import * as _255 from "./core/channel/v1/query.rpc.Query";
import * as _256 from "./core/client/v1/query.rpc.Query";
import * as _257 from "./core/connection/v1/query.rpc.Query";
import * as _258 from "./applications/fee/v1/tx.rpc.msg";
import * as _259 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _260 from "./applications/transfer/v1/tx.rpc.msg";
import * as _261 from "./core/channel/v1/tx.rpc.msg";
import * as _262 from "./core/client/v1/tx.rpc.msg";
import * as _263 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace fee {
            const v1: {
                MsgClientImpl: typeof _258.MsgClientImpl;
                QueryClientImpl: typeof _251.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    incentivizedPackets(request: _88.QueryIncentivizedPacketsRequest): Promise<_88.QueryIncentivizedPacketsResponse>;
                    incentivizedPacket(request: _88.QueryIncentivizedPacketRequest): Promise<_88.QueryIncentivizedPacketResponse>;
                    incentivizedPacketsForChannel(request: _88.QueryIncentivizedPacketsForChannelRequest): Promise<_88.QueryIncentivizedPacketsForChannelResponse>;
                    totalRecvFees(request: _88.QueryTotalRecvFeesRequest): Promise<_88.QueryTotalRecvFeesResponse>;
                    totalAckFees(request: _88.QueryTotalAckFeesRequest): Promise<_88.QueryTotalAckFeesResponse>;
                    totalTimeoutFees(request: _88.QueryTotalTimeoutFeesRequest): Promise<_88.QueryTotalTimeoutFeesResponse>;
                    payee(request: _88.QueryPayeeRequest): Promise<_88.QueryPayeeResponse>;
                    counterpartyPayee(request: _88.QueryCounterpartyPayeeRequest): Promise<_88.QueryCounterpartyPayeeResponse>;
                    feeEnabledChannels(request: _88.QueryFeeEnabledChannelsRequest): Promise<_88.QueryFeeEnabledChannelsResponse>;
                    feeEnabledChannel(request: _88.QueryFeeEnabledChannelRequest): Promise<_88.QueryFeeEnabledChannelResponse>;
                };
                registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        registerPayee(value: _89.MsgRegisterPayee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        registerCounterpartyPayee(value: _89.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        payPacketFee(value: _89.MsgPayPacketFee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        payPacketFeeAsync(value: _89.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        registerPayee(value: _89.MsgRegisterPayee): {
                            typeUrl: string;
                            value: _89.MsgRegisterPayee;
                        };
                        registerCounterpartyPayee(value: _89.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: _89.MsgRegisterCounterpartyPayee;
                        };
                        payPacketFee(value: _89.MsgPayPacketFee): {
                            typeUrl: string;
                            value: _89.MsgPayPacketFee;
                        };
                        payPacketFeeAsync(value: _89.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: _89.MsgPayPacketFeeAsync;
                        };
                    };
                    fromPartial: {
                        registerPayee(value: _89.MsgRegisterPayee): {
                            typeUrl: string;
                            value: _89.MsgRegisterPayee;
                        };
                        registerCounterpartyPayee(value: _89.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: _89.MsgRegisterCounterpartyPayee;
                        };
                        payPacketFee(value: _89.MsgPayPacketFee): {
                            typeUrl: string;
                            value: _89.MsgPayPacketFee;
                        };
                        payPacketFeeAsync(value: _89.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: _89.MsgPayPacketFeeAsync;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.fee.v1.MsgRegisterPayee": {
                        aminoType: string;
                        toAmino: (message: _89.MsgRegisterPayee) => _89.MsgRegisterPayeeAmino;
                        fromAmino: (object: _89.MsgRegisterPayeeAmino) => _89.MsgRegisterPayee;
                    };
                    "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee": {
                        aminoType: string;
                        toAmino: (message: _89.MsgRegisterCounterpartyPayee) => _89.MsgRegisterCounterpartyPayeeAmino;
                        fromAmino: (object: _89.MsgRegisterCounterpartyPayeeAmino) => _89.MsgRegisterCounterpartyPayee;
                    };
                    "/ibc.applications.fee.v1.MsgPayPacketFee": {
                        aminoType: string;
                        toAmino: (message: _89.MsgPayPacketFee) => _89.MsgPayPacketFeeAmino;
                        fromAmino: (object: _89.MsgPayPacketFeeAmino) => _89.MsgPayPacketFee;
                    };
                    "/ibc.applications.fee.v1.MsgPayPacketFeeAsync": {
                        aminoType: string;
                        toAmino: (message: _89.MsgPayPacketFeeAsync) => _89.MsgPayPacketFeeAsyncAmino;
                        fromAmino: (object: _89.MsgPayPacketFeeAsyncAmino) => _89.MsgPayPacketFeeAsync;
                    };
                };
                MsgRegisterPayee: {
                    typeUrl: string;
                    encode(message: _89.MsgRegisterPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.MsgRegisterPayee;
                    fromPartial(object: Partial<_89.MsgRegisterPayee>): _89.MsgRegisterPayee;
                    fromAmino(object: _89.MsgRegisterPayeeAmino): _89.MsgRegisterPayee;
                    toAmino(message: _89.MsgRegisterPayee): _89.MsgRegisterPayeeAmino;
                    fromAminoMsg(object: _89.MsgRegisterPayeeAminoMsg): _89.MsgRegisterPayee;
                    toAminoMsg(message: _89.MsgRegisterPayee): _89.MsgRegisterPayeeAminoMsg;
                    fromProtoMsg(message: _89.MsgRegisterPayeeProtoMsg): _89.MsgRegisterPayee;
                    toProto(message: _89.MsgRegisterPayee): Uint8Array;
                    toProtoMsg(message: _89.MsgRegisterPayee): _89.MsgRegisterPayeeProtoMsg;
                };
                MsgRegisterPayeeResponse: {
                    typeUrl: string;
                    encode(_: _89.MsgRegisterPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.MsgRegisterPayeeResponse;
                    fromPartial(_: Partial<_89.MsgRegisterPayeeResponse>): _89.MsgRegisterPayeeResponse;
                    fromAmino(_: _89.MsgRegisterPayeeResponseAmino): _89.MsgRegisterPayeeResponse;
                    toAmino(_: _89.MsgRegisterPayeeResponse): _89.MsgRegisterPayeeResponseAmino;
                    fromAminoMsg(object: _89.MsgRegisterPayeeResponseAminoMsg): _89.MsgRegisterPayeeResponse;
                    toAminoMsg(message: _89.MsgRegisterPayeeResponse): _89.MsgRegisterPayeeResponseAminoMsg;
                    fromProtoMsg(message: _89.MsgRegisterPayeeResponseProtoMsg): _89.MsgRegisterPayeeResponse;
                    toProto(message: _89.MsgRegisterPayeeResponse): Uint8Array;
                    toProtoMsg(message: _89.MsgRegisterPayeeResponse): _89.MsgRegisterPayeeResponseProtoMsg;
                };
                MsgRegisterCounterpartyPayee: {
                    typeUrl: string;
                    encode(message: _89.MsgRegisterCounterpartyPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.MsgRegisterCounterpartyPayee;
                    fromPartial(object: Partial<_89.MsgRegisterCounterpartyPayee>): _89.MsgRegisterCounterpartyPayee;
                    fromAmino(object: _89.MsgRegisterCounterpartyPayeeAmino): _89.MsgRegisterCounterpartyPayee;
                    toAmino(message: _89.MsgRegisterCounterpartyPayee): _89.MsgRegisterCounterpartyPayeeAmino;
                    fromAminoMsg(object: _89.MsgRegisterCounterpartyPayeeAminoMsg): _89.MsgRegisterCounterpartyPayee;
                    toAminoMsg(message: _89.MsgRegisterCounterpartyPayee): _89.MsgRegisterCounterpartyPayeeAminoMsg;
                    fromProtoMsg(message: _89.MsgRegisterCounterpartyPayeeProtoMsg): _89.MsgRegisterCounterpartyPayee;
                    toProto(message: _89.MsgRegisterCounterpartyPayee): Uint8Array;
                    toProtoMsg(message: _89.MsgRegisterCounterpartyPayee): _89.MsgRegisterCounterpartyPayeeProtoMsg;
                };
                MsgRegisterCounterpartyPayeeResponse: {
                    typeUrl: string;
                    encode(_: _89.MsgRegisterCounterpartyPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.MsgRegisterCounterpartyPayeeResponse;
                    fromPartial(_: Partial<_89.MsgRegisterCounterpartyPayeeResponse>): _89.MsgRegisterCounterpartyPayeeResponse;
                    fromAmino(_: _89.MsgRegisterCounterpartyPayeeResponseAmino): _89.MsgRegisterCounterpartyPayeeResponse;
                    toAmino(_: _89.MsgRegisterCounterpartyPayeeResponse): _89.MsgRegisterCounterpartyPayeeResponseAmino;
                    fromAminoMsg(object: _89.MsgRegisterCounterpartyPayeeResponseAminoMsg): _89.MsgRegisterCounterpartyPayeeResponse;
                    toAminoMsg(message: _89.MsgRegisterCounterpartyPayeeResponse): _89.MsgRegisterCounterpartyPayeeResponseAminoMsg;
                    fromProtoMsg(message: _89.MsgRegisterCounterpartyPayeeResponseProtoMsg): _89.MsgRegisterCounterpartyPayeeResponse;
                    toProto(message: _89.MsgRegisterCounterpartyPayeeResponse): Uint8Array;
                    toProtoMsg(message: _89.MsgRegisterCounterpartyPayeeResponse): _89.MsgRegisterCounterpartyPayeeResponseProtoMsg;
                };
                MsgPayPacketFee: {
                    typeUrl: string;
                    encode(message: _89.MsgPayPacketFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.MsgPayPacketFee;
                    fromPartial(object: Partial<_89.MsgPayPacketFee>): _89.MsgPayPacketFee;
                    fromAmino(object: _89.MsgPayPacketFeeAmino): _89.MsgPayPacketFee;
                    toAmino(message: _89.MsgPayPacketFee): _89.MsgPayPacketFeeAmino;
                    fromAminoMsg(object: _89.MsgPayPacketFeeAminoMsg): _89.MsgPayPacketFee;
                    toAminoMsg(message: _89.MsgPayPacketFee): _89.MsgPayPacketFeeAminoMsg;
                    fromProtoMsg(message: _89.MsgPayPacketFeeProtoMsg): _89.MsgPayPacketFee;
                    toProto(message: _89.MsgPayPacketFee): Uint8Array;
                    toProtoMsg(message: _89.MsgPayPacketFee): _89.MsgPayPacketFeeProtoMsg;
                };
                MsgPayPacketFeeResponse: {
                    typeUrl: string;
                    encode(_: _89.MsgPayPacketFeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.MsgPayPacketFeeResponse;
                    fromPartial(_: Partial<_89.MsgPayPacketFeeResponse>): _89.MsgPayPacketFeeResponse;
                    fromAmino(_: _89.MsgPayPacketFeeResponseAmino): _89.MsgPayPacketFeeResponse;
                    toAmino(_: _89.MsgPayPacketFeeResponse): _89.MsgPayPacketFeeResponseAmino;
                    fromAminoMsg(object: _89.MsgPayPacketFeeResponseAminoMsg): _89.MsgPayPacketFeeResponse;
                    toAminoMsg(message: _89.MsgPayPacketFeeResponse): _89.MsgPayPacketFeeResponseAminoMsg;
                    fromProtoMsg(message: _89.MsgPayPacketFeeResponseProtoMsg): _89.MsgPayPacketFeeResponse;
                    toProto(message: _89.MsgPayPacketFeeResponse): Uint8Array;
                    toProtoMsg(message: _89.MsgPayPacketFeeResponse): _89.MsgPayPacketFeeResponseProtoMsg;
                };
                MsgPayPacketFeeAsync: {
                    typeUrl: string;
                    encode(message: _89.MsgPayPacketFeeAsync, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.MsgPayPacketFeeAsync;
                    fromPartial(object: Partial<_89.MsgPayPacketFeeAsync>): _89.MsgPayPacketFeeAsync;
                    fromAmino(object: _89.MsgPayPacketFeeAsyncAmino): _89.MsgPayPacketFeeAsync;
                    toAmino(message: _89.MsgPayPacketFeeAsync): _89.MsgPayPacketFeeAsyncAmino;
                    fromAminoMsg(object: _89.MsgPayPacketFeeAsyncAminoMsg): _89.MsgPayPacketFeeAsync;
                    toAminoMsg(message: _89.MsgPayPacketFeeAsync): _89.MsgPayPacketFeeAsyncAminoMsg;
                    fromProtoMsg(message: _89.MsgPayPacketFeeAsyncProtoMsg): _89.MsgPayPacketFeeAsync;
                    toProto(message: _89.MsgPayPacketFeeAsync): Uint8Array;
                    toProtoMsg(message: _89.MsgPayPacketFeeAsync): _89.MsgPayPacketFeeAsyncProtoMsg;
                };
                MsgPayPacketFeeAsyncResponse: {
                    typeUrl: string;
                    encode(_: _89.MsgPayPacketFeeAsyncResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.MsgPayPacketFeeAsyncResponse;
                    fromPartial(_: Partial<_89.MsgPayPacketFeeAsyncResponse>): _89.MsgPayPacketFeeAsyncResponse;
                    fromAmino(_: _89.MsgPayPacketFeeAsyncResponseAmino): _89.MsgPayPacketFeeAsyncResponse;
                    toAmino(_: _89.MsgPayPacketFeeAsyncResponse): _89.MsgPayPacketFeeAsyncResponseAmino;
                    fromAminoMsg(object: _89.MsgPayPacketFeeAsyncResponseAminoMsg): _89.MsgPayPacketFeeAsyncResponse;
                    toAminoMsg(message: _89.MsgPayPacketFeeAsyncResponse): _89.MsgPayPacketFeeAsyncResponseAminoMsg;
                    fromProtoMsg(message: _89.MsgPayPacketFeeAsyncResponseProtoMsg): _89.MsgPayPacketFeeAsyncResponse;
                    toProto(message: _89.MsgPayPacketFeeAsyncResponse): Uint8Array;
                    toProtoMsg(message: _89.MsgPayPacketFeeAsyncResponse): _89.MsgPayPacketFeeAsyncResponseProtoMsg;
                };
                QueryIncentivizedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _88.QueryIncentivizedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.QueryIncentivizedPacketsRequest;
                    fromPartial(object: Partial<_88.QueryIncentivizedPacketsRequest>): _88.QueryIncentivizedPacketsRequest;
                    fromAmino(object: _88.QueryIncentivizedPacketsRequestAmino): _88.QueryIncentivizedPacketsRequest;
                    toAmino(message: _88.QueryIncentivizedPacketsRequest): _88.QueryIncentivizedPacketsRequestAmino;
                    fromAminoMsg(object: _88.QueryIncentivizedPacketsRequestAminoMsg): _88.QueryIncentivizedPacketsRequest;
                    toAminoMsg(message: _88.QueryIncentivizedPacketsRequest): _88.QueryIncentivizedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _88.QueryIncentivizedPacketsRequestProtoMsg): _88.QueryIncentivizedPacketsRequest;
                    toProto(message: _88.QueryIncentivizedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _88.QueryIncentivizedPacketsRequest): _88.QueryIncentivizedPacketsRequestProtoMsg;
                };
                QueryIncentivizedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _88.QueryIncentivizedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.QueryIncentivizedPacketsResponse;
                    fromPartial(object: Partial<_88.QueryIncentivizedPacketsResponse>): _88.QueryIncentivizedPacketsResponse;
                    fromAmino(object: _88.QueryIncentivizedPacketsResponseAmino): _88.QueryIncentivizedPacketsResponse;
                    toAmino(message: _88.QueryIncentivizedPacketsResponse): _88.QueryIncentivizedPacketsResponseAmino;
                    fromAminoMsg(object: _88.QueryIncentivizedPacketsResponseAminoMsg): _88.QueryIncentivizedPacketsResponse;
                    toAminoMsg(message: _88.QueryIncentivizedPacketsResponse): _88.QueryIncentivizedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _88.QueryIncentivizedPacketsResponseProtoMsg): _88.QueryIncentivizedPacketsResponse;
                    toProto(message: _88.QueryIncentivizedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _88.QueryIncentivizedPacketsResponse): _88.QueryIncentivizedPacketsResponseProtoMsg;
                };
                QueryIncentivizedPacketRequest: {
                    typeUrl: string;
                    encode(message: _88.QueryIncentivizedPacketRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.QueryIncentivizedPacketRequest;
                    fromPartial(object: Partial<_88.QueryIncentivizedPacketRequest>): _88.QueryIncentivizedPacketRequest;
                    fromAmino(object: _88.QueryIncentivizedPacketRequestAmino): _88.QueryIncentivizedPacketRequest;
                    toAmino(message: _88.QueryIncentivizedPacketRequest): _88.QueryIncentivizedPacketRequestAmino;
                    fromAminoMsg(object: _88.QueryIncentivizedPacketRequestAminoMsg): _88.QueryIncentivizedPacketRequest;
                    toAminoMsg(message: _88.QueryIncentivizedPacketRequest): _88.QueryIncentivizedPacketRequestAminoMsg;
                    fromProtoMsg(message: _88.QueryIncentivizedPacketRequestProtoMsg): _88.QueryIncentivizedPacketRequest;
                    toProto(message: _88.QueryIncentivizedPacketRequest): Uint8Array;
                    toProtoMsg(message: _88.QueryIncentivizedPacketRequest): _88.QueryIncentivizedPacketRequestProtoMsg;
                };
                QueryIncentivizedPacketResponse: {
                    typeUrl: string;
                    encode(message: _88.QueryIncentivizedPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.QueryIncentivizedPacketResponse;
                    fromPartial(object: Partial<_88.QueryIncentivizedPacketResponse>): _88.QueryIncentivizedPacketResponse;
                    fromAmino(object: _88.QueryIncentivizedPacketResponseAmino): _88.QueryIncentivizedPacketResponse;
                    toAmino(message: _88.QueryIncentivizedPacketResponse): _88.QueryIncentivizedPacketResponseAmino;
                    fromAminoMsg(object: _88.QueryIncentivizedPacketResponseAminoMsg): _88.QueryIncentivizedPacketResponse;
                    toAminoMsg(message: _88.QueryIncentivizedPacketResponse): _88.QueryIncentivizedPacketResponseAminoMsg;
                    fromProtoMsg(message: _88.QueryIncentivizedPacketResponseProtoMsg): _88.QueryIncentivizedPacketResponse;
                    toProto(message: _88.QueryIncentivizedPacketResponse): Uint8Array;
                    toProtoMsg(message: _88.QueryIncentivizedPacketResponse): _88.QueryIncentivizedPacketResponseProtoMsg;
                };
                QueryIncentivizedPacketsForChannelRequest: {
                    typeUrl: string;
                    encode(message: _88.QueryIncentivizedPacketsForChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.QueryIncentivizedPacketsForChannelRequest;
                    fromPartial(object: Partial<_88.QueryIncentivizedPacketsForChannelRequest>): _88.QueryIncentivizedPacketsForChannelRequest;
                    fromAmino(object: _88.QueryIncentivizedPacketsForChannelRequestAmino): _88.QueryIncentivizedPacketsForChannelRequest;
                    toAmino(message: _88.QueryIncentivizedPacketsForChannelRequest): _88.QueryIncentivizedPacketsForChannelRequestAmino;
                    fromAminoMsg(object: _88.QueryIncentivizedPacketsForChannelRequestAminoMsg): _88.QueryIncentivizedPacketsForChannelRequest;
                    toAminoMsg(message: _88.QueryIncentivizedPacketsForChannelRequest): _88.QueryIncentivizedPacketsForChannelRequestAminoMsg;
                    fromProtoMsg(message: _88.QueryIncentivizedPacketsForChannelRequestProtoMsg): _88.QueryIncentivizedPacketsForChannelRequest;
                    toProto(message: _88.QueryIncentivizedPacketsForChannelRequest): Uint8Array;
                    toProtoMsg(message: _88.QueryIncentivizedPacketsForChannelRequest): _88.QueryIncentivizedPacketsForChannelRequestProtoMsg;
                };
                QueryIncentivizedPacketsForChannelResponse: {
                    typeUrl: string;
                    encode(message: _88.QueryIncentivizedPacketsForChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.QueryIncentivizedPacketsForChannelResponse;
                    fromPartial(object: Partial<_88.QueryIncentivizedPacketsForChannelResponse>): _88.QueryIncentivizedPacketsForChannelResponse;
                    fromAmino(object: _88.QueryIncentivizedPacketsForChannelResponseAmino): _88.QueryIncentivizedPacketsForChannelResponse;
                    toAmino(message: _88.QueryIncentivizedPacketsForChannelResponse): _88.QueryIncentivizedPacketsForChannelResponseAmino;
                    fromAminoMsg(object: _88.QueryIncentivizedPacketsForChannelResponseAminoMsg): _88.QueryIncentivizedPacketsForChannelResponse;
                    toAminoMsg(message: _88.QueryIncentivizedPacketsForChannelResponse): _88.QueryIncentivizedPacketsForChannelResponseAminoMsg;
                    fromProtoMsg(message: _88.QueryIncentivizedPacketsForChannelResponseProtoMsg): _88.QueryIncentivizedPacketsForChannelResponse;
                    toProto(message: _88.QueryIncentivizedPacketsForChannelResponse): Uint8Array;
                    toProtoMsg(message: _88.QueryIncentivizedPacketsForChannelResponse): _88.QueryIncentivizedPacketsForChannelResponseProtoMsg;
                };
                QueryTotalRecvFeesRequest: {
                    typeUrl: string;
                    encode(message: _88.QueryTotalRecvFeesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.QueryTotalRecvFeesRequest;
                    fromPartial(object: Partial<_88.QueryTotalRecvFeesRequest>): _88.QueryTotalRecvFeesRequest;
                    fromAmino(object: _88.QueryTotalRecvFeesRequestAmino): _88.QueryTotalRecvFeesRequest;
                    toAmino(message: _88.QueryTotalRecvFeesRequest): _88.QueryTotalRecvFeesRequestAmino;
                    fromAminoMsg(object: _88.QueryTotalRecvFeesRequestAminoMsg): _88.QueryTotalRecvFeesRequest;
                    toAminoMsg(message: _88.QueryTotalRecvFeesRequest): _88.QueryTotalRecvFeesRequestAminoMsg;
                    fromProtoMsg(message: _88.QueryTotalRecvFeesRequestProtoMsg): _88.QueryTotalRecvFeesRequest;
                    toProto(message: _88.QueryTotalRecvFeesRequest): Uint8Array;
                    toProtoMsg(message: _88.QueryTotalRecvFeesRequest): _88.QueryTotalRecvFeesRequestProtoMsg;
                };
                QueryTotalRecvFeesResponse: {
                    typeUrl: string;
                    encode(message: _88.QueryTotalRecvFeesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.QueryTotalRecvFeesResponse;
                    fromPartial(object: Partial<_88.QueryTotalRecvFeesResponse>): _88.QueryTotalRecvFeesResponse;
                    fromAmino(object: _88.QueryTotalRecvFeesResponseAmino): _88.QueryTotalRecvFeesResponse;
                    toAmino(message: _88.QueryTotalRecvFeesResponse): _88.QueryTotalRecvFeesResponseAmino;
                    fromAminoMsg(object: _88.QueryTotalRecvFeesResponseAminoMsg): _88.QueryTotalRecvFeesResponse;
                    toAminoMsg(message: _88.QueryTotalRecvFeesResponse): _88.QueryTotalRecvFeesResponseAminoMsg;
                    fromProtoMsg(message: _88.QueryTotalRecvFeesResponseProtoMsg): _88.QueryTotalRecvFeesResponse;
                    toProto(message: _88.QueryTotalRecvFeesResponse): Uint8Array;
                    toProtoMsg(message: _88.QueryTotalRecvFeesResponse): _88.QueryTotalRecvFeesResponseProtoMsg;
                };
                QueryTotalAckFeesRequest: {
                    typeUrl: string;
                    encode(message: _88.QueryTotalAckFeesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.QueryTotalAckFeesRequest;
                    fromPartial(object: Partial<_88.QueryTotalAckFeesRequest>): _88.QueryTotalAckFeesRequest;
                    fromAmino(object: _88.QueryTotalAckFeesRequestAmino): _88.QueryTotalAckFeesRequest;
                    toAmino(message: _88.QueryTotalAckFeesRequest): _88.QueryTotalAckFeesRequestAmino;
                    fromAminoMsg(object: _88.QueryTotalAckFeesRequestAminoMsg): _88.QueryTotalAckFeesRequest;
                    toAminoMsg(message: _88.QueryTotalAckFeesRequest): _88.QueryTotalAckFeesRequestAminoMsg;
                    fromProtoMsg(message: _88.QueryTotalAckFeesRequestProtoMsg): _88.QueryTotalAckFeesRequest;
                    toProto(message: _88.QueryTotalAckFeesRequest): Uint8Array;
                    toProtoMsg(message: _88.QueryTotalAckFeesRequest): _88.QueryTotalAckFeesRequestProtoMsg;
                };
                QueryTotalAckFeesResponse: {
                    typeUrl: string;
                    encode(message: _88.QueryTotalAckFeesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.QueryTotalAckFeesResponse;
                    fromPartial(object: Partial<_88.QueryTotalAckFeesResponse>): _88.QueryTotalAckFeesResponse;
                    fromAmino(object: _88.QueryTotalAckFeesResponseAmino): _88.QueryTotalAckFeesResponse;
                    toAmino(message: _88.QueryTotalAckFeesResponse): _88.QueryTotalAckFeesResponseAmino;
                    fromAminoMsg(object: _88.QueryTotalAckFeesResponseAminoMsg): _88.QueryTotalAckFeesResponse;
                    toAminoMsg(message: _88.QueryTotalAckFeesResponse): _88.QueryTotalAckFeesResponseAminoMsg;
                    fromProtoMsg(message: _88.QueryTotalAckFeesResponseProtoMsg): _88.QueryTotalAckFeesResponse;
                    toProto(message: _88.QueryTotalAckFeesResponse): Uint8Array;
                    toProtoMsg(message: _88.QueryTotalAckFeesResponse): _88.QueryTotalAckFeesResponseProtoMsg;
                };
                QueryTotalTimeoutFeesRequest: {
                    typeUrl: string;
                    encode(message: _88.QueryTotalTimeoutFeesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.QueryTotalTimeoutFeesRequest;
                    fromPartial(object: Partial<_88.QueryTotalTimeoutFeesRequest>): _88.QueryTotalTimeoutFeesRequest;
                    fromAmino(object: _88.QueryTotalTimeoutFeesRequestAmino): _88.QueryTotalTimeoutFeesRequest;
                    toAmino(message: _88.QueryTotalTimeoutFeesRequest): _88.QueryTotalTimeoutFeesRequestAmino;
                    fromAminoMsg(object: _88.QueryTotalTimeoutFeesRequestAminoMsg): _88.QueryTotalTimeoutFeesRequest;
                    toAminoMsg(message: _88.QueryTotalTimeoutFeesRequest): _88.QueryTotalTimeoutFeesRequestAminoMsg;
                    fromProtoMsg(message: _88.QueryTotalTimeoutFeesRequestProtoMsg): _88.QueryTotalTimeoutFeesRequest;
                    toProto(message: _88.QueryTotalTimeoutFeesRequest): Uint8Array;
                    toProtoMsg(message: _88.QueryTotalTimeoutFeesRequest): _88.QueryTotalTimeoutFeesRequestProtoMsg;
                };
                QueryTotalTimeoutFeesResponse: {
                    typeUrl: string;
                    encode(message: _88.QueryTotalTimeoutFeesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.QueryTotalTimeoutFeesResponse;
                    fromPartial(object: Partial<_88.QueryTotalTimeoutFeesResponse>): _88.QueryTotalTimeoutFeesResponse;
                    fromAmino(object: _88.QueryTotalTimeoutFeesResponseAmino): _88.QueryTotalTimeoutFeesResponse;
                    toAmino(message: _88.QueryTotalTimeoutFeesResponse): _88.QueryTotalTimeoutFeesResponseAmino;
                    fromAminoMsg(object: _88.QueryTotalTimeoutFeesResponseAminoMsg): _88.QueryTotalTimeoutFeesResponse;
                    toAminoMsg(message: _88.QueryTotalTimeoutFeesResponse): _88.QueryTotalTimeoutFeesResponseAminoMsg;
                    fromProtoMsg(message: _88.QueryTotalTimeoutFeesResponseProtoMsg): _88.QueryTotalTimeoutFeesResponse;
                    toProto(message: _88.QueryTotalTimeoutFeesResponse): Uint8Array;
                    toProtoMsg(message: _88.QueryTotalTimeoutFeesResponse): _88.QueryTotalTimeoutFeesResponseProtoMsg;
                };
                QueryPayeeRequest: {
                    typeUrl: string;
                    encode(message: _88.QueryPayeeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.QueryPayeeRequest;
                    fromPartial(object: Partial<_88.QueryPayeeRequest>): _88.QueryPayeeRequest;
                    fromAmino(object: _88.QueryPayeeRequestAmino): _88.QueryPayeeRequest;
                    toAmino(message: _88.QueryPayeeRequest): _88.QueryPayeeRequestAmino;
                    fromAminoMsg(object: _88.QueryPayeeRequestAminoMsg): _88.QueryPayeeRequest;
                    toAminoMsg(message: _88.QueryPayeeRequest): _88.QueryPayeeRequestAminoMsg;
                    fromProtoMsg(message: _88.QueryPayeeRequestProtoMsg): _88.QueryPayeeRequest;
                    toProto(message: _88.QueryPayeeRequest): Uint8Array;
                    toProtoMsg(message: _88.QueryPayeeRequest): _88.QueryPayeeRequestProtoMsg;
                };
                QueryPayeeResponse: {
                    typeUrl: string;
                    encode(message: _88.QueryPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.QueryPayeeResponse;
                    fromPartial(object: Partial<_88.QueryPayeeResponse>): _88.QueryPayeeResponse;
                    fromAmino(object: _88.QueryPayeeResponseAmino): _88.QueryPayeeResponse;
                    toAmino(message: _88.QueryPayeeResponse): _88.QueryPayeeResponseAmino;
                    fromAminoMsg(object: _88.QueryPayeeResponseAminoMsg): _88.QueryPayeeResponse;
                    toAminoMsg(message: _88.QueryPayeeResponse): _88.QueryPayeeResponseAminoMsg;
                    fromProtoMsg(message: _88.QueryPayeeResponseProtoMsg): _88.QueryPayeeResponse;
                    toProto(message: _88.QueryPayeeResponse): Uint8Array;
                    toProtoMsg(message: _88.QueryPayeeResponse): _88.QueryPayeeResponseProtoMsg;
                };
                QueryCounterpartyPayeeRequest: {
                    typeUrl: string;
                    encode(message: _88.QueryCounterpartyPayeeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.QueryCounterpartyPayeeRequest;
                    fromPartial(object: Partial<_88.QueryCounterpartyPayeeRequest>): _88.QueryCounterpartyPayeeRequest;
                    fromAmino(object: _88.QueryCounterpartyPayeeRequestAmino): _88.QueryCounterpartyPayeeRequest;
                    toAmino(message: _88.QueryCounterpartyPayeeRequest): _88.QueryCounterpartyPayeeRequestAmino;
                    fromAminoMsg(object: _88.QueryCounterpartyPayeeRequestAminoMsg): _88.QueryCounterpartyPayeeRequest;
                    toAminoMsg(message: _88.QueryCounterpartyPayeeRequest): _88.QueryCounterpartyPayeeRequestAminoMsg;
                    fromProtoMsg(message: _88.QueryCounterpartyPayeeRequestProtoMsg): _88.QueryCounterpartyPayeeRequest;
                    toProto(message: _88.QueryCounterpartyPayeeRequest): Uint8Array;
                    toProtoMsg(message: _88.QueryCounterpartyPayeeRequest): _88.QueryCounterpartyPayeeRequestProtoMsg;
                };
                QueryCounterpartyPayeeResponse: {
                    typeUrl: string;
                    encode(message: _88.QueryCounterpartyPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.QueryCounterpartyPayeeResponse;
                    fromPartial(object: Partial<_88.QueryCounterpartyPayeeResponse>): _88.QueryCounterpartyPayeeResponse;
                    fromAmino(object: _88.QueryCounterpartyPayeeResponseAmino): _88.QueryCounterpartyPayeeResponse;
                    toAmino(message: _88.QueryCounterpartyPayeeResponse): _88.QueryCounterpartyPayeeResponseAmino;
                    fromAminoMsg(object: _88.QueryCounterpartyPayeeResponseAminoMsg): _88.QueryCounterpartyPayeeResponse;
                    toAminoMsg(message: _88.QueryCounterpartyPayeeResponse): _88.QueryCounterpartyPayeeResponseAminoMsg;
                    fromProtoMsg(message: _88.QueryCounterpartyPayeeResponseProtoMsg): _88.QueryCounterpartyPayeeResponse;
                    toProto(message: _88.QueryCounterpartyPayeeResponse): Uint8Array;
                    toProtoMsg(message: _88.QueryCounterpartyPayeeResponse): _88.QueryCounterpartyPayeeResponseProtoMsg;
                };
                QueryFeeEnabledChannelsRequest: {
                    typeUrl: string;
                    encode(message: _88.QueryFeeEnabledChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.QueryFeeEnabledChannelsRequest;
                    fromPartial(object: Partial<_88.QueryFeeEnabledChannelsRequest>): _88.QueryFeeEnabledChannelsRequest;
                    fromAmino(object: _88.QueryFeeEnabledChannelsRequestAmino): _88.QueryFeeEnabledChannelsRequest;
                    toAmino(message: _88.QueryFeeEnabledChannelsRequest): _88.QueryFeeEnabledChannelsRequestAmino;
                    fromAminoMsg(object: _88.QueryFeeEnabledChannelsRequestAminoMsg): _88.QueryFeeEnabledChannelsRequest;
                    toAminoMsg(message: _88.QueryFeeEnabledChannelsRequest): _88.QueryFeeEnabledChannelsRequestAminoMsg;
                    fromProtoMsg(message: _88.QueryFeeEnabledChannelsRequestProtoMsg): _88.QueryFeeEnabledChannelsRequest;
                    toProto(message: _88.QueryFeeEnabledChannelsRequest): Uint8Array;
                    toProtoMsg(message: _88.QueryFeeEnabledChannelsRequest): _88.QueryFeeEnabledChannelsRequestProtoMsg;
                };
                QueryFeeEnabledChannelsResponse: {
                    typeUrl: string;
                    encode(message: _88.QueryFeeEnabledChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.QueryFeeEnabledChannelsResponse;
                    fromPartial(object: Partial<_88.QueryFeeEnabledChannelsResponse>): _88.QueryFeeEnabledChannelsResponse;
                    fromAmino(object: _88.QueryFeeEnabledChannelsResponseAmino): _88.QueryFeeEnabledChannelsResponse;
                    toAmino(message: _88.QueryFeeEnabledChannelsResponse): _88.QueryFeeEnabledChannelsResponseAmino;
                    fromAminoMsg(object: _88.QueryFeeEnabledChannelsResponseAminoMsg): _88.QueryFeeEnabledChannelsResponse;
                    toAminoMsg(message: _88.QueryFeeEnabledChannelsResponse): _88.QueryFeeEnabledChannelsResponseAminoMsg;
                    fromProtoMsg(message: _88.QueryFeeEnabledChannelsResponseProtoMsg): _88.QueryFeeEnabledChannelsResponse;
                    toProto(message: _88.QueryFeeEnabledChannelsResponse): Uint8Array;
                    toProtoMsg(message: _88.QueryFeeEnabledChannelsResponse): _88.QueryFeeEnabledChannelsResponseProtoMsg;
                };
                QueryFeeEnabledChannelRequest: {
                    typeUrl: string;
                    encode(message: _88.QueryFeeEnabledChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.QueryFeeEnabledChannelRequest;
                    fromPartial(object: Partial<_88.QueryFeeEnabledChannelRequest>): _88.QueryFeeEnabledChannelRequest;
                    fromAmino(object: _88.QueryFeeEnabledChannelRequestAmino): _88.QueryFeeEnabledChannelRequest;
                    toAmino(message: _88.QueryFeeEnabledChannelRequest): _88.QueryFeeEnabledChannelRequestAmino;
                    fromAminoMsg(object: _88.QueryFeeEnabledChannelRequestAminoMsg): _88.QueryFeeEnabledChannelRequest;
                    toAminoMsg(message: _88.QueryFeeEnabledChannelRequest): _88.QueryFeeEnabledChannelRequestAminoMsg;
                    fromProtoMsg(message: _88.QueryFeeEnabledChannelRequestProtoMsg): _88.QueryFeeEnabledChannelRequest;
                    toProto(message: _88.QueryFeeEnabledChannelRequest): Uint8Array;
                    toProtoMsg(message: _88.QueryFeeEnabledChannelRequest): _88.QueryFeeEnabledChannelRequestProtoMsg;
                };
                QueryFeeEnabledChannelResponse: {
                    typeUrl: string;
                    encode(message: _88.QueryFeeEnabledChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.QueryFeeEnabledChannelResponse;
                    fromPartial(object: Partial<_88.QueryFeeEnabledChannelResponse>): _88.QueryFeeEnabledChannelResponse;
                    fromAmino(object: _88.QueryFeeEnabledChannelResponseAmino): _88.QueryFeeEnabledChannelResponse;
                    toAmino(message: _88.QueryFeeEnabledChannelResponse): _88.QueryFeeEnabledChannelResponseAmino;
                    fromAminoMsg(object: _88.QueryFeeEnabledChannelResponseAminoMsg): _88.QueryFeeEnabledChannelResponse;
                    toAminoMsg(message: _88.QueryFeeEnabledChannelResponse): _88.QueryFeeEnabledChannelResponseAminoMsg;
                    fromProtoMsg(message: _88.QueryFeeEnabledChannelResponseProtoMsg): _88.QueryFeeEnabledChannelResponse;
                    toProto(message: _88.QueryFeeEnabledChannelResponse): Uint8Array;
                    toProtoMsg(message: _88.QueryFeeEnabledChannelResponse): _88.QueryFeeEnabledChannelResponseProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _87.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.Metadata;
                    fromPartial(object: Partial<_87.Metadata>): _87.Metadata;
                    fromAmino(object: _87.MetadataAmino): _87.Metadata;
                    toAmino(message: _87.Metadata): _87.MetadataAmino;
                    fromAminoMsg(object: _87.MetadataAminoMsg): _87.Metadata;
                    toAminoMsg(message: _87.Metadata): _87.MetadataAminoMsg;
                    fromProtoMsg(message: _87.MetadataProtoMsg): _87.Metadata;
                    toProto(message: _87.Metadata): Uint8Array;
                    toProtoMsg(message: _87.Metadata): _87.MetadataProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _86.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.GenesisState;
                    fromPartial(object: Partial<_86.GenesisState>): _86.GenesisState;
                    fromAmino(object: _86.GenesisStateAmino): _86.GenesisState;
                    toAmino(message: _86.GenesisState): _86.GenesisStateAmino;
                    fromAminoMsg(object: _86.GenesisStateAminoMsg): _86.GenesisState;
                    toAminoMsg(message: _86.GenesisState): _86.GenesisStateAminoMsg;
                    fromProtoMsg(message: _86.GenesisStateProtoMsg): _86.GenesisState;
                    toProto(message: _86.GenesisState): Uint8Array;
                    toProtoMsg(message: _86.GenesisState): _86.GenesisStateProtoMsg;
                };
                FeeEnabledChannel: {
                    typeUrl: string;
                    encode(message: _86.FeeEnabledChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.FeeEnabledChannel;
                    fromPartial(object: Partial<_86.FeeEnabledChannel>): _86.FeeEnabledChannel;
                    fromAmino(object: _86.FeeEnabledChannelAmino): _86.FeeEnabledChannel;
                    toAmino(message: _86.FeeEnabledChannel): _86.FeeEnabledChannelAmino;
                    fromAminoMsg(object: _86.FeeEnabledChannelAminoMsg): _86.FeeEnabledChannel;
                    toAminoMsg(message: _86.FeeEnabledChannel): _86.FeeEnabledChannelAminoMsg;
                    fromProtoMsg(message: _86.FeeEnabledChannelProtoMsg): _86.FeeEnabledChannel;
                    toProto(message: _86.FeeEnabledChannel): Uint8Array;
                    toProtoMsg(message: _86.FeeEnabledChannel): _86.FeeEnabledChannelProtoMsg;
                };
                RegisteredPayee: {
                    typeUrl: string;
                    encode(message: _86.RegisteredPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.RegisteredPayee;
                    fromPartial(object: Partial<_86.RegisteredPayee>): _86.RegisteredPayee;
                    fromAmino(object: _86.RegisteredPayeeAmino): _86.RegisteredPayee;
                    toAmino(message: _86.RegisteredPayee): _86.RegisteredPayeeAmino;
                    fromAminoMsg(object: _86.RegisteredPayeeAminoMsg): _86.RegisteredPayee;
                    toAminoMsg(message: _86.RegisteredPayee): _86.RegisteredPayeeAminoMsg;
                    fromProtoMsg(message: _86.RegisteredPayeeProtoMsg): _86.RegisteredPayee;
                    toProto(message: _86.RegisteredPayee): Uint8Array;
                    toProtoMsg(message: _86.RegisteredPayee): _86.RegisteredPayeeProtoMsg;
                };
                RegisteredCounterpartyPayee: {
                    typeUrl: string;
                    encode(message: _86.RegisteredCounterpartyPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.RegisteredCounterpartyPayee;
                    fromPartial(object: Partial<_86.RegisteredCounterpartyPayee>): _86.RegisteredCounterpartyPayee;
                    fromAmino(object: _86.RegisteredCounterpartyPayeeAmino): _86.RegisteredCounterpartyPayee;
                    toAmino(message: _86.RegisteredCounterpartyPayee): _86.RegisteredCounterpartyPayeeAmino;
                    fromAminoMsg(object: _86.RegisteredCounterpartyPayeeAminoMsg): _86.RegisteredCounterpartyPayee;
                    toAminoMsg(message: _86.RegisteredCounterpartyPayee): _86.RegisteredCounterpartyPayeeAminoMsg;
                    fromProtoMsg(message: _86.RegisteredCounterpartyPayeeProtoMsg): _86.RegisteredCounterpartyPayee;
                    toProto(message: _86.RegisteredCounterpartyPayee): Uint8Array;
                    toProtoMsg(message: _86.RegisteredCounterpartyPayee): _86.RegisteredCounterpartyPayeeProtoMsg;
                };
                ForwardRelayerAddress: {
                    typeUrl: string;
                    encode(message: _86.ForwardRelayerAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.ForwardRelayerAddress;
                    fromPartial(object: Partial<_86.ForwardRelayerAddress>): _86.ForwardRelayerAddress;
                    fromAmino(object: _86.ForwardRelayerAddressAmino): _86.ForwardRelayerAddress;
                    toAmino(message: _86.ForwardRelayerAddress): _86.ForwardRelayerAddressAmino;
                    fromAminoMsg(object: _86.ForwardRelayerAddressAminoMsg): _86.ForwardRelayerAddress;
                    toAminoMsg(message: _86.ForwardRelayerAddress): _86.ForwardRelayerAddressAminoMsg;
                    fromProtoMsg(message: _86.ForwardRelayerAddressProtoMsg): _86.ForwardRelayerAddress;
                    toProto(message: _86.ForwardRelayerAddress): Uint8Array;
                    toProtoMsg(message: _86.ForwardRelayerAddress): _86.ForwardRelayerAddressProtoMsg;
                };
                Fee: {
                    typeUrl: string;
                    encode(message: _85.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.Fee;
                    fromPartial(object: Partial<_85.Fee>): _85.Fee;
                    fromAmino(object: _85.FeeAmino): _85.Fee;
                    toAmino(message: _85.Fee): _85.FeeAmino;
                    fromAminoMsg(object: _85.FeeAminoMsg): _85.Fee;
                    toAminoMsg(message: _85.Fee): _85.FeeAminoMsg;
                    fromProtoMsg(message: _85.FeeProtoMsg): _85.Fee;
                    toProto(message: _85.Fee): Uint8Array;
                    toProtoMsg(message: _85.Fee): _85.FeeProtoMsg;
                };
                PacketFee: {
                    typeUrl: string;
                    encode(message: _85.PacketFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.PacketFee;
                    fromPartial(object: Partial<_85.PacketFee>): _85.PacketFee;
                    fromAmino(object: _85.PacketFeeAmino): _85.PacketFee;
                    toAmino(message: _85.PacketFee): _85.PacketFeeAmino;
                    fromAminoMsg(object: _85.PacketFeeAminoMsg): _85.PacketFee;
                    toAminoMsg(message: _85.PacketFee): _85.PacketFeeAminoMsg;
                    fromProtoMsg(message: _85.PacketFeeProtoMsg): _85.PacketFee;
                    toProto(message: _85.PacketFee): Uint8Array;
                    toProtoMsg(message: _85.PacketFee): _85.PacketFeeProtoMsg;
                };
                PacketFees: {
                    typeUrl: string;
                    encode(message: _85.PacketFees, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.PacketFees;
                    fromPartial(object: Partial<_85.PacketFees>): _85.PacketFees;
                    fromAmino(object: _85.PacketFeesAmino): _85.PacketFees;
                    toAmino(message: _85.PacketFees): _85.PacketFeesAmino;
                    fromAminoMsg(object: _85.PacketFeesAminoMsg): _85.PacketFees;
                    toAminoMsg(message: _85.PacketFees): _85.PacketFeesAminoMsg;
                    fromProtoMsg(message: _85.PacketFeesProtoMsg): _85.PacketFees;
                    toProto(message: _85.PacketFees): Uint8Array;
                    toProtoMsg(message: _85.PacketFees): _85.PacketFeesProtoMsg;
                };
                IdentifiedPacketFees: {
                    typeUrl: string;
                    encode(message: _85.IdentifiedPacketFees, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.IdentifiedPacketFees;
                    fromPartial(object: Partial<_85.IdentifiedPacketFees>): _85.IdentifiedPacketFees;
                    fromAmino(object: _85.IdentifiedPacketFeesAmino): _85.IdentifiedPacketFees;
                    toAmino(message: _85.IdentifiedPacketFees): _85.IdentifiedPacketFeesAmino;
                    fromAminoMsg(object: _85.IdentifiedPacketFeesAminoMsg): _85.IdentifiedPacketFees;
                    toAminoMsg(message: _85.IdentifiedPacketFees): _85.IdentifiedPacketFeesAminoMsg;
                    fromProtoMsg(message: _85.IdentifiedPacketFeesProtoMsg): _85.IdentifiedPacketFees;
                    toProto(message: _85.IdentifiedPacketFees): Uint8Array;
                    toProtoMsg(message: _85.IdentifiedPacketFees): _85.IdentifiedPacketFeesProtoMsg;
                };
                IncentivizedAcknowledgement: {
                    typeUrl: string;
                    encode(message: _84.IncentivizedAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.IncentivizedAcknowledgement;
                    fromPartial(object: Partial<_84.IncentivizedAcknowledgement>): _84.IncentivizedAcknowledgement;
                    fromAmino(object: _84.IncentivizedAcknowledgementAmino): _84.IncentivizedAcknowledgement;
                    toAmino(message: _84.IncentivizedAcknowledgement): _84.IncentivizedAcknowledgementAmino;
                    fromAminoMsg(object: _84.IncentivizedAcknowledgementAminoMsg): _84.IncentivizedAcknowledgement;
                    toAminoMsg(message: _84.IncentivizedAcknowledgement): _84.IncentivizedAcknowledgementAminoMsg;
                    fromProtoMsg(message: _84.IncentivizedAcknowledgementProtoMsg): _84.IncentivizedAcknowledgement;
                    toProto(message: _84.IncentivizedAcknowledgement): Uint8Array;
                    toProtoMsg(message: _84.IncentivizedAcknowledgement): _84.IncentivizedAcknowledgementProtoMsg;
                };
            };
        }
        namespace interchain_accounts {
            namespace controller {
                const v1: {
                    MsgClientImpl: typeof _259.MsgClientImpl;
                    QueryClientImpl: typeof _252.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        interchainAccount(request: _91.QueryInterchainAccountRequest): Promise<_91.QueryInterchainAccountResponse>;
                        params(request?: _91.QueryParamsRequest): Promise<_91.QueryParamsResponse>;
                    };
                    registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            registerInterchainAccount(value: _92.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            sendTx(value: _92.MsgSendTx): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            registerInterchainAccount(value: _92.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: _92.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: _92.MsgSendTx): {
                                typeUrl: string;
                                value: _92.MsgSendTx;
                            };
                        };
                        fromPartial: {
                            registerInterchainAccount(value: _92.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: _92.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: _92.MsgSendTx): {
                                typeUrl: string;
                                value: _92.MsgSendTx;
                            };
                        };
                    };
                    AminoConverter: {
                        "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount": {
                            aminoType: string;
                            toAmino: (message: _92.MsgRegisterInterchainAccount) => _92.MsgRegisterInterchainAccountAmino;
                            fromAmino: (object: _92.MsgRegisterInterchainAccountAmino) => _92.MsgRegisterInterchainAccount;
                        };
                        "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx": {
                            aminoType: string;
                            toAmino: (message: _92.MsgSendTx) => _92.MsgSendTxAmino;
                            fromAmino: (object: _92.MsgSendTxAmino) => _92.MsgSendTx;
                        };
                    };
                    MsgRegisterInterchainAccount: {
                        typeUrl: string;
                        encode(message: _92.MsgRegisterInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.MsgRegisterInterchainAccount;
                        fromPartial(object: Partial<_92.MsgRegisterInterchainAccount>): _92.MsgRegisterInterchainAccount;
                        fromAmino(object: _92.MsgRegisterInterchainAccountAmino): _92.MsgRegisterInterchainAccount;
                        toAmino(message: _92.MsgRegisterInterchainAccount): _92.MsgRegisterInterchainAccountAmino;
                        fromAminoMsg(object: _92.MsgRegisterInterchainAccountAminoMsg): _92.MsgRegisterInterchainAccount;
                        toAminoMsg(message: _92.MsgRegisterInterchainAccount): _92.MsgRegisterInterchainAccountAminoMsg;
                        fromProtoMsg(message: _92.MsgRegisterInterchainAccountProtoMsg): _92.MsgRegisterInterchainAccount;
                        toProto(message: _92.MsgRegisterInterchainAccount): Uint8Array;
                        toProtoMsg(message: _92.MsgRegisterInterchainAccount): _92.MsgRegisterInterchainAccountProtoMsg;
                    };
                    MsgRegisterInterchainAccountResponse: {
                        typeUrl: string;
                        encode(message: _92.MsgRegisterInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.MsgRegisterInterchainAccountResponse;
                        fromPartial(object: Partial<_92.MsgRegisterInterchainAccountResponse>): _92.MsgRegisterInterchainAccountResponse;
                        fromAmino(object: _92.MsgRegisterInterchainAccountResponseAmino): _92.MsgRegisterInterchainAccountResponse;
                        toAmino(message: _92.MsgRegisterInterchainAccountResponse): _92.MsgRegisterInterchainAccountResponseAmino;
                        fromAminoMsg(object: _92.MsgRegisterInterchainAccountResponseAminoMsg): _92.MsgRegisterInterchainAccountResponse;
                        toAminoMsg(message: _92.MsgRegisterInterchainAccountResponse): _92.MsgRegisterInterchainAccountResponseAminoMsg;
                        fromProtoMsg(message: _92.MsgRegisterInterchainAccountResponseProtoMsg): _92.MsgRegisterInterchainAccountResponse;
                        toProto(message: _92.MsgRegisterInterchainAccountResponse): Uint8Array;
                        toProtoMsg(message: _92.MsgRegisterInterchainAccountResponse): _92.MsgRegisterInterchainAccountResponseProtoMsg;
                    };
                    MsgSendTx: {
                        typeUrl: string;
                        encode(message: _92.MsgSendTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.MsgSendTx;
                        fromPartial(object: Partial<_92.MsgSendTx>): _92.MsgSendTx;
                        fromAmino(object: _92.MsgSendTxAmino): _92.MsgSendTx;
                        toAmino(message: _92.MsgSendTx): _92.MsgSendTxAmino;
                        fromAminoMsg(object: _92.MsgSendTxAminoMsg): _92.MsgSendTx;
                        toAminoMsg(message: _92.MsgSendTx): _92.MsgSendTxAminoMsg;
                        fromProtoMsg(message: _92.MsgSendTxProtoMsg): _92.MsgSendTx;
                        toProto(message: _92.MsgSendTx): Uint8Array;
                        toProtoMsg(message: _92.MsgSendTx): _92.MsgSendTxProtoMsg;
                    };
                    MsgSendTxResponse: {
                        typeUrl: string;
                        encode(message: _92.MsgSendTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.MsgSendTxResponse;
                        fromPartial(object: Partial<_92.MsgSendTxResponse>): _92.MsgSendTxResponse;
                        fromAmino(object: _92.MsgSendTxResponseAmino): _92.MsgSendTxResponse;
                        toAmino(message: _92.MsgSendTxResponse): _92.MsgSendTxResponseAmino;
                        fromAminoMsg(object: _92.MsgSendTxResponseAminoMsg): _92.MsgSendTxResponse;
                        toAminoMsg(message: _92.MsgSendTxResponse): _92.MsgSendTxResponseAminoMsg;
                        fromProtoMsg(message: _92.MsgSendTxResponseProtoMsg): _92.MsgSendTxResponse;
                        toProto(message: _92.MsgSendTxResponse): Uint8Array;
                        toProtoMsg(message: _92.MsgSendTxResponse): _92.MsgSendTxResponseProtoMsg;
                    };
                    QueryInterchainAccountRequest: {
                        typeUrl: string;
                        encode(message: _91.QueryInterchainAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.QueryInterchainAccountRequest;
                        fromPartial(object: Partial<_91.QueryInterchainAccountRequest>): _91.QueryInterchainAccountRequest;
                        fromAmino(object: _91.QueryInterchainAccountRequestAmino): _91.QueryInterchainAccountRequest;
                        toAmino(message: _91.QueryInterchainAccountRequest): _91.QueryInterchainAccountRequestAmino;
                        fromAminoMsg(object: _91.QueryInterchainAccountRequestAminoMsg): _91.QueryInterchainAccountRequest;
                        toAminoMsg(message: _91.QueryInterchainAccountRequest): _91.QueryInterchainAccountRequestAminoMsg;
                        fromProtoMsg(message: _91.QueryInterchainAccountRequestProtoMsg): _91.QueryInterchainAccountRequest;
                        toProto(message: _91.QueryInterchainAccountRequest): Uint8Array;
                        toProtoMsg(message: _91.QueryInterchainAccountRequest): _91.QueryInterchainAccountRequestProtoMsg;
                    };
                    QueryInterchainAccountResponse: {
                        typeUrl: string;
                        encode(message: _91.QueryInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.QueryInterchainAccountResponse;
                        fromPartial(object: Partial<_91.QueryInterchainAccountResponse>): _91.QueryInterchainAccountResponse;
                        fromAmino(object: _91.QueryInterchainAccountResponseAmino): _91.QueryInterchainAccountResponse;
                        toAmino(message: _91.QueryInterchainAccountResponse): _91.QueryInterchainAccountResponseAmino;
                        fromAminoMsg(object: _91.QueryInterchainAccountResponseAminoMsg): _91.QueryInterchainAccountResponse;
                        toAminoMsg(message: _91.QueryInterchainAccountResponse): _91.QueryInterchainAccountResponseAminoMsg;
                        fromProtoMsg(message: _91.QueryInterchainAccountResponseProtoMsg): _91.QueryInterchainAccountResponse;
                        toProto(message: _91.QueryInterchainAccountResponse): Uint8Array;
                        toProtoMsg(message: _91.QueryInterchainAccountResponse): _91.QueryInterchainAccountResponseProtoMsg;
                    };
                    QueryParamsRequest: {
                        typeUrl: string;
                        encode(_: _91.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.QueryParamsRequest;
                        fromPartial(_: Partial<_91.QueryParamsRequest>): _91.QueryParamsRequest;
                        fromAmino(_: _91.QueryParamsRequestAmino): _91.QueryParamsRequest;
                        toAmino(_: _91.QueryParamsRequest): _91.QueryParamsRequestAmino;
                        fromAminoMsg(object: _91.QueryParamsRequestAminoMsg): _91.QueryParamsRequest;
                        toAminoMsg(message: _91.QueryParamsRequest): _91.QueryParamsRequestAminoMsg;
                        fromProtoMsg(message: _91.QueryParamsRequestProtoMsg): _91.QueryParamsRequest;
                        toProto(message: _91.QueryParamsRequest): Uint8Array;
                        toProtoMsg(message: _91.QueryParamsRequest): _91.QueryParamsRequestProtoMsg;
                    };
                    QueryParamsResponse: {
                        typeUrl: string;
                        encode(message: _91.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.QueryParamsResponse;
                        fromPartial(object: Partial<_91.QueryParamsResponse>): _91.QueryParamsResponse;
                        fromAmino(object: _91.QueryParamsResponseAmino): _91.QueryParamsResponse;
                        toAmino(message: _91.QueryParamsResponse): _91.QueryParamsResponseAmino;
                        fromAminoMsg(object: _91.QueryParamsResponseAminoMsg): _91.QueryParamsResponse;
                        toAminoMsg(message: _91.QueryParamsResponse): _91.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _91.QueryParamsResponseProtoMsg): _91.QueryParamsResponse;
                        toProto(message: _91.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _91.QueryParamsResponse): _91.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        typeUrl: string;
                        encode(message: _90.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.Params;
                        fromPartial(object: Partial<_90.Params>): _90.Params;
                        fromAmino(object: _90.ParamsAmino): _90.Params;
                        toAmino(message: _90.Params): _90.ParamsAmino;
                        fromAminoMsg(object: _90.ParamsAminoMsg): _90.Params;
                        toAminoMsg(message: _90.Params): _90.ParamsAminoMsg;
                        fromProtoMsg(message: _90.ParamsProtoMsg): _90.Params;
                        toProto(message: _90.Params): Uint8Array;
                        toProtoMsg(message: _90.Params): _90.ParamsProtoMsg;
                    };
                };
            }
            namespace genesis {
                const v1: {
                    GenesisState: {
                        typeUrl: string;
                        encode(message: _93.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.GenesisState;
                        fromPartial(object: Partial<_93.GenesisState>): _93.GenesisState;
                        fromAmino(object: _93.GenesisStateAmino): _93.GenesisState;
                        toAmino(message: _93.GenesisState): _93.GenesisStateAmino;
                        fromAminoMsg(object: _93.GenesisStateAminoMsg): _93.GenesisState;
                        toAminoMsg(message: _93.GenesisState): _93.GenesisStateAminoMsg;
                        fromProtoMsg(message: _93.GenesisStateProtoMsg): _93.GenesisState;
                        toProto(message: _93.GenesisState): Uint8Array;
                        toProtoMsg(message: _93.GenesisState): _93.GenesisStateProtoMsg;
                    };
                    ControllerGenesisState: {
                        typeUrl: string;
                        encode(message: _93.ControllerGenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.ControllerGenesisState;
                        fromPartial(object: Partial<_93.ControllerGenesisState>): _93.ControllerGenesisState;
                        fromAmino(object: _93.ControllerGenesisStateAmino): _93.ControllerGenesisState;
                        toAmino(message: _93.ControllerGenesisState): _93.ControllerGenesisStateAmino;
                        fromAminoMsg(object: _93.ControllerGenesisStateAminoMsg): _93.ControllerGenesisState;
                        toAminoMsg(message: _93.ControllerGenesisState): _93.ControllerGenesisStateAminoMsg;
                        fromProtoMsg(message: _93.ControllerGenesisStateProtoMsg): _93.ControllerGenesisState;
                        toProto(message: _93.ControllerGenesisState): Uint8Array;
                        toProtoMsg(message: _93.ControllerGenesisState): _93.ControllerGenesisStateProtoMsg;
                    };
                    HostGenesisState: {
                        typeUrl: string;
                        encode(message: _93.HostGenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.HostGenesisState;
                        fromPartial(object: Partial<_93.HostGenesisState>): _93.HostGenesisState;
                        fromAmino(object: _93.HostGenesisStateAmino): _93.HostGenesisState;
                        toAmino(message: _93.HostGenesisState): _93.HostGenesisStateAmino;
                        fromAminoMsg(object: _93.HostGenesisStateAminoMsg): _93.HostGenesisState;
                        toAminoMsg(message: _93.HostGenesisState): _93.HostGenesisStateAminoMsg;
                        fromProtoMsg(message: _93.HostGenesisStateProtoMsg): _93.HostGenesisState;
                        toProto(message: _93.HostGenesisState): Uint8Array;
                        toProtoMsg(message: _93.HostGenesisState): _93.HostGenesisStateProtoMsg;
                    };
                    ActiveChannel: {
                        typeUrl: string;
                        encode(message: _93.ActiveChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.ActiveChannel;
                        fromPartial(object: Partial<_93.ActiveChannel>): _93.ActiveChannel;
                        fromAmino(object: _93.ActiveChannelAmino): _93.ActiveChannel;
                        toAmino(message: _93.ActiveChannel): _93.ActiveChannelAmino;
                        fromAminoMsg(object: _93.ActiveChannelAminoMsg): _93.ActiveChannel;
                        toAminoMsg(message: _93.ActiveChannel): _93.ActiveChannelAminoMsg;
                        fromProtoMsg(message: _93.ActiveChannelProtoMsg): _93.ActiveChannel;
                        toProto(message: _93.ActiveChannel): Uint8Array;
                        toProtoMsg(message: _93.ActiveChannel): _93.ActiveChannelProtoMsg;
                    };
                    RegisteredInterchainAccount: {
                        typeUrl: string;
                        encode(message: _93.RegisteredInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.RegisteredInterchainAccount;
                        fromPartial(object: Partial<_93.RegisteredInterchainAccount>): _93.RegisteredInterchainAccount;
                        fromAmino(object: _93.RegisteredInterchainAccountAmino): _93.RegisteredInterchainAccount;
                        toAmino(message: _93.RegisteredInterchainAccount): _93.RegisteredInterchainAccountAmino;
                        fromAminoMsg(object: _93.RegisteredInterchainAccountAminoMsg): _93.RegisteredInterchainAccount;
                        toAminoMsg(message: _93.RegisteredInterchainAccount): _93.RegisteredInterchainAccountAminoMsg;
                        fromProtoMsg(message: _93.RegisteredInterchainAccountProtoMsg): _93.RegisteredInterchainAccount;
                        toProto(message: _93.RegisteredInterchainAccount): Uint8Array;
                        toProtoMsg(message: _93.RegisteredInterchainAccount): _93.RegisteredInterchainAccountProtoMsg;
                    };
                };
            }
            namespace host {
                const v1: {
                    QueryClientImpl: typeof _253.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        params(request?: _95.QueryParamsRequest): Promise<_95.QueryParamsResponse>;
                    };
                    QueryParamsRequest: {
                        typeUrl: string;
                        encode(_: _95.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.QueryParamsRequest;
                        fromPartial(_: Partial<_95.QueryParamsRequest>): _95.QueryParamsRequest;
                        fromAmino(_: _95.QueryParamsRequestAmino): _95.QueryParamsRequest;
                        toAmino(_: _95.QueryParamsRequest): _95.QueryParamsRequestAmino;
                        fromAminoMsg(object: _95.QueryParamsRequestAminoMsg): _95.QueryParamsRequest;
                        toAminoMsg(message: _95.QueryParamsRequest): _95.QueryParamsRequestAminoMsg;
                        fromProtoMsg(message: _95.QueryParamsRequestProtoMsg): _95.QueryParamsRequest;
                        toProto(message: _95.QueryParamsRequest): Uint8Array;
                        toProtoMsg(message: _95.QueryParamsRequest): _95.QueryParamsRequestProtoMsg;
                    };
                    QueryParamsResponse: {
                        typeUrl: string;
                        encode(message: _95.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.QueryParamsResponse;
                        fromPartial(object: Partial<_95.QueryParamsResponse>): _95.QueryParamsResponse;
                        fromAmino(object: _95.QueryParamsResponseAmino): _95.QueryParamsResponse;
                        toAmino(message: _95.QueryParamsResponse): _95.QueryParamsResponseAmino;
                        fromAminoMsg(object: _95.QueryParamsResponseAminoMsg): _95.QueryParamsResponse;
                        toAminoMsg(message: _95.QueryParamsResponse): _95.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _95.QueryParamsResponseProtoMsg): _95.QueryParamsResponse;
                        toProto(message: _95.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _95.QueryParamsResponse): _95.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        typeUrl: string;
                        encode(message: _94.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.Params;
                        fromPartial(object: Partial<_94.Params>): _94.Params;
                        fromAmino(object: _94.ParamsAmino): _94.Params;
                        toAmino(message: _94.Params): _94.ParamsAmino;
                        fromAminoMsg(object: _94.ParamsAminoMsg): _94.Params;
                        toAminoMsg(message: _94.Params): _94.ParamsAminoMsg;
                        fromProtoMsg(message: _94.ParamsProtoMsg): _94.Params;
                        toProto(message: _94.Params): Uint8Array;
                        toProtoMsg(message: _94.Params): _94.ParamsProtoMsg;
                    };
                };
            }
            const v1: {
                typeFromJSON(object: any): _98.Type;
                typeToJSON(object: _98.Type): string;
                Type: typeof _98.Type;
                TypeSDKType: typeof _98.Type;
                TypeAmino: typeof _98.Type;
                InterchainAccountPacketData: {
                    typeUrl: string;
                    encode(message: _98.InterchainAccountPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.InterchainAccountPacketData;
                    fromPartial(object: Partial<_98.InterchainAccountPacketData>): _98.InterchainAccountPacketData;
                    fromAmino(object: _98.InterchainAccountPacketDataAmino): _98.InterchainAccountPacketData;
                    toAmino(message: _98.InterchainAccountPacketData): _98.InterchainAccountPacketDataAmino;
                    fromAminoMsg(object: _98.InterchainAccountPacketDataAminoMsg): _98.InterchainAccountPacketData;
                    toAminoMsg(message: _98.InterchainAccountPacketData): _98.InterchainAccountPacketDataAminoMsg;
                    fromProtoMsg(message: _98.InterchainAccountPacketDataProtoMsg): _98.InterchainAccountPacketData;
                    toProto(message: _98.InterchainAccountPacketData): Uint8Array;
                    toProtoMsg(message: _98.InterchainAccountPacketData): _98.InterchainAccountPacketDataProtoMsg;
                };
                CosmosTx: {
                    typeUrl: string;
                    encode(message: _98.CosmosTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.CosmosTx;
                    fromPartial(object: Partial<_98.CosmosTx>): _98.CosmosTx;
                    fromAmino(object: _98.CosmosTxAmino): _98.CosmosTx;
                    toAmino(message: _98.CosmosTx): _98.CosmosTxAmino;
                    fromAminoMsg(object: _98.CosmosTxAminoMsg): _98.CosmosTx;
                    toAminoMsg(message: _98.CosmosTx): _98.CosmosTxAminoMsg;
                    fromProtoMsg(message: _98.CosmosTxProtoMsg): _98.CosmosTx;
                    toProto(message: _98.CosmosTx): Uint8Array;
                    toProtoMsg(message: _98.CosmosTx): _98.CosmosTxProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _97.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.Metadata;
                    fromPartial(object: Partial<_97.Metadata>): _97.Metadata;
                    fromAmino(object: _97.MetadataAmino): _97.Metadata;
                    toAmino(message: _97.Metadata): _97.MetadataAmino;
                    fromAminoMsg(object: _97.MetadataAminoMsg): _97.Metadata;
                    toAminoMsg(message: _97.Metadata): _97.MetadataAminoMsg;
                    fromProtoMsg(message: _97.MetadataProtoMsg): _97.Metadata;
                    toProto(message: _97.Metadata): Uint8Array;
                    toProtoMsg(message: _97.Metadata): _97.MetadataProtoMsg;
                };
                InterchainAccount: {
                    typeUrl: string;
                    encode(message: _96.InterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.InterchainAccount;
                    fromPartial(object: Partial<_96.InterchainAccount>): _96.InterchainAccount;
                    fromAmino(object: _96.InterchainAccountAmino): _96.InterchainAccount;
                    toAmino(message: _96.InterchainAccount): _96.InterchainAccountAmino;
                    fromAminoMsg(object: _96.InterchainAccountAminoMsg): _96.InterchainAccount;
                    toAminoMsg(message: _96.InterchainAccount): _96.InterchainAccountAminoMsg;
                    fromProtoMsg(message: _96.InterchainAccountProtoMsg): _96.InterchainAccount;
                    toProto(message: _96.InterchainAccount): Uint8Array;
                    toProtoMsg(message: _96.InterchainAccount): _96.InterchainAccountProtoMsg;
                };
            };
        }
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _260.MsgClientImpl;
                QueryClientImpl: typeof _254.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTraces(request?: _101.QueryDenomTracesRequest): Promise<_101.QueryDenomTracesResponse>;
                    denomTrace(request: _101.QueryDenomTraceRequest): Promise<_101.QueryDenomTraceResponse>;
                    params(request?: _101.QueryParamsRequest): Promise<_101.QueryParamsResponse>;
                    denomHash(request: _101.QueryDenomHashRequest): Promise<_101.QueryDenomHashResponse>;
                    escrowAddress(request: _101.QueryEscrowAddressRequest): Promise<_101.QueryEscrowAddressResponse>;
                    totalEscrowForDenom(request: _101.QueryTotalEscrowForDenomRequest): Promise<_101.QueryTotalEscrowForDenomResponse>;
                };
                registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _103.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _103.MsgTransfer): {
                            typeUrl: string;
                            value: _103.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _103.MsgTransfer): {
                            typeUrl: string;
                            value: _103.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _103.MsgTransfer) => _103.MsgTransferAmino;
                        fromAmino: (object: _103.MsgTransferAmino) => _103.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    typeUrl: string;
                    encode(message: _103.MsgTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.MsgTransfer;
                    fromPartial(object: Partial<_103.MsgTransfer>): _103.MsgTransfer;
                    fromAmino(object: _103.MsgTransferAmino): _103.MsgTransfer;
                    toAmino(message: _103.MsgTransfer): _103.MsgTransferAmino;
                    fromAminoMsg(object: _103.MsgTransferAminoMsg): _103.MsgTransfer;
                    toAminoMsg(message: _103.MsgTransfer): _103.MsgTransferAminoMsg;
                    fromProtoMsg(message: _103.MsgTransferProtoMsg): _103.MsgTransfer;
                    toProto(message: _103.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _103.MsgTransfer): _103.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    typeUrl: string;
                    encode(message: _103.MsgTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.MsgTransferResponse;
                    fromPartial(object: Partial<_103.MsgTransferResponse>): _103.MsgTransferResponse;
                    fromAmino(object: _103.MsgTransferResponseAmino): _103.MsgTransferResponse;
                    toAmino(message: _103.MsgTransferResponse): _103.MsgTransferResponseAmino;
                    fromAminoMsg(object: _103.MsgTransferResponseAminoMsg): _103.MsgTransferResponse;
                    toAminoMsg(message: _103.MsgTransferResponse): _103.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _103.MsgTransferResponseProtoMsg): _103.MsgTransferResponse;
                    toProto(message: _103.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _103.MsgTransferResponse): _103.MsgTransferResponseProtoMsg;
                };
                DenomTrace: {
                    typeUrl: string;
                    encode(message: _102.DenomTrace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.DenomTrace;
                    fromPartial(object: Partial<_102.DenomTrace>): _102.DenomTrace;
                    fromAmino(object: _102.DenomTraceAmino): _102.DenomTrace;
                    toAmino(message: _102.DenomTrace): _102.DenomTraceAmino;
                    fromAminoMsg(object: _102.DenomTraceAminoMsg): _102.DenomTrace;
                    toAminoMsg(message: _102.DenomTrace): _102.DenomTraceAminoMsg;
                    fromProtoMsg(message: _102.DenomTraceProtoMsg): _102.DenomTrace;
                    toProto(message: _102.DenomTrace): Uint8Array;
                    toProtoMsg(message: _102.DenomTrace): _102.DenomTraceProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _102.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.Params;
                    fromPartial(object: Partial<_102.Params>): _102.Params;
                    fromAmino(object: _102.ParamsAmino): _102.Params;
                    toAmino(message: _102.Params): _102.ParamsAmino;
                    fromAminoMsg(object: _102.ParamsAminoMsg): _102.Params;
                    toAminoMsg(message: _102.Params): _102.ParamsAminoMsg;
                    fromProtoMsg(message: _102.ParamsProtoMsg): _102.Params;
                    toProto(message: _102.Params): Uint8Array;
                    toProtoMsg(message: _102.Params): _102.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    encode(message: _101.QueryDenomTraceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.QueryDenomTraceRequest;
                    fromPartial(object: Partial<_101.QueryDenomTraceRequest>): _101.QueryDenomTraceRequest;
                    fromAmino(object: _101.QueryDenomTraceRequestAmino): _101.QueryDenomTraceRequest;
                    toAmino(message: _101.QueryDenomTraceRequest): _101.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _101.QueryDenomTraceRequestAminoMsg): _101.QueryDenomTraceRequest;
                    toAminoMsg(message: _101.QueryDenomTraceRequest): _101.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _101.QueryDenomTraceRequestProtoMsg): _101.QueryDenomTraceRequest;
                    toProto(message: _101.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _101.QueryDenomTraceRequest): _101.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    encode(message: _101.QueryDenomTraceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.QueryDenomTraceResponse;
                    fromPartial(object: Partial<_101.QueryDenomTraceResponse>): _101.QueryDenomTraceResponse;
                    fromAmino(object: _101.QueryDenomTraceResponseAmino): _101.QueryDenomTraceResponse;
                    toAmino(message: _101.QueryDenomTraceResponse): _101.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _101.QueryDenomTraceResponseAminoMsg): _101.QueryDenomTraceResponse;
                    toAminoMsg(message: _101.QueryDenomTraceResponse): _101.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _101.QueryDenomTraceResponseProtoMsg): _101.QueryDenomTraceResponse;
                    toProto(message: _101.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _101.QueryDenomTraceResponse): _101.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    encode(message: _101.QueryDenomTracesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.QueryDenomTracesRequest;
                    fromPartial(object: Partial<_101.QueryDenomTracesRequest>): _101.QueryDenomTracesRequest;
                    fromAmino(object: _101.QueryDenomTracesRequestAmino): _101.QueryDenomTracesRequest;
                    toAmino(message: _101.QueryDenomTracesRequest): _101.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _101.QueryDenomTracesRequestAminoMsg): _101.QueryDenomTracesRequest;
                    toAminoMsg(message: _101.QueryDenomTracesRequest): _101.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _101.QueryDenomTracesRequestProtoMsg): _101.QueryDenomTracesRequest;
                    toProto(message: _101.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _101.QueryDenomTracesRequest): _101.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    encode(message: _101.QueryDenomTracesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.QueryDenomTracesResponse;
                    fromPartial(object: Partial<_101.QueryDenomTracesResponse>): _101.QueryDenomTracesResponse;
                    fromAmino(object: _101.QueryDenomTracesResponseAmino): _101.QueryDenomTracesResponse;
                    toAmino(message: _101.QueryDenomTracesResponse): _101.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _101.QueryDenomTracesResponseAminoMsg): _101.QueryDenomTracesResponse;
                    toAminoMsg(message: _101.QueryDenomTracesResponse): _101.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _101.QueryDenomTracesResponseProtoMsg): _101.QueryDenomTracesResponse;
                    toProto(message: _101.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _101.QueryDenomTracesResponse): _101.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    encode(_: _101.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.QueryParamsRequest;
                    fromPartial(_: Partial<_101.QueryParamsRequest>): _101.QueryParamsRequest;
                    fromAmino(_: _101.QueryParamsRequestAmino): _101.QueryParamsRequest;
                    toAmino(_: _101.QueryParamsRequest): _101.QueryParamsRequestAmino;
                    fromAminoMsg(object: _101.QueryParamsRequestAminoMsg): _101.QueryParamsRequest;
                    toAminoMsg(message: _101.QueryParamsRequest): _101.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _101.QueryParamsRequestProtoMsg): _101.QueryParamsRequest;
                    toProto(message: _101.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _101.QueryParamsRequest): _101.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    encode(message: _101.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.QueryParamsResponse;
                    fromPartial(object: Partial<_101.QueryParamsResponse>): _101.QueryParamsResponse;
                    fromAmino(object: _101.QueryParamsResponseAmino): _101.QueryParamsResponse;
                    toAmino(message: _101.QueryParamsResponse): _101.QueryParamsResponseAmino;
                    fromAminoMsg(object: _101.QueryParamsResponseAminoMsg): _101.QueryParamsResponse;
                    toAminoMsg(message: _101.QueryParamsResponse): _101.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _101.QueryParamsResponseProtoMsg): _101.QueryParamsResponse;
                    toProto(message: _101.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _101.QueryParamsResponse): _101.QueryParamsResponseProtoMsg;
                };
                QueryDenomHashRequest: {
                    typeUrl: string;
                    encode(message: _101.QueryDenomHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.QueryDenomHashRequest;
                    fromPartial(object: Partial<_101.QueryDenomHashRequest>): _101.QueryDenomHashRequest;
                    fromAmino(object: _101.QueryDenomHashRequestAmino): _101.QueryDenomHashRequest;
                    toAmino(message: _101.QueryDenomHashRequest): _101.QueryDenomHashRequestAmino;
                    fromAminoMsg(object: _101.QueryDenomHashRequestAminoMsg): _101.QueryDenomHashRequest;
                    toAminoMsg(message: _101.QueryDenomHashRequest): _101.QueryDenomHashRequestAminoMsg;
                    fromProtoMsg(message: _101.QueryDenomHashRequestProtoMsg): _101.QueryDenomHashRequest;
                    toProto(message: _101.QueryDenomHashRequest): Uint8Array;
                    toProtoMsg(message: _101.QueryDenomHashRequest): _101.QueryDenomHashRequestProtoMsg;
                };
                QueryDenomHashResponse: {
                    typeUrl: string;
                    encode(message: _101.QueryDenomHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.QueryDenomHashResponse;
                    fromPartial(object: Partial<_101.QueryDenomHashResponse>): _101.QueryDenomHashResponse;
                    fromAmino(object: _101.QueryDenomHashResponseAmino): _101.QueryDenomHashResponse;
                    toAmino(message: _101.QueryDenomHashResponse): _101.QueryDenomHashResponseAmino;
                    fromAminoMsg(object: _101.QueryDenomHashResponseAminoMsg): _101.QueryDenomHashResponse;
                    toAminoMsg(message: _101.QueryDenomHashResponse): _101.QueryDenomHashResponseAminoMsg;
                    fromProtoMsg(message: _101.QueryDenomHashResponseProtoMsg): _101.QueryDenomHashResponse;
                    toProto(message: _101.QueryDenomHashResponse): Uint8Array;
                    toProtoMsg(message: _101.QueryDenomHashResponse): _101.QueryDenomHashResponseProtoMsg;
                };
                QueryEscrowAddressRequest: {
                    typeUrl: string;
                    encode(message: _101.QueryEscrowAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.QueryEscrowAddressRequest;
                    fromPartial(object: Partial<_101.QueryEscrowAddressRequest>): _101.QueryEscrowAddressRequest;
                    fromAmino(object: _101.QueryEscrowAddressRequestAmino): _101.QueryEscrowAddressRequest;
                    toAmino(message: _101.QueryEscrowAddressRequest): _101.QueryEscrowAddressRequestAmino;
                    fromAminoMsg(object: _101.QueryEscrowAddressRequestAminoMsg): _101.QueryEscrowAddressRequest;
                    toAminoMsg(message: _101.QueryEscrowAddressRequest): _101.QueryEscrowAddressRequestAminoMsg;
                    fromProtoMsg(message: _101.QueryEscrowAddressRequestProtoMsg): _101.QueryEscrowAddressRequest;
                    toProto(message: _101.QueryEscrowAddressRequest): Uint8Array;
                    toProtoMsg(message: _101.QueryEscrowAddressRequest): _101.QueryEscrowAddressRequestProtoMsg;
                };
                QueryEscrowAddressResponse: {
                    typeUrl: string;
                    encode(message: _101.QueryEscrowAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.QueryEscrowAddressResponse;
                    fromPartial(object: Partial<_101.QueryEscrowAddressResponse>): _101.QueryEscrowAddressResponse;
                    fromAmino(object: _101.QueryEscrowAddressResponseAmino): _101.QueryEscrowAddressResponse;
                    toAmino(message: _101.QueryEscrowAddressResponse): _101.QueryEscrowAddressResponseAmino;
                    fromAminoMsg(object: _101.QueryEscrowAddressResponseAminoMsg): _101.QueryEscrowAddressResponse;
                    toAminoMsg(message: _101.QueryEscrowAddressResponse): _101.QueryEscrowAddressResponseAminoMsg;
                    fromProtoMsg(message: _101.QueryEscrowAddressResponseProtoMsg): _101.QueryEscrowAddressResponse;
                    toProto(message: _101.QueryEscrowAddressResponse): Uint8Array;
                    toProtoMsg(message: _101.QueryEscrowAddressResponse): _101.QueryEscrowAddressResponseProtoMsg;
                };
                QueryTotalEscrowForDenomRequest: {
                    typeUrl: string;
                    encode(message: _101.QueryTotalEscrowForDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.QueryTotalEscrowForDenomRequest;
                    fromPartial(object: Partial<_101.QueryTotalEscrowForDenomRequest>): _101.QueryTotalEscrowForDenomRequest;
                    fromAmino(object: _101.QueryTotalEscrowForDenomRequestAmino): _101.QueryTotalEscrowForDenomRequest;
                    toAmino(message: _101.QueryTotalEscrowForDenomRequest): _101.QueryTotalEscrowForDenomRequestAmino;
                    fromAminoMsg(object: _101.QueryTotalEscrowForDenomRequestAminoMsg): _101.QueryTotalEscrowForDenomRequest;
                    toAminoMsg(message: _101.QueryTotalEscrowForDenomRequest): _101.QueryTotalEscrowForDenomRequestAminoMsg;
                    fromProtoMsg(message: _101.QueryTotalEscrowForDenomRequestProtoMsg): _101.QueryTotalEscrowForDenomRequest;
                    toProto(message: _101.QueryTotalEscrowForDenomRequest): Uint8Array;
                    toProtoMsg(message: _101.QueryTotalEscrowForDenomRequest): _101.QueryTotalEscrowForDenomRequestProtoMsg;
                };
                QueryTotalEscrowForDenomResponse: {
                    typeUrl: string;
                    encode(message: _101.QueryTotalEscrowForDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.QueryTotalEscrowForDenomResponse;
                    fromPartial(object: Partial<_101.QueryTotalEscrowForDenomResponse>): _101.QueryTotalEscrowForDenomResponse;
                    fromAmino(object: _101.QueryTotalEscrowForDenomResponseAmino): _101.QueryTotalEscrowForDenomResponse;
                    toAmino(message: _101.QueryTotalEscrowForDenomResponse): _101.QueryTotalEscrowForDenomResponseAmino;
                    fromAminoMsg(object: _101.QueryTotalEscrowForDenomResponseAminoMsg): _101.QueryTotalEscrowForDenomResponse;
                    toAminoMsg(message: _101.QueryTotalEscrowForDenomResponse): _101.QueryTotalEscrowForDenomResponseAminoMsg;
                    fromProtoMsg(message: _101.QueryTotalEscrowForDenomResponseProtoMsg): _101.QueryTotalEscrowForDenomResponse;
                    toProto(message: _101.QueryTotalEscrowForDenomResponse): Uint8Array;
                    toProtoMsg(message: _101.QueryTotalEscrowForDenomResponse): _101.QueryTotalEscrowForDenomResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _100.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.GenesisState;
                    fromPartial(object: Partial<_100.GenesisState>): _100.GenesisState;
                    fromAmino(object: _100.GenesisStateAmino): _100.GenesisState;
                    toAmino(message: _100.GenesisState): _100.GenesisStateAmino;
                    fromAminoMsg(object: _100.GenesisStateAminoMsg): _100.GenesisState;
                    toAminoMsg(message: _100.GenesisState): _100.GenesisStateAminoMsg;
                    fromProtoMsg(message: _100.GenesisStateProtoMsg): _100.GenesisState;
                    toProto(message: _100.GenesisState): Uint8Array;
                    toProtoMsg(message: _100.GenesisState): _100.GenesisStateProtoMsg;
                };
                Allocation: {
                    typeUrl: string;
                    encode(message: _99.Allocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.Allocation;
                    fromPartial(object: Partial<_99.Allocation>): _99.Allocation;
                    fromAmino(object: _99.AllocationAmino): _99.Allocation;
                    toAmino(message: _99.Allocation): _99.AllocationAmino;
                    fromAminoMsg(object: _99.AllocationAminoMsg): _99.Allocation;
                    toAminoMsg(message: _99.Allocation): _99.AllocationAminoMsg;
                    fromProtoMsg(message: _99.AllocationProtoMsg): _99.Allocation;
                    toProto(message: _99.Allocation): Uint8Array;
                    toProtoMsg(message: _99.Allocation): _99.AllocationProtoMsg;
                };
                TransferAuthorization: {
                    typeUrl: string;
                    encode(message: _99.TransferAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.TransferAuthorization;
                    fromPartial(object: Partial<_99.TransferAuthorization>): _99.TransferAuthorization;
                    fromAmino(object: _99.TransferAuthorizationAmino): _99.TransferAuthorization;
                    toAmino(message: _99.TransferAuthorization): _99.TransferAuthorizationAmino;
                    fromAminoMsg(object: _99.TransferAuthorizationAminoMsg): _99.TransferAuthorization;
                    toAminoMsg(message: _99.TransferAuthorization): _99.TransferAuthorizationAminoMsg;
                    fromProtoMsg(message: _99.TransferAuthorizationProtoMsg): _99.TransferAuthorization;
                    toProto(message: _99.TransferAuthorization): Uint8Array;
                    toProtoMsg(message: _99.TransferAuthorization): _99.TransferAuthorizationProtoMsg;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    typeUrl: string;
                    encode(message: _104.FungibleTokenPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.FungibleTokenPacketData;
                    fromPartial(object: Partial<_104.FungibleTokenPacketData>): _104.FungibleTokenPacketData;
                    fromAmino(object: _104.FungibleTokenPacketDataAmino): _104.FungibleTokenPacketData;
                    toAmino(message: _104.FungibleTokenPacketData): _104.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _104.FungibleTokenPacketDataAminoMsg): _104.FungibleTokenPacketData;
                    toAminoMsg(message: _104.FungibleTokenPacketData): _104.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _104.FungibleTokenPacketDataProtoMsg): _104.FungibleTokenPacketData;
                    toProto(message: _104.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _104.FungibleTokenPacketData): _104.FungibleTokenPacketDataProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _261.MsgClientImpl;
                QueryClientImpl: typeof _255.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _107.QueryChannelRequest): Promise<_107.QueryChannelResponse>;
                    channels(request?: _107.QueryChannelsRequest): Promise<_107.QueryChannelsResponse>;
                    connectionChannels(request: _107.QueryConnectionChannelsRequest): Promise<_107.QueryConnectionChannelsResponse>;
                    channelClientState(request: _107.QueryChannelClientStateRequest): Promise<_107.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _107.QueryChannelConsensusStateRequest): Promise<_107.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _107.QueryPacketCommitmentRequest): Promise<_107.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _107.QueryPacketCommitmentsRequest): Promise<_107.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _107.QueryPacketReceiptRequest): Promise<_107.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _107.QueryPacketAcknowledgementRequest): Promise<_107.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _107.QueryPacketAcknowledgementsRequest): Promise<_107.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _107.QueryUnreceivedPacketsRequest): Promise<_107.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _107.QueryUnreceivedAcksRequest): Promise<_107.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _107.QueryNextSequenceReceiveRequest): Promise<_107.QueryNextSequenceReceiveResponse>;
                };
                registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _108.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _108.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _108.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _108.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _108.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _108.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _108.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _108.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _108.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _108.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _108.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _108.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _108.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _108.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _108.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _108.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _108.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _108.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _108.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _108.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _108.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _108.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _108.MsgRecvPacket): {
                            typeUrl: string;
                            value: _108.MsgRecvPacket;
                        };
                        timeout(value: _108.MsgTimeout): {
                            typeUrl: string;
                            value: _108.MsgTimeout;
                        };
                        timeoutOnClose(value: _108.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _108.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _108.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _108.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _108.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _108.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _108.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _108.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _108.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _108.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _108.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _108.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _108.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _108.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _108.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _108.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _108.MsgRecvPacket): {
                            typeUrl: string;
                            value: _108.MsgRecvPacket;
                        };
                        timeout(value: _108.MsgTimeout): {
                            typeUrl: string;
                            value: _108.MsgTimeout;
                        };
                        timeoutOnClose(value: _108.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _108.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _108.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _108.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _108.MsgChannelOpenInit) => _108.MsgChannelOpenInitAmino;
                        fromAmino: (object: _108.MsgChannelOpenInitAmino) => _108.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _108.MsgChannelOpenTry) => _108.MsgChannelOpenTryAmino;
                        fromAmino: (object: _108.MsgChannelOpenTryAmino) => _108.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _108.MsgChannelOpenAck) => _108.MsgChannelOpenAckAmino;
                        fromAmino: (object: _108.MsgChannelOpenAckAmino) => _108.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _108.MsgChannelOpenConfirm) => _108.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _108.MsgChannelOpenConfirmAmino) => _108.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _108.MsgChannelCloseInit) => _108.MsgChannelCloseInitAmino;
                        fromAmino: (object: _108.MsgChannelCloseInitAmino) => _108.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _108.MsgChannelCloseConfirm) => _108.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _108.MsgChannelCloseConfirmAmino) => _108.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _108.MsgRecvPacket) => _108.MsgRecvPacketAmino;
                        fromAmino: (object: _108.MsgRecvPacketAmino) => _108.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _108.MsgTimeout) => _108.MsgTimeoutAmino;
                        fromAmino: (object: _108.MsgTimeoutAmino) => _108.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _108.MsgTimeoutOnClose) => _108.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _108.MsgTimeoutOnCloseAmino) => _108.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _108.MsgAcknowledgement) => _108.MsgAcknowledgementAmino;
                        fromAmino: (object: _108.MsgAcknowledgementAmino) => _108.MsgAcknowledgement;
                    };
                };
                responseResultTypeFromJSON(object: any): _108.ResponseResultType;
                responseResultTypeToJSON(object: _108.ResponseResultType): string;
                ResponseResultType: typeof _108.ResponseResultType;
                ResponseResultTypeSDKType: typeof _108.ResponseResultType;
                ResponseResultTypeAmino: typeof _108.ResponseResultType;
                MsgChannelOpenInit: {
                    typeUrl: string;
                    encode(message: _108.MsgChannelOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.MsgChannelOpenInit;
                    fromPartial(object: Partial<_108.MsgChannelOpenInit>): _108.MsgChannelOpenInit;
                    fromAmino(object: _108.MsgChannelOpenInitAmino): _108.MsgChannelOpenInit;
                    toAmino(message: _108.MsgChannelOpenInit): _108.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _108.MsgChannelOpenInitAminoMsg): _108.MsgChannelOpenInit;
                    toAminoMsg(message: _108.MsgChannelOpenInit): _108.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _108.MsgChannelOpenInitProtoMsg): _108.MsgChannelOpenInit;
                    toProto(message: _108.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _108.MsgChannelOpenInit): _108.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    typeUrl: string;
                    encode(message: _108.MsgChannelOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.MsgChannelOpenInitResponse;
                    fromPartial(object: Partial<_108.MsgChannelOpenInitResponse>): _108.MsgChannelOpenInitResponse;
                    fromAmino(object: _108.MsgChannelOpenInitResponseAmino): _108.MsgChannelOpenInitResponse;
                    toAmino(message: _108.MsgChannelOpenInitResponse): _108.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _108.MsgChannelOpenInitResponseAminoMsg): _108.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _108.MsgChannelOpenInitResponse): _108.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _108.MsgChannelOpenInitResponseProtoMsg): _108.MsgChannelOpenInitResponse;
                    toProto(message: _108.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _108.MsgChannelOpenInitResponse): _108.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    typeUrl: string;
                    encode(message: _108.MsgChannelOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.MsgChannelOpenTry;
                    fromPartial(object: Partial<_108.MsgChannelOpenTry>): _108.MsgChannelOpenTry;
                    fromAmino(object: _108.MsgChannelOpenTryAmino): _108.MsgChannelOpenTry;
                    toAmino(message: _108.MsgChannelOpenTry): _108.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _108.MsgChannelOpenTryAminoMsg): _108.MsgChannelOpenTry;
                    toAminoMsg(message: _108.MsgChannelOpenTry): _108.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _108.MsgChannelOpenTryProtoMsg): _108.MsgChannelOpenTry;
                    toProto(message: _108.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _108.MsgChannelOpenTry): _108.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    typeUrl: string;
                    encode(message: _108.MsgChannelOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.MsgChannelOpenTryResponse;
                    fromPartial(object: Partial<_108.MsgChannelOpenTryResponse>): _108.MsgChannelOpenTryResponse;
                    fromAmino(object: _108.MsgChannelOpenTryResponseAmino): _108.MsgChannelOpenTryResponse;
                    toAmino(message: _108.MsgChannelOpenTryResponse): _108.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _108.MsgChannelOpenTryResponseAminoMsg): _108.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _108.MsgChannelOpenTryResponse): _108.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _108.MsgChannelOpenTryResponseProtoMsg): _108.MsgChannelOpenTryResponse;
                    toProto(message: _108.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _108.MsgChannelOpenTryResponse): _108.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    typeUrl: string;
                    encode(message: _108.MsgChannelOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.MsgChannelOpenAck;
                    fromPartial(object: Partial<_108.MsgChannelOpenAck>): _108.MsgChannelOpenAck;
                    fromAmino(object: _108.MsgChannelOpenAckAmino): _108.MsgChannelOpenAck;
                    toAmino(message: _108.MsgChannelOpenAck): _108.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _108.MsgChannelOpenAckAminoMsg): _108.MsgChannelOpenAck;
                    toAminoMsg(message: _108.MsgChannelOpenAck): _108.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _108.MsgChannelOpenAckProtoMsg): _108.MsgChannelOpenAck;
                    toProto(message: _108.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _108.MsgChannelOpenAck): _108.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _108.MsgChannelOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.MsgChannelOpenAckResponse;
                    fromPartial(_: Partial<_108.MsgChannelOpenAckResponse>): _108.MsgChannelOpenAckResponse;
                    fromAmino(_: _108.MsgChannelOpenAckResponseAmino): _108.MsgChannelOpenAckResponse;
                    toAmino(_: _108.MsgChannelOpenAckResponse): _108.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _108.MsgChannelOpenAckResponseAminoMsg): _108.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _108.MsgChannelOpenAckResponse): _108.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _108.MsgChannelOpenAckResponseProtoMsg): _108.MsgChannelOpenAckResponse;
                    toProto(message: _108.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _108.MsgChannelOpenAckResponse): _108.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    typeUrl: string;
                    encode(message: _108.MsgChannelOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.MsgChannelOpenConfirm;
                    fromPartial(object: Partial<_108.MsgChannelOpenConfirm>): _108.MsgChannelOpenConfirm;
                    fromAmino(object: _108.MsgChannelOpenConfirmAmino): _108.MsgChannelOpenConfirm;
                    toAmino(message: _108.MsgChannelOpenConfirm): _108.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _108.MsgChannelOpenConfirmAminoMsg): _108.MsgChannelOpenConfirm;
                    toAminoMsg(message: _108.MsgChannelOpenConfirm): _108.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _108.MsgChannelOpenConfirmProtoMsg): _108.MsgChannelOpenConfirm;
                    toProto(message: _108.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _108.MsgChannelOpenConfirm): _108.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _108.MsgChannelOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.MsgChannelOpenConfirmResponse;
                    fromPartial(_: Partial<_108.MsgChannelOpenConfirmResponse>): _108.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _108.MsgChannelOpenConfirmResponseAmino): _108.MsgChannelOpenConfirmResponse;
                    toAmino(_: _108.MsgChannelOpenConfirmResponse): _108.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _108.MsgChannelOpenConfirmResponseAminoMsg): _108.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _108.MsgChannelOpenConfirmResponse): _108.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _108.MsgChannelOpenConfirmResponseProtoMsg): _108.MsgChannelOpenConfirmResponse;
                    toProto(message: _108.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _108.MsgChannelOpenConfirmResponse): _108.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    typeUrl: string;
                    encode(message: _108.MsgChannelCloseInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.MsgChannelCloseInit;
                    fromPartial(object: Partial<_108.MsgChannelCloseInit>): _108.MsgChannelCloseInit;
                    fromAmino(object: _108.MsgChannelCloseInitAmino): _108.MsgChannelCloseInit;
                    toAmino(message: _108.MsgChannelCloseInit): _108.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _108.MsgChannelCloseInitAminoMsg): _108.MsgChannelCloseInit;
                    toAminoMsg(message: _108.MsgChannelCloseInit): _108.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _108.MsgChannelCloseInitProtoMsg): _108.MsgChannelCloseInit;
                    toProto(message: _108.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _108.MsgChannelCloseInit): _108.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    typeUrl: string;
                    encode(_: _108.MsgChannelCloseInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.MsgChannelCloseInitResponse;
                    fromPartial(_: Partial<_108.MsgChannelCloseInitResponse>): _108.MsgChannelCloseInitResponse;
                    fromAmino(_: _108.MsgChannelCloseInitResponseAmino): _108.MsgChannelCloseInitResponse;
                    toAmino(_: _108.MsgChannelCloseInitResponse): _108.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _108.MsgChannelCloseInitResponseAminoMsg): _108.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _108.MsgChannelCloseInitResponse): _108.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _108.MsgChannelCloseInitResponseProtoMsg): _108.MsgChannelCloseInitResponse;
                    toProto(message: _108.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _108.MsgChannelCloseInitResponse): _108.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    typeUrl: string;
                    encode(message: _108.MsgChannelCloseConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.MsgChannelCloseConfirm;
                    fromPartial(object: Partial<_108.MsgChannelCloseConfirm>): _108.MsgChannelCloseConfirm;
                    fromAmino(object: _108.MsgChannelCloseConfirmAmino): _108.MsgChannelCloseConfirm;
                    toAmino(message: _108.MsgChannelCloseConfirm): _108.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _108.MsgChannelCloseConfirmAminoMsg): _108.MsgChannelCloseConfirm;
                    toAminoMsg(message: _108.MsgChannelCloseConfirm): _108.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _108.MsgChannelCloseConfirmProtoMsg): _108.MsgChannelCloseConfirm;
                    toProto(message: _108.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _108.MsgChannelCloseConfirm): _108.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    typeUrl: string;
                    encode(_: _108.MsgChannelCloseConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.MsgChannelCloseConfirmResponse;
                    fromPartial(_: Partial<_108.MsgChannelCloseConfirmResponse>): _108.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _108.MsgChannelCloseConfirmResponseAmino): _108.MsgChannelCloseConfirmResponse;
                    toAmino(_: _108.MsgChannelCloseConfirmResponse): _108.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _108.MsgChannelCloseConfirmResponseAminoMsg): _108.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _108.MsgChannelCloseConfirmResponse): _108.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _108.MsgChannelCloseConfirmResponseProtoMsg): _108.MsgChannelCloseConfirmResponse;
                    toProto(message: _108.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _108.MsgChannelCloseConfirmResponse): _108.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    typeUrl: string;
                    encode(message: _108.MsgRecvPacket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.MsgRecvPacket;
                    fromPartial(object: Partial<_108.MsgRecvPacket>): _108.MsgRecvPacket;
                    fromAmino(object: _108.MsgRecvPacketAmino): _108.MsgRecvPacket;
                    toAmino(message: _108.MsgRecvPacket): _108.MsgRecvPacketAmino;
                    fromAminoMsg(object: _108.MsgRecvPacketAminoMsg): _108.MsgRecvPacket;
                    toAminoMsg(message: _108.MsgRecvPacket): _108.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _108.MsgRecvPacketProtoMsg): _108.MsgRecvPacket;
                    toProto(message: _108.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _108.MsgRecvPacket): _108.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    typeUrl: string;
                    encode(message: _108.MsgRecvPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.MsgRecvPacketResponse;
                    fromPartial(object: Partial<_108.MsgRecvPacketResponse>): _108.MsgRecvPacketResponse;
                    fromAmino(object: _108.MsgRecvPacketResponseAmino): _108.MsgRecvPacketResponse;
                    toAmino(message: _108.MsgRecvPacketResponse): _108.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _108.MsgRecvPacketResponseAminoMsg): _108.MsgRecvPacketResponse;
                    toAminoMsg(message: _108.MsgRecvPacketResponse): _108.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _108.MsgRecvPacketResponseProtoMsg): _108.MsgRecvPacketResponse;
                    toProto(message: _108.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _108.MsgRecvPacketResponse): _108.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    typeUrl: string;
                    encode(message: _108.MsgTimeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.MsgTimeout;
                    fromPartial(object: Partial<_108.MsgTimeout>): _108.MsgTimeout;
                    fromAmino(object: _108.MsgTimeoutAmino): _108.MsgTimeout;
                    toAmino(message: _108.MsgTimeout): _108.MsgTimeoutAmino;
                    fromAminoMsg(object: _108.MsgTimeoutAminoMsg): _108.MsgTimeout;
                    toAminoMsg(message: _108.MsgTimeout): _108.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _108.MsgTimeoutProtoMsg): _108.MsgTimeout;
                    toProto(message: _108.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _108.MsgTimeout): _108.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    typeUrl: string;
                    encode(message: _108.MsgTimeoutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.MsgTimeoutResponse;
                    fromPartial(object: Partial<_108.MsgTimeoutResponse>): _108.MsgTimeoutResponse;
                    fromAmino(object: _108.MsgTimeoutResponseAmino): _108.MsgTimeoutResponse;
                    toAmino(message: _108.MsgTimeoutResponse): _108.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _108.MsgTimeoutResponseAminoMsg): _108.MsgTimeoutResponse;
                    toAminoMsg(message: _108.MsgTimeoutResponse): _108.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _108.MsgTimeoutResponseProtoMsg): _108.MsgTimeoutResponse;
                    toProto(message: _108.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _108.MsgTimeoutResponse): _108.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    typeUrl: string;
                    encode(message: _108.MsgTimeoutOnClose, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.MsgTimeoutOnClose;
                    fromPartial(object: Partial<_108.MsgTimeoutOnClose>): _108.MsgTimeoutOnClose;
                    fromAmino(object: _108.MsgTimeoutOnCloseAmino): _108.MsgTimeoutOnClose;
                    toAmino(message: _108.MsgTimeoutOnClose): _108.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _108.MsgTimeoutOnCloseAminoMsg): _108.MsgTimeoutOnClose;
                    toAminoMsg(message: _108.MsgTimeoutOnClose): _108.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _108.MsgTimeoutOnCloseProtoMsg): _108.MsgTimeoutOnClose;
                    toProto(message: _108.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _108.MsgTimeoutOnClose): _108.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    typeUrl: string;
                    encode(message: _108.MsgTimeoutOnCloseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.MsgTimeoutOnCloseResponse;
                    fromPartial(object: Partial<_108.MsgTimeoutOnCloseResponse>): _108.MsgTimeoutOnCloseResponse;
                    fromAmino(object: _108.MsgTimeoutOnCloseResponseAmino): _108.MsgTimeoutOnCloseResponse;
                    toAmino(message: _108.MsgTimeoutOnCloseResponse): _108.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _108.MsgTimeoutOnCloseResponseAminoMsg): _108.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _108.MsgTimeoutOnCloseResponse): _108.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _108.MsgTimeoutOnCloseResponseProtoMsg): _108.MsgTimeoutOnCloseResponse;
                    toProto(message: _108.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _108.MsgTimeoutOnCloseResponse): _108.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    typeUrl: string;
                    encode(message: _108.MsgAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.MsgAcknowledgement;
                    fromPartial(object: Partial<_108.MsgAcknowledgement>): _108.MsgAcknowledgement;
                    fromAmino(object: _108.MsgAcknowledgementAmino): _108.MsgAcknowledgement;
                    toAmino(message: _108.MsgAcknowledgement): _108.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _108.MsgAcknowledgementAminoMsg): _108.MsgAcknowledgement;
                    toAminoMsg(message: _108.MsgAcknowledgement): _108.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _108.MsgAcknowledgementProtoMsg): _108.MsgAcknowledgement;
                    toProto(message: _108.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _108.MsgAcknowledgement): _108.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _108.MsgAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.MsgAcknowledgementResponse;
                    fromPartial(object: Partial<_108.MsgAcknowledgementResponse>): _108.MsgAcknowledgementResponse;
                    fromAmino(object: _108.MsgAcknowledgementResponseAmino): _108.MsgAcknowledgementResponse;
                    toAmino(message: _108.MsgAcknowledgementResponse): _108.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _108.MsgAcknowledgementResponseAminoMsg): _108.MsgAcknowledgementResponse;
                    toAminoMsg(message: _108.MsgAcknowledgementResponse): _108.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _108.MsgAcknowledgementResponseProtoMsg): _108.MsgAcknowledgementResponse;
                    toProto(message: _108.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _108.MsgAcknowledgementResponse): _108.MsgAcknowledgementResponseProtoMsg;
                };
                QueryChannelRequest: {
                    typeUrl: string;
                    encode(message: _107.QueryChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.QueryChannelRequest;
                    fromPartial(object: Partial<_107.QueryChannelRequest>): _107.QueryChannelRequest;
                    fromAmino(object: _107.QueryChannelRequestAmino): _107.QueryChannelRequest;
                    toAmino(message: _107.QueryChannelRequest): _107.QueryChannelRequestAmino;
                    fromAminoMsg(object: _107.QueryChannelRequestAminoMsg): _107.QueryChannelRequest;
                    toAminoMsg(message: _107.QueryChannelRequest): _107.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _107.QueryChannelRequestProtoMsg): _107.QueryChannelRequest;
                    toProto(message: _107.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _107.QueryChannelRequest): _107.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    typeUrl: string;
                    encode(message: _107.QueryChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.QueryChannelResponse;
                    fromPartial(object: Partial<_107.QueryChannelResponse>): _107.QueryChannelResponse;
                    fromAmino(object: _107.QueryChannelResponseAmino): _107.QueryChannelResponse;
                    toAmino(message: _107.QueryChannelResponse): _107.QueryChannelResponseAmino;
                    fromAminoMsg(object: _107.QueryChannelResponseAminoMsg): _107.QueryChannelResponse;
                    toAminoMsg(message: _107.QueryChannelResponse): _107.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _107.QueryChannelResponseProtoMsg): _107.QueryChannelResponse;
                    toProto(message: _107.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _107.QueryChannelResponse): _107.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    typeUrl: string;
                    encode(message: _107.QueryChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.QueryChannelsRequest;
                    fromPartial(object: Partial<_107.QueryChannelsRequest>): _107.QueryChannelsRequest;
                    fromAmino(object: _107.QueryChannelsRequestAmino): _107.QueryChannelsRequest;
                    toAmino(message: _107.QueryChannelsRequest): _107.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _107.QueryChannelsRequestAminoMsg): _107.QueryChannelsRequest;
                    toAminoMsg(message: _107.QueryChannelsRequest): _107.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _107.QueryChannelsRequestProtoMsg): _107.QueryChannelsRequest;
                    toProto(message: _107.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _107.QueryChannelsRequest): _107.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    typeUrl: string;
                    encode(message: _107.QueryChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.QueryChannelsResponse;
                    fromPartial(object: Partial<_107.QueryChannelsResponse>): _107.QueryChannelsResponse;
                    fromAmino(object: _107.QueryChannelsResponseAmino): _107.QueryChannelsResponse;
                    toAmino(message: _107.QueryChannelsResponse): _107.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _107.QueryChannelsResponseAminoMsg): _107.QueryChannelsResponse;
                    toAminoMsg(message: _107.QueryChannelsResponse): _107.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _107.QueryChannelsResponseProtoMsg): _107.QueryChannelsResponse;
                    toProto(message: _107.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _107.QueryChannelsResponse): _107.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    typeUrl: string;
                    encode(message: _107.QueryConnectionChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.QueryConnectionChannelsRequest;
                    fromPartial(object: Partial<_107.QueryConnectionChannelsRequest>): _107.QueryConnectionChannelsRequest;
                    fromAmino(object: _107.QueryConnectionChannelsRequestAmino): _107.QueryConnectionChannelsRequest;
                    toAmino(message: _107.QueryConnectionChannelsRequest): _107.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _107.QueryConnectionChannelsRequestAminoMsg): _107.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _107.QueryConnectionChannelsRequest): _107.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _107.QueryConnectionChannelsRequestProtoMsg): _107.QueryConnectionChannelsRequest;
                    toProto(message: _107.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _107.QueryConnectionChannelsRequest): _107.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    typeUrl: string;
                    encode(message: _107.QueryConnectionChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.QueryConnectionChannelsResponse;
                    fromPartial(object: Partial<_107.QueryConnectionChannelsResponse>): _107.QueryConnectionChannelsResponse;
                    fromAmino(object: _107.QueryConnectionChannelsResponseAmino): _107.QueryConnectionChannelsResponse;
                    toAmino(message: _107.QueryConnectionChannelsResponse): _107.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _107.QueryConnectionChannelsResponseAminoMsg): _107.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _107.QueryConnectionChannelsResponse): _107.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _107.QueryConnectionChannelsResponseProtoMsg): _107.QueryConnectionChannelsResponse;
                    toProto(message: _107.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _107.QueryConnectionChannelsResponse): _107.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    typeUrl: string;
                    encode(message: _107.QueryChannelClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.QueryChannelClientStateRequest;
                    fromPartial(object: Partial<_107.QueryChannelClientStateRequest>): _107.QueryChannelClientStateRequest;
                    fromAmino(object: _107.QueryChannelClientStateRequestAmino): _107.QueryChannelClientStateRequest;
                    toAmino(message: _107.QueryChannelClientStateRequest): _107.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _107.QueryChannelClientStateRequestAminoMsg): _107.QueryChannelClientStateRequest;
                    toAminoMsg(message: _107.QueryChannelClientStateRequest): _107.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _107.QueryChannelClientStateRequestProtoMsg): _107.QueryChannelClientStateRequest;
                    toProto(message: _107.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _107.QueryChannelClientStateRequest): _107.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    typeUrl: string;
                    encode(message: _107.QueryChannelClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.QueryChannelClientStateResponse;
                    fromPartial(object: Partial<_107.QueryChannelClientStateResponse>): _107.QueryChannelClientStateResponse;
                    fromAmino(object: _107.QueryChannelClientStateResponseAmino): _107.QueryChannelClientStateResponse;
                    toAmino(message: _107.QueryChannelClientStateResponse): _107.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _107.QueryChannelClientStateResponseAminoMsg): _107.QueryChannelClientStateResponse;
                    toAminoMsg(message: _107.QueryChannelClientStateResponse): _107.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _107.QueryChannelClientStateResponseProtoMsg): _107.QueryChannelClientStateResponse;
                    toProto(message: _107.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _107.QueryChannelClientStateResponse): _107.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _107.QueryChannelConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.QueryChannelConsensusStateRequest;
                    fromPartial(object: Partial<_107.QueryChannelConsensusStateRequest>): _107.QueryChannelConsensusStateRequest;
                    fromAmino(object: _107.QueryChannelConsensusStateRequestAmino): _107.QueryChannelConsensusStateRequest;
                    toAmino(message: _107.QueryChannelConsensusStateRequest): _107.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _107.QueryChannelConsensusStateRequestAminoMsg): _107.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _107.QueryChannelConsensusStateRequest): _107.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _107.QueryChannelConsensusStateRequestProtoMsg): _107.QueryChannelConsensusStateRequest;
                    toProto(message: _107.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _107.QueryChannelConsensusStateRequest): _107.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _107.QueryChannelConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.QueryChannelConsensusStateResponse;
                    fromPartial(object: Partial<_107.QueryChannelConsensusStateResponse>): _107.QueryChannelConsensusStateResponse;
                    fromAmino(object: _107.QueryChannelConsensusStateResponseAmino): _107.QueryChannelConsensusStateResponse;
                    toAmino(message: _107.QueryChannelConsensusStateResponse): _107.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _107.QueryChannelConsensusStateResponseAminoMsg): _107.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _107.QueryChannelConsensusStateResponse): _107.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _107.QueryChannelConsensusStateResponseProtoMsg): _107.QueryChannelConsensusStateResponse;
                    toProto(message: _107.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _107.QueryChannelConsensusStateResponse): _107.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    typeUrl: string;
                    encode(message: _107.QueryPacketCommitmentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.QueryPacketCommitmentRequest;
                    fromPartial(object: Partial<_107.QueryPacketCommitmentRequest>): _107.QueryPacketCommitmentRequest;
                    fromAmino(object: _107.QueryPacketCommitmentRequestAmino): _107.QueryPacketCommitmentRequest;
                    toAmino(message: _107.QueryPacketCommitmentRequest): _107.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _107.QueryPacketCommitmentRequestAminoMsg): _107.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _107.QueryPacketCommitmentRequest): _107.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _107.QueryPacketCommitmentRequestProtoMsg): _107.QueryPacketCommitmentRequest;
                    toProto(message: _107.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _107.QueryPacketCommitmentRequest): _107.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    typeUrl: string;
                    encode(message: _107.QueryPacketCommitmentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.QueryPacketCommitmentResponse;
                    fromPartial(object: Partial<_107.QueryPacketCommitmentResponse>): _107.QueryPacketCommitmentResponse;
                    fromAmino(object: _107.QueryPacketCommitmentResponseAmino): _107.QueryPacketCommitmentResponse;
                    toAmino(message: _107.QueryPacketCommitmentResponse): _107.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _107.QueryPacketCommitmentResponseAminoMsg): _107.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _107.QueryPacketCommitmentResponse): _107.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _107.QueryPacketCommitmentResponseProtoMsg): _107.QueryPacketCommitmentResponse;
                    toProto(message: _107.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _107.QueryPacketCommitmentResponse): _107.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    typeUrl: string;
                    encode(message: _107.QueryPacketCommitmentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.QueryPacketCommitmentsRequest;
                    fromPartial(object: Partial<_107.QueryPacketCommitmentsRequest>): _107.QueryPacketCommitmentsRequest;
                    fromAmino(object: _107.QueryPacketCommitmentsRequestAmino): _107.QueryPacketCommitmentsRequest;
                    toAmino(message: _107.QueryPacketCommitmentsRequest): _107.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _107.QueryPacketCommitmentsRequestAminoMsg): _107.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _107.QueryPacketCommitmentsRequest): _107.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _107.QueryPacketCommitmentsRequestProtoMsg): _107.QueryPacketCommitmentsRequest;
                    toProto(message: _107.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _107.QueryPacketCommitmentsRequest): _107.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    typeUrl: string;
                    encode(message: _107.QueryPacketCommitmentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.QueryPacketCommitmentsResponse;
                    fromPartial(object: Partial<_107.QueryPacketCommitmentsResponse>): _107.QueryPacketCommitmentsResponse;
                    fromAmino(object: _107.QueryPacketCommitmentsResponseAmino): _107.QueryPacketCommitmentsResponse;
                    toAmino(message: _107.QueryPacketCommitmentsResponse): _107.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _107.QueryPacketCommitmentsResponseAminoMsg): _107.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _107.QueryPacketCommitmentsResponse): _107.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _107.QueryPacketCommitmentsResponseProtoMsg): _107.QueryPacketCommitmentsResponse;
                    toProto(message: _107.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _107.QueryPacketCommitmentsResponse): _107.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    typeUrl: string;
                    encode(message: _107.QueryPacketReceiptRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.QueryPacketReceiptRequest;
                    fromPartial(object: Partial<_107.QueryPacketReceiptRequest>): _107.QueryPacketReceiptRequest;
                    fromAmino(object: _107.QueryPacketReceiptRequestAmino): _107.QueryPacketReceiptRequest;
                    toAmino(message: _107.QueryPacketReceiptRequest): _107.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _107.QueryPacketReceiptRequestAminoMsg): _107.QueryPacketReceiptRequest;
                    toAminoMsg(message: _107.QueryPacketReceiptRequest): _107.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _107.QueryPacketReceiptRequestProtoMsg): _107.QueryPacketReceiptRequest;
                    toProto(message: _107.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _107.QueryPacketReceiptRequest): _107.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    typeUrl: string;
                    encode(message: _107.QueryPacketReceiptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.QueryPacketReceiptResponse;
                    fromPartial(object: Partial<_107.QueryPacketReceiptResponse>): _107.QueryPacketReceiptResponse;
                    fromAmino(object: _107.QueryPacketReceiptResponseAmino): _107.QueryPacketReceiptResponse;
                    toAmino(message: _107.QueryPacketReceiptResponse): _107.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _107.QueryPacketReceiptResponseAminoMsg): _107.QueryPacketReceiptResponse;
                    toAminoMsg(message: _107.QueryPacketReceiptResponse): _107.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _107.QueryPacketReceiptResponseProtoMsg): _107.QueryPacketReceiptResponse;
                    toProto(message: _107.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _107.QueryPacketReceiptResponse): _107.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    typeUrl: string;
                    encode(message: _107.QueryPacketAcknowledgementRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.QueryPacketAcknowledgementRequest;
                    fromPartial(object: Partial<_107.QueryPacketAcknowledgementRequest>): _107.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _107.QueryPacketAcknowledgementRequestAmino): _107.QueryPacketAcknowledgementRequest;
                    toAmino(message: _107.QueryPacketAcknowledgementRequest): _107.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _107.QueryPacketAcknowledgementRequestAminoMsg): _107.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _107.QueryPacketAcknowledgementRequest): _107.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _107.QueryPacketAcknowledgementRequestProtoMsg): _107.QueryPacketAcknowledgementRequest;
                    toProto(message: _107.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _107.QueryPacketAcknowledgementRequest): _107.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _107.QueryPacketAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.QueryPacketAcknowledgementResponse;
                    fromPartial(object: Partial<_107.QueryPacketAcknowledgementResponse>): _107.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _107.QueryPacketAcknowledgementResponseAmino): _107.QueryPacketAcknowledgementResponse;
                    toAmino(message: _107.QueryPacketAcknowledgementResponse): _107.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _107.QueryPacketAcknowledgementResponseAminoMsg): _107.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _107.QueryPacketAcknowledgementResponse): _107.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _107.QueryPacketAcknowledgementResponseProtoMsg): _107.QueryPacketAcknowledgementResponse;
                    toProto(message: _107.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _107.QueryPacketAcknowledgementResponse): _107.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    typeUrl: string;
                    encode(message: _107.QueryPacketAcknowledgementsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: Partial<_107.QueryPacketAcknowledgementsRequest>): _107.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _107.QueryPacketAcknowledgementsRequestAmino): _107.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _107.QueryPacketAcknowledgementsRequest): _107.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _107.QueryPacketAcknowledgementsRequestAminoMsg): _107.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _107.QueryPacketAcknowledgementsRequest): _107.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _107.QueryPacketAcknowledgementsRequestProtoMsg): _107.QueryPacketAcknowledgementsRequest;
                    toProto(message: _107.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _107.QueryPacketAcknowledgementsRequest): _107.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    typeUrl: string;
                    encode(message: _107.QueryPacketAcknowledgementsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: Partial<_107.QueryPacketAcknowledgementsResponse>): _107.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _107.QueryPacketAcknowledgementsResponseAmino): _107.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _107.QueryPacketAcknowledgementsResponse): _107.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _107.QueryPacketAcknowledgementsResponseAminoMsg): _107.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _107.QueryPacketAcknowledgementsResponse): _107.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _107.QueryPacketAcknowledgementsResponseProtoMsg): _107.QueryPacketAcknowledgementsResponse;
                    toProto(message: _107.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _107.QueryPacketAcknowledgementsResponse): _107.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _107.QueryUnreceivedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.QueryUnreceivedPacketsRequest;
                    fromPartial(object: Partial<_107.QueryUnreceivedPacketsRequest>): _107.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _107.QueryUnreceivedPacketsRequestAmino): _107.QueryUnreceivedPacketsRequest;
                    toAmino(message: _107.QueryUnreceivedPacketsRequest): _107.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _107.QueryUnreceivedPacketsRequestAminoMsg): _107.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _107.QueryUnreceivedPacketsRequest): _107.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _107.QueryUnreceivedPacketsRequestProtoMsg): _107.QueryUnreceivedPacketsRequest;
                    toProto(message: _107.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _107.QueryUnreceivedPacketsRequest): _107.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _107.QueryUnreceivedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.QueryUnreceivedPacketsResponse;
                    fromPartial(object: Partial<_107.QueryUnreceivedPacketsResponse>): _107.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _107.QueryUnreceivedPacketsResponseAmino): _107.QueryUnreceivedPacketsResponse;
                    toAmino(message: _107.QueryUnreceivedPacketsResponse): _107.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _107.QueryUnreceivedPacketsResponseAminoMsg): _107.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _107.QueryUnreceivedPacketsResponse): _107.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _107.QueryUnreceivedPacketsResponseProtoMsg): _107.QueryUnreceivedPacketsResponse;
                    toProto(message: _107.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _107.QueryUnreceivedPacketsResponse): _107.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    typeUrl: string;
                    encode(message: _107.QueryUnreceivedAcksRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.QueryUnreceivedAcksRequest;
                    fromPartial(object: Partial<_107.QueryUnreceivedAcksRequest>): _107.QueryUnreceivedAcksRequest;
                    fromAmino(object: _107.QueryUnreceivedAcksRequestAmino): _107.QueryUnreceivedAcksRequest;
                    toAmino(message: _107.QueryUnreceivedAcksRequest): _107.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _107.QueryUnreceivedAcksRequestAminoMsg): _107.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _107.QueryUnreceivedAcksRequest): _107.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _107.QueryUnreceivedAcksRequestProtoMsg): _107.QueryUnreceivedAcksRequest;
                    toProto(message: _107.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _107.QueryUnreceivedAcksRequest): _107.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    typeUrl: string;
                    encode(message: _107.QueryUnreceivedAcksResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.QueryUnreceivedAcksResponse;
                    fromPartial(object: Partial<_107.QueryUnreceivedAcksResponse>): _107.QueryUnreceivedAcksResponse;
                    fromAmino(object: _107.QueryUnreceivedAcksResponseAmino): _107.QueryUnreceivedAcksResponse;
                    toAmino(message: _107.QueryUnreceivedAcksResponse): _107.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _107.QueryUnreceivedAcksResponseAminoMsg): _107.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _107.QueryUnreceivedAcksResponse): _107.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _107.QueryUnreceivedAcksResponseProtoMsg): _107.QueryUnreceivedAcksResponse;
                    toProto(message: _107.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _107.QueryUnreceivedAcksResponse): _107.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    typeUrl: string;
                    encode(message: _107.QueryNextSequenceReceiveRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.QueryNextSequenceReceiveRequest;
                    fromPartial(object: Partial<_107.QueryNextSequenceReceiveRequest>): _107.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _107.QueryNextSequenceReceiveRequestAmino): _107.QueryNextSequenceReceiveRequest;
                    toAmino(message: _107.QueryNextSequenceReceiveRequest): _107.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _107.QueryNextSequenceReceiveRequestAminoMsg): _107.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _107.QueryNextSequenceReceiveRequest): _107.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _107.QueryNextSequenceReceiveRequestProtoMsg): _107.QueryNextSequenceReceiveRequest;
                    toProto(message: _107.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _107.QueryNextSequenceReceiveRequest): _107.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    typeUrl: string;
                    encode(message: _107.QueryNextSequenceReceiveResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.QueryNextSequenceReceiveResponse;
                    fromPartial(object: Partial<_107.QueryNextSequenceReceiveResponse>): _107.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _107.QueryNextSequenceReceiveResponseAmino): _107.QueryNextSequenceReceiveResponse;
                    toAmino(message: _107.QueryNextSequenceReceiveResponse): _107.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _107.QueryNextSequenceReceiveResponseAminoMsg): _107.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _107.QueryNextSequenceReceiveResponse): _107.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _107.QueryNextSequenceReceiveResponseProtoMsg): _107.QueryNextSequenceReceiveResponse;
                    toProto(message: _107.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _107.QueryNextSequenceReceiveResponse): _107.QueryNextSequenceReceiveResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _106.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.GenesisState;
                    fromPartial(object: Partial<_106.GenesisState>): _106.GenesisState;
                    fromAmino(object: _106.GenesisStateAmino): _106.GenesisState;
                    toAmino(message: _106.GenesisState): _106.GenesisStateAmino;
                    fromAminoMsg(object: _106.GenesisStateAminoMsg): _106.GenesisState;
                    toAminoMsg(message: _106.GenesisState): _106.GenesisStateAminoMsg;
                    fromProtoMsg(message: _106.GenesisStateProtoMsg): _106.GenesisState;
                    toProto(message: _106.GenesisState): Uint8Array;
                    toProtoMsg(message: _106.GenesisState): _106.GenesisStateProtoMsg;
                };
                PacketSequence: {
                    typeUrl: string;
                    encode(message: _106.PacketSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.PacketSequence;
                    fromPartial(object: Partial<_106.PacketSequence>): _106.PacketSequence;
                    fromAmino(object: _106.PacketSequenceAmino): _106.PacketSequence;
                    toAmino(message: _106.PacketSequence): _106.PacketSequenceAmino;
                    fromAminoMsg(object: _106.PacketSequenceAminoMsg): _106.PacketSequence;
                    toAminoMsg(message: _106.PacketSequence): _106.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _106.PacketSequenceProtoMsg): _106.PacketSequence;
                    toProto(message: _106.PacketSequence): Uint8Array;
                    toProtoMsg(message: _106.PacketSequence): _106.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _105.State;
                stateToJSON(object: _105.State): string;
                orderFromJSON(object: any): _105.Order;
                orderToJSON(object: _105.Order): string;
                State: typeof _105.State;
                StateSDKType: typeof _105.State;
                StateAmino: typeof _105.State;
                Order: typeof _105.Order;
                OrderSDKType: typeof _105.Order;
                OrderAmino: typeof _105.Order;
                Channel: {
                    typeUrl: string;
                    encode(message: _105.Channel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.Channel;
                    fromPartial(object: Partial<_105.Channel>): _105.Channel;
                    fromAmino(object: _105.ChannelAmino): _105.Channel;
                    toAmino(message: _105.Channel): _105.ChannelAmino;
                    fromAminoMsg(object: _105.ChannelAminoMsg): _105.Channel;
                    toAminoMsg(message: _105.Channel): _105.ChannelAminoMsg;
                    fromProtoMsg(message: _105.ChannelProtoMsg): _105.Channel;
                    toProto(message: _105.Channel): Uint8Array;
                    toProtoMsg(message: _105.Channel): _105.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    encode(message: _105.IdentifiedChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.IdentifiedChannel;
                    fromPartial(object: Partial<_105.IdentifiedChannel>): _105.IdentifiedChannel;
                    fromAmino(object: _105.IdentifiedChannelAmino): _105.IdentifiedChannel;
                    toAmino(message: _105.IdentifiedChannel): _105.IdentifiedChannelAmino;
                    fromAminoMsg(object: _105.IdentifiedChannelAminoMsg): _105.IdentifiedChannel;
                    toAminoMsg(message: _105.IdentifiedChannel): _105.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _105.IdentifiedChannelProtoMsg): _105.IdentifiedChannel;
                    toProto(message: _105.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _105.IdentifiedChannel): _105.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _105.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.Counterparty;
                    fromPartial(object: Partial<_105.Counterparty>): _105.Counterparty;
                    fromAmino(object: _105.CounterpartyAmino): _105.Counterparty;
                    toAmino(message: _105.Counterparty): _105.CounterpartyAmino;
                    fromAminoMsg(object: _105.CounterpartyAminoMsg): _105.Counterparty;
                    toAminoMsg(message: _105.Counterparty): _105.CounterpartyAminoMsg;
                    fromProtoMsg(message: _105.CounterpartyProtoMsg): _105.Counterparty;
                    toProto(message: _105.Counterparty): Uint8Array;
                    toProtoMsg(message: _105.Counterparty): _105.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    encode(message: _105.Packet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.Packet;
                    fromPartial(object: Partial<_105.Packet>): _105.Packet;
                    fromAmino(object: _105.PacketAmino): _105.Packet;
                    toAmino(message: _105.Packet): _105.PacketAmino;
                    fromAminoMsg(object: _105.PacketAminoMsg): _105.Packet;
                    toAminoMsg(message: _105.Packet): _105.PacketAminoMsg;
                    fromProtoMsg(message: _105.PacketProtoMsg): _105.Packet;
                    toProto(message: _105.Packet): Uint8Array;
                    toProtoMsg(message: _105.Packet): _105.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    encode(message: _105.PacketState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.PacketState;
                    fromPartial(object: Partial<_105.PacketState>): _105.PacketState;
                    fromAmino(object: _105.PacketStateAmino): _105.PacketState;
                    toAmino(message: _105.PacketState): _105.PacketStateAmino;
                    fromAminoMsg(object: _105.PacketStateAminoMsg): _105.PacketState;
                    toAminoMsg(message: _105.PacketState): _105.PacketStateAminoMsg;
                    fromProtoMsg(message: _105.PacketStateProtoMsg): _105.PacketState;
                    toProto(message: _105.PacketState): Uint8Array;
                    toProtoMsg(message: _105.PacketState): _105.PacketStateProtoMsg;
                };
                PacketId: {
                    typeUrl: string;
                    encode(message: _105.PacketId, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.PacketId;
                    fromPartial(object: Partial<_105.PacketId>): _105.PacketId;
                    fromAmino(object: _105.PacketIdAmino): _105.PacketId;
                    toAmino(message: _105.PacketId): _105.PacketIdAmino;
                    fromAminoMsg(object: _105.PacketIdAminoMsg): _105.PacketId;
                    toAminoMsg(message: _105.PacketId): _105.PacketIdAminoMsg;
                    fromProtoMsg(message: _105.PacketIdProtoMsg): _105.PacketId;
                    toProto(message: _105.PacketId): Uint8Array;
                    toProtoMsg(message: _105.PacketId): _105.PacketIdProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    encode(message: _105.Acknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _105.Acknowledgement;
                    fromPartial(object: Partial<_105.Acknowledgement>): _105.Acknowledgement;
                    fromAmino(object: _105.AcknowledgementAmino): _105.Acknowledgement;
                    toAmino(message: _105.Acknowledgement): _105.AcknowledgementAmino;
                    fromAminoMsg(object: _105.AcknowledgementAminoMsg): _105.Acknowledgement;
                    toAminoMsg(message: _105.Acknowledgement): _105.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _105.AcknowledgementProtoMsg): _105.Acknowledgement;
                    toProto(message: _105.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _105.Acknowledgement): _105.AcknowledgementProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _262.MsgClientImpl;
                QueryClientImpl: typeof _256.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _111.QueryClientStateRequest): Promise<_111.QueryClientStateResponse>;
                    clientStates(request?: _111.QueryClientStatesRequest): Promise<_111.QueryClientStatesResponse>;
                    consensusState(request: _111.QueryConsensusStateRequest): Promise<_111.QueryConsensusStateResponse>;
                    consensusStates(request: _111.QueryConsensusStatesRequest): Promise<_111.QueryConsensusStatesResponse>;
                    consensusStateHeights(request: _111.QueryConsensusStateHeightsRequest): Promise<_111.QueryConsensusStateHeightsResponse>;
                    clientStatus(request: _111.QueryClientStatusRequest): Promise<_111.QueryClientStatusResponse>;
                    clientParams(request?: _111.QueryClientParamsRequest): Promise<_111.QueryClientParamsResponse>;
                    upgradedClientState(request?: _111.QueryUpgradedClientStateRequest): Promise<_111.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _111.QueryUpgradedConsensusStateRequest): Promise<_111.QueryUpgradedConsensusStateResponse>;
                };
                registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _112.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _112.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _112.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _112.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _112.MsgCreateClient): {
                            typeUrl: string;
                            value: _112.MsgCreateClient;
                        };
                        updateClient(value: _112.MsgUpdateClient): {
                            typeUrl: string;
                            value: _112.MsgUpdateClient;
                        };
                        upgradeClient(value: _112.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _112.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _112.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _112.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _112.MsgCreateClient): {
                            typeUrl: string;
                            value: _112.MsgCreateClient;
                        };
                        updateClient(value: _112.MsgUpdateClient): {
                            typeUrl: string;
                            value: _112.MsgUpdateClient;
                        };
                        upgradeClient(value: _112.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _112.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _112.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _112.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _112.MsgCreateClient) => _112.MsgCreateClientAmino;
                        fromAmino: (object: _112.MsgCreateClientAmino) => _112.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _112.MsgUpdateClient) => _112.MsgUpdateClientAmino;
                        fromAmino: (object: _112.MsgUpdateClientAmino) => _112.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _112.MsgUpgradeClient) => _112.MsgUpgradeClientAmino;
                        fromAmino: (object: _112.MsgUpgradeClientAmino) => _112.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _112.MsgSubmitMisbehaviour) => _112.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _112.MsgSubmitMisbehaviourAmino) => _112.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    typeUrl: string;
                    encode(message: _112.MsgCreateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.MsgCreateClient;
                    fromPartial(object: Partial<_112.MsgCreateClient>): _112.MsgCreateClient;
                    fromAmino(object: _112.MsgCreateClientAmino): _112.MsgCreateClient;
                    toAmino(message: _112.MsgCreateClient): _112.MsgCreateClientAmino;
                    fromAminoMsg(object: _112.MsgCreateClientAminoMsg): _112.MsgCreateClient;
                    toAminoMsg(message: _112.MsgCreateClient): _112.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _112.MsgCreateClientProtoMsg): _112.MsgCreateClient;
                    toProto(message: _112.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _112.MsgCreateClient): _112.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    typeUrl: string;
                    encode(_: _112.MsgCreateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.MsgCreateClientResponse;
                    fromPartial(_: Partial<_112.MsgCreateClientResponse>): _112.MsgCreateClientResponse;
                    fromAmino(_: _112.MsgCreateClientResponseAmino): _112.MsgCreateClientResponse;
                    toAmino(_: _112.MsgCreateClientResponse): _112.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _112.MsgCreateClientResponseAminoMsg): _112.MsgCreateClientResponse;
                    toAminoMsg(message: _112.MsgCreateClientResponse): _112.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _112.MsgCreateClientResponseProtoMsg): _112.MsgCreateClientResponse;
                    toProto(message: _112.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _112.MsgCreateClientResponse): _112.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    typeUrl: string;
                    encode(message: _112.MsgUpdateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.MsgUpdateClient;
                    fromPartial(object: Partial<_112.MsgUpdateClient>): _112.MsgUpdateClient;
                    fromAmino(object: _112.MsgUpdateClientAmino): _112.MsgUpdateClient;
                    toAmino(message: _112.MsgUpdateClient): _112.MsgUpdateClientAmino;
                    fromAminoMsg(object: _112.MsgUpdateClientAminoMsg): _112.MsgUpdateClient;
                    toAminoMsg(message: _112.MsgUpdateClient): _112.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _112.MsgUpdateClientProtoMsg): _112.MsgUpdateClient;
                    toProto(message: _112.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _112.MsgUpdateClient): _112.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    typeUrl: string;
                    encode(_: _112.MsgUpdateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.MsgUpdateClientResponse;
                    fromPartial(_: Partial<_112.MsgUpdateClientResponse>): _112.MsgUpdateClientResponse;
                    fromAmino(_: _112.MsgUpdateClientResponseAmino): _112.MsgUpdateClientResponse;
                    toAmino(_: _112.MsgUpdateClientResponse): _112.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _112.MsgUpdateClientResponseAminoMsg): _112.MsgUpdateClientResponse;
                    toAminoMsg(message: _112.MsgUpdateClientResponse): _112.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _112.MsgUpdateClientResponseProtoMsg): _112.MsgUpdateClientResponse;
                    toProto(message: _112.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _112.MsgUpdateClientResponse): _112.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    typeUrl: string;
                    encode(message: _112.MsgUpgradeClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.MsgUpgradeClient;
                    fromPartial(object: Partial<_112.MsgUpgradeClient>): _112.MsgUpgradeClient;
                    fromAmino(object: _112.MsgUpgradeClientAmino): _112.MsgUpgradeClient;
                    toAmino(message: _112.MsgUpgradeClient): _112.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _112.MsgUpgradeClientAminoMsg): _112.MsgUpgradeClient;
                    toAminoMsg(message: _112.MsgUpgradeClient): _112.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _112.MsgUpgradeClientProtoMsg): _112.MsgUpgradeClient;
                    toProto(message: _112.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _112.MsgUpgradeClient): _112.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    typeUrl: string;
                    encode(_: _112.MsgUpgradeClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.MsgUpgradeClientResponse;
                    fromPartial(_: Partial<_112.MsgUpgradeClientResponse>): _112.MsgUpgradeClientResponse;
                    fromAmino(_: _112.MsgUpgradeClientResponseAmino): _112.MsgUpgradeClientResponse;
                    toAmino(_: _112.MsgUpgradeClientResponse): _112.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _112.MsgUpgradeClientResponseAminoMsg): _112.MsgUpgradeClientResponse;
                    toAminoMsg(message: _112.MsgUpgradeClientResponse): _112.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _112.MsgUpgradeClientResponseProtoMsg): _112.MsgUpgradeClientResponse;
                    toProto(message: _112.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _112.MsgUpgradeClientResponse): _112.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    typeUrl: string;
                    encode(message: _112.MsgSubmitMisbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.MsgSubmitMisbehaviour;
                    fromPartial(object: Partial<_112.MsgSubmitMisbehaviour>): _112.MsgSubmitMisbehaviour;
                    fromAmino(object: _112.MsgSubmitMisbehaviourAmino): _112.MsgSubmitMisbehaviour;
                    toAmino(message: _112.MsgSubmitMisbehaviour): _112.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _112.MsgSubmitMisbehaviourAminoMsg): _112.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _112.MsgSubmitMisbehaviour): _112.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _112.MsgSubmitMisbehaviourProtoMsg): _112.MsgSubmitMisbehaviour;
                    toProto(message: _112.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _112.MsgSubmitMisbehaviour): _112.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    typeUrl: string;
                    encode(_: _112.MsgSubmitMisbehaviourResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: Partial<_112.MsgSubmitMisbehaviourResponse>): _112.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _112.MsgSubmitMisbehaviourResponseAmino): _112.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _112.MsgSubmitMisbehaviourResponse): _112.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _112.MsgSubmitMisbehaviourResponseAminoMsg): _112.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _112.MsgSubmitMisbehaviourResponse): _112.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _112.MsgSubmitMisbehaviourResponseProtoMsg): _112.MsgSubmitMisbehaviourResponse;
                    toProto(message: _112.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _112.MsgSubmitMisbehaviourResponse): _112.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    typeUrl: string;
                    encode(message: _111.QueryClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QueryClientStateRequest;
                    fromPartial(object: Partial<_111.QueryClientStateRequest>): _111.QueryClientStateRequest;
                    fromAmino(object: _111.QueryClientStateRequestAmino): _111.QueryClientStateRequest;
                    toAmino(message: _111.QueryClientStateRequest): _111.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _111.QueryClientStateRequestAminoMsg): _111.QueryClientStateRequest;
                    toAminoMsg(message: _111.QueryClientStateRequest): _111.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryClientStateRequestProtoMsg): _111.QueryClientStateRequest;
                    toProto(message: _111.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryClientStateRequest): _111.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    typeUrl: string;
                    encode(message: _111.QueryClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QueryClientStateResponse;
                    fromPartial(object: Partial<_111.QueryClientStateResponse>): _111.QueryClientStateResponse;
                    fromAmino(object: _111.QueryClientStateResponseAmino): _111.QueryClientStateResponse;
                    toAmino(message: _111.QueryClientStateResponse): _111.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _111.QueryClientStateResponseAminoMsg): _111.QueryClientStateResponse;
                    toAminoMsg(message: _111.QueryClientStateResponse): _111.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryClientStateResponseProtoMsg): _111.QueryClientStateResponse;
                    toProto(message: _111.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryClientStateResponse): _111.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    typeUrl: string;
                    encode(message: _111.QueryClientStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QueryClientStatesRequest;
                    fromPartial(object: Partial<_111.QueryClientStatesRequest>): _111.QueryClientStatesRequest;
                    fromAmino(object: _111.QueryClientStatesRequestAmino): _111.QueryClientStatesRequest;
                    toAmino(message: _111.QueryClientStatesRequest): _111.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _111.QueryClientStatesRequestAminoMsg): _111.QueryClientStatesRequest;
                    toAminoMsg(message: _111.QueryClientStatesRequest): _111.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryClientStatesRequestProtoMsg): _111.QueryClientStatesRequest;
                    toProto(message: _111.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryClientStatesRequest): _111.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    typeUrl: string;
                    encode(message: _111.QueryClientStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QueryClientStatesResponse;
                    fromPartial(object: Partial<_111.QueryClientStatesResponse>): _111.QueryClientStatesResponse;
                    fromAmino(object: _111.QueryClientStatesResponseAmino): _111.QueryClientStatesResponse;
                    toAmino(message: _111.QueryClientStatesResponse): _111.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _111.QueryClientStatesResponseAminoMsg): _111.QueryClientStatesResponse;
                    toAminoMsg(message: _111.QueryClientStatesResponse): _111.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryClientStatesResponseProtoMsg): _111.QueryClientStatesResponse;
                    toProto(message: _111.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryClientStatesResponse): _111.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _111.QueryConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QueryConsensusStateRequest;
                    fromPartial(object: Partial<_111.QueryConsensusStateRequest>): _111.QueryConsensusStateRequest;
                    fromAmino(object: _111.QueryConsensusStateRequestAmino): _111.QueryConsensusStateRequest;
                    toAmino(message: _111.QueryConsensusStateRequest): _111.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _111.QueryConsensusStateRequestAminoMsg): _111.QueryConsensusStateRequest;
                    toAminoMsg(message: _111.QueryConsensusStateRequest): _111.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryConsensusStateRequestProtoMsg): _111.QueryConsensusStateRequest;
                    toProto(message: _111.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryConsensusStateRequest): _111.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _111.QueryConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QueryConsensusStateResponse;
                    fromPartial(object: Partial<_111.QueryConsensusStateResponse>): _111.QueryConsensusStateResponse;
                    fromAmino(object: _111.QueryConsensusStateResponseAmino): _111.QueryConsensusStateResponse;
                    toAmino(message: _111.QueryConsensusStateResponse): _111.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _111.QueryConsensusStateResponseAminoMsg): _111.QueryConsensusStateResponse;
                    toAminoMsg(message: _111.QueryConsensusStateResponse): _111.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryConsensusStateResponseProtoMsg): _111.QueryConsensusStateResponse;
                    toProto(message: _111.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryConsensusStateResponse): _111.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    typeUrl: string;
                    encode(message: _111.QueryConsensusStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QueryConsensusStatesRequest;
                    fromPartial(object: Partial<_111.QueryConsensusStatesRequest>): _111.QueryConsensusStatesRequest;
                    fromAmino(object: _111.QueryConsensusStatesRequestAmino): _111.QueryConsensusStatesRequest;
                    toAmino(message: _111.QueryConsensusStatesRequest): _111.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _111.QueryConsensusStatesRequestAminoMsg): _111.QueryConsensusStatesRequest;
                    toAminoMsg(message: _111.QueryConsensusStatesRequest): _111.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryConsensusStatesRequestProtoMsg): _111.QueryConsensusStatesRequest;
                    toProto(message: _111.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryConsensusStatesRequest): _111.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    typeUrl: string;
                    encode(message: _111.QueryConsensusStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QueryConsensusStatesResponse;
                    fromPartial(object: Partial<_111.QueryConsensusStatesResponse>): _111.QueryConsensusStatesResponse;
                    fromAmino(object: _111.QueryConsensusStatesResponseAmino): _111.QueryConsensusStatesResponse;
                    toAmino(message: _111.QueryConsensusStatesResponse): _111.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _111.QueryConsensusStatesResponseAminoMsg): _111.QueryConsensusStatesResponse;
                    toAminoMsg(message: _111.QueryConsensusStatesResponse): _111.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryConsensusStatesResponseProtoMsg): _111.QueryConsensusStatesResponse;
                    toProto(message: _111.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryConsensusStatesResponse): _111.QueryConsensusStatesResponseProtoMsg;
                };
                QueryConsensusStateHeightsRequest: {
                    typeUrl: string;
                    encode(message: _111.QueryConsensusStateHeightsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QueryConsensusStateHeightsRequest;
                    fromPartial(object: Partial<_111.QueryConsensusStateHeightsRequest>): _111.QueryConsensusStateHeightsRequest;
                    fromAmino(object: _111.QueryConsensusStateHeightsRequestAmino): _111.QueryConsensusStateHeightsRequest;
                    toAmino(message: _111.QueryConsensusStateHeightsRequest): _111.QueryConsensusStateHeightsRequestAmino;
                    fromAminoMsg(object: _111.QueryConsensusStateHeightsRequestAminoMsg): _111.QueryConsensusStateHeightsRequest;
                    toAminoMsg(message: _111.QueryConsensusStateHeightsRequest): _111.QueryConsensusStateHeightsRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryConsensusStateHeightsRequestProtoMsg): _111.QueryConsensusStateHeightsRequest;
                    toProto(message: _111.QueryConsensusStateHeightsRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryConsensusStateHeightsRequest): _111.QueryConsensusStateHeightsRequestProtoMsg;
                };
                QueryConsensusStateHeightsResponse: {
                    typeUrl: string;
                    encode(message: _111.QueryConsensusStateHeightsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QueryConsensusStateHeightsResponse;
                    fromPartial(object: Partial<_111.QueryConsensusStateHeightsResponse>): _111.QueryConsensusStateHeightsResponse;
                    fromAmino(object: _111.QueryConsensusStateHeightsResponseAmino): _111.QueryConsensusStateHeightsResponse;
                    toAmino(message: _111.QueryConsensusStateHeightsResponse): _111.QueryConsensusStateHeightsResponseAmino;
                    fromAminoMsg(object: _111.QueryConsensusStateHeightsResponseAminoMsg): _111.QueryConsensusStateHeightsResponse;
                    toAminoMsg(message: _111.QueryConsensusStateHeightsResponse): _111.QueryConsensusStateHeightsResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryConsensusStateHeightsResponseProtoMsg): _111.QueryConsensusStateHeightsResponse;
                    toProto(message: _111.QueryConsensusStateHeightsResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryConsensusStateHeightsResponse): _111.QueryConsensusStateHeightsResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    typeUrl: string;
                    encode(message: _111.QueryClientStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QueryClientStatusRequest;
                    fromPartial(object: Partial<_111.QueryClientStatusRequest>): _111.QueryClientStatusRequest;
                    fromAmino(object: _111.QueryClientStatusRequestAmino): _111.QueryClientStatusRequest;
                    toAmino(message: _111.QueryClientStatusRequest): _111.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _111.QueryClientStatusRequestAminoMsg): _111.QueryClientStatusRequest;
                    toAminoMsg(message: _111.QueryClientStatusRequest): _111.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryClientStatusRequestProtoMsg): _111.QueryClientStatusRequest;
                    toProto(message: _111.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryClientStatusRequest): _111.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    typeUrl: string;
                    encode(message: _111.QueryClientStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QueryClientStatusResponse;
                    fromPartial(object: Partial<_111.QueryClientStatusResponse>): _111.QueryClientStatusResponse;
                    fromAmino(object: _111.QueryClientStatusResponseAmino): _111.QueryClientStatusResponse;
                    toAmino(message: _111.QueryClientStatusResponse): _111.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _111.QueryClientStatusResponseAminoMsg): _111.QueryClientStatusResponse;
                    toAminoMsg(message: _111.QueryClientStatusResponse): _111.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryClientStatusResponseProtoMsg): _111.QueryClientStatusResponse;
                    toProto(message: _111.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryClientStatusResponse): _111.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    typeUrl: string;
                    encode(_: _111.QueryClientParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QueryClientParamsRequest;
                    fromPartial(_: Partial<_111.QueryClientParamsRequest>): _111.QueryClientParamsRequest;
                    fromAmino(_: _111.QueryClientParamsRequestAmino): _111.QueryClientParamsRequest;
                    toAmino(_: _111.QueryClientParamsRequest): _111.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _111.QueryClientParamsRequestAminoMsg): _111.QueryClientParamsRequest;
                    toAminoMsg(message: _111.QueryClientParamsRequest): _111.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryClientParamsRequestProtoMsg): _111.QueryClientParamsRequest;
                    toProto(message: _111.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryClientParamsRequest): _111.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    typeUrl: string;
                    encode(message: _111.QueryClientParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QueryClientParamsResponse;
                    fromPartial(object: Partial<_111.QueryClientParamsResponse>): _111.QueryClientParamsResponse;
                    fromAmino(object: _111.QueryClientParamsResponseAmino): _111.QueryClientParamsResponse;
                    toAmino(message: _111.QueryClientParamsResponse): _111.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _111.QueryClientParamsResponseAminoMsg): _111.QueryClientParamsResponse;
                    toAminoMsg(message: _111.QueryClientParamsResponse): _111.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryClientParamsResponseProtoMsg): _111.QueryClientParamsResponse;
                    toProto(message: _111.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryClientParamsResponse): _111.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    typeUrl: string;
                    encode(_: _111.QueryUpgradedClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QueryUpgradedClientStateRequest;
                    fromPartial(_: Partial<_111.QueryUpgradedClientStateRequest>): _111.QueryUpgradedClientStateRequest;
                    fromAmino(_: _111.QueryUpgradedClientStateRequestAmino): _111.QueryUpgradedClientStateRequest;
                    toAmino(_: _111.QueryUpgradedClientStateRequest): _111.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _111.QueryUpgradedClientStateRequestAminoMsg): _111.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _111.QueryUpgradedClientStateRequest): _111.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryUpgradedClientStateRequestProtoMsg): _111.QueryUpgradedClientStateRequest;
                    toProto(message: _111.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryUpgradedClientStateRequest): _111.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    typeUrl: string;
                    encode(message: _111.QueryUpgradedClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QueryUpgradedClientStateResponse;
                    fromPartial(object: Partial<_111.QueryUpgradedClientStateResponse>): _111.QueryUpgradedClientStateResponse;
                    fromAmino(object: _111.QueryUpgradedClientStateResponseAmino): _111.QueryUpgradedClientStateResponse;
                    toAmino(message: _111.QueryUpgradedClientStateResponse): _111.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _111.QueryUpgradedClientStateResponseAminoMsg): _111.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _111.QueryUpgradedClientStateResponse): _111.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryUpgradedClientStateResponseProtoMsg): _111.QueryUpgradedClientStateResponse;
                    toProto(message: _111.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryUpgradedClientStateResponse): _111.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    typeUrl: string;
                    encode(_: _111.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: Partial<_111.QueryUpgradedConsensusStateRequest>): _111.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _111.QueryUpgradedConsensusStateRequestAmino): _111.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _111.QueryUpgradedConsensusStateRequest): _111.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _111.QueryUpgradedConsensusStateRequestAminoMsg): _111.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _111.QueryUpgradedConsensusStateRequest): _111.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryUpgradedConsensusStateRequestProtoMsg): _111.QueryUpgradedConsensusStateRequest;
                    toProto(message: _111.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryUpgradedConsensusStateRequest): _111.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _111.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: Partial<_111.QueryUpgradedConsensusStateResponse>): _111.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _111.QueryUpgradedConsensusStateResponseAmino): _111.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _111.QueryUpgradedConsensusStateResponse): _111.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _111.QueryUpgradedConsensusStateResponseAminoMsg): _111.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _111.QueryUpgradedConsensusStateResponse): _111.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryUpgradedConsensusStateResponseProtoMsg): _111.QueryUpgradedConsensusStateResponse;
                    toProto(message: _111.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryUpgradedConsensusStateResponse): _111.QueryUpgradedConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _110.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.GenesisState;
                    fromPartial(object: Partial<_110.GenesisState>): _110.GenesisState;
                    fromAmino(object: _110.GenesisStateAmino): _110.GenesisState;
                    toAmino(message: _110.GenesisState): _110.GenesisStateAmino;
                    fromAminoMsg(object: _110.GenesisStateAminoMsg): _110.GenesisState;
                    toAminoMsg(message: _110.GenesisState): _110.GenesisStateAminoMsg;
                    fromProtoMsg(message: _110.GenesisStateProtoMsg): _110.GenesisState;
                    toProto(message: _110.GenesisState): Uint8Array;
                    toProtoMsg(message: _110.GenesisState): _110.GenesisStateProtoMsg;
                };
                GenesisMetadata: {
                    typeUrl: string;
                    encode(message: _110.GenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.GenesisMetadata;
                    fromPartial(object: Partial<_110.GenesisMetadata>): _110.GenesisMetadata;
                    fromAmino(object: _110.GenesisMetadataAmino): _110.GenesisMetadata;
                    toAmino(message: _110.GenesisMetadata): _110.GenesisMetadataAmino;
                    fromAminoMsg(object: _110.GenesisMetadataAminoMsg): _110.GenesisMetadata;
                    toAminoMsg(message: _110.GenesisMetadata): _110.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _110.GenesisMetadataProtoMsg): _110.GenesisMetadata;
                    toProto(message: _110.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _110.GenesisMetadata): _110.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    typeUrl: string;
                    encode(message: _110.IdentifiedGenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.IdentifiedGenesisMetadata;
                    fromPartial(object: Partial<_110.IdentifiedGenesisMetadata>): _110.IdentifiedGenesisMetadata;
                    fromAmino(object: _110.IdentifiedGenesisMetadataAmino): _110.IdentifiedGenesisMetadata;
                    toAmino(message: _110.IdentifiedGenesisMetadata): _110.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _110.IdentifiedGenesisMetadataAminoMsg): _110.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _110.IdentifiedGenesisMetadata): _110.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _110.IdentifiedGenesisMetadataProtoMsg): _110.IdentifiedGenesisMetadata;
                    toProto(message: _110.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _110.IdentifiedGenesisMetadata): _110.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    typeUrl: string;
                    encode(message: _109.IdentifiedClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.IdentifiedClientState;
                    fromPartial(object: Partial<_109.IdentifiedClientState>): _109.IdentifiedClientState;
                    fromAmino(object: _109.IdentifiedClientStateAmino): _109.IdentifiedClientState;
                    toAmino(message: _109.IdentifiedClientState): _109.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _109.IdentifiedClientStateAminoMsg): _109.IdentifiedClientState;
                    toAminoMsg(message: _109.IdentifiedClientState): _109.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _109.IdentifiedClientStateProtoMsg): _109.IdentifiedClientState;
                    toProto(message: _109.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _109.IdentifiedClientState): _109.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    encode(message: _109.ConsensusStateWithHeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.ConsensusStateWithHeight;
                    fromPartial(object: Partial<_109.ConsensusStateWithHeight>): _109.ConsensusStateWithHeight;
                    fromAmino(object: _109.ConsensusStateWithHeightAmino): _109.ConsensusStateWithHeight;
                    toAmino(message: _109.ConsensusStateWithHeight): _109.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _109.ConsensusStateWithHeightAminoMsg): _109.ConsensusStateWithHeight;
                    toAminoMsg(message: _109.ConsensusStateWithHeight): _109.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _109.ConsensusStateWithHeightProtoMsg): _109.ConsensusStateWithHeight;
                    toProto(message: _109.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _109.ConsensusStateWithHeight): _109.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    encode(message: _109.ClientConsensusStates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.ClientConsensusStates;
                    fromPartial(object: Partial<_109.ClientConsensusStates>): _109.ClientConsensusStates;
                    fromAmino(object: _109.ClientConsensusStatesAmino): _109.ClientConsensusStates;
                    toAmino(message: _109.ClientConsensusStates): _109.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _109.ClientConsensusStatesAminoMsg): _109.ClientConsensusStates;
                    toAminoMsg(message: _109.ClientConsensusStates): _109.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _109.ClientConsensusStatesProtoMsg): _109.ClientConsensusStates;
                    toProto(message: _109.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _109.ClientConsensusStates): _109.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    encode(message: _109.ClientUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.ClientUpdateProposal;
                    fromPartial(object: Partial<_109.ClientUpdateProposal>): _109.ClientUpdateProposal;
                    fromAmino(object: _109.ClientUpdateProposalAmino): _109.ClientUpdateProposal;
                    toAmino(message: _109.ClientUpdateProposal): _109.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _109.ClientUpdateProposalAminoMsg): _109.ClientUpdateProposal;
                    toAminoMsg(message: _109.ClientUpdateProposal): _109.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _109.ClientUpdateProposalProtoMsg): _109.ClientUpdateProposal;
                    toProto(message: _109.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _109.ClientUpdateProposal): _109.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    encode(message: _109.UpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.UpgradeProposal;
                    fromPartial(object: Partial<_109.UpgradeProposal>): _109.UpgradeProposal;
                    fromAmino(object: _109.UpgradeProposalAmino): _109.UpgradeProposal;
                    toAmino(message: _109.UpgradeProposal): _109.UpgradeProposalAmino;
                    fromAminoMsg(object: _109.UpgradeProposalAminoMsg): _109.UpgradeProposal;
                    toAminoMsg(message: _109.UpgradeProposal): _109.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _109.UpgradeProposalProtoMsg): _109.UpgradeProposal;
                    toProto(message: _109.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _109.UpgradeProposal): _109.UpgradeProposalProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    encode(message: _109.Height, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.Height;
                    fromPartial(object: Partial<_109.Height>): _109.Height;
                    fromAmino(object: _109.HeightAmino): _109.Height;
                    toAmino(message: _109.Height): _109.HeightAmino;
                    fromAminoMsg(object: _109.HeightAminoMsg): _109.Height;
                    toAminoMsg(message: _109.Height): _109.HeightAminoMsg;
                    fromProtoMsg(message: _109.HeightProtoMsg): _109.Height;
                    toProto(message: _109.Height): Uint8Array;
                    toProtoMsg(message: _109.Height): _109.HeightProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _109.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.Params;
                    fromPartial(object: Partial<_109.Params>): _109.Params;
                    fromAmino(object: _109.ParamsAmino): _109.Params;
                    toAmino(message: _109.Params): _109.ParamsAmino;
                    fromAminoMsg(object: _109.ParamsAminoMsg): _109.Params;
                    toAminoMsg(message: _109.Params): _109.ParamsAminoMsg;
                    fromProtoMsg(message: _109.ParamsProtoMsg): _109.Params;
                    toProto(message: _109.Params): Uint8Array;
                    toProtoMsg(message: _109.Params): _109.ParamsProtoMsg;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    typeUrl: string;
                    encode(message: _113.MerkleRoot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.MerkleRoot;
                    fromPartial(object: Partial<_113.MerkleRoot>): _113.MerkleRoot;
                    fromAmino(object: _113.MerkleRootAmino): _113.MerkleRoot;
                    toAmino(message: _113.MerkleRoot): _113.MerkleRootAmino;
                    fromAminoMsg(object: _113.MerkleRootAminoMsg): _113.MerkleRoot;
                    toAminoMsg(message: _113.MerkleRoot): _113.MerkleRootAminoMsg;
                    fromProtoMsg(message: _113.MerkleRootProtoMsg): _113.MerkleRoot;
                    toProto(message: _113.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _113.MerkleRoot): _113.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    typeUrl: string;
                    encode(message: _113.MerklePrefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.MerklePrefix;
                    fromPartial(object: Partial<_113.MerklePrefix>): _113.MerklePrefix;
                    fromAmino(object: _113.MerklePrefixAmino): _113.MerklePrefix;
                    toAmino(message: _113.MerklePrefix): _113.MerklePrefixAmino;
                    fromAminoMsg(object: _113.MerklePrefixAminoMsg): _113.MerklePrefix;
                    toAminoMsg(message: _113.MerklePrefix): _113.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _113.MerklePrefixProtoMsg): _113.MerklePrefix;
                    toProto(message: _113.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _113.MerklePrefix): _113.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    typeUrl: string;
                    encode(message: _113.MerklePath, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.MerklePath;
                    fromPartial(object: Partial<_113.MerklePath>): _113.MerklePath;
                    fromAmino(object: _113.MerklePathAmino): _113.MerklePath;
                    toAmino(message: _113.MerklePath): _113.MerklePathAmino;
                    fromAminoMsg(object: _113.MerklePathAminoMsg): _113.MerklePath;
                    toAminoMsg(message: _113.MerklePath): _113.MerklePathAminoMsg;
                    fromProtoMsg(message: _113.MerklePathProtoMsg): _113.MerklePath;
                    toProto(message: _113.MerklePath): Uint8Array;
                    toProtoMsg(message: _113.MerklePath): _113.MerklePathProtoMsg;
                };
                MerkleProof: {
                    typeUrl: string;
                    encode(message: _113.MerkleProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.MerkleProof;
                    fromPartial(object: Partial<_113.MerkleProof>): _113.MerkleProof;
                    fromAmino(object: _113.MerkleProofAmino): _113.MerkleProof;
                    toAmino(message: _113.MerkleProof): _113.MerkleProofAmino;
                    fromAminoMsg(object: _113.MerkleProofAminoMsg): _113.MerkleProof;
                    toAminoMsg(message: _113.MerkleProof): _113.MerkleProofAminoMsg;
                    fromProtoMsg(message: _113.MerkleProofProtoMsg): _113.MerkleProof;
                    toProto(message: _113.MerkleProof): Uint8Array;
                    toProtoMsg(message: _113.MerkleProof): _113.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _263.MsgClientImpl;
                QueryClientImpl: typeof _257.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _116.QueryConnectionRequest): Promise<_116.QueryConnectionResponse>;
                    connections(request?: _116.QueryConnectionsRequest): Promise<_116.QueryConnectionsResponse>;
                    clientConnections(request: _116.QueryClientConnectionsRequest): Promise<_116.QueryClientConnectionsResponse>;
                    connectionClientState(request: _116.QueryConnectionClientStateRequest): Promise<_116.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _116.QueryConnectionConsensusStateRequest): Promise<_116.QueryConnectionConsensusStateResponse>;
                    connectionParams(request?: _116.QueryConnectionParamsRequest): Promise<_116.QueryConnectionParamsResponse>;
                };
                registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _117.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _117.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _117.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _117.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _117.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _117.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _117.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _117.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _117.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _117.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _117.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _117.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _117.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _117.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _117.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _117.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _117.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _117.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _117.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _117.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _117.MsgConnectionOpenInit) => _117.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _117.MsgConnectionOpenInitAmino) => _117.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _117.MsgConnectionOpenTry) => _117.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _117.MsgConnectionOpenTryAmino) => _117.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _117.MsgConnectionOpenAck) => _117.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _117.MsgConnectionOpenAckAmino) => _117.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _117.MsgConnectionOpenConfirm) => _117.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _117.MsgConnectionOpenConfirmAmino) => _117.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    typeUrl: string;
                    encode(message: _117.MsgConnectionOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.MsgConnectionOpenInit;
                    fromPartial(object: Partial<_117.MsgConnectionOpenInit>): _117.MsgConnectionOpenInit;
                    fromAmino(object: _117.MsgConnectionOpenInitAmino): _117.MsgConnectionOpenInit;
                    toAmino(message: _117.MsgConnectionOpenInit): _117.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _117.MsgConnectionOpenInitAminoMsg): _117.MsgConnectionOpenInit;
                    toAminoMsg(message: _117.MsgConnectionOpenInit): _117.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _117.MsgConnectionOpenInitProtoMsg): _117.MsgConnectionOpenInit;
                    toProto(message: _117.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _117.MsgConnectionOpenInit): _117.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    typeUrl: string;
                    encode(_: _117.MsgConnectionOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.MsgConnectionOpenInitResponse;
                    fromPartial(_: Partial<_117.MsgConnectionOpenInitResponse>): _117.MsgConnectionOpenInitResponse;
                    fromAmino(_: _117.MsgConnectionOpenInitResponseAmino): _117.MsgConnectionOpenInitResponse;
                    toAmino(_: _117.MsgConnectionOpenInitResponse): _117.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _117.MsgConnectionOpenInitResponseAminoMsg): _117.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _117.MsgConnectionOpenInitResponse): _117.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _117.MsgConnectionOpenInitResponseProtoMsg): _117.MsgConnectionOpenInitResponse;
                    toProto(message: _117.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _117.MsgConnectionOpenInitResponse): _117.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    typeUrl: string;
                    encode(message: _117.MsgConnectionOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.MsgConnectionOpenTry;
                    fromPartial(object: Partial<_117.MsgConnectionOpenTry>): _117.MsgConnectionOpenTry;
                    fromAmino(object: _117.MsgConnectionOpenTryAmino): _117.MsgConnectionOpenTry;
                    toAmino(message: _117.MsgConnectionOpenTry): _117.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _117.MsgConnectionOpenTryAminoMsg): _117.MsgConnectionOpenTry;
                    toAminoMsg(message: _117.MsgConnectionOpenTry): _117.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _117.MsgConnectionOpenTryProtoMsg): _117.MsgConnectionOpenTry;
                    toProto(message: _117.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _117.MsgConnectionOpenTry): _117.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    typeUrl: string;
                    encode(_: _117.MsgConnectionOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.MsgConnectionOpenTryResponse;
                    fromPartial(_: Partial<_117.MsgConnectionOpenTryResponse>): _117.MsgConnectionOpenTryResponse;
                    fromAmino(_: _117.MsgConnectionOpenTryResponseAmino): _117.MsgConnectionOpenTryResponse;
                    toAmino(_: _117.MsgConnectionOpenTryResponse): _117.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _117.MsgConnectionOpenTryResponseAminoMsg): _117.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _117.MsgConnectionOpenTryResponse): _117.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _117.MsgConnectionOpenTryResponseProtoMsg): _117.MsgConnectionOpenTryResponse;
                    toProto(message: _117.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _117.MsgConnectionOpenTryResponse): _117.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    typeUrl: string;
                    encode(message: _117.MsgConnectionOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.MsgConnectionOpenAck;
                    fromPartial(object: Partial<_117.MsgConnectionOpenAck>): _117.MsgConnectionOpenAck;
                    fromAmino(object: _117.MsgConnectionOpenAckAmino): _117.MsgConnectionOpenAck;
                    toAmino(message: _117.MsgConnectionOpenAck): _117.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _117.MsgConnectionOpenAckAminoMsg): _117.MsgConnectionOpenAck;
                    toAminoMsg(message: _117.MsgConnectionOpenAck): _117.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _117.MsgConnectionOpenAckProtoMsg): _117.MsgConnectionOpenAck;
                    toProto(message: _117.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _117.MsgConnectionOpenAck): _117.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _117.MsgConnectionOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.MsgConnectionOpenAckResponse;
                    fromPartial(_: Partial<_117.MsgConnectionOpenAckResponse>): _117.MsgConnectionOpenAckResponse;
                    fromAmino(_: _117.MsgConnectionOpenAckResponseAmino): _117.MsgConnectionOpenAckResponse;
                    toAmino(_: _117.MsgConnectionOpenAckResponse): _117.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _117.MsgConnectionOpenAckResponseAminoMsg): _117.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _117.MsgConnectionOpenAckResponse): _117.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _117.MsgConnectionOpenAckResponseProtoMsg): _117.MsgConnectionOpenAckResponse;
                    toProto(message: _117.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _117.MsgConnectionOpenAckResponse): _117.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    typeUrl: string;
                    encode(message: _117.MsgConnectionOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.MsgConnectionOpenConfirm;
                    fromPartial(object: Partial<_117.MsgConnectionOpenConfirm>): _117.MsgConnectionOpenConfirm;
                    fromAmino(object: _117.MsgConnectionOpenConfirmAmino): _117.MsgConnectionOpenConfirm;
                    toAmino(message: _117.MsgConnectionOpenConfirm): _117.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _117.MsgConnectionOpenConfirmAminoMsg): _117.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _117.MsgConnectionOpenConfirm): _117.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _117.MsgConnectionOpenConfirmProtoMsg): _117.MsgConnectionOpenConfirm;
                    toProto(message: _117.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _117.MsgConnectionOpenConfirm): _117.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _117.MsgConnectionOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: Partial<_117.MsgConnectionOpenConfirmResponse>): _117.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _117.MsgConnectionOpenConfirmResponseAmino): _117.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _117.MsgConnectionOpenConfirmResponse): _117.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _117.MsgConnectionOpenConfirmResponseAminoMsg): _117.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _117.MsgConnectionOpenConfirmResponse): _117.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _117.MsgConnectionOpenConfirmResponseProtoMsg): _117.MsgConnectionOpenConfirmResponse;
                    toProto(message: _117.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _117.MsgConnectionOpenConfirmResponse): _117.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    typeUrl: string;
                    encode(message: _116.QueryConnectionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.QueryConnectionRequest;
                    fromPartial(object: Partial<_116.QueryConnectionRequest>): _116.QueryConnectionRequest;
                    fromAmino(object: _116.QueryConnectionRequestAmino): _116.QueryConnectionRequest;
                    toAmino(message: _116.QueryConnectionRequest): _116.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _116.QueryConnectionRequestAminoMsg): _116.QueryConnectionRequest;
                    toAminoMsg(message: _116.QueryConnectionRequest): _116.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _116.QueryConnectionRequestProtoMsg): _116.QueryConnectionRequest;
                    toProto(message: _116.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _116.QueryConnectionRequest): _116.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    typeUrl: string;
                    encode(message: _116.QueryConnectionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.QueryConnectionResponse;
                    fromPartial(object: Partial<_116.QueryConnectionResponse>): _116.QueryConnectionResponse;
                    fromAmino(object: _116.QueryConnectionResponseAmino): _116.QueryConnectionResponse;
                    toAmino(message: _116.QueryConnectionResponse): _116.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _116.QueryConnectionResponseAminoMsg): _116.QueryConnectionResponse;
                    toAminoMsg(message: _116.QueryConnectionResponse): _116.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _116.QueryConnectionResponseProtoMsg): _116.QueryConnectionResponse;
                    toProto(message: _116.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _116.QueryConnectionResponse): _116.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _116.QueryConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.QueryConnectionsRequest;
                    fromPartial(object: Partial<_116.QueryConnectionsRequest>): _116.QueryConnectionsRequest;
                    fromAmino(object: _116.QueryConnectionsRequestAmino): _116.QueryConnectionsRequest;
                    toAmino(message: _116.QueryConnectionsRequest): _116.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _116.QueryConnectionsRequestAminoMsg): _116.QueryConnectionsRequest;
                    toAminoMsg(message: _116.QueryConnectionsRequest): _116.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _116.QueryConnectionsRequestProtoMsg): _116.QueryConnectionsRequest;
                    toProto(message: _116.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _116.QueryConnectionsRequest): _116.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _116.QueryConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.QueryConnectionsResponse;
                    fromPartial(object: Partial<_116.QueryConnectionsResponse>): _116.QueryConnectionsResponse;
                    fromAmino(object: _116.QueryConnectionsResponseAmino): _116.QueryConnectionsResponse;
                    toAmino(message: _116.QueryConnectionsResponse): _116.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _116.QueryConnectionsResponseAminoMsg): _116.QueryConnectionsResponse;
                    toAminoMsg(message: _116.QueryConnectionsResponse): _116.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _116.QueryConnectionsResponseProtoMsg): _116.QueryConnectionsResponse;
                    toProto(message: _116.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _116.QueryConnectionsResponse): _116.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _116.QueryClientConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.QueryClientConnectionsRequest;
                    fromPartial(object: Partial<_116.QueryClientConnectionsRequest>): _116.QueryClientConnectionsRequest;
                    fromAmino(object: _116.QueryClientConnectionsRequestAmino): _116.QueryClientConnectionsRequest;
                    toAmino(message: _116.QueryClientConnectionsRequest): _116.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _116.QueryClientConnectionsRequestAminoMsg): _116.QueryClientConnectionsRequest;
                    toAminoMsg(message: _116.QueryClientConnectionsRequest): _116.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _116.QueryClientConnectionsRequestProtoMsg): _116.QueryClientConnectionsRequest;
                    toProto(message: _116.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _116.QueryClientConnectionsRequest): _116.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _116.QueryClientConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.QueryClientConnectionsResponse;
                    fromPartial(object: Partial<_116.QueryClientConnectionsResponse>): _116.QueryClientConnectionsResponse;
                    fromAmino(object: _116.QueryClientConnectionsResponseAmino): _116.QueryClientConnectionsResponse;
                    toAmino(message: _116.QueryClientConnectionsResponse): _116.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _116.QueryClientConnectionsResponseAminoMsg): _116.QueryClientConnectionsResponse;
                    toAminoMsg(message: _116.QueryClientConnectionsResponse): _116.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _116.QueryClientConnectionsResponseProtoMsg): _116.QueryClientConnectionsResponse;
                    toProto(message: _116.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _116.QueryClientConnectionsResponse): _116.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    typeUrl: string;
                    encode(message: _116.QueryConnectionClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.QueryConnectionClientStateRequest;
                    fromPartial(object: Partial<_116.QueryConnectionClientStateRequest>): _116.QueryConnectionClientStateRequest;
                    fromAmino(object: _116.QueryConnectionClientStateRequestAmino): _116.QueryConnectionClientStateRequest;
                    toAmino(message: _116.QueryConnectionClientStateRequest): _116.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _116.QueryConnectionClientStateRequestAminoMsg): _116.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _116.QueryConnectionClientStateRequest): _116.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _116.QueryConnectionClientStateRequestProtoMsg): _116.QueryConnectionClientStateRequest;
                    toProto(message: _116.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _116.QueryConnectionClientStateRequest): _116.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    typeUrl: string;
                    encode(message: _116.QueryConnectionClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.QueryConnectionClientStateResponse;
                    fromPartial(object: Partial<_116.QueryConnectionClientStateResponse>): _116.QueryConnectionClientStateResponse;
                    fromAmino(object: _116.QueryConnectionClientStateResponseAmino): _116.QueryConnectionClientStateResponse;
                    toAmino(message: _116.QueryConnectionClientStateResponse): _116.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _116.QueryConnectionClientStateResponseAminoMsg): _116.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _116.QueryConnectionClientStateResponse): _116.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _116.QueryConnectionClientStateResponseProtoMsg): _116.QueryConnectionClientStateResponse;
                    toProto(message: _116.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _116.QueryConnectionClientStateResponse): _116.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _116.QueryConnectionConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.QueryConnectionConsensusStateRequest;
                    fromPartial(object: Partial<_116.QueryConnectionConsensusStateRequest>): _116.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _116.QueryConnectionConsensusStateRequestAmino): _116.QueryConnectionConsensusStateRequest;
                    toAmino(message: _116.QueryConnectionConsensusStateRequest): _116.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _116.QueryConnectionConsensusStateRequestAminoMsg): _116.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _116.QueryConnectionConsensusStateRequest): _116.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _116.QueryConnectionConsensusStateRequestProtoMsg): _116.QueryConnectionConsensusStateRequest;
                    toProto(message: _116.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _116.QueryConnectionConsensusStateRequest): _116.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _116.QueryConnectionConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.QueryConnectionConsensusStateResponse;
                    fromPartial(object: Partial<_116.QueryConnectionConsensusStateResponse>): _116.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _116.QueryConnectionConsensusStateResponseAmino): _116.QueryConnectionConsensusStateResponse;
                    toAmino(message: _116.QueryConnectionConsensusStateResponse): _116.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _116.QueryConnectionConsensusStateResponseAminoMsg): _116.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _116.QueryConnectionConsensusStateResponse): _116.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _116.QueryConnectionConsensusStateResponseProtoMsg): _116.QueryConnectionConsensusStateResponse;
                    toProto(message: _116.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _116.QueryConnectionConsensusStateResponse): _116.QueryConnectionConsensusStateResponseProtoMsg;
                };
                QueryConnectionParamsRequest: {
                    typeUrl: string;
                    encode(_: _116.QueryConnectionParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.QueryConnectionParamsRequest;
                    fromPartial(_: Partial<_116.QueryConnectionParamsRequest>): _116.QueryConnectionParamsRequest;
                    fromAmino(_: _116.QueryConnectionParamsRequestAmino): _116.QueryConnectionParamsRequest;
                    toAmino(_: _116.QueryConnectionParamsRequest): _116.QueryConnectionParamsRequestAmino;
                    fromAminoMsg(object: _116.QueryConnectionParamsRequestAminoMsg): _116.QueryConnectionParamsRequest;
                    toAminoMsg(message: _116.QueryConnectionParamsRequest): _116.QueryConnectionParamsRequestAminoMsg;
                    fromProtoMsg(message: _116.QueryConnectionParamsRequestProtoMsg): _116.QueryConnectionParamsRequest;
                    toProto(message: _116.QueryConnectionParamsRequest): Uint8Array;
                    toProtoMsg(message: _116.QueryConnectionParamsRequest): _116.QueryConnectionParamsRequestProtoMsg;
                };
                QueryConnectionParamsResponse: {
                    typeUrl: string;
                    encode(message: _116.QueryConnectionParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.QueryConnectionParamsResponse;
                    fromPartial(object: Partial<_116.QueryConnectionParamsResponse>): _116.QueryConnectionParamsResponse;
                    fromAmino(object: _116.QueryConnectionParamsResponseAmino): _116.QueryConnectionParamsResponse;
                    toAmino(message: _116.QueryConnectionParamsResponse): _116.QueryConnectionParamsResponseAmino;
                    fromAminoMsg(object: _116.QueryConnectionParamsResponseAminoMsg): _116.QueryConnectionParamsResponse;
                    toAminoMsg(message: _116.QueryConnectionParamsResponse): _116.QueryConnectionParamsResponseAminoMsg;
                    fromProtoMsg(message: _116.QueryConnectionParamsResponseProtoMsg): _116.QueryConnectionParamsResponse;
                    toProto(message: _116.QueryConnectionParamsResponse): Uint8Array;
                    toProtoMsg(message: _116.QueryConnectionParamsResponse): _116.QueryConnectionParamsResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _115.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.GenesisState;
                    fromPartial(object: Partial<_115.GenesisState>): _115.GenesisState;
                    fromAmino(object: _115.GenesisStateAmino): _115.GenesisState;
                    toAmino(message: _115.GenesisState): _115.GenesisStateAmino;
                    fromAminoMsg(object: _115.GenesisStateAminoMsg): _115.GenesisState;
                    toAminoMsg(message: _115.GenesisState): _115.GenesisStateAminoMsg;
                    fromProtoMsg(message: _115.GenesisStateProtoMsg): _115.GenesisState;
                    toProto(message: _115.GenesisState): Uint8Array;
                    toProtoMsg(message: _115.GenesisState): _115.GenesisStateProtoMsg;
                };
                stateFromJSON(object: any): _114.State;
                stateToJSON(object: _114.State): string;
                State: typeof _114.State;
                StateSDKType: typeof _114.State;
                StateAmino: typeof _114.State;
                ConnectionEnd: {
                    typeUrl: string;
                    encode(message: _114.ConnectionEnd, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.ConnectionEnd;
                    fromPartial(object: Partial<_114.ConnectionEnd>): _114.ConnectionEnd;
                    fromAmino(object: _114.ConnectionEndAmino): _114.ConnectionEnd;
                    toAmino(message: _114.ConnectionEnd): _114.ConnectionEndAmino;
                    fromAminoMsg(object: _114.ConnectionEndAminoMsg): _114.ConnectionEnd;
                    toAminoMsg(message: _114.ConnectionEnd): _114.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _114.ConnectionEndProtoMsg): _114.ConnectionEnd;
                    toProto(message: _114.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _114.ConnectionEnd): _114.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    typeUrl: string;
                    encode(message: _114.IdentifiedConnection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.IdentifiedConnection;
                    fromPartial(object: Partial<_114.IdentifiedConnection>): _114.IdentifiedConnection;
                    fromAmino(object: _114.IdentifiedConnectionAmino): _114.IdentifiedConnection;
                    toAmino(message: _114.IdentifiedConnection): _114.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _114.IdentifiedConnectionAminoMsg): _114.IdentifiedConnection;
                    toAminoMsg(message: _114.IdentifiedConnection): _114.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _114.IdentifiedConnectionProtoMsg): _114.IdentifiedConnection;
                    toProto(message: _114.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _114.IdentifiedConnection): _114.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _114.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.Counterparty;
                    fromPartial(object: Partial<_114.Counterparty>): _114.Counterparty;
                    fromAmino(object: _114.CounterpartyAmino): _114.Counterparty;
                    toAmino(message: _114.Counterparty): _114.CounterpartyAmino;
                    fromAminoMsg(object: _114.CounterpartyAminoMsg): _114.Counterparty;
                    toAminoMsg(message: _114.Counterparty): _114.CounterpartyAminoMsg;
                    fromProtoMsg(message: _114.CounterpartyProtoMsg): _114.Counterparty;
                    toProto(message: _114.Counterparty): Uint8Array;
                    toProtoMsg(message: _114.Counterparty): _114.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    typeUrl: string;
                    encode(message: _114.ClientPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.ClientPaths;
                    fromPartial(object: Partial<_114.ClientPaths>): _114.ClientPaths;
                    fromAmino(object: _114.ClientPathsAmino): _114.ClientPaths;
                    toAmino(message: _114.ClientPaths): _114.ClientPathsAmino;
                    fromAminoMsg(object: _114.ClientPathsAminoMsg): _114.ClientPaths;
                    toAminoMsg(message: _114.ClientPaths): _114.ClientPathsAminoMsg;
                    fromProtoMsg(message: _114.ClientPathsProtoMsg): _114.ClientPaths;
                    toProto(message: _114.ClientPaths): Uint8Array;
                    toProtoMsg(message: _114.ClientPaths): _114.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    typeUrl: string;
                    encode(message: _114.ConnectionPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.ConnectionPaths;
                    fromPartial(object: Partial<_114.ConnectionPaths>): _114.ConnectionPaths;
                    fromAmino(object: _114.ConnectionPathsAmino): _114.ConnectionPaths;
                    toAmino(message: _114.ConnectionPaths): _114.ConnectionPathsAmino;
                    fromAminoMsg(object: _114.ConnectionPathsAminoMsg): _114.ConnectionPaths;
                    toAminoMsg(message: _114.ConnectionPaths): _114.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _114.ConnectionPathsProtoMsg): _114.ConnectionPaths;
                    toProto(message: _114.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _114.ConnectionPaths): _114.ConnectionPathsProtoMsg;
                };
                Version: {
                    typeUrl: string;
                    encode(message: _114.Version, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.Version;
                    fromPartial(object: Partial<_114.Version>): _114.Version;
                    fromAmino(object: _114.VersionAmino): _114.Version;
                    toAmino(message: _114.Version): _114.VersionAmino;
                    fromAminoMsg(object: _114.VersionAminoMsg): _114.Version;
                    toAminoMsg(message: _114.Version): _114.VersionAminoMsg;
                    fromProtoMsg(message: _114.VersionProtoMsg): _114.Version;
                    toProto(message: _114.Version): Uint8Array;
                    toProtoMsg(message: _114.Version): _114.VersionProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _114.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.Params;
                    fromPartial(object: Partial<_114.Params>): _114.Params;
                    fromAmino(object: _114.ParamsAmino): _114.Params;
                    toAmino(message: _114.Params): _114.ParamsAmino;
                    fromAminoMsg(object: _114.ParamsAminoMsg): _114.Params;
                    toAminoMsg(message: _114.Params): _114.ParamsAminoMsg;
                    fromProtoMsg(message: _114.ParamsProtoMsg): _114.Params;
                    toProto(message: _114.Params): Uint8Array;
                    toProtoMsg(message: _114.Params): _114.ParamsProtoMsg;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    typeUrl: string;
                    encode(message: _118.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _118.GenesisState;
                    fromPartial(object: Partial<_118.GenesisState>): _118.GenesisState;
                    fromAmino(object: _118.GenesisStateAmino): _118.GenesisState;
                    toAmino(message: _118.GenesisState): _118.GenesisStateAmino;
                    fromAminoMsg(object: _118.GenesisStateAminoMsg): _118.GenesisState;
                    toAminoMsg(message: _118.GenesisState): _118.GenesisStateAminoMsg;
                    fromProtoMsg(message: _118.GenesisStateProtoMsg): _118.GenesisState;
                    toProto(message: _118.GenesisState): Uint8Array;
                    toProtoMsg(message: _118.GenesisState): _118.GenesisStateProtoMsg;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v2: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _119.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.ClientState;
                    fromPartial(object: Partial<_119.ClientState>): _119.ClientState;
                    fromAmino(object: _119.ClientStateAmino): _119.ClientState;
                    toAmino(message: _119.ClientState): _119.ClientStateAmino;
                    fromAminoMsg(object: _119.ClientStateAminoMsg): _119.ClientState;
                    toAminoMsg(message: _119.ClientState): _119.ClientStateAminoMsg;
                    fromProtoMsg(message: _119.ClientStateProtoMsg): _119.ClientState;
                    toProto(message: _119.ClientState): Uint8Array;
                    toProtoMsg(message: _119.ClientState): _119.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v2: {
                dataTypeFromJSON(object: any): _120.DataType;
                dataTypeToJSON(object: _120.DataType): string;
                DataType: typeof _120.DataType;
                DataTypeSDKType: typeof _120.DataType;
                DataTypeAmino: typeof _120.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _120.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.ClientState;
                    fromPartial(object: Partial<_120.ClientState>): _120.ClientState;
                    fromAmino(object: _120.ClientStateAmino): _120.ClientState;
                    toAmino(message: _120.ClientState): _120.ClientStateAmino;
                    fromAminoMsg(object: _120.ClientStateAminoMsg): _120.ClientState;
                    toAminoMsg(message: _120.ClientState): _120.ClientStateAminoMsg;
                    fromProtoMsg(message: _120.ClientStateProtoMsg): _120.ClientState;
                    toProto(message: _120.ClientState): Uint8Array;
                    toProtoMsg(message: _120.ClientState): _120.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _120.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.ConsensusState;
                    fromPartial(object: Partial<_120.ConsensusState>): _120.ConsensusState;
                    fromAmino(object: _120.ConsensusStateAmino): _120.ConsensusState;
                    toAmino(message: _120.ConsensusState): _120.ConsensusStateAmino;
                    fromAminoMsg(object: _120.ConsensusStateAminoMsg): _120.ConsensusState;
                    toAminoMsg(message: _120.ConsensusState): _120.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _120.ConsensusStateProtoMsg): _120.ConsensusState;
                    toProto(message: _120.ConsensusState): Uint8Array;
                    toProtoMsg(message: _120.ConsensusState): _120.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _120.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.Header;
                    fromPartial(object: Partial<_120.Header>): _120.Header;
                    fromAmino(object: _120.HeaderAmino): _120.Header;
                    toAmino(message: _120.Header): _120.HeaderAmino;
                    fromAminoMsg(object: _120.HeaderAminoMsg): _120.Header;
                    toAminoMsg(message: _120.Header): _120.HeaderAminoMsg;
                    fromProtoMsg(message: _120.HeaderProtoMsg): _120.Header;
                    toProto(message: _120.Header): Uint8Array;
                    toProtoMsg(message: _120.Header): _120.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _120.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.Misbehaviour;
                    fromPartial(object: Partial<_120.Misbehaviour>): _120.Misbehaviour;
                    fromAmino(object: _120.MisbehaviourAmino): _120.Misbehaviour;
                    toAmino(message: _120.Misbehaviour): _120.MisbehaviourAmino;
                    fromAminoMsg(object: _120.MisbehaviourAminoMsg): _120.Misbehaviour;
                    toAminoMsg(message: _120.Misbehaviour): _120.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _120.MisbehaviourProtoMsg): _120.Misbehaviour;
                    toProto(message: _120.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _120.Misbehaviour): _120.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _120.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.SignatureAndData;
                    fromPartial(object: Partial<_120.SignatureAndData>): _120.SignatureAndData;
                    fromAmino(object: _120.SignatureAndDataAmino): _120.SignatureAndData;
                    toAmino(message: _120.SignatureAndData): _120.SignatureAndDataAmino;
                    fromAminoMsg(object: _120.SignatureAndDataAminoMsg): _120.SignatureAndData;
                    toAminoMsg(message: _120.SignatureAndData): _120.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _120.SignatureAndDataProtoMsg): _120.SignatureAndData;
                    toProto(message: _120.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _120.SignatureAndData): _120.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _120.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.TimestampedSignatureData;
                    fromPartial(object: Partial<_120.TimestampedSignatureData>): _120.TimestampedSignatureData;
                    fromAmino(object: _120.TimestampedSignatureDataAmino): _120.TimestampedSignatureData;
                    toAmino(message: _120.TimestampedSignatureData): _120.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _120.TimestampedSignatureDataAminoMsg): _120.TimestampedSignatureData;
                    toAminoMsg(message: _120.TimestampedSignatureData): _120.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _120.TimestampedSignatureDataProtoMsg): _120.TimestampedSignatureData;
                    toProto(message: _120.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _120.TimestampedSignatureData): _120.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _120.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.SignBytes;
                    fromPartial(object: Partial<_120.SignBytes>): _120.SignBytes;
                    fromAmino(object: _120.SignBytesAmino): _120.SignBytes;
                    toAmino(message: _120.SignBytes): _120.SignBytesAmino;
                    fromAminoMsg(object: _120.SignBytesAminoMsg): _120.SignBytes;
                    toAminoMsg(message: _120.SignBytes): _120.SignBytesAminoMsg;
                    fromProtoMsg(message: _120.SignBytesProtoMsg): _120.SignBytes;
                    toProto(message: _120.SignBytes): Uint8Array;
                    toProtoMsg(message: _120.SignBytes): _120.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _120.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.HeaderData;
                    fromPartial(object: Partial<_120.HeaderData>): _120.HeaderData;
                    fromAmino(object: _120.HeaderDataAmino): _120.HeaderData;
                    toAmino(message: _120.HeaderData): _120.HeaderDataAmino;
                    fromAminoMsg(object: _120.HeaderDataAminoMsg): _120.HeaderData;
                    toAminoMsg(message: _120.HeaderData): _120.HeaderDataAminoMsg;
                    fromProtoMsg(message: _120.HeaderDataProtoMsg): _120.HeaderData;
                    toProto(message: _120.HeaderData): Uint8Array;
                    toProtoMsg(message: _120.HeaderData): _120.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _120.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.ClientStateData;
                    fromPartial(object: Partial<_120.ClientStateData>): _120.ClientStateData;
                    fromAmino(object: _120.ClientStateDataAmino): _120.ClientStateData;
                    toAmino(message: _120.ClientStateData): _120.ClientStateDataAmino;
                    fromAminoMsg(object: _120.ClientStateDataAminoMsg): _120.ClientStateData;
                    toAminoMsg(message: _120.ClientStateData): _120.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _120.ClientStateDataProtoMsg): _120.ClientStateData;
                    toProto(message: _120.ClientStateData): Uint8Array;
                    toProtoMsg(message: _120.ClientStateData): _120.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _120.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.ConsensusStateData;
                    fromPartial(object: Partial<_120.ConsensusStateData>): _120.ConsensusStateData;
                    fromAmino(object: _120.ConsensusStateDataAmino): _120.ConsensusStateData;
                    toAmino(message: _120.ConsensusStateData): _120.ConsensusStateDataAmino;
                    fromAminoMsg(object: _120.ConsensusStateDataAminoMsg): _120.ConsensusStateData;
                    toAminoMsg(message: _120.ConsensusStateData): _120.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _120.ConsensusStateDataProtoMsg): _120.ConsensusStateData;
                    toProto(message: _120.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _120.ConsensusStateData): _120.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _120.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.ConnectionStateData;
                    fromPartial(object: Partial<_120.ConnectionStateData>): _120.ConnectionStateData;
                    fromAmino(object: _120.ConnectionStateDataAmino): _120.ConnectionStateData;
                    toAmino(message: _120.ConnectionStateData): _120.ConnectionStateDataAmino;
                    fromAminoMsg(object: _120.ConnectionStateDataAminoMsg): _120.ConnectionStateData;
                    toAminoMsg(message: _120.ConnectionStateData): _120.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _120.ConnectionStateDataProtoMsg): _120.ConnectionStateData;
                    toProto(message: _120.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _120.ConnectionStateData): _120.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _120.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.ChannelStateData;
                    fromPartial(object: Partial<_120.ChannelStateData>): _120.ChannelStateData;
                    fromAmino(object: _120.ChannelStateDataAmino): _120.ChannelStateData;
                    toAmino(message: _120.ChannelStateData): _120.ChannelStateDataAmino;
                    fromAminoMsg(object: _120.ChannelStateDataAminoMsg): _120.ChannelStateData;
                    toAminoMsg(message: _120.ChannelStateData): _120.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _120.ChannelStateDataProtoMsg): _120.ChannelStateData;
                    toProto(message: _120.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _120.ChannelStateData): _120.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _120.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.PacketCommitmentData;
                    fromPartial(object: Partial<_120.PacketCommitmentData>): _120.PacketCommitmentData;
                    fromAmino(object: _120.PacketCommitmentDataAmino): _120.PacketCommitmentData;
                    toAmino(message: _120.PacketCommitmentData): _120.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _120.PacketCommitmentDataAminoMsg): _120.PacketCommitmentData;
                    toAminoMsg(message: _120.PacketCommitmentData): _120.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _120.PacketCommitmentDataProtoMsg): _120.PacketCommitmentData;
                    toProto(message: _120.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _120.PacketCommitmentData): _120.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _120.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.PacketAcknowledgementData;
                    fromPartial(object: Partial<_120.PacketAcknowledgementData>): _120.PacketAcknowledgementData;
                    fromAmino(object: _120.PacketAcknowledgementDataAmino): _120.PacketAcknowledgementData;
                    toAmino(message: _120.PacketAcknowledgementData): _120.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _120.PacketAcknowledgementDataAminoMsg): _120.PacketAcknowledgementData;
                    toAminoMsg(message: _120.PacketAcknowledgementData): _120.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _120.PacketAcknowledgementDataProtoMsg): _120.PacketAcknowledgementData;
                    toProto(message: _120.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _120.PacketAcknowledgementData): _120.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _120.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_120.PacketReceiptAbsenceData>): _120.PacketReceiptAbsenceData;
                    fromAmino(object: _120.PacketReceiptAbsenceDataAmino): _120.PacketReceiptAbsenceData;
                    toAmino(message: _120.PacketReceiptAbsenceData): _120.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _120.PacketReceiptAbsenceDataAminoMsg): _120.PacketReceiptAbsenceData;
                    toAminoMsg(message: _120.PacketReceiptAbsenceData): _120.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _120.PacketReceiptAbsenceDataProtoMsg): _120.PacketReceiptAbsenceData;
                    toProto(message: _120.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _120.PacketReceiptAbsenceData): _120.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _120.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.NextSequenceRecvData;
                    fromPartial(object: Partial<_120.NextSequenceRecvData>): _120.NextSequenceRecvData;
                    fromAmino(object: _120.NextSequenceRecvDataAmino): _120.NextSequenceRecvData;
                    toAmino(message: _120.NextSequenceRecvData): _120.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _120.NextSequenceRecvDataAminoMsg): _120.NextSequenceRecvData;
                    toAminoMsg(message: _120.NextSequenceRecvData): _120.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _120.NextSequenceRecvDataProtoMsg): _120.NextSequenceRecvData;
                    toProto(message: _120.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _120.NextSequenceRecvData): _120.NextSequenceRecvDataProtoMsg;
                };
            };
            const v3: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _121.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.ClientState;
                    fromPartial(object: Partial<_121.ClientState>): _121.ClientState;
                    fromAmino(object: _121.ClientStateAmino): _121.ClientState;
                    toAmino(message: _121.ClientState): _121.ClientStateAmino;
                    fromAminoMsg(object: _121.ClientStateAminoMsg): _121.ClientState;
                    toAminoMsg(message: _121.ClientState): _121.ClientStateAminoMsg;
                    fromProtoMsg(message: _121.ClientStateProtoMsg): _121.ClientState;
                    toProto(message: _121.ClientState): Uint8Array;
                    toProtoMsg(message: _121.ClientState): _121.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _121.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.ConsensusState;
                    fromPartial(object: Partial<_121.ConsensusState>): _121.ConsensusState;
                    fromAmino(object: _121.ConsensusStateAmino): _121.ConsensusState;
                    toAmino(message: _121.ConsensusState): _121.ConsensusStateAmino;
                    fromAminoMsg(object: _121.ConsensusStateAminoMsg): _121.ConsensusState;
                    toAminoMsg(message: _121.ConsensusState): _121.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _121.ConsensusStateProtoMsg): _121.ConsensusState;
                    toProto(message: _121.ConsensusState): Uint8Array;
                    toProtoMsg(message: _121.ConsensusState): _121.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _121.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.Header;
                    fromPartial(object: Partial<_121.Header>): _121.Header;
                    fromAmino(object: _121.HeaderAmino): _121.Header;
                    toAmino(message: _121.Header): _121.HeaderAmino;
                    fromAminoMsg(object: _121.HeaderAminoMsg): _121.Header;
                    toAminoMsg(message: _121.Header): _121.HeaderAminoMsg;
                    fromProtoMsg(message: _121.HeaderProtoMsg): _121.Header;
                    toProto(message: _121.Header): Uint8Array;
                    toProtoMsg(message: _121.Header): _121.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _121.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.Misbehaviour;
                    fromPartial(object: Partial<_121.Misbehaviour>): _121.Misbehaviour;
                    fromAmino(object: _121.MisbehaviourAmino): _121.Misbehaviour;
                    toAmino(message: _121.Misbehaviour): _121.MisbehaviourAmino;
                    fromAminoMsg(object: _121.MisbehaviourAminoMsg): _121.Misbehaviour;
                    toAminoMsg(message: _121.Misbehaviour): _121.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _121.MisbehaviourProtoMsg): _121.Misbehaviour;
                    toProto(message: _121.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _121.Misbehaviour): _121.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _121.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.SignatureAndData;
                    fromPartial(object: Partial<_121.SignatureAndData>): _121.SignatureAndData;
                    fromAmino(object: _121.SignatureAndDataAmino): _121.SignatureAndData;
                    toAmino(message: _121.SignatureAndData): _121.SignatureAndDataAmino;
                    fromAminoMsg(object: _121.SignatureAndDataAminoMsg): _121.SignatureAndData;
                    toAminoMsg(message: _121.SignatureAndData): _121.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _121.SignatureAndDataProtoMsg): _121.SignatureAndData;
                    toProto(message: _121.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _121.SignatureAndData): _121.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _121.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.TimestampedSignatureData;
                    fromPartial(object: Partial<_121.TimestampedSignatureData>): _121.TimestampedSignatureData;
                    fromAmino(object: _121.TimestampedSignatureDataAmino): _121.TimestampedSignatureData;
                    toAmino(message: _121.TimestampedSignatureData): _121.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _121.TimestampedSignatureDataAminoMsg): _121.TimestampedSignatureData;
                    toAminoMsg(message: _121.TimestampedSignatureData): _121.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _121.TimestampedSignatureDataProtoMsg): _121.TimestampedSignatureData;
                    toProto(message: _121.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _121.TimestampedSignatureData): _121.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _121.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.SignBytes;
                    fromPartial(object: Partial<_121.SignBytes>): _121.SignBytes;
                    fromAmino(object: _121.SignBytesAmino): _121.SignBytes;
                    toAmino(message: _121.SignBytes): _121.SignBytesAmino;
                    fromAminoMsg(object: _121.SignBytesAminoMsg): _121.SignBytes;
                    toAminoMsg(message: _121.SignBytes): _121.SignBytesAminoMsg;
                    fromProtoMsg(message: _121.SignBytesProtoMsg): _121.SignBytes;
                    toProto(message: _121.SignBytes): Uint8Array;
                    toProtoMsg(message: _121.SignBytes): _121.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _121.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.HeaderData;
                    fromPartial(object: Partial<_121.HeaderData>): _121.HeaderData;
                    fromAmino(object: _121.HeaderDataAmino): _121.HeaderData;
                    toAmino(message: _121.HeaderData): _121.HeaderDataAmino;
                    fromAminoMsg(object: _121.HeaderDataAminoMsg): _121.HeaderData;
                    toAminoMsg(message: _121.HeaderData): _121.HeaderDataAminoMsg;
                    fromProtoMsg(message: _121.HeaderDataProtoMsg): _121.HeaderData;
                    toProto(message: _121.HeaderData): Uint8Array;
                    toProtoMsg(message: _121.HeaderData): _121.HeaderDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _122.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.ClientState;
                    fromPartial(object: Partial<_122.ClientState>): _122.ClientState;
                    fromAmino(object: _122.ClientStateAmino): _122.ClientState;
                    toAmino(message: _122.ClientState): _122.ClientStateAmino;
                    fromAminoMsg(object: _122.ClientStateAminoMsg): _122.ClientState;
                    toAminoMsg(message: _122.ClientState): _122.ClientStateAminoMsg;
                    fromProtoMsg(message: _122.ClientStateProtoMsg): _122.ClientState;
                    toProto(message: _122.ClientState): Uint8Array;
                    toProtoMsg(message: _122.ClientState): _122.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _122.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.ConsensusState;
                    fromPartial(object: Partial<_122.ConsensusState>): _122.ConsensusState;
                    fromAmino(object: _122.ConsensusStateAmino): _122.ConsensusState;
                    toAmino(message: _122.ConsensusState): _122.ConsensusStateAmino;
                    fromAminoMsg(object: _122.ConsensusStateAminoMsg): _122.ConsensusState;
                    toAminoMsg(message: _122.ConsensusState): _122.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _122.ConsensusStateProtoMsg): _122.ConsensusState;
                    toProto(message: _122.ConsensusState): Uint8Array;
                    toProtoMsg(message: _122.ConsensusState): _122.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _122.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.Misbehaviour;
                    fromPartial(object: Partial<_122.Misbehaviour>): _122.Misbehaviour;
                    fromAmino(object: _122.MisbehaviourAmino): _122.Misbehaviour;
                    toAmino(message: _122.Misbehaviour): _122.MisbehaviourAmino;
                    fromAminoMsg(object: _122.MisbehaviourAminoMsg): _122.Misbehaviour;
                    toAminoMsg(message: _122.Misbehaviour): _122.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _122.MisbehaviourProtoMsg): _122.Misbehaviour;
                    toProto(message: _122.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _122.Misbehaviour): _122.MisbehaviourProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _122.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.Header;
                    fromPartial(object: Partial<_122.Header>): _122.Header;
                    fromAmino(object: _122.HeaderAmino): _122.Header;
                    toAmino(message: _122.Header): _122.HeaderAmino;
                    fromAminoMsg(object: _122.HeaderAminoMsg): _122.Header;
                    toAminoMsg(message: _122.Header): _122.HeaderAminoMsg;
                    fromProtoMsg(message: _122.HeaderProtoMsg): _122.Header;
                    toProto(message: _122.Header): Uint8Array;
                    toProtoMsg(message: _122.Header): _122.HeaderProtoMsg;
                };
                Fraction: {
                    typeUrl: string;
                    encode(message: _122.Fraction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.Fraction;
                    fromPartial(object: Partial<_122.Fraction>): _122.Fraction;
                    fromAmino(object: _122.FractionAmino): _122.Fraction;
                    toAmino(message: _122.Fraction): _122.FractionAmino;
                    fromAminoMsg(object: _122.FractionAminoMsg): _122.Fraction;
                    toAminoMsg(message: _122.Fraction): _122.FractionAminoMsg;
                    fromProtoMsg(message: _122.FractionProtoMsg): _122.Fraction;
                    toProto(message: _122.Fraction): Uint8Array;
                    toProtoMsg(message: _122.Fraction): _122.FractionProtoMsg;
                };
            };
        }
    }
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
            ibc: {
                applications: {
                    fee: {
                        v1: _258.MsgClientImpl;
                    };
                    interchain_accounts: {
                        controller: {
                            v1: _259.MsgClientImpl;
                        };
                    };
                    transfer: {
                        v1: _260.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _261.MsgClientImpl;
                    };
                    client: {
                        v1: _262.MsgClientImpl;
                    };
                    connection: {
                        v1: _263.MsgClientImpl;
                    };
                };
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
            ibc: {
                applications: {
                    fee: {
                        v1: {
                            incentivizedPackets(request: _88.QueryIncentivizedPacketsRequest): Promise<_88.QueryIncentivizedPacketsResponse>;
                            incentivizedPacket(request: _88.QueryIncentivizedPacketRequest): Promise<_88.QueryIncentivizedPacketResponse>;
                            incentivizedPacketsForChannel(request: _88.QueryIncentivizedPacketsForChannelRequest): Promise<_88.QueryIncentivizedPacketsForChannelResponse>;
                            totalRecvFees(request: _88.QueryTotalRecvFeesRequest): Promise<_88.QueryTotalRecvFeesResponse>;
                            totalAckFees(request: _88.QueryTotalAckFeesRequest): Promise<_88.QueryTotalAckFeesResponse>;
                            totalTimeoutFees(request: _88.QueryTotalTimeoutFeesRequest): Promise<_88.QueryTotalTimeoutFeesResponse>;
                            payee(request: _88.QueryPayeeRequest): Promise<_88.QueryPayeeResponse>;
                            counterpartyPayee(request: _88.QueryCounterpartyPayeeRequest): Promise<_88.QueryCounterpartyPayeeResponse>;
                            feeEnabledChannels(request: _88.QueryFeeEnabledChannelsRequest): Promise<_88.QueryFeeEnabledChannelsResponse>;
                            feeEnabledChannel(request: _88.QueryFeeEnabledChannelRequest): Promise<_88.QueryFeeEnabledChannelResponse>;
                        };
                    };
                    interchain_accounts: {
                        controller: {
                            v1: {
                                interchainAccount(request: _91.QueryInterchainAccountRequest): Promise<_91.QueryInterchainAccountResponse>;
                                params(request?: _91.QueryParamsRequest): Promise<_91.QueryParamsResponse>;
                            };
                        };
                        host: {
                            v1: {
                                params(request?: _95.QueryParamsRequest): Promise<_95.QueryParamsResponse>;
                            };
                        };
                    };
                    transfer: {
                        v1: {
                            denomTraces(request?: _101.QueryDenomTracesRequest): Promise<_101.QueryDenomTracesResponse>;
                            denomTrace(request: _101.QueryDenomTraceRequest): Promise<_101.QueryDenomTraceResponse>;
                            params(request?: _101.QueryParamsRequest): Promise<_101.QueryParamsResponse>;
                            denomHash(request: _101.QueryDenomHashRequest): Promise<_101.QueryDenomHashResponse>;
                            escrowAddress(request: _101.QueryEscrowAddressRequest): Promise<_101.QueryEscrowAddressResponse>;
                            totalEscrowForDenom(request: _101.QueryTotalEscrowForDenomRequest): Promise<_101.QueryTotalEscrowForDenomResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _107.QueryChannelRequest): Promise<_107.QueryChannelResponse>;
                            channels(request?: _107.QueryChannelsRequest): Promise<_107.QueryChannelsResponse>;
                            connectionChannels(request: _107.QueryConnectionChannelsRequest): Promise<_107.QueryConnectionChannelsResponse>;
                            channelClientState(request: _107.QueryChannelClientStateRequest): Promise<_107.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _107.QueryChannelConsensusStateRequest): Promise<_107.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _107.QueryPacketCommitmentRequest): Promise<_107.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _107.QueryPacketCommitmentsRequest): Promise<_107.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _107.QueryPacketReceiptRequest): Promise<_107.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _107.QueryPacketAcknowledgementRequest): Promise<_107.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _107.QueryPacketAcknowledgementsRequest): Promise<_107.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _107.QueryUnreceivedPacketsRequest): Promise<_107.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _107.QueryUnreceivedAcksRequest): Promise<_107.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _107.QueryNextSequenceReceiveRequest): Promise<_107.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _111.QueryClientStateRequest): Promise<_111.QueryClientStateResponse>;
                            clientStates(request?: _111.QueryClientStatesRequest): Promise<_111.QueryClientStatesResponse>;
                            consensusState(request: _111.QueryConsensusStateRequest): Promise<_111.QueryConsensusStateResponse>;
                            consensusStates(request: _111.QueryConsensusStatesRequest): Promise<_111.QueryConsensusStatesResponse>;
                            consensusStateHeights(request: _111.QueryConsensusStateHeightsRequest): Promise<_111.QueryConsensusStateHeightsResponse>;
                            clientStatus(request: _111.QueryClientStatusRequest): Promise<_111.QueryClientStatusResponse>;
                            clientParams(request?: _111.QueryClientParamsRequest): Promise<_111.QueryClientParamsResponse>;
                            upgradedClientState(request?: _111.QueryUpgradedClientStateRequest): Promise<_111.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _111.QueryUpgradedConsensusStateRequest): Promise<_111.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _116.QueryConnectionRequest): Promise<_116.QueryConnectionResponse>;
                            connections(request?: _116.QueryConnectionsRequest): Promise<_116.QueryConnectionsResponse>;
                            clientConnections(request: _116.QueryClientConnectionsRequest): Promise<_116.QueryClientConnectionsResponse>;
                            connectionClientState(request: _116.QueryConnectionClientStateRequest): Promise<_116.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _116.QueryConnectionConsensusStateRequest): Promise<_116.QueryConnectionConsensusStateResponse>;
                            connectionParams(request?: _116.QueryConnectionParamsRequest): Promise<_116.QueryConnectionParamsResponse>;
                        };
                    };
                };
            };
        }>;
    };
}
