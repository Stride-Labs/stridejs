import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { ContractInfo, ContractCodeHistoryEntry, Model, AccessConfig, Params } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
import { toUtf8, fromUtf8 } from "@cosmjs/encoding";
function createBaseQueryContractInfoRequest() {
  return {
    address: ""
  };
}
const QueryContractInfoRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryContractInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryContractInfoRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryContractInfoRequest();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryContractInfoRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/QueryContractInfoRequest",
      value: QueryContractInfoRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryContractInfoRequest.decode(message.value);
  },
  toProto(message) {
    return QueryContractInfoRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoRequest",
      value: QueryContractInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryContractInfoResponse() {
  return {
    address: "",
    contractInfo: ContractInfo.fromPartial({})
  };
}
const QueryContractInfoResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.contractInfo !== void 0) {
      ContractInfo.encode(message.contractInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryContractInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.contractInfo = ContractInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryContractInfoResponse();
    message.address = object.address ?? "";
    message.contractInfo = object.contractInfo !== void 0 && object.contractInfo !== null ? ContractInfo.fromPartial(object.contractInfo) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryContractInfoResponse();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    if (object.contract_info !== void 0 && object.contract_info !== null) {
      message.contractInfo = ContractInfo.fromAmino(object.contract_info);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    obj.contract_info = message.contractInfo ? ContractInfo.toAmino(message.contractInfo) : ContractInfo.toAmino(ContractInfo.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object) {
    return QueryContractInfoResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/QueryContractInfoResponse",
      value: QueryContractInfoResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryContractInfoResponse.decode(message.value);
  },
  toProto(message) {
    return QueryContractInfoResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryContractInfoResponse",
      value: QueryContractInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryContractHistoryRequest() {
  return {
    address: "",
    pagination: void 0
  };
}
const QueryContractHistoryRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryContractHistoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryContractHistoryRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryContractHistoryRequest();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryContractHistoryRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/QueryContractHistoryRequest",
      value: QueryContractHistoryRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryContractHistoryRequest.decode(message.value);
  },
  toProto(message) {
    return QueryContractHistoryRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryRequest",
      value: QueryContractHistoryRequest.encode(message).finish()
    };
  }
};
function createBaseQueryContractHistoryResponse() {
  return {
    entries: [],
    pagination: void 0
  };
}
const QueryContractHistoryResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.entries) {
      ContractCodeHistoryEntry.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryContractHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(ContractCodeHistoryEntry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryContractHistoryResponse();
    message.entries = object.entries?.map((e) => ContractCodeHistoryEntry.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryContractHistoryResponse();
    message.entries = object.entries?.map((e) => ContractCodeHistoryEntry.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.entries) {
      obj.entries = message.entries.map((e) => e ? ContractCodeHistoryEntry.toAmino(e) : void 0);
    } else {
      obj.entries = message.entries;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryContractHistoryResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/QueryContractHistoryResponse",
      value: QueryContractHistoryResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryContractHistoryResponse.decode(message.value);
  },
  toProto(message) {
    return QueryContractHistoryResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryContractHistoryResponse",
      value: QueryContractHistoryResponse.encode(message).finish()
    };
  }
};
function createBaseQueryContractsByCodeRequest() {
  return {
    codeId: BigInt(0),
    pagination: void 0
  };
}
const QueryContractsByCodeRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsByCodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryContractsByCodeRequest();
    message.codeId = object.codeId !== void 0 && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryContractsByCodeRequest();
    if (object.code_id !== void 0 && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId?.toString() : void 0;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryContractsByCodeRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/QueryContractsByCodeRequest",
      value: QueryContractsByCodeRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryContractsByCodeRequest.decode(message.value);
  },
  toProto(message) {
    return QueryContractsByCodeRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeRequest",
      value: QueryContractsByCodeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryContractsByCodeResponse() {
  return {
    contracts: [],
    pagination: void 0
  };
}
const QueryContractsByCodeResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.contracts) {
      writer.uint32(10).string(v);
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsByCodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contracts.push(reader.string());
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryContractsByCodeResponse();
    message.contracts = object.contracts?.map((e) => e) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryContractsByCodeResponse();
    message.contracts = object.contracts?.map((e) => e) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.contracts) {
      obj.contracts = message.contracts.map((e) => e);
    } else {
      obj.contracts = message.contracts;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryContractsByCodeResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/QueryContractsByCodeResponse",
      value: QueryContractsByCodeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryContractsByCodeResponse.decode(message.value);
  },
  toProto(message) {
    return QueryContractsByCodeResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCodeResponse",
      value: QueryContractsByCodeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllContractStateRequest() {
  return {
    address: "",
    pagination: void 0
  };
}
const QueryAllContractStateRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAllContractStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryAllContractStateRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAllContractStateRequest();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAllContractStateRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/QueryAllContractStateRequest",
      value: QueryAllContractStateRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryAllContractStateRequest.decode(message.value);
  },
  toProto(message) {
    return QueryAllContractStateRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateRequest",
      value: QueryAllContractStateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllContractStateResponse() {
  return {
    models: [],
    pagination: void 0
  };
}
const QueryAllContractStateResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.models) {
      Model.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryAllContractStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.models.push(Model.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryAllContractStateResponse();
    message.models = object.models?.map((e) => Model.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryAllContractStateResponse();
    message.models = object.models?.map((e) => Model.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.models) {
      obj.models = message.models.map((e) => e ? Model.toAmino(e) : void 0);
    } else {
      obj.models = message.models;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryAllContractStateResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/QueryAllContractStateResponse",
      value: QueryAllContractStateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryAllContractStateResponse.decode(message.value);
  },
  toProto(message) {
    return QueryAllContractStateResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryAllContractStateResponse",
      value: QueryAllContractStateResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRawContractStateRequest() {
  return {
    address: "",
    queryData: new Uint8Array()
  };
}
const QueryRawContractStateRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.queryData.length !== 0) {
      writer.uint32(18).bytes(message.queryData);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryRawContractStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.queryData = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryRawContractStateRequest();
    message.address = object.address ?? "";
    message.queryData = object.queryData ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryRawContractStateRequest();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    if (object.query_data !== void 0 && object.query_data !== null) {
      message.queryData = bytesFromBase64(object.query_data);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    obj.query_data = message.queryData ? base64FromBytes(message.queryData) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryRawContractStateRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/QueryRawContractStateRequest",
      value: QueryRawContractStateRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryRawContractStateRequest.decode(message.value);
  },
  toProto(message) {
    return QueryRawContractStateRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateRequest",
      value: QueryRawContractStateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRawContractStateResponse() {
  return {
    data: new Uint8Array()
  };
}
const QueryRawContractStateResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryRawContractStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryRawContractStateResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryRawContractStateResponse();
    if (object.data !== void 0 && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.data = message.data ? base64FromBytes(message.data) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryRawContractStateResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/QueryRawContractStateResponse",
      value: QueryRawContractStateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryRawContractStateResponse.decode(message.value);
  },
  toProto(message) {
    return QueryRawContractStateResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryRawContractStateResponse",
      value: QueryRawContractStateResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySmartContractStateRequest() {
  return {
    address: "",
    queryData: new Uint8Array()
  };
}
const QuerySmartContractStateRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.queryData.length !== 0) {
      writer.uint32(18).bytes(message.queryData);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQuerySmartContractStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.queryData = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQuerySmartContractStateRequest();
    message.address = object.address ?? "";
    message.queryData = object.queryData ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseQuerySmartContractStateRequest();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    if (object.query_data !== void 0 && object.query_data !== null) {
      message.queryData = toUtf8(JSON.stringify(object.query_data));
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    obj.query_data = message.queryData ? JSON.parse(fromUtf8(message.queryData)) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QuerySmartContractStateRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/QuerySmartContractStateRequest",
      value: QuerySmartContractStateRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QuerySmartContractStateRequest.decode(message.value);
  },
  toProto(message) {
    return QuerySmartContractStateRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateRequest",
      value: QuerySmartContractStateRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySmartContractStateResponse() {
  return {
    data: new Uint8Array()
  };
}
const QuerySmartContractStateResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQuerySmartContractStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQuerySmartContractStateResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseQuerySmartContractStateResponse();
    if (object.data !== void 0 && object.data !== null) {
      message.data = toUtf8(JSON.stringify(object.data));
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.data = message.data ? JSON.parse(fromUtf8(message.data)) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QuerySmartContractStateResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/QuerySmartContractStateResponse",
      value: QuerySmartContractStateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QuerySmartContractStateResponse.decode(message.value);
  },
  toProto(message) {
    return QuerySmartContractStateResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QuerySmartContractStateResponse",
      value: QuerySmartContractStateResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCodeRequest() {
  return {
    codeId: BigInt(0)
  };
}
const QueryCodeRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodeRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryCodeRequest();
    message.codeId = object.codeId !== void 0 && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryCodeRequest();
    if (object.code_id !== void 0 && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryCodeRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/QueryCodeRequest",
      value: QueryCodeRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryCodeRequest.decode(message.value);
  },
  toProto(message) {
    return QueryCodeRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryCodeRequest",
      value: QueryCodeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCodeInfoRequest() {
  return {
    codeId: BigInt(0)
  };
}
const QueryCodeInfoRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodeInfoRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryCodeInfoRequest();
    message.codeId = object.codeId !== void 0 && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryCodeInfoRequest();
    if (object.code_id !== void 0 && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId?.toString() : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryCodeInfoRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/QueryCodeInfoRequest",
      value: QueryCodeInfoRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryCodeInfoRequest.decode(message.value);
  },
  toProto(message) {
    return QueryCodeInfoRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryCodeInfoRequest",
      value: QueryCodeInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCodeInfoResponse() {
  return {
    codeId: BigInt(0),
    creator: "",
    checksum: new Uint8Array(),
    instantiatePermission: AccessConfig.fromPartial({})
  };
}
const QueryCodeInfoResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodeInfoResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.checksum.length !== 0) {
      writer.uint32(26).bytes(message.checksum);
    }
    if (message.instantiatePermission !== void 0) {
      AccessConfig.encode(message.instantiatePermission, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.checksum = reader.bytes();
          break;
        case 4:
          message.instantiatePermission = AccessConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryCodeInfoResponse();
    message.codeId = object.codeId !== void 0 && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.creator = object.creator ?? "";
    message.checksum = object.checksum ?? new Uint8Array();
    message.instantiatePermission = object.instantiatePermission !== void 0 && object.instantiatePermission !== null ? AccessConfig.fromPartial(object.instantiatePermission) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryCodeInfoResponse();
    if (object.code_id !== void 0 && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    if (object.creator !== void 0 && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.checksum !== void 0 && object.checksum !== null) {
      message.checksum = bytesFromBase64(object.checksum);
    }
    if (object.instantiate_permission !== void 0 && object.instantiate_permission !== null) {
      message.instantiatePermission = AccessConfig.fromAmino(object.instantiate_permission);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId?.toString() : void 0;
    obj.creator = message.creator === "" ? void 0 : message.creator;
    obj.checksum = message.checksum ? base64FromBytes(message.checksum) : void 0;
    obj.instantiate_permission = message.instantiatePermission ? AccessConfig.toAmino(message.instantiatePermission) : AccessConfig.toAmino(AccessConfig.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object) {
    return QueryCodeInfoResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/QueryCodeInfoResponse",
      value: QueryCodeInfoResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryCodeInfoResponse.decode(message.value);
  },
  toProto(message) {
    return QueryCodeInfoResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryCodeInfoResponse",
      value: QueryCodeInfoResponse.encode(message).finish()
    };
  }
};
function createBaseCodeInfoResponse() {
  return {
    codeId: BigInt(0),
    creator: "",
    dataHash: new Uint8Array(),
    instantiatePermission: AccessConfig.fromPartial({})
  };
}
const CodeInfoResponse = {
  typeUrl: "/cosmwasm.wasm.v1.CodeInfoResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.dataHash.length !== 0) {
      writer.uint32(26).bytes(message.dataHash);
    }
    if (message.instantiatePermission !== void 0) {
      AccessConfig.encode(message.instantiatePermission, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseCodeInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.dataHash = reader.bytes();
          break;
        case 6:
          message.instantiatePermission = AccessConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseCodeInfoResponse();
    message.codeId = object.codeId !== void 0 && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.creator = object.creator ?? "";
    message.dataHash = object.dataHash ?? new Uint8Array();
    message.instantiatePermission = object.instantiatePermission !== void 0 && object.instantiatePermission !== null ? AccessConfig.fromPartial(object.instantiatePermission) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseCodeInfoResponse();
    if (object.code_id !== void 0 && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    if (object.creator !== void 0 && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.data_hash !== void 0 && object.data_hash !== null) {
      message.dataHash = bytesFromBase64(object.data_hash);
    }
    if (object.instantiate_permission !== void 0 && object.instantiate_permission !== null) {
      message.instantiatePermission = AccessConfig.fromAmino(object.instantiate_permission);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.code_id = message.codeId ? message.codeId?.toString() : "0";
    obj.creator = message.creator === "" ? void 0 : message.creator;
    obj.data_hash = message.dataHash ? base64FromBytes(message.dataHash) : void 0;
    obj.instantiate_permission = message.instantiatePermission ? AccessConfig.toAmino(message.instantiatePermission) : AccessConfig.toAmino(AccessConfig.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object) {
    return CodeInfoResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/CodeInfoResponse",
      value: CodeInfoResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return CodeInfoResponse.decode(message.value);
  },
  toProto(message) {
    return CodeInfoResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.CodeInfoResponse",
      value: CodeInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCodeResponse() {
  return {
    codeInfo: void 0,
    data: new Uint8Array()
  };
}
const QueryCodeResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodeResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.codeInfo !== void 0) {
      CodeInfoResponse.encode(message.codeInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryCodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeInfo = CodeInfoResponse.decode(reader, reader.uint32());
          break;
        case 2:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryCodeResponse();
    message.codeInfo = object.codeInfo !== void 0 && object.codeInfo !== null ? CodeInfoResponse.fromPartial(object.codeInfo) : void 0;
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryCodeResponse();
    if (object.code_info !== void 0 && object.code_info !== null) {
      message.codeInfo = CodeInfoResponse.fromAmino(object.code_info);
    }
    if (object.data !== void 0 && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.code_info = message.codeInfo ? CodeInfoResponse.toAmino(message.codeInfo) : void 0;
    obj.data = message.data ? base64FromBytes(message.data) : "";
    return obj;
  },
  fromAminoMsg(object) {
    return QueryCodeResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/QueryCodeResponse",
      value: QueryCodeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryCodeResponse.decode(message.value);
  },
  toProto(message) {
    return QueryCodeResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryCodeResponse",
      value: QueryCodeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCodesRequest() {
  return {
    pagination: void 0
  };
}
const QueryCodesRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodesRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryCodesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryCodesRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryCodesRequest();
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryCodesRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/QueryCodesRequest",
      value: QueryCodesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryCodesRequest.decode(message.value);
  },
  toProto(message) {
    return QueryCodesRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryCodesRequest",
      value: QueryCodesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCodesResponse() {
  return {
    codeInfos: [],
    pagination: void 0
  };
}
const QueryCodesResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryCodesResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.codeInfos) {
      CodeInfoResponse.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryCodesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeInfos.push(CodeInfoResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryCodesResponse();
    message.codeInfos = object.codeInfos?.map((e) => CodeInfoResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryCodesResponse();
    message.codeInfos = object.code_infos?.map((e) => CodeInfoResponse.fromAmino(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.codeInfos) {
      obj.code_infos = message.codeInfos.map((e) => e ? CodeInfoResponse.toAmino(e) : void 0);
    } else {
      obj.code_infos = message.codeInfos;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryCodesResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/QueryCodesResponse",
      value: QueryCodesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryCodesResponse.decode(message.value);
  },
  toProto(message) {
    return QueryCodesResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryCodesResponse",
      value: QueryCodesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPinnedCodesRequest() {
  return {
    pagination: void 0
  };
}
const QueryPinnedCodesRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryPinnedCodesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryPinnedCodesRequest();
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryPinnedCodesRequest();
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryPinnedCodesRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/QueryPinnedCodesRequest",
      value: QueryPinnedCodesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryPinnedCodesRequest.decode(message.value);
  },
  toProto(message) {
    return QueryPinnedCodesRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesRequest",
      value: QueryPinnedCodesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPinnedCodesResponse() {
  return {
    codeIds: [],
    pagination: void 0
  };
}
const QueryPinnedCodesResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesResponse",
  encode(message, writer = BinaryWriter.create()) {
    writer.uint32(10).fork();
    for (const v of message.codeIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryPinnedCodesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.codeIds.push(reader.uint64());
            }
          } else {
            message.codeIds.push(reader.uint64());
          }
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryPinnedCodesResponse();
    message.codeIds = object.codeIds?.map((e) => BigInt(e.toString())) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryPinnedCodesResponse();
    message.codeIds = object.code_ids?.map((e) => BigInt(e)) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.codeIds) {
      obj.code_ids = message.codeIds.map((e) => e.toString());
    } else {
      obj.code_ids = message.codeIds;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryPinnedCodesResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/QueryPinnedCodesResponse",
      value: QueryPinnedCodesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryPinnedCodesResponse.decode(message.value);
  },
  toProto(message) {
    return QueryPinnedCodesResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryPinnedCodesResponse",
      value: QueryPinnedCodesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest() {
  return {};
}
const QueryParamsRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryParamsRequest",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/QueryParamsRequest",
      value: QueryParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message) {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse() {
  return {
    params: Params.fromPartial({})
  };
}
const QueryParamsResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryParamsResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.params !== void 0) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== void 0 && object.params !== null ? Params.fromPartial(object.params) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryParamsResponse();
    if (object.params !== void 0 && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object) {
    return QueryParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/QueryParamsResponse",
      value: QueryParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message) {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryContractsByCreatorRequest() {
  return {
    creatorAddress: "",
    pagination: void 0
  };
}
const QueryContractsByCreatorRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCreatorRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.creatorAddress !== "") {
      writer.uint32(10).string(message.creatorAddress);
    }
    if (message.pagination !== void 0) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsByCreatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creatorAddress = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryContractsByCreatorRequest();
    message.creatorAddress = object.creatorAddress ?? "";
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryContractsByCreatorRequest();
    if (object.creator_address !== void 0 && object.creator_address !== null) {
      message.creatorAddress = object.creator_address;
    }
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.creator_address = message.creatorAddress === "" ? void 0 : message.creatorAddress;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryContractsByCreatorRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/QueryContractsByCreatorRequest",
      value: QueryContractsByCreatorRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryContractsByCreatorRequest.decode(message.value);
  },
  toProto(message) {
    return QueryContractsByCreatorRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCreatorRequest",
      value: QueryContractsByCreatorRequest.encode(message).finish()
    };
  }
};
function createBaseQueryContractsByCreatorResponse() {
  return {
    contractAddresses: [],
    pagination: void 0
  };
}
const QueryContractsByCreatorResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCreatorResponse",
  encode(message, writer = BinaryWriter.create()) {
    for (const v of message.contractAddresses) {
      writer.uint32(10).string(v);
    }
    if (message.pagination !== void 0) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryContractsByCreatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddresses.push(reader.string());
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryContractsByCreatorResponse();
    message.contractAddresses = object.contractAddresses?.map((e) => e) || [];
    message.pagination = object.pagination !== void 0 && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : void 0;
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryContractsByCreatorResponse();
    message.contractAddresses = object.contract_addresses?.map((e) => e) || [];
    if (object.pagination !== void 0 && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    if (message.contractAddresses) {
      obj.contract_addresses = message.contractAddresses.map((e) => e);
    } else {
      obj.contract_addresses = message.contractAddresses;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryContractsByCreatorResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/QueryContractsByCreatorResponse",
      value: QueryContractsByCreatorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryContractsByCreatorResponse.decode(message.value);
  },
  toProto(message) {
    return QueryContractsByCreatorResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryContractsByCreatorResponse",
      value: QueryContractsByCreatorResponse.encode(message).finish()
    };
  }
};
function createBaseQueryWasmLimitsConfigRequest() {
  return {};
}
const QueryWasmLimitsConfigRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryWasmLimitsConfigRequest",
  encode(_, writer = BinaryWriter.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryWasmLimitsConfigRequest();
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
    const message = createBaseQueryWasmLimitsConfigRequest();
    return message;
  },
  fromAmino(_) {
    const message = createBaseQueryWasmLimitsConfigRequest();
    return message;
  },
  toAmino(_) {
    const obj = {};
    return obj;
  },
  fromAminoMsg(object) {
    return QueryWasmLimitsConfigRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/QueryWasmLimitsConfigRequest",
      value: QueryWasmLimitsConfigRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryWasmLimitsConfigRequest.decode(message.value);
  },
  toProto(message) {
    return QueryWasmLimitsConfigRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryWasmLimitsConfigRequest",
      value: QueryWasmLimitsConfigRequest.encode(message).finish()
    };
  }
};
function createBaseQueryWasmLimitsConfigResponse() {
  return {
    config: ""
  };
}
const QueryWasmLimitsConfigResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryWasmLimitsConfigResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.config !== "") {
      writer.uint32(10).string(message.config);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryWasmLimitsConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryWasmLimitsConfigResponse();
    message.config = object.config ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryWasmLimitsConfigResponse();
    if (object.config !== void 0 && object.config !== null) {
      message.config = object.config;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.config = message.config === "" ? void 0 : message.config;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryWasmLimitsConfigResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/QueryWasmLimitsConfigResponse",
      value: QueryWasmLimitsConfigResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryWasmLimitsConfigResponse.decode(message.value);
  },
  toProto(message) {
    return QueryWasmLimitsConfigResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryWasmLimitsConfigResponse",
      value: QueryWasmLimitsConfigResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBuildAddressRequest() {
  return {
    codeHash: "",
    creatorAddress: "",
    salt: "",
    initArgs: new Uint8Array()
  };
}
const QueryBuildAddressRequest = {
  typeUrl: "/cosmwasm.wasm.v1.QueryBuildAddressRequest",
  encode(message, writer = BinaryWriter.create()) {
    if (message.codeHash !== "") {
      writer.uint32(10).string(message.codeHash);
    }
    if (message.creatorAddress !== "") {
      writer.uint32(18).string(message.creatorAddress);
    }
    if (message.salt !== "") {
      writer.uint32(26).string(message.salt);
    }
    if (message.initArgs.length !== 0) {
      writer.uint32(34).bytes(message.initArgs);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryBuildAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeHash = reader.string();
          break;
        case 2:
          message.creatorAddress = reader.string();
          break;
        case 3:
          message.salt = reader.string();
          break;
        case 4:
          message.initArgs = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryBuildAddressRequest();
    message.codeHash = object.codeHash ?? "";
    message.creatorAddress = object.creatorAddress ?? "";
    message.salt = object.salt ?? "";
    message.initArgs = object.initArgs ?? new Uint8Array();
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryBuildAddressRequest();
    if (object.code_hash !== void 0 && object.code_hash !== null) {
      message.codeHash = object.code_hash;
    }
    if (object.creator_address !== void 0 && object.creator_address !== null) {
      message.creatorAddress = object.creator_address;
    }
    if (object.salt !== void 0 && object.salt !== null) {
      message.salt = object.salt;
    }
    if (object.init_args !== void 0 && object.init_args !== null) {
      message.initArgs = bytesFromBase64(object.init_args);
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.code_hash = message.codeHash === "" ? void 0 : message.codeHash;
    obj.creator_address = message.creatorAddress === "" ? void 0 : message.creatorAddress;
    obj.salt = message.salt === "" ? void 0 : message.salt;
    obj.init_args = message.initArgs ? base64FromBytes(message.initArgs) : void 0;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryBuildAddressRequest.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/QueryBuildAddressRequest",
      value: QueryBuildAddressRequest.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryBuildAddressRequest.decode(message.value);
  },
  toProto(message) {
    return QueryBuildAddressRequest.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryBuildAddressRequest",
      value: QueryBuildAddressRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBuildAddressResponse() {
  return {
    address: ""
  };
}
const QueryBuildAddressResponse = {
  typeUrl: "/cosmwasm.wasm.v1.QueryBuildAddressResponse",
  encode(message, writer = BinaryWriter.create()) {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseQueryBuildAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object) {
    const message = createBaseQueryBuildAddressResponse();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object) {
    const message = createBaseQueryBuildAddressResponse();
    if (object.address !== void 0 && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message) {
    const obj = {};
    obj.address = message.address === "" ? void 0 : message.address;
    return obj;
  },
  fromAminoMsg(object) {
    return QueryBuildAddressResponse.fromAmino(object.value);
  },
  toAminoMsg(message) {
    return {
      type: "wasm/QueryBuildAddressResponse",
      value: QueryBuildAddressResponse.toAmino(message)
    };
  },
  fromProtoMsg(message) {
    return QueryBuildAddressResponse.decode(message.value);
  },
  toProto(message) {
    return QueryBuildAddressResponse.encode(message).finish();
  },
  toProtoMsg(message) {
    return {
      typeUrl: "/cosmwasm.wasm.v1.QueryBuildAddressResponse",
      value: QueryBuildAddressResponse.encode(message).finish()
    };
  }
};
export {
  CodeInfoResponse,
  QueryAllContractStateRequest,
  QueryAllContractStateResponse,
  QueryBuildAddressRequest,
  QueryBuildAddressResponse,
  QueryCodeInfoRequest,
  QueryCodeInfoResponse,
  QueryCodeRequest,
  QueryCodeResponse,
  QueryCodesRequest,
  QueryCodesResponse,
  QueryContractHistoryRequest,
  QueryContractHistoryResponse,
  QueryContractInfoRequest,
  QueryContractInfoResponse,
  QueryContractsByCodeRequest,
  QueryContractsByCodeResponse,
  QueryContractsByCreatorRequest,
  QueryContractsByCreatorResponse,
  QueryParamsRequest,
  QueryParamsResponse,
  QueryPinnedCodesRequest,
  QueryPinnedCodesResponse,
  QueryRawContractStateRequest,
  QueryRawContractStateResponse,
  QuerySmartContractStateRequest,
  QuerySmartContractStateResponse,
  QueryWasmLimitsConfigRequest,
  QueryWasmLimitsConfigResponse
};
