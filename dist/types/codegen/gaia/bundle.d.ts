import * as _135 from "./liquid/v1beta1/lsm_tx";
export declare namespace gaia {
    namespace liquid {
        const v1beta1: {
            MsgRedeemTokensForShares: {
                typeUrl: string;
                encode(message: _135.MsgRedeemTokensForShares, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.MsgRedeemTokensForShares;
                fromPartial(object: Partial<_135.MsgRedeemTokensForShares>): _135.MsgRedeemTokensForShares;
                fromAmino(object: _135.MsgRedeemTokensForSharesAmino): _135.MsgRedeemTokensForShares;
                toAmino(message: _135.MsgRedeemTokensForShares): _135.MsgRedeemTokensForSharesAmino;
                fromAminoMsg(object: _135.MsgRedeemTokensForSharesAminoMsg): _135.MsgRedeemTokensForShares;
                fromProtoMsg(message: _135.MsgRedeemTokensForSharesProtoMsg): _135.MsgRedeemTokensForShares;
                toProto(message: _135.MsgRedeemTokensForShares): Uint8Array;
                toProtoMsg(message: _135.MsgRedeemTokensForShares): _135.MsgRedeemTokensForSharesProtoMsg;
            };
            MsgRedeemTokensForSharesResponse: {
                typeUrl: string;
                encode(message: _135.MsgRedeemTokensForSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.MsgRedeemTokensForSharesResponse;
                fromPartial(object: Partial<_135.MsgRedeemTokensForSharesResponse>): _135.MsgRedeemTokensForSharesResponse;
                fromAmino(object: _135.MsgRedeemTokensForSharesResponseAmino): _135.MsgRedeemTokensForSharesResponse;
                toAmino(message: _135.MsgRedeemTokensForSharesResponse): _135.MsgRedeemTokensForSharesResponseAmino;
                fromAminoMsg(object: _135.MsgRedeemTokensForSharesResponseAminoMsg): _135.MsgRedeemTokensForSharesResponse;
                fromProtoMsg(message: _135.MsgRedeemTokensForSharesResponseProtoMsg): _135.MsgRedeemTokensForSharesResponse;
                toProto(message: _135.MsgRedeemTokensForSharesResponse): Uint8Array;
                toProtoMsg(message: _135.MsgRedeemTokensForSharesResponse): _135.MsgRedeemTokensForSharesResponseProtoMsg;
            };
            MsgDisableTokenizeShares: {
                typeUrl: string;
                encode(message: _135.MsgDisableTokenizeShares, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.MsgDisableTokenizeShares;
                fromPartial(object: Partial<_135.MsgDisableTokenizeShares>): _135.MsgDisableTokenizeShares;
                fromAmino(object: _135.MsgDisableTokenizeSharesAmino): _135.MsgDisableTokenizeShares;
                toAmino(message: _135.MsgDisableTokenizeShares): _135.MsgDisableTokenizeSharesAmino;
                fromAminoMsg(object: _135.MsgDisableTokenizeSharesAminoMsg): _135.MsgDisableTokenizeShares;
                fromProtoMsg(message: _135.MsgDisableTokenizeSharesProtoMsg): _135.MsgDisableTokenizeShares;
                toProto(message: _135.MsgDisableTokenizeShares): Uint8Array;
                toProtoMsg(message: _135.MsgDisableTokenizeShares): _135.MsgDisableTokenizeSharesProtoMsg;
            };
        };
    }
}
