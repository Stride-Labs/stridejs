import { Params, CodeInfo, ContractInfo, Model, ContractCodeHistoryEntry } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseGenesisState() {
  return {
    params: Params.fromPartial({}),
    codes: [],
    contracts: [],
    sequences: []
  };
}
const GenesisState = {
  typeUrl: "/cosmwasm.wasm.v1.GenesisState",
  encode(message, writer = BinaryWriter.create()) {
    if (message.params !== void 0) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.codes) {
      Code.encode(v, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.contracts) {
      Contract.encode(v, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.sequences) {
      Sequence.encode(v, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.codes.push(Code.decode(reader, reader.uint32()));
          break;
        case 3:
          message.contracts.push(Contract.decode(reader, reader.uint32()));
          break;
        case 4:
          message.sequences.push(Sequence.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseGenesisState();
    message.params = object.params !== void 0 && object.params !== null ? Params.fromPartial(object.params) : void 0;
    message.codes = object.codes?.map((e) => Code.fromPartial(e)) || [];
    message.contracts = object.contracts?.map((e) => Contract.fromPartial(e)) || [];
    message.sequences = object.sequences?.map((e) => Sequence.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseGenesisState();
    if (object.params !== void 0 && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.codes = object.codes?.map((e) => Code.fromAmino(e)) || [];
    message.contracts = object.contracts?.map((e) => Contract.fromAmino(e)) || [];
    message.sequences = object.sequences?.map((e) => Sequence.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    if (message.codes) {
      obj.codes = message.codes.map((e) => e ? Code.toAmino(e) : void 0);
    } else {
      obj.codes = message.codes;
    }
    if (message.contracts) {
      obj.contracts = message.contracts.map((e) => e ? Contract.toAmino(e) : void 0);
    } else {
      obj.contracts = message.contracts;
    }
    if (message.sequences) {
      obj.sequences = message.sequences.map((e) => e ? Sequence.toAmino(e) : void 0);
    } else {
      obj.sequences = message.sequences;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return GenesisState.decode(message.value);
  },
  toProto(message) {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseCode() {
  return {
    codeId: BigInt(0),
    codeInfo: CodeInfo.fromPartial({}),
    codeBytes: new Uint8Array(),
    pinned: false
  };
}
const Code = {
  typeUrl: "/cosmwasm.wasm.v1.Code",
  encode(message, writer = BinaryWriter.create()) {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.codeInfo !== void 0) {
      CodeInfo.encode(message.codeInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.codeBytes.length !== 0) {
      writer.uint32(26).bytes(message.codeBytes);
    }
    if (message.pinned === true) {
      writer.uint32(32).bool(message.pinned);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;
        case 2:
          message.codeInfo = CodeInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.codeBytes = reader.bytes();
          break;
        case 4:
          message.pinned = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseCode();
    message.codeId = object.codeId !== void 0 && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.codeInfo = object.codeInfo !== void 0 && object.codeInfo !== null ? CodeInfo.fromPartial(object.codeInfo) : void 0;
    message.codeBytes = object.codeBytes ?? new Uint8Array();
    message.pinned = object.pinned ?? false;
    return message;
  },
  fromAmino(object) {
    const message = createBaseCode();
    if (object.code_id !== void 0 && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    if (object.code_info !== void 0 && object.code_info !== null) {
      message.codeInfo = CodeInfo.fromAmino(object.code_info);
    }
    if (object.code_bytes !== void 0 && object.code_bytes !== null) {
      message.codeBytes = bytesFromBase64(object.code_bytes);
    }
    if (object.pinned !== void 0 && object.pinned !== null) {
      message.pinned = object.pinned;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId?.toString() : void 0;
    obj.code_info = message.codeInfo ? CodeInfo.toAmino(message.codeInfo) : CodeInfo.toAmino(CodeInfo.fromPartial({}));
    obj.code_bytes = message.codeBytes ? base64FromBytes(message.codeBytes) : void 0;
    obj.pinned = message.pinned === false ? void 0 : message.pinned;
    return obj;
  },
  fromAminoMsg(object) {
    return Code.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/Code",
      value: Code.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Code.decode(message.value);
  },
  toProto(message) {
    return Code.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.Code",
      value: Code.encode(message).finish()
    };
  }
};
function createBaseContract() {
  return {
    contractAddress: "",
    contractInfo: ContractInfo.fromPartial({}),
    contractState: [],
    contractCodeHistory: []
  };
}
const Contract = {
  typeUrl: "/cosmwasm.wasm.v1.Contract",
  encode(message, writer = BinaryWriter.create()) {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.contractInfo !== void 0) {
      ContractInfo.encode(message.contractInfo, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.contractState) {
      Model.encode(v, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.contractCodeHistory) {
      ContractCodeHistoryEntry.encode(v, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.contractInfo = ContractInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.contractState.push(Model.decode(reader, reader.uint32()));
          break;
        case 4:
          message.contractCodeHistory.push(ContractCodeHistoryEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseContract();
    message.contractAddress = object.contractAddress ?? "";
    message.contractInfo = object.contractInfo !== void 0 && object.contractInfo !== null ? ContractInfo.fromPartial(object.contractInfo) : void 0;
    message.contractState = object.contractState?.map((e) => Model.fromPartial(e)) || [];
    message.contractCodeHistory = object.contractCodeHistory?.map((e) => ContractCodeHistoryEntry.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object) {
    const message = createBaseContract();
    if (object.contract_address !== void 0 && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.contract_info !== void 0 && object.contract_info !== null) {
      message.contractInfo = ContractInfo.fromAmino(object.contract_info);
    }
    message.contractState = object.contract_state?.map((e) => Model.fromAmino(e)) || [];
    message.contractCodeHistory = object.contract_code_history?.map((e) => ContractCodeHistoryEntry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.contract_address = message.contractAddress === "" ? void 0 : message.contractAddress;
    obj.contract_info = message.contractInfo ? ContractInfo.toAmino(message.contractInfo) : ContractInfo.toAmino(ContractInfo.fromPartial({}));
    if (message.contractState) {
      obj.contract_state = message.contractState.map((e) => e ? Model.toAmino(e) : void 0);
    } else {
      obj.contract_state = message.contractState;
    }
    if (message.contractCodeHistory) {
      obj.contract_code_history = message.contractCodeHistory.map((e) => e ? ContractCodeHistoryEntry.toAmino(e) : void 0);
    } else {
      obj.contract_code_history = message.contractCodeHistory;
    }
    return obj;
  },
  fromAminoMsg(object) {
    return Contract.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/Contract",
      value: Contract.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Contract.decode(message.value);
  },
  toProto(message) {
    return Contract.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.Contract",
      value: Contract.encode(message).finish()
    };
  }
};
function createBaseSequence() {
  return {
    idKey: new Uint8Array(),
    value: BigInt(0)
  };
}
const Sequence = {
  typeUrl: "/cosmwasm.wasm.v1.Sequence",
  encode(message, writer = BinaryWriter.create()) {
    if (message.idKey.length !== 0) {
      writer.uint32(10).bytes(message.idKey);
    }
    if (message.value !== BigInt(0)) {
      writer.uint32(16).uint64(message.value);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSequence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.idKey = reader.bytes();
          break;
        case 2:
          message.value = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseSequence();
    message.idKey = object.idKey ?? new Uint8Array();
    message.value = object.value !== void 0 && object.value !== null ? BigInt(object.value.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseSequence();
    if (object.id_key !== void 0 && object.id_key !== null) {
      message.idKey = bytesFromBase64(object.id_key);
    }
    if (object.value !== void 0 && object.value !== null) {
      message.value = BigInt(object.value);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.id_key = message.idKey ? base64FromBytes(message.idKey) : void 0;
    obj.value = message.value !== BigInt(0) ? message.value?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return Sequence.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/Sequence",
      value: Sequence.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return Sequence.decode(message.value);
  },
  toProto(message) {
    return Sequence.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.Sequence",
      value: Sequence.encode(message).finish()
    };
  }
};
export {
  Code,
  Contract,
  GenesisState,
  Sequence
};
