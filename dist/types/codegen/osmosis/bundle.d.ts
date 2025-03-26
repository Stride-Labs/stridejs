import * as _193 from "./osmosis";
export declare const osmosis: {
    OsmosisTwapRecord: {
        typeUrl: string;
        encode(message: _193.OsmosisTwapRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.OsmosisTwapRecord;
        fromPartial(object: Partial<_193.OsmosisTwapRecord>): _193.OsmosisTwapRecord;
        fromAmino(object: _193.OsmosisTwapRecordAmino): _193.OsmosisTwapRecord;
        toAmino(message: _193.OsmosisTwapRecord): _193.OsmosisTwapRecordAmino;
        fromAminoMsg(object: _193.OsmosisTwapRecordAminoMsg): _193.OsmosisTwapRecord;
        toAminoMsg(message: _193.OsmosisTwapRecord): _193.OsmosisTwapRecordAminoMsg;
        fromProtoMsg(message: _193.OsmosisTwapRecordProtoMsg): _193.OsmosisTwapRecord;
        toProto(message: _193.OsmosisTwapRecord): Uint8Array;
        toProtoMsg(message: _193.OsmosisTwapRecord): _193.OsmosisTwapRecordProtoMsg;
    };
};
