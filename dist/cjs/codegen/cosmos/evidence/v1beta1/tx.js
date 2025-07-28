"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var tx_exports = {};
__export(tx_exports, {
  Cosmos_evidencev1beta1Evidence_FromAmino: () => Cosmos_evidencev1beta1Evidence_FromAmino,
  Cosmos_evidencev1beta1Evidence_InterfaceDecoder: () => Cosmos_evidencev1beta1Evidence_InterfaceDecoder,
  Cosmos_evidencev1beta1Evidence_ToAmino: () => Cosmos_evidencev1beta1Evidence_ToAmino,
  MsgSubmitEvidence: () => MsgSubmitEvidence,
  MsgSubmitEvidenceResponse: () => MsgSubmitEvidenceResponse
});
module.exports = __toCommonJS(tx_exports);
var import_any = require("../../../google/protobuf/any");
var import_binary = require("../../../binary");
var import_helpers = require("../../../helpers");
function createBaseMsgSubmitEvidence() {
  return {
    submitter: "",
    evidence: void 0
  };
}
const MsgSubmitEvidence = {
  typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.submitter !== "") {
      writer.uint32(10).string(message.submitter);
    }
    if (message.evidence !== void 0) {
      import_any.Any.encode(message.evidence, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submitter = reader.string();
          break;
        case 2:
          message.evidence = Cosmos_evidencev1beta1Evidence_InterfaceDecoder(reader);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseMsgSubmitEvidence();
    message.submitter = object.submitter ?? "";
    message.evidence = object.evidence !== void 0 && object.evidence !== null ? import_any.Any.fromPartial(object.evidence) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgSubmitEvidence();
    if (object.submitter !== void 0 && object.submitter !== null) {
      message.submitter = object.submitter;
    }
    if (object.evidence !== void 0 && object.evidence !== null) {
      message.evidence = Cosmos_evidencev1beta1Evidence_FromAmino(object.evidence);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.submitter = message.submitter === "" ? void 0 : message.submitter;
    obj.evidence = message.evidence ? Cosmos_evidencev1beta1Evidence_ToAmino(message.evidence) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgSubmitEvidence.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgSubmitEvidence",
      value: MsgSubmitEvidence.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgSubmitEvidence.decode(message.value);
  },
  toProto(message) {
    return MsgSubmitEvidence.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
      value: MsgSubmitEvidence.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitEvidenceResponse() {
  return {
    hash: new Uint8Array()
  };
}
const MsgSubmitEvidenceResponse = {
  typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
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
  fromPartial(object) {
    const message = createBaseMsgSubmitEvidenceResponse();
    message.hash = object.hash ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseMsgSubmitEvidenceResponse();
    if (object.hash !== void 0 && object.hash !== null) {
      message.hash = (0, import_helpers.bytesFromBase64)(object.hash);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.hash = message.hash ? (0, import_helpers.base64FromBytes)(message.hash) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return MsgSubmitEvidenceResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/MsgSubmitEvidenceResponse",
      value: MsgSubmitEvidenceResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return MsgSubmitEvidenceResponse.decode(message.value);
  },
  toProto(message) {
    return MsgSubmitEvidenceResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse",
      value: MsgSubmitEvidenceResponse.encode(message).finish()
    };
  }
};
const Cosmos_evidencev1beta1Evidence_InterfaceDecoder = (input) => {
  const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
  const data = import_any.Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    default:
      return data;
  }
};
const Cosmos_evidencev1beta1Evidence_FromAmino = (content) => {
  return import_any.Any.fromAmino(content);
};
const Cosmos_evidencev1beta1Evidence_ToAmino = (content) => {
  return import_any.Any.toAmino(content);
};
// Removed broken CommonJS export annotation
