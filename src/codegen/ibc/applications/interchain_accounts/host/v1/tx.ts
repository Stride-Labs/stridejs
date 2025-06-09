import { QueryRequest, QueryRequestAmino, QueryRequestSDKType } from "./host";
import { BinaryReader, BinaryWriter } from "../../../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../../../helpers";
/** MsgModuleQuerySafe defines the payload for Msg/ModuleQuerySafe */
export interface MsgModuleQuerySafe {
  /** signer address */
  signer: string;
  /** requests defines the module safe queries to execute. */
  requests: QueryRequest[];
}
export interface MsgModuleQuerySafeProtoMsg {
  typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafe";
  value: Uint8Array;
}
/**
 * MsgModuleQuerySafe defines the payload for Msg/ModuleQuerySafe
 * @name MsgModuleQuerySafeAmino
 * @package ibc.applications.interchain_accounts.host.v1
 * @see proto type: ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafe
 */
export interface MsgModuleQuerySafeAmino {
  /**
   * signer address
   */
  signer?: string;
  /**
   * requests defines the module safe queries to execute.
   */
  requests?: QueryRequestAmino[];
}
export interface MsgModuleQuerySafeAminoMsg {
  type: "cosmos-sdk/MsgModuleQuerySafe";
  value: MsgModuleQuerySafeAmino;
}
/** MsgModuleQuerySafe defines the payload for Msg/ModuleQuerySafe */
export interface MsgModuleQuerySafeSDKType {
  signer: string;
  requests: QueryRequestSDKType[];
}
/** MsgModuleQuerySafeResponse defines the response for Msg/ModuleQuerySafe */
export interface MsgModuleQuerySafeResponse {
  /** height at which the responses were queried */
  height: bigint;
  /** protobuf encoded responses for each query */
  responses: Uint8Array[];
}
export interface MsgModuleQuerySafeResponseProtoMsg {
  typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafeResponse";
  value: Uint8Array;
}
/**
 * MsgModuleQuerySafeResponse defines the response for Msg/ModuleQuerySafe
 * @name MsgModuleQuerySafeResponseAmino
 * @package ibc.applications.interchain_accounts.host.v1
 * @see proto type: ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafeResponse
 */
export interface MsgModuleQuerySafeResponseAmino {
  /**
   * height at which the responses were queried
   */
  height?: string;
  /**
   * protobuf encoded responses for each query
   */
  responses?: string[];
}
export interface MsgModuleQuerySafeResponseAminoMsg {
  type: "cosmos-sdk/MsgModuleQuerySafeResponse";
  value: MsgModuleQuerySafeResponseAmino;
}
/** MsgModuleQuerySafeResponse defines the response for Msg/ModuleQuerySafe */
export interface MsgModuleQuerySafeResponseSDKType {
  height: bigint;
  responses: Uint8Array[];
}
function createBaseMsgModuleQuerySafe(): MsgModuleQuerySafe {
  return {
    signer: "",
    requests: []
  };
}
export const MsgModuleQuerySafe = {
  typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafe",
  encode(message: MsgModuleQuerySafe, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    for (const v of message.requests) {
      QueryRequest.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgModuleQuerySafe {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgModuleQuerySafe();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.requests.push(QueryRequest.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgModuleQuerySafe>): MsgModuleQuerySafe {
    const message = createBaseMsgModuleQuerySafe();
    message.signer = object.signer ?? "";
    message.requests = object.requests?.map(e => QueryRequest.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgModuleQuerySafeAmino): MsgModuleQuerySafe {
    const message = createBaseMsgModuleQuerySafe();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    message.requests = object.requests?.map(e => QueryRequest.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgModuleQuerySafe): MsgModuleQuerySafeAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    if (message.requests) {
      obj.requests = message.requests.map(e => e ? QueryRequest.toAmino(e) : undefined);
    } else {
      obj.requests = message.requests;
    }
    return obj;
  },
  fromAminoMsg(object: MsgModuleQuerySafeAminoMsg): MsgModuleQuerySafe {
    return MsgModuleQuerySafe.fromAmino(object.value);
  },
  toAminoMsg(message: MsgModuleQuerySafe): MsgModuleQuerySafeAminoMsg {
    return {
      type: "cosmos-sdk/MsgModuleQuerySafe",
      value: MsgModuleQuerySafe.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgModuleQuerySafeProtoMsg): MsgModuleQuerySafe {
    return MsgModuleQuerySafe.decode(message.value);
  },
  toProto(message: MsgModuleQuerySafe): Uint8Array {
    return MsgModuleQuerySafe.encode(message).finish();
  },
  toProtoMsg(message: MsgModuleQuerySafe): MsgModuleQuerySafeProtoMsg {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafe",
      value: MsgModuleQuerySafe.encode(message).finish()
    };
  }
};
function createBaseMsgModuleQuerySafeResponse(): MsgModuleQuerySafeResponse {
  return {
    height: BigInt(0),
    responses: []
  };
}
export const MsgModuleQuerySafeResponse = {
  typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafeResponse",
  encode(message: MsgModuleQuerySafeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).uint64(message.height);
    }
    for (const v of message.responses) {
      writer.uint32(18).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgModuleQuerySafeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgModuleQuerySafeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
          break;
        case 2:
          message.responses.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgModuleQuerySafeResponse>): MsgModuleQuerySafeResponse {
    const message = createBaseMsgModuleQuerySafeResponse();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.responses = object.responses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgModuleQuerySafeResponseAmino): MsgModuleQuerySafeResponse {
    const message = createBaseMsgModuleQuerySafeResponse();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    message.responses = object.responses?.map(e => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: MsgModuleQuerySafeResponse): MsgModuleQuerySafeResponseAmino {
    const obj: any = {};
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    if (message.responses) {
      obj.responses = message.responses.map(e => base64FromBytes(e));
    } else {
      obj.responses = message.responses;
    }
    return obj;
  },
  fromAminoMsg(object: MsgModuleQuerySafeResponseAminoMsg): MsgModuleQuerySafeResponse {
    return MsgModuleQuerySafeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgModuleQuerySafeResponse): MsgModuleQuerySafeResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgModuleQuerySafeResponse",
      value: MsgModuleQuerySafeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgModuleQuerySafeResponseProtoMsg): MsgModuleQuerySafeResponse {
    return MsgModuleQuerySafeResponse.decode(message.value);
  },
  toProto(message: MsgModuleQuerySafeResponse): Uint8Array {
    return MsgModuleQuerySafeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgModuleQuerySafeResponse): MsgModuleQuerySafeResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafeResponse",
      value: MsgModuleQuerySafeResponse.encode(message).finish()
    };
  }
};