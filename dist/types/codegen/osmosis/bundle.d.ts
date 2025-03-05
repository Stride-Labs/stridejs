import * as _183 from "./osmosis";
export declare const osmosis: {
    OsmosisTwapRecord: {
        typeUrl: string;
        encode(message: _183.OsmosisTwapRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.OsmosisTwapRecord;
        fromPartial(object: Partial<_183.OsmosisTwapRecord>): _183.OsmosisTwapRecord;
        fromAmino(object: _183.OsmosisTwapRecordAmino): _183.OsmosisTwapRecord;
        toAmino(message: _183.OsmosisTwapRecord): _183.OsmosisTwapRecordAmino;
        fromAminoMsg(object: _183.OsmosisTwapRecordAminoMsg): _183.OsmosisTwapRecord;
        toAminoMsg(message: _183.OsmosisTwapRecord): _183.OsmosisTwapRecordAminoMsg;
        fromProtoMsg(message: _183.OsmosisTwapRecordProtoMsg): _183.OsmosisTwapRecord;
        toProto(message: _183.OsmosisTwapRecord): Uint8Array;
        toProtoMsg(message: _183.OsmosisTwapRecord): _183.OsmosisTwapRecordProtoMsg;
    };
};
