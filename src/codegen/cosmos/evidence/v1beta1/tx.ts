import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
/**
 * MsgSubmitEvidence represents a message that supports submitting arbitrary
 * Evidence of misbehavior such as equivocation or counterfactual signing.
 */
export interface MsgSubmitEvidence {
  /** submitter is the signer account address of evidence. */
  submitter: string;
  /** evidence defines the evidence of misbehavior. */
  evidence?: Any | undefined;
}
export interface MsgSubmitEvidenceProtoMsg {
  typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence";
  value: Uint8Array;
}
export type MsgSubmitEvidenceEncoded = Omit<MsgSubmitEvidence, "evidence"> & {
  /** evidence defines the evidence of misbehavior. */evidence?: AnyProtoMsg | undefined;
};
/**
 * MsgSubmitEvidence represents a message that supports submitting arbitrary
 * Evidence of misbehavior such as equivocation or counterfactual signing.
 * @name MsgSubmitEvidenceAmino
 * @package cosmos.evidence.v1beta1
 * @see proto type: cosmos.evidence.v1beta1.MsgSubmitEvidence
 */
export interface MsgSubmitEvidenceAmino {
  /**
   * submitter is the signer account address of evidence.
   */
  submitter?: string;
  /**
   * evidence defines the evidence of misbehavior.
   */
  evidence?: AnyAmino;
}
export interface MsgSubmitEvidenceAminoMsg {
  type: "cosmos-sdk/MsgSubmitEvidence";
  value: MsgSubmitEvidenceAmino;
}
/**
 * MsgSubmitEvidence represents a message that supports submitting arbitrary
 * Evidence of misbehavior such as equivocation or counterfactual signing.
 */
export interface MsgSubmitEvidenceSDKType {
  submitter: string;
  evidence?: AnySDKType | undefined;
}
/** MsgSubmitEvidenceResponse defines the Msg/SubmitEvidence response type. */
export interface MsgSubmitEvidenceResponse {
  /** hash defines the hash of the evidence. */
  hash: Uint8Array;
}
export interface MsgSubmitEvidenceResponseProtoMsg {
  typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse";
  value: Uint8Array;
}
/**
 * MsgSubmitEvidenceResponse defines the Msg/SubmitEvidence response type.
 * @name MsgSubmitEvidenceResponseAmino
 * @package cosmos.evidence.v1beta1
 * @see proto type: cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse
 */
export interface MsgSubmitEvidenceResponseAmino {
  /**
   * hash defines the hash of the evidence.
   */
  hash?: string;
}
export interface MsgSubmitEvidenceResponseAminoMsg {
  type: "cosmos-sdk/MsgSubmitEvidenceResponse";
  value: MsgSubmitEvidenceResponseAmino;
}
/** MsgSubmitEvidenceResponse defines the Msg/SubmitEvidence response type. */
export interface MsgSubmitEvidenceResponseSDKType {
  hash: Uint8Array;
}
function createBaseMsgSubmitEvidence(): MsgSubmitEvidence {
  return {
    submitter: "",
    evidence: undefined
  };
}
export const MsgSubmitEvidence = {
  typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
  encode(message: MsgSubmitEvidence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.submitter !== "") {
      writer.uint32(10).string(message.submitter);
    }
    if (message.evidence !== undefined) {
      Any.encode(message.evidence as Any, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitEvidence {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submitter = reader.string();
          break;
        case 2:
          message.evidence = Cosmos_evidencev1beta1Evidence_InterfaceDecoder(reader) as Any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSubmitEvidence>): MsgSubmitEvidence {
    const message = createBaseMsgSubmitEvidence();
    message.submitter = object.submitter ?? "";
    message.evidence = object.evidence !== undefined && object.evidence !== null ? Any.fromPartial(object.evidence) : undefined;
    return message;
  },
  fromAmino(object: MsgSubmitEvidenceAmino): MsgSubmitEvidence {
    const message = createBaseMsgSubmitEvidence();
    if (object.submitter !== undefined && object.submitter !== null) {
      message.submitter = object.submitter;
    }
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = Cosmos_evidencev1beta1Evidence_FromAmino(object.evidence);
    }
    return message;
  },
  toAmino(message: MsgSubmitEvidence): MsgSubmitEvidenceAmino {
    const obj: any = {};
    obj.submitter = message.submitter === "" ? undefined : message.submitter;
    obj.evidence = message.evidence ? Cosmos_evidencev1beta1Evidence_ToAmino(message.evidence as Any) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitEvidenceAminoMsg): MsgSubmitEvidence {
    return MsgSubmitEvidence.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitEvidence): MsgSubmitEvidenceAminoMsg {
    return {
      type: "cosmos-sdk/MsgSubmitEvidence",
      value: MsgSubmitEvidence.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSubmitEvidenceProtoMsg): MsgSubmitEvidence {
    return MsgSubmitEvidence.decode(message.value);
  },
  toProto(message: MsgSubmitEvidence): Uint8Array {
    return MsgSubmitEvidence.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitEvidence): MsgSubmitEvidenceProtoMsg {
    return {
      typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
      value: MsgSubmitEvidence.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitEvidenceResponse(): MsgSubmitEvidenceResponse {
  return {
    hash: new Uint8Array()
  };
}
export const MsgSubmitEvidenceResponse = {
  typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse",
  encode(message: MsgSubmitEvidenceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitEvidenceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitEvidenceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          message.hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSubmitEvidenceResponse>): MsgSubmitEvidenceResponse {
    const message = createBaseMsgSubmitEvidenceResponse();
    message.hash = object.hash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgSubmitEvidenceResponseAmino): MsgSubmitEvidenceResponse {
    const message = createBaseMsgSubmitEvidenceResponse();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    return message;
  },
  toAmino(message: MsgSubmitEvidenceResponse): MsgSubmitEvidenceResponseAmino {
    const obj: any = {};
    obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitEvidenceResponseAminoMsg): MsgSubmitEvidenceResponse {
    return MsgSubmitEvidenceResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitEvidenceResponse): MsgSubmitEvidenceResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgSubmitEvidenceResponse",
      value: MsgSubmitEvidenceResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSubmitEvidenceResponseProtoMsg): MsgSubmitEvidenceResponse {
    return MsgSubmitEvidenceResponse.decode(message.value);
  },
  toProto(message: MsgSubmitEvidenceResponse): Uint8Array {
    return MsgSubmitEvidenceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitEvidenceResponse): MsgSubmitEvidenceResponseProtoMsg {
    return {
      typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse",
      value: MsgSubmitEvidenceResponse.encode(message).finish()
    };
  }
};
export const Cosmos_evidencev1beta1Evidence_InterfaceDecoder = (input: BinaryReader | Uint8Array): Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    default:
      return data;
  }
};
export const Cosmos_evidencev1beta1Evidence_FromAmino = (content: AnyAmino): Any => {
  return Any.fromAmino(content);
};
export const Cosmos_evidencev1beta1Evidence_ToAmino = (content: Any) => {
  return Any.toAmino(content);
};