import * as _189 from "./osmosis";
export declare const osmosis: {
    OsmosisTwapRecord: {
        typeUrl: string;
        encode(message: _189.OsmosisTwapRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.OsmosisTwapRecord;
        fromPartial(object: Partial<_189.OsmosisTwapRecord>): _189.OsmosisTwapRecord;
        fromAmino(object: _189.OsmosisTwapRecordAmino): _189.OsmosisTwapRecord;
        toAmino(message: _189.OsmosisTwapRecord): _189.OsmosisTwapRecordAmino;
        fromAminoMsg(object: _189.OsmosisTwapRecordAminoMsg): _189.OsmosisTwapRecord;
        toAminoMsg(message: _189.OsmosisTwapRecord): _189.OsmosisTwapRecordAminoMsg;
        fromProtoMsg(message: _189.OsmosisTwapRecordProtoMsg): _189.OsmosisTwapRecord;
        toProto(message: _189.OsmosisTwapRecord): Uint8Array;
        toProtoMsg(message: _189.OsmosisTwapRecord): _189.OsmosisTwapRecordProtoMsg;
    };
};
