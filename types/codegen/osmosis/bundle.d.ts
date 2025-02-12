import * as _175 from "./osmosis";
export declare const osmosis: {
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
