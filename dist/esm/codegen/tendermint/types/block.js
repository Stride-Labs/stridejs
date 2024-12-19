import { Header, Data, Commit } from "./types";
import { EvidenceList } from "./evidence";
import { BinaryReader, BinaryWriter } from "../../binary";
function createBaseBlock() {
  return {
    header: Header.fromPartial({}),
    data: Data.fromPartial({}),
    evidence: EvidenceList.fromPartial({}),
    lastCommit: void 0
  };
}
const Block = {
  typeUrl: "/tendermint.types.Block",
  encode(message, writer = BinaryWriter.create()) {
    if (message.header !== void 0) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.data !== void 0) {
      Data.encode(message.data, writer.uint32(18).fork()).ldelim();
    }
    if (message.evidence !== void 0) {
      EvidenceList.encode(message.evidence, writer.uint32(26).fork()).ldelim();
    }
    if (message.lastCommit !== void 0) {
      Commit.encode(message.lastCommit, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = Header.decode(reader, reader.uint32());
          break;
        case 2:
          message.data = Data.decode(reader, reader.uint32());
          break;
        case 3:
          message.evidence = EvidenceList.decode(reader, reader.uint32());
          break;
        case 4:
          message.lastCommit = Commit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseBlock();
    message.header = object.header !== void 0 && object.header !== null ? Header.fromPartial(object.header) : void 0;
    message.data = object.data !== void 0 && object.data !== null ? Data.fromPartial(object.data) : void 0;
    message.evidence = object.evidence !== void 0 && object.evidence !== null ? EvidenceList.fromPartial(object.evidence) : void 0;
    message.lastCommit = object.lastCommit !== void 0 && object.lastCommit !== null ? Commit.fromPartial(object.lastCommit) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseBlock();
    if (object.header !== void 0 && object.header !== null) {
      message.header = Header.fromAmino(object.header);
    }
    if (object.data !== void 0 && object.data !== null) {
      message.data = Data.fromAmino(object.data);
    }
    if (object.evidence !== void 0 && object.evidence !== null) {
      message.evidence = EvidenceList.fromAmino(object.evidence);
    }
    if (object.last_commit !== void 0 && object.last_commit !== null) {
      message.lastCommit = Commit.fromAmino(object.last_commit);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.header = message.header ? Header.toAmino(message.header) : void 0;
    obj.data = message.data ? Data.toAmino(message.data) : void 0;
    obj.evidence = message.evidence ? EvidenceList.toAmino(message.evidence) : void 0;
    obj.last_commit = message.lastCommit ? Commit.toAmino(message.lastCommit) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Block.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return Block.decode(message.value);
  },
  toProto(message) {
    return Block.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/tendermint.types.Block",
      value: Block.encode(message).finish()
    };
  }
};
export {
  Block
};
