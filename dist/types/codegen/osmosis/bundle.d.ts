import * as _182 from "./osmosis";
export declare const osmosis: {
    OsmosisTwapRecord: {
        typeUrl: string;
        encode(message: _182.OsmosisTwapRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.OsmosisTwapRecord;
        fromPartial(object: Partial<_182.OsmosisTwapRecord>): _182.OsmosisTwapRecord;
        fromAmino(object: _182.OsmosisTwapRecordAmino): _182.OsmosisTwapRecord;
        toAmino(message: _182.OsmosisTwapRecord): _182.OsmosisTwapRecordAmino;
        fromAminoMsg(object: _182.OsmosisTwapRecordAminoMsg): _182.OsmosisTwapRecord;
        toAminoMsg(message: _182.OsmosisTwapRecord): _182.OsmosisTwapRecordAminoMsg;
        fromProtoMsg(message: _182.OsmosisTwapRecordProtoMsg): _182.OsmosisTwapRecord;
        toProto(message: _182.OsmosisTwapRecord): Uint8Array;
        toProtoMsg(message: _182.OsmosisTwapRecord): _182.OsmosisTwapRecordProtoMsg;
    };
};
