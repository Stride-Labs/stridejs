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
var signing_exports = {};
__export(signing_exports, {
  SignMode: () => SignMode,
  SignModeAmino: () => SignModeAmino,
  SignModeSDKType: () => SignModeSDKType,
  SignatureDescriptor: () => SignatureDescriptor,
  SignatureDescriptor_Data: () => SignatureDescriptor_Data,
  SignatureDescriptor_Data_Multi: () => SignatureDescriptor_Data_Multi,
  SignatureDescriptor_Data_Single: () => SignatureDescriptor_Data_Single,
  SignatureDescriptors: () => SignatureDescriptors,
  signModeFromJSON: () => signModeFromJSON,
  signModeToJSON: () => signModeToJSON
});
module.exports = __toCommonJS(signing_exports);
var import_multisig = require("../../../crypto/multisig/v1beta1/multisig");
var import_any = require("../../../../google/protobuf/any");
var import_binary = require("../../../../binary");
var import_helpers = require("../../../../helpers");
var SignMode = /* @__PURE__ */ ((SignMode2) => {
  SignMode2[SignMode2["SIGN_MODE_UNSPECIFIED"] = 0] = "SIGN_MODE_UNSPECIFIED";
  SignMode2[SignMode2["SIGN_MODE_DIRECT"] = 1] = "SIGN_MODE_DIRECT";
  SignMode2[SignMode2["SIGN_MODE_TEXTUAL"] = 2] = "SIGN_MODE_TEXTUAL";
  SignMode2[SignMode2["SIGN_MODE_DIRECT_AUX"] = 3] = "SIGN_MODE_DIRECT_AUX";
  SignMode2[SignMode2["SIGN_MODE_LEGACY_AMINO_JSON"] = 127] = "SIGN_MODE_LEGACY_AMINO_JSON";
  SignMode2[SignMode2["SIGN_MODE_EIP_191"] = 191] = "SIGN_MODE_EIP_191";
  SignMode2[SignMode2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return SignMode2;
})(SignMode || {});
const SignModeSDKType = SignMode;
const SignModeAmino = SignMode;
function signModeFromJSON(object) {
  switch (object) {
    case 0:
    case "SIGN_MODE_UNSPECIFIED":
      return 0 /* SIGN_MODE_UNSPECIFIED */;
    case 1:
    case "SIGN_MODE_DIRECT":
      return 1 /* SIGN_MODE_DIRECT */;
    case 2:
    case "SIGN_MODE_TEXTUAL":
      return 2 /* SIGN_MODE_TEXTUAL */;
    case 3:
    case "SIGN_MODE_DIRECT_AUX":
      return 3 /* SIGN_MODE_DIRECT_AUX */;
    case 127:
    case "SIGN_MODE_LEGACY_AMINO_JSON":
      return 127 /* SIGN_MODE_LEGACY_AMINO_JSON */;
    case 191:
    case "SIGN_MODE_EIP_191":
      return 191 /* SIGN_MODE_EIP_191 */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function signModeToJSON(object) {
  switch (object) {
    case 0 /* SIGN_MODE_UNSPECIFIED */:
      return "SIGN_MODE_UNSPECIFIED";
    case 1 /* SIGN_MODE_DIRECT */:
      return "SIGN_MODE_DIRECT";
    case 2 /* SIGN_MODE_TEXTUAL */:
      return "SIGN_MODE_TEXTUAL";
    case 3 /* SIGN_MODE_DIRECT_AUX */:
      return "SIGN_MODE_DIRECT_AUX";
    case 127 /* SIGN_MODE_LEGACY_AMINO_JSON */:
      return "SIGN_MODE_LEGACY_AMINO_JSON";
    case 191 /* SIGN_MODE_EIP_191 */:
      return "SIGN_MODE_EIP_191";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseSignatureDescriptors() {
  return {
    signatures: []
  };
}
const SignatureDescriptors = {
  typeUrl: "/cosmos.tx.signing.v1beta1.SignatureDescriptors",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    for (const v of message.signatures) {
      SignatureDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSignatureDescriptors();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signatures.push(SignatureDescriptor.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseSignatureDescriptors();
    message.signatures = object.signatures?.map((e) => SignatureDescriptor.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseSignatureDescriptors();
    message.signatures = object.signatures?.map((e) => SignatureDescriptor.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.signatures) {
      obj.signatures = message.signatures.map((e) => e ? SignatureDescriptor.toAmino(e) : void 0);
    } else {
      obj.signatures = message.signatures;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return SignatureDescriptors.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/SignatureDescriptors",
      value: SignatureDescriptors.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return SignatureDescriptors.decode(message.value);
  },
  toProto(message) {
    return SignatureDescriptors.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.tx.signing.v1beta1.SignatureDescriptors",
      value: SignatureDescriptors.encode(message).finish()
    };
  }
};
function createBaseSignatureDescriptor() {
  return {
    publicKey: void 0,
    data: void 0,
    sequence: BigInt(0)
  };
}
const SignatureDescriptor = {
  typeUrl: "/cosmos.tx.signing.v1beta1.SignatureDescriptor",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.publicKey !== void 0) {
      import_any.Any.encode(message.publicKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.data !== void 0) {
      SignatureDescriptor_Data.encode(message.data, writer.uint32(18).fork()).ldelim();
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSignatureDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publicKey = import_any.Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.data = SignatureDescriptor_Data.decode(reader, reader.uint32());
          break;
        case 3:
          message.sequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseSignatureDescriptor();
    message.publicKey = object.publicKey !== void 0 && object.publicKey !== null ? import_any.Any.fromPartial(object.publicKey) : void 0;
    message.data = object.data !== void 0 && object.data !== null ? SignatureDescriptor_Data.fromPartial(object.data) : void 0;
    message.sequence = object.sequence !== void 0 && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseSignatureDescriptor();
    if (object.public_key !== void 0 && object.public_key !== null) {
      message.publicKey = import_any.Any.fromAmino(object.public_key);
    }
    if (object.data !== void 0 && object.data !== null) {
      message.data = SignatureDescriptor_Data.fromAmino(object.data);
    }
    if (object.sequence !== void 0 && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.public_key = message.publicKey ? import_any.Any.toAmino(message.publicKey) : void 0;
    obj.data = message.data ? SignatureDescriptor_Data.toAmino(message.data) : void 0;
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return SignatureDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/SignatureDescriptor",
      value: SignatureDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return SignatureDescriptor.decode(message.value);
  },
  toProto(message) {
    return SignatureDescriptor.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.tx.signing.v1beta1.SignatureDescriptor",
      value: SignatureDescriptor.encode(message).finish()
    };
  }
};
function createBaseSignatureDescriptor_Data() {
  return {
    single: void 0,
    multi: void 0
  };
}
const SignatureDescriptor_Data = {
  typeUrl: "/cosmos.tx.signing.v1beta1.Data",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.single !== void 0) {
      SignatureDescriptor_Data_Single.encode(message.single, writer.uint32(10).fork()).ldelim();
    }
    if (message.multi !== void 0) {
      SignatureDescriptor_Data_Multi.encode(message.multi, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSignatureDescriptor_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.single = SignatureDescriptor_Data_Single.decode(reader, reader.uint32());
          break;
        case 2:
          message.multi = SignatureDescriptor_Data_Multi.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseSignatureDescriptor_Data();
    message.single = object.single !== void 0 && object.single !== null ? SignatureDescriptor_Data_Single.fromPartial(object.single) : void 0;
    message.multi = object.multi !== void 0 && object.multi !== null ? SignatureDescriptor_Data_Multi.fromPartial(object.multi) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseSignatureDescriptor_Data();
    if (object.single !== void 0 && object.single !== null) {
      message.single = SignatureDescriptor_Data_Single.fromAmino(object.single);
    }
    if (object.multi !== void 0 && object.multi !== null) {
      message.multi = SignatureDescriptor_Data_Multi.fromAmino(object.multi);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.single = message.single ? SignatureDescriptor_Data_Single.toAmino(message.single) : void 0;
    obj.multi = message.multi ? SignatureDescriptor_Data_Multi.toAmino(message.multi) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return SignatureDescriptor_Data.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Data",
      value: SignatureDescriptor_Data.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return SignatureDescriptor_Data.decode(message.value);
  },
  toProto(message) {
    return SignatureDescriptor_Data.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.tx.signing.v1beta1.Data",
      value: SignatureDescriptor_Data.encode(message).finish()
    };
  }
};
function createBaseSignatureDescriptor_Data_Single() {
  return {
    mode: 0,
    signature: new Uint8Array()
  };
}
const SignatureDescriptor_Data_Single = {
  typeUrl: "/cosmos.tx.signing.v1beta1.Single",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.mode !== 0) {
      writer.uint32(8).int32(message.mode);
    }
    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSignatureDescriptor_Data_Single();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mode = reader.int32();
          break;
        case 2:
          message.signature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseSignatureDescriptor_Data_Single();
    message.mode = object.mode ?? 0;
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseSignatureDescriptor_Data_Single();
    if (object.mode !== void 0 && object.mode !== null) {
      message.mode = object.mode;
    }
    if (object.signature !== void 0 && object.signature !== null) {
      message.signature = (0, import_helpers.bytesFromBase64)(object.signature);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.mode = message.mode === 0 ? void 0 : message.mode;
    obj.signature = message.signature ? (0, import_helpers.base64FromBytes)(message.signature) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return SignatureDescriptor_Data_Single.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Single",
      value: SignatureDescriptor_Data_Single.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return SignatureDescriptor_Data_Single.decode(message.value);
  },
  toProto(message) {
    return SignatureDescriptor_Data_Single.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.tx.signing.v1beta1.Single",
      value: SignatureDescriptor_Data_Single.encode(message).finish()
    };
  }
};
function createBaseSignatureDescriptor_Data_Multi() {
  return {
    bitarray: void 0,
    signatures: []
  };
}
const SignatureDescriptor_Data_Multi = {
  typeUrl: "/cosmos.tx.signing.v1beta1.Multi",
  encode(message, writer = import_binary.BinaryWriter.create()) {
    if (message.bitarray !== void 0) {
      import_multisig.CompactBitArray.encode(message.bitarray, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.signatures) {
      SignatureDescriptor_Data.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof import_binary.BinaryReader ? input : new import_binary.BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSignatureDescriptor_Data_Multi();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bitarray = import_multisig.CompactBitArray.decode(reader, reader.uint32());
          break;
        case 2:
          message.signatures.push(SignatureDescriptor_Data.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseSignatureDescriptor_Data_Multi();
    message.bitarray = object.bitarray !== void 0 && object.bitarray !== null ? import_multisig.CompactBitArray.fromPartial(object.bitarray) : void 0;
    message.signatures = object.signatures?.map((e) => SignatureDescriptor_Data.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseSignatureDescriptor_Data_Multi();
    if (object.bitarray !== void 0 && object.bitarray !== null) {
      message.bitarray = import_multisig.CompactBitArray.fromAmino(object.bitarray);
    }
    message.signatures = object.signatures?.map((e) => SignatureDescriptor_Data.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.bitarray = message.bitarray ? import_multisig.CompactBitArray.toAmino(message.bitarray) : void 0;
    if (message.signatures) {
      obj.signatures = message.signatures.map((e) => e ? SignatureDescriptor_Data.toAmino(e) : void 0);
    } else {
      obj.signatures = message.signatures;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return SignatureDescriptor_Data_Multi.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "cosmos-sdk/Multi",
      value: SignatureDescriptor_Data_Multi.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return SignatureDescriptor_Data_Multi.decode(message.value);
  },
  toProto(message) {
    return SignatureDescriptor_Data_Multi.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmos.tx.signing.v1beta1.Multi",
      value: SignatureDescriptor_Data_Multi.encode(message).finish()
    };
  }
};
// Removed broken CommonJS export annotation
