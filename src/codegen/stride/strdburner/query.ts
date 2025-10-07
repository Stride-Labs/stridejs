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
  protocolBurned: string;
  totalUserBurned: string;
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
  protocol_burned?: string;
  total_user_burned?: string;
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
  protocol_burned: string;
  total_user_burned: string;
}
/**
 * QueryStrdBurnedByAddressRequest is the request type for the Query/strdburner
 * RPC method
 */
export interface QueryStrdBurnedByAddressRequest {
  address: string;
}
export interface QueryStrdBurnedByAddressRequestProtoMsg {
  typeUrl: "/stride.strdburner.QueryStrdBurnedByAddressRequest";
  value: Uint8Array;
}
/**
 * QueryStrdBurnedByAddressRequest is the request type for the Query/strdburner
 * RPC method
 * @name QueryStrdBurnedByAddressRequestAmino
 * @package stride.strdburner
 * @see proto type: stride.strdburner.QueryStrdBurnedByAddressRequest
 */
export interface QueryStrdBurnedByAddressRequestAmino {
  address?: string;
}
export interface QueryStrdBurnedByAddressRequestAminoMsg {
  type: "/stride.strdburner.QueryStrdBurnedByAddressRequest";
  value: QueryStrdBurnedByAddressRequestAmino;
}
/**
 * QueryStrdBurnedByAddressRequest is the request type for the Query/strdburner
 * RPC method
 */
export interface QueryStrdBurnedByAddressRequestSDKType {
  address: string;
}
/**
 * QueryStrdBurnedByAddressResponse is the response type for the
 * Query/strdburner RPC method
 */
export interface QueryStrdBurnedByAddressResponse {
  burnedAmount: string;
}
export interface QueryStrdBurnedByAddressResponseProtoMsg {
  typeUrl: "/stride.strdburner.QueryStrdBurnedByAddressResponse";
  value: Uint8Array;
}
/**
 * QueryStrdBurnedByAddressResponse is the response type for the
 * Query/strdburner RPC method
 * @name QueryStrdBurnedByAddressResponseAmino
 * @package stride.strdburner
 * @see proto type: stride.strdburner.QueryStrdBurnedByAddressResponse
 */
export interface QueryStrdBurnedByAddressResponseAmino {
  burned_amount?: string;
}
export interface QueryStrdBurnedByAddressResponseAminoMsg {
  type: "/stride.strdburner.QueryStrdBurnedByAddressResponse";
  value: QueryStrdBurnedByAddressResponseAmino;
}
/**
 * QueryStrdBurnedByAddressResponse is the response type for the
 * Query/strdburner RPC method
 */
export interface QueryStrdBurnedByAddressResponseSDKType {
  burned_amount: string;
}
/**
 * QueryLinkedAddressRequest is the request type for the Query/strdburner
 * RPC method
 */
export interface QueryLinkedAddressRequest {
  strideAddress: string;
}
export interface QueryLinkedAddressRequestProtoMsg {
  typeUrl: "/stride.strdburner.QueryLinkedAddressRequest";
  value: Uint8Array;
}
/**
 * QueryLinkedAddressRequest is the request type for the Query/strdburner
 * RPC method
 * @name QueryLinkedAddressRequestAmino
 * @package stride.strdburner
 * @see proto type: stride.strdburner.QueryLinkedAddressRequest
 */
export interface QueryLinkedAddressRequestAmino {
  stride_address?: string;
}
export interface QueryLinkedAddressRequestAminoMsg {
  type: "/stride.strdburner.QueryLinkedAddressRequest";
  value: QueryLinkedAddressRequestAmino;
}
/**
 * QueryLinkedAddressRequest is the request type for the Query/strdburner
 * RPC method
 */
export interface QueryLinkedAddressRequestSDKType {
  stride_address: string;
}
/**
 * QueryLinkedAddressResponse is the response type for the
 * Query/strdburner RPC method
 */
export interface QueryLinkedAddressResponse {
  linkedAddress: string;
}
export interface QueryLinkedAddressResponseProtoMsg {
  typeUrl: "/stride.strdburner.QueryLinkedAddressResponse";
  value: Uint8Array;
}
/**
 * QueryLinkedAddressResponse is the response type for the
 * Query/strdburner RPC method
 * @name QueryLinkedAddressResponseAmino
 * @package stride.strdburner
 * @see proto type: stride.strdburner.QueryLinkedAddressResponse
 */
export interface QueryLinkedAddressResponseAmino {
  linked_address?: string;
}
export interface QueryLinkedAddressResponseAminoMsg {
  type: "/stride.strdburner.QueryLinkedAddressResponse";
  value: QueryLinkedAddressResponseAmino;
}
/**
 * QueryLinkedAddressResponse is the response type for the
 * Query/strdburner RPC method
 */
export interface QueryLinkedAddressResponseSDKType {
  linked_address: string;
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
    totalBurned: "",
    protocolBurned: "",
    totalUserBurned: ""
  };
}
export const QueryTotalStrdBurnedResponse = {
  typeUrl: "/stride.strdburner.QueryTotalStrdBurnedResponse",
  encode(message: QueryTotalStrdBurnedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalBurned !== "") {
      writer.uint32(10).string(message.totalBurned);
    }
    if (message.protocolBurned !== "") {
      writer.uint32(18).string(message.protocolBurned);
    }
    if (message.totalUserBurned !== "") {
      writer.uint32(26).string(message.totalUserBurned);
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
        case 2:
          message.protocolBurned = reader.string();
          break;
        case 3:
          message.totalUserBurned = reader.string();
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
    message.protocolBurned = object.protocolBurned ?? "";
    message.totalUserBurned = object.totalUserBurned ?? "";
    return message;
  },
  fromAmino(object: QueryTotalStrdBurnedResponseAmino): QueryTotalStrdBurnedResponse {
    const message = createBaseQueryTotalStrdBurnedResponse();
    if (object.total_burned !== undefined && object.total_burned !== null) {
      message.totalBurned = object.total_burned;
    }
    if (object.protocol_burned !== undefined && object.protocol_burned !== null) {
      message.protocolBurned = object.protocol_burned;
    }
    if (object.total_user_burned !== undefined && object.total_user_burned !== null) {
      message.totalUserBurned = object.total_user_burned;
    }
    return message;
  },
  toAmino(message: QueryTotalStrdBurnedResponse): QueryTotalStrdBurnedResponseAmino {
    const obj: any = {};
    obj.total_burned = message.totalBurned === "" ? undefined : message.totalBurned;
    obj.protocol_burned = message.protocolBurned === "" ? undefined : message.protocolBurned;
    obj.total_user_burned = message.totalUserBurned === "" ? undefined : message.totalUserBurned;
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
function createBaseQueryStrdBurnedByAddressRequest(): QueryStrdBurnedByAddressRequest {
  return {
    address: ""
  };
}
export const QueryStrdBurnedByAddressRequest = {
  typeUrl: "/stride.strdburner.QueryStrdBurnedByAddressRequest",
  encode(message: QueryStrdBurnedByAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStrdBurnedByAddressRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStrdBurnedByAddressRequest();
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
  fromPartial(object: Partial<QueryStrdBurnedByAddressRequest>): QueryStrdBurnedByAddressRequest {
    const message = createBaseQueryStrdBurnedByAddressRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryStrdBurnedByAddressRequestAmino): QueryStrdBurnedByAddressRequest {
    const message = createBaseQueryStrdBurnedByAddressRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryStrdBurnedByAddressRequest): QueryStrdBurnedByAddressRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryStrdBurnedByAddressRequestAminoMsg): QueryStrdBurnedByAddressRequest {
    return QueryStrdBurnedByAddressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStrdBurnedByAddressRequestProtoMsg): QueryStrdBurnedByAddressRequest {
    return QueryStrdBurnedByAddressRequest.decode(message.value);
  },
  toProto(message: QueryStrdBurnedByAddressRequest): Uint8Array {
    return QueryStrdBurnedByAddressRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStrdBurnedByAddressRequest): QueryStrdBurnedByAddressRequestProtoMsg {
    return {
      typeUrl: "/stride.strdburner.QueryStrdBurnedByAddressRequest",
      value: QueryStrdBurnedByAddressRequest.encode(message).finish()
    };
  }
};
function createBaseQueryStrdBurnedByAddressResponse(): QueryStrdBurnedByAddressResponse {
  return {
    burnedAmount: ""
  };
}
export const QueryStrdBurnedByAddressResponse = {
  typeUrl: "/stride.strdburner.QueryStrdBurnedByAddressResponse",
  encode(message: QueryStrdBurnedByAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.burnedAmount !== "") {
      writer.uint32(10).string(message.burnedAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStrdBurnedByAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStrdBurnedByAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.burnedAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryStrdBurnedByAddressResponse>): QueryStrdBurnedByAddressResponse {
    const message = createBaseQueryStrdBurnedByAddressResponse();
    message.burnedAmount = object.burnedAmount ?? "";
    return message;
  },
  fromAmino(object: QueryStrdBurnedByAddressResponseAmino): QueryStrdBurnedByAddressResponse {
    const message = createBaseQueryStrdBurnedByAddressResponse();
    if (object.burned_amount !== undefined && object.burned_amount !== null) {
      message.burnedAmount = object.burned_amount;
    }
    return message;
  },
  toAmino(message: QueryStrdBurnedByAddressResponse): QueryStrdBurnedByAddressResponseAmino {
    const obj: any = {};
    obj.burned_amount = message.burnedAmount === "" ? undefined : message.burnedAmount;
    return obj;
  },
  fromAminoMsg(object: QueryStrdBurnedByAddressResponseAminoMsg): QueryStrdBurnedByAddressResponse {
    return QueryStrdBurnedByAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStrdBurnedByAddressResponseProtoMsg): QueryStrdBurnedByAddressResponse {
    return QueryStrdBurnedByAddressResponse.decode(message.value);
  },
  toProto(message: QueryStrdBurnedByAddressResponse): Uint8Array {
    return QueryStrdBurnedByAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStrdBurnedByAddressResponse): QueryStrdBurnedByAddressResponseProtoMsg {
    return {
      typeUrl: "/stride.strdburner.QueryStrdBurnedByAddressResponse",
      value: QueryStrdBurnedByAddressResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLinkedAddressRequest(): QueryLinkedAddressRequest {
  return {
    strideAddress: ""
  };
}
export const QueryLinkedAddressRequest = {
  typeUrl: "/stride.strdburner.QueryLinkedAddressRequest",
  encode(message: QueryLinkedAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.strideAddress !== "") {
      writer.uint32(10).string(message.strideAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLinkedAddressRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLinkedAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.strideAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryLinkedAddressRequest>): QueryLinkedAddressRequest {
    const message = createBaseQueryLinkedAddressRequest();
    message.strideAddress = object.strideAddress ?? "";
    return message;
  },
  fromAmino(object: QueryLinkedAddressRequestAmino): QueryLinkedAddressRequest {
    const message = createBaseQueryLinkedAddressRequest();
    if (object.stride_address !== undefined && object.stride_address !== null) {
      message.strideAddress = object.stride_address;
    }
    return message;
  },
  toAmino(message: QueryLinkedAddressRequest): QueryLinkedAddressRequestAmino {
    const obj: any = {};
    obj.stride_address = message.strideAddress === "" ? undefined : message.strideAddress;
    return obj;
  },
  fromAminoMsg(object: QueryLinkedAddressRequestAminoMsg): QueryLinkedAddressRequest {
    return QueryLinkedAddressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLinkedAddressRequestProtoMsg): QueryLinkedAddressRequest {
    return QueryLinkedAddressRequest.decode(message.value);
  },
  toProto(message: QueryLinkedAddressRequest): Uint8Array {
    return QueryLinkedAddressRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLinkedAddressRequest): QueryLinkedAddressRequestProtoMsg {
    return {
      typeUrl: "/stride.strdburner.QueryLinkedAddressRequest",
      value: QueryLinkedAddressRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLinkedAddressResponse(): QueryLinkedAddressResponse {
  return {
    linkedAddress: ""
  };
}
export const QueryLinkedAddressResponse = {
  typeUrl: "/stride.strdburner.QueryLinkedAddressResponse",
  encode(message: QueryLinkedAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.linkedAddress !== "") {
      writer.uint32(10).string(message.linkedAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLinkedAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLinkedAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.linkedAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryLinkedAddressResponse>): QueryLinkedAddressResponse {
    const message = createBaseQueryLinkedAddressResponse();
    message.linkedAddress = object.linkedAddress ?? "";
    return message;
  },
  fromAmino(object: QueryLinkedAddressResponseAmino): QueryLinkedAddressResponse {
    const message = createBaseQueryLinkedAddressResponse();
    if (object.linked_address !== undefined && object.linked_address !== null) {
      message.linkedAddress = object.linked_address;
    }
    return message;
  },
  toAmino(message: QueryLinkedAddressResponse): QueryLinkedAddressResponseAmino {
    const obj: any = {};
    obj.linked_address = message.linkedAddress === "" ? undefined : message.linkedAddress;
    return obj;
  },
  fromAminoMsg(object: QueryLinkedAddressResponseAminoMsg): QueryLinkedAddressResponse {
    return QueryLinkedAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLinkedAddressResponseProtoMsg): QueryLinkedAddressResponse {
    return QueryLinkedAddressResponse.decode(message.value);
  },
  toProto(message: QueryLinkedAddressResponse): Uint8Array {
    return QueryLinkedAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLinkedAddressResponse): QueryLinkedAddressResponseProtoMsg {
    return {
      typeUrl: "/stride.strdburner.QueryLinkedAddressResponse",
      value: QueryLinkedAddressResponse.encode(message).finish()
    };
  }
};