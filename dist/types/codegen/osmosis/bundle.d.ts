import * as _199 from "./osmosis";
export declare const osmosis: {
    OsmosisTwapRecord: {
        typeUrl: string;
        encode(message: _199.OsmosisTwapRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _199.OsmosisTwapRecord;
        fromPartial(object: Partial<_199.OsmosisTwapRecord>): _199.OsmosisTwapRecord;
        fromAmino(object: _199.OsmosisTwapRecordAmino): _199.OsmosisTwapRecord;
        toAmino(message: _199.OsmosisTwapRecord): _199.OsmosisTwapRecordAmino;
        fromAminoMsg(object: _199.OsmosisTwapRecordAminoMsg): _199.OsmosisTwapRecord;
        toAminoMsg(message: _199.OsmosisTwapRecord): _199.OsmosisTwapRecordAminoMsg;
        fromProtoMsg(message: _199.OsmosisTwapRecordProtoMsg): _199.OsmosisTwapRecord;
        toProto(message: _199.OsmosisTwapRecord): Uint8Array;
        toProtoMsg(message: _199.OsmosisTwapRecord): _199.OsmosisTwapRecordProtoMsg;
    };
};
