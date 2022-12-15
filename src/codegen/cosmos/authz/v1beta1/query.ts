import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Grant, GrantSDKType } from "./authz";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** QueryGrantsRequest is the request type for the Query/Grants RPC method. */

export interface QueryGrantsRequest {
  granter: string;
  grantee: string;
  /** Optional, msg_type_url, when set, will query only grants matching given msg type. */

  msgTypeUrl: string;
  /** pagination defines an pagination for the request. */

  pagination?: PageRequest;
}
/** QueryGrantsRequest is the request type for the Query/Grants RPC method. */

export interface QueryGrantsRequestSDKType {
  granter: string;
  grantee: string;
  /** Optional, msg_type_url, when set, will query only grants matching given msg type. */

  msg_type_url: string;
  /** pagination defines an pagination for the request. */

  pagination?: PageRequestSDKType;
}
/** QueryGrantsResponse is the response type for the Query/Authorizations RPC method. */

export interface QueryGrantsResponse {
  /** authorizations is a list of grants granted for grantee by granter. */
  grants: Grant[];
  /** pagination defines an pagination for the response. */

  pagination?: PageResponse;
}
/** QueryGrantsResponse is the response type for the Query/Authorizations RPC method. */

export interface QueryGrantsResponseSDKType {
  /** authorizations is a list of grants granted for grantee by granter. */
  grants: GrantSDKType[];
  /** pagination defines an pagination for the response. */

  pagination?: PageResponseSDKType;
}

function createBaseQueryGrantsRequest(): QueryGrantsRequest {
  return {
    granter: "",
    grantee: "",
    msgTypeUrl: "",
    pagination: undefined
  };
}

export const QueryGrantsRequest = {
  encode(message: QueryGrantsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }

    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }

    if (message.msgTypeUrl !== "") {
      writer.uint32(26).string(message.msgTypeUrl);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGrantsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGrantsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;

        case 2:
          message.grantee = reader.string();
          break;

        case 3:
          message.msgTypeUrl = reader.string();
          break;

        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGrantsRequest>): QueryGrantsRequest {
    const message = createBaseQueryGrantsRequest();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.msgTypeUrl = object.msgTypeUrl ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryGrantsResponse(): QueryGrantsResponse {
  return {
    grants: [],
    pagination: undefined
  };
}

export const QueryGrantsResponse = {
  encode(message: QueryGrantsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.grants) {
      Grant.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGrantsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGrantsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.grants.push(Grant.decode(reader, reader.uint32()));
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

  fromPartial(object: DeepPartial<QueryGrantsResponse>): QueryGrantsResponse {
    const message = createBaseQueryGrantsResponse();
    message.grants = object.grants?.map(e => Grant.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};