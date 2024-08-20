import * as _175 from "./gamm/v1beta1/osmosis";
export declare namespace osmosis {
    namespace gamm {
        const v1beta1: {
            MsgSwapExactAmountIn: {
                typeUrl: string;
                encode(message: _175.MsgSwapExactAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.MsgSwapExactAmountIn;
                fromPartial(object: Partial<_175.MsgSwapExactAmountIn>): _175.MsgSwapExactAmountIn;
                fromAmino(object: _175.MsgSwapExactAmountInAmino): _175.MsgSwapExactAmountIn;
                toAmino(message: _175.MsgSwapExactAmountIn): _175.MsgSwapExactAmountInAmino;
                fromAminoMsg(object: _175.MsgSwapExactAmountInAminoMsg): _175.MsgSwapExactAmountIn;
                toAminoMsg(message: _175.MsgSwapExactAmountIn): _175.MsgSwapExactAmountInAminoMsg;
                fromProtoMsg(message: _175.MsgSwapExactAmountInProtoMsg): _175.MsgSwapExactAmountIn;
                toProto(message: _175.MsgSwapExactAmountIn): Uint8Array;
                toProtoMsg(message: _175.MsgSwapExactAmountIn): _175.MsgSwapExactAmountInProtoMsg;
            };
            SwapAmountInRoute: {
                typeUrl: string;
                encode(message: _175.SwapAmountInRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.SwapAmountInRoute;
                fromPartial(object: Partial<_175.SwapAmountInRoute>): _175.SwapAmountInRoute;
                fromAmino(object: _175.SwapAmountInRouteAmino): _175.SwapAmountInRoute;
                toAmino(message: _175.SwapAmountInRoute): _175.SwapAmountInRouteAmino;
                fromAminoMsg(object: _175.SwapAmountInRouteAminoMsg): _175.SwapAmountInRoute;
                toAminoMsg(message: _175.SwapAmountInRoute): _175.SwapAmountInRouteAminoMsg;
                fromProtoMsg(message: _175.SwapAmountInRouteProtoMsg): _175.SwapAmountInRoute;
                toProto(message: _175.SwapAmountInRoute): Uint8Array;
                toProtoMsg(message: _175.SwapAmountInRoute): _175.SwapAmountInRouteProtoMsg;
            };
            OsmosisTwapRecord: {
                typeUrl: string;
                encode(message: _175.OsmosisTwapRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.OsmosisTwapRecord;
                fromPartial(object: Partial<_175.OsmosisTwapRecord>): _175.OsmosisTwapRecord;
                fromAmino(object: _175.OsmosisTwapRecordAmino): _175.OsmosisTwapRecord;
                toAmino(message: _175.OsmosisTwapRecord): _175.OsmosisTwapRecordAmino;
                fromAminoMsg(object: _175.OsmosisTwapRecordAminoMsg): _175.OsmosisTwapRecord;
                toAminoMsg(message: _175.OsmosisTwapRecord): _175.OsmosisTwapRecordAminoMsg;
                fromProtoMsg(message: _175.OsmosisTwapRecordProtoMsg): _175.OsmosisTwapRecord;
                toProto(message: _175.OsmosisTwapRecord): Uint8Array;
                toProtoMsg(message: _175.OsmosisTwapRecord): _175.OsmosisTwapRecordProtoMsg;
            };
        };
    }
}
