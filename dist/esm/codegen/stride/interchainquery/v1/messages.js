import { ProofOps } from "../../../tendermint/crypto/proof";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseMsgSubmitQueryResponse() {
  return {
    chainId: "",
    queryId: "",
    result: new Uint8Array(),
    proofOps: void 0,
    height: BigInt(0),
    fromAddress: ""
  };
}
const MsgSubmitQueryResponse = {
  typeUrl: "/stride.interchainquery.v1.MsgSubmitQueryResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.queryId !== "") {
      writer.uint32(18).string(message.queryId);
    }
    if (message.result.length !== 0) {
      writer.uint32(26).bytes(message.result);
    }
    if (message.proofOps !== void 0) {
      ProofOps.encode(message.proofOps, writer.uint32(34).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(40).int64(message.height);
    }
    if (message.fromAddress !== "") {
      writer.uint32(50).string(message.fromAddress);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitQueryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.queryId = reader.string();
          break;
        case 3:
          message.result = reader.bytes();
          break;
        case 4:
          message.proofOps = ProofOps.decode(reader, reader.uint32());
          break;
        case 5:
          message.height = reader.int64();
          break;
        case 6:
          message.fromAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgSubmitQueryResponse();
    message.chainId = object.chainId ?? "";
    message.queryId = object.queryId ?? "";
    message.result = object.result ?? new Uint8Array();
    message.proofOps = object.proofOps !== void 0 && object.proofOps !== null ? ProofOps.fromPartial(object.proofOps) : void 0;
    message.height = object.height !== void 0 && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.fromAddress = object.fromAddress ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgSubmitQueryResponse();
    if (object.chain_id !== void 0 && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.query_id !== void 0 && object.query_id !== null) {
      message.queryId = object.query_id;
    }
    if (object.result !== void 0 && object.result !== null) {
      message.result = bytesFromBase64(object.result);
    }
    if (object.proof_ops !== void 0 && object.proof_ops !== null) {
      message.proofOps = ProofOps.fromAmino(object.proof_ops);
    }
    if (object.height !== void 0 && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.from_address !== void 0 && object.from_address !== null) {
      message.fromAddress = object.from_address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.chain_id = message.chainId === "" ? void 0 : message.chainId;
    obj.query_id = message.queryId === "" ? void 0 : message.queryId;
    obj.result = message.result ? base64FromBytes(message.result) : void 0;
    obj.proof_ops = message.proofOps ? ProofOps.toAmino(message.proofOps) : void 0;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : void 0;
    obj.from_address = message.fromAddress === "" ? void 0 : message.fromAddress;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgSubmitQueryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgSubmitQueryResponse.decode(message.value);
  },
  toProto(message) {
    return MsgSubmitQueryResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.interchainquery.v1.MsgSubmitQueryResponse",
      value: MsgSubmitQueryResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitQueryResponseResponse() {
  return {};
}
const MsgSubmitQueryResponseResponse = {
  typeUrl: "/stride.interchainquery.v1.MsgSubmitQueryResponseResponse",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitQueryResponseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_) {
    const message = createBaseMsgSubmitQueryResponseResponse();
    return message;
  },
  fromAmino(_) {
    const message = createBaseMsgSubmitQueryResponseResponse();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return MsgSubmitQueryResponseResponse.fromAmino(object.value);
  },
  fromProtoMsg(message) {
    return MsgSubmitQueryResponseResponse.decode(message.value);
  },
  toProto(message) {
    return MsgSubmitQueryResponseResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/stride.interchainquery.v1.MsgSubmitQueryResponseResponse",
      value: MsgSubmitQueryResponseResponse.encode(message).finish()
    };
  }
};
export {
  MsgSubmitQueryResponse,
  MsgSubmitQueryResponseResponse
};
