import { BinaryReader, BinaryWriter } from "../../binary";
/**
 * QueryStrdBurnerAddressRequest is the request type for the Query/strdburner
 * RPC method
 */
export interface QueryStrdBurnerAddressRequest {}
export interface QueryStrdBurnerAddressRequestProtoMsg {
  typeUrl: "/stride.strdburner.QueryStrdBurnerAddressRequest";
  value: Uint8Array;
}
/**
 * QueryStrdBurnerAddressRequest is the request type for the Query/strdburner
 * RPC method
 * @name QueryStrdBurnerAddressRequestAmino
 * @package stride.strdburner
 * @see proto type: stride.strdburner.QueryStrdBurnerAddressRequest
 */
export interface QueryStrdBurnerAddressRequestAmino {}
export interface QueryStrdBurnerAddressRequestAminoMsg {
  type: "/stride.strdburner.QueryStrdBurnerAddressRequest";
  value: QueryStrdBurnerAddressRequestAmino;
}
/**
 * QueryStrdBurnerAddressRequest is the request type for the Query/strdburner
 * RPC method
 */
export interface QueryStrdBurnerAddressRequestSDKType {}
/**
 * QueryStrdBurnerAddressResponse is the response type for the Query/strdburner
 * RPC method
 */
export interface QueryStrdBurnerAddressResponse {
  address: string;
}
export interface QueryStrdBurnerAddressResponseProtoMsg {
  typeUrl: "/stride.strdburner.QueryStrdBurnerAddressResponse";
  value: Uint8Array;
}
/**
 * QueryStrdBurnerAddressResponse is the response type for the Query/strdburner
 * RPC method
 * @name QueryStrdBurnerAddressResponseAmino
 * @package stride.strdburner
 * @see proto type: stride.strdburner.QueryStrdBurnerAddressResponse
 */
export interface QueryStrdBurnerAddressResponseAmino {
  address?: string;
}
export interface QueryStrdBurnerAddressResponseAminoMsg {
  type: "/stride.strdburner.QueryStrdBurnerAddressResponse";
  value: QueryStrdBurnerAddressResponseAmino;
}
/**
 * QueryStrdBurnerAddressResponse is the response type for the Query/strdburner
 * RPC method
 */
export interface QueryStrdBurnerAddressResponseSDKType {
  address: string;
}
/**
 * QueryTotalStrdBurnedRequest is the request type for the Query/strdburner
 * RPC method
 */
export interface QueryTotalStrdBurnedRequest {}
export interface QueryTotalStrdBurnedRequestProtoMsg {
  typeUrl: "/stride.strdburner.QueryTotalStrdBurnedRequest";
  value: Uint8Array;
}
/**
 * QueryTotalStrdBurnedRequest is the request type for the Query/strdburner
 * RPC method
 * @name QueryTotalStrdBurnedRequestAmino
 * @package stride.strdburner
 * @see proto type: stride.strdburner.QueryTotalStrdBurnedRequest
 */
export interface QueryTotalStrdBurnedRequestAmino {}
export interface QueryTotalStrdBurnedRequestAminoMsg {
  type: "/stride.strdburner.QueryTotalStrdBurnedRequest";
  value: QueryTotalStrdBurnedRequestAmino;
}
/**
 * QueryTotalStrdBurnedRequest is the request type for the Query/strdburner
 * RPC method
 */
export interface QueryTotalStrdBurnedRequestSDKType {}
/**
 * QueryTotalStrdBurnedResponse is the response type for the Query/strdburner
 * RPC method
 */
export interface QueryTotalStrdBurnedResponse {
  totalBurned: string;
}
export interface QueryTotalStrdBurnedResponseProtoMsg {
  typeUrl: "/stride.strdburner.QueryTotalStrdBurnedResponse";
  value: Uint8Array;
}
/**
 * QueryTotalStrdBurnedResponse is the response type for the Query/strdburner
 * RPC method
 * @name QueryTotalStrdBurnedResponseAmino
 * @package stride.strdburner
 * @see proto type: stride.strdburner.QueryTotalStrdBurnedResponse
 */
export interface QueryTotalStrdBurnedResponseAmino {
  total_burned?: string;
}
export interface QueryTotalStrdBurnedResponseAminoMsg {
  type: "/stride.strdburner.QueryTotalStrdBurnedResponse";
  value: QueryTotalStrdBurnedResponseAmino;
}
/**
 * QueryTotalStrdBurnedResponse is the response type for the Query/strdburner
 * RPC method
 */
export interface QueryTotalStrdBurnedResponseSDKType {
  total_burned: string;
}
function createBaseQueryStrdBurnerAddressRequest(): QueryStrdBurnerAddressRequest {
  return {};
}
export const QueryStrdBurnerAddressRequest = {
  typeUrl: "/stride.strdburner.QueryStrdBurnerAddressRequest",
  encode(_: QueryStrdBurnerAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStrdBurnerAddressRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStrdBurnerAddressRequest();
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
  fromPartial(_: Partial<QueryStrdBurnerAddressRequest>): QueryStrdBurnerAddressRequest {
    const message = createBaseQueryStrdBurnerAddressRequest();
    return message;
  },
  fromAmino(_: QueryStrdBurnerAddressRequestAmino): QueryStrdBurnerAddressRequest {
    const message = createBaseQueryStrdBurnerAddressRequest();
    return message;
  },
  toAmino(_: QueryStrdBurnerAddressRequest): QueryStrdBurnerAddressRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryStrdBurnerAddressRequestAminoMsg): QueryStrdBurnerAddressRequest {
    return QueryStrdBurnerAddressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStrdBurnerAddressRequestProtoMsg): QueryStrdBurnerAddressRequest {
    return QueryStrdBurnerAddressRequest.decode(message.value);
  },
  toProto(message: QueryStrdBurnerAddressRequest): Uint8Array {
    return QueryStrdBurnerAddressRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStrdBurnerAddressRequest): QueryStrdBurnerAddressRequestProtoMsg {
    return {
      typeUrl: "/stride.strdburner.QueryStrdBurnerAddressRequest",
      value: QueryStrdBurnerAddressRequest.encode(message).finish()
    };
  }
};
function createBaseQueryStrdBurnerAddressResponse(): QueryStrdBurnerAddressResponse {
  return {
    address: ""
  };
}
export const QueryStrdBurnerAddressResponse = {
  typeUrl: "/stride.strdburner.QueryStrdBurnerAddressResponse",
  encode(message: QueryStrdBurnerAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStrdBurnerAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStrdBurnerAddressResponse();
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
  fromPartial(object: Partial<QueryStrdBurnerAddressResponse>): QueryStrdBurnerAddressResponse {
    const message = createBaseQueryStrdBurnerAddressResponse();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryStrdBurnerAddressResponseAmino): QueryStrdBurnerAddressResponse {
    const message = createBaseQueryStrdBurnerAddressResponse();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryStrdBurnerAddressResponse): QueryStrdBurnerAddressResponseAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryStrdBurnerAddressResponseAminoMsg): QueryStrdBurnerAddressResponse {
    return QueryStrdBurnerAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStrdBurnerAddressResponseProtoMsg): QueryStrdBurnerAddressResponse {
    return QueryStrdBurnerAddressResponse.decode(message.value);
  },
  toProto(message: QueryStrdBurnerAddressResponse): Uint8Array {
    return QueryStrdBurnerAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStrdBurnerAddressResponse): QueryStrdBurnerAddressResponseProtoMsg {
    return {
      typeUrl: "/stride.strdburner.QueryStrdBurnerAddressResponse",
      value: QueryStrdBurnerAddressResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalStrdBurnedRequest(): QueryTotalStrdBurnedRequest {
  return {};
}
export const QueryTotalStrdBurnedRequest = {
  typeUrl: "/stride.strdburner.QueryTotalStrdBurnedRequest",
  encode(_: QueryTotalStrdBurnedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalStrdBurnedRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalStrdBurnedRequest();
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
  fromPartial(_: Partial<QueryTotalStrdBurnedRequest>): QueryTotalStrdBurnedRequest {
    const message = createBaseQueryTotalStrdBurnedRequest();
    return message;
  },
  fromAmino(_: QueryTotalStrdBurnedRequestAmino): QueryTotalStrdBurnedRequest {
    const message = createBaseQueryTotalStrdBurnedRequest();
    return message;
  },
  toAmino(_: QueryTotalStrdBurnedRequest): QueryTotalStrdBurnedRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTotalStrdBurnedRequestAminoMsg): QueryTotalStrdBurnedRequest {
    return QueryTotalStrdBurnedRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalStrdBurnedRequestProtoMsg): QueryTotalStrdBurnedRequest {
    return QueryTotalStrdBurnedRequest.decode(message.value);
  },
  toProto(message: QueryTotalStrdBurnedRequest): Uint8Array {
    return QueryTotalStrdBurnedRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalStrdBurnedRequest): QueryTotalStrdBurnedRequestProtoMsg {
    return {
      typeUrl: "/stride.strdburner.QueryTotalStrdBurnedRequest",
      value: QueryTotalStrdBurnedRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTotalStrdBurnedResponse(): QueryTotalStrdBurnedResponse {
  return {
    totalBurned: ""
  };
}
export const QueryTotalStrdBurnedResponse = {
  typeUrl: "/stride.strdburner.QueryTotalStrdBurnedResponse",
  encode(message: QueryTotalStrdBurnedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalBurned !== "") {
      writer.uint32(10).string(message.totalBurned);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalStrdBurnedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalStrdBurnedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalBurned = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryTotalStrdBurnedResponse>): QueryTotalStrdBurnedResponse {
    const message = createBaseQueryTotalStrdBurnedResponse();
    message.totalBurned = object.totalBurned ?? "";
    return message;
  },
  fromAmino(object: QueryTotalStrdBurnedResponseAmino): QueryTotalStrdBurnedResponse {
    const message = createBaseQueryTotalStrdBurnedResponse();
    if (object.total_burned !== undefined && object.total_burned !== null) {
      message.totalBurned = object.total_burned;
    }
    return message;
  },
  toAmino(message: QueryTotalStrdBurnedResponse): QueryTotalStrdBurnedResponseAmino {
    const obj: any = {};
    obj.total_burned = message.totalBurned === "" ? undefined : message.totalBurned;
    return obj;
  },
  fromAminoMsg(object: QueryTotalStrdBurnedResponseAminoMsg): QueryTotalStrdBurnedResponse {
    return QueryTotalStrdBurnedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalStrdBurnedResponseProtoMsg): QueryTotalStrdBurnedResponse {
    return QueryTotalStrdBurnedResponse.decode(message.value);
  },
  toProto(message: QueryTotalStrdBurnedResponse): Uint8Array {
    return QueryTotalStrdBurnedResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalStrdBurnedResponse): QueryTotalStrdBurnedResponseProtoMsg {
    return {
      typeUrl: "/stride.strdburner.QueryTotalStrdBurnedResponse",
      value: QueryTotalStrdBurnedResponse.encode(message).finish()
    };
  }
};