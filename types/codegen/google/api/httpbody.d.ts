import { Any, AnyAmino, AnySDKType } from "../protobuf/any";
import { BinaryReader, BinaryWriter } from "../../binary";
/**
 * Message that represents an arbitrary HTTP body. It should only be used for
 * payload formats that can't be represented as JSON, such as raw binary or
 * an HTML page.
 *
 *
 * This message can be used both in streaming and non-streaming API methods in
 * the request as well as the response.
 *
 * It can be used as a top-level request field, which is convenient if one
 * wants to extract parameters from either the URL or HTTP template into the
 * request fields and also want access to the raw HTTP body.
 *
 * Example:
 *
 *     message GetResourceRequest {
 *       // A unique request id.
 *       string request_id = 1;
 *
 *       // The raw HTTP body is bound to this field.
 *       google.api.HttpBody http_body = 2;
 *     }
 *
 *     service ResourceService {
 *       rpc GetResource(GetResourceRequest) returns (google.api.HttpBody);
 *       rpc UpdateResource(google.api.HttpBody) returns
 *       (google.protobuf.Empty);
 *     }
 *
 * Example with streaming methods:
 *
 *     service CaldavService {
 *       rpc GetCalendar(stream google.api.HttpBody)
 *         returns (stream google.api.HttpBody);
 *       rpc UpdateCalendar(stream google.api.HttpBody)
 *         returns (stream google.api.HttpBody);
 *     }
 *
 * Use of this type only changes how the request and response bodies are
 * handled, all other features will continue to work unchanged.
 */
export interface HttpBody {
    /** The HTTP Content-Type header value specifying the content type of the body. */
    contentType: string;
    /** The HTTP request/response body as raw binary. */
    data: Uint8Array;
    /**
     * Application specific response metadata. Must be set in the first response
     * for streaming APIs.
     */
    extensions: Any[];
}
export interface HttpBodyProtoMsg {
    typeUrl: "/google.api.HttpBody";
    value: Uint8Array;
}
/**
 * Message that represents an arbitrary HTTP body. It should only be used for
 * payload formats that can't be represented as JSON, such as raw binary or
 * an HTML page.
 *
 *
 * This message can be used both in streaming and non-streaming API methods in
 * the request as well as the response.
 *
 * It can be used as a top-level request field, which is convenient if one
 * wants to extract parameters from either the URL or HTTP template into the
 * request fields and also want access to the raw HTTP body.
 *
 * Example:
 *
 *     message GetResourceRequest {
 *       // A unique request id.
 *       string request_id = 1;
 *
 *       // The raw HTTP body is bound to this field.
 *       google.api.HttpBody http_body = 2;
 *     }
 *
 *     service ResourceService {
 *       rpc GetResource(GetResourceRequest) returns (google.api.HttpBody);
 *       rpc UpdateResource(google.api.HttpBody) returns
 *       (google.protobuf.Empty);
 *     }
 *
 * Example with streaming methods:
 *
 *     service CaldavService {
 *       rpc GetCalendar(stream google.api.HttpBody)
 *         returns (stream google.api.HttpBody);
 *       rpc UpdateCalendar(stream google.api.HttpBody)
 *         returns (stream google.api.HttpBody);
 *     }
 *
 * Use of this type only changes how the request and response bodies are
 * handled, all other features will continue to work unchanged.
 */
export interface HttpBodyAmino {
    /** The HTTP Content-Type header value specifying the content type of the body. */
    content_type?: string;
    /** The HTTP request/response body as raw binary. */
    data?: string;
    /**
     * Application specific response metadata. Must be set in the first response
     * for streaming APIs.
     */
    extensions?: AnyAmino[];
}
export interface HttpBodyAminoMsg {
    type: "/google.api.HttpBody";
    value: HttpBodyAmino;
}
/**
 * Message that represents an arbitrary HTTP body. It should only be used for
 * payload formats that can't be represented as JSON, such as raw binary or
 * an HTML page.
 *
 *
 * This message can be used both in streaming and non-streaming API methods in
 * the request as well as the response.
 *
 * It can be used as a top-level request field, which is convenient if one
 * wants to extract parameters from either the URL or HTTP template into the
 * request fields and also want access to the raw HTTP body.
 *
 * Example:
 *
 *     message GetResourceRequest {
 *       // A unique request id.
 *       string request_id = 1;
 *
 *       // The raw HTTP body is bound to this field.
 *       google.api.HttpBody http_body = 2;
 *     }
 *
 *     service ResourceService {
 *       rpc GetResource(GetResourceRequest) returns (google.api.HttpBody);
 *       rpc UpdateResource(google.api.HttpBody) returns
 *       (google.protobuf.Empty);
 *     }
 *
 * Example with streaming methods:
 *
 *     service CaldavService {
 *       rpc GetCalendar(stream google.api.HttpBody)
 *         returns (stream google.api.HttpBody);
 *       rpc UpdateCalendar(stream google.api.HttpBody)
 *         returns (stream google.api.HttpBody);
 *     }
 *
 * Use of this type only changes how the request and response bodies are
 * handled, all other features will continue to work unchanged.
 */
export interface HttpBodySDKType {
    content_type: string;
    data: Uint8Array;
    extensions: AnySDKType[];
}
export declare const HttpBody: {
    typeUrl: string;
    encode(message: HttpBody, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): HttpBody;
    fromPartial(object: Partial<HttpBody>): HttpBody;
    fromAmino(object: HttpBodyAmino): HttpBody;
    toAmino(message: HttpBody): HttpBodyAmino;
    fromAminoMsg(object: HttpBodyAminoMsg): HttpBody;
    fromProtoMsg(message: HttpBodyProtoMsg): HttpBody;
    toProto(message: HttpBody): Uint8Array;
    toProtoMsg(message: HttpBody): HttpBodyProtoMsg;
};
