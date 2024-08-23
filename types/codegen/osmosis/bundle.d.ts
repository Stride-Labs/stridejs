import * as _123 from "./gamm/v1beta1/osmosis";
export declare namespace osmosis {
    namespace gamm {
        const v1beta1: {
            MsgSwapExactAmountIn: {
                typeUrl: string;
                encode(message: _123.MsgSwapExactAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _123.MsgSwapExactAmountIn;
                fromPartial(object: Partial<_123.MsgSwapExactAmountIn>): _123.MsgSwapExactAmountIn;
                fromAmino(object: _123.MsgSwapExactAmountInAmino): _123.MsgSwapExactAmountIn;
                toAmino(message: _123.MsgSwapExactAmountIn): _123.MsgSwapExactAmountInAmino;
                fromAminoMsg(object: _123.MsgSwapExactAmountInAminoMsg): _123.MsgSwapExactAmountIn;
                toAminoMsg(message: _123.MsgSwapExactAmountIn): _123.MsgSwapExactAmountInAminoMsg;
                fromProtoMsg(message: _123.MsgSwapExactAmountInProtoMsg): _123.MsgSwapExactAmountIn;
                toProto(message: _123.MsgSwapExactAmountIn): Uint8Array;
                toProtoMsg(message: _123.MsgSwapExactAmountIn): _123.MsgSwapExactAmountInProtoMsg;
            };
            SwapAmountInRoute: {
                typeUrl: string;
                encode(message: _123.SwapAmountInRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _123.SwapAmountInRoute;
                fromPartial(object: Partial<_123.SwapAmountInRoute>): _123.SwapAmountInRoute;
                fromAmino(object: _123.SwapAmountInRouteAmino): _123.SwapAmountInRoute;
                toAmino(message: _123.SwapAmountInRoute): _123.SwapAmountInRouteAmino;
                fromAminoMsg(object: _123.SwapAmountInRouteAminoMsg): _123.SwapAmountInRoute;
                toAminoMsg(message: _123.SwapAmountInRoute): _123.SwapAmountInRouteAminoMsg;
                fromProtoMsg(message: _123.SwapAmountInRouteProtoMsg): _123.SwapAmountInRoute;
                toProto(message: _123.SwapAmountInRoute): Uint8Array;
                toProtoMsg(message: _123.SwapAmountInRoute): _123.SwapAmountInRouteProtoMsg;
            };
            OsmosisTwapRecord: {
                typeUrl: string;
                encode(message: _123.OsmosisTwapRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _123.OsmosisTwapRecord;
                fromPartial(object: Partial<_123.OsmosisTwapRecord>): _123.OsmosisTwapRecord;
                fromAmino(object: _123.OsmosisTwapRecordAmino): _123.OsmosisTwapRecord;
                toAmino(message: _123.OsmosisTwapRecord): _123.OsmosisTwapRecordAmino;
                fromAminoMsg(object: _123.OsmosisTwapRecordAminoMsg): _123.OsmosisTwapRecord;
                toAminoMsg(message: _123.OsmosisTwapRecord): _123.OsmosisTwapRecordAminoMsg;
                fromProtoMsg(message: _123.OsmosisTwapRecordProtoMsg): _123.OsmosisTwapRecord;
                toProto(message: _123.OsmosisTwapRecord): Uint8Array;
                toProtoMsg(message: _123.OsmosisTwapRecord): _123.OsmosisTwapRecordProtoMsg;
            };
        };
    }
}
